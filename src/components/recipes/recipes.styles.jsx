import styled from 'styled-components'

export const RecipesContainer = styled.div`
  padding: 70px 0;
  display: grid;
  
  grid-template-columns: repeat(4, minmax(200px, 450px));
  grid-gap: 20px;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1600px) {
    grid-template-columns: repeat(3, minmax(100px, 400px));
  }
  @media screen and (max-width: 1024px) {
    grid-gap: 15px;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(100px, 350px));
  }
  @media screen and (max-width: 414px) {
    grid-gap: 10px;
  }
`