import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';

import dumbbellpressfoto from '../images/dumbbell-press.gif';
import inclinebenchpressfoto from '../images/incline-benchpress.gif';
import declinebenchpressfoto from '../images/decline-benchpress.gif';
import chestfliesfoto from '../images/chest-flies.gif';
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

class NewListChest extends Component {
  state = {
    exercisesArray: null,
    dumbbellpressPeopleArray: null,
    inclinebenchpressPeopleArray: null,
    closegripchestpressPeopleArray: null,
    chestcablefliesPeopleArray: null
  }

  constructor(props) {
    super(props);
    this.state = {
      expanded: ''
    };
  }

  componentDidMount(){
    // get all exercises
    db.collection('exercises').get().then( snapshot => {
        const exercisesArray = [];
        snapshot.forEach( doc => {
            const data = doc.data();
            exercisesArray.push(data);
        })
        this.setState({exercisesArray: exercisesArray})
    }).catch( error => console.log(error));
    // get users of dumbbell press
    db.collection('exercises').doc('dumbbell-press').collection('people').get().then( snapshot => {
        const dumbbellpressPeopleArray = [];
        snapshot.forEach( doc => {
            const data = doc.data();
            dumbbellpressPeopleArray.push(data);
        })
        this.setState({dumbbellpressPeopleArray: dumbbellpressPeopleArray})
    }).catch( error => console.log(error));
    // get users of incline bench press
    db.collection('exercises').doc('incline-bench-press').collection('people').get().then( snapshot => {
      const inclinebenchpressPeopleArray = [];
      snapshot.forEach( doc => {
          const data = doc.data();
          inclinebenchpressPeopleArray.push(data);
      })
      this.setState({inclinebenchpressPeopleArray: inclinebenchpressPeopleArray})
    }).catch( error => console.log(error));
    // get users of close grip chest press
    db.collection('exercises').doc('close-grip-chest-press').collection('people').get().then( snapshot => {
      const closegripchestpressPeopleArray = [];
      snapshot.forEach( doc => {
          const data = doc.data();
          closegripchestpressPeopleArray.push(data);
      })
      this.setState({closegripchestpressPeopleArray: closegripchestpressPeopleArray})
    }).catch( error => console.log(error));
    // get users of chest cable flies
    db.collection('exercises').doc('chest-cable-flies').collection('people').get().then( snapshot => {
      const chestcablefliesPeopleArray = [];
      snapshot.forEach( doc => {
          const data = doc.data();
          chestcablefliesPeopleArray.push(data);
      })
      this.setState({chestcablefliesPeopleArray: chestcablefliesPeopleArray})
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
                      {
                        (() => {switch (data.idname) {
                            case "dumbbell-press":   return <div><img src={dumbbellpressfoto} alt="not found" style={{width: '100%', height: 'auto'}}/><br></br></div>;
                            case "incline-bench-press":   return <div><img src={inclinebenchpressfoto} alt="not found" style={{width: '100%', height: 'auto'}}/><br></br></div>;
                            case "close-grip-chest-press":   return <div><img src={declinebenchpressfoto} alt="not found" style={{width: '100%', height: 'auto'}}/><br></br></div>;
                            case "chest-cable-flies":   return <div><img src={chestfliesfoto} alt="not found" style={{width: '100%', height: 'auto'}}/><br></br></div>;
                            default:      return "";
                          }
                        })()
                      }
                      { 
                          this.state.dumbbellpressPeopleArray && 
                          this.state.dumbbellpressPeopleArray.map( exercise => {
                              if(data.idname === "dumbbell-press"){
                                return (
                                  <div>
                                      <p key={count}><b>{exercise.name}:</b> 
                                      <br></br>{exercise.reps1}x {exercise.weight1}kg | {exercise.reps2}x {exercise.weight2}kg | {exercise.reps3}x {exercise.weight3}kg </p>
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
                          this.state.inclinebenchpressPeopleArray && 
                          this.state.inclinebenchpressPeopleArray.map( exercise => {
                              if(data.idname === "incline-bench-press"){
                                return (
                                  <div>
                                      <p key={count}><b>{exercise.name}:</b> <br></br>{exercise.reps1}x {exercise.weight1}kg | {exercise.reps2}x {exercise.weight2}kg | {exercise.reps3}x {exercise.weight3}kg </p>
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
                          this.state.closegripchestpressPeopleArray && 
                          this.state.closegripchestpressPeopleArray.map( exercise => {
                              if(data.idname === "close-grip-chest-press"){
                                return (
                                  <div>
                                      <p key={count}><b>{exercise.name}:</b> <br></br>{exercise.reps1}x {exercise.weight1}kg | {exercise.reps2}x {exercise.weight2}kg | {exercise.reps3}x {exercise.weight3}kg </p>
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
                          this.state.chestcablefliesPeopleArray && 
                          this.state.chestcablefliesPeopleArray.map( exercise => {
                              if(data.idname === "chest-cable-flies"){
                                return (
                                  <div>
                                      <p key={count}><b>{exercise.name}:</b> <br></br>{exercise.reps1}x {exercise.weight1}kg | {exercise.reps2}x {exercise.weight2}kg | {exercise.reps3}x {exercise.weight3}kg </p>
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
              Chest exercises
          </Typography><br></br>

          {newData}

          <br></br>
          <br></br>
          <br></br>
      </div>
    )
  }
}

export default NewListChest;