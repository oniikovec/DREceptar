import { useContext, useState } from 'react'

import { UserContext } from '../../contexts/user.context'

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

  const { setCurrentUser } = useContext(UserContext)

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
      const { user } = await signInAuthUserWithEmailAndPassword(email, password)
      console.log(user);

      resetFormFields()
      setCurrentUser(user)
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert('nesprávné heslo lol');
          break;
        case 'auth/user-not-found':
          alert('tak tohle vůůůbec');
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