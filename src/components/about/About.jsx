import "./about.css";
import ME from "../../assets/ME.jpeg";
import { FaAward } from "react-icons/fa";
import { PiCertificate } from "react-icons/pi";
import { VscFolderLibrary } from "react-icons/vsc";

export default function About() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>2+ Years</small>
            </article>
            <article className="about__card">
              <PiCertificate className="about__icon" />
              <h5>Certificates</h5>
              <small>5 Udemy</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>20+ Completed</small>
            </article>
          </div>
          <p>
            I am a passionate front-end developer with a keen eye for creating
            visually appealing and user-friendly web experiences. With a solid
            foundation in HTML, CSS, JavaScript, React and Tailwind I specialize
            in translating design concepts into seamless, interactive
            interfaces. My goal is to craft engaging websites that not only
            captivate users but also deliver a smooth and responsive journey
            across devices.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let&apos;s Talk
          </a>
        </div>
      </div>
    </section>
  );
}
