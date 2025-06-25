"use client";

import { motion, Variants } from "motion/react";

function LoadingThreeDotsJumping() {
  const dotVariants = {
    jump: {
      y: -30,
      transition: {
        duration: 0.8,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="flex items-center justify-center min-h-screen text-center">
      <motion.div
        animate="jump"
        transition={{ staggerChildren: -0.2, staggerDirection: -1 }}
        className="flex gap-2"
      >
        <motion.div className="dot" variants={dotVariants} />
        <motion.div className="dot" variants={dotVariants} />
        <motion.div className="dot" variants={dotVariants} />
        <StyleSheet />
      </motion.div>
    </div>
  );
}

function StyleSheet() {
  return (
    <style>
      {`
            .container {
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 10px;
            }

            .dot {
                width: 20px;
                height: 20px;
                border-radius: 50%;
                background-color: #ff0088;
                will-change: transform;
            }
            `}
    </style>
  );
}

export default LoadingThreeDotsJumping;
