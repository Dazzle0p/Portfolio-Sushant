import { motion, useInView } from "framer-motion";
import { useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { useRef } from "react";
import {
  Code,
  Palette,
  Braces,
  Coffee,
  Atom,
  Wind,
  Server,
  Workflow,
  Database,
  Table,
  Cloud,
  Github,
  Layers,
  Zap,
  Cpu,
  Sparkles,
} from "lucide-react";

const skillBadge = [
  { icon: Code, label: "Frontend" },
  { icon: Layers, label: "Backend" },
  { icon: Database, label: "Database" },
  { icon: Cpu, label: "Systems" },
  { icon: Palette, label: "Design" },
  { icon: Sparkles, label: "UX" },
];

const bars = [
  { label: "HTML", value: 92, icon: Code }, // Code icon for HTML
  { label: "CSS", value: 88, icon: Palette }, // Palette icon for styling
  { label: "Java Script", value: 86, icon: Braces }, // Braces icon for JS
  { label: "Java", value: 92, icon: Coffee }, // Coffee icon for Java
  { label: "React", value: 88, icon: Atom }, // Atom icon for React
  { label: "TailWind", value: 86, icon: Wind }, // Wind icon for Tailwind
  { label: "Node", value: 92, icon: Server }, // Server icon for Node.js
  { label: "Express", value: 88, icon: Workflow }, // Workflow icon for Express
  { label: "MongoDb", value: 86, icon: Database }, // Database icon for MongoDB
  { label: "MySql", value: 92, icon: Table }, // Table icon for MySQL
  { label: "Vercel", value: 88, icon: Cloud }, // Cloud icon for hosting
  { label: "Github", value: 86, icon: Github }, // Github icon for version control
];

const CircularSkill = ({ label, value, icon: Icon }) => {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;

  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const controls = useAnimation();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (inView) {
      controls.start({
        strokeDashoffset: circumference - (value / 100) * circumference,
        transition: { duration: 1, ease: "easeOut" },
      });

      let start = 0;
      const interval = setInterval(() => {
        start += 1;
        if (start <= value) {
          setCount(start);
        } else {
          clearInterval(interval);
        }
      }, 15);
    }
  }, [inView]);

  return (
    <motion.div
      ref={ref}
      className="glass-base rounded-xl p-4 flex flex-col items-center"
      variants={{
        hidden: { opacity: 0, scale: 0.8, y: 20 },
        show: {
          opacity: 1,
          scale: 1,
          y: 0,
          transition: { type: "spring", stiffness: 120 },
        },
      }}
      whileHover={{
        scale: 1.05,
        boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)",
      }}
    >
      <div className="relative w-24 h-24">
        <svg className="w-24 h-24 transform -rotate-90">
          {/* Background Circle */}
          <circle
            cx="48"
            cy="48"
            r={radius}
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="6"
            fill="transparent"
          />
          {/* Progress Circle */}
          <motion.circle
            cx="48"
            cy="48"
            r={radius}
            stroke="url(#grad)"
            strokeWidth="6"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={circumference}
            animate={controls}
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#a855f7" />
            </linearGradient>
          </defs>
        </svg>

        {/* Center Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          {Icon && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Icon className="w-5 h-5 text-blue-400 mb-1" />
            </motion.div>
          )}
          <motion.span
            key={count}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="font-semibold text-sm"
          >
            {count}%
          </motion.span>
        </div>
      </div>

      {/* Label */}
      <span className="mt-2 text-sm text-center">{label}</span>
    </motion.div>
  );
};

const Skills = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="skills" className="relative py-24">
      <div className="container">
        <div className="grid gap-12 items-center mb-10">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Skills — Designed to Perform
            </h2>
            <p className="text-muted-foreground mb-8">
              Interactive visual craft meets robust engineering. Hover to feel
              the depth.
            </p>
            <div className="grid grid-cols-3 gap-4">
              {skillBadge.map((s, i) => (
                <motion.div
                  key={s.label}
                  whileHover={{ scale: 1.06, rotate: 2 }}
                  className="glass-base rounded-xl p-4 text-center hover:glass-hover hover-scale"
                >
                  <s.icon className="mx-auto mb-2" />
                  <span className="text-sm">{s.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        {/* Animated Grid with Stagger */}
        <motion.div
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08 } },
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {bars.map((b) => (
            <CircularSkill key={b.label} {...b} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
