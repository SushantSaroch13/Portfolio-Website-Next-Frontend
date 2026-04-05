import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import { PortableText } from '@portabletext/react'

import { client, urlFor } from '@/lib/sanity'
import { Container } from '@/components/Container'
import { formatDate } from '@/lib/formatDate'
import { GitHubIcon } from '@/components/SocialIcons'

function CodeBlock({ value }) {
  const language = value?.language || 'text'
  const languageLabel =
    {
      cpp: 'C++',
      json: 'JSON',
      javascript: 'JavaScript',
      typescript: 'TypeScript',
      bash: 'Bash',
      text: 'Plain text',
    }[language] || language

  return (
    <div className="github-code-block not-prose my-8 overflow-hidden rounded-2xl border border-zinc-200/80 bg-white shadow-sm shadow-zinc-950/5 dark:border-zinc-700/70 dark:bg-zinc-900">
      <div className="flex items-center justify-between border-b border-zinc-200/80 bg-zinc-50/90 px-4 py-2.5 dark:border-zinc-700/70 dark:bg-zinc-800/90">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
        </div>
        <span className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
          {languageLabel}
        </span>
      </div>
      <pre className="github-code-pre overflow-x-auto px-4 py-4 text-[13px] leading-6 text-[#1f2328] dark:text-[#e6edf3]">
        <code className={`language-${language}`}>{value?.code}</code>
      </pre>
    </div>
  )
}

function SocialLink({ icon: Icon, children, ...props }) {
  return (
    <Link className="group mt-4 flex items-center gap-2" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
      <span className="text-sm text-zinc-500 group-hover:text-zinc-900 dark:text-zinc-400 dark:group-hover:text-zinc-100">
        {children}
      </span>
    </Link>
  )
}

export default function ProjectPage({ data, prevProject, nextProject }) {
  const components = {
    types: {
      image: ({ value }) => (
        <div className="my-6">
          <Image
            src={urlFor(value).width(1200).quality(70).url()}
            alt={value.alt || 'Project image'}
            width={1200}
            height={750}
            sizes="(min-width: 1024px) 56rem, (min-width: 640px) 90vw, 100vw"
            className="w-full h-auto rounded-xl"
            unoptimized
          />
        </div>
      ),
      code: ({ value }) => <CodeBlock value={value} />,
    },
    marks: {
      code: ({ children }) => (
        <code className="rounded-md border border-zinc-200/80 bg-zinc-100 px-1.5 py-0.5 font-mono text-[0.9em] text-[#cf222e] dark:border-zinc-700/80 dark:bg-zinc-800 dark:text-[#ff7b72]">
          {children}
        </code>
      ),
    },
  }

  return (
    <>
      <Head>
        <title>{data.title}</title>
        <meta name="description" content={data.description} />
      </Head>

      <Container className="mt-16 sm:mt-32">
        <header className="max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            {data.title}
          </h1>

          <p className="mt-4 text-zinc-600 dark:text-zinc-400">{data.description}</p>

          {data.publishedAt && !Number.isNaN(new Date(data.publishedAt).getTime()) && (
            <p className="mt-2 text-sm text-zinc-500">{formatDate(data.publishedAt)}</p>
          )}
        </header>

        {data.image && (
          <div className="mt-4 w-full bg-zinc-100 dark:bg-zinc-800 rounded-xl">
            <Image
              src={urlFor(data.image).width(1400).url()}
              alt={data.image.alt || data.title}
              width={1400}
              height={800}
              className="w-full h-auto rounded-xl"
              priority
              unoptimized
            />
          </div>
        )}

        {data.techStack && (
          <div className="mt-6 flex flex-wrap gap-2">
            {data.techStack.map((tech, index) => (
              <span
                key={index}
                className="rounded-full bg-zinc-200 px-3 py-1 text-xs font-medium text-zinc-800 dark:bg-zinc-700 dark:text-zinc-100"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        <div className="mt-5 flex gap-3">
          {data.githubUrl && (
            <SocialLink href={data.githubUrl} icon={GitHubIcon}>
              Open on GitHub
            </SocialLink>
          )}

          {data.liveUrl && (
            <a
              href={data.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-white"
            >
              Live
            </a>
          )}
        </div>

        {data.content && (
          <div className="prose prose-lg mt-10 dark:prose-invert">
            <PortableText value={data.content} components={components} />
          </div>
        )}

        <div className="mt-16 grid grid-cols-2 gap-4 border-t border-zinc-100 pt-8 dark:border-zinc-700/40">
          {prevProject ? (
            <Link
              href={`/projects/${prevProject.slug}`}
              className="rounded-xl border border-zinc-200 p-4 transition hover:bg-zinc-50 dark:border-zinc-700 dark:hover:bg-zinc-800"
            >
              <p className="text-xs text-zinc-400">Previous</p>
              <p className="text-sm font-medium text-zinc-800 dark:text-zinc-100">
                ← {prevProject.title}
              </p>
            </Link>
          ) : (
            <div />
          )}

          {nextProject ? (
            <Link
              href={`/projects/${nextProject.slug}`}
              className="rounded-xl border border-zinc-200 p-4 text-right transition hover:bg-zinc-50 dark:border-zinc-700 dark:hover:bg-zinc-800"
            >
              <p className="text-xs text-zinc-400">Next</p>
              <p className="text-sm font-medium text-zinc-800 dark:text-zinc-100">
                {nextProject.title} →
              </p>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </Container>
    </>
  )
}

export async function getStaticPaths() {
  const query = `
    *[_type == 'project' && defined(slug.current)]{
      "slug": slug.current
    }
  `

  const projects = await client.fetch(query)

  return {
    paths: (projects ?? []).map((project) => ({
      params: { slug: project.slug },
    })),
    fallback: 'blocking',
  }
}

export async function getStaticProps({ params }) {
  const slug = params?.slug

  const query = `
    {
      "project": *[_type == 'project' && slug.current == $slug][0]{
        title,
        description,
        "image": image{
          alt,
          asset,
          hotspot,
          crop
        },
        content[]{
          ...,
          _type == "image" => {
            ...,
            alt,
            asset,
            hotspot,
            crop
          }
        },
        techStack,
        githubUrl,
        liveUrl,
        publishedAt,
        "slug": slug.current
      },
      "allProjects": *[_type == 'project' && defined(slug.current)] | order(publishedAt desc){
        "slug": slug.current,
        title
      }
    }
  `

  const result = await client.fetch(query, { slug })
  const project = result?.project ?? null

  if (!project) {
    return {
      notFound: true,
      revalidate: 30,
    }
  }

  const allProjects = result?.allProjects ?? []
  const currentIndex = allProjects.findIndex((item) => item.slug === slug)

  const prevProject = currentIndex > 0 ? allProjects[currentIndex - 1] : null
  const nextProject =
    currentIndex >= 0 && currentIndex < allProjects.length - 1
      ? allProjects[currentIndex + 1]
      : null

  return {
    props: {
      data: project,
      prevProject,
      nextProject,
    },
    revalidate: 30,
  }
}
