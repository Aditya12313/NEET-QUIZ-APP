// Physics — Unit 1: Units and Dimensions

export const physicsMeasurement = {
  id: 'physics-measurement',
  title: 'Chapter 1: Units and Dimensions',
  
  // Directly mapping to the 6 UI Tabs without losing any depth:
  concept_explanations: [
    { 
      title: '🔹 Physical Quantities', 
      description: 'Quantities that can be measured and expressed numerically (e.g., length, mass, force). Physics is essentially a science of measurement.' 
    },
    { 
      title: '🔹 Units and Measurement', 
      description: 'Measurement represents a comparison with a standard unit. The fundamental relation is:\n👉 Physical Quantity = Numerical Value × Unit' 
    },
    { 
      title: '🔹 Types of Units', 
      description: '1. Fundamental Units: Independent quantities. Examples: Length → metre (m), Mass → kilogram (kg), Time → second (s).\n2. Derived Units: Derived from fundamental units. Examples: Velocity → m/s, Force → kg·m/s².' 
    },
    {
      title: '🔹 Systems of Units',
      description: '• CGS → cm, g, s\n• FPS → foot, pound, second\n• MKS → metre, kg, second\n• SI → modern standard system consisting of 7 base quantities.'
    },
    {
      title: '🔹 SI Base Quantities',
      description: 'The 7 fundamental quantities are: Length, Mass, Time, Temperature, Current, Luminous Intensity, and Amount of Substance.'
    },
    {
      title: '🔹 Dimensions and Dimensional Formula',
      description: 'Powers of M, L, T representing a physical quantity. Expression showing dependence on fundamental masses.\nExamples:\n• Velocity → [M⁰L¹T⁻¹]\n• Force → [M¹L¹T⁻²]\n• Density → [M¹L⁻³T⁰]'
    },
    {
      title: '🔹 Principle of Homogeneity',
      description: 'LHS dimensions MUST equal RHS dimensions in any valid equation. Used extensively to check the correctness of physical equations.'
    },
    {
      title: '🔹 Limitations of Dimensional Analysis',
      description: '• Cannot find numerical constants (like 2, π).\n• Cannot handle trigonometric, logarithmic, or exponential relations.\n• Cannot derive multi-variable relations with more than 3 unknowns.'
    }
  ],
  
  key_patterns: [
    '🧠 Direct Concept Questions: SI units of quantities and distinguishing Fundamental vs Derived units. (e.g., "Which is not a fundamental unit?")',
    '📐 Dimensional Formula Based: Consistently finding dimensions of Force, Pressure, and Energy (Very Common in NEET).',
    '⚖️ Matching Dimensions: Identifying identical dimensions across units, specifically comparing Work vs Power or Momentum vs Impulse.',
    '🔍 Equation Checking (Homogeneity): Checking if a formula is correct (e.g., verifying v² = u² + 2as).',
    '🧮 Finding Constants: The most frequent numerical PYQ trick. E.g., given v = At + B/t, finding the dimensions of A and B using homogeneity.',
    '⚡ Assertion/Reason Questions: Usually based on SI system advantages or the specific theoretical Limitations of dimensional analysis.'
  ],
  
  formulas_relations: [
    { 
      formula: 'Force = [M¹L¹T⁻²]', 
      meaning: '(VERY IMPORTANT) You must explicitly memorize this core vector dimension to derive all advanced physics relations like Work, Pressure, and Gravitation.' 
    },
    { 
      formula: 'Physical Quantity = n × u', 
      meaning: 'Numerical Value (n) is inversely proportional to the Unit (u). If the unit gets bigger, the numerical value gets smaller.' 
    },
    { 
      formula: '1 N = 10⁵ dyne', 
      meaning: 'Standard Unit Conversion PYQ pattern explicitly mapping Newton (SI) to dyne (CGS) via dimensional analysis.' 
    }
  ],
  
  application_insights: [
    'Unit Conversion: Switching between CGS ↔ SI requires dividing and multiplying derived units carefully based on M, L, and T coefficients.',
    'Equation Validation: If a question states an equation is given, immediately check LHS vs RHS dimensions. It saves calculation time.',
    'Heavy focus on: Dimensional formulae, Unit conversions, and the Homogeneity principle. Rarely asked: Raw definitions.'
  ],
  
  common_mistakes: [
    { 
      mistake: 'Confusing dimensionless vs unitless', 
      why: 'A quantity can be dimensionless but still possess a supplementary unit (like radians for Angle). But unitless quantities are strictly dimensionless.' 
    },
    { 
      mistake: 'Missing powers of T', 
      why: 'A very common mistake is forgetting the T⁻² vs T⁻¹ distinction during high-stress exam derivations.' 
    },
    { 
      mistake: 'Assuming dimensionally correct = physically correct ❌', 
      why: 'Dimensional correctness does NOT prove physical correctness because constants and dimensionless factors cannot be checked.' 
    },
    { 
      mistake: 'Mixing CGS and SI units', 
      why: 'Do not substitute terms in dyne into an equation where other variables are natively in Joules or meters.' 
    }
  ],
  
  quick_revision: [
    '👉 High weightage question type: "Find dimension of quantity"',
    '👉 High weightage question type: "Check correctness of equation"',
    '👉 Direct Example: "Which is not a fundamental unit?"',
    '👉 Very common in NEET: Finding dimensions of Energy, Force, Pressure.',
    '👉 Direct Example: In v = At + B/t, find dimensions of A, B.'
  ],

  quiz: [
    {
      question: 'Which of the following is NOT a fundamental base quantity in the SI system?',
      options: ['Electric Current', 'Luminous Intensity', 'Electric Charge', 'Amount of Substance'],
      correctAnswer: 2,
      explanation: 'Electric Charge (Coulomb) is a derived quantity (Charge = Current × Time = A·s).',
      year: 'NEET PYQ Pattern'
    },
    {
      question: 'In the equation v = At + B/t, where v is velocity and t is time, the dimensions of A and B respectively are:',
      options: ['[L T⁻²] and [L]', '[L T⁻¹] and [L T]', '[L] and [L T⁻²]', '[M L T] and [L]'],
      correctAnswer: 0,
      explanation: 'By the Principle of Homogeneity, each term must have the dimension of velocity [L T⁻¹]. So, [At] = [L T⁻¹] => A = [L T⁻²]. And [B/t] = [L T⁻¹] => B = [L].',
      year: 'NEET PYQ Pattern'
    },
    {
      question: 'The value of 1 Newton in the CGS system is:',
      options: ['10³ dyne', '10⁵ dyne', '10⁷ dyne', '10⁻⁵ dyne'],
      correctAnswer: 1,
      explanation: 'Newton is the SI unit of force (kg·m/s²). CGS unit is dyne (g·cm/s²). 1 N = 10³ g * 10² cm / s² = 10⁵ dyne.',
      year: 'NEET PYQ Pattern'
    }
  ]
};

export default {
  id: 'phy-u1',
  name: 'Unit 1: Units and Dimensions',
  chapters: [physicsMeasurement],
};
