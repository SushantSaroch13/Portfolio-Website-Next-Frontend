import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import {
  // TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import { MailIcon, BriefcaseIcon, CodeIcon, ArrowDownIcon } from '@/components/Icons'
import image1 from '@/images/photos/image-1.jpeg'
import image2 from '@/images/photos/image-2.jpeg'
import image3 from '@/images/photos/image-3.jpeg'
import image4 from '@/images/photos/image-4.jpeg'
import image5 from '@/images/photos/image-5.jpeg'
import logoIITJammu from '@/images/logos/logoIITJammu.png'
import logoSaar from '@/images/logos/logoSaar.png'
import { formatDate } from '@/lib/formatDate'
import { client, projectCardFields, urlFor } from '@/lib/sanity'

function ProjectCard({ project }) {
  return (
    <Card as="article">
      <Link href={`/projects/${project.slug}`} className="block group">
        <div className="overflow-hidden rounded-xl">
          {project.image && (
            <Image
              src={urlFor(project.image).width(720).height(432).quality(65).url()}
              alt={project.image.alt || project.title}
              width={720}
              height={432}
              className="h-40 w-full object-cover transition group-hover:scale-105"
              unoptimized
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

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

function Resume() {
  let resume = [
    {
      company: 'SAAR System Solutions',
      title: 'Research Project Intern',
      desc: 'Worked on solar-powered EV charging system (290W PV, 48V battery). Analysed 3000+ hours of data and developed ML models (Random Forest R²=0.9971, XGBoost R²=0.9937) for short-term forecasting. Contributed to IEEE conference paper (ICRERA 2025, Vienna).',
      logo: logoSaar,
      start: 'Jul 2025',
      end: 'Dec 2025',
    },
    {
      company: 'IIT Jammu',
      title: 'Project Intern',
      desc: 'Built real-time EV monitoring system using ESP32 SIM800L, RS-485, Firebase. Designed BLDC inverter using IR2110 with 100kHz PWM. Simulated high-efficiency buck converter in LTSpice for EV charging.',
      logo: logoIITJammu,
      start: 'Feb 2025',
      end: 'Jun 2025',
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 transition hover:bg-zinc-50 dark:border-zinc-700/40 dark:hover:bg-zinc-800/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3 text-sm">Experience</span>
      </h2>

      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <li key={roleIndex} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800">
              <Image
                src={role.logo}
                alt=""
                className="h-7 w-7 rounded-full bg-white object-contain p-1"
                unoptimized
              />
            </div>

            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dd className="w-full text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {role.company}
              </dd>

              <dd className="mt-2 text-sm font-semibold text-zinc-500 dark:text-zinc-400">
                {role.title}
              </dd>

              <dd className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">{role.desc}</dd>

              <dd className="mt-2 ml-auto text-sm text-zinc-400 dark:text-zinc-500">
                <time>{role.start}</time> — <time>{role.end}</time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>

      <a
        href="https://drive.google.com/file/d/1rfdPtS-hlJ3oGVN2tTjWsap_eAtV1Y6E/view?usp=drive_link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button variant="secondary" className="group mt-6 w-full">
          View Resume
          <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50" />
        </Button>
      </a>
    </div>
  )
}

function Photos() {
  let rotations = ['rotate-0', 'rotate-0', 'rotate-0', 'rotate-0', 'rotate-0']

  return (
    <div className="mt-16 flex overflow-x-auto sm:mt-20">
      <style>
        {`
          .overflow-x-auto::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
      <div className="flex gap-5 py-4 sm:gap-8">
        {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
              rotations[imageIndex % rotations.length]
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Home({ projects = [] }) {
  return (
    <>
      <Head>
        <title>Sushant Saroch | Home</title>
        <meta
          name="description"
          content="Hi, I am Sushant, an Electronics Innovator Creates Energy-Efficient Solution for Sustainable Tech"
        />
      </Head>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Electronics Engineer | Embedded Systems | AI & Energy Systems
          </h1>

          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            Hi, I am Sushant — I enjoy building things at the intersection of hardware and
            intelligence. My work focuses on embedded systems, IoT, and energy-efficient designs,
            where I explore how electronics and software can come together to solve real-world
            problems.
            <br />
            <br />
            I like working on projects that are practical, efficient, and a bit challenging —
            whether that’s designing circuits, writing firmware, or experimenting with data-driven
            systems.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://www.instagram.com/sushantsaroch/"
              aria-label="Follow on Instagram"
              icon={InstagramIcon}
            />
            <SocialLink
              href="https://github.com/SushantSaroch13"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://www.linkedin.com/in/sushant-saroch-298a92218/"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
            <SocialLink href="mailto:sushantsaroch13@gmail.com" aria-label="Mail Me" icon={MailIcon} />
          </div>
        </div>
      </Container>
      <Photos />
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2 ">
          <div className="space-y-6">
            <div className="rounded-2xl border border-zinc-100 p-6 transition hover:bg-zinc-50 dark:border-zinc-700/40 dark:hover:bg-zinc-800/40">
              <h2 className="mb-6 flex text-sm font-semibold text-zinc-900 dark:text-zinc-100 ">
                <CodeIcon className="h-6 w-6 flex-none" />
                <span className="ml-3 text-sm">Featured Projects</span>
              </h2>

              <div className="flex flex-col gap-6 ">
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
            <Resume />
          </div>
        </div>
      </Container>
    </>
  )
}

export async function getStaticProps() {
  const query = `
    *[_type == 'project' && featured == true]
    | order(publishedAt desc)[0...2]{
      ${projectCardFields()}
    }
  `

  const projects = await client.fetch(query)

  return {
    props: {
      projects: projects ?? [],
    },
    revalidate: 30,
  }
}
