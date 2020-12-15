import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
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
            <Typography variant="body2" color="textSecondary" component="p">
                Martijn Creusen increased his weight with the bicep curl dumbbell. His old weight was 10kg and he progressed to 12kg. Congratulations!
            </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Button size="small" color="primary">
            <ThumbUpIcon fontSize="small"/>
            </Button>
            <Button size="small" color="primary">
            <ThumbDownIcon fontSize="small"/>
            </Button>
        </CardActions>
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
            <Typography variant="body2" color="textSecondary" component="p">
                Joep van Antwerpen increased his weight with the incline dumbbell press. His old weight was 30kg and he progressed to 32kg. Congratulations!
            </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Button size="small" color="primary">
            <ThumbUpIcon fontSize="small"/>
            </Button>
            <Button size="small" color="primary">
            <ThumbDownIcon fontSize="small"/>
            </Button>
        </CardActions>
        </Card>
    </div>
  );
}