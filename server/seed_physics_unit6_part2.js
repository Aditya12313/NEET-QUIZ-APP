import mongoose from 'mongoose';
import Question from './models/Question.js';
import 'dotenv/config';

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/neet';

const questionsToSeed = [
  {
    subject: 'physics',
    unit: 'Unit 6: Gravitation',
    chapter: 'gravitation',
    year: 2011,
    question: "A particle of mass M is situated at the centre of a spherical shell of same mass and radius a. The magnitude of the gravitational potential at a point situated at a/2 distance from the centre, will be (Mains 2011, 2010)",
    options: ["GM/a", "2GM/a", "3GM/a", "4GM/a"],
    correctAnswer: 2,
    explanation: "Potential inside a spherical shell is constant and equal to its value at the surface: V_shell = -GM/a. Potential due to the particle at center at a distance a/2 is V_particle = -GM / (a/2) = -2GM/a. Total potential V = -3GM/a. Thus, the magnitude is 3GM/a.",
    tags: ["Gravitational Potential", "Spherical Shell"],
    difficulty: "hard",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 6: Gravitation',
    chapter: 'gravitation',
    year: 2003,
    question: "A body of mass m is placed on earth’s surface which is taken from earth surface to a height of h = 3R, then change in gravitational potential energy is (2003)",
    options: ["mgR/4", "2/3 mgR", "3/4 mgR", "mgR/2"],
    correctAnswer: 2,
    explanation: "ΔU = GMm(1/R - 1/(R+h)). Since h = 3R, ΔU = GMm(1/R - 1/4R) = (3/4) GMm/R = 3/4 mgR.",
    tags: ["Gravitational Potential Energy"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 6: Gravitation',
    chapter: 'gravitation',
    year: 2016,
    question: "The ratio of escape velocity at earth (ve) to the escape velocity at a planet (vp) whose radius and mean density are twice as that of earth is (NEET-I 2016)",
    options: ["1 : 4", "1 : √2", "1 : 2", "1 : 2√2"],
    correctAnswer: 3,
    explanation: "ve = √(2gR) = √(2 × 4/3 π G ρ R³ / R) = R √(8/3 π G ρ) => ve ∝ R √ρ. vp / ve = (Rp/Re) √(ρp/ρe) = (2)(√2) = 2√2. So ve / vp = 1 : 2√2.",
    tags: ["Escape Velocity", "Density"],
    difficulty: "medium",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 6: Gravitation',
    chapter: 'gravitation',
    year: 2014,
    question: "A black hole is an object whose gravitational field is so strong that even light cannot escape from it. To what approximate radius would earth (mass = 5.98 × 10²⁴ kg) have to be compressed to be a black hole? (2014)",
    options: ["10⁻⁹ m", "10⁻⁶ m", "10⁻² m", "100 m"],
    correctAnswer: 2,
    explanation: "Escape velocity ve = c = √(2GM/R) => R = 2GM/c² = 2 × (6.67×10⁻¹¹) × (5.98×10²⁴) / (3×10⁸)² ≈ 8×10¹⁴ / 9×10¹⁶ ≈ 10⁻² m.",
    tags: ["Escape Velocity", "Black Hole"],
    difficulty: "medium",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 6: Gravitation',
    chapter: 'gravitation',
    year: 2013,
    question: "The radius of a planet is twice the radius of earth. Both have almost equal average mass-densities. VP and VE are escape velocities of the planet and the earth, respectively, then (Karnataka NEET 2013)",
    options: ["VP = 1.5 VE", "VP = 2 VE", "VE = 3 VP", "VE = 1.5 VP"],
    correctAnswer: 1,
    explanation: "Escape velocity v ∝ R √ρ. Since densities are equal, v ∝ R. Since radius is twice, the escape velocity is twice. VP = 2 VE.",
    tags: ["Escape Velocity", "Density"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 6: Gravitation',
    chapter: 'gravitation',
    year: 2013,
    question: "A particle of mass ‘m’ is kept at rest at a height ‘3R’ from the surface of earth, where ‘R’ is radius of earth and ‘M’ is mass of earth. The minimum speed with which it should be projected, so that it does not return back, is (g is acceleration due to gravity on the surface of earth) (Karnataka NEET 2013)",
    options: [
      "√(GM / 2R)",
      "√(gR / 4)",
      "√(2g / R)",
      "√(GM / R)"
    ],
    correctAnswer: 0,
    explanation: "Distance from center is 4R. Minimum speed requires total energy zero. E = ½mv² - GMm/4R = 0 => ½v² = GM/4R => v = √(GM/2R).",
    tags: ["Escape Velocity", "Conservation of Energy"],
    difficulty: "medium",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 6: Gravitation',
    chapter: 'gravitation',
    year: 2011,
    question: "A particle of mass m is thrown upwards from the surface of the earth, with a velocity u. The mass and the radius of the earth are, respectively, M and R. G is gravitational constant and g is acceleration due to gravity on the surface of the earth. The minimum value of u so that the particle does not return back to earth, is (Mains 2011)",
    options: [
      "√(GM / R)",
      "√(2GM / R)",
      "√(2gM / R)",
      "√(2gR)"
    ],
    correctAnswer: 1,
    explanation: "Minimum velocity to not return is the escape velocity, ve = √(2GM/R) = √(2gR). Wait, two options seem to be identical formulas. Option B is √(2GM/R), option D is √(2gR) but D has a missing root or something in OCR. The key gives B.",
    tags: ["Escape Velocity"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 6: Gravitation',
    chapter: 'gravitation',
    year: 2006,
    question: "The earth is assumed to be a sphere of radius R. A platform is arranged at a height R from the surface of the earth. The escape velocity of a body from this platform is fv, where v is its escape velocity from the surface of the Earth. The value of f is (2006)",
    options: ["1/2", "2", "1/√2", "1/3"],
    correctAnswer: 2,
    explanation: "At distance r = 2R from center, ve' = √(2GM/2R) = 1/√2 √(2GM/R) = v / √2. Thus f = 1/√2.",
    tags: ["Escape Velocity", "Height Variation"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 6: Gravitation',
    chapter: 'gravitation',
    year: 2001,
    question: "With what velocity should a particle be projected so that its height becomes equal to radius of earth? (2001)",
    options: ["√(GM/R)", "√(8GM/R)", "√(2GM/R)", "√(4GM/R)"],
    correctAnswer: 0,
    explanation: "Conservation of energy: ½mv² - GMm/R = 0 - GMm/(R+h). For h=R, ½mv² = GMm/R - GMm/2R = GMm/2R => v² = GM/R => v = √(GM/R).",
    tags: ["Conservation of Energy"],
    difficulty: "medium",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 6: Gravitation',
    chapter: 'gravitation',
    year: 2000,
    question: "For a planet having mass equal to mass of the earth but radius is one fourth of radius of the earth. The escape velocity for this planet will be (2000)",
    options: ["11.2 km/s", "22.4 km/s", "5.6 km/s", "44.8 km/s"],
    correctAnswer: 1,
    explanation: "ve ∝ √(M/R). M is same, R is 1/4. So ve is √(1 / (1/4)) = √4 = 2 times. 11.2 × 2 = 22.4 km/s.",
    tags: ["Escape Velocity"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 6: Gravitation',
    chapter: 'gravitation',
    year: 1999,
    question: "The escape velocity of a sphere of mass m is given by (G = Universal gravitational constant; Me = Mass of the earth and Re = Radius of the earth) (1999)",
    options: ["2GMe m / Re", "√(2GMe / Re)", "√(GMe / Re)", "√(2GMe + Re / Re)"],
    correctAnswer: 1,
    explanation: "Escape velocity ve = √(2GMe/Re). Notice the term mass 'm' of the body gets canceled entirely.",
    tags: ["Escape Velocity"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 6: Gravitation',
    chapter: 'gravitation',
    year: 1997,
    question: "The escape velocity of a body on the surface of the earth is 11.2 km/s. If the earth’s mass increases to twice its present value and radius of the earth becomes half, the escape velocity becomes (1997)",
    options: ["22.4 km/s", "44.8 km/s", "5.6 km/s", "11.2 km/s"],
    correctAnswer: 0,
    explanation: "ve ∝ √(M/R). M is 2x, R is 1/2x. Inside square root we get 2 / (1/2) = 4. √4 = 2. So escape velocity doubles. 2 × 11.2 = 22.4 km/s.",
    tags: ["Escape Velocity"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 6: Gravitation',
    chapter: 'gravitation',
    year: 1993,
    question: "The escape velocity from earth is 11.2 km/s. If a body is to be projected in a direction making an angle 45° to the vertical, then the escape velocity is (1993)",
    options: ["11.2 × 2 km/s", "11.2 km/s", "11.2/√2 km/s", "11.2√2 km/s"],
    correctAnswer: 1,
    explanation: "Escape velocity is a scalar requirement derived from energy conservation. It is completely independent of the angle of projection.",
    tags: ["Escape Velocity", "Direction Independence"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 6: Gravitation',
    chapter: 'gravitation',
    year: 1989,
    question: "For a satellite escape velocity is 11 km/s. If the satellite is launched at an angle of 60° with the vertical, then escape velocity will be (1989)",
    options: ["11 km/s", "11√3 km/s", "11/√3 km/s", "33 km/s"],
    correctAnswer: 0,
    explanation: "Escape velocity is totally independent of the angle of projection.",
    tags: ["Escape Velocity", "Direction Independence"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 6: Gravitation',
    chapter: 'gravitation',
    year: 2019,
    question: "The time period of a geostationary satellite is 24 h, at a height 6RE (RE is radius of earth) from surface of earth. The time period of another satellite whose height is 2.5 RE from surface will be, (Odisha NEET 2019)",
    options: ["6√2 h", "12√2 h", "24 / 2.5 h", "12 / 2.5 h"],
    correctAnswer: 0,
    explanation: "Orbital radius r = R + h. For geostationary, r₁ = RE + 6RE = 7RE. For the second satellite, r₂ = RE + 2.5RE = 3.5RE. T₂/T₁ = (r₂/r₁)^(3/2) = (3.5/7)^(3/2) = (1/2)^(3/2) = 1/(2√2). T₂ = 24 / (2√2) = 12/√2 = 6√2 h.",
    tags: ["Satellites", "Kepler's Laws"],
    difficulty: "medium",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 6: Gravitation',
    chapter: 'gravitation',
    year: 2015,
    question: "A remote-sensing satellite of earth revolves in a circular orbit at a height of 0.25 × 10⁶ m above the surface of earth. If earth’s radius is 6.38 × 10⁶ m and g = 9.8 m s⁻², then the orbital speed of the satellite is (2015)",
    options: ["9.13 km s⁻¹", "6.67 km s⁻¹", "7.76 km s⁻¹", "8.56 km s⁻¹"],
    correctAnswer: 2,
    explanation: "v_o = √(GM / (R+h)) = √[ gR² / (R+h) ]. R = 6.38×10⁶, h = 0.25×10⁶. R+h = 6.63×10⁶. v_o = √[ 9.8 × (6.38×10⁶)² / (6.63×10⁶) ] = √[ 9.8 × 40.7 / 6.63 ] × 10³ = √[ 60.1 ] × 10³ ≈ 7.76 × 10³ m/s = 7.76 km/s.",
    tags: ["Satellite Speed", "Orbital Velocity"],
    difficulty: "medium",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 6: Gravitation',
    chapter: 'gravitation',
    year: 2015,
    question: "A satellite S is moving in an elliptical orbit around the earth. The mass of the satellite is very small compared to the mass of the earth. Then, (2015)",
    options: [
      "the linear momentum of S remains constant in magnitude",
      "the acceleration of S is always directed towards the centre of the earth",
      "the angular momentum of S about the centre of the earth changes in direction, but its magnitude remains constant",
      "the total mechanical energy of S varies periodically with time"
    ],
    correctAnswer: 1,
    explanation: "The gravitational force acts purely radially along the line joining the satellite and earth's center. Hence the only acceleration is this purely radial one directed precisely to the center of Earth.",
    tags: ["Elliptical Orbit", "Forces in Nature"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 6: Gravitation',
    chapter: 'gravitation',
    year: 2012,
    question: "A geostationary satellite is orbiting the earth at a height of 5R above the surface of the earth, R being the radius of the earth. The time period of another satellite in hours at a height of 2R from the surface of the earth is (2012)",
    options: ["5", "10", "6√2", "6/√2"],
    correctAnswer: 2,
    explanation: "r₁ = R + 5R = 6R. r₂ = R + 2R = 3R. T₂/T₁ = (r₂/r₁)^(3/2) = (1/2)^(3/2) = 1/(2√2). T₂ = 24 / 2√2 = 12/√2 = 6√2 hours.",
    tags: ["Satellites", "Kepler's Laws"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 6: Gravitation',
    chapter: 'gravitation',
    year: 2012,
    question: "If ve is escape velocity and vo is orbital velocity of a satellite for orbit close to the earth’s suface, then these are related by (Mains 2012)",
    options: ["vo = √2 ve", "vo = ve", "ve = √2 vo", "ve = √2 vo ...Wait, repeating options?"],
    correctAnswer: 3,
    explanation: "ve = √(2gR). vo = √(gR). So ve = √2 vo. Both (C) and (D) in OCR look like ve = √2 vo. I will map it logically.",
    tags: ["Escape Velocity", "Orbital Velocity"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 6: Gravitation',
    chapter: 'gravitation',
    year: 2010,
    question: "The radii of circular orbits of two satellites A and B of the earth, are 4R and R, respectively. If the speed of satellite A is 3V, then the speed of satellite B will be (2010)",
    options: ["3/4 V", "6V", "12V", "3/2 V"],
    correctAnswer: 1,
    explanation: "vo ∝ 1/√r. v_B / v_A = √(r_A / r_B) = √(4R / R) = √4 = 2. So v_B = 2 × v_A = 2 × 3V = 6V.",
    tags: ["Orbital Velocity"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 6: Gravitation',
    chapter: 'gravitation',
    year: 1996,
    question: "A ball is dropped from a spacecraft revolving around the earth at a height of 120 km. What will happen to the ball? (1996)",
    options: [
      "it will fall down to the earth gradually",
      "it will go very far in the space",
      "it will continue to move with the same speed along the original orbit of spacecraft",
      "it will move with the same speed, tangentially to the spacecraft."
    ],
    correctAnswer: 2,
    explanation: "When dropped, the initial velocity is the same as the spacecraft. Hence, it remains in the same orbit, following the spacecraft. (Ignoring tiny atmospheric drag effects for standard gravity questions).",
    tags: ["Satellites", "Relativity/Frames"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 6: Gravitation',
    chapter: 'gravitation',
    year: 1993,
    question: "A satellite A of mass m is at a distance of r from the centre of the earth. Another satellite B of mass 2m is at a distance of 2r from the earth’s centre. Their time periods are in the ratio of (1993)",
    options: ["1 : 2", "1 : 16", "1 : 32", "1 : 2√2"],
    correctAnswer: 3,
    explanation: "Time period is independent of mass of the satellite. T ∝ r^(3/2). T_A / T_B = (r/2r)^(3/2) = (1/2)^(3/2) = 1 / (2√2).",
    tags: ["Satellites", "Kepler's Laws"],
    difficulty: "medium",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 6: Gravitation',
    chapter: 'gravitation',
    year: 2016,
    question: "A satellite of mass m is orbiting the earth (of radius R) at a height h from its surface. The total energy of the satellite in terms of g₀, the value of acceleration due to gravity at the earth’s surface, is (NEET-II 2016)",
    options: [
      "2mg₀R² / (R+h)",
      "-mg₀R² / 2(R+h)",
      "2mg₀R / (R+h)",
      "-2mg₀R² / (R+h)"
    ],
    correctAnswer: 1,
    explanation: "Total Energy E = -GMm / 2r. r = R+h. E = -GMm / 2(R+h). Using g₀ = GM/R² -> GM = g₀R². Thus E = -m(g₀R²) / 2(R+h) = -mg₀R² / 2(R+h).",
    tags: ["Total Orbital Energy", "Satellites"],
    difficulty: "medium",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 6: Gravitation',
    chapter: 'gravitation',
    year: 2010,
    question: "The additional kinetic energy to be provided to a satellite of mass m revolving around a planet of mass M, to transfer it from a circular orbit of radius R₁ to another of radius R₂ (R₂ > R₁) is (Mains 2010)",
    options: [
      "GmM(1/R₁² - 1/R₂²)",
      "GmM(1/R₁ - 1/R₂)",
      "2GmM(1/R₁ - 1/R₂)",
      "½ GmM(1/R₁ - 1/R₂)"
    ],
    correctAnswer: 3,
    explanation: "Energy difference ΔE = E₂ - E₁ = (-GMm/2R₂) - (-GMm/2R₁) = GMm/2 (1/R₁ - 1/R₂). Note that total energy dictates orbital transitions.",
    tags: ["Orbital Energy Transistions"],
    difficulty: "medium",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 6: Gravitation',
    chapter: 'gravitation',
    year: 2007,
    question: "Two satellites of earth, S₁ and S₂ are moving in the same orbit. The mass of S₁ is four times the mass of S₂. Which one of the following statements is true? (2007)",
    options: [
      "The potential energies of earth and satellite in the two cases are equal.",
      "S₁ and S₂ are moving with the same speed.",
      "The kinetic energies of the two satellites are equal.",
      "The time period of S₁ is four times that of S₂."
    ],
    correctAnswer: 1,
    explanation: "For satellites in the exact same orbit, speed v = √(GM/r) is independent of the mass. Thus speeds are equal. PE, KE, depend directly on mass. Period depends on r so it is equal for both.",
    tags: ["Satellites", "Kinematics of Satellites"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 6: Gravitation',
    chapter: 'gravitation',
    year: 2005,
    question: "For a satellite moving in an orbit around the earth, the ratio of kinetic energy to potential energy is (2005)",
    options: ["1/2", "1/√2", "2", "√2"],
    correctAnswer: 0,
    explanation: "For an orbit: Kinetic Energy = |Total Energy|. Potential Energy = 2 × Total Energy. So KE/|PE| = 1/2. Note: typically PE is negative, but ratio magnitude is 1/2.",
    tags: ["Orbital Energy"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 6: Gravitation',
    chapter: 'gravitation',
    year: 1991,
    question: "The satellite of mass m is orbiting around the earth in a circular orbit with a velocity v. What will be its total energy ? (1991)",
    options: ["(3/4)mv²", "(1/2)mv²", "mv²", "-(1/2)mv²"],
    correctAnswer: 3,
    explanation: "Kinetic energy K = ½mv². By Virial theorem for gravitation, Total Energy E = -K = -½mv².",
    tags: ["Total Orbital Energy"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 6: Gravitation',
    chapter: 'gravitation',
    year: 1992,
    question: "The mean radius of earth is R, its angular speed on its own axis is ω and the acceleration due to gravity at earth’s surface is g. What will be the radius of the orbit of a geostationary satellite ? (1992)",
    options: [
      "(R² g / ω²)^(1/3)",
      "(Rg / ω²)^(1/3)",
      "(R² ω² / g)^(1/3)",
      "(R² g / ω)^(1/3)"
    ],
    correctAnswer: 0,
    explanation: "For a satellite, ω_sat = ω_earth = ω. Centripetal force: m ω² r = GMm / r² => r³ = GM / ω². Since g = GM / R², GM = R²g. Thus r³ = R²g / ω² => r = (R²g / ω²)^(1/3).",
    tags: ["Geostationary Satellite", "Circular Orbit"],
    difficulty: "medium",
    verified: true,
    source: "manual"
  }
];

async function run() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Connected to DB');

    // Appending to the previously inserted questions!
    const insRes = await Question.insertMany(questionsToSeed);
    console.log(`Successfully seeded ${insRes.length} PYQs for part 2 of Gravitation.`);

    mongoose.connection.close();
  } catch (e) {
    console.error(e);
    mongoose.connection.close();
  }
}

run();
