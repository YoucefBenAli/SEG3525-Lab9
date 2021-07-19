import React, { Component } from 'react';
import '../Styles/courses.css';
import placeholder from '../images/placeholder.jpg'
import Course from "./course"


class Courses extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <h1>Courses</h1>
                <div class="centered">
                    <div class="course mt-3">
                        <div class="courseInfo">
                            <img src={placeholder} width="100%"></img>
                            <h3>Course 1</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lobortis nulla neque, non fringilla risus commodo facilisis. Proin tincidunt justo sit amet ullamcorper volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque molestie rutrum aliquam. Morbi pharetra ipsum vel lacus facilisis cursus.</p>
                            <Course></Course>
                        </div>
                    </div>

                    <div class="course mt-3">
                        <div class="courseInfo">
                            <img src={placeholder} width="100%"></img>
                            <h3>Course 2</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lobortis nulla neque, non fringilla risus commodo facilisis. Proin tincidunt justo sit amet ullamcorper volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque molestie rutrum aliquam. Morbi pharetra ipsum vel lacus facilisis cursus.</p>
                            <Course></Course>
                        </div>
                    </div>

                    <div class="course mt-3">
                        <div class="courseInfo">
                            <img src={placeholder} width="100%"></img>
                            <h3>Course 3</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lobortis nulla neque, non fringilla risus commodo facilisis. Proin tincidunt justo sit amet ullamcorper volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque molestie rutrum aliquam. Morbi pharetra ipsum vel lacus facilisis cursus.</p>
                            <Course></Course>
                        </div>
                    </div>

                    <div class="course mt-3">
                        <div class="courseInfo">
                            <img src={placeholder} width="100%"></img>
                            <h3>Course 4</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lobortis nulla neque, non fringilla risus commodo facilisis. Proin tincidunt justo sit amet ullamcorper volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque molestie rutrum aliquam. Morbi pharetra ipsum vel lacus facilisis cursus.</p>
                            <Course></Course>
                        </div>
                    </div>

                    <div class="course mt-3 mt-3">
                        <div class="courseInfo">
                            <img src={placeholder} width="100%"></img>
                            <h3>Course 5</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lobortis nulla neque, non fringilla risus commodo facilisis. Proin tincidunt justo sit amet ullamcorper volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque molestie rutrum aliquam. Morbi pharetra ipsum vel lacus facilisis cursus.</p>
                            <Course></Course>
                        </div>
                    </div>

                    <div class="course mt-3">
                        <div class="courseInfo">
                            <img src={placeholder} width="100%"></img>
                            <h3>Course 6</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lobortis nulla neque, non fringilla risus commodo facilisis. Proin tincidunt justo sit amet ullamcorper volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque molestie rutrum aliquam. Morbi pharetra ipsum vel lacus facilisis cursus.</p>
                            <Course></Course>
                        </div>
                    </div>
                </div>
            </div> 
        );
    }
}
 
export default Courses;