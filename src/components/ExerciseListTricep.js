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

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  }
}));

const exercises = ["Close-Grip Bench Press", "Cable Rope Tricep Pushdown", "Lying Triceps Extension", "Tricep Dips", 
                "Diamond Push-Ups", "Bench Dip", "One-Arm Overhead Extension", "Standard Push-Up", "Single-Arm Cable Kick-Back"]; 

export default function ExerciseListTricep() {
  const classes = useStyles();

  const listItems = exercises.map((exercise) =>
      <div>
        <ListItem>
          <ListItemIcon>
            <FitnessCenterIcon />
          </ListItemIcon>
          <ListItemText
            primary={exercise}
          />
        </ListItem>
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