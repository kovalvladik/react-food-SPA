
import React from 'react';
import {Container, IconButton} from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import {makeStyles} from "@material-ui/core/styles";
import TelegramIcon from '@material-ui/icons/Telegram';



const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#afc2cb',
        padding: theme.spacing(3, 2),
        marginTop:'20px',

    },
    icons:{
        position:'relative',
        left:'49%'

    }

}))

export default function Footer() {
    const classes = useStyles()
    return (
        <div   className={classes.root}>
            <IconButton   href='https://tlgg.ru/vladohk'  className={classes.icons} >
                <TelegramIcon  />
            </IconButton>
            <Container   component='main' maxWidth="md">

                <Typography align='center' variant="body2" >
                    © {new Date().getFullYear()} Kovalevskiy Production
                </Typography>
            </Container>
        </div>
    )
}