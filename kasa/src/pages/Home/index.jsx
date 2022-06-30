import { Banner } from "../../components/Banner";
import { LodgingList } from "../../components/LodgingList";
import imageBackgroundHome from "../../assets/images/banners/home-background.png";

export const Home = () => {
  return (
    <div>
      <Banner
        src={imageBackgroundHome}
        text={"Chez vous, partout et ailleurs"}
      />
      <LodgingList />
    </div>
  );
}
