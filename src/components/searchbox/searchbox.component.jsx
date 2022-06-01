import { SearchBoxContainer, SearchInput } from './searbox.styles'

const SearchBox = () => {
  return (
    <SearchBoxContainer>
      <SearchInput type='search' placeholder='Hledat recept...' />
    </SearchBoxContainer>
  )
}
export default SearchBox