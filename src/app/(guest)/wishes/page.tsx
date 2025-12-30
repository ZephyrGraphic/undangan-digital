import clsx from 'clsx';
import { getWishes } from '@/app/actions/wishes';
import WishesForm from './form';

function formatTimeAgo(date: Date) {
  const seconds = Math.floor((new Date().getTime() - new Date(date).getTime()) / 1000);
  let interval = seconds / 31536000;
  if (interval > 1) return Math.floor(interval) + " tahun yang lalu";
  interval = seconds / 2592000;
  if (interval > 1) return Math.floor(interval) + " bulan yang lalu";
  interval = seconds / 86400;
  if (interval > 1) return Math.floor(interval) + " hari yang lalu";
  interval = seconds / 3600;
  if (interval > 1) return Math.floor(interval) + " jam yang lalu";
  interval = seconds / 60;
  if (interval > 1) return Math.floor(interval) + " menit yang lalu";
  return "Baru saja";
}

function getAvatarColor(name: string) {
    const colors = [
        "bg-primary/10 text-primary",
        "bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400",
        "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400",
        "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300",
        "bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-300",
    ];
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
        hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    return colors[Math.abs(hash) % colors.length];
}

export default async function WishesPage() {
    const wishes = await getWishes();

    return (
        <div className="flex-1 flex flex-col w-full min-h-screen bg-background-light dark:bg-background-dark pb-24 text-gray-900 dark:text-gray-100">
            {/* Sticky Top App Bar */}
            <nav className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gray-200/50 dark:border-white/10">
                <div className="flex items-center p-4 justify-between max-w-md mx-auto w-full">
                    <button className="text-gray-900 dark:text-white flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
                        <span className="material-symbols-outlined">arrow_back</span>
                    </button>
                    <h2 className="text-lg font-bold leading-tight flex-1 text-center pr-10">Pesan & Doa</h2>
                </div>
            </nav>

            <div className="w-full max-w-md mx-auto">
                 {/* Hero / Intro */}
                <section className="px-5 pt-6 pb-2">
                    <h1 className="text-[28px] font-bold leading-tight mb-2">Tuliskan Doa & Ucapan</h1>
                    <p className="text-gray-600 dark:text-gray-300 text-base font-normal leading-relaxed">
                        Berikan ucapan hangat dan doa restu untuk kedua mempelai di hari bahagia ini.
                    </p>
                </section>

                {/* Input Form Section */}
                <section className="px-5 py-4">
                    <WishesForm />
                </section>

                {/* Divider */}
                <div className="flex items-center gap-4 px-6 py-4">
                    <div className="h-px bg-gray-200 dark:bg-white/10 flex-1"></div>
                    <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Ucapan Terbaru ({wishes.length})</span>
                    <div className="h-px bg-gray-200 dark:bg-white/10 flex-1"></div>
                </div>

                {/* Messages Feed */}
                <section className="px-5 space-y-4">
                    {wishes.length === 0 ? (
                        <div className="text-center py-10 text-gray-500">
                            Belum ada ucapan. Jadilah yang pertama mengirimkan doa!
                        </div>
                    ) : (
                        wishes.map((msg: any) => (
                            <div key={msg.id} className="bg-white dark:bg-white/5 p-5 rounded-2xl shadow-sm border border-gray-100 dark:border-white/5 relative group">
                                <div className="flex items-start justify-between mb-3">
                                    <div className="flex items-center gap-3">
                                        <div className={clsx("size-10 rounded-full flex items-center justify-center font-bold text-lg", getAvatarColor(msg.name))}>
                                            {msg.name.charAt(0)}
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-base leading-tight">{msg.name}</h3>
                                            <div className="flex items-center gap-2 mt-0.5">
                                                {/* <span className="px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 text-[10px] font-bold uppercase tracking-wide">Tamu</span> */}
                                                <span className="text-gray-400 text-xs">{formatTimeAgo(msg.createdAt)}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                 <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed mb-4">
                                    {msg.message}
                                </p>
                                <div className="flex items-center gap-4 border-t border-gray-100 dark:border-white/5 pt-3">
                                    <button className="flex items-center gap-1.5 text-gray-500 dark:text-gray-400 hover:text-primary transition-colors text-sm font-medium">
                                        <span className="material-symbols-outlined text-[18px]">favorite</span>
                                        <span>Suka</span>
                                    </button>
                                </div>
                            </div>
                        ))
                    )}
                    
                    {wishes.length > 50 && (
                        <button className="w-full py-3 text-gray-500 dark:text-gray-400 font-medium text-sm flex items-center justify-center gap-2 hover:bg-gray-100 dark:hover:bg-white/5 rounded-xl transition-colors">
                            <span>Muat lebih banyak</span>
                            <span className="material-symbols-outlined text-lg">expand_more</span>
                        </button>
                    )}
                    
                    <div className="h-8"></div>
                </section>
            </div>
        </div>
    );
}
