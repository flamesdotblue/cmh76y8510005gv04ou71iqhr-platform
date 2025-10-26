import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="mx-auto max-w-7xl px-6">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-2xl p-8 md:p-12 bg-white/60 dark:bg-neutral-900/60 backdrop-blur-xl border border-neutral-200/60 dark:border-neutral-800/60">
        <h2 className="text-2xl md:text-3xl font-bold">About Me</h2>
        <p className="mt-4 text-neutral-700 dark:text-neutral-300 leading-relaxed">
          I'm Pavan, a passionate Full Stack Developer who loves crafting responsive, high-performance web applications using React, Node.js, Express, and MongoDB. I focus on writing clean, maintainable code, continuously learning new technologies, and solving real-world problems through thoughtful design and robust engineering.
        </p>
      </motion.div>
    </div>
  );
}
