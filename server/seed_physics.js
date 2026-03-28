import mongoose from 'mongoose';
import Question from './models/Question.js';
import 'dotenv/config';

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/neet';

const questionsToSeed = [
  {
    subject: 'physics',
    unit: 'Unit 1: Physics and Measurement',
    chapter: 'physics-measurement',
    year: 2021,
    question: 'Which of the following is NOT a fundamental base quantity in the SI system?',
    options: ['Electric Current', 'Luminous Intensity', 'Electric Charge', 'Amount of Substance'],
    correctAnswer: 2,
    explanation: 'Electric Charge (Coulomb) is a derived quantity (Charge = Current × Time = A·s). Electric Current (Ampere) is the fundamental quantity.',
    tags: ['Fundamental Units', 'SI System'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 1: Physics and Measurement',
    chapter: 'physics-measurement',
    year: 2020,
    question: 'What is the dimensional formula of Force?',
    options: ['[M¹L¹T⁻¹]', '[M¹L²T⁻²]', '[M¹L¹T⁻²]', '[M¹L⁻¹T⁻²]'],
    correctAnswer: 2,
    explanation: 'Force = Mass × Acceleration. Mass = [M]. Acceleration = Velocity/Time = [L T⁻²]. Therefore, Force = [M][L T⁻²] = [M L T⁻²].',
    tags: ['Dimensional Formula', 'Force'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 1: Physics and Measurement',
    chapter: 'physics-measurement',
    year: 2018,
    question: 'Which two of the following physical quantities have the same dimensions?',
    options: ['Work and Power', 'Momentum and Impulse', 'Force and Pressure', 'Velocity and Acceleration'],
    correctAnswer: 1,
    explanation: 'Momentum (p = mv) has dimensions [M L T⁻¹]. Impulse (J = F·t) = [M L T⁻²][T] = [M L T⁻¹]. They have identical dimensions.',
    tags: ['Matching Dimensions', 'Impulse', 'Momentum'],
    difficulty: 'medium',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 1: Physics and Measurement',
    chapter: 'physics-measurement',
    year: 2016,
    question: 'In the equation v = At + B/t, where v is velocity and t is time, the dimensions of A and B respectively are:',
    options: ['[L T⁻²] and [L]', '[L T⁻¹] and [L T]', '[L] and [L T⁻²]', '[M L T] and [L]'],
    correctAnswer: 0,
    explanation: 'By the Principle of Homogeneity, each term must have the dimension of velocity [L T⁻¹]. So, [At] = [L T⁻¹] => A = [L T⁻²]. And [B/t] = [L T⁻¹] => B = [L].',
    tags: ['Principle of Homogeneity', 'Constants'],
    difficulty: 'medium',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 1: Physics and Measurement',
    chapter: 'physics-measurement',
    year: 2019,
    question: 'The value of 1 Newton in the CGS system is:',
    options: ['10³ dyne', '10⁵ dyne', '10⁷ dyne', '10⁻⁵ dyne'],
    correctAnswer: 1,
    explanation: 'Newton is the SI unit of force (kg·m/s²). CGS unit is dyne (g·cm/s²). 1 kg = 1000 g, 1 m = 100 cm. So, 1 N = 1000 g * 100 cm / s² = 10⁵ dyne.',
    tags: ['Unit Conversion', 'Force'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 1: Physics and Measurement',
    chapter: 'physics-measurement',
    year: 2015,
    question: 'Assertion (A): An equation that is dimensionally correct is always physically correct.\nReason (R): Dimensional analysis cannot be used to deduce the value of numerical constants in an equation.',
    options: ['Both A and R are true and R is the correct explanation of A', 'Both A and R are true but R is not the correct explanation of A', 'A is true but R is false', 'A is false but R is true'],
    correctAnswer: 3,
    explanation: 'Assertion is False: A dimensionally correct equation might be missing a constant (e.g. 1/2) making it physically wrong. Reason is True: Dimensional analysis cannot find dimensionless constants.',
    tags: ['Assertion-Reason', 'Limitations of Dimensional Analysis'],
    difficulty: 'medium',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 1: Physics and Measurement',
    chapter: 'physics-measurement',
    year: 2017,
    question: 'Which of the following physical quantities is dimensionless but possesses a unit?',
    options: ['Strain', 'Refractive Index', 'Plane Angle', 'Relative Density'],
    correctAnswer: 2,
    explanation: 'Plane Angle is defined as Arc/Radius (ratio of lengths), making it dimensionless ([M⁰L⁰T⁰]). However, it has a secondary unit called the radian.',
    tags: ['Dimensionless Quantities', 'Plane Angle'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 1: Physics and Measurement',
    chapter: 'physics-measurement',
    year: 2022,
    question: 'The dimensional formula of Pressure is the same as that of:',
    options: ['Force per unit volume', 'Energy per unit volume', 'Force', 'Energy'],
    correctAnswer: 1,
    explanation: 'Pressure = Force/Area = [M L T⁻²] / [L²] = [M L⁻¹ T⁻²]. Energy per unit volume = Energy/Volume = [M L² T⁻²] / [L³] = [M L⁻¹ T⁻²].',
    tags: ['Dimensional Formula', 'Pressure', 'Energy Density'],
    difficulty: 'medium',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 1: Physics and Measurement',
    chapter: 'physics-measurement',
    year: 2023,
    question: 'The equation of state of a gas is given by (P + a/V²)(V - b) = RT. What are the dimensions of the constant "a"?',
    options: ['[M L⁵ T⁻²]', '[M L⁻¹ T⁻²]', '[M L² T⁻²]', '[M L³ T⁻¹]'],
    correctAnswer: 0,
    explanation: 'By the Principle of Homogeneity, quantities added together must have the same dimensions. Thus, [a/V²] must equal [P] (Pressure). [a] = [P] × [V²] = [M L⁻¹ T⁻²] × [L³]² = [M L⁵ T⁻²].',
    tags: ['Principle of Homogeneity', 'Thermodynamics equivalent'],
    difficulty: 'hard',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 1: Physics and Measurement',
    chapter: 'physics-measurement',
    year: 2014,
    question: 'Which of the following cannot be derived using dimensional analysis?',
    options: ['Time period of a simple pendulum', 'Escape velocity of a planet', 'The relation N = N₀e^(-λt)', 'Speed of sound in a medium'],
    correctAnswer: 2,
    explanation: 'Dimensional analysis fails when the physical relation involves exponential functions (like e^x), trigonometric functions (sin, cos), or logarithmic functions.',
    tags: ['Limitations of Dimensional Analysis', 'Exponential Relations'],
    difficulty: 'medium',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 1: Physics and Measurement',
    chapter: 'physics-measurement',
    year: 2013,
    question: 'If force (F), velocity (v), and time (T) are taken as fundamental units, then the dimensions of mass are:',
    options: ['[F v T⁻¹]', '[F v⁻¹ T]', '[F v⁻¹ T⁻¹]', '[F v T]'],
    correctAnswer: 1,
    explanation: 'Force = Mass × Acceleration => F = M × (v/T). Re-arranging gives Mass (M) = F × T / v = [F v⁻¹ T].',
    tags: ['New Fundamental Units', 'Force', 'Velocity'],
    difficulty: 'hard',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 1: Physics and Measurement',
    chapter: 'physics-measurement',
    year: 2012,
    question: 'Dimensional formula for Planck\'s constant is identical to that of:',
    options: ['Linear momentum', 'Angular momentum', 'Torque', 'Power'],
    correctAnswer: 1,
    explanation: 'Planck\'s constant (h) is from E = hν => h = E/ν = [M L² T⁻²] / [T⁻¹] = [M L² T⁻¹]. Angular momentum (L) = mvr = [M][L T⁻¹][L] = [M L² T⁻¹].',
    tags: ['Matching Dimensions', 'Planck\'s Constant', 'Angular Momentum'],
    difficulty: 'medium',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 1: Physics and Measurement',
    chapter: 'physics-measurement',
    year: 2011,
    question: 'The dimensions of Universal Gravitational Constant (G) are:',
    options: ['[M⁻¹ L³ T⁻²]', '[M L² T⁻²]', '[M⁻¹ L³ T⁻¹]', '[M⁻² L² T⁻²]'],
    correctAnswer: 0,
    explanation: 'F = G m₁ m₂ / r². Therefore, G = F × r² / (m₁ m₂) = [M L T⁻²] × [L²] / [M²] = [M⁻¹ L³ T⁻²].',
    tags: ['Dimensional Formula', 'Gravitational Constant'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 1: Physics and Measurement',
    chapter: 'physics-measurement',
    year: 2010,
    question: 'A physical quantity x depends on y and z as x = A y + B tan(C z), where A, B, and C are constants. Which of the following does NOT have the same dimension as x?',
    options: ['A y', 'B', 'C z', 'All of them have the same dimensions'],
    correctAnswer: 2,
    explanation: 'C z is the argument of the tangent function, meaning it must be an angle (dimensionless). x, Ay, and B must have the exact same dimensions according to homogeneity.',
    tags: ['Principle of Homogeneity', 'Trigonometric functions'],
    difficulty: 'hard',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 1: Physics and Measurement',
    chapter: 'physics-measurement',
    year: 2021,
    question: 'Which of the following pairs does NOT have the same dimensions?',
    options: ['Tension and Surface Tension', 'Work and Torque', 'Impulse and Linear Momentum', 'Angular Velocity and Frequency'],
    correctAnswer: 0,
    explanation: 'Tension is a force ([M L T⁻²]). Surface tension is force per unit length ([M L T⁻²]/[L] = [M L⁰ T⁻²]). Work and torque share [M L² T⁻²]. Angular Velocity and freq share [T⁻¹].',
    tags: ['Matching Dimensions', 'Surface Tension', 'Tension'],
    difficulty: 'medium',
    verified: true,
    source: 'manual'
  }
];

async function run() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Connected to DB');

    const delRes = await Question.deleteMany({ chapter: 'physics-measurement' });
    console.log(`Deleted ${delRes.deletedCount} old placeholder/generic questions.`);

    const insRes = await Question.insertMany(questionsToSeed);
    console.log(`Successfully seeded ${insRes.length} pristine PYQs for physics-measurement.`);

    mongoose.connection.close();
  } catch (e) {
    console.error(e);
    mongoose.connection.close();
  }
}

run();
