import React, { Component } from 'react';


const Habit=(props)=>{
    return(
        <li key={props.habitData._id}>{props.habitData.name}
        <button className="habit-edit" onClick={()=>{
            props.editHandler(props.habitData._id)
        }}>Edit</button>
        <button className="habit-delete" onClick={()=>{props.deleteHabit(props.habitData._id)}}>delete</button>
        </li>
    )
}

export default Habit
