import Navbar from "@/components/layout/Navbar";
import Image from "next/image";
import Countdown from "@/components/features/Countdown";
import Link from "next/link";
import React from 'react';

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ to?: string }>;
}) {
  const params = await searchParams;
  const guestName = params.to ? decodeURIComponent(params.to) : "Alexander Hamilton";

  return (
    <main className="relative min-h-screen w-full flex flex-col items-center justify-between overflow-hidden bg-background-light dark:bg-background-dark text-[#1b0d11] dark:text-[#fcf8f9]">
      <Navbar />

      {/* Background Hero Image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <div className="relative w-full h-full transition-transform duration-1000 ease-out hover:scale-105 group">
             <Image 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAx03DBm9sivLnK16BETyntDQa09Gk7K4rdanB4I82AGjh6XsptqT79rP9K44u83fsDR44cs4cfETUlFDweVCXNgDE1kTO-4uMNLPN3nSlyqeG75YZFwTt7OsKF2kK_V6Ef6h7cWpPyNp4ngjEe-AU5Jubz-FwAi2e5beSOaXldYR6fWSy3ClNj9wBCpDAAG1_sCVI0NwH6BFfZqm7OG2LT2ewPEpXIg--1sva9rteAjli1H1e4BLP8XqfFif4Kj-Xwy2kVIAhdH"
                alt="Romantic couple holding hands"
                fill
                className="object-cover object-center"
                priority
             />
        </div>
        {/* Gradient Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-background-light dark:to-background-dark via-40% to-90%"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background-light dark:from-background-dark via-transparent to-transparent opacity-90 h-full flex flex-col justify-end"></div>
      </div>

       {/* Main Content Wrapper */}
      <div className="relative z-10 w-full flex-1 flex flex-col justify-end pb-8 pt-32 px-6 max-w-md mx-auto text-center space-y-6">
        {/* Pre-header & Titles */}
        <div className="space-y-2 animate-fade-in-up">
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-primary/90 mb-4">The Wedding of</p>
            <h1 className="text-5xl md:text-6xl font-bold leading-[0.9] drop-shadow-sm">
                Romeo <br/>
                <span className="text-primary text-6xl md:text-7xl font-light align-middle">&</span> Juliet
            </h1>
            <p className="text-[#9a4c5f] dark:text-[#dcaeb8] text-sm md:text-base font-medium pt-2 max-w-[80%] mx-auto leading-relaxed">
                We invite you to celebrate the beginning of our new chapter together.
            </p>
        </div>

        {/* Date & Countdown Placeholder */}
        <div className="py-4">
            <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-white/50 dark:bg-black/30 backdrop-blur-sm border border-white/20 dark:border-white/5 mb-6">
                <span className="material-symbols-outlined text-primary text-[20px]">calendar_month</span>
                <span className="font-semibold text-sm">Minggu, 12 Desember 2024</span>
            </div>
            
            {/* Simple Countdown Grid Placeholder */}
            <Countdown />
        </div>

        {/* Guest Invitation Card */}
        <div className="glass-panel p-5 rounded-2xl w-full text-center space-y-3 shadow-soft transform transition-all duration-500 hover:shadow-lg">
            <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">Kepada Yth. Bapak/Ibu/Saudara/i</p>
            <h3 className="text-lg font-bold line-clamp-1">
                {guestName}
            </h3>
            <div className="h-px w-16 bg-primary/30 mx-auto"></div>
            <p className="text-xs text-gray-500 dark:text-gray-400 italic">Mohon maaf apabila ada kesalahan penulisan nama dan gelar.</p>
        </div>

         {/* CTA Button */}
        <Link href="/detail" className="group relative w-full overflow-hidden rounded-full bg-primary p-4 shadow-glow transition-all duration-300 hover:shadow-primary/50 active:scale-95 cursor-pointer block">
            <div className="relative z-10 flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-white animate-pulse-slow">favorite</span>
                <span className="text-base font-bold text-white tracking-wide">Buka Undangan</span>
            </div>
            <div className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-0"></div>
        </Link>

         {/* Safe Area */}
         <div className="h-2"></div>
      </div>
    </main>
  );
}
