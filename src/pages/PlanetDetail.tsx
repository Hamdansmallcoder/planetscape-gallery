import { useParams, useNavigate } from 'react-router-dom';
import { getPlanetById } from '@/data/planets';
import { CosmicBackground } from '@/components/CosmicBackground';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Globe, Clock, Thermometer, Wind, Users, Zap } from 'lucide-react';

export default function PlanetDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const planet = id ? getPlanetById(id) : undefined;

  if (!planet) {
    return (
      <CosmicBackground>
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Planet Not Found</h1>
          <Button onClick={() => navigate('/')} variant="outline">
            Return to Solar System
          </Button>
        </div>
      </CosmicBackground>
    );
  }

  return (
    <CosmicBackground>
      <div className="container mx-auto px-4 py-8">
        <Button 
          onClick={() => navigate('/')} 
          variant="outline" 
          className="mb-6 hover:bg-primary/20"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Solar System
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Planet Image */}
          <Card className="bg-card/90 backdrop-blur-sm border-border/50">
            <CardContent className="p-8">
              <div className="relative">
                <div 
                  className={`
                    w-80 h-80 mx-auto rounded-full overflow-hidden
                    animate-float shadow-cosmic
                  `}
                  style={{
                    background: `radial-gradient(circle, hsl(var(--${planet.color})), hsl(var(--${planet.color}) / 0.6))`
                  }}
                >
                  <img 
                    src={planet.image} 
                    alt={planet.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div 
                  className={`
                    absolute inset-0 w-80 h-80 mx-auto rounded-full 
                    bg-gradient-planetary animate-pulse-glow
                  `}
                />
              </div>
            </CardContent>
          </Card>

          {/* Planet Info */}
          <div className="space-y-6">
            <Card className="bg-card/90 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle 
                  className="text-4xl font-bold bg-gradient-stellar bg-clip-text text-transparent"
                >
                  {planet.name}
                </CardTitle>
                <p className="text-muted-foreground text-lg">{planet.type} Planet</p>
              </CardHeader>
              <CardContent>
                <p className="text-foreground leading-relaxed">
                  {planet.description}
                </p>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-card/90 backdrop-blur-sm border-border/50">
                <CardContent className="p-4 text-center">
                  <Globe className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <p className="text-sm text-muted-foreground">Diameter</p>
                  <p className="font-semibold">{planet.diameter}</p>
                </CardContent>
              </Card>
              <Card className="bg-card/90 backdrop-blur-sm border-border/50">
                <CardContent className="p-4 text-center">
                  <Clock className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <p className="text-sm text-muted-foreground">Orbital Period</p>
                  <p className="font-semibold">{planet.orbitalPeriod}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Detailed Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Card className="bg-card/90 backdrop-blur-sm border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Thermometer className="w-5 h-5 text-primary" />
                Physical Properties
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Temperature:</span>
                <span>{planet.temperature}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Mass:</span>
                <span>{planet.mass}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Gravity:</span>
                <span>{planet.gravity}</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/90 backdrop-blur-sm border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Wind className="w-5 h-5 text-primary" />
                Orbital Data
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Distance from Sun:</span>
                <span>{planet.distanceFromSun}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Rotation Period:</span>
                <span>{planet.rotationPeriod}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Discovered:</span>
                <span>{planet.discovered}</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/90 backdrop-blur-sm border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                Moons & Atmosphere
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Moons:</span>
                <span>{planet.moons}</span>
              </div>
              <div>
                <span className="text-muted-foreground">Atmosphere:</span>
                <p className="text-sm mt-1">{planet.atmosphere}</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Fun Facts */}
        <Card className="bg-card/90 backdrop-blur-sm border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-primary" />
              Fun Facts about {planet.name}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {planet.funFacts.map((fact, index) => (
                <li 
                  key={index} 
                  className="flex items-start gap-3 p-3 rounded-lg bg-muted/20 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-foreground">{fact}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </CosmicBackground>
  );
}