import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver';
import ExploreIcon from '@material-ui/icons/Explore';
import TimelineIcon from '@material-ui/icons/Timeline';

import { NavLink } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    width: '100vw',
    position: 'fixed',
    bottom: 0,
    height: '40px',
    paddingTop: '20px',
    backgroundColor: '#292B4E',
    paddingBottom: '20px'
  },
});

export default function BottomNav() {
  const classes = useStyles();

  return (
    <footer className={classes.root}>
        <NavLink to="/passionproject/personal" activeClassName="activeLink" className="bottomnavitem"><PersonIcon style={{paddingTop: '10px'}}/></NavLink>
        <NavLink to="/passionproject/exercises" activeClassName="activeLink" className="bottomnavitem"><RecordVoiceOverIcon style={{paddingTop: '10px'}} /></NavLink>
        <NavLink exact to="/passionproject/" activeClassName="activeLinkHome" className="bottomnavitemHome"><HomeIcon style={{backgroundColor: '#39D1E0', padding: '10px', borderRadius: '25px'}}/></NavLink>
        <NavLink to="/passionproject/progress" activeClassName="activeLink" className="bottomnavitem"><TimelineIcon style={{paddingTop: '10px'}} /></NavLink>
        <NavLink to="/passionproject/extra" activeClassName="activeLink" className="bottomnavitem"><ExploreIcon style={{paddingTop: '10px'}} /></NavLink>
    </footer>
  );
}