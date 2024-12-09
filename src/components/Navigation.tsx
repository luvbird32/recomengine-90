import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-purple-600">
              SocialSense
            </Link>
            <div className="ml-8 space-x-4">
              <Link to="/dashboard" className="text-gray-600 hover:text-purple-600">
                Dashboard
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost">Login</Button>
            <Button className="bg-purple-600 hover:bg-purple-700">Sign Up</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;