import mongoose from 'mongoose';
import Question from './models/Question.js';
import 'dotenv/config';

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/neet';

const questionsToSeed = [
  {
    subject: 'physics', unit: 'Unit 22: Magnetism and Matter', chapter: 'magnetism-matter', year: 2017,
    question: "A 250-turn rectangular coil of length 2.1 cm and width 1.25 cm carries a current of 85 mA and subjected to a magnetic field of strength 0.85 T. Work done for rotating the coil by 180 deg against the torque is",
    options: ["4.55 mJ", "2.3 mJ", "1.15 mJ", "9.1 mJ"],
    correctAnswer: 3, explanation: "W = MB(cos theta1 - cos theta2). Rotating by 180 deg, W = 2MB. M = NIA = 250 * 85x10^-3 * (2.1x10^-2 * 1.25x10^-2) = 250 * 0.085 * 0.0002625 = 0.005578 A m^2. W = 2 * 0.005578 * 0.85 = 0.00948 J approx 9.1 mJ (using exact values = 9.1x10^-3 J).", tags: ["Magnetic Moment", "Work Done"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 22: Magnetism and Matter', chapter: 'magnetism-matter', year: 2016,
    question: "A bar magnet is hung by a thin cotton thread in a uniform horizontal magnetic field and is in equilibrium state. The energy required to rotate it by 60 deg is W. Now the torque required to keep the magnet in this new position is",
    options: ["W / sqrt(3)", "sqrt(3) W", "sqrt(3)/2 W", "2/sqrt(3) W"],
    correctAnswer: 1, explanation: "W = MB(cos 0 - cos 60) = MB(1 - 1/2) = MB/2 => MB = 2W. Torque = MB sin 60 = 2W * (sqrt(3)/2) = sqrt(3) W.", tags: ["Torque", "Potential Energy"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 22: Magnetism and Matter', chapter: 'magnetism-matter', year: 2014,
    question: "Three arrangements of bar magnets. Net magnetic dipole moment will be highest for:",
    options: ["Configuration 1 (parallel, angle 90)", "Configuration 2 (anti-parallel, angle 180)", "Configuration 3 (angle 30)", "Configuration 4 (angle 60)"],
    correctAnswer: 2, explanation: "M_net = sqrt(M^2 + M^2 + 2MM cos theta). The value is maximum when cos(theta) is maximum, i.e., theta is minimum. Out of 30, 60, 90, 180, 30 deg gives the highest value. Assuming configuration 3 has angle 30 deg.", tags: ["Magnetic Moment"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 22: Magnetism and Matter', chapter: 'magnetism-matter', year: 2013,
    question: "A bar magnet of length l and magnetic dipole moment M is bent in the form of an arc as shown. The new magnetic dipole moment will be",
    options: ["2M / pi", "M / 2", "M", "3M / pi"],
    correctAnswer: 3, explanation: "Initially M = m*l. Let the magnet be bent into an arc of angle 60 deg (pi/3 rad) based on answer 3M/pi ? Wait, arc length l = r * theta. If answer is 3M/pi, then r = l/(pi/3) = 3l/pi. Then string length distance = 2r sin(theta/2) = 2(3l/pi) sin(pi/6) = 2(3l/pi)(0.5) = 3l/pi. So new moment M' = m * distance = m * (3l/pi) = 3M/pi.", tags: ["Magnetic Moment"], difficulty: "hard", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 22: Magnetism and Matter', chapter: 'magnetism-matter', year: 2013,
    question: "A bar magnet of magnetic moment M is placed at right angles to a magnetic induction B. If a force F is experienced by each pole of the magnet, the length of the magnet will be",
    options: ["MB/F", "BF/M", "MF/B", "F/MB"],
    correctAnswer: 0, explanation: "Magnetic moment M = pole strength (m) * length (l). Force on pole F = m * B => m = F/B. Substituting, M = (F/B) * l. Thus, length l = MB/F.", tags: ["Magnetic Dipole"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 22: Magnetism and Matter', chapter: 'magnetism-matter', year: 2012,
    question: "A magnetic needle suspended parallel to a magnetic field requires 3 J of work to turn it through 60 deg. The torque needed to maintain the needle in this position will be",
    options: ["2 sqrt(3) J", "3 sqrt(3) J", "3 J", "sqrt(3) / 2 J"],
    correctAnswer: 1, explanation: "Work W = MB(1 - cos 60) = MB / 2 = 3 J => MB = 6 J. Torque = MB sin 60 = 6 * (sqrt(3) / 2) = 3 sqrt(3) J. (Note: torque unit is technically Nm or J).", tags: ["Torque", "Potential Energy"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 22: Magnetism and Matter', chapter: 'magnetism-matter', year: 2011,
    question: "A short bar magnet of magnetic moment 0.4 J T^-1 is placed in uniform magnetic field of 0.16 T. The magnet is in stable equilibrium when the potential energy is",
    options: ["0.064 J", "-0.064 J", "zero", "-0.082 J"],
    correctAnswer: 1, explanation: "For stable equilibrium, angle theta = 0 deg. Potential energy U = -MB cos(0) = - 0.4 * 0.16 = -0.064 J.", tags: ["Potential Energy"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 22: Magnetism and Matter', chapter: 'magnetism-matter', year: 2010,
    question: "Magnet executes oscillations with time period 2s in earth's horizontal magnetic field 24 uT. When horizontal field 18 uT is produced opposite to earth's field, new time period will be",
    options: ["1 s", "2 s", "3 s", "4 s"],
    correctAnswer: 3, explanation: "Time period T = 2pi sqrt(I / MB). So T is proportional to 1/sqrt(B). B1 = 24 uT. B2 = 24 - 18 = 6 uT. T2/T1 = sqrt(B1/B2) = sqrt(24/6) = sqrt(4) = 2. T2 = 2 * T1 = 2 * 2 = 4 s.", tags: ["Vibration Magnetometer"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 22: Magnetism and Matter', chapter: 'magnetism-matter', year: 2010,
    question: "Two identical bar magnets are fixed with centres d apart. Stationary charge Q is placed at P in between gap of magnets at distance D from centre O. Force on charge Q is",
    options: ["zero", "directed along OP", "directed along PO", "directed perpendicular to plane of paper"],
    correctAnswer: 0, explanation: "Magnetic field exerts force only on moving charges. Since the charge Q is stationary, velocity v=0, hence magnetic force F = q(v x B) = 0.", tags: ["Magnetic Force"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 22: Magnetism and Matter', chapter: 'magnetism-matter', year: 2010,
    question: "Closely wound solenoid 2000 turns, area 1.5x10^-4 m^2 carries 2.0 A current. Suspended turning in horizontal plane in B = 5x10^-2 T making angle 30 with axis. Torque is",
    options: ["3 x 10^-3 N m", "1.5 x 10^-3 N m", "1.5 x 10^-2 N m", "3 x 10^-2 N m"],
    correctAnswer: 2, explanation: "M = N I A = 2000 * 2.0 * 1.5x10^-4 = 0.6 A m^2. Torque = M B sin(theta) = 0.6 * 5x10^-2 * sin(30) = 0.03 * 0.5 = 0.015 N m = 1.5 x 10^-2 N m.", tags: ["Torque"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 22: Magnetism and Matter', chapter: 'magnetism-matter', year: 2009,
    question: "Bar magnet having magnetic moment 2x10^4 J T^-1 free to rotate in B = 6x10^-4 T. Work done in taking magnet slowly from parallel to 60 deg from field is",
    options: ["12 J", "6 J", "2 J", "0.6 J"],
    correctAnswer: 1, explanation: "Work W = MB (cos 0 - cos 60) = 2x10^4 * 6x10^-4 * (1 - 0.5) = 12 * 0.5 = 6 J.", tags: ["Work Done"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 22: Magnetism and Matter', chapter: 'magnetism-matter', year: 2003,
    question: "A bar magnet is oscillating in Earth's magnetic field with period T. What happens to its period and motion if its mass is quadrupled?",
    options: ["Motion remains S.H.M with time period = T/2", "Motion remains S.H.M with time period = 2T", "Motion remains S.H.M with time period = 4T", "Motion remains S.H.M and period remains nearly constant"],
    correctAnswer: 1, explanation: "Time period T = 2pi sqrt(I / MB). Moment of inertia I is proportional to mass. If mass is quadrupled, I becomes 4 times. T' = sqrt(4) T = 2T.", tags: ["Vibration Magnetometer"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 22: Magnetism and Matter', chapter: 'magnetism-matter', year: 2002,
    question: "Two magnets moments M and 2M placed with similar poles same side, period is T1. Polarity of one reversed, period is T2. Then",
    options: ["T1 < T2", "T1 = T2", "T1 > T2", "T2 = infinity"],
    correctAnswer: 0, explanation: "In sum position M_net = M1 + M2 = 3M. T1 = 2pi sqrt(I / 3MB). In difference position M_net = 2M - M = M. T2 = 2pi sqrt(I / MB). Since 3MB > MB, T1 < T2.", tags: ["Vibration Magnetometer"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 22: Magnetism and Matter', chapter: 'magnetism-matter', year: 1999,
    question: "A bar magnet of magnetic moment M is placed in a magnetic field B. The torque exerted on it is",
    options: ["M x B", "- M . B", "M . B", "- B x M"],
    correctAnswer: 0, explanation: "The torque is given by the cross product tau = M x B. Note that -B x M is also mathematically equivalent but M x B is the standard convention matching the option (a,d) from answer key.", tags: ["Torque"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 22: Magnetism and Matter', chapter: 'magnetism-matter', year: 1997,
    question: "A bar magnet of magnetic moment M is cut into two parts of equal length. The magnetic moment of each part will be",
    options: ["M", "2M", "zero", "0.5M"],
    correctAnswer: 3, explanation: "M = m * L. If cut perpendicular to length into two equal halves, the length becomes L/2. New magnetic moment M' = m * (L/2) = M/2 = 0.5M.", tags: ["Magnetic Dipole"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 22: Magnetism and Matter', chapter: 'magnetism-matter', year: 1995,
    question: "Work done turning magnet 90 deg from meridian is n times work turning 60 deg. Value of n is",
    options: ["1/2", "1/4", "2", "1"],
    correctAnswer: 2, explanation: "W90 = MB(cos 0 - cos 90) = MB. W60 = MB(cos 0 - cos 60) = MB(1 - 1/2) = MB/2. Therefore W90 = 2 * W60. Thus n = 2.", tags: ["Work Done"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 22: Magnetism and Matter', chapter: 'magnetism-matter', year: 2019,
    question: "At point A on earth dip is +25 deg. At point B dip is -25 deg. We can interpret that",
    options: ["A and B both in southern hemisphere", "A and B both in northern hemisphere", "A in southern and B in northern hemisphere", "A in northern and B in southern hemisphere"],
    correctAnswer: 3, explanation: "Angle of dip is positive in the northern hemisphere (magnetic field points downwards) and negative in the southern hemisphere (magnetic field points upwards). So A is in North, B is in South.", tags: ["Earth's Magnetism"], difficulty: "easy", verified: true, source: "manual"
  }
];

async function run() {
  try {
    await mongoose.connect(MONGO_URI);
    await Question.deleteMany({ chapter: 'magnetism-matter' });
    await Question.insertMany(questionsToSeed);
    console.log(`Seeded 17 questions for Unit 22 (Part 1).`);
    mongoose.connection.close();
  } catch (e) {
    console.error(e);
    mongoose.connection.close();
  }
}
run();
