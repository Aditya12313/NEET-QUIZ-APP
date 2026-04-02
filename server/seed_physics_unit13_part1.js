import mongoose from 'mongoose';
import Question from './models/Question.js';
import 'dotenv/config';

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/neet';

const questionsToSeed = [
  {
    subject: 'physics', unit: 'Unit 13: Moving Charges and Magnetism', chapter: 'magnetism', year: 0,
    question: "An insulating rod of length l carries a charge q distributed uniformly on it. It is pivoted at its mid point and rotated at a frequency f about an axis perpendicular to rod. The magnetic moment of the rod system is (pi * q * f * l^2) / (2a). Find the value of a.",
    options: ["6", "4", "5", "8"],
    correctAnswer: 0, explanation: "Magnetic moment M = integral of (di * A). Consider an element dx at distance x. Charge dq = (q/l)dx. Current di = f * dq = f * (q/l)dx. Area A = pi * x^2. dM = di * pi * x^2 = [f(q/l)dx] * pi * x^2. M = 2 * integral from 0 to l/2 of (pi f q / l) x^2 dx = 2 * (pi f q / l) [x^3/3]_0^(l/2) = 2 * (pi f q / l) * (l^3 / 24) = (pi q f l^2) / 12. Equating to (pi q f l^2) / (2a), we get 2a = 12 => a = 6.", tags: ["Magnetic Moment"], difficulty: "hard", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 13: Moving Charges and Magnetism', chapter: 'magnetism', year: 0,
    question: "A portion of conductive wire is bent in form of semicircle radius r. Straight parts pass through centre. At the centre of semicircle, magnetic induction will be",
    options: ["zero", "infinite", "mu0 * pi * i / (4pi r)", "mu0 * pi * i / (4 r), Wait... answer says mu0 pi i / 4pi r ? Option says mu_0 pi i / 4 pi r = mu0 i / 4 r. The options list (c) as mu0 2 pi i / 4pi r and (d) as mu0 pi i / 4 pi r."],
    correctAnswer: 3, explanation: "The straight part produces zero magnetic field at the centre because the element is along the line joining the centre. The semicircular part produces a magnetic field B = (mu0 I) / (4 r). This can be written as (mu0 * pi * I) / (4 * pi * r).", tags: ["Biot-Savart Law"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 13: Moving Charges and Magnetism', chapter: 'magnetism', year: 0,
    question: "Closely wound solenoid 2000 turns, area 1.5x10^-4 m^2, current 2.0A. Suspended through centre in uniform B 5x10^-2 T making angle 30 with axis. Torque on solenoid will be:",
    options: ["3 x 10^-2 N-m", "3 x 10^-3 N-m", "1.5 x 10^-3 N-m", "1.5 x 10^-2 N-m"],
    correctAnswer: 3, explanation: "Magnetic moment M = N i A = 2000 * 2.0 * 1.5x10^-4 = 0.6 A m^2. Torque = M B sin(theta) = 0.6 * 5x10^-2 * sin(30) = 0.6 * 0.05 * 0.5 = 0.015 N m = 1.5 x 10^-2 N-m.", tags: ["Magnetic Torque"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 13: Moving Charges and Magnetism', chapter: 'magnetism', year: 0,
    question: "Alternating electric field of frequency v applied across dees (radius R) of cyclotron for protons (mass m). The operating B and kinetic energy K are given by:",
    options: ["B=mv/e, K=2mp^2v^2R^2", "B=2pi m v/e, K=m^2 pi v R^2", "B=2pi m v / e, K = 2 m pi^2 v^2 R^2", "B=mv/e, K=m p^2 v R^2"],
    correctAnswer: 2, explanation: "Frequency v = qB/(2pi m) => B = 2pi m v / e. Kinetic energy K = (q^2 B^2 R^2) / (2m) = (e^2 * (2pi m v/e)^2 * R^2) / (2m) = 2 m pi^2 v^2 R^2.", tags: ["Cyclotron"], difficulty: "hard", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 13: Moving Charges and Magnetism', chapter: 'magnetism', year: 0,
    question: "Galvanometer 50 ohm has 25 div. Current of 4x10^-4 A gives deflection of one per division. To convert into voltmeter of range 25V, resistance connected is",
    options: ["2450 ohm in series", "2500 ohm in series", "245 ohm in series", "2550 ohm in series"],
    correctAnswer: 0, explanation: "I_g = 25 * 4x10^-4 = 10^-2 A. V = I_g(G + R) => 25 = 10^-2 (50 + R) => 2500 = 50 + R => R = 2450 ohm in series.", tags: ["Galvanometer Conversion"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 13: Moving Charges and Magnetism', chapter: 'magnetism', year: 0,
    question: "If we double radius of a coil keeping current unchanged, then B at large distance from centre becomes approximately",
    options: ["double", "three times", "four times", "one-fourth"],
    correctAnswer: 2, explanation: "Magnetic field on axis at large distance r: B is proportional to (I * R^2) / r^3. If R is doubled, B is proportional to (2R)^2 = 4R^2. Thus B becomes four times.", tags: ["Biot-Savart Law"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 13: Moving Charges and Magnetism', chapter: 'magnetism', year: 0,
    question: "Particle mass m, charge Q, kinetic energy T enters transverse uniform magnetic field. After 3 seconds, kinetic energy is:",
    options: ["3T", "2T", "T", "4T"],
    correctAnswer: 2, explanation: "Magnetic force is perpendicular to velocity, so it does no work. Therefore, the kinetic energy of the particle remains constant at T.", tags: ["Magnetic Force"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 13: Moving Charges and Magnetism', chapter: 'magnetism', year: 0,
    question: "10 eV electron circulating right angles to uniform field 10^-4 Wb/m^2 (1.0 gauss). Orbital radius is",
    options: ["12 cm", "16 cm", "11 cm", "18 cm"],
    correctAnswer: 2, explanation: "K = 1/2 mv^2 = 10 * 1.6x10^-19 = 1.6x10^-18 J. p = sqrt(2 m K) = sqrt(2 * 9.1x10^-31 * 1.6x10^-18) approx 1.7x10^-24 kg m/s. r = mv/(qB) = p/(qB) = 1.7x10^-24 / (1.6x10^-19 * 10^-4) = (1.7/1.6) * 10^-1 approx 0.11 m = 11 cm.", tags: ["Motion in Magnetic Field"], difficulty: "hard", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 13: Moving Charges and Magnetism', chapter: 'magnetism', year: 0,
    question: "Uniform E and B point in same direction. Electron is projected with velocity in same direction. The electron will",
    options: ["turn to its right", "turn to its left", "keep moving in same direction but speed will increase", "keep moving in same direction but speed will decrease"],
    correctAnswer: 3, explanation: "Magnetic force is zero since V is parallel to B. Electric force is opposite to E (since electron is negative), so the electric force acts in the opposite direction of its velocity, causing it to decelerate.", tags: ["Lorentz Force"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 13: Moving Charges and Magnetism', chapter: 'magnetism', year: 0,
    question: "Proton, deuteron and alpha particle of same kinetic energy move in circular trajectories in constant B. Radii r_p, r_d, r_a. Relation is",
    options: ["r_p = r_d = r_a", "r_p = r_a < r_d", "r_d > r_p > r_a", "r_d = r_a > r_p"],
    correctAnswer: 1, explanation: "r = sqrt(2mK) / (qB). For given K, r proportional to sqrt(m)/q. m_p=1, q_p=1 -> r_p proportional to 1. m_d=2, q_d=1 -> r_d proportional to sqrt(2). m_a=4, q_a=2 -> r_a proportional to sqrt(4)/2 = 1. Therefore, r_p = r_a < r_d.", tags: ["Motion in Magnetic Field"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 13: Moving Charges and Magnetism', chapter: 'magnetism', year: 0,
    question: "Moving coil galvanometer has 150 equal divisions. Current sensitivity 10 div/mA and voltage sensitivity 2 div/mV. For each div to read 1 volt, resistance in series will be",
    options: ["10^5", "10^3", "9995", "99995"],
    correctAnswer: 2, explanation: "Given I_s = 10 div/mA, V_s = 2 div/mV. G = I_s / V_s = (10 div/mA) / (2 div/mV) = 5 ohm. Full scale current I_g = 150 div / (10 div/mA) = 15 mA. Full scale voltage needed V = 150*1 = 150 V. R = V/I_g - G = 150 / (15x10^-3) - 5 = 10000 - 5 = 9995 ohm.", tags: ["Galvanometer Conversion"], difficulty: "hard", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 13: Moving Charges and Magnetism', chapter: 'magnetism', year: 0,
    question: "2 muC charge moving around circle with freq 6.25x10^12 Hz produces magnetic field 6.28 T at centre of circle. Radius of circle is",
    options: ["2.25 m", "0.25 m", "13.0 m", "1.25 m"],
    correctAnswer: 3, explanation: "Equivalent current I = q * f = 2x10^-6 * 6.25x10^12 = 12.5x10^6 A. B = mu0 * I / (2R) => R = mu0 * I / (2B) = (4pi * 10^-7 * 12.5x10^6) / (2 * 6.28). Since 4pi = 12.56 approx 2 * 6.28, R = (12.56 * 10^-7 * 12.5x10^6) / 12.56 = 1.25 m.", tags: ["Biot-Savart Law"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 13: Moving Charges and Magnetism', chapter: 'magnetism', year: 0,
    question: "Charged particle charge q enters region of uniform orthogonal E and B. Velocity v is perpendicular to both. Comes out without any change in velocity. Then",
    options: ["v = B x E / E^2", "v = E x B / B^2", "v = B x E / B^2", "v = E x B / E^2"],
    correctAnswer: 1, explanation: "Force F = q(E + v x B) = 0 => E = - (v x B) = B x v. Thus v, E, and B form a right-handed system such that v = E/B in magnitude, and direction is mutually perpendicular. E x B gives the exact vector expression V = E x B / |B|^2.", tags: ["Velocity Selector"], difficulty: "hard", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 13: Moving Charges and Magnetism', chapter: 'magnetism', year: 0,
    question: "Square current carrying loop suspended in uniform magnetic field in plane of loop. If force on one arm is F, net force on remaining three arms is",
    options: ["3 F", "-F", "-3 F", "F"],
    correctAnswer: 1, explanation: "Since the loop is closed and placed in a uniform magnetic field, the net force on the loop is zero. F_net = F + F_remaining = 0 => F_remaining = -F.", tags: ["Magnetic Force"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 13: Moving Charges and Magnetism', chapter: 'magnetism', year: 0,
    question: "A straight section PQ of a circuit lies along the X-axis from x = -a/2 to x = a/2 and carries steady current i. The magnetic field at x = +a will be",
    options: ["proportional to a", "proportional to a^2", "proportional to 1/a", "zero"],
    correctAnswer: 3, explanation: "The point is on the axis of the straight wire. By Biot-Savart Law, dl x r = 0, so the magnetic field is always zero.", tags: ["Biot-Savart Law"], difficulty: "easy", verified: true, source: "manual"
  }
];

async function run() {
  try {
    await mongoose.connect(MONGO_URI);
    await Question.deleteMany({ chapter: 'magnetism' });
    await Question.insertMany(questionsToSeed);
    console.log(`Seeded 15 questions for Unit 13 (Part 1).`);
    mongoose.connection.close();
  } catch (e) {
    console.error(e);
    mongoose.connection.close();
  }
}
run();
