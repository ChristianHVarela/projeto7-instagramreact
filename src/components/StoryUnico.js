

export default function Story(props){
    return (
        <div className="story">
            <div className="imagem">
                <img src={props.image} alt="" />
            </div>
            <div className="usuario">
                {props.title}
            </div>
        </div>
    )
}