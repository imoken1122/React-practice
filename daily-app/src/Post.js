
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from "./Header"
import MDViewer from "./markdown-utils/MdViewer"
import marked from 'marked';
import CreateIcon from '@material-ui/icons/Create';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import Button from  '@material-ui/core/Button';
const useStyles1 = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    cnt:{
        width:100,
        marginTop:1000
    },
    topblock:{
        width:900,
        marginTop:100,
        
        
    },
    editbutton:{
        marginLeft:700,

    }
  }));
function Post() {
  const str = `
  ## 思ったこと・分かったこと
  - 探求する精神(途中３割)
      - 最初の方は, 学生時代のこと, 自分が読んだ本の中の物理学者, 哲学者の話
      - -子供の頃からもはや生きてる環境が違いすぎたし, 自分がやってきたと思うこともまだまだ初歩にしかすぎないことだらけだと思った. 
      - 科学者になる人は高校生あたりですでに自然科学だけでなく哲学、歴史、文学など様々な学問に触れてきて, 総じて小さい頃から考えることができて, 批判的思考もできる(カントの純粋理性批判への批判) ,言葉の意味に厳しい,
      - だから偉人の伝記は面白いのかもしれない. 考えることが面白いから
  - Reactで投稿画面作るのに苦戦, 
      - 投稿ボタンが固定位置にならない -> なぜかmaterial-uiでやるとうまくいくのでcssでできるようになりたい
      - div を横に並べられない -> なぜか急にうまくいった

  ## やったこと
  - 抹茶クリームonパンケーキを作った
  - 投稿画面を作った,が途中
  - 探求する精神を読んでる
  - 動物行動学-読了 
  
  ## 明日やろうとしてること
  - markdownEditer をツールとして作る
  - Post画面を作る
  
  
  `
  const html = marked(str)
  const classes = useStyles1();
  return (
    <div className={classes.root}>
        <Header />
        <Container className={classes.topblock}>
            
            <InputBase
                style = {{fontSize:50,color:"black",marginTop:50,}}
                disabled
                fullWidth
                value="今日の出来事"

               />

                <Button
                    variant="contained"
                        startIcon={<CreateIcon fontSize="medium" />}
                        size="medium"
                        className={classes.editbutton}>
                        <Typography >
                            編集する
                        </Typography>
                </Button>

                <InputBase
                    style = {{fontSize:15,color:"#434343",marginTop:0,marginLeft:20}}
                    disabled
                    fullWidth
                    value="2021年5月7日 12:01に公開"

                />
                <InputBase
                    style = {{fontSize:15,color:"#434343",marginTop:0,marginLeft:20}}
                    disabled
                    fullWidth
                    value="2021年5月7日 12:51に編集"

                />
            <Divider  style = {{position:"reactive",marginTop:40}}/>
        </Container>
        <Container  style = {{ width:900 , marginTop:70,marginBottom:100}}>
            <MDViewer html={html}/>
        </Container>
    </div>
  )
}
export default Post