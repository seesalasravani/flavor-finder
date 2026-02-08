import { useState } from "react";
import { useFavorites } from "@/context/FavoritesContext";
import RecipeCard from "@/components/RecipeCard";
import RecipeModal from "@/components/RecipeModal";
import Footer from "@/components/Footer";
import { recipes, type Recipe } from "@/data/recipes";
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

const FavoritesPage = () => {
  const { favorites } = useFavorites();
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

  const favRecipes = recipes.filter((r) => favorites.includes(r.id));

  return (
    <div className="min-h-screen">
      <section className="container mx-auto px-4 py-10">
        <h1 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-2 flex items-center gap-3">
          <Heart className="w-8 h-8 text-primary fill-primary" /> My Favorites
        </h1>
        <p className="text-muted-foreground mb-8">
          Your personally curated recipe collection
        </p>

        {favRecipes.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {favRecipes.map((recipe, i) => (
              <div key={recipe.id} className="opacity-0 animate-fade-in" style={{ animationDelay: `${i * 80}ms` }}>
                <RecipeCard recipe={recipe} onClick={() => setSelectedRecipe(recipe)} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-6xl mb-4">💔</p>
            <p className="text-lg text-muted-foreground mb-4">No favorites yet!</p>
            <Link
              to="/recipes"
              className="inline-block px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all"
            >
              Browse Recipes
            </Link>
          </div>
        )}
      </section>

      <Footer />

      {selectedRecipe && (
        <RecipeModal recipe={selectedRecipe} onClose={() => setSelectedRecipe(null)} />
      )}
    </div>
  );
};

export default FavoritesPage;
