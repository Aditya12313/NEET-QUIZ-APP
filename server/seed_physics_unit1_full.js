import mongoose from 'mongoose';
import Question from './models/Question.js';
import 'dotenv/config';

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/neet';

const questionsToSeed = [
  {
    subject: 'physics',
    unit: 'Unit 1: Units and Dimensions',
    chapter: 'physics-measurement',
    year: 2017,
    question: "A physical quantity of the dimensions of length that can be formed out of c, G and e²/(4πε₀) is [c is velocity of light, G is the universal constant of gravitation and e is charge] (NEET 2017)",
    options: [
      "(1/c²) [Ge²/(4πε₀)]^(1/2)",
      "c² [Ge²/(4πε₀)]^(1/2)",
      "(1/c²) [e²/(G·4πε₀)]^(1/2)",
      "(1/c²) [Ge²/(4πε₀)]^(1/2)"
    ],
    correctAnswer: 3,
    explanation: "Using dimensional analysis with c, G and e²/(4πε₀), the combination with dimensions of length is (1/c²)[Ge²/(4πε₀)]^(1/2).",
    tags: ["Dimensional Analysis", "Fundamental Constants"],
    difficulty: "hard",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 1: Units and Dimensions',
    chapter: 'physics-measurement',
    year: 2016,
    question: "Planck's constant (h), speed of light in vacuum (c) and Newton's gravitational constant (G) are three fundamental constants. Which of the following combinations of these has the dimension of length? (NEET-II 2016)",
    options: [
      "√(hG)/c^(3/2)",
      "√(hG)/c^(5/2)",
      "√(hc)/G",
      "√(Gc)/h^(3/2)"
    ],
    correctAnswer: 0,
    explanation: "By substituting dimensions of h, G and c, √(hG)/c^(3/2) gives [L].",
    tags: ["Dimensional Analysis", "Planck Length"],
    difficulty: "medium",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 1: Units and Dimensions',
    chapter: 'physics-measurement',
    year: 2015,
    question: "If dimensions of critical velocity v of a liquid flowing through a tube are expressed as [ηˣρʸrᶻ] where η, ρ and r are the coefficient of viscosity of liquid, density of liquid and radius of the tube respectively, then the values of x, y and z are given by (2015)",
    options: [
      "1, 1, -1",
      "1, 1, 1",
      "1, -1, -1",
      "-1, -1, 1"
    ],
    correctAnswer: 2,
    explanation: "Equating dimensions on both sides yields x=1, y=-1, z=-1.",
    tags: ["Dimensional Homogeneity", "Critical Velocity"],
    difficulty: "medium",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 1: Units and Dimensions',
    chapter: 'physics-measurement',
    year: 2015,
    question: "If energy (E), velocity (V) and time (T) are chosen as the fundamental quantities, the dimensional formula of surface tension will be (2015 Cancelled)",
    options: [
      "[EV⁻²T⁻²]",
      "[E²V⁻¹T⁻³]",
      "[EV⁻²T⁻¹]",
      "[EV⁻¹T⁻²]"
    ],
    correctAnswer: 0,
    explanation: "Surface tension = Force/Length. Expressing in terms of E, V, T gives [EV⁻²T⁻²].",
    tags: ["Dimensional Analysis", "New Fundamental Quantities"],
    difficulty: "medium",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 1: Units and Dimensions',
    chapter: 'physics-measurement',
    year: 2014,
    question: "If force (F), velocity (V) and time (T) are taken as fundamental units, then the dimensions of mass are (2014)",
    options: [
      "[FVT⁻¹]",
      "[FVT⁻²]",
      "[FV⁻¹T⁻¹]",
      "[FV⁻¹T]"
    ],
    correctAnswer: 3,
    explanation: "F = ma = m(V/T), so m = FT/V = [FV⁻¹T].",
    tags: ["Dimensional Formula", "New Fundamental Units"],
    difficulty: "medium",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 1: Units and Dimensions',
    chapter: 'physics-measurement',
    year: 2013,
    question: "In an experiment four quantities a, b, c and d are measured with percentage error 1%, 2%, 3% and 4% respectively. Quantity P is calculated as follows P = a³b²/cd. % error in P is (NEET 2013)",
    options: [
      "7%",
      "4%",
      "14%",
      "10%"
    ],
    correctAnswer: 2,
    explanation: "% error = 3(1%) + 2(2%) + 1(3%) + 1(4%) = 3+4+3+4 = 14%.",
    tags: ["Error Analysis", "Percentage Error"],
    difficulty: "medium",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 1: Units and Dimensions',
    chapter: 'physics-measurement',
    year: 2013,
    question: "The pair of quantities having same dimensions is (Karnataka NEET 2013)",
    options: [
      "Impulse and Surface Tension",
      "Angular momentum and Work",
      "Work and Torque",
      "Young's modulus and Energy"
    ],
    correctAnswer: 2,
    explanation: "Work = Force × Displacement = [ML²T⁻²]. Torque = Force × Distance = [ML²T⁻²]. Same dimensions.",
    tags: ["Matching Dimensions"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 1: Units and Dimensions',
    chapter: 'physics-measurement',
    year: 2012,
    question: "The damping force on an oscillator is directly proportional to the velocity. The units of the constant of proportionality are (2012)",
    options: [
      "kg m s⁻¹",
      "kg m s⁻²",
      "kg s⁻¹",
      "kg s"
    ],
    correctAnswer: 2,
    explanation: "F = bv => b = F/v = [MLT⁻²]/[LT⁻¹] = [MT⁻¹] = kg s⁻¹.",
    tags: ["Units", "Damping"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 1: Units and Dimensions',
    chapter: 'physics-measurement',
    year: 2012,
    question: "The dimensions of (μ₀ε₀)⁻¹/² are (Mains 2012, 2011)",
    options: [
      "[L²T⁻¹/²]",
      "[L⁻¹T]",
      "[LT⁻¹]",
      "[LT⁻¹/²]"
    ],
    correctAnswer: 2,
    explanation: "(μ₀ε₀)⁻¹/² = c (speed of light) which has dimensions [LT⁻¹].",
    tags: ["Electromagnetic Constants", "Speed of Light"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 1: Units and Dimensions',
    chapter: 'physics-measurement',
    year: 2011,
    question: "The density of a material in CGS system of units is 4 g cm⁻³. In a system of units in which unit of length is 10 cm and unit of mass is 100 g, the value of density of material will be (Mains 2011)",
    options: [
      "0.04",
      "0.4",
      "40",
      "400"
    ],
    correctAnswer: 2,
    explanation: "n₂ = n₁(M₁/M₂)(L₁/L₂)⁻³ = 4 × (1/100) × (1/10)⁻³ = 4 × 0.01 × 1000 = 40.",
    tags: ["Unit Conversion", "Density"],
    difficulty: "medium",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 1: Units and Dimensions',
    chapter: 'physics-measurement',
    year: 2010,
    question: "The dimension of ½ε₀E², where ε₀ is permittivity of free space and E is electric field, is (2010)",
    options: [
      "[ML²T⁻²]",
      "[ML⁻¹T⁻²]",
      "[ML²T⁻¹]",
      "[MLT⁻¹]"
    ],
    correctAnswer: 1,
    explanation: "½ε₀E² is energy density = Energy/Volume = [ML²T⁻²]/[L³] = [ML⁻¹T⁻²].",
    tags: ["Energy Density", "Permittivity"],
    difficulty: "medium",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 1: Units and Dimensions',
    chapter: 'physics-measurement',
    year: 2010,
    question: "A student measures the distance traversed in free fall of a body, initially at rest, in a given time. He uses this data to estimate g, the acceleration due to gravity. If the maximum percentage errors in measurement of the distance and the time are e₁ and e₂ respectively, the percentage error in the estimation of g is (Mains 2010)",
    options: [
      "e₁ - e₂",
      "e₁ + 2e₂",
      "e₁ + e₂",
      "e₁ - 2e₂"
    ],
    correctAnswer: 1,
    explanation: "s = ½gt² => g = 2s/t². % error in g = Δs/s + 2(Δt/t) = e₁ + 2e₂.",
    tags: ["Error Analysis", "Free Fall"],
    difficulty: "medium",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 1: Units and Dimensions',
    chapter: 'physics-measurement',
    year: 2009,
    question: "If the dimensions of a physical quantity are given by MᵃLᵇTᶜ, then the physical quantity will be (2009)",
    options: [
      "velocity if a = 1, b = 0, c = -1",
      "acceleration if a = 1, b = 1, c = -2",
      "force if a = 0, b = -1, c = -2",
      "pressure if a = 1, b = -1, c = -2"
    ],
    correctAnswer: 3,
    explanation: "Pressure = [ML⁻¹T⁻²] i.e. a=1, b=-1, c=-2.",
    tags: ["Dimensional Formula", "Physical Quantities"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 1: Units and Dimensions',
    chapter: 'physics-measurement',
    year: 2008,
    question: "If the error in the measurement of radius of a sphere is 2%, then the error in the determination of volume of the sphere will be (2008)",
    options: [
      "8%",
      "2%",
      "4%",
      "6%"
    ],
    correctAnswer: 3,
    explanation: "V = (4/3)πr³. % error in V = 3 × 2% = 6%.",
    tags: ["Error Analysis", "Volume"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 1: Units and Dimensions',
    chapter: 'physics-measurement',
    year: 2008,
    question: "Which two of the following five physical parameters have the same dimensions? 1. energy density 2. refractive index 3. dielectric constant 4. Young's modulus 5. magnetic field (2008)",
    options: [
      "1 and 4",
      "1 and 5",
      "2 and 4",
      "3 and 5"
    ],
    correctAnswer: 0,
    explanation: "Energy density = [ML⁻¹T⁻²]. Young's modulus = Stress = [ML⁻¹T⁻²]. Same dimensions.",
    tags: ["Matching Dimensions"],
    difficulty: "medium",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 1: Units and Dimensions',
    chapter: 'physics-measurement',
    year: 2007,
    question: "Dimensions of resistance in an electrical circuit, in terms of dimension of mass M, of length L, of time T and of current I, would be (2007)",
    options: [
      "[ML²T⁻²]",
      "[ML²T⁻¹]",
      "[ML²T⁻³I⁻²]",
      "[ML²T⁻³I⁻¹]"
    ],
    correctAnswer: 2,
    explanation: "R = V/I. V = W/Q = [ML²T⁻²]/[AT] = [ML²T⁻³A⁻¹]. R = [ML²T⁻³A⁻¹]/[A] = [ML²T⁻³I⁻²].",
    tags: ["Dimensional Formula", "Resistance"],
    difficulty: "medium",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 1: Units and Dimensions',
    chapter: 'physics-measurement',
    year: 2006,
    question: "The velocity v of a particle at time t is given by v = at + b/(t+c) where a, b and c are constants. The dimensions of a, b and c are (2006)",
    options: [
      "[L], [LT] and [LT²]",
      "[LT⁻²], [L] and [T]",
      "[L²], [T] and [LT⁻²]",
      "[LT⁻²], [LT] and [L]"
    ],
    correctAnswer: 1,
    explanation: "c is added to t so [c]=[T]. [at]=[v] => [a]=[LT⁻²]. [b/(t+c)]=[LT⁻¹] => [b]=[L].",
    tags: ["Principle of Homogeneity", "Constants"],
    difficulty: "medium",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 1: Units and Dimensions',
    chapter: 'physics-measurement',
    year: 2005,
    question: "The ratio of the dimensions of Planck's constant and that of moment of inertia is the dimensions of (2005)",
    options: [
      "time",
      "frequency",
      "angular momentum",
      "velocity"
    ],
    correctAnswer: 1,
    explanation: "h = [ML²T⁻¹], I = [ML²]. Ratio = [T⁻¹] = frequency.",
    tags: ["Dimensional Ratio", "Planck's Constant"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 1: Units and Dimensions',
    chapter: 'physics-measurement',
    year: 2004,
    question: "The dimensions of universal gravitational constant are (2004, 1992)",
    options: [
      "[M⁻¹L³T⁻²]",
      "[ML²T⁻¹]",
      "[M⁻²L²T⁻¹]",
      "[M⁻¹L²T⁻¹]"
    ],
    correctAnswer: 0,
    explanation: "G = Fr²/(m₁m₂) = [MLT⁻²][L²]/[M²] = [M⁻¹L³T⁻²].",
    tags: ["Dimensional Formula", "Gravitational Constant"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 1: Units and Dimensions',
    chapter: 'physics-measurement',
    year: 2004,
    question: "The unit of permittivity of free space, ε₀, is (2004)",
    options: [
      "coulomb/newton-metre",
      "newton-metre²/coulomb²",
      "coulomb²/newton-metre²",
      "coulomb²/(newton-metre)"
    ],
    correctAnswer: 2,
    explanation: "From Coulomb's law, ε₀ = q₁q₂/(4πFr²) => C²/(N·m²).",
    tags: ["Units", "Permittivity"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 1: Units and Dimensions',
    chapter: 'physics-measurement',
    year: 2001,
    question: "The dimensions of Planck's constant equals to that of (2001)",
    options: [
      "energy",
      "momentum",
      "angular momentum",
      "power"
    ],
    correctAnswer: 2,
    explanation: "h = [ML²T⁻¹]. Angular momentum = mvr = [ML²T⁻¹]. Same dimensions.",
    tags: ["Matching Dimensions", "Planck's Constant"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 1: Units and Dimensions',
    chapter: 'physics-measurement',
    year: 2000,
    question: "Which pair do not have equal dimensions? (2000)",
    options: [
      "Energy and torque",
      "Force and impulse",
      "Angular momentum and Planck constant",
      "Elastic modulus and pressure"
    ],
    correctAnswer: 1,
    explanation: "Force = [MLT⁻²]. Impulse = Force × Time = [MLT⁻¹]. Different dimensions.",
    tags: ["Mismatched Dimensions"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 1: Units and Dimensions',
    chapter: 'physics-measurement',
    year: 1999,
    question: "The dimensional formula of magnetic flux is (1999)",
    options: [
      "[M⁰L⁻²T⁻²A⁻²]",
      "[ML⁰T⁻²A⁻²]",
      "[ML²T⁻²A⁻¹]",
      "[ML²T⁻¹A³]"
    ],
    correctAnswer: 2,
    explanation: "Magnetic flux Φ = BA = [MT⁻²A⁻¹][L²] = [ML²T⁻²A⁻¹].",
    tags: ["Dimensional Formula", "Magnetic Flux"],
    difficulty: "medium",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 1: Units and Dimensions',
    chapter: 'physics-measurement',
    year: 1996,
    question: "An equation is given here (P + a/V²)(V - b) = RT where P = Pressure, V = Volume and θ = Absolute temperature. If a and b are constants, the dimensions of a will be (1996)",
    options: [
      "[ML⁻¹T⁻¹]",
      "[MLT⁻¹]",
      "[ML⁵T⁻²]",
      "[M⁻¹LT²]"
    ],
    correctAnswer: 2,
    explanation: "[a/V²] = [P] => [a] = [P][V²] = [ML⁻¹T⁻²][L³]² = [ML⁵T⁻²].",
    tags: ["Principle of Homogeneity", "Van der Waals"],
    difficulty: "medium",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 1: Units and Dimensions',
    chapter: 'physics-measurement',
    year: 1996,
    question: "The density of a cube is measured by measuring its mass and length of its sides. If the maximum error in the measurement of mass and lengths are 3% and 2% respectively, the maximum error in the measurement of density would be (1996)",
    options: [
      "12%",
      "14%",
      "7%",
      "9%"
    ],
    correctAnswer: 3,
    explanation: "ρ = M/L³. Max error = ΔM/M + 3(ΔL/L) = 3% + 3(2%) = 9%.",
    tags: ["Error Analysis", "Density"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 1: Units and Dimensions',
    chapter: 'physics-measurement',
    year: 1996,
    question: "The dimensions of impulse are equal to that of (1996)",
    options: [
      "pressure",
      "linear momentum",
      "force",
      "angular momentum"
    ],
    correctAnswer: 1,
    explanation: "Impulse = FΔt = [MLT⁻²][T] = [MLT⁻¹] = linear momentum.",
    tags: ["Matching Dimensions", "Impulse"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 1: Units and Dimensions',
    chapter: 'physics-measurement',
    year: 1996,
    question: "Which of the following dimensions will be the same as that of time? (1996)",
    options: [
      "L/R",
      "C/L",
      "LC",
      "R/L"
    ],
    correctAnswer: 0,
    explanation: "L/R is the time constant of an LR circuit and has dimensions of time.",
    tags: ["Time Constant", "Circuits"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 1: Units and Dimensions',
    chapter: 'physics-measurement',
    year: 1995,
    question: "Which of the following is a dimensional constant? (1995)",
    options: [
      "Relative density",
      "Gravitational constant",
      "Refractive index",
      "Poisson ratio"
    ],
    correctAnswer: 1,
    explanation: "Gravitational constant G has dimensions [M⁻¹L³T⁻²]. Others are dimensionless.",
    tags: ["Dimensional Constants"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 1: Units and Dimensions',
    chapter: 'physics-measurement',
    year: 1995,
    question: "The dimensions of RC is (1995)",
    options: [
      "square of time",
      "square of inverse time",
      "time",
      "inverse time"
    ],
    correctAnswer: 2,
    explanation: "RC is the time constant of an RC circuit and has dimensions of time.",
    tags: ["Time Constant", "RC Circuit"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 1: Units and Dimensions',
    chapter: 'physics-measurement',
    year: 1995,
    question: "Percentage errors in the measurement of mass and speed are 2% and 3% respectively. The error in the estimate of kinetic energy obtained by measuring mass and speed will be (1995)",
    options: [
      "8%",
      "2%",
      "12%",
      "10%"
    ],
    correctAnswer: 0,
    explanation: "KE = ½mv². % error = Δm/m + 2(Δv/v) = 2% + 2(3%) = 8%.",
    tags: ["Error Analysis", "Kinetic Energy"],
    difficulty: "medium",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 1: Units and Dimensions',
    chapter: 'physics-measurement',
    year: 1994,
    question: "Which of the following has the dimensions of pressure? (1994, 90)",
    options: [
      "[MLT⁻²]",
      "[ML⁻¹T⁻²]",
      "[ML²T⁻²]",
      "[ML⁻²]"
    ],
    correctAnswer: 1,
    explanation: "Pressure = Force/Area = [MLT⁻²]/[L²] = [ML⁻¹T⁻²].",
    tags: ["Dimensional Formula", "Pressure"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 1: Units and Dimensions',
    chapter: 'physics-measurement',
    year: 1993,
    question: "Turpentine oil is flowing through a tube of length l and radius r. The pressure difference between the two ends of the tube is P. The viscosity of oil is given by η = P(r² - x²)/(4vl) where v is the velocity of oil at a distance x from the axis of the tube. The dimensions of η are (1993)",
    options: [
      "[M⁰L⁰T⁰]",
      "[MLT⁻¹]",
      "[ML²T⁻²]",
      "[ML⁻¹T⁻¹]"
    ],
    correctAnswer: 3,
    explanation: "η = [ML⁻¹T⁻²][L²]/([LT⁻¹][L]) = [ML⁻¹T⁻¹].",
    tags: ["Viscosity", "Dimensional Formula"],
    difficulty: "medium",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 1: Units and Dimensions',
    chapter: 'physics-measurement',
    year: 1993,
    question: "The time dependence of a physical quantity p is given by p = p₀ exp(-αt²), where α is a constant and t is the time. The constant α (1993)",
    options: [
      "is dimensionless",
      "has dimensions [T⁻²]",
      "has dimensions [T²]",
      "has dimensions of p"
    ],
    correctAnswer: 1,
    explanation: "Argument of exponential must be dimensionless. [αt²] = dimensionless => [α] = [T⁻²].",
    tags: ["Exponential Functions", "Homogeneity"],
    difficulty: "medium",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 1: Units and Dimensions',
    chapter: 'physics-measurement',
    year: 1992,
    question: "P represents radiation pressure, c represents speed of light and S represents radiation energy striking per unit area per sec. The non zero integers x, y, z such that PˣSʸcᶻ is dimensionless are (1992)",
    options: [
      "x=1, y=1, z=1",
      "x=-1, y=1, z=1",
      "x=1, y=-1, z=1",
      "x=1, y=1, z=-1"
    ],
    correctAnswer: 2,
    explanation: "P=[ML⁻¹T⁻²], S=[MT⁻³], c=[LT⁻¹]. x=1, y=-1, z=1 makes PˣSʸcᶻ dimensionless.",
    tags: ["Dimensional Analysis", "Radiation"],
    difficulty: "hard",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 1: Units and Dimensions',
    chapter: 'physics-measurement',
    year: 1991,
    question: "A certain body weighs 22.42 g and has a measured volume of 4.7 cc. The possible error in the measurement of mass and volume are 0.01 g and 0.1 cc. Then maximum error in the density will be (1991)",
    options: [
      "22%",
      "2%",
      "0.2%",
      "0.02%"
    ],
    correctAnswer: 1,
    explanation: "% error = (0.01/22.42)×100 + (0.1/4.7)×100 ≈ 0.04% + 2.13% ≈ 2%.",
    tags: ["Error Analysis", "Density"],
    difficulty: "medium",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 1: Units and Dimensions',
    chapter: 'physics-measurement',
    year: 1991,
    question: "The dimensional formula of permeability of free space μ₀ is (1991)",
    options: [
      "[MLT⁻²A⁻²]",
      "[M⁰L²T]",
      "[M⁰LT⁻¹A²]",
      "none of these"
    ],
    correctAnswer: 0,
    explanation: "From F/l = μ₀I₁I₂/(2πr), μ₀ = [MLT⁻²]/[A²] = [MLT⁻²A⁻²].",
    tags: ["Permeability", "Dimensional Formula"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 1: Units and Dimensions',
    chapter: 'physics-measurement',
    year: 1990,
    question: "The frequency of vibration f of a mass m suspended from a spring of spring constant k is given by a relation f = cmˣkʸ where c is a dimensionless constant. The values of x and y are (1990)",
    options: [
      "x = 1/2, y = 1/2",
      "x = -1/2, y = -1/2",
      "x = 1/2, y = -1/2",
      "x = -1/2, y = 1/2"
    ],
    correctAnswer: 3,
    explanation: "[T⁻¹] = [M]ˣ[MT⁻²]ʸ. Solving: x+y=0, -2y=-1 => y=1/2, x=-1/2.",
    tags: ["Dimensional Analysis", "Spring"],
    difficulty: "medium",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 1: Units and Dimensions',
    chapter: 'physics-measurement',
    year: 1990,
    question: "According to Newton, the viscous force acting between liquid layers of area A and velocity gradient Δv/Δz is given by F = -ηAΔv/Δz where η is constant called coefficient of viscosity. The dimensional formula of η is (1990)",
    options: [
      "[ML⁻²T⁻²]",
      "[M⁰L⁰T⁰]",
      "[ML²T⁻²]",
      "[ML⁻¹T⁻¹]"
    ],
    correctAnswer: 3,
    explanation: "η = F/(A × velocity gradient) = [MLT⁻²]/([L²][T⁻¹]) = [ML⁻¹T⁻¹].",
    tags: ["Viscosity", "Newton's Law"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 1: Units and Dimensions',
    chapter: 'physics-measurement',
    year: 1989,
    question: "If x = at + bt², where x is the distance travelled by the body in kilometers while t is the time in seconds, then the units of b is (1989)",
    options: [
      "km/s",
      "km s",
      "km/s²",
      "km s²"
    ],
    correctAnswer: 2,
    explanation: "[bt²] = [x] => [b] = [x]/[t²] = km/s².",
    tags: ["Units", "Homogeneity"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 1: Units and Dimensions',
    chapter: 'physics-measurement',
    year: 1989,
    question: "Of the following quantities, which one has dimensions different from the remaining three? (1989)",
    options: [
      "Energy per unit volume",
      "Force per unit area",
      "Product of voltage and charge per unit volume",
      "Angular momentum"
    ],
    correctAnswer: 3,
    explanation: "A, B, C all have dimensions of pressure [ML⁻¹T⁻²]. Angular momentum = [ML²T⁻¹].",
    tags: ["Mismatched Dimensions"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 1: Units and Dimensions',
    chapter: 'physics-measurement',
    year: 1989,
    question: "Dimensional formula of self inductance is (1989)",
    options: [
      "[MLT⁻²A⁻²]",
      "[ML²T⁻¹A⁻²]",
      "[ML²T⁻²A⁻²]",
      "[ML²T⁻²A⁻¹]"
    ],
    correctAnswer: 2,
    explanation: "Energy = ½LI² => L = E/I² = [ML²T⁻²]/[A²] = [ML²T⁻²A⁻²].",
    tags: ["Self Inductance", "Dimensional Formula"],
    difficulty: "medium",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 1: Units and Dimensions',
    chapter: 'physics-measurement',
    year: 1989,
    question: "The dimensional formula of torque is (1989)",
    options: [
      "[ML²T⁻²]",
      "[MLT⁻²]",
      "[ML⁻¹T⁻²]",
      "[ML⁻²T⁻²]"
    ],
    correctAnswer: 0,
    explanation: "Torque = r × F = [L][MLT⁻²] = [ML²T⁻²].",
    tags: ["Torque", "Dimensional Formula"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 1: Units and Dimensions',
    chapter: 'physics-measurement',
    year: 1988,
    question: "If C and R denote capacitance and resistance, the dimensional formula of CR is (1988)",
    options: [
      "[M⁰L⁰T]",
      "[M⁰L⁰T⁰]",
      "[M⁰L⁰T⁻¹]",
      "not expressible in terms of MLT"
    ],
    correctAnswer: 0,
    explanation: "CR is the time constant of an RC circuit = [T].",
    tags: ["Time Constant", "RC Circuit"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 1: Units and Dimensions',
    chapter: 'physics-measurement',
    year: 1988,
    question: "The dimensional formula of angular momentum is (1988)",
    options: [
      "[ML²T⁻²]",
      "[ML⁻²T⁻¹]",
      "[MLT⁻¹]",
      "[ML²T⁻¹]"
    ],
    correctAnswer: 3,
    explanation: "Angular momentum L = mvr = [M][LT⁻¹][L] = [ML²T⁻¹].",
    tags: ["Angular Momentum", "Dimensional Formula"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  }
];

async function run() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Connected to DB');

    const delRes = await Question.deleteMany({ chapter: 'physics-measurement' });
    console.log(`Deleted ${delRes.deletedCount} old questions.`);

    const insRes = await Question.insertMany(questionsToSeed);
    console.log(`Successfully seeded ${insRes.length} PYQs for physics-measurement (Units and Measurement).`);

    mongoose.connection.close();
  } catch (e) {
    console.error(e);
    mongoose.connection.close();
  }
}

run();
