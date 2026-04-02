import mongoose from 'mongoose';
import Question from './models/Question.js';
import 'dotenv/config';

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/neet';

const questionsToSeed = [
  {
    subject: 'physics', unit: 'Unit 11: Electrostatics', chapter: 'electrostatics', year: 2017,
    question: "A capacitor is charged by a battery. The battery is removed and another identical uncharged capacitor is connected in parallel. The total electrostatic energy of resulting system decreases by a factor of (NEET 2017)",
    options: ["2", "remains the same", "increases by a factor of 2", "increases by a factor of 4"],
    correctAnswer: 0, explanation: "Energy becomes half.", tags: ["Capacitors"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 11: Electrostatics', chapter: 'electrostatics', year: 2017,
    question: "Charge of a proton and an electron differ slightly. One is -e, the other is (e + Δe). If net of electrostatic force and gravitational force between two hydrogen atoms at distance d is zero, then Δe is of the order of (m = 1.67 x 10^-27 kg) (NEET 2017)",
    options: ["10^-23 C", "10^-37 C", "10^-47 C", "10^-20 C"],
    correctAnswer: 1, explanation: "Equating formulas: k(Δe)^2/d^2 = Gm^2/d^2 gives 10^-37 C.", tags: ["Electrostatic Force"], difficulty: "hard", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 11: Electrostatics', chapter: 'electrostatics', year: 2017,
    question: "The diagrams show regions of equipotentials. A positive charge is moved from A (10V) to B (40V) in each diagram. (NEET 2017)",
    options: ["In all the four cases the work done is the same.", "Minimum work is required in figure (I).", "Maximum work is required in figure (II).", "Maximum work is required in figure (III)."],
    correctAnswer: 0, explanation: "Work = qΔV. Since ΔV is 30V in all cases, work is identical.", tags: ["Equipotentials"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 11: Electrostatics', chapter: 'electrostatics', year: 2016,
    question: "An electric dipole is placed at an angle of 30° with an electric field intensity 2x10^5 N/C. It experiences a torque equal to 4 N m. The charge on the dipole, if the dipole length is 2 cm, is (NEET-II 2016)",
    options: ["8 mC", "2 mC", "5 mC", "7 μC"],
    correctAnswer: 1, explanation: "Torque = q(2a)E sin(θ). 4 = q(0.02)(2x10^5)(1/2) -> q = 2 mC.", tags: ["Dipole Torque"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 11: Electrostatics', chapter: 'electrostatics', year: 2016,
    question: "A parallel plate capacitor is filled with four dielectric materials K1, K2, K3, K4. K1, K2, K3 are in parallel taking A/3 area each, and K4 is in series with them taking area A. Effective K is: (NEET-II 2016)",
    options: ["K=K1+K2+K3+3K4", "K=2/3(K1+K2+K3)+2K4", "2/K=3/(K1+K2+K3)+1/K4", "1/K=1/K1+1/K2+1/K3+1/2K4"],
    correctAnswer: 2, explanation: "Using series and parallel equivalent formulas gives 2/K=3/(K1+K2+K3)+1/K4.", tags: ["Dielectrics"], difficulty: "hard", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 11: Electrostatics', chapter: 'electrostatics', year: 2016,
    question: "A capacitor of 2 μF is charged to V. Connected to 8 μF uncharged capacitor. The percentage of stored energy dissipated is (NEET-I 2016)",
    options: ["75%", "80%", "0%", "20%"],
    correctAnswer: 1, explanation: "Loss % = C2 / (C1+C2) = 8/10 = 80%.", tags: ["Capacitors"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 11: Electrostatics', chapter: 'electrostatics', year: 2016,
    question: "Two identical charged spheres suspended by strings initially at d (d<<l) apart. Charges leak at constant rate. Resulting approach velocity v varies with distance x as (NEET-I 2016)",
    options: ["v ∝ x^-1/2", "v ∝ x", "v ∝ x^1/2", "v ∝ x^-1"],
    correctAnswer: 0, explanation: "Equilibrium x^3 ∝ q^2. Differentiating with constant dq/dt yields v ∝ x^-1/2.", tags: ["Electrostatics", "Kinematics"], difficulty: "hard", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 11: Electrostatics', chapter: 'electrostatics', year: 2015,
    question: "A parallel plate air capacitor has capacity C, distance d, potential V. Force of attraction between plates is (2015)",
    options: ["CV^2 / d", "CV^2 / 2d", "C^2V^2 / 2d^2", "C^2V^2 / 2d"],
    correctAnswer: 1, explanation: "Force F = (1/2) * Q * E = (1/2) * (CV) * (V/d) = CV^2 / 2d.", tags: ["Capacitors"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 11: Electrostatics', chapter: 'electrostatics', year: 2015,
    question: "If potential V(x, y, z) = 6xy - y + 2yz, the electric field at (1, 1, 0) is (2015)",
    options: ["-(2i + 3j + k)", "-(6i + 9j + k)", "-(3i + 5j + 3k)", "-(6i + 5j + 2k)"],
    correctAnswer: 3, explanation: "E = -∇V. Ex=-6, Ey=-5, Ez=-2. E = -(6i + 5j + 2k).", tags: ["Electric Potential"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 11: Electrostatics', chapter: 'electrostatics', year: 2015,
    question: "The electric field is acting radially outward and given by E = Ar. A charge contained in a sphere of radius 'a' centred at origin is (2015 Cancelled)",
    options: ["4πε0 Aa^2", "ε0 Aa^3", "4πε0 Aa^3", "A/a^2"],
    correctAnswer: 2, explanation: "Flux Φ = E * 4πa^2 = 4πAa^3. By Gauss Law q = ε0 Φ = 4πε0 Aa^3.", tags: ["Gauss Law"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 11: Electrostatics', chapter: 'electrostatics', year: 2015,
    question: "A parallel plate air capacitor C is connected to V then disconnected. A dielectric slab K is inserted. Which is incorrect? (2015 Cancelled)",
    options: ["Change in energy is 1/2 CV^2 (1/K - 1)", "Charge on capacitor is not conserved.", "Potential difference decreases K times.", "Energy stored decreases K times."],
    correctAnswer: 1, explanation: "Since disconnected, charge Q cannot leave and remains absolutely conserved.", tags: ["Dielectrics"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 11: Electrostatics', chapter: 'electrostatics', year: 2014,
    question: "Two thin dielectric slabs K1 and K2 (K1 < K2) are inserted between plates. Variation of electric field E with distance is (2014)",
    options: ["E increasing linearly", "E horizontal line", "E drops in K1 and drops more in K2", "E is continuous"],
    correctAnswer: 2, explanation: "E = E0 / K. Since K2 > K1 > 1, field drops most in K2.", tags: ["Electric Field"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 11: Electrostatics', chapter: 'electrostatics', year: 2014,
    question: "A conducting sphere of radius R is given a charge Q. The electric potential and electric field at the centre respectively are (2014)",
    options: ["zero and Q/4πε0R²", "Q/4πε0R and zero", "Q/4πε0R and Q/4πε0R²", "both are zero"],
    correctAnswer: 1, explanation: "E inside conductor is 0. V is constant and equals surface V.", tags: ["Conductors"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 11: Electrostatics', chapter: 'electrostatics', year: 2014,
    question: "Potential V = 6x - 8xy - 8y + 6yz. The electric force experienced by 2C charge at (1, 1, 1) is (2014)",
    options: ["6√5 N", "30 N", "24 N", "4√35 N"],
    correctAnswer: 3, explanation: "E = -∇V. At (1,1,1), E = 2i + 2j - 6k. |E| = √40 = 2√10. Force = q|E| = 4√10 N = √160 ≈ 4√35? Actually |E| = √(( -6+8)^2 + (8+8-6)^2 + (-6)^2 ) = √(4+100+36) = √140 = 2√35. F = 4√35 N.", tags: ["Electric Force"], difficulty: "hard", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 11: Electrostatics', chapter: 'electrostatics', year: 2013,
    question: "A, B, C are in a uniform electric field. Electric potential is (NEET 2013)",
    options: ["maximum at C", "same at all", "maximum at A", "maximum at B"],
    correctAnswer: 3, explanation: "Potential decreases in direction of E. Point B is most upstream.", tags: ["Electric Potential"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 11: Electrostatics', chapter: 'electrostatics', year: 2013,
    question: "Two pith balls with equal charges suspended by strings of length r. Equilibrium separation is x. Strings clamped at half height. New separation is (NEET 2013)",
    options: ["x / 2^(1/3)", "x / 3^(1/3)", "x / √2", "x / 2^(1/2)"],
    correctAnswer: 0, explanation: "tan(theta) ∝ 1/y ∝ 1/x^2 => x^3 ∝ y. For y/2, x becomes x / 2^(1/3).", tags: ["Electrostatics", "Equilibrium"], difficulty: "hard", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 11: Electrostatics', chapter: 'electrostatics', year: 2013,
    question: "An electric dipole of moment p is parallel to uniform electric field E. Energy required to rotate by 90° is (Karnataka NEET 2013)",
    options: ["pE", "zero", "infinity", "pE^2"],
    correctAnswer: 0, explanation: "W = pE(cos0 - cos90) = pE.", tags: ["Dipole"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 11: Electrostatics', chapter: 'electrostatics', year: 2013,
    question: "Charge q is placed at centre of line joining two equal charges Q. System is in equilibrium if q is (Karnataka NEET 2013)",
    options: ["-Q/4", "Q/4", "Q/2", "-Q/2"],
    correctAnswer: 0, explanation: "Equilibrium of corner charge: kQ^2/L^2 + kQq/(L/2)^2 = 0 => q = -Q/4.", tags: ["Equilibrium"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 11: Electrostatics', chapter: 'electrostatics', year: 2012,
    question: "Electric dipole of moment p placed in E at angle θ. Assuming PE zero at 90°, torque and PE are (2012)",
    options: ["pE sinθ, -pE cosθ", "pE sinθ, -2pE cosθ", "pE sinθ, 2pE cosθ", "pE cosθ, -pE sinθ"],
    correctAnswer: 0, explanation: "Torque = pE sinθ. PE = -pE cosθ.", tags: ["Dipole"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 11: Electrostatics', chapter: 'electrostatics', year: 2012,
    question: "Four point charges -Q, -q, 2q, 2Q at corners of square. Relation for potential at centre to be zero is (2012)",
    options: ["Q = -q", "Q = q", "Q = -2q", "Q = 2q"],
    correctAnswer: 0, explanation: "V = k(-Q - q + 2q + 2Q)/r = k(Q+q)/r = 0 => Q = -q.", tags: ["Potential"], difficulty: "easy", verified: true, source: "manual"
  }
];

async function run() {
  try {
    await mongoose.connect(MONGO_URI);
    await Question.insertMany(questionsToSeed);
    console.log(`Seeded 20 questions.`);
    mongoose.connection.close();
  } catch (e) {
    console.error(e);
    mongoose.connection.close();
  }
}
run();
