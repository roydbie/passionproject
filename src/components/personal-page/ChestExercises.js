import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));

export default function ChestExercises() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Grid item xs={12} md={6}>
          <div>
            <List>
                <ListItem className="listItemPersonal">
                  <ListItemText 
                    primary="Barbell bench press"
                    secondary="10x 40kg | 10x 60kg | 8x 70kg"
                  />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete">
                      <EditIcon style={{color: 'white'}}/>
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
                
                <br></br>

                <ListItem className="listItemPersonal">
                  <ListItemText
                    primary="Dumbbell chest press"
                    secondary="10x 40kg | 10x 60kg | 8x 70kg"
                    color="secondary.main"
                  />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete">
                      <EditIcon style={{color: 'white'}}/>
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>

                <br></br>

                <ListItem className="listItemPersonal">
                  <ListItemText
                    primary="Incline dumbbell press"
                    secondary="10x 40kg | 10x 60kg | 8x 70kg"
                    color="secondary.main"
                  />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete">
                      <EditIcon style={{color: 'white'}}/>
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>

                <br></br>

                <ListItem className="listItemPersonal">
                  <ListItemText
                    primary="Dumbbell flies"
                    secondary="10x 40kg | 10x 60kg | 8x 70kg"
                    color="secondary.main"
                  />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete">
                      <EditIcon style={{color: 'white'}}/>
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>

                <br></br>

                <ListItem className="listItemPersonal">
                  <ListItemText
                    primary="Chest cable flies"
                    secondary="10x 40kg | 10x 60kg | 8x 70kg"
                    color="secondary.main"
                  />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete">
                      <EditIcon style={{color: 'white'}}/>
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
            </List>
          </div>
        </Grid>
    </div>
  );
}
