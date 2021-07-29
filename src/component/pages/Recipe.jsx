import {useHistory,useParams} from "react-router-dom";
import {getMealById} from '../../api'
import {useEffect,useState} from "react";
import ButtonNavigation from "../ButtonNavigation";
import Preloader from "../Preloader";
import Typography from '@material-ui/core/Typography';
import {RecipeTable} from "../RecipeTable";
import {VideoRecipe} from "../VideoRecipe";
import {makeStyles} from "@material-ui/core/styles";
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import {Card, Container, Grid, List, Paper} from "@material-ui/core";
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from "@material-ui/core/CardMedia";
import {green} from "@material-ui/core/colors";


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


                            {/*<Grid container*/}
                            {/*      direction="row"*/}
                            {/*      >*/}
                            {/*    <Grid item style={{height:'60%', width:'60%'}}>*/}
                            {/*        <CardMedia*/}
                            {/*                   component="img"*/}
                            {/*                   src={recipe.strMealThumb}*/}
                            {/*                   className={classes.image} ></CardMedia>*/}
                            {/*    </Grid>*/}
                            {/*    <Grid item className={classes.video} style={{height:'60%', width:'40%'}}>*/}
                            {/*        <VideoRecipe recipe={recipe} />*/}
                            {/*    </Grid>*/}
                            {/*</Grid>*/}



                            {/*<Typography component='h5'>*/}
                            {/*    { recipe.strCategory}*/}
                            {/*</Typography>*/}
                            {/*{recipe.strArea ? <Typography component='h6'>{recipe.strArea}</Typography> : null}*/}

                                {/*<img src={recipe.strMealThumb} className={classes.image} />*/}

                            <RecipeTable/>
                            {/*<VideoRecipe recipe={recipe}/>*/}
                                </Grid>
                        </Card>

        </Container>



        )}

    </>
}
export {Recipe}