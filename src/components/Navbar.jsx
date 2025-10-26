import { useEffect, useState } from 'react';
import { Moon, Sun, Menu } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Resume', href: '#resume' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [theme, setTheme] = useState('light');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const next = saved || (prefersDark ? 'dark' : 'light');
    setTheme(next);
    document.documentElement.classList.toggle('dark', next === 'dark');
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.classList.toggle('dark', next === 'dark');
    localStorage.setItem('theme', next);
  };

  useEffect(() => {
    const onHashChange = () => setOpen(false);
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="backdrop-blur-xl bg-white/60 dark:bg-neutral-900/60 border-b border-white/30 dark:border-neutral-800">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#home" className="font-semibold tracking-tight text-lg">Pavan</a>
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm hover:text-emerald-500 transition-colors">
                {item.label}
              </a>
            ))}
            <button aria-label="Toggle theme" onClick={toggleTheme} className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors">
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <button aria-label="Toggle theme" onClick={toggleTheme} className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800">
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button aria-label="Toggle menu" onClick={() => setOpen(!open)} className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800">
              <Menu size={20} />
            </button>
          </div>
        </nav>
        {open && (
          <div className="md:hidden border-t border-white/30 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/70 backdrop-blur-xl">
            <div className="px-4 py-3 flex flex-col gap-3">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="py-2 text-sm hover:text-emerald-500 transition-colors">
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
