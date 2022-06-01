import { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import { NavigationContainer, LogoContainer, Logo, NavLinks, NavLink } from './navigation.styles'
import logoImg from '../../assets/logo.png'

import { signOutUser } from '../../utils/firebase.utils'
import { UserContext } from '../../contexts/user.context'

const Navigation = () => {

  const { currentUser } = useContext(UserContext)

  return (
    <>
      <NavigationContainer>
        <LogoContainer to='/'>
          <Logo src={logoImg} alt='logo' />
        </LogoContainer>
        <NavLinks>
          {
            currentUser ? (
              <>
                <NavLink to='/new'>+</NavLink>
                <NavLink to='/' onClick={signOutUser}>Odhlásit</NavLink>
              </>
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