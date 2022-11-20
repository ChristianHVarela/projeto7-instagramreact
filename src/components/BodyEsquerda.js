import Posts from "./Posts";
import Stories from "./Stories";


export default function BodyEsquerda(){
    return (
        <div className="esquerda">
            <Stories />
            <Posts />
        </div>
    )
}