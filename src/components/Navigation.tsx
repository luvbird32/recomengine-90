
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { LayoutDashboard } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-purple-600">
              RecommendEngine
            </Link>
            <div className="ml-8 space-x-4 hidden md:flex">
              <Link to="/" className="text-gray-600 hover:text-purple-600 transition-colors">
                Home
              </Link>
              <Link to="/dashboard" className="flex items-center text-gray-600 hover:text-purple-600 transition-colors">
                <LayoutDashboard className="w-4 h-4 mr-1" />
                Dashboard
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="hidden md:inline-flex">Documentation</Button>
            <Button className="bg-purple-600 hover:bg-purple-700">Get Started</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
