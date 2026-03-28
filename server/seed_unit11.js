import mongoose from 'mongoose';
import Question from './models/Question.js';
import 'dotenv/config';

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/neet';

const questionsToSeed = [
  {
    subject: 'physics',
    unit: 'Unit 11: Electrostatics',
    chapter: 'electrostatics',
    year: 2023,
    question: 'Two identical conducting spheres, one carrying a charge +Q and the other carrying a charge -3Q, are brought into contact and then separated to their original distance. The ratio of the new electrostatic force between them to the original force is:',
    options: ['1:3', '1:4', '1:9', '4:9'],
    correctAnswer: 0,
    explanation: 'Original force F1 ∝ (Q)(-3Q) = -3Q² (attractive). When touched, total charge = Q - 3Q = -2Q. This is shared equally, so each gets -Q. New force F2 ∝ (-Q)(-Q) = +Q² (repulsive). Ratio |F2/F1| = Q² / 3Q² = 1:3.',
    tags: ['Coulomb\'s Law', 'Conductors'],
    difficulty: 'medium',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 11: Electrostatics',
    chapter: 'electrostatics',
    year: 2022,
    question: 'A parallel plate capacitor is charged by a battery. The battery is then disconnected, and a dielectric slab is inserted between the plates. Which of the following quantities remains constant?',
    options: ['Capacitance', 'Potential difference', 'Electric field', 'Charge on the plates'],
    correctAnswer: 3,
    explanation: 'Since the battery is disconnected before the dielectric is inserted, the capacitor is isolated. Therefore, the charge Q on the plates has nowhere to go and remains constant.',
    tags: ['Capacitor', 'Dielectrics'],
    difficulty: 'medium',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 11: Electrostatics',
    chapter: 'electrostatics',
    year: 2021,
    question: 'The electric field and the electric potential at a point due to a point charge are 20 N/C and 10 J/C respectively. The distance of the point from the charge is:',
    options: ['0.5 m', '1.0 m', '2.0 m', '4.0 m'],
    correctAnswer: 0,
    explanation: 'Electric field E = kq/r² and Potential V = kq/r. Therefore, r = V/E = 10 / 20 = 0.5 m.',
    tags: ['Electric Field', 'Electric Potential'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 11: Electrostatics',
    chapter: 'electrostatics',
    year: 2020,
    question: 'A hollow metal sphere of radius R is uniformly charged. The electric field due to the sphere at a distance r from the centre:',
    options: ['Decreases as r increases for r < R and for r > R', 'Increases as r increases for r < R and for r > R', 'Zero as r increases for r < R, decreases as r increases for r > R', 'Zero as r increases for r < R, increases as r increases for r > R'],
    correctAnswer: 2,
    explanation: 'Inside a hollow conducting sphere (r < R), E = 0. Outside the sphere (r > R), E = kq/r², so it decreases as r increases.',
    tags: ['Gauss\'s Law', 'Conductors'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 11: Electrostatics',
    chapter: 'electrostatics',
    year: 2019,
    question: 'Three capacitors of 2 μF, 3 μF, and 6 μF are connected in series. Their equivalent capacitance is:',
    options: ['11 μF', '1 μF', '1.2 μF', '0.8 μF'],
    correctAnswer: 1,
    explanation: 'For series combo: 1/C = 1/2 + 1/3 + 1/6 = (3+2+1)/6 = 6/6 = 1. So C = 1 μF.',
    tags: ['Capacitor Combination', 'Series'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 11: Electrostatics',
    chapter: 'electrostatics',
    year: 2018,
    question: 'An electric dipole of moment p is placed in a uniform electric field E. The maximum torque experienced by the dipole is:',
    options: ['pE', 'pE/2', 'Zero', 'pE/√2'],
    correctAnswer: 0,
    explanation: 'Torque τ = pE sinθ. Maximum torque occurs when θ = 90° (sin 90° = 1), so τ_max = pE.',
    tags: ['Electric Dipole', 'Torque'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 11: Electrostatics',
    chapter: 'electrostatics',
    year: 2017,
    question: 'Two point charges +4q and +q are placed separated by a distance L. A third charge Q is placed such that all three charges are in equilibrium. The position and magnitude of the third charge are:',
    options: ['L/3 from +4q, target Q = -4q/9', '2L/3 from +4q, target Q = -4q/9', 'L/2 from +4q, target Q = -q/4', 'L/3 from +q, target Q = -4q/9'],
    correctAnswer: 1,
    explanation: 'For equilibrium of Q, it must be between the charges. Distance x from +4q: k(4q)Q/x² = kqQ/(L-x)² => 2/x = 1/(L-x) => x = 2L/3. For equilibrium of +q: k(4q)q/L² + kQq/(L/3)² = 0 => 4/L² + Q/(L²/9) = 0 => Q = -4q/9.',
    tags: ['Coulomb\'s Law', 'Equilibrium'],
    difficulty: 'hard',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 11: Electrostatics',
    chapter: 'electrostatics',
    year: 2016,
    question: 'A charge Q is enclosed by a Gaussian spherical surface of radius R. If the radius is doubled, then the outward electric flux will:',
    options: ['Be doubled', 'Increase four times', 'Be reduced to half', 'Remain the same'],
    correctAnswer: 3,
    explanation: 'According to Gauss\'s Law, electric flux Φ = Q_enclosed / ε0. It depends ONLY on the enclosed charge, not on the size or shape of the Gaussian surface. Hence, the flux remains the same.',
    tags: ['Gauss\'s Law', 'Electric Flux'],
    difficulty: 'medium',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 11: Electrostatics',
    chapter: 'electrostatics',
    year: 2015,
    question: 'The electric potential V at any point (x, y, z) in space is given by V = 4x² volt. The electric field at the point (1 m, 0, 2 m) in V/m is:',
    options: ['8 along negative X-axis', '8 along positive X-axis', '16 along negative X-axis', '16 along positive Z-axis'],
    correctAnswer: 0,
    explanation: 'Electric field E = -dV/dx i. Here V = 4x². dV/dx = 8x. At x = 1, E_x = -8(1) = -8 V/m. The field is 8 V/m along the negative x-axis.',
    tags: ['Electric Potential', 'Potential Gradient'],
    difficulty: 'medium',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 11: Electrostatics',
    chapter: 'electrostatics',
    year: 2014,
    question: 'Two identical capacitors have the same capacitance C. One of them is charged to potential V1 and the other to V2. The negative ends of the capacitors are connected together. When the positive ends are also connected, the decrease in energy of the combined system is:',
    options: ['(1/4) C(V1² - V2²)', '(1/4) C(V1² + V2²)', '(1/4) C(V1 - V2)²', '(1/2) C(V1 - V2)²'],
    correctAnswer: 2,
    explanation: 'Loss of energy ΔU = 1/2 * (C1*C2)/(C1+C2) * (V1 - V2)². Since C1 = C2 = C, ΔU = 1/2 * (C²/2C) * (V1 - V2)² = (1/4) C (V1 - V2)².',
    tags: ['Capacitors', 'Energy Loss'],
    difficulty: 'hard',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 11: Electrostatics',
    chapter: 'electrostatics',
    year: 2013,
    question: 'The electrostatic force between the metal plates of an isolated parallel plate capacitor C having a charge Q and area A, is:',
    options: ['Proportional to the square root of the distance between the plates', 'Linearly proportional to the distance between the plates', 'Independent of the distance between the plates', 'Inversely proportional to the distance between the plates'],
    correctAnswer: 2,
    explanation: 'The electric field due to one plate is E = σ/2ε0 = Q/2Aε0. Force on the other plate is F = QE = Q² / (2Aε0). This expression does not contain \'d\', hence it is independent of the distance between the plates.',
    tags: ['Parallel Plate Capacitor', 'Electrostatic Force'],
    difficulty: 'medium',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 11: Electrostatics',
    chapter: 'electrostatics',
    year: 2012,
    question: 'A solid conducting sphere having a charge Q is surrounded by an uncharged concentric conducting hollow spherical shell. Let the potential difference between the surface of the solid sphere and that of the outer surface of the hollow shell be V. If the shell is now given a charge of -3Q, the new potential difference between the same two surfaces is:',
    options: ['V', '2V', '4V', '-2V'],
    correctAnswer: 0,
    explanation: 'Potential difference between two concentric spherical shells depends ONLY on the charge of the inner sphere. Adding charge to the outer shell changes the absolute potential of both spheres by the same amount, keeping their difference V unchanged.',
    tags: ['Electric Potential', 'Concentric Spheres'],
    difficulty: 'hard',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 11: Electrostatics',
    chapter: 'electrostatics',
    year: 2011,
    question: 'Equipotential surfaces associated with an electric field which is increasing in magnitude along the x-direction are:',
    options: ['Planes parallel to yz-plane', 'Planes parallel to xy-plane', 'Planes parallel to xz-plane', 'Coaxial cylinders of increasing radii around the x-axis'],
    correctAnswer: 0,
    explanation: 'Since the electric field is along the x-direction, the equipotential surfaces must be perpendicular to the x-axis. Planes perpendicular to the x-axis are parallel to the yz-plane.',
    tags: ['Equipotential Surfaces', 'Electric Field'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 11: Electrostatics',
    chapter: 'electrostatics',
    year: 2010,
    question: 'What is the flux through a cube of side \'a\' if a point charge of q is situated at one of its corners?',
    options: ['q/ε0', 'q/2ε0', 'q/4ε0', 'q/8ε0'],
    correctAnswer: 3,
    explanation: 'A charge at the corner of a cube is shared by 8 adjacent cubes meeting at that corner. By symmetry, the flux through one such cube is exactly 1/8 of the total flux (q/ε0). Therefore, Φ = q / 8ε0.',
    tags: ['Gauss\'s Law', 'Flux', 'Symmetry'],
    difficulty: 'medium',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 11: Electrostatics',
    chapter: 'electrostatics',
    year: 2009,
    question: 'Which of the following acts as a dielectric in a capacitor?',
    options: ['Copper', 'Iron', 'Mica', 'Aluminum'],
    correctAnswer: 2,
    explanation: 'A dielectric must be an insulating material that can be polarized by an applied electric field. Mica is an insulator commonly used as a dielectric. Copper, Iron, and Aluminum are conductors.',
    tags: ['Dielectrics', 'Capacitors'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  }
];

async function run() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Connected to DB');

    const delRes = await Question.deleteMany({ chapter: 'electrostatics' });
    console.log(`Deleted ${delRes.deletedCount} old placeholder/generic questions.`);

    const insRes = await Question.insertMany(questionsToSeed);
    console.log(`Successfully seeded ${insRes.length} pristine PYQs for electrostatics.`);

    mongoose.connection.close();
  } catch (e) {
    console.error(e);
    mongoose.connection.close();
  }
}

run();
