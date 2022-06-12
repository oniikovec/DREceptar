import { createContext, useState, useEffect } from "react";
import { getCategoriesAndDocuments, newGetCategoriesAndDocuments } from "../utils/firebase.utils";

// import { addCollectionAndDocuments } from '../utils/firebase.utils'
// import TEST_DATA from '../test-data.js';


export const RecipesContext = createContext({
  recipesMap: {},
  isLoading: false,
})

export const RecipesProvider = ({ children }) => {
  const [recipesMap, setRecipesMap] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  // useEffect(() => {
  //   addCollectionAndDocuments('test', TEST_DATA);
  // }, []);

  useEffect(() => {
    const getRecipesMap = async () => {
      setIsLoading(true)
      const recipeMap = await getCategoriesAndDocuments()
      setRecipesMap(recipeMap)
      console.log(recipeMap);
      setIsLoading(false)
    }
    getRecipesMap()
  }, [])

  useEffect(() => {
    const testGetMap = async () => {
      const testMap = await newGetCategoriesAndDocuments()
      console.log(testMap);
    }
    testGetMap()
  }, [])


  const value = { recipesMap, isLoading }

  return (
    <RecipesContext.Provider value={value}>
      {children}
    </RecipesContext.Provider>
  )
}