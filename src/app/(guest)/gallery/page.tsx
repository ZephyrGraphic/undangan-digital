'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const photos = [
  { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCTYsZqNFxLzKKxgdOjh1hd8WnO-uDqoJmgAQnl0phDezc_TQ4y229xlWYFJVObbYrd3toDS8vlqYiznTMIPQ_E0OZV8txw7oF7KqCzBrWmnPfJ7XQ3ZHrYtsloG728iHPh3pXc3oXACOITnuVukPAwfGUqstu5hxcITjUAISDYzhl7qg1REAzapCafBh672ed0LB4Dav-a9lEZ5gVg0l-cO29UAC3yY7i3EcVD8Qs1AyVxQH5VoxzNKJXHNmCpLEWFhsOdb1h4VAwC", alt: "Couple smiling", aspect: "aspect-[3/4]" },
  { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCWMTDaEHSf1r5BnKUxZogCCr4nKI53sgpiAdYxNXksodeQBSVtKDOz41mM-FiRaZwcwhffoHkEKGnmxadus55yYUBEViu2nLkMWneOI6PJmimJO1pUIwsCOEUM93QU0hZE4dhk1RI1ZiBTgztMwa48v8g347yWSTnjZQFfrJ7cZkRyi1uueVjbicD779EzyFY_adiqWKpB1HI0TV_7ugVqyQA-fhB1DADcXI9Z9cfrKAY3SWteGe4lJY-lpp7127fd5j4wzCZUslpp", alt: "Ring", aspect: "aspect-video" },
  { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAW24_cVNzcWEzYpdweIsZrNJzYbbPl4Hg2sVqAXZfHRYHL9G6pFgvAT-ZKLF5O0hLPxt5xvHH2eTfECUf957QLdCB6aZurR0wW1_XtD9p0PyEvIzoaekk_F4HL1boIXX35kJEKK_hL12bQBMrXHfiWtH37h6wcLk2hkGYRbiveQUWCslH4wJ_Req15d-C6SwefjbMhToyQR2WMyZx-8frFVx7TlUkQGA9GRHs-ax6xHkgqv56Z20oCMG_VDjPXqLdWB0EkHFQguzLs", alt: "Bride", aspect: "aspect-[3/4]" },
  { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBwlaeVQlX2z46kG3HCmbtdAcHk8IDjnjyID4_EY08eiCbPEIF2TCRN9iuCyNAYa4rPgzOuvLg1OKJdbjuxNa12jsuQi1bB7tYMvv0CtcM2JfrVmVP7FX0u0TxfOCyv-hTUOhrp1JKUF6Qvs6HSyjY91DrjgudbhKXBN1YM7NsLaQwMSft6ytcpnDsQwuFwa87SwqRj46f7Y3W19eWtOhDYgCsws-LuxQc-QwvDUtQYH5Lkgtmnaz8AgFTsZugSi4p8B0FZmN6jX61i", alt: "Silhouette", aspect: "aspect-[3/4]" },
  { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAvfSEj6sPGf1eRmiIa1T-ws1P0cZ-lcv0ouvTDYzW1ay47AmNNwFDiXLSYaLHd8uMidDCnz1FqSAY7VIMizldRq4vFTcf6z5ZQp1m7MpzYoLlOwZpbnJ7E7UrwDMVOSZsaYAfcnnE3G07pyprVBEV_cZdS85F_26cmfyEVFCbIlfVkD7Fkph2pAYKQyFnzMrV9BWRxS3xMUdvZvIBaP5adYTOVwFCbQV2z4jPowOKV3oFWTeQdHisj6xhB1BJ5HM9Jy3NY1LCo-nT4", alt: "Venue", aspect: "aspect-video" },
  { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCFljP61zS69WnrkjNrc8HuLQzAcr2RAqRnUtMQrMWQt_yRuZ1uDgagvO2u3EB6XsU6DYq2qpa8agnw7KNck6_b_QfPMogxKYnUJmLEVn-nn2c1hAOCmfdKet2HB6HJdMhcsskyFfDIMDOzcmTk1cgc61mzNEdNhCPrNoLgbhCZIqIv5Vzjscf6SOdB7gegxIqMCSxUG11gFnm-C2wiEYVBid2bQV6AkqVPVZ0Ul_RVZGuS6fbrGRhEtGoVLV86M6XFq2UhRNpGJQPF", alt: "Groom", aspect: "aspect-[3/4]" },
];

export default function GalleryPage() {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  return (
    <div className="relative flex flex-col min-h-screen w-full bg-background-light dark:bg-background-dark text-gray-900 dark:text-gray-100 pb-20">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 flex items-center justify-between px-4 py-3 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
        <button className="flex items-center justify-center p-2 rounded-full text-primary hover:bg-primary/10 transition-colors">
            <span className="material-symbols-outlined text-2xl">arrow_back</span>
        </button>
        <h1 className="text-lg font-bold">Galeri Foto</h1>
        <button className="flex items-center justify-center p-2 rounded-full text-primary hover:bg-primary/10 transition-colors">
            <span className="material-symbols-outlined text-2xl">share</span>
        </button>
      </header>

      {/* Hero Section */}
      <section className="p-4 pb-2">
        <div className="relative w-full h-96 rounded-xl overflow-hidden shadow-lg group">
            <div className="relative w-full h-full transition-transform duration-700 group-hover:scale-105">
                <Image 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEetIUZFLIc1msMV8sAaXMPrXHNKZiRkx0WcNOHUsz6qesJY9JGEeiRSRrfEUvK5i2lSxKaLfSamjR_Ma-9IG8C4JDPhue-BynXG42Mk9rQvUN3lDnkNe3E0-RtJFTEgEN9AIphW6Pj2y0fcxZd4nBXD0CEABECELGQR5nlyj5iplZpE7rwVJ2baL-eOQB-acktyVISQhtLVudkD02DEkYwe7rNcfKD2mPAmbnM0wKGnAI9UQbQRzq5g2-rKeGH_vT4MwfyxMU9zp8kcSE052TSZRWmXAWQ28USjk6kWObyHaeRQ5L9fL4uwfKlIdh9Mgi9hoG"
                    alt="Highlight Photo"
                    fill
                    className="object-cover"
                />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full p-6">
                <span className="inline-block px-3 py-1 mb-2 text-xs font-semibold tracking-wider text-white uppercase bg-primary rounded-full">Highlight</span>
                <h2 className="text-3xl font-bold leading-tight text-white drop-shadow-sm">Momen Berharga Kami</h2>
            </div>
        </div>
      </section>

      {/* Quote */}
      <section className="px-6 py-6 text-center">
        <span className="material-symbols-outlined text-4xl text-primary/40 mb-2">format_quote</span>
        <p className="text-gray-600 dark:text-gray-300 italic font-medium leading-relaxed">
            "Cinta tidak menuntut kesempurnaan, namun memberikan ruang untuk saling melengkapi dalam setiap langkah perjalanan."
        </p>
      </section>

      {/* Category Title */}
      <div className="px-4 py-2 flex items-center justify-between">
        <h3 className="text-xl font-bold">Pre-Wedding</h3>
        <span className="text-sm text-primary font-medium">{photos.length} Foto</span>
      </div>

      {/* Masonry Grid */}
      <section className="p-4 pt-2">
        <div className="columns-2 gap-4 space-y-4">
            {photos.map((photo, idx) => (
                <div key={idx} className="break-inside-avoid relative group rounded-lg overflow-hidden shadow-sm cursor-pointer" onClick={() => setSelectedPhoto(photo.src)}>
                    <Image
                        src={photo.src}
                        alt={photo.alt}
                        width={500}
                        height={700}
                        className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-110"
                    />
                     <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="material-symbols-outlined text-white text-3xl drop-shadow-lg">zoom_in</span>
                    </div>
                </div>
            ))}
        </div>
      </section>

      {/* Load More Button */}
      <div className="flex justify-center pb-8 pt-4">
        <button className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 font-semibold rounded-full hover:bg-gray-50 dark:hover:bg-gray-700 transition-all shadow-sm">
            <span>Muat Lebih Banyak</span>
            <span className="material-symbols-outlined text-sm">expand_more</span>
        </button>
      </div>

       {/* Floating Action Button */}
        <div className="fixed bottom-24 right-6 z-40">
            <button className="bg-primary hover:bg-primary/90 text-white p-4 rounded-full shadow-xl shadow-primary/40 flex items-center justify-center transition-transform hover:scale-105 active:scale-95">
                <span className="material-symbols-outlined text-2xl">favorite</span>
            </button>
        </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedPhoto && (
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-sm flex flex-col justify-center items-center"
                onClick={() => setSelectedPhoto(null)}
            >
                <button className="absolute top-4 right-4 text-white p-2 rounded-full hover:bg-white/10 z-50">
                    <span className="material-symbols-outlined text-3xl">close</span>
                </button>
                 <div className="w-full max-h-[80vh] flex items-center justify-center p-4 relative h-full">
                    <Image 
                        src={selectedPhoto}
                        alt="Active view"
                        fill
                        className="object-contain"
                    />
                </div>
                 <div className="absolute bottom-8 left-0 right-0 text-center text-white/80 px-4">
                    <p className="text-sm font-light">Ketuk di mana saja untuk menutup</p>
                </div>
            </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
