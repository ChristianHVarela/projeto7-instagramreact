import BodyEsquerda from "./BodyEsquerda";
import SideBar from "./SideBar";

export default function Body(){

    return (
        <div className="corpo">
            <BodyEsquerda />
            <SideBar />
        </div>
    )
}