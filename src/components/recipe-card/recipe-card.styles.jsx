import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const RecipeCardImage = styled.div`
  width: 100%;
  height: 100%;
  flex: 3;
  background-size: cover;
  background-position: center;
  background-image: ${({imageUrl}) => `url(${imageUrl})`};
  background-color: black;
  overflow: hidden;
  border-radius: 5px 5px 0 0;
`

export const RecipeCardDescription = styled.div`
  margin: 5px 10px;
  display: flex;
  flex: 2;
  flex-direction: column;
  justify-content: space-between;
  h1 {
    font-size: 1rem;
  }
  small {
    padding-bottom: 10px;
    color: gray;
    align-items: flex-end;
  }

  @media screen and (max-width: 1366px) {
    h1 {
      font-size: 0.9rem;
    }
    small {
      font-size: 9px;
    }
  }
  @media screen and (max-width: 1366px) {
    h1 {
      font-size: 0.8rem;
    }
  }
  @media screen and (max-width: 768px) {
    h1 {
      font-size: 1rem;
    }
  }
  @media screen and (max-width: 414px) {
    margin: 5px;

    h1 {
      font-size: 0.9rem;
    }
  }
  @media screen and (max-width: 360px) {
    h1 {
      font-size: 0.8rem;
    }
  }
`

export const RecipeCardContainer = styled(Link)`
  min-width: 30%;
  height: 200px;
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