import { useContext } from "react";
import { GlobalContext } from "../../context";
import RecipeItem from "../../components/recipe-item";

export default function Home() {
  const { loading, recipeList } = useContext(GlobalContext);
  console.log(recipeList);

  if (loading) {
    return <div className="text-center mt-20 text-2xl">Loading...</div>;
  }
  return (
    <div className="flex justify-center py-8 container flex-wrap flex-center gap-10 mx-auto">
      {recipeList && recipeList.length > 0 ? (
        recipeList.map((item, index) => <RecipeItem key={index} item={item} />)
      ) : (
        <p className="text-center mt-20 text-3xl">
          Nothing to show, Search for a recipe.
        </p>
      )}
    </div>
  );
}
