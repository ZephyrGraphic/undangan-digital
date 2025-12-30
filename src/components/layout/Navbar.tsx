import MusicPlayer from "@/components/features/MusicPlayer";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 p-6 flex justify-between items-start pointer-events-none">
      {/* Brand / Logo Area */}
      <div className="glass-panel p-3 rounded-full shadow-sm text-xs font-bold tracking-widest uppercase text-primary pointer-events-auto">
        The Wedding
      </div>
      
      {/* Music Controller */}
      <div className="pointer-events-auto">
        <MusicPlayer />
      </div>
    </nav>
  );
}
