import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import PostEditHeader from "./PostEditHeader"
import Mde from "./markdown-utils/MdEditer"
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
  
  }));
function PostEdit() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <PostEditHeader />
      <Mde />

    </div>
);
}
export default PostEdit;