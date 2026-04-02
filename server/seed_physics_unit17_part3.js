import mongoose from 'mongoose';
import Question from './models/Question.js';
import 'dotenv/config';

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/neet';

const questionsToSeed = [
  {
    subject: 'physics', unit: 'Unit 17: Optics (Ray + Wave Optics)', chapter: 'optics', year: 1997,
    question: "Focal length converging violet, green, red fv, fg, fr. Relationship (1997)",
    options: ["fv < fr", "fg > fr", "fv = fg", "fg < fr"],
    correctAnswer: 0, explanation: "Refractive index higher for violet. So fv < fr.", tags: ["Lenses"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 17: Optics (Ray + Wave Optics)', chapter: 'optics', year: 1996,
    question: "Convex 80cm and concave 50cm combined. Resulting power? (1996)",
    options: ["+7.5 D", "-0.75 D", "+6.5 D", "-6.5 D"],
    correctAnswer: 1, explanation: "P = 100/80 - 100/50 = 1.25 - 2 = -0.75 D.", tags: ["Lenses"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 17: Optics (Ray + Wave Optics)', chapter: 'optics', year: 1996,
    question: "fV, fR convex. FV, FR concave. We must have (1996)",
    options: ["fV > fR and FV > FR", "fV < fR and FV > FR", "fV > fR and FV < FR", "fV < fR and FV < FR"],
    correctAnswer: 1, explanation: "Numerical limits. Evaluated based on index and sign.", tags: ["Lenses"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 17: Optics (Ray + Wave Optics)', chapter: 'optics', year: 1995,
    question: "Lens forms images area A1 and A2. Area of source is (1995)",
    options: ["A1-A2", "A1+A2", "sqrt(A1 A2)", "sqrt(A1) + sqrt(A2)"],
    correctAnswer: 2, explanation: "Displacement method: O = sqrt(I1 I2). Area proportional.", tags: ["Lenses"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 17: Optics (Ray + Wave Optics)', chapter: 'optics', year: 1988,
    question: "Focal length convex 1.5 is 2cm. Immersed in 1.25. Focal length? (1988)",
    options: ["10 cm", "2.5 cm", "5 cm", "7.5 cm"],
    correctAnswer: 2, explanation: "fw / f = (1.5-1) / (1.5/1.25 - 1) = 0.5 / 0.2 = 2.5 * 2 = 5.", tags: ["Lenses"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 17: Optics (Ray + Wave Optics)', chapter: 'optics', year: 2020,
    question: "Ray incident i on small angle A. Emerges normally. RI is u. Angle i is (NEET 2020)",
    options: ["A/2u", "2A/u", "uA", "uA/2"],
    correctAnswer: 2, explanation: "r2=0, r1=A. i = u r1 = uA.", tags: ["Prism"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 17: Optics (Ray + Wave Optics)', chapter: 'optics', year: 2018,
    question: "RI sqrt(2), angle 30. Silver coated. Retraces path. Angle of incidence (NEET 2018)",
    options: ["60°", "45°", "30°", "0°"],
    correctAnswer: 1, explanation: "r2=0, r1=30. sin i = sqrt(2) sin 30 = sqrt(2)/2 = 1/sqrt(2). i=45.", tags: ["Prism"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 17: Optics (Ray + Wave Optics)', chapter: 'optics', year: 2016,
    question: "Incidence 45. Prism 60. Minimum deviation. Min dev and RI (NEET-I 2016)",
    options: ["45, sqrt(2)", "30, 1/sqrt(2)", "45, 1/sqrt(2)", "30, sqrt(2)"],
    correctAnswer: 3, explanation: "min dev = 2i - A = 90 - 60 = 30. u = sin((60+30)/2) / sin(30) = sin45/sin30 = sqrt(2).", tags: ["Prism"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 17: Optics (Ray + Wave Optics)', chapter: 'optics', year: 2015,
    question: "Red 1.39, Green 1.44, Blue 1.47 on right angled prism. (2015)",
    options: ["not separate", "separate red from green blue", "separate blue from red green", "separate all"],
    correctAnswer: 1, explanation: "Critical RI for TIR is 1.414. Red < 1.414 (passes). Green, blue > 1.414 (TIR).", tags: ["Prism"], difficulty: "hard", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 17: Optics (Ray + Wave Optics)', chapter: 'optics', year: 2015,
    question: "Refracting angle A. RI cot(A/2). Min deviation is (2015 Cancelled)",
    options: ["90 - A", "180 + 2A", "180 - 3A", "180 - 2A"],
    correctAnswer: 3, explanation: "cot(A/2) = cos(A/2)/sin(A/2) = sin((A+D)/2) / sin(A/2) => sin(90 - A/2) => (A+D)/2 = 90 - A/2 => D = 180 - 2A.", tags: ["Prism"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 17: Optics (Ray + Wave Optics)', chapter: 'optics', year: 2014,
    question: "Angle A silvered. Falls 2A. Retraces path. RI is (2014)",
    options: ["2sinA", "2cosA", "1/2 cosA", "tanA"],
    correctAnswer: 1, explanation: "sin(2A) = u sin(A). 2sinA cosA = u sinA. u = 2cosA.", tags: ["Prism"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 17: Optics (Ray + Wave Optics)', chapter: 'optics', year: 2012,
    question: "Min deviation equal to refracting angle. RI must be (Mains 2012)",
    options: ["1 to sqrt(2)", "sqrt(2) to 2", "less than 1", "greater than 2"],
    correctAnswer: 1, explanation: "u = 2cos(A/2). As A ranges 0 to 90, u is sqrt(2) to 2.", tags: ["Prism"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 17: Optics (Ray + Wave Optics)', chapter: 'optics', year: 2010,
    question: "Ray on 60 deg prism at min dev. Refraction at first face is (Mains 2010)",
    options: ["zero", "30°", "45°", "60°"],
    correctAnswer: 1, explanation: "r1 = r2 = A/2 = 30.", tags: ["Prism"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 17: Optics (Ray + Wave Optics)', chapter: 'optics', year: 1999,
    question: "Equilateral prism RI sqrt(3). Min deviation (1999)",
    options: ["60°", "45°", "30°", "75°"],
    correctAnswer: 0, explanation: "sin((60+D)/2) / sin30 = sqrt(3). sin=sqrt(3)/2 = 60. (60+D)/2 = 60 => D=60.", tags: ["Prism"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 17: Optics (Ray + Wave Optics)', chapter: 'optics', year: 2019,
    question: "Pick wrong answer context rainbow. (NEET 2019)",
    options: ["combined effect of dispersion refraction reflection", "two internal in water drop secondary", "order is reversed in secondary", "observer front towards sun"],
    correctAnswer: 3, explanation: "Observer back is towards sun to see rainbow.", tags: ["Natural Phenomena"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 17: Optics (Ray + Wave Optics)', chapter: 'optics', year: 2019,
    question: "Which colour longest wavelength? (NEET 2019)",
    options: ["violet", "red", "blue", "green"],
    correctAnswer: 1, explanation: "Red.", tags: ["Light"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 17: Optics (Ray + Wave Optics)', chapter: 'optics', year: 2017,
    question: "Thin prism 10 deg RI 1.42 with another RI 1.7. Dispersion without deviation. Second prism angle (NEET 2017)",
    options: ["6°", "8°", "10°", "4°"],
    correctAnswer: 0, explanation: "Deviation 0 => (u1-1)A1 = (u2-1)A2. 0.42 * 10 = 0.7 * A2. A2 = 6.", tags: ["Prism"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 17: Optics (Ray + Wave Optics)', chapter: 'optics', year: 2013,
    question: "Reddish appearance sunrise/sunset due to (Karnataka NEET 2013)",
    options: ["scattering", "polarisation", "colour of sun", "colour of sky"],
    correctAnswer: 0, explanation: "Scattering of shorter wavelengths.", tags: ["Natural Phenomena"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 17: Optics (Ray + Wave Optics)', chapter: 'optics', year: 2011,
    question: "Thin 15 deg RI 1.5 combined with RI 1.75. Dispersion without deviation. Angle of second (Mains 2011)",
    options: ["5°", "7°", "10°", "12°"],
    correctAnswer: 2, explanation: "(1.5-1)*15 = (1.75-1)*A2. 7.5 = 0.75 * A2. A2=10.", tags: ["Prism"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 17: Optics (Ray + Wave Optics)', chapter: 'optics', year: 2000,
    question: "Rainbow formed due to (2000)",
    options: ["scattering refraction", "internal reflection dispersion", "reflection", "diffraction dispersion"],
    correctAnswer: 1, explanation: "Standard definition.", tags: ["Natural Phenomena"], difficulty: "easy", verified: true, source: "manual"
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
