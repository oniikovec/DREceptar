import { useContext, useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import { RecipesContext } from '../../contexts/recipes.context'
import { UserContext } from '../../contexts/user.context'

import { deleteRecipe } from '../../utils/firebase.utils'

import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'

import Spinner from '../../components/spinner/spinner.component'
import Button from '../../components/button/button.component'

import { RecipeContainer, RecipeTopContainer, RecipeImageContainer, RecipeImage, RecipeIngredientsContainer, RecipeBottomContainer, RecipeLeadText, ButtonsContainer, AlertContainer, Alert, AlertButtonsContainer } from './recipe.styles'

const Recipe = () => {

  const params = useParams()
  const { recipesMap, isLoading } = useContext(RecipesContext)
  const [recipeDetails, setRecipeDetails] = useState({})
  const { title, createdAt, imageUrl, leadText, ingredients, instructions, tips } = recipeDetails
  
  const { currentUser } = useContext(UserContext)

  const navigate = useNavigate()


  useEffect(() => {
    recipesMap.map(recipe => (
      recipe.url.includes(params.recipe) && setRecipeDetails(recipe)
      ))
    }, [params, recipesMap])

  // scrolls to the top of the page
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])



  const handleDelete = async () => {
    const recipeFilter = recipesMap.filter(recipe => (
      recipe.url.includes(params.recipe)
    ))
    const recipeToDelete = recipeFilter.map(recipe => recipe.title).toString()
    console.log(recipeToDelete);
    deleteRecipe('recipes', recipeToDelete)
    navigateHome()
  }

  const navigateHome = async () => {
    await setTimeout(navigate('/', { replace: true }), 5000)
  }

  const confirmDelete = () => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <AlertContainer>
            <Alert>
              <h1>SMAZAT?</h1>
              <p>Opravdu chceš smazat recept na {title}?</p>
              <AlertButtonsContainer>
                <Button buttonType='inverted' onClick={() => {handleDelete(); onClose()}}>Ano</Button>
                <Button buttonType='inverted' onClick={onClose}>TVL NECHCI</Button>
              </AlertButtonsContainer>
            </Alert>
          </AlertContainer>
        )
      }
    })
  };
  
  return (
    <>
      {
        isLoading ? (
          <Spinner />
        ) : (
        recipeDetails &&
          <RecipeContainer>
            <h1>{title}</h1>
            <small>{createdAt}</small>

            <RecipeTopContainer>
              <RecipeImageContainer>
                <RecipeImage imageUrl={imageUrl} />
              </RecipeImageContainer>
              <RecipeIngredientsContainer>
                <h3>Ingredience</h3>
                {
                  ingredients?.map(ingredient => (
                    <label className='ingredience-label' key={ingredient}>
                      <input type='checkbox'/>
                      {ingredient}
                    </label>
                  ))
                }
              </RecipeIngredientsContainer>
            </RecipeTopContainer>

            <RecipeBottomContainer>
              <RecipeLeadText>{leadText}</RecipeLeadText>
              <h3>Postup</h3>
              <ol>
                {
                  instructions?.map(instruction => (
                    <li key={instruction}>{instruction}</li>
                  ))
                }
              </ol>
              {
                tips && (
                  <>
                    <h3>Tipy</h3>
                    <ul>
                      {
                        tips?.map(tip => (
                          <li key={tip}>{tip}</li>
                        ))
                      }
                    </ul>
                  </>
                )
              }
            </RecipeBottomContainer>
            {
              currentUser && 
              <ButtonsContainer>
                <Button buttonType='inverted'>upravit</Button>
                <Button buttonType='inverted' onClick={confirmDelete}>smazat</Button>
              </ButtonsContainer>
            }
          </RecipeContainer>
        )
      }
    </>
  )
}
export default Recipe