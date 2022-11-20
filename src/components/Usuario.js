import { useState } from "react"
import CatanaComics from "../assets/catanacomics.svg"

export default function Usuario(){
    const [usuario, setUsuario] = useState("Catana")
    const [foto, setFoto] = useState(CatanaComics)

    function mudaUsuario(){
      const usuario = prompt("Qual nome do usuario?")
      setUsuario(usuario)
    }

    function mudaFoto(){
      const foto = prompt("Qual o link da sua foto ?")
      setFoto(foto)
    }

    return (
        <div className="usuario">
          <img onClick={mudaFoto} src={foto} alt="" />
          <div className="texto"> 
            <strong>catanacomics</strong>
            <span>
              {usuario}
              <ion-icon onClick={mudaUsuario} name="pencil"></ion-icon>
            </span>
          </div>
        </div>
    )
}