//import logo from './logo.svg';
import { createMuiTheme, ThemeProvider, makeStyles} from '@material-ui/core/styles';
import NavBar from './components/NavBar'
import Grid from './components/Grid'
import './App.css';

import Ticket from '@material-ui/icons/ConfirmationNumber';
import Key from '@material-ui/icons/VpnKey';
import Home from './Home';



const theme = createMuiTheme({
  pallette:{
    primary: {
      main:"#c7d8ed",
    },
    secondary: {
      main:"#d80032"
    },
  },
  typography: {
    fontFamily: [
      'Montserrat'
    ],
    h4: {
      fontWeight: 600,
      fontSize: 28,
      lineHeight: '2rem'
    },
    h5: {
      fontWeight: 100,
      lineHeight: '2rem'
    },
  },
});

const styles = makeStyles({
  wrapper: {
    width: "65%",
    margin: "auto",
    textAlign: "center"
  },
  bigSpace: {
    marginTop: "5rem"
  },
  littleSpace:{
    marginTop: "2.5rem",
  },
  grid:{
    display: "flex", 
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap", 
  },
})


function App() {
  const classes = styles();
  return (
    <div className="App">
      <ThemeProvider theme ={theme}>
        <div className="content">
          <Home/>
        </div>
      </ThemeProvider>
      
    </div>
  );
}

export default App;
