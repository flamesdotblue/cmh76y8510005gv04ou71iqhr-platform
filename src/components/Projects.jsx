import { motion } from 'framer-motion';
import { ExternalLink, Rocket } from 'lucide-react';

const projects = [
  {
    name: 'DevDash',
    description: 'A developer productivity dashboard with integrations for GitHub issues and CI status.',
    stack: ['React', 'Tailwind', 'Node.js', 'Express', 'MongoDB'],
    image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1400&auto=format&fit=crop',
    live: 'https://vercel.com/templates',
  },
  {
    name: 'ShopSmart',
    description: 'E-commerce platform with cart, payments, and admin analytics.',
    stack: ['Next.js', 'Stripe', 'Prisma', 'Postgres'],
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1400&auto=format&fit=crop',
    live: 'https://nextjs.org/showcase',
  },
  {
    name: 'TaskFlow',
    description: 'Kanban-style task management app with real-time collaboration.',
    stack: ['React', 'Socket.io', 'Node.js', 'MongoDB'],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1400&auto=format&fit=crop',
    live: 'https://react.dev/learn',
  },
];

export default function Projects() {
  return (
    <div className="mx-auto max-w-7xl px-6">
      <div className="mb-8 md:mb-10 flex items-center justify-between">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold">Featured Projects</h2>
          <p className="text-neutral-600 dark:text-neutral-400 mt-2">A selection of things I’ve built</p>
        </div>
        <div className="hidden sm:flex items-center gap-2 text-emerald-500"><Rocket size={18} /><span className="text-sm">Always shipping</span></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {projects.map((p, idx) => (
          <motion.article key={p.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.05 }} className="group rounded-2xl overflow-hidden bg-white/60 dark:bg-neutral-900/60 border border-neutral-200/60 dark:border-neutral-800/60 backdrop-blur-xl">
            <div className="relative aspect-[16/10] overflow-hidden">
              <img src={p.image} alt={p.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
            <div className="p-5">
              <h3 className="font-semibold text-lg">{p.name}</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">{p.description}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {p.stack.map((t) => (
                  <span key={t} className="text-[11px] px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">{t}</span>
                ))}
              </div>
              <div className="mt-4">
                <a href={p.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-emerald-600 dark:text-emerald-400 hover:underline">
                  Live Demo <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
