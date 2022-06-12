import styled from 'styled-components'

export const RecipeContainer = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  font-size: 15px;
  padding: 30px;
  background-color: #fff;
  box-shadow: 3px 3px 15px gray;
  
  h1 {
    font-size: 2.3rem;
  }
  h3 {
    text-transform: uppercase;
    margin-bottom: 15px;
    line-height: 1rem;
    font-size: 1.3rem;
  }
  small {
    margin-bottom: 25px;
    color: gray;
  }

  @media screen and (max-width: 1024px) {
    margin-top: 20px;
    h1 {
    font-size: 2rem;
    }
    h3 {
      font-size: 1.2rem;
    }
  }
  @media screen and (max-width: 768px) {
    padding: 15px;

    h1 {
    font-size: 1.5rem;
    }
  }
  @media screen and (max-width: 414px) {
    margin-top: 10px;
    
    h1 {
    font-size: 1.4rem;
    }
    h3 {
    font-size: 1.2rem;
    }
  }
  `

export const RecipeTopContainer = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`

export const RecipeImageContainer = styled.div`
  width: 60%;
  height: 400px;
  border-radius: 5px;
  box-shadow: 2px 2px 5px gray;
  margin-bottom: 50px;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }
  @media screen and (max-width: 600px) {
    height: 300px;
  }
  @media screen and (max-width: 600px) {
    height: 250px;
  }

`
export const RecipeImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${({imageUrl}) => `url(${imageUrl})`};
`
export const RecipeIngredientsContainer = styled.div`
  width: 40%;
  padding-left: 50px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1366px) {
    padding-left: 20px;
  }
  @media screen and (max-width: 1024px) {
    width: 100%;
    padding-left: 0;
  }

  .ingredience-label {
    display: grid;
    align-items: center;
    grid-template-columns: 1em auto;
    gap: 15px;
  }
  .ingredience-label + .ingredience-label {
    margin-top: 5px;
  }

  input[type="checkbox"] {
    // hiding default checkbox
    -webkit-appearance: none;
    appearance: none;
    background-color: #fff;
    margin: 0;
    // custom style
    cursor: pointer;
    font: inherit;
    width: 20px;
    height: 20px;
    border: 2px solid skyblue;
    border-radius: 3px;
    transform: translateY(-0.075em);
    // checked vs unchecked state
    display: grid;
    place-content: center;
  }
  input[type="checkbox"]::before {
    content: "";
    width: 12px;
    height: 12px;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em skyblue;
    transform-origin: bottom left;
    clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
  }
  input[type="checkbox"]:checked::before {
    transform: scale(1);
  }
`

export const RecipeBottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;

  @media screen and (max-width: 1024px) {
    margin: 50px 0;
  }

  ol {
    margin-bottom: 50px;
  }
  li {
    margin-bottom: 10px;
    margin-left: 16px;
  }
`

export const RecipeLeadText = styled.p`
  font-size: 17px;
  font-weight: 500;
  margin-bottom: 50px ;
`

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`