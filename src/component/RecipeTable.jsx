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

const useStyles = makeStyles((theme)=>({
    table: {
        mixWidth: 650,

    },
    head:{
        backgroundColor:'lightgray',
        color:'white',
    },
    container:{
        [theme.breakpoints.down('sm')]: {
            maxHeight: 400,
            maxWidth:386,


        },
        [theme.breakpoints.up('md')]: {
            maxHeight: 500,
        },

    },
}));

    function RecipeTable() {

        const [recipe, setRecipe] = useState({})

        const {id} = useParams()


        useEffect(()=>{
            getMealById(id).then((data) =>setRecipe(data.meals[0 ]))
        },[id])

        const classes = useStyles();
    return(
        <TableContainer component={Paper} className={classes.container}>
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

        </TableBody>
        </Table>
        </TableContainer>
        );
    }


export {RecipeTable}