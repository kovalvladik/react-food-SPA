import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Link,useHistory} from "react-router-dom";

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    grid:{
        flexGrow: 1,
    }
});


function CategoryItem (props) {
    const {idCategory,strCategory,strCategoryThumb,strCategoryDescription} = props

    const classes = useStyles();


    return(
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image={strCategoryThumb}
                    title={idCategory}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {strCategory}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p"  noWrap>
                        {strCategoryDescription}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary" component={Link} to={`/category/${strCategory}`}>
                    Learn More
                </Button>
            </CardActions>
        </Card>
    );
}
export {CategoryItem}





