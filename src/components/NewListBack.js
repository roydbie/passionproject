import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';

import closegripbenchfoto from '../images/close-grip-bench-press.jpg'; 
import { db } from '../services/firebase';

const Accordion = withStyles({
  root: {
    border: 'none',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 'none',
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {
    marginBottom: '10px!important'
  },
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);

class NewListBack extends Component {
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
    // get all exercises
    db.collection('exercises-back').get().then( snapshot => {
        const exercisesArray = [];
        snapshot.forEach( doc => {
            const data = doc.data();
            exercisesArray.push(data);
        })
        this.setState({exercisesArray: exercisesArray})
    }).catch( error => console.log(error));

    // get users of deadlift
    db.collection('exercises-back').doc('deadlift').collection('people').get().then( snapshot => {
        const deadliftPeopleArray = [];
        snapshot.forEach( doc => {
            const data = doc.data();
            deadliftPeopleArray.push(data);
        })
        this.setState({deadliftPeopleArray: deadliftPeopleArray})
    }).catch( error => console.log(error));

    // get users of lat pulldown
    db.collection('exercises-back').doc('lat-pulldown').collection('people').get().then( snapshot => {
      const latpulldownPeopleArray = [];
      snapshot.forEach( doc => {
          const data = doc.data();
          latpulldownPeopleArray.push(data);
      })
      this.setState({latpulldownPeopleArray: latpulldownPeopleArray})
    }).catch( error => console.log(error));

    // get users of seated cable row
    db.collection('exercises-back').doc('seated-cable-row').collection('people').get().then( snapshot => {
      const seatedcablerowPeopleArray = [];
      snapshot.forEach( doc => {
          const data = doc.data();
          seatedcablerowPeopleArray.push(data);
      })
      this.setState({seatedcablerowPeopleArray: seatedcablerowPeopleArray})
    }).catch( error => console.log(error));

    // get users of chest supported row
    db.collection('exercises-back').doc('chest-supported-row').collection('people').get().then( snapshot => {
      const chestsupportedrowPeopleArray = [];
      snapshot.forEach( doc => {
          const data = doc.data();
          chestsupportedrowPeopleArray.push(data);
      })
      this.setState({chestsupportedrowPeopleArray: chestsupportedrowPeopleArray})
    }).catch( error => console.log(error));
}

  render() {

    const handleChange = (panel) => (event, newExpanded) => {
      this.setState({expanded: newExpanded ? panel : false});
    };

    let count = 0;
    const newData = this.state.exercisesArray && this.state.exercisesArray.map( (data) => {
      count = count + 1;
      return (
          <div>
            <div>
              <Accordion className="exerciseBlock" expanded={this.state.expanded === count} onChange={handleChange(count)} style={{border: 'none'}}>
                  <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" style={{paddingLeft: '25px'}}>
                  <Typography>{data.name}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                      <Typography>
                      <img src={closegripbenchfoto} alt="not found" style={{width: '100%', height: 'auto'}}/><br></br>
                      { 
                          this.state.deadliftPeopleArray && 
                          this.state.deadliftPeopleArray.map( exercise => {
                              if(data.idname === "deadlift"){
                                return (
                                  <div>
                                      <p key={count}>{exercise.name} drukt <br></br>{exercise.reps1}x {exercise.weight1}kg | {exercise.reps2}x {exercise.weight2}kg | {exercise.reps3}x {exercise.weight3}kg </p>
                                  </div>
                              )
                              } else {
                                return (
                                  <div>
                                     
                                  </div>
                              )
                              }
                          })
                      }
                      { 
                          this.state.latpulldownPeopleArray && 
                          this.state.latpulldownPeopleArray.map( exercise => {
                              if(data.idname === "lat-pulldown"){
                                return (
                                  <div>
                                      <p key={count}>{exercise.name} drukt <br></br>{exercise.reps1}x {exercise.weight1}kg | {exercise.reps2}x {exercise.weight2}kg | {exercise.reps3}x {exercise.weight3}kg </p>
                                  </div>
                              )
                              } else {
                                return (
                                  <div>
                                     
                                  </div>
                              )
                              }
                          })
                      }
                      { 
                          this.state.seatedcablerowPeopleArray && 
                          this.state.seatedcablerowPeopleArray.map( exercise => {
                              if(data.idname === "seated-cable-row"){
                                return (
                                  <div>
                                      <p key={count}>{exercise.name} drukt <br></br>{exercise.reps1}x {exercise.weight1}kg | {exercise.reps2}x {exercise.weight2}kg | {exercise.reps3}x {exercise.weight3}kg </p>
                                  </div>
                              )
                              } else {
                                return (
                                  <div>
                                     
                                  </div>
                              )
                              }
                          })
                      }
                      { 
                          this.state.chestsupportedrowPeopleArray && 
                          this.state.chestsupportedrowPeopleArray.map( exercise => {
                              if(data.idname === "chest-supported-row"){
                                return (
                                  <div>
                                      <p key={count}>{exercise.name} drukt <br></br>{exercise.reps1}x {exercise.weight1}kg | {exercise.reps2}x {exercise.weight2}kg | {exercise.reps3}x {exercise.weight3}kg </p>
                                  </div>
                              )
                              } else {
                                return (
                                  <div>
                                     
                                  </div>
                              )
                              }
                          })
                      }
                      </Typography>
                  </AccordionDetails>
              </Accordion>
            </div>    
          </div>
          
      )
      
    });

    return (
      <div>
          <Typography variant="h6" style={{color: 'white'}}>
              Back exercises
          </Typography><br></br>

          {newData}

          <br></br>
          <br></br>
          <br></br>
      </div>
    )
  }
}

export default NewListBack;