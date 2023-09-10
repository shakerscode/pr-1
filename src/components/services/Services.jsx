import "./services.css";
import { BiCheck } from "react-icons/bi";

export default function Services() {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Responsive Website Design: Creating visually appealing and
                responsive websites that adapt seamlessly across various devices
                and screen sizes.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Custom Web Applications: Developing tailored web applications
                with interactive features and intuitive user interfaces to
                address specific business requirements.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Front-end Development: Crafting engaging user experiences
                through proficient use of HTML, CSS, JavaScript and React
                technologies.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Performance Optimization: Implementing optimization techniques
                to enhance website speed, performance, and overall user
                satisfaction.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Implementing effective SEO strategies to boost website
                visibility, improve search engine rankings, and drive organic
                traffic for increased online presence.
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}
