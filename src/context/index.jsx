import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [searchParam, setSearchParam] = useState("");

  const api = import.meta.env.VITE_FORKIFY_API;

  async function handleSearch(e) {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}&key=${api}`
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <GlobalContext.Provider
      value={{ searchParam, setSearchParam, handleSearch }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
