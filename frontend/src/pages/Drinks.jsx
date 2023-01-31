import '../css/dashboard.css'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logout, reset } from '../features/auth/authSlice'
import {FaCocktail, FaCookie, FaFacebook, FaHeart, FaHouseUser, FaInstagram, FaPlus, FaSearch, FaSignOutAlt, FaTwitter, } from 'react-icons/fa'
import { useEffect } from 'react'


function Drinks() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user, isError, message } = useSelector((state) => state.auth)

  useEffect(() => {
    if(isError) {
      console.log(message)
    }

    if(!user) {
      navigate('/login')
    }

    dispatch(reset())
  }, [user, isError, message, navigate, dispatch])

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
                <li><a href="/dashboard"><FaHouseUser /> Home</a></li>
                <li><a href="/myrecipes"><FaCookie /> My Recipes</a></li>
                <li><a href="/likedrecipes"><FaHeart /> Liked Recipes</a></li>
                <li><a href="/createrecipe"><FaPlus /> Create Recipe</a></li>
                <li><a href="/drinks"><FaCocktail /> Drinks</a></li>
                <li><a href="" onClick={onLogout}><FaSignOutAlt /> Logout</a></li>
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
            <div className="heading">Drinks</div>
            <div className="search-bar">
                <input type="search" placeholder="Search drinks here" />
                <button><FaSearch /></button>
            </div>
            <div className="logo"><img src="/images/logo 3.png" alt="Yummy" /></div>
        </div>
        <div className="grid">
            {/* <!-- single recipe --> */}
      <a href="/singlerecipe" className="recipe">
        <img
          src="/images/drink 1.jpg"
          className="img recipe-img"
          alt=""
        />
        <h5>Drink 1</h5>
        <p>Prep : 15min | Cook : 5min</p>
      </a>
      {/* <!-- end of single recipe --> */}
       {/* <!-- single recipe --> */}
       <a href="/singlerecipe" className="recipe">
        <img
          src="/images/drink 2.jpg"
          className="img recipe-img"
          alt=""
        />
        <h5>Drink 2</h5>
        <p>Prep : 15min | Cook : 5min</p>
      </a>
      {/* <!-- end of single recipe --> */}
       {/* <!-- single recipe --> */}
       <a href="/singlerecipe" className="recipe">
        <img
          src="/images/drink 3.jpg"
          className="img recipe-img"
          alt=""
        />
        <h5>Drink 3</h5>
        <p>Prep : 15min | Cook : 5min</p>
      </a>
      {/* <!-- end of single recipe --> */}
       {/* <!-- single recipe --> */}
       <a href="/singlerecipe" className="recipe">
        <img
          src="/images/drink 4.jpg"
          className="img recipe-img"
          alt=""
        />
        <h5>Drink 4</h5>
        <p>Prep : 15min | Cook : 5min</p>
      </a>
      {/* <!-- end of single recipe --> */}
       {/* <!-- single recipe --> */}
       <a href="/singlerecipe" className="recipe">
        <img
          src="/images/drink 5.jpg"
          className="img recipe-img"
          alt=""
        />
        <h5>Drink 5</h5>
        <p>Prep : 15min | Cook : 5min</p>
      </a>
      {/* <!-- end of single recipe --> */}
      
        </div>
    </div>
  </div>
    </>
  )
}

export default Drinks