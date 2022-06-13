import { useContext, Fragment } from 'react'
import { RecipesContext } from '../../contexts/recipes.context'
import { RecipesContainer, RecipeNotFound } from './recipes.styles'
import RecipeCard from "../recipe-card/recipe-card.component"

const Recipes = ({ searchfield }) => {

  const { recipesMap } = useContext(RecipesContext)

  // filteredRecipes is an array full of 'titles' only
  const filteredRecipes = recipesMap.filter(recipe => (
    recipe.title.toLowerCase().includes(searchfield.toLowerCase()) && recipe
  ))

  return (
    <>
      {
          !filteredRecipes.length ? (
            <RecipeNotFound>Bohuželky :(</RecipeNotFound>
        ) : (
          <RecipesContainer>
          {
            filteredRecipes && filteredRecipes.map(recipe => (
              <Fragment key={recipe.url}>
                <RecipeCard key={recipe.url} recipe={recipe} />
              </Fragment>
            ))
          }
          </RecipesContainer>
        )
      }
    </>
  )
}
export default Recipes

