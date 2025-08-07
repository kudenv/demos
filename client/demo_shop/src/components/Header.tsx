import { Link } from "react-router";
import { Search, ShoppingCart, User } from "lucide-react";

export function Header() {
  return (
    <header className="flex items-center justify-between p-4">      
      <div className="text-2xl font-bold tracking-wide font-serif">SnookyDog</div>
      <div className="flex items-center gap-6">
        <Link to="/" className="font-medium hover:underline">Home</Link>
        <Link to="/catalog" className="font-medium hover:underline">Catalog</Link>                
        <div className="flex gap-4 ml-4">
          <User className="w-5 h-5 cursor-pointer" />
          <ShoppingCart className="w-5 h-5 cursor-pointer" />
          <Search className="w-5 h-5 cursor-pointer" />
        </div>
      </div>
    </header>
  );
}