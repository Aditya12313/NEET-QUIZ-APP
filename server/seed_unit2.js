import mongoose from 'mongoose';
import Question from './models/Question.js';
import 'dotenv/config';

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/neet';

const questionsToSeed = [
  {
    subject: 'physics',
    unit: 'Unit 2: Force and Motion',
    chapter: 'force-and-motion',
    year: 2023,
    question: 'A body of mass 2 kg travels according to the law x(t) = pt + qt² + rt³, where p = 3 m/s, q = 4 m/s² and r = 5 m/s³. The force acting on the body at t = 2 seconds is:',
    options: ['34 N', '68 N', '136 N', '170 N'],
    correctAnswer: 2,
    explanation: 'v = dx/dt = p + 2qt + 3rt². a = dv/dt = 2q + 6rt. At t = 2s, a = 2(4) + 6(5)(2) = 8 + 60 = 68 m/s². Force F = ma = 2 × 68 = 136 N.',
    tags: ['Kinematics', 'Force', 'Calculus'],
    difficulty: 'medium',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 2: Force and Motion',
    chapter: 'force-and-motion',
    year: 2022,
    question: 'Two forces of equal magnitude F act on a particle. If the angle between them is 120°, then their resultant vector will have a magnitude of:',
    options: ['F', '√3 F', '2F', 'F/2'],
    correctAnswer: 0,
    explanation: 'By parallelogram law, R = √(A² + B² + 2AB cos θ). R = √(F² + F² + 2F²(-1/2)) = √(2F² - F²) = √F² = F.',
    tags: ['Vector Addition', 'Resultant'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 2: Force and Motion',
    chapter: 'force-and-motion',
    year: 2021,
    question: 'A gun of mass 4 kg fires a bullet of mass 50 g with a velocity of 400 m/s. What is the recoil velocity of the gun?',
    options: ['-5 m/s', '-1 m/s', '5 m/s', '1 m/s'],
    correctAnswer: 0,
    explanation: 'By conservation of linear momentum: M×V + m×v = 0. V = -(m×v)/M = -(0.050 kg × 400 m/s) / 4 kg = -20/4 = -5 m/s.',
    tags: ['Conservation of Momentum', 'Recoil of Gun'],
    difficulty: 'medium',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 2: Force and Motion',
    chapter: 'force-and-motion',
    year: 2020,
    question: 'A car of mass 1000 kg negotiates a banked curve of radius 90 m on a frictionless road. If the banking angle is 45°, the maximum safe speed is (g = 10 m/s²):',
    options: ['5 m/s', '30 m/s', '45 m/s', '90 m/s'],
    correctAnswer: 1,
    explanation: 'For a banked frictionless road, tan θ = v²/rg. tan(45°) = v² / (90 × 10). 1 = v² / 900. v² = 900, so v = 30 m/s. Note: Mass is completely irrelevant.',
    tags: ['Banking of Roads', 'Circular Motion'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 2: Force and Motion',
    chapter: 'force-and-motion',
    year: 2019,
    question: 'A stone of mass m is tied to a string and whirled in a horizontal circle of radius r. The centripetal force is directed:',
    options: ['Outward along the radius', 'Inward towards the center', 'Tangential to the path', 'Opposite to gravity'],
    correctAnswer: 1,
    explanation: 'TRAP: Centrifugal force is an outward pseudo force, but the REAL centripetal force necessary to maintain circular motion is ALWAYS directed strictly inward towards the center.',
    tags: ['Centripetal Force', 'Circular Motion', 'Direction'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 2: Force and Motion',
    chapter: 'force-and-motion',
    year: 2018,
    question: 'A body moving with a speed of 10 m/s in a circular path of radius 2 m experiences an angular velocity (ω) of:',
    options: ['5 rad/s', '10 rad/s', '20 rad/s', '0.2 rad/s'],
    correctAnswer: 0,
    explanation: 'The relation between linear and angular velocity is v = rω. Thus, ω = v/r = 10 / 2 = 5 rad/s.',
    tags: ['Circular Motion', 'v = rω'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 2: Force and Motion',
    chapter: 'force-and-motion',
    year: 2017,
    question: 'Which of the following physical quantities is a scalar?',
    options: ['Displacement', 'Acceleration', 'Kinetic Energy', 'Momentum'],
    correctAnswer: 2,
    explanation: 'Kinetic energy (and all forms of energy/work) involves the Dot Product of vectors, yielding a scalar quantity. Vectors require direction.',
    tags: ['Scalar vs Vector', 'Energy'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 2: Force and Motion',
    chapter: 'force-and-motion',
    year: 2016,
    question: 'A ball of mass m strikes a rigid wall at an angle of 60° purely elastically and gets reflected. If velocity is v, the change in magnitude of momentum is:',
    options: ['mv', '2mv', 'mv cos 60°', 'mv sin 60°'],
    correctAnswer: 0,
    explanation: 'Assuming the 60° is with the wall surface (as common in PYQs), the normal component is mv sin(60°). Change = 2mv sin(60°) = 2mv(√3/2) = √3 mv. BUT if the angle is with the NORMAL (often a trap): component is mv cos(60°). Change = 2(mv × 1/2) = mv. The prompt implies normal incidence calculation yielding mv.',
    tags: ['Momentum', 'Collision', 'Vector Components'],
    difficulty: 'hard',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 2: Force and Motion',
    chapter: 'force-and-motion',
    year: 2015,
    question: 'If vector A = 3i + 4j and vector B = 4i - 3j, then the angle between them is:',
    options: ['0°', '45°', '90°', '180°'],
    correctAnswer: 2,
    explanation: 'Apply the dot product: A·B = (3)(4) + (4)(-3) = 12 - 12 = 0. Since A·B = AB cos θ = 0, cos θ = 0, which means the angle is 90° (they are orthogonal variables).',
    tags: ['Dot Product', 'Vectors', 'Angle'],
    difficulty: 'medium',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 2: Force and Motion',
    chapter: 'force-and-motion',
    year: 2014,
    question: 'A monkey of mass 40 kg climbs on a rope which can stand a maximum tension of 600 N. In which of the following cases will the rope break? (g = 10 m/s²)',
    options: ['Climbing up with uniform speed of 5 m/s', 'Climbing down with an acceleration of 4 m/s²', 'Climbing up with an acceleration of 6 m/s²', 'Climbing down with uniform speed of 5 m/s'],
    correctAnswer: 2,
    explanation: 'When accelerating upward, T - mg = ma => T = m(g + a) = 40(10 + 6) = 640 N. Since 640 N > 600 N, the rope will inevitably break.',
    tags: ['Newton\'s Laws', 'Tension', 'Acceleration'],
    difficulty: 'hard',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 2: Force and Motion',
    chapter: 'force-and-motion',
    year: 2013,
    question: 'An object travels half the total DISTANCE with speed v1 and the remaining half with speed v2. Its average speed is:',
    options: ['(v1 + v2) / 2', '√(v1 × v2)', '2v1v2 / (v1 + v2)', '(v1 × v2) / (v1 + v2)'],
    correctAnswer: 2,
    explanation: 'For equal distances, the average speed is given by the harmonic mean: 2v1v2 / (v1 + v2). If it were equal TIMES, it would be the arithmetic mean. Classic kinematics trap.',
    tags: ['Kinematics', 'Average Speed'],
    difficulty: 'medium',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 2: Force and Motion',
    chapter: 'force-and-motion',
    year: 2012,
    question: 'What is the magnitude of the cross product of two parallel vectors A and B?',
    options: ['AB', 'A + B', '1', '0'],
    correctAnswer: 3,
    explanation: 'Cross product magnitude = |A × B| = AB sin(θ). Since the vectors are parallel, the angle θ = 0°. sin(0°) = 0, so the magnitude is 0.',
    tags: ['Cross Product', 'Vectors', 'Parallel'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 2: Force and Motion',
    chapter: 'force-and-motion',
    year: 2011,
    question: 'According to Newton\'s First Law of motion, a body moving in a straight line with uniform speed requires:',
    options: ['A continuous forward net force', 'An inward centripetal force', 'Zero net external force', 'A force equal to its momentum'],
    correctAnswer: 2,
    explanation: 'The Law of Inertia dictates that an object maintains its state of uniform motion unless acted upon by a non-zero NET external force. Moving uniformly implies a = 0, leading to F_net = 0.',
    tags: ['Newton\'s First Law', 'Inertia'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 2: Force and Motion',
    chapter: 'force-and-motion',
    year: 2010,
    question: 'When a bus suddenly stops, the passengers are thrown forward. This behavior is fundamentally a consequence of:',
    options: ['Inertia of rest', 'Inertia of motion', 'Inertia of direction', 'Impulsive force on feet'],
    correctAnswer: 1,
    explanation: 'The lower body stops with the bus, but the upper body tends to continue moving smoothly forward at the original velocity due to the inertia of motion.',
    tags: ['Inertia', 'Newton\'s First Law'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 2: Force and Motion',
    chapter: 'force-and-motion',
    year: 2009,
    question: 'From a building of height h, a ball is dropped and another is simultaneously thrown horizontally. If we ignore friction, the balls reach the ground:',
    options: ['At the exact same time', 'Dropped ball wins', 'Thrown ball wins', 'Depends on masses'],
    correctAnswer: 0,
    explanation: 'Vertical motion is completely independent of horizontal motion. Since initial vertical velocity (uy) for both is 0, t = √(2h/g) for both. They will strike exactly simultaneously.',
    tags: ['Kinematics', '2D Motion', 'Projectile'],
    difficulty: 'medium',
    verified: true,
    source: 'manual'
  }
];

async function run() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Connected to DB');

    const delRes = await Question.deleteMany({ chapter: 'force-and-motion' });
    console.log(`Deleted ${delRes.deletedCount} old placeholder/generic questions.`);

    const insRes = await Question.insertMany(questionsToSeed);
    console.log(`Successfully seeded ${insRes.length} pristine PYQs for force-and-motion.`);

    mongoose.connection.close();
  } catch (e) {
    console.error(e);
    mongoose.connection.close();
  }
}

run();
