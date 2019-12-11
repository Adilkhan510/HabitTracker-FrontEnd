import React, { Component } from 'react'
import { Bar, Line, Pie, Bubble, Doughnut } from 'react-chartjs-2';
import * as d3 from "d3";
import { cloneNode } from '@babel/types';



export class Charts extends Component {
    state = {
        chartData :{
            labels : [this.props.habits],
            datasets: [{
                label : ["Habits" , "Habits"],
                data: [
                    20, 23
                ],
                backgroundColor : ['red', 'blue']
            }]
        },
        chartSelected :  ''
    }

    render() {
        // const chartData = {
        //     labels : [...this.props.habits.map(habit=>{
        //         return habit.name
        //     })],
        //     datasets: [{
        //         label : ["Habits"],
        //         data: [
        //             20, 20
        //         ],
        //         backgroundColor : ['red', 'blue']
        //     }]
        // }
        const data = {
            labels: [
                ...this.props.habits.map(habit=>{
                    return habit.name
                })
            ],
            datasets: [{
                label: "Number of Days a Habit was completed",
                data: [...this.props.habits.map(habit=>{
                    return habit.daysCompleted.length
                })],
                backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56',
                "red",
                "teal",
                "green"
                ],
                hoverBackgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
                ]
            }]
        };
          
        console.log("Habits", this.props.habits)
        // console.log("state",chartData)
        return (
            <div className="charts">
                <Doughnut data={data} options={{}} />
            </div>
        )
    }
}

export default Charts
