export const lessons = [
  {
    id: 0,
    title: "Variables & Space Suits",
    description: "Learn how variables work like putting on different space suits for different missions. Each suit (type) protects you in space!",
    difficulty: 'Beginner' as const,
    estimatedTime: "15 min",
    concepts: ["Variables", "String", "Number", "Boolean"],
    image: "https://images.unsplash.com/photo-1654122107610-9b3b024f1a27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc3Ryb25hdXQlMjBoZWxtZXQlMjBzcGFjZXxlbnwxfHx8fDE3NTcxODkwMTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    theory: {
      title: "Variables are like Space Suits",
      content: "In space, astronauts need different suits for different missions. Similarly, in TypeScript, variables need different types! Each type tells TypeScript what kind of data you're storing, just like how each space suit is designed for specific conditions.",
      examples: [
        {
          code: `// String type - for text data (like mission names)
let missionName: string = "Mars Explorer";

// Number type - for numeric data (like rocket speed)
let rocketSpeed: number = 25000;

// Boolean type - for true/false data (like engine status)
let engineActive: boolean = true;`,
          explanation: "Here we're declaring three different 'space suits' for our data. Each type keeps our data safe and tells TypeScript what we can do with it!"
        }
      ]
    },
    practice: {
      initialCode: `// Create three variables for your space mission!
// 1. A string for your astronaut name
// 2. A number for your spaceship's fuel level (0-100)
// 3. A boolean to check if your helmet is on

// Your code here:
let astronautName: string = "";
let fuelLevel: number = 0;
let helmetOn: boolean = false;

console.log("Astronaut:", astronautName, "Fuel:", fuelLevel, "Helmet:", helmetOn);`,
      expectedOutput: "Astronaut: Alex Fuel: 85 Helmet: true",
      hint: "Remember to assign actual values! Try: astronautName = 'Alex', fuelLevel = 85, helmetOn = true",
      concept: "Variable Types",
      explanation: "Great! You've learned that TypeScript uses types like safety equipment in space. String for text, number for... numbers, and boolean for yes/no situations!"
    }
  },
  {
    id: 1,
    title: "Functions & Rocket Engines",
    description: "Functions are like rocket engines - they take fuel (parameters) and produce thrust (results). Master the art of function propulsion!",
    difficulty: 'Beginner' as const,
    estimatedTime: "20 min",
    concepts: ["Functions", "Parameters", "Return types", "Void"],
    image: "https://images.unsplash.com/photo-1720214658819-2676e74b4c69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2NrZXQlMjBsYXVuY2glMjBzcGFjZXxlbnwxfHx8fDE3NTcxODkwMTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    theory: {
      title: "Functions are Rocket Engines",
      content: "Just like rocket engines take fuel and produce thrust, functions take inputs (parameters) and produce outputs (return values). TypeScript helps us specify exactly what type of fuel goes in and what type of thrust comes out!",
      examples: [
        {
          code: `// A function that takes numbers and returns a number
function calculateDistance(speed: number, time: number): number {
  return speed * time;
}

// A function that takes a string and returns nothing (void)
function launchCountdown(missionName: string): void {
  console.log("Launching " + missionName + " in 3... 2... 1...");
}

// Using our functions
let distance = calculateDistance(1000, 5); // 5000 km
launchCountdown("Mars Mission");`,
          explanation: "The first function takes two numbers as 'fuel' and returns a number as 'thrust'. The second function takes a string but returns void (nothing) - it just performs an action!"
        }
      ]
    },
    practice: {
      initialCode: `// Create a function called 'checkFuelStatus' that:
// - Takes a fuel level (number) as parameter
// - Returns "Ready for launch!" if fuel > 50
// - Returns "Need more fuel!" if fuel <= 50

function checkFuelStatus(fuel: number): string {
  // Your code here
  
}

// Test your function
console.log(checkFuelStatus(75));`,
      expectedOutput: "Ready for launch!",
      hint: "Use an if statement: if (fuel > 50) return 'Ready for launch!'; else return 'Need more fuel!';",
      concept: "Functions with Return Types",
      explanation: "Excellent! You've created a rocket engine function that takes fuel data and returns mission status. Functions help organize your code into reusable rocket parts!"
    }
  },
  {
    id: 2,
    title: "Arrays & Space Fleets",
    description: "Arrays are like space fleets - collections of spacecraft working together. Learn to command your data fleet with TypeScript precision!",
    difficulty: 'Beginner' as const,
    estimatedTime: "18 min",
    concepts: ["Arrays", "Array methods", "Type safety", "Iteration"],
    image: "https://images.unsplash.com/photo-1612026934848-464065aa2c8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGFuZXQlMjBlYXJ0aCUyMHNwYWNlfGVufDF8fHx8MTc1NzE4OTAwOXww&ixlib=rb-4.1.0&q=80&w=1080",
    theory: {
      title: "Arrays are Space Fleets",
      content: "A space fleet is a collection of spacecraft working together on a mission. Similarly, arrays are collections of data elements of the same type. TypeScript ensures all ships in your fleet are the right type!",
      examples: [
        {
          code: `// A fleet of spacecraft names (string array)
let spaceFleet: string[] = ["Enterprise", "Voyager", "Discovery"];

// A fleet of fuel levels (number array)
let fuelLevels: number[] = [85, 92, 78, 100];

// Adding new ships to the fleet
spaceFleet.push("Endeavour");

// Checking fleet status
for (let ship of spaceFleet) {
  console.log("Ship " + ship + " is ready!");
}`,
          explanation: "Arrays use square brackets [] after the type. You can add new elements with push(), and loop through them to perform actions on each element!"
        }
      ]
    },
    practice: {
      initialCode: `// Create an array of planet names you want to visit
let planets: string[] = ["Mars", "Jupiter", "Saturn"];

// Add "Neptune" to your planets array
// Then log the total number of planets

planets.push("Neptune");
console.log(planets.length);`,
      expectedOutput: "4",
      hint: "Use planets.push('Neptune') to add a planet, then console.log(planets.length) to show the count",
      concept: "Array Operations",
      explanation: "Perfect! You've learned to manage your space fleet (array) by adding new destinations and checking fleet size. Arrays are powerful tools for organizing multiple pieces of data!"
    }
  },
  {
    id: 3,
    title: "Objects & Space Stations",
    description: "Objects are like space stations - complex structures with different rooms (properties) and functions (methods). Build your own space station!",
    difficulty: 'Intermediate' as const,
    estimatedTime: "25 min",
    concepts: ["Objects", "Properties", "Methods", "Type annotations"],
    image: "https://images.unsplash.com/photo-1744138038271-2ffa619dcedf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGFjZSUyMG5lYnVsYSUyMGNvbG9yZnVsfGVufDF8fHx8MTc1NzExNzU1M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    theory: {
      title: "Objects are Space Stations",
      content: "A space station is a complex structure with different rooms (properties) and functions (methods). Objects in TypeScript work the same way - they group related data and functions together in one organized structure!",
      examples: [
        {
          code: `// Define a space station object
let spaceStation = {
  name: "International Space Station",
  altitude: 408,
  crew: 7,
  operational: true,
  
  // A method (function inside an object)
  adjustAltitude: function(newAltitude: number): void {
    this.altitude = newAltitude;
    console.log("Altitude adjusted to " + newAltitude + " km");
  }
};

// Access properties
console.log(spaceStation.name); // "International Space Station"

// Call methods
spaceStation.adjustAltitude(410);`,
          explanation: "Objects use curly braces {} and can contain both properties (data) and methods (functions). Use dot notation to access them!"
        }
      ]
    },
    practice: {
      initialCode: `// Create a spacecraft object with the following properties:
// - name (string): "Explorer One"
// - speed (number): 15000
// - fuel (number): 80
// - status (string): "Active"

let spacecraft = {
  name: "Explorer One",
  speed: 15000,
  fuel: 80,
  status: "Active"
};

console.log(spacecraft.name + " is traveling at " + spacecraft.speed + " km/h");`,
      expectedOutput: "Explorer One is traveling at 15000 km/h",
      hint: "Make sure all the property names and values match exactly. Use dot notation to access properties.",
      concept: "Object Properties",
      explanation: "Fantastic! You've built your first space station (object) with multiple rooms (properties). Objects help organize related data into logical structures!"
    }
  },
  {
    id: 4,
    title: "Interfaces & Mission Blueprints",
    description: "Interfaces are like mission blueprints - they define the structure and requirements for your space missions. Create reusable templates!",
    difficulty: 'Intermediate' as const,
    estimatedTime: "30 min",
    concepts: ["Interfaces", "Type definitions", "Optional properties", "Readonly"],
    image: "https://images.unsplash.com/photo-1720214658819-2676e74b4c69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2NrZXQlMjBsYXVuY2glMjBzcGFjZXxlbnwxfHx8fDE3NTcxODkwMTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    theory: {
      title: "Interfaces are Mission Blueprints",
      content: "Before any space mission, engineers create detailed blueprints that specify exactly what the spacecraft must have. Interfaces in TypeScript work the same way - they define the structure that objects must follow!",
      examples: [
        {
          code: `// Define a blueprint for all spacecraft
interface Spacecraft {
  name: string;
  crew: number;
  fuelLevel: number;
  destination?: string; // Optional property
  readonly id: number;  // Cannot be changed after creation
}

// Create spacecraft following the blueprint
let apollo: Spacecraft = {
  name: "Apollo 11",
  crew: 3,
  fuelLevel: 100,
  destination: "Moon",
  id: 1969
};

let voyager: Spacecraft = {
  name: "Voyager 1",
  crew: 0,
  fuelLevel: 15,
  id: 1977
  // destination is optional, so we can skip it
};`,
          explanation: "Interfaces define what properties an object must have. Optional properties use ? and readonly properties cannot be changed after creation!"
        }
      ]
    },
    practice: {
      initialCode: `// Define an interface called 'Planet' with:
// - name (string)
// - diameter (number) 
// - hasLife (boolean)
// - moons (optional number)

interface Planet {
  name: string;
  diameter: number;
  hasLife: boolean;
  moons?: number;
}

// Create a planet object following your interface
let mars: Planet = {
  name: "Mars",
  diameter: 6779,
  hasLife: false,
  moons: 2
};

console.log(mars.name + " has " + (mars.moons || 0) + " moons");`,
      expectedOutput: "Mars has 2 moons",
      hint: "Make sure your interface definition matches exactly, and your mars object includes all required properties",
      concept: "Interface Definitions",
      explanation: "Excellent! You've created a mission blueprint (interface) that ensures all planets have the required information. Interfaces help maintain consistency across your space program!"
    }
  },
  {
    id: 5,
    title: "Classes & Starship Construction",
    description: "Classes are like starship construction templates - they define how to build and operate spacecraft. Master the art of spaceship engineering!",
    difficulty: 'Advanced' as const,
    estimatedTime: "35 min",
    concepts: ["Classes", "Constructors", "Methods", "Access modifiers", "Inheritance"],
    image: "https://images.unsplash.com/photo-1612026934848-464065aa2c8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGFuZXQlMjBlYXJ0aCUyMHNwYWNlfGVufDF8fHx8MTc1NzE4OTAwOXww&ixlib=rb-4.1.0&q=80&w=1080",
    theory: {
      title: "Classes are Starship Construction Templates",
      content: "A starship construction facility uses templates to build multiple ships with the same basic design but different specifications. Classes in TypeScript work similarly - they're templates for creating multiple objects with the same structure and behavior!",
      examples: [
        {
          code: `// Starship construction template
class Starship {
  private fuelLevel: number;
  protected crewSize: number;
  public name: string;

  constructor(name: string, crewSize: number) {
    this.name = name;
    this.crewSize = crewSize;
    this.fuelLevel = 100;
  }

  // Public method anyone can use
  public launch(): void {
    if (this.fuelLevel > 50) {
      console.log(this.name + " is launching!");
      this.fuelLevel -= 50;
    } else {
      console.log("Not enough fuel to launch!");
    }
  }

  // Private method only this class can use
  private checkSystems(): boolean {
    return this.fuelLevel > 0 && this.crewSize > 0;
  }
}

// Build starships from the template
let enterprise = new Starship("Enterprise", 400);
let voyager = new Starship("Voyager", 150);

enterprise.launch(); // "Enterprise is launching!"`,
          explanation: "Classes use constructors to initialize new instances. Access modifiers control who can access properties and methods: public (anyone), private (only this class), protected (this class and subclasses)."
        }
      ]
    },
    practice: {
      initialCode: `// Create a SpaceExplorer class with:
// - private property: energy (number, starts at 100)
// - public property: name (string)
// - constructor that takes a name parameter
// - public method explore() that reduces energy by 20 and logs the exploration

class SpaceExplorer {
  private energy: number = 100;
  public name: string;

  constructor(name: string) {
    this.name = name;
  }

  public explore(): void {
    this.energy -= 20;
    console.log(this.name + " is exploring! Energy: " + this.energy);
  }
}

let astronaut = new SpaceExplorer("Commander Nova");
astronaut.explore();`,
      expectedOutput: "Commander Nova is exploring! Energy: 80",
      hint: "Make sure your constructor sets this.name = name, and your explore method subtracts 20 from this.energy",
      concept: "Class Construction",
      explanation: "Outstanding! You've mastered starship construction (classes) with proper access control and methods. Classes help you create reusable templates for complex objects!"
    }
  }
];

export type Lesson = typeof lessons[0];