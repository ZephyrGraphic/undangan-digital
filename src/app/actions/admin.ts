'use server'

import prisma from '@/lib/prisma'

export async function verifyAdmin(password: string) {
  // Simple env-based password check
  // In a real app, use a more robust auth system
  const adminPassword = process.env.ADMIN_PASSWORD || 'admin123'
  return password === adminPassword
}

export async function getAdminData() {
  try {
    const guests = await prisma.guest.findMany({
      orderBy: { createdAt: 'desc' }
    })

    const totalGuests = guests.length
    
    // Count total status
    const attending = guests.filter(g => g.status === 'Hadir').length
    const notAttending = guests.filter(g => g.status === 'Tidak Hadir').length
    
    // Count total pax (only from those attending)
    const confirmedPax = guests
      .filter(g => g.status === 'Hadir')
      .reduce((sum, g) => sum + g.pax, 0)

    return {
      success: true,
      stats: {
        totalGuests,
        attending,
        notAttending,
        confirmedPax
      },
      guests
    }
  } catch (error) {
    console.error('Admin Data Error:', error)
    return { success: false, error: 'Failed to fetch data' }
  }
}
