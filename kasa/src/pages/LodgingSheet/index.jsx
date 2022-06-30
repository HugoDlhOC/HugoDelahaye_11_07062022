import { LodgingDescription } from "../../components/LodgingDescription/LodgingDescription";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { errorPage } from "../../routes";

export const LodgingSheet = () => {
  const { linkNumber } = useParams(); //On récupère le numéro de la location cliquée
  const navigate = useNavigate();
  const [activeLogement, setActiveLogement] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`/HugoDelahaye_11_07062022/logements.json`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        const activeLogement = data.find(
          (logement) => logement.id === linkNumber
        );
        if (activeLogement) {
          setActiveLogement(activeLogement);
        } else {
          navigate(errorPage);
        }
      });
  }, [navigate, linkNumber]);

  return (
    <div>
      {isLoading && <p>Chargement ...</p>}
      {activeLogement && <LodgingDescription activeLogement={activeLogement} />}
    </div>
  );
};
