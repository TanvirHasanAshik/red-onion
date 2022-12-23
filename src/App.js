import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home/Home/Home';
import FoodDetails from './component/FoodDetails/FoodDetails';
import Nav from './component/Shared/Header/Nav/Nav';
import Cart from './component/Cart/Cart';
import Login from './component/Login/Login';
import SignUp from './component/SignUp/SignUp';
function App() {
  return (
    <div>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/foodDetails/:foodId" element={<FoodDetails></FoodDetails>}></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
      </Routes>
    </div>
  );
}

export default App;
