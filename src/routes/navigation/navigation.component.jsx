import { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import { NavigationContainer, LogoContainer, Logo, NavLinks, NavLink } from './navigation.styles'
import logoImg from '../../assets/logo.png'

import { signOutUser } from '../../utils/firebase.utils'
import { UserContext } from '../../contexts/user.context'

const Navigation = () => {

  const { currentUser, setCurrentUser } = useContext(UserContext)

  const signOutHandler = async () => {
    await signOutUser()
    setCurrentUser(null)
  }

  return (
    <>
      <NavigationContainer>
        <LogoContainer to='/'>
          <Logo src={logoImg} alt='logo' />
        </LogoContainer>
        <NavLinks>
          {
            currentUser ? (
              <NavLink as='span' onClick={signOutHandler}>Odhlásit</NavLink>
            ) : (
              <NavLink to="/auth">Přihlásit</NavLink>
            )
          }
          
        </NavLinks>
      </NavigationContainer>
      
      <Outlet />
    </>
  )
}
export default Navigation