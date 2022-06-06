import { useContext, Fragment } from 'react'
import { RecipesContext } from '../../contexts/recipes.context'
import { RecipesContainer } from './recipes.styles'
import RecipeCard from "../recipe-card/recipe-card.component"

const Recipes = () => {

  const { recipesMap } = useContext(RecipesContext)

  return (
    <RecipesContainer>
      {
        Object.keys(recipesMap).map(title => (
          <Fragment key={title}>
            {
              recipesMap[title].map(recipe => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))
            }
          </Fragment>
        ))
      }   
    </RecipesContainer>
  )
}
export default Recipes