import mongoose from 'mongoose';
import Question from './models/Question.js';
import 'dotenv/config';

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/neet';

const questionsToSeed = [
  {
    subject: 'physics',
    unit: 'Unit 8: Thermodynamics',
    chapter: 'thermodynamics',
    year: 2008,
    question: "Which of the following are not state functions?\n(I) q + w\n(II) q\n(III) w\n(IV) H – TS (2008)",
    options: [
      "(I), (II) and (III)",
      "(II) and (III)",
      "(I) and (IV)",
      "(II), (III) and (IV)"
    ],
    correctAnswer: 1,
    explanation: "q + w = ΔU, which is internal energy (a state function). H - TS = G, which is Gibbs free energy (a state function). Heat (q) and work (w) individually are path functions.",
    tags: ["State Functions", "Path Functions"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 8: Thermodynamics',
    chapter: 'thermodynamics',
    year: 2002,
    question: "In a closed insulated container a liquid is stirred with a paddle to increase the temperature, which of the following is true? (2002)",
    options: [
      "ΔE = W ≠ 0, q = 0",
      "ΔE = W = q ≠ 0",
      "ΔE = 0, W = q ≠ 0",
      "W = 0, ΔE = q ≠ 0"
    ],
    correctAnswer: 0,
    explanation: "Because the container is insulated, there is no heat exchange (q = 0). The paddle does work on the liquid (W ≠ 0), increasing its temperature and internal energy (ΔE = W ≠ 0).",
    tags: ["First Law of Thermodynamics", "Adiabatic Process"],
    difficulty: "medium",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 8: Thermodynamics',
    chapter: 'thermodynamics',
    year: 1996,
    question: "Which of the following is the correct equation? (1996)",
    options: [
      "ΔU = W + Q",
      "ΔU = Q - W",
      "W = ΔU + Q",
      "None of these"
    ],
    correctAnswer: 1,
    explanation: "The standard convention representing the first law of thermodynamics is ΔU = Q - W (where W is work done BY the system) or ΔU = Q + W (if W is work done ON the system). The options given reflect the typical physics formulation ΔU = Q - W.",
    tags: ["First Law of Thermodynamics"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 8: Thermodynamics',
    chapter: 'thermodynamics',
    year: 2020,
    question: "The correct option for free expansion of an ideal gas under adiabatic condition is (NEET 2020)",
    options: [
      "q = 0, ΔT = 0 and w = 0",
      "q = 0, ΔT < 0 and w > 0",
      "q < 0, ΔT = 0 and w = 0",
      "q > 0, ΔT > 0 and w > 0"
    ],
    correctAnswer: 0,
    explanation: "In free expansion, gas expands against a vacuum, so external pressure is zero, hence w = 0. Adiabatic means q = 0. Thus, ΔU = q + w = 0. For an ideal gas, ΔU depends only on temperature, so ΔT = 0.",
    tags: ["Free Expansion", "Adiabatic Process"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 8: Thermodynamics',
    chapter: 'thermodynamics',
    year: 2019,
    question: "Under isothermal conditions, a gas at 300 K expands from 0.1 L to 0.25 L against a constant external pressure of 2 bar. The work done by the gas is [Given that 1 L bar = 100 J] (NEET 2019)",
    options: ["30 J", "-30 J", "5 kJ", "25 J"],
    correctAnswer: 1,
    explanation: "Work done W = -P_ext * ΔV = -2 bar * (0.25 - 0.1) L = -2 * 0.15 L bar = -0.30 L bar. Since 1 L bar = 100 J, W = -0.30 * 100 J = -30 J.",
    tags: ["Work Done", "Isothermal Process"],
    difficulty: "medium",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 8: Thermodynamics',
    chapter: 'thermodynamics',
    year: 2019,
    question: "Reversible expansion of an ideal gas under isothermal and adiabatic conditions are as shown in the figure. AB = Isothermal expansion, AC = Adiabatic expansion. Which of the following options is not correct? (Odisha NEET 2019)",
    options: [
      "S_isothermal > S_adiabatic",
      "T_A = T_B",
      "W_isothermal > W_adiabatic",
      "T_C > T_A"
    ],
    correctAnswer: 3,
    explanation: "For an adiabatic expansion, temperature drops as work is done at the expense of internal energy. Since A is the initial state and C is the final state of the adiabatic expansion, T_C < T_A. Option 'T_C > T_A' is incorrect.",
    tags: ["Isothermal vs Adiabatic", "Thermodynamic Processes"],
    difficulty: "medium",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 8: Thermodynamics',
    chapter: 'thermodynamics',
    year: 2019,
    question: "An ideal gas expands isothermally from 10⁻³ m³ to 10⁻² m³ at 300 K against a constant pressure of 10⁵ N m⁻². The work done on the gas is (Odisha NEET 2019)",
    options: ["+270 kJ", "-900 J", "+900 kJ", "-900 kJ"],
    correctAnswer: 1,
    explanation: "Work done ON the gas W = -P_ext * ΔV = -10⁵ * (10⁻² - 10⁻³) = -10⁵ * (0.01 - 0.001) = -10⁵ * 0.009 = -900 J. Note: the formula from chemistry sign convention is W = -PΔV.",
    tags: ["Work Done", "Constant Pressure"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 8: Thermodynamics',
    chapter: 'thermodynamics',
    year: 2017,
    question: "A gas is allowed to expand in a well insulated container against a constant external pressure of 2.5 atm from an initial volume of 2.50 L to a final volume of 4.50 L. The change in internal energy ΔU of the gas in joules will be (NEET 2017)",
    options: ["-500 J", "-505 J", "+505 J", "1136.25 J"],
    correctAnswer: 1,
    explanation: "Well insulated -> adiabatic -> q = 0. ΔU = q + w = w. Work done w = -P_ext * ΔV = -2.5 atm * (4.50 - 2.50) L = -2.5 * 2.0 = -5.0 L atm. Conversion to Joules: -5.0 * 101.3 J = -506.5 J (approx -505 J based on standard 101.325 conversion).",
    tags: ["Internal Energy", "Adiabatic Process", "Work Done"],
    difficulty: "medium",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 8: Thermodynamics',
    chapter: 'thermodynamics',
    year: 2012,
    question: "Equal volumes of two monatomic gases, A and B at same temperature and pressure are mixed. The ratio of specific heats (Cp/Cv) of the mixture will be (2012)",
    options: ["0.83", "1.50", "3.3", "1.67"],
    correctAnswer: 3,
    explanation: "Mixing two monatomic gases results in a mixture that is still virtually a monatomic gas with 3 degrees of freedom. For a monatomic gas, Cv = 3/2 R and Cp = 5/2 R. The ratio γ = Cp/Cv = 5/3 = 1.67.",
    tags: ["Specific Heat", "Thermodynamics of Gases"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 8: Thermodynamics',
    chapter: 'thermodynamics',
    year: 2011,
    question: "Which of the following is correct option for free expansion of an ideal gas under adiabatic condition? (2011)",
    options: [
      "q = 0, ΔT < 0, w = 0",
      "q < 0, ΔT = 0, w = 0",
      "q = 0, ΔT = 0, w = 0",
      "q = 0, ΔT < 0, w > 0"
    ],
    correctAnswer: 2,
    explanation: "Adiabatic (q = 0). Free expansion (P_ext = 0 so w = 0). Thus ΔU = q + w = 0. Since ΔU = nCvΔT, ΔT is also 0.",
    tags: ["Free Expansion", "Adiabatic Process"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 8: Thermodynamics',
    chapter: 'thermodynamics',
    year: 2010,
    question: "Three moles of an ideal gas expanded spontaneously into vacuum. The work done will be (Mains 2010)",
    options: ["infinite", "3 Joules", "9 Joules", "zero"],
    correctAnswer: 3,
    explanation: "Expansion into vacuum is free expansion. Because external pressure is zero, Work done w = -P_ext * ΔV = 0.",
    tags: ["Free Expansion", "Work Done"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 8: Thermodynamics',
    chapter: 'thermodynamics',
    year: 2006,
    question: "Assume each reaction is carried out in an open container. For which reaction will ΔH = ΔE? (2006)",
    options: [
      "2CO(g) + O₂(g) → 2CO₂(g)",
      "H₂(g) + Br₂(g) → 2HBr(g)",
      "C(s) + 2H₂O(g) → 2H₂(g) + CO₂(g)",
      "PCl₅(g) → PCl₃(g) + Cl₂(g)"
    ],
    correctAnswer: 1,
    explanation: "ΔH = ΔE + Δn_g RT. For ΔH = ΔE, Δn_g must be 0. \n(a) Δn_g = 2 - 3 = -1.\n(b) Δn_g = 2 - 2 = 0.\n(c) Δn_g = (2+1) - 2 = 1.\n(d) Δn_g = (1+1) - 1 = 1.\nOnly reaction (b) has Δn_g = 0.",
    tags: ["Enthalpy", "Internal Energy", "Chemical Thermodynamics"],
    difficulty: "medium",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 8: Thermodynamics',
    chapter: 'thermodynamics',
    year: 2004,
    question: "The work done during the expansion of a gas from a volume of 4 dm³ to 6 dm³ against a constant external pressure of 3 atm is (1 L atm = 101.32 J) (2004)",
    options: ["-6 J", "-608 J", "+304 J", "-304 J"],
    correctAnswer: 1,
    explanation: "W = -P_ext * ΔV = -3 atm * (6 - 4) L = -6 L atm. Using 1 L atm = 101.32 J, W = -6 * 101.32 J = -607.92 J (approx -608 J).",
    tags: ["Work Done", "Constant Pressure Expansion"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 8: Thermodynamics',
    chapter: 'thermodynamics',
    year: 2003,
    question: "For the reaction, C₃H₈(g) + 5O₂(g) → 3CO₂(g) + 4H₂O(l) at constant temperature, ΔH - ΔE is (2003)",
    options: ["+ RT", "-3RT", "+3RT", "-RT"],
    correctAnswer: 1,
    explanation: "ΔH = ΔE + Δn_g RT. The change in gaseous moles Δn_g = n_g(products) - n_g(reactants) = 3 - (1 + 5) = 3 - 6 = -3. Therefore, ΔH - ΔE = -3RT.",
    tags: ["Enthalpy", "First Law in Chemistry"],
    difficulty: "medium",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 8: Thermodynamics',
    chapter: 'thermodynamics',
    year: 2003,
    question: "The molar heat capacity of water at constant pressure, Cp, is 75 J K⁻¹ mol⁻¹. When 1.0 kJ of heat is supplied to 100 g of water which is free to expand, the increase in temperature of water is (2003)",
    options: ["1.2 K", "2.4 K", "4.8 K", "6.6 K"],
    correctAnswer: 1,
    explanation: "Molar mass of water = 18 g/mol. Moles n = 100/18. Heat supplied q = n * Cp * ΔT. Thus, 1000 J = (100/18) * 75 * ΔT. ΔT = (1000 * 18) / (100 * 75) = 180 / 75 = 2.4 K.",
    tags: ["Heat Capacity", "Calorimetry"],
    difficulty: "hard",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 8: Thermodynamics',
    chapter: 'thermodynamics',
    year: 2001,
    question: "When 1 mol of gas is heated at constant volume temperature is raised from 298 to 308 K. Heat supplied to the gas is 500 J. Then which statement is correct? (2001)",
    options: [
      "q = w = 500 J, ΔE = 0",
      "q = ΔE = 500 J, w = 0",
      "q = w = 500 J, ΔE = 0",
      "ΔE = 0, q = w = -500 J"
    ],
    correctAnswer: 1,
    explanation: "Heating at constant volume means ΔV = 0, hence w = 0. Therefore, from ΔE = q + w, we get ΔE = q = 500 J.",
    tags: ["First Law of Thermodynamics", "Isochoric Process"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 8: Thermodynamics',
    chapter: 'thermodynamics',
    year: 2000,
    question: "For the reaction, C₂H₅OH(l) + 3O₂(g) → 2CO₂(g) + 3H₂O(l) which one is true? (2000)",
    options: [
      "ΔH = ΔE - RT",
      "ΔH = ΔE + RT",
      "ΔH = ΔE + 2RT",
      "ΔH = ΔE - 2RT"
    ],
    correctAnswer: 0,
    explanation: "Δn_g = gaseous products - gaseous reactants = 2 - 3 = -1. Therefore, ΔH = ΔE + (-1)RT = ΔE - RT.",
    tags: ["Enthalpy", "First Law in Chemistry"],
    difficulty: "medium",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 8: Thermodynamics',
    chapter: 'thermodynamics',
    year: 1999,
    question: "In an endothermic reaction, the value of ΔH is (1999)",
    options: ["negative", "positive", "zero", "constant"],
    correctAnswer: 1,
    explanation: "By convention, in an endothermic reaction, heat is absorbed by the system from the surroundings, so the enthalpy of the system increases. Thus, ΔH is positive.",
    tags: ["Endothermic Reaction", "Enthalpy"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 8: Thermodynamics',
    chapter: 'thermodynamics',
    year: 1998,
    question: "One mole of an ideal gas at 300 K is expanded isothermally from an initial volume of 1 litre to 10 litres. The ΔE for this process is (R = 2 cal mol⁻¹ K⁻¹) (1998)",
    options: ["1381.1 cal", "zero", "163.7 cal", "9 L atm"],
    correctAnswer: 1,
    explanation: "For an ideal gas, the internal energy (E or U) depends exclusively on temperature. Since process is isothermal, ΔT = 0, hence ΔE = 0.",
    tags: ["Isothermal Process", "Internal Energy"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 8: Thermodynamics',
    chapter: 'thermodynamics',
    year: 1994,
    question: "During isothermal expansion of an ideal gas, its (1994, 1991)",
    options: [
      "internal energy increases",
      "enthalpy decreases",
      "enthalpy remains unaffected",
      "enthalpy reduces to zero"
    ],
    correctAnswer: 2,
    explanation: "For an ideal gas, both Internal Energy (U or E) and Enthalpy (H) depend only on temperature. Since T is constant in an isothermal expansion, enthalpy remains exactly unaffected.",
    tags: ["Isothermal Process", "Enthalpy"],
    difficulty: "medium",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 8: Thermodynamics',
    chapter: 'thermodynamics',
    year: 1991,
    question: "For the reaction, N₂ + 3H₂ → 2NH₃, ΔH = ? (1991)",
    options: ["ΔE + 2RT", "ΔE - 2RT", "ΔH = RT", "ΔE - RT"],
    correctAnswer: 1,
    explanation: "Δn_g = moles of gaseous products - moles of gaseous reactants = 2 - (1 + 3) = 2 - 4 = -2. So ΔH = ΔE + Δn_g RT = ΔE - 2RT.",
    tags: ["Enthalpy", "Internal Energy"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 8: Thermodynamics',
    chapter: 'thermodynamics',
    year: 1990,
    question: "If ΔH is the change in enthalpy and ΔE, the change in internal energy accompanying a gaseous reaction, then (1990)",
    options: [
      "ΔH is always greater than ΔE",
      "ΔH < ΔE only if the number of moles of the products is greater than the number of moles of the reactants",
      "ΔH is always less than ΔE",
      "ΔH < ΔE only if the number of moles of products is less than the number of moles of the reactants."
    ],
    correctAnswer: 3,
    explanation: "ΔH = ΔE + Δn_g RT. For ΔH < ΔE, Δn_g RT must be negative, which rigorously implies Δn_g < 0. This uniquely requires fewer moles of gaseous products than reactants.",
    tags: ["Enthalpy vs Internal Energy"],
    difficulty: "medium",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 8: Thermodynamics',
    chapter: 'thermodynamics',
    year: 2013,
    question: "Three thermochemical equations are given below:\n(i) C(graphite) + O₂(g) → CO₂(g); ΔH° = x kJ mol⁻¹\n(ii) C(graphite) + 1/2 O₂(g) → CO(g); ΔH° = y kJ mol⁻¹\n(iii) CO(g) + 1/2 O₂(g) → CO₂(g); ΔH° = z kJ mol⁻¹\nBased on the above equations, find out which of the relationship given below is correct. (Karnataka NEET 2013)",
    options: ["z = x + y", "x = y + z", "y = 2z - x", "x = y - z"],
    correctAnswer: 1,
    explanation: "Applying Hess's law: Reaction (i) can be inherently separated into two steps: C + 1/2 O₂ -> CO (Reaction ii) followed exclusively by CO + 1/2 O₂ -> CO₂ (Reaction iii). Adding entirely yields (ii) + (iii) = (i). Hence ΔH°_i = ΔH°_ii + ΔH°_iii, leading to x = y + z.",
    tags: ["Hess Law", "Reaction Enthalpy"],
    difficulty: "medium",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 8: Thermodynamics',
    chapter: 'thermodynamics',
    year: 2012,
    question: "Standard enthalpy of vaporisation Δ_vapH° for water at 100°C is 40.66 kJ mol⁻¹. The internal energy of vaporisation of water at 100°C (in kJ mol⁻¹) is (Assume water vapour to behave like an ideal gas) (2012)",
    options: ["+37.56", "-43.76", "+43.76", "+40.66"],
    correctAnswer: 0,
    explanation: "H₂O(l) → H₂O(g). Δn_g = 1 - 0 = 1. ΔH = ΔU + Δn_g RT => 40.66 kJ/mol = ΔU + (1)(8.314 J/Kmol)(373 K). Thus 40.66 = ΔU + 3.101 => ΔU = 40.66 - 3.10 = 37.56 kJ/mol.",
    tags: ["Enthalpy of Vaporization", "Internal Energy"],
    difficulty: "hard",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 8: Thermodynamics',
    chapter: 'thermodynamics',
    year: 2011,
    question: "Consider the following processes:\n1/2 A → B (+150 kJ/mol)\n3B → 2C + D (-125 kJ/mol)\nE + A → 2D (+350 kJ/mol)\nFor B + D → E + 2C, ΔH will be (Mains 2011)",
    options: ["525 kJ/mol", "-175 kJ/mol", "-325 kJ/mol", "325 kJ/mol"],
    correctAnswer: 1,
    explanation: "Target: B + D → E + 2C. \nMultiply eq1 by 2: A → 2B (+300 kJ); Reverse this to get -2B + A terms: 2B → A (-300 kJ). \nReverse eq3: 2D → E + A (-350 kJ). \nEq2: 3B → 2C + D (-125 kJ). \nAdd (2B→A) and (3B→2C+D) and (2D→E+A)... wait. Let's trace accurately. \nTarget: B + D -> E + 2C. \nEq2: 3B -> 2C + D (ΔH = -125).\nReverse Eq3: 2D -> E + A (ΔH = -350).\nAdd them: 3B + D -> E + A + 2C (ΔH = -475). \nWe need to eliminate A. Eq1 gives A -> 2B (ΔH = +300). So A = 2B. \nSubstitute A -> 2B: 3B + D -> E + 2B + 2C. \nSimplify precisely: B + D -> E + 2C. \nTotal ΔH = -475 + 300 = -175 kJ/mol.",
    tags: ["Hess Law", "Complex Reaction Addition"],
    difficulty: "hard",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 8: Thermodynamics',
    chapter: 'thermodynamics',
    year: 2010,
    question: "The following two reactions are known\nFe₂O₃(s) + 3CO(g) → 2Fe(s) + 3CO₂(g) ; ΔH = -26.8 kJ\nFeO(s) + CO(g) → Fe(s) + CO₂(g) ; ΔH = -16.5 kJ\nThe value of ΔH for the following reaction Fe₂O₃(s) + CO(g) → 2FeO(s) + CO₂(g) is (Mains 2010)",
    options: ["+10.3 kJ", "-43.3 kJ", "-10.3 kJ", "+6.2 kJ"],
    correctAnswer: 3,
    explanation: "Eq 1: Fe₂O₃ + 3CO -> 2Fe + 3CO₂ (ΔH = -26.8). \nEq 2: FeO + CO -> Fe + CO₂ (ΔH = -16.5). \nReverse Eq 2 and multiply strictly by 2: 2Fe + 2CO₂ -> 2FeO + 2CO (ΔH = +33.0). \nAdding to Eq 1 exactly yields Fe₂O₃ + CO -> 2FeO + CO₂. \nTotal ΔH = -26.8 + 33.0 = +6.2 kJ.",
    tags: ["Hess Law"],
    difficulty: "medium",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 8: Thermodynamics',
    chapter: 'thermodynamics',
    year: 2003,
    question: "For which one of the following equations is ΔH°_reaction equal to ΔH°_f for the product? (2003)",
    options: [
      "N₂(g) + O₃(g) → N₂O₃(g)",
      "CH₄(g) + 2Cl₂(g) → CH₂Cl₂(l) + 2HCl(g)",
      "Xe(g) + 2F₂(g) → XeF₄(g)",
      "2CO(g) + O₂(g) → 2CO₂(g)"
    ],
    correctAnswer: 2,
    explanation: "Standard heat of formation is decisively defined as the enthalpy change when unequivocally one mole of a highly pure compound is formed safely from its constituent elements strictly in their designated standard states. Xe(g) and F₂(g) are standard states, yielding 1 mole of XeF₄(g).",
    tags: ["Standard Enthalpy of Formation"],
    difficulty: "medium",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 8: Thermodynamics',
    chapter: 'thermodynamics',
    year: 2002,
    question: "Heat of combustion ΔH for C(s), H₂(g) and CH₄(g) are -94, -68 and -213 kcal/mol, then ΔH for C(s) + 2H₂(g) → CH₄(g) is (2002)",
    options: ["-17 kcal", "-111 kcal", "-170 kcal", "-85 kcal"],
    correctAnswer: 0,
    explanation: "ΔH_reaction = Σ ΔH_c(reactants) - Σ ΔH_c(products) = [ΔH_c(C) + 2ΔH_c(H₂)] - ΔH_c(CH₄) = [-94 + 2(-68)] - (-213) = [-94 - 136] + 213 = -230 + 213 = -17 kcal.",
    tags: ["Heat of Combustion", "Hess Law"],
    difficulty: "medium",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 8: Thermodynamics',
    chapter: 'thermodynamics',
    year: 2001,
    question: "Change in enthalpy for reaction, 2H₂O₂(l) → 2H₂O(l) + O₂(g) if heat of formation of H₂O₂(l) and H₂O(l) are -188 and -286 kJ/mol respectively, is (2001)",
    options: ["-196 kJ/mol", "+196 kJ/mol", "+948 kJ/mol", "-948 kJ/mole"],
    correctAnswer: 0,
    explanation: "ΔH_rxn = Σ ΔH_f(products) - Σ ΔH_f(reactants) = [2(-286) + 0] - [2(-188)] = -572 + 376 = -196 kJ/mol.",
    tags: ["Heat of Formation", "Reaction Enthalpy Calculator"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 8: Thermodynamics',
    chapter: 'thermodynamics',
    year: 2001,
    question: "Enthalpy of CH₄ + 1/2 O₂ → CH₃OH is negative. If enthalpy of combustion of CH₄ and CH₃OH are x and y respectively, then which relation is correct? (2001)",
    options: ["x > y", "x < y", "x = y", "x ≥ y"],
    correctAnswer: 0,
    explanation: "ΔH_rxn = ΔH_c(reactants) - ΔH_c(products). Given ΔH_rxn is negative, then ΔH_c(CH₄) - ΔH_c(CH₃OH) < 0 => x (magnitude of heat released) > y. Since combustions are practically negative values, treating them as strictly negative yields x - y < 0, meaning absolute value logic was intended: magnitude |x| > |y|. Following convention, if x and y represent heat released natively, x > y.",
    tags: ["Heat of Combustion"],
    difficulty: "hard",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 8: Thermodynamics',
    chapter: 'thermodynamics',
    year: 1999,
    question: "In the reaction: S + 3/2 O₂ → SO₃ + 2x kcal and SO₂ + 1/2 O₂ → SO₃ + y kcal, the heat of formation of SO₂ is (1999)",
    options: ["(2x + y)", "(x - y)", "(x + y)", "(2x - y)"],
    correctAnswer: 3,
    explanation: "We need reaction: S + O₂ -> SO₂. Eq1: S + 3/2 O₂ -> SO₃ (ΔH = -2x). Eq2: SO₂ + 1/2 O₂ -> SO₃ (ΔH = -y). Eq1 - Eq2 yields: S + O₂ -> SO₂. Thus ΔH = -2x - (-y) = y - 2x. This means the heat released is -(y - 2x) = 2x - y.",
    tags: ["Heat of Formation", "Hess Law"],
    difficulty: "medium",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 8: Thermodynamics',
    chapter: 'thermodynamics',
    year: 1997,
    question: "Given that C + O₂ → CO₂, ΔH° = -x kJ and 2CO + O₂ → 2CO₂, ΔH° = -y kJ. The enthalpy of formation of carbon monoxide will be (1997)",
    options: ["y - 2x", "2x - y", "(y - 2x)/2", "(2x - y)/2"],
    correctAnswer: 2,
    explanation: "Aim: C + 1/2 O₂ -> CO. Eq1 (reversed and halved)? No. Formulate as: Eq1 is C + O₂ -> CO₂ (-x). Halving Eq2 and reversing: CO₂ -> CO + 1/2 O₂ (y/2). Adding them gives C + 1/2 O₂ -> CO. ΔH = -x + y/2 = (y - 2x) / 2.",
    tags: ["Enthalpy of Formation", "Hess Law"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 8: Thermodynamics',
    chapter: 'thermodynamics',
    year: 1995,
    question: "If enthalpies of formation for C₂H₄(g), CO₂(g) and H₂O(l) at 25°C and 1 atm pressure are 52, -394 and -286 kJ/mol respectively, then enthalpy of combustion of C₂H₄(g) will be (1995)",
    options: ["+141.2 kJ/mol", "+1412 kJ/mol", "-141.2 kJ/mol", "-1412 kJ/mol"],
    correctAnswer: 3,
    explanation: "Combustion of C₂H₄: C₂H₄ + 3O₂ -> 2CO₂ + 2H₂O. ΔH_c = [2(-394) + 2(-286)] - [52] = [-788 - 572] - 52 = -1360 - 52 = -1412 kJ/mol.",
    tags: ["Enthalpy of Combustion"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 8: Thermodynamics',
    chapter: 'thermodynamics',
    year: 2018,
    question: "The bond dissociation energies of X₂, Y₂ and XY are in the ratio of 1 : 0.5 : 1. ΔH for the formation of XY is -200 kJ mol⁻¹. The bond dissociation energy of X₂ will be (NEET 2018)",
    options: ["200 kJ mol⁻¹", "100 kJ mol⁻¹", "800 kJ mol⁻¹", "400 kJ mol⁻¹"],
    correctAnswer: 2,
    explanation: "Let BE of X₂ = x, Y₂ = 0.5x, XY = x. Formation reaction: ½ X₂ + ½ Y₂ → XY. ΔH = [ ½(x) + ½(0.5x) ] - x = 0.75x - x = -0.25x. Given ΔH = -200 kJ. Therefore -0.25x = -200 => x = 800 kJ mol⁻¹.",
    tags: ["Bond Dissociation Energy", "Thermochemistry"],
    difficulty: "medium",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 8: Thermodynamics',
    chapter: 'thermodynamics',
    year: 2015,
    question: "The heat of combustion of carbon to CO₂ is -393.5 kJ/mol. The heat released upon formation of 35.2 g of CO₂ from carbon and oxygen gas is (2015)",
    options: ["+ 315 kJ", "- 630 kJ", "- 3.15 kJ", "- 315 kJ"],
    correctAnswer: 3,
    explanation: "Molar mass of CO₂ = 44 g/mol. Moles of CO₂ = 35.2 / 44 = 0.8 mol. Since forming 1 mole releases 393.5 kJ (so ΔH = -393.5 kJ), forming 0.8 moles corresponds to ΔH = 0.8 * (-393.5) = -314.8 ≈ -315 kJ.",
    tags: ["Heat of Combustion", "Stoichiometry"],
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
    const delRes = await Question.deleteMany({ chapter: 'thermodynamics' });
    console.log(`Deleted ${delRes.deletedCount} old questions.`);

    const insRes = await Question.insertMany(questionsToSeed);
    console.log(`Successfully seeded ${insRes.length} PYQs for part 1 of Thermodynamics.`);

    mongoose.connection.close();
  } catch (e) {
    console.error(e);
    mongoose.connection.close();
  }
}

run();
