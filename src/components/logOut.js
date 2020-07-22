import React, { Component } from 'react';
import {auth} from "../services/firebase"
import {Link} from "react-router-dom"

export default class LogOut extends Component {


    render(){
        return(
            <div className="" id="">
            {auth().currentUser
              ? <div className="navbar-nav">
                <Link className="" to="/chat"></Link>
                <button className="btn btn-primary mr-3" onClick={() => auth().signOut()}>Logout</button>
              </div>
              : <div className="navbar-nav">
                <Link className="nav-item nav-link mr-3" to="/login">Sign In</Link>
                <Link className="nav-item nav-link mr-3" to="/signup">Sign Up</Link>
              </div>}
          </div>
            
        )
    }

}