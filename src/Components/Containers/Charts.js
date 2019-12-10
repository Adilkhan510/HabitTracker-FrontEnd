import React, { Component } from 'react'
import { Bar, Line, Pie } from 'react-chartjs-2';


export class Charts extends Component {
    state = {
        chartData :{
            labels : [this.props.habits.map(habit=>{
                return habit.name
            })],
            datasets: [{
                label : ['time','time'],
                data: [
                    20
                ],
                backgroundColor : ['red', 'blue']
            }]
        }
    }
    render() {
        return (
            <div>
                <Pie
                    data={this.state.chartData}
                    width={700}
                    height={500}
                    options={{ }} />
            </div>
        )
    }
}

export default Charts
