import "../../styles/style.css";
import {logements} from "../../assets/data/logements";

export function Banner({src, text}){  //à la place de props & props.src
    console.log(logements)
    return <section id={'banner'}>
        <img src={src}/>
        <h2 id={'text-banner'}>{text}</h2>
    </section>
}