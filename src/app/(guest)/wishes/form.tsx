'use client';

import { useActionState } from 'react';
import { submitWish, type ActionResponse } from '@/app/actions/wishes';
import { useState, useEffect } from 'react';

const initialState: ActionResponse = {
  error: '',
  success: '',
}

export default function WishesForm() {
  const [state, formAction, isPending] = useActionState(submitWish, initialState);
  // We use local state to clear the form on success
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');

  useEffect(() => {
    if (state?.success) {
      setMessage('');
      setName('');
    }
  }, [state?.success]);

  return (
    <div className="bg-white dark:bg-white/5 rounded-2xl p-5 shadow-sm border border-gray-100 dark:border-white/5">
        
        {state?.success && (
            <div className="mb-4 p-3 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-300 rounded-xl text-sm font-medium">
                {state.success}
            </div>
        )}
        
        {state?.error && (
            <div className="mb-4 p-3 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-300 rounded-xl text-sm font-medium">
                {state.error}
            </div>
        )}

        <form action={formAction}>
            {/* Name Input */}
            <div className="mb-5">
                <label className="block text-sm font-semibold mb-2">Nama Lengkap</label>
                <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-primary">
                        <span className="material-symbols-outlined text-[20px]">person</span>
                    </span>
                    <input 
                        type="text" 
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full pl-11 pr-4 py-3.5 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-base" 
                        placeholder="Nama anda" 
                    />
                </div>
            </div>

            {/* Message Input */}
            <div className="mb-5">
                <label className="block text-sm font-semibold mb-2">Ucapan & Doa</label>
                <div className="relative">
                    <textarea 
                        name="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        className="w-full p-4 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-base resize-none min-h-[120px]" 
                        placeholder="Tuliskan doa terbaik untuk mempelai..."
                    ></textarea>
                    <div className="absolute bottom-3 right-3 text-xs text-gray-400">{message.length}/500</div>
                </div>
            </div>

             {/* Submit Button */}
            <button 
                type="submit" 
                disabled={isPending}
                className="w-full bg-primary hover:bg-red-600 text-white font-bold py-3.5 px-4 rounded-xl shadow-lg shadow-primary/20 flex items-center justify-center gap-2 transition-all active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
            >
                {isPending ? (
                     <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                ) : (
                    <>
                        <span className="material-symbols-outlined">send</span>
                        <span>Kirim Ucapan</span>
                    </>
                )}
            </button>
        </form>
    </div>
  );
}
