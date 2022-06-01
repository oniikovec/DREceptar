import styled from 'styled-components'
import { SpinnerContainer } from '../spinner/spinner.styles'

export const BaseButton = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px;
  font-size: 15px;
  background-color: skyblue;
  color: black;
  text-transform: uppercase;
  font-weight: bolder;
  border: 1px solid gray;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: #9adbf5;
  }
`

export const InvertedButton = styled(BaseButton)`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`

export const ButtonSpinner = styled(SpinnerContainer)`
  width: 30px;
  height: 30px;
`

