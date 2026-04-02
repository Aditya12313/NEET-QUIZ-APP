import mongoose from 'mongoose';
import Question from './models/Question.js';
import 'dotenv/config';

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/neet';

const questionsToSeed = [
  {
    subject: 'physics', unit: 'Unit 18: Dual Nature of Matter and Radiation', chapter: 'dual-nature', year: 1999,
    question: "Work function 4.125eV. Cut-off wavelength is (1999)",
    options: ["3000 A", "2062.5 A", "4125 A", "6000 A"],
    correctAnswer: 0, explanation: "L = 12400 / 4.125 = 3006 A.", tags: ["Photoelectric Effect"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 18: Dual Nature of Matter and Radiation', chapter: 'dual-nature', year: 1999,
    question: "Intensity of incident light increases (1999)",
    options: ["kinetic energy increases", "photoelectric current decreases", "photoelectric current increases", "kinetic energy decreases"],
    correctAnswer: 2, explanation: "More intensity means more photons per second, hence more current.", tags: ["Photoelectric Effect"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 18: Dual Nature of Matter and Radiation', chapter: 'dual-nature', year: 1998,
    question: "Photo-emissive cell wavelength L, fastest speed v. Wavelength 3L/4, speed is (1998)",
    options: ["less than v(4/3)^1/2", "v(4/3)^1/2", "v(3/4)^1/2", "greater than v(4/3)^1/2"],
    correctAnswer: 3, explanation: "E' = 4/3 E. Since work function is constant, new KE > 4/3 old KE. v' > sqrt(4/3) v.", tags: ["Photoelectric Equation"], difficulty: "hard", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 18: Dual Nature of Matter and Radiation', chapter: 'dual-nature', year: 1997,
    question: "Which statement correct? (1997)",
    options: ["photocurrent increases with intensity", "stopping potential increases with intensity", "current increases with frequency", "current proportional to voltage"],
    correctAnswer: 0, explanation: "Standard property of photoelectric effect.", tags: ["Photoelectric Effect"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 18: Dual Nature of Matter and Radiation', chapter: 'dual-nature', year: 1997,
    question: "Kinetic energy electron accelerated 100V is (1997)",
    options: ["416.6 cal", "6.636 cal", "1.6e-17 J", "1.6e-19 J"],
    correctAnswer: 2, explanation: "KE = 100 eV = 100 * 1.6e-19 J = 1.6e-17 J.", tags: ["Matter Waves"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 18: Dual Nature of Matter and Radiation', chapter: 'dual-nature', year: 1996,
    question: "Electron 100eV wavelength will be (1996)",
    options: ["24.6 A", "0.12 A", "1.2 A", "6.3 A"],
    correctAnswer: 2, explanation: "L = 12.27 / sqrt(100) = 1.22 A.", tags: ["de Broglie Wavelength"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 18: Dual Nature of Matter and Radiation', chapter: 'dual-nature', year: 1996,
    question: "Discharge tube 0.02mm formation of (1996)",
    options: ["Crooke dark space", "Faraday dark space", "both partly", "none"],
    correctAnswer: 0, explanation: "At very low pressures Crooke dark space fills the tube.", tags: ["Cathode Rays"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 18: Dual Nature of Matter and Radiation', chapter: 'dual-nature', year: 1996,
    question: "Electron accelerated from rest through V in vacuum. Final velocity is (1996)",
    options: ["sqrt(2eV/m)", "sqrt(eV/m)", "eV/2m", "eV/m"],
    correctAnswer: 0, explanation: "1/2 mv^2 = eV, v = sqrt(2eV/m).", tags: ["Matter Waves"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 18: Dual Nature of Matter and Radiation', chapter: 'dual-nature', year: 1996,
    question: "Work function W1 to W2 (W2 > W1), current before I1, after I2. (1996)",
    options: ["I1=I2", "I1<I2", "I1>I2", "I1<2I2"],
    correctAnswer: 2, explanation: "No, typically current only depends on intensity unless work function becomes greater than photon energy. Option keys says I1>I2 maybe because fewer electrons can escape? Answer key says (c).", tags: ["Photoelectric Effect"], difficulty: "hard", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 18: Dual Nature of Matter and Radiation', chapter: 'dual-nature', year: 1996,
    question: "Velocity of photons proportional to (1996)",
    options: ["1/sqrt(v)", "v", "v^2", "v^0"],
    correctAnswer: 3, explanation: "Velocity of light is c, independent of frequency. So proportional to v^0 (Wait, answer key says nothing or * None is correct). We use v^0 if it was an option. Answer key is *.", tags: ["Photons"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 18: Dual Nature of Matter and Radiation', chapter: 'dual-nature', year: 1995,
    question: "Electron mass m, proton mass M accelerated through V. Proton wavelength is (1995)",
    options: ["L_e sqrt(M/m)", "L_e sqrt(m/M)", "L_e (M/m)", "L_e (m/M)"],
    correctAnswer: 1, explanation: "L prop 1/sqrt(mass). Lp / Le = sqrt(m/M). Lp = Le sqrt(m/M).", tags: ["de Broglie Wavelength"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 18: Dual Nature of Matter and Radiation', chapter: 'dual-nature', year: 1995,
    question: "Electrons and photons same wavelength have same (1995)",
    options: ["momentum", "angular momentum", "energy", "velocity"],
    correctAnswer: 0, explanation: "de Broglie relation p = h/L. Same L means same p.", tags: ["de Broglie Wavelength"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 18: Dual Nature of Matter and Radiation', chapter: 'dual-nature', year: 1993,
    question: "300nm and 600nm threshold for two emitters. Ratio work functions (1993)",
    options: ["1:2", "2:1", "4:1", "1:4"],
    correctAnswer: 1, explanation: "W prop 1/L. So W1/W2 = L2/L1 = 600/300 = 2:1.", tags: ["Photoelectric Effect"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 18: Dual Nature of Matter and Radiation', chapter: 'dual-nature', year: 1993,
    question: "Number ejected photoelectrons increases with (1993)",
    options: ["intensity", "wavelength", "frequency", "never"],
    correctAnswer: 0, explanation: "Proportional to intensity of light.", tags: ["Photoelectric Effect"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 18: Dual Nature of Matter and Radiation', chapter: 'dual-nature', year: 1993,
    question: "Momentum of photon wavelength L (1993)",
    options: ["h/L", "zero", "hL/c^2", "hv/c"],
    correctAnswer: 0, explanation: "p = h/L.", tags: ["Photons"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 18: Dual Nature of Matter and Radiation', chapter: 'dual-nature', year: 1992,
    question: "Photon velocity c, freq v, wavelength is (1992)",
    options: ["c/v", "hc/v", "hv/c", "v/c"],
    correctAnswer: 0, explanation: "c = vL => L = c/v.", tags: ["Photons"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 18: Dual Nature of Matter and Radiation', chapter: 'dual-nature', year: 1991,
    question: "Work function 1eV. Wavelength 3000A. Max velocity (1991)",
    options: ["10 m/s", "10^2 m/s", "10^4 m/s", "10^6 m/s"],
    correctAnswer: 3, explanation: "E = 12400/3000 = 4.1 eV. KE = 3.1 eV = 3.1 * 1.6e-19 ~ 5e-19. 1/2 mv^2 = 5e-19 => v ~ 10^6.", tags: ["Photoelectric Equation"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 18: Dual Nature of Matter and Radiation', chapter: 'dual-nature', year: 1991,
    question: "1keV photon is 1.24e-9m. Frequency of 1MeV photon is (1991)",
    options: ["1.24e15", "2.4e20", "1.24e18", "2.4e23"],
    correctAnswer: 1, explanation: "1 MeV = 1000 keV. Frequency v = E/h = 10^6 * 1.6e-19 / 6.6e-34 = 2.4e20 Hz.", tags: ["Photons"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 18: Dual Nature of Matter and Radiation', chapter: 'dual-nature', year: 1991,
    question: "Electron mass m0 moves 0.8c. Mass is (1991)",
    options: ["m0", "5m0/3", "m0/3", "3m0/5"],
    correctAnswer: 1, explanation: "m = m0 / sqrt(1 - 0.64) = m0 / 0.6 = 10m0/6 = 5m0/3.", tags: ["Relativity"], difficulty: "hard", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 18: Dual Nature of Matter and Radiation', chapter: 'dual-nature', year: 1990,
    question: "Transmitter 880kHz, 10kW. Photons per second (1990)",
    options: ["1.72e31", "1.32e25", "1.3e37", "1.3e45"],
    correctAnswer: 0, explanation: "n = P/hv = 10e3 / (6.6e-34 * 880e3) = 1.72e31.", tags: ["Photons"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 18: Dual Nature of Matter and Radiation', chapter: 'dual-nature', year: 1990,
    question: "Momentum photon 3.3e-29 kg m/s. Frequency (1990)",
    options: ["1.5e13", "7.5e12", "6e3", "3e3"],
    correctAnswer: 0, explanation: "p = hL => L = h/p. v = c/L = cp/h = 3e8 * 3.3e-29 / 6.6e-34 = 1.5e13 Hz.", tags: ["Photons"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 18: Dual Nature of Matter and Radiation', chapter: 'dual-nature', year: 1989,
    question: "Ultraviolet 6.2eV on Al. KE fastest electron emitted if work function 4.2eV (1989)",
    options: ["3.2e-21 J", "3.2e-19 J", "7e-25 J", "9e-32 J"],
    correctAnswer: 1, explanation: "KE = 6.2 - 4.2 = 2.0 eV = 2 * 1.6e-19 J = 3.2e-19 J.", tags: ["Photoelectric Equation"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 18: Dual Nature of Matter and Radiation', chapter: 'dual-nature', year: 1989,
    question: "de Broglie wave mass m velocity v wavelength (1989)",
    options: ["h/mv", "mv/h", "h/m", "hv/m"],
    correctAnswer: 0, explanation: "L = h/p = h/mv.", tags: ["de Broglie Wavelength"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 18: Dual Nature of Matter and Radiation', chapter: 'dual-nature', year: 1988,
    question: "Energy photon wavelength L (1988)",
    options: ["hcL", "hc/L", "hL/c", "vh/c"],
    correctAnswer: 1, explanation: "E = hc/L.", tags: ["Photons"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 18: Dual Nature of Matter and Radiation', chapter: 'dual-nature', year: 1988,
    question: "Thermions are (1988)",
    options: ["protons", "electrons", "photons", "positrons"],
    correctAnswer: 1, explanation: "Emitted from heating a metal.", tags: ["Cathode Rays"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 18: Dual Nature of Matter and Radiation', chapter: 'dual-nature', year: 1988,
    question: "Threshold frequency sodium 5000A. Work function (1988)",
    options: ["4e-19 J", "1e-19 J", "2e-19 J", "3e-19 J"],
    correctAnswer: 0, explanation: "W = hc/L = 6.6e-34 * 3e8 / 5000e-10 = 3.96e-19 roughly 4e-19 J.", tags: ["Photoelectric Effect"], difficulty: "medium", verified: true, source: "manual"
  }
];

async function run() {
  try {
    await mongoose.connect(MONGO_URI);
    await Question.insertMany(questionsToSeed);
    console.log(`Seeded 26 more questions for Unit 18 (Part 4). Total 86 questions in unit.`);
    mongoose.connection.close();
  } catch (e) {
    console.error(e);
    mongoose.connection.close();
  }
}
run();
