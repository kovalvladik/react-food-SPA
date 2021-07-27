import { useParams} from "react-router-dom";

function VedeoRecipe (props) {

const {recipe} = props
    const {id} = useParams()


    return <>
        <div>
            <iframe
                title={id}
                src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(-11)}`}
                allowFullScreen
            />
        </div>
    </>
}
export {VedeoRecipe}