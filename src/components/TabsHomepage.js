import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';

import HomepageCard from './HomepageCard';

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

const TabsHomepage = () => {
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
                  <Tab label="everyone" className="tabHome"  {...a11yProps(0)} classes={{selected: 'selected' }} />
                  <Tab label="my friends" className="tabHome" {...a11yProps(1)} classes={{selected: 'selected' }} />
                </Tabs>
                <TabPanel value={value} index={0} className="tabpanel">
                  <HomepageCard/>
                </TabPanel>
                <TabPanel value={value} index={1} className="tabpanel">
                  <h1>sdfsdf</h1>
                </TabPanel>
              </Paper>

        </div>

    )
}

export default TabsHomepage;