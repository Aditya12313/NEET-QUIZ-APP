// Physics — Unit 6: Gravitation

const gravitation = {
  id: 'gravitation',
  title: 'Chapter 6: Gravitation',
  notes: [
    {
      concept: 'Universal Law of Gravitation: Every particle attracts every other particle with a force directly proportional to the product of their masses and inversely proportional to the square of the distance between them. F = G (m1m2) / r².',
      fact: 'G = 6.67 × 10⁻¹¹ N·m²/kg². It is a universal constant, independent of the intervening medium.',
      tip: 'Gravitational force is always attractive and forms action-reaction pairs.',
    },
    {
      concept: 'Acceleration Due to Gravity (g): On the surface of Earth, g = GM/R². Variation: With height h, g_h = g(1 - 2h/R) [for h << R]. With depth d, g_d = g(1 - d/R).',
      fact: 'g is maximum at the poles and minimum at the equator. This is due to Earth\'s equatorial bulge and its rotation.',
      tip: 'At the center of the earth, d = R, so g_d = 0. An object passing through a tunnel through the center of the Earth will execute simple harmonic motion.',
    },
    {
      concept: 'Kepler\'s Laws of Planetary Motion: 1. Law of Orbits: Planets move in elliptical orbits with the Sun at one focus. 2. Law of Areas: A line joining a planet to the Sun sweeps out equal areas in equal times (conservation of angular momentum). 3. Law of Periods: T² ∝ a³ (where a is the semi-major axis).',
      fact: 'Because of the Law of Areas, a planet moves faster when it is closer to the Sun (perihelion) and slower when farther (aphelion).',
      tip: 'The conservation of angular momentum implies that the areal velocity (dA/dt = L/2m) of a planet is constant.',
    },
    {
      concept: 'Gravitational Potential Energy and Potential: U = -GMm/r. Gravitational potential V = U/m = -GM/r. Work done in shifting a mass m from r1 to r2 is W = ΔU = GMm(1/r1 - 1/r2).',
      fact: 'Gravitational potential energy is zero at infinity. It is always negative for a bound system.',
      tip: 'The force is the negative gradient of potential: F = -dU/dr or E_g = -dV/dr.',
    },
    {
      concept: 'Escape Velocity and Orbital Velocity: Escape velocity (ve) is the minimum velocity needed to overcome Earth\'s gravity, ve = sqrt(2GM/R) = sqrt(2gR) ≈ 11.2 km/s. Orbital velocity close to surface (vo) = sqrt(GM/R) = sqrt(gR) ≈ 7.9 km/s.',
      fact: 've = sqrt(2) * vo for an object orbiting very close to the surface.',
      tip: 'Escape velocity depends on the mass and radius of the planet but is independent of the mass of the escaping body and the angle of projection.',
    },
    {
      concept: 'Satellites: Time period is T = 2π sqrt((R+h)³/GM). Geostationary satellite: T = 24 hours, orbits in equatorial plane at height ~36000 km. Total energy of satellite is E = -GMm/2r, which is negative indicating loosely bound state.',
      fact: 'Kinetic energy = |Total Energy|. Potential Energy = 2 × Total Energy.',
      tip: 'Polar satellites move around polar orbits at low altitudes (500-800 km) and are used for remote sensing.',
    },
  ],
  quiz: [
    {
      question: 'If the radius of the earth shrinks by 1%, its mass remaining the same, the value of acceleration due to gravity on the earth\'s surface would:',
      options: ['Increase by 1%', 'Decrease by 1%', 'Increase by 2%', 'Decrease by 2%'],
      correctAnswer: 2,
      explanation: 'g = GM/R². Differentiating, Δg/g = -2 (ΔR/R). Since radius decreases by 1% (ΔR/R = -1%), Δg/g = -2 * (-1%) = +2%. So g increases by 2%.',
    },
    {
      question: 'Which of Kepler\'s laws is a consequence of the conservation of angular momentum?',
      options: ['Law of Orbits', 'Law of Areas', 'Law of Periods', 'None above'],
      correctAnswer: 1,
      explanation: 'Kepler\'s second law (law of areas) states that a line connecting a planet to the sun sweeps out equal areas in equal intervals. This is purely because angular momentum L = 2m(dA/dt) is conserved when external torque is zero.',
    },
    {
      question: 'A body is projected vertically upwards with a velocity equal to half the escape velocity. What is the maximum height attained by the body (R is radius of Earth)?',
      options: ['R / 2', 'R / 3', 'R', '2R'],
      correctAnswer: 1,
      explanation: 'v = ve / 2. Kinetic energy given = ½m(ve/2)² = ¼(½m ve²) = ¼(GMm/R). Using energy conservation: -GMm/R + ¼(GMm/R) = -GMm/(R+h). So, -¾(GMm/R) = -GMm/(R+h). Thus R+h = 4R/3 => h = R/3.',
    },
    {
      question: 'What is the relation between total energy (E), kinetic energy (K), and potential energy (U) for a satellite of mass m orbiting in a circular path?',
      options: ['E = K = -U', 'E = -K = U/2', 'E = 2K = U', 'E = K = U/2'],
      correctAnswer: 1,
      explanation: 'For a satellite (radius r): U = -GMm/r, K = GMm/2r. Total energy E = U + K = -GMm/2r. Therefore, E = -K, and E = U/2.',
    },
    {
      question: 'The change in the value of \'g\' at a height \'h\' above the surface of the earth is the same as at a depth \'d\' below the surface of earth. When both \'h\' and \'d\' are much smaller than the radius of earth, which of the following is true?',
      options: ['d = h', 'd = 2h', 'd = h/2', 'd = 4h'],
      correctAnswer: 1,
      explanation: 'At altitude h: g_h = g(1 - 2h/R). At depth d: g_d = g(1 - d/R). Since the changes are same: g_h = g_d. Therefore, 1 - 2h/R = 1 - d/R, meaning d = 2h.',
    },
  ],
};

export default {
  id: 'phy-u6',
  name: 'Unit 6: Gravitation',
  chapters: [gravitation],
};
