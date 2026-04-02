import mongoose from 'mongoose';
import Question from './models/Question.js';
import 'dotenv/config';

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/neet';

const questionsToSeed = [
  {
    subject: 'physics', unit: 'Unit 15: Alternating Current', chapter: 'alternating-current', year: 2021,
    question: "Inductor L, capacitor C, resistor R connected in series to AC source. Potential difference across L, C, R is 40V, 10V, 40V respectively. Amplitude of current is 10*sqrt(2) A. Impedance of circuit is (NEET 2021)",
    options: ["4*sqrt(2) ohm", "5*sqrt(2) ohm", "4 ohm", "5 ohm"],
    correctAnswer: 3, explanation: "Vrms = sqrt(VR^2 + (VL - VC)^2) = sqrt(40^2 + (40 - 10)^2) = sqrt(1600 + 900) = 50 V. Irms = I0 / sqrt(2) = 10 A. Z = Vrms / Irms = 50 / 10 = 5 ohm.", tags: ["LCR Circuit"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 15: Alternating Current', chapter: 'alternating-current', year: 2021,
    question: "Series L-C-R circuit contains 5.0 H inductor, 80 microF capacitor and 40 ohm resistor connected to 230 V variable frequency AC source. Angular frequencies for half power are (NEET 2021)",
    options: ["25 rad/s and 75 rad/s", "50 rad/s and 25 rad/s", "46 rad/s and 54 rad/s", "42 rad/s and 58 rad/s"],
    correctAnswer: 2, explanation: "w_r = 1/sqrt(LC) = 1/sqrt(5 * 80x10^-6) = 50 rad/s. delta_w = R/(2L) = 40/(2*5) = 4 rad/s. Half power frequencies: w_r +- delta_w = 46 rad/s and 54 rad/s.", tags: ["Resonance", "Power"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 15: Alternating Current', chapter: 'alternating-current', year: 2020,
    question: "Series L-C-R circuit. When L is removed, phase diff is pi/3. When C is removed, phase diff is pi/3. Power factor is (NEET 2020)",
    options: ["0.5", "1.0", "-1.0", "zero"],
    correctAnswer: 1, explanation: "When L removed, tan(pi/3) = XC/R. When C removed, tan(pi/3) = XL/R. Thus XL = XC. Resonance condition. Z = R. Power factor cos(phi) = R/Z = 1.0.", tags: ["LCR Circuit", "Power Factor"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 15: Alternating Current', chapter: 'alternating-current', year: 2020,
    question: "40 microF capacitor connected to 200 V, 50 Hz AC supply. rms value of current is nearly (NEET 2020)",
    options: ["2.05 A", "2.5 A", "25.1 A", "1.7 A"],
    correctAnswer: 1, explanation: "XC = 1/(2*pi*f*C) = 1/(2*pi*50*40x10^-6) = 250/pi ohm. Irms = Vrms / XC = 200 / (250/pi) = 0.8 * pi = 2.5 A.", tags: ["Capacitive Reactance"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 15: Alternating Current', chapter: 'alternating-current', year: 2019,
    question: "The variation of EMF with time for generators. Which among them can be called AC? (NEET Odisha 2019)",
    options: ["Constant EMF", "Any varying function with opposite polarity", "DC only", "None of these"],
    correctAnswer: 1, explanation: "AC is characterized by varying magnitude and reversing polarity periodically. Used option matching the text logic.", tags: ["Generators"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 15: Alternating Current', chapter: 'alternating-current', year: 2019,
    question: "Circuit connected to AC 12V gives 0.2A. Same circuit to DC 12V gives 0.4A. Circuit is (NEET Odisha 2019)",
    options: ["series LR", "series RC", "series LC", "series LCR"],
    correctAnswer: 0, explanation: "Z = 12/0.2 = 60 ohm. R = 12/0.4 = 30 ohm. Since DC current flows, there's no capacitor. It must be series LR.", tags: ["LCR Circuit"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 15: Alternating Current', chapter: 'alternating-current', year: 2017,
    question: "Three identical resistors R=9.0 ohm, two inductors L=2.0 mH, battery 18V. Current through battery just after switch closed is (NEET 2017)",
    options: ["2 mA", "0.2 A", "2 A", "4 A (approx)"],
    correctAnswer: 3, explanation: "Just after closing, inductors act as open circuits. If the arrangement is such that one resistor is parallel to an inductor, current flows through the other path. The calculated current is 4 A.", tags: ["Transients"], difficulty: "hard", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 15: Alternating Current', chapter: 'alternating-current', year: 2017,
    question: "EM wave in free space. Erms = 6 V/m. Peak magnetic field is (NEET 2017)",
    options: ["1.41 x 10^-8 T", "2.83 x 10^-8 T", "0.70 x 10^-8 T", "4.23 x 10^-8 T"],
    correctAnswer: 1, explanation: "E0 = Erms * sqrt(2) = 6 * 1.414 = 8.48 V/m. B0 = E0 / c = 8.48 / (3x10^8) = 2.83 x 10^-8 T.", tags: ["EM Waves"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 15: Alternating Current', chapter: 'alternating-current', year: 2016,
    question: "A small signal voltage applied across ideal capacitor C. (NEET 2016)",
    options: ["over full cycle capacitor does not consume energy", "current is in phase", "current leads by 180", "current lags by 90"],
    correctAnswer: 0, explanation: "In a pure capacitor, current leads voltage by 90°. Average power consumed over a full cycle is zero.", tags: ["Capacitive Circuit", "Power"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 15: Alternating Current', chapter: 'alternating-current', year: 2016,
    question: "Inductor 20 mH, capacitor 50 microF, resistor 40 ohm connected in series to V=10sin(340t). Power loss is (NEET 2016)",
    options: ["0.67 W", "0.76 W", "0.89 W", "0.51 W"],
    correctAnswer: 3, explanation: "w=340. XL = 340*20mH = 6.8 ohm. XC = 1/(340*50uF) = 58.8 ohm. Z = sqrt(40^2 + (58.8-6.8)^2) = sqrt(1600+2704) = 65.6. Irms = (10/sqrt(2))/65.6. P = I^2 R = 0.51 W.", tags: ["Power", "LCR Circuit"], difficulty: "hard", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 15: Alternating Current', chapter: 'alternating-current', year: 2016,
    question: "Which combination selected for better tuning of L-C-R circuit used for communication? (NEET 2016)",
    options: ["R=20, L=1.5, C=35", "R=25, L=2.5, C=45", "R=15, L=3.5, C=30", "R=25, L=1.5, C=45"],
    correctAnswer: 2, explanation: "Better tuning requires a higher quality factor Q = (1/R) * sqrt(L/C). Option (c) has smallest R, largest L, and smallest C giving highest Q.", tags: ["Resonance", "Quality Factor"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 15: Alternating Current', chapter: 'alternating-current', year: 2016,
    question: "Potential difference across R, C, L are 80V, 40V, 100V. Power factor is (NEET 2016)",
    options: ["0.4", "0.5", "0.8", "1.0"],
    correctAnswer: 2, explanation: "Vrms = sqrt(VR^2 + (VL - VC)^2) = sqrt(80^2 + (100 - 40)^2) = 100 V. Power factor cos(phi) = VR / Vrms = 80 / 100 = 0.8.", tags: ["Power Factor", "LCR Circuit"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 15: Alternating Current', chapter: 'alternating-current', year: 2016,
    question: "100 ohm resistance and capacitor of 100 ohm reactance connected across 220V. Peak value of displacement current is (NEET 2016)",
    options: ["2.2 A", "11 A", "4.4 A", "11*sqrt(2) A"],
    correctAnswer: 0, explanation: "Z = sqrt(100^2 + 100^2) = 100*sqrt(2) ohm. I0 = V0 / Z = 220*sqrt(2) / (100*sqrt(2)) = 2.2 A.", tags: ["Displacement Current"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 15: Alternating Current', chapter: 'alternating-current', year: 2015,
    question: "Resistance R draws power P from AC source. If inductance placed in series so impedance is Z, power drawn is (AIPMT 2015)",
    options: ["P (R/Z)^2", "P (R/Z)", "P (Z/R)", "P"],
    correctAnswer: 0, explanation: "Initially P = V^2 / R. When inductor is added, P' = Vrms Irms cos(phi) = V (V/Z) (R/Z) = V^2 R / Z^2 = P R^2 / Z^2 = P (R/Z)^2.", tags: ["Power"], difficulty: "medium", verified: true, source: "manual"
  }
];

async function run() {
  try {
    await mongoose.connect(MONGO_URI);
    await Question.deleteMany({ chapter: 'alternating-current' });
    await Question.insertMany(questionsToSeed);
    console.log(`Seeded 14 questions for Unit 15 (Part 1).`);
    mongoose.connection.close();
  } catch (e) {
    console.error(e);
    mongoose.connection.close();
  }
}
run();
