import React from 'react';
import marked from "marked"
import { makeStyles } from '@material-ui/core/styles';
import MDViewer from "./MdViewer"
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';

class Mde extends React.Component{

    constructor(props){
        super(props);
        this.state = {markdown:"",title:""}
        this.updateMD = this.updateMD.bind(this)
        this.updateTitle = this.updateTitle.bind(this)
        this.classes = makeStyles((theme) => ({
            root: {
              flexGrow: 1,

            },
           
          }));
          
          
    }
    updateTitle(e){
        this.setState({title:e.target.value})
    }
    updateMD(e){
        this.setState({markdown:e.target.value})
    }
    render(){
        const h = window.innerHeight
        const html = marked(this.state.markdown)
        return(
            <div className={this.classes.root}>
                <TextField 
                    inputProps={{style: {fontSize: 30, lineHeight:1.4}}} 
                    style = {{width: '50%' , top:80, marginRight:50}}
                    onChange={this.updateTitle}
                    variant="filled"
                    label="タイトル入力"
                />
                <TextField
                        multiline
                        rows={h/38}
                        inputProps={{style: {fontSize: 20, lineHeight:1.4}}} 
                        variant="filled"
                        style = {{width: '50%' , top:120, marginRight:50}}
                        onChange={this.updateMD}
                           label="Markdownで本文を入力..."
                        />
                <Box style = {{width: '40%',height:h-300,  display: "inline-block",marginTop:10, overflow:"scroll" }} >
                    <InputBase
                            style = {{fontSize:30,color:"black",marginTop:15}}
                            disabled
                            fullWidth
                            value={this.state.title}

                        />
                    <Divider  style = {{position:"reactive",marginTop:50}}/>
                    <MDViewer  html={html} />
                </Box>
           
          </div>
        )
    }
}
export default Mde;

