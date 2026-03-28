// Physics — Unit 12: Current Electricity

const currentElectricity = {
  id: 'current-electricity',
  title: 'Chapter 12: Current Electricity',
  notes: [
    {
      concept: 'Electric Current: Rate of flow of charge: I = q/t. By convection, the direction is opposite to the flow of electrons. Steady current means no accumulation of charge.',
      fact: 'Drift velocity (vd): Average velocity with which free electrons drift against the electric field. vd = eEτ/m (where τ is relaxation time).',
      tip: 'Relation between current and drift velocity: I = neA(vd). Also, current density J = I/A = nev_d.',
    },
    {
      concept: 'Ohm\'s Law: At constant physical conditions, V ∝ I or V = IR. R depends on material, dimensions (R = ρL/A), and temperature.',
      fact: 'For metallic conductors, as temperature increases, relaxation time decreases, and resistance/resistivity INCREASES.',
      tip: 'For semiconductors and insulators, resistance DECREASES with an increase in temperature (negative temperature coefficient α).',
    },
    {
      concept: 'Resistors in Series and Parallel: Series: R_eq = R1 + R2 + ... (Current is the same, voltage divides). Parallel: 1/R_eq = 1/R1 + 1/R2 ... (Voltage is the same, current divides).',
      fact: 'Electrical power: P = VI = I²R = V²/R. Heating effect of current (Joule\'s Law): H = I²Rt.',
      tip: 'Bulb brightness in series: bulb with higher resistance (lower wattage rating) burns brighter. In parallel: higher wattage bulb burns brighter.',
    },
    {
      concept: 'Cells, EMF, and Internal Resistance: EMF (E) is maximum potential diff when no current is drawn. V = E - Ir (during discharge) and V = E + Ir (during charging).',
      fact: 'Series combination of identical cells (n cells): E_eq = nE, r_eq = nr. Maximum current drawn if external R = r_eq.',
      tip: 'Parallel combination of m identical cells: E_eq = E, r_eq = r/m. This setup is useful when external resistance is very small compared to internal resistance.',
    },
    {
      concept: 'Kirchhoff\'s Laws: 1. Junction Rule (KCL): Algebraic sum of currents meeting at a junction is zero (Conservation of Charge). 2. Loop Rule (KVL): Algebraic sum of changes in potential in a closed loop is zero (Conservation of Energy).',
      fact: 'KVL follows strict sign conventions: Potential drops (e.g. going through resistor in direction of current) are negative; potential gains (going negative to positive terminal) are positive.',
      tip: 'Wheatstone bridge is balanced when P/Q = R/S. In balanced condition, no current flows through the galvanometer in the central arm. Metre Bridge is based on this principle.',
    },
  ],
  quiz: [
    {
      question: 'Which of the following describes the dependence of resistivity on temperature for a typical semiconductor?',
      options: ['It increases linearly with temperature', 'It decreases exponentially with increase in temperature', 'It remains perfectly constant', 'It increases logarithmically'],
      correctAnswer: 1,
      explanation: 'For semiconductors, the number density of free charge carriers increases exponentially with temperature. This overcomes the effect of decreased relaxation time, causing resistivity to drop exponentially.',
    },
    {
      question: 'Five equal resistances, each of value R, are connected in a network to form a Wheatstone bridge. The equivalent resistance between the diagonally opposite corners is:',
      options: ['R / 2', '2R', 'R', '5R'],
      correctAnswer: 2,
      explanation: 'In a balanced Wheatstone Bridge where all arm resistances are R, the central galvanometer resistance is ineffective. Equivalent resistance for the parallel branches (R+R = 2R, R+R = 2R) is (2R * 2R)/(2R + 2R) = R.',
    },
    {
      question: 'The drift velocity (vd) of electrons is related to the applied electric field (E) according to the relation:',
      options: ['vd ∝ E', 'vd ∝ E²', 'vd ∝ √E', 'vd is independent of E'],
      correctAnswer: 0,
      explanation: 'Drift velocity vd = (eE/m)τ. For a constant relaxation time τ (at constant temperature), it is directly proportional to the applied Electric Field E.',
    },
    {
      question: 'Two cells of emf E1 and E2 (E1 > E2) are connected in series opposing (their positive terminals are connected). If they send current through an external resistor R, the effective emf will be:',
      options: ['E1 + E2', 'E1 - E2', '(E1 + E2) / 2', 'Zero'],
      correctAnswer: 1,
      explanation: 'When cells are in series with opposite polarities, the effective EMF is the difference between them, E_net = E1 - E2 (assuming E1 acts in the direction of the dominant current).',
    },
    {
      question: 'Kirchhoff\'s Junction Rule (Current Law) is a manifestation of the law of conservation of:',
      options: ['Energy', 'Linear Momentum', 'Charge', 'Mass'],
      correctAnswer: 2,
      explanation: 'KCL states the sum of currents entering a junction equals the sum leaving. Since I=q/t, it means charge entering equals charge leaving, perfectly expressing the Conservation of Charge.',
    },
  ],
};

export default {
  id: 'phy-u12',
  name: 'Unit 12: Current Electricity',
  chapters: [currentElectricity],
};
