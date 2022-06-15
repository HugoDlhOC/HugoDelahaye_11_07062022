import {Collapse} from "../Collapse";
import {useParams, useNavigate} from "react-router-dom";
import {logements} from "../../assets/data/logements";
import {Tag} from "../Tag";
import {Star} from "../Star";
import {Owner} from "../Owner";

export function LodgingDescription(props){
    let navigate = useNavigate();
    const {linkNumber} = useParams();   //On récupère le numéro de la location cliquée
    console.log(linkNumber);
    const tab = [1, 2, 3, 4, 5];
    const activeLogement = logements.find(logement => logement.id === linkNumber);
    if(activeLogement === undefined){   //Si le logement n'est pas trouvé, alors on affiche la page d'erreur
        navigate("/");  //test avec la page d'accueil
    }
    console.log(activeLogement);
    activeLogement.equipments.forEach(item => console.log(item));
    return <div>
        <h2>{activeLogement.title}</h2>
        <p>{activeLogement.location}</p>
        <div className={"tags"}>
            {activeLogement.tags.map(tag => {
                    return <Tag content={tag}/>;
                })
            }
        </div>

        <div className={"evaluation"}>
            <p>{activeLogement.rating}</p>
            {tab.map((item, index) => (<Star fill={index + 1 > activeLogement.rating ? "#E3E3E3" : "red"} width={"30"} height={"30"}></Star>))}
        </div>

        <Owner name={activeLogement.host.name} picture={activeLogement.host.picture}/>

        <Collapse title={"Description"} content={activeLogement.description}></Collapse>
        <Collapse title={"Équipements"} content={`<ul class="list-equipments">` + activeLogement.equipments.map(equipment => {
            console.log(equipment)
            return `<li>${equipment}</li>`;
        }) + `</ul>`}></Collapse>
    </div>
}