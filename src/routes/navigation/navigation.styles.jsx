import styled from 'styled-components'
import { Link } from 'react-router-dom'


export const NavigationContainer = styled.div`
  height: 70px;
  margin: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10;

  @media screen and (max-width: 414px) {
    margin: 0;
  }
`

export const LogoContainer = styled(Link)`
   
`

export const Logo = styled.img`

  @media screen and (max-width: 414px) {
    width: 150px;
  }
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
    color: skyblue;
  }

  @media screen and (max-width: 414px) {
    font-size: 15px;
    padding: 10px 5px;
  }
`