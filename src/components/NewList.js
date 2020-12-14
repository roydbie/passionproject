import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import { Divider } from '@material-ui/core';

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

const exercises = [{displayname: "Close-Grip Bench Press", linkname: "/exercises/close-grip-bench-press", panel: "panel1"}, 
                  {displayname: "Cable Rope Tricep Pushdown", linkname: "/exercises/cable-rope-tricep-pushdown", panel: "panel2"}, 
                  {displayname: "Lying Triceps Extension", linkname: "/exercises/lying-triceps-extension", panel: "panel3"}, 
                  {displayname: "Tricep Dips", linkname: "/exercises/tricep-dips", panel: "panel4"},
                  {displayname: "Diamond Push-Ups", linkname: "/exercises/diamond-pushups", panel: "panel5"},
                  {displayname: "Bench Dip", linkname: "/exercises/bench-dip", panel: "panel6"},
                  {displayname: "One-Arm Overhead Extension", linkname: "/exercises/one-arm-overhead-extension", panel: "panel7"},
                  {displayname: "Standard Push-Up", linkname: "/exercises/standard-push-up", panel: "panel8"},
                  {displayname: "Single-Arm Cable Kick-Back", linkname: "/exercises/single-arm-cable-kick-back", panel: "panel9"},
                ]; 

export default function NewList() {
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
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
    </div>
  );
}