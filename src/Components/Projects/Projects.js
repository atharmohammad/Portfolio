import { Button, Typography, Box } from "@material-ui/core";
import { makeStyles, Grid } from "@material-ui/core";
import Burger from "../../Assets/burger.PNG";
import CnC from "../../Assets/CodeNCollab.PNG";
import Chat from "../../Assets/chat.PNG";
import Store from "../../Assets/Store.png";
import entryStyle from "../About/About.module.css";
import bounceStyle from "../Languages/LanguageChart/LanguageChart.module.css";
import CodeNCollabGif from "../../Assets/codencollab.gif"

const useStyles = makeStyles((theme) => ({
  img: {
    height: "40vh",
    borderRadius: "15px",
    marginTop: "30px",
  },
  root: {
    minHeight: "100vh",
    marginLeft: "20vh",
    overflowX: "hidden",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "0",
    },
  },
  box: {
    marginTop: "10vh",
    width: "400vh",
  },
  img: {
    height: "40vh",
    boxShadow: "0 5px 15px 0px rgba(0,0,0,0.6)",
    borderRadius: "10px",
    marginRight: "5vh",
    [theme.breakpoints.down("sm")]: {
      height: "30vh",
      marginLeft: "10vh",
    },
  },
  img2: {
    height: "40vh",
    boxShadow: "0 5px 15px 0px rgba(0,0,0,0.6)",
    borderRadius: "10px",
    marginLeft: "5vh",
    width: "50vh",
    [theme.breakpoints.down("xs")]: {
      height: "20vh",
      margin: "2vh 0 0 5vh",
      width: "30vh",
    },
    [theme.breakpoints.up("sm")]: {
      height: "30vh",
      margin: "2vh 0 0 10vh",
      width: "50vh",
    },
    [theme.breakpoints.up("md")]: {
      height: "40vh",
      marginLeft: "5vh",
      width: "70vh",
    },
  },
  typ: {
    margin: "2vh 0 0 20vh",
    textAlign: "left",
    fontSize: "16px",
    width: "100%",
    fontFamily: ["Noto Sans JP", "sans-serif"].join(","),
    [theme.breakpoints.down("xs")]: {
      fontSize: "10px",
      width: "40%",
      margin: "2vh 0 0 10vh",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "12px",
      width: "70%",
      margin: "2vh 0 0 10vh",
    },
    [theme.breakpoints.up("md")]: {
      margin: "2vh 0 0 20vh",
      textAlign: "left",
      fontSize: "18px",
      width: "100%",
      fontFamily: ["Noto Sans JP", "sans-serif"].join(","),
    },
  },
  project: {
    textAlign: "left",
    fontFamily: ["Lobster", "cursive"].join(","),
    [theme.breakpoints.down("sm")]: {
      fontSize: "30px",
      marginLeft: "10vh",
    },
  },
  button: {
    marginLeft: "5vh",
    color: "#3b3737",
    boxShadow: "0 5px 15px 0px rgba(0,0,0,0.7)",
    fontFamily: ["Akaya Telivigala", "cursive"].join(","),
    [theme.breakpoints.down("xs")]: {
      fontSize: "12px",
      margin: "1vh 0 0 0",
    },
  },
  storeImg:{
    height: "55vh",
    boxShadow: "0 5px 15px 0px rgba(0,0,0,0.6)",
    borderRadius: "10px",
    marginLeft: "20vh",
    width: "30vh",
    [theme.breakpoints.down("xs")]: {
      height: "35vh",
      margin: "2vh 0 0 10vh",
      width: "20vh",
    },
    [theme.breakpoints.up("sm")]: {
      height: "35vh",
      margin: "2vh 0 0 10vh",
      width: "20vh",
    },
    [theme.breakpoints.up("md")]: {
      height: "55vh",
      marginLeft: "20vh",
      width: "30vh",
    },
  }
}));
export default function Project() {
  const classes = useStyles();

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      spacing="1"
      className={classes.root}
    >
      <Typography
        variant="h2"
        className={`${entryStyle.textdiv} ${classes.project}`}
      >
        My Projects
      </Typography>

      <Grid container xs={12} sm={12} md={6} className={classes.box}>
        <Grid container item xs={12} sm={12} md={10}>
          <Typography className={`${entryStyle.Imgdiv} ${classes.typ}`}>
            <span style={{ fontFamily: ["Pacifico", "cursive"].join(",") }}>
              Code-N-Collab
            </span>
            <br />
            <br />
            Code-N-Collab is a collaboration website for software
            developers,competitive coders,etc. It is developed using MERN
            stack,socket.io,convergence and provides user with:<br/> (1) Real-time
            Code-Editor <br/> (2) LockoutChampionship <br/> (3) Blogs<br/>
            Currently , Website have 200+ active user on it ???????
            <br />
            <br />
            <a
              href="https://code-n-collab.netlify.app/"
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <Button container className={classes.button}>
                Code-N-Collab
              </Button>
              {""}
            </a>
            
            <a
              href="https://github.com/atharmohammad/Code-N-Collab"
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <Button container className={classes.button}>
                Github
              </Button>
              {""}
            </a>

          </Typography>
        </Grid>
        <Grid container item xs={12} sm={12} md={2}>
          <a
            href="https://code-n-collab.netlify.app/"
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <Box className={entryStyle.Imgdiv}>
              <img src={CodeNCollabGif} alt="CodeNCollab" className={classes.img2} />
            </Box>
          </a>
        </Grid>
      </Grid>

      <Grid container xs={12} sm={12} md={6} className={classes.box}>
        <Grid container item xs={12} sm={12} md={2}>
          <a
            href="https://burger-builder-react-92bac.web.app/"
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <Grid item className={entryStyle.textdiv}>
              <img src={Burger} alt="" className={classes.img} />
            </Grid>
          </a>
        </Grid>
        <Grid container item xs={12} sm={12} md={10}>
          <Typography className={`${entryStyle.Imgdiv} ${classes.typ}`}>
            <span style={{ fontFamily: ["Pacifico", "cursive"].join(",") }}>
              Burger-Builder
            </span>
            <br />
            <br />
            It is built in ReactJs and Google firebase,a person can design his
            own burger can add ingredients of his choice any number of times and
            dynamically price will be shown all burgers orders are placed and
            stored on firebase and every user needs an authentication{""}
            <br />
            <br />
            <a
              href="https://burger-builder-react-92bac.web.app/"
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <Button container className={classes.button}>
                Burger-Builder
              </Button>
              {""}
            </a>
            <a
              href="https://github.com/atharmohammad/BurgerBuilder"
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <Button container className={classes.button}>
                Github
              </Button>
              {""}
            </a>
          </Typography>
        </Grid>
      </Grid>

      <Grid container xs={12} sm={12} md={6} className={classes.box}>
        <Grid container item xs={12} sm={12} md={10}>
          <Typography className={`${entryStyle.Imgdiv} ${classes.typ}`}>
            <span style={{ fontFamily: ["Pacifico", "cursive"].join(",") }}>
              Store Inventory
            </span>
            <br />
            <br />
            1). Store inventory solves the problem for big and small store owners to manage their
            incoming and outgoing products.<br/>
            2). Owners can also save important documents of sales and goods 
            and manage all their customers and suppliers contact .It also provide product price management
            <br/>
            3). Tech Used : React-Native , Expo-Sqlite3 , Javascript
            <br />
            <br />
            <a
              href="https://github.com/atharmohammad/Store-Inventory"
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <Button container className={classes.button}>
                Github
              </Button>
              {""}
            </a>
          </Typography>
        </Grid>
        <Grid container item xs={12} sm={12} md={2}>
          <a
            href="https://github.com/atharmohammad/Store-Inventory"
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <Box className={entryStyle.Imgdiv}>
              <img src={Store} alt="Store Inventory" className={classes.storeImg} />
            </Box>
          </a>
        </Grid>
      </Grid>

      <Grid container xs={12} sm={12} md={6} className={classes.box}>
        <Grid container item xs={12} sm={12} md={2}>
          <a
            href="https://github.com/atharmohammad/Django-Websocket-Channel"
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <Box className={entryStyle.textdiv}>
              <img src={Chat} alt="" className={classes.img} />
            </Box>
          </a>
        </Grid>
        <Grid container item xs={12} sm={12} md={10} style={{ width: "100%" }}>
          <Typography className={`${entryStyle.Imgdiv} ${classes.typ}`}>
            <span style={{ fontFamily: ["Pacifico", "cursive"].join(",") }}>
              Chat-E
            </span>
            <br />
            <br />
            A simple Chat app Built using Django Websockets integrated with
            ReactJs , There can be multiple Rooms and every one who are in same
            room can chat with one another , A person can join by any username
            into the room he type, if such room does'nt exist then it will be
            created or he will join the already existing room.
            <br />
            <br />
            <a
              href="https://github.com/atharmohammad/Django-Websocket-Channel"
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <Button container className={classes.button}>
                Github
              </Button>
              {""}
            </a>
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
