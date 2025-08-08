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
import { RiNextjsFill } from "react-icons/ri";
import {
  SiMongodb,
  SiTailwindcss,
  SiExpress,
  SiRedux,
  SiNetlify,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const techStack = [
  {
    name: "React JS",
    icon: FaReact,
    color: "text-cyan-500",
  },
  {
    name: "Next JS",
    icon: RiNextjsFill,
    color: "text-white",
  },
  {
    name: "Redux",
    icon: SiRedux,
    color: "text-purple-500",
  },
  {
    name: "REST API",
    icon: MdApi,
    color: "text-purple-500",
  },
  {
    name: "Node.js",
    icon: FaNodeJs,
    color: "text-green-500",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    color: "text-green-600",
  },
  {
    name: "Express.js",
    icon: SiExpress,
    color: "text-gray-400",
  },
  {
    name: "Git",
    icon: FaGitAlt,
    color: "text-red-500",
  },
  {
    name: "GitHub",
    icon: FaGithubAlt,
    color: "text-white",
  },
  {
    name: "HTML5",
    icon: FaHtml5,
    color: "text-orange-500",
  },
  {
    name: "CSS3",
    icon: FaCss3Alt,
    color: "text-blue-500",
  },
  {
    name: "JavaScript",
    icon: FaJsSquare,
    color: "text-yellow-500",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "text-cyan-400",
  },
  {
    name: "VS Code",
    icon: VscVscode,
    color: "text-blue-400",
  },
  {
    name: "Netlify",
    icon: SiNetlify,
    color: "text-cyan-400",
  },
];

export default techStack;
