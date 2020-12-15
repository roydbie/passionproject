import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import { Divider } from '@material-ui/core';

import closegripbenchfoto from '../images/close-grip-bench-press.jpg'; 
import triceppushdownfoto from '../images/tricep-pushdown.jpg'; 

const Accordion = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
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

const descCloseGripBenchPress = "The close grip bench press differs from the traditional bench press in that you perform the press with a narrower grip. This position places emphasis on building strength and size in the triceps muscles, as well as the chest.";

const descTricepPushdown = "The triceps pushdown is one of the best exercises for triceps development. While the versatile upper-body workout is usually done on a cable machine (a fixture at most gyms), you can also perform a version of the move at home or on the go using a resistance band.";


const exercises = [{displayname: "Close-Grip Bench Press", linkname: "/exercises/close-grip-bench-press", panel: "panel1", imagelink: closegripbenchfoto, descr: descCloseGripBenchPress, users: [{ user: "Roy de Bie", weight: "8x 24kg - 8x 26kg - 6x 28kg"}, { user: "Lars Vermeer", weight: "8x 30kg - 8x 32kg - 6x 34kg"}, { user: "Martijn Creusen", weight: "8x 20kg - 8x 22kg - 6x 24kg"}]}, 
                  {displayname: "Cable Rope Tricep Pushdown", linkname: "/exercises/cable-rope-tricep-pushdown", panel: "panel2", imagelink: triceppushdownfoto, descr: descTricepPushdown, users: [{ user: "Roy de Bie", weight: "24kg"}, { user: "Lars Vermeer", weight: "30kg"}]}, 
                  {displayname: "Lying Triceps Extension", linkname: "/exercises/lying-triceps-extension", panel: "panel3", imagelink: triceppushdownfoto, descr: descTricepPushdown, users: [{ user: "Roy de Bie", weight: "24kg"}, { user: "Lars Vermeer", weight: "30kg"}]}, 
                  {displayname: "Tricep Dips", linkname: "/exercises/tricep-dips", panel: "panel4", imagelink: triceppushdownfoto, descr: descTricepPushdown, users: [{ user: "Roy de Bie", weight: "24kg"}, { user: "Lars Vermeer", weight: "30kg"}]},
                  {displayname: "Diamond Push-Ups", linkname: "/exercises/diamond-pushups", panel: "panel5", imagelink: triceppushdownfoto, descr: descTricepPushdown, users: [{ user: "Roy de Bie", weight: "24kg"}, { user: "Lars Vermeer", weight: "30kg"}]},
                  {displayname: "Bench Dip", linkname: "/exercises/bench-dip", panel: "panel6", imagelink: triceppushdownfoto, descr: descTricepPushdown, users: [{ user: "Roy de Bie", weight: "24kg"}, { user: "Lars Vermeer", weight: "30kg"}]},
                  {displayname: "One-Arm Overhead Extension", linkname: "/exercises/one-arm-overhead-extension", panel: "panel7", imagelink: triceppushdownfoto, descr: descTricepPushdown, users: [{ user: "Roy de Bie", weight: "24kg"}, { user: "Lars Vermeer", weight: "30kg"}]},
                  {displayname: "Standard Push-Up", linkname: "/exercises/standard-push-up", panel: "panel8", imagelink: triceppushdownfoto, descr: descTricepPushdown, users: [{ user: "Roy de Bie", weight: "24kg"}, { user: "Lars Vermeer", weight: "30kg"}]},
                  {displayname: "Single-Arm Cable Kick-Back", linkname: "/exercises/single-arm-cable-kick-back", panel: "panel9", imagelink: triceppushdownfoto, descr: descTricepPushdown, users: [{ user: "Roy de Bie", weight: "24kg"}, { user: "Lars Vermeer", weight: "30kg"}, { user: "Joep van Antwerpen", weight: "22kg"}]},
                ]; 

                


export default function NewListTricep() {
  const [expanded, setExpanded] = React.useState('');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const listItems = exercises.map((exercise) =>
      
      <div>
        <Accordion square expanded={expanded === exercise.panel} onChange={handleChange(exercise.panel)} style={{border: 'none'}}>
            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" style={{paddingLeft: '25px'}}>
            <Typography>{exercise.displayname}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    <img src={exercise.imagelink} alt="not found" style={{width: '100%', height: 'auto'}}/><br></br>
                    {exercise.descr} <br></br><br></br>
                    {exercise.users.map(function(user, index){
                        return <div><b>{user.user}</b> drukt <br></br><b>{user.weight}</b><br></br><Divider /></div>;
                    })}
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Divider />
      </div>
  );

  return (
    <div>
        <Typography variant="h6">
            Tricep exercises
        </Typography><br></br>

        {listItems}

        <br></br>
        <br></br>
        <br></br>
    </div>
  );
}