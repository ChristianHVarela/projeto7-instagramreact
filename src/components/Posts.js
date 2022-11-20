import Meowed from "../assets/meowed.svg"
import Gatotelefone from "../assets/gato-telefone.svg"
import Respondeai from "../assets/respondeai.svg"
import Barked from "../assets/barked.svg"
import Dog from "../assets/dog.svg"
import Adorableanimals from "../assets/adorable_animals.svg"
import PostUnico from "./PostUnico"

export default function Posts(){
    const posts = [ {imagePerfil: Meowed, titlePerfil: "meowed", imageBody: Gatotelefone, imageFinal: Respondeai, curtidoPor: "respondeai", qtdPessoas: 101523},
                    {imagePerfil: Barked, titlePerfil: "barked", imageBody: Dog, imageFinal: Adorableanimals, curtidoPor: "adorable_animals", qtdPessoas: 99159}]


    return (
        <div className="posts">
            {posts.map((item) => <PostUnico key={item.titlePerfil} imagePerfil={item.imagePerfil} titlePerfil={item.titlePerfil} imageBody={item.imageBody} imageFinal={item.imageFinal} curtidoPor={item.curtidoPor} qtdPessoas={item.qtdPessoas} />)}
        </div>
    )
}
