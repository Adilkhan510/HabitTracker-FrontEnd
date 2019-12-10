import React, { Component } from 'react';
import Axios from 'axios';
import moment from 'moment'

class Habit extends Component{
    state={
        habit: '',
        id: '',
        editClicked: false,
        checkboxClicked: false,
    }

    editHandler= ()=>{
        this.setState({
            editClicked : true,
        })
    }

    changeHandler=(e)=>{
        this.setState({
            habit: e.target.value
        })
    }

    checkboxHandler =()=>{
        console.log(this.props.habitData._id)
        console.log(moment()._d)
        Axios.put(`http://localhost:4000/api/v1/habits/edit/${this.props.habitData._id}`, {"date" : moment()._d}).then(res=>{
            console.log(res)
        }).catch(err=>{
            console.log(err)
        })
    }

    render(){
        return(
            this.state.editClicked ? 
            <form onSubmit={(e)=>{
                        e.preventDefault()
                        this.props.updateHabit(this.props.habitData._id, this.state.habit)
                    this.setState({
                        editClicked : false,
                    })}
                    }>
                <input type="text" onChange={this.changeHandler}></input>
                <button>Submit</button>
            </form> :
            <li key={this.props.habitData._id}>
                <p>{this.props.habitData.name}</p>
            <button className="habit-edit" onClick={()=>{
                this.editHandler()
            }}>Edit</button>
            <button className="habit-delete" onClick={()=>{this.props.deleteHabit(this.props.habitData._id)}}>delete</button>
            <input type="checkbox" className='checkbox' onClick={this.checkboxHandler} />
            </li>
        )
    }
}

// const Habit=(props)=>{
//     return(
//         <li key={props.habitData._id}>{props.habitData.name}
//         <button className="habit-edit" onClick={()=>{
//             props.editHabit(props.habitData._id)
//         }}>Edit</button>
//         <button className="habit-delete" onClick={()=>{props.deleteHabit(props.habitData._id)}}>delete</button>
//         </li>
//     )
// }

export default Habit
