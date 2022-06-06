import { useState } from 'react';
import { NewRecipeFormContainer } from './new-recipe-form.styles'
import FormInput from '../form-input/form-input.component'

const defaultFormFields = {
  heading: '',
  ingredients: '',
  instructions: ''
};

const NewRecipeForm = () => {

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { heading, ingredients, instructions } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };




  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  return (
    <NewRecipeFormContainer>
      <h1>Nový recept</h1>
      <form>
        <FormInput label="Heading" type="text" required onChange={handleChange} name="heading" value={heading} />
        <textarea />
      </form>
    </NewRecipeFormContainer>
  )
}

export default NewRecipeForm