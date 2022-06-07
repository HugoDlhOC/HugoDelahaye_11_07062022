import '../../styles/lodgingCard.css';

export function LodgingCard({nameLocation, imgLocation}){
    return <div className={'card'}>
        <img className={'cover-location'} src={imgLocation}/>
        <p className={'name-location'}>{nameLocation}</p>
    </div>
}