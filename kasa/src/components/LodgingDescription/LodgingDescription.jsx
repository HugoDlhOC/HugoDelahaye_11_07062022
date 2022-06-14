import {Collapse} from "../Collapse";
import {useParams} from "react-router-dom";
import {logements} from "../../assets/data/logements";
import {Tag} from "../Tag";
import {Star} from "../Star";
import {Owner} from "../Owner";

export function LodgingDescription(props){
    const {linkNumber} = useParams();   //On récupère le numéro de la location cliquée
    console.log(linkNumber);
    logements[linkNumber].equipments.forEach(item => console.log(item));
    return <div>
        <h2>{logements[linkNumber].title}</h2>
        <p>{logements[linkNumber].location}</p>
        <div className={"tags"}>
            {logements[linkNumber].tags.map(tag => {
                    return <Tag content={tag}/>;
                })
            }
        </div>

        <div className={"evaluation"}>
            <p>{logements[linkNumber].rating}</p>
            <Star fill={"#FF6060"} width={"30"} height={"30"}></Star>
            <Star fill={"#E3E3E3"} width={"30"} height={"30"}></Star>

            }
        </div>

        <Owner name={logements[linkNumber].host.name} picture={logements[linkNumber].host.picture}/>

        <Collapse title={"Description"} content={logements[linkNumber].description}></Collapse>
        <Collapse title={"Équipements"} content={`<ul class="list-equipments">` + logements[linkNumber].equipments.map(equipment => {
            console.log(equipment)
            return `<li>${equipment}</li>`;
        }) + `</ul>`}></Collapse>
    </div>
}