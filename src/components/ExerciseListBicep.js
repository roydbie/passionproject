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

export default function ExerciseListBicep() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" className={classes.title}>
            Bicep exercises
          </Typography>
          <div className={classes.demo}>
            <List>
                <ListItem>
                  <ListItemIcon>
                    <FitnessCenterIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Standing barbell curl"
                  />
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemIcon>
                    <FitnessCenterIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Concentration curl"
                  />
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemIcon>
                    <FitnessCenterIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="EZ-BAR preacher curl"
                  />
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemIcon>
                    <FitnessCenterIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Standing dumbbell curl"
                  />
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemIcon>
                    <FitnessCenterIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Incline dumbbell curl"
                  />
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemIcon>
                    <FitnessCenterIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Standing hammer curl"
                  />
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemIcon>
                    <FitnessCenterIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Decline dumbbell curl"
                  />
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemIcon>
                    <FitnessCenterIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Cable rope hammer curl"
                  />
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemIcon>
                    <FitnessCenterIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Chin up"
                  />
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemIcon>
                    <FitnessCenterIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Cable bar curl"
                  />
                </ListItem>
            </List>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}