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

export default function ExerciseListTricep() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" className={classes.title}>
            Tricep exercises
          </Typography>
          <div className={classes.demo}>
            <List>
                <ListItem>
                  <ListItemIcon>
                    <FitnessCenterIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Close-Grip Bench Press"
                  />
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemIcon>
                    <FitnessCenterIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Cable Rope Tricep Pushdown"
                  />
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemIcon>
                    <FitnessCenterIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Lying Triceps Extension"
                  />
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemIcon>
                    <FitnessCenterIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Tricep Dips"
                  />
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemIcon>
                    <FitnessCenterIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Diamond Push-Ups"
                  />
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemIcon>
                    <FitnessCenterIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Bench Dip"
                  />
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemIcon>
                    <FitnessCenterIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="One-Arm Overhead Extension"
                  />
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemIcon>
                    <FitnessCenterIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Standard Push-Up"
                  />
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemIcon>
                    <FitnessCenterIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Single-Arm Cable Kick-Back"
                  />
                </ListItem>
            </List>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}