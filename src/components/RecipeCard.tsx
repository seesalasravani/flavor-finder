import { Heart, Clock, Star, Users } from "lucide-react";
import { useFavorites } from "@/context/FavoritesContext";
import type { Recipe } from "@/data/recipes";

type RecipeCardProps = {
  recipe: Recipe;
  onClick: () => void;
};

const categoryBadge = {
  veg: { label: "Veg", className: "bg-success text-success-foreground" },
  "non-veg": { label: "Non-Veg", className: "bg-primary text-primary-foreground" },
  dessert: { label: "Dessert", className: "bg-accent text-accent-foreground" },
};

const RecipeCard = ({ recipe, onClick }: RecipeCardProps) => {
  const { toggleFavorite, isFavorite } = useFavorites();
  const fav = isFavorite(recipe.id);
  const badge = categoryBadge[recipe.category];

  return (
    <div
      className="group bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1 border"
      onClick={onClick}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
        {/* Category badge */}
        <span className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold ${badge.className}`}>
          {badge.label}
        </span>
        {/* Favorite */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleFavorite(recipe.id);
          }}
          className={`absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center backdrop-blur-sm transition-all ${
            fav
              ? "bg-primary text-primary-foreground"
              : "bg-card/70 text-foreground hover:bg-primary hover:text-primary-foreground"
          } ${fav ? "animate-heart-beat" : ""}`}
        >
          <Heart className={`w-4 h-4 ${fav ? "fill-current" : ""}`} />
        </button>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-display font-bold text-lg text-card-foreground mb-1 group-hover:text-primary transition-colors">
          {recipe.name}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
          {recipe.description}
        </p>
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Star className="w-3.5 h-3.5 text-rating fill-rating" />
            <span className="font-semibold text-foreground">{recipe.rating}</span>
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" /> {recipe.time}
          </span>
          <span className="flex items-center gap-1">
            <Users className="w-3.5 h-3.5" /> {recipe.servings} servings
          </span>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
