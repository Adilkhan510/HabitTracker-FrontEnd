import React, { Component } from 'react'
import Axios from 'axios'

export class login extends Component {

    state = {
        email: '',
        password : '',
    }

    handleChange = (e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        Axios.post('http://localhost:4000/api/v1/login',{email:this.state.email, password: this.state.password}).then(res=>{
            console.log(res)
            this.props.setCurrentUser(res.data.data.id, res.data.data.token)
        }).catch(err=>{
            console.log(err)
        })
    }

    render() {
        return (
            <div>
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalCenterTitle">Sign In</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span>&times;</span>
                            </button>
                        </div>

                        <div className="modal-body">
                            <form className="form-signin" onSubmit={this.handleSubmit}>
                                <div className="form-label-group">
                                    <label htmlFor="inputEmail">Email address</label>
                                    <input onChange={this.handleChange} type="text" name='email' id="inputEmail" className="form-control" />
                                    <div className='alert'></div>

                                </div>
                                <div className="form-label-group">
                                    <label htmlFor="inputPassword">Password</label>
                                    <input onChange={this.handleChange} type="password" name='password' id="inputPassword" className="form-control" />
                                    <div className='alert'></div>

                                </div>
                                <div className="modal-footer">
                                    <button type="submit" className="btn btn-primary">Log in</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default login
