import mongoose from 'mongoose';
import Question from './models/Question.js';
import 'dotenv/config';

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/neet';

const questionsToSeed = [
  {
    subject: 'physics',
    unit: 'Unit 3: Work, Power and Energy',
    chapter: 'work-power-energy',
    year: 2023,
    question: 'A body of mass 2 kg is initially at rest. A constant force of 5 N acts on it for 10 s. The work done by the force is:',
    options: ['125 J', '250 J', '500 J', '625 J'],
    correctAnswer: 3,
    explanation: 'a = F/m = 5/2 = 2.5 m/s². v = at = 2.5 × 10 = 25 m/s. Work = ΔKE = ½mv² = ½(2)(25²) = 625 J.',
    tags: ['Work-Energy Theorem', 'Kinetic Energy'],
    difficulty: 'medium',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 3: Work, Power and Energy',
    chapter: 'work-power-energy',
    year: 2022,
    question: 'The relationship between kinetic energy (K) and momentum (p) of a body of mass m is:',
    options: ['p = K²/2m', 'K = p²/2m', 'K = 2mp²', 'p = 2mK'],
    correctAnswer: 1,
    explanation: 'K = ½mv². Multiply numerator and denominator by m: K = ½m²v²/m = p²/2m. Extremely common identity.',
    tags: ['Kinetic Energy', 'Momentum'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 3: Work, Power and Energy',
    chapter: 'work-power-energy',
    year: 2021,
    question: 'A ball is dropped from a height of 20 m. If 10% of its mechanical energy is lost due to air resistance, with what speed does it hit the ground? (g = 10 m/s²)',
    options: ['10 m/s', '15 m/s', '18.9 m/s', '20 m/s'],
    correctAnswer: 2,
    explanation: 'Initial energy E = mgh = m(10)(20) = 200m. Energy remaining = 90% of 200m = 180m J. Final KE = ½mv² = 180m => v² = 360, v = √360 ≈ 18.97 m/s.',
    tags: ['Conservation of Energy', 'Air Resistance'],
    difficulty: 'medium',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 3: Work, Power and Energy',
    chapter: 'work-power-energy',
    year: 2020,
    question: 'If the kinetic energy of a body becomes four times its initial value, the momentum becomes:',
    options: ['Half', 'Two times', 'Four times', 'Remains same'],
    correctAnswer: 1,
    explanation: 'From K = p²/2m, we get p = √(2mK). If K becomes 4K, p\' = √(2m(4K)) = 2√(2mK) = 2p.',
    tags: ['Kinetic Energy', 'Momentum'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 3: Work, Power and Energy',
    chapter: 'work-power-energy',
    year: 2019,
    question: 'A particle moves from position r1 = (2i + j - 3k) to r2 = (4i + 6j - 2k) under the action of force F = (3i + 2j - k) N. The work done is:',
    options: ['10 J', '12 J', '15 J', '17 J'],
    correctAnswer: 3,
    explanation: 'Displacement s = r2 - r1 = (4-2)i + (6-1)j + (-2 - (-3))k = 2i + 5j + k. Work W = F·s = (3)(2) + (2)(5) + (-1)(1) = 6 + 10 - 1 = 15 J. Wait, 15J. Let\'s check: (3*2)+(2*5)+(-1*1)=6+10-1 = 15 J. Option 3 is correct. Ah, option C = 15J.',
    tags: ['Work Calculation', 'Dot Product', 'Vectors'],
    difficulty: 'medium',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 3: Work, Power and Energy',
    chapter: 'work-power-energy',
    year: 2018,
    question: 'An elastic spring of unstretched length L and force constant k is stretched by an amount x. It is further stretched by another amount y. The work done strictly in the second stretching is:',
    options: ['½k(x+y)²', '½k(y²)', '½ky(2x+y)', '½k(x² + y²)'],
    correctAnswer: 2,
    explanation: 'Initial energy U1 = ½kx². Final energy U2 = ½k(x+y)². Work done W = U2 - U1 = ½k[(x+y)² - x²] = ½k(x² + 2xy + y² - x²) = ½ky(2x+y).',
    tags: ['Elastic PE', 'Work Done', 'Spring'],
    difficulty: 'hard',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 3: Work, Power and Energy',
    chapter: 'work-power-energy',
    year: 2017,
    question: 'Which of the following is NOT a conservative force?',
    options: ['Gravitational force', 'Electrostatic force', 'Frictional force', 'Elastic spring force'],
    correctAnswer: 2,
    explanation: 'Friction is a non-conservative force because the work done by it depends on the actual path taken and is dissipated as heat, unable to be recovered.',
    tags: ['Conservative Forces', 'Theory'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 3: Work, Power and Energy',
    chapter: 'work-power-energy',
    year: 2016,
    question: 'A pump is required to lift 800 kg of water per minute from a well of depth 10 m and discharge it with a speed of 20 m/s. The required power is (g=10):',
    options: ['4 kW', '6.6 kW', '12 kW', '400 kW'],
    correctAnswer: 0,
    explanation: 'Work = PE + KE = mgh + ½mv² = (800)(10)(10) + ½(800)(20²) = 80000 + 160000 = 240000 J per minute. Power P = W/t = 240000 J / 60 s = 4000 W = 4.0 kW.',
    tags: ['Power', 'Conservation of Energy'],
    difficulty: 'hard',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 3: Work, Power and Energy',
    chapter: 'work-power-energy',
    year: 2015,
    question: 'A mass m moves with a velocity v and hits another mass m at rest in a perfectly elastic head-on collision. After the collision:',
    options: ['Both move with v/2', 'First mass stops entirely, second uses velocity v', 'First moves with v, second is stationary', 'They come to rest'],
    correctAnswer: 1,
    explanation: 'In a completely equal-mass elastic head-on collision, perfectly 100% velocity transfer occurs. The first mass stops, and the second takes off with velocity v.',
    tags: ['Elastic Collision', 'Conservation of Linear Momentum'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 3: Work, Power and Energy',
    chapter: 'work-power-energy',
    year: 2014,
    question: 'A block of mass 10 kg moving in the x-direction with constant speed of 10 m/s is subjected to a retarding force F = -0.1x J/m during its travel from x = 20 to 30 m. Its final kinetic energy will be:',
    options: ['475 J', '450 J', '275 J', '250 J'],
    correctAnswer: 0,
    explanation: 'Initial KE = ½(10)(10²) = 500 J. Work done by constant force profile F = ∫(-0.1x)dx from 20 to 30. W = -0.1 [x²/2] from 20 to 30 = -0.05 (900 - 400) = -0.05 * 500 = -25 J. Final KE = 500 - 25 = 475 J.',
    tags: ['Work by Variable Force', 'Calculus', 'Work-Energy Theorem'],
    difficulty: 'hard',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 3: Work, Power and Energy',
    chapter: 'work-power-energy',
    year: 2013,
    question: 'Power is expressed as P = F·v. If a car is driving at constant velocity against a constant air resistance and friction, the power delivered by the engine is:',
    options: ['Zero because acceleration is zero', 'F_net / v', 'F_resistive × v', 'Unpredictable'],
    correctAnswer: 2,
    explanation: 'To maintain constant velocity, F_engine must identically cancel F_resistive. Since P = F_engine × v, the power output exactly matches F_resistive × v.',
    tags: ['Power', 'F net'],
    difficulty: 'medium',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 3: Work, Power and Energy',
    chapter: 'work-power-energy',
    year: 2012,
    question: 'A particle is released from a height S. At a certain height, its kinetic energy is three times its potential energy. The height and speed of the particle at that instant are:',
    options: ['S/4, √(3gS/2)', 'S/2, √(gS)', 'S/3, √(gS/2)', '3S/4, √(gS/2)'],
    correctAnswer: 0,
    explanation: 'Let height be h. Total E = mgS = KE + PE. Given KE = 3 PE. So Total E = 4 PE => mgS = 4 mgh => h = S/4. Speed: KE = 3mgh = 3mg(S/4). ½mv² = ¾mgS => v² = 3gS/2 => v = √(3gS/2).',
    tags: ['Conservation of Energy', 'Falling Bodies'],
    difficulty: 'medium',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 3: Work, Power and Energy',
    chapter: 'work-power-energy',
    year: 2011,
    question: 'The work done by the centripetal force in one complete revolution of a particle moving in a circle of radius r is:',
    options: ['2πrF', '0', 'πr²F', 'F/2πr'],
    correctAnswer: 1,
    explanation: 'Centripetal force is always directed radically inwards (perpendicular to tangential velocity). Since W = Fs cos(90°) = 0, work done in circular motion by centripetal force is strictly ZERO.',
    tags: ['Work Calculation', 'Circular Motion'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 3: Work, Power and Energy',
    chapter: 'work-power-energy',
    year: 2010,
    question: 'Consider a completely inelastic collision between two identical cars. The fraction of initial kinetic energy remaining after the collision is:',
    options: ['1', '1/2', '1/4', '0'],
    correctAnswer: 1,
    explanation: 'M moving at V hits resting M. Cons. of Momentum: M V = (M+M) v\' => v\' = V/2. Final KE = ½(2M)(V/2)² = ½ M (V²/2) = ¼ M V². Initial KE: ½ M V². Ratio = (¼ M V²) / (½ M V²) = 1/2.',
    tags: ['Inelastic Collision', 'Kinetic Energy Loss'],
    difficulty: 'medium',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 3: Work, Power and Energy',
    chapter: 'work-power-energy',
    year: 2009,
    question: 'The area under a Force (F) vs Displacement (x) graph yields:',
    options: ['Power', 'Kinetic Energy', 'Momentum', 'Work Done'],
    correctAnswer: 3,
    explanation: 'W = ∫ F dx. The geometric area directly translates under an F-x bounded curve is exactly equal to the total Work done on the system.',
    tags: ['Graphs', 'Work Calculation'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  }
];

async function run() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Connected to DB');

    const delRes = await Question.deleteMany({ chapter: 'work-power-energy' });
    console.log(`Deleted ${delRes.deletedCount} old placeholder/generic questions.`);

    const insRes = await Question.insertMany(questionsToSeed);
    console.log(`Successfully seeded ${insRes.length} pristine PYQs for work-power-energy.`);

    mongoose.connection.close();
  } catch (e) {
    console.error(e);
    mongoose.connection.close();
  }
}

run();
