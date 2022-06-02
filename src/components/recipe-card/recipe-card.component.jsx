import { RecipeCardContainer, RecipeCardImageContainer, RecipeCardImage, RecipeCardDescription } from './recipe-card.styles'


const RecipeCard = () => {
  return (
    <RecipeCardContainer>
      <RecipeCardImageContainer>
        <RecipeCardImage />
      </RecipeCardImageContainer>
      <RecipeCardDescription>
        <h1>Brioche Buns</h1>
        <small>2. 6. 2022</small>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
        ex ea commodo consequat.</p>
      </RecipeCardDescription>
    </RecipeCardContainer>
  )
}
export default RecipeCard