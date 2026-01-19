"use client";
import React, { ReactNode } from "react";
import { FaRegEdit, FaTicketAlt, FaGift, FaTshirt, FaFlagCheckered } from "react-icons/fa";
import Image from "next/image";

interface LinkItem {
  name: string;
  url: string;
  icon: ReactNode;
}

export default function Home() {
  const links: LinkItem[] = [
    { name: "Pendaftaran", url: "https://forms.gle/CeroS5hAu9eQQXD98", icon: <FaRegEdit /> },
    { name: "Tiket Masuk", url: "https://forms.gle/CmY95yeCjijHJRQp7", icon: <FaTicketAlt /> },
    { name: "Kupon Lucky Draw", url: "https://forms.gle/aSUAfm8MqvQUyKAD6", icon: <FaGift /> },
    { name: "Merchandise", url: "https://forms.gle/ULNB8kwCxhzqWx9AA", icon: <FaTshirt /> },
    { name: "Aturan Balap", url: "https://drive.google.com/file/d/1L8gkf7BqlYjMHrGDWkYRjNaFxiN-7Bsw/view?usp=sharing", icon: <FaFlagCheckered /> },
  ];

  return (
    <main className="relative min-h-screen flex flex-col items-center bg-zinc-950 p-4 sm:p-6 pt-6">
      {/* Vintage paper texture background */}
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
               repeating-linear-gradient(0deg, transparent, transparent 2px, #000 2px, #000 4px),
               repeating-linear-gradient(90deg, transparent, transparent 2px, #000 2px, #000 4px)
             `
        }} />

      {/* Subtle brown glow */}
      <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-[#83561F]/10 to-transparent" />

      <div className="relative z-10 flex flex-col items-center w-full max-w-lg">
        {/* Hero Image/Poster Frame - Vintage Style */}
        <div className="relative w-full mb-8">
          {/* Decorative corner ornaments */}
          <div className="absolute -top-3 -left-3 w-12 h-12 border-t-4 border-l-4 border-[#83561F] z-20" />
          <div className="absolute -top-3 -right-3 w-12 h-12 border-t-4 border-r-4 border-[#83561F] z-20" />
          <div className="absolute -bottom-3 -left-3 w-12 h-12 border-b-4 border-l-4 border-[#83561F] z-20" />
          <div className="absolute -bottom-3 -right-3 w-12 h-12 border-b-4 border-r-4 border-[#83561F] z-20" />

          {/* Vintage frame effect */}
          <div className="relative border-8 border-zinc-800 shadow-2xl">
            {/* Inner decorative border */}
            <div className="absolute inset-2 border-4 border-[#83561F]/50 pointer-events-none z-10" />

            {/* Image container with grayscale filter */}
            <div className="relative aspect-[4/3] sm:aspect-[16/10] overflow-hidden bg-black">
              <Image
                src="/tabanan-art-war.jpeg"
                alt="Pantai Balap Vol-2"
                fill
                priority
                className="object-cover p-5"
                style={{
                  filter: "grayscale(100%) contrast(1.3) brightness(0.9)",
                  mixBlendMode: "luminosity",
                }}
              />


              {/* Vintage sepia overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#83561F]/20 via-transparent to-black/40 mix-blend-multiply" />

              {/* Vignette effect */}
              <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.8)]" />

              {/* Film grain texture */}
              <div className="absolute inset-0 opacity-20 mix-blend-overlay"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2.5' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                  backgroundSize: '200px 200px'
                }} />
            </div>
          </div>

          {/* Worn edges effect */}
          <div className="absolute inset-0 border-2 border-zinc-700/50 pointer-events-none" />
        </div>

        {/* Vintage distressed links */}
        <div className="w-full space-y-4">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block w-full transform transition-all duration-300
                         hover:scale-105 active:scale-95"
            >
              {/* Stamp-like outer frame */}
              <div className="absolute -inset-1 bg-gradient-to-br from-[#83561F]/30 to-[#83561F]/30 
                            blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Main vintage card */}
              <div className="relative bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900
                            border-4 border-zinc-700 group-hover:border-[#83561F]
                            shadow-lg transition-all duration-300 overflow-hidden">

                {/* Vintage paper texture */}
                <div className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: `radial-gradient(circle at 30% 40%, rgba(255,255,255,0.1) 0%, transparent 50%)`
                  }} />

                {/* Top decorative line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#83561F] to-transparent" />

                {/* Diagonal vintage stripes */}
                <div className="absolute inset-0 opacity-5"
                  style={{
                    backgroundImage: `repeating-linear-gradient(
                         45deg,
                         transparent,
                         transparent 20px,
                         rgba(255,255,255,0.1) 20px,
                         rgba(255,255,255,0.1) 40px
                       )`
                  }} />

                {/* Content */}
                <div className="relative flex items-center gap-4 py-5 px-5 sm:px-6">
                  {/* Icon badge */}
                  <div className="relative flex-shrink-0">
                    <div className="absolute inset-0 bg-[#83561F]/20 blur-md" />
                    <div className="relative bg-gradient-to-br from-zinc-800 to-black 
                                  border-3 border-[#83561F] p-3 group-hover:bg-[#83561F] 
                                  transition-all duration-300 shadow-lg">
                      <span className="text-2xl sm:text-3xl text-[#83561F] group-hover:text-black 
                                     transition-colors block"
                        style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.8))' }}>
                        {link.icon}
                      </span>
                    </div>
                  </div>

                  {/* Text */}
                  <span className="text-base sm:text-lg font-bold text-zinc-100 
                                 group-hover:text-[#83561F] transition-colors duration-300
                                 uppercase tracking-widest flex-1"
                    style={{
                      fontFamily: 'Georgia, serif',
                      textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
                      letterSpacing: '0.15em'
                    }}>
                    {link.name}
                  </span>

                  {/* Vintage arrow */}
                  <div className="text-[#83561F] group-hover:text-[#A67639] 
                                transition-all duration-300 text-3xl font-black
                                group-hover:translate-x-2"
                    style={{ fontFamily: 'Georgia, serif' }}>
                    »
                  </div>
                </div>

                {/* Bottom worn edge effect */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r 
                              from-zinc-800 via-[#83561F]/50 to-zinc-800" />
              </div>

              {/* Corner wear marks */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#83561F]/60" />
              <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#83561F]/60" />
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#83561F]/60" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#83561F]/60" />
            </a>
          ))}
        </div>

        {/* Vintage decorative footer */}
        <div className="mt-10 flex items-center gap-4 opacity-70">
          <div className="h-px w-16 bg-gradient-to-r from-transparent via-[#83561F] to-zinc-700" />
          <div className="relative">
            <div className="absolute inset-0 bg-[#83561F]/30 blur-lg" />
            <FaFlagCheckered className="relative text-[#83561F] text-3xl"
              style={{ filter: 'drop-shadow(0 0 8px rgba(131, 86, 31, 0.8))' }} />
          </div>
          <div className="h-px w-16 bg-gradient-to-l from-transparent via-[#83561F] to-zinc-700" />
        </div>
      </div>
    </main>
  );
}