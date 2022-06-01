import { Outlet } from 'react-router-dom'
import { NavigationContainer, LogoContainer, Logo, NavLinks, NavLink } from './navigation.styles'
import logoImg from '../../assets/logo.png'

const Navigation = () => {

  return (
    <>
      <NavigationContainer>
        <LogoContainer to='/'>
          <Logo src={logoImg} alt='logo' />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/auth">Přihlásit</NavLink>
        </NavLinks>
      </NavigationContainer>
      
      <Outlet />
    </>
  )
}
export default Navigation