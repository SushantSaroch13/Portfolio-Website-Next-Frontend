import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  apiVersion: '2023-05-03',
  dataset: 'production',
  projectId: 'hghcdex4',
  useCdn: true,
  perspective: 'published',
  stega: false,
})

const builder = imageUrlBuilder(client)

export function urlFor(source) {
  return builder.image(source).auto('format').fit('max')
}

// Existing project card fields
export function projectCardFields() {
  return `
    title,
    description,
    "slug": slug.current,
    "image": image{
      alt,
      asset,
      hotspot,
      crop
    },
    githubUrl,
    liveUrl,
    techStack,
    featured,
    publishedAt
  `
}

// ✅ New: fetch siteSettings
export async function getSiteSettings() {
  const query = `*[_type == "siteSettings"][0]{
    siteName,
    avatar,
    favicon,
    socialPreview
  }`
  return client.fetch(query)
}

