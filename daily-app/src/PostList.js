

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';

import IconButton from '@material-ui/core/IconButton';
import DescriptionIcon from '@material-ui/icons/Description';



import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';

import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';



import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';


const useStyles = makeStyles((theme) => ({
    root: {
        width: 'auto',

        paddingLeft:theme.spacing(48),
        paddingRight:theme.spacing(10),
        paddingTop:theme.spacing(15),
        backgroundColor: theme.palette.background.paper,
      },
    inline: {
        display: 'inline',
      },
    subheader:{
        margin:20,
    },
    icon:{

        color:"#E1E4F5"
    },
    foldername:{
        fontSize:33,
        color:"#3B3B3B"

    }
}));

const options = [
    "編集",
    "削除"
  ];
  
const ITEM_HEIGHT = 48;
function LongMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    return (
      <div>
        <IconButton
          aria-label="more"
          aria-controls="long-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          id="long-menu"
          anchorEl={anchorEl}
          keepMounted
          open={open}
          onClose={handleClose}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: '20ch',
            },
          }}
        >
          {options.map((option) => (
            <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
              {option}
            </MenuItem>
          ))}
        </Menu>
      </div>
    );
  }
function Post(){
    const classes = useStyles() 
    return(
        <>
        <ListItem>
        <ListItemAvatar>
            <DescriptionIcon className={classes.icon}  fontSize="large"/>
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          
        />
         2021年5月5日 1:30
        <LongMenu />
      </ListItem>
      <Divider variant="inset" component="li" />
    </>
  );
}

function PostList(){
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <div className={classes.subheader}>
            <Typography className={classes.foldername}>
                記事
            </Typography>
            </div>
            <Divider  />
            <List >
                <Post />
                <Post />
                <Post />
                <Post />
            </List>
        </div>
    );
}

export default PostList;