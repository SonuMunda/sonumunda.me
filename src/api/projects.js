import { CiStreamOn } from "react-icons/ci";
import { FaReact, FaNodeJs, FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { MdApi } from "react-icons/md";
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiJavascript,
} from "react-icons/si";

const projects = [
  {
    title: "AptResume",
    description:
      "AptResume is an all-in-one career platform that combines powerful tools like ATS scanning and resume optimization tips, keyword extraction from job descriptions, intuitive resume building, and  job search — all in one place to help you land your dream job faster.",
    logo: "https://aptresume.vercel.app/_next/image?url=%2Flogo.png&w=64&q=75",
    whiteBg: false,
    linkTitle: "Live here",
    link: "https://aptresume.vercel.app/",
    icon: CiStreamOn,
    iconColor: "text-green-400",
    techStack: [
      { name: "React", icon: FaReact },
      { name: "Node.js", icon: FaNodeJs },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Express.js", icon: SiExpress },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    title: "Edudocs",
    description:
      "Edudocs is a platform crafted to simplify access to educational resources. It enables students and educators to create, share, and manage notes and documents collaboratively. The platform supports multiple formats and tools to ensure a seamless learning and teaching experience. With a clean interface and advanced organizational features, Edudocs enhances productivity in educational environments.",
    logo: "https://github.com/SonuMunda/edudocs/blob/main/src/assets/images/logo.png?raw=true",
    whiteBg: true,
    linkTitle: "Live here",
    link: "https://edudocs.netlify.app/",
    icon: CiStreamOn,
    iconColor: "text-green-400",
    techStack: [
      { name: "React", icon: FaReact },
      { name: "Node.js", icon: FaNodeJs },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Express.js", icon: SiExpress },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    title: "NashtoClub",
    description:
      "NashtoClub is a restaurant website designed to showcase food menus, services, and dining experiences. The platform features an intuitive user interface, visually stunning layouts, and responsive designs to attract customers. Built with React and CSS, it ensures smooth navigation and an engaging experience for visitors, promoting the brand’s identity effectively.",
    logo: "https://nashtoclub.netlify.app/assets/favicon-d27323cb.png",
    linkTitle: "Live here",
    link: "https://nashtoclub.netlify.app/",
    icon: CiStreamOn,
    iconColor: "text-green-400",
    techStack: [
      { name: "React", icon: FaReact },
      { name: "HTML5", icon: FaHtml5 },
      { name: "CSS3", icon: FaCss3Alt },
      { name: "Javascript", icon: SiJavascript },
    ],
  },
  {
    title: "Gym Website",
    description:
      "The Gym Website offers a  interactive platform to showcase gym services, programs, and trainers. Built with responsive design principles, it provides seamless navigation and visually appealing layouts. The site focuses on user engagement and features detailed sections to promote fitness and wellness programs effectively.",
    logo: "https://raw.githubusercontent.com/SonuMunda/FlexFitGym/bbf5ff480582515bd6b9409a134203e9a7b420f4/public/favicon.svg",
    linkTitle: "Live here",
    link: "https://flexfitgym.netlify.app/",
    icon: CiStreamOn,
    iconColor: "text-green-400",
    techStack: [
      { name: "React", icon: FaReact },
      { name: "HTML5", icon: FaHtml5 },
      { name: "CSS3", icon: FaCss3Alt },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Javascript", icon: SiJavascript },
    ],
  },
  {
    title: "EaseLingo",
    description:
      "A web application designed to simplify multilingual communication by leveraging the Franc library for accurate language detection and the Google Translate API for seamless text translation. Built on Netlify, Easelingo enables users to input text, automatically identify its language, and translate it into their desired language, making it a versatile tool for global communication and content localization.",
    logo: "https://easelingo.netlify.app/favicon.png",
    linkTitle: "Live here",
    link: "https://easelingo.netlify.app/",
    icon: CiStreamOn,
    iconColor: "text-green-400",
    techStack: [
      { name: "React", icon: FaReact },
      { name: "HTML5", icon: FaHtml5 },
      { name: "Javascript", icon: SiJavascript },
      { name: "CSS", icon: FaCss3Alt },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Google Translate API", icon: MdApi },
    ],
  },
  {
    title: "Weather App",
    description:
      "The Weather App delivers real-time weather updates by fetching data from the AccuWeather API. Users can search for cities and access accurate weather details, including temperature, humidity, and forecasts. The application is designed with a responsive and minimalistic interface for easy use across devices.",
    logo: "https://smweatherzone.netlify.app/favicon.png",
    linkTitle: "Live here",
    link: "https://smweatherzone.netlify.app/",
    icon: CiStreamOn,
    iconColor: "text-green-400",
    techStack: [
      { name: "React", icon: FaReact },
      { name: "HTML5", icon: FaHtml5 },
      { name: "Javascript", icon: SiJavascript },
      { name: "CSS", icon: FaCss3Alt },
    ],
  },
];

export default projects;
