import styled from 'styled-components'

export const FooterContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100px;

  display: flex;
  align-items: center;
  justify-content: center;


  a {
    transition: color 0.3s;

    &:hover {
      color: gray;
    }
  }
`