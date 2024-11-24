import {
    FaReact,
    FaNodeJs,
    FaHtml5,
    FaCss3Alt,
    FaJsSquare,
    FaGithubAlt,
    FaGitAlt,
  } from "react-icons/fa";
  import { MdApi } from "react-icons/md";
  import { SiMongodb, SiTailwindcss, SiExpress, SiRedux, SiNetlify } from "react-icons/si";
  import { VscVscode } from "react-icons/vsc";
  
  const techStack = [
    {
      id: 1,
      name: "React.js",
      icon: FaReact,
      color: "text-cyan-500",
    },
    {
      id: 2,
      name: "Redux",
      icon: SiRedux,
      color: "text-purple-500",
    },
    {
      id: 3,
      name: "REST API",
      icon: MdApi,
      color: "text-purple-500",
    },
    {
      id: 4,
      name: "Node.js",
      icon: FaNodeJs,
      color: "text-green-500",
    },
    {
      id: 5,
      name: "MongoDB",
      icon: SiMongodb,
      color: "text-green-600",
    },
    {
      id: 6,
      name: "Express.js",
      icon: SiExpress,
      color: "text-gray-400",
    },
    {
      id: 7,
      name: "Git",
      icon: FaGitAlt,
      color: "text-red-500",
    },
    {
      id: 8,
      name: "GitHub",
      icon: FaGithubAlt,
      color: "text-white",
    },
    {
      id: 9,
      name: "HTML5",
      icon: FaHtml5,
      color: "text-orange-500",
    },
    {
      id: 10,
      name: "CSS3",
      icon: FaCss3Alt,
      color: "text-blue-500",
    },
    {
      id: 11,
      name: "JavaScript",
      icon: FaJsSquare,
      color: "text-yellow-500",
    },
    {
      id: 12,
      name: "Tailwind CSS",
      icon: SiTailwindcss,
      color: "text-cyan-400",
    },
    {
      id: 13,
      name: "VS Code",
      icon: VscVscode,
      color: "text-blue-400",
    },
    {
      id: 14,
      name: "Netlify",
      icon: SiNetlify,
      color: "text-cyan-400",
    },
  ];
  
  export default techStack;
  