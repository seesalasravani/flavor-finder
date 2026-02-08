import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import CategoryFilter from "@/components/CategoryFilter";
import RecipeCard from "@/components/RecipeCard";
import RecipeModal from "@/components/RecipeModal";
import Footer from "@/components/Footer";
import { recipes, type Recipe } from "@/data/recipes";

type RecipesPageProps = {
  searchQuery: string;
};

const RecipesPage = ({ searchQuery }: RecipesPageProps) => {
  const [category, setCategory] = useState("all");
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

  const filtered = recipes.filter((r) => {
    const matchesCategory = category === "all" || r.category === category;
    const matchesSearch =
      !searchQuery ||
      r.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen">
      <section className="container mx-auto px-4 py-10">
        <h1 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-2">
          All Recipes
        </h1>
        <p className="text-muted-foreground mb-8">
          Browse our complete collection of delicious recipes
        </p>

        <div className="mb-8">
          <CategoryFilter active={category} onChange={setCategory} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((recipe, i) => (
            <div key={recipe.id} className="opacity-0 animate-fade-in" style={{ animationDelay: `${i * 80}ms` }}>
              <RecipeCard recipe={recipe} onClick={() => setSelectedRecipe(recipe)} />
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <p className="text-5xl mb-4">🔍</p>
            <p className="text-lg text-muted-foreground">No recipes match your search.</p>
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

export default RecipesPage;
