import React, { Component } from 'react'
import axios from 'axios'

export class SignUp extends Component {
    state={
        name : '',
        emailAddress: '',
        password : '',
    }

    changeHandler = (e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    submitHandler=(e)=>{
        e.preventDefault();
        axios.post('http://localhost:4000/api/v1/users/create', this.state).then(res=>{
            console.log(res)
        }).catch(err=>{
            console.log(err)
        })
    }
    render() {
        return (
            <div className="signup">
                <form className="signup-form" onSubmit={this.submitHandler}>
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input onChange={this.changeHandler} type="text" class="form-control" name="name" id="name" aria-describedby="name" placeholder="Full Name" />
                        <label for="exampleInputEmail1">Email address</label>
                        <input onChange={this.changeHandler} type="email" class="form-control" name="emailAddress" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input onChange={this.changeHandler} type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" name="password" />
                        <button className="registration-button" type="submit" class="btn btn-primary">Submit</button>
                        </div>

                </form>
            </div>
        )
    }
}

export default SignUp
