import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Link} from "react-router-dom";


const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    grid:{
        flexGrow: 1,
    }
});



function Meal(props) {
    const {idMeal,strMeal,strMealThumb} = props
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    component="img"

                    height="140"
                    image={strMealThumb}
                    title={strMeal}
                />
                <CardContent>
                    <Typography gutterBottom variant="h7" component="h3" noWrap >
                        {strMeal}
                    </Typography>

                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Share
                </Button>
                <Button size="small" color="primary" component={Link} to={`/meal/${idMeal}`}>
                    Watch Recipe
                </Button>
            </CardActions>
        </Card>
    );
}
export {Meal}