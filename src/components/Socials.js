// import icons
import { ImFacebook, ImInstagram, ImGithub, ImLinkedin } from "react-icons/im";
// import cursor context

const Socials = () => {
  return (
    <div className="hidden xl:flex ml-24">
      <ul className="flex gap-x-4">
        <li>
          <a
            href="https://www.facebook.com/youssef.emad.33"
            target="_blank"
            rel="noreferrer noopener"
          >
            <ImFacebook />
          </a>
        </li>

        <li>
          <a
            href="https://www.instagram.com/youssef_3mad_7/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <ImInstagram />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/youssefemad7"
            target="_blank"
            rel="noreferrer noopener"
          >
            <ImGithub />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/youssef-emad-2a69a5266/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <ImLinkedin />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
