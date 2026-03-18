<div align="center">
  <h1>🛍️ ShopStyle</h1>
  <p>A modern, high-performance e-commerce storefront built with Next.js.</p>
  
  [![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-success?style=for-the-badge&logo=vercel)](https://shop-style-lilac.vercel.app/)
</div>

---

## 📖 Project Overview

**ShopStyle** is a cutting-edge e-commerce web application designed to deliver a seamless shopping experience. It features a responsive, beautifully crafted interface, robust filtering, and secure user management, providing users with swift navigation and instantaneous feedback across the entire storefront.

## 🛠️ Tech Stack

This project is built using modern technologies and tools:

- ![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white) - React Framework for Server-Side Rendering & Routing
- ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white) - Utility-First CSS Framework for styling
- ![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-000000?style=for-the-badge&logo=shadcnui&logoColor=white) - Reusable, accessible UI components
- ![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white) - Next-generation Node.js and TypeScript ORM
- ![TanStack Query](https://img.shields.io/badge/TanStack_Query-FF4154?style=for-the-badge&logo=reactquery&logoColor=white) - Asynchronous state management, caching, and data fetching

## ✨ Features

- **Product Pagination**: Smooth and efficient browsing of large product catalogs.
- **Authentication**: Secure user registration and login flows.
- **Sidebar Filtering**: Dynamic and debounced product filtering by search queries, categories, and price ranges.
- **Responsive Design**: Flawlessly optimized layout across all devices (Desktop, Tablet, Mobile).

## 🔌 API Reference

ShopStyle integrates with the **Platzi Fake Store API** as its primary data source for remote e-commerce data.

- **Documentation**: [Platzi Fake Store API](https://fakeapi.platzi.com/en/rest/products/)
- **Usage**: Relies on RESTful endpoints for rendering product listings and product details.

## 🚀 Setup Instructions

Follow these steps to set up the project locally on your machine.

### 1. Install Dependencies

Make sure you have Node.js installed, then run:

```bash
npm install
```

### 2. Environment Variables Setup

Create a `.env` file in the root directory of the project and configure the following required environment variables:

```env
# Database connection string for Prisma
DATABASE_URL="your_database_connection_string"

# Secret key for signing JWT tokens
JWT_SECRET="your_secure_jwt_secret"
```

_(Note: Replace the placeholder values with your actual secrets before running the app. Do not commit your `.env` file to version control.)_

### 3. Start Development Server

Boot up the local development environment:

```bash
npm run dev
```

Navigate to [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## 🌐 Deployment

The application is deployed and optimized for production on Vercel.

**🔗 Live Demo**: [https://shop-style-lilac.vercel.app/](https://shop-style-lilac.vercel.app/)
