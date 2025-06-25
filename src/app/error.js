"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ErrorPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h1 className="text-6xl font-bold text-green-500 mb-4">404</h1>
        <p className="text-xl text-white mb-2">Oops! Page not found.</p>
        <p className="text-gray-500 mb-6">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-2 text-white bg-green-500 rounded hover:bg-green-600 transition"
        >
          Go Back Home
        </Link>
      </motion.div>
    </div>
  );
}
