import { useState, useContext } from "react"
import { RecipesContext } from "../../contexts/recipes.context"
import SearchBox from "../../components/searchbox/searchbox.component"
import Recipes from '../../components/recipes/recipes.component'
import Spinner from "../../components/spinner/spinner.component"
import { HomeContainer } from './home.styles'

const Home = () => {

  const [searchfield, setSearchfield] = useState('')

  const onSearchChange = (event) => {
    console.log(event.target.value);
    setSearchfield(event.target.value)
  }


  const { isLoading } = useContext(RecipesContext)

  return (
    <HomeContainer>
      <SearchBox searchChange={onSearchChange}/>
      {
        isLoading ? (
          <Spinner />
        ) : (
          <Recipes searchfield={searchfield}/>
        )
      }
    </HomeContainer>
  )
}
export default Home