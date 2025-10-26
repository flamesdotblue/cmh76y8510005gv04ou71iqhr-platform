import { motion } from 'framer-motion';

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get('name');
    const email = form.get('email');
    const message = form.get('message');
    const subject = encodeURIComponent(`Message from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:pavan@example.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="mx-auto max-w-7xl px-6">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-2xl p-8 md:p-12 bg-white/60 dark:bg-neutral-900/60 backdrop-blur-xl border border-neutral-200/60 dark:border-neutral-800/60">
        <h2 className="text-2xl md:text-3xl font-bold">Get in touch</h2>
        <p className="mt-2 text-neutral-600 dark:text-neutral-400">Have a question or want to work together? Send me a message.</p>
        <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm">Name</label>
            <input id="name" name="name" required placeholder="Your name" className="rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm">Email</label>
            <input id="email" name="email" type="email" required placeholder="you@example.com" className="rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500" />
          </div>
          <div className="md:col-span-2 flex flex-col gap-2">
            <label htmlFor="message" className="text-sm">Message</label>
            <textarea id="message" name="message" required rows={6} placeholder="How can I help?" className="rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500" />
          </div>
          <div>
            <button type="submit" className="inline-flex items-center justify-center rounded-lg bg-emerald-500 hover:bg-emerald-400 text-white px-5 py-3 text-sm font-medium transition-colors">Send Message</button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
