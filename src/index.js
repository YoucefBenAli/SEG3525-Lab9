import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from "./components/header"
import Home from "./components/home"
import SignUp from "./components/signup"
import Courses from "./components/courses"
import Tutors from "./components/tutors"
import Contact from "./components/contact"

import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
  <React.StrictMode>
    <Header />
  </React.StrictMode>,
  document.getElementById('header')
);

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('home')
);

ReactDOM.render(
  <React.StrictMode>
    <Courses />
  </React.StrictMode>,
  document.getElementById('courses')
);

ReactDOM.render(
  <React.StrictMode>
    <Tutors />
  </React.StrictMode>,
  document.getElementById('tutors')
);

ReactDOM.render(
  <React.StrictMode>
    <Contact />
  </React.StrictMode>,
  document.getElementById('contact')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
