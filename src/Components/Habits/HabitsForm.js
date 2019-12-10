import React, { Component } from 'react'

export class HabitsForm extends Component {
    state = {
        habit : ''
    }

    changeHandler = (e)=>{
        e.preventDefault();
        this.setState({
            habit: e.target.value
        })
    }
    render() {
        return (
            <div className="habit-form">
                <form onSubmit={(e)=>{
                        e.preventDefault()
                        this.props.addHabit(this.state.habit)
                    }}>
                    <input type="text" placeholder="Type Your Goals Here" onChange={this.changeHandler} />
                    <button >Submit</button>
                </form>
            </div>
        )
    }
}

export default HabitsForm
