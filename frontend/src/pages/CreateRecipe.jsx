import '../css/create-recipe.css'
import '../css/single-recipe.css'
import '../css/dashboard.css'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import {toast} from 'react-toastify'
import { logout, reset } from '../features/auth/authSlice'
import {createRecipe} from '../features/recipe/recipeSlice'
import Spinner from '../components/Spinner'
import {FaCocktail, FaCookie, FaFacebook, FaHeart, FaHouseUser, FaInstagram, FaPlus, FaSignOutAlt, FaTwitter, } from 'react-icons/fa'


function CreateRecipe() {
  const [formData, setFormData] = useState({
    recipe_img: '',
    recipe_name: '',
    description: '',
    prep_time: '',
    cook_time: '',
    servings: '',
    instructions: '',
    ingredients: '',
    tools: ''
  })

  const {recipe_img, recipe_name,description, prep_time, cook_time, servings, instructions, ingredients, tools} = formData

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)

  const {recipe, isLoading, isError, isSuccess, message} = useSelector((state) => state.recipe)

    useEffect(() => {
        if(isError) {
            toast.error(message)
        }

        if(isSuccess || recipe) {
            navigate('/myrecipes')
        }

        dispatch(reset())

    }, [recipe, isError, isSuccess, message, navigate, dispatch])

    const onChange = (e) => {
      setFormData((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value
      }))
  }

    const onSubmit = (e) => {
      e.preventDefault()

      const recipeData = {
          recipe_img,
          recipe_name,
          description,
          prep_time,
          cook_time,
          servings,
          instructions,
          ingredients,
          tools
      }

      dispatch(createRecipe(recipeData))
  }

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
                <div className="heading">Create Recipe</div>
                
                <div className="logo"><img src="/images/logo 3.png" alt="Yummy" /></div>
            </div>
            <form onSubmit={onSubmit}>
            <section className="recipe-hero">
                <input type="file"  placeholder="Upload image here" className="image" id='recipe_img' name='recipe_img' value={recipe_img} onChange={onChange}/>
                <article className="recipe-info">
                  <input type="text" placeholder="Recipe name" id='recipe_name' name='recipe_name' value={recipe_name} onChange={onChange}/>
                  <textarea  cols="150" rows="10" placeholder="Description" id='description' name='description' value={description} onChange={onChange}></textarea>
                  <div className="recipe-icons">
                    <article>
                      <i className="fas fa-clock"></i>
                      <h5>prep time</h5>
                      <input type="number" id='prep_time' name='prep_time' value={prep_time} onChange={onChange}/>
                    </article>
                    <article>
                      <i className="far fa-clock"></i>
                      <h5>cook time</h5>
                      <input type="number" id='cook_time' name='cook_time' value={cook_time} onChange={onChange}/>
                    </article>
                    <article>
                      <i className="fas fa-user-friends"></i>
                      <h5>serving</h5>
                      <input type='number' id='servings' name='servings' value={servings} onChange={onChange}/>
                    </article>
                  </div>
                </article>
              </section>
              {/* <!-- content --> */}
        <section className="recipe-content">
        <article className="second-column">
              <h4>Instructions</h4>
              <textarea cols="100" rows="15" id='instructions' name='instructions' value={instructions} onChange={onChange}></textarea>
              <div>
                <h4>Ingredients</h4>
                <textarea  cols="70" rows="10" id='ingredients' name='ingredients' value={ingredients} onChange={onChange}></textarea>
              </div>
              <div>
                <h4>Tools</h4>
                <textarea  cols="70" rows="10" id='tools' name='tools' value={tools} onChange={onChange}></textarea>
              </div>
              <button type='submit'>Submit</button>
            </article>
          </section>
        </form>
        </div>
        </div>
    </>
  )
}

export default CreateRecipe