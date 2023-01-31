import '../css/dashboard.css'
import '../css/auth.css'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logout, reset } from '../features/auth/authSlice'
import { getRecipe } from '../features/recipe/recipeSlice'
import {FaCocktail, FaCookie, FaFacebook, FaHeart, FaHouseUser, FaInstagram, FaPlus, FaSearch, FaSignOutAlt, FaTwitter, } from 'react-icons/fa'
import { useEffect } from 'react'
import RecipeItem from '../components/RecipeItem'
import Spinner from '../components/Spinner'


function LikedRecipe() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user, isError, message } = useSelector((state) => state.auth)
  const {recipe, isLoading} = useSelector((state) => state.recipe)

  useEffect(() => {
    if(isError) {
      console.log(message)
    }

    if(!user) {
      navigate('/login')
    }

    dispatch(getRecipe())

    return () => {
      dispatch(reset())
    }
  }, [user, isError, message, navigate, dispatch])

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }

  if(isLoading) {
    return <Spinner />
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
            <div className="heading">Liked Recipes</div>
            <div className="search-bar">
                <input type="search" placeholder="Search drinks here" />
                <button><FaSearch /></button>
            </div>
            <div className="logo"><img src="/images/logo 3.png" alt="Yummy" /></div>
        </div>
        <div className="container">
        <section className='content'>
        {recipe ? (
          <div className='recipes'>
            {recipe.map((recipe) => (
              <RecipeItem key={recipe._id} recipe={recipe} />
            ))}
          </div>
        ) : (
          <h3>You have not set any liked recipes</h3>
        )}
      </section>
       </div>
    </div>
    </div>
    </>
  )
}

export default LikedRecipe