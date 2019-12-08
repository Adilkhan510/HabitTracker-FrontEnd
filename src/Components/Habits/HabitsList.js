import React, { Component } from 'react';
import Habit from './Habit'

class HabitList extends Component{
    render(){
        return(
            <div className="habit-list">
                <ul>Things To do Today:
                    {
                        this.props.habits.map(habit=>{
                            return(
                                <Habit habitData={habit} deleteHabit={this.props.deleteHabit} />
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default HabitList;