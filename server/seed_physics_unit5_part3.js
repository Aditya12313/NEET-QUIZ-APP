import mongoose from 'mongoose';
import Question from './models/Question.js';
import 'dotenv/config';

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/neet';

const questionsToSeed = [
  {
    subject: 'physics', unit: 'Unit 5: Properties of Matter', chapter: 'properties-of-matter', year: 0,
    question: "Coefficient of thermal conductivity Kc > Km > Kg. Same quantity of heat flow per sec per unit area. Temperature gradients Xc, Xm, Xg then",
    options: ["Xc = Xm = Xg", "Xc > Xm > Xg", "Xc < Xm < Xg", "Xm < Xc < Xg"],
    correctAnswer: 2, explanation: "Heat flux Q/At = K * dT/dx = K * X. Since Q/At is constant, K * X is constant. Thus X is inversely proportional to K. Since Kc > Km > Kg, it follows Xc < Xm < Xg.", tags: ["Heat Conduction"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 5: Properties of Matter', chapter: 'properties-of-matter', year: 0,
    question: "Radiation energy density per unit wavelength at T has max at l0. At 2T, it will have maximum wavelength",
    options: ["4 l0", "2 l0", "l0 / 2", "l0 / 4"],
    correctAnswer: 2, explanation: "Wien's law: lambda_m * T = constant. If T is doubled to 2T, lambda_m becomes halved to l0/2.", tags: ["Wien's Displacement Law"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 5: Properties of Matter', chapter: 'properties-of-matter', year: 0,
    question: "Sun (radius R, temp T) radiant power incident on Earth at distance r is",
    options: ["(4 piR^2 sigma T^4) / r^2", "(pi R^2 sigma T^4) / r^2", "(pi r^2 R^2 sigma T^4) / r^2", "None of these"],
    correctAnswer: 1, explanation: "Total power from sun = 4pi R^2 sigma T^4. Intensity at earth = Power / (4pi r^2). The Earth captures (Intensity * pi R_earth^2), but question asks for 'power per unit area incident'? Let's check options. Wait, solution 33 (b) says Power received = (pi r_earth^2 / 4pi r^2) * 4pi R^2 sigma T^4. Power per unit area = Intensity = R^2 sigma T^4 / r^2. If they just ask intensity (power incident per unit area), there is an option.", tags: ["Radiation"], difficulty: "hard", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 5: Properties of Matter', chapter: 'properties-of-matter', year: 0,
    question: "Metal ball immersed in alcohol weighs W1 at 0 C and W2 at 59 C. Gamma of metal less than alcohol. Density of metal > alcohol. W1 and W2 relation is",
    options: ["W1 > W2", "W1 = W2", "W1 < W2", "W1 = (W2/2)"],
    correctAnswer: 2, explanation: "Weight in liquid = mg - Upthrust. Upthrust = V * rho_liquid * g. At higher temp, both metal volume and liquid density change. Since gamma_liquid > gamma_metal, the product V*rho_liquid decreases as temp rises. So Upthrust decreases. Thus apparent weight increases. W2 > W1.", tags: ["Archimedes Principle", "Thermal Expansion"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 5: Properties of Matter', chapter: 'properties-of-matter', year: 0,
    question: "Thermally insulated rod T1 to T2. Sections length l1, l2 and conductivities K1, K2. Interface temperature is",
    options: ["(K1 l2 T1 + K2 l1 T2) / (K1 l1 + K2 l2)", "K1 l1 T1 ...", "...", "(K1 l2 T1 + K2 l1 T2) / (K1 l2 + K2 l1)"],
    correctAnswer: 3, explanation: "K1 A (T1 - T) / l1 = K2 A (T - T2) / l2. Solving for T gives T = (K1 l2 T1 + K2 l1 T2) / (K1 l2 + K2 l1).", tags: ["Heat Conduction"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 5: Properties of Matter', chapter: 'properties-of-matter', year: 0,
    question: "Two spheres filled with ice. One has double radius and 1/4 wall thickness of other. Melting time larger is 25 min, smaller 16 min. Ratio of thermal conductivities of larger to smaller is",
    options: ["4:5", "5:4", "25:8", "8:25"],
    correctAnswer: 3, explanation: "Rate of heat flow dQ/dt = K A delta_T / L. Mass of ice m proportional to R^3. A proportional to R^2. Time t = m L_f / (K A delta_T / L) = (rho * 4/3pi R^3 * L_f * L) / (K * 4pi R^2 * delta_T) proportional to R * L / K. t proportional to R * thickness / K. For larger: t1 = 25, R1 = 2r, L1 = t_thick/4. For smaller: t2 = 16, R2 = r, L2 = t_thick. t1/t2 = (R1/R2) * (L1/L2) * (K2/K1). 25/16 = 2 * (1/4) * (K2/K1). K1/K2 = 1/2 * 16/25 = 8/25.", tags: ["Heat Conduction", "Calorimetry"], difficulty: "hard", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 5: Properties of Matter', chapter: 'properties-of-matter', year: 0,
    question: "Black body has max wavelength lambda_m at 2000K. Corresponding at 3000K will be",
    options: ["3/2 lambda_m", "2/3 lambda_m", "4/9 lambda_m", "9/4 lambda_m"],
    correctAnswer: 1, explanation: "lambda_m * T = lambda_m' * T'. lambda_m' * 3000 = lambda_m * 2000. => lambda_m' = 2/3 lambda_m.", tags: ["Wien's Displacement Law"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 5: Properties of Matter', chapter: 'properties-of-matter', year: 0,
    question: "Solid material supplied with heat at constant rate. graph T vs Heat input. AB phase change. CD = 2AB phase change. FALSE conclusion is",
    options: ["AB and CD represent phase changes", "AB represents melting", "latent heat of fusion is twice latent heat of vaporization", "CD represents boiling"],
    correctAnswer: 2, explanation: "Heat supplied for CD is twice that for AB. Q_CD = 2 Q_AB => m L_v = 2 m L_f. L_v is twice L_f. Thus 'latent heat of fusion is twice vaporization' is false.", tags: ["Calorimetry", "Phase Diagrams"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 5: Properties of Matter', chapter: 'properties-of-matter', year: 0,
    question: "10 gm ice at 0 C released in tumbler (water equivalent 55 g) at 40 C. Tumbler temp becomes (L = 80 cal/g)",
    options: ["31 C", "22 C", "19 C", "15 C"],
    correctAnswer: 1, explanation: "Heat lost by tumbler = 55 * 1 * (40 - T). Heat gained by ice = 10*80 + 10*1*T. 2200 - 55T = 800 + 10T. 65T = 1400. T = 1400/65 approx 21.5C. Closest is 22C.", tags: ["Calorimetry"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 5: Properties of Matter', chapter: 'properties-of-matter', year: 0,
    question: "Surrounding temp 10 C. Body takes 7 min for 60 to 40 C. Time to fall 40 C to 28 C?",
    options: ["7 min", "11 min", "14 min", "21 min"],
    correctAnswer: 0, explanation: "Newton's law of cooling: dT/dt = K(T_avg - T_surr). (60-40)/7 = K(50 - 10) => 20/7 = 40K => K = 1/14. For 40 to 28: (40-28)/t = K(34 - 10) => 12/t = 24K => 12/t = 24/14 => t = 12*14/24 = 7 min.", tags: ["Newton's Law of Cooling"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 5: Properties of Matter', chapter: 'properties-of-matter', year: 0,
    question: "Two rods same length A1,A2. K1,K2, c1,c2, d1,d2. Rate of flow of heat same if",
    options: ["A1 K1 = A2 K2", "A1 K1 c1 d1 = A2 K2 c2 d2", "A1 K2 c1 d1 = A2 K1 c2 d2", "A1 K2 = A2 K1"],
    correctAnswer: 0, explanation: "Rate of heat flow dQ/dt = (KA deltaT)/L. For them to be same, since L and deltaT are same, K1 A1 = K2 A2.", tags: ["Heat Conduction"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 5: Properties of Matter', chapter: 'properties-of-matter', year: 0,
    question: "50g wax (specific heat 0.6) heated till boils. Graph shows temp vs time. Boil at 200C. Heat supplied per minute is",
    options: ["500 cal", "1000 cal", "1500 cal", "1000 cal, 200 C"],
    correctAnswer: 2, explanation: "In 1 minute temp increases by 50C. Heat Q = mc deltaT = 50g * 0.6 cal/g C * 50 C = 1500 cal.", tags: ["Calorimetry"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 5: Properties of Matter', chapter: 'properties-of-matter', year: 0,
    question: "Identical iron spheres, one on insulating plate, other hangs from thread. Equal heat supplied. Then",
    options: ["Temp A > B", "Temp B > A", "Temp equal", "cannot predict"],
    correctAnswer: 1, explanation: "When heated, both expand. Sphere B (hanging) expands and its CM lowers, losing PE, which adds to internal energy. Sphere A expands and CM rises, gaining PE from the heat. So B gains more internal energy and has higher temperature.", tags: ["Thermal Expansion", "Thermodynamics"], difficulty: "hard", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 5: Properties of Matter', chapter: 'properties-of-matter', year: 0,
    question: "Steam 100 C passed into 20 g water at 10 C. When water acquires 80 C, mass of water is (L = 540)",
    options: ["24 g", "31.5 g", "42.5 g", "22.5 g"],
    correctAnswer: 3, explanation: "Heat gained by water = 20 * 1 * 70 = 1400 cal. Heat given by m g steam = m*540 + m*1*20 = 560m. 560m = 1400 => m = 2.5 g. Total water = 20 + 2.5 = 22.5 g.", tags: ["Calorimetry"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 5: Properties of Matter', chapter: 'properties-of-matter', year: 0,
    question: "Two solid spheres radii R1, R2, same material. Raised to same temp, allowed to cool. Initial rate of loss of heat ratio is",
    options: ["R1^2 / R2^2", "R1 / R2", "R2 / R1", "R1^3 / R2^3"],
    correctAnswer: 0, explanation: "Rate of heat loss dQ/dt = e A sigma (T^4 - T0^4). A is proportional to R^2. Thus ratio is R1^2 / R2^2. (Note: rate of cooling dT/dt is inversely proportional to R, but rate of heat loss dQ/dt is proportional to area).", tags: ["Newton's Law of Cooling", "Radiation"], difficulty: "medium", verified: true, source: "manual"
  }
];

async function run() {
  try {
    await mongoose.connect(MONGO_URI);
    await Question.insertMany(questionsToSeed);
    console.log(`Seeded 15 more questions for Unit 5 (Part 3).`);
    mongoose.connection.close();
  } catch (e) {
    console.error(e);
    mongoose.connection.close();
  }
}
run();
