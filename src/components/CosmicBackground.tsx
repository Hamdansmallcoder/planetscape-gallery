import spaceBackground from '@/assets/space-background.jpg';

interface CosmicBackgroundProps {
  children: React.ReactNode;
}

export const CosmicBackground = ({ children }: CosmicBackgroundProps) => {
  return (
    <div 
      className="min-h-screen relative bg-background"
      style={{
        backgroundImage: `url(${spaceBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Cosmic overlay */}
      <div className="absolute inset-0 bg-gradient-cosmic opacity-50" />
      
      {/* Twinkling stars */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-foreground rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              opacity: Math.random() * 0.8 + 0.2
            }}
          />
        ))}
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};