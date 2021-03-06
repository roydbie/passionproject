import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    boxShadow: "none",

  }
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" elevation={0}>
        <Toolbar style={{backgroundColor: '#292B4E'}}>
          <p className="headerTitle">Battie boys</p>
        </Toolbar>
      </AppBar>
    </div>
  );
}