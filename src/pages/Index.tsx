import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import CategoryFilter from "@/components/CategoryFilter";
import RecipeCard from "@/components/RecipeCard";
import RecipeModal from "@/components/RecipeModal";
import Footer from "@/components/Footer";
import { recipes, type Recipe } from "@/data/recipes";

const Index = () => {
  const [category, setCategory] = useState("all");
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

  const featured = recipes.filter((r) => r.rating >= 4.7).slice(0, 6);
  const filtered = category === "all" ? featured : featured.filter((r) => r.category === category);

  return (
    <div className="min-h-screen">
      <HeroSection />

      {/* Featured Recipes */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl sm:text-4xl font-display font-bold text-center text-foreground mb-2">
          Top Rated Recipes
        </h2>
        <p className="text-center text-muted-foreground mb-8">
          Handpicked favorites loved by our community
        </p>

        <div className="mb-8">
          <CategoryFilter active={category} onChange={setCategory} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((recipe, i) => (
            <div key={recipe.id} className="opacity-0 animate-fade-in" style={{ animationDelay: `${i * 100}ms` }}>
              <RecipeCard recipe={recipe} onClick={() => setSelectedRecipe(recipe)} />
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground py-12">No recipes found in this category.</p>
        )}
      </section>

      <Footer />

      {selectedRecipe && (
        <RecipeModal recipe={selectedRecipe} onClose={() => setSelectedRecipe(null)} />
      )}
    </div>
  );
};

export default Index;
