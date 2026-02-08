import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-food.jpg";

const HeroSection = () => {
  return (
    <section className="relative w-full h-[70vh] min-h-[500px] overflow-hidden">
      {/* Background image */}
      <img
        src={heroImage}
        alt="Delicious food spread"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-foreground/20" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold text-primary-foreground mb-4 animate-fade-in">
          Discover Delicious Recipes
        </h1>
        <p className="text-lg sm:text-xl text-primary-foreground/80 max-w-2xl mb-8 font-body opacity-0 animate-fade-in [animation-delay:200ms]">
          From butter chicken to chocolate lava cake — explore hundreds of
          mouth-watering recipes crafted with love.
        </p>
        <div className="flex gap-4 opacity-0 animate-fade-in [animation-delay:400ms]">
          <Link
            to="/recipes"
            className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-semibold text-base hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Explore Recipes
          </Link>
          <Link
            to="/register"
            className="px-8 py-3 rounded-full bg-primary-foreground/20 backdrop-blur text-primary-foreground font-semibold text-base border border-primary-foreground/30 hover:bg-primary-foreground/30 transition-all"
          >
            Join Free
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
