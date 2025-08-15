import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

const ParallaxCard = ({ children }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rx = useSpring(useTransform(y, [-50, 50], [8, -8]), { stiffness: 150, damping: 12 });
  const ry = useSpring(useTransform(x, [-50, 50], [-8, 8]), { stiffness: 150, damping: 12 });

  const onMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);
    x.set(Math.max(-50, Math.min(50, dx)));
    y.set(Math.max(-50, Math.min(50, dy)));
  };

  const onLeave = () => {
    x.set(0); y.set(0);
  };

  return (
    <motion.div
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
      className="glass-base rounded-2xl p-6 shadow-glow"
    >
      {children}
    </motion.div>
  );
};

const Hero = () => {
  useEffect(() => {
    document.title = "Glassmorphism Animated Portfolio | Creative Developer";
  }, []);

  return (
    <header className="relative overflow-hidden pt-24 pb-24">
      {/* Background gradient blobs */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 1.2 }}
      >
        <div className="absolute -top-24 -left-24 h-[480px] w-[480px] rounded-full blur-3xl"
             style={{ background: "radial-gradient(600px circle at 30% 30%, hsl(190 95% 42% / .25), transparent 60%)" }} />
        <div className="absolute -bottom-24 -right-24 h-[520px] w-[520px] rounded-full blur-3xl"
             style={{ background: "radial-gradient(600px circle at 70% 70%, hsl(265 85% 62% / .25), transparent 60%)" }} />
      </motion.div>

      <div className="container relative z-10">
        <div className="mx-auto max-w-5xl text-center">
          <motion.h1
            className="font-display text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6 animate-shine"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{
              backgroundImage: "linear-gradient(90deg, hsl(0 0% 100%), hsl(0 0% 100% / .5), hsl(0 0% 100%))",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              backgroundSize: "200% auto",
            }}
          >
            I’m not just a coder, I’m a creator.
          </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          High-end, cinematic portfolio crafted with glassmorphism, layered motion, and storytelling.
        </motion.p>

        <motion.div
          className="mx-auto grid max-w-4xl grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {[
            { title: "Motion", desc: "Framer Motion + GSAP", badge: "Depth" },
            { title: "Design", desc: "Glassmorphism Aesthetic", badge: "Glass" },
            { title: "Craft", desc: "Micro-interactions", badge: "Delight" },
          ].map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              <ParallaxCard>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm uppercase tracking-wide text-muted-foreground">{c.badge}</span>
                </div>
                <h3 className="text-xl font-semibold mb-1">{c.title}</h3>
                <p className="text-sm text-muted-foreground">{c.desc}</p>
              </ParallaxCard>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="flex items-center justify-center gap-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Button variant="hero" size="lg">Explore Projects</Button>
          <Button variant="glass" size="lg">Get in Touch</Button>
        </motion.div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
