import styled from 'styled-components'
import briocheBunsImage from '../../assets/recipe-images/brioche-buns.jpg'

export const RecipeContainer = styled.div`
  background-color: papayawhip;
  display: flex;
  flex-direction: column;
`

export const RecipeTopContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const RecipeImageContainer = styled.div`
  width: 480px;
  height: 300px;
`
export const RecipeImage = styled.div`
  width: 100%;
  height: 100%;
  background-color: bisque;
  background-image: url(${briocheBunsImage});
  background-position: 50%;
  background-size: cover;

`
export const RecipeIngredientsContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const RecipeBottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px;
`