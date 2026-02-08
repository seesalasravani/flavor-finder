import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { Search, Heart, LogOut, Menu, X, UtensilsCrossed } from "lucide-react";

type NavbarProps = {
  searchQuery: string;
  onSearchChange: (q: string) => void;
};

const Navbar = ({ searchQuery, onSearchChange }: NavbarProps) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b shadow-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
            <UtensilsCrossed className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold font-display text-primary hidden sm:block">
            TastyBites
          </span>
        </Link>

        {/* Search */}
        <div className="flex-1 max-w-md relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search recipes..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-full bg-muted border-none outline-none text-sm font-body text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/30 transition-all"
          />
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/recipes"
            className="text-sm font-medium text-foreground hover:text-primary transition-colors px-3 py-2"
          >
            Recipes
          </Link>
          {user && (
            <Link
              to="/favorites"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors px-3 py-2 flex items-center gap-1"
            >
              <Heart className="w-4 h-4" /> Favorites
            </Link>
          )}
          {user ? (
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-muted-foreground">
                Hi, {user.name.split(" ")[0]}
              </span>
              <button
                onClick={handleLogout}
                className="flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
              >
                <LogOut className="w-4 h-4" /> Logout
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Link
                to="/login"
                className="text-sm font-medium px-4 py-2 rounded-full border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="text-sm font-medium px-4 py-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all"
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-card border-t px-4 pb-4 pt-2 space-y-2 animate-fade-in">
          <Link to="/recipes" className="block py-2 text-sm font-medium text-foreground" onClick={() => setMobileOpen(false)}>
            Recipes
          </Link>
          {user && (
            <Link to="/favorites" className="block py-2 text-sm font-medium text-foreground" onClick={() => setMobileOpen(false)}>
              ❤️ Favorites
            </Link>
          )}
          {user ? (
            <button onClick={() => { handleLogout(); setMobileOpen(false); }} className="block py-2 text-sm font-medium text-primary">
              Logout ({user.name})
            </button>
          ) : (
            <>
              <Link to="/login" className="block py-2 text-sm font-medium text-primary" onClick={() => setMobileOpen(false)}>
                Login
              </Link>
              <Link to="/register" className="block py-2 text-sm font-medium text-primary" onClick={() => setMobileOpen(false)}>
                Sign Up
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
