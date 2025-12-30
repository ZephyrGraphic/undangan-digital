'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

export default function BottomNav() {
  const pathname = usePathname();

  const navItems = [
    { label: 'Acara', icon: 'home', href: '/detail' },
    { label: 'Galeri', icon: 'photo_library', href: '/gallery' },
    { label: 'RSVP', icon: 'mail', href: '/rsvp' },
    { label: 'Ucapan', icon: 'chat', href: '/wishes' },
  ];

  return (
    <div className="fixed bottom-0 left-0 w-full z-50 bg-white/90 dark:bg-[#221015]/90 backdrop-blur-lg border-t border-gray-200 dark:border-white/10 safe-area-bottom pb-safe">
      <div className="flex justify-around items-center h-16 max-w-md mx-auto">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link 
              key={item.href} 
              href={item.href}
              className={clsx(
                "flex flex-col items-center justify-center w-full h-full transition-colors active:scale-95",
                isActive ? "text-primary" : "text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300"
              )}
            >
              <span className={clsx("material-symbols-outlined text-[24px] mb-0.5", isActive && "font-variation-settings-fill")}>
                {item.icon}
              </span>
              <span className="text-[10px] font-medium tracking-wide">{item.label}</span>
            </Link>
          );
        })}
      </div>
      <style jsx>{`
        .font-variation-settings-fill {
            font-variation-settings: 'FILL' 1;
        }
      `}</style>
    </div>
  );
}
