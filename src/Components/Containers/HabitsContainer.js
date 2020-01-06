import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment'
// Internal Imports
import HabitList from '../Habits/HabitsList';
import HabitsForm from '../Habits/HabitsForm'
import Chart from './ChartsContainer'

class HabitContainer extends Component{
    state={
        user: '',
        Habits : [],
        ajaxloaded : false,
        HabitsData: ''
    }
    
    componentDidMount(){
        this.fetchData();
    }

    editHabit = (habitId)=>{
        console.log(habitId)
    }

    addHabit=(habit)=>{
        axios.post('http://localhost:4000/api/v1/habits/create',{name: `${habit}`, id: localStorage.getItem('uid')}).then(
            (res)=>{
                this.setState({
                    Habits : [...this.state.Habits, res.data.data]
                })
            }
        )
    }

    updateHabit=(habitId, habitName)=>{
        axios.put(`http://localhost:4000/api/v1/habits/${habitId}/edit`,{name: habitName}).then(
            this.setState({
                Habits : [...this.state.Habits.map(
                    habit=>{
                        if(habit._id === habitId){
                            habit.name = habitName
                        }
                        return habit
                    }
                )]
            })
        ).catch(err=>{
            console.log(err)
        })
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
    checkboxHandler =(habitId)=>{
        console.log(habitId)
        console.log(moment()._d)
        axios.put(`http://localhost:4000/api/v1/habits/edit/${habitId}`, {"date" : moment().format("MMM Do YYYY")}).then(res=>{
            this.setState({
                Habits : [...this.state.Habits.map(habit=>{
                    if(habit._id=== habitId){
                        habit.daysCompleted= res.data.data.daysCompleted
                    }
                    return habit
                })]
            })
        }).catch(err=>{
            console.log(err)
        })
    }


    render(){
        return(
            <div className="habits-container">
                <div className="habits">
                    <HabitsForm addHabit={this.addHabit} />
                    <HabitList checkboxHandler={this.checkboxHandler} habits={this.state.Habits} deleteHabit={this.deleteHabit} editHabit={this.editHabit} updateHabit={this.updateHabit} />
                </div>
                <div className='chart'>
                    <Chart habits={this.state.Habits} />
                </div>
            </div>

        )
    }

    fetchData =()=>{
        axios.get(`http://localhost:4000/api/v1/users/${localStorage.getItem('uid')}`).then(
            res=>{
                console.log(res);
                this.setState({
                    Habits : res.data.data.habits,
                    ajaxloaded: true
                })
            }
        ).catch(err=>{
            console.log(err)
        })
    }
}

export default HabitContainer;