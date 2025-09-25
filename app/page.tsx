"use client";
import React, { ReactNode } from "react";
import { FaRegEdit, FaTicketAlt, FaGift, FaTshirt, FaFlagCheckered } from "react-icons/fa";

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
    <main
      className="relative min-h-screen flex flex-col items-center justify-center
                 bg-cover bg-center p-6 text-white"
      style={{ backgroundImage: "url('/pantai-balap-bg.jpg')" }}
    >
      {/* Overlay tipis biar kontras */}
      {/* Test */}
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 flex flex-col items-center">
        <h1
          className="mt-4 text-3xl font-extrabold text-gray-100 text-center
                     drop-shadow-[0_0_12px_rgba(0,0,0,0.8)]
                     leading-relaxed"
        >
          Pantai Balap Vol-2
        </h1>

        <div className="mt-10 w-full flex flex-col items-center">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-md flex items-center gap-4
                         bg-slate-900/80 backdrop-blur-sm
                         text-lg font-semibold py-4 px-6
                         rounded-xl border border-gray-300/60
                         hover:bg-gray-600 hover:border-yellow-300
                         hover:scale-105 hover:shadow-[0_0_20px_rgba(255,165,0,0.9)]
                         transition-all mb-4"
            >
              <span className="text-2xl text-yellow-300">{link.icon}</span>
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
