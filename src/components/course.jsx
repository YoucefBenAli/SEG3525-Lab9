import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal'
import placeholder from '../images/placeholder.jpg'
import '../Styles/course.css';


class Course extends Component {
    state = { 
        modalIsOpen: false,
        infoPageIsOpen:false
     }

     toggleModal(){
        this.setState({
            modalIsOpen: ! this.state.modalIsOpen
        })
    }


    render() { 
        return ( 
            <div>
                <button onClick={this.toggleModal.bind(this)} className="btn btn-success mt-3 m-*-auto">Start Course</button>

                <Modal dialogClassName="modalSize" show={this.state.modalIsOpen} fullscreen={true}>
                        <h1>Course 1</h1>
                        <div class="centeredCourse">
                            <img src={placeholder} class="mt-3"></img>

                            <p class="fs-3">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at maximus lectus, eu eleifend lectus. Suspendisse est eros, molestie non malesuada sit amet, commodo eget felis. Aliquam convallis at odio sit amet rhoncus. Nullam sit amet ex quam. Morbi eu enim arcu. Duis et euismod ipsum. Maecenas non auctor nisi, ut consequat purus. Aliquam interdum erat leo, in iaculis odio tincidunt non. Integer feugiat tellus sagittis nulla congue efficitur. Aenean eu lectus et felis lacinia vulputate. Fusce varius leo ac nunc eleifend, et imperdiet ipsum dignissim. Vivamus sagittis consequat tortor. Sed rutrum sed turpis ac porta. Nullam elementum, diam id vulputate iaculis, mauris elit ornare dui, a convallis nunc massa quis massa. Cras vitae ultrices odio, vitae pulvinar lectus.
                            </p>

                            <p class="fs-3">
                            Aenean imperdiet mi posuere libero vehicula, sed consequat ex lobortis. Cras feugiat sodales ante consequat aliquam. Donec finibus eget augue ut cursus. Nullam nec turpis ante. Donec quis justo nisl. Praesent faucibus dignissim sapien. Maecenas pharetra sagittis quam, vel hendrerit metus interdum id. Nullam sagittis nibh nisi, quis scelerisque erat aliquet sed. Ut porttitor mauris nulla, eget elementum nisi maximus id. Sed urna arcu, dignissim vel suscipit at, viverra nec ex.
                            </p>

                            <p class="fs-3">
                            Donec ipsum urna, imperdiet sed iaculis sed, fringilla et augue. Aliquam nibh mi, condimentum eu pulvinar nec, facilisis sit amet turpis. Phasellus ut libero dapibus, porta nunc a, finibus arcu. Proin nisi nisl, maximus et ligula in, maximus elementum risus. Fusce risus nisi, feugiat eu luctus nec, finibus finibus augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla malesuada eros faucibus ante convallis, id volutpat arcu porttitor. Proin magna orci, semper a est id, hendrerit mattis turpis. Praesent tempus congue velit, eu placerat lectus mattis mattis.
                            </p>

                            <button onClick={this.toggleModal.bind(this)} className="btn btn-success mt-3 m-*-auto paddedButton">Finish</button>
                        </div>
                </Modal>
            </div>
         );
    }
}
 
export default Course;