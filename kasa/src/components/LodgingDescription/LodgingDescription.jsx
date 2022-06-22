import {Collapse} from "../Collapse";
import {useParams, useNavigate} from "react-router-dom";
import {logements} from "../../assets/data/logements";
import {Gallery} from "../Gallery";
import {Tag} from "../Tag";
import {Star} from "../Star";
import {Owner} from "../Owner";
import {useEffect} from "react";

export function LodgingDescription(props){
    let navigate = useNavigate();
    const {linkNumber} = useParams();   //On récupère le numéro de la location cliquée
    const tab = [1, 2, 3, 4, 5];
    const activeLogement = logements.find(logement => logement.id === linkNumber);


    useEffect(() => {
        if(!activeLogement){   //Si le logement n'est pas trouvé, alors on affiche la page d'erreur
            navigate("/");  //test avec la page d'accueil
        }
    }, [activeLogement]);

    if(!activeLogement){
        return null;
    }

    console.log(activeLogement);
    activeLogement.equipments.forEach(item => console.log(item));
    return <section id={"lodging-description"}>
        <div id={"container-gallery"}>
            <Gallery logement={activeLogement}/>
        </div>
        <div id={"container-primary-infos"}>
            <div id={"container-logement-infos"}>
                <h2 id={"active-name-location"}>{activeLogement.title}</h2>
                <p id={"active-place-location"}>{activeLogement.location}</p>
                <div className={"tags"}>
                    {activeLogement.tags.map(tag => {
                            return <Tag content={tag}/>;
                        })
                    }
                </div>
            </div>
            <div id={"container-owner-stars"}>
                <div id={"container-owner"}>
                    <Owner name={activeLogement.host.name} picture={activeLogement.host.picture}/>
                </div>
                <div id={"evaluation"}>
                    {tab.map((item, index) => (<Star fill={index + 1 > activeLogement.rating ? "#E3E3E3" : "red"} width={"30"} height={"30"} className={"star"}></Star>))}
                </div>
            </div>
        </div>
        <div id={"collapses"}>
            <Collapse title={"Description"} id={"collapse-description"}><p className={"description-logement-collapse"}>{activeLogement.description}</p></Collapse>
            <Collapse title={"Équipements"} id={"collapse-equipments"}>
            <ul className={"list-equipments"}>
                {activeLogement.equipments.map(equipment => <li>{equipment}</li>)}
            </ul>
            </Collapse>
        </div>
    </section>
}