import { title } from "framer-motion/client";
import { FaLightbulb, FaPaintBrush, FaCode, FaReact, FaServer, FaMobileAlt, FaDatabase, FaCcStripe, FaNodeJs, FaHtml5,FaTools, FaCloud , FaCss3Alt, FaJs  } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import WanderlustImage from './project1.png'
import CurrencyConvertor from './project2.png'
import myImage from './my_img.jpeg';



export { myImage };


export const aboutInfo = [
    {
        icon: FaLightbulb,
        title: "Innovative",
        description: "I love creating unique solutions of complex problems with cutting-edge technologies.",
        color: "text-purple"

    },
    {
        icon: FaPaintBrush,
        title: "Design Oriented",
        description: "Beautiful design and user experience are at the heart of everything I create.",
        color: "text-pink"

    },
    {
        icon: FaCode,
        title: "Clean Code",
        description: "I love creating unique solutions of complex problems with cutting-edge technologies.",
        color: "text-purple"

    }
]



export const skills = [
   {
    title: "Frontend Development",
    icon: FaReact,
    description: "Building responsive and interactive user interfaces with modern web technologies.",
    tags: ["React", "JavaScript", "Context API", "Redux Toolkit"]
},
{
    title: "Backend Development",
    icon: FaServer,
    description: "Creating robust server-side applications, RESTful APIs, authentication systems, and business logic.",
    tags: ["Node.js", "Express.js", "JWT", "REST API"]
},
{
    title: "Database Management",
    icon: FaDatabase,
    description: "Designing and managing scalable databases with efficient data modeling, querying, and optimization techniques.",
    tags: ["MongoDB", "PostgreSQL", "MySQL", "Firebase"]
},
{
    title: "Cloud & DevOps",
    icon: FaCloud,
    description: "Deploying & managing applications in cloud evnironment.",
    tags: ["AWS", "Docker", "Kubernetes", "CI/CD"]
},
{
    title: "Tools & Technologies",
    icon: FaTools,
    description: "Essentials tools and technologies I use in my development workflow.",
    tags: ["Git & GitHub", "Webpack", "Figma", "Jest"]
}
]


export const projects = [
    {
    title: "Wanderlust",
    description: "A full-stack house rental platform inspired by Airbnb, allowing users to browse listings, create properties, make bookings,leave reviews, and manage reservations. Features secure authentication, image uploads, booking management, and responsive design for a seamless user experience.",
    image: WanderlustImage,
    tech: ["React.js", "MongoDB", "Node.js", "Express.js", "Stripe"],
    icons: [FaReact, SiMongodb, FaNodeJs, FaCcStripe],
    demo: "https://delta-project-jd25.onrender.com/",
    code: "https://github.com/MuhammadUvais95/delta-project"
},

{
    title: "Currency Convertor",
    description: "Developed a currency converter that integrates with a live exchange rate API to provide real-time currency conversions. Built a responsive UI with HTML, CSS, and JavaScript, ensuring a smooth user experience across devices.",
    image: CurrencyConvertor,
    tech: ["HTML5", "CSS3", "JavaScript", "Exchange Rate API"],
    icons: [FaHtml5, FaCss3Alt, FaJs],
    demo: "https://muhammaduvais95.github.io/Currency-Convertor/",
    code: "https://github.com/MuhammadUvais95/Currency-Convertor"
}
    
]


export const education = [
  {
    degree: "Bachelor of Technology (B.Tech)",
    institution: "KSVCEM, Bijnor",
    duration: "2022 - 2026",
    description:
      "Focused on software development, databases, web technologies, and problem-solving. Built full-stack web applications using the MERN stack."
  },
  {
    degree: "Senior Secondary Education (Class XII)",
    institution: "RPS, Bijnor",
    duration: "2021",
    description:
      "Completed higher secondary education with a focus on science and mathematics."
  },
  {
    degree: "Secondary Education (Class X)",
    institution: "NIOS, Muzaffarnagar",
    duration: "2019",
    description:
      "Built a strong academic foundation in mathematics, science, and computer fundamentals."
  }
]