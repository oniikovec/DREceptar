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

const NewRecipeForm = () => {

  const [formFields, setFormFields] = useState(defaultFormFields)
  const { title, url, createdAt, imageUrl, leadText } = formFields
  const [ingredients, setIngredients] = useState([])
  // const [instructions, setInstructions] = useState([])
  // const [tips, setTips] = useState([])
  const dataToSend = { ...formFields, ingredients: [...ingredients] }


  const handleChange = (event) => {
    const { name, value } = event.target
    setFormFields({ ...formFields, [name]: value })
  }

  const handleIngredientsChange = () => setIngredients()
  const addIngredient = () => setIngredients([...ingredients, ''])
  const deleteIngredient = () => setIngredients()


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
        <input label='Title' placeholder='Recipe title' name='title' value={title} onChange={handleChange} />
        <input label='URL' placeholder='url' name='url' value={url} onChange={handleChange} />
        <input label='createdAt' placeholder='createdAt' name='createdAt' value={createdAt} onChange={handleChange} />
        <input label='imageUrl' placeholder='imageUrl' name='imageUrl' value={imageUrl} onChange={handleChange} />
        <input label='leadText' placeholder='leadText' name='leadText' value={leadText} onChange={handleChange} />
        <h1>Ingredients</h1>
        {
          ingredients.map((ingredient) => {
            return (
              <div key={ingredient}>
                <input label='Ingredient' placeholder='Add ingredient' name='ingredient' value={ingredient} onChange={handleIngredientsChange} />
                <button onClick={deleteIngredient}>odebrat</button>
              </div>
            )
          })
        }
        <button onClick={addIngredient}>přidat</button>
      </form>
      <Button onClick={createRecipe}>ODESLAT</Button>
    </NewRecipeFormContainer>
  )
}

export default NewRecipeForm