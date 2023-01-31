import { useDispatch } from 'react-redux'
import { deleteRecipe } from '../features/recipe/recipeSlice'

function RecipeItem({recipe}) {
  const dispatch = useDispatch()

  const onClick = () => {
    dispatch(deleteRecipe(recipe._id))
  } 

  return (
    <div className='recipee'>
      <div>{new Date(recipe.createdAt).toLocaleString('en-US')}</div>
      <h2>{recipe.recipe_name}</h2>
      <button onClick={onClick} className='close'>
        X
      </button>
    </div>
  )
}

export default RecipeItem
