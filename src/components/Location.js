import React , { Component } from 'react';
import { db } from '../services/firebase';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';

class Location extends Component {

    constructor(props){
        super(props);
        this.state = {
            latitude: null,
            longitude: null,
            userAddress: null,
            peopleAtTheGym: null
        };
        this.getLocation = this.getLocation.bind(this);
        this.getCoordinates = this.getCoordinates.bind(this);
    }

    getLocation(){
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.getCoordinates);
        } else {
            console.log('Geolocation is not supported by this browser.')
        }
    }

    getCoordinates(position){
        this.setState({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        })
    }

    componentDidMount(){
        this.getLocation();

        db.collection('atthegym').get().then( snapshot => {
            const peopleAtTheGym = [];
            snapshot.forEach( doc => {
                const data = doc.data();
                peopleAtTheGym.push(data);
            })
            this.setState({peopleAtTheGym: peopleAtTheGym})
        }).catch( error => console.log(error));
    }

    render(){

        return(
            <div style={{color: 'white'}}>
                <br></br>
                <p>Latitude: {this.state.latitude}</p>
                <p>Longitude: {this.state.longitude}</p>
                <div style={{flexGrow: 1, maxWidth: 752}}>
                    <Grid item xs={12} md={6}>
                        <div>
                            <List>
                            {
                                this.state.peopleAtTheGym && this.state.peopleAtTheGym.map( (data) => {
                                    return (
                                        <div>
                                            <ListItem className="listItemPersonal">
                                                
                                                {
                                                    (() => {switch (data.active.toString()) {
                                                        case "true":   return (
                                                            <ListItemText
                                                            primary={data.name}
                                                            secondary="is currently at the gym"
                                                            color="secondary.main"
                                                            />
                                                            );
                                                        case "false":   return (
                                                            <ListItemText
                                                            primary={data.name}
                                                            secondary="is currently not at the gym"
                                                            color="secondary.main"
                                                            />
                                                            );
                                                        default:      return "";
                                                    }
                                                    })()
                                                }
                                            </ListItem>
                                            <br></br>
                                        </div>
                                    )
                                })
                            }
                            </List>
                        </div>
                    </Grid>
                </div>
            </div>
        )
    }
}

export default Location;