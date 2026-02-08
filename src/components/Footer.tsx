import { UtensilsCrossed } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-background py-12 mt-16">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <UtensilsCrossed className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="text-lg font-display font-bold text-background">TastyBites</span>
          </div>
          <p className="text-sm text-background/60">
            Discover, cook, and share amazing recipes from around the world.
          </p>
        </div>
        {/* Links */}
        <div>
          <h4 className="font-semibold mb-3 text-background/90">Explore</h4>
          <ul className="space-y-2 text-sm text-background/60">
            <li className="hover:text-primary cursor-pointer transition-colors">All Recipes</li>
            <li className="hover:text-primary cursor-pointer transition-colors">Vegetarian</li>
            <li className="hover:text-primary cursor-pointer transition-colors">Non-Vegetarian</li>
            <li className="hover:text-primary cursor-pointer transition-colors">Desserts</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-background/90">Company</h4>
          <ul className="space-y-2 text-sm text-background/60">
            <li className="hover:text-primary cursor-pointer transition-colors">About Us</li>
            <li className="hover:text-primary cursor-pointer transition-colors">Contact</li>
            <li className="hover:text-primary cursor-pointer transition-colors">Careers</li>
            <li className="hover:text-primary cursor-pointer transition-colors">Blog</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-background/90">Follow Us</h4>
          <div className="flex gap-3">
            {["Instagram", "Twitter", "YouTube", "Facebook"].map((s) => (
              <span
                key={s}
                className="w-9 h-9 rounded-full bg-background/10 flex items-center justify-center text-xs font-bold text-background/70 hover:bg-primary hover:text-primary-foreground transition-all cursor-pointer"
              >
                {s[0]}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-background/10 pt-6 text-center text-sm text-background/40">
        © 2026 TastyBites. Made with ❤️ for food lovers everywhere.
      </div>
    </div>
  </footer>
);

export default Footer;
