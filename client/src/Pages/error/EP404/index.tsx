import React from 'react';
import { motion } from 'framer-motion';

const Error404: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold text-red-500">404 - Not Found</h1>
        <p className="text-gray-600">The page you are looking for doesn't exist.</p>
      </motion.div>
    </div>
  );
};

export default Error404;
