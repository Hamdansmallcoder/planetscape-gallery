import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { CosmicBackground } from "@/components/CosmicBackground";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <CosmicBackground>
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center animate-fade-in">
          <h1 className="text-6xl font-bold mb-4 bg-gradient-stellar bg-clip-text text-transparent">
            404
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            Looks like you've drifted into uncharted space!
          </p>
          <Button asChild>
            <a href="/">Return to Solar System</a>
          </Button>
        </div>
      </div>
    </CosmicBackground>
  );
};

export default NotFound;
