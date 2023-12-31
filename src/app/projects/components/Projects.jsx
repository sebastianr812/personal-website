'use client';


import Image from 'next/image'
import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoAirbnb from '@/images/logos/airbnb.svg'
import logoDiscord from '@/images/logos/discord.svg'
import logoCrownClothing from '@/images/logos/crown-clothing.svg'
import logoCms from '@/images/logos/cms.svg';
import quillImg from "@/images/quill.png";
import logoCmsBlack from '@/images/logos/cms-black.svg';
import { useTheme } from 'next-themes';


function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Projects() {

    const {theme} = useTheme();

const projects = [
    {
        name: "Quill",
        description: `A revolutionary web application that utilizes 
        artificial intelligence to analyze and provide intelligent responses based on uploaded PDFs. 
        Leveraged cutting-edge technologies to enable seamless PDF uploading and integrated a user-friendly chatbot interface 
        for interactive communication with the AI. Implemented features such as infinite scrolling for 
        effortless navigation, a free plan to allow users to experience the product, and a secure paid 
        plan that utilizes Stripe for seamless payment processing. `,
        link: {
            href: "https://quill-jllznar10-sebastianr812.vercel.app/",
            label: "quill-eosin.vercel.app"
        },
        logo: quillImg
    },
  {
    name: 'E-Commerce Admin CMS',
    description:
      `Robust content management system that empowers store owners to effortlessly add collections,
      manage inventory, and update the consumer website in real-time. Utilized cutting-edge technologies 
      to provide admins with comprehensive statistics and analytics, enabling data-driven decision-making for 
      optimizing store performance.`,
    link: { 
        href: 'https://ecommerce-admin-pi-olive.vercel.app/', 
        label: 'e-commerce-admin.app' 
    },
      logo: theme === 'light'? logoCmsBlack: logoCms,
  },
  {
    name: 'Crown-Clothing',
    description:
      `A dynamic front-end website integrated with a content management system. 
      Implemented features that enable users to seamlessly browse and add products to their cart,
      while ensuring persistent data across multiple sessions. Integrated Stripe as a secure payment 
      processor, providing users with a seamless and secure checkout experience.`,
    link: { 
        href: 'https://ecommerce-store-olive.vercel.app/', 
        label: 'e-commerce-store.app' 
    },
    logo: logoCrownClothing,
  },
  {
    name: 'Airbnb-Clone',
    description:
      `A full-stack web application utilizing React, Node.js, and MongoDB. Implemented
advanced filltering functionality, allowing users to easily search and browse properties based on categories,
availability, and the number of guests allowed. Enabled homeowners to upload their properties and set
available rental dates. Enhanced user experience by implementing a favorite feature, allowing users to save
properties for future reference.`,
    link: { 
        href: 'https://rental-clone-six.vercel.app/',
        label: 'airbnb-clone.app' 
    },
    logo: logoAirbnb,
  },
  {
    name: 'Discord-Clone',
    description:
      `A web application that replicates the features of 
      the popular chat application Discord. Users can create servers, channels, and 
      modify channel types (text, audio, video) for seamless communication. Implemented 
      real-time functionality using Web sockets for instant messaging and one-on-one conversations.
      Improved user experience with innite scrolling capabilities for optimized navigation.`,
    link: {
        href: 'https://discord-clone-production-eec0.up.railway.app/',
        label: 'discord-clone.app' 
    },
    logo: logoDiscord,
  },
]
  return (
    <SimpleLayout
      title="Things I’ve made trying to put my dent in the universe."
      intro="I’ve worked on tons of little projects over the years but these are the ones that I’m most proud of. My favorite part of building applications is the process of starting small and slowly interating on-top of it in order to develop a complex application."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <Card as="li" key={project.name}>
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={project.logo}
                width={project.name === "Quill" ? 500 : null}
                height={project.name === "Quill" ? 500 : null}
                alt=""
                className={project.name === "Quill" ? "h-8 w-8 rounded-full" : "h-8 w-8"}
                unoptimized
              />
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card.Link  target="_blank" href={project.link.href}>{project.name}</Card.Link>
            </h2>
            <Card.Description>{project.description}</Card.Description>
            <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
              <LinkIcon className="h-6 w-6 flex-none" />
              <span className="ml-2">{project.link.label}</span>
            </p>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}
