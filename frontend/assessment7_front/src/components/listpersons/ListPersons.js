import { React, useState } from "react";
import { json } from "react-router-dom";

function ListPersons() {
  let [persons, setPersons] = useState([]);
  
  fetch("http://localhost:8080/getPersons")
    .then(response => response.json())
    .then(result => setPersons(result))
    .catch(error => console.log('error', error));

  const showPersons = persons.map((person, index) =>{
    return(
      <tr>
        <td>{person.firstName}</td>
        <td>{person.lastName}</td>
        <td>{person.username}</td>
        <td>{person.password}</td>
      </tr>
      )});
      
  return (
    <div className="listPersons">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Firstname</th>
            <th scope="col">Lastname</th>
            <th scope="col">Username</th>
            <th scope="col">Password</th>
          </tr>
        </thead>
        <tbody>
          {showPersons}
        </tbody>
      </table>
    </div>
  );
}

export default ListPersons;