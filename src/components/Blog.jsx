import { motion } from 'framer-motion';

const posts = [
  {
    title: 'Scaling MERN Apps: Patterns That Work',
    date: 'Oct 2025',
    excerpt: 'A walkthrough of architecture and patterns for large-scale React + Node apps.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1400&auto=format&fit=crop',
  },
  {
    title: 'Type-safe APIs with Zod and Express',
    date: 'Sep 2025',
    excerpt: 'Improve DX and reliability by validating inputs at the boundary.',
    image: 'https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=1400&auto=format&fit=crop',
  },
  {
    title: 'Tailwind Tricks for Production UIs',
    date: 'Aug 2025',
    excerpt: 'Utility-first patterns and components that scale with your codebase.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1400&auto=format&fit=crop',
  },
];

export default function Blog() {
  return (
    <div className="mx-auto max-w-7xl px-6">
      <div className="mb-8 md:mb-10">
        <h2 className="text-2xl md:text-3xl font-bold">Blog</h2>
        <p className="text-neutral-600 dark:text-neutral-400 mt-2">Occasional posts about building on the web</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((post, idx) => (
          <motion.article key={post.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.05 }} className="group rounded-2xl overflow-hidden bg-white/60 dark:bg-neutral-900/60 border border-neutral-200/60 dark:border-neutral-800/60 backdrop-blur-xl">
            <div className="relative aspect-[16/10] overflow-hidden">
              <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
            <div className="p-5">
              <div className="text-xs text-neutral-500 dark:text-neutral-400">{post.date}</div>
              <h3 className="font-semibold mt-1">{post.title}</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2">{post.excerpt}</p>
              <a href="#contact" className="inline-block mt-3 text-sm text-emerald-600 dark:text-emerald-400 hover:underline">Read more →</a>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
