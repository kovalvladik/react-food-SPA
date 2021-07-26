import {Meal} from "./Meal";
import {Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        marginTop:'20px',
        marginLeft:'3px'
    },

});


function MealList ({ meals }) {
    const classes = useStyles();

    return<Grid container spacing={1}  className={classes.root}>
        {meals.map((meal) =>(
            <Grid item xs={12} sm={6} md={4} lg={3}>
            <Meal key={meal.idMeal} {...meal}/>
            </Grid>
        ))}
    </Grid>
}
export {MealList}