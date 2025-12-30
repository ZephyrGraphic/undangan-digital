import Image from "next/image";
import Countdown from "@/components/features/Countdown";
import EventCard from "@/components/features/EventCard";

export default function DetailPage() {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-gray-900 dark:text-gray-100 flex flex-col pb-28">
      {/* Hero Header */}
      <div className="relative h-64 w-full overflow-hidden shrink-0">
        <div className="absolute inset-0 bg-gradient-to-t from-background-light dark:from-background-dark via-transparent to-black/30 z-10 opacity-100 h-full"></div>
        <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZQt2cf3rcUGFhx9f704HoECYNsB8qTDO6gJa0-d23Cj44ReYZVvUN3lDnkNe3E0-RtJFTEgEN9AIphW6Pj2y0fcxZd4nBXD0CEABECELGQR5nlyj5iplZpE7rwVJ2baL-eOQB-acktyVISQhtLVudkD02DEkYwe7rNcfKD2mPAmbnM0wKGnAI9UQbQRzq5g2-rKeGH_vT4MwfyxMU9zp8kcSE052TSZRWmXAWQ28USjk6kWObyHaeRQ5L9fL4uwfKlIdh9Mgi9hoG"
            alt="Soft floral wedding background"
            fill
            className="object-cover"
        />
        <div className="absolute inset-0 z-20 flex flex-col justify-end items-center pb-6 px-4 text-center">
            <p className="text-white/90 font-bold tracking-[0.2em] uppercase text-[10px] mb-2 drop-shadow-md">The Wedding Of</p>
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-1 drop-shadow-sm">Rizky & Anisa</h1>
            <p className="text-sm text-gray-600 dark:text-gray-300 font-medium">Bergabunglah dalam momen bahagia kami</p>
        </div>
      </div>

      {/* Section Title */}
      <div className="px-6 pt-6 pb-4 text-center">
        <h2 className="text-[#9a4c5f] dark:text-primary text-sm font-bold leading-normal tracking-[0.05em] uppercase px-4 py-2">Rangkaian Acara</h2>
        <div className="h-1 w-12 bg-primary/30 mx-auto rounded-full mt-1"></div>
      </div>

      {/* Countdown Timer */}
      <div className="px-6 py-2 mb-8">
        <Countdown />
      </div>

      {/* Cards */}
      <div className="px-4 mb-6 space-y-8">
        <EventCard 
            title="Akad Nikah"
            imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuCse55Fuv1a5iOwY1QZ6G1-s7NDajyvxaJ0AinTN6Lq40Yc06RzhHrR1AKsisOYF__c3D8097ciqIBMRLNZl6MGYmMFPhclsTWay4rgp6GIyUvUX4RUTZP3KfydMbvWDHMm9qmv7X13yHsWp_s4ckI7aiuMveb7VvSM_41z8tw1B8vXQdFtoY6NXsSbaI84W_VxZ7E_tNZ1dUvvddRTm2QFu31QRFOgJhI2IORm24291qeVn1ejupsKI4Y6qvzT2lytVGL7QTEoYOqQ"
            date="Sabtu, 24 Agustus 2024"
            time="08:00 WIB - Selesai"
            location="Masjid Agung Al-Azhar"
            address="Jl. Sisingamangaraja, Kebayoran Baru, Jakarta Selatan"
        />
        <EventCard 
            title="Resepsi Pernikahan"
            imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuD6BAV0EyNZqUiJGpkRjQG7pg-K3x8Jb3z277ux1yMASjFkAS9IfIe_5f0BqXitsQhQG5IA6YjzjsXC3yYApj85IPR6xH1EeqBiY0SCylKGHW-XMoalWEXKkAJeXZCJMShw6ROQNniO0ET_WlBHJmrZODncWfVfEkuY-NelJcpeRVVHoQs7fHPgaHqP3huuv5n3aN_qe7cXJcjyq_hrXWTHNW4iMGPAUL-xqFTZ3fTGrrAozcrKqxG1-SXZ3iEokK5eVDWEr6kDDmAm"
            date="Minggu, 25 Agustus 2024"
            time="11:00 - 13:00 WIB"
            location="Grand Ballroom Hotel Mulia"
            address="Jl. Asia Afrika, Senayan, Jakarta Pusat"
        />
      </div>

      {/* Health Protocol */}
      <div className="px-4 mb-10">
        <div className="bg-subtle-primary dark:bg-surface-dark border border-primary/10 rounded-xl p-4 flex gap-4 items-start">
            <span className="material-symbols-outlined text-primary text-2xl mt-0.5">health_and_safety</span>
            <div>
                <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-1">Protokol Kesehatan</h4>
                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">Tanpa mengurangi rasa hormat, mohon untuk tetap mematuhi protokol kesehatan selama acara berlangsung demi kenyamanan bersama.</p>
            </div>
        </div>
      </div>

      {/* Footer Area */}
      <div className="text-center px-8 mt-auto">
        <p className="text-sm text-gray-500 dark:text-gray-400 italic mb-6 leading-relaxed">"Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu."</p>
        <div className="mb-8">
            <p className="font-bold text-gray-900 dark:text-white text-sm">Kami yang berbahagia,</p>
            <p className="font-display font-bold text-lg text-primary mt-1">Kel. Besar Kedua Mempelai</p>
        </div>
        <div className="flex justify-center pb-4">
            <button className="bg-white dark:bg-surface-dark text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 px-6 py-3 rounded-full text-sm font-bold shadow-sm flex items-center gap-2 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors w-full justify-center max-w-[240px]">
                <span className="material-symbols-outlined text-xl text-primary">calendar_add_on</span>
                Simpan Tanggal
            </button>
        </div>
      </div>
    </div>
  );
}
