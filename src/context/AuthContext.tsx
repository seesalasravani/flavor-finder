import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type User = {
  name: string;
  email: string;
};

type AuthContextType = {
  user: User | null;
  login: (email: string, password: string) => string | null;
  register: (name: string, email: string, password: string) => string | null;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("currentUser");
    if (stored) setUser(JSON.parse(stored));
  }, []);

  const register = (name: string, email: string, password: string): string | null => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    if (users.find((u: any) => u.email === email)) return "Email already registered";
    users.push({ name, email, password });
    localStorage.setItem("users", JSON.stringify(users));
    const newUser = { name, email };
    localStorage.setItem("currentUser", JSON.stringify(newUser));
    setUser(newUser);
    return null;
  };

  const login = (email: string, password: string): string | null => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const found = users.find((u: any) => u.email === email && u.password === password);
    if (!found) return "Invalid email or password";
    const loggedUser = { name: found.name, email: found.email };
    localStorage.setItem("currentUser", JSON.stringify(loggedUser));
    setUser(loggedUser);
    return null;
  };

  const logout = () => {
    localStorage.removeItem("currentUser");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
