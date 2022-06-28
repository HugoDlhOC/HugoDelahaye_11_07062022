import {LodgingDescription} from "../../components/LodgingDescription/LodgingDescription";
import { useState, useEffect } from 'react';
import {useParams, useNavigate} from "react-router-dom";

export function LodgingSheet(props){
    const {linkNumber} = useParams();   //On récupère le numéro de la location cliquée
    const navigate = useNavigate();
    const [activeLogement, setActiveLogement] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('/logements.json')
            .then(response => response.json())
            .then(data => {
                setIsLoading(false);
                const activeLogement = data.find(logement => logement.id === linkNumber);
                if (activeLogement) {
                    setActiveLogement(activeLogement);
                } else {
                    navigate('/404');
                }
            })
    }, [navigate, linkNumber]);

    return (
        <div>
            {isLoading && <p>Chargement ...</p>}
            {activeLogement && <LodgingDescription activeLogement={activeLogement} />}
        </div>
    );
}