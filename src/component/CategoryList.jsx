import {CategoryItem} from "./CategoryItem";
import {Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        marginTop:'20px',
        marginLeft:'3px'
    },

});

function CategoryList ({catalog =[]} ) {
    const classes = useStyles();

    return<Grid container spacing={1}  className={classes.root}>
        {catalog.map(el =>(
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <CategoryItem key={el.id} {...el} />
            </Grid>

        ))}
    </Grid>
}
export {CategoryList}