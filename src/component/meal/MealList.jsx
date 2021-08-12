import {Meal} from "./Meal";
import {Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import ButtonNavigation from "../ButtonNavigation";

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        padding:'3rem'
        // marginLeft:'3px'
    },

});


function MealList ({ meals }) {
    const classes = useStyles();

    return<Grid container spacing={3}  className={classes.root}>
        {meals.map((meal) =>(
            <Grid item xs={12} sm={6} md={4} lg={3}>
            <Meal key={meal.idMeal} {...meal}/>
            </Grid>
        ))}
    </Grid>
}
export {MealList}