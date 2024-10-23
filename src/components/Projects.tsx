import React from 'react'
import Heading from "./Heading";
import Card from "./Card"



const data = [
    {
        id: 0,
        title: "Registration Form",
        desc:  "HTML based app gathers all necessary information about students in one place.",
        img:   "/registrationformhtml.jpg",
        tags:  ["HTML"],
        link: "https://student-registration-form-lemon.vercel.app/"
        
        
    },
    {
        id: 1,
        title: "Simple Calculator",
        desc:  "HTML & CSS based app allows users to perform basic arithmetic operations.",
        img:   "/simplecalculatorhtml.jpg",
        tags:  ["HTML", "CSS"],
        link: "https://simple-calculator-html-seven.vercel.app/"
    },
    {
        id: 2,
        title: "Currency Converter",
        desc:  "HTML & CSS based app allows users to convert currency easily.",
        img:   "/currencyconverterhtml.jpg",
        tags:  ["HTML", "CSS"],
        link: "https://currency-converter-html.vercel.app/"
    },
    {
        id: 3,
        title: "Countdown Timer",
        desc:  "A Next.JS app helps users allocate time effectively encouraging better productivity.",
        img:   "/countdowntimernextjs.jpg",
        tags:  ["CSS", "Node", "Typescript", "Next.JS"],
        link: "https://countdowntimer-nextjs-xi.vercel.app/"
    },
    {
        id: 4,
        title: "Todo App",
        desc:  "A Next.JS app helps users to manage tasks easily and enhance productivity.",
        img:   "/todoappnextjs.jpg",
        tags:  ["CSS", "Node", "Typescript", "Next.JS"],
        link: "https://todoapp-nextjs-five.vercel.app/"
    },
    {
        id: 5,
        title: "Easy Wear Website",
        desc:  "Shoes Website in Next.JS, created components and pages.",
        img:   "/easywearwebsitenextjs.jpg",
        tags:  ["CSS", "Node", "Typescript", "Next.JS"],
        link: "https://assignment2-nextjs.vercel.app/"
    },
    {
        id: 6,
        title: "Perfume Website",
        desc:  "Perfume Website in Next.JS, created components and pages.",
        img:   "/perfumewebsitenextjs.jpg",
        tags:  ["CSS", "Node", "Typescript", "Next.JS"],
        link: "https://perfumewebsite-nextjs.vercel.app/"
    },
];

const Projects = () => {
  return (
    <div id="projects" className='container pt-32 text-red-700 font-semibold'>
        <Heading title='My Projects'/>
        <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
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

export default Projects
