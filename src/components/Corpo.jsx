import Stories from "./corpo/Stories"
import Posts from "./corpo/Posts"
import Sidebar from "./corpo/Sidebar"

export default function Corpo(){
    return(
        <div class="corpo">
            <div class="esquerda">
                <Stories />
                <Posts />
            </div>
            <Sidebar />
        </div>
    )
}