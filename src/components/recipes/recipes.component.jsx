import { useContext, Fragment } from 'react'
import { RecipesContext } from '../../contexts/recipes.context'
import { RecipesContainer } from './recipes.styles'
import RecipeCard from "../recipe-card/recipe-card.component"

const Recipes = ({ searchfield }) => {

  const { recipesMap } = useContext(RecipesContext)

  const filteredRecipes = Object.keys(recipesMap).filter(title => (
    title.toLowerCase().includes(searchfield.toLowerCase())
  ))
  console.log(filteredRecipes);
  // filteredRecipes is an array full of 'titles' only

  return (
    <RecipesContainer>
      {
        filteredRecipes.map(recipe => (
          <Fragment key={recipe}>
            <RecipeCard key={recipe.id} recipe={recipe} />
          </Fragment>
        ))
      }
    </RecipesContainer>
  )
}
export default Recipes

