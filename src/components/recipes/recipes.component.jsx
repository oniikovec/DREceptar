import { useContext, Fragment } from 'react'
import { RecipesContext } from '../../contexts/recipes.context'
import { RecipesContainer, RecipeNotFound } from './recipes.styles'
import RecipeCard from "../recipe-card/recipe-card.component"

const Recipes = ({ searchfield }) => {

  const { recipesMap } = useContext(RecipesContext)

  // filteredRecipes is an array full of 'titles' only
  const filteredRecipes = Object.keys(recipesMap).filter(title => (
    title.toLowerCase().includes(searchfield.toLowerCase())
  ))

  return (
    <>
      {
          !filteredRecipes.length ? (
            <RecipeNotFound>Bohuželky :(</RecipeNotFound>
        ) : (
          <RecipesContainer>
          {
            Object.keys(recipesMap).map(title => (
              filteredRecipes.includes(title) && recipesMap[title].map(recipe => (
                <Fragment key={recipe}>
                  <RecipeCard key={recipe.url} recipe={recipe} />
                </Fragment>
              ))
            ))
          }
          </RecipesContainer>
        )
      }
    </>
  )
}
export default Recipes

