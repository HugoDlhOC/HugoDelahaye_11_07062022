import {logements} from "../../assets/data/logements";
import {LodgingCard} from "../LodgingCard";
import "../../styles/style.css";

export function LodgingList(props){

    return <section id={"lodgings-list"}>
        {logements.map((logement, index) => {
            return <LodgingCard nameLocation={logement.title} imgLocation={logement.cover} linkNumber={index} />
        })}
    </section>
}