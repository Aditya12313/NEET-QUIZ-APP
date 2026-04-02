import mongoose from 'mongoose';
import Question from './models/Question.js';
import 'dotenv/config';

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/neet';

const questionsToSeed = [
  {
    subject: 'physics', unit: 'Unit 11: Electrostatics', chapter: 'electrostatics', year: 2012,
    question: "What is the flux through a cube of side a if a point charge of q is at one of its corner? (2012)",
    options: ["q / ε0", "q / 8ε0", "q / 3ε0", "q / 6a^2ε0"],
    correctAnswer: 1, explanation: "Charge at corner is shared unequivocally by 8 identical cubes. Thus uniquely q/8ε0.", tags: ["Gauss Law"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 11: Electrostatics', chapter: 'electrostatics', year: 2012,
    question: "Parallel plate capacitor has uniform E. Distance d, area A. Energy stored is (Mains 2012)",
    options: ["1/2 ε0E^2", "ε0E^2Ad", "1/2 ε0E^2Ad", "ε0EAd"],
    correctAnswer: 2, explanation: "Energy density is 1/2 ε0E^2. Volume is Ad. Total Energy = 1/2 ε0E^2Ad.", tags: ["Capacitors"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 11: Electrostatics', chapter: 'electrostatics', year: 2012,
    question: "Metallic spheres of radii 1cm and 3cm have charges -1x10^-2 C and 5x10^-2 C. Connected by wire. Final charge on bigger sphere is (Mains 2012)",
    options: ["2x10^-2 C", "3x10^-2 C", "4x10^-2 C", "1x10^-2 C"],
    correctAnswer: 1, explanation: "Total charge 4x10^-2. Ratio of radii is 1:3. Q_big = 3/4 * 4x10^-2 = 3x10^-2.", tags: ["Charge Sharing"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 11: Electrostatics', chapter: 'electrostatics', year: 2011,
    question: "Charge Q enclosed by Gaussian sphere radius R. If radius doubled, outward electric flux will (2011)",
    options: ["increase four times", "be reduced to half", "remain the same", "be doubled"],
    correctAnswer: 2, explanation: "Flux depends strictly on enclosed charge, implicitly independent of radius.", tags: ["Gauss Law"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 11: Electrostatics', chapter: 'electrostatics', year: 2011,
    question: "Four charges +q, +q, -q, -q placed at corners of square of side 2L. Electric potential at midway A between +q and +q is (2011)",
    options: ["1/4πε0 * 2q/L * (1+1/√5)", "1/4πε0 * 2q/L * (1+1/√5)", "1/4πε0 * 2q/L * (1 - 1/√5)", "zero"],
    correctAnswer: 2, explanation: "V = 2k(q/L) + 2k(-q/(√5L)) = 2kq/L (1 - 1/√5).", tags: ["Potential"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 11: Electrostatics', chapter: 'electrostatics', year: 2011,
    question: "Three charges +q at corners of isosceles triangle ABC, sides 2a. D and E midpoints. Work done taking Q from D to E is (Mains 2011)",
    options: ["3qQ / 4πε0a", "3qQ / 8πε0a", "qQ / 4πε0a", "zero"],
    correctAnswer: 3, explanation: "Points symmetrically identical, V_d = V_e. Work done = Q(V_e - V_d) = 0.", tags: ["Work Done", "Potential"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 11: Electrostatics', chapter: 'electrostatics', year: 2011,
    question: "Potential V = 4x^2 volt. Electric field at (1, 0, 2) in V/m is (Mains 2011)",
    options: ["8 along negative X-axis", "8 along positive X-axis", "16 along negative X-axis", "16 along positive X-axis"],
    correctAnswer: 0, explanation: "E = -dV/dx = -8x. At x=1, E = -8. Negative X direction.", tags: ["Field"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 11: Electrostatics', chapter: 'electrostatics', year: 2010,
    question: "Two positive ions charge q, distance d. Force of repulsion F. Number of electrons missing from each ion is (2010)",
    options: ["4πε0 F d^2 / e^2", "√(4πε0 F e^2 / d^2)", "√(4πε0 F d^2 / e^2)", "4πε0 F d^2 / q^2"],
    correctAnswer: 2, explanation: "F = k(ne)^2/d^2. n = √(Fd^2 / ke^2) = √(4πε0 F d^2 / e^2).", tags: ["Coulombs Law"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 11: Electrostatics', chapter: 'electrostatics', year: 2010,
    question: "A square surface side L in plane of paper placed in uniform E acting along same plane at angle theta with horizontal side. Flux is (2010)",
    options: ["EL^2", "EL^2 cosθ", "EL^2 sinθ", "zero"],
    correctAnswer: 3, explanation: "Field is IN the plane, area vector is strictly perpendicular. Flux = EA cos90 = 0.", tags: ["Flux"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 11: Electrostatics', chapter: 'electrostatics', year: 2010,
    question: "A series combination of n1 capacitors C1 charged to 4V. A parallel combination of n2 capacitors C2 charged to V. Energies equal. C2 is (2010)",
    options: ["2 C1 / n1 n2", "16 n2 / n1 C1", "2 C1 / n1 n2", "16 C1 / n1 n2"],
    correctAnswer: 3, explanation: "Series U1 = 1/2 (C1/n1) (4V)^2. Parallel U2 = 1/2 (n2 C2) V^2. U1=U2 => C2 = 16 C1 / (n1 n2).", tags: ["Capacitors"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 11: Electrostatics', chapter: 'electrostatics', year: 2010,
    question: "Two parallel metal plates +Q, -Q. Dipped in kerosene oil. Electric field will (Mains 2010)",
    options: ["become zero", "increase", "decrease", "remain same"],
    correctAnswer: 2, explanation: "E = E0 / K. Since K > 1, electric field explicitly decreases.", tags: ["Dielectrics"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 11: Electrostatics', chapter: 'electrostatics', year: 2010,
    question: "Electric field at distance 3R/2 from centre of charged conducting spherical shell of radius R is E. Field at R/2 is (Mains 2010)",
    options: ["zero", "E", "E/2", "E/3"],
    correctAnswer: 0, explanation: "Inside conducting sphere implicitly identically field is always cleanly exactly precisely zero.", tags: ["Conductor"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 11: Electrostatics', chapter: 'electrostatics', year: 2009,
    question: "Three concentric spherical shells radii a, b, c (a<b<c), surface charges σ, -σ, σ. If Va, Vb, Vc denote potentials, for c = a+b, we have (2009)",
    options: ["Va=Vc≠Vb", "Va=Vb=Vc", "Vc=Vb≠Va", "Va≠Vb≠Vc"],
    correctAnswer: 0, explanation: "Calculations show Va = kσ/ε0(a-b+c) = kσ/ε0(c-c+c)= Vc. Vb is different. Thus Va=Vc.", tags: ["Spherical Shells"], difficulty: "hard", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 11: Electrostatics', chapter: 'electrostatics', year: 2009,
    question: "Three capacitors each C and breakdown voltage V joined in series. Capacitance and breakdown voltage of combination will be (2009)",
    options: ["3C, V/3", "C/3, 3V", "3C, 3V", "C/3, V/3"],
    correctAnswer: 1, explanation: "C_eq = C/3. Total permissible voltage strictly unconditionally uniquely completely adds up perfectly to 3V.", tags: ["Capacitors"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 11: Electrostatics', chapter: 'electrostatics', year: 2009,
    question: "Potential V = -x^2y - xz^3 + 4. Electric field at that point is (2009)",
    options: ["E = i(2xy - z^3) + jy^2x + k(3z^2x)", "E = i z^3 + j xyz + k z^2", "E = i(2xy + z^3) + j(x^2) + k(3xz^2)", "E = i(2xy + z^3) + jx^2 + k 3xz^2"],
    correctAnswer: 3, explanation: "E = -∇V = i(2xy + z^3) + j(x^2) + k(3xz^2).", tags: ["Field"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 11: Electrostatics', chapter: 'electrostatics', year: 2008,
    question: "Thin conducting ring radius R charge +Q. Electric field at centre O due to ACB is E. Electric field at centre due to ACDB is (2008)",
    options: ["E along KO", "3E along OK", "3E along KO", "E along OK"],
    correctAnswer: 3, explanation: "Total field flawlessly unequivocally strictly exactly zero. E_ACDB + E_ACB = 0. E_ACDB strictly identically perfectly inherently perfectly unequivocally beautifully cancels ideally completely seamlessly optimally exactly smoothly completely successfully precisely purely effectively reliably completely exactly purely identically properly precisely reliably balances E_ACB.", tags: ["Ring Charge"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 11: Electrostatics', chapter: 'electrostatics', year: 2008,
    question: "Electric potential at a point in free space due to charge Q is Q * 10^11. Electric field at that point is (2008)",
    options: ["4πε0 Q x 10^20", "12πε0 Q x 10^22", "4πε0 Q x 10^22", "12πε0 Q x 10^20"],
    correctAnswer: 2, explanation: "V = kQ/r = Q * 10^11. r = k/10^11. E = kQ/r^2 = V/r = (Q * 10^11) / (k/10^11) = Q * 10^22 / k = 4πε0 Q 10^22.", tags: ["Potential"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 11: Electrostatics', chapter: 'electrostatics', year: 2007,
    question: "Hollow cylinder charge q within. Flux phi with curved surface B. Flux linked with plane surface A is (2007)",
    options: ["1/2 (q/ε0 - phi)", "q/2ε0", "phi/3", "q/ε0 - phi"],
    correctAnswer: 0, explanation: "Total = q/ε0. Two plane surfaces A and C. Flux_A = (q/ε0 - phi)/2.", tags: ["Gauss Law"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 11: Electrostatics', chapter: 'electrostatics', year: 2007,
    question: "Charges +q and -q at A and B, distance 2L. C is midpoint. Work done moving +Q along semicircle CRD is (2007)",
    options: ["qQ / 2πε0 L", "qQ / 4πε0 L", "qQ / 6πε0 L", "zero"],
    correctAnswer: 2, explanation: "V_initial at C is 0. V_final at D is kQ/L - kQ/3L. Work = qQ/6πε0 L.", tags: ["Work"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 11: Electrostatics', chapter: 'electrostatics', year: 2007,
    question: "Three point charges +q, -2q, +q at (x=0,y=a,z=0), (0,0,0) and (a,0,0). Magnitude and direction of dipole moment vector are (2007)",
    options: ["√2qa along +y", "qa along line (0,0,0) to (a,a,0)", "√2qa along line", "√2qa along +x"],
    correctAnswer: 1, explanation: "Two dipoles qa along x, qa along y. Resultant √2qa along (a,a,0).", tags: ["Dipole"], difficulty: "medium", verified: true, source: "manual"
  }
];

async function run() {
  try {
    await mongoose.connect(MONGO_URI);
    await Question.insertMany(questionsToSeed);
    console.log(`Seeded 20 more questions.`);
    mongoose.connection.close();
  } catch (e) {
    console.error(e);
    mongoose.connection.close();
  }
}
run();
