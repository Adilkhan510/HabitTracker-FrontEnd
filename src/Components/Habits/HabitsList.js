import React, { Component } from 'react';
import Habit from './Habit'
import moment from 'moment';

class HabitList extends Component{
    render(){
        const date = moment().format("MMM Do YYYY");  
        console.log(moment()._d)
        return(
            <div className="habit-list">
                <ul><span>Habits to work on for: {date}</span> 
                    {
                        this.props.habits.map(habit=>{
                            return(
                                <Habit checkboxHandler={this.props.checkboxHandler} habitData={habit} deleteHabit={this.props.deleteHabit} editHabit={this.props.editHabit} updateHabit={this.props.updateHabit} />
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default HabitList;