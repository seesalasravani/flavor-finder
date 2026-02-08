import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/context/AuthContext";
import { FavoritesProvider } from "@/context/FavoritesContext";
import Navbar from "@/components/Navbar";
import Index from "./pages/Index";
import RecipesPage from "./pages/RecipesPage";
import FavoritesPage from "./pages/FavoritesPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import NotFound from "./pages/NotFound";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <AuthProvider>
      <FavoritesProvider>
        <BrowserRouter>
          <Navbar searchQuery={searchQuery} onSearchChange={setSearchQuery} />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/recipes" element={<RecipesPage searchQuery={searchQuery} />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </FavoritesProvider>
    </AuthProvider>
  );
};

export default App;
