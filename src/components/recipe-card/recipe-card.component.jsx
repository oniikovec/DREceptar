import { RecipeCardContainer, RecipeCardImage, RecipeCardDescription } from './recipe-card.styles'


const RecipeCard = ({ recipe }) => {

  
  const { title, createdAt, url, imageUrl } = recipe

  return (
    <RecipeCardContainer to={`/${url}`}>
      <RecipeCardImage imageUrl={imageUrl} />
      <RecipeCardDescription>
        <h1>{title}</h1>
        <small>{createdAt}</small>
      </RecipeCardDescription>
    </RecipeCardContainer>
  )
}
export default RecipeCard