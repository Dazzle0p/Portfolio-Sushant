import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";
import { FeedbackPopover } from "../ui/FeedbackPopover";

const testimonials = [
  {
    name: "Ananya Sharma",
    text: "Absolutely loved the website design — clean, modern, and exactly what I wanted! 🎨✨",
  },
  {
    name: "Rohan Mehta",
    text: "Very reliable and delivered the project before the deadline. Great experience! ✅🚀",
  },
  {
    name: "Ishita Verma",
    text: "Turned my vague ideas into something amazing. Highly skilled developer! 💡💻",
  },
  {
    name: "Siddharth Nair",
    text: "The attention to detail was outstanding. Every small feature was perfect! 🔍👌",
  },
  {
    name: "Priya Kapoor",
    text: "From start to finish, the process was smooth and stress-free. 🌟😊",
  },
  {
    name: "Aditya Malhotra",
    text: "Loved the animations and overall feel of the site. Really stands out! 🎬🔥",
  },
  {
    name: "Meera Iyer",
    text: "Understood my requirements instantly and delivered exactly what I needed. 📝✅",
  },
  {
    name: "Kunal Choudhary",
    text: "Super easy to work with and full of creative ideas. 💭✨",
  },
  {
    name: "Neha Bansal",
    text: "The UI/UX was spot on. My customers have already given great feedback! 🎯💖",
  },
  {
    name: "Arjun Singh",
    text: "Quick responses, clear communication, and excellent technical skills! 📞⚡",
  },
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
              <a href="mailto:dazushant@gmail.com" className="hover:underline">
                dazushant@gmail.com
              </a>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-4">
              <Phone className="w-5 h-5 text-blue-400" />
              <a href="tel:+919117440703" className="hover:underline">
                +91 9117440703
              </a>
            </div>

            {/* Location */}
            <div className="flex items-center gap-4">
              <MapPin className="w-5 h-5 text-blue-400" />
              <span>Greater Noida, UP</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://github.com/dazzle0p"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-accent transition"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/sushantjha1205"
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
            className="glass-base rounded-2xl p-6 space-y-4"
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
