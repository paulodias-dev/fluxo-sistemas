import { motion } from 'motion/react';

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <motion.div 
      className={`flex items-center gap-3 group ${className}`}
      whileHover={{ scale: 1.02 }}
    >
      <div className="relative w-12 h-12 flex items-center justify-center">
        {/* Outer Glow */}
        <div className="absolute inset-0 bg-brand-blue/30 blur-xl rounded-full animate-pulse" />
        
        {/* SVG Logo - Recreated based on the image */}
        <svg 
          viewBox="0 0 100 100" 
          className="w-full h-full relative z-10 drop-shadow-lg"
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="50" cy="50" r="45" stroke="url(#logo-gradient)" strokeWidth="2" strokeDasharray="10 5" className="animate-spin-slow" />
          <path 
            d="M50 20C33.4315 20 20 33.4315 20 50C20 66.5685 33.4315 80 50 80C66.5685 80 80 66.5685 80 50" 
            stroke="url(#logo-gradient)" 
            strokeWidth="8" 
            strokeLinecap="round"
            className="opacity-50"
          />
          <circle cx="50" cy="50" r="15" fill="url(#logo-gradient)" />
          <path 
            d="M50 35L65 50L50 65L35 50L50 35Z" 
            fill="white" 
            className="animate-pulse"
          />
          <defs>
            <linearGradient id="logo-gradient" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
              <stop stopColor="#3b82f6" />
              <stop offset="1" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="flex flex-col">
        <span className="text-xl font-black tracking-tighter dark:text-white text-slate-900 leading-none">
          FLUXO <span className="text-brand-blue">SISTEMAS</span>
        </span>
        <span className="text-[10px] font-bold tracking-[0.2em] text-slate-500 dark:text-slate-400 uppercase">
          Software e Tecnologia
        </span>
      </div>
    </motion.div>
  );
}
