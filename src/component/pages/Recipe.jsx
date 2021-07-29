import {useHistory,useParams} from "react-router-dom";
import {getMealById} from '../../api'
import {useEffect,useState} from "react";
import ButtonNavigation from "../ButtonNavigation";
import Preloader from "../Preloader";
import Typography from '@material-ui/core/Typography';
import {RecipeTable} from "../RecipeTable";
import {VideoRecipe} from "../VideoRecipe";
import {makeStyles} from "@material-ui/core/styles";
import { Card, Container, Grid, Paper} from "@material-ui/core";
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from "@material-ui/core/CardContent";


const useStyles = makeStyles((theme) => ({

    root: {
        flexGrow: 1,
        [theme.breakpoints.down('sm')]: {

        },
        [theme.breakpoints.up('md')]: {
        },
        [theme.breakpoints.up('lg')]: {
        },
    },
    paper: {
        height: 440,
        width: 580,
        minWidth:300,
        minHeight: 300,
        padding: theme.spacing(1),
        [theme.breakpoints.down('sm')]: {
            objectFit: 'contain',
            maxHeight:300,
            maxWidth:300,

        },
        [theme.breakpoints.up('md')]: {
        },
        [theme.breakpoints.up('lg')]: {
        },

    },
    typography:{
        paddingTop:'1rem',

    },

    card:{
        paddingTop:'2rem',
    },
}));


function Recipe() {

    const classes = useStyles();


    const [recipe, setRecipe] = useState({})

    const {id} = useParams()

    const {goBack } = useHistory()

    useEffect(()=>{
        getMealById(id).then((data) =>setRecipe(data.meals[0 ]))
    },[id])
    return<>
        <ButtonNavigation/>
        {!recipe.idMeal ? <Preloader/> :(
            <Container fixed className={classes.card}>
                        <Card >
                            <CardHeader title={recipe.strMeal} align='center'/>

                            <Grid container className={classes.root} spacing={0} >
                                <Grid item xs={12}>
                                    <Grid container justifyContent="center" spacing={5}>
                                            <Grid  item>
                                                        <Paper
                                                                   component="img"
                                                                   src={recipe.strMealThumb}
                                                                   className={classes.paper}
                                                                    ></Paper>
                                            </Grid>
                                        <Grid item>
                                            <Paper className={classes.paper}>
                                                <VideoRecipe recipe={recipe} />
                                            </Paper>
                                        </Grid>
                                    </Grid>
                                </Grid>


                                <CardContent>
                                    <Typography gutterBottom variant='h6' className={classes.typography}>
                                        {recipe.strInstructions}
                                    </Typography>

                                </CardContent>


                                            <RecipeTable/>


                                </Grid>

                        </Card>

        </Container>



        )}

    </>
}
export {Recipe}