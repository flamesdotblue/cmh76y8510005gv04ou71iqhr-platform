import Spline from '@splinetool/react-spline';
import { Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <div className="relative h-[100svh] w-full overflow-hidden">
      <div className="absolute inset-0"><Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} /></div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70" />

      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto max-w-7xl px-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <motion.div className="lg:col-span-7"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur text-white border border-white/20 mb-5">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs">Full Stack Developer</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">Hi, I'm Pavan</h1>
              <p className="mt-4 text-lg sm:text-xl text-white/80 max-w-2xl">Building scalable web experiences with code & creativity</p>
              <div className="mt-8 flex items-center gap-4">
                <a href="#projects" className="pointer-events-auto inline-flex items-center justify-center rounded-lg bg-emerald-500 hover:bg-emerald-400 text-white px-5 py-3 text-sm font-medium transition-colors">View Projects</a>
                <div className="flex items-center gap-3 pointer-events-auto">
                  <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub" className="p-2 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-colors"><Github size={18} /></a>
                  <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-colors"><Linkedin size={18} /></a>
                  <a href="mailto:pavan@example.com" aria-label="Email" className="p-2 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-colors"><Mail size={18} /></a>
                </div>
              </div>
            </motion.div>
            <motion.div className="lg:col-span-5 flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
            >
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-emerald-400/40 to-cyan-400/40 blur-2xl" />
                <img src="https://i.pravatar.cc/300?img=12" alt="Pavan portrait" className="relative rounded-2xl w-full h-full object-cover border border-white/20 shadow-xl" />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-white/30" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
