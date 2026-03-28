// Physics — Unit 8: Thermodynamics

const thermodynamics = {
  id: 'thermodynamics',
  title: 'Chapter 12: Thermodynamics',
  notes: [
    {
      concept: 'Thermodynamic Systems & Variables',
      fact: 'Open (exchange mass & energy), Closed (energy only), Isolated (neither). State variables define state: P, V, T, U. Equation of state for Ideal Gas: PV = nRT.',
      tip: 'Do not confuse heat (Q) with internal energy (U). Internal energy depends only on Temperature (for ideal gas).'
    },
    {
      concept: 'First Law & Work Done',
      fact: 'First Law: Q = ΔU + W (Conservation of energy). Work Done: W = ∫PdV (Area under P-V graph). Isobaric: W=PΔV. Isochoric: W=0.',
      tip: '⚠️ CRITICAL TRAP: Wrong sign convention! Physics standard: Heat added to system (+Q), Work done BY system (+W), Increase in U (+ΔU).'
    },
    {
      concept: 'Specific Heat & Molar Heat Capacities',
      fact: 'Specific Heat: Q = mcΔT. Molar Heat Capacities: Cp (constant pressure) and Cv (constant volume). Mayer\'s relation: Cp - Cv = R.',
      tip: 'A very common trap is forgetting Mayer\'s relation (Cp - Cv = R) or not using Absolute Temperature (Kelvin only)!'
    },
    {
      concept: 'Thermodynamic Processes',
      fact: '1. Isothermal (T constant, PV = const). 2. Adiabatic (Q = 0, PV^γ = const). 3. Isobaric (P constant). 4. Isochoric (V constant).',
      tip: 'Mixing up formulas for isothermal and adiabatic processes is a very common error. Be careful when analyzing P-V graphs.'
    },
    {
      concept: 'Heat Engines & Second Law',
      fact: 'Heat flows from hot to cold. Heat Engine Efficiency: η = W / Q_in. Carnot Engine is the ideal engine (Max efficiency): η = 1 - (T2/T1).',
      tip: 'Assuming 100% efficiency is impossible! Also, remember Entropy (S) is a measure of disorder: ΔS = Q/T.'
    }
  ],
  quiz: [
    {
      question: 'According to the First Law of Thermodynamics, if heat Q is added to a system and it does work W, the change in internal energy (ΔU) of the system is given by:',
      options: ['ΔU = Q + W', 'ΔU = Q - W', 'ΔU = W - Q', 'ΔU = Q * W'],
      correctAnswer: 1,
      explanation: 'From the First Law, Q = ΔU + W. Rearranging yields ΔU = Q - W (Assuming W is work done BY the system).'
    },
    {
      question: 'Which of the following processes occurs without any transfer of heat between the system and its surroundings?',
      options: ['Isothermal', 'Isobaric', 'Isochoric', 'Adiabatic'],
      correctAnswer: 3,
      explanation: 'In an adiabatic process, there is no heat exchange with the surroundings (Q = 0). The curve follows PV^γ = constant.'
    },
    {
      question: 'The efficiency of a Carnot engine operating between a source at temperature T1 and a sink at temperature T2 is given by:',
      options: ['1 - T1/T2', '1 - T2/T1', 'T1/T2 - 1', 'T2/T1'],
      correctAnswer: 1,
      explanation: 'Carnot efficiency η = 1 - (T2/T1). Remember that T1 (source) is always greater than T2 (sink) and both MUST be in Kelvin.'
    },
    {
      question: 'For an ideal gas, the relation between molar heat capacity at constant pressure (Cp) and constant volume (Cv) is:',
      options: ['Cp + Cv = R', 'Cp / Cv = R', 'Cp - Cv = R', 'Cv - Cp = R'],
      correctAnswer: 2,
      explanation: 'Mayer\'s relation states that the difference between the molar heat capacity at constant pressure and constant volume is equal to the universal gas constant (Cp - Cv = R).'
    },
    {
      question: 'The work done by a gas in an isochoric process is:',
      options: ['Zero', 'Maximum', 'P * ΔV', 'nRT ln(V2/V1)'],
      correctAnswer: 0,
      explanation: 'In an isochoric process, the volume remains constant (ΔV = 0). Since Work W = ∫PdV, the work done is exactly zero.'
    }
  ]
};

export default {
  id: 'phy-u8',
  name: 'Unit 8: Thermodynamics',
  chapters: [thermodynamics],
};
