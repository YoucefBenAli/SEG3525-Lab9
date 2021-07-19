import React, { Component } from 'react';
import '../Styles/contact.css';

class Contact extends Component {
    state = {  }
    render() { 
        return ( 
            <div class="mt-5 centered">
                <h1>Contact Us</h1>
                <h2 class="mt-3"><span class="contactInfo">E-Mail:</span> stoodyHelp@gmail.com</h2>
                <h2><span class="contactInfo">Phone Number:</span> 613 000 0000</h2>
                <h2><span class="contactInfo">Fax:</span> 613 111 1111</h2>


                <h1 class="mt-5">Common Questions</h1>

                <h2 class="contactInfo mt-4">Question 1</h2>
                <p class='fs-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at maximus lectus, eu eleifend lectus. Suspendisse est eros, molestie non malesuada sit amet, commodo eget felis. Aliquam convallis at odio sit amet rhoncus. Nullam sit amet ex quam.</p>

                <h2 class="contactInfo mt-4">Question 2</h2>
                <p class='fs-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at maximus lectus, eu eleifend lectus. Suspendisse est eros, molestie non malesuada sit amet, commodo eget felis. Aliquam convallis at odio sit amet rhoncus. Nullam sit amet ex quam.</p>

                <h2 class="contactInfo mt-4">Question 3</h2>
                <p class='fs-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at maximus lectus, eu eleifend lectus. Suspendisse est eros, molestie non malesuada sit amet, commodo eget felis. Aliquam convallis at odio sit amet rhoncus. Nullam sit amet ex quam.</p>

                <h2 class="contactInfo mt-4">Question 4</h2>
                <p class='fs-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at maximus lectus, eu eleifend lectus. Suspendisse est eros, molestie non malesuada sit amet, commodo eget felis. Aliquam convallis at odio sit amet rhoncus. Nullam sit amet ex quam.</p>

                <h2 class="contactInfo mt-4">Question 5</h2>
                <p class='fs-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at maximus lectus, eu eleifend lectus. Suspendisse est eros, molestie non malesuada sit amet, commodo eget felis. Aliquam convallis at odio sit amet rhoncus. Nullam sit amet ex quam.</p>

            </div>
         );
    }
}
 
export default Contact;