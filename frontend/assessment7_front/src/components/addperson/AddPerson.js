import { React, useState } from "react";
import './AddPerson.css'

const handleSubmit = () => {
  let _form = document.getElementById('form');
  _form.reset();
  alert("Person added successfully");
};

function AddPerson() {
  let [userData, setUserData] = useState([]);

  function submitHandler(e) {
    e.preventDefault();
    let _firstName = document.querySelector('input[name="firstName"]').value;
    let _lastName = document.querySelector('input[name="lastName"]').value;
    let _username = document.querySelector('input[name="username"]').value;
    let _password = document.querySelector('input[name="password"]').value;
    
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      firstName: _firstName ,
      lastName: _lastName,
      username: _username,
      password: _password 
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw
    };

    fetch("http://localhost:8080/addPerson", requestOptions)
  .then(response => response.json())
  .catch(error => console.log('error', error));

    handleSubmit();
  }

  return (
    <div className="addPerson">
      <form method="POST" autoComplete="off" id="form">
        <div class="form-group">
          <label>Firstname</label>
          <input type="text" class="form-control" name="firstName" placeholder="Enter firstname"/>
        </div>
        <div class="form-group">
          <label>Lastname</label>
          <input type="text" class="form-control" name="lastName" placeholder="Enter lastname"/>
        </div>
        <div class="form-group">
          <label>Username</label>
          <input type="text" class="form-control" name="username" placeholder="Enter username"/>
        </div>
        <div class="form-group">
          <label>Password</label>
          <input type="password" class="form-control" name="password" placeholder="Enter password"/>
        </div>
        <br/>
        <input type="submit" class="btn btn-primary" value="Submit" onClick={submitHandler} />
      </form>
    </div>
  );
}

export default AddPerson;
