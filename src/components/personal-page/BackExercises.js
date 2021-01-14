import React, { Component } from 'react';

import { db } from '../../services/firebase';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import EditIcon from '@material-ui/icons/Edit';

class BackExercises extends Component {
  state = {
    exercisesArray: null,
    deadliftPeopleArray: null,
    latpulldownPeopleArray: null,
    seatedcablerowPeopleArray: null,
    chestsupportedrowPeopleArray: null
  }

  constructor(props) {
    super(props);
    this.state = {
      expanded: ''
    };
  }

  componentDidMount(){
    // get users of dumbbell press
    db.collection('exercises-back').doc('deadlift').collection('people').get().then( snapshot => {
        const deadliftPeopleArray = [];
        const username = "Roy de Bie";
        snapshot.forEach( doc => {
            const data = doc.data();
            if(data.name === username) {
              deadliftPeopleArray.push(data);
            }
        })
        this.setState({deadliftPeopleArray: deadliftPeopleArray})
    }).catch( error => console.log(error));
    // get users of incline bench press
    db.collection('exercises-back').doc('lat-pulldown').collection('people').get().then( snapshot => {
      const latpulldownPeopleArray = [];
      const username = "Roy de Bie";
      snapshot.forEach( doc => {
          const data = doc.data();
          if(data.name === username) {
            latpulldownPeopleArray.push(data);
          }
      })
      this.setState({latpulldownPeopleArray: latpulldownPeopleArray})
    }).catch( error => console.log(error));
    // get users of close grip chest press
    db.collection('exercises-back').doc('seated-cable-row').collection('people').get().then( snapshot => {
      const seatedcablerowPeopleArray = [];
      const username = "Roy de Bie";
      snapshot.forEach( doc => {
          const data = doc.data();
          if(data.name === username) {
            seatedcablerowPeopleArray.push(data);
          }
      })
      this.setState({seatedcablerowPeopleArray: seatedcablerowPeopleArray})
    }).catch( error => console.log(error));
    // get users of chest cable flies
    db.collection('exercises-back').doc('chest-supported-row').collection('people').get().then( snapshot => {
      const chestsupportedrowPeopleArray = [];
      const username = "Roy de Bie";
      snapshot.forEach( doc => {
          const data = doc.data();
          if(data.name === username) {
            chestsupportedrowPeopleArray.push(data);
          }
      })
      this.setState({chestsupportedrowPeopleArray: chestsupportedrowPeopleArray})
    }).catch( error => console.log(error));
}
  

  render() {

    const newData1 = this.state.deadliftPeopleArray && this.state.deadliftPeopleArray.map( (data) => {
      const dataString = data.reps1 + 'x ' + data.weight1 + 'kg | ' + data.reps2 + 'x ' + data.weight2 + 'kg | ' + data.reps3 + 'x ' + data.weight3 + 'kg';
      return (
          <div>
            <div>
              <ListItem className="listItemPersonal">
                <ListItemText
                  primary={data.exercise}
                  secondary={dataString}
                  color="secondary.main"
                />
                <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="delete">
                    <EditIcon style={{color: 'white'}}/>
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
              <br></br>
            </div>    
          </div>
      )
    });

    const newData2 = this.state.latpulldownPeopleArray && this.state.latpulldownPeopleArray.map( (data) => {
      const dataString = data.reps1 + 'x ' + data.weight1 + 'kg | ' + data.reps2 + 'x ' + data.weight2 + 'kg | ' + data.reps3 + 'x ' + data.weight3 + 'kg';
      return (
          <div>
            <div>
              <ListItem className="listItemPersonal">
                <ListItemText
                  primary={data.exercise}
                  secondary={dataString}
                  color="secondary.main"
                />
                <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="delete">
                    <EditIcon style={{color: 'white'}}/>
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
              <br></br>
            </div>    
          </div>
      )
    });

    const newData3 = this.state.seatedcablerowPeopleArray && this.state.seatedcablerowPeopleArray.map( (data) => {
      const dataString = data.reps1 + 'x ' + data.weight1 + 'kg | ' + data.reps2 + 'x ' + data.weight2 + 'kg | ' + data.reps3 + 'x ' + data.weight3 + 'kg';
      return (
          <div>
            <div>
              <ListItem className="listItemPersonal">
                <ListItemText
                  primary={data.exercise}
                  secondary={dataString}
                  color="secondary.main"
                />
                <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="delete">
                    <EditIcon style={{color: 'white'}}/>
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
              <br></br>
            </div>    
          </div>
      )
    });

    const newData4 = this.state.chestsupportedrowPeopleArray && this.state.chestsupportedrowPeopleArray.map( (data) => {
      const dataString = data.reps1 + 'x ' + data.weight1 + 'kg | ' + data.reps2 + 'x ' + data.weight2 + 'kg | ' + data.reps3 + 'x ' + data.weight3 + 'kg';
      return (
          <div>
            <div>
              <ListItem className="listItemPersonal">
                <ListItemText
                  primary={data.exercise}
                  secondary={dataString}
                  color="secondary.main"
                />
                <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="delete">
                    <EditIcon style={{color: 'white'}}/>
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
              <br></br>
            </div>    
          </div>
      )
    });


    return (
      <div>
        <div style={{flexGrow: 1, maxWidth: 752}}>
          <Grid item xs={12} md={6}>
            <div>
              <List>
                {newData1}
                {newData2}
                {newData3}
                {newData4}
              </List>
            </div>
          </Grid>
        </div>

        <br></br>
        <br></br>
        <br></br>
      </div>
    )
  }
}

export default BackExercises;
