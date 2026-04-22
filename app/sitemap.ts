import { MetadataRoute } from 'next'
import { blogPosts } from '@/lib/blog-data'
import { rooms } from '@/lib/rooms-data'
import { attractions } from '@/lib/lazarevskoe-data'
import { recreations } from '@/lib/recreation-data'

const baseUrl = 'https://priboy1.ru'

const RU_MONTHS: Record<string, string> = {
  января: '01',
  февраля: '02',
  марта: '03',
  апреля: '04',
  мая: '05',
  июня: '06',
  июля: '07',
  августа: '08',
  сентября: '09',
  октября: '10',
  ноября: '11',
  декабря: '12',
}

function lastModifiedFromRuDate(dateRu: string): Date {
  const parts = dateRu.trim().split(/\s+/)
  if (parts.length !== 3) return new Date()
  const [dayRaw, monthName, year] = parts
  const month = RU_MONTHS[monthName.toLowerCase()]
  if (!month) return new Date()
  const day = dayRaw.padStart(2, '0')
  return new Date(`${year}-${month}-${day}`)
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/rooms`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/booking`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/prices`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/entertainment`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/restaurant`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contacts`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/o-komplekse`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/events`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: now,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/pravila-prozhivaniya`,
      lastModified: now,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/otmena-bronirovaniya`,
      lastModified: now,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/rekvizity`,
      lastModified: now,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    // Lazarevskoe section
    {
      url: `${baseUrl}/lazarevskoe`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/lazarevskoe/dostoprimechatelnosti`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/lazarevskoe/plyazhi`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ]

  // Room pages
  const roomPages = rooms.map((room) => ({
    url: `${baseUrl}/rooms/${room.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Blog pages
  const blogPages = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: lastModifiedFromRuDate(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  // Attraction pages
  const attractionPages = attractions.map((attraction) => ({
    url: `${baseUrl}/lazarevskoe/dostoprimechatelnosti/${attraction.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  // Развлечения на территории (отдельные URL — должны быть в sitemap)
  const entertainmentPages = recreations.map((r) => ({
    url: `${baseUrl}/entertainment/${r.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.65,
  }))

  return [...staticPages, ...roomPages, ...blogPages, ...attractionPages, ...entertainmentPages]
}
