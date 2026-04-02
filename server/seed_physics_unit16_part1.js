import mongoose from 'mongoose';
import Question from './models/Question.js';
import 'dotenv/config';

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/neet';

const questionsToSeed = [
  {
    subject: 'physics', unit: 'Unit 16: Electromagnetic Waves', chapter: 'em-waves', year: 0,
    question: "An electromagnetic wave in vacuum has electric and magnetic field E and B, always perpendicular. Direction of polarization is X and wave propagation is k. Then",
    options: ["X || B and k || B x E", "X || E and k || E x B", "X || B and k || E x B", "X || E and k || B x E"],
    correctAnswer: 1, explanation: "Direction of polarization is defined by the direction of electric field E. So X || E. Direction of propagation is given by E x B (Poynting vector direction). So k || E x B.", tags: ["EM Waves"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 16: Electromagnetic Waves', chapter: 'em-waves', year: 0,
    question: "The rms value of electric field of light coming from Sun is 720 N/C. The average total energy density of the EM wave is",
    options: ["4.58 x 10^-6 J/m^3", "6.37 x 10^-9 J/m^3", "81.35 x 10^-12 J/m^3", "3.3 x 10^-3 J/m^3"],
    correctAnswer: 0, explanation: "Total average energy density = epsilon_0 * Erms^2 = 8.85x10^-12 * (720)^2 = 4.58 x 10^-6 J/m^3.", tags: ["Energy Density"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 16: Electromagnetic Waves', chapter: 'em-waves', year: 0,
    question: "In order to establish instantaneous displacement current of 1 mA in 2 microF parallel plate capacitor, the potential difference need to apply is",
    options: ["100 Vs^-1", "200 Vs^-1", "300 Vs^-1", "500 Vs^-1"],
    correctAnswer: 3, explanation: "Id = C (dV/dt). dV/dt = Id / C = 10^-3 / 2x10^-6 = 500 V/s.", tags: ["Displacement Current"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 16: Electromagnetic Waves', chapter: 'em-waves', year: 0,
    question: "During propagation of electromagnetic waves in a medium:",
    options: ["Electric energy density is double of magnetic energy density", "Electric energy density is half of magnetic energy density", "Electric energy density is equal to magnetic energy density", "Both are zero"],
    correctAnswer: 2, explanation: "In an EM wave, energy is equally divided between electric and magnetic fields.", tags: ["Energy Density"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 16: Electromagnetic Waves', chapter: 'em-waves', year: 0,
    question: "EM wave with frequency w and wavelength L travels in +y direction. Its magnetic field is along +x axis. The vector equation for electric field is",
    options: ["E0 cos(w t + 2pi/L y) x-hat", "E0 cos(w t - 2pi/L y) x-hat", "E0 cos(w t - 2pi/L y) z-hat", "E0 cos(w t + 2pi/L y) z-hat"],
    correctAnswer: 2, explanation: "Propagation is +y, so phase is (wt - ky) or (ky - wt). k = 2pi/L. E x B direction is +y. Since B is +x, E x (i) = j implies E must be along +z direction (k-hat x i-hat = j-hat). Thus E is along z-axis. The equation is E_z = E0 cos(wt - ky).", tags: ["EM Waves"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 16: Electromagnetic Waves', chapter: 'em-waves', year: 0,
    question: "EM wave of frequency 3.0 MHz passes from vacuum into dielectric medium with permittivity e=4.0. Then",
    options: ["wavelength is halved, frequency unchanged", "wavelength doubled, frequency halved", "wavelength doubled, frequency unchanged", "both unchanged"],
    correctAnswer: 0, explanation: "Frequency remains constant. v = c / sqrt(epsilon_r * mu_r). e_r = 4, so v = c/2. v = f L => wavelength is halved.", tags: ["EM Waves", "Medium"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 16: Electromagnetic Waves', chapter: 'em-waves', year: 0,
    question: "Average electric field of EM waves in free space is 9 x 10^-4 N/C. Average magnetic field is",
    options: ["27 x 10^-4 T", "3 x 10^-12 T", "1/3 x 10^-12 T", "3 x 10^12 T"],
    correctAnswer: 1, explanation: "B = E / c = 9x10^-4 / 3x10^8 = 3x10^-12 T.", tags: ["Relation between E and B"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 16: Electromagnetic Waves', chapter: 'em-waves', year: 0,
    question: "Electric field travelling through vacuum E = E0 sin(kx - wt). Quantity independent of wavelength is",
    options: ["k w", "k/w", "k^2 w", "w"],
    correctAnswer: 1, explanation: "k/w = (2pi/L) / (2pif) = 1/(f L) = 1/v = 1/c. Speed of light c is independent of wavelength in vacuum.", tags: ["EM Waves"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 16: Electromagnetic Waves', chapter: 'em-waves', year: 0,
    question: "E and B field of EM wave propagating along +z-axis can be represented by",
    options: ["E=E0 i, B=B0 j", "E=E0 k, B=B0 i", "E=E0 j, B=B0 i", "E=E0 j, B=B0 k"],
    correctAnswer: 0, explanation: "E x B must be in +z direction (k-hat). i x j = k.", tags: ["EM Waves"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 16: Electromagnetic Waves', chapter: 'em-waves', year: 0,
    question: "Energy of EM wave in vacuum is given by",
    options: ["epsilon0 E^2 + B^2 / (2mu0)", "1/2 epsilon0 E^2 + 1/2 B^2 / mu0", "BE / (2c)", "1/2 epsilon0 E^2 + B^2 / (2epsilon0 mu0)"],
    correctAnswer: 1, explanation: "Total energy density = u_E + u_B = 1/2 epsilon0 E^2 + 1/2 B^2 / mu0.", tags: ["Energy Density"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 16: Electromagnetic Waves', chapter: 'em-waves', year: 0,
    question: "Plane EM wave incident normally on plane surface area A, perfectly reflected. If energy E strikes surface in time t, average pressure is (c = speed of light)",
    options: ["zero", "E / (A t c)", "2E / (A t c)", "E / c"],
    correctAnswer: 2, explanation: "Momentum p = E/c. Change in momentum = 2p = 2E/c. Force = 2p/t = 2E/(ct). Pressure = Force / A = 2E / (A c t).", tags: ["Radiation Pressure"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 16: Electromagnetic Waves', chapter: 'em-waves', year: 0,
    question: "EM wave travels along z-axis. Which pairs of space and time varying fields generate such a wave?",
    options: ["Ex, By", "Ey, Bx", "Ez, Bx", "Ey, Bz"],
    correctAnswer: 0, explanation: "E x B must be k-hat. Ex(i) x By(j) gives k-hat. Ey(j) x Bx(i) gives -k-hat.", tags: ["EM Waves"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 16: Electromagnetic Waves', chapter: 'em-waves', year: 0,
    question: "Magnetic field peak value 20 nT. Peak value of electric field is",
    options: ["3 V/m", "6 V/m", "9 V/m", "12 V/m"],
    correctAnswer: 1, explanation: "E0 = B0 * c = 20x10^-9 * 3x10^8 = 6 V/m.", tags: ["Relation between E and B"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 16: Electromagnetic Waves', chapter: 'em-waves', year: 0,
    question: "Microwave oven acts on the principle of:",
    options: ["giving rotational energy to water molecules", "giving translational energy to water molecules", "giving vibrational energy to water molecules", "transferring electrons from lower to higher energy levels"],
    correctAnswer: 2, explanation: "Actually, it causes water molecules to vibrate/rotate at resonant frequencies, increasing their thermal energy. The given answer key states 'vibrational energy'.", tags: ["Applications"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 16: Electromagnetic Waves', chapter: 'em-waves', year: 0,
    question: "Displacement current is",
    options: ["continuous when electric field is changing", "continuous when magnetic field is changing", "continuous in both", "continuous through wires"],
    correctAnswer: 0, explanation: "Displacement current exists wherever there is a changing electric field with respect to time.", tags: ["Displacement Current"], difficulty: "easy", verified: true, source: "manual"
  }
];

async function run() {
  try {
    await mongoose.connect(MONGO_URI);
    await Question.deleteMany({ chapter: 'em-waves' });
    await Question.insertMany(questionsToSeed);
    console.log(`Seeded 15 questions for Unit 16 (Part 1).`);
    mongoose.connection.close();
  } catch (e) {
    console.error(e);
    mongoose.connection.close();
  }
}
run();
