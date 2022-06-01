import { useState } from 'react'

import FormInput from '../../components/form-input/form-input.component.jsx'
import Button from '../button/button.component.jsx'

import { SignInContainer, ButtonsContainer } from './sign-in-form.styles';


const defaultFormFields = {
  email: '',
  password: '',
};


const SignInFrom = () => {

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };


  return (
    <SignInContainer>
      <form>
        <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email} />
        <FormInput label="Password" type="password" required onChange={handleChange} name="password" value={password} />
      </form>
      <ButtonsContainer>
        <Button type="submit">PŘIHLÁSIT</Button>
      </ButtonsContainer>
    </SignInContainer>
  )
}
export default SignInFrom