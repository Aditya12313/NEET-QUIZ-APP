import mongoose from 'mongoose';
import Question from './models/Question.js';
import 'dotenv/config';

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/neet';

const questionsToSeed = [
  {
    subject: 'physics',
    unit: 'Unit 10: Gravitation',
    chapter: 'gravitation',
    year: 2023,
    question: 'The value of acceleration due to gravity (g) at a height \'h\' above the earth\'s surface (where h is much smaller than the radius of the earth R) is given by:',
    options: ['g(1 - h/R)', 'g(1 - 2h/R)', 'g(1 - h/2R)', 'g(1 - h²/R²)'],
    correctAnswer: 1,
    explanation: 'For height h << R, the variation of g is approximated using the binomial expansion as g_h = g(1 - 2h/R).',
    tags: ['Variation of g', 'Height'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 10: Gravitation',
    chapter: 'gravitation',
    year: 2022,
    question: 'If the radius of the earth shrinks by 1%, its mass remaining the same, the acceleration due to gravity on the earth\'s surface would:',
    options: ['increase by 2%', 'decrease by 2%', 'increase by 1%', 'decrease by 1%'],
    correctAnswer: 0,
    explanation: 'Since g = GM/R², taking natural logarithms and differentiating gives Δg/g = -2(ΔR/R). If ΔR/R = -1%, then Δg/g = -2(-1%) = +2%.',
    tags: ['Variation of g', 'Percentage error'],
    difficulty: 'medium',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 10: Gravitation',
    chapter: 'gravitation',
    year: 2021,
    question: 'The escape velocity from the Earth\'s surface is v. The escape velocity from the surface of another planet having a radius four times that of Earth and same mass density is:',
    options: ['v', '2v', '4v', '16v'],
    correctAnswer: 2,
    explanation: 'v_e = √(2GM/R) = √(2G(4/3 π R³ ρ)/R) ∝ R. Since radius is 4 times and density is same, the escape velocity becomes 4 times.',
    tags: ['Escape Velocity', 'Planets'],
    difficulty: 'medium',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 10: Gravitation',
    chapter: 'gravitation',
    year: 2020,
    question: 'A body weighs 200 N on the surface of the earth. How much will it weigh halfway down to the centre of the earth?',
    options: ['100 N', '150 N', '200 N', '250 N'],
    correctAnswer: 0,
    explanation: 'Variation of g with depth: g_d = g(1 - d/R). Here d = R/2, so g_d = g(1 - 1/2) = g/2. Weight becomes half, i.e., 100 N.',
    tags: ['Variation of g', 'Depth'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 10: Gravitation',
    chapter: 'gravitation',
    year: 2019,
    question: 'The total mechanical energy of a satellite of mass m revolving in a circular orbit of radius r around the earth (mass M) is:',
    options: ['GMm / 2r', '-GMm / 2r', '-GMm / r', 'GMm / r'],
    correctAnswer: 1,
    explanation: 'Total Energy (E) = KE + PE = (GMm/2r) + (-GMm/r) = -GMm/2r.',
    tags: ['Satellite Motion', 'Energy'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 10: Gravitation',
    chapter: 'gravitation',
    year: 2018,
    question: 'According to Kepler\'s second law, the radius vector to a planet from the sun sweeps out equal areas in equal intervals of time. This law is a consequence of the conservation of:',
    options: ['Linear momentum', 'Angular momentum', 'Energy', 'Mass'],
    correctAnswer: 1,
    explanation: 'The areal velocity dA/dt = L / 2m. Since gravitational force is a central force, torque on the planet is zero, hence angular momentum (L) is conserved.',
    tags: ['Kepler\'s Laws', 'Conservation Laws'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 10: Gravitation',
    chapter: 'gravitation',
    year: 2017,
    question: 'The time period of a geostationary satellite is 24 hours, at a height 6R_E from surface of earth. The time period of another satellite whose height is 2.5R_E from surface will be:',
    options: ['6 √2 hours', '6 √3 hours', '12 hours', '24 √2 hours'],
    correctAnswer: 0,
    explanation: 'Distance from centre for geostationary = R_E + 6R_E = 7R_E. For second satellite = R_E + 2.5R_E = 3.5R_E. By Kepler\'s 3rd law: (T2/T1)² = (r2/r1)³ = (3.5/7)³ = 1/8. T2 = T1 / √8 = 24 / (2√2) = 12/√2 = 6√2 hours.',
    tags: ['Kepler\'s Laws', 'Satellites'],
    difficulty: 'hard',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 10: Gravitation',
    chapter: 'gravitation',
    year: 2016,
    question: 'Two identical solid copper spheres of radius R placed in contact with each other. The gravitational attraction between them is proportional to:',
    options: ['R²', 'R⁻²', 'R⁴', 'R⁶'],
    correctAnswer: 2,
    explanation: 'Distance between centres = 2R. Mass of each sphere M = (4/3)πR³ρ. F = G.M.M / (2R)² = G(16/9)π²R⁶ρ² / 4R² ∝ R⁴.',
    tags: ['Universal Law of Gravitation'],
    difficulty: 'medium',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 10: Gravitation',
    chapter: 'gravitation',
    year: 2015,
    question: 'Work done in raising a mass m from the surface of the earth to a height h = R (radius of earth) is:',
    options: ['mgR', '½ mgR', '¼ mgR', '2 mgR'],
    correctAnswer: 1,
    explanation: 'Work done = Change in PE = ΔU = (mgh) / (1 + h/R). Since h = R, W = (mgR) / (1 + R/R) = mgR / 2 = ½ mgR.',
    tags: ['Gravitational Potential Energy', 'Work Done'],
    difficulty: 'medium',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 10: Gravitation',
    chapter: 'gravitation',
    year: 2014,
    question: 'The gravitational field in a region is given by E = (5 N/kg)i + (12 N/kg)j. The change in gravitational potential energy of a 2 kg particle when it is taken from origin to a point (7m, -3m) is:',
    options: ['-1 J', '71 J', '-2 J', '2 J'],
    correctAnswer: 3,
    explanation: 'Work done = ∫F·dr. Force F = mE = 2(5i + 12j) = 10i + 24j. Displacement vector = 7i - 3j. Work = F·r = 10(7) + 24(-3) = 70 - 72 = -2 J. Change in PE = -Work Done = -(-2) = 2 J.',
    tags: ['Gravitational Field', 'Potential Energy'],
    difficulty: 'hard',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 10: Gravitation',
    chapter: 'gravitation',
    year: 2013,
    question: 'If v_e is escape velocity and v_o is orbital velocity of a satellite for orbit close to the earth\'s surface, then these are related by:',
    options: ['v_o = v_e', 'v_e = √2 v_o', 'v_o = √2 v_e', 'v_e = √3 v_o'],
    correctAnswer: 1,
    explanation: 'v_e = √(2gR) and v_o = √(gR). Therefore, v_e = √2 * v_o.',
    tags: ['Escape Velocity', 'Orbital Velocity'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 10: Gravitation',
    chapter: 'gravitation',
    year: 2012,
    question: 'A particle is fired straight up from the surface of earth with a velocity v = 1/2 v_e (escape velocity). The maximum height it reaches is:',
    options: ['R', 'R/2', 'R/3', 'R/4'],
    correctAnswer: 2,
    explanation: 'By conservation of energy: 1/2 m v² - GmM/R = -GmM/(R+h). We know v_e = √(2GM/R), so v = 1/2 √(2GM/R). Plugging this in gives h = R/3.',
    tags: ['Conservation of Energy', 'Escape Velocity'],
    difficulty: 'hard',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 10: Gravitation',
    chapter: 'gravitation',
    year: 2011,
    question: 'What will be the formula of mass of the earth in terms of g, R and G?',
    options: ['gR/G', 'gR²/G', 'g²R/G', 'G/gR²'],
    correctAnswer: 1,
    explanation: 'We know g = GM/R². Rearranging this gives M = gR² / G.',
    tags: ['Universal Law of Gravitation'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 10: Gravitation',
    chapter: 'gravitation',
    year: 2010,
    question: 'For a celestial body escaping from earth, the numerical ratio of its kinetic energy to its potential energy (magnitude) at the escaping condition is:',
    options: ['1/2', '1', '2', '0'],
    correctAnswer: 1,
    explanation: 'Escape condition requires that Total Energy = 0. Therefore, KE + PE = 0 => KE = -PE. So, |KE|/|PE| = 1.',
    tags: ['Escape Velocity', 'Energy'],
    difficulty: 'medium',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 10: Gravitation',
    chapter: 'gravitation',
    year: 2009,
    question: 'If the earth suddenly shrinks to half of its present radius without experiencing any change in mass, the duration of the new day will be:',
    options: ['6 hours', '12 hours', '24 hours', '48 hours'],
    correctAnswer: 0,
    explanation: 'By conservation of angular momentum L = Iω = constant. I = (2/5)MR² and ω = 2π/T. So R²/T = constant. (R/2)² / T\' = R² / 24. T\' = 24/4 = 6 hours.',
    tags: ['Conservation of Angular Momentum', 'Rotation'],
    difficulty: 'medium',
    verified: true,
    source: 'manual'
  }
];

async function run() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Connected to DB');

    const delRes = await Question.deleteMany({ chapter: 'gravitation' });
    console.log(`Deleted ${delRes.deletedCount} old placeholder/generic questions.`);

    const insRes = await Question.insertMany(questionsToSeed);
    console.log(`Successfully seeded ${insRes.length} pristine PYQs for gravitation.`);

    mongoose.connection.close();
  } catch (e) {
    console.error(e);
    mongoose.connection.close();
  }
}

run();
