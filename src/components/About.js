import about from "./About.module.css";
import {
  AiFillInstagram,
  AiFillFacebook,
  AiFillTwitterCircle,
  AiFillYoutube,
} from "react-icons/ai";
import dogehub_logo from "../assets/dogehub_logo.svg";
import { Link } from "react-router-dom";

export const About = () => {
  return (
    <footer className={about.main_container}>
      <h2 className={about.about_text}>About</h2>
      <div className={about.textContainer}>
        <section className={about.textSection}>
          <p style={{ marginBottom: 0 }}>
            dogehub webapp is based on the meme became popular in 2013. The meme
            typically consists of a picture of a Shiba Inu dog accompanied by
            multicolored text in Comic Sans font in the foreground. The text,
            representing a kind of internal monologue, is deliberately written
            in a form of broken English. #dogetothemoon
          </p>
          <Link className={about.contact_btn} to="/about">
            Contact Me
          </Link>
        </section>
      </div>
      <section className={about.icon_main_container}>
        <a
          href="https://www.facebook.com/profile.php?id=100009266254381"
          target={"_blank"}
          rel="noreferrer"
        >
          <div className={about.icon_container}>
            <AiFillFacebook className={about.icon} />
          </div>
        </a>
        <a
          href="https://www.instagram.com/sumanbiswas7/"
          target={"_blank"}
          rel="noreferrer"
        >
          <div className={about.icon_container}>
            <AiFillInstagram className={about.icon} />
          </div>
        </a>
        <a
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ/"
          target={"_blank"}
          rel="noreferrer"
        >
          <div className={about.icon_container}>
            <AiFillYoutube className={about.icon} />
          </div>
        </a>
        <a
          href="https://twitter.com/SumanBi20341056/"
          target={"_blank"}
          rel="noreferrer"
        >
          <div className={about.icon_container}>
            <AiFillTwitterCircle className={about.icon} />
          </div>
        </a>
      </section>
      <p style={{ textAlign: "center", marginTop: 0 }}>
        <img className={about.footer_logo} src={dogehub_logo} alt="doge_logo" />
      </p>
      <footer className={about.copyright}>
        <small className={about.copyright}>
          &copy; Copyright 2021, Suman Biswas.
        </small>
      </footer>
    </footer>
  );
};
