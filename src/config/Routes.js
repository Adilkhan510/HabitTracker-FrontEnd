import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import HabitsContainer from '../Components/Containers/HabitsContainer'
import Home from '../Components/Home/Home'
import Login from '../Components/Auth/Login'

export default (props)=> {
    let userRoutes;
    if (props.user) {
        userRoutes = (
            <Route exact path ='/habits' component = {HabitsContainer} />
        )
    }

    return (
        <Switch>
            <Route exact path ='/' component={Home} />
            <Route exact path ='/login' render={()=> <Login setCurrentUser={props.setCurrentUser} />} />

            {userRoutes}
            
            <Redirect to="/" />

        </Switch>
    )
}