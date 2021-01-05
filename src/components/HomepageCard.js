import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const useStyles = makeStyles({
  root: {
    width: '100%',
    backgroundColor: '#353766',
    color: 'white',
    borderRadius: '10px'
  },

});

export default function HomepageCard() {
  const classes = useStyles();

  return (
      <div>
        <Card className={classes.root}>
        <CardActionArea>
            <CardContent>
            <Typography gutterBottom variant="h6" component="h2" align="center">
                Bicep curl dumbbell <br></br>
                10kg <ArrowForwardIcon fontSize="small" display="inline" /> 12kg
            </Typography>
            <Typography gutterBottom variant="subtitle2" component="h2" align="center">
                Martijn Creusen
            </Typography>
            </CardContent>
        </CardActionArea>
        </Card>

        <br></br>

        <Card className={classes.root}>
        <CardActionArea>
            <CardContent>
            <Typography gutterBottom variant="h6" component="h2" align="center">
                Incline dumbbell press <br></br>
                30kg <ArrowForwardIcon fontSize="small" display="inline" /> 32kg
            </Typography>
            <Typography gutterBottom variant="subtitle2" component="h2" align="center">
                Joep van Antwerpen
            </Typography>
            </CardContent>
        </CardActionArea>
        </Card>
    </div>
  );
}