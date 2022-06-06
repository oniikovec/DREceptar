import styled from 'styled-components'

export const RecipeContainer = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  h1 {
    padding-bottom: 20px;
  }
  h3 {
    padding-bottom: 10px;
  }
`

export const RecipeTopContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const RecipeImageContainer = styled.div`
  width: 60%;
  height: 400px;
  border: 1px solid black;
  border-radius: 5px;
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

  .ingredience-label {
    display: grid;
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
    border: 2px solid currentColor;
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
`