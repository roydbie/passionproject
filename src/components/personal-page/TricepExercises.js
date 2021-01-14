import React, { Component } from 'react';

import { db } from '../../services/firebase';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import EditIcon from '@material-ui/icons/Edit';

class TricepExercises extends Component {
  state = {
    exercisesArray: null,
    closegripbenchpressPeopleArray: null,
    tricepdipsPeopleArray: null,
    cableropetriceppushdownPeopleArray: null,
    singlearmcablekickbackPeopleArray: null,
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
    db.collection('exercises-tricep').doc('cable-rope-tricep-pushdown').collection('people').get().then( snapshot => {
        const cableropetriceppushdownPeopleArray = [];
        const username = "Roy de Bie";
        snapshot.forEach( doc => {
            const data = doc.data();
            if(data.name === username) {
              cableropetriceppushdownPeopleArray.push(data);
            }
        })
        this.setState({cableropetriceppushdownPeopleArray: cableropetriceppushdownPeopleArray})
    }).catch( error => console.log(error));
    // get users of incline bench press
    db.collection('exercises-tricep').doc('close-grip-bench-press').collection('people').get().then( snapshot => {
      const closegripbenchpressPeopleArray = [];
      const username = "Roy de Bie";
      snapshot.forEach( doc => {
          const data = doc.data();
          if(data.name === username) {
            closegripbenchpressPeopleArray.push(data);
          }
      })
      this.setState({closegripbenchpressPeopleArray: closegripbenchpressPeopleArray})
    }).catch( error => console.log(error));
    // get users of close grip chest press
    db.collection('exercises-tricep').doc('single-arm-cable-kickback').collection('people').get().then( snapshot => {
      const singlearmcablekickbackPeopleArray = [];
      const username = "Roy de Bie";
      snapshot.forEach( doc => {
          const data = doc.data();
          if(data.name === username) {
            singlearmcablekickbackPeopleArray.push(data);
          }
      })
      this.setState({singlearmcablekickbackPeopleArray: singlearmcablekickbackPeopleArray})
    }).catch( error => console.log(error));
    // get users of chest cable flies
    db.collection('exercises-tricep').doc('tricep-dips').collection('people').get().then( snapshot => {
      const tricepdipsPeopleArray = [];
      const username = "Roy de Bie";
      snapshot.forEach( doc => {
          const data = doc.data();
          if(data.name === username) {
            tricepdipsPeopleArray.push(data);
          }
      })
      this.setState({tricepdipsPeopleArray: tricepdipsPeopleArray})
    }).catch( error => console.log(error));
}
  

  render() {

    const newData1 = this.state.closegripbenchpressPeopleArray && this.state.closegripbenchpressPeopleArray.map( (data) => {
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

    const newData2 = this.state.tricepdipsPeopleArray && this.state.tricepdipsPeopleArray.map( (data) => {
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

    const newData3 = this.state.cableropetriceppushdownPeopleArray && this.state.cableropetriceppushdownPeopleArray.map( (data) => {
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

    const newData4 = this.state.singlearmcablekickbackPeopleArray && this.state.singlearmcablekickbackPeopleArray.map( (data) => {
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

export default TricepExercises;
