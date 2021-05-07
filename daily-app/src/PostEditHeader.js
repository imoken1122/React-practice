import React from 'react';
import {fade ,makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import CheckIcon from '@material-ui/icons/Check';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    appbar:{
        backgroundColor:"#F2F6FA",
        zIndex: theme.zIndex.drawer + 1,
    },

    pubbutton:{

       backgroundColor:"#4A8ADA",
       color:"white",
        marginRight:50,
       '&:hover': {
        backgroundColor: '#0069d9',
        borderColor: '#0062cc',
        boxShadow: 'none',
      },
    },
    backbutton:{
        backgroundColor:"transparent" ,
        '&:hover': {
            backgroundColor: '#transparant',
            borderColor: 'transparent',
            boxShadow: 'none',
        },
    },
    backicon:{
        color:"#4A8ADA",
        margin:"0px 0px 0px 30px",
        fontSize:30,

    },
    text:{
        display: "inline-block",
        color:"#4A8ADA",
        fontSize:20,
        flexGrow: 1,
        margin:"5px 0px 0px 0px", 

    },
  
}));

function PostEditHeader(){
    const classes = useStyles();
    const preventDefault = (event) => event.preventDefault();
    return (
        <AppBar position="fixed" className={classes.appbar}>
        <Toolbar>

            <ArrowBackIosIcon className={classes.backicon}/>
                <Typography  className={classes.text}>
                <Link href="#" onClick={preventDefault} >
                        戻る
                        </Link>
                </Typography > 

          <Button
            variant="contained"
                className={classes.pubbutton}
                startIcon={<CheckIcon fontSize="midium" />}
                size="large"

            >
                 <Typography >
                    投稿する
                 </Typography>
        </Button>

        </Toolbar>
      </AppBar>

    )

}
export default PostEditHeader;