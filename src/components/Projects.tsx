import React from 'react'
import Card from "./Card"



const data = [
    {
        id: 0,
        title: "Registration System",
        desc:  "A secure data collection interface designed to streamline student enrollment processes.",
        problemSolved: "Automates manual paperwork by gathering and organizing student data in a central digital location.",
        img:   "/registrationformhtml.jpg",
        tags:  ["HTML"],
        link: "https://student-registration-form-lemon.vercel.app/"
    },
    {
        id: 1,
        title: "Precision Calculator",
        desc:  "A lightweight, accessible tool for performing instant arithmetic calculations with zero lag.",
        problemSolved: "Provides a quick-access utility for users needing reliable calculations without heavy software.",
        img:   "/simplecalculatorhtml.jpg",
        tags:  ["HTML", "CSS"],
        link: "https://simple-calculator-html-seven.vercel.app/"
    },
    {
        id: 2,
        title: "Global Currency Converter",
        desc:  "A real-time financial utility that simplifies international trade calculations through a clean UI.",
        problemSolved: "Helps users quickly understand international pricing and financial shifts without complex research.",
        img:   "/currencyconverterhtml.jpg",
        tags:  ["HTML", "CSS"],
        link: "https://currency-converter-html.vercel.app/"
    },
    {
        id: 3,
        title: "Productivity Timer",
        desc:  "A time-blocking application built to help professionals maintain focus and manage deep-work sessions.",
        problemSolved: "Combats procrastination by creating structured, time-bound work intervals for better output.",
        img:   "/countdowntimernextjs.jpg",
        tags:  ["CSS", "Node", "Typescript", "Next.JS"],
        link: "https://countdowntimer-nextjs-xi.vercel.app/"
    },
    {
        id: 4,
        title: "Task Orchestrator",
        desc:  "A robust todo application featuring local state management for reliable daily task tracking.",
        problemSolved: "Ensures no critical tasks are missed by providing a persistent, easy-to-use digital checklist.",
        img:   "/todo-app.jpg",
        tags:  ["CSS", "Node", "Typescript", "Next.JS"],
        link: "https://todoapp-nextjs-five.vercel.app/"
    },
    {
        id: 5,
        title: "Easy Wear E-Commerce",
        desc:  "A fully responsive footwear storefront prototype showcasing modern UI components and routing.",
        problemSolved: "Demonstrates how small retail businesses can establish a high-quality online footprint efficiently.",
        img:   "/easywearwebsitenextjs.jpg",
        tags:  ["CSS", "Node", "Typescript", "Next.JS"],
        link: "https://assignment2-nextjs.vercel.app/"
    },
    {
        id: 6,
        title: "Luxury Scent Store",
        desc:  "An elegant boutique interface focused on high-end visual storytelling for premium fragrance products.",
        problemSolved: "Elevates brand perception through a minimalist design that lets high-quality product imagery shine.",
        img:   "/perfumewebsitenextjs.jpg",
        tags:  ["CSS", "Node", "Typescript", "Next.JS"],
        link: "https://perfumewebsite-nextjs.vercel.app/"
    },
    {
        id: 7,
        title: "Pixel-Perfect UI Prototype",
        desc:  "A high-fidelity Figma-to-code implementation demonstrating precise translation of design into functional code.",
        problemSolved: "Ensures design intent is perfectly preserved during the development phase of a product lifecycle.",
        img:   "/figmadesign.jpg",
        tags:  ["Tailwind CSS", "Node", "Typescript", "Next.JS"],
        link: "https://assignment-figma2.vercel.app/"
    },
    {
        id: 8,
        title: "Data-Driven Explorer",
        desc:  "A technical showcase of server-side and client-side data fetching patterns for dynamic web apps.",
        problemSolved: "Addresses performance bottlenecks by optimizing how and when data is loaded for the user.",
        img:   "/dynamicrouting.jpg",
        tags:  ["Tailwind CSS", "Node", "Typescript", "Next.JS"],
        link: "https://assignment9-dynamicrouting.vercel.app/"
    },
    {
        id: 9,
        title: "Headless CMS Blog",
        desc:  "A performance-optimized blog platform powered by Sanity CMS for seamless content management.",
        problemSolved: "Allows non-technical content creators to manage and publish posts without touching the codebase.",
        img:   "/blogwebsite-sanity.jpg",
        tags:  ["Tailwind CSS", "Sanity", "Typescript", "Next.JS"],
        link: "https://sanityblogwebsite-psi.vercel.app/"
    },
    {
        id: 10,
        title: "Standard Content Platform",
        desc:  "A modular blog architecture designed for scalability and easy addition of new content categories.",
        problemSolved: "Provides a structured foundation for building long-term content authority on the web.",
        img:   "/blogwebsite.jpg",
        tags:  ["Tailwind CSS", "Node", "Typescript", "Next.JS"],
        link: "https://blogwebsite-lime.vercel.app/"
    },
    {
        id: 11,
        title: "Household E-Store",
        desc:  "A comprehensive retail platform featuring complex grid layouts and category-based navigation.",
        problemSolved: "Simplifies the navigation of large product catalogs for a better user shopping experience.",
        img:   "/ecommercewebsite.jpg",
        tags:  ["Tailwind CSS", "Node", "Typescript", "Next.JS"],
        link: "https://household-ecommercewebsite.vercel.app/"
    },
    {
        id: 12,
        title: "Sanity-Integrated Shop",
        desc:  "A technical demonstration of integrating third-party APIs with a headless CMS for dynamic commerce.",
        problemSolved: "Solves the challenge of synchronizing real-time inventory with a flexible content management system.",
        img:   "/hackathonproject.jpg",
        tags:  ["Tailwind CSS", "Sanity", "Typescript", "Next.JS"],
        link: "https://api-and-sanity.vercel.app/"
    },
];

const Projects = () => {
  return (
    <div id="projects" className='container py-24 px-4'>
        <div className='flex flex-col items-center mb-16 text-center' data-aos="fade-up">
          <h2 className='text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight'>Explorations & Tools</h2>
          <div className='h-1.5 w-24 bg-zinc-800 rounded-full'></div>
          <p className='text-zinc-500 mt-6 max-w-2xl text-lg'>
            A collection of technical experiments and utility tools developed to master specific frontend challenges.
          </p>
        </div>
        <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
            {data.map((el) => (<Card
            key={el.id}
            title={el.title}
            desc={el.desc}
            problemSolved={el.problemSolved}
            img={el.img}
            tags={el.tags}
            link={el.link || '#'}
            />))}
        </div>
    </div>
  )
}

export default Projects
