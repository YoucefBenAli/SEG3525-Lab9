import React, { Component } from 'react';
import SignUp from "./signup"
import '../Styles/header.css'
import logo from '../images/learning.png' 

class header extends Component {
    state = {  }
    
    
    
    render() { 
        return ( 
            <nav class="navbar navbar-expand-lg navbar-light navBackground">
                <a class="navbar-brand fontSize1" href="#"><img src={logo} width="50" height="50"></img>Stoody</a>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link fontSize2" href="#aboutUs">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link fontSize2" href="#courses">Courses</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link fontSize2" href="#tutors">Tutors</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link fontSize2" href="#contact">Contact</a>
                    </li>
                    </ul>
                </div>

                <div class="float-right marginRight">
                    <a class="btn btn-success m-*-auto" href="https://youcefbenali.github.io/SEG3525-Lab9/">Translate to English</a>
                </div>

                <div class="float-right marginRight">
                <a class="btn btn-success m-*-auto" href="https://youcefbenali-github-io.translate.goog/SEG3525-Lab9/?_x_tr_sl=en&_x_tr_tl=fr&_x_tr_hl=en-US&_x_tr_pto=ajax,elem">Translate to French</a>
                </div>

                <div class="float-right">
                    <SignUp wantedClass="noPadding"></SignUp>
                </div>
            </nav>
         );
    }
}
 
export default header;