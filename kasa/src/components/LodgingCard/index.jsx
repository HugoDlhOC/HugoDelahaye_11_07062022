import '../../styles/style.css';
import {Link, useParams} from "react-router-dom";

export function LodgingCard({nameLocation, imgLocation, linkNumber}){
    return <div className={'card'}>
        <Link to={`/lodgingsheet/${linkNumber}`}>
            <img className={'cover-location'} src={imgLocation}/>
            <p className={'name-location'}>{nameLocation}</p>
        </Link>
    </div>
}