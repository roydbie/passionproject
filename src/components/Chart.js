import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

class Chart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: {
                labels: ["Jan 2020", "Feb 2020", "Mar 2020", "Apr 2020", "May 2020", "Jun 2020", "Jul 2020", "Aug 2020", "Sep 2020", "Oct 2020", "Nov 2020", "Dec 2020"],
                datasets:[
                    {
                        label: 'Bicep curl weight x 8 reps',
                        data: [8, 8, 8, 8, 8, 10, 10, 10, 10, 12, 12, 12],
                        pointBackgroundColor: [
                            '#39D1E0', '#39D1E0', '#39D1E0', '#39D1E0', '#39D1E0', '#39D1E0', '#39D1E0', '#39D1E0', '#39D1E0', '#39D1E0', '#39D1E0', '#39D1E0',
                        ],
                        backgroundColor: 'transparent',
                    }
                ],                
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            // Include a dollar sign in the ticks
                            callback: function(value, index, values) {
                                return value + ' kg';
                            },
                            beginAtZero:false,
                            maxTicksLimit: 5,
                            fontColor: 'white'
                        },
                        gridLines: {
                            color: "rgba(0, 0, 0, 0)",
                        }
                    }],
                    xAxes: [{
                        gridLines: {
                            color: "rgba(0, 0, 0, 0)",
                        },
                        ticks: {
                            fontColor: 'white'
                        },
                    }]
                },
                title: {
                    display: true,
                    text: 'Bicep curl weight x 8 reps',
                    fontColor: 'white'
                },
                legend: {
                    display: false
                }
            }
        }
    }
    render() {
        return (
            <div style={{width: '90%', marginLeft: '5%'}}>
                <Line
                data={this.state.chartData}
                width={90}
                height={50}
                options={this.state.options}
                />
            </div>
        )
    }
}

export default Chart;