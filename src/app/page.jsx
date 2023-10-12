'use client';

import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import {
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import logoAirbnb from '@/images/logos/airbnb.svg'
import logoDiscord from '@/images/logos/discord.svg'
import logoCrownClothing from '@/images/logos/crown-clothing.svg'
import logoPlanetaria from '@/images/logos/planetaria.svg'
import logoCms from '@/images/logos/cms.svg'
import logoCmsBlack from '@/images/logos/cms-black.svg'
import image1 from '@/images/photos/blu-image.jpeg'
import image2 from '@/images/photos/steak-image.jpeg'
import image3 from '@/images/photos/seb-si-image.jpeg'
import image4 from '@/images/photos/espresso-image.jpeg'
import image5 from '@/images/photos/salem-image.jpeg'
import { formatDate } from '@/lib/formatDate'
import { useTheme } from 'next-themes'

const RESUME_AWS_URL="https://seb-resume.s3.amazonaws.com/pdfs/sebastian-rojas-resume-v2.pdf"

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
      <Card.Title href={article.href}>{article.title}</Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  )
}
const articles = [
  {
    title: 'Deliberate Practice — The Fastest Way to Improve Your Skills',
    date: '2020-01-29',
    description: `You may have heard that it takes 10,000 hours to master a skill. But you can try any 
    new skill in 1 hour. You can learn some of the basics in 10 hours. You can become very good in 100 hours. And you can become 
    amazing in most skills, if you spend 1000 hours of quality practice. How far you want to develop your skill, depends on your 
    commitment to put in quality practice.`,
    href: 'https://hamre-erik.medium.com/deliberate-practice-the-fastest-way-to-improve-your-skills-c98c32521dee',
  },
  {
    title: 'Ready to Flow? Everything you need to know about Flow States',
    date: '2020-10-02',
    description: `The term “Flow” was coined by Hungarian-American psychologist, Mihaly Csikszentmihalyi, in 1975. 
    After interviewing numerous people about this unique mindset—one that causes them to become fully absorbed in 
    their work—he chose an image of water carrying a person along to represent the feeling one feels while in Flow.`,
    href: 'https://medium.com/centered-blog/ready-to-flow-everything-you-need-to-know-about-flow-states-432b5d4a7f2d',
  },
  {
    title: 'The Developer’s Edge: How To Become A Senior Developer',
    date: '2017-03-03',
    description: `These are the 6 core skills that you need to be considered a senior developer. And the steps and 
    resources to get them.`,
    href: 'https://zerotomastery.io/blog/developers-edge-how-to-become-a-senior-developer/?utm_source=medium&utm_medium=developers-edge',
  },
]

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link target="_blank" className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

function Resume() {
    const {theme} = useTheme();
  let resume = [
    {
      company: `Sesons Catering & Special Events`,
      title: 'Set Up Person',
      logo: logoPlanetaria,
      start: '2019',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear(),
      },
    },
    {
      company: 'Airbnb-Clone',
      title: 'Developer',
      logo: logoAirbnb,
      start: '2022',
    },
    {
      company: 'Discord-Clone',
      title: 'Developer',
      logo: logoDiscord,
      start: '2023',
    },
    {
      company: 'Ecommerce-CMS',
      title: 'Developer',
      logo: theme === 'light' ? logoCmsBlack : logoCms,
      start: '2023',
    },
    {
      company: 'Crown-Clothing',
      title: 'Developer',
      logo: logoCrownClothing,
      start: '2023',
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Experience / Projects</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <li key={roleIndex} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {role.company}
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                {role.title}
              </dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                aria-label={`${role.start.label ?? role.start} until ${
                  role.end ? role.end.label : ''
                }`}
              >
                <time dateTime={role.start.dateTime ?? role.start}>
                  {role.start.label ?? role.start}
                </time>{' '}
                <span aria-hidden="true">{role.end ? '-' : ''}</span>{' '}
                <time>{role.end ? role.end.label : ''}</time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
      <Button href={RESUME_AWS_URL} variant="secondary" className="group mt-6 w-full">
        Open Resume
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 stroke-1 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>
    </div>
  )
}

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
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

export default  function Home() {

  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Software engineer, eternal student, and cat dad
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I&apos;m Sebastian Rojas, a software engineer based in Northern New
            Jersey. My passion for web development stems from my  curiosity to 
            learn and the appreciation of the different technologies that must 
            work together and be meticulously chosen to create a software 
            application
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink icon={MailIcon} href="/" />
            <SocialLink
              href="https://github.com/sebastianr812"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://www.linkedin.com/in/sebastian-rojas-ruiz-812013200/"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </Container>
      <Photos />
      <Container className="mt-24 md:mt-28">
        <h2 className="mb-[25px] text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          Articles I find interesting
        </h2>
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <Article key={article.href} article={article} />
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
