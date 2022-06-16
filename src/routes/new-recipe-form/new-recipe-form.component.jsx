import { useState } from 'react';

import { addRecipe } from '../../utils/firebase.utils';

import { NewRecipeFormContainer } from './new-recipe-form.styles'
import FormInput from '../../components/form-input/form-input.component'
import Button from '../../components/button/button.component'

const defaultFormFields = {
  title: '',
  url: '',
  createdAt: '',
  imageUrl: '',
  leadText: '',
  ingredients: [{ingredient: ''}],
  instructions: "",
  tips: "",
};

const NewRecipeForm = () => {

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { title, url, createdAt, imageUrl, leadText, ingredients, instructions, tips } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value })
  }

  const handleIngredientsChange = (index, event) => {

  }

  const ingredientsChange = (index, event) => {

  }

  const addIngredient = (event, i) => {
    const newIngredient = [...ingredients]
    newIngredient[i].push({ ingredient: event.target.value})
    setFormFields({
      ...ingredients, newIngredient
    })
  }
  const removeIngredient = (index) => {
    ingredients.splice(index, 1)
    setFormFields({
      ingredients: ingredients
    })
  }

  const createRecipe = async (event) => {
    event.preventDefault()
    addRecipe('recipes', url, formFields)
    resetFormFields()
  }

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  return (
    <NewRecipeFormContainer>
      <h1>Nový recept</h1>
      <form onSubmit={createRecipe}>
        <h1>Title</h1>
        <input label='Title' placeholder='Recipe title' name='title' value={title} onChange={handleChange} />
        <h1>Ingredients</h1>
        {
          ingredients.map((ingredient, index) => {
            return (
              <div key={index}>
                <input label='Ingredience' placeholder='Ingredience' name='ingredient' value={ingredient.ingredient} onChange={handleIngredientsChange} />
                <button onClick={removeIngredient} >odebrat</button>
              </div>
            )
          })
        }

        <button onClick={addIngredient} >přidat</button>
      </form>
      <Button onClick={createRecipe}>ODESLAT</Button>
    </NewRecipeFormContainer>
  )
}

export default NewRecipeForm