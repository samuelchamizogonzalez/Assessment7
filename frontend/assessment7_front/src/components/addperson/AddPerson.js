import { React, useState } from "react";

const handleSubmit = () => {
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
    
    console.log(_firstName);
    console.log(_lastName);
    console.log(_username);
    console.log(_password);
    
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
      <h1>Add Person</h1>
      <form method="POST" autoComplete="off">
        <label type="text">
          Firstname:
          <input type="text" className="input_label" name="firstName" />
        </label>
        <br />
        <label type="text">
          Lastname:
          <input type="text" className="input_label" name="lastName" />
        </label>
        <br />
        <label type="text">
          Username:
          <input type="text" className="input_label" name="username" />
        </label>
        <br />
        <label type="text">
          Password:
          <input type="text" className="input_label" name="password" />
        </label>
        <br />
        <input type="submit" value="Submit" onClick={submitHandler} />
      </form>
    </div>
  );
}

export default AddPerson;
