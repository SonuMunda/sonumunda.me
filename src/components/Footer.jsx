import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-neutral-950 text-neutral-400 p-6 border-t border-neutral-800">
      <div className="flex flex-wrap justify-center items-center gap-4 text-2xl mb-6">
        <Link
          to="https://www.linkedin.com/in/sonu-munda-b8806b21a/"
          target="_blank"
          className="hover:text-blue-500 transition duration-300"
        >
          <BsLinkedin />
        </Link>
        <span className="text-neutral-600">/</span>
        <Link
          to="https://www.facebook.com/sonu.m.75685/"
          target="_blank"
          className="hover:text-blue-700 transition duration-300"
        >
          <FaFacebook />
        </Link>
        <span className="text-neutral-600">/</span>
        <Link
          to="https://instagram.com/sonumunda_"
          target="_blank"
          className="hover:text-purple-400 transition duration-300"
        >
          <FaInstagram />
        </Link>
        <span className="text-neutral-600">/</span>
        <Link
          to="MailTo: sonumunda1312@gmail.com"
          target="_blank"
          className="hover:text-red-500 transition duration-300"
        >
          <SiGmail />
        </Link>
        <span className="text-neutral-600">/</span>
        <Link
          to="https://github.com/sonumunda"
          target="_blank"
          className="hover:text-white transition duration-300"
        >
          <BsGithub />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
