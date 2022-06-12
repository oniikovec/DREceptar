import { useState } from 'react';

import { addRecipe } from '../../utils/firebase.utils';

import { NewRecipeFormContainer } from './new-recipe-form.styles'
import FormInput from '../form-input/form-input.component'
import Button from '../button/button.component'

const defaultFormFields = {
  title: '',
  url: '',
  imageUrl: '',
  leadText: '',
  ingredients: '',
  instructions: '',
  tips: '',
};

const NewRecipeForm = () => {

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { title, url, imageUrl, leadText, ingredients, instructions, tips } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const createRecipe = async () => {
    addRecipe('test', url, formFields)
    resetFormFields()
  }



  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  return (
    <NewRecipeFormContainer>
      <h1>Nový recept</h1>
      <form>
        <FormInput label="Title" type="text" required onChange={handleChange} name="title" value={title} />
        <FormInput label="URL" type="text" required onChange={handleChange} name="url" value={url} />
        <FormInput label="Image URL from Firebase Storage" type="text" required onChange={handleChange} name="imageUrl" value={imageUrl} />
        <FormInput label="Lead Text" type="text" required onChange={handleChange} name="leadText" value={leadText} />
        <FormInput label="Ingredients" type="text" required onChange={handleChange} name="ingredients" value={ingredients} />
        <FormInput label="Instructions" type="text" required onChange={handleChange} name="instructions" value={instructions} />
        <FormInput label="Tips" type="text" required onChange={handleChange} name="tips" value={tips} />
      </form>
      <Button onClick={createRecipe}>ODESLAT</Button>
    </NewRecipeFormContainer>
  )
}

export default NewRecipeForm