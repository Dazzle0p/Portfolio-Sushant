import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { InfinityIcon } from "lucide-react";
const ParallaxCard = ({ children, className = "" }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rx = useSpring(useTransform(y, [-50, 50], [8, -8]), {
    stiffness: 150,
    damping: 12,
  });
  const ry = useSpring(useTransform(x, [-50, 50], [-8, 8]), {
    stiffness: 150,
    damping: 12,
  });

  const onMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);
    x.set(Math.max(-50, Math.min(50, dx)));
    y.set(Math.max(-50, Math.min(50, dy)));
  };

  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
      className={`glass-base rounded-2xl shadow-glow ${className}`}
    >
      {children}
    </motion.div>
  );
};

const About = () => {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="about" className="relative overflow-hidden py-24">
      {/* Background Elements */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        <div
          className="absolute top-1/4 -left-32 h-[400px] w-[400px] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(400px circle at 40% 40%, hsl(280 85% 60% / .2), transparent 70%)",
          }}
        />
        <div
          className="absolute top-3/4 -right-32 h-[350px] w-[350px] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(350px circle at 60% 60%, hsl(200 90% 50% / .2), transparent 70%)",
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[300px] w-[300px] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(300px circle at 50% 50%, hsl(320 80% 65% / .15), transparent 70%)",
          }}
        />
      </motion.div>

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 animate-shine"
            style={{
              backgroundImage:
                "linear-gradient(90deg, hsl(0 0% 100%), hsl(0 0% 100% / .6), hsl(0 0% 100%))",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              backgroundSize: "200% auto",
            }}
          >
            My Story
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            viewport={{ once: true }}
          >
            A passionate developer who bridges the gap between design and
            technology
          </motion.p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Story Section */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Story Section */}
            <ParallaxCard className="p-8 h-full">
              <h3 className="text-2xl font-bold mb-6 text-gradient">
                My Journey in Full-Stack Development
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I’m <strong>Sushant Jha</strong>, a final-year B.Tech Computer
                  Science student at Galgotias University with a passion for
                  building complete, end-to-end web applications. My journey
                  started with curiosity about how technology works, which led
                  me to explore both frontend and backend development deeply.
                </p>
                <p>
                  I specialize in the <strong>MERN stack</strong> — creating
                  responsive, user-friendly interfaces with React.js & Tailwind
                  CSS, developing secure and efficient backends using Node.js,
                  Express.js & MongoDB, and integrating third-party APIs like
                  PayPal and Cloudinary to deliver production-ready solutions.
                </p>
                <p>
                  My goal is to join a dynamic team where I can contribute to
                  impactful projects, learn from experienced developers, and
                  grow as a versatile software engineer.
                </p>
              </div>
            </ParallaxCard>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <ParallaxCard className="p-6">
              <h4 className="text-xl font-semibold mb-4">Quick Facts</h4>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex justify-between">
                  <span>Projects Completed</span>
                  <span className="font-medium text-white">10+</span>
                </div>
                <div className="flex justify-between">
                  <span>DSA Problems Solved</span>
                  <span className="font-medium text-white">550+</span>
                </div>
                <div className="flex justify-between">
                  <span>Cold Coffee Consumed</span>
                  <span className="font-medium text-white">
                    <InfinityIcon />
                  </span>
                </div>
              </div>
            </ParallaxCard>

            <ParallaxCard className="p-6">
              <h4 className="text-xl font-semibold mb-4">Currently</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>🚀 Building full-stack projects with MERN stack</p>
                <p>📚 Expanding skills in cloud deployment & scalability</p>
                <p>🤖 Learning AI integrations and advanced APIs</p>
                <p>🔧 Practicing system design & problem-solving</p>
                <p>🎯 Preparing for full-time software developer roles</p>
              </div>
            </ParallaxCard>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Button
              onClick={() => scrollToSection("contact")}
              variant="hero"
              size="lg"
            >
              Start a Project
            </Button>
            <Button variant="glass" size="lg">
              Download Resume
            </Button>
            <Button
              onClick={() => scrollToSection("projects")}
              variant="glass"
              size="lg"
            >
              View Projects
            </Button>
          </div>
        </motion.div>
      </div>

      <style>{`
        .text-gradient {
          background: linear-gradient(135deg, hsl(0 0% 100%), hsl(280 85% 70%));
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .glass-base {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .shadow-glow {
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3),
            0 0 0 1px rgba(255, 255, 255, 0.05);
        }

        @keyframes shine {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 200% 50%;
          }
        }

        .animate-shine {
          animation: shine 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default About;
