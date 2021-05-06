
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import Drawer from '@material-ui/core/Drawer';

import FolderIcon from '@material-ui/icons/Folder'
import List from '@material-ui/core/List';
import CreateNewFolderIcon from '@material-ui/icons/CreateNewFolder';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';



import TextField from '@material-ui/core/TextField';

const drawerWidth = 350;
const useStyles = makeStyles((theme) => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
        backgroundColor:"#F4F5FB",
    },
    drawrContainer:{
        overflow: 'auto',
        paddingTop:20,
    },
    toolbar: theme.mixins.toolbar,
    iconcolor:{color:"#7EB6FF"},
    list:{
        paddingTop:10,
        paddingLeft:20
    },
    title: {
        flexGrow: 1,
        margin:"30px 0px 20px 20px",
        display: "inline-block"
      },
    addfolder:{
        left:80,
        backgroundColor:"white",
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
      },
    dialog:{
        width:500,
        height:100,
    }
}));

function DialogSelect() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [age, setAge] = React.useState('');
  
    const handleChange = (event) => {
      setAge(Number(event.target.value) || '');
    };
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    return (
        <>
        <Button
                variant="contained"
                color="default"
                onClick={handleClickOpen}
                className={classes.addfolder}
                startIcon={ <CreateNewFolderIcon fontSize="large" className={classes.iconcolor} />}
            >
                新規フォルダ
            </Button>
        <Dialog  disableBackdropClick disableEscapeKeyDown open={open} onClose={handleClose}>
          <DialogTitle>新規フォルダ作成</DialogTitle>
          <DialogContent className={classes.dialog}>
            <form className={classes.container}>

                <TextField id="folder-name" label="フォルダ名" style={{ margin: 8 }}
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }} 
                 />

            </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleClose} color="primary">
              Ok
            </Button>
          </DialogActions>
        </Dialog>
    </>
    );
  }

function Sidebar(){
    const classes = useStyles();
    return (
    <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}

      >
      <Toolbar />
        <div className={classes.drawrContainer} />
        <Divider />
        <div>
            <Typography variant="h6" className={classes.title}>
                フォルダー
            </Typography>
            
            <DialogSelect />
        </div>
        <Divider />
        <List className={classes.list}> 
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon><FolderIcon fontSize="large" className={classes.iconcolor}/></ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    );
}

export default Sidebar;