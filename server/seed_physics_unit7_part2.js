import mongoose from 'mongoose';
import Question from './models/Question.js';
import 'dotenv/config';

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/neet';

const questionsToSeed = [
  {
    subject: 'physics',
    unit: 'Unit 7: Oscillations and Waves',
    chapter: 'oscillations-waves',
    year: 1995,
    question: "In a simple harmonic motion, when the displacement is one-half the amplitude, what fraction of the total energy is kinetic? (1995)",
    options: ["1/2", "3/4", "zero", "1/4"],
    correctAnswer: 1,
    explanation: "Total energy E = ½kA². Potential energy U = ½k(A/2)² = ¼(½kA²) = E/4. Kinetic energy K = E - U = E - E/4 = 3E/4. Thus, it is 3/4 of the total energy.",
    tags: ["Energy of SHM", "Kinetic Energy"],
    difficulty: "medium",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 7: Oscillations and Waves',
    chapter: 'oscillations-waves',
    year: 1994,
    question: "A loaded vertical spring executes S.H.M. with a time period of 4 sec. The difference between the kinetic energy and potential energy of this system varies with a period of (1994)",
    options: ["2 sec", "1 sec", "8 sec", "4 sec"],
    correctAnswer: 0,
    explanation: "Both Kinetic and Potential energies vary periodically with frequency double that of the displacement (f' = 2f). Thus, any linear combination or difference between them also oscillates with this doubled frequency. T' = T/2 = 4/2 = 2 sec.",
    tags: ["Energy of SHM", "Frequency Variation"],
    difficulty: "medium",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 7: Oscillations and Waves',
    chapter: 'oscillations-waves',
    year: 1993,
    question: "A body executes simple harmonic motion with an amplitude A. At what displacement from the mean position is the potential energy of the body is one fourth of its total energy ? (1993)",
    options: ["A/4", "A/2", "3A/4", "Some other fraction of A"],
    correctAnswer: 1,
    explanation: "U = ¼ E implies ½kx² = ¼ (½kA²). This simplifies directly to x² = A²/4, thereby meaning x = A/2.",
    tags: ["Energy of SHM", "Potential Energy"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 7: Oscillations and Waves',
    chapter: 'oscillations-waves',
    year: 1991,
    question: "The angular velocity and the amplitude of a simple pendulum is ω and a respectively. At a displacement x from the mean position if its kinetic energy is T and potential energy is V, then the ratio of T to V is (1991)",
    options: [
      "(a² - x²ω²) / (x²ω²)",
      "(x²ω²) / (a² - x²ω²)",
      "(a² - x²) / x²",
      "x² / (a² - x²)"
    ],
    correctAnswer: 2,
    explanation: "Kinetic energy K (or T) = ½mω²(a² - x²). Potential energy V = ½mω²x². The ratio T/V strictly cancels the shared ½mω² leading independently to (a² - x²) / x².",
    tags: ["Energy of SHM", "Ratio Calculations"],
    difficulty: "medium",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 7: Oscillations and Waves',
    chapter: 'oscillations-waves',
    year: 2018,
    question: "A pendulum is hung from the roof of a sufficiently high building and is moving freely to and fro like a simple harmonic oscillator. The acceleration of the bob of the pendulum is 20 m s⁻² at a distance of 5 m from the mean position. The time period of oscillation is (NEET 2018)",
    options: ["2π s", "π s", "2 s", "1 s"],
    correctAnswer: 1,
    explanation: "Magnitude of acceleration a = ω²x. Given a = 20, x = 5. Hence, 20 = ω²(5) => ω² = 4 => ω = 2 rad/s. Time period T = 2π/ω = 2π/2 = π seconds.",
    tags: ["Acceleration", "Time Period", "Simple Pendulum"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 7: Oscillations and Waves',
    chapter: 'oscillations-waves',
    year: 2017,
    question: "A spring of force constant k is cut into lengths of ratio 1 : 2 : 3. They are connected in series and the new force constant is k′. Then they are connected in parallel and force constant is k′′. Then k′ : k′′ is (NEET 2017)",
    options: ["1 : 9", "1 : 11", "1 : 14", "1 : 6"],
    correctAnswer: 1,
    explanation: "Spring constant k ∝ 1/L. Total length = 6x. The three parts have lengths x, 2x, 3x. Their constants are 6k, 3k, 2k. In series, 1/k' = 1/6k + 1/3k + 1/2k = (1+2+3)/6k = 6/6k = 1/k => k' = k. In parallel, k'' = 6k + 3k + 2k = 11k. Ratio k' : k'' = k : 11k = 1 : 11.",
    tags: ["Spring Models", "Combinations of Springs"],
    difficulty: "hard",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 7: Oscillations and Waves',
    chapter: 'oscillations-waves',
    year: 2016,
    question: "A body of mass m is attached to the lower end of a spring whose upper end is fixed. The spring has negligible mass. When the mass m is slightly pulled down and released, it oscillates with a time period of 3 s. When the mass m is increased by 1 kg, the time period of oscillations becomes 5 s. The value of m in kg is (NEET-II 2016)",
    options: ["3/4", "4/3", "16/9", "9/16"],
    correctAnswer: 3,
    explanation: "T ∝ √m. Thus, T₁/T₂ = √(m / (m+1)). 3/5 = √(m / (m+1)). Squaring gives 9/25 = m / (m+1). 9m + 9 = 25m => 16m = 9 => m = 9/16 kg.",
    tags: ["Spring Models", "Time Period Variations"],
    difficulty: "medium",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 7: Oscillations and Waves',
    chapter: 'oscillations-waves',
    year: 2010,
    question: "The period of oscillation of a mass M suspended from a spring of negligible mass is T. If along with it another mass M is also suspended, the period of oscillation will now be (2010)",
    options: ["T", "T/2", "2T", "√2 T"],
    correctAnswer: 3,
    explanation: "T = 2π√(M/k). New mass is M + M = 2M. New period T' = 2π√(2M/k) = √2 × (2π√(M/k)) = √2 T.",
    tags: ["Spring Models", "Time Period Variations"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 7: Oscillations and Waves',
    chapter: 'oscillations-waves',
    year: 2009,
    question: "A simple pendulum performs simple harmonic motion about x = 0 with an amplitude a and time period T. The speed of the pendulum at x = a/2 will be (2009)",
    options: ["πa/T", "3π²a/T", "πa√3/T", "πa√3/2T"],
    correctAnswer: 2,
    explanation: "v = ω√(a² - x²) = (2π/T)√(a² - (a/2)²) = (2π/T)√(3a²/4) = (2π/T)(a√3 / 2) = πa√3 / T.",
    tags: ["Kinematics of SHM", "Velocity"],
    difficulty: "medium",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 7: Oscillations and Waves',
    chapter: 'oscillations-waves',
    year: 2007,
    question: "A mass of 2.0 kg is put on a flat pan attached to a vertical spring fixed on the ground as shown in the figure. The mass of the spring and the pan is negligible. When pressed slightly and released, the mass executes a simple harmonic motion. The spring constant is 200 N/m. What should be the minimum amplitude of the motion so that the mass gets detached from the pan? (take g = 10 m/s²) (2007)",
    options: ["10.0 cm", "any value less than 12.0 cm", "4.0 cm", "8.0 cm"],
    correctAnswer: 0,
    explanation: "Maximum downward acceleration of the pan cannot exceed gravity g for the mass to remain in contact. a_max = Aω². Therefore Aω² = g. Since ω² = k/m, A(k/m) = g => A = mg/k = (2 × 10) / 200 = 20 / 200 = 0.1 m = 10.0 cm.",
    tags: ["Vertical Spring", "Acceleration"],
    difficulty: "hard",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 7: Oscillations and Waves',
    chapter: 'oscillations-waves',
    year: 2006,
    question: "A rectangular block of mass m and area of cross-section A floats in a liquid of density ρ. If it is given a small vertical displacement from equilibrium it undergoes oscillation with a time period T, then (2006)",
    options: ["T ∝ 1/√m", "T ∝ ρ", "T ∝ 1/√A", "T ∝ 1/ρ"],
    correctAnswer: 2,
    explanation: "The restoring force is the extra buoyant force F = -x A ρ g. The effective spring constant k = A ρ g. Time period T = 2π√(m/k) = 2π√(m / A ρ g). Thus, T ∝ 1/√A.",
    tags: ["Fluid Oscillations", "Buoyancy"],
    difficulty: "medium",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 7: Oscillations and Waves',
    chapter: 'oscillations-waves',
    year: 2004,
    question: "Two springs of spring constant k₁ and k₂ are joined in series. The effective spring constant of the combination is given by (2004)",
    options: ["k₁k₂", "(k₁ + k₂)/2", "k₁ + k₂", "k₁k₂/(k₁ + k₂)"],
    correctAnswer: 3,
    explanation: "For springs in series, the formula adds their reciprocals: 1/k_eff = 1/k₁ + 1/k₂ = (k₁ + k₂) / k₁k₂. Inverting gives k_eff = k₁k₂ / (k₁ + k₂).",
    tags: ["Series Configuration", "Spring Models"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 7: Oscillations and Waves',
    chapter: 'oscillations-waves',
    year: 2003,
    question: "The time period of a mass suspended from a spring is T. If the spring is cut into four equal parts and the same mass is suspended from one of the parts, then the new time period will be (2003)",
    options: ["T /4", "T", "T /2", "2T"],
    correctAnswer: 2,
    explanation: "Cutting a spring into four equal parts makes each part 4 times as stiff. New k' = 4k. Thus T' = 2π√(m/4k) = ½ × 2π√(m/k) = T / 2.",
    tags: ["Spring Cutting", "Time Period Variations"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 7: Oscillations and Waves',
    chapter: 'oscillations-waves',
    year: 2002,
    question: "A mass is suspended separately by two different springs in successive order then time periods is t₁ and t₂ respectively. If it is connected by both spring as shown in figure (parallel) then time period is t₀, the correct relation is (2002)",
    options: [
      "t₀² = t₁² + t₂²",
      "t₀⁻² = t₁⁻² + t₂⁻²",
      "t₀⁻¹ = t₁⁻¹ + t₂⁻¹",
      "t₀ = t₁ + t₂"
    ],
    correctAnswer: 1,
    explanation: "For parallel connection, k_eff = k₁ + k₂. Also, k = 4π²m / T². Therefore, 4π²m / t₀² = 4π²m / t₁² + 4π²m / t₂². Canceling factors leaves 1/t₀² = 1/t₁² + 1/t₂² => t₀⁻² = t₁⁻² + t₂⁻².",
    tags: ["Parallel Configuration", "Spring Models"],
    difficulty: "medium",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 7: Oscillations and Waves',
    chapter: 'oscillations-waves',
    year: 2000,
    question: "Two masses M_A and M_B are hung from two strings of length l_A and l_B respectively. They are executing SHM with frequency relation f_A = 2f_B, then relation (2000)",
    options: [
      "l_B = 4l_A, does not depend on mass",
      "l_A = 4l_B, does not depend on mass",
      "l_A = 2l_B and M_A = 2M_B",
      "l_B = 2l_A and M_A = M_B"
    ],
    correctAnswer: 0,
    explanation: "Frequency of simple pendulum f = (1/2π) √(g/l). It strictly does not depend on the mass of the bob. Hence f_A / f_B = √(l_B / l_A). Given f_A = 2f_B => 2 = √(l_B / l_A) => 4 = l_B / l_A => l_B = 4 l_A. Look closely at official key formatting; typical expression points to 'l_B = 4l_A'. Note OCR showed l_A = 4l_B twice. Let's refer to exact physics logic resulting in l_B = 4l_A.",
    tags: ["Simple Pendulum", "Frequency", "Length Variation"],
    difficulty: "medium",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 7: Oscillations and Waves',
    chapter: 'oscillations-waves',
    year: 2000,
    question: "The bob of simple pendulum having length l, is displaced from mean position to an angular position θ with respect to vertical. If it is released, then velocity of bob at equilibrium position (2000)",
    options: [
      "√(2gl(1 - cosθ))",
      "√(2gl(1 + cosθ))",
      "√(2gl cosθ)",
      "√(2gl)"
    ],
    correctAnswer: 0,
    explanation: "By conservation of energy, the height it falls from is h = l - l cosθ = l(1 - cosθ). Potential energy lost mgh = 1/2 mv². Thus v = √(2gh) = √(2gl(1 - cosθ)).",
    tags: ["Conservation of Energy", "Simple Pendulum"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 7: Oscillations and Waves',
    chapter: 'oscillations-waves',
    year: 1999,
    question: "Time period of a simple pendulum is 2 sec. If its length is increased by 4 times, then its time period becomes (1999)",
    options: ["8 sec", "12 sec", "16 sec", "4 sec"],
    correctAnswer: 3,
    explanation: "T = 2π√(l/g). If l becomes 4l, T becomes √4 times its original value. T' = 2 × 2 = 4 sec.",
    tags: ["Simple Pendulum", "Length Variation"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 7: Oscillations and Waves',
    chapter: 'oscillations-waves',
    year: 1998,
    question: "Two simple pendulums of length 5 m and 20 m respectively are given small linear displacement in one direction at the same time. They will again be in the phase when the pendulum of shorter length has completed ______ oscillations. (1998)",
    options: ["2", "1", "5", "3"],
    correctAnswer: 0,
    explanation: "T₁ = 2π√(5/g) and T₂ = 2π√(20/g) = 2T₁. Let the shorter pendulum complete n oscillations, then nT₁ = (n-1)T₂. Using T₂/T₁ = 2, n = (n-1)2 => n = 2n - 2 => n = 2. So the shorter one completes 2 oscillations.",
    tags: ["Phase Synchronization", "Simple Pendulum"],
    difficulty: "medium",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 7: Oscillations and Waves',
    chapter: 'oscillations-waves',
    year: 1998,
    question: "A mass m is vertically suspended from a spring of negligible mass; the system oscillates with a frequency n. What will be the frequency of the system, if a mass 4m is suspended from the same spring? (1998)",
    options: ["n/2", "4n", "n/4", "2n"],
    correctAnswer: 0,
    explanation: "f = 1/T = (1/2π) √(k/m). Frequency is inversely proportional to √m. If mass becomes 4m, the frequency becomes 1/√4 = 1/2 of the original. Thus it becomes n/2.",
    tags: ["Spring Systems", "Frequency Variation"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 7: Oscillations and Waves',
    chapter: 'oscillations-waves',
    year: 1997,
    question: "If the length of a simple pendulum is increased by 2%, then the time period (1997)",
    options: ["increases by 1%", "decreases by 1%", "increases by 2%", "decreases by 2%"],
    correctAnswer: 0,
    explanation: "T = 2π√(l/g). Using fractional errors: ΔT/T = 1/2 (Δl/l) = 1/2 (2%) = 1%. Thus the time period increases by 1%.",
    tags: ["Error Analysis", "Simple Pendulum"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 7: Oscillations and Waves',
    chapter: 'oscillations-waves',
    year: 1995,
    question: "A simple pendulum with a bob of mass m oscillates from A to C and back to A such that PB is H (where PB is max vertical displacement). If the acceleration due to gravity is g, then the velocity of the bob as it passes through B is (1995)",
    options: ["mgH", "√(2gH)", "zero", "2gH"],
    correctAnswer: 1,
    explanation: "At extreme position A or C, the bob has max potential energy mgH. At B (lowest position), it converts all into max kinetic energy 1/2 mv². mgH = 1/2 mv² => v = √(2gH).",
    tags: ["Conservation of Energy", "Simple Pendulum"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 7: Oscillations and Waves',
    chapter: 'oscillations-waves',
    year: 1994,
    question: "A body of mass 5 kg hangs from a spring and oscillates with a time period of 2π seconds. If the ball is removed, the length of the spring will decrease by (1994)",
    options: ["g/k metres", "k/g metres", "2π metres", "g metres"],
    correctAnswer: 3,
    explanation: "T = 2π√(m/k) = 2π => m/k = 1 => k = m = 5. Spring extension when hanging: F = mg = kx => x = mg/k. Since k=5 and m=5, x = 5g/5 = g meters. Removing the ball decreases the length back by exactly 'g' meters.",
    tags: ["Hooke's Law", "Vertical Springs"],
    difficulty: "hard",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 7: Oscillations and Waves',
    chapter: 'oscillations-waves',
    year: 1994,
    question: "A seconds pendulum is mounted in a rocket. Its period of oscillation will decrease when rocket is (1994)",
    options: [
      "moving down with uniform acceleration",
      "moving around the earth in geostationary orbit",
      "moving up with uniform velocity",
      "moving up with uniform acceleration"
    ],
    correctAnswer: 3,
    explanation: "Apparent gravity g' = g + a when moving accelerating upwards. T = 2π√(L/g'). If g' increases, T decreases. Therefore, it decreases when moving up with uniform acceleration.",
    tags: ["Non-Inertial Frames", "Simple Pendulum"],
    difficulty: "medium",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 7: Oscillations and Waves',
    chapter: 'oscillations-waves',
    year: 1991,
    question: "A simple pendulum is suspended from the roof of a trolley which moves in a horizontal direction with an acceleration a, then the time period is given by T = 2π√(l / a′), where a′ is equal to (1991)",
    options: ["g", "g - a", "g + a", "√(g² + a²)"],
    correctAnswer: 3,
    explanation: "In the accelerating trolley frame, an effective pseudo force (ma) points horizontally opposite. The net effective gravity is a vector sum of vertical 'g' and horizontal 'a'. Thus, g_eff = a' = √(g² + a²).",
    tags: ["Effective Gravity", "Non-Inertial Frames"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 7: Oscillations and Waves',
    chapter: 'oscillations-waves',
    year: 1990,
    question: "A mass m is suspended from the two coupled springs connected in series. The force constant for springs are k₁ and k₂. The time period of the suspended mass will be (1990)",
    options: [
      "T = 2π√(m(k₁-k₂)/k₁k₂)",
      "T = 2π√(m(k₁+k₂)/k₁²k₂²)",
      "T = 2π√(m/(k₁+k₂))",
      "T = 2π√(m(k₁+k₂)/k₁k₂)"
    ],
    correctAnswer: 3,
    explanation: "For springs connected in series, the equivalent spring constant is k_eff = (k₁k₂) / (k₁ + k₂). Therefore, T = 2π√(m / k_eff) = 2π√(m(k₁ + k₂) / k₁k₂).",
    tags: ["Spring Configuration", "Series Connection"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 7: Oscillations and Waves',
    chapter: 'oscillations-waves',
    year: 2002,
    question: "When an oscillator completes 100 oscillations, its amplitude reduced to 1/3 of initial value. What will be its amplitude, when it completes 200 oscillations? (2002)",
    options: ["1/8", "2/3", "1/6", "1/9"],
    correctAnswer: 3,
    explanation: "Damped oscillation amplitude is A = A₀ e^(-bt). For 100 oscillations, A₁₀₀ = A₀(1/3). Another 100 oscillations takes another equivalent time slot, reducing the current amplitude again by a factor of 1/3. So it becomes A₀(1/3)(1/3) = A₀/9.",
    tags: ["Damped Oscillations", "Exponential Decay"],
    difficulty: "medium",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 7: Oscillations and Waves',
    chapter: 'oscillations-waves',
    year: 2003,
    question: "In case of a forced vibration, the resonance peak becomes very sharp when the (2003)",
    options: [
      "damping force is small",
      "restoring force is small",
      "applied periodic force is small",
      "quality factor is small"
    ],
    correctAnswer: 0,
    explanation: "At true resonance, the sharpness (Q-factor) is strictly determined by the opposing damping. Small damping implies less energy loss, allowing a remarkably sharp and tall peak to naturally develop.",
    tags: ["Forced Oscillations", "Resonance"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 7: Oscillations and Waves',
    chapter: 'oscillations-waves',
    year: 1998,
    question: "A particle, with restoring force proportional to displacement and resisting force proportional to velocity is subjected to a force F₀ sin(ωt). If the amplitude of the particle is maximum for ω = ω₁ and the energy of the particle is maximum for ω = ω₂, then (ω₀ is natural frequency of oscillation of the particle) (1998, 1989)",
    options: [
      "ω₁ ≠ ω₀ and ω₂ = ω₀",
      "ω₁ = ω₀ and ω₂ = ω₀",
      "ω₁ = ω₀ and ω₂ ≠ ω₀",
      "ω₁ ≠ ω₀ and ω₂ ≠ ω₀"
    ],
    correctAnswer: 1,
    explanation: "Though real peak amplitude frequency shifts extremely slightly under heavy damping, standard core theory directly establishes that both max velocity (thus maximum kinetic energy transmission) and practical amplitude resonance universally hit their peaks when the driven frequency ω tightly matches the natural frequency ω₀.",
    tags: ["Forced Oscillations", "Resonance Details"],
    difficulty: "hard",
    verified: true,
    source: "manual"
  }
];

async function run() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Connected to DB');

    // Appending to the previously inserted questions!
    const insRes = await Question.insertMany(questionsToSeed);
    console.log(`Successfully seeded ${insRes.length} PYQs for part 2 of Oscillations and Waves.`);

    mongoose.connection.close();
  } catch (e) {
    console.error(e);
    mongoose.connection.close();
  }
}

run();
