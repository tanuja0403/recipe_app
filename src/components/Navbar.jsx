import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../context";

export default function Navbar() {
  const { searchParam, setSearchParam, handleSearch } =
    useContext(GlobalContext);

  return (
    <div className="flex justify-around mt-10 container mx-auto">
      <h2 className="text-2xl font-semibold">
        <NavLink to="/">Food Recipe</NavLink>
      </h2>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          name="search"
          value={searchParam}
          onChange={(event) => setSearchParam(event.target.value)}
          placeholder="Enter item..."
          className="shadow-lg p-3 px-8 lg:w-96 bg-white/75 shadow-red-100 focus:shadow-red-200 rounded-full outline-none"
        />
      </form>
      <ul className="flex gap-5">
        <li>
          <NavLink
            to="/"
            className="text-black hover:text-gray-700 duration-300"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/favorites">Favorites</NavLink>
        </li>
      </ul>
    </div>
  );
}
