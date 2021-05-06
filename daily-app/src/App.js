
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from "./Header"
import Sidebar from './Sidebar';
import PostList from "./PostList"
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
  
  }));
function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
    <Header />
    <Sidebar />
    <PostList />
  </div>
);
}


export default App;
