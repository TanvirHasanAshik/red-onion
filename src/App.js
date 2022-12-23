import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home/Home/Home';
import FoodDetails from './component/FoodDetails/FoodDetails';
import Nav from './component/Shared/Header/Nav/Nav';
function App() {
  return (
    <div>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/foodDetails/:foodId" element={<FoodDetails></FoodDetails>}></Route>
      </Routes>
    </div>
  );
}

export default App;
