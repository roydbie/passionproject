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

class NewListBicep extends Component {
  state = {
    exercisesArray: null,
    standingbarbellcurlPeopleArray: null,
    standinghammercurlPeopleArray: null,
    cableropehammercurlPeopleArray: null,
    concentrationcurlPeopleArray: null
  }

  constructor(props) {
    super(props);
    this.state = {
      expanded: ''
    };
  }

  componentDidMount(){
    // get all exercises
    db.collection('exercises-bicep').get().then( snapshot => {
        const exercisesArray = [];
        snapshot.forEach( doc => {
            const data = doc.data();
            exercisesArray.push(data);
        })
        this.setState({exercisesArray: exercisesArray})
    }).catch( error => console.log(error));
    // get users of standing barbell curl
    db.collection('exercises-bicep').doc('standing-barbell-curl').collection('people').get().then( snapshot => {
        const standingbarbellcurlPeopleArray = [];
        snapshot.forEach( doc => {
            const data = doc.data();
            standingbarbellcurlPeopleArray.push(data);
        })
        this.setState({standingbarbellcurlPeopleArray: standingbarbellcurlPeopleArray})
    }).catch( error => console.log(error));
    // get users of standing-hammer-curl
    db.collection('exercises-bicep').doc('standing-hammer-curl').collection('people').get().then( snapshot => {
      const standinghammercurlPeopleArray = [];
      snapshot.forEach( doc => {
          const data = doc.data();
          standinghammercurlPeopleArray.push(data);
      })
      this.setState({standinghammercurlPeopleArray: standinghammercurlPeopleArray})
    }).catch( error => console.log(error));
    // get users of cable rope hammer curl
    db.collection('exercises-bicep').doc('cable-rope-hammer-curl').collection('people').get().then( snapshot => {
      const cableropehammercurlPeopleArray = [];
      snapshot.forEach( doc => {
          const data = doc.data();
          cableropehammercurlPeopleArray.push(data);
      })
      this.setState({cableropehammercurlPeopleArray: cableropehammercurlPeopleArray})
    }).catch( error => console.log(error));
    // get users of concentration curl
    db.collection('exercises-bicep').doc('concentration-curl').collection('people').get().then( snapshot => {
      const concentrationcurlPeopleArray = [];
      snapshot.forEach( doc => {
          const data = doc.data();
          concentrationcurlPeopleArray.push(data);
      })
      this.setState({concentrationcurlPeopleArray: concentrationcurlPeopleArray})
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
                          this.state.standingbarbellcurlPeopleArray && 
                          this.state.standingbarbellcurlPeopleArray.map( exercise => {
                              if(data.idname === "standing-barbell-curl"){
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
                          this.state.standinghammercurlPeopleArray && 
                          this.state.standinghammercurlPeopleArray.map( exercise => {
                              if(data.idname === "standing-hammer-curl"){
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
                          this.state.cableropehammercurlPeopleArray && 
                          this.state.cableropehammercurlPeopleArray.map( exercise => {
                              if(data.idname === "cable-rope-hammer-curl"){
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
                          this.state.concentrationcurlPeopleArray && 
                          this.state.concentrationcurlPeopleArray.map( exercise => {
                              if(data.idname === "concentration-curl"){
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
              Bicep exercises
          </Typography><br></br>

          {newData}

          <br></br>
          <br></br>
          <br></br>
      </div>
    )
  }
}

export default NewListBicep;