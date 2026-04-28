import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-white selection:text-black font-sans flex flex-col items-center justify-center p-6 sm:p-12">
      
      <main className="w-full max-w-5xl mx-auto flex flex-col items-center text-center py-12">
        
        {/* VIDEO */}
        <motion.div 
          initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="w-full aspect-video rounded-2xl overflow-hidden bg-zinc-900 mb-12 sm:mb-16 relative shadow-2xl shadow-white/5 border border-white/10"
        >
          <iframe
            className="w-full h-full object-cover opacity-80"
            src="https://www.youtube.com/embed/3JbIvSUROaw?autoplay=1&mute=1&loop=1&playlist=3JbIvSUROaw&controls=1&showinfo=0&rel=0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60 pointer-events-none" />
        </motion.div>

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6"
        >
          <h2 className="text-xs sm:text-sm font-semibold uppercase tracking-[0.4em] text-yellow-500">
            PXL Media
          </h2>
        </motion.div>

        {/* HEADLINE */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl sm:text-7xl md:text-8xl font-display font-bold tracking-tighter mb-8 leading-[0.9] text-yellow-400"
        >
          Fire your <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-yellow-300 to-yellow-600">
            agency.
          </span>
        </motion.h1>

        {/* SUB */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg sm:text-xl text-yellow-100/80 max-w-2xl mb-12 font-light leading-relaxed"
        >
          Get an entire dedicated social media team for less than the cost of a standard retainer.
        </motion.p>

        {/* CALL TO ACTION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <a 
            href="https://book.squareup.com/appointments/qkc4gf908re919/location/LNE5YPZD28KZ7/services/FOEDALSWDKDJ3UOZY5YE4OE5"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center px-8 py-4 font-medium text-black bg-yellow-400 rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(250,204,21,0.15)] hover:shadow-[0_0_60px_rgba(250,204,21,0.3)]"
          >
            <span className="relative z-10 flex items-center gap-2">
              Book Your Free Consultation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
        </motion.div>

      </main>
    </div>
  );
}
