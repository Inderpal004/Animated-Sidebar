import React from 'react';
import './Item.css';
import { motion } from 'framer-motion';

export default function Item({ icon, name,open }) {
  const itemVariants = {
    hover: {
      backgroundColor: "rgba(255,255,255,0.3)",
      boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
      backdropFilter: "blur(5.5px)",
      WebkitBackdropFilter: "blur(5.5px)",
      border: "1px solid rgba(255,255,255,0.18)",
      cursor: "pointer",
    },
    initial: {
      backgroundColor: "rgba(0,0,0,0)",
      backdropFilter: "none",
    },
  };

  return (
    <motion.div
      className='item'
      whileHover="hover"
      initial="initial"
      animate="initial"
      variants={itemVariants}
      transition={{
        duration: 0.2,
        ease: "easeInOut",
      }}
    >
      <motion.div className="icon">{icon}</motion.div>
      <motion.span
        style={{
          opacity: open ? 1 : 0,
          display: open ? 'block' : 'none',
        }}
      >
        {name}
      </motion.span>
    </motion.div>
  );
}
