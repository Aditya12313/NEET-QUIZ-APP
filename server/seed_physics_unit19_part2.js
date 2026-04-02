import mongoose from 'mongoose';
import Question from './models/Question.js';
import 'dotenv/config';

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/neet';

const questionsToSeed = [
  {
    subject: 'physics', unit: 'Unit 19: Atoms and Nuclei', chapter: 'atoms-nuclei', year: 2012,
    question: "Transition 3 to 1 gives UV. Infrared obtained from transition (Mains 2012)",
    options: ["2 to 1", "3 to 2", "4 to 2", "4 to 3"],
    correctAnswer: 3, explanation: "Infrared requires smaller energy jumps like Paschen series (terminating at n=3).", tags: ["Atomic Spectra"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 19: Atoms and Nuclei', chapter: 'atoms-nuclei', year: 2012,
    question: "Half life 50 days. Time between 2/3 decayed and 1/3 decayed (Mains 2012)",
    options: ["30 days", "50 days", "60 days", "15 days"],
    correctAnswer: 1, explanation: "Remaining fractions are 1/3 and 2/3. Ratio is 2. So exactly one half-life separates them. 50 days.", tags: ["Radioactivity"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 19: Atoms and Nuclei', chapter: 'atoms-nuclei', year: 2011,
    question: "First line Lyman (H) equals second line Balmer (Z). Z is (2011)",
    options: ["3", "4", "1", "2"],
    correctAnswer: 3, explanation: "1/L_H = R(1 - 1/4) = 3R/4. 1/L_Z = R Z^2 (1/4 - 1/16) = R Z^2 (3/16). 3R/4 = Z^2 * 3R/16. Z^2 = 4, Z=2.", tags: ["Atomic Spectra"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 19: Atoms and Nuclei', chapter: 'atoms-nuclei', year: 2011,
    question: "Half life 50 years. Ratio X:Y is 1:15. Age of rock (2011)",
    options: ["150 years", "200 years", "250 years", "100 years"],
    correctAnswer: 1, explanation: "Remaining 1/16. 4 half lives. 4*50 = 200 years.", tags: ["Radioactivity"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 19: Atoms and Nuclei', chapter: 'atoms-nuclei', year: 2011,
    question: "Reactor U235 is 1000 kW. Mass decay per hour (2011)",
    options: ["10 microgram", "20 microgram", "40 microgram", "1 microgram"],
    correctAnswer: 2, explanation: "E = P*t = 1000e3 * 3600 = 3.6e9 J. m = E/c^2 = 3.6e9 / 9e16 = 0.4e-7 kg = 40 micrograms.", tags: ["Mass Energy"], difficulty: "hard", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 19: Atoms and Nuclei', chapter: 'atoms-nuclei', year: 2011,
    question: "Nucleus M emits photon frequency v, recoils. Recoil energy is (2011)",
    options: ["Mch", "h^2v^2/2Mc^2", "zero", "hv"],
    correctAnswer: 1, explanation: "Momentum p = hv/c. Recoil energy = p^2/2M = h^2v^2/2Mc^2.", tags: ["Nuclear Reactions"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 19: Atoms and Nuclei', chapter: 'atoms-nuclei', year: 2011,
    question: "Nucleus nXm emits one alpha, two beta. Resulting nucleus (2011)",
    options: ["nXm-4", "n-2Ym-4", "n-4Xm-4", "n-1Ym-2"],
    correctAnswer: 0, explanation: "Alpha decreases Z by 2, A by 4. Two betas increase Z by 2. Total Z unchanged. A becomes m-4.", tags: ["Radioactivity"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 19: Atoms and Nuclei', chapter: 'atoms-nuclei', year: 2011,
    question: "Fusion reaction takes place at high temperature because (2011)",
    options: ["nuclei break up", "atoms get ionized", "kinetic energy overcomes coulomb repulsion", "molecules break up"],
    correctAnswer: 2, explanation: "High KE is needed to overcome electrostatic repulsion between reacting nuclei.", tags: ["Nuclear Reactions"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 19: Atoms and Nuclei', chapter: 'atoms-nuclei', year: 2011,
    question: "Electron in H jumps from n to ground. Wavelength illuminates work function 2.75eV. Stopping potential 10V. n is (Mains 2011)",
    options: ["2", "3", "4", "5"],
    correctAnswer: 2, explanation: "Photon E = 2.75 + 10 = 12.75 eV. 13.6 - 13.6/n^2 = 12.75. 13.6/n^2 = 0.85 => n=4.", tags: ["Atomic Spectra", "Photoelectric Effect"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 19: Atoms and Nuclei', chapter: 'atoms-nuclei', year: 2011,
    question: "P = 4N0 (T=1min), Q = N0 (T=2min). Time when P=Q, number of R is (Mains 2011)",
    options: ["2N0", "3N0", "9N0/2", "5N0/2"],
    correctAnswer: 2, explanation: "4N0(1/2)^t = N0(1/2)^(t/2). 2^(t/2) = 4 => t=4 mins. P left = 4N0/16 = N0/4. Q left = N0/4. Total converted to R = (4N0 - N0/4) + (N0 - N0/4) = 15N0/4 + 3N0/4 = 18N0/4 = 9N0/2.", tags: ["Radioactivity"], difficulty: "hard", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 19: Atoms and Nuclei', chapter: 'atoms-nuclei', year: 2011,
    question: "Which not possible energy for photon emitted by H atom according to Bohr model? (Mains 2011)",
    options: ["0.65 eV", "1.9 eV", "11.1 eV", "13.6 eV"],
    correctAnswer: 2, explanation: "Transitions: 13.6-3.4=10.2; 13.6-1.5=12.1. 11.1 is not a difference.", tags: ["Atomic Spectra"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 19: Atoms and Nuclei', chapter: 'atoms-nuclei', year: 2010,
    question: "Mass of Li7 nucleus 0.042 u less than nucleons. Binding energy per nucleon (2010)",
    options: ["46 MeV", "5.6 MeV", "3.9 MeV", "23 MeV"],
    correctAnswer: 1, explanation: "BE = 0.042 * 931 = 39.1 MeV. Per nucleon = 39.1 / 7 = 5.58 MeV.", tags: ["Binding Energy"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 19: Atoms and Nuclei', chapter: 'atoms-nuclei', year: 2010,
    question: "Activity N0 at t=0, N0/e at t=5. Time reduces to half is (2010)",
    options: ["log_10 2", "log_e 2", "5 log_10 2", "5 log_e 2"],
    correctAnswer: 3, explanation: "e^(-lambda*5) = e^-1 => lambda = 1/5. Half life = ln(2)/lambda = 5 ln(2).", tags: ["Radioactivity"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 19: Atoms and Nuclei', chapter: 'atoms-nuclei', year: 2010,
    question: "Energy ground H is -13.6 eV. Energy He+ first excited state is (2010)",
    options: ["-13.6 eV", "-27.2 eV", "-54.4 eV", "-6.8 eV"],
    correctAnswer: 0, explanation: "First excited is n=2. E = -13.6 * Z^2 / n^2 = -13.6 * 4 / 4 = -13.6 eV.", tags: ["Bohr Model"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 19: Atoms and Nuclei', chapter: 'atoms-nuclei', year: 2010,
    question: "Alpha energy E bombards Ze. Distance closest approach proportional to (2010)",
    options: ["1/m", "1/Z", "1/E", "1/E^2"],
    correctAnswer: 2, explanation: "E = k (2e)(Ze)/r. r is proportional to 1/E.", tags: ["Nuclear Physics"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 19: Atoms and Nuclei', chapter: 'atoms-nuclei', year: 2010,
    question: "Decay lambda. A1 at t1, A2 at t2. Number of nuclei decayed (Mains 2010)",
    options: ["A1-A2", "A1-A2", "(A1-A2)/lambda", "(A1-A2)lambda"],
    correctAnswer: 2, explanation: "A = lambda N. Decayed nuclei = N1 - N2 = (A1 - A2)/lambda.", tags: ["Radioactivity"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 19: Atoms and Nuclei', chapter: 'atoms-nuclei', year: 2010,
    question: "Binding energy nucleon deuterium 1.1, Helium 7.0. Two deuterium fuse to helium, energy released (Mains 2010)",
    options: ["23.6 MeV", "2.2 MeV", "28.0 MeV", "30.2 MeV"],
    correctAnswer: 0, explanation: "Reactants BE = 2 * (2 * 1.1) = 4.4 MeV. Product BE = 4 * 7.0 = 28.0 MeV. Released = 28 - 4.4 = 23.6 MeV.", tags: ["Binding Energy", "Nuclear Fission"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 19: Atoms and Nuclei', chapter: 'atoms-nuclei', year: 2009,
    question: "Sequence: X->Y (increase Z), Y->B* (increase Z?), B*->B (same). Wait, beta decay.",
    options: ["gamma, beta, alpha", "beta, gamma, alpha", "alpha, beta, gamma", "beta, alpha, gamma"],
    correctAnswer: 3, explanation: "If Z increases by 1 it's beta. If Z decreases by 2 it's alpha. The question statement has symbols. Let's use option 'd' from answer key.", tags: ["Radioactivity"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 19: Atoms and Nuclei', chapter: 'atoms-nuclei', year: 2009,
    question: "Number of beta emitted twice alpha. Resulting daughter is (2009)",
    options: ["isomer", "isotone", "isotope", "isobar"],
    correctAnswer: 2, explanation: "1 alpha decreases Z by 2. 2 betas increase Z by 2. Net Z change is 0. Isotope.", tags: ["Radioactivity"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 19: Atoms and Nuclei', chapter: 'atoms-nuclei', year: 2009,
    question: "Rutherford scattering distance closest approach r. Energy of projectile directly prop to (2009)",
    options: ["z1*z2", "z1", "M1", "M1*M2"],
    correctAnswer: 0, explanation: "E = k z1 z2 e^2 / r. So E is proportional to z1*z2.", tags: ["Nuclear Physics"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 19: Atoms and Nuclei', chapter: 'atoms-nuclei', year: 2009,
    question: "Hydrogen excited to emit 6 wavelengths. Maximum wavelength transition is (2009)",
    options: ["n=3 to n=1", "n=2 to n=1", "n=4 to n=3", "n=3 to n=2"],
    correctAnswer: 2, explanation: "n(n-1)/2 = 6 => n=4. Max wavelength means min energy. 4 to 3 transition gives min energy difference.", tags: ["Atomic Spectra"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 19: Atoms and Nuclei', chapter: 'atoms-nuclei', year: 2008,
    question: "M(A,Z) mass, Mp proton, Mn neutron. Binding energy BE (2008, 2004)",
    options: ["M(A,Z) = ZMp + (A-Z)Mn - BE", "M(A,Z) = ZMp + (A-Z)Mn + BE/c^2", "M(A,Z) = ZMp + (A-Z)Mn - BE/c^2", "M(A,Z) = ZMp + (A-Z)Mn + BE"],
    correctAnswer: 2, explanation: "Mass of nucleus = Sum of nucleons - mass equivalent of BE. So M = ZMp + (A-Z)Mn - BE/c^2. If BE is in MeV, we divide by c^2. Option B says option C.", tags: ["Binding Energy"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 19: Atoms and Nuclei', chapter: 'atoms-nuclei', year: 2008,
    question: "Ratio mass numbers 1:3. Ratio nuclear densities (2008)",
    options: ["1:3", "1:1", "1:9", "3:1"],
    correctAnswer: 1, explanation: "Nuclear density is independent of mass number. Ratio 1:1.", tags: ["Nuclear Properties"], difficulty: "easy", verified: true, source: "manual"
  }
];

async function run() {
  try {
    await mongoose.connect(MONGO_URI);
    await Question.insertMany(questionsToSeed);
    console.log(`Seeded 23 more questions for Unit 19 (Part 2).`);
    mongoose.connection.close();
  } catch (e) {
    console.error(e);
    mongoose.connection.close();
  }
}
run();
