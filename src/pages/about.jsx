import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import { PortableText } from '@portabletext/react'

import { client, urlFor } from '@/lib/sanity'
import { Container } from '@/components/Container'
import {
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import {
  MailIcon
} from '@/components/Icons'

function SocialLink({ className, href, children, icon: Icon }) {
  if (!href) return null
  return (
    <li className={className}>
      <Link
        href={href}
        className="group flex items-center text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

export default function About({ aboutData }) {
  const { title, description, portrait, socialLinks } = aboutData || {}

  return (
    <>
      <Head>
        <title>{title || 'About'} | Sushant Saroch</title>
        <meta
          name="description"
          content={
            description && description[0]?.children?.map(c => c.text).join(' ') || ''
          }
        />
      </Head>

      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          {/* Portrait */}
          {portrait && (
            <div className="lg:pl-20">
              <div className="relative w-full aspect-square max-w-xs px-2.5 lg:max-w-none">
                <Image
                  src={urlFor(portrait).width(800).height(800).url()}
                  alt="Portrait of Sushant Saroch"
                  fill
                  className="rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
                  unoptimized
                  priority // 🔹 preload for LCP
                />
              </div>
            </div>
          )}

          {/* Heading + Description */}
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              {title || "I'm Sushant Saroch."}
            </h1>

            {description && (
              <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400 prose dark:prose-invert">
                <PortableText value={description} />
              </div>
            )}
          </div>

          {/* Social Links */}
          <div className="lg:pl-20">
            <ul role="list" className="space-y-4">
              <SocialLink href={socialLinks?.instagram} icon={InstagramIcon}>
                Follow on Instagram
              </SocialLink>
              <SocialLink href={socialLinks?.github} icon={GitHubIcon}>
                Follow on GitHub
              </SocialLink>
              <SocialLink href={socialLinks?.linkedin} icon={LinkedInIcon}>
                Follow on LinkedIn
              </SocialLink>
              <SocialLink href={`mailto:${socialLinks?.email}`} icon={MailIcon}>
                Email Me
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}

// 🔹 Sanity fetching
export async function getStaticProps() {
  const query = `
    *[_type == "aboutPage"][0]{
      title,
      description,
      portrait,
      socialLinks{
        instagram,
        github,
        linkedin,
        email
      }
    }
  `
  const aboutData = await client.fetch(query)

  return {
    props: {
      aboutData: aboutData ?? null,
    },
    revalidate: 60,
  }
}