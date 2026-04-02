import mongoose from 'mongoose';
import Question from './models/Question.js';
import 'dotenv/config';

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/neet';

const questionsToSeed = [
  {
    subject: 'physics', unit: 'Unit 18: Dual Nature of Matter and Radiation', chapter: 'dual-nature', year: 2012,
    question: "1eV and 2.5eV successive illuminate work function 0.5eV. Ratio maximum speeds is (Mains 2012)",
    options: ["1:4", "1:2", "1:1", "1:5"],
    correctAnswer: 1, explanation: "KE1 = 1 - 0.5 = 0.5. KE2 = 2.5 - 0.5 = 2.0. v1/v2 = sqrt(0.5/2.0) = 1/2.", tags: ["Photoelectric Equation"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 18: Dual Nature of Matter and Radiation', chapter: 'dual-nature', year: 2011,
    question: "Photoelectric emission occurs only when incident light has more than minimum (2011)",
    options: ["power", "wavelength", "intensity", "frequency"],
    correctAnswer: 3, explanation: "Threshold frequency requirement.", tags: ["Photoelectric Effect"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 18: Dual Nature of Matter and Radiation', chapter: 'dual-nature', year: 2011,
    question: "Davisson Germer experiment velocity of electrons increased by (2011)",
    options: ["increasing potential difference between anode filament", "increasing filament current", "decreasing filament current", "decreasing potential difference"],
    correctAnswer: 0, explanation: "Accelerating voltage increases velocity.", tags: ["de Broglie Wavelength"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 18: Dual Nature of Matter and Radiation', chapter: 'dual-nature', year: 2011,
    question: "1eV and 2.5eV on 0.5eV. Ratio max speeds (2011)",
    options: ["1:4", "1:2", "1:1", "1:5"],
    correctAnswer: 1, explanation: "Same as Mains 2012.", tags: ["Photoelectric Equation"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 18: Dual Nature of Matter and Radiation', chapter: 'dual-nature', year: 2011,
    question: "Electron microscope 25kV to 100kV. de-Broglie wavelength (2011)",
    options: ["increase 2 times", "decrease 2 times", "decrease 4 times", "increase 4 times"],
    correctAnswer: 1, explanation: "L prop 1/sqrt(V). V quadruple, L halves.", tags: ["de Broglie Wavelength"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 18: Dual Nature of Matter and Radiation', chapter: 'dual-nature', year: 2011,
    question: "Work function 1.8eV, KE max 0.5eV. Stopping potential is (2011)",
    options: ["1.8 V", "1.3 V", "0.5 V", "2.3 V"],
    correctAnswer: 2, explanation: "Stopping potential equals KE max in eV = 0.5 V.", tags: ["Stopping Potential"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 18: Dual Nature of Matter and Radiation', chapter: 'dual-nature', year: 2011,
    question: "Threshold frequency 3.3e14 Hz. Incident 8.2e14 Hz. Cutoff voltage (Mains 2011)",
    options: ["1 V", "2 V", "3 V", "5 V"],
    correctAnswer: 1, explanation: "E = h(v-v0) = 6.6e-34 * 4.9e14 = 32.34e-20 J = 2 eV. So V0 = 2V.", tags: ["Photoelectric Equation"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 18: Dual Nature of Matter and Radiation', chapter: 'dual-nature', year: 2010,
    question: "Cathode rays crossed E B. Not deflected. Specific charge e/m is (2010)",
    options: ["E^2 / 2VB^2", "E^2 / 2VB", "E / 2VB^2", "E^2 / 2V^2B"],
    correctAnswer: 0, explanation: "v = E/B. 1/2 mv^2 = eV => e/m = v^2 / 2V = E^2 / 2VB^2.", tags: ["Matter Waves"], difficulty: "hard", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 18: Dual Nature of Matter and Radiation', chapter: 'dual-nature', year: 2010,
    question: "Source S1 10^15 photons 5000A. Source S2 1.02x10^15 photons 5100A. Power ratio S2/S1 (2010)",
    options: ["1.00", "1.02", "1.04", "0.98"],
    correctAnswer: 0, explanation: "P = n hc/L. P2/P1 = (n2/n1) * (L1/L2) = 1.02 * (5000/5100) = 1.", tags: ["Photons"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 18: Dual Nature of Matter and Radiation', chapter: 'dual-nature', year: 2010,
    question: "Potential difference to stop fastest from Ni 5.01eV when 200nm falls (2010)",
    options: ["2.4 V", "-1.2 V", "-2.4 V", "1.2 V"],
    correctAnswer: 3, explanation: "E = 1240/200 = 6.2 eV. KE = 6.2 - 5.01 = 1.19 eV. Stopping potential 1.2 V.", tags: ["Stopping Potential"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 18: Dual Nature of Matter and Radiation', chapter: 'dual-nature', year: 2010,
    question: "Monochromatic radiation intensity I, photoelectrons N, max KE T. Intensity 2I, N and T are (Mains 2010)",
    options: ["N and 2T", "2N and T", "2N and 2T", "N and T"],
    correctAnswer: 1, explanation: "Intensity doubles number of photons, so 2N. Max KE T depends only on frequency.", tags: ["Photoelectric Effect"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 18: Dual Nature of Matter and Radiation', chapter: 'dual-nature', year: 2010,
    question: "Hydrogen n=3 to n=1 irradiate 5.1eV. Stopping potential (Mains 2010)",
    options: ["5.1 V", "12.1 V", "17.2 V", "7 V"],
    correctAnswer: 3, explanation: "E = 13.6(1 - 1/9) = 12.1 eV. KE max = 12.1 - 5.1 = 7.0 eV. V = 7V.", tags: ["Photoelectric Equation"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 18: Dual Nature of Matter and Radiation', chapter: 'dual-nature', year: 2009,
    question: "Number of photo electrons emitted for v > v0 is proportional to (2009)",
    options: ["threshold frequency", "intensity of light", "frequency", "v-v0"],
    correctAnswer: 1, explanation: "Directly proportional to intensity.", tags: ["Photoelectric Effect"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 18: Dual Nature of Matter and Radiation', chapter: 'dual-nature', year: 2009,
    question: "Curves a and b have same stopping potential but different saturation currents. Statement (2009)",
    options: ["a and b same freq different intensities", "b and c different freq diff intensities", "b and c same freq same intensity", "a and b diff freq diff intensity"],
    correctAnswer: 0, explanation: "Same stopping potential = same frequency. Different saturation currents = different intensities.", tags: ["Photoelectric Graphs"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 18: Dual Nature of Matter and Radiation', chapter: 'dual-nature', year: 2009,
    question: "Helium neon laser 667nm, 9mW. Number of photons per second (2009)",
    options: ["3x10^16", "9x10^15", "3x10^19", "9x10^17"],
    correctAnswer: 0, explanation: "n = P / (hc/L) = 9e-3 / (3e-19) = 3x10^16.", tags: ["Photons"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 18: Dual Nature of Matter and Radiation', chapter: 'dual-nature', year: 2008,
    question: "Work function 6.2eV. Stopping potential 5V. Incident lies in (2008)",
    options: ["Infrared", "X-ray", "Ultraviolet", "Visible"],
    correctAnswer: 2, explanation: "Incident E = 6.2 + 5 = 11.2 eV. L = 1240/11.2 = 110 nm. Ultraviolet.", tags: ["Photoelectric Effect"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 18: Dual Nature of Matter and Radiation', chapter: 'dual-nature', year: 2008,
    question: "Particle 1mg same wavelength as electron moving 3e6 m/s. Velocity of particle (2008)",
    options: ["3e-31", "2.7e-21", "2.7e-18", "9e-2"],
    correctAnswer: 2, explanation: "mv = m_e v_e. 1e-6 * v = 9.1e-31 * 3e6. v = 2.7e-24 / 1e-6 = 2.7e-18.", tags: ["de Broglie Wavelength"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 18: Dual Nature of Matter and Radiation', chapter: 'dual-nature', year: 2008,
    question: "Electric discharge low pressure, coloured glow result of (2008)",
    options: ["excitation of electrons in atoms", "collision diff electrons", "collisions charged particles from cathode and atoms", "collision atoms"],
    correctAnswer: 2, explanation: "Option a in answer key = collision between charged particles emitted from cathode and atoms of gas.", tags: ["Atomic Spectra"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 18: Dual Nature of Matter and Radiation', chapter: 'dual-nature', year: 2007,
    question: "Electron undeflected E and B. Switch off E, maintain B. Electrons move in (2007)",
    options: ["circular orbit", "parabolic path", "straight line", "elliptical orbit"],
    correctAnswer: 0, explanation: "Magnetic field alone causes circular motion.", tags: ["Magnetism", "Cathode Rays"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 18: Dual Nature of Matter and Radiation', chapter: 'dual-nature', year: 2007,
    question: "Monochromatic 6e14 Hz, 2kW. Number of photons per second (2007)",
    options: ["5e16", "5e17", "5e14", "5e15"],
    correctAnswer: 3, explanation: "E = hv = 6.6e-34 * 6e14 = 40e-20 = 4e-19. n = 2e-3 / 4e-19 = 0.5e16 = 5e15.", tags: ["Photons"], difficulty: "medium", verified: true, source: "manual"
  }
];

async function run() {
  try {
    await mongoose.connect(MONGO_URI);
    await Question.insertMany(questionsToSeed);
    console.log(`Seeded 20 more questions for Unit 18 (Part 2).`);
    mongoose.connection.close();
  } catch (e) {
    console.error(e);
    mongoose.connection.close();
  }
}
run();
