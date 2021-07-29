import { useParams} from "react-router-dom";
import CardMedia from '@material-ui/core/CardMedia'
import {makeStyles} from "@material-ui/core/styles";
import {green} from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({

    root: {
        flexGrow: 1,
        [theme.breakpoints.down('sm')]: {
            maxHeight:300,

        },
        [theme.breakpoints.up('md')]: {
            maxHeight:400,

        },
        [theme.breakpoints.up('lg')]: {
            maxHeight:440,

        },
    },

}));

function VideoRecipe (props) {

    const classes = useStyles();


    const {recipe} = props

    const {id} = useParams()

    return <>
        <div>
            <CardMedia
                       component='iframe'
                       image={`https://www.youtube.com/embed/${recipe.strYoutube.slice(-11)}`}
                       allowFullScreen
                       className={classes.root}
                       height='440'


            >
            </CardMedia>

        </div>
    </>
}
export {VideoRecipe}