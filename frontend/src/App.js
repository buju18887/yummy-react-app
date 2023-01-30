import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import HomePage from './pages/HomePage'
import Dashboard from './pages/Dashboard'
import Signup from './pages/Signup'
import Login from './pages/Login'
import MyRecipe from './pages/MyRecipe'
import LikedRecipe from './pages/LikedRecipe'
import CreateRecipe from './pages/CreateRecipe'
import Drinks from './pages/Drinks'
import SingleRecipe from './pages/SingleRecipe'


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/myrecipes" element={<MyRecipe />}/>
        <Route path="/likedrecipes" element={<LikedRecipe />}/>
        <Route path="/createrecipe" element={<CreateRecipe />}/>
        <Route path="/drinks" element={<Drinks />}/>
        <Route path="/singlerecipe" element={<SingleRecipe />}/>
      </Routes>
    </Router>
    <ToastContainer />
    </>
  );
}

export default App;
