import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [searchParam, setSearchParam] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipeList, setRecipeList] = useState([]);

  const api = import.meta.env.VITE_FORKIFY_API;

  async function handleSearch(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}&key=${api}`
      );
      const data = await response.json();
      if (data?.data?.recipes) {
        setRecipeList(data.data.recipes);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSearchParam("");
      setLoading(false);
    }
  }

  return (
    <GlobalContext.Provider
      value={{ searchParam, setSearchParam, handleSearch, loading, recipeList }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
