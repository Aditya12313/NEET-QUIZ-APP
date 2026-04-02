import mongoose from 'mongoose';
import Question from './models/Question.js';
import 'dotenv/config';

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/neet';

const questionsToSeed = [
  {
    subject: 'physics',
    unit: 'Unit 6: Gravitation',
    chapter: 'gravitation',
    year: 2018,
    question: "The kinetic energies of a planet in an elliptical orbit about the Sun, at positions A, B and C are KA, KB and KC, respectively. AC is the major axis and SB is perpendicular to AC at the position of the Sun S as shown in the figure. Then (NEET 2018)",
    options: [
      "KA < KB < KC",
      "KA > KB > KC",
      "KB < KA < KC",
      "KB > KA > KC"
    ],
    correctAnswer: 1,
    explanation: "According to Kepler's second law, aerial velocity is constant (angular momentum is conserved). Velocity is maximum when the planet is closest to the Sun (A) and minimum when it is farthest (C). Thus vA > vB > vC, which implies KA > KB > KC.",
    tags: ["Kepler's Laws", "Kinetic Energy"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 6: Gravitation',
    chapter: 'gravitation',
    year: 2011,
    question: "A planet moving along an elliptical orbit is closest to the sun at a distance r₁ and farthest away at a distance of r₂. If v₁ and v₂ are the linear velocities at these points respectively, then the ratio v₁/v₂ is (2011)",
    options: ["(r₁/r₂)²", "r₂/r₁", "(r₂/r₁)²", "r₁/r₂"],
    correctAnswer: 1,
    explanation: "By conservation of angular momentum at aphelion and perihelion, mv₁r₁ = mv₂r₂, so v₁/v₂ = r₂/r₁.",
    tags: ["Conservation of Angular Momentum", "Kepler's Laws"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 6: Gravitation',
    chapter: 'gravitation',
    year: 2009,
    question: "The figure shows elliptical orbit of a planet m about the sun S. The shaded area SCD is twice the shaded area SAB. If t₁ is the time for the planet to move from C to D and t₂ is the time to move from A to B then (2009)",
    options: ["t₁ = 4t₂", "t₁ = 2t₂", "t₁ = t₂", "t₁ > t₂"],
    correctAnswer: 1,
    explanation: "According to Kepler's second law (law of areas), the areal velocity dA/dt is constant. Since the area SCD = 2 × Area SAB, the time taken t₁ will simply be 2 × t₂.",
    tags: ["Kepler's Laws", "Areal Velocity"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 6: Gravitation',
    chapter: 'gravitation',
    year: 1997,
    question: "The period of revolution of planet A around the sun is 8 times that of B. The distance of A from the sun is how many times greater than that of B from the sun? (1997)",
    options: ["4", "5", "2", "3"],
    correctAnswer: 0,
    explanation: "Kepler's third law: T² ∝ R³. TA/TB = 8. (TA/TB)² = (RA/RB)³. So, 8² = (RA/RB)³ => 64 = (RA/RB)³ => RA/RB = 4.",
    tags: ["Kepler's Laws"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 6: Gravitation',
    chapter: 'gravitation',
    year: 1994,
    question: "The distance of two planets from the sun are 10¹³ m and 10¹² m respectively. The ratio of time periods of the planets is (1994, 1988)",
    options: ["10", "10√10", "10", "1/√10"],
    correctAnswer: 1,
    explanation: "T² ∝ r³. T₁/T₂ = (r₁/r₂)^(3/2). Ratio of r = 10¹³/10¹² = 10. T₁/T₂ = 10^(3/2) = 10√10.",
    tags: ["Kepler's Laws"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 6: Gravitation',
    chapter: 'gravitation',
    year: 1990,
    question: "A planet is moving in an elliptical orbit around the sun. If T, V, E and L stand respectively for its kinetic energy, gravitational potential energy, total energy and magnitude of angular momentum about the centre of force, which of the following is correct? (1990)",
    options: [
      "T is conserved.",
      "V is always positive.",
      "E is always negative.",
      "L is conserved but direction of vector L changes continuously."
    ],
    correctAnswer: 2,
    explanation: "For any bounded system (like an elliptical orbit), the total energy E is always negative. Also, L is completely conserved (both magnitude and direction).",
    tags: ["Orbital Energy", "Total Energy"],
    difficulty: "medium",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 6: Gravitation',
    chapter: 'gravitation',
    year: 1988,
    question: "The largest and the shortest distance of the earth from the sun are r₁ and r₂. Its distance from the sun when it is at perpendicular to the major-axis of the orbit drawn from the sun is (1988)",
    options: [
      "(r₁ + r₂)/4",
      "(r₁ + r₂)/(r₁ - r₂)",
      "2r₁r₂ / (r₁ + r₂)",
      "(r₁ + r₂)/3"
    ],
    correctAnswer: 2,
    explanation: "This distance represents the semi latus rectum l of an ellipse. A standard property of elliptical orbits is that l is the harmonic mean of the perihelion and aphelion distances: l = 2r₁r₂ / (r₁ + r₂).",
    tags: ["Properties of Ellipse", "Kepler's Laws"],
    difficulty: "medium",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 6: Gravitation',
    chapter: 'gravitation',
    year: 2017,
    question: "Two astronauts are floating in gravitational free space after having lost contact with their spaceship. The two will (NEET 2017)",
    options: [
      "move towards each other",
      "move away from each other",
      "will become stationary",
      "keep floating at the same distance between them."
    ],
    correctAnswer: 0,
    explanation: "Though they are in gravitational free space (no external gravity), their own masses exert a mutual gravitational force of attraction (F = Gm₁m₂/r²). Hence, they will slowly move towards each other.",
    tags: ["Universal Law of Gravitation", "Conceptual"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 6: Gravitation',
    chapter: 'gravitation',
    year: 2015,
    question: "Kepler’s third law states that square of period of revolution (T) of a planet around the sun, is proportional to third power of average distance r between sun and planet i.e. T² = Kr³ here K is constant. If the masses of sun and planet are M and m respectively then as per Newton’s law of gravitation force of attraction between them is F = GMm/r². The relation between G and K is described as (2015 Cancelled)",
    options: ["K = G", "K = 1/G", "GK = 4π²", "GMK = 4π²"],
    correctAnswer: 3,
    explanation: "For an orbit: Fg = Fc => GMm/r² = mrω² = mr(4π²/T²). Rearranging gives T² = (4π²/GM) r³. So K = 4π²/GM, which implies GMK = 4π².",
    tags: ["Universal Law of Gravitation", "Kepler's Laws"],
    difficulty: "medium",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 6: Gravitation',
    chapter: 'gravitation',
    year: 2014,
    question: "Dependence of intensity of gravitational field (E) of earth with distance (r) from centre of earth is correctly represented by (2014)",
    options: [
      "Linear passing through origin until R, then decreasing as 1/r²",
      "Constant inside, then decreasing",
      "Zero inside, then decreasing",
      "Increasing inversely, then flat"
    ],
    correctAnswer: 0,
    explanation: "Inside the Earth, E ∝ r (linear, passing through origin). Outside the Earth, E ∝ 1/r² (decreasing curve). This matches the classic E vs r graph peak at the surface r = R.",
    tags: ["Gravitational Field", "Graphs"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 6: Gravitation',
    chapter: 'gravitation',
    year: 2012,
    question: "Which one of the following plots represents the variation of gravitational field on a particle with distance r due to a thin spherical shell of radius R? (Mains 2012)",
    options: [
      "Zero until R, then decreasing",
      "Zero for r<R, max at R, 1/r² outside",
      "Linear until R, 1/r² outside",
      "Constant until R, 1/r² outside"
    ],
    correctAnswer: 1,
    explanation: "For a thin spherical shell, the gravitational field inside (r < R) is completely zero. Outside the shell (r > R), it acts like a point mass, so it decreases logarithmically E ∝ 1/r².",
    tags: ["Gravitational Field", "Spherical Shell", "Graphs"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 6: Gravitation',
    chapter: 'gravitation',
    year: 2003,
    question: "Two spheres of masses m and M are situated in air and the gravitational force between them is F. The space around the masses is now filled with a liquid of specific gravity 3. The gravitational force will now be (2003)",
    options: ["3F", "F", "F/3", "F/9"],
    correctAnswer: 1,
    explanation: "Gravitational force F = GMm/r². Since G is a universal constant, the force completely independent of the intervening medium.",
    tags: ["Universal Law of Gravitation", "Properties"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 6: Gravitation',
    chapter: 'gravitation',
    year: 2000,
    question: "Gravitational force is required for (2000)",
    options: ["stirring of liquid", "convection", "conduction", "radiation"],
    correctAnswer: 1,
    explanation: "Natural convection depends on fluid density differences caused by temperature differences. Buoyancy occurs because the heavier fluid falls due to gravity, pushing the hotter, lighter fluid up.",
    tags: ["Convection", "Gravity Applications"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 6: Gravitation',
    chapter: 'gravitation',
    year: 2000,
    question: "A body of weight 72 N moves from the surface of earth at a height half of the radius of earth, then gravitational force exerted on it will be (2000)",
    options: ["36 N", "32 N", "144 N", "50 N"],
    correctAnswer: 1,
    explanation: "W = mg. W_h = m * g_h = m * g / (1 + h/R)². Here h = R/2, so W_h = W / (1 + 1/2)² = 72 / (3/2)² = 72 / (9/4) = 72 × 4 / 9 = 32 N.",
    tags: ["Acceleration Due to Gravity", "Height Variation"],
    difficulty: "medium",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 6: Gravitation',
    chapter: 'gravitation',
    year: 1995,
    question: "Two particles of equal mass m go around a circle of radius R under the action of their mutual gravitational attraction. The speed v of each particle is (1995)",
    options: [
      "½ √(Gm / R)",
      "√(4Gm / R)",
      "½ √(1 / RGm)",
      "√(Gm / R)"
    ],
    correctAnswer: 0,
    explanation: "They orbit their common center of mass, so orbital radius is R, distance between them is 2R. Gravitational force = Gmm/(2R)². Centripetal force = mv²/R. Equating: mv²/R = Gm²/(4R²). v² = Gm/(4R) => v = ½ √(Gm / R).",
    tags: ["Mutual Gravitation", "Circular Orbit"],
    difficulty: "medium",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 6: Gravitation',
    chapter: 'gravitation',
    year: 1995,
    question: "The earth (mass = 6 × 10²⁴ kg) revolves around the sun with an angular velocity of 2 × 10⁻⁷ rad/s in a circular orbit of radius 1.5 × 10⁸ km. The force exerted by the sun on the earth, in newton, is (1995)",
    options: ["36 × 10²¹", "27 × 10³⁹", "zero", "18 × 10²⁵"],
    correctAnswer: 0,
    explanation: "Centripetal force is provided by gravitational force, so F = mrω² = (6×10²⁴) × (1.5×10¹¹) × (2×10⁻⁷)² = (9×10³⁵) × (4×10⁻¹⁴) = 36 × 10²¹ N.",
    tags: ["Universal Law of Gravitation", "Circular Motion"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 6: Gravitation',
    chapter: 'gravitation',
    year: 1994,
    question: "If the gravitational force between two objects were proportional to 1/R (and not as 1/R²), where R is the distance between them, then a particle in a circular path (under such a force) would have its orbital speed v, proportional to (1994, 1989)",
    options: ["R", "R⁰ (independent of R)", "1/R²", "1/R"],
    correctAnswer: 1,
    explanation: "If F ∝ 1/R, then F = k/R. Equating to centripetal force: mv²/R = k/R => v² = k/m => v is a constant, proportional to R⁰.",
    tags: ["Force Variation", "Circular Orbit"],
    difficulty: "medium",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 6: Gravitation',
    chapter: 'gravitation',
    year: 2018,
    question: "If the mass of the Sun were ten times smaller and the universal gravitational constant were ten times larger in magnitude, which of the following is not correct? (NEET 2018)",
    options: [
      "Raindrops will fall faster.",
      "Walking on the ground would become more difficult.",
      "Time period of a simple pendulum on the Earth would decrease.",
      "g on the Earth will not change."
    ],
    correctAnswer: 3,
    explanation: "g = GM/R². The Earth's mass M is constant. If G increases by 10x, then g increases by 10x. Thus raindrops fall faster, walking is harder, and pendulum period T=2π√(L/g) decreases. Thus, 'g will not change' is WRONG.",
    tags: ["Acceleration Due to Gravity", "Concept"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 6: Gravitation',
    chapter: 'gravitation',
    year: 2012,
    question: "A spherical planet has a mass Mp and diameter Dp. A particle of mass m falling freely near the surface of this planet will experience an acceleration due to gravity, equal to (2012)",
    options: [
      "4G Mp / Dp²",
      "GMp m / Dp²",
      "GMp / Dp²",
      "4G Mp m / Dp²"
    ],
    correctAnswer: 0,
    explanation: "Radius R = Dp/2. Acceleration due to gravity g = GMp/R² = GMp / (Dp/2)² = 4GMp / Dp².",
    tags: ["Acceleration Due to Gravity"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 6: Gravitation',
    chapter: 'gravitation',
    year: 2005,
    question: "Imagine a new planet having the same density as that of earth but it is 3 times bigger than the earth in size. If the acceleration due to gravity on the surface of earth is g and that on the surface of the new planet is g′, then (2005)",
    options: ["g′ = g/9", "g′ = 27g", "g′ = 9g", "g′ = 3g"],
    correctAnswer: 3,
    explanation: "g = GM/R² = G × (4/3 π R³ ρ) / R² = (4/3) π G ρ R. If density ρ is same and size (radius R) is 3x, then g ∝ R. Thus, g' = 3g.",
    tags: ["Acceleration Due to Gravity", "Density"],
    difficulty: "medium",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 6: Gravitation',
    chapter: 'gravitation',
    year: 2004,
    question: "The density of a newly discovered planet is twice that of earth. The acceleration due to gravity at the surface of the planet is equal to that at the surface of the earth. If the radius of the earth is R, the radius of the planet would be (2004)",
    options: ["2R", "4R", "¼ R", "½ R"],
    correctAnswer: 3,
    explanation: "Since g ∝ ρ R, if g is same and ρ_planet = 2 ρ_earth, then R_planet must be R_earth / 2 to keep the product identical.",
    tags: ["Acceleration Due to Gravity", "Density"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 6: Gravitation',
    chapter: 'gravitation',
    year: 2003,
    question: "The acceleration due to gravity on the planet A is 9 times the acceleration due to gravity on planet B. A man jumps to a height of 2 m on the surface of A. What is the height of jump by the same person on the planet B ? (2003)",
    options: ["(2/9) m", "18 m", "6 m", "(2/3) m"],
    correctAnswer: 1,
    explanation: "Energy of the jump gives initial KE, which converts to mgh. So mgh is constant => h ∝ 1/g. So h_B / h_A = g_A / g_B = 9. h_B = 9 × 2 = 18 m.",
    tags: ["Acceleration Due to Gravity", "Kinematics"],
    difficulty: "medium",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 6: Gravitation',
    chapter: 'gravitation',
    year: 1996,
    question: "What will be the formula of mass of the earth in terms of g, R and G ? (1996)",
    options: ["G R / g", "g R² / G", "g R / G²", "G g / R"],
    correctAnswer: 1,
    explanation: "g = GM/R² implies M = gR²/G.",
    tags: ["Acceleration Due to Gravity"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 6: Gravitation',
    chapter: 'gravitation',
    year: 1995,
    question: "The acceleration due to gravity g and mean density of the earth ρ are related by which of the following relations? (where G is the gravitational constant and R is the radius of the earth.) (1995)",
    options: [
      "ρ = (3g) / (4πGR)",
      "ρ = (3g) / (4πG R³)",
      "ρ = (4gR) / (3G)",
      "ρ = (4gR³) / (3G)"
    ],
    correctAnswer: 0,
    explanation: "M = Volume × ρ = (4/3) π R³ ρ. And g = GM/R² = G × (4/3) π R³ ρ / R² = (4/3) π G ρ R. Rearranging gives ρ = 3g / (4πGR).",
    tags: ["Acceleration Due to Gravity", "Density"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 6: Gravitation',
    chapter: 'gravitation',
    year: 1994,
    question: "The radius of earth is about 6400 km and that of mars is 3200 km. The mass of the earth is about 10 times mass of mars. An object weighs 200 N on the surface of earth. Its weight on the surface of mars will be (1994)",
    options: ["20 N", "8 N", "80 N", "40 N"],
    correctAnswer: 2,
    explanation: "g = GM/R². g_mars / g_earth = (M_mars / M_earth) × (R_earth / R_mars)² = (1/10) × 2² = 4/10. Weight on mars = (4/10) × 200 = 80 N.",
    tags: ["Acceleration Due to Gravity", "Weight"],
    difficulty: "medium",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 6: Gravitation',
    chapter: 'gravitation',
    year: 2020,
    question: "A body weighs 72 N on the surface of the earth. What is the gravitational force on it, at a height equal to half the radius of the earth? (NEET 2020)",
    options: ["48 N", "32 N", "30 N", "24 N"],
    correctAnswer: 1,
    explanation: "W_h = mg / (1 + h/R)². Since h = R/2, W_h = W / (1 + 1/2)² = W / (3/2)² = 4W/9 = 4×72/9 = 32 N.",
    tags: ["Acceleration Due to Gravity", "Height Variation"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 6: Gravitation',
    chapter: 'gravitation',
    year: 2019,
    question: "A body weighs 200 N on the surface of the earth. How much will it weigh half way down to the centre of the earth ? (NEET 2019)",
    options: ["100 N", "150 N", "200 N", "250 N"],
    correctAnswer: 0,
    explanation: "W_d = mg(1 - d/R). Halfway down means d = R/2. W_d = W(1 - 1/2) = W/2 = 200/2 = 100 N.",
    tags: ["Acceleration Due to Gravity", "Depth Variation"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 6: Gravitation',
    chapter: 'gravitation',
    year: 2017,
    question: "The acceleration due to gravity at a height 1 km above the earth is the same as at a depth d below the surface of earth. Then (NEET 2017)",
    options: ["d = 1 km", "d = 3/2 km", "d = 2 km", "d = 1/2 km"],
    correctAnswer: 2,
    explanation: "For small variations, g_h = g(1 - 2h/R) and g_d = g(1 - d/R). Equating them gives 1 - 2h/R = 1 - d/R => d = 2h. Given h = 1 km, d = 2 km.",
    tags: ["Acceleration Due to Gravity"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 6: Gravitation',
    chapter: 'gravitation',
    year: 2016,
    question: "Starting from the centre of the earth having radius R, the variation of g (acceleration due to gravity) is shown by (NEET-II 2016)",
    options: [
      "linear decrease then sharp drop",
      "linear increase from zero inside, then 1/r² outside",
      "constant inside, flat outside",
      "parabola inside"
    ],
    correctAnswer: 1,
    explanation: "Inside the earth, g ∝ r (a straight line passing through origin). Outside the earth, g ∝ 1/r² (curving downwards from R).",
    tags: ["Acceleration Due to Gravity", "Graphs"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 6: Gravitation',
    chapter: 'gravitation',
    year: 2012,
    question: "The height at which the weight of a body becomes 1/16th, its weight on the surface of earth (radius R), is (2012)",
    options: ["5R", "15R", "3R", "4R"],
    correctAnswer: 2,
    explanation: "W_h = W / (1 + h/R)². Since W_h = W/16, (1 + h/R)² = 16 => 1 + h/R = 4 => h/R = 3 => h = 3R.",
    tags: ["Acceleration Due to Gravity", "Height Variation"],
    difficulty: "medium",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 6: Gravitation',
    chapter: 'gravitation',
    year: 2010,
    question: "The dependence of acceleration due to gravity g on the distance r from the centre of the earth, assumed to be a sphere of radius R and of uniform density is as shown in figures. The correct figure is (Mains 2010)",
    options: ["Linear then 1/r² falloff", "Exponential decay", "Constant then drop", "Quadratic growth"],
    correctAnswer: 0,
    explanation: "As explained, g rises linearly with r until the surface, reaching maximum at R, and falls according to Newton's inverse square law beyond R.",
    tags: ["Acceleration Due to Gravity", "Graphs"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 6: Gravitation',
    chapter: 'gravitation',
    year: 2019,
    question: "The work done to raise a mass m from the surface of the earth to a height h, which is equal to the radius of the earth, is (NEET 2019)",
    options: ["3/2 mgR", "mgR", "2mgR", "1/2 mgR"],
    correctAnswer: 3,
    explanation: "ΔU = U_final - U_initial = -GMm/(R+h) - (-GMm/R). Since h = R, ΔU = -GMm/2R + GMm/R = GMm/2R. Replace GM = gR², ΔU = mgR²/2R = ½mgR.",
    tags: ["Gravitational Potential Energy"],
    difficulty: "medium",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 6: Gravitation',
    chapter: 'gravitation',
    year: 2016,
    question: "At what height from the surface of earth the gravitation potential and the value of g are –5.4 × 10⁷ J kg⁻¹ and 6.0 m s⁻² respectively? Take the radius of earth as 6400 km. (NEET-I 2016)",
    options: ["1400 km", "2000 km", "2600 km", "1600 km"],
    correctAnswer: 2,
    explanation: "Potential V = -GM/(R+h). Gravity g_h = GM/(R+h)². Thus V / g_h = -(R+h). Taking magnitude: (5.4×10⁷) / 6 = 0.9×10⁷ m = 9000 km. R+h = 9000 km. h = 9000 - 6400 = 2600 km.",
    tags: ["Gravitational Potential", "Acceleration Due to Gravity"],
    difficulty: "medium",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 6: Gravitation',
    chapter: 'gravitation',
    year: 2013,
    question: "Infinite number of bodies, each of mass 2 kg are situated on x-axis at distances 1 m, 2 m, 4 m, 8 m, ..., respectively, from the origin. The resulting gravitational potential due to this system at the origin will be (NEET 2013)",
    options: ["-4/3 G", "-4 G", "-G", "-8/3 G"],
    correctAnswer: 1,
    explanation: "V = -Σ (GM/r) = -G(2) [1/1 + 1/2 + 1/4 + 1/8 + ...] = -2G [ 1 / (1 - 1/2) ] = -2G(2) = -4G.",
    tags: ["Gravitational Potential", "Infinite Series"],
    difficulty: "medium",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 6: Gravitation',
    chapter: 'gravitation',
    year: 2013,
    question: "A body of mass ‘m’ is taken from the earth’s surface to the height equal to twice the radius (R) of the earth. The change in potential energy of body will be (NEET 2013)",
    options: ["3mgR", "1/3 mgR", "mg×2R", "2/3 mgR"],
    correctAnswer: 3,
    explanation: "ΔU = GMm(1/R - 1/(R+h)). For h = 2R, ΔU = GMm(1/R - 1/3R) = 2/3 GMm/R = 2/3 mgR.",
    tags: ["Gravitational Potential Energy"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  }
];

async function run() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Connected to DB');

    // ONLY clear questions for THIS chapter on the first run
    const delRes = await Question.deleteMany({ chapter: 'gravitation' });
    console.log(`Deleted ${delRes.deletedCount} old questions.`);

    const insRes = await Question.insertMany(questionsToSeed);
    console.log(`Successfully seeded ${insRes.length} PYQs for part 1 of Gravitation.`);

    mongoose.connection.close();
  } catch (e) {
    console.error(e);
    mongoose.connection.close();
  }
}

run();
