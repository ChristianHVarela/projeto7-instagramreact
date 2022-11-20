import { useState } from "react"

export default function PostUnico(props){

    const [curtido, setCurtido] = useState("heart-outline")
    const [classCurtir, setClassCurtir] = useState("")
    const [salvo, setSalvo] = useState("bookmark-outline")
    const [pessoas, setPessoas] = useState(props.qtdPessoas)

    function mudaCurtir(){
        if (curtido === "heart-outline"){
            setCurtido("heart")
            setClassCurtir("curtido")
            setPessoas(pessoas + 1)
        } else {
            setCurtido("heart-outline")
            setClassCurtir("")
            setPessoas(pessoas - 1)
        }
    }

    function mudaSalvar() {
        if (salvo === "bookmark-outline"){
            setSalvo("bookmark")
        } else {
            setSalvo("bookmark-outline")
        }
    }
    

    return (
        <div className="post" data-test="post">
            <div className="topo">
                <div className="usuario">
                    <img src={props.imagePerfil} alt="" />
                    {props.titlePerfil}
                </div>
                <div className="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div className="conteudo">
                <img src={props.imageBody} alt="" data-test="post-image" onClick={() => mudaCurtir()} />
            </div>

            <div className="fundo">
                <div className="acoes">
                    <div>
                        <ion-icon name={curtido} class={classCurtir} onClick={() => mudaCurtir()} data-test="like-post" ></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name={salvo} onClick={() => mudaSalvar()} data-test="save-post" ></ion-icon>
                    </div>
                </div>

                <div className="curtidas">
                    <img src={props.imageFinal} alt="" />
                    <div className="texto">
                        Curtido por <strong>{props.curtidoPor}</strong> e <strong data-test="likes-number" >outras {pessoas} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}