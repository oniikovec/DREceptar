import { createContext, useState, useEffect } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase.utils";

// import { addCollectionAndDocuments } from '../utils/firebase.utils'
// import RECIPES_DATA from '../recipes-data.js';


export const RecipesContext = createContext({
  recipesMap: {}
})

export const RecipesProvider = ({ children }) => {
  const [recipesMap, setRecipesMap] = useState({})

  // useEffect(() => {
  //   addCollectionAndDocuments('recipes', RECIPES_DATA);
  // }, []);

  useEffect(() => {
    const getRecipesMap = async () => {
      const recipeMap = await getCategoriesAndDocuments()
      
      setRecipesMap(recipeMap)
    }
    getRecipesMap()
  }, [])


  const value = { recipesMap }

  return (
    <RecipesContext.Provider value={value}>
      {children}
    </RecipesContext.Provider>
  )
}