import React, { Component } from 'react';
import SignUp from "./signup"

import '../Styles/home.css'
import thinker from '../images/thinker.jpg'
import give from '../images/give.png'
import gears from '../images/gears.png'



class home extends Component {
    state = {  }
    
    render() { 
        return ( 
            <div className="width100 mt-5">
                <div className="info">
                    <h1>What we are</h1>
                    <img src={thinker} width="70%"></img>
                    <p className="mt-3 fs-4">A community of thinkers, students, tutors and scholars working together to help each other progress in our pursuit of knowledge</p>
                </div>
                
                <div className="info">
                    <h1>What we offer</h1>
                    <img src={give} width="70%"></img>
                    <p className="mt-3 fs-4">We offer members of our site video lectures on a variety of topics, access to tutors and helpers, and homework help from our variety of professionals</p>
                </div>

                <div className="info">
                    <h1>How we do it</h1>
                    <img src={gears} width="70%"></img>
                    <p className="mt-3 fs-4">Anyone who signs up fills a form that will help match you with the correct courses and tutors, and will also connect you with your peers so you can network and study together.</p>
                
                </div>
                <SignUp wantedClass="paddedButton"></SignUp>
            </div>
         );
    }
}
 
export default home;