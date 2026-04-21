import React from 'react'
import Card from "./Card"



const data = [
    {
        id: 0,
        title: "Desi Nawab",
        desc:  "A high-end cultural showcase designed to preserve and present Desi heritage through a modern digital interface.",
        problemSolved: "Simplifies how cultural businesses present their heritage to a modern, global audience.",
        img:   "/Desi Nawab.jpg",
        tags:  ["Tailwind CSS", "Typescript", "Next.JS"],
        link: "https://desi-nawab.vercel.app/"
    },
    {
        id: 1,
        title: "Elegant Mehndi Studio",
        desc:  "A specialized portfolio platform for artists to showcase intricate designs with high visual clarity and easy navigation.",
        problemSolved: "Provides artists a professional gallery to reach clients without relying solely on social media.",
        img:   "/Mehndi Website.jpg",
        tags:  ["Tailwind CSS", "Typescript", "Next.JS"],
        link: "https://elegantmehndistudio.vercel.app/"
    },
    {
        id: 2,
        title: "AI & Robotics Textbook",
        desc:  "An interactive educational resource that leverages modern web tech to make complex AI concepts accessible to students.",
        problemSolved: "Bridging the gap between static textbooks and interactive digital learning for technical subjects.",
        img:   "/ai_textbook.jpg",
        tags:  ["Tailwind CSS", "Typescript", "Next.JS", "AI"],
        link: "https://sabazain.github.io/physical-ai-and-humanoid-robotics-textbook/"
    },
    {
        id: 3,
        title: "Modern Online Store",
        desc:  "A streamlined e-commerce solution focused on fast performance and a conversion-oriented user journey.",
        problemSolved: "Eliminates friction in the buying process with a fast, responsive, and trustworthy shopping experience.",
        img:   "/household website.jpg",
        tags:  ["Tailwind CSS", "Typescript", "Next.JS"],
        link: "https://sz-onlinestore.vercel.app/"
    },
    {
        id: 4,
        title: "Trendy Jewellery Collection",
        desc:  "A premium digital storefront featuring high-resolution visuals and a focus on luxury brand presentation.",
        problemSolved: "Helps luxury brands establish a credible and high-end online presence that reflects product quality.",
        img:   "/jewellerywebsite.jpg",
        tags:  ["Tailwind CSS", "Typescript", "Next.JS"],
        link: "https://trendyjewellerycollection.vercel.app/"
    },
    {
        id: 5,
        title: "Smart Task Manager",
        desc:  "A productivity-focused application designed to help users manage complex workflows through a clean, intuitive UI.",
        problemSolved: "Reduces mental clutter by providing a reliable and simple way to organize daily professional tasks.",
        img:   "/todo app.jpg",
        tags:  ["Tailwind CSS", "Typescript", "Next.JS"],
        link: "https://hackathon2-todo-console-app-frontend.onrender.com/"
    },
];

const RecentProjects = () => {
  return (
    <div id="recent-projects" className='container py-24 px-4'>
        <div className='flex flex-col items-center mb-16 text-center' data-aos="fade-up">
          <h2 className='text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight'>Featured Work</h2>
          <div className='h-1.5 w-24 bg-blue-600 rounded-full'></div>
          <p className='text-zinc-500 mt-6 max-w-2xl text-lg'>
            A selection of projects where I bridge the gap between complex problems and elegant, user-centric solutions.
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

export default RecentProjects
