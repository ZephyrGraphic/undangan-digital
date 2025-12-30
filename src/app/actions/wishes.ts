'use server'

import prisma from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

// const prisma = new PrismaClient() removed

export type ActionResponse = {
  success?: string
  error?: string
}

export async function submitWish(prevState: any, formData: FormData): Promise<ActionResponse> {
  const name = formData.get('name') as string
  const message = formData.get('message') as string

  if (!name || !message) {
    return { error: 'Nama dan ucapan tidak boleh kosong.' }
  }

  try {
    await prisma.wish.create({
      data: {
        name,
        message,
      },
    })

    revalidatePath('/wishes')
    return { success: 'Ucapan Anda berhasil dikirim!' }
  } catch (error) {
    console.error('Wish Error:', error)
    return { error: 'Gagal mengirim ucapan.' }
  }
}

export async function getWishes() {
  try {
    const wishes = await prisma.wish.findMany({
      orderBy: {
        createdAt: 'desc',
      },
      take: 50, // Limit to 50 latest wishes
    })
    return wishes
  } catch (error) {
    console.error('Get Wishes Error:', error)
    return []
  }
}
