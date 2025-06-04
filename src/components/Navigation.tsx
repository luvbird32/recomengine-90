
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard } from "lucide-react";

const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-purple-600">
              RecommendEngine
            </Link>
            <div className="ml-8 space-x-4 hidden md:flex">
              <Link 
                to="/" 
                className={`transition-colors ${
                  location.pathname === '/' 
                    ? 'text-purple-600 font-medium' 
                    : 'text-gray-600 hover:text-purple-600'
                }`}
              >
                Home
              </Link>
              <Link 
                to="/dashboard" 
                className={`flex items-center transition-colors ${
                  location.pathname === '/dashboard' 
                    ? 'text-purple-600 font-medium' 
                    : 'text-gray-600 hover:text-purple-600'
                }`}
              >
                <LayoutDashboard className="w-4 h-4 mr-1" />
                Dashboard
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button asChild className="bg-purple-600 hover:bg-purple-700">
              <a href="https://github.com/luvbird32/recomengine-90.git" target="_blank" rel="noopener noreferrer">
                Get Started
              </a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
