"use client";
import React from "react";
import { motion } from "framer-motion";


const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  const slideVariants = {
    initial: {
      x: "100%",
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      tranistion: { duration: 0.5 },
    },
    // exit: {
    //   x: "0%",
    //   opacity: 0,
    //   transition: { duration: 0.5 },
    // },
  };

  return (
    <motion.div
      variants={slideVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      style={{ position: "relative", width: "100%" }}
    >
      {children}
    </motion.div>
  );
};

export default PageWrapper;