import Image from "next/image";

interface EventCardProps {
  title: string;
  imageSrc: string;
  date: string;
  time: string;
  location: string;
  address: string;
  mapLink?: string;
}

export default function EventCard({ title, imageSrc, date, time, location, address, mapLink = "#" }: EventCardProps) {
  return (
    <div className="bg-white dark:bg-surface-dark rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] dark:shadow-none border border-transparent dark:border-gray-800 overflow-hidden relative group">
      {/* Decorative Top Border */}
      <div className="h-1 w-full bg-primary absolute top-0 left-0 z-10"></div>
      
      <div className="relative h-28 overflow-hidden">
        <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-surface-dark via-white/40 dark:via-surface-dark/40 to-transparent"></div>
        <div className="absolute bottom-3 left-5">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white drop-shadow-sm tracking-tight">{title}</h3>
        </div>
      </div>

      <div className="px-5 pb-6 pt-2">
        {/* Date */}
        <div className="flex gap-4 mb-5 items-start border-b border-dashed border-gray-100 dark:border-gray-700 pb-4 last:border-0 last:pb-0">
            <div className="w-10 h-10 rounded-full bg-subtle-primary dark:bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
                <span className="material-symbols-outlined text-[20px]">calendar_today</span>
            </div>
            <div className="flex-1">
                <p className="text-xs text-primary/80 font-bold uppercase tracking-wider mb-1">Tanggal</p>
                <p className="text-[15px] font-medium text-gray-800 dark:text-gray-200">{date}</p>
            </div>
        </div>

        {/* Time */}
        <div className="flex gap-4 mb-5 items-start border-b border-dashed border-gray-100 dark:border-gray-700 pb-4 last:border-0 last:pb-0">
            <div className="w-10 h-10 rounded-full bg-subtle-primary dark:bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
                <span className="material-symbols-outlined text-[20px]">schedule</span>
            </div>
            <div className="flex-1">
                <p className="text-xs text-primary/80 font-bold uppercase tracking-wider mb-1">Waktu</p>
                <p className="text-[15px] font-medium text-gray-800 dark:text-gray-200">{time}</p>
            </div>
        </div>

        {/* Location */}
        <div className="flex gap-4 mb-6 items-start">
            <div className="w-10 h-10 rounded-full bg-subtle-primary dark:bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
                <span className="material-symbols-outlined text-[20px]">location_on</span>
            </div>
            <div className="flex-1">
                <p className="text-xs text-primary/80 font-bold uppercase tracking-wider mb-1">Tempat</p>
                <p className="text-[15px] font-medium text-gray-800 dark:text-gray-200">{location}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">{address}</p>
            </div>
        </div>

        {/* Action Button */}
        <a href={mapLink} target="_blank" rel="noopener noreferrer" className="w-full h-12 bg-primary hover:bg-[#d42550] active:scale-[0.98] text-white rounded-xl font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 group/btn cursor-pointer">
            <span className="material-symbols-outlined text-[20px] group-hover/btn:animate-bounce">map</span>
            Lihat Lokasi
        </a>
      </div>
    </div>
  );
}
