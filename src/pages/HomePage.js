import home from "./HomePage.module.css";
import big_logo from "../assets/doge_big.svg";
import { About } from "../components/About";
import { FaSignOutAlt } from "react-icons/fa";
import { auth } from "../firebase/Firebase";
import { useHistory } from "react-router";
import { useEffect, useState } from "react";
import { ConfrimationModal } from "../components/ConfrimationModal";
export const HomePage = () => {
  const history = useHistory();
  const [modal, isModalOpen] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const Modal = () => {
    isModalOpen(true);
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <p className={home.signout_container}>
        <button onClick={Modal} className={home.signout_button}>
          Sign Out
          <FaSignOutAlt color="lime" className={home.signout_icon} />
        </button>
      </p>
      <section className={home.mainContainer}>
        <li className={home.flexFixList}>
          <li className={home.shapeStyle}>
            <img src={big_logo} className={home.bigLogo} alt="doge_img" />
          </li>
          <h2 className={home.shapeText}>Dogehub</h2>
        </li>
        <section className={home.flexFixList}>
          <section className={home.comicShape}>
            <h4 className={home.greetingText}>Welcome to dogehub</h4>
          </section>
          <section className={home.greetingsParagraph}>
            <p>
              doge community is really happy you visited us. Take a look
              everywhere ... Ohh.. we're still working on doge memes section.
              Doge cheems all together working really hard to bring meme upload
              feature as soon as possible.
            </p>
            <p style={{ textAlign: "end" }}>- Vidhayak ji</p>
          </section>
        </section>
      </section>
      <p className={home.signout_container_2}>
        <button onClick={() => Modal()} className={home.signout_button}>
          Sign Out
          <FaSignOutAlt color="lime" className={home.signout_icon} />
        </button>
      </p>
      <About />
      {modal ? (
        <ConfrimationModal
          YesClick={() => auth.signOut().then(history.replace("/"))}
          NoClick={() => isModalOpen(false)}
          userName={auth.currentUser.email}
        />
      ) : null}
    </div>
  );
};
