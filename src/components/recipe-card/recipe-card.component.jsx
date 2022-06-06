import { RecipeCardContainer, RecipeCardImage, RecipeCardDescription } from './recipe-card.styles'


const RecipeCard = ({ recipe }) => {

  
  const { name, createdAt, url, imageUrl } = recipe

  return (
    <RecipeCardContainer to={`/${url}`}>
      <RecipeCardImage imageUrl={imageUrl} />
      <RecipeCardDescription>
        <h1>{name}</h1>
        <small>{createdAt}</small>
      </RecipeCardDescription>
    </RecipeCardContainer>
  )
}
export default RecipeCard