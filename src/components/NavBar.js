import React from 'react'
import logo from '../iValet.png'
import CustomButton from './CustomButton';
import {Toolbar, Typography} from '@material-ui/core'
import {makeStyles} from "@material-ui/core/styles";
import {Link} from 'react-router-dom'
import Park from '../Park';
import Find from '../Find';
import Exit from '../Exit';

const styles = makeStyles({
    bar:{
        paddingTop: "1.15rem",
        backgroundColor: "#c32a2a",
        ['@media (max-width:500px)']: { 
           flexDirection: "column"
          }
    },
    logo: {
        width: "15%", 
        ['@media (max-width:500px)']: { 
           display: "none"
           }
    },
    menuItem: {
        cursor: "pointer", 
        flexGrow: 1,
        color: "#ffd700",
     //   "&:hover": {
     //       color:  "#ffd700"
     //   },
        ['@media (max-width:500px)']: { 
            paddingBottom: "1rem"    }
    }
})

function NavBar() {
    const classes = styles()
    return (
        <Toolbar position = "sticky" color="rgba(255, 215, 0)" className={classes.bar}>
        <img src={logo} className={classes.logo}/>
        
        <Typography variant="h6" className={classes.menuItem}>
            <b>Sign In</b>
        </Typography>
        <Typography variant="h6" className={classes.menuItem}>
            <b>Park Your Car</b>
        </Typography>
        <Typography variant="h6" className={classes.menuItem}>
            <b>Find Your Car</b>
        </Typography>
        <Typography variant="h6" className={classes.menuItem}>
            <b>Exit Lot</b>
        </Typography>
        <Typography variant="h6" className={classes.menuItem}>
            <b>About</b>
        </Typography>
        <CustomButton txt="Contact Us" />        
        </Toolbar>
    )
}

export default NavBar
