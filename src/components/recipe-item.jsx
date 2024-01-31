import { Link } from "react-router-dom";

export default function RecipeItem({ item }) {
  return (
    <div className="bg-white/75 flex flex-col rounded shadow-xl gap-5 overflow-hidden w-80 p-5">
      <div className="h-40 flex justify-center items-center rounded-xl overflow-hidden">
        <img src={item?.image_url} alt={item?.title} className="block w-full" />
      </div>
      <div>
        <span className="text-cyan-700 font-medium text-sm">
          {item?.publisher}
        </span>
        <h3 className="text-black font-bold text-2xl truncate">
          {item?.title}
        </h3>
        <Link
          to={`/recipe-item/${item?.id}`}
          className="bg-black text-white inline-block mt-5 p-3 px-8 tracking-wider rounded-lg text-sm font-medium "
        >
          Recipe Detail
        </Link>
      </div>
    </div>
  );
}
