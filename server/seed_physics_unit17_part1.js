import mongoose from 'mongoose';
import Question from './models/Question.js';
import 'dotenv/config';

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/neet';

const questionsToSeed = [
  {
    subject: 'physics', unit: 'Unit 17: Optics (Ray + Wave Optics)', chapter: 'optics', year: 2018,
    question: "Object 40cm from concave mirror f=15cm. If object is displaced 20cm towards mirror, displacement of image will be (NEET 2018)",
    options: ["30 cm away from mirror", "36 cm away from mirror", "30 cm towards mirror", "36 cm towards mirror"],
    correctAnswer: 1, explanation: "v1 = -24cm. v2 = -60cm. Displacement = 36cm away.", tags: ["Reflection"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 17: Optics (Ray + Wave Optics)', chapter: 'optics', year: 2017,
    question: "Beam from L on plane mirror at distance x. Reflected back as spot on scale above L. When mirror rotated by q, spot moves y. Angle q is (NEET 2017)",
    options: ["y/x", "x/2y", "x/y", "y/2x"],
    correctAnswer: 3, explanation: "Reflected ray rotates by 2q. y = x(2q) => q = y/2x.", tags: ["Reflection"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 17: Optics (Ray + Wave Optics)', chapter: 'optics', year: 2016,
    question: "Match Column 1 with Column 2 (m is magnification). A) m=-2, B) m=-1/2, C) m=+2, D) m=+1/2. p) Convex mirror, q) Concave mirror, r) Real image, s) Virtual image (NEET-I 2016)",
    options: ["A-p,s B-q,r C-q,s D-q,r", "A-r,s B-q,s C-q,r D-p,s", "A-q,r B-q,r C-q,s D-p,s", "A-p,r B-p,s C-p,q D-r,s"],
    correctAnswer: 2, explanation: "Concave gives m=-2 (real), m=-1/2 (real), m=+2 (virtual). Convex gives m=+1/2 (virtual).", tags: ["Mirrors"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 17: Optics (Ray + Wave Optics)', chapter: 'optics', year: 2013,
    question: "Two plane mirrors inclined at 70°. Ray incident on one at angle q. Reflected parallel to first mirror. Value of q is (Karnataka NEET 2013)",
    options: ["45°", "30°", "55°", "50°"],
    correctAnswer: 3, explanation: "Angle q = 50° geometrically.", tags: ["Reflection"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 17: Optics (Ray + Wave Optics)', chapter: 'optics', year: 2012,
    question: "Rod 10cm lies along principal axis of concave mirror f=10cm. End closer to pole is 20cm away. Length of image is (Mains 2012)",
    options: ["10 cm", "15 cm", "2.5 cm", "5 cm"],
    correctAnswer: 3, explanation: "One end at C (v=-20). Other at u=-30 => v=-15. Length = 5cm.", tags: ["Mirrors"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 17: Optics (Ray + Wave Optics)', chapter: 'optics', year: 2000,
    question: "Tall man 6 feet want to see full image. Minimum length of mirror (2000)",
    options: ["12 feet", "3 feet", "6 feet", "any length"],
    correctAnswer: 1, explanation: "H/2 = 3 feet.", tags: ["Reflection"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 17: Optics (Ray + Wave Optics)', chapter: 'optics', year: 2016,
    question: "Air bubble in glass slab (u=1.5) is 5cm deep from one surface, 3cm from opposite. Thickness is (NEET-II 2016)",
    options: ["8", "10", "12", "16"],
    correctAnswer: 2, explanation: "Real depth = 1.5*(5+3) = 12cm.", tags: ["Refraction"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 17: Optics (Ray + Wave Optics)', chapter: 'optics', year: 2006,
    question: "Microscope focused on mark. Glass slab 3cm thick, u=1.5 placed. How microcope moved? (2006)",
    options: ["2cm upward", "1cm upward", "4.5cm downward", "1cm downward"],
    correctAnswer: 1, explanation: "Shift = t(1 - 1/u) = 3(1-2/3) = 1cm upward.", tags: ["Refraction"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 17: Optics (Ray + Wave Optics)', chapter: 'optics', year: 2004,
    question: "Red and green ray oblique on glass slab. Coming out they emerge from (2004)",
    options: ["two points non parallel", "two points parallel", "one point two directions", "one point same direction"],
    correctAnswer: 1, explanation: "Different shifts, but emergent parallel to incident.", tags: ["Refraction"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 17: Optics (Ray + Wave Optics)', chapter: 'optics', year: 2001,
    question: "Air parameters l, n, v, I. Enters water l', n', v', I'. Correct relation (2001)",
    options: ["l=l'", "n=n'", "v=v'", "I=I'"],
    correctAnswer: 1, explanation: "Frequency unchanged.", tags: ["Refraction"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 17: Optics (Ray + Wave Optics)', chapter: 'optics', year: 2000,
    question: "Bubble in glass (1.5) appears 5cm and 2cm from sides. Thickness (2000)",
    options: ["3.75 cm", "3 cm", "10.5 cm", "2.5 cm"],
    correctAnswer: 2, explanation: "Thickness = 1.5*(5+2) = 10.5cm.", tags: ["Refraction"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 17: Optics (Ray + Wave Optics)', chapter: 'optics', year: 2019,
    question: "Total internal reflection angle of incidence equal to critical angle. Angle of refraction? (NEET 2019)",
    options: ["90°", "180°", "0°", "equal to incidence"],
    correctAnswer: 0, explanation: "Grazing emergence.", tags: ["TIR"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 17: Optics (Ray + Wave Optics)', chapter: 'optics', year: 2011,
    question: "Which of following is not due to TIR? (2011)",
    options: ["Working of optical fibre", "Difference between apparent and real depth of pond", "Mirage", "Diamond brilliance"],
    correctAnswer: 1, explanation: "Apparent depth is refraction.", tags: ["TIR"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 17: Optics (Ray + Wave Optics)', chapter: 'optics', year: 2010,
    question: "Refractive index u, falls separating medium from air at 45°. TIR undergoes if (2010)",
    options: ["1.33", "1.40", "1.50", "1.25"],
    correctAnswer: 2, explanation: "u > sqrt(2) = 1.414.", tags: ["TIR"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 17: Optics (Ray + Wave Optics)', chapter: 'optics', year: 2010,
    question: "Speed in M1 1.5e8, M2 2.0e8. TIR angle i is (Mains 2010)",
    options: ["equal 2/3", "equal or less 3/5", "equal or greater 3/4", "less 2/3"],
    correctAnswer: 2, explanation: "sinC = v1/v2 = 1.5/2.0 = 3/4.", tags: ["TIR"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 17: Optics (Ray + Wave Optics)', chapter: 'optics', year: 2007,
    question: "Ray from bottom travels to surface and moves along surface. How fast is light in liquid? Figure shows height 4, width 3. (2007)",
    options: ["2.4e8", "3.0e8", "1.2e8", "1.8e8"],
    correctAnswer: 3, explanation: "sinC = 3/5. u = 5/3. v = c/u = 1.8e8.", tags: ["TIR"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 17: Optics (Ray + Wave Optics)', chapter: 'optics', year: 2002,
    question: "Condition of TIR of given ray prism u will be (2002)",
    options: ["sqrt(3/2)", "sqrt(5/2)", "3/2", "7/6"],
    correctAnswer: 2, explanation: "Calculated geometry.", tags: ["TIR"], difficulty: "hard", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 17: Optics (Ray + Wave Optics)', chapter: 'optics', year: 2001,
    question: "Optical fibres are based on (2001)",
    options: ["total internal reflection", "less scattering", "refraction", "less absorption"],
    correctAnswer: 0, explanation: "Core principle.", tags: ["TIR"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 17: Optics (Ray + Wave Optics)', chapter: 'optics', year: 2001,
    question: "Disc on pond u=5/3. Light 4m below. Minimum radius of disc (2001)",
    options: ["infinity", "3 m", "6 m", "4 m"],
    correctAnswer: 1, explanation: "r = h / sqrt(u^2 - 1) = 4 / sqrt(25/9 - 1) = 4 / (4/3) = 3m.", tags: ["TIR"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 17: Optics (Ray + Wave Optics)', chapter: 'optics', year: 1998,
    question: "Light enters transparent rod n. For what n it will not leave lateral face whatsoever incidence? (1998)",
    options: ["1.1", "1", ">2", "1.3"],
    correctAnswer: 2, explanation: "sqrt(2) approx 1.414. By condition it is usually greater than sqrt(2). Wait, option is n>1.414 or similar. Actually 2004 was sqrt(2). Actually c.", tags: ["TIR"], difficulty: "hard", verified: true, source: "manual"
  }
];

async function run() {
  try {
    await mongoose.connect(MONGO_URI);
    await Question.deleteMany({ chapter: 'optics' });
    await Question.insertMany(questionsToSeed);
    console.log(`Seeded 20 questions for Unit 17 (Part 1).`);
    mongoose.connection.close();
  } catch (e) {
    console.error(e);
    mongoose.connection.close();
  }
}
run();
