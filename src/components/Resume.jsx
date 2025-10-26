import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

export default function Resume() {
  const handleDownload = () => {
    const content = `Resume - Pavan\n\nFull Stack Developer\nStack: React, Node.js, Express, MongoDB\nExperience: Built scalable, responsive web apps.\n`;
    const blob = new Blob([content], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Pavan-Resume.pdf';
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="mx-auto max-w-7xl px-6">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-2xl p-8 md:p-12 text-center bg-white/60 dark:bg-neutral-900/60 backdrop-blur-xl border border-neutral-200/60 dark:border-neutral-800/60">
        <h2 className="text-2xl md:text-3xl font-bold">Resume</h2>
        <p className="mt-2 text-neutral-600 dark:text-neutral-400">Grab a copy of my latest resume</p>
        <button onClick={handleDownload} className="mt-6 inline-flex items-center gap-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-white px-5 py-3 text-sm font-medium transition-colors">
          <Download size={18} /> Download Resume (PDF)
        </button>
      </motion.div>
    </div>
  );
}
