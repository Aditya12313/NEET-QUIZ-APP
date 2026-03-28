import mongoose from 'mongoose';
import Question from './models/Question.js';
import 'dotenv/config';

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/neet';

const questionsToSeed = [
  {
    subject: 'physics',
    unit: 'Unit 7: Oscillations and Waves',
    chapter: 'oscillations-waves',
    year: 2023,
    question: 'A particle executes simple harmonic motion (SHM) with an amplitude A. At what displacement from the mean position is its kinetic energy equal to its potential energy?',
    options: ['A/2', 'A/√2', 'A/4', 'A'],
    correctAnswer: 1,
    explanation: 'Total Energy E = 1/2 kA². When KE = PE, then PE = E/2. So 1/2 kx² = 1/4 kA² => x² = A²/2 => x = A/√2.',
    tags: ['SHM', 'Energy'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 7: Oscillations and Waves',
    chapter: 'oscillations-waves',
    year: 2022,
    question: 'A simple pendulum has a time period T on the surface of the earth. If it is taken to a height equal to the radius of the earth (R), its new time period will be:',
    options: ['T / √2', '√2 T', '2T', 'T/2'],
    correctAnswer: 2,
    explanation: 'At height h = R, g\' = g / (1 + R/R)² = g/4. Since T = 2π√(L/g), T\' ∝ 1/√g\'. Therefore, T\' = T * √(g / (g/4)) = T * √4 = 2T.',
    tags: ['Simple Pendulum', 'Time Period'],
    difficulty: 'medium',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 7: Oscillations and Waves',
    chapter: 'oscillations-waves',
    year: 2021,
    question: 'The displacement of a particle executing SHM is given by y = 0.2 sin(50πt + π/3) meters. The maximum velocity of the particle is:',
    options: ['10 m/s', '10π m/s', '0.2 m/s', '50 m/s'],
    correctAnswer: 1,
    explanation: 'Comparing with standard equation y = A sin(ωt + φ), we have A = 0.2 m and ω = 50π rad/s. Maximum velocity v_max = Aω = 0.2 * 50π = 10π m/s.',
    tags: ['SHM Equations', 'Velocity'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 7: Oscillations and Waves',
    chapter: 'oscillations-waves',
    year: 2020,
    question: 'Two tuning forks A and B sounded together produce 4 beats per second. When the prongs of fork B are loaded with a little wax, the beat frequency becomes 2 beats per second. If the frequency of fork A is 256 Hz, what is the original frequency of B?',
    options: ['252 Hz', '258 Hz', '260 Hz', '264 Hz'],
    correctAnswer: 2,
    explanation: 'Possible frequencies of B are 256 ± 4 = 260 Hz or 252 Hz. Since loading with wax decreases the frequency of B, if B was 260 Hz, decreasing it would make it closer to 256, bringing the beat frequency down to 2 Hz. If it was 252 Hz, decreasing it would increase the beat frequency. Thus, original frequency of B is 260 Hz.',
    tags: ['Beats', 'Sound Waves'],
    difficulty: 'medium',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 7: Oscillations and Waves',
    chapter: 'oscillations-waves',
    year: 2019,
    question: 'In a transverse progressive wave on a string, the distance between a consecutive crest and trough is:',
    options: ['λ', 'λ/2', 'λ/4', '2λ'],
    correctAnswer: 1,
    explanation: 'The distance between two consecutive crests is λ. The distance between a crest and its immediately adjacent trough is half of that, which is λ/2.',
    tags: ['Wave Motion', 'Wavelength'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 7: Oscillations and Waves',
    chapter: 'oscillations-waves',
    year: 2018,
    question: 'A train moving towards a stationary observer with a speed of 20 m/s blows a whistle of frequency 600 Hz. If the speed of sound in air is 340 m/s, the apparent frequency heard by the observer is:',
    options: ['600 Hz', '637.5 Hz', '566 Hz', '640 Hz'],
    correctAnswer: 1,
    explanation: 'Using the Doppler effect formula: f\' = f [v / (v - v_s)] = 600 * [340 / (340 - 20)] = 600 * (340/320) = 600 * (17/16) = 637.5 Hz.',
    tags: ['Doppler Effect', 'Apparent Frequency'],
    difficulty: 'medium',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 7: Oscillations and Waves',
    chapter: 'oscillations-waves',
    year: 2017,
    question: 'A mass m is attached to two distinct parallel springs (with constants k1 and k2) in a parallel combination. What is the time period of oscillation?',
    options: ['2π √(m / (k1+k2))', '2π √[m(k1+k2) / (k1k2)]', '2π √(m / (k1-k2))', '2π √[m / √(k1+k2)]'],
    correctAnswer: 0,
    explanation: 'For springs in parallel, the equivalent spring constant is k_eq = k1 + k2. Thus, the time period is T = 2π √(m / k_eq) = 2π √(m / (k1+k2)).',
    tags: ['Spring Mass System', 'Time Period'],
    difficulty: 'medium',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 7: Oscillations and Waves',
    chapter: 'oscillations-waves',
    year: 2016,
    question: 'A standing wave is produced on a string fixed at both ends. Its length is 2 m and it vibrates in 4 segments. The wavelength of the wave is:',
    options: ['2 m', '1 m', '0.5 m', '4 m'],
    correctAnswer: 1,
    explanation: 'If the string vibrates in n segments, L = n(λ/2). Here L = 2, n = 4. So, 2 = 4(λ/2) => 2 = 2λ => λ = 1 m.',
    tags: ['Standing Waves', 'String'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 7: Oscillations and Waves',
    chapter: 'oscillations-waves',
    year: 2015,
    question: 'The equation of a wave is given by y = 5 sin(10πt - 0.1πx) where x and y are in meters and t is in seconds. The velocity of the wave is:',
    options: ['10 m/s', '100 m/s', '50 m/s', '1 m/s'],
    correctAnswer: 1,
    explanation: 'Comparing with standard wave equation y = A sin(ωt - kx), we have ω = 10π and k = 0.1π. Wave velocity v = ω/k = 10π / 0.1π = 100 m/s.',
    tags: ['Wave Equation', 'Wave Velocity'],
    difficulty: 'medium',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 7: Oscillations and Waves',
    chapter: 'oscillations-waves',
    year: 2014,
    question: 'Two simple harmonic motions of angular frequency 100 rad/s and 1000 rad/s have the same displacement amplitude. The ratio of their maximum accelerations is:',
    options: ['1 : 10', '1 : 100', '100 : 1', '1 : 1000'],
    correctAnswer: 1,
    explanation: 'Maximum acceleration a_max = Aω². Since amplitudes are same, a1_max/a2_max = (ω1/ω2)² = (100/1000)² = (1/10)² = 1/100.',
    tags: ['SHM', 'Acceleration'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 7: Oscillations and Waves',
    chapter: 'oscillations-waves',
    year: 2013,
    question: 'The fundamental frequency of an open organ pipe is 300 Hz. What is the fundamental frequency of a closed organ pipe of the same length?',
    options: ['150 Hz', '300 Hz', '600 Hz', '75 Hz'],
    correctAnswer: 0,
    explanation: 'For an open pipe, f_open = v/2L. For a closed pipe, f_closed = v/4L. Thus, f_closed = f_open / 2 = 300 / 2 = 150 Hz.',
    tags: ['Standing Waves', 'Organ Pipes'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 7: Oscillations and Waves',
    chapter: 'oscillations-waves',
    year: 2012,
    question: 'A spring has a spring constant k and is cut into two equal halves. What is the spring constant of one half of the spring?',
    options: ['k', 'k/2', '2k', '4k'],
    correctAnswer: 2,
    explanation: 'The spring constant k is inversely proportional to its un-stretched length L (k ∝ 1/L). Cutting the spring in half halves its length, which doubles its spring constant. So new constant = 2k.',
    tags: ['Spring Constant', 'SHM'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 7: Oscillations and Waves',
    chapter: 'oscillations-waves',
    year: 2011,
    question: 'In SHM, the phase difference between velocity and acceleration is:',
    options: ['0', 'π/2', 'π', '3π/2'],
    correctAnswer: 1,
    explanation: 'Displacement x = Asin(ωt). Velocity v = dx/dt = Aωcos(ωt) = Aωsin(ωt + π/2). Acceleration a = dv/dt = -Aω²sin(ωt) = Aω²sin(ωt + π). The phase difference between velocity and acceleration is π - π/2 = π/2.',
    tags: ['SHM Equations', 'Phase Difference'],
    difficulty: 'medium',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 7: Oscillations and Waves',
    chapter: 'oscillations-waves',
    year: 2010,
    question: 'When a sound wave travels from air to water, which of the following quantities remains unchanged?',
    options: ['Velocity', 'Wavelength', 'Frequency', 'Amplitude'],
    correctAnswer: 2,
    explanation: 'Frequency is a characteristic of the wave source and does not change when the wave passes from one medium to another. Velocity and wavelength do change (since v = fλ, if v changes, λ must change).',
    tags: ['Wave Properties', 'Frequency'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 7: Oscillations and Waves',
    chapter: 'oscillations-waves',
    year: 2009,
    question: 'The amplitude of a damped oscillator drops to 1/3 of its initial value after 100 oscillations. What will its amplitude be after 200 oscillations?',
    options: ['1/6', '1/9', '1/12', '1/27'],
    correctAnswer: 1,
    explanation: 'In a damped oscillator, amplitude decays exponentially: A = A_0 e^(-bt). If after a time t (100 oscillations), A = A_0 / 3, then e^(-bt) = 1/3. After 200 oscillations (time 2t), amplitude A\' = A_0 e^(-b(2t)) = A_0 [e^(-bt)]² = A_0 * (1/3)² = A_0 / 9.',
    tags: ['Damped Oscillations', 'Amplitude'],
    difficulty: 'hard',
    verified: true,
    source: 'manual'
  }
];

async function run() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Connected to DB');

    const delRes = await Question.deleteMany({ chapter: 'oscillations-waves' });
    console.log(`Deleted ${delRes.deletedCount} old placeholder/generic questions.`);

    const insRes = await Question.insertMany(questionsToSeed);
    console.log(`Successfully seeded ${insRes.length} pristine PYQs for oscillations-waves.`);

    mongoose.connection.close();
  } catch (e) {
    console.error(e);
    mongoose.connection.close();
  }
}

run();
