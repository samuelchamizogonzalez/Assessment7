import { Link, Outlet } from "react-router-dom";
import img_ListPerson from "./../../images/image_listperson.png";
import img_AddPerson from "./../../images/image_addperson.png";
import './Home.css'

function Home() {
  return (
    <div className="Home">
      <div className="titles">
        <h2>List Persons</h2>
        <h2>Add Person</h2>
      </div>
      <div className="btn-group">
        <Link to="/home/listPersons">
          <img alt="list persons" className="img_home" src={img_ListPerson} />
        </Link>
        <Link to="/home/addPerson">
          <img alt="add persons" className="img_home" src={img_AddPerson} />
        </Link>
      </div>
      
      <Outlet />
    </div>
  );
}

export default Home;
