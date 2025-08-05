import { planets } from '@/data/planets';
import { PlanetCard } from '@/components/PlanetCard';
import { CosmicBackground } from '@/components/CosmicBackground';

const Index = () => {
  return (
    <CosmicBackground>
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-stellar bg-clip-text text-transparent">
            Solar System Explorer
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Embark on an incredible journey through our solar system. Discover the wonders of each planet, 
            from the scorching surface of Mercury to the icy depths of Neptune.
          </p>
        </div>

        {/* Planets Grid */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
            The Eight Planets
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {planets.map((planet, index) => (
              <PlanetCard key={planet.id} planet={planet} index={index} />
            ))}
          </div>
        </div>

        {/* Solar System Facts */}
        <div className="text-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Did You Know?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">8</div>
                <div className="text-muted-foreground">Planets in our Solar System</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">1</div>
                <div className="text-muted-foreground">Star (The Sun)</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">200+</div>
                <div className="text-muted-foreground">Known Moons</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CosmicBackground>
  );
};

export default Index;
