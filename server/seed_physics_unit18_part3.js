import mongoose from 'mongoose';
import Question from './models/Question.js';
import 'dotenv/config';

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/neet';

const questionsToSeed = [
  {
    subject: 'physics', unit: 'Unit 18: Dual Nature of Matter and Radiation', chapter: 'dual-nature', year: 2007,
    question: "5W source 5000A at 0.5m liberates photoelectrons. Distance 1.0m, photoelectrons reduced by factor of (2007)",
    options: ["8", "16", "2", "4"],
    correctAnswer: 3, explanation: "Intensity is inversely proportional to distance squared. Number of electrons proportional to intensity. Reduced by 4.", tags: ["Photoelectric Effect"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 18: Dual Nature of Matter and Radiation', chapter: 'dual-nature', year: 2006,
    question: "Photocell employs photoelectric effect to convert (2006)",
    options: ["change frequency into current", "change frequency into voltage", "change intensity into current", "change intensity into work function"],
    correctAnswer: 2, explanation: "Converts light intensity linearly to electric current.", tags: ["Photoelectric Effect"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 18: Dual Nature of Matter and Radiation', chapter: 'dual-nature', year: 2006,
    question: "hv on Al (work function E). Max KE is K. Frequency doubled, max KE is (2006)",
    options: ["K+hv", "K+E", "2K", "K"],
    correctAnswer: 0, explanation: "hv = E + K. 2hv = E + K'. K' = 2hv - E = 2hz - (hv-K) = hv + K.", tags: ["Photoelectric Equation"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 18: Dual Nature of Matter and Radiation', chapter: 'dual-nature', year: 2006,
    question: "Discharge tube ionization due to collisions between (2006)",
    options: ["neutral gas atoms", "positive ions and neutral atoms", "negative electrons and neutral atoms", "photons and neutral atoms"],
    correctAnswer: 2, explanation: "Accelerated electrons from cathode collide with neutral atoms.", tags: ["Cathode Rays"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 18: Dual Nature of Matter and Radiation', chapter: 'dual-nature', year: 2006,
    question: "Momentum of photon 1 MeV in kg m/s is (2006)",
    options: ["5e-22", "0.33e6", "7e-24", "1e-22"],
    correctAnswer: 0, explanation: "p = E/c = 1e6 * 1.6e-19 / 3e8 = 5.3e-22.", tags: ["Photons"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 18: Dual Nature of Matter and Radiation', chapter: 'dual-nature', year: 2005,
    question: "Work functions A: 1.92eV, B: 2.0eV, C: 5.0eV. Wavelength 4100A incident. Which emits? (2005)",
    options: ["A only", "A and B only", "all three", "none"],
    correctAnswer: 1, explanation: "E = 1240 / 410 = 3 eV. A and B have W < 3eV.", tags: ["Photoelectric Effect"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 18: Dual Nature of Matter and Radiation', chapter: 'dual-nature', year: 2005,
    question: "Work function h*v0. 2h*v0 gives 4x10^6 m/s. 5h*v0 gives max velocity (2005)",
    options: ["2x10^7", "2x10^6", "8x10^6", "8x10^5"],
    correctAnswer: 2, explanation: "KE1 = 2hv0 - hv0 = hv0. KE2 = 5hv0 - hv0 = 4hv0 (4 times). v scales by sqrt(4) = 2. v2 = 8x10^6.", tags: ["Photoelectric Equation"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 18: Dual Nature of Matter and Radiation', chapter: 'dual-nature', year: 2004,
    question: "Graph between KE photoelectrons and frequency incident radiation is (2004, 1996)",
    options: ["straight line through origin", "parabola", "exponential", "straight line with intercept on frequency axis"],
    correctAnswer: 3, explanation: "KE = hv - W. Straight line with slope h and positive frequency intercept.", tags: ["Photoelectric Graphs"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 18: Dual Nature of Matter and Radiation', chapter: 'dual-nature', year: 2003,
    question: "Photocell point source 1m to 2m then (2003)",
    options: ["each electron carries quarter energy", "number emitted half", "each emitted half energy", "number emitted a quarter"],
    correctAnswer: 3, explanation: "Intensity drops by 4. Number of electrons proportional to intensity.", tags: ["Photoelectric Effect"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 18: Dual Nature of Matter and Radiation', chapter: 'dual-nature', year: 2003,
    question: "JJ Thomson cathode-ray experiment demonstrated that (2003)",
    options: ["cathode rays are negative ions", "mass is in nucleus", "e/m of electrons is much greater than e/m of protons", "e/m changes with gas"],
    correctAnswer: 2, explanation: "Established basic properties of electrons.", tags: ["Cathode Rays"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 18: Dual Nature of Matter and Radiation', chapter: 'dual-nature', year: 2002,
    question: "Planck constant value (2002)",
    options: ["6.63e-34 J/sec", "6.63e-34 kg-m^2/sec", "6.63e-34 kg-m^2", "6.63e-34 J-sec"],
    correctAnswer: 3, explanation: "Unit is Joule-seconds.", tags: ["Photons"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 18: Dual Nature of Matter and Radiation', chapter: 'dual-nature', year: 2002,
    question: "Particles moving with same velocity, maximum de Broglie wavelength is (2002)",
    options: ["proton", "alpha-particle", "neutron", "beta-particle"],
    correctAnswer: 3, explanation: "L = h/mv. Same v, smallest mass has max L. Beta particle (electron) is lightest.", tags: ["de Broglie Wavelength"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 18: Dual Nature of Matter and Radiation', chapter: 'dual-nature', year: 2002,
    question: "Ultraviolet rays on metal plate no photoelectric effect. Occurs by incidence of (2002)",
    options: ["infrared", "X-rays", "radio", "micro"],
    correctAnswer: 1, explanation: "Requires higher frequency, thus smaller wavelength. X-rays.", tags: ["Photoelectric Effect"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 18: Dual Nature of Matter and Radiation', chapter: 'dual-nature', year: 2002,
    question: "Which of following is not property of cathode rays? (2002)",
    options: ["heating effect", "does not deflect in electric field", "casts shadow", "produces fluorescence"],
    correctAnswer: 1, explanation: "Cathode rays are electrons, so they do deflect in electric and magnetic fields.", tags: ["Cathode Rays"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 18: Dual Nature of Matter and Radiation', chapter: 'dual-nature', year: 2001,
    question: "Which shows particle nature of light? (2001)",
    options: ["photoelectric effect", "interference", "refraction", "polarization"],
    correctAnswer: 0, explanation: "Photoelectric effect established light as particles (photons).", tags: ["Dual Nature"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 18: Dual Nature of Matter and Radiation', chapter: 'dual-nature', year: 2001,
    question: "Thomson mass spectro E perp B velocity of electron beam (2001)",
    options: ["E/B", "ExB", "B/E", "E^2/B^2"],
    correctAnswer: 0, explanation: "v = E/B.", tags: ["Magnetism", "Cathode Rays"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 18: Dual Nature of Matter and Radiation', chapter: 'dual-nature', year: 2001,
    question: "Photocell distance d. If d/2, number of electrons emitted (2001)",
    options: ["same", "four times", "two times", "one-fourth"],
    correctAnswer: 1, explanation: "Intensity I prop 1/d^2. So I becomes 4I.", tags: ["Photoelectric Effect"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 18: Dual Nature of Matter and Radiation', chapter: 'dual-nature', year: 2000,
    question: "By photoelectric effect, Einstein proved (2000)",
    options: ["E=hv", "KE=1/2mv^2", "E=mc^2", "E=R_hc/n^2"],
    correctAnswer: 0, explanation: "E=hv for photon energy.", tags: ["Dual Nature"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 18: Dual Nature of Matter and Radiation', chapter: 'dual-nature', year: 2000,
    question: "Who evaluated mass of electron indirectly with help of charge (2000)",
    options: ["Thomson", "Millikan", "Rutherford", "Newton"],
    correctAnswer: 0, explanation: "Thomson measured e/m, and with Millikan measuring e, mass was found.", tags: ["Cathode Rays"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 18: Dual Nature of Matter and Radiation', chapter: 'dual-nature', year: 1999,
    question: "Proton accelerated through 1V, kinetic energy is (1999)",
    options: ["1 eV", "13.6 eV", "1840 eV", "0.54 eV"],
    correctAnswer: 0, explanation: "Proton charge is 1e. Energy is 1eV.", tags: ["Matter Waves"], difficulty: "easy", verified: true, source: "manual"
  }
];

async function run() {
  try {
    await mongoose.connect(MONGO_URI);
    await Question.insertMany(questionsToSeed);
    console.log(`Seeded 20 more questions for Unit 18 (Part 3).`);
    mongoose.connection.close();
  } catch (e) {
    console.error(e);
    mongoose.connection.close();
  }
}
run();
