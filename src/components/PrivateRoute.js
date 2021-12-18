import React from 'react'
import {useAuth} from '../contexts/SignupContext'
import { Route, Redirect} from "react-router-dom";


export default function PrivateRoute({ children,...rest}) {

    const {currentUser} = useAuth()
    return currentUser ?(
        <Route {...rest} >{children}</Route>
    ):(<Redirect to="/"></Redirect>)
}
