import {CategoryItem} from "./CategoryItem";
import {Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {useHistory} from "react-router-dom";

const useStyles = makeStyles({
    root: {
        marginLeft:'3px',
        padding:'4rem',
    },

});

function CategoryList ({catalog =[]} ) {
    const classes = useStyles();

    const {goBack} = useHistory()


    return<Grid container spacing={1}  className={classes.root}>

        {catalog.map(el =>(
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <CategoryItem key={el.id} {...el} />
            </Grid>

        ))}
    </Grid>
}
export {CategoryList}