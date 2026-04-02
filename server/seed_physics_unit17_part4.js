import mongoose from 'mongoose';
import Question from './models/Question.js';
import 'dotenv/config';

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/neet';

const questionsToSeed = [
  {
    subject: 'physics', unit: 'Unit 17: Optics (Ray + Wave Optics)', chapter: 'optics', year: 1994,
    question: "Blue colour of sky due to (1994)",
    options: ["scattering", "dispersion", "reflection", "refraction"],
    correctAnswer: 0, explanation: "Rayleigh scattering.", tags: ["Natural Phenomena"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 17: Optics (Ray + Wave Optics)', chapter: 'optics', year: 2016,
    question: "Person see 50cm to 400cm. To increase max to infinity, type and power of lens (NEET-II 2016)",
    options: ["convex, +2.25 D", "concave, -0.25 D", "concave, -0.2 D", "convex, +0.15 D"],
    correctAnswer: 1, explanation: "v=-4m. 1/f = 1/v - 1/(-inf). P = 1/-4 = -0.25 D.", tags: ["Optical Instruments", "Eye"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 17: Optics (Ray + Wave Optics)', chapter: 'optics', year: 2016,
    question: "Astronomical telescope fo=40cm, fe=4cm. View object 200cm away, lenses separated by (NEET-I 2016)",
    options: ["50.0 cm", "54.0 cm", "37.3 cm", "46.0 cm"],
    correctAnswer: 1, explanation: "uo = -200, fo=40 => 1/vo = 1/40 - 1/200 = 4/200 => vo = 50. Relaxed eye ve=infinity => ue = fe = 4. L = 50+4 = 54cm.", tags: ["Optical Instruments"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 17: Optics (Ray + Wave Optics)', chapter: 'optics', year: 2015,
    question: "Astronomical telescope normal adjustment. Black line length L inside objective. Real image by eye-piece length I. Magnification is (2015)",
    options: ["(L+I)/(L-I)", "L/I", "L/I + 1", "L/I - 1"],
    correctAnswer: 1, explanation: "m = L/I.", tags: ["Optical Instruments"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 17: Optics (Ray + Wave Optics)', chapter: 'optics', year: 2014,
    question: "If focal length of objective increased then magnifying power of (2014)",
    options: ["microscope increase telescope decrease", "both increase", "both decrease", "microscope decrease telescope increase"],
    correctAnswer: 3, explanation: "Telescope M = fo/fe. Microscope M = L/fo * (D/fe).", tags: ["Optical Instruments"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 17: Optics (Ray + Wave Optics)', chapter: 'optics', year: 2013,
    question: "Normal eye cornea 40D, eye lens least 20D. Distance between retina and cornea-eye lens (NEET 2013)",
    options: ["1.67 cm", "1.5 cm", "5 cm", "2.5 cm"],
    correctAnswer: 0, explanation: "P = 60D. f = 1/60 m = 100/60 cm = 1.67cm.", tags: ["Optical Instruments", "Eye"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 17: Optics (Ray + Wave Optics)', chapter: 'optics', year: 2012,
    question: "Telescope magnifying 9. Parallel rays distance objective eyepiece 20cm. Focal lengths (2012)",
    options: ["10, 10", "15, 5", "18, 2", "11, 9"],
    correctAnswer: 2, explanation: "fo+fe = 20. fo/fe = 9. fo=18, fe=2.", tags: ["Optical Instruments"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 17: Optics (Ray + Wave Optics)', chapter: 'optics', year: 1997,
    question: "Astronomical telescope tenfold angular magnification length 44cm. Focal length objective (1997)",
    options: ["44 cm", "440 cm", "4 cm", "40 cm"],
    correctAnswer: 3, explanation: "fo+fe=44, fo/fe=10. fo=40.", tags: ["Optical Instruments"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 17: Optics (Ray + Wave Optics)', chapter: 'optics', year: 1995,
    question: "Exposure camera f/2.8 is 1/200. Correct time at f/5.6 (1995)",
    options: ["0.20 s", "0.40 s", "0.02 s", "0.04 s"],
    correctAnswer: 2, explanation: "Time prop to f-stop squared. 4 times longer => 4/200 = 1/50 = 0.02.", tags: ["Optical Instruments"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 17: Optics (Ray + Wave Optics)', chapter: 'optics', year: 1994,
    question: "Four lenses ±15, ±150. Telescope largest magnification eyepiece should be (1994)",
    options: ["+15 cm", "+150 cm", "-150 cm", "-15 cm"],
    correctAnswer: 0, explanation: "Eyepiece should have small positive f to get large M = fo/fe.", tags: ["Optical Instruments"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 17: Optics (Ray + Wave Optics)', chapter: 'optics', year: 2020,
    question: "Two coherent sources interfere fringe on screen. Central max phase diff (NEET 2020)",
    options: ["zero", "pi", "3pi/2", "pi/2"],
    correctAnswer: 0, explanation: "Path difference zero.", tags: ["Wave Interference"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 17: Optics (Ray + Wave Optics)', chapter: 'optics', year: 2020,
    question: "YDSE separation halved, screen distance doubled. Fringe width becomes (NEET 2020)",
    options: ["half", "four times", "one-fourth", "double"],
    correctAnswer: 1, explanation: "b = L D / d. D -> 2D, d -> d/2. b -> 4b.", tags: ["YDSE"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 17: Optics (Ray + Wave Optics)', chapter: 'optics', year: 2020,
    question: "YDSE no initial phase diff. 5th minimum path difference (Odisha NEET 2020)",
    options: ["5 lambda / 2", "10 lambda / 2", "9 lambda / 2", "11 lambda / 2"],
    correctAnswer: 2, explanation: "(2n-1)l/2. 5th min = 9l/2.", tags: ["YDSE"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 17: Optics (Ray + Wave Optics)', chapter: 'optics', year: 2019,
    question: "Double slit 400nm. Angular width first minima 1m away 0.2 deg. Immersed in water 4/3. Angular width (NEET 2019)",
    options: ["0.15°", "0.051°", "0.1°", "0.266°"],
    correctAnswer: 0, explanation: "Wavelength decreases by factor u. Angular width becomes 0.2/1.33 = 0.15.", tags: ["YDSE"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 17: Optics (Ray + Wave Optics)', chapter: 'optics', year: 2018,
    question: "YDSE slits 2mm, 5896A, screen 100cm. Angular width 0.20. To increase to 0.21, slit separation (NEET 2018)",
    options: ["2.1 mm", "1.9 mm", "1.8 mm", "1.7 mm"],
    correctAnswer: 1, explanation: "Width prop to 1/d. d_new = 2 * (0.2/0.21) = 1.9.", tags: ["YDSE"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 17: Optics (Ray + Wave Optics)', chapter: 'optics', year: 2017,
    question: "YDSE air then medium. 8th bright in medium where 5th dark in air. RI (NEET 2017)",
    options: ["1.25", "1.59", "1.69", "1.78"],
    correctAnswer: 3, explanation: "8 L_m = 4.5 L_air => 8/u = 4.5 => u = 8/4.5 = 1.78.", tags: ["YDSE"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 17: Optics (Ray + Wave Optics)', chapter: 'optics', year: 2016,
    question: "Intensity max YDSE is I0. d=5L. D=10d. Intensity in front of one slit (NEET 2016)",
    options: ["I0/4", "3I0/4", "I0/2", "I0"],
    correctAnswer: 2, explanation: "In front of one slit, y = d/2. Path diff = y d / D = (d/2) d / 10d = d/20 = 5L/20 = L/4. Intensity I0 cos^2(pi/4) = I0/2.", tags: ["YDSE"], difficulty: "hard", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 17: Optics (Ray + Wave Optics)', chapter: 'optics', year: 2016,
    question: "Interference intensity ratio n. Ratio (Imax-Imin)/(Imax+Imin) (NEET 2016)",
    options: ["n/(n+1)", "2sqrt(n)/(n+1)", "n/(n+1)^2", "2n/(n+1)^2"],
    correctAnswer: 1, explanation: "Imax = (sqrt(I1)+sqrt(I2))^2, Imin = (sqrt(I1)-sqrt(I2))^2. Calculated it is 2sqrt(I1 I2) / (I1+I2) = 2sqrt(n)/(n+1).", tags: ["Wave Interference"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 17: Optics (Ray + Wave Optics)', chapter: 'optics', year: 2015,
    question: "Double slit 1mm, 1m, 500nm. Width of each slit for 10 maxima of double within central of single (2015)",
    options: ["0.2 mm", "0.1 mm", "0.5 mm", "0.02 mm"],
    correctAnswer: 0, explanation: "a = d/5 for 10 maxima (5 on each side). a = 1mm/5 = 0.2mm.", tags: ["Diffraction"], difficulty: "hard", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 17: Optics (Ray + Wave Optics)', chapter: 'optics', year: 2015,
    question: "YDSE slit widths ratio 1:25. Ratio intensity Imax/Imin (2015)",
    options: ["9/4", "121/49", "49/121", "4/9"],
    correctAnswer: 0, explanation: "I ratio 1:25. Amp 1:5. Max (1+5)^2=36. Min (5-1)^2=16. 36/16 = 9/4.", tags: ["YDSE"], difficulty: "medium", verified: true, source: "manual"
  }
];

async function run() {
  try {
    await mongoose.connect(MONGO_URI);
    await Question.insertMany(questionsToSeed);
    console.log(`Seeded 20 more questions for Unit 17 (Part 4).`);
    mongoose.connection.close();
  } catch (e) {
    console.error(e);
    mongoose.connection.close();
  }
}
run();
