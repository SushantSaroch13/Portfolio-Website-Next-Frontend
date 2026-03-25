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
import logoIITJammu from '@/images/logos/logoIITJammu.png'
import logoSaar from '@/images/logos/logoSaar.png'
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
    }
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
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800">
              <Image src={role.logo} alt="" className="h-7 w-7 rounded-full object-contain bg-white p-1" unoptimized priority />
            </div>

            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dd className="w-full text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {role.company}
              </dd>

              <dd className="mt-2 font-semibold text-sm text-zinc-500 dark:text-zinc-400">
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

      {/* Resume Button (Google Drive link) */}
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
            <Resume />
          </div>
        </div>
      </Container>
    </>
  )
}

