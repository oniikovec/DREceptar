import { RecipesContainer } from './recipes.styles'
import RecipeCard from "../recipe-card/recipe-card.component"

const Recipes = () => {
  return (
    <RecipesContainer>
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
    </RecipesContainer>
  )
}
export default Recipes