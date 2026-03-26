import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'
import { PortableText } from '@portabletext/react'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import {
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import { MailIcon, BriefcaseIcon, CodeIcon, ArrowDownIcon } from '@/components/Icons'

import { formatDate } from '@/lib/formatDate'
import { client, projectCardFields, urlFor } from '@/lib/sanity'

/* ---------------- PROJECT CARD ---------------- */

function ProjectCard({ project }) {
  return (
    <Card as="article">
      <Link href={`/projects/${project.slug}`} className="block group">
        <div className="overflow-hidden rounded-xl">
          {project.image && (
            <Image
              src={urlFor(project.image).width(720).height(432).quality(65).auto('format').url()}
              alt={project.image.alt || project.title}
              width={720}
              height={432}
              className="h-40 w-full object-cover transition group-hover:scale-105"
            />
          )}
        </div>

        <div className="mt-3">
          <Card.Title>{project.title}</Card.Title>
        </div>

        <Card.Description>{project.description}</Card.Description>

        <div className="mt-3 flex items-center">
          <p className="mr-auto text-sm text-teal-500 opacity-0 transition group-hover:opacity-100">
            View Project →
          </p>

          <p className="ml-auto text-sm text-zinc-400 dark:text-zinc-500">
            {project.publishedAt && formatDate(project.publishedAt)}
          </p>
        </div>
      </Link>
    </Card>
  )
}

/* ---------------- SOCIAL LINK ---------------- */

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

/* ---------------- RESUME ---------------- */

function Resume({ resume }) {
  const roles = resume?.experience || []
  const resumeLink = resume?.drive

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 transition hover:bg-zinc-50 dark:border-zinc-700/40 dark:hover:bg-zinc-800/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3 text-sm">Experience</span>
      </h2>

      <ol className="mt-6 space-y-4">
        {roles.map((role, index) => (
          <li key={index} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800">
              {role.logo && (
                <Image
                  src={urlFor(role.logo).width(64).height(64).url()}
                  alt=""
                  width={28}
                  height={28}
                  className="rounded-full bg-white object-contain p-1"
                />
              )}
            </div>

            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dd className="w-full text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {role.company}
              </dd>

              <dd className="mt-2 text-sm font-semibold text-zinc-500 dark:text-zinc-400">
                {role.title}
              </dd>

              <dd className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
                {role.desc}
              </dd>

              <dd className="mt-2 ml-auto text-sm text-zinc-400 dark:text-zinc-500">
                <time>{role.start}</time> — <time>{role.end}</time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>

      {resumeLink && (
        <a href={resumeLink} target="_blank" rel="noopener noreferrer">
          <Button variant="secondary" className="group mt-6 w-full">
            View Resume
            <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50" />
          </Button>
        </a>
      )}
    </div>
  )
}

/* ---------------- PHOTOS ---------------- */

function Photos({ photos = [] }) {
  const rotations = ['rotate-0', 'rotate-0', 'rotate-0', 'rotate-0', 'rotate-0']

  return (
    <div className="mt-16 overflow-x-auto sm:mt-20">
      {/* Hide scrollbar */}
      <style>
        {`
          .overflow-x-auto::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
      <div className="flex gap-5 py-4 sm:gap-8">
        {photos.map((image, index) => (
          <div
            key={index}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
              rotations[index % rotations.length]
            )}
          >
            <Image
              src={urlFor(image).width(400).quality(70).auto('format').url()}
              alt={image?.alt || ''}
              fill
              className="object-cover"
              sizes="(min-width: 640px) 18rem, 11rem"
              unoptimized
            />
          </div>
        ))}
      </div>
    </div>
  )
}

/* ---------------- MAIN PAGE ---------------- */

// import { PortableText } from '@portabletext/react'

export default function Home({ projects = [], homepage }) {
  const hero = homepage || {}

  // console.log('homepage:', homepage)
  // console.log('heroDescription:', hero?.heroDescription)

  return (
    <>
      <Head>
        <title>Sushant Saroch | Home</title>
        <meta name="description" content={hero.heroDescription} />
      </Head>

      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            {hero.heroTitle}
          </h1>

          <div className="mt-6 text-base text-zinc-600 dark:text-zinc-400 prose dark:prose-invert">
            {Array.isArray(hero?.heroDescription) ? (
              <PortableText value={hero.heroDescription} />
            ) : (
              <p>No description available</p>
            )}
          </div>

          <div className="mt-6 flex gap-6">
            <SocialLink href={hero?.socialLinks?.instagram} icon={InstagramIcon} />
            <SocialLink href={hero?.socialLinks?.github} icon={GitHubIcon} />
            <SocialLink href={hero?.socialLinks?.linkedin} icon={LinkedInIcon} />
            <SocialLink href={`mailto:${hero?.socialLinks?.email}`} icon={MailIcon} />
          </div>
        </div>
      </Container>

      <Photos photos={hero?.photos || []} />

      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="space-y-6">
            <div className="rounded-2xl border border-zinc-100 p-6 transition hover:bg-zinc-50 dark:border-zinc-700/40 dark:hover:bg-zinc-800/40">
              <h2 className="mb-6 flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                <CodeIcon className="h-6 w-6 flex-none" />
                <span className="ml-3 text-sm">Featured Projects</span>
              </h2>

              <div className="flex flex-col gap-6">
                {projects.map((project) => (
                  <ProjectCard key={project.slug} project={project} />
                ))}
              </div>

              <div className="mt-10 border-t border-zinc-100 dark:border-zinc-700/40">
                <Link href="/projects">
                  <Button variant="secondary" className="w-full">
                    View All Projects
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Resume resume={hero?.resume} />
          </div>
        </div>
      </Container>
    </>
  )
}

/* ---------------- DATA FETCH ---------------- */

export async function getStaticProps() {
  const query = `
  {
    "projects": *[_type == "project" && featured == true]
      | order(publishedAt desc)[0...2]{
        ${projectCardFields()}
      },

    "homepage": *[_type == "homepage"][0]{
      heroTitle,
      heroDescription,
      socialLinks,
      resume{
        drive,
        experience[]{
          company,
          title,
          desc,
          start,
          end,
          logo
        }
      },
      photos
    }
  }
  `

  const data = await client.fetch(query)

  return {
    props: {
      projects: data.projects ?? [],
      homepage: data.homepage ?? null,
    },
    revalidate: 60,
  }
}