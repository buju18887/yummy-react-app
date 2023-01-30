import '../css/dashboard.css'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logout, reset } from '../features/auth/authSlice'
import {FaCocktail, FaCookie, FaFacebook, FaHeart, FaHouseUser, FaInstagram, FaPlus, FaSignOutAlt, FaTwitter, } from 'react-icons/fa'


function MyRecipe() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }

  return (
    <>
     {/* <!-- side nav --> */}
   <div className="wrapper">
    <div className="sidebar">
        <img src="/images/pfp.png" alt="Profile" />
        <h4>{user && user.name}</h4>
        <ul>
                <li><a href="/dashboard"><FaHouseUser />Home</a></li>
                <li><a href="/myrecipes"><FaCookie />My Recipes</a></li>
                <li><a href="/likedrecipes"><FaHeart />Liked Recipes</a></li>
                <li><a href="/createrecipe"><FaPlus />Create Recipe</a></li>
                <li><a href="/drinks"><FaCocktail />Drinks</a></li>
                <li><a href="" onClick={onLogout}><FaSignOutAlt />Logout</a></li>
            </ul>
            <div className="social-media">
                <a href="/dashboard"><FaFacebook /></a>
                <a href="/dashboard"><FaTwitter /></a>
                <a href="/dashboard"><FaInstagram /></a>
            </div>
    </div>
      {/* <!--end of nav  --> */}
       {/* <!-- main --> */}
       <div className="main-content">
        <div className="header">
            <div className="heading">My Recipes</div>
            <div className="search-bar">
                <input type="search" placeholder="Search drinks here" />
                <button><i className="fa-solid fa-magnifying-glass"></i></button>
            </div>
            <div className="logo"><img src="/images/logo 3.png" alt="Yummy" /></div>
        </div>
       
    </div>
    </div>
    </>
  )
}

export default MyRecipe