

export default function SugestaoUnica(props){
    return (
        <div className="sugestao">
            <div className="usuario">
                <img src={props.image} alt="" />
                <div className="texto">
                    <div className="nome">{props.nome}</div>
                    <div className="razao">{props.razao}</div>
                </div>
            </div>

            <div className="seguir">Seguir</div>
        </div>
    )
}