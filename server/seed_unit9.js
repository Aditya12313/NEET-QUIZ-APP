import mongoose from 'mongoose';
import Question from './models/Question.js';
import 'dotenv/config';

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/neet';

const questionsToSeed = [
  {
    subject: 'physics',
    unit: 'Unit 9: Kinetic Theory of Gases',
    chapter: 'ktg',
    year: 2023,
    question: 'The root mean square (rms) speed of oxygen molecules (O2) at a certain temperature T is v. If the temperature is doubled and oxygen gas dissociates into atomic oxygen, the rms speed becomes:',
    options: ['v', '2v', '√2 v', 'v/2'],
    correctAnswer: 1,
    explanation: 'v_rms = √(3RT/M). Initially M is 32. Finally, T becomes 2T and M becomes 16 (atomic oxygen). New v_rms = √(3R(2T)/(M/2)) = √(4 * 3RT/M) = 2v.',
    tags: ['RMS Speed', 'Dissociation', 'Temperature'],
    difficulty: 'medium',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 9: Kinetic Theory of Gases',
    chapter: 'ktg',
    year: 2022,
    question: 'Two vessels separately contain two ideal gases A and B at the same temperature. The pressure of A being twice that of B. Under such conditions, the density of A is found to be 1.5 times the density of B. The ratio of molecular weight of A and B is:',
    options: ['3/4', '4/3', '1/2', '2/3'],
    correctAnswer: 0,
    explanation: 'From ideal gas equation PV = nRT = (m/M)RT, we have P = (ρRT)/M. Since T is same, P ∝ ρ/M => M ∝ ρ/P. Thus M_A/M_B = (ρ_A / ρ_B) * (P_B / P_A) = 1.5 * (1/2) = 1.5/2 = 3/4.',
    tags: ['Gas Equation', 'Density', 'Molecular Weight'],
    difficulty: 'hard',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 9: Kinetic Theory of Gases',
    chapter: 'ktg',
    year: 2021,
    question: 'Which of the following relations between rms speed (v_rms), average speed (v_avg), and most probable speed (v_mp) is correct for a given gas at a constant temperature?',
    options: ['v_rms < v_avg < v_mp', 'v_rms > v_avg > v_mp', 'v_mp > v_rms > v_avg', 'v_avg > v_rms > v_mp'],
    correctAnswer: 1,
    explanation: 'v_rms = √(3RT/M) ≈ 1.73√(RT/M), v_avg = √(8RT/πM) ≈ 1.60√(RT/M), v_mp = √(2RT/M) ≈ 1.41√(RT/M). So, v_rms > v_avg > v_mp.',
    tags: ['Speed Distribution', 'Comparison'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 9: Kinetic Theory of Gases',
    chapter: 'ktg',
    year: 2020,
    question: 'For a diatomic gas at room temperature, the ratio of specific heats γ (Cp/Cv) is:',
    options: ['1.67', '1.40', '1.33', '1.28'],
    correctAnswer: 1,
    explanation: 'At room temperature, a diatomic gas has 5 degrees of freedom (f=5). γ = 1 + (2/f) = 1 + 2/5 = 7/5 = 1.40.',
    tags: ['Specific Heats Ratio', 'Degrees of Freedom'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 9: Kinetic Theory of Gases',
    chapter: 'ktg',
    year: 2019,
    question: 'According to the equipartition theorem, the average kinetic energy associated with each degree of freedom per molecule of an ideal gas is:',
    options: ['kT', '1/2 kT', '3/2 kT', '3/2 RT'],
    correctAnswer: 1,
    explanation: 'The law of equipartition of energy states that for a dynamic system in thermal equilibrium, the total energy is distributed equally among all degrees of freedom, and the energy associated with each is 1/2 kT.',
    tags: ['Equipartition of Energy', 'Degrees of Freedom'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 9: Kinetic Theory of Gases',
    chapter: 'ktg',
    year: 2018,
    question: 'The mean free path of gas molecules depends on the number density (n) and the diameter of the molecule (d) as:',
    options: ['λ ∝ n/d²', 'λ ∝ 1/(n * d²)', 'λ ∝ 1/(n * d)', 'λ ∝ n * d²'],
    correctAnswer: 1,
    explanation: 'The mean free path is given by λ = 1 / (√2 π d² n). Hence it is inversely proportional to both number density (n) and the square of molecular diameter (d²).',
    tags: ['Mean Free Path', 'Number Density'],
    difficulty: 'medium',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 9: Kinetic Theory of Gases',
    chapter: 'ktg',
    year: 2017,
    question: 'One mole of an ideal monoatomic gas is mixed with one mole of an ideal diatomic gas. The molar specific heat of the mixture at constant volume (Cv_mix) is:',
    options: ['R', '1.5 R', '2 R', '2.5 R'],
    correctAnswer: 2,
    explanation: 'Cv_mix = (n1*Cv1 + n2*Cv2) / (n1 + n2) = [1*(3/2)R + 1*(5/2)R] / (1 + 1) = [8/2 R] / 2 = 4R / 2 = 2R.',
    tags: ['Gas Mixtures', 'Specific Heat'],
    difficulty: 'hard',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 9: Kinetic Theory of Gases',
    chapter: 'ktg',
    year: 2016,
    question: 'The average kinetic energy of a gas molecule depends only on its:',
    options: ['Pressure', 'Volume', 'Absolute Temperature', 'Nature of the gas'],
    correctAnswer: 2,
    explanation: 'The average kinetic energy of a gas molecule is E = (f/2)kT, which depends exclusively on the absolute temperature (T) of the gas.',
    tags: ['Kinetic Energy', 'Temperature Dependence'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 9: Kinetic Theory of Gases',
    chapter: 'ktg',
    year: 2015,
    question: 'Increase in temperature of a gas filled in a container would lead to:',
    options: ['Decrease in its pressure', 'Decrease in intermolecular distance', 'Increase in its mass', 'Increase in its kinetic energy'],
    correctAnswer: 3,
    explanation: 'Kinetic energy of gas molecules is directly proportional to the absolute temperature. An increase in temperature leads to an increase in kinetic energy.',
    tags: ['Temperature', 'Kinetic Energy'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 9: Kinetic Theory of Gases',
    chapter: 'ktg',
    year: 2014,
    question: 'If the pressure of a gas is doubled at constant temperature, the mean free path will become:',
    options: ['Double', 'Half', 'Four times', 'Remains same'],
    correctAnswer: 1,
    explanation: 'Mean free path λ = kT / (√2 π d² P). Since λ is inversely proportional to pressure (at constant T), doubling the pressure cuts the mean free path in half.',
    tags: ['Mean Free Path', 'Pressure'],
    difficulty: 'medium',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 9: Kinetic Theory of Gases',
    chapter: 'ktg',
    year: 2013,
    question: 'A gas mixture consists of 2 moles of oxygen and 4 moles of argon at temperature T. Neglecting all vibrational modes, the total internal energy of the system is:',
    options: ['4 RT', '15 RT', '9 RT', '11 RT'],
    correctAnswer: 3,
    explanation: 'Argon is monoatomic (f=3), U_Ar = n*(f/2)RT = 4*(3/2)RT = 6RT. Oxygen is diatomic (f=5), U_O2 = n*(f/2)RT = 2*(5/2)RT = 5RT. Total U = 6RT + 5RT = 11RT.',
    tags: ['Internal Energy', 'Gas Mixtures', 'Degrees of Freedom'],
    difficulty: 'hard',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 9: Kinetic Theory of Gases',
    chapter: 'ktg',
    year: 2012,
    question: 'To what temperature should hydrogen gas at 27°C be heated at constant pressure so that the root mean square velocity of its molecules becomes double?',
    options: ['108°C', '1200°C', '927°C', '1127°C'],
    correctAnswer: 2,
    explanation: 'v_rms ∝ √T. To double v_rms, T must become 4 times. Initial T = 27 + 273 = 300 K. Final T = 4 * 300 = 1200 K. In Celsius: 1200 - 273 = 927°C.',
    tags: ['RMS Speed', 'Temperature Variation'],
    difficulty: 'medium',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 9: Kinetic Theory of Gases',
    chapter: 'ktg',
    year: 2011,
    question: 'At which temperature is the root mean square velocity of gaseous hydrogen molecules equal to that of oxygen molecules at 47°C?',
    options: ['20 K', '40 K', '80 K', '10 K'],
    correctAnswer: 0,
    explanation: 'v_rms = √(3RT/M). For H2 and O2 speeds to be equal: T_H2 / M_H2 = T_O2 / M_O2. T_O2 = 47 + 273 = 320 K. M_H2 = 2, M_O2 = 32. T_H2 / 2 = 320 / 32 => T_H2 = (320 * 2) / 32 = 20 K.',
    tags: ['RMS Speed', 'Gas Comparison'],
    difficulty: 'medium',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 9: Kinetic Theory of Gases',
    chapter: 'ktg',
    year: 2010,
    question: 'The product of pressure and volume (PV) of an ideal gas is equal to:',
    options: ['1/2 translation kinetic energy', '2/3 translation kinetic energy', 'translation kinetic energy', '3/2 translation kinetic energy'],
    correctAnswer: 1,
    explanation: 'The translational kinetic energy of an ideal gas is E = (3/2)PV. Rearranging this gives PV = (2/3)E. Thus, PV is equal to 2/3 of the translational kinetic energy.',
    tags: ['Gas Equation', 'Translational Kinetic Energy'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 9: Kinetic Theory of Gases',
    chapter: 'ktg',
    year: 2009,
    question: 'Which of the following assumptions is NOT part of the Kinetic Theory of ideal gases?',
    options: ['Molecules move in rapid, random, straight-line motion', 'Collisions are perfectly elastic', 'There are strong intermolecular forces of attraction', 'Volume of molecules is negligible compared to container volume'],
    correctAnswer: 2,
    explanation: 'A core assumption of the kinetic theory of ideal gases is that there are NO intermolecular forces of attraction between the gas molecules except during the momentary elastic collisions.',
    tags: ['Ideal Gas Assumptions', 'Theory'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  }
];

async function run() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Connected to DB');

    const delRes = await Question.deleteMany({ chapter: 'ktg' });
    console.log(`Deleted ${delRes.deletedCount} old placeholder/generic questions.`);

    const insRes = await Question.insertMany(questionsToSeed);
    console.log(`Successfully seeded ${insRes.length} pristine PYQs for ktg.`);

    mongoose.connection.close();
  } catch (e) {
    console.error(e);
    mongoose.connection.close();
  }
}

run();
