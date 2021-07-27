import { useParams} from "react-router-dom";
import CardMedia from '@material-ui/core/CardMedia'

function VedeoRecipe (props) {

    const {recipe} = props

    const {id} = useParams()

    return <>
        <div>
            <CardMedia>
                <iframe
                    title={id}
                    src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(-11)}`}
                    allowFullScreen
                />
            </CardMedia>

        </div>
    </>
}
export {VedeoRecipe}