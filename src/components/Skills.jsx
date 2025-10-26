import { motion } from 'framer-motion';
import { Code2, Database, Wrench } from 'lucide-react';

const skills = [
  {
    title: 'Frontend',
    icon: Code2,
    items: ['React', 'Tailwind CSS', 'HTML', 'CSS', 'JavaScript'],
    gradient: 'from-emerald-400/30 to-cyan-400/30',
  },
  {
    title: 'Backend',
    icon: Database,
    items: ['Node.js', 'Express', 'MongoDB', 'MySQL'],
    gradient: 'from-purple-400/30 to-blue-400/30',
  },
  {
    title: 'Other Tools',
    icon: Wrench,
    items: ['Git', 'Postman', 'Docker', 'Vercel'],
    gradient: 'from-amber-400/30 to-rose-400/30',
  },
];

export default function Skills() {
  return (
    <div className="mx-auto max-w-7xl px-6">
      <div className="mb-8 md:mb-10">
        <h2 className="text-2xl md:text-3xl font-bold">Skills</h2>
        <p className="text-neutral-600 dark:text-neutral-400 mt-2">Technologies and tools I work with</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skills.map((card, idx) => (
          <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.05 }} className="relative rounded-2xl p-6 bg-white/60 dark:bg-neutral-900/60 border border-neutral-200/60 dark:border-neutral-800/60 backdrop-blur-xl overflow-hidden">
            <div className={`pointer-events-none absolute -inset-1 bg-gradient-to-br ${card.gradient} blur-2xl`} />
            <div className="relative">
              <div className="flex items-center gap-3">
                <card.icon className="text-emerald-500" />
                <h3 className="text-lg font-semibold">{card.title}</h3>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
                {card.items.map((s) => (
                  <li key={s} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> {s}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
