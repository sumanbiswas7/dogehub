import { useState } from "react";
import mvdev from "./MoviesDev.module.css";

export const MoviesDev = () => {
  const [downloadModal, setDownlaodModal] = useState(false);

  return (
    <div className={mvdev.main_container}>
      <button
        onClick={() => setDownlaodModal(true)}
        className={mvdev.download_btn}
      >
        Download Kota Factory 2
      </button>
      {downloadModal ? (
        <section className={mvdev.epsidode_container}>
          <a
            className={mvdev.episode}
            href="https://drive.google.com/uc?export=download&id=1Ma1hzgCcrVmwS5XObT5PdmvwbzvX3yCa"
            target="_blank"
            download
          >
            Episode 1
          </a>
          <a
            className={mvdev.episode}
            href="https://drive.google.com/uc?export=download&id=15SHlLzhjlRkUzt0OUdZaddJ3UkKezYU6"
            target="_blank"
            download
          >
            Episode 2
          </a>
          <a
            className={mvdev.episode}
            href="https://drive.google.com/uc?export=download&id=189j4Wun_cHie4H4ISc-TRKpAPJxdmZtn"
            target="_blank"
            download
          >
            Episode 3
          </a>
          <a
            className={mvdev.episode}
            href="https://drive.google.com/file/d/1PW8unLji2gwzYPNaVNCalCSdwFDJgtyc/view?usp=sharing"
            target="_blank"
            download
          >
            Episode 4
          </a>
          <a
            className={mvdev.episode}
            href="https://drive.google.com/file/d/146T12dSxE3bJ76GAsInb7cjrg9t1-g-1/view?usp=sharing"
            target="_blank"
            download
          >
            Episode 5
          </a>
        </section>
      ) : null}
    </div>
  );
};
