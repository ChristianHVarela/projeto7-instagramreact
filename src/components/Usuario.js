import { useState } from "react"
import CatanaComics from "../assets/catanacomics.svg"

export default function Usuario(){
    const [usuario, setUsuario] = useState("Catana")
    const [foto, setFoto] = useState(CatanaComics)

    function mudaUsuario(){
      const usuarioPrompt = prompt("Qual nome do usuario?")
      setUsuario(usuarioPrompt.length > 0 ? usuarioPrompt : usuario)
    }

    function mudaFoto(){
      const fotoPrompt = prompt("Qual o link da sua foto ?")
      setFoto(fotoPrompt.length > 0 ? fotoPrompt : foto)
    }

    return (
        <div className="usuario" data-test="user">
          <img onClick={mudaFoto} src={foto} alt="" data-test="profile-image" />
          <div className="texto"> 
            <strong>catanacomics</strong>
            <span data-test="name">
              {usuario}
              <ion-icon onClick={mudaUsuario} name="pencil" data-test="edit-name"></ion-icon>
            </span>
          </div>
        </div>
    )
}