import dapps from "./DogeApps.module.css";
import { SingleAppDetails } from "../components/SingleAppDetails";
import { MoviesDev } from "../components/MoviesDev";

export const DogeApps = () => {
  return (
    <div>
      <h1 className={dapps.text_dapps}>DogeApps</h1>
      <MoviesDev />
      <SingleAppDetails
        appName="DogeSports TV"
        appDescription="wanna get updated with latest sports news ? dogesports tv is here...
        we'll keep you updated with the latest sports news. separated football and cricket section
        as well as all sports. be the first to know about latest transfers, injuries, talks etc..."
        appLink="https://drive.google.com/uc?export=download&id=1BsblYk6UIY8a1j1SIqROkErevIcN4YJa"
      />
      <SingleAppDetails
        appName="DogeEats"
        appDescription="wanna know the secret behind giant doge's physique ? obviously healthy food.
        let us introduce you to DogeEats. get familiar with healthy foods. download now !"
        appLink="https://drive.google.com/uc?export=download&id=1li2cu1kYSa1AkZXcCsDPdzMv7nIWyTnV"
      />
      <p className={dapps.more_text}>More coming soon...</p>
    </div>
  );
};
