import React, { Component } from 'react';
import { db } from '../services/firebase';

const testofzo = [];

class ArrayTest extends Component {

    state = {
        exercisesArray: null,
        dumbbellpressPeopleArray: null
    }

    componentDidMount(){
        db.collection('exercises').get().then( snapshot => {
            const exercisesArray = [];
            snapshot.forEach( doc => {
                const data = doc.data();
                exercisesArray.push(data);
                testofzo.push(data.name);
            })
            this.setState({exercisesArray: exercisesArray})
        }).catch( error => console.log(error));
        db.collection('exercises').doc('dumbbell-press').collection('people').get().then( snapshot => {
            const dumbbellpressPeopleArray = [];
            snapshot.forEach( doc => {
                const data = doc.data();
                dumbbellpressPeopleArray.push(data);
            })
            this.setState({dumbbellpressPeopleArray: dumbbellpressPeopleArray})
        }).catch( error => console.log(error));
    }

    render() {
        return (
            <div style={{color: 'white'}}>
                <h1>firebase oefeningen</h1>
                {
                    this.state.exercisesArray && 
                    this.state.exercisesArray.map( exercise => {
                        return (
                            <div>
                                <p>{exercise.name}</p>
                            </div>
                        )
                    })
                }
                {
                    this.state.dumbbellpressPeopleArray && 
                    this.state.dumbbellpressPeopleArray.map( exercise => {
                        return (
                            <div>
                                <p>{exercise.name} drukt <br></br>{exercise.reps1}x {exercise.weight1}kg | {exercise.reps2}x {exercise.weight2}kg | {exercise.reps3}x {exercise.weight3}kg </p>
                            </div>
                        )
                    })
                }
                
            </div>
        )
    }
}

export const test = testofzo;

export default ArrayTest;