import { FooterContainer } from './footer.styles'


const Footer = () => {

  const getYear = new Date().getFullYear()

  return (
    <>
      <FooterContainer>
        <p>© {getYear} <a href="https://oniikovec.tech">oniikovec</a></p>
      </FooterContainer>
    </>
  )
}

export default Footer