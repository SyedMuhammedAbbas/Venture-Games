import React from 'react';
import axios from 'axios';

function index() {
  async function verification() {
    let jwtToken = JSON.parse(localStorage.getItem("token"));
    let config = {
        headers: {
          Authorization: "Bearer " + jwtToken,
        },
    };
    let response = await axios.get("https://api.venturegames.pk/SendVerification", config);
    console.log(response);
    localStorage.clear();
    if(response.data == 'Email Sent') {
        alert("Check your email");
    }
  }  
  return (
    <div>
        <div>
            Kindly Verify your mail by clicking on the following button
        </div>
        <button onClick={() => {verification()}}>
            Click Me
        </button>
    </div>
  )
}

export default index