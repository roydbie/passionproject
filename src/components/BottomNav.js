import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import TimelineIcon from '@material-ui/icons/Timeline';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import { NavLink } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    width: '100vw',
    position: 'fixed',
    bottom: 0,
    height: '40px',
    paddingTop: '20px',
    backgroundColor: 'white'
  },
});

export default function BottomNav() {
  const classes = useStyles();

  return (
    <footer className={classes.root}>
        <NavLink to="/home" activeClassName="activeLink" className="bottomnavitem"><NotificationsNoneIcon /></NavLink>
        <NavLink to="/exercises" activeClassName="activeLink" className="bottomnavitem"><FitnessCenterIcon /></NavLink>
        <NavLink to="/progress" activeClassName="activeLink" className="bottomnavitem"><TimelineIcon /></NavLink>
        <NavLink to="/extra" activeClassName="activeLink" className="bottomnavitem"><MoreHorizIcon /></NavLink>
    </footer>
  );
}