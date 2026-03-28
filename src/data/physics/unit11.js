// Physics — Unit 11: Electrostatics

const electrostatics = {
  id: 'electrostatics',
  title: 'Chapter 1: Electrostatics',
  notes: [
    {
      concept: 'Electric Charge & Coulomb\'s Law',
      fact: 'Properties of charge: Quantization (q = ne), Conservation, Additivity. Coulomb\'s Law: F = (1/4πε0) * (q1 q2 / r²). Force is inversely proportional to square of distance.',
      tip: 'Do not forget the negative sign when dealing with electron charge in calculations if vectors are involved!'
    },
    {
      concept: 'Electric Field & Dipoles',
      fact: 'Electric Field E = F/q. For point charge: E = (1/4πε0) * (q / r²). Dipole Moment p = q * 2a (direction - to +). Field on axial line: E = (1/4πε0) * (2p / r³). Equatorial line: E = (1/4πε0) * (p / r³).',
      tip: '⚠️ CRITICAL TRAP: Forgetting that dipole field equations are different! Axial field is TWICE the equatorial field in magnitude.'
    },
    {
      concept: 'Gauss\'s Law & Applications',
      fact: 'Electric Flux Φ = q_enclosed / ε0. Used mainly for symmetric charge distributions (infinite line charge, plane sheet, spherical shell).',
      tip: 'Wrongly using Gauss\'s law without symmetry is a common mistake. If it is an asymmetric object, you cannot simply pull E out of the integral!'
    },
    {
      concept: 'Electric Potential & Relation to Field',
      fact: 'Potential V = (1/4πε0) * (q / r). Relation between E and V: E = -dV/dr. Equipotential surfaces have no work done when moving charges along them and are perpendicular to the E field.',
      tip: 'Sign mistakes in potential are common! Also, do not confuse Electric Field (vector) with Electric Potential (scalar).'
    },
    {
      concept: 'Capacitance & Dielectrics',
      fact: 'C = Q/V. Parallel plate capacitor: C = ε0A/d. With dielectric: C = Kε0A/d. Series combo: 1/C = 1/C1 + 1/C2. Parallel combo: C = C1 + C2. Energy U = 1/2 CV².',
      tip: 'Mixing up capacitor combination formulas with resistor formulas is a classic trap! Also, ignoring the effect of dielectrics on fields and potentials.'
    }
  ],
  quiz: [
    {
      question: 'Two point charges separated by a distance r in air experience an electrostatic force F. If they are placed in a medium of dielectric constant K at the same distance, the force between them will be:',
      options: ['F', 'K*F', 'F/K', 'F/K²'],
      correctAnswer: 2,
      explanation: 'According to Coulomb\'s law, the force in a medium is F_m = (1/4πε) * (q1q2/r²). Since ε = K*ε0, F_m = F_air / K = F/K.'
    },
    {
      question: 'The electric field at a point on the equatorial line of an electric dipole is:',
      options: ['Parallel to the dipole moment', 'Anti-parallel to the dipole moment', 'Perpendicular to the dipole moment', 'Zero'],
      correctAnswer: 1,
      explanation: 'The electric field on the equatorial line of a dipole points in the direction opposite to the dipole moment vector p (which points from -q to +q).'
    },
    {
      question: 'A spherical conducting shell of inner radius R1 and outer radius R2 has a charge Q. A point charge q is placed at the centre. The surface charge density on the inner surface of the shell is:',
      options: ['q / (4πR1²)', '-q / (4πR1²)', 'Q / (4πR1²)', '(Q+q) / (4πR1²)'],
      correctAnswer: 1,
      explanation: 'By Gauss\'s law, a charge q at the centre induces an equal and opposite charge -q on the inner surface of the conducting shell. Thus, inner surface charge density σ_in = -q / (4πR1²).'
    },
    {
      question: 'In a uniform electric field E, an equipotential surface is always:',
      options: ['Parallel to the electric field lines', 'Perpendicular to the electric field lines', 'At a 45 degree angle to the electric field lines', 'Spherical in shape'],
      correctAnswer: 1,
      explanation: 'By definition, no work is done moving a charge along an equipotential surface (dV = 0). Since dV = -E·dr, E must be perpendicular to dr (the surface) everywhere.'
    },
    {
      question: 'Two capacitors of 3 μF and 6 μF are connected in series. Their equivalent capacitance is:',
      options: ['9 μF', '3 μF', '4.5 μF', '2 μF'],
      correctAnswer: 3,
      explanation: 'For capacitors in series, 1/C_eq = 1/C1 + 1/C2 = 1/3 + 1/6 = 3/6 = 1/2. Therefore, C_eq = 2 μF.'
    }
  ]
};

export default {
  id: 'phy-u11',
  name: 'Unit 11: Electrostatics',
  chapters: [electrostatics],
};
