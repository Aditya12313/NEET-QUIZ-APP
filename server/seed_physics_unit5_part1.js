import mongoose from 'mongoose';
import Question from './models/Question.js';
import 'dotenv/config';

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/neet';

const questionsToSeed = [
  {
    subject: 'physics', unit: 'Unit 5: Properties of Matter', chapter: 'properties-of-matter', year: 0,
    question: "The total radiant energy per unit area, normal to the direction of incidence, received at a distance R from the centre of a star of radius r, whose outer surface radiates as a black body at a temperature T K is given by: (sigma is Stefan's constant)",
    options: ["(r^2 T^4 sigma) / R^2", "(r^2 T^4 sigma pi) / r^4", "(r^4 T^4 sigma) / r^4", "(r^2 T^4 sigma pi) / R^2"],
    correctAnswer: 0, explanation: "Total power radiated = (4 pi r^2) * sigma * T^4. Radiant energy per unit area at distance R (intensity) = Power / (4 pi R^2) = (4 pi r^2 sigma T^4) / (4 pi R^2) = (r^2 / R^2) sigma T^4.", tags: ["Thermal Radiation"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 5: Properties of Matter', chapter: 'properties-of-matter', year: 0,
    question: "Three rods of same dimensions arranged as shown have thermal conductivities K1, K2 and K3. P and Q at different temperatures, heat flows at same rate along PRQ and PQ. Then",
    options: ["K3 = 1/2(K1 + K2)", "K3 = K1 + K2", "K3 = (K1 K2) / (K1 + K2)", "K3 = -2(K1 + K2)"],
    correctAnswer: 2, explanation: "Heat flows through PR and RQ in series, and through PQ in parallel with PRQ. For same rate along path PRQ and PQ: H_PRQ = H_PQ. Equivalent conductivity of PRQ path: length is 2L, area A. K_eq for series = 2K1K2 / (K1 + K2). To have same heat rate as PQ (length L), (K_eq * A * deltaT) / (2L) = (K3 * A * deltaT) / L. So K3 = K_eq / 2 = K1K2 / (K1 + K2).", tags: ["Heat Conduction"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 5: Properties of Matter', chapter: 'properties-of-matter', year: 0,
    question: "The sprinkling of water slightly reduces the temperature of a closed room because",
    options: ["temperature of water is less than that of the room", "specific heat of water is high", "water has large latent heat of vaporisation", "water is a bad conductor of heat"],
    correctAnswer: 2, explanation: "Water evaporation requires extraction of latent heat from the room air, thus reducing its temperature.", tags: ["Latent Heat"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 5: Properties of Matter', chapter: 'properties-of-matter', year: 0,
    question: "The value of molar heat capacity at constant temperature is",
    options: ["zero", "infinity", "unity", "4.2"],
    correctAnswer: 1, explanation: "At constant temperature (isothermal), dT = 0. Molar heat capacity C = dQ / (n dT) = dQ / 0 = infinity.", tags: ["Heat Capacity"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 5: Properties of Matter', chapter: 'properties-of-matter', year: 0,
    question: "Specific heat capacity of metal is C = 32(T/400)^3 kJ/kg K. A 100g vessel of this metal cooled from 20K to 4K. Amount of work required to cool is",
    options: ["greater than 0.148 kJ", "between 0.148 kJ and 0.028 kJ", "less than 0.028 kJ", "equal to 0.002 kJ"],
    correctAnswer: 3, explanation: "Re-evaluated work from heat extracted: Q = integral(mCdT) from 4 to 20 K. mass = 0.1 kg. Q = 0.1 * 32/400^3 * [T^4/4] from 4 to 20 = 0.1 * 32 / (64x10^6) * (20^4 - 4^4)/4 approx 0.002 kJ. Thus equal to 0.002 kJ.", tags: ["Thermodynamics"], difficulty: "hard", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 5: Properties of Matter', chapter: 'properties-of-matter', year: 0,
    question: "Emissive power of black body (T=300K) is 100 W/m^2. Body B of area A=10m^2, r=0.3, t=0.5. T=300K. Which is incorrect?",
    options: ["Emissive power of B is 20 W/m^2", "Emissive power of B is 200 W/m^2", "Power emitted by B is 200 Watts", "Emissivity of B is 0.2"],
    correctAnswer: 1, explanation: "Emissivity e = a = 1 - r - t = 1 - 0.3 - 0.5 = 0.2. Emissive power of B = e * (Emissive power of black body) = 0.2 * 100 = 20 W/m^2. So 'Emissive power of B is 200 W/m^2' is incorrect.", tags: ["Radiation"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 5: Properties of Matter', chapter: 'properties-of-matter', year: 0,
    question: "Solid cube and solid sphere of same material have equal surface area. Both at 120 C, then",
    options: ["both cool down at same rate", "cube cools down faster than sphere", "sphere cools down faster than cube", "whichever is having more mass will cool faster"],
    correctAnswer: 1, explanation: "Rate of cooling = (eA sigma (T^4 - T0^4)) / (mc). Since A is equal, the body with smaller mass cools faster. For equal area, sphere has maximum volume, so cube has less volume and less mass. Thus cube cools faster.", tags: ["Newton's Law of Cooling"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 5: Properties of Matter', chapter: 'properties-of-matter', year: 0,
    question: "Density of water at 20 C is 998 kg/m^3 and at 40 C is 992 kg/m^3. Coefficient of volume expansion is",
    options: ["10^-4 / C", "3 x 10^-4 / C", "2 x 10^-4 / C", "6 x 10^-4 / C"],
    correctAnswer: 1, explanation: "gamma = (row1 - row2) / (row2*t2 - row1*t1). Alternatively, delta_V/V = gamma * delta_T. V proportional to 1/density. delta(rho) / rho = gamma delta_T. gamma = (998 - 992) / (995 * 20) approx 6 / 20000 = 3 x 10^-4 / C.", tags: ["Thermal Expansion"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 5: Properties of Matter', chapter: 'properties-of-matter', year: 0,
    question: "Metallic rod length l, cross-section area A heated by t C. Young's modulus E, coefficient of linear expansion alpha. Compressional force required to prevent expansion is",
    options: ["E A alpha t", "E A alpha t / (1 + alpha t)", "E A alpha t / (1 - alpha t)", "E l alpha t"],
    correctAnswer: 0, explanation: "Thermal stress = E * strain = E * (alpha * t). Force = Stress * Area = E * A * alpha * t.", tags: ["Thermal Expansion", "Elasticity"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 5: Properties of Matter', chapter: 'properties-of-matter', year: 0,
    question: "Liquefied oxygen at 1 atm heated from 50K to 300K at constant rate. Graph of Temperature vs time will be",
    options: ["straight line", "increasing curve", "curve with flat regions at phase change", "decreasing curve"],
    correctAnswer: 2, explanation: "When a substance changes phase (liquid to gas), temperature remains constant. Thus, the heating curve will have a horizontal region corresponding to the latent heat of vaporization.", tags: ["Calorimetry"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 5: Properties of Matter', chapter: 'properties-of-matter', year: 0,
    question: "Bar of copper (alpha is 1.5 times iron) and bar of iron of identical lengths and cross-sections heated by same range. Ratio of force developed (Cu to Fe, Y equal) is",
    options: ["3/2", "2/3", "9/4", "4/9"],
    correctAnswer: 0, explanation: "Force F = Y A alpha Delta_t. F is proportional to alpha. F_Cu / F_Fe = alpha_Cu / alpha_Fe = 1.5 = 3/2.", tags: ["Thermal Expansion"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 5: Properties of Matter', chapter: 'properties-of-matter', year: 0,
    question: "Ice falls from height h so it completely melts. Only one-quarter of heat produced is absorbed by ice. h is (L = 3.4 x 10^5 J/kg, g = 10)",
    options: ["34 km", "544 km", "136 km", "68 km"],
    correctAnswer: 2, explanation: "Heat = 1/4 * mg h. This equals mL. 1/4 g h = L => h = 4 L / g = 4 * 3.4 x 10^5 / 10 = 13.6 x 10^4 m = 136 km.", tags: ["Calorimetry"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 5: Properties of Matter', chapter: 'properties-of-matter', year: 0,
    question: "Body 5 kg falls from 20 m and rebounds to 0.2 m. Loss of PE is used by body. Temp rise is? (c = 0.09 cal/g C = 0.09 * 4200 J/kg C = 378 J/kg C)",
    options: ["0 C", "4 C", "8 C", "None of these"],
    correctAnswer: 3, explanation: "Loss in PE = mg(h1 - h2) = 5 * 10 * (20 - 0.2) = 50 * 19.8 = 990 J. Q = m c Delta_T. 990 = 5 * (0.09 * 4200) * Delta_T = 5 * 378 * Delta_T = 1890 * Delta_T. Delta_T = 990 / 1890 approx 0.52 C. None of the options matches.", tags: ["Calorimetry"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 5: Properties of Matter', chapter: 'properties-of-matter', year: 0,
    question: "Two strips thickness t, length l riveted. Expansions alpha1, alpha2. Heated by DeltaT. Bimetallic strip bends to arc of radius",
    options: ["t / ((alpha1 + alpha2) DeltaT)", "t / ((alpha2 - alpha1) DeltaT)", "t (alpha1 - alpha2) DeltaT", "t (alpha2 - alpha1) DeltaT"],
    correctAnswer: 1, explanation: "Radius R = t / ( (alpha2 - alpha1) * DeltaT ).", tags: ["Thermal Expansion"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 5: Properties of Matter', chapter: 'properties-of-matter', year: 0,
    question: "Concentric spheres r1, r2 at T1, T2. Radial rate of flow of heat proportional to",
    options: ["(r1/r2)^n", "(r2-r1)/(r1 r2)", "(r2-r1)", "r1 r2 / (r2 - r1)"],
    correctAnswer: 3, explanation: "H = dQ/dt = (4 pi K (T1-T2) r1 r2) / (r2 - r1). So it is proportional to (r1 r2) / (r2 - r1).", tags: ["Heat Conduction"], difficulty: "medium", verified: true, source: "manual"
  }
];

async function run() {
  try {
    await mongoose.connect(MONGO_URI);
    await Question.deleteMany({ chapter: 'properties-of-matter' });
    await Question.insertMany(questionsToSeed);
    console.log(`Seeded 15 questions for Unit 5 (Part 1).`);
    mongoose.connection.close();
  } catch (e) {
    console.error(e);
    mongoose.connection.close();
  }
}
run();
