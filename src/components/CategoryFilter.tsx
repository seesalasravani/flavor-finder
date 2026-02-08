type CategoryFilterProps = {
  active: string;
  onChange: (cat: string) => void;
};

const categories = [
  { key: "all", label: "🍽️ All" },
  { key: "veg", label: "🥬 Veg" },
  { key: "non-veg", label: "🍗 Non-Veg" },
  { key: "dessert", label: "🍰 Desserts" },
];

const CategoryFilter = ({ active, onChange }: CategoryFilterProps) => (
  <div className="flex flex-wrap gap-2 justify-center">
    {categories.map((cat) => (
      <button
        key={cat.key}
        onClick={() => onChange(cat.key)}
        className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
          active === cat.key
            ? "bg-primary text-primary-foreground shadow-md"
            : "bg-muted text-foreground hover:bg-primary/10 hover:text-primary"
        }`}
      >
        {cat.label}
      </button>
    ))}
  </div>
);

export default CategoryFilter;
