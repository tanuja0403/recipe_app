import { useContext, useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { GlobalContext } from "../../context";

export default function Details() {
  const { id } = useParams();
  const { recipeItem, setRecipeItem } = useContext(GlobalContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async function getRecipeDetails() {
      setLoading(true);
      try {
        const response = await fetch(
          `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
        );
        const data = await response.json();
        if (data?.data?.recipe) setRecipeItem(data?.data?.recipe);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    })();
  }, [id]);

  if (loading)
    return <h3 className="text-3xl font-bold mt-40 text-center">Loading...</h3>;

  return (
    <div className="my-5 flex gap-10  container mx-auto p-5">
      <div className="w-1/2 flex h-96 rounded-xl group overflow-hidden">
        <img
          src={recipeItem?.image_url}
          alt={recipeItem?.title}
          className="w-full h-full object-cover block hover:scale-105 duration-300"
        />
      </div>
      <div>
        <span className="text-cyan-700 font-medium text-sm">
          {recipeItem?.publisher}
        </span>
        <h3 className="text-black font-bold text-2xl truncate">
          {recipeItem?.title}
        </h3>
        <button className="bg-black text-white inline-block mt-5 p-3 px-8 tracking-wider rounded-lg text-sm font-medium ">
          Add to Favorite
        </button>
        <h3 className="text-black text-2xl font-semibold mt-3">Ingredients:</h3>
        <ul>
          {recipeItem?.ingredients?.map((item, index) => (
            <li key={index} className="font-medium text-xl">
              {item?.description} {item?.quantity} {item?.unit}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
