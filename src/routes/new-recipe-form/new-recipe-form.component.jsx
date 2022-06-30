import { useState } from 'react';

import { addRecipe } from '../../utils/firebase.utils';

import { NewRecipeFormContainer } from './new-recipe-form.styles'
import Button from '../../components/button/button.component'

const defaultFormFields = {
  title: '',
  url: '',
  createdAt: '',
  imageUrl: '',
  leadText: '',
};

const defaultIngredients = [
  {
    id: 1,
    ingredient: 'defaultní ingredience'
  }
]
  

const NewRecipeForm = () => {

  const [formFields, setFormFields] = useState(defaultFormFields)
  const { title, url, createdAt, imageUrl, leadText } = formFields
  const [ingredients, setIngredients] = useState(defaultIngredients)
  // const [instructions, setInstructions] = useState([])
  // const [tips, setTips] = useState([])
  const dataToSend = { ...formFields, ...ingredients }


  const handleFormFieldsChange = (event) => {
    setFormFields({ ...formFields, [event.target.name]: event.target.value })
  }

  const handleIngredientsChange = ( event) => {
    setIngredients()
  }
  console.log(ingredients)

  const addIngredient = () => {
    setIngredients([...ingredients, ''])
  }

  const deleteIngredient = (index) => {
    setIngredients()
  }


  const createRecipe = async (event) => {
    event.preventDefault()
    // addRecipe('test', url, dataToSend)
    // resetFormFields()
  }

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
    setIngredients([])
    // setInstructions([])
    // setTips([])
  };

  return (
    <NewRecipeFormContainer>
      <h1>Nový recept</h1>
      <form onSubmit={createRecipe}>
        <h1>Title</h1>
        <input label='Title' placeholder='Recipe title' name='title' value={title} onChange={handleFormFieldsChange} />
        <input label='URL' placeholder='url' name='url' value={url} onChange={handleFormFieldsChange} />
        <input label='createdAt' placeholder='createdAt' name='createdAt' value={createdAt} onChange={handleFormFieldsChange} />
        <input label='imageUrl' placeholder='imageUrl' name='imageUrl' value={imageUrl} onChange={handleFormFieldsChange} />
        <input label='leadText' placeholder='leadText' name='leadText' value={leadText} onChange={handleFormFieldsChange} />
        <h1>Ingredients</h1>
        {
          ingredients.map(ingredient => (
            <div key={ingredient.id}>
              <input placeholder='Ingredient' name={ingredient.id} value={ingredient.ingredient} onChange={handleIngredientsChange}/>
              <button onClick={deleteIngredient}>odebrat</button>
            </div>
          ))
        }
        <button onClick={addIngredient}>přidat</button>
      </form>
      <Button onClick={createRecipe}>ODESLAT</Button>
    </NewRecipeFormContainer>
  )
}

export default NewRecipeForm



