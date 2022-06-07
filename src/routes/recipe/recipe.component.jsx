import { useContext, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { RecipesContext } from '../../contexts/recipes.context'

import Spinner from '../../components/spinner/spinner.component'

import { RecipeContainer, RecipeTopContainer, RecipeImageContainer, RecipeImage, RecipeIngredientsContainer, RecipeBottomContainer } from './recipe.styles'

const Recipe = () => {

  const { recipe } = useParams()
  const { recipesMap, isLoading } = useContext(RecipesContext)
  const [recipeDetails, setRecipeDetails] = useState(recipesMap[recipe])

  useEffect(() => {
    setRecipeDetails(recipesMap[recipe])
  }, [recipe, recipesMap])

  // this scrolls to the top of the page
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      {
        isLoading ? (
          <Spinner />
        ) : (
          recipeDetails && recipeDetails.map(recipe => (
          <RecipeContainer key={recipe.id}>
            <h1>{recipe.name}</h1>
            <small>{recipe.createdAt}</small>

            <RecipeTopContainer>
              <RecipeImageContainer>
                <RecipeImage imageUrl={recipe.imageUrl} />
              </RecipeImageContainer>
              <RecipeIngredientsContainer>
                <h3>Ingredience</h3>
                {
                  recipe.ingredients.map(ingredient => (
                    <label className='ingredience-label' key={ingredient}>
                      <input type='checkbox'/>
                      {ingredient}
                    </label>
                  ))
                }
              </RecipeIngredientsContainer>
            </RecipeTopContainer>

            <RecipeBottomContainer>
              <h3>Postup</h3>
              <ol>
                {
                  recipe.instructions.map(instruction => (
                    <li key={instruction}>{instruction}</li>
                  ))
                }
              </ol>
              {
                recipe.tips && (
                  <>
                    <h3>Tipy</h3>
                    <ul>
                      {
                        recipe.tips.map(tip => (
                          <li key={tip}>{tip}</li>
                        ))
                      }
                    </ul>
                  </>
                )
              }
            </RecipeBottomContainer>
          </RecipeContainer>
        ))
        )
      }
    </>
  )
}
export default Recipe