import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { message: "Email and password are required" },
        { status: 400 },
      );
    }

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      // Return a generic response for security to prevent email enumeration
      return NextResponse.json(
        { message: "Invalid credentials" },
        { status: 401 },
      );
    }

    // Security Measure: Password Re-hashing & Compare
    // Bcrypt compare checks the raw password against the hashed string (which includes the salt).
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return NextResponse.json(
        { message: "Invalid credentials" },
        { status: 401 },
      );
    }

    // Generate JWT Token mapping user ID
    const token = jwt.sign(
      { id: user.id },
      process.env.JWT_SECRET || "secret_fallback",
      { expiresIn: "3d" },
    );

    const cookieStore = await cookies();

    cookieStore.set({
      name: "token",
      value: token,
      httpOnly: true, // Prevents JavaScript from reading the cookie
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax", // CSRF protection
      maxAge: 60 * 60 * 24 * 3, // 3 days in seconds
      path: "/", // Available everywhere in the app
    });

    return NextResponse.json(
      {
        message: "Login successful",
        user: { id: user.id, name: user.name, email: user.email },
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 },
    );
  }
}
