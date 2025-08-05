import { Card, CardContent } from '@/components/ui/card';
import { Planet } from '@/data/planets';
import { useNavigate } from 'react-router-dom';

interface PlanetCardProps {
  planet: Planet;
  index: number;
}

export const PlanetCard = ({ planet, index }: PlanetCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/planet/${planet.id}`);
  };

  return (
    <Card 
      className={`
        group cursor-pointer transition-all duration-300 
        hover:scale-105 hover:shadow-cosmic hover:shadow-planet-glow
        bg-card/80 backdrop-blur-sm border-border/50
        animate-fade-in
      `}
      style={{ 
        animationDelay: `${index * 0.1}s`,
      }}
      onClick={handleClick}
    >
      <CardContent className="p-6 text-center">
        <div className="relative mb-4">
          <div 
            className={`
              w-32 h-32 mx-auto rounded-full overflow-hidden
              group-hover:animate-float transition-transform duration-300
              shadow-lg group-hover:shadow-planet-glow
            `}
          >
            <img 
              src={planet.image} 
              alt={planet.name}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <div 
            className={`
              absolute inset-0 w-32 h-32 mx-auto rounded-full 
              bg-gradient-planetary opacity-0 group-hover:opacity-100
              transition-opacity duration-300 pointer-events-none
            `}
          />
        </div>
        
        <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
          {planet.name}
        </h3>
        
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
          {planet.description.substring(0, 100)}...
        </p>
        
        <div className="space-y-1 text-xs text-muted-foreground">
          <div className="flex justify-between">
            <span>Distance from Sun:</span>
            <span>{planet.distanceFromSun}</span>
          </div>
          <div className="flex justify-between">
            <span>Type:</span>
            <span>{planet.type}</span>
          </div>
          <div className="flex justify-between">
            <span>Moons:</span>
            <span>{planet.moons}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};