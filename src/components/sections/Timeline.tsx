import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const items = [
  { year: "2024", title: "Lead Frontend @ X", desc: "Scaled design system & motion architecture." },
  { year: "2023", title: "Freelance Creator", desc: "Built award-winning interactive sites." },
  { year: "2022", title: "Senior Engineer", desc: "Shipped data viz products with cinematic UX." },
];

const Timeline = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <section id="experience" className="py-24">
      <div className="container">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-8">Experience — Motion in Time</h2>
        <div className="relative" ref={ref}>
          <div className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 top-0 bottom-0 w-px bg-border" />
          <motion.div
            className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 top-0 w-[2px] bg-primary"
            initial={{ height: 0 }}
            animate={{ height: inView ? "100%" : 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
          <div className="space-y-10">
            {items.map((it, i) => (
              <motion.article
                key={it.year}
                className="relative glass-base rounded-xl p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="flex items-center gap-4">
                  <div className="relative w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{it.title}</h3>
                    <p className="text-sm text-muted-foreground">{it.year}</p>
                  </div>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{it.desc}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
