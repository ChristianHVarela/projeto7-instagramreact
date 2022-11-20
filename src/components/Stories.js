import Gag from "../assets/9gag.svg"
import Meowed from "../assets/meowed.svg"
import Barked from "../assets/barked.svg"
import Nathanwpylestrangeplanet from "../assets/nathanwpylestrangeplanet.svg"
import Wawawicomics from "../assets/wawawicomics.svg"
import Respondeai from "../assets/respondeai.svg"
import Filomoderna from "../assets/filomoderna.svg"
import Memeriagourmet from "../assets/memeriagourmet.svg"
import Story from "./StoryUnico.js"

export default function Stories(){
    const stories = [   {title: "9gag", image: Gag},
                        {title: "meowed", image: Meowed},
                        {title: "barked", image: Barked},
                        {title: "nathanwpylestrangeplanet", image: Nathanwpylestrangeplanet},
                        {title: "wawawicomics", image: Wawawicomics},
                        {title: "respondeai", image: Respondeai},
                        {title: "filomoderna", image: Filomoderna},
                        {title: "memeriagourmet", image: Memeriagourmet}]

    return (
        <div className="stories">
            {stories.map((item, idx) => <Story title={item.title} image={item.image} key={idx} />)}
            <div className="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}