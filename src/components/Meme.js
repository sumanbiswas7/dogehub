import meme from "./Meme.module.css";
export const Meme = ({ memeData }) => {
  return (
    <>
      {memeData.map((obj) => {
        return (
          <ul className={meme.ul_meme}>
            <li className={meme.list_meme}>
              {/* <p className={meme.caption}>{obj.title}</p> */}
              <img className={meme.meme_img} src={obj.url} alt="memes.png" />
              {/* <p className={meme.postedBy}>{obj.source}</p> */}
            </li>
          </ul>
        );
      })}
    </>
  );
};
