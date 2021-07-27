import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {useHistory, useParams} from "react-router-dom";
import {getMealById} from "../api";

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
    head:{
        backgroundColor:'lightgray',
        color:'white',
    }
});

// function createData(name, calories, fat, carbs, protein) {
//     return { name, calories, fat, carbs, protein };
// }
//
// const rows = [
//     createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//     createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//     createData('Eclair', 262, 16.0, 24, 6.0),
//     createData('Cupcake', 305, 3.7, 67, 4.3),
//     createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];


    function RecipeTable() {

        const [recipe, setRecipe] = useState({})

        const {id} = useParams()


        useEffect(()=>{
            getMealById(id).then((data) =>setRecipe(data.meals[0 ]))
        },[id])

        const classes = useStyles();
    return(
        <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
        <TableHead className={classes.head}>
        <TableRow>
        <TableCell>Ingredient</TableCell>
        <TableCell >Measure</TableCell>
        </TableRow>
        </TableHead>
        <TableBody>
            {Object.keys(recipe).map((key) =>{
                if (key.includes('Ingredient') && recipe[key]){
                    return(
                        <TableRow key={key}>
                            <TableCell>{recipe[key]}</TableCell>
                            <TableCell>{recipe[`strMeasure${key.slice(13)}`]}</TableCell>
                        </TableRow>
                    )
                } return null
            })}

    {/*{rows.map((row) => (*/}
    {/*    <TableRow key={row.name}>*/}
    {/*    <TableCell component="th" scope="row">*/}
    {/*{row.name}*/}
    {/*    </TableCell>*/}
    {/*    <TableCell align="right">{row.calories}</TableCell>*/}
    {/*    <TableCell align="right">{row.fat}</TableCell>*/}

    {/*    </TableRow>*/}
    {/*    ))}*/}
        </TableBody>
        </Table>
        </TableContainer>
        );
    }


export {RecipeTable}