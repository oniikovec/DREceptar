import { useContext } from "react"
import { RecipesContext } from "../../contexts/recipes.context"
import SearchBox from "../../components/searchbox/searchbox.component"
import Recipes from '../../components/recipes/recipes.component'
import Spinner from "../../components/spinner/spinner.component"
import { HomeContainer } from './home.styles'

const Home = () => {

  const { isLoading } = useContext(RecipesContext)

  return (
    <HomeContainer>
      <SearchBox />
      {
        isLoading ? (
          <Spinner />
        ) : (
          <Recipes />
        )
      }
    </HomeContainer>
  )
}
export default Home