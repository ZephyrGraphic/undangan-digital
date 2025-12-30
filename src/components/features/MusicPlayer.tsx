'use client';

import { useState, useRef } from 'react';
import clsx from 'clsx';

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(e => console.log("Audio play failed (interaction needed)", e));
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      <audio ref={audioRef} loop src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" />
      <button
        onClick={togglePlay}
        className="glass-panel size-12 rounded-full flex items-center justify-center text-primary shadow-sm hover:scale-110 transition-transform cursor-pointer group"
        aria-label="Toggle Music"
      >
        <span className={clsx("material-symbols-outlined text-2xl transition-all", isPlaying ? "animate-spin-slow" : "group-hover:scale-110")}>
          music_note
        </span>
      </button>
    </>
  );
}
