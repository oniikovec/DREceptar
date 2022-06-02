import styled from 'styled-components'
import briocheBunsImage from '../../assets/recipe-images/brioche-buns.jpg'

export const RecipeCardContainer = styled.div`
  width: 360px;
  height: 540px;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  border-radius: 5px;
  transition: transform 0.3s;
  cursor: pointer;

  &:hover {
    transform: scale(1.03);
  }
`

export const RecipeCardImageContainer = styled.div`
  width: 358px;
  height: 268px;
`
export const RecipeCardImage = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
  background-image: url(${briocheBunsImage});
  position: relative;
  overflow: hidden;
  background-size: cover;
  background-position: 50%;
  border-radius: 5px 5px 0 0;
  transition: transform 0.3s;

  // DARKEN and TEXT on hover
  /* span {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: rgba(255, 255, 255, 0);
      font-size: 1.5rem;
    }
  &:hover {
    transition: filter 0.3s, color 0.3s;
    filter: brightness(50%);
    span {
      color: rgba(255, 255, 255, 1);
    }    
  } */
`

export const RecipeCardDescription = styled.div`
  margin: 5px 20px;
  display: flex;
  flex-direction: column;
  h1 {
    font-size: 1.5rem;
  }
  small {
    padding-bottom: 10px;
    color: gray;
  }
`
