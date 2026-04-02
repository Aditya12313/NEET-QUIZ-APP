import mongoose from 'mongoose';
import Question from './models/Question.js';
import 'dotenv/config';

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/neet';

const questionsToSeed = [
  {
    subject: 'physics', unit: 'Unit 18: Dual Nature of Matter and Radiation', chapter: 'dual-nature', year: 2017,
    question: "The de-Broglie wavelength of a neutron in thermal equilibrium with heavy water at a temperature T (kelvin) and mass m, is (NEET 2017)",
    options: ["h/sqrt(3mkT)", "2h/sqrt(3mkT)", "2h/mkT", "h/mkT"],
    correctAnswer: 0, explanation: "p = sqrt(2mE) and E = 3/2 kT. p = sqrt(3mkT). lambda = h/p = h/sqrt(3mkT).", tags: ["de Broglie Wavelength"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 18: Dual Nature of Matter and Radiation', chapter: 'dual-nature', year: 2017,
    question: "Photoelectric threshold silver 3250 A. Velocity of electron ejected from ultraviolet 2536 A is (NEET 2017)",
    options: ["approx 0.6x10^6", "approx 61x10^3", "approx 0.3x10^6", "approx 6x10^5"],
    correctAnswer: 0, explanation: "E = hc/L. KE = E - W. Calculated v gives approx 0.6x10^6.", tags: ["Photoelectric Effect"], difficulty: "hard", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 18: Dual Nature of Matter and Radiation', chapter: 'dual-nature', year: 2016,
    question: "Electrons mass m de-Broglie wavelength L on target in X-ray tube. Cutoff wavelength (L0) of emitted X-ray is (NEET-II 2016)",
    options: ["2mcL^2 / h", "2m^2cL^2 / h^2", "2h / mc", "h^2 / 2mcL"],
    correctAnswer: 0, explanation: "E = p^2/2m = h^2 / 2mL^2. Photon E = hc/L0. Equating gives L0 = 2mcL^2 / h.", tags: ["X-Rays"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 18: Dual Nature of Matter and Radiation', chapter: 'dual-nature', year: 2016,
    question: "Photons 5eV on C. Max KE 2eV. Photons 6eV on C, no photoelectrons reach A if stopping potential of A relative to C is (NEET-II 2016)",
    options: ["+3 V", "+4 V", "-1 V", "-3 V"],
    correctAnswer: 3, explanation: "W = 5 - 2 = 3eV. For 6eV, max KE = 6 - 3 = 3eV. Stopping potential is -3V.", tags: ["Stopping Potential"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 18: Dual Nature of Matter and Radiation', chapter: 'dual-nature', year: 2016,
    question: "Electron mass m and photon have same energy E. Ratio of de-Broglie wavelengths is (NEET-I 2016)",
    options: ["(E/2m)^1/2 / c", "1/c * (E/2m)^1/2", "(2mE)^1/2", "1/c * (2m/E)^1/2"],
    correctAnswer: 1, explanation: "L_e = h/sqrt(2mE). L_p = hc/E. Ratio = E / c sqrt(2mE) = 1/c * sqrt(E/2m).", tags: ["de Broglie Wavelength"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 18: Dual Nature of Matter and Radiation', chapter: 'dual-nature', year: 2016,
    question: "Illuminated with L, stopping V. Illuminated with 2L, stopping V/5. Threshold wavelength is (NEET-I 2016)",
    options: ["L/2", "3L", "4L", "5L"],
    correctAnswer: 1, explanation: "hc/L - hc/L0 = eV. hc/2L - hc/L0 = eV/5. Solving gives L0 = 3L.", tags: ["Stopping Potential"], difficulty: "hard", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 18: Dual Nature of Matter and Radiation', chapter: 'dual-nature', year: 2015,
    question: "Illuminated with L and L/2. Max kinetic energy in second is 3 times first. Work function is (2015)",
    options: ["hc/L", "hc/3L", "2hc/L", "hc/2L"],
    correctAnswer: 0, explanation: "3(hc/L - W) = 2hc/L - W. 3hc/L - 3W = 2hc/L - W. hc/L = 2W => W = hc/2L.", tags: ["Photoelectric Equation"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 18: Dual Nature of Matter and Radiation', chapter: 'dual-nature', year: 2015,
    question: "Light 500nm on work function 2.28eV. de Broglie wavelength of emitted electron is (2015)",
    options: [">= 2.8x10^-9 m", "<= 2.8x10^-12 m", "< 2.8x10^-10 m", ">= 2.8x10^-9 m"],
    correctAnswer: 0, explanation: "E = 1240/500 = 2.48 eV. KE max = 2.48 - 2.28 = 0.2 eV. L_min = 12.27 / sqrt(0.2) = 27.5 A = 2.75x10^-9 m. L >= 2.8x10^-9 m.", tags: ["de Broglie Wavelength"], difficulty: "hard", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 18: Dual Nature of Matter and Radiation', chapter: 'dual-nature', year: 2015,
    question: "Variation of particle momentum and de-Broglie wavelength (2015)",
    options: ["Hyperbola", "Straight line", "Parabola", "Inverse proportion"],
    correctAnswer: 3, explanation: "L = h/p, rectangular hyperbola.", tags: ["de Broglie Wavelength"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 18: Dual Nature of Matter and Radiation', chapter: 'dual-nature', year: 2015,
    question: "Illuminated L, stopping 3V. 2L, stopping V. Threshold wavelength is (2015 Cancelled)",
    options: ["L/4", "6L", "L/2", "4L"],
    correctAnswer: 3, explanation: "hc/L - W = 3eV. hc/2L - W = eV. (hc/L - W) = 3(hc/2L - W) => hc/L - W = 3hc/2L - 3W => 2W = hc/2L => W = hc/4L => L0 = 4L.", tags: ["Stopping Potential"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 18: Dual Nature of Matter and Radiation', chapter: 'dual-nature', year: 2014,
    question: "Energy radiation increased 20%, KE increased from 0.5eV to 0.8eV. Work function is (2014)",
    options: ["0.65 eV", "1.0 eV", "1.3 eV", "1.5 eV"],
    correctAnswer: 1, explanation: "1.2 E - W = 0.8. E - W = 0.5. Subtracting => 0.2E = 0.3 => E = 1.5. W = 1.0 eV.", tags: ["Photoelectric Equation"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 18: Dual Nature of Matter and Radiation', chapter: 'dual-nature', year: 2014,
    question: "Kinetic energy increased 16 times, percentage change in de Broglie wavelength is (2014)",
    options: ["25", "75", "60", "50"],
    correctAnswer: 1, explanation: "L = h/sqrt(2mE). If E -> 16E, L -> L/4. Change is 75%.", tags: ["de Broglie Wavelength"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 18: Dual Nature of Matter and Radiation', chapter: 'dual-nature', year: 2013,
    question: "Wavelength Le of electron and Lp of photon same energy E related by (NEET 2013)",
    options: ["Le prop Lp^2", "Le prop (Lp)^1/2", "Lp prop Le^2", "Le prop Lp"],
    correctAnswer: 2, explanation: "Le = h/sqrt(2mE). Lp = hc/E. E = hc/Lp = h^2 / 2m(Le)^2 => Lp prop Le^2.", tags: ["de Broglie Wavelength"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 18: Dual Nature of Matter and Radiation', chapter: 'dual-nature', year: 2013,
    question: "Cutoff freq v. Radiation 2v impinges. Max possible velocity is (NEET 2013)",
    options: ["sqrt(2hv/m)", "sqrt(hv/m)", "sqrt(hv/2m)", "sqrt(2hv/c)"],
    correctAnswer: 0, explanation: "h(2v) = hv + 1/2 mv^2. hv = 1/2 mv^2. v = sqrt(2hv/m).", tags: ["Photoelectric Equation"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 18: Dual Nature of Matter and Radiation', chapter: 'dual-nature', year: 2013,
    question: "Source 50cm, stopping V. If distance 25cm, new stopping potential is (Karnataka NEET 2013)",
    options: ["V/2", "V", "4V", "2V"],
    correctAnswer: 1, explanation: "Stopping potential is independent of intensity (distance). Remains V.", tags: ["Stopping Potential"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 18: Dual Nature of Matter and Radiation', chapter: 'dual-nature', year: 2013,
    question: "De-Broglie wavelength of neutrons thermal equilibrium T is (Karnataka NEET 2013)",
    options: ["3.08/sqrt(T) A", "0.308/sqrt(T) A", "0.0308/sqrt(T) A", "30.8/sqrt(T) A"],
    correctAnswer: 3, explanation: "L = h/sqrt(3mkT). Evaluated gives approx 30.8/sqrt(T) Angstroms.", tags: ["de Broglie Wavelength"], difficulty: "hard", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 18: Dual Nature of Matter and Radiation', chapter: 'dual-nature', year: 2012,
    question: "200W sodium lamp 0.6um yellow light 25% efficient. Photons per sec is (2012)",
    options: ["1.5e20", "6e18", "6.2e20", "1.5e19"],
    correctAnswer: 0, explanation: "Power = 50W. n = P/(hc/L) = 50 * 6e-7 / 2e-25 = 1.5e20.", tags: ["Photons"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 18: Dual Nature of Matter and Radiation', chapter: 'dual-nature', year: 2012,
    question: "First excited to ground state H atom. Stopping potential 3.57V. Threshold frequency (2012)",
    options: ["4e15", "7e15", "1.6e15", "2.5e15"],
    correctAnswer: 2, explanation: "E = 13.6(1 - 1/4) = 10.2 eV. W = 10.2 - 3.57 = 6.63 eV. f0 = W/h = 6.63 * 1.6e-19 / 6.63e-34 = 1.6e15 Hz.", tags: ["Photoelectric Equation"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 18: Dual Nature of Matter and Radiation', chapter: 'dual-nature', year: 2012,
    question: "Alpha particle circular path radius 0.83cm field 0.25 Wb/m^2. De Broglie wavelength (2012)",
    options: ["1 A", "0.1 A", "10 A", "0.01 A"],
    correctAnswer: 3, explanation: "mv = qBR. L = h/mv = h/qBR.", tags: ["de Broglie Wavelength", "Magnetism"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 18: Dual Nature of Matter and Radiation', chapter: 'dual-nature', year: 2012,
    question: "Momentum changed by P, wavelength changes 0.5%. Initial momentum (Mains 2012)",
    options: ["200P", "400P", "100P", "50P"],
    correctAnswer: 0, explanation: "dP/P = -dL/L = 0.5% = 1/200. P/initial = 1/200 => initial = 200P.", tags: ["de Broglie Wavelength"], difficulty: "medium", verified: true, source: "manual"
  }
];

async function run() {
  try {
    await mongoose.connect(MONGO_URI);
    await Question.deleteMany({ chapter: 'dual-nature' });
    await Question.insertMany(questionsToSeed);
    console.log(`Seeded 20 questions for Unit 18 (Part 1).`);
    mongoose.connection.close();
  } catch (e) {
    console.error(e);
    mongoose.connection.close();
  }
}
run();
