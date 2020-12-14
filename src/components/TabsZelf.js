import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';


import ExerciseListBicep from './ExerciseListBicep';
import ExerciseListChest from './ExerciseListChest';
import ExerciseListBack from './ExerciseListBack';
import NewList from './NewList';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  };
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  };

const TabsZelf = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };


    return(
        <div>
            <Paper square className="paper" style={{boxShadow: 'none'}}>
                <Tabs
                  value={value}
                  indicatorColor="secondary"
                  textColor="primary"
                  onChange={handleChange}
                  aria-label="disabled tabs example"
                  className="tabs"
                  style={{marginTop: '70px'}}
                >
                  <Tab label="chest" className="tab"  {...a11yProps(0)} />
                  <Tab label="bicep" className="tab" {...a11yProps(1)}/>
                  <Tab label="tricep" className="tab" {...a11yProps(2)}/>
                  <Tab label="back" className="tab" {...a11yProps(3)}/>
                </Tabs>
                <TabPanel value={value} index={0} className="tabpanel">
                  <ExerciseListChest />
                </TabPanel>
                <TabPanel value={value} index={1} className="tabpanel">
                  <ExerciseListBicep />
                </TabPanel>
                <TabPanel value={value} index={2} className="tabpanel">
                  <NewList/>
                </TabPanel>
                <TabPanel value={value} index={3} className="tabpanel">
                  <ExerciseListBack />
                </TabPanel>
              </Paper>

        </div>

    )
}

export default TabsZelf;