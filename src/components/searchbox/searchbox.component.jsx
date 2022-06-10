import { SearchBoxContainer, SearchInput } from './searbox.styles'

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <SearchBoxContainer>
      <SearchInput 
        onChange={searchChange}
        type='search' 
        placeholder='Hledat recept...'   
      />
    </SearchBoxContainer>
  )
}
export default SearchBox