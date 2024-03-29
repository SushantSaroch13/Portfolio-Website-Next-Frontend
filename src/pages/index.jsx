import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import image1 from '@/images/photos/image-1.jpeg'
import image2 from '@/images/photos/image-2.jpeg'
import image3 from '@/images/photos/image-3.jpeg'
import image4 from '@/images/photos/image-4.jpeg'
import image5 from '@/images/photos/image-5.jpeg'
import logoNucleon from '@/images/logos/logoNucleon.png'
import logoSkillVertex from '@/images/logos/logoSkillVertex.png'
import logoMitsubishi from '@/images/logos/logoMitsubishi.png'
import { formatDate } from '@/lib/formatDate'
import { client, urlFor } from "@/lib/sanity"
import { useState, useEffect } from 'react';


function MailIcon(props) {
  return (    
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}


function BriefcaseIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
    
  )
}

function ArrowDownIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Article({ article }) {
  return (
    <Card as="article">
      <Card.Title href={`/article/${article.currentSlug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.publishedAt} decorate>
        {formatDate(article.publishedAt)}
      </Card.Eyebrow>
      <Card.Description>{article.smallDescription}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
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

function Newsletter() {
  return (
    <form
      action="/thank-you"
      className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
    >
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <MailIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Stay up to date</span>
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Get notified when I publish something new, and unsubscribe at any time.
      </p>
      <div className="mt-6 flex">
        <input
          type="email"
          placeholder="Email address"
          aria-label="Email address"
          required
          className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
        />
        <Button type="submit" className="ml-4 flex-none">
          Join
        </Button>
      </div>
    </form>
  )
}

function Resume() {
  let resume = [
    {
      company: 'SkillVertex',
      title: 'Internship in Artificial Intelligence',
      desc: 'Artificial Intelligence live projects from Artifintel in association with SkillVertex from 5th September to 5th October 2022 and training from 1st August to 30th August.',
      logo: logoSkillVertex,
      start: 'Sept 2022',
      end: 'Oct 2022',
      // start: '2019',
      // end: {
      //   label: 'Present',
      //   dateTime: new Date().getFullYear(),
      // },
    },
    {
      company: 'Nucleon',
      title: 'Internship in IoT & Mechatronics',
      desc: 'Nucleon an IIT Jammu incubated startup has emerged as an important entity which is making a significant impact on the scenic landscape of Jammu & Kashmir and nearby regions. Nucleon is working to build a sustainable and holistic ecosystem for skill development, mentorship and training.',
      logo: logoNucleon,
      start: 'Jun 15, 2023',
      end: 'Jul 26, 2023',
    },
    {
      company: 'Mitsubishi Electric India',
      title: 'MEL SEC iQ-F TRAINING SESSION, ONLINE',
      desc: 'Mitsubishi Electric India in association with ATC MIET Jammu organized an Online/Offline MEL SEC IQ-F PLC training session Mitsubishi Electric India in association with ATC MIET Jammu organized an Online/Offline MEL SEC IQ-F PLC training session Mitsubishi Electric India in association with ATC MIET Jammu organized an Online/Offline MEL SEC IQ-F PLC training session.',
      logo: logoMitsubishi,
      start: 'Apr 2022',
      end: 'Apr 2022',
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="text-sm ml-3">Experience</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <li key={roleIndex} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image src={role.logo} alt="" className="h-7 w-7" unoptimized priority/>
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {role.company}
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="mt-4 font-bold text-sm text-zinc-500 dark:text-zinc-400">
                {role.title}
              </dd>
              <dt className="sr-only">Description</dt>
              <dd className="mt-3 text-sm text-zinc-500 dark:text-zinc-400">
                {role.desc}
              </dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="mt-3 ml-auto text-sm text-zinc-400 dark:text-zinc-500"
                aria-label={`${role.start.label ?? role.start} until ${role.end.label ?? role.end
                  }`}
              >
                <time dateTime={role.start.dateTime ?? role.start}>
                  {role.start.label ?? role.start}
                </time>{' '}
                <span aria-hidden="true">—</span>{' '}
                <time dateTime={role.end.dateTime ?? role.end}>
                  {role.end.label ?? role.end}
                </time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
      <Button href="./SUSHANT SAROCH - RESUME.pdf" variant="secondary" className="group mt-6 w-full">
        Download Resume
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>
    </div>
  )
}

function Photos() {
  let rotations = ['rotate-0', 'rotate-0', 'rotate-0', 'rotate-0', 'rotate-0'];

  return (
    <div className="mt-16 sm:mt-20 overflow-x-auto flex">
      <style>
        {`
          /* Hide the horizontal scrollbar */
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
              priority
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}






export const revalidate = 30 // revalidate at most every 30 sec

export default function Home() {
  const [post, setPosts] = useState([]);

  useEffect( () => { 
      async function fetchData() {
          try {
            const query = `
            *[_type == 'blog'] | order(_createdAt desc) [0...4]{
              title,
                smallDescription,
                'currentSlug': slug.current,
                publishedAt
              }`;
              const res = await client.fetch(query); 
              setPosts(res);
              // console.log("result: ",res[0].publishedAt)
          } catch (err) {
              console.log(err);
          }
      }
      fetchData();
  }, []);
  // console.log("Post: ", post);
  return (
    <>
      <Head>
        <title>
          Sushant Saroch | Home
        </title>
        <meta
          name="description"
          content=" Hi, I'm Sushant, an Electronics Innovator Creates Energy-Efficient Solution for Sustainable Tech"
        />
      </Head>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          Circuit Design for Enhanced Efficiency | AI Powers Smarter Devices | Signal Processing Enthusiast
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            Hi, I&apos;m Sushant, a passionate Electronics and Communication Engineer with a flair for 
            innovation and a drive to revolutionize the tech industry. Specializing in AI integration, 
            signal processing, and wireless communication, I thrive on solving complex challenges and 
            pushing boundaries. With a track record of pioneering breakthroughs in smart systems and 
            predictive maintenance, I&apos;m dedicated to shaping the future of electronics technology. 
            Let&apos;s connect and collaborate to create the next generation of transformative solutions together.
          </p>
          <div className="mt-6 flex gap-6">
            {/* <SocialLink
              href="https://twitter.com/vinzvinci"
              aria-label="Follow on Twitter"
              icon={TwitterIcon}
            /> */}
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
          </div>
        </div>
      </Container>
      <Photos />
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">

            {post?.map((article, idx) => (
              <Article key={idx} article={article} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Newsletter />
            <Resume />
          </div>
        </div>
      </Container>
    </>
  )
}

