import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'
import ikigaiImage from '@/images/photos/ikigai.webp'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata = {
  title: 'Sebastian | About',
  description:`I'm Sebastian Rojas. I live in New Jersey and love to learn.`
}

export default function About() {
    return (
        <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
        <div className="max-w-xs space-y-8 px-2.5 lg:max-w-none">
        <Image
        src={portraitImage}
        alt=""
        sizes="(min-width: 1024px) 32rem, 20rem"
        className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
        />
        <Image
        src={ikigaiImage}
        alt="Ikigai Image"
        sizes="(min-width: 1024px) 32rem, 20 rem"
        className="aspect-square -rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
        />
        </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
        I'm Sebastian Rojas. I live in New Jersey and love to learn.
        </h1>
        <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
        <p>
        I was born in Passaic, New Jersey and at the age of 4 my parents
        bought me my first computer. The story goes like this: we were
        walking around in Micro Center or PC Richard & Sons and while
        walking down an isle filled with computers side by side, I ran up
        to one of them and begged my parents to get it for me. The look of
        pure joy when telling my parents how badly I wanted this computer
        was enough for them to ask some family members if they can pitch
        in for the computer. I vividly remember playing Brother Bear and
        math games and had the most fun.
        </p>
        <p>
        Through the years, I continued playing video games, got an email
        (which I still have to this day), I got to experience Aol
        Messenger and the beginnings of Facebook and Youtube. Fast forward
        to 2020 and this is where my passion for computer programming /
        web development started. I was searching on Google "best jobs in
        2020" and found software engineering to be a common answer between
        the articles I read. After further researching, I began to use
        online resouces to learn how to code. Free Code Camp and the Odin
        Project taught me the basics of HTML, CSS, and Javascript and this
        is where I felt something different than normally learning
        something new. I liken it to finally being able to scratch an
        itch, letting out a big sneeze that was bothering you, or how your
        body feels diectly after an intense workout. I felt challeneged
        but also excited because I knew I was only at the tip of the
        iceberg. I told myself I would code everyday and through
        deliberate practice improve with each iteration.
        </p>
        <p>
        I continued my web development journey learning React as well as
        other technologies essential to creating complex applications
        like: Postgresql / MogoDB, Docker, Redis, Jest / Vitest, CI / CD,
        etc. In my opinion, coding is beautiful because it forces you to
        peceive problems / obstacles differently, break them down into
        manageable pieces, and create abstractions. Coding has altered the
        way I see the world and see common patterns found in coding in the
        real world. Besides being on the computer, I enjoy going on walks
        with my girlfriend, working out, playing with our cats Blu and
        Salem, reading, and trying new restaurants.
        </p>
        <p>
        There is Japanese saying: 生きがい or Ikigai - it roughly
        translates to your reason for being or your bliss. It can be
        described as the action that combines what you are good at, love,
        what the world needs and what you can be compensated for.
        </p>
        <p>
        I believe coding is my <strong>Ikigai</strong>      
        </p>
        </div>
        </div>
        <div className="lg:pl-20">
        <ul role="list">
        <SocialLink
        href="http://github.com/sebastianr812"
        icon={GitHubIcon}
        className="mt-4"
        >
        Follow on GitHub
        </SocialLink>
        <SocialLink
        href="https://www.linkedin.com/in/sebastian-rojas-ruiz-812013200/"
        icon={LinkedInIcon}
        className="mt-4"
        >
        Follow on LinkedIn
        </SocialLink>
        <SocialLink
        href="mailto:spencer@planetaria.tech"
        icon={MailIcon}
        className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
        >
        sebatian.rojas.dev@gmail.com
        </SocialLink>
        </ul>
        </div>
        </div>
        </Container>
    )
}
