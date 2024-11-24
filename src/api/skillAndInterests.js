import { FaHtml5, FaNodeJs, FaTools, FaMusic } from "react-icons/fa";

const skillAndInterests = [
  {
    id: 1,
    title: "Front-End Development",
    icon: FaHtml5,
    description:
      "Expertise in creating responsive and dynamic user interfaces with HTML, CSS, JavaScript, React, and other front-end tools.",
    styleClasses: "border-orange-600 text-orange-600 hover:bg-orange-600",
  },
  {
    id: 2,
    title: "Back-End Development",
    icon: FaNodeJs,
    description:
      "Experience in creating and maintaining server-side applications with Node.js, Express, and managing databases with MongoDB.",
    styleClasses: "border-green-600 text-green-600 hover:bg-green-600",
  },
  {
    id: 3,
    title: "Tool Exploration",
    icon: FaTools,
    description:
      " Always exploring new development tools, frameworks, and libraries to optimize workflow and improve project efficiency.",
    styleClasses: "border-blue-600 text-blue-600 hover:bg-blue-600",
  },

  {
    id: 4,
    title: "Music",
    icon: FaMusic,
    description:
      "I enjoy exploring various music genres which fuels my creativity and helps me stay focused and inspired.",
    styleClasses: "border-purple-600 text-purple-600 hover:bg-purple-600",
  },
];

export default skillAndInterests;
