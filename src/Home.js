import React, { Component } from 'react'
import { Route, Switch, NavLink, Redirect } from 'react-router-dom'
import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';
import Course from './containers/Course/Course';
import NoMatch from './component/NoMatch'

class Home extends Component {
    render() {
        return (
            <div>
                <h1>Sean Byrne</h1>
                <ul>
            <NavLink to='/users'>
                        Users
            </NavLink>
            <br></br>
            <NavLink to='/courses'>
                        Courses
            </NavLink>
                </ul>
                <Switch>
                <Route path='/users' component={Users} />
                <Route path='/courses' component={Courses} />
                <Redirect from='/all-courses' to='/courses' />
                <Route component={NoMatch} />
                </Switch>
            </div>
        )
    }
}

export default Home
