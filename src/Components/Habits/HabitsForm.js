import React, { Component } from 'react'

export class HabitsForm extends Component {
    state = {
        habit : '',
        placeHolder: ""
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
                        this.setState({
                            habit: ''
                        })
                    }}>
                    <input type="text" placeholder="Type Your Goals Here" onChange={this.changeHandler} value={this.state.habit} />
                    <button ><i class="far fa-share-square"></i></button>
                </form>
            </div>
        )
    }
}

export default HabitsForm
