import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { db } from '../services/firebase';

import moment from 'moment';

class HomepageCard extends Component {

  state = {
    updatesArray: null,
  }

  componentDidMount() {
    db.collection('updates').get().then( snapshot => {
      const updatesArray = [];
      snapshot.forEach( doc => {
          const data = doc.data();
          console.log(data);
          updatesArray.push(data);
      })
      this.setState({updatesArray: updatesArray})
    }).catch( error => console.log(error));
  };

  

  render() {

    console.log(this.state.updatesArray && this.state.updatesArray);

    const newData = this.state.updatesArray && this.state.updatesArray.map( (data) => {
      return (
          <div>
            <div>
              <Card style={{width: '90%', backgroundColor: '#353766', color: 'white', borderRadius: '10px', marginLeft: '5%'}}>
                <CardActionArea>
                    <CardContent>
                      <Typography gutterBottom variant="h6" component="h2" align="center">
                          {data.exercise} <br></br>
                      </Typography>
                      <Typography gutterBottom variant="body1" component="h4" align="center" style={{color:'#636363'}}>
                          Old: {data.old} 
                      </Typography>
                      <Typography gutterBottom variant="body1" component="h4" align="center">
                          New: {data.new}
                      </Typography>
                      <Typography gutterBottom variant="subtitle2" component="h2" align="center">
                          {data.name}
                      </Typography>
                      <Typography gutterBottom variant="body1" component="h4" align="center" style={{color:'#dedede'}}>
                          {moment(data.date.toDate()).format('MMMM Do YYYY')} 
                      </Typography>
                    </CardContent>
                </CardActionArea>
              </Card>
              <br></br>
            </div>    
          </div>
      )
    });

    return (
      <div>
        {newData}
      </div>
  );
  }

  
}

export default HomepageCard;