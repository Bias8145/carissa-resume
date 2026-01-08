import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../utils';

interface CardStackProps {
  children: React.ReactNode;
  className?: string;
}

export const CardStack: React.FC<CardStackProps> = ({ children, className }) => {
  return (
    <div className={cn("relative w-full h-full [perspective:2000px]", className)}>
      {children}
    </div>
  );
};

interface CardProps {
  isActive: boolean;
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ isActive, children, className }) => {
  return (
    <AnimatePresence mode="wait">
      {isActive && (
        <motion.div
          initial={{ 
            opacity: 0, 
            scale: 0.9, 
            y: 100, 
            rotateX: -15,
            filter: 'blur(10px)'
          }}
          animate={{ 
            opacity: 1, 
            scale: 1, 
            y: 0, 
            rotateX: 0,
            filter: 'blur(0px)',
            zIndex: 10
          }}
          exit={{ 
            opacity: 0, 
            scale: 0.95, 
            y: -50, 
            rotateX: 10,
            filter: 'blur(10px)',
            zIndex: 0
          }}
          transition={{ 
            type: "spring", 
            stiffness: 100, 
            damping: 20,
            mass: 1
          }}
          className={cn(
            "absolute inset-0 w-full h-full overflow-y-auto overflow-x-hidden",
            // Padding bottom ensures content isn't hidden behind navbar. Increased for better spacing.
            "pb-40 md:pb-32 scroll-smooth no-scrollbar", 
            className
          )}
          style={{ 
            transformStyle: 'preserve-3d',
            backfaceVisibility: 'hidden'
          }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
