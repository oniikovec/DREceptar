import { RecipeContainer, RecipeTopContainer, RecipeImageContainer, RecipeImage, RecipeIngredientsContainer, RecipeBottomContainer } from './recipe.styles'

const Recipe = () => {
  return (
    <RecipeContainer>
      <RecipeTopContainer>
        <RecipeImageContainer>
          <RecipeImage />
        </RecipeImageContainer>
        <RecipeIngredientsContainer>
          <label>
            <input type='checkbox' />
            250 kg knedlíků
          </label>
          <label>
            <input type='checkbox' />
            0,3l vody
          </label>
        </RecipeIngredientsContainer>
      </RecipeTopContainer>

      <RecipeBottomContainer>
        <h1>Postup</h1>
        <ol>
          <li>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</li>
          <li>Quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.</li>
          <li>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</li>
          <li>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.</li>
          <li></li>
        </ol>
      </RecipeBottomContainer>
    </RecipeContainer>
  )
}
export default Recipe