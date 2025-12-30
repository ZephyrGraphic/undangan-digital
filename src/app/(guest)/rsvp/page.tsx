'use client';

import { useState, useActionState } from 'react';
import Image from 'next/image';
import { submitRSVP, type ActionResponse } from '@/app/actions/rsvp';

const initialState: ActionResponse = {
  error: '',
  success: '',
}

export default function RSVPPage() {
  const [guestCount, setGuestCount] = useState(1);
  const [attendance, setAttendance] = useState<'Hadir' | 'Tidak Hadir'>('Hadir');
  const [state, formAction, isPending] = useActionState(submitRSVP, initialState);

  const incrementGuest = () => setGuestCount(prev => prev + 1);
  const decrementGuest = () => setGuestCount(prev => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark text-gray-900 dark:text-gray-100 pb-24">
      {/* Top App Bar */}
      <div className="sticky top-0 z-50 flex items-center bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md p-4 pb-2 justify-between border-b border-gray-100 dark:border-gray-800/50">
        <button className="p-2 -ml-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/5 transition-colors text-gray-500 dark:text-gray-400">
            <span className="material-symbols-outlined">arrow_back_ios_new</span>
        </button>
        <h2 className="text-lg font-bold leading-tight tracking-[-0.015em] text-center">RSVP</h2>
        <div className="w-10"></div>
      </div>

      {/* Header Image */}
      <div className="px-4 py-3">
        <div className="w-full h-[240px] relative rounded-xl shadow-soft overflow-hidden">
             <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWYvs3gWYXczr8upRVT4AHhz2_uQOD4nW9fM8UeG3hkyAm76FYtyt-gUXIiV00Rexffcm48kqXWt0WddvH7jhwJx-blr4zKA5Sr3Lscq694B7RHOfQI1gYR2Q7vBFSfAOAAVXpqp4eaD2Kuc-gbFG4vKbI3Ifen-_uqrFtsX76WD3GLwHKAXuB2yvBTsedIf5U6C_0eu_E5GLwrflpx4dytRcCq757dRD78jwOPldnFbey8KGu_N1lUXssxejdF-zJyk_GDnlRvwSE"
                alt="RSVP Header"
                fill
                className="object-cover"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
             <div className="absolute bottom-0 left-0 p-6 text-white z-10">
                <p className="text-sm font-medium uppercase tracking-widest mb-1 opacity-90">Wedding Invitation</p>
                <h3 className="text-2xl font-bold">Sarah & Dimas</h3>
             </div>
        </div>
      </div>

      {/* Headline */}
      <div className="px-5 pt-2 text-center">
        <h2 className="text-[26px] font-bold leading-tight pb-2">Konfirmasi Kehadiran</h2>
        <p className="text-gray-500 dark:text-gray-400 text-base font-normal leading-relaxed">
            Kami sangat mengharapkan kehadiran Anda di hari bahagia kami. Mohon isi data berikut.
        </p>
      </div>

      <div className="h-6"></div>

      {/* Feedback Messages */}
      {state?.success && (
        <div className="mx-5 mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl flex items-start gap-3 text-green-700 dark:text-green-300">
          <span className="material-symbols-outlined text-[20px] mt-0.5">check_circle</span>
          <p className="text-sm font-medium">{state.success}</p>
        </div>
      )}
      
      {state?.error && (
        <div className="mx-5 mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl flex items-start gap-3 text-red-700 dark:text-red-300">
          <span className="material-symbols-outlined text-[20px] mt-0.5">error</span>
          <p className="text-sm font-medium">{state.error}</p>
        </div>
      )}

      {/* Form */}
      <form action={formAction} className="flex flex-col gap-6 px-5">
        
        {/* Hidden Inputs for State */}
        <input type="hidden" name="pax" value={guestCount} />

        {/* Full Name */}
        <label className="flex flex-col gap-2 group">
            <span className="text-sm font-semibold leading-normal ml-1 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-[18px]">person</span>
                Nama Lengkap
            </span>
            <input 
                type="text" 
                name="name"
                className="flex w-full rounded-xl bg-surface-light dark:bg-surface-dark border border-gray-200 dark:border-gray-700 focus:border-primary focus:ring-2 focus:ring-primary/20 h-14 px-4 text-base transition-all shadow-sm outline-none" 
                placeholder="Contoh: Budi Santoso"
                required
            />
        </label>

        {/* Attendance */}
        <div className="flex flex-col gap-3">
             <span className="text-sm font-semibold leading-normal ml-1 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-[18px]">event_available</span>
                Apakah Anda akan hadir?
            </span>
            <div className="grid grid-cols-2 gap-3">
                <label className="relative cursor-pointer">
                    <input 
                        type="radio" 
                        name="status" 
                        value="Hadir"
                        className="peer sr-only"
                        checked={attendance === 'Hadir'}
                        onChange={() => setAttendance('Hadir')}
                    />
                    <div className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-primary bg-primary/5 text-primary peer-checked:bg-primary peer-checked:text-white peer-checked:shadow-md transition-all">
                        <span className="material-symbols-outlined text-[20px]">check_circle</span>
                        <span className="font-semibold text-sm">Hadir</span>
                    </div>
                </label>
                <label className="relative cursor-pointer">
                    <input 
                        type="radio" 
                        name="status" 
                        value="Tidak Hadir"
                        className="peer sr-only"
                        checked={attendance === 'Tidak Hadir'}
                        onChange={() => setAttendance('Tidak Hadir')}
                    />
                    <div className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-surface-light dark:bg-surface-dark text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800 peer-checked:border-gray-500 peer-checked:bg-gray-500 peer-checked:text-white transition-all">
                        <span className="material-symbols-outlined text-[20px]">cancel</span>
                        <span className="font-semibold text-sm">Maaf, Tidak</span>
                    </div>
                </label>
            </div>
        </div>

        {/* Guest Count */}
        <div className={`flex flex-col gap-3 transition-all duration-300 ${attendance === 'Tidak Hadir' ? 'opacity-50 pointer-events-none grayscale' : ''}`}>
             <span className="text-sm font-semibold leading-normal ml-1 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-[18px]">groups</span>
                Jumlah Tamu
            </span>
            <div className="flex items-center justify-between p-2 pl-4 pr-2 bg-surface-light dark:bg-surface-dark border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm">
                <span className="text-gray-500 dark:text-gray-400 text-sm">Termasuk Anda</span>
                <div className="flex items-center gap-4 bg-gray-50 dark:bg-white/5 rounded-lg p-1">
                    <button 
                        type="button"
                        onClick={decrementGuest}
                        disabled={guestCount <= 1}
                        className="w-10 h-10 flex items-center justify-center rounded-lg bg-white dark:bg-gray-700 shadow-sm text-gray-600 dark:text-gray-200 hover:text-primary active:scale-95 transition-all disabled:opacity-50"
                    >
                        <span className="material-symbols-outlined">remove</span>
                    </button>
                    <span className="text-lg font-bold w-6 text-center">{guestCount}</span>
                    <button 
                        type="button"
                        onClick={incrementGuest}
                        className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary text-white shadow-md shadow-primary/30 hover:bg-primary/90 active:scale-95 transition-all"
                    >
                        <span className="material-symbols-outlined">add</span>
                    </button>
                </div>
            </div>
        </div>

        {/* Message */}
        <label className="flex flex-col gap-2">
             <span className="text-sm font-semibold leading-normal ml-1 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-[18px]">rate_review</span>
                Ucapan & Doa
            </span>
            <textarea 
                name="message"
                className="flex w-full rounded-xl bg-surface-light dark:bg-surface-dark border border-gray-200 dark:border-gray-700 focus:border-primary focus:ring-2 focus:ring-primary/20 min-h-[120px] px-4 py-3 text-base resize-none shadow-sm transition-all outline-none" 
                placeholder="Tuliskan ucapan selamat atau doa restu Anda..."
            ></textarea>
        </label>
        
        {/* Spacer for fixed button */}
        <div className="h-32"></div>
        
        {/* Sticky Bottom Action */}
        <div className="fixed bottom-16 left-0 right-0 p-4 bg-white/80 dark:bg-[#221015]/80 backdrop-blur-md border-t border-gray-100 dark:border-gray-800 z-40 max-w-md mx-auto safe-area-bottom">
            <button 
                type="submit" 
                disabled={isPending}
                className="w-full h-14 bg-primary hover:bg-red-600 text-white font-bold text-lg rounded-xl shadow-lg shadow-primary/30 flex items-center justify-center gap-2 transition-all active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
            >
                {isPending ? (
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                ) : (
                    <>
                        <span>Kirim Konfirmasi</span>
                        <span className="material-symbols-outlined">send</span>
                    </>
                )}
            </button>
        </div>

      </form>
    </div>
  );
}
