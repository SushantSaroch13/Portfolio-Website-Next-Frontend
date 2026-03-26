import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { client, projectCardFields, urlFor } from '@/lib/sanity'
import { GitHubIcon } from '@/components/SocialIcons'
import { PortableText } from '@portabletext/react'

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

export default function Projects({ projects = [], projectsPage = null }) {
  return (
    <>
      <Head>
        <title>Sushant Saroch | Projects</title>
        <meta
          name="description"
          content="Things I’ve built in Embedded Systems, IoT, and AI."
        />
      </Head>

      <SimpleLayout
        title={projectsPage?.title}
        intro={
          <PortableText value={projectsPage?.intro} />
        }
      >
        <ul className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card
              as="li"
              key={project.slug}
              className="group rounded-2xl p-4 transition duration-300 hover:-translate-y-1 hover:bg-zinc-100 hover:shadow-lg dark:hover:bg-zinc-800 dark:hover:shadow-xl"
            >
              {project.image && (
                <div className="overflow-hidden rounded-xl">
                  <Image
                    src={urlFor(project.image).width(960).height(576).quality(70).url()}
                    alt={project.image.alt || project.title}
                    width={960}
                    height={576}
                    className="h-[180px] w-full object-cover transition group-hover:scale-105"
                    unoptimized
                  />
                </div>
              )}

              {project.featured && (
                <span className="mt-3 inline-block rounded bg-green-500/10 px-2 py-1 text-xs text-green-700 transition group-hover:text-green-800 dark:text-green-400 dark:group-hover:text-green-300">
                  Featured
                </span>
              )}

              <Card.Title as="h2" href={`/projects/${project.slug}`} className="mt-4">
                {project.title}
              </Card.Title>

              <Card.Description>{project.description}</Card.Description>

              <div className="mt-3 flex flex-wrap gap-2">
                {project.techStack?.map((tech, index) => (
                  <span
                    key={index}
                    className="rounded bg-zinc-200 px-2 py-1 text-xs text-zinc-800 transition group-hover:bg-zinc-300 group-hover:text-zinc-900 dark:bg-zinc-700 dark:text-zinc-100 dark:group-hover:bg-zinc-600 dark:group-hover:text-zinc-100"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex gap-3">
                {project.githubUrl && (
                  <SocialLink href={project.githubUrl} icon={GitHubIcon}>
                    Open on GitHub
                  </SocialLink>
                )}

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-zinc-500 transition group-hover:text-zinc-900 dark:text-zinc-400 dark:group-hover:text-zinc-100"
                  >
                    Live
                  </a>
                )}
              </div>
            </Card>
          ))}
        </ul>
      </SimpleLayout>
    </>
  )
}

export async function getStaticProps() {
  const projectsQuery = `*[_type == 'project'] | order(publishedAt desc){ ${projectCardFields()} }`
  const pageQuery = `*[_type == 'projectsPage'][0]{ title, intro }`

  const [projects, projectsPage] = await Promise.all([
    client.fetch(projectsQuery),
    client.fetch(pageQuery),
  ])

  return {
    props: {
      projects: projects ?? [],
      projectsPage: projectsPage ?? null,
    },
    revalidate: 30,
  }
}
