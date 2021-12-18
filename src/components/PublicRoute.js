import React from 'react'
import {useAuth} from '../contexts/SignupContext'
import { Route, Redirect} from "react-router-dom";


export default function PublicRoute({ children,...rest}) {

    const {currentUser} = useAuth()
    return currentUser ?(
       
        <Redirect to="/"></Redirect>
    ):( <Route {...rest} >{children}</Route> )
}
