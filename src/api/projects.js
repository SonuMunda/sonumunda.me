import { CiStreamOn } from "react-icons/ci";
import {
  FaReact,
  FaNodeJs,
  FaCss3Alt,
  FaHtml5,
  FaGithub,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiJavascript,
} from "react-icons/si";

const projects = [
  {
    id: 1,
    title: "Edudocs",
    description:
      "Edudocs is a platform crafted to simplify access to educational resources. It enables students and educators to create, share, and manage notes and documents collaboratively. The platform supports multiple formats and tools to ensure a seamless learning and teaching experience. With a clean interface and advanced organizational features, Edudocs enhances productivity in educational environments.",
    logo: "https://github.com/SonuMunda/edudocs/blob/main/src/assets/images/logo.png?raw=true",
    whiteBg: true,
    linkTitle: "Repo",
    link: "https://github.com/SonuMunda/Edudocs",
    icon: FaGithub,
    iconColor: "text-white",
    techStack: [
      { name: "React", icon: FaReact },
      { name: "Node.js", icon: FaNodeJs },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Express.js", icon: SiExpress },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    id: 2,
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
  {
    id: 3,
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
    id: 4,
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
];

export default projects;
