import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
const app = express()

// CORS configuration
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

// JSON data (API)
app.use(express.json({ limit: "16kb" }));

// Form data
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

// Static files
app.use(express.static("public"));

// Cookies
app.use(cookieParser());

export {app}