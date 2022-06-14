import {Header} from "../../components/Header";
import {Banner} from "../../components/Banner";
import {LodgingList} from "../../components/LodgingList";
import imageBackgroundHome from "../../assets/images/banners/home-background.png";
import {Footer} from "../../components/Footer";

export function Home(){
    return <div>
        <Banner src={imageBackgroundHome} text={'Chez vous, partout et ailleurs'}/>
        <LodgingList/>
    </div>
}