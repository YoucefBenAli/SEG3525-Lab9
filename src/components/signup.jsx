import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import '../Styles/signUp.css'

class SignUp extends Component {
    state = { 
        modalIsOpen: false,
        infoPageIsOpen:false
     }

     toggleModal(){
         this.setState({
             modalIsOpen: ! this.state.modalIsOpen
         })
     }

     finishTest(){
         document.getElementById("form").style.display="block";
         document.getElementById("test").style.display="none";
     }

     

    render() { 
        let classes="btn btn-success m-*-auto " +this.props.wantedClass;
        console.log("props", classes);

        return (
            <div>
                <button onClick={this.toggleModal.bind(this)} className={classes}>Join Us Today</button>
                
                <Modal show={this.state.modalIsOpen}>
                    <Modal.Body>
                        <h2 class="signUpHeader">Join the Community</h2>

                        <h3>Complete this test and once finished finish your sign up</h3>
                        <p>Wrong answers will be penalized and thus you are allowed to leave blank answers. The test is timed</p>

                        <h3>Time left: 10:00</h3>

                        

                        <div id="test">
                            <div class="mb-5">
                                <label class="question mb-2 fs-4">What is 5+5</label>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="exampleRadios" id="answer1" value="option1"></input>
                                    <label class="form-check-label" for="answer1">
                                        10
                                    </label> 
                                </div>

                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="exampleRadios" id="answer2" value="option2"></input>
                                    <label class="form-check-label" for="answer2">
                                        15
                                    </label>
                                </div>
                                
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="exampleRadios" id="answer3" value="option3"></input>
                                    <label class="form-check-label" for="answer3">
                                        20
                                    </label>
                                </div>
                            </div>

                            <div class="mb-5">
                                <label for="Question2 fs-4">Explain all you know about chemical bonds</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>

                            <div class="mb-5">
                                <label for="Question3 fs-4">How many continents are there and what are their names</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>

                            <div class="mb-5">
                                <label for="Question3 fs-4">Generic question 4</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>

                            <div class="mb-5">
                                <label for="Question3 fs-4">Generic question 5</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>

                            <div class="mb-5">
                                <label for="Question3 fs-4">Generic question 6</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>

                            <div class="mb-5">
                                <label for="Question3 fs-4">Generic question 7</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
            
                            <button class="btn btn-success m-*-auto" onClick={this.finishTest}>Finish Test</button>

                        </div>

                        <div id="form">
                            <form onSubmit="return false;">
                                <div class="form-group mb-3">
                                    <label class="question"><img src="https://img.icons8.com/ultraviolet/40/000000/identification-documents.png"/>Name</label>
                                    <input type="text" id="name"placeholder="Enter Name here" class="form-control" required></input>
                                    <div class="valid-feedback">
                                    Looks good!
                                    </div>
                                    <div class="invalid-feedback">
                                    Please add your full name here.
                                    </div>
                                </div>

                                <div class="form-group mb-3">
                                    <label class="question"><img src="https://img.icons8.com/ultraviolet/40/000000/email-open--v1.png"/>E-Mail</label> 
                                    <span><img src="https://img.icons8.com/ultraviolet/40/000000/info.png" width="30" data-toggle="tooltip" data-placement="right" title="Please add your email here using the *****@domain.com format where domain is your provider"></img></span>
                                    <input type="text" placeholder="Enter E-Mail Here" class="form-control" required></input>
                                    <div class="valid-feedback">
                                    Looks good!
                                    </div>
                                    <div class="invalid-feedback">
                                    Please add your email here.
                                    </div>
                                    <small id="emailHelp" class="form-text text-muted">Emails aren't shared to anyone but will be used to contact you</small>
                                </div>

                                <div class="form-group mb-3">
                                    <label class="question"><img src="https://img.icons8.com/ultraviolet/40/000000/phone.png"/>Phone Number</label> <span><img src="https://img.icons8.com/ultraviolet/40/000000/info.png" width="30" data-toggle="tooltip" data-placement="right" title="Please add your phone number without the dashes or parentheses, the website will add the dashes and parentheses automaticaly when you finish inputting your number"></img></span>
                                    <input type="tel" id="tel" placeholder="(XXX) XXX-XXXX" class="form-control" minlength="14" maxlength="14" pattern="^(?=.*[0-9])[-()0-9]+$" required></input>
                                    
                                    <div class="valid-feedback">
                                        Looks good!
                                    </div>
                                    <div class="invalid-feedback">
                                        Please add your full 12 digit phone number here.
                                    </div>
                                    <small id="emailHelp" class="form-text text-muted">Phone numbers aren't shared to anyone but will be used to contact you</small>
                                </div>

                                <div class="mb-5">
                                        <label class="question mb-2"><img src="https://img.icons8.com/ultraviolet/40/000000/cat-footprint.png"/>What are your subjects of interest?</label>
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked></input>
                                            <label class="form-check-label" for="exampleRadios1">
                                                Student
                                            </label> 
                                        </div>

                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"></input>
                                            <label class="form-check-label" for="exampleRadios2">
                                                Tutor
                                            </label>
                                        </div>
                                        
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3"></input>
                                            <label class="form-check-label" for="exampleRadios3">
                                                Professor
                                            </label>
                                        </div>
                                </div>

                                <div class="mb-5">
                                        <label class="question mb-2"><img src="https://img.icons8.com/ultraviolet/40/000000/cat-footprint.png"/>What are your subjects of interest?</label>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" name="exampleRadios" id="subject1" value="option1"></input>
                                            <label class="form-check-label" for="subject1">
                                                Math
                                            </label> 
                                        </div>

                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" name="exampleRadios" id="subject2" value="option2"></input>
                                            <label class="form-check-label" for="subject2">
                                                Biology
                                            </label>
                                        </div>
                                        
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" name="exampleRadios" id="subject3" value="option3"></input>
                                            <label class="form-check-label" for="subject3">
                                                Physics
                                            </label>
                                        </div>

                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" name="exampleRadios" id="subject4" value="option3"></input>
                                            <label class="form-check-label" for="subject4">
                                                Chem
                                            </label>
                                        </div>

                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" name="exampleRadios" id="subject5" value="option3"></input>
                                            <label class="form-check-label" for="subject5">
                                                French
                                            </label>
                                        </div>

                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" name="exampleRadios" id="subject6" value="option3"></input>
                                            <label class="form-check-label" for="subject6">
                                                English
                                            </label>
                                        </div>

                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" name="exampleRadios" id="subject7" value="option3"></input>
                                            <label class="form-check-label" for="subject7">
                                                Computer Science
                                            </label>
                                        </div>

                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" name="exampleRadios" id="subject8" value="option3"></input>
                                            <label class="form-check-label" for="subject8">
                                                Law
                                            </label>
                                        </div>
                                </div>
                                <button class="btn btn-success m-*-auto">Sign up</button>
                            </form>
                        </div>
                        <button onClick={this.toggleModal.bind(this)} className="btn btn-warning mt-3 m-*-auto paddedButton">Close</button>

                    </Modal.Body>
                </Modal>
            </div>
         );
    }
}
 
export default SignUp;