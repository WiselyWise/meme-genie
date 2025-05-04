
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>Page Not Found | MemeAI</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen flex flex-col items-center justify-center bg-dark-500 px-4 text-center">
        <div className="glass p-8 md:p-10 max-w-md">
          <h1 className="text-5xl md:text-6xl font-medium mb-4 text-gradient">404</h1>
          <p className="text-xl text-white/80 mb-6">Oops! This page doesn't exist</p>
          <p className="text-white/60 mb-8">
            The page you're looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <Button asChild className="bg-gradient-to-r from-purple-500 to-teal-500 hover:opacity-90">
            <Link to="/" className="flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Return to Home
            </Link>
          </Button>
        </div>
      </div>
    </>
  );
};

export default NotFound;
