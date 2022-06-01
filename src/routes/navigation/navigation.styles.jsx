import styled from 'styled-components'
import { Link } from 'react-router-dom'


export const NavigationContainer = styled.div`
  height: 70px;
  margin: 20px 0;
  display: flex;
  justify-content: space-between;
  z-index: 10;
`

export const LogoContainer = styled(Link)`
   
`

export const Logo = styled.img`

`

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: gray;
  }
`