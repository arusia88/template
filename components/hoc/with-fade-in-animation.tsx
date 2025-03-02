"use client";

import { motion } from 'framer-motion';
import { FC, ComponentType } from 'react';

export const fadeInAnimationVariants = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  },
  item: {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }
};

interface WithFadeInAnimationProps {
  className?: string;
}

export const AnimatedItem = motion.div;

export function withFadeInAnimation<P extends object>(
  WrappedComponent: ComponentType<P>
) {
  return function WithFadeInAnimationComponent(props: P & WithFadeInAnimationProps) {
    const { className, ...rest } = props;

    return (
      <motion.div
        className={className}
        variants={fadeInAnimationVariants.container}
        initial="hidden"
        animate="visible"
      >
        <WrappedComponent {...rest as P} />
      </motion.div>
    );
  };
} 