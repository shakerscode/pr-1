import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaDev } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/vitaliy-prymak/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/VitaliPri" target="_blank" rel="noreferrer">
        <FaGithub />
      </a>
      <a href="https://dev.to/vitalipri" target="_blank" rel="noreferrer">
        <FaDev />
      </a>
    </div>
  );
};

export default HeaderSocials;
