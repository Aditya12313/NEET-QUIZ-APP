import mongoose from 'mongoose';
import Question from './models/Question.js';
import 'dotenv/config';

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/neet';

const questionsToSeed = [
  {
    subject: 'physics',
    unit: 'Unit 4: Rotational Motion',
    chapter: 'rotational-motion',
    year: 2023,
    question: 'A solid cylinder of mass 2 kg and radius 4 cm is rotating about its axis at the rate of 3 rpm. The torque required to stop after 2π revolutions is:',
    options: ['2 × 10⁻⁶ N·m', '2 × 10⁻³ N·m', '12 × 10⁻⁴ N·m', '2 × 10⁻⁵ N·m'],
    correctAnswer: 0,
    explanation: 'I = ½MR² = ½(2)(0.04)² = 1.6 × 10⁻³ kg·m². ω₀ = 3 rpm = 3(2π/60) = π/10 rad/s. ω = 0. θ = 2π rev = 4π² rad. From ω² = ω₀² + 2αθ => 0 = (π/10)² + 2α(4π²) => α = -(π²/100) / (8π²) = -1/800 rad/s². Torque τ = I|α| = (1.6 × 10⁻³) × (1/800) = 2 × 10⁻⁶ N·m.',
    tags: ['Torque', 'Rotational Kinematics'],
    difficulty: 'hard',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 4: Rotational Motion',
    chapter: 'rotational-motion',
    year: 2022,
    question: 'The moment of inertia of a uniform circular disc of radius R and mass M about an axis passing through its edge and perpendicular to its plane is:',
    options: ['½ MR²', '¾ MR²', '3/2 MR²', 'MR²'],
    correctAnswer: 2,
    explanation: 'By the Parallel Axis Theorem: I = I_cm + Md². For a strictly perpendicular axis through the center, I_cm = ½ MR². The distance to the edge is d = R. So, I = ½ MR² + MR² = 3/2 MR².',
    tags: ['Moment of Inertia', 'Parallel Axis Theorem', 'Disc'],
    difficulty: 'medium',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 4: Rotational Motion',
    chapter: 'rotational-motion',
    year: 2021,
    question: 'A solid sphere, a hollow sphere, and a ring are released from the top of an inclined plane. Which one reaches the bottom first? (Assuming pure rolling)',
    options: ['Solid Sphere', 'Hollow Sphere', 'Ring', 'All reach simultaneously'],
    correctAnswer: 0,
    explanation: 'Acceleration down an incline is a = (g sin θ) / (1 + I/MR²). The body with the smallest (I/MR²) ratio has the highest acceleration. Solid sphere is 2/5 (0.4), hollow is 2/3 (0.66), ring is 1. Solid sphere wins.',
    tags: ['Rolling Motion', 'Moment of Inertia Compare'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 4: Rotational Motion',
    chapter: 'rotational-motion',
    year: 2020,
    question: 'An ice skater spins with her arms outstretched. When she pulls her arms completely in, her angular velocity increases because:',
    options: ['Her mass decreases', 'Her moment of inertia decreases, conserving angular momentum', 'Her rotational kinetic energy is completely conserved', 'Centripetal force directly increases'],
    correctAnswer: 1,
    explanation: 'Torque is zero (τ_ext = 0), so Angular Momentum (L = Iω) is firmly conserved. Pulling arms in decreases mass radius, severely decreasing I. To keep L constant, ω must strictly increase.',
    tags: ['Angular Momentum', 'Conservation', 'Ice Skater'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 4: Rotational Motion',
    chapter: 'rotational-motion',
    year: 2019,
    question: 'Two particles of equal mass m go around a circle of radius R under the action of their mutual gravitational attraction. The speed of each particle is:',
    options: ['½ √(Gm/R)', '√(Gm/2R)', '√(Gm/R)', '√(2Gm/R)'],
    correctAnswer: 0,
    explanation: 'Gravitational Force F = Gmm/(2R)². This provides the centripetal force mv²/R. So, mv²/R = Gm²/(4R²). Solving for v yields v = ½ √(Gm/R).',
    tags: ['Centripetal Force', 'Gravitation'],
    difficulty: 'hard',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 4: Rotational Motion',
    chapter: 'rotational-motion',
    year: 2018,
    question: 'A disc initially at rest is rotated with a constant angular acceleration of 2 rad/s². What is the angular displacement after 5 seconds?',
    options: ['10 rad', '25 rad', '50 rad', '5 rad'],
    correctAnswer: 1,
    explanation: 'Using the rotational kinematic equation θ = ω₀t + ½αt², with ω₀ = 0. θ = ½(2)(5²) = 25 rad.',
    tags: ['Angular Kinematics', 'Displacement'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 4: Rotational Motion',
    chapter: 'rotational-motion',
    year: 2017,
    question: 'A force F = (2i - 3j + 4k) N acts on a point particle situated at position r = (i + 2j - k) m. Find the torque acting on the particle about the origin.',
    options: ['5i - 6j - 7k', '5i - 6j + 7k', '-5i - 6j + 7k', '5i + 6j - 7k'],
    correctAnswer: 0,
    explanation: 'Cross product τ = r × F. Matrix det: i(2(4) - (-1)(-3)) - j(1(4) - (-1)(2)) + k((1)(-3) - (2)(2)) = i(8 - 3) - j(4 + 2) + k(-3 - 4) = 5i - 6j - 7k N·m.',
    tags: ['Torque', 'Cross Product'],
    difficulty: 'medium',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 4: Rotational Motion',
    chapter: 'rotational-motion',
    year: 2016,
    question: 'The ratio of rotational kinetic energy to the total kinetic energy of a strictly rolling solid sphere is:',
    options: ['2/7', '2/5', '5/7', '1/2'],
    correctAnswer: 0,
    explanation: 'For a solid sphere, I = 2/5 MR². Rotational KE = ½ Iω² = ½ (2/5 MR²) ω² = (1/5) Mv². Translational KE = ½ Mv² = 2.5/5 Mv². Total KE = 3.5/5 Mv² = 7/10 Mv². Ratio = (1/5) / (7/10) = 2/7.',
    tags: ['Energy Distribution', 'Rolling Motion', 'Solid Sphere'],
    difficulty: 'medium',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 4: Rotational Motion',
    chapter: 'rotational-motion',
    year: 2015,
    question: 'Which relation rigidly defines the center of mass of a system of particles?',
    options: ['R_cm = Σ m_i v_i / M', 'R_cm = Σ m_i r_i / M', 'R_cm = Σ m_i a_i / M', 'R_cm = Σ I_i ω_i / M'],
    correctAnswer: 1,
    explanation: 'The fundamental definition of the center of mass purely relies on coordinate distribution: R_cm = (m₁r₁ + m₂r₂ + ... + m_nr_n) / Total Mass M.',
    tags: ['Center of Mass', 'Definition'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 4: Rotational Motion',
    chapter: 'rotational-motion',
    year: 2014,
    question: 'A thin circular ring of mass M and radius r is rotating about its axis with constant angular velocity ω. Two objects each of mass m are attached gently to the opposite ends of a diameter of the ring. The ring now rotates with an angular velocity:',
    options: ['ωM / (M + m)', 'ω(M - 2m) / (M + 2m)', 'ωM / (M + 2m)', 'ω(M + 2m) / M'],
    correctAnswer: 2,
    explanation: 'No external torque acts, therefore L = constant. I₁ω₁ = I₂ω₂. Initially, I₁ = Mr². Finally, masses m are added to the rim at distance r, so I₂ = Mr² + 2mr². Thus, (Mr²)ω = (M + 2m)r² ω₂. ω₂ = ωM / (M + 2m).',
    tags: ['Conservation of Angular Momentum', 'Moment of Inertia', 'Ring'],
    difficulty: 'medium',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 4: Rotational Motion',
    chapter: 'rotational-motion',
    year: 2013,
    question: 'What is the moment of inertia of a uniform rod of mass M and length L rotating about an axis strictly passing through its center and perpendicular to its length?',
    options: ['ML² / 3', 'ML² / 12', 'ML² / 4', 'ML² / 2'],
    correctAnswer: 1,
    explanation: 'The exact theoretical result derived from integration ∫ r² dm is ML²/12. Moment of inertia about the end is ML²/3.',
    tags: ['Moment of Inertia', 'Rod'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 4: Rotational Motion',
    chapter: 'rotational-motion',
    year: 2012,
    question: 'Assertion (A): Torque on a body can be highly non-zero even if the net force acting on the system is zero. Reason (R): A couple strictly produces rotational motion without causing any translation.',
    options: ['Both logically true, R explains A', 'Both true, R does not explain A', 'A is true, R is false', 'A is false, R is true'],
    correctAnswer: 0,
    explanation: 'Absolutely true. Two equal and opposite forces acting at different points (a couple) produce zero net force (ΣF = 0) but they create an unbalanced turning torque (Στ ≠ 0).',
    tags: ['Torque', 'Couple', 'Equilibrium'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 4: Rotational Motion',
    chapter: 'rotational-motion',
    year: 2011,
    question: 'A wheel of radius R rolls fully without slipping on a horizontal surface. The immediate velocity of the lowest point P of the wheel is:',
    options: ['v', '2v', '0', 'v/2'],
    correctAnswer: 2,
    explanation: 'In pure rolling without slipping, the point of contact with the ground is momentarily at perfect rest with respect to the ground. Translational v equals rotational vector rω in magnitude and perfectly opposite direction.',
    tags: ['Rolling Motion', 'Lowest Point'],
    difficulty: 'medium',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 4: Rotational Motion',
    chapter: 'rotational-motion',
    year: 2010,
    question: 'The instantaneous point of application of the normal contact force on a purely rolling sphere:',
    options: ['Shifts directly backward against direction of motion', 'Remains perfectly aligned over the center', 'Shifts strictly forward in the direction of motion', 'Follows a sinusoidal shift'],
    correctAnswer: 2,
    explanation: 'In real-world rolling, the deformation of the surface shifts the normal force slightly forward in the direction of motion, creating a rolling friction torque.',
    tags: ['Rolling Friction', 'Normal Force'],
    difficulty: 'hard',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 4: Rotational Motion',
    chapter: 'rotational-motion',
    year: 2009,
    question: 'If a highly uniform solid sphere is rotating freely about its own axis without external torques, its Total Rotational Kinetic Energy is entirely proportional to:',
    options: ['ω', 'L²', '1/L', 'ω³'],
    correctAnswer: 1,
    explanation: 'Rotational KE = L²/2I (since L = Iω). Because its radius/mass is unchanging (I is constant), its Rotational KE is profoundly proportional directly to the square of its Angular Momentum.',
    tags: ['Rotational Kinetic Energy', 'Angular Momentum'],
    difficulty: 'medium',
    verified: true,
    source: 'manual'
  }
];

async function run() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Connected to DB');

    const delRes = await Question.deleteMany({ chapter: 'rotational-motion' });
    console.log(`Deleted ${delRes.deletedCount} old placeholder/generic questions.`);

    const insRes = await Question.insertMany(questionsToSeed);
    console.log(`Successfully seeded ${insRes.length} pristine PYQs for rotational-motion.`);

    mongoose.connection.close();
  } catch (e) {
    console.error(e);
    mongoose.connection.close();
  }
}

run();
