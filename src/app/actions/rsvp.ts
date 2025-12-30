'use server'

import prisma from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

// const prisma = new PrismaClient() removed

export type ActionResponse = {
  success?: string
  error?: string
}

export async function submitRSVP(prevState: any, formData: FormData): Promise<ActionResponse> {
  const name = formData.get('name') as string
  const status = formData.get('status') as string
  const pax = Number(formData.get('pax'))

  if (!name || !status || isNaN(pax)) {
    return { error: 'Mohon isi semua data dengan benar.' }
  }

  const message = formData.get('message') as string

  try {
    // Save RSVP
    await prisma.guest.create({
      data: {
        name,
        status,
        pax,
      },
    })

    // Save Wish if message is present and not empty
    if (message && message.trim()) {
      await prisma.wish.create({
        data: {
          name,
          message,
        },
      })
      revalidatePath('/wishes')
    }
    
    revalidatePath('/rsvp')
    return { success: 'Terima kasih! Konfirmasi kehadiran Anda telah tersimpan.' }
  } catch (error) {
    console.error('RSVP Error:', error)
    return { error: 'Terjadi kesalahan saat menyimpan data. Silakan coba lagi.' }
  }
}
