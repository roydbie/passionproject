import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import { Divider } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  }
}));

const exercises = [{displayname: "Close-Grip Bench Press", linkname: "/exercises/close-grip-bench-press"}, 
                  {displayname: "Cable Rope Tricep Pushdown", linkname: "/exercises/cable-rope-tricep-pushdown"}, 
                  {displayname: "Lying Triceps Extension", linkname: "/exercises/lying-triceps-extension"}, 
                  {displayname: "Tricep Dips", linkname: "/exercises/tricep-dips"},
                  {displayname: "Diamond Push-Ups", linkname: "/exercises/diamond-pushups"},
                  {displayname: "Bench Dip", linkname: "/exercises/bench-dip"},
                  {displayname: "One-Arm Overhead Extension", linkname: "/exercises/one-arm-overhead-extension"},
                  {displayname: "Standard Push-Up", linkname: "/exercises/standard-push-up"},
                  {displayname: "Single-Arm Cable Kick-Back", linkname: "/exercises/single-arm-cable-kick-back"},
                ]; 

export default function ExerciseListTricep() {
  const classes = useStyles();

  const listItems = exercises.map((exercise) =>
      
      <div>
        <Link to={exercise.linkname} style={{textDecoration: "none", color: '#474747'}}><ListItem>
          <ListItemIcon>
            <FitnessCenterIcon />
          </ListItemIcon>
          <ListItemText
            primary={exercise.displayname}
          />
        </ListItem></Link>
        <Divider />
      </div>
  );

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" className={classes.title}>
            Tricep exercises
          </Typography>
          <div className={classes.demo}>
            <List>
                {listItems}
            </List>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}