import { useContext } from "react";
import { GlobalContext } from "../../context";
import RecipeItem from "../../components/recipe-item";

export default function Favorites() {
  const { favoriteList } = useContext(GlobalContext);

  return (
    <div className="flex justify-center py-8 container flex-wrap flex-center gap-10 mx-auto">
      {favoriteList && favoriteList.length > 0 ? (
        favoriteList.map((item, index) => (
          <RecipeItem key={index} item={item} />
        ))
      ) : (
        <p className="text-center mt-20 text-3xl text-semibold">No Favorites</p>
      )}
    </div>
  );
}
