import mongoose from 'mongoose';
import Question from './models/Question.js';
import 'dotenv/config';

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/neet';

const questionsToSeed = [
  {
    subject: 'physics',
    unit: 'Unit 8: Thermodynamics',
    chapter: 'thermodynamics',
    year: 2013,
    question: "When 5 litres of a gas mixture of methane and propane is perfectly combusted at 0°C and 1 atmosphere, 16 litres of oxygen at the same temperature and pressure is consumed. The amount of heat released from this combustion in kJ (ΔH_comb (CH₄) = 890 kJ mol⁻¹, ΔH_comb (C₃H₈) = 2220 kJ mol⁻¹) is (Karnataka NEET 2013)",
    options: ["38", "317", "477", "32"],
    correctAnswer: 1,
    explanation: "Volume is proportional to moles at constant T and P. CH₄ + 2O₂ → CO₂ + 2H₂O. C₃H₈ + 5O₂ → 3CO₂ + 4H₂O. Let v be vol of CH₄, (5-v) be vol of C₃H₈. Oxygen used = 2v + 5(5-v) = 16 => 2v + 25 - 5v = 16 => 3v = 9 => v = 3 L CH₄ and 2 L C₃H₈. Heat = [3 * 890 + 2 * 2220] / 22.4 = (2670 + 4440) / 22.4 = 7110 / 22.4 = 317 kJ.",
    tags: ["Heat of Combustion", "Gas Laws"],
    difficulty: "hard",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 8: Thermodynamics',
    chapter: 'thermodynamics',
    year: 2011,
    question: "Enthalpy change for the reaction, 4H(g) → 2H₂(g) is -869.6 kJ. The dissociation energy of H – H bond is (2011)",
    options: ["- 434.8 kJ", "- 869.6 kJ", "+ 434.8 kJ", "+ 217.4 kJ"],
    correctAnswer: 2,
    explanation: "The given reaction is the formation of 2 moles of H-H bonds. To break 2 moles of H₂ into 4H, the energy is +869.6 kJ. For one mole of H-H bond, dissociation energy = 869.6 / 2 = 434.8 kJ.",
    tags: ["Bond Dissociation Energy"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 8: Thermodynamics',
    chapter: 'thermodynamics',
    year: 2009,
    question: "From the following bond energies: H—H bond energy: 431.37 kJ mol⁻¹, C=C bond energy: 606.10 kJ mol⁻¹, C—C bond energy: 336.49 kJ mol⁻¹, C—H bond energy: 410.50 kJ mol⁻¹. Enthalpy for the reaction, C₂H₄ + H₂ → C₂H₆ will be (2009)",
    options: ["- 243.6 kJ mol⁻¹", "- 120.0 kJ mol⁻¹", "553.0 kJ mol⁻¹", "1523.6 kJ mol⁻¹"],
    correctAnswer: 1,
    explanation: "ΔH = Σ(Bond energy of reactants) - Σ(Bond energy of products). Reactants: 1 C=C, 4 C-H, 1 H-H = 606.10 + 4(410.50) + 431.37 = 2679.47 kJ. Products: 1 C-C, 6 C-H = 336.49 + 6(410.50) = 2799.49 kJ. ΔH = 2679.47 - 2799.49 = -120.02 kJ mol⁻¹.",
    tags: ["Bond Energy", "Reaction Enthalpy"],
    difficulty: "medium",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 8: Thermodynamics',
    chapter: 'thermodynamics',
    year: 2008,
    question: "Bond dissociation enthalpy of H₂, Cl₂ and HCl are 434, 242 and 431 kJ mol⁻¹ respectively. Enthalpy of formation of HCl is (2008)",
    options: ["-93 kJ mol⁻¹", "245 kJ mol⁻¹", "93 kJ mol⁻¹", "-245 kJ mol⁻¹"],
    correctAnswer: 0,
    explanation: "Formation of HCl: 1/2 H₂ + 1/2 Cl₂ → HCl. ΔH = [1/2(434) + 1/2(242)] - 431 = [217 + 121] - 431 = 338 - 431 = -93 kJ mol⁻¹.",
    tags: ["Standard Enthalpy of Formation", "Bond Energy"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 8: Thermodynamics',
    chapter: 'thermodynamics',
    year: 2007,
    question: "Consider the following reactions:\n(i) H⁺(aq) + OH⁻(aq) = H₂O(l) , ΔH = -X₁ kJ mol⁻¹\n(ii) H₂(g) + 1/2 O₂(g) = H₂O(l) , ΔH = -X₂ kJ mol⁻¹\n(iii) CO₂(g) + H₂(g) = CO(g) + H₂O(l) , ΔH = -X₃ kJ mol⁻¹\n(iv) C₂H₂(g) + 5/2 O₂(g) = 2CO₂(g) + H₂O(l) , ΔH = +X₄ kJ mol⁻¹\nEnthalpy of formation of H₂O(l) is (2007)",
    options: ["+X₃ kJ mol⁻¹", "-X₄ kJ mol⁻¹", "+X₁ kJ mol⁻¹", "-X₂ kJ mol⁻¹"],
    correctAnswer: 3,
    explanation: "The standard enthalpy of formation is the enthalpy change when one mole of a compound is formed from its elements in their standard states. Reaction (ii) perfectly represents this process for H₂O(l). Thus, ΔH_f = -X₂ kJ mol⁻¹.",
    tags: ["Enthalpy of Formation"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 8: Thermodynamics',
    chapter: 'thermodynamics',
    year: 2007,
    question: "Given that bond energies of H–H and Cl–Cl are 430 kJ mol⁻¹ and 240 kJ mol⁻¹ respectively and ΔH_f for HCl is -90 kJ mol⁻¹, bond enthalpy of HCl is (2007)",
    options: ["380 kJ mol⁻¹", "425 kJ mol⁻¹", "245 kJ mol⁻¹", "290 kJ mol⁻¹"],
    correctAnswer: 1,
    explanation: "Formation: 1/2 H₂ + 1/2 Cl₂ → HCl, ΔH_f = -90. ΔH_f = [1/2 BE(H₂) + 1/2 BE(Cl₂)] - BE(HCl). -90 = [1/2(430) + 1/2(240)] - BE(HCl) = [215 + 120] - BE(HCl). -90 = 335 - BE(HCl) => BE(HCl) = 335 + 90 = 425 kJ mol⁻¹.",
    tags: ["Bond Energy", "Enthalpy of Formation"],
    difficulty: "medium",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 8: Thermodynamics',
    chapter: 'thermodynamics',
    year: 2005,
    question: "The absolute enthalpy of neutralisation of the reaction: MgO(s) + 2HCl(aq) → MgCl₂(aq) + H₂O(l) will be (2005)",
    options: [
      "-57.33 kJ mol⁻¹",
      "greater than -57.33 kJ mol⁻¹",
      "less than -57.33 kJ mol⁻¹",
      "57.33 kJ mol⁻¹"
    ],
    correctAnswer: 2,
    explanation: "The neutralization of a strong acid with a strong base releases 57.33 kJ/mol. MgO is a weak solid base that first requires energy for dissolution/dissociation, effectively consuming some heat. Wait, official key says 'less than -57.33 kJ mol⁻¹' meaning the magnitude of heat released is less (i.e. algebraic value is greater like -50). Let's review: 'less than -57.33' normally strictly means -58, -60. Wait. If heat of neutralization is -57.33, and some heat is absorbed, net ΔH will be -50. -50 is numerically strictly GREATER than -57.33. But the official key often uses 'less than' intuitively to mean 'less heat is evolved' (magnitude). The stated true chemistry answer key is (c) less than -57.33 kJ mol-1 strictly according to the paper source.",
    tags: ["Enthalpy of Neutralization"],
    difficulty: "hard",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 8: Thermodynamics',
    chapter: 'thermodynamics',
    year: 2004,
    question: "If the bond energies of H–H, Br–Br, and H–Br are 433, 192 and 364 kJ mol⁻¹ respectively, the ΔH° for the reaction H₂(g) + Br₂(g) → 2HBr(g) is (2004)",
    options: ["-261 kJ", "+103 kJ", "+261 kJ", "-103 kJ"],
    correctAnswer: 3,
    explanation: "ΔH = Σ(Bond energy of reactants) - Σ(Bond energy of products) = [BE(H₂) + BE(Br₂)] - 2*BE(HBr) = [433 + 192] - 2(364) = 625 - 728 = -103 kJ.",
    tags: ["Bond Energy", "Reaction Enthalpy"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 8: Thermodynamics',
    chapter: 'thermodynamics',
    year: 2020,
    question: "For the reaction, 2Cl(g) → Cl₂(g), the correct option is (NEET 2020)",
    options: [
      "ΔrH > 0 and ΔrS > 0",
      "ΔrH > 0 and ΔrS < 0",
      "ΔrH < 0 and ΔrS > 0",
      "ΔrH < 0 and ΔrS < 0"
    ],
    correctAnswer: 3,
    explanation: "Bond formation releases energy, so ΔH < 0 (exothermic). Two atoms combine into one molecule, reducing the number of gaseous particles, so randomness decreases, making ΔS < 0.",
    tags: ["Entropy", "Enthalpy"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 8: Thermodynamics',
    chapter: 'thermodynamics',
    year: 2019,
    question: "In which case change in entropy is negative? (NEET 2019)",
    options: [
      "2H(g) → H₂(g)",
      "Evaporation of water",
      "Expansion of a gas at constant temperature",
      "Sublimation of solid to gas"
    ],
    correctAnswer: 0,
    explanation: "Entropy decreases when a system becomes more ordered. In 2H(g) → H₂(g), two gaseous atoms combine to form a single gaseous molecule, reducing disorder (ΔS < 0). The other processes all increase disorder.",
    tags: ["Entropy Changes"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 8: Thermodynamics',
    chapter: 'thermodynamics',
    year: 2017,
    question: "For a given reaction, ΔH = 35.5 kJ mol⁻¹ and ΔS = 83.6 J K⁻¹ mol⁻¹. The reaction is spontaneous at (Assume that ΔH and ΔS do not vary with temperature.) (NEET 2017)",
    options: [
      "T > 425 K",
      "all temperatures",
      "T > 298 K",
      "T < 425 K"
    ],
    correctAnswer: 0,
    explanation: "For a reaction to be spontaneous, ΔG < 0. Since ΔG = ΔH - TΔS, we need ΔH < TΔS, or T > ΔH/ΔS. T > (35500 J/mol) / (83.6 J/K mol) = 424.6 K. Therefore, spontaneous at T > 425 K.",
    tags: ["Spontaneity", "Gibbs Free Energy"],
    difficulty: "medium",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 8: Thermodynamics',
    chapter: 'thermodynamics',
    year: 2016,
    question: "For a sample of perfect gas when its pressure is changed isothermally from p_i to p_f, the entropy change is given by (NEET-II 2016)",
    options: [
      "ΔS = nR ln(p_f/p_i)",
      "ΔS = nR ln(p_i/p_f)",
      "ΔS = nRT ln(p_f/p_i)",
      "ΔS = RT ln(p_i/p_f)"
    ],
    correctAnswer: 1,
    explanation: "Isothermal process: ΔS = nR ln(V_f/V_i). By Boyle's law, V_f/V_i = p_i/p_f. Therefore, ΔS = nR ln(p_i/p_f).",
    tags: ["Entropy", "Isothermal Process"],
    difficulty: "medium",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 8: Thermodynamics',
    chapter: 'thermodynamics',
    year: 2016,
    question: "The correct thermodynamic conditions for the spontaneous reaction at all temperatures is (NEET-I 2016)",
    options: [
      "ΔH < 0 and ΔS > 0",
      "ΔH < 0 and ΔS < 0",
      "ΔH < 0 and ΔS = 0",
      "ΔH > 0 and ΔS < 0"
    ],
    correctAnswer: 0,
    explanation: "From ΔG = ΔH - TΔS. For ΔG to be strictly negative at all temperatures natively, ΔH must be negative (exothermic) and ΔS must be positive (increasing disorder).",
    tags: ["Spontaneity", "Gibbs Free Energy"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 8: Thermodynamics',
    chapter: 'thermodynamics',
    year: 2016,
    question: "Consider the following liquid-vapour equilibrium.\nLiquid ⇌ Vapour\nWhich of the following relations is correct? (NEET-I 2016)",
    options: [
      "d ln P / dT² = -ΔH_v / T²",
      "d ln P / dT = ΔH_v / RT²",
      "d ln G / dT² = ΔH_v / RT²",
      "d ln P / dT = -ΔH_v / RT"
    ],
    correctAnswer: 1,
    explanation: "According to the rigorously derived Clausius-Clapeyron equation evaluating liquid-vapor equilibrium, d(ln P) / dT = ΔH_vap / RT².",
    tags: ["Clausius-Clapeyron Equation", "Phase Equilibrium"],
    difficulty: "hard",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 8: Thermodynamics',
    chapter: 'thermodynamics',
    year: 2014,
    question: "Which of the following statements is correct for the spontaneous adsorption of a gas? (2014)",
    options: [
      "ΔS is negative and, therefore ΔH should be highly positive.",
      "ΔS is negative and therefore, ΔH should be highly negative.",
      "ΔS is positive and therefore, ΔH should be negative.",
      "ΔS is positive and therefore, ΔH should also be highly positive."
    ],
    correctAnswer: 1,
    explanation: "Adsorption strictly reduces the randomness of gas molecules (ΔS is negative). For the process to remain decisively spontaneous (ΔG < 0), the accompanying enthalpy change ΔH must be highly negative (highly exothermic) to overwhelmingly compensate for -TΔS.",
    tags: ["Adsorption Thermodynamics", "Spontaneity"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 8: Thermodynamics',
    chapter: 'thermodynamics',
    year: 2014,
    question: "For the reaction, X₂O₄(l) → 2XO₂(g)\nΔU = 2.1 kcal, ΔS = 20 cal K⁻¹ at 300 K\nHence, ΔG is (2014)",
    options: ["2.7 kcal", "- 2.7 kcal", "9.3 kcal", "- 9.3 kcal"],
    correctAnswer: 1,
    explanation: "Δn_g = 2 - 0 = 2. ΔH = ΔU + Δn_g RT = 2100 cal + (2)(2)(300) = 2100 + 1200 = 3300 cal. ΔG = ΔH - TΔS = 3300 - 300(20) = 3300 - 6000 = -2700 cal = -2.7 kcal.",
    tags: ["Gibbs Free Energy", "Internal Energy"],
    difficulty: "medium",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 8: Thermodynamics',
    chapter: 'thermodynamics',
    year: 2013,
    question: "A reaction having equal energies of activation for forward and reverse reactions has (NEET 2013)",
    options: ["ΔH = 0", "ΔH = ΔG = ΔS = 0", "ΔS = 0", "ΔG = 0"],
    correctAnswer: 0,
    explanation: "The enthalpy of reaction is rigorously established as ΔH = E_a(forward) - E_a(reverse). Since they are cleanly equal, ΔH = 0.",
    tags: ["Activation Energy", "Reaction Enthalpy"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 8: Thermodynamics',
    chapter: 'thermodynamics',
    year: 2012,
    question: "In which of the following reactions, standard reaction entropy change (ΔS°) is positive and standard Gibbs energy change (ΔG°) decreases sharply with increasing temperature? (2012)",
    options: [
      "C(graphite) + 1/2 O₂(g) → CO(g)",
      "CO(g) + 1/2 O₂(g) → CO₂(g)",
      "Mg(s) + 1/2 O₂(g) → MgO(s)",
      "1/2 C(graphite) + 1/2 O₂(g) → 1/2 CO₂(g)"
    ],
    correctAnswer: 0,
    explanation: "For C(graphite) + 1/2 O₂(g) → CO(g), Δn_g = 1 - 0.5 = +0.5. Hence ΔS° > 0. Since ΔG° = ΔH° - TΔS°, a explicitly positive ΔS° undeniably ensures ΔG° rapidly drops (decreases natively) as T comprehensively increases.",
    tags: ["Entropy", "Gibbs Temperature Dependence"],
    difficulty: "medium",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 8: Thermodynamics',
    chapter: 'thermodynamics',
    year: 2012,
    question: "The enthalpy of fusion of water is 1.435 kcal/mol. The molar entropy change for the melting of ice at 0°C is (2012)",
    options: [
      "10.52 cal/(mol K)",
      "21.04 cal/(mol K)",
      "5.260 cal/(mol K)",
      "0.526 cal/(mol K)"
    ],
    correctAnswer: 2,
    explanation: "At the freezing/melting point, the process is precisely at equilibrium (ΔG = 0). Thus ΔS_fusion = ΔH_fusion / T_m = 1435 cal / 273 K = 5.256 ≈ 5.260 cal/(mol K).",
    tags: ["Phase Transition", "Entropy of Fusion"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 8: Thermodynamics',
    chapter: 'thermodynamics',
    year: 2011,
    question: "If the enthalpy change for the transition of liquid water to steam is 30 kJ mol⁻¹ at 27°C, the entropy change for the process would be (2011)",
    options: [
      "10 J mol⁻¹ K⁻¹",
      "1.0 J mol⁻¹ K⁻¹",
      "0.1 J mol⁻¹ K⁻¹",
      "100 J mol⁻¹ K⁻¹"
    ],
    correctAnswer: 3,
    explanation: "Assuming strictly equilibrium phase transition, ΔS = ΔH / T = 30000 J mol⁻¹ / 300 K = 100 J K⁻¹ mol⁻¹.",
    tags: ["Phase Transition", "Entropy Conversion"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 8: Thermodynamics',
    chapter: 'thermodynamics',
    year: 2010,
    question: "Standard entropies of X₂, Y₂ and XY₃ are 60, 40 and 50 J K⁻¹ mol⁻¹ respectively. For the reaction 1/2 X₂ + 3/2 Y₂ → XY₃, ΔH = -30 kJ, to be at equilibrium, the temperature should be (2010)",
    options: ["750 K", "1000 K", "1250 K", "500 K"],
    correctAnswer: 0,
    explanation: "ΔS_reaction = Σ S°_products - Σ S°_reactants = 50 - [1/2(60) + 3/2(40)] = 50 - [30 + 60] = 50 - 90 = -40 J/K. At purely equilibrium, ΔG = 0 => T = ΔH / ΔS = -30000 J / -40 J/K = 750 K.",
    tags: ["Equilibrium Temperature", "Gibbs Free Energy"],
    difficulty: "medium",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 8: Thermodynamics',
    chapter: 'thermodynamics',
    year: 2010,
    question: "For vaporization of water at 1 atmospheric pressure, the values of ΔH and ΔS are 40.63 kJ mol⁻¹ and 108.8 J K⁻¹ mol⁻¹, respectively. The temperature when Gibbs’ energy change (ΔG) for this transformation will be zero, is (Mains 2010)",
    options: ["273.4 K", "393.4 K", "373.4 K", "293.4 K"],
    correctAnswer: 2,
    explanation: "When ΔG = 0, T = ΔH / ΔS = 40630 J / 108.8 J/K ≈ 373.4 K.",
    tags: ["Phase Transition", "Equilibrium Temperature"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 8: Thermodynamics',
    chapter: 'thermodynamics',
    year: 2009,
    question: "The values of ΔH and ΔS for the reaction, C(graphite) + CO₂(g) → 2CO(g) are 170 kJ and 170 J K⁻¹, respectively. This reaction will be spontaneous at (2009)",
    options: ["910 K", "1110 K", "510 K", "710 K"],
    correctAnswer: 1,
    explanation: "Equilibrium Temperature T_eq = ΔH / ΔS = 170000 J / 170 J/K = 1000 K. For essentially spontaneity natively, ΔG = ΔH - TΔS < 0, implying T > 1000 K. Consequently, 1110 K is the only perfectly valid option.",
    tags: ["Spontaneity Conditions", "Gibbs Applications"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 8: Thermodynamics',
    chapter: 'thermodynamics',
    year: 2008,
    question: "For the gas phase reaction, PCl₅(g) ⇌ PCl₃(g) + Cl₂(g) which of the following conditions are correct? (2008)",
    options: [
      "ΔH < 0 and ΔS < 0",
      "ΔH > 0 and ΔS < 0",
      "ΔH = 0 and ΔS < 0",
      "ΔH > 0 and ΔS > 0"
    ],
    correctAnswer: 3,
    explanation: "Decomposition universally requires native energy, implying explicitly ΔH > 0 (endothermic). One solid gaseous mole decisively breaks into two exclusively gaseous moles, dramatically increasing chaos, dictating clearly ΔS > 0.",
    tags: ["Theory of Spontaneity", "Enthalpy and Entropy Signs"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  }
];

async function run() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Connected to DB');

    const insRes = await Question.insertMany(questionsToSeed);
    console.log(`Successfully seeded ${insRes.length} PYQs for part 2 of Thermodynamics.`);

    mongoose.connection.close();
  } catch (e) {
    console.error(e);
    mongoose.connection.close();
  }
}

run();
