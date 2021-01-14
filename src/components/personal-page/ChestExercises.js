import React, { Component } from 'react';

import { db } from '../../services/firebase';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import EditIcon from '@material-ui/icons/Edit';

class ChestExercises extends Component {
  state = {
    exercisesArray: null,
    dumbbellpressData: null,
    inclinebenchpressData: null,
    closegripchestpressData: null,
    chestcablefliesData: null,
    username: "Roy de Bie"
  }

  constructor(props) {
    super(props);
    this.state = {
      expanded: ''
    };
  }

  componentDidMount(){
    // get users of dumbbell press
    db.collection('exercises').doc('dumbbell-press').collection('people').get().then( snapshot => {
        const dumbbellpressData = [];
        const username = "Roy de Bie";
        snapshot.forEach( doc => {
            const data = doc.data();
            if(data.name === username) {
              dumbbellpressData.push(data);
            }
        })
        this.setState({dumbbellpressData: dumbbellpressData})
    }).catch( error => console.log(error));
    // get users of incline bench press
    db.collection('exercises').doc('incline-bench-press').collection('people').get().then( snapshot => {
      const inclinebenchpressData = [];
      const username = "Roy de Bie";
      snapshot.forEach( doc => {
          const data = doc.data();
          if(data.name === username) {
            inclinebenchpressData.push(data);
          }
      })
      this.setState({inclinebenchpressData: inclinebenchpressData})
    }).catch( error => console.log(error));
    // get users of close grip chest press
    db.collection('exercises').doc('close-grip-chest-press').collection('people').get().then( snapshot => {
      const closegripchestpressData = [];
      const username = "Roy de Bie";
      snapshot.forEach( doc => {
          const data = doc.data();
          if(data.name === username) {
            closegripchestpressData.push(data);
          }
      })
      this.setState({closegripchestpressData: closegripchestpressData})
    }).catch( error => console.log(error));
    // get users of chest cable flies
    db.collection('exercises').doc('chest-cable-flies').collection('people').get().then( snapshot => {
      const chestcablefliesData = [];
      const username = "Roy de Bie";
      snapshot.forEach( doc => {
          const data = doc.data();
          if(data.name === username) {
            chestcablefliesData.push(data);
          }
      })
      this.setState({chestcablefliesData: chestcablefliesData})
    }).catch( error => console.log(error));
}
  

  render() {

    const newData1 = this.state.chestcablefliesData && this.state.chestcablefliesData.map( (data) => {
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

    const newData2 = this.state.dumbbellpressData && this.state.dumbbellpressData.map( (data) => {
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

    const newData3 = this.state.inclinebenchpressData && this.state.inclinebenchpressData.map( (data) => {
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

    const newData4 = this.state.closegripchestpressData && this.state.closegripchestpressData.map( (data) => {
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

export default ChestExercises;
