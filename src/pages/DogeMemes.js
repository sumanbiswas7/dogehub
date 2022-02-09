import PulseLoader from "react-spinners/PulseLoader";
import memesApi from "../api/memesApi";
import { useState, useEffect } from "react";
import dm from "./DogeMemes.module.css";
import { Meme } from "../components/Meme";

var allMemesReversed;
export const DogeMemes = () => {
  const [allMemes, setAllMemes] = useState([]);
  const [loader, setLoader] = useState(true);
  function fetchMemes() {
    memesApi
      .get("/memes")
      .then((res) => {
        setAllMemes(res.data.reverse());
        setLoader(false);
      })
      .catch((err) => console.error(err));
  }
  useEffect(() => {
    fetchMemes();
  });
  return (
    <div style={{ marginTop: 0 }}>
      <h1 className={dm.text_dapps}>DogeMemes</h1>
      {loader ? (
        <div className={dm.loader_container}>
          <PulseLoader color={"white"} />
        </div>
      ) : null}
      {loader ? null : <Meme memeData={allMemes} />}
    </div>
  );
};
