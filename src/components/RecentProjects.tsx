import React from 'react'
import Heading from "./Heading";
import Card from "./Card"



const data = [
    {
        id: 0,
        title: "Desi Nawab",
        desc:  "A website showcasing traditional Desi Nawab culture and heritage.",
        img:   "/Desi Nawab.jpg",
        tags:  ["Tailwind CSS", "Typescript", "Next.JS"],
        link: "https://desi-nawab.vercel.app/"
    },
    {
        id: 1,
        title: "Mehndi Website",
        desc:  "Website featuring beautiful Mehndi designs and patterns.",
        img:   "/Mehndi Website.jpg",
        tags:  ["Tailwind CSS", "Typescript", "Next.JS"],
        link: "https://elegantmehndistudio.vercel.app/"
    },
    {
        id: 2,
        title: "AI Textbook",
        desc:  "AI-powered educational platform for interactive learning.",
        img:   "/ai_textbook.jpg",
        tags:  ["Tailwind CSS", "Typescript", "Next.JS", "AI"],
        link: "https://sabazain.github.io/physical-ai-and-humanoid-robotics-textbook/"
    },
    {
        id: 3,
        title: "Household",
        desc:  "E-commerce website for household products with modern design.",
        img:   "/household website.jpg",
        tags:  ["Tailwind CSS", "Typescript", "Next.JS"],
        link: "https://sz-onlinestore.vercel.app/"
    },
    {
        id: 4,
        title: "Jewellery Website",
        desc:  "E-commerce website showcasing trendy jewellery collection.",
        img:   "/jewellerywebsite.jpg",
        tags:  ["Tailwind CSS", "Typescript", "Next.JS"],
        link: "https://trendyjewellerycollection.vercel.app/"
    },
    {
        id: 5,
        title: "Todo App",
        desc:  "Task management app to help users stay organized and productive.",
        img:   "/todo app.jpg",
        tags:  ["Tailwind CSS", "Typescript", "Next.JS"],
        link: "https://hackathon2-todo-console-app-frontend.onrender.com/"
    },
];

const RecentProjects = () => {
  return (
    <div id="recent-projects" className='container pt-20 sm:pt-32 px-4 text-red-700 font-semibold'>
        <Heading title='Recent Projects'/>
        <div className='grid gap-10 xl:gap-0 xl:gap-y-10 sm:grid-cols-2 lg:grid-cols-3 place-items-center'>
            {data.map((el) => (<Card
            key={el.id}
            title={el.title}
            desc={el.desc}
            img={el.img}
            tags={el.tags}
            link={el.link || '#'}

            />))}
        </div>

    </div>
  )
}

export default RecentProjects
