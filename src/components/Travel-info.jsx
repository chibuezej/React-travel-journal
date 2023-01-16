import SvgLocation from "../Assets/icon/svgLocation";
function TravelInfo (props) {
    console.log(props)
    return(
        <div>
            <div className="font-view">
                <img src={props.image} alt="mount-fuji" className="image"/>
                <div className="body">  
            <h4> <SvgLocation />{props.location} <span className="info" >{props.map}</span></h4>
            <h1>{props.title}</h1>
            <h4>{props.startDate}-{props.enddate}</h4>
            <p>{props.description}</p>
            </div>
         
            </div>
            <hr size="-100"/>
        </div>
    )
}

export default TravelInfo;