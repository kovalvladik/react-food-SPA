import {useState} from "react";
import React from 'react';
import InputBase from '@material-ui/core/InputBase';
import { alpha, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,


    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: '#afc2cb',
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),


        },
        marginLeft: 0,
        border:'2px',
        width: '30%',
        [theme.breakpoints.down('sm')]: {

            width: '100%',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color:'white'
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '30%',
        [theme.breakpoints.up('sm')]: {
            width: '100%',
            '&:focus': {
                width: '100%',
            },
        },
    },
    button:{
        color:'white',
    }
}));

function Search (props) {

    const classes = useStyles();

    const [value, setValue] = useState('')

    const {cb = Function.prototype} = props

    const handleKey = (e) => {
        if (e.key === 'Enter') {
            handleSubmit();
        }
    }
    const handleSubmit = () => {
        cb(value)
    }

    return(
    <div className={classes.search}>
        <div className={classes.searchIcon}>
            <SearchIcon />
        </div>
        <InputBase
            placeholder="Search…"
            classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
            }}
            inputProps={{ 'aria-label': 'search' }}
            onKeyDown={handleKey}
            onChange={(e)=>setValue(e.target.value)}
            value={value}
        />
        <Button onClick={handleSubmit}  className={classes.button}>
            Search
        </Button>
    </div>
    )
}
export {Search}