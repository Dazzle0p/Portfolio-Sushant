import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { Code, Rocket, Lightbulb } from "lucide-react";

interface LoadingProps {
  onComplete?: () => void;
}

const Loading = ({ onComplete }: LoadingProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => onComplete?.(), 1000);
          return 100;
        }
        return prev + Math.random() * 3;
      });
    }, 100);

    return () => clearInterval(timer);
  }, [onComplete]);

  const glitchVariants = {
    initial: { x: 0 },
    animate: {
      x: [-2, 2, -1, 1, 0],
      transition: {
        duration: 0.5,
        repeat: Infinity,
        repeatDelay: 2,
      },
    },
  };

  const floatingVariants = {
    initial: { y: 0 },
    animate: {
      y: [-10, 10, -5, 5, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/20 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="text-center space-y-8 z-10">
        {/* Main title with glitch effect */}
        <motion.div
          variants={glitchVariants}
          initial="initial"
          animate="animate"
          className="relative"
        >
          <h1 className="text-4xl md:text-6xl font-display font-black tracking-wider">
            <span className="relative inline-block">
              UNDER CONSTRUCTION
              {/* Glitch layers */}
              <span
                className="absolute inset-0 text-primary opacity-70 animate-pulse"
                style={{ clipPath: "polygon(0 0, 100% 0, 100% 45%, 0 45%)" }}
              >
                UNDER CONSTRUCTION
              </span>
              <span
                className="absolute inset-0 text-accent opacity-50"
                style={{
                  clipPath: "polygon(0 60%, 100% 60%, 100% 100%, 0 100%)",
                  transform: "translate(2px, 0)",
                }}
              >
                UNDER CONSTRUCTION
              </span>
            </span>
          </h1>
        </motion.div>

        {/* Progress bar */}
        <div className="w-80 mx-auto space-y-4">
          <div className="glass-base rounded-full h-2 overflow-hidden shadow-glow">
            <motion.div
              className="h-full bg-gradient-primary rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </div>
          <motion.p
            className="text-muted-foreground text-sm font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            BUILDING PORTFOLIO... {Math.round(progress)}%
          </motion.p>
        </div>

        {/* Subtitle */}
        <motion.p
          className="text-lg text-muted-foreground max-w-md mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          Something amazing is in the works....
        </motion.p>

        {/* Floating icons */}
        <motion.div
          className="flex items-center justify-center space-x-8 pt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.div
            variants={floatingVariants}
            initial="initial"
            animate="animate"
            className="glass-base p-3 rounded-full shadow-glow"
          >
            <Rocket className="w-6 h-6 text-primary" />
          </motion.div>
          <motion.div
            variants={floatingVariants}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.5 }}
            className="glass-base p-3 rounded-full shadow-glow"
          >
            <Code className="w-6 h-6 text-accent" />
          </motion.div>
          <motion.div
            variants={floatingVariants}
            initial="initial"
            animate="animate"
            transition={{ delay: 1 }}
            className="glass-base p-3 rounded-full shadow-glow"
          >
            <Lightbulb className="w-6 h-6 text-primary" />
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <motion.p
          className="text-xs text-muted-foreground/60 pt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          © {new Date().getFullYear()} | Sushant Jha
        </motion.p>
      </div>

      {/* Subtle glow effect */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent pointer-events-none" />
    </motion.div>
  );
};

export default Loading;
