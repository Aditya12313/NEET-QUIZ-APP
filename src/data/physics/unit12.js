// Physics — Unit 12: Current Electricity

const currentElectricity = {
  id: 'current-electricity',
  title: 'Chapter 3: Current Electricity',
  notes: [
    {
      concept: 'Electric Current & Drift Velocity',
      fact: 'Current I = Q/t (Direction opposite to electron flow). Drift velocity v_d = (eEτ)/m. Current density J = I/A = nqv_d.',
      tip: 'Common Trap: Confusing current direction vs electron flow! Conventional current is always in the direction of POSITIVE charge flow.'
    },
    {
      concept: 'Ohm\'s Law, Resistance & Resistivity',
      fact: 'V = IR (valid for ohmic conductors). Resistance R = ρ(L/A). Resistivity ρ is a property of the material and independent of shape/size. Conductivity σ = 1/ρ.',
      tip: 'Do not forget that stretching a wire changes BOTH length and area! (If length doubles, area halves, resistance becomes 4x).'
    },
    {
      concept: 'Temperature Dependence of Resistance',
      fact: 'R = R_0(1 + αΔT). For metals, resistance increases with temperature (α > 0); for semiconductors, it decreases (α < 0).',
      tip: 'Ignoring temperature effects or strictly applying them to the wrong material type is a major mistake.'
    },
    {
      concept: 'Power, EMF & Resistor Combinations',
      fact: 'Power P = VI = I²R = V²/R. Series R = R1 + R2 + R3. Parallel 1/R = 1/R1 + 1/R2. Terminal voltage V = E - Ir (where E is emf, r is internal resistance).',
      tip: 'Mixing up series and parallel formulas! Also, verify which power formula to use (e.g. use I²R when currents are same in series, V²/R when voltages are same in parallel).'
    },
    {
      concept: 'Kirchhoff\'s Laws & Circuits',
      fact: '1. Junction Rule: ΣI = 0 (Conservation of Charge). 2. Loop Rule: ΣV = 0 (Conservation of Energy). Wheatstone bridge balanced: P/Q = R/S. Potentiometer measures accurate EMF (draws no current).',
      tip: 'Wrong sign conventions in Kirchhoff loops! Remember: Voltage DROPS across a resistor in the direction of current (-IR).'
    }
  ],
  quiz: [
    {
      question: 'A wire of resistance R is stretched to twice its original length such that its volume remains constant. Its new resistance will be:',
      options: ['R', '2R', '4R', 'R/2'],
      correctAnswer: 2,
      explanation: 'Resistance R = ρL/A. If length is doubled (2L), volume conservation means area is halved (A/2). New R = ρ(2L)/(A/2) = 4 * ρL/A = 4R.'
    },
    {
      question: 'Which of the following describes the dependence of resistivity of a semiconductor on temperature?',
      options: ['Increases linearly with temperature', 'Decreases exponentially with temperature', 'Increases exponentially with temperature', 'Remains independent of temperature'],
      correctAnswer: 1,
      explanation: 'For semiconductors, the number density of charge carriers increases exponentially with temperature. As a result, resistivity decreases exponentially with increasing temperature.'
    },
    {
      question: 'A cell of emf E and internal resistance r is connected across an external resistance R. The terminal voltage of the cell is:',
      options: ['E', 'E + Ir', 'E - Ir', 'Zero'],
      correctAnswer: 2,
      explanation: 'When a cell is discharging (supplying current to an external circuit), the terminal voltage V is given by V = E - Ir due to the potential drop occurring across the internal resistance.'
    },
    {
      question: 'In Kirchhoff’s circuit laws, the junction rule (ΣI = 0) and loop rule (ΣV = 0) are respectively based on the conservation of:',
      options: ['Energy and Charge', 'Charge and Energy', 'Mass and Energy', 'Momentum and Charge'],
      correctAnswer: 1,
      explanation: 'The junction rule is based on the conservation of charge (charges cannot accumulate at a junction), while the loop rule is based on the conservation of energy (the total potential energy charge around a closed loop is zero).'
    },
    {
      question: 'In a Wheatstone bridge network composed of resistors P, Q, R, and S, the bridge is said to be balanced when the galvanometer shows no deflection. This occurs when:',
      options: ['P*Q = R*S', 'P/R = S/Q', 'P/Q = R/S', 'P+Q = R+S'],
      correctAnswer: 2,
      explanation: 'A Wheatstone bridge is balanced and no current flows through the central branch (galvanometer) when the ratio of adjacent arms is equal: P/Q = R/S.'
    }
  ]
};

export default {
  id: 'phy-u12',
  name: 'Unit 12: Current Electricity',
  chapters: [currentElectricity],
};
