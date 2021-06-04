import {Button,Typography,ApBar,Grid} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import entryStyle from '../About/About.module.css'
import bounceStyle from '../Languages/LanguageChart/LanguageChart.module.css'
import Cfc from '../../Assets/cfc.jpeg'
import Anita from '../../Assets/anito.jpeg'

import zoomStyle from './Experience.module.css'

const useStyles = makeStyles((theme) => ({
  img:{
    height:'40vh',
    borderRadius:'15px',
    marginTop:'30px'
  },
  root: {
     margin:'10vh 0 0 20vh',
     minHeight: '130vh',
     display:'flex',
     flexDirection:'column',

     [theme.breakpoints.down('xs')]: {
      margin:'10vh 0 0 0',
      overflowX:'hidden',
    },
    [theme.breakpoints.up('sm')]: {
     margin:'10vh 0 0 15vh',
   },
   [theme.breakpoints.up('md')]: {
    margin:'10vh 0 0 20vh',
  },
   },
   title:{
     textAlign:'left',
     padding:'4vh 0 0 20vh',
     backgroundColor:'black',
     color:'white',
     fontSize:'40px',
     borderRadius:'20px',
     minHeight: '10vh',
     fontFamily: ['Lobster','cursive',].join(','),
     [theme.breakpoints.down('sm')]: {
      fontSize:'20px',
      width:'100%',
      padding:'4vh 0 0 10vh',
    },
   },
   cfc:{
     height:'40vh',
     boxShadow: '0 5px 15px 0px rgba(0,0,0,0.6)',
     borderRadius:'10px',
     [theme.breakpoints.down('xs')]: {
        height:'30vh',
        marginLeft:'5vh'
     },
      [theme.breakpoints.up('sm')]: {
       height:'30vh',
       marginLeft:'5vh'
     },
     [theme.breakpoints.up('md')]: {
      height:'35vh',
      marginLeft:'5vh'
     },
   },
   typ:{
     textAlign:'left',
     fontSize:'18px',
     fontFamily: [
       'Noto Sans JP',
       'sans-serif',
     ].join(','),
     width:'200vh',
     [theme.breakpoints.down('xs')]: {
      fontSize:'10px',
      marginLeft:'0',
      padding:'2vh 5vh 2vh 5vh',
      width:'40vh'
    },
    [theme.breakpoints.up('sm')]: {
       fontSize:'10px',
       marginLeft:'0',
       width:'100vh'
     },
     [theme.breakpoints.up('md')]: {
       textAlign:'left',
       fontSize:'18px',
       marginLeft:'0',
       fontFamily: [
         'Noto Sans JP',
         'sans-serif',
       ].join(','),
       width:'200vh',
    },
   },
   button:{
     marginLeft:'5vh',
     color:"#3b3737",
     boxShadow: '0 5px 15px 0px rgba(0,0,0,0.7)',
    fontFamily: ['Akaya Telivigala','cursive',].join(','),
    [theme.breakpoints.down('sm')]: {
     fontSize:'10px',
   },
   [theme.breakpoints.up('sm')]: {
    fontSize:'10px',
    padding:'4px',
    marginLeft:'0',
  },
  [theme.breakpoints.up('md')]: {
   fontSize:'14px',
   marginLeft:'3vh',
 },
  },
  box:{
    marginTop:'5vh',
    width:'90%',
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    [theme.breakpoints.down('xs')]: {
      marginLeft:'center'
   },
   [theme.breakpoints.up('sm')]: {
    justifyContent:'space-around',
  },
  [theme.breakpoints.up('md')]: {
    justifyContent:'center',
 },
  },
  some:{
    textAlign:'left',
    margin:'10vh 0 0 40vh',
    [theme.breakpoints.down('sm')]: {
      marginLeft:'5vh'
   },
 },
   contri:{
     fontSize:'30px',
     fontFamily: [
       'Pacifico',
       'cursive',
     ].join(','),
     [theme.breakpoints.down('sm')]: {
       fontSize:'20px',
    },
  },
    cffc:{
      height:'20vh',
      marginLeft:'10vh',

      [theme.breakpoints.down('xs')]: {
        height:'15vh',
        marginLeft:'0'
     },
     [theme.breakpoints.up('sm')]: {
       height:'18vh',
       marginLeft:'5vh'
    },
    [theme.breakpoints.up('md')]: {
      height:'20vh',
      marginLeft:'10vh',
   },
   },
   anita:{
     height:'20vh',
     [theme.breakpoints.down('sm')]: {
       height:'15vh',
    },
   }
}));
export default function Start() {
  const classes = useStyles();

  return (
    <Grid container spacing={0} direction="column" spacing="1" className={classes.root}>
      <Typography variant='h2' className={`${entryStyle.textdiv} ${classes.title}`}>
        OpenSource Contribution / Experience
      </Typography>
        <Grid container xs={12} sm={12} md={12} className={classes.box}>
          <Grid container item xs={12} sm={4} md={4}>
            <a href='https://codeforcause.org/hirewithus' target="_blank" style={{textDecoration:'none'}}>
              <Grid className={entryStyle.textdiv}><img src={Cfc} alt="" className={classes.cfc}/></Grid>
            </a>
          </Grid>
          <Grid container item xs={12} sm={2} md={6} style={{width:'100%'}}>
            <Typography className={`${entryStyle.Imgdiv} ${classes.typ}`}>
              <span style={{fontFamily: [
                'Pacifico',
                'cursive',
              ].join(',')}}>Contributed to CodeforCause official Website</span><br/><br/>
              (1). Designed two Components of HireWithUs Page in ReactJs using Material-UI<br/>
              (a).Philosophy Component<a href='https://github.com/codeforcauseorg/codeforcause.org/pull/220#event-4327583137' style={{textDecoration:'none'}}>
                <Button contaner className={classes.button}>Pull-Request</Button>{""}
              </a>
                <br/><br/> (b).Developer Component<a href='https://github.com/codeforcauseorg/codeforcause.org/pull/212#event-4300518212' target="_blank" style={{textDecoration:'none'}}>
                  <Button contaner className={classes.button}>Pull-Request</Button>{""}
                </a>
                 <br/><br/>
              (2). Solved one issue to convert one component to mobile responsive{""}
              <a href='https://github.com/codeforcauseorg/codeforcause.org/pull/229#issuecomment-779338252' target="_blank" style={{textDecoration:'none'}}>
                <Button contaner className={classes.button}>Pull-Request</Button>{""}
              </a>
                <br/>
                <br/>
            </Typography>
            </Grid>
        </Grid>

      <Grid className={`${entryStyle.textdiv} ${classes.some}`}>
      <Typography variant='h2'className={classes.contri} >
          Some Other Contributions
      </Typography>
      <Grid container xs={12} sm={12} md={6}>
      <Grid container item xs={12} sm={12} md={5}>
        <a href='https://github.com/anitab-org/anitab-org.github.io/pull/216' target="_blank" style={{textDecoration:'none'}}>
          <img src={Anita} alt="anitab-org" className={classes.anita} />
        </a>
      </Grid>
      <Grid container item xs={12} sm={12} md={5}>
        <a href='https://github.com/codeforcauseorg/edu-server/pull/4#event-4446433640' target="_blank" style={{textDecoration:'none'}}>
          <img src={Cfc} alt="anitab-org" className={classes.cffc} />
        </a>
      </Grid>
      </Grid>
    </Grid>
    </Grid>
  );
}
