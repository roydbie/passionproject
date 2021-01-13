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

class NewListTricep extends Component {
  state = {
    exercisesArray: null,
    closegripbenchpressPeopleArray: null,
    tricepdipsPeopleArray: null,
    cableropetriceppushdownPeopleArray: null,
    singlearmcablekickbackPeopleArray: null
  }

  constructor(props) {
    super(props);
    this.state = {
      expanded: ''
    };
  }

  componentDidMount(){
    // get all exercises
    db.collection('exercises-tricep').get().then( snapshot => {
        const exercisesArray = [];
        snapshot.forEach( doc => {
            const data = doc.data();
            exercisesArray.push(data);
        })
        this.setState({exercisesArray: exercisesArray})
    }).catch( error => console.log(error));

    // get users of close grip bench press
    db.collection('exercises-tricep').doc('close-grip-bench-press').collection('people').get().then( snapshot => {
        const closegripbenchpressPeopleArray = [];
        snapshot.forEach( doc => {
            const data = doc.data();
            closegripbenchpressPeopleArray.push(data);
        })
        this.setState({closegripbenchpressPeopleArray: closegripbenchpressPeopleArray})
    }).catch( error => console.log(error));

    // get users of tricep dips
    db.collection('exercises-tricep').doc('tricep-dips').collection('people').get().then( snapshot => {
      const tricepdipsPeopleArray = [];
      snapshot.forEach( doc => {
          const data = doc.data();
          tricepdipsPeopleArray.push(data);
      })
      this.setState({tricepdipsPeopleArray: tricepdipsPeopleArray})
    }).catch( error => console.log(error));

    // get users of cable rope tricep pushdown
    db.collection('exercises-tricep').doc('cable-rope-tricep-pushdown').collection('people').get().then( snapshot => {
      const cableropetriceppushdownPeopleArray = [];
      snapshot.forEach( doc => {
          const data = doc.data();
          cableropetriceppushdownPeopleArray.push(data);
      })
      this.setState({cableropetriceppushdownPeopleArray: cableropetriceppushdownPeopleArray})
    }).catch( error => console.log(error));

    // get users of single arm cable kickback
    db.collection('exercises-tricep').doc('single-arm-cable-kickback').collection('people').get().then( snapshot => {
      const singlearmcablekickbackPeopleArray = [];
      snapshot.forEach( doc => {
          const data = doc.data();
          singlearmcablekickbackPeopleArray.push(data);
      })
      this.setState({singlearmcablekickbackPeopleArray: singlearmcablekickbackPeopleArray})
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
                          this.state.closegripbenchpressPeopleArray && 
                          this.state.closegripbenchpressPeopleArray.map( exercise => {
                              if(data.idname === "close-grip-bench-press"){
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
                          this.state.tricepdipsPeopleArray && 
                          this.state.tricepdipsPeopleArray.map( exercise => {
                              if(data.idname === "tricep-dips"){
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
                          this.state.cableropetriceppushdownPeopleArray && 
                          this.state.cableropetriceppushdownPeopleArray.map( exercise => {
                              if(data.idname === "cable-rope-tricep-pushdown"){
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
                          this.state.singlearmcablekickbackPeopleArray && 
                          this.state.singlearmcablekickbackPeopleArray.map( exercise => {
                              if(data.idname === "single-arm-cable-kickback"){
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
              Tricep exercises
          </Typography><br></br>

          {newData}

          <br></br>
          <br></br>
          <br></br>
      </div>
    )
  }
}

export default NewListTricep;