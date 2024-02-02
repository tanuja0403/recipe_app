import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [searchParam, setSearchParam] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipeList, setRecipeList] = useState([]);
  const [recipeItem, setRecipeItem] = useState({});
  const [favoriteList, setFavoriteList] = useState([]);

  const navigate = useNavigate();

  // const api = import.meta.env.VITE_FORKIFY_API;

  async function handleSearch(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`
      );
      const data = await response.json();
      if (data?.data?.recipes) {
        setRecipeList(data.data.recipes);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSearchParam("");
      navigate("/");
      setLoading(false);
    }
  }

  function handleFavorites(getCurrentRecipe) {
    const cpyFavorites = [...favoriteList];
    const index = cpyFavorites.findIndex(
      (item) => item.id === getCurrentRecipe.id
    );
    if (index === -1) {
      cpyFavorites.push(getCurrentRecipe);
    } else {
      cpyFavorites.splice(index);
    }
    setFavoriteList(cpyFavorites);
  }

  console.log(favoriteList);

  return (
    <GlobalContext.Provider
      value={{
        searchParam,
        setSearchParam,
        handleSearch,
        loading,
        recipeList,
        recipeItem,
        setRecipeItem,
        handleFavorites,
        favoriteList,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
