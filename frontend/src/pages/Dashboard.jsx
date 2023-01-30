import '../css/dashboard.css'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logout, reset } from '../features/auth/authSlice'
import {FaCocktail, FaCookie, FaFacebook, FaHeart, FaHouseUser, FaInstagram, FaPlus, FaSignOutAlt, FaTwitter, } from 'react-icons/fa'


function Dashboard() {
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
        {/* <!-- end of nav --> */}
        {/* <!-- main --> */}
        <div className="main-content">
            <div className="header">
                <div className="heading">Recipes</div>
                <div className="search-bar">
                    <input type="search" placeholder="Search recipes here" />
                    <button><i className="fa-solid fa-magnifying-glass"></i></button>
                </div>
                <div className="logo"><img src="/images/logo 3.png" alt="Yummy" /></div>
            </div>
            <div className="grid">
                {/* <!-- single recipe --> */}
          <a href="/singlerecipe" className="recipe">
            <img
              src="/images/chicken.jpg"
              className="img recipe-img"
              alt=""
            />
            <h5>BBQ Chicken</h5>
            <p>Prep : 15min | Cook : 5min</p>
          </a>
          {/* <!-- end of single recipe --> */}
           {/* <!-- single recipe --> */}
           <a href="/singlerecipe" className="recipe">
            <img
              src="/images/kebab.jpg"
              className="img recipe-img"
              alt=""
            />
            <h5>Kebab & Pasta</h5>
            <p>Prep : 15min | Cook : 5min</p>
          </a>
          {/* <!-- end of single recipe --> */}
           {/* <!-- single recipe --> */}
           <a href="/singlerecipe" className="recipe">
            <img
              src="/images/pesto.jpg"
              className="img recipe-img"
              alt=""
            />
            <h5>Pesto</h5>
            <p>Prep : 15min | Cook : 5min</p>
          </a>
          {/* <!-- end of single recipe --> */}
           {/* <!-- single recipe --> */}
           <a href="/singlerecipe" className="recipe">
            <img
              src="/images/recipe-3.jpeg"
              className="img recipe-img"
              alt=""
            />
            <h5>Vegetable soup</h5>
            <p>Prep : 15min | Cook : 5min</p>
          </a>
          {/* <!-- end of single recipe --> */}
           {/* <!-- single recipe --> */}
           <a href="/singlerecipe" className="recipe">
            <img
              src="/images/tiktok sandwich.jpg"
              className="img recipe-img"
              alt=""
            />
            <h5>Sandwich</h5>
            <p>Prep : 15min | Cook : 5min</p>
          </a>
          {/* <!-- end of single recipe --> */}
           {/* <!-- single recipe --> */}
           <a href="/singlerecipe" className="recipe">
            <img
              src="/images/fruitbowl.jpg"
              className="img recipe-img"
              alt=""
            />
            <h5>Fruit Bowl</h5>
            <p>Prep : 15min | Cook : 5min</p>
          </a>
          {/* <!-- end of single recipe --> */}
          {/* <!-- single recipe --> */}
          <a href="/singlerecipe" className="recipe">
            <img
              src="/images/eggs.jpg"
              className="img recipe-img"
              alt=""
            />
            <h5>Eggs</h5>
            <p>Prep : 15min | Cook : 5min</p>
          </a>
          {/* <!-- end of single recipe --> */}
          {/* <!-- single recipe --> */}
          <a href="/singlerecipe" className="recipe">
            <img
              src="/images/pizza.jpg"
              className="img recipe-img"
              alt=""
            />
            <h5>Pizza</h5>
            <p>Prep : 15min | Cook : 5min</p>
          </a>
          {/* <!-- end of single recipe --> */}
          {/* <!-- single recipe --> */}
          <a href="/singlerecipe" className="recipe">
            <img
              src="/images/recipe-2.jpeg"
              className="img recipe-img"
              alt=""
            />
            <h5>Greek Lamb</h5>
            <p>Prep : 15min | Cook : 5min</p>
          </a>
          {/* <!-- end of single recipe --> */}
            </div>
        </div>
    </div>
    </>
  )
}

export default Dashboard