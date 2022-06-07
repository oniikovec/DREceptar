import { useState } from 'react'

import FormInput from '../../components/form-input/form-input.component.jsx'
import Button from '../button/button.component.jsx'

import { SignInContainer, ButtonsContainer } from './sign-in-form.styles';
import { signInAuthUserWithEmailAndPassword } from '../../utils/firebase.utils.js';


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

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      await signInAuthUserWithEmailAndPassword(email, password)
      resetFormFields()
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert('LOL NO');
          break;
        case 'auth/user-not-found':
          alert('LOL NO');
          break;
        default:
          console.log(error);
      }
    }
  }


  return (
    <SignInContainer>
      <form onSubmit={handleSubmit}>
        <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email} />
        <FormInput label="Password" type="password" required onChange={handleChange} name="password" value={password} />
        <ButtonsContainer>
          <Button type="submit">PŘIHLÁSIT</Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  )
}
export default SignInFrom