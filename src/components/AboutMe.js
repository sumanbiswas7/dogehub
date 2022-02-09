import abme from "./AboutMe.module.css";
import { About } from "./About";
import resume_icon from "../assets/resume_icon.svg";
import myCV from "../files/my_cv.pdf";
import { Link } from "react-router-dom";
import { useEffect } from "react";
export const AboutMe = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={abme.main_container}>
      <section className={abme.container}>
        <img
          src={resume_icon}
          className={abme.resume_icon}
          alt="resume_image.svg"
        />
        <p style={{ textAlign: "center" }}>
          <Link
            className={abme.download_btn}
            to={myCV}
            target="_blank"
            download
          >
            Download My CV
          </Link>
        </p>
      </section>
      <p style={{textAlign:'center',marginBottom:'10rem'}}>
        <a
          className={abme.github_link}
          href="https://github.com/sumanbiswas7"
          target="_blank"
        >
          &#8674; my github repo
        </a>
      </p>
      <About />
    </div>
  );
};
