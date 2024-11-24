import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 p-6 border-t border-slate-800">
      <div className="flex flex-wrap justify-center items-center gap-4 text-2xl mb-6">
        <Link
          to="https://www.linkedin.com/in/sonu-munda-b8806b21a/"
          target="_blank"
          className="hover:text-white transition duration-300"
        >
          <BsLinkedin />
        </Link>
        <span className="text-slate-600">/</span>
        <Link
          to="https://www.facebook.com/sonu.m.75685/"
          target="_blank"
          className="hover:text-white transition duration-300"
        >
          <FaFacebook />
        </Link>
        <span className="text-slate-600">/</span>
        <Link
          to="https://instagram.com/sonumunda_"
          target="_blank"
          className="hover:text-white transition duration-300"
        >
          <FaInstagram />
        </Link>
        <span className="text-slate-600">/</span>
        <Link
          to="MailTo: sonumunda1312@gmail.com"
          target="_blank"
          className="hover:text-white transition duration-300"
        >
          <SiGmail />
        </Link>
        <span className="text-slate-600">/</span>
        <Link
          to="https://github.com/sonumunda"
          target="_blank"
          className="hover:text-white transition duration-300"
        >
          <BsGithub />
        </Link>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-4 text-sm uppercase tracking-widest">
        <Link to="/work" className="hover:text-white transition duration-300">
          Work
        </Link>
        <Link to="/about" className="hover:text-white transition duration-300">
          About
        </Link>
        <Link to="/" className="hover:text-white transition duration-300">
          Home
        </Link>
        <span className="font-medium text-slate-600">|</span>
        <Link to="/resume" className="hover:text-white transition duration-300">
          Resume
        </Link>
        <Link
          to="MailTo: sonumunda1312@gmail.com"
          className="hover:text-white transition duration-300"
        >
          Contact Me
        </Link>
      </div>

      <div className="mt-6 text-center">
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} Sonu Munda. Built with ❤️ by me.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
