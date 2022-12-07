import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './components/home/Home';
import ListPersons from './components/listpersons/ListPersons';
import AddPerson from './components/addperson/AddPerson';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}>
            <Route path='/home/listpersons' element={<ListPersons/>}/>
            <Route path='/home/addperson' element={<AddPerson/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
