import { X, Star, Clock, Users, Heart } from "lucide-react";
import { useFavorites } from "@/context/FavoritesContext";
import type { Recipe } from "@/data/recipes";

type RecipeModalProps = {
  recipe: Recipe;
  onClose: () => void;
};

const RecipeModal = ({ recipe, onClose }: RecipeModalProps) => {
  const { toggleFavorite, isFavorite } = useFavorites();
  const fav = isFavorite(recipe.id);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      {/* Backdrop */}
      <div className="absolute inset-0 bg-foreground/60 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative bg-card rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-card/80 backdrop-blur flex items-center justify-center text-foreground hover:bg-muted transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Image */}
        <div className="relative h-64 sm:h-72">
          <img src={recipe.image} alt={recipe.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent" />
        </div>

        {/* Content */}
        <div className="p-6 -mt-12 relative">
          <div className="flex items-start justify-between gap-4 mb-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-card-foreground">
                {recipe.name}
              </h2>
              <p className="text-muted-foreground mt-1">{recipe.description}</p>
            </div>
            <button
              onClick={() => toggleFavorite(recipe.id)}
              className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                fav ? "bg-primary text-primary-foreground" : "bg-muted text-foreground hover:bg-primary hover:text-primary-foreground"
              }`}
            >
              <Heart className={`w-5 h-5 ${fav ? "fill-current" : ""}`} />
            </button>
          </div>

          {/* Meta */}
          <div className="flex items-center gap-6 mb-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <Star className="w-4 h-4 text-rating fill-rating" />
              <span className="font-semibold text-foreground">{recipe.rating}</span>
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" /> {recipe.time}
            </span>
            <span className="flex items-center gap-1">
              <Users className="w-4 h-4" /> {recipe.servings} servings
            </span>
          </div>

          {/* Ingredients */}
          <div className="mb-6">
            <h3 className="text-lg font-display font-bold text-card-foreground mb-3">
              🧂 Ingredients
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {recipe.ingredients.map((ing, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                  <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                  {ing}
                </li>
              ))}
            </ul>
          </div>

          {/* Steps */}
          <div>
            <h3 className="text-lg font-display font-bold text-card-foreground mb-3">
              👨‍🍳 Cooking Steps
            </h3>
            <ol className="space-y-3">
              {recipe.steps.map((step, i) => (
                <li key={i} className="flex gap-3 text-sm text-foreground">
                  <span className="shrink-0 w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">
                    {i + 1}
                  </span>
                  <p className="pt-1">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeModal;
