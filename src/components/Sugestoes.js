import BadVibesMemes from "../assets/bad.vibes.memes.svg"
import Chibirdart from "../assets/chibirdart.svg"
import RazoesParaAcreditar from "../assets/razoesparaacreditar.svg"
import AdorableAnimals from "../assets/adorable_animals.svg"
import SmallCuteCats from "../assets/smallcutecats.svg"
import SugestaoUnica from "./SugestaoUnica"

export default function Sugestoes(){
    const sugestoes = [ {image: BadVibesMemes, nome: "bad.vibes.memes", razao: "Segue você"},
                        {image: Chibirdart, nome: "chibirdart", razao: "Segue você"},
                        {image: RazoesParaAcreditar, nome: "razoesparaacreditar", razao: "Novo no Instagram"},
                        {image: AdorableAnimals, nome: "adorable_animals", razao: "Segue você"},
                        {image: SmallCuteCats, nome: "smallcutecats", razao: "Segue você"}]

    return (
        <div className="sugestoes">
            <div className="titulo">
            Sugestões para você
            <div>Ver tudo</div>
            </div>

            {sugestoes.map((item, idx) => <SugestaoUnica image={item.image} nome={item.nome} razao={item.razao} key={idx} />)}

        </div>
    )
}