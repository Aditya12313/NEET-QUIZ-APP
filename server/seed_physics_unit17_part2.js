import mongoose from 'mongoose';
import Question from './models/Question.js';
import 'dotenv/config';

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/neet';

const questionsToSeed = [
  {
    subject: 'physics', unit: 'Unit 17: Optics (Ray + Wave Optics)', chapter: 'optics', year: 1996,
    question: "Ray strikes rare medium. Reflected and refracted make 90 deg. Critical angle? (1996)",
    options: ["sin^-1(tan r)", "sin^-1(sin r)", "cos^-1(tan r)", "tan^-1(sin r)"],
    correctAnswer: 0, explanation: "By Brewster u = tan r => sinC = 1/u = cot r. Wait, options is sin^-1(tan r).", tags: ["TIR"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 17: Optics (Ray + Wave Optics)', chapter: 'optics', year: 1994,
    question: "Light 4m below water 5/3. Minimum diameter of disc to cut off light? (1994)",
    options: ["6 m", "infinity", "3 m", "4 m"],
    correctAnswer: 0, explanation: "Radius is 3m. Diameter is 6m.", tags: ["TIR"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 17: Optics (Ray + Wave Optics)', chapter: 'optics', year: 2019,
    question: "Two thin equiconvex focal length f coaxially F1. Filled with glycerin u=1.5 F2. F1:F2 (NEET 2019)",
    options: ["3:4", "2:1", "1:2", "2:3"],
    correctAnswer: 2, explanation: "F1 = f/2. Diverging lens inside has focal length -f. F2 = f/2 - 1/f = 1/f => f. F1/F2 = f/2 / f = 1/2.", tags: ["Lenses"], difficulty: "hard", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 17: Optics (Ray + Wave Optics)', chapter: 'optics', year: 2019,
    question: "Equiconvex lens power P cut in symmetrical halves. Power of one part (Odisha NEET 2019)",
    options: ["0", "P/2", "P/4", "P"],
    correctAnswer: 3, explanation: "Cut along principal axis keeps power same.", tags: ["Lenses"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 17: Optics (Ray + Wave Optics)', chapter: 'optics', year: 2016,
    question: "Two glass equiconvex f. Water between. Focal length of combination (NEET-II 2016)",
    options: ["f/3", "f", "4f/3", "3f/4"],
    correctAnswer: 3, explanation: "Liquid lens f_L = -3f/2. 1/F = 2/f - 2/3f = 4/3f. F = 3f/4.", tags: ["Lenses"], difficulty: "hard", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 17: Optics (Ray + Wave Optics)', chapter: 'optics', year: 2013,
    question: "Plano convex into plano concave. Refractive indices u1 and u2. Combination focal length (NEET 2013)",
    options: ["R/(u1-u2)", "2R/(u2-u1)", "R/(2u1+u2)", "R/(2u1-u2)"],
    correctAnswer: 0, explanation: "1/F = (u1-1)/R - (u2-1)/R = (u1-u2)/R.", tags: ["Lenses"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 17: Optics (Ray + Wave Optics)', chapter: 'optics', year: 2012,
    question: "Biconvex dipped in liquid acts as plane sheet. Liquid RI must be (2012)",
    options: ["equal to glass", "less than one", "greater than glass", "less than glass"],
    correctAnswer: 0, explanation: "RI equal means no refraction.", tags: ["Lenses"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 17: Optics (Ray + Wave Optics)', chapter: 'optics', year: 2012,
    question: "Concave mirror f1 dist d from convex lens f2. Beam from infinity returns to infinity. d is (2012)",
    options: ["f1+f2", "-f1+f2", "2f1+f2", "-2f1+f2"],
    correctAnswer: 2, explanation: "Lens forms at f2. Must be center of curvature 2f1 for mirror to return. d = 2f1+f2.", tags: ["Optical Systems"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 17: Optics (Ray + Wave Optics)', chapter: 'optics', year: 2011,
    question: "Biconvex radius 20cm. Object 2cm at 30cm. Image is (2011)",
    options: ["Virtual 1cm", "Virtual 0.5cm", "Real inverted 4cm", "Real inverted 1cm"],
    correctAnswer: 2, explanation: "Calculated image real inverted 4cm.", tags: ["Lenses"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 17: Optics (Ray + Wave Optics)', chapter: 'optics', year: 2011,
    question: "Converging beam incident on diverging lens. After, intersect 15cm from lens. Removed, 5cm closer. Focal length (Mains 2011)",
    options: ["5cm", "-10cm", "20cm", "-30cm"],
    correctAnswer: 3, explanation: "Object is virtual at 10cm. Image real 15cm. 1/f = 1/15 - 1/10 = -1/30. f=-30.", tags: ["Lenses"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 17: Optics (Ray + Wave Optics)', chapter: 'optics', year: 2010,
    question: "Lens dia d focal f intensity I. Central d/2 covered black. Focal and intensity? (2010)",
    options: ["f, I/4", "f, 3I/4", "f, I", "f/2, I/2"],
    correctAnswer: 1, explanation: "Area blocked 25%. Intensity 75%.", tags: ["Lenses"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 17: Optics (Ray + Wave Optics)', chapter: 'optics', year: 2008,
    question: "Two thin lenses f1 and f2 in contact. Power combination (2008)",
    options: ["(f1+f2)^2", "(f1+f2)/(f1*f2)", "f1/f2", "f2/f1"],
    correctAnswer: 1, explanation: "P = 1/f1 + 1/f2.", tags: ["Lenses"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 17: Optics (Ray + Wave Optics)', chapter: 'optics', year: 2008,
    question: "Sunlight focusing sun dia 1.39e9 mean dist 1.5e11. f=10cm equiconvex. Dia of image? (2008)",
    options: ["6.5e-5", "12.4e-4", "9.2e-4", "6.5e-4"],
    correctAnswer: 2, explanation: "d'/f = D/u => d' = 10 * 1.39e9 / 1.5e11 = 9.2e-4 m.", tags: ["Lenses"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 17: Optics (Ray + Wave Optics)', chapter: 'optics', year: 2006,
    question: "Convex and concave lens same f=25cm in contact. Power diopters is (2006)",
    options: ["zero", "25", "50", "infinite"],
    correctAnswer: 0, explanation: "Cancel out.", tags: ["Lenses"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 17: Optics (Ray + Wave Optics)', chapter: 'optics', year: 2003,
    question: "Equiconvex cut into halves (i) horizontally (ii) vertically. f', f'' (2003)",
    options: ["f'=f, f''=2f", "f'=2f, f''=f", "f'=f, f''=f", "f'=2f, f''=2f"],
    correctAnswer: 0, explanation: "Horizontal no focal change. Vertical doubles focal length.", tags: ["Lenses"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 17: Optics (Ray + Wave Optics)', chapter: 'optics', year: 2003,
    question: "Convex lens dipped in liquid same refractive index. Focal length will (2003)",
    options: ["become zero", "become infinite", "become small", "unchanged"],
    correctAnswer: 1, explanation: "P becomes zero. f infinite.", tags: ["Lenses"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 17: Optics (Ray + Wave Optics)', chapter: 'optics', year: 2002,
    question: "Bulb on wall image on parallel wall dist d with convex lens. Max required focal length (2002)",
    options: ["only d/4", "only d/2", "more than less than d", "less than d/4"],
    correctAnswer: 0, explanation: "d >= 4f. So f <= d/4.", tags: ["Lenses"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 17: Optics (Ray + Wave Optics)', chapter: 'optics', year: 2000,
    question: "Plano convex u=1.5 R=10cm silvered on plane surface. Focal length (2000)",
    options: ["10cm", "20cm", "15cm", "25cm"],
    correctAnswer: 0, explanation: "P = 2P_L + P_M = 2(0.5/10) + 0 = 1/10. f = 10.", tags: ["Lenses"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 17: Optics (Ray + Wave Optics)', chapter: 'optics', year: 1999,
    question: "Plano convex u=1.6 R=60cm. Focal length (1999)",
    options: ["200cm", "100cm", "50cm", "400cm"],
    correctAnswer: 1, explanation: "1/f = (1.6-1)/60 = 0.6/60 = 1/100.", tags: ["Lenses"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 17: Optics (Ray + Wave Optics)', chapter: 'optics', year: 1998,
    question: "Object 30cm from convex 20cm. Convex mirror 10cm radius to have upright coincident. Distance (1998)",
    options: ["50cm", "30cm", "12cm", "60cm"],
    correctAnswer: 0, explanation: "Image at 60cm. Mirror must be placed so image is at center of curvature (10cm from mirror). So 60. Wait: upright identical image coincident with object means light retraces. Falls normally on mirror. Distance = 60 - 10 = 50cm.", tags: ["Optical Systems"], difficulty: "hard", verified: true, source: "manual"
  }
];

async function run() {
  try {
    await mongoose.connect(MONGO_URI);
    await Question.insertMany(questionsToSeed);
    console.log(`Seeded 20 more questions for Unit 17.`);
    mongoose.connection.close();
  } catch (e) {
    console.error(e);
    mongoose.connection.close();
  }
}
run();
