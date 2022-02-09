import sad from "./SingleAppDetails.module.css";
import { AiOutlineDownload } from "react-icons/ai";
import { useState } from "react";

export const SingleAppDetails = (props) => {
  const [downloadModal, setDownloadModal] = useState(false);
  return (
    <div className={sad.main_container}>
      <section className={sad.small_container}>
        <h3 className={sad.app_name}>{props.appName}</h3>
        <section>
          <button onClick={() => setDownloadModal(true)} className={sad.button}>
            <AiOutlineDownload className={sad.download_icon} />
          </button>
        </section>
      </section>
      <p className={sad.app_detail}>{props.appDescription}</p>
      {downloadModal ? (
        <div>
          <p className={sad.warning_text}>
            please ignore all warnings on google drive, play store protect,
            google play protect etc.. please deny all warnings from antivirus
            and play protect, we don't intent to harm you. doge community just
            entertains you, they doesn't really make money for getting a play 
            protect assurance.
          </p>
          <a
            className={sad.download_btn}
            href={props.appLink}
            target="_blank"
            download
          >
            Download
          </a>
        </div>
      ) : null}
    </div>
  );
};
