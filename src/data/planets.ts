// Planet data with comprehensive information for the solar system website
import mercuryImage from '@/assets/mercury.jpg';
import venusImage from '@/assets/venus.jpg';
import earthImage from '@/assets/earth.jpg';
import marsImage from '@/assets/mars.jpg';
import jupiterImage from '@/assets/jupiter.jpg';
import saturnImage from '@/assets/saturn.jpg';
import uranusImage from '@/assets/uranus.jpg';
import neptuneImage from '@/assets/neptune.jpg';

export interface Planet {
  id: string;
  name: string;
  image: string;
  color: string;
  diameter: string;
  distanceFromSun: string;
  orbitalPeriod: string;
  rotationPeriod: string;
  moons: number;
  type: string;
  temperature: string;
  atmosphere: string;
  description: string;
  funFacts: string[];
  discovered: string;
  gravity: string;
  mass: string;
}

export const planets: Planet[] = [
  {
    id: 'mercury',
    name: 'Mercury',
    image: mercuryImage,
    color: 'mercury',
    diameter: '4,879 km',
    distanceFromSun: '57.9 million km',
    orbitalPeriod: '88 Earth days',
    rotationPeriod: '59 Earth days',
    moons: 0,
    type: 'Terrestrial',
    temperature: '-173°C to 427°C',
    atmosphere: 'Extremely thin (oxygen, sodium, hydrogen)',
    gravity: '3.7 m/s²',
    mass: '3.3 × 10²³ kg',
    discovered: 'Known since antiquity',
    description: 'Mercury is the smallest planet in our solar system and the closest to the Sun. Despite being so close to the Sun, it\'s not the hottest planet due to its lack of atmosphere. Mercury experiences extreme temperature variations between its day and night sides.',
    funFacts: [
      'A year on Mercury lasts only 88 Earth days',
      'Mercury has no atmosphere to trap heat',
      'It has the most eccentric orbit of all planets',
      'Mercury is only slightly larger than Earth\'s Moon',
      'It experiences the greatest temperature range of any planet'
    ]
  },
  {
    id: 'venus',
    name: 'Venus',
    image: venusImage,
    color: 'venus',
    diameter: '12,104 km',
    distanceFromSun: '108.2 million km',
    orbitalPeriod: '225 Earth days',
    rotationPeriod: '243 Earth days',
    moons: 0,
    type: 'Terrestrial',
    temperature: '462°C (surface)',
    atmosphere: 'Dense carbon dioxide with sulfuric acid clouds',
    gravity: '8.87 m/s²',
    mass: '4.87 × 10²⁴ kg',
    discovered: 'Known since antiquity',
    description: 'Venus is the second planet from the Sun and the hottest in our solar system due to its thick atmosphere that traps heat. Often called Earth\'s twin due to similar size, Venus rotates backwards and has extreme greenhouse effects.',
    funFacts: [
      'Venus rotates backwards compared to most planets',
      'A day on Venus is longer than its year',
      'It\'s the hottest planet in the solar system',
      'Venus has the most circular orbit of any planet',
      'It rains sulfuric acid on Venus'
    ]
  },
  {
    id: 'earth',
    name: 'Earth',
    image: earthImage,
    color: 'earth',
    diameter: '12,756 km',
    distanceFromSun: '149.6 million km',
    orbitalPeriod: '365.25 days',
    rotationPeriod: '24 hours',
    moons: 1,
    type: 'Terrestrial',
    temperature: '-89°C to 58°C',
    atmosphere: 'Nitrogen (78%), Oxygen (21%), other gases',
    gravity: '9.8 m/s²',
    mass: '5.97 × 10²⁴ kg',
    discovered: 'N/A (Home planet)',
    description: 'Earth is our home planet and the only known world to harbor life. With its perfect distance from the Sun, protective atmosphere, and abundant water, Earth provides ideal conditions for a diverse range of life forms.',
    funFacts: [
      'Earth is the only known planet with life',
      '71% of Earth\'s surface is covered by water',
      'Earth has a protective magnetic field',
      'It\'s the densest planet in the solar system',
      'Earth\'s atmosphere protects us from meteors'
    ]
  },
  {
    id: 'mars',
    name: 'Mars',
    image: marsImage,
    color: 'mars',
    diameter: '6,792 km',
    distanceFromSun: '227.9 million km',
    orbitalPeriod: '687 Earth days',
    rotationPeriod: '24.6 hours',
    moons: 2,
    type: 'Terrestrial',
    temperature: '-87°C to -5°C',
    atmosphere: 'Thin carbon dioxide atmosphere',
    gravity: '3.71 m/s²',
    mass: '6.39 × 10²³ kg',
    discovered: 'Known since antiquity',
    description: 'Mars, known as the Red Planet due to iron oxide on its surface, has the largest volcano and canyon in the solar system. It shows evidence of ancient water flows and is a prime target for finding signs of past or present life.',
    funFacts: [
      'Mars has the largest volcano in the solar system (Olympus Mons)',
      'It has polar ice caps made of water and carbon dioxide',
      'Mars experiences dust storms that can cover the entire planet',
      'A day on Mars is almost the same as on Earth',
      'Mars has two small moons: Phobos and Deimos'
    ]
  },
  {
    id: 'jupiter',
    name: 'Jupiter',
    image: jupiterImage,
    color: 'jupiter',
    diameter: '142,984 km',
    distanceFromSun: '778.5 million km',
    orbitalPeriod: '12 Earth years',
    rotationPeriod: '10 hours',
    moons: 95,
    type: 'Gas Giant',
    temperature: '-108°C (cloud tops)',
    atmosphere: 'Hydrogen and helium with traces of methane',
    gravity: '24.79 m/s²',
    mass: '1.90 × 10²⁷ kg',
    discovered: 'Known since antiquity',
    description: 'Jupiter is the largest planet in our solar system and acts as a cosmic vacuum cleaner, protecting inner planets from asteroids and comets. Its Great Red Spot is a storm larger than Earth that has been raging for centuries.',
    funFacts: [
      'Jupiter is more massive than all other planets combined',
      'The Great Red Spot is a storm that has lasted for centuries',
      'Jupiter has at least 95 moons',
      'It acts as a shield protecting Earth from asteroids',
      'Jupiter could have become a star if it were more massive'
    ]
  },
  {
    id: 'saturn',
    name: 'Saturn',
    image: saturnImage,
    color: 'saturn',
    diameter: '120,536 km',
    distanceFromSun: '1.43 billion km',
    orbitalPeriod: '29 Earth years',
    rotationPeriod: '10.7 hours',
    moons: 146,
    type: 'Gas Giant',
    temperature: '-139°C (cloud tops)',
    atmosphere: 'Hydrogen and helium',
    gravity: '10.44 m/s²',
    mass: '5.68 × 10²⁶ kg',
    discovered: 'Known since antiquity',
    description: 'Saturn is famous for its spectacular ring system made of ice and rock particles. It\'s the least dense planet in our solar system and would float in water if there were an ocean large enough.',
    funFacts: [
      'Saturn has the most spectacular ring system',
      'It\'s the least dense planet - it would float in water',
      'Saturn has at least 146 moons',
      'Its largest moon, Titan, has a thick atmosphere',
      'Saturn\'s hexagonal storm at its north pole is unique'
    ]
  },
  {
    id: 'uranus',
    name: 'Uranus',
    image: uranusImage,
    color: 'uranus',
    diameter: '51,118 km',
    distanceFromSun: '2.87 billion km',
    orbitalPeriod: '84 Earth years',
    rotationPeriod: '17 hours',
    moons: 27,
    type: 'Ice Giant',
    temperature: '-197°C',
    atmosphere: 'Hydrogen, helium, and methane',
    gravity: '8.69 m/s²',
    mass: '8.68 × 10²⁵ kg',
    discovered: '1781 by William Herschel',
    description: 'Uranus is unique among planets because it rotates on its side, likely due to a collision with an Earth-sized object long ago. Its blue-green color comes from methane in its atmosphere.',
    funFacts: [
      'Uranus rotates on its side at a 98-degree angle',
      'It was the first planet discovered with a telescope',
      'Uranus has faint rings discovered in 1977',
      'Its seasons last 21 Earth years each',
      'Uranus is the coldest planetary atmosphere in the solar system'
    ]
  },
  {
    id: 'neptune',
    name: 'Neptune',
    image: neptuneImage,
    color: 'neptune',
    diameter: '49,528 km',
    distanceFromSun: '4.50 billion km',
    orbitalPeriod: '165 Earth years',
    rotationPeriod: '16 hours',
    moons: 14,
    type: 'Ice Giant',
    temperature: '-201°C',
    atmosphere: 'Hydrogen, helium, and methane',
    gravity: '11.15 m/s²',
    mass: '1.02 × 10²⁶ kg',
    discovered: '1846 by mathematical prediction',
    description: 'Neptune is the windiest planet in our solar system, with speeds reaching up to 2,100 km/h. It was the first planet discovered through mathematical prediction rather than observation.',
    funFacts: [
      'Neptune has the fastest winds in the solar system',
      'It was discovered through mathematical calculations',
      'Neptune takes 165 Earth years to orbit the Sun',
      'Its largest moon, Triton, orbits backwards',
      'Neptune appears blue due to methane in its atmosphere'
    ]
  }
];

export const getPlanetById = (id: string): Planet | undefined => {
  return planets.find(planet => planet.id === id);
};