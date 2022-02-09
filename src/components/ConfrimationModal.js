import cmm from "./ConfrimationModal.module.css";
export const ConfrimationModal = (props) => {
  return (
    <div className={cmm.main_container}>
      <section className={cmm.container}>
        <p className={cmm.text}>
          Logged In as {props.userName}. Do you wanna sign out ?
        </p>
        <section className={cmm.button_container}>
          <button onClick={props.YesClick} className={cmm.button}>
            Yes
          </button>
          <button onClick={props.NoClick} className={cmm.button}>
            No
          </button>
        </section>
      </section>
    </div>
  );
};
