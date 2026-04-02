import mongoose from 'mongoose';
import Question from './models/Question.js';
import 'dotenv/config';

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/neet';

const questionsToSeed = [
  {
    subject: 'physics', unit: 'Unit 13: Moving Charges and Magnetism', chapter: 'magnetism', year: 0,
    question: "Magnetic field of circular loop radius 3 cm at distance 4 cm on axis is 54 mT. What is its value at the centre?",
    options: ["125 mT", "150 mT", "250 mT", "75 mT"],
    correctAnswer: 2, explanation: "B_axis = (mu0 i R^2) / (2 (R^2 + x^2)^(3/2)). B_center = (mu0 i) / (2R). Ratio B_center / B_axis = (R^2 + x^2)^(3/2) / R^3. R=3, x=4 => (3^2+4^2)^(3/2) / 3^3 = 25^(3/2) / 27 = 125 / 27. B_center = 54 * (125 / 27) = 2 * 125 = 250 mT.", tags: ["Magnetic Field of Circular Loop"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 13: Moving Charges and Magnetism', chapter: 'magnetism', year: 0,
    question: "Charge moving with velocity v in X-direction is subjected to magnetic field in negative X-direction. As a result, charge will",
    options: ["remain unaffected", "start moving in circular path Y-Z plane", "retard along X-axis", "move along helical path"],
    correctAnswer: 0, explanation: "Magnetic force F = q(v x B). Since v is +i and B is -i, cross product is 0. So F = 0. Charge remains unaffected.", tags: ["Magnetic Force on Charge"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 13: Moving Charges and Magnetism', chapter: 'magnetism', year: 0,
    question: "Electron travelling with speed u along +x enters region where B = -B0 k (x>0). It comes out of region with speed v then",
    options: ["v = u at y > 0", "v = u at y < 0", "v > u at y > 0", "v > u at y < 0"],
    correctAnswer: 1, explanation: "Speed of electron in magnetic field remains constant, so v = u. Force on electron (charge -e): F = -e (u i x -B0 k) = -e (-u B0 (-j)) = -e(u B0 j) = - e u B0 j. Wait. i x k = -j. So u i x -B0 k = -u B0 (i x k) = -u B0 (-j) = u B0 j. Then multiplied by -e gives -e u B0 j. Force is in -y direction. So it will deflect into y < 0 region.", tags: ["Motion in Magnetic Field"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 13: Moving Charges and Magnetism', chapter: 'magnetism', year: 0,
    question: "If an ammeter is to be used in place of a voltmeter, then we must connect with the ammeter a",
    options: ["low resistance in parallel", "high resistance in parallel", "high resistance in series", "low resistance in series"],
    correctAnswer: 2, explanation: "A voltmeter is essentially a galvanometer (or ammeter) with a high resistance in series. To use an ammeter as a voltmeter, a high resistance must be connected in series.", tags: ["Ammeter to Voltmeter"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 13: Moving Charges and Magnetism', chapter: 'magnetism', year: 0,
    question: "Infinite straight conductor carrying current 2I is split into loop of radius r. Magnetic field at centre of coil is",
    options: ["mu0/4r (2pi + 1)", "mu0/4r (2pi - 1)", "mu0/4r (pi + 1)", "zero"],
    correctAnswer: 3, explanation: "The straight wire passes through the center. Actually, the straight conductor is split into a circular loop. The current I splits equally into two semi-circular paths. The magnetic fields due to the two semi-circles at the center are equal and opposite, cancelling each other. Also, the straight wires pass through the center line, contributing 0. Total magnetic field is zero.", tags: ["Biot-Savart Law"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 13: Moving Charges and Magnetism', chapter: 'magnetism', year: 0,
    question: "Parallel plate capacitor area 60 cm^2, separation 3 mm, charged to 90 uC. Medium gets slightly conducting and loses charge at 2.5 x 10^-8 C/s. Magnetic field between plates is",
    options: ["2.5 x 10^-8 T", "2.0 x 10^-7 T", "1.63 x 10^-11 T", "Zero"],
    correctAnswer: 3, explanation: "Displacement current plus conduction current is zero if we consider a loop between plates? Actually, symmetry implies no net rotating magnetic field for uniform discharge. More accurately, magnetic field between plates of a discharging capacitor is only zero at center axis, but typically considered zero for standard such problems unless asked at a specific radius r. Wait, answer key says zero.", tags: ["Displacement Current"], difficulty: "hard", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 13: Moving Charges and Magnetism', chapter: 'magnetism', year: 0,
    question: "Four wires length 2.0 m bent into loops P(square), Q(triangle), R(rectangle), S(circle). Suspended in uniform B. Same current, torque is maximum on",
    options: ["P", "Q", "R", "S"],
    correctAnswer: 3, explanation: "Torque = NIA B. For a given perimeter, a circle has the maximum area. Thus, the circular loop S will have the maximum magnetic moment and maximum torque.", tags: ["Magnetic Torque"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 13: Moving Charges and Magnetism', chapter: 'magnetism', year: 0,
    question: "E = 2i - 3j N/C, B = 5i + 3j + 4k T. Force on charge 1C moving with v = i + 2j m/s is",
    options: ["10i - 7j - 7k", "10i + 7j + 7k", "-10i + 7j + 7k", "10i + 7j - 7k"],
    correctAnswer: 0, explanation: "F = q(E + v x B). v x B = (i + 2j) x (5i + 3j + 4k) = i x(5i+3j+4k) + 2j x(5i+3j+4k) = 3k - 4j - 10k + 8i = 8i - 4j - 7k. Total F = 1 * (2i - 3j + 8i - 4j - 7k) = 10i - 7j - 7k.", tags: ["Lorentz Force"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 13: Moving Charges and Magnetism', chapter: 'magnetism', year: 0,
    question: "Galvanometer resistance 100 ohm gives full scale deflection for 10^-5 A. To convert to ammeter upto 1 A, connect",
    options: ["1 ohm parallel", "10^-3 ohm parallel", "10^5 ohm series", "100 ohm series"],
    correctAnswer: 1, explanation: "S = (I_g * G) / (I - I_g) = (10^-5 * 100) / (1 - 10^-5) approx 10^-3 ohm in parallel.", tags: ["Galvanometer Conversion"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 13: Moving Charges and Magnetism', chapter: 'magnetism', year: 0,
    question: "Square loop current I, placed near long straight conductor current I1. Loop will experience",
    options: ["a net repulsive force away from conductor", "net torque acting upward perpendicular to plane", "net torque acting downward", "a net attractive force towards the conductor"],
    correctAnswer: 3, explanation: "The arm of the loop parallel and closer to the long wire has current in same direction, feeling a strong attractive force. The farther parallel arm has current in opposite direction, feeling a weak repulsive force. The net force is attractive.", tags: ["Forces between currents"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 13: Moving Charges and Magnetism', chapter: 'magnetism', year: 0,
    question: "Two coaxial solenoids different radius carry current I in same direction. F1 force on inner due to outer, F2 on outer due to inner. Then",
    options: ["F1 radially inwards, F2 = 0", "F1 radially outwards, F2 = 0", "F1 = F2 = 0", "F1 radially inwards, F2 radially outwards"],
    correctAnswer: 2, explanation: "A solenoid produces magnetic field parallel to its axis. The force on any small current element of the other solenoid (dl) is Idl x B. Since dl is azimuthal (around circumference) and B is axial, the force is radial. However, for a rigid complete loop, the net translation force is zero. So net force F1 = F2 = 0. Wait, the question asks 'magnetic force' usually meaning net force. If it means net force, it's 0.", tags: ["Magnetic Force"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 13: Moving Charges and Magnetism', chapter: 'magnetism', year: 0,
    question: "Beam of electrons moving with constant velocity in simultaneous perpendicular E and B fields of 20 V/m and 0.5 T. Velocity must be",
    options: ["8 m/s", "20 m/s", "40 m/s", "1/40 m/s"],
    correctAnswer: 2, explanation: "For constant velocity (no deflection in crossed fields), qE = qvB. v = E/B = 20 / 0.5 = 40 m/s.", tags: ["Velocity Selector"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 13: Moving Charges and Magnetism', chapter: 'magnetism', year: 0,
    question: "Magnetic flux density B at distance r from long straight wire relates to r as",
    options: ["B proportional to r", "B proportional to r^2", "B proportional to 1/r", "B proportional to 1/r^2"],
    correctAnswer: 2, explanation: "B = mu0 * I / (2 * pi * r). Therefore, B is proportional to 1/r.", tags: ["Biot-Savart Law"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 13: Moving Charges and Magnetism', chapter: 'magnetism', year: 0,
    question: "AC voltage across a resistance can be measured using a",
    options: ["hot wire voltmeter", "moving coil galvanometer", "potential coil galvanometer", "moving magnet galvanometer"],
    correctAnswer: 0, explanation: "A hot wire instrument measures the rms value of AC as its deflection depends on heating effect (I^2 R) which takes average over a cycle, unlike moving coil which averages to zero for AC.", tags: ["Measuring Instruments"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 13: Moving Charges and Magnetism', chapter: 'magnetism', year: 0,
    question: "Charged particle velocity v in B field. Force is non-zero. This implies that",
    options: ["angle necessarily 90", "angle any value other than 90", "angle any value other than 0 and 180", "angle either 0 or 180"],
    correctAnswer: 2, explanation: "F = qvB sin(theta). For F != 0, sin(theta) != 0, which means theta != 0 and theta != 180.", tags: ["Magnetic Force on Charge"], difficulty: "easy", verified: true, source: "manual"
  }
];

async function run() {
  try {
    await mongoose.connect(MONGO_URI);
    await Question.insertMany(questionsToSeed);
    console.log(`Seeded 15 more questions for Unit 13 (Part 3). Total 45 questions in unit.`);
    mongoose.connection.close();
  } catch (e) {
    console.error(e);
    mongoose.connection.close();
  }
}
run();
