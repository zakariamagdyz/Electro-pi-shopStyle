import { jwtVerify } from "jose";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

// Define the proxy middleware for route protection (Next.js 16 style)
export async function proxy(req: NextRequest) {
  const token = req.cookies.get("token")?.value;

  // Define protected routes that require authentication
  const protectedRoutes = ["/dashboard", "/profile"];

  const isProtectedRoute = protectedRoutes.some((route) =>
    req.nextUrl.pathname.startsWith(route),
  );

  // Verify JWT using 'jose' if token exists
  let isValid = false;

  if (token) {
    try {
      const secret = new TextEncoder().encode(
        process.env.JWT_SECRET || "secret_fallback",
      );
      await jwtVerify(token, secret);
      isValid = true;
    } catch (error) {
      console.error("JWT verification failed in Edge middleware:", error);
      isValid = false;
    }
  }

  if (isProtectedRoute && !isValid) {
    const loginUrl = new URL("/login", req.url);
    loginUrl.searchParams.set("callbackUrl", req.nextUrl.pathname);
    return NextResponse.redirect(loginUrl);
  }

  // Define auth routes (login, register) where logged in users shouldn't visit
  const authRoutes = ["/login", "/register"];
  const isAuthRoute = authRoutes.some((route) =>
    req.nextUrl.pathname.startsWith(route),
  );

  if (isAuthRoute && isValid) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}

// For Next.js to run it as middleware
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
