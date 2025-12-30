'use client';

import { useState, useEffect } from 'react';
import { verifyAdmin, getAdminData } from '@/app/actions/admin';
import Link from 'next/link';

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<any>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    const isValid = await verifyAdmin(password);
    if (isValid) {
      setIsAuthenticated(true);
      fetchData();
    } else {
      setError('Password salah!');
    }
    setIsLoading(false);
  };

  const fetchData = async () => {
    const result = await getAdminData();
    if (result.success) {
      setData(result);
    }
  };

  const downloadCSV = () => {
    if (!data?.guests) return;

    // Use semicolon for Excel compatibility in regions where comma is decimal separator
    const headers = ['Nama', 'Status', 'Jumlah Tamu', 'Tanggal Input'];
    const rows = data.guests.map((g: any) => [
        `"${g.name.replace(/"/g, '""')}"`, // Escape quotes
        g.status, 
        g.pax, 
        `"${new Date(g.createdAt).toLocaleString('id-ID')}"`
    ]);

    const csvContent = [
      headers.join(';'),
      ...rows.map((r: any) => r.join(';'))
    ].join('\n');

    // Add BOM for Excel UTF-8 recognition
    const blob = new Blob(['\uFEFF' + csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'wedding_guests.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-4">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg w-full max-w-md">
          <h1 className="text-2xl font-bold mb-6 text-center dark:text-white">Admin Login</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Masukkan Password Admin"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
              />
            </div>
            {error && <p className="text-red-500 text-sm text-center">{error}</p>}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-all"
            >
              {isLoading ? 'Memuat...' : 'Masuk'}
            </button>
            <div className="text-center mt-4">
                <Link href="/" className="text-sm text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
                    &larr; Kembali ke Undangan
                </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold dark:text-white">Dashboard Kehadiran</h1>
          <div className="flex gap-4">
            <Link href="/" className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg text-sm font-medium hover:bg-gray-300 transition-colors">
                Lihat Undangan
            </Link>
            <button 
                onClick={downloadCSV}
                className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 transition-colors flex items-center gap-2"
            >
                <span className="material-symbols-outlined text-[18px]">download</span>
                Export CSV
            </button>
          </div>
        </div>

        {data?.stats ? (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <StatCard label="Total Respon" value={data.stats.totalGuests} color="bg-blue-500" />
                <StatCard label="Hadir" value={data.stats.attending} color="bg-green-500" />
                <StatCard label="Tidak Hadir" value={data.stats.notAttending} color="bg-red-500" />
                <StatCard label="Total Pax (Hadir)" value={data.stats.confirmedPax} color="bg-purple-500" />
            </div>
        ) : (
            <div className="text-center py-10">Memuat data...</div>
        )}

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden border border-gray-100 dark:border-gray-700">
            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead className="bg-gray-50 dark:bg-gray-700/50 text-gray-600 dark:text-gray-300 border-b border-gray-100 dark:border-gray-700">
                        <tr>
                            <th className="px-6 py-4 font-semibold">Nama Tamu</th>
                            <th className="px-6 py-4 font-semibold">Status</th>
                            <th className="px-6 py-4 font-semibold">Jumlah (Pax)</th>
                            <th className="px-6 py-4 font-semibold">Waktu Input</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                        {data?.guests?.map((guest: any) => (
                            <tr key={guest.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors">
                                <td className="px-6 py-4 font-medium dark:text-white">{guest.name}</td>
                                <td className="px-6 py-4">
                                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                        guest.status === 'Hadir' 
                                            ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' 
                                            : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                                    }`}>
                                        {guest.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 dark:text-gray-300">{guest.pax}</td>
                                <td className="px-6 py-4 text-gray-500 dark:text-gray-400 text-sm">
                                    {new Date(guest.createdAt).toLocaleString('id-ID')}
                                </td>
                            </tr>
                        ))}
                        {data?.guests?.length === 0 && (
                            <tr>
                                <td colSpan={4} className="px-6 py-10 text-center text-gray-500">
                                    Belum ada data kehadiran.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ label, value, color }: { label: string, value: number, color: string }) {
    return (
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
            <p className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-1">{label}</p>
            <h3 className={`text-3xl font-bold ${color.replace('bg-', 'text-')}`}>{value}</h3>
        </div>
    )
}
