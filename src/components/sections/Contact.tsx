import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";
import { FeedbackPopover } from "../ui/FeedbackPopover";

const testimonials = [
  { name: "Alice W.", text: "Working together was an absolute pleasure! 🌟" },
  {
    name: "Mark R.",
    text: "Super professional and creative. Highly recommend!",
  },
  {
    name: "Sofia K.",
    text: "Brought my vision to life better than I imagined 💡",
  },
  { name: "James P.", text: "Great communication and beautiful design work!" },
  { name: "Nina T.", text: "Fast, friendly, and fantastic results! 🚀" },
];

const Contact = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({ title: "Sent!", description: "I’ll get back to you shortly." });
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container">
        {/* Heading */}
        <div className="max-w-2xl mx-auto text-center mb-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">
            Let’s Build Something Beautiful
          </h2>
          <p className="text-muted-foreground">
            Tell me about your project. I’ll respond within 24 hours.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid md:grid-cols-2 gap-10 max-w-7xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Email */}
            <div className="flex items-center gap-4">
              <Mail className="w-5 h-5 text-blue-400" />
              <a href="mailto:you@example.com" className="hover:underline">
                you@example.com
              </a>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-4">
              <Phone className="w-5 h-5 text-blue-400" />
              <a href="tel:+1234567890" className="hover:underline">
                +1 (234) 567-890
              </a>
            </div>

            {/* Location */}
            <div className="flex items-center gap-4">
              <MapPin className="w-5 h-5 text-blue-400" />
              <span>New York, USA</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-accent transition"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-accent transition"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-accent transition"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>

            {/* Testimonials Carousel */}
            <div className="mt-10 overflow-hidden">
              <motion.div
                className="flex gap-6"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                {[...testimonials, ...testimonials].map((t, i) => (
                  <div
                    key={i}
                    className="min-w-[250px] p-4 rounded-lg bg-background/50 border border-border shadow-md"
                  >
                    <p className="text-sm italic">"{t.text}"</p>
                    <p className="text-xs text-muted-foreground mt-2">
                      — {t.name}
                    </p>
                  </div>
                ))}
              </motion.div>
            </div>

            <FeedbackPopover />
          </motion.div>

          {/* Contact Form */}
          <form
            onSubmit={onSubmit}
            className="glass-base rounded-2xl p-6 space-y-4 w-full"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                required
                placeholder="Name"
                className="w-full rounded-lg bg-background/40 border border-border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <input
                required
                type="email"
                placeholder="Email"
                className="w-full rounded-lg bg-background/40 border border-border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <input
              placeholder="Subject"
              className="w-full rounded-lg bg-background/40 border border-border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <textarea
              required
              placeholder="Your message"
              rows={5}
              className="w-full rounded-lg bg-background/40 border border-border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <div>
              <Button variant="hero" size="lg" disabled={loading}>
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
