import "../../styles/style.css";
import { Link } from "react-router-dom";

export const LodgingCard = ({ nameLocation, imgLocation, linkNumber }) => {
  return (
    <div className={"card"}>
      <Link to={`/lodgingsheet/${linkNumber}`}>
        <img
          className={"cover-location"}
          src={imgLocation}
          alt={"photo location " + nameLocation}
        />
        <p className={"name-location"}>{nameLocation}</p>
      </Link>
    </div>
  );
};
