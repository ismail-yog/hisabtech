# Hisabtech Accounting - Full-Stack Website

This is a production-ready full-stack website for a professional accounting and bookkeeping firm operating in Saudi Arabia. 

## Tech Stack
- **Frontend:** React (Vite), Tailwind CSS (v4), Framer Motion, React Router DOM
- **Backend:** Node.js, Express, MongoDB (Mongoose), Nodemailer, JWT
- **Design:** Modern, corporate B2B aesthetic (Navy/Gold/White) with smooth micro-animations.

## Project Structure
- `/client` - The Vite + React frontend application.
- `/server` - The Node.js + Express backend application.

## Prerequisites
- Node.js (v18+)
- MongoDB (Local instance or Atlas URI)

## Setup Instructions

### 1. Backend Setup
1. Open a terminal and navigate to the `server` directory:
   ```bash
   cd server
   ```
2. Install dependencies (already done if using the provided setup):
   ```bash
   npm install
   ```
3. Copy the environment variables template and configure it:
   ```bash
   cp ../.env.example .env
   ```
   *Make sure MongoDB is running locally, or update the `MONGO_URI` to point to your cloud instance.*
4. Start the backend development server:
   ```bash
   npm run dev
   ```
   *The server will run on http://localhost:5000*

### 2. Frontend Setup
1. Open a new terminal window and navigate to the `client` directory:
   ```bash
   cd client
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Vite development server:
   ```bash
   npm run dev
   ```
   *The frontend will run on http://localhost:5173*

## Features
- **Dynamic Services Routing:** 14 highly detailed, dynamic service pages built natively.
- **Contact Form with Email:** Submissions are saved to MongoDB and an email is fired via Nodemailer to the admin.
- **Admin Dashboard:** Located at `/admin`. Secured via JWT authentication.
  - **Login:** Use the credentials defined in the `.env` file (e.g. `admin@hisabtech.com.sa` / `adminpassword123`)
  - **Manage Leads:** View, mark as read, delete, and export leads to CSV.
- **Animations:** Fully animated using Framer Motion (scroll reveals, hover micro-interactions).
