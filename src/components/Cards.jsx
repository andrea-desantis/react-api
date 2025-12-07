export default function Cards(props) {

    return (
        <>
            <div className="card">
                <img src={props.img} alt="" className="card-img-top" />
                <div className="card-body">
                    <h4 className="card-title">{props.name}</h4>
                    <div className="card-text">
                        <h6>{props.year}, {props.nationality}</h6>
                        <p>{props.biography}</p>
                        <p>won {props.awards}</p>
                    </div>
                </div>
            </div>
        </>
    );
}