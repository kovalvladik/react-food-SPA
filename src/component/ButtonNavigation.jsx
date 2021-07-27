
import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import {useHistory} from "react-router-dom";

const useStyles = makeStyles({
    root: {
        position:'absolute',
        top:'0.5rem',
        left:'5rem',
        backgroundColor:'#afc2cb',
    },
    icon:{
        color:'white'
    }
});

export default function ButtonNavigation() {
    const classes = useStyles();
    const {goBack} = useHistory()

    // const [value, setValue] = useState('recents');



    return (
        <BottomNavigation  className={classes.root}>
            <BottomNavigationAction label="Go Back"  icon={<RestoreIcon  className={classes.icon} />}  onClick={goBack}/>
            {/*<BottomNavigationAction label="Favorites" value="favorites" icon={<FavoriteIcon />} />*/}

        </BottomNavigation>
    );
}