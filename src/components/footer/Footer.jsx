import "./footer.css";
import { FaDev, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Vitaliy Prymak
      </a>

      <ul className="permalinks">
        <li>
          <a href="#" className="permalinks-item">
            Home
          </a>
          <a href="#about" className="permalinks-item">
            About
          </a>
          <a href="#experience" className="permalinks-item">
            Experience
          </a>
          <a href="#services" className="permalinks-item">
            Srvices
          </a>
          <a href="#portfolio" className="permalinks-item">
            Portfolio
          </a>
          <a href="#testimonials" className="permalinks-item">
            Testimonials
          </a>
          <a href="#contact" className="permalinks-item">
            Contact
          </a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://dev.to/vitalipri" target="_blank" rel="noreferrer">
          <FaDev />
        </a>
        <a href="https://github.com/VitaliPri" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
      </div>

      {/* <div className="footer__copyright">
        <small>&copy; All rights reserved</small>
      </div> */}
    </footer>
  );
}
