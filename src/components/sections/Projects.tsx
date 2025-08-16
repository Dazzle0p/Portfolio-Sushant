import { motion } from "framer-motion";
import { useState } from "react";
import gamepulseimg from "../../assest/GamePulseHero.png";
import vastramHeroimg from "../../assest/vastramHeroimg.png";
import aiChatimg from "../../assest/gemini-clone.png";
import { PlayCircle } from "lucide-react";

const projects = [
  {
    title: "GamePulse",
    tags: ["MERN", "TailWind", "Youtube Data Api", "Meta Api"],
    image: gamepulseimg,
    url: "https://gamepulse-in.vercel.app/",
  },
  {
    title: "Vastram E-Com",
    tags: [
      "MERN",
      "Redux Toolkit",
      "Rest Api",
      "PayPal Api",
      "Cloudinary",
      "Bcrypt.Js",
      "JWT",
    ],
    image: vastramHeroimg,
    url: "https://vastramm.vercel.app/",
  },
  {
    title: "Ai ChatBot",
    tags: ["React", "Google Gemini Api", "Java Script"],
    image: aiChatimg,
    url: "https://gemini-clone-six-jet.vercel.app/",
  },
];

const ProjectCard = ({ p }) => {
  const [t, setT] = useState({ x: 0, y: 0 });

  const onMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    setT({ x, y });
  };

  return (
    <motion.article
      onMouseMove={onMove}
      onMouseLeave={() => setT({ x: 0, y: 0 })}
      style={{
        transform: `perspective(900px) rotateX(${t.y * -6}deg) rotateY(${
          t.x * 6
        }deg)`,
      }}
      className="group glass-base rounded-2xl p-4 transition-transform shadow-glow hover:shadow-glow-strong"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative overflow-hidden rounded-xl aspect-[16/10] mb-4 bg-gradient-surface">
        <motion.img
          src={p.image}
          alt={`${p.title} project screenshot`}
          className="h-full w-full object-cover"
          initial={{ clipPath: "inset(0 0 100% 0 round 12px)" }}
          whileInView={{ clipPath: "inset(0 0 0% 0 round 12px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </div>
      <h3 className="text-lg flex justify-between font-semibold mb-2">
        <span>{p.title}</span>
        <a
          href={p.url}
          className="flex p-1 items-center gap-2 border rounded-md shadow-glow-strong"
        >
          <PlayCircle className="w-5 h-5" />
          Live
        </a>
      </h3>
      <div className="flex flex-wrap gap-2">
        {p.tags.map((t, i) => (
          <motion.span
            key={t}
            className="text-xs px-2 py-1 rounded-full bg-secondary/60"
            initial={{ y: 8, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
          >
            {t}
          </motion.span>
        ))}
      </div>
    </motion.article>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-24">
      <div className="container">
        <div className="flex items-end justify-between mb-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            Projects — From Idea to Impact
          </h2>
          <a href="#contact" className="story-link text-sm">
            Let’s collaborate
          </a>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.title} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
