import '../css/single-recipe.css'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logout, reset } from '../features/auth/authSlice'
import {FaClock, FaCocktail, FaCookie, FaFacebook, FaHeart, FaHouseUser, FaInstagram, FaPlus, FaSignOutAlt, FaTwitter, FaUser, FaSearch } from 'react-icons/fa'
import { useEffect } from 'react'


function SingleRecipe() {
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
                <div className="heading">Recipes</div>
                <div className="search-bar">
                    <input type="search" placeholder="Search recipe here" />
                    <button><FaSearch /></button>
                </div>
                <div className="logo"><img src="/images/logo 3.png" alt="Yummy" /></div>
            </div>
            <section className="recipe-hero">
                <img
                  src="/images/recipe-4.jpeg"
                  className="recipe-hero-img"
                  alt=''
                />
                <article className="recipe-info">
                  <h2>Banana Pancakes</h2>
                  <p>
                    Shabby chic humblebrag banh mi bushwick, banjo kale chips
                    meggings. Cred selfies sartorial, cloud bread disrupt blue bottle
                    seitan. Dreamcatcher tousled bitters, health goth vegan venmo
                    whatever street art lyft shabby chic pitchfork beard. Drinking
                    vinegar poke tbh, iPhone coloring book polaroid truffaut tousled
                    ramps pug trust fund letterpress. Portland four loko austin
                    chicharrones bitters single-origin coffee. Leggings letterpress
                    occupy pour-over.
                  </p>
                  <div className="recipe-icons">
                    <article>
                      <FaClock />
                      <h5>prep time</h5>
                      <p>30 min.</p>
                    </article>
                    <article>
                      <FaClock />
                      <h5>cook time</h5>
                      <p>15 min.</p>
                    </article>
                    <article>
                      <FaUser />
                      <h5>serving</h5>
                      <p>6 servings</p>
                    </article>
                  </div>
                </article>
              </section>
              {/* <!-- content --> */}
        <section className="recipe-content">
            <article>
              <h4>Instructions</h4>
              {/* <!-- single instruction --> */}
              <div className="single-instruction">
                <header>
                  <p>step 1</p>
                  
                </header>
                <p>
                  I'm baby mustache man braid fingerstache small batch venmo
                  succulents shoreditch.
                </p>
              </div>
              {/* <!-- end of single instruction --> */}
              {/* <!-- single instruction --> */}
              <div className="single-instruction">
                <header>
                  <p>step 2</p>
                  
                </header>
                <p>
                  Pabst pitchfork you probably haven't heard of them, asymmetrical
                  seitan tousled succulents wolf banh mi man bun bespoke selfies
                  freegan ethical hexagon.
                </p>
              </div>
              {/* <!-- end of single instruction --> */}
              {/* <!-- single instruction --> */}
              <div className="single-instruction">
                <header>
                  <p>step 3</p>
                  
                </header>
                <p>
                  Polaroid iPhone bitters chambray. Cornhole swag kombucha
                  live-edge.
                </p>
              </div>
              {/* <!-- end of single instruction --> */}
            </article>
            <article className="second-column">
              <div>
                <h4>Ingredients</h4>
                <p className="single-ingredient">1 1/2 cups dry pancake mix</p>
                <p className="single-ingredient">1/2 cup flax seed meal</p>
                <p className="single-ingredient">1 cup skim milk</p>
              </div>
              <div>
                <h4>Tools</h4>
                <p className="single-tool">Hand Blender</p>
                <p className="single-tool">Large Heavy Pot With Lid</p>
                <p className="single-tool">Measuring Spoons</p>
                <p className="single-tool">Measuring Cups</p>
              </div>
            </article>
          </section>
        </div>
     </div>
     </>
  )
}

export default SingleRecipe