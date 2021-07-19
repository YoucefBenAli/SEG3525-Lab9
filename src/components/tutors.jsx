import React, { Component } from 'react';
import '../Styles/tutors.css';
import placeholder from '../images/placeholder.jpg'

class Tutors extends Component {
    state = {  }
    render() { 
        return ( 
            <div class="mt-5">
                <h1>Tutors</h1>
                <div class="centered">
                    <div class="tutor mt-3">
                        <div class="tutorInfo">
                            <img src={placeholder} width="100%"></img>
                            <h3>Tutor 1</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lobortis nulla neque, non fringilla risus commodo facilisis. Proin tincidunt justo sit amet ullamcorper volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque molestie rutrum aliquam. Morbi pharetra ipsum vel lacus facilisis cursus.</p>
                            <button className="btn btn-success mt-3 m-*-auto">Contact tutor</button>
                        </div>
                    </div>

                    <div class="tutor mt-3">
                        <div class="tutorInfo">
                            <img src={placeholder} width="100%"></img>
                            <h3>Tutor 2</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lobortis nulla neque, non fringilla risus commodo facilisis. Proin tincidunt justo sit amet ullamcorper volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque molestie rutrum aliquam. Morbi pharetra ipsum vel lacus facilisis cursus.</p>
                            <button className="btn btn-success mt-3 m-*-auto">Contact tutor</button>
                        </div>
                    </div>

                    <div class="tutor mt-3">
                        <div class="tutorInfo">
                            <img src={placeholder} width="100%"></img>
                            <h3>Tutor 3</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lobortis nulla neque, non fringilla risus commodo facilisis. Proin tincidunt justo sit amet ullamcorper volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque molestie rutrum aliquam. Morbi pharetra ipsum vel lacus facilisis cursus.</p>
                            <button className="btn btn-success mt-3 m-*-auto">Contact tutor</button>
                        </div>
                    </div>

                    <div class="tutor mt-3">
                        <div class="tutorInfo">
                            <img src={placeholder} width="100%"></img>
                            <h3>Tutor 4</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lobortis nulla neque, non fringilla risus commodo facilisis. Proin tincidunt justo sit amet ullamcorper volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque molestie rutrum aliquam. Morbi pharetra ipsum vel lacus facilisis cursus.</p>
                            <button className="btn btn-success mt-3 m-*-auto">Contact tutor</button>
                        </div>
                    </div>

                    <div class="tutor mt-3 mt-3">
                        <div class="tutorInfo">
                            <img src={placeholder} width="100%"></img>
                            <h3>Tutor 5</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lobortis nulla neque, non fringilla risus commodo facilisis. Proin tincidunt justo sit amet ullamcorper volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque molestie rutrum aliquam. Morbi pharetra ipsum vel lacus facilisis cursus.</p>
                            <button className="btn btn-success mt-3 m-*-auto">Contact tutor</button>
                        </div>
                    </div>

                    <div class="tutor mt-3">
                        <div class="tutorInfo">
                            <img src={placeholder} width="100%"></img>
                            <h3>Tutor 6</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lobortis nulla neque, non fringilla risus commodo facilisis. Proin tincidunt justo sit amet ullamcorper volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque molestie rutrum aliquam. Morbi pharetra ipsum vel lacus facilisis cursus.</p>
                            <button className="btn btn-success mt-3 m-*-auto">Contact tutor</button>
                        </div>
                    </div>
                </div>
            </div> 
        );
    }
}
 
export default Tutors;