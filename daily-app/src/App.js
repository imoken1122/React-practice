
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from "./Header"
import Sidebar from './Sidebar';
import PostList from "./PostList"
import PostEdit from "./PostEdit"
import Post from "./Post"
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
  
  }));
function App() {
  const classes = useStyles();
  return (

    <div className={classes.root}>
    {/*<Header />
    <Sidebar />
    <PostList /
    <PostEdit />*/}
    <Post />
  </div>
);
}


export default App;
