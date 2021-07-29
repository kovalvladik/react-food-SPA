
import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import {useHistory} from "react-router-dom";

const useStyles = makeStyles((theme)=>({
    root: {
        position:'absolute',
        top:'0.5rem',
        left:'5rem',
        backgroundColor:'#afc2cb',
        [theme.breakpoints.down('sm')]: {
            position:'fixed',
            top:'3.5rem',
            borderRadius:'50px',
            left: '0'

        },
        [theme.breakpoints.up('md')]: {
            maxHeight:400,

        },
        [theme.breakpoints.up('lg')]: {
            maxHeight:440,

        },
    },
    icon:{
        color:'white'
    }
}));

export default function ButtonNavigation() {
    const classes = useStyles();
    const {goBack} = useHistory()

    // const [value, setValue] = useState('recents');



    return (
        <BottomNavigation  className={classes.root}>
            <BottomNavigationAction label="Go Back"  icon={<RestoreIcon  className={classes.icon} />}  onClick={goBack}/>

        </BottomNavigation>
    );
}