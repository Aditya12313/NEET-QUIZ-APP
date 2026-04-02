// Physics — Unit 10: Gravitation

const gravitation = {
  id: 'gravitation-orbits',
  title: 'Chapter 8: Gravitation',
  notes: [
    {
      concept: 'Universal Law of Gravitation & Gravitational Field',
      fact: 'Every mass attracts every other mass. F = G*m1*m2/r². Gravitational Field: g = GM/r². Direction is always towards the centre.',
      tip: 'G is the universal gravitational constant. A common trap is mixing up the mass of the Earth (M) with the mass of the object (m)!',
    },
    {
      concept: 'Acceleration Due to Gravity (g) & Variation',
      fact: 'At Earth\'s surface: g = GM/R². Variation with height (h << R): g_h = g(1 - 2h/R). Variation with depth (d): g_d = g(1 - d/R).',
      tip: 'Do not assume g is constant everywhere! Be careful when calculating height/depth problems. Always verify if h is comparable to Earth\'s radius (R) or very small.',
    },
    {
      concept: 'Gravitational Potential & Potential Energy',
      fact: 'Gravitational Potential (Work done per unit mass): V = -GM/r. Gravitational Potential Energy: U = -GMm/r.',
      tip: '⚠️ CRITICAL TRAP: Forgetting the negative sign in potential and energy formulas!',
    },
    {
      concept: 'Escape Velocity & Orbital Velocity',
      fact: 'Escape Velocity (min velocity to escape Earth\'s gravity): v_e = √(2GM/R) = √(2gR). Orbital Velocity: v_o = √(GM/r).',
      tip: 'Common trap is confusing escape velocity vs orbital velocity or using the wrong radius (r vs R in formulas). v_e = √2 * v_o.',
    },
    {
      concept: 'Satellite Motion & Kepler\'s Laws',
      fact: 'Time Period: T = 2π√(r³/GM). Energy of Satellite = -GMm/2r. Kepler\'s Law of Periods: T² ∝ r³. Law of Areas: Equal areas in equal time.',
      tip: 'Geostationary Satellite: Appears stationary relative to Earth, Time period = 24 hours, moves in equatorial plane.',
    },
  ],
  quiz: [
    {
      question: 'The value of acceleration due to gravity (g) at a height \'h\' above the earth\'s surface (where h is much smaller than the radius of the earth R) is given by:',
      options: ['g(1 - h/R)', 'g(1 - 2h/R)', 'g(1 - h/2R)', 'g(1 - h²/R²)'],
      correctAnswer: 1,
      explanation: 'For height h << R, the variation of g is approximated using the binomial expansion as g_h = g(1 - 2h/R).',
    },
    {
      question: 'Which of the following describes the relation between the escape velocity (v_e) and orbital velocity (v_o) of a satellite orbiting very close to the earth\'s surface?',
      options: ['v_e = v_o', 'v_e = √2 * v_o', 'v_e = v_o / √2', 'v_e = 2 * v_o'],
      correctAnswer: 1,
      explanation: 'Escape velocity v_e = √(2gR) and orbital velocity close to surface v_o = √(gR). Thus, v_e = √2 * v_o.',
    },
    {
      question: 'The total mechanical energy of a satellite of mass m revolving in an orbit of radius r around the Earth (mass M) is:',
      options: ['GMm / 2r', '-GMm / 2r', '-GMm / r', 'GMm / r'],
      correctAnswer: 1,
      explanation: 'The total energy is the sum of kinetic energy (+GMm/2r) and potential energy (-GMm/r). Therefore, Total Energy = -GMm/2r. A common trap is missing the negative sign!',
    },
    {
      question: 'According to Kepler\'s Law of Periods (Third Law), the square of the time period of revolution of a planet around the sun is proportional to the:',
      options: ['square of the semi-major axis', 'cube of the semi-major axis', 'cube of the semi-minor axis', 'square of the semi-minor axis'],
      correctAnswer: 1,
      explanation: 'Kepler\'s Law of Periods states that T² ∝ r³, where r is the semi-major axis (or radius for a circular orbit) of the elliptical orbit.',
    },
    {
      question: 'If the radius of the Earth were to shrink by 1%, its mass remaining the same, the acceleration due to gravity on the earth\'s surface would:',
      options: ['increase by 2%', 'decrease by 2%', 'increase by 1%', 'decrease by 1%'],
      correctAnswer: 0,
      explanation: 'Since g = GM/R², taking natural logarithms and differentiating gives Δg/g = -2(ΔR/R) for a constant M. If ΔR/R = -1%, then Δg/g = -2(-1%) = +2%. So g increases by 2%.',
    },
  ],
};

export default {
  id: 'phy-u10',
  name: 'Unit 10: Gravitation',
  chapters: [gravitation],
};
