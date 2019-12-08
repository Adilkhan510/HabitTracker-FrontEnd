import React, { Component } from 'react';
import axios from 'axios';
// Internal Imports
import HabitList from '../Habits/HabitsList';
import HabitsForm from '../Habits/HabitsForm'

class HabitContainer extends Component{
    state={
        user: '',
        Habits : [],
        ajaxloaded : false,
    }
    
    componentDidMount(){
        this.fetchData();
    }

    addHabit=(habit)=>{
        axios.post('http://localhost:4000/api/v1/habits/create',{name: `${habit}`}).then(
            (res)=>{
                this.setState({
                    Habits : [...this.state.Habits, res.data.data]
                })
            }
        )
    }

    deleteHabit=(habitId)=>{
        console.log(habitId)
        axios.delete(`http://localhost:4000/api/v1/habits/${habitId}`).then(
            res=>{
                this.setState({
                    Habits : [...this.state.Habits.filter(habit=> habit._id !== habitId)]
                })
            }
        ).catch(
            err=>{
                console.log(err)
            }
        )
    }

    render(){
        return(
            <div>
                <HabitsForm addHabit={this.addHabit} />
                <HabitList habits={this.state.Habits} deleteHabit={this.deleteHabit} />                
            </div>

        )
    }

    fetchData =()=>{
        axios.get('http://localhost:4000/api/v1/habits').then(
            res=>{
                console.log(res);
                this.setState({
                    Habits : res.data.data,
                    ajaxloaded: true
                })
            }
        ).catch(err=>{
            console.log(err)
        })
    }
}

export default HabitContainer;