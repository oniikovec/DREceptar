import { createContext, useState, useEffect } from "react";
import { newGetCategoriesAndDocuments } from "../utils/firebase.utils";

// import { addCollectionAndDocuments } from '../utils/firebase.utils'
// import RECIPES_DATA from '../recipes-data.js';


export const RecipesContext = createContext({
  recipesMap: {},
  isLoading: false,
})

export const RecipesProvider = ({ children }) => {
  const [recipesMap, setRecipesMap] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  // useEffect(() => {
  //   addCollectionAndDocuments('recipes', RECIPES_DATA);
  // }, []);

  useEffect(() => {
    const getRecipesMap = async () => {
      setIsLoading(true)
      const recipeMap = await newGetCategoriesAndDocuments()
      setRecipesMap(recipeMap)
      setIsLoading(false)
    }
    getRecipesMap()
  }, [])

  const value = { recipesMap, isLoading }

  return (
    <RecipesContext.Provider value={value}>
      {children}
    </RecipesContext.Provider>
  )
}