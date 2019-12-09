import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HabitsContainer from '../Components/Containers/HabitsContainer'
import Home from '../Components/Home/Home'
import Login from '../Components/Auth/Login'

export default (props)=>(
    <Switch>
        <Route exact path ='/' component={Home} />
        <Route exact path ='/habits' component = {HabitsContainer} />
        <Route exact path ='/login' component={Login} setCurrentUser={props.setCurrentUser} />
    </Switch>
)