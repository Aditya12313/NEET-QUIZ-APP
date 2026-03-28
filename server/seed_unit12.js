import mongoose from 'mongoose';
import Question from './models/Question.js';
import 'dotenv/config';

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/neet';

const questionsToSeed = [
  {
    subject: 'physics',
    unit: 'Unit 12: Current Electricity',
    chapter: 'current-electricity',
    year: 2023,
    question: 'The resistance of a wire is R ohm. If it is melted and stretched to n times its original length, its new resistance will be:',
    options: ['nR', 'R/n', 'n²R', 'R/n²'],
    correctAnswer: 2,
    explanation: 'When a wire is stretched, its volume remains constant (V = A*l = const). Since l\' = n*l, the new area A\' = A/n. New resistance R\' = ρ(l\')/A\' = ρ(n*l)/(A/n) = n²(ρl/A) = n²R.',
    tags: ['Resistance', 'Stretching of wire'],
    difficulty: 'medium',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 12: Current Electricity',
    chapter: 'current-electricity',
    year: 2022,
    question: 'A cell acting as a source is connected to a resistor R. Which of the following equations correctly expresses the terminal voltage V across the cell, if it has an electromotive force (emf) E and internal resistance r?',
    options: ['V = E + Ir', 'V = E - Ir', 'V = Ir - E', 'V = E'],
    correctAnswer: 1,
    explanation: 'When a cell provides current I to an external circuit (discharging), the terminal voltage V drops by Ir due to internal resistance r. Thus, V = E - Ir.',
    tags: ['Cells', 'Internal Resistance', 'EMF'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 12: Current Electricity',
    chapter: 'current-electricity',
    year: 2021,
    question: 'In a potentiometer experiment, the balancing length for a cell is found to be 120 cm. If the cell is shunted by a 2 Ω resistor, the balancing length drops to 100 cm. The internal resistance of the cell is:',
    options: ['0.4 Ω', '2.4 Ω', '1.0 Ω', '0.2 Ω'],
    correctAnswer: 0,
    explanation: 'Internal resistance r = R(l1/l2 - 1). Given R = 2 Ω, l1 = 120 cm, l2 = 100 cm. r = 2 * (120/100 - 1) = 2 * (1.2 - 1) = 2 * 0.2 = 0.4 Ω.',
    tags: ['Potentiometer', 'Internal Resistance'],
    difficulty: 'hard',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 12: Current Electricity',
    chapter: 'current-electricity',
    year: 2020,
    question: 'Two identical electric lamps are connected first in series and then in parallel to a constant voltage source. The ratio of the total power dissipated in series to the total power in parallel is:',
    options: ['1:1', '1:2', '1:4', '4:1'],
    correctAnswer: 2,
    explanation: 'Let lamp resistance be R. In series, R_eq = 2R, so P_series = V² / 2R. In parallel, R_eq = R/2, so P_parallel = V² / (R/2) = 2V² / R. Ratio = (V²/2R) / (2V²/R) = 1/4 or 1:4.',
    tags: ['Power', 'Resistor Combinations'],
    difficulty: 'medium',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 12: Current Electricity',
    chapter: 'current-electricity',
    year: 2019,
    question: 'Which of the following laws represents the principle of conservation of energy applied to electric circuits?',
    options: ['Ohm\'s Law', 'Kirchhoff\'s Junction Law', 'Kirchhoff\'s Loop Law', 'Coulomb\'s Law'],
    correctAnswer: 2,
    explanation: 'Kirchhoff\'s Loop Law (ΣV = 0 inside any closed loop) states that the sum of potential drops and gains is zero, which is a direct consequence of the conservation of energy.',
    tags: ['Kirchhoff\'s Laws', 'Conservation Principles'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 12: Current Electricity',
    chapter: 'current-electricity',
    year: 2018,
    question: 'The drift velocity of electrons (v_d) in a metallic conductor is related to the applied electric field (E) and relaxation time (τ) by the formula:',
    options: ['v_d = (eEτ)/m', 'v_d = (mE)/(eτ)', 'v_d = (eE)/(mτ)', 'v_d = (eτ)/(mE)'],
    correctAnswer: 0,
    explanation: 'Drift velocity v_d equals acceleration (a) multiplied by relaxation time (τ). Since force F = eE and a = F/m = eE/m, it follows that v_d = aτ = (eEτ)/m.',
    tags: ['Drift Velocity', 'Electric Field'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 12: Current Electricity',
    chapter: 'current-electricity',
    year: 2017,
    question: 'A Wheatstone bridge consists of four arms P, Q, R, S. Under balanced conditions, the galvanometer shows no deflection. Which of the following is true?',
    options: ['P/S = R/Q', 'P*R = Q*S', 'P/Q = R/S', 'P-Q = R-S'],
    correctAnswer: 2,
    explanation: 'For a balanced Wheatstone bridge, no current flows through the central galvanometer branch. This happens when the ratio of adjacent arms is equal: P/Q = R/S.',
    tags: ['Wheatstone Bridge', 'Balanced Condition'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 12: Current Electricity',
    chapter: 'current-electricity',
    year: 2016,
    question: 'If the temperature of a purely metallic conductor increases, what happens to its resistance (R) and resistivity (ρ)?',
    options: ['Both R and ρ decrease', 'R increases but ρ decreases', 'Both R and ρ increase', 'R decreases but ρ increases'],
    correctAnswer: 2,
    explanation: 'For metals, collision frequency increases with temperature, causing relaxation time (τ) to decrease. Since ρ = m / (ne²τ), resistivity increases. Because R = ρ(L/A), resistance R will also increase.',
    tags: ['Temperature Dependence', 'Resistivity'],
    difficulty: 'medium',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 12: Current Electricity',
    chapter: 'current-electricity',
    year: 2015,
    question: 'Three resistors of 2 Ω, 3 Ω, and 6 Ω are connected in parallel. Their equivalent resistance is:',
    options: ['11 Ω', '1 Ω', '1.2 Ω', '1.5 Ω'],
    correctAnswer: 1,
    explanation: 'For parallel combination: 1/R_eq = 1/2 + 1/3 + 1/6 = (3+2+1)/6 = 6/6 = 1. Therefore, R_eq = 1 Ω.',
    tags: ['Resistor Combinations', 'Parallel'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 12: Current Electricity',
    chapter: 'current-electricity',
    year: 2014,
    question: 'A cell provides a constant EMF of 2V. When connected to an external resistance of 2 Ω, it delivers a current of 0.8 A. The internal resistance of the cell is:',
    options: ['0.5 Ω', '0.2 Ω', '1.0 Ω', '1.5 Ω'],
    correctAnswer: 0,
    explanation: 'Current I = E / (R + r). Given I = 0.8 A, E = 2 V, R = 2 Ω. So 0.8 = 2 / (2 + r) => 2 + r = 2 / 0.8 = 2.5 => r = 0.5 Ω.',
    tags: ['Internal Resistance', 'EMF', 'Ohm\'s Law'],
    difficulty: 'medium',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 12: Current Electricity',
    chapter: 'current-electricity',
    year: 2013,
    question: 'An electric bulb is rated 220 V and 100 W. When it is operated on 110 V, the power consumed will be:',
    options: ['100 W', '50 W', '25 W', '75 W'],
    correctAnswer: 2,
    explanation: 'The resistance of the bulb is constant. R = V_rated² / P_rated = (220)²/100 = 484 Ω. If operated at 110 V, Power P\' = V\'² / R = (110)² / 484 = 12100 / 484 = 25 W.',
    tags: ['Power', 'Resistance'],
    difficulty: 'medium',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 12: Current Electricity',
    chapter: 'current-electricity',
    year: 2012,
    question: 'A current of 2 A flows through a conductor. The number of electrons passing through any cross-section of the conductor per second is approximately:',
    options: ['1.25 × 10¹⁹', '6.25 × 10¹⁸', '2.5 × 10¹⁹', '10²⁰'],
    correctAnswer: 0,
    explanation: 'Current I = n*e, where n is number of electrons per second and e is the elementary charge (1.6 × 10⁻¹⁹ C). n = I/e = 2 / (1.6 × 10⁻¹⁹) = 1.25 × 10¹⁹ electrons/sec.',
    tags: ['Electric Current', 'Quantization'],
    difficulty: 'medium',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 12: Current Electricity',
    chapter: 'current-electricity',
    year: 2011,
    question: ' Kirchhoff\'s first law (Junction law) states that ΣI = 0 at a junction. This is a reflection of the conservation of:',
    options: ['Energy', 'Mass', 'Charge', 'Momentum'],
    correctAnswer: 2,
    explanation: 'The junction law ensures that charges neither build up nor disappear at a junction. This represents the conservation of electric charge.',
    tags: ['Kirchhoff\'s Laws', 'Conservation Principles'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 12: Current Electricity',
    chapter: 'current-electricity',
    year: 2010,
    question: 'Using a metre bridge, the null point is obtained at 40 cm from one end. If the known resistance is 60 Ω, what is the value of the unknown resistance on the other side?',
    options: ['20 Ω', '40 Ω', '90 Ω', '60 Ω'],
    correctAnswer: 1,
    explanation: 'Metre bridge is a practical application of the Wheatstone bridge. R/S = L / (100 - L). Let the unknown on the left vary. S / 60 = 40 / (100-40) = 40 / 60. So S = (40/60) * 60 = 40 Ω.',
    tags: ['Metre Bridge', 'Wheatstone Bridge'],
    difficulty: 'medium',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 12: Current Electricity',
    chapter: 'current-electricity',
    year: 2009,
    question: 'The specific resistance (resistivity) of a wire depends on:',
    options: ['Its length', 'Its cross-sectional area', 'Its mass', 'The nature of its material'],
    correctAnswer: 3,
    explanation: 'Resistivity ρ = m / (ne²τ). It is a fundamental property of the material and its temperature, completely independent of the geometrical dimensions of the resistor.',
    tags: ['Resistivity', 'Material Property'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  }
];

async function run() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Connected to DB');

    const delRes = await Question.deleteMany({ chapter: 'current-electricity' });
    console.log(`Deleted ${delRes.deletedCount} old placeholder/generic questions.`);

    const insRes = await Question.insertMany(questionsToSeed);
    console.log(`Successfully seeded ${insRes.length} pristine PYQs for current electricity.`);

    mongoose.connection.close();
  } catch (e) {
    console.error(e);
    mongoose.connection.close();
  }
}

run();
