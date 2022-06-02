import { HomeContainer } from './home.styles'
import SearchBox from "../../components/searchbox/searchbox.component"
import Recipes from '../../components/recipes/recipes.component'

const Home = () => {
  return (
    <HomeContainer>
      <SearchBox />
      <Recipes />
    </HomeContainer>
  )
}
export default Home