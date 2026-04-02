import mongoose from 'mongoose';
import Question from './models/Question.js';
import 'dotenv/config';

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/neet';

const questionsToSeed = [
  {
    subject: 'physics',
    unit: 'Unit 7: Oscillations and Waves',
    chapter: 'oscillations-waves',
    year: 2019,
    question: "The displacement of a particle executing simple harmonic motion is given by y = A₀ + A sin(ωt) + B cos(ωt). Then the amplitude of its oscillation is given by (NEET 2019)",
    options: [
      "A + B",
      "A₀ + √(A² + B²)",
      "√(A² + B²)",
      "√(A₀² + A² + B²)"
    ],
    correctAnswer: 2,
    explanation: "y - A₀ = A sin(ωt) + B cos(ωt). Let y' = y - A₀. This represents SHM about a mean position A₀. The amplitude of this SHM is R = √(A² + B²).",
    tags: ["SHM Equation", "Superposition"],
    difficulty: "medium",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 7: Oscillations and Waves',
    chapter: 'oscillations-waves',
    year: 2019,
    question: "The distance covered by a particle undergoing SHM in one time period is (amplitude = A) (Odisha NEET 2019)",
    options: ["zero", "A", "2A", "4A"],
    correctAnswer: 3,
    explanation: "In one full time period, the particle goes from 0 to A, A to 0, 0 to -A, and -A to 0. Total distance = A + A + A + A = 4A. (Note: displacement is zero, but distance is 4A).",
    tags: ["Kinematics of SHM"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 7: Oscillations and Waves',
    chapter: 'oscillations-waves',
    year: 2011,
    question: "Out of the following functions representing motion of a particle, which represents SHM?\n(1) y = sin(ωt) – cos(ωt)\n(2) y = sin³(ωt)\n(3) y = 5 cos(3π/4 - 3ωt)\n(4) y = 1 + ωt + ω²t²  (2011)",
    options: [
      "Only (1)",
      "Only (4) does not represent SHM",
      "Only (1) and (3)",
      "Only (1) and (2)"
    ],
    correctAnswer: 2,
    explanation: "(1) can be written as √2 sin(ωt - π/4), which is SHM. \n(2) sin³(ωt) has a (3ωt) term and a (ωt) term, so it's a superposition of two SHMs, not a single SHM. \n(3) is directly a cosine function, representing SHM with angular frequency 3ω. \n(4) is non-periodic.",
    tags: ["SHM Equation"],
    difficulty: "medium",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 7: Oscillations and Waves',
    chapter: 'oscillations-waves',
    year: 2011,
    question: "Two particles are oscillating along two close parallel straight lines side by side, with the same frequency and amplitudes. They pass each other, moving in opposite directions when their displacement is half of the amplitude. The mean positions of the two particles lie on a straight line perpendicular to the paths of the two particles. The phase difference is (Mains 2011)",
    options: ["π/6", "0", "2π/3", "π"],
    correctAnswer: 2,
    explanation: "x = A sin(ωt + φ). At x = A/2, sin(φ) = 1/2. This implies φ = π/6 or 5π/6. Since they move in opposite directions, one is at phase π/6 and the other at 5π/6. Phase difference = 5π/6 - π/6 = 4π/6 = 2π/3.",
    tags: ["Phase", "SHM"],
    difficulty: "medium",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 7: Oscillations and Waves',
    chapter: 'oscillations-waves',
    year: 2010,
    question: "The displacement of a particle along the x-axis is given by x = a sin²(ωt). The motion of the particle corresponds to (2010)",
    options: [
      "simple harmonic motion of frequency ω/π",
      "simple harmonic motion of frequency 3ω/2π",
      "non simple harmonic motion",
      "simple harmonic motion of frequency ω/2π"
    ],
    correctAnswer: 0,
    explanation: "x = a sin²(ωt) = a/2 (1 - cos(2ωt)). This is SHM about a mean position a/2. The angular frequency is 2ω. Therefore, the frequency f = (2ω) / 2π = ω/π.",
    tags: ["SHM Equation", "Frequency"],
    difficulty: "medium",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 7: Oscillations and Waves',
    chapter: 'oscillations-waves',
    year: 2007,
    question: "A particle executes simple harmonic oscillation with an amplitude a. The period of oscillation is T. The minimum time taken by the particle to travel half of the amplitude from the equilibrium position is (2007)",
    options: ["T/8", "T/12", "T/2", "T/4"],
    correctAnswer: 1,
    explanation: "Starting from equilibrium, x = a sin(ωt). We need x = a/2, so a/2 = a sin(ωt) => sin(ωt) = 1/2 => ωt = π/6. Since ω = 2π/T, we get (2π/T)t = π/6 => t = T/12.",
    tags: ["Kinematics of SHM"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 7: Oscillations and Waves',
    chapter: 'oscillations-waves',
    year: 2005,
    question: "The circular motion of a particle with constant speed is (2005)",
    options: [
      "periodic but not simple harmonic",
      "simple harmonic but not periodic",
      "periodic and simple harmonic",
      "neither periodic nor simple harmonic"
    ],
    correctAnswer: 0,
    explanation: "Uniform circular motion perfectly repeats itself after a fixed time period T, making it periodic. However, its motion is in a 2D plane and not perfectly back-and-forth along a straight line with restoring force ∝ -x, so it is not simple harmonic in space, though its 1D projections are.",
    tags: ["Periodic Motion", "Circular Motion"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 7: Oscillations and Waves',
    chapter: 'oscillations-waves',
    year: 1997,
    question: "Two SHM’s with same amplitude and time period, when acting together in perpendicular directions with a phase difference of π/2, give rise to (1997)",
    options: ["straight motion", "elliptical motion", "circular motion", "none of these"],
    correctAnswer: 2,
    explanation: "x = A sin(ωt) and y = A sin(ωt + π/2) = A cos(ωt). Squaring and adding gives x² + y² = A²(sin²ωt + cos²ωt) = A². This is the standard equation of a circle.",
    tags: ["Superposition", "Lissajous Figures"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 7: Oscillations and Waves',
    chapter: 'oscillations-waves',
    year: 1992,
    question: "A simple harmonic oscillator has an amplitude A and time period T. The time required by it to travel from x = A to x = A/2 is (1992)",
    options: ["T/6", "T/4", "T/3", "T/2"],
    correctAnswer: 0,
    explanation: "Starting from the extreme position, x = A cos(ωt). We need x = A/2, so A/2 = A cos(ωt) => cos(ωt) = 1/2 => ωt = π/3. Since ω = 2π/T, (2π/T)t = π/3 => t = T/6.",
    tags: ["Kinematics of SHM"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 7: Oscillations and Waves',
    chapter: 'oscillations-waves',
    year: 1990,
    question: "The composition of two simple harmonic motions of equal periods at right angle to each other and with a phase difference of π results in the displacement of the particle along (1990)",
    options: ["circle", "figure of eight", "straight line", "ellipse"],
    correctAnswer: 2,
    explanation: "x = A sin(ωt) and y = B sin(ωt + π) = -B sin(ωt). Since y/x = -B/A => y = -(B/A)x. This is an equation of a straight line.",
    tags: ["Superposition"],
    difficulty: "medium",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 7: Oscillations and Waves',
    chapter: 'oscillations-waves',
    year: 2019,
    question: "The radius of a circle, the period of revolution T = 4 s, initial position and sense of revolution are indicated in the figure. y-projection of the radius vector of rotating particle P is (NEET 2019)",
    options: [
      "y(t) = 3 cos(πt/2)",
      "y(t) = -3 cos(2πt)",
      "y(t) = 3 sin(πt/2)",
      "y(t) = 3 cos(3πt/2)"
    ],
    correctAnswer: 0,
    explanation: "Assuming it starts from the positive y-axis (t=0, y=3) and goes clockwise, giving an initial phase of π/2. Then θ = π/2 - ωt. y = 3 sin(π/2 - ωt) = 3 cos(ωt). With T = 4s, ω = 2π/4 = π/2 rad/s. Thus, y(t) = 3 cos(πt/2). The official key confirms option A.",
    tags: ["Phasor", "SHM projection"],
    difficulty: "medium",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 7: Oscillations and Waves',
    chapter: 'oscillations-waves',
    year: 2020,
    question: "The phase difference between displacement and acceleration of a particle in a simple harmonic motion is (NEET 2020)",
    options: ["π rad", "3π/2 rad", "π/2 rad", "zero"],
    correctAnswer: 0,
    explanation: "Displacement x = A sin(ωt). Velocity v = Aω cos(ωt) = Aω sin(ωt + π/2). Acceleration a = -Aω² sin(ωt) = Aω² sin(ωt + π). The phase difference between displacement and acceleration is exactly π radians (180 degrees).",
    tags: ["Phase", "Acceleration"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 7: Oscillations and Waves',
    chapter: 'oscillations-waves',
    year: 2019,
    question: "Average velocity of a particle executing SHM in one complete vibration is (NEET 2019)",
    options: ["zero", "Aω/2", "Aω", "Aω²/2"],
    correctAnswer: 0,
    explanation: "In one complete vibration, the net displacement of the particle is zero because it returns exactly to its starting point. Average velocity = Total displacement / Total time = 0 / T = zero.",
    tags: ["Kinematics of SHM", "Average Velocity"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 7: Oscillations and Waves',
    chapter: 'oscillations-waves',
    year: 2017,
    question: "A particle executes linear simple harmonic motion with an amplitude of 3 cm. When the particle is at 2 cm from the mean position, the magnitude of its velocity is equal to that of its acceleration. Then its time period in seconds is (NEET 2017)",
    options: ["√(5) / 2π", "4π/√(5)", "2π/√(3)", "4π/√(5)"],
    correctAnswer: 1,
    explanation: "Velocity v = ω√(A² - x²). Acceleration a = ω²x. Given |v| = |a|, so ω√(A² - x²) = ω²x => √(A² - x²) = ωx. Given A = 3, x = 2. √(9 - 4) = ω(2) => √5 = 2ω => ω = √5 / 2. Time period T = 2π/ω = 2π / (√5 / 2) = 4π / √5.",
    tags: ["Velocity", "Acceleration", "SHM"],
    difficulty: "medium",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 7: Oscillations and Waves',
    chapter: 'oscillations-waves',
    year: 2015,
    question: "A particle is executing a simple harmonic motion. Its maximum acceleration is α and maximum velocity is β. Then, its time period of vibration will be (2015)",
    options: ["β² / α", "2πβ / α", "β² / α²", "α / β"],
    correctAnswer: 1,
    explanation: "Maximum acceleration α = Aω². Maximum velocity β = Aω. Dividing them: α/β = ω. Since ω = 2π/T, we get 2π/T = α/β => T = 2πβ / α.",
    tags: ["Kinematics of SHM", "Maximum Values"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 7: Oscillations and Waves',
    chapter: 'oscillations-waves',
    year: 2015,
    question: "A particle is executing SHM along a straight line. Its velocities at distances x₁ and x₂ from the mean position are V₁ and V₂, respectively. Its time period is (2015 Cancelled)",
    options: [
      "2π √((v₁² + v₂²) / (x₁² + x₂²))",
      "2π √((v₁² - v₂²) / (x₁² - x₂²))",
      "2π √((x₁² + x₂²) / (v₁² + v₂²))",
      "2π √((x₂² - x₁²) / (v₁² - v₂²))"
    ],
    correctAnswer: 3,
    explanation: "v₁² = ω²(A² - x₁²)  (1)\nv₂² = ω²(A² - x₂²)  (2)\nSubtracting (2) from (1): v₁² - v₂² = ω²(x₂² - x₁²) => ω = √((v₁² - v₂²) / (x₂² - x₁²)). Since T = 2π/ω, T = 2π √((x₂² - x₁²) / (v₁² - v₂²)).",
    tags: ["Velocity", "Kinematics of SHM"],
    difficulty: "medium",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 7: Oscillations and Waves',
    chapter: 'oscillations-waves',
    year: 2014,
    question: "The oscillation of a body on a smooth horizontal surface is represented by the equation, X = A cos(ωt). Which one of the following graphs shows correctly the variation of acceleration (a) with t? (2014)",
    options: [
      "Sine curve starting from 0, going positive",
      "Cosine curve starting from +Max",
      "Cosine curve starting from -Max",
      "Sine curve starting from 0, going negative"
    ],
    correctAnswer: 2,
    explanation: "X = A cos(ωt). Velocity v = dX/dt = -Aω sin(ωt). Acceleration a = dv/dt = -Aω² cos(ωt). At t=0, a = -Aω². Therefore, the graph is an inverted cosine curve starting from its maximum negative value.",
    tags: ["Acceleration", "Graphs in SHM"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 7: Oscillations and Waves',
    chapter: 'oscillations-waves',
    year: 2013,
    question: "A particle of mass m oscillates along x-axis according to equation x = a sin(ωt). The nature of the graph between momentum and displacement of the particle is (Karnataka NEET 2013)",
    options: ["Circle", "Hyperbola", "Ellipse", "Straight line passing through origin."],
    correctAnswer: 2,
    explanation: "Displacement x = a sin(ωt). Velocity v = aω cos(ωt). Momentum p = mv = maω cos(ωt). Squaring gives x²/a² + p²/(maω)² = sin²(ωt) + cos²(ωt) = 1. This corresponds to the equation of an ellipse.",
    tags: ["Momentum", "Graphs in SHM"],
    difficulty: "medium",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 7: Oscillations and Waves',
    chapter: 'oscillations-waves',
    year: 2008,
    question: "Two simple harmonic motions of angular frequency 100 and 1000 rad s⁻¹ have the same displacement amplitude. The ratio of their maximum acceleration is (2008)",
    options: ["1 : 10³", "1 : 10⁴", "1 : 10", "1 : 10²"],
    correctAnswer: 3,
    explanation: "Maximum acceleration a_max = Aω². Given A is the same for both, ratio a₁/a₂ = (ω₁/ω₂)² = (100 / 1000)² = (1/10)² = 1/100. So ratio is 1 : 10².",
    tags: ["Acceleration", "Angular Frequency"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 7: Oscillations and Waves',
    chapter: 'oscillations-waves',
    year: 2008,
    question: "A point performs simple harmonic oscillation of period T and the equation of motion is given by x = a sin(ωt + π/6). After the elapse of what fraction of the time period, the velocity of the point will be equal to half of its maximum velocity? (2008)",
    options: ["T/3", "T/12", "T/8", "T/6"],
    correctAnswer: 1,
    explanation: "v = dx/dt = aω cos(ωt + π/6). Maximum velocity v_max = aω. We need v = v_max / 2. So aω cos(ωt + π/6) = aω / 2 => cos(ωt + π/6) = 1/2 => ωt + π/6 = π/3 => ωt = π/6. Since ω = 2π/T, (2π/T)t = π/6 => t = T/12.",
    tags: ["Velocity", "Kinematics of SHM"],
    difficulty: "medium",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 7: Oscillations and Waves',
    chapter: 'oscillations-waves',
    year: 2007,
    question: "The phase difference between the instantaneous velocity and acceleration of a particle executing simple harmonic motion is (2007)",
    options: ["π", "0.707π", "zero", "0.5π"],
    correctAnswer: 3,
    explanation: "Velocity v(t) = Aω cos(ωt). Acceleration a(t) = -Aω² sin(ωt). This translates to v(t) = Aω sin(ωt + π/2) and a(t) = Aω² sin(ωt + π). Phase difference is (π) - (π/2) = π/2 = 0.5π rad.",
    tags: ["Phase", "Acceleration"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 7: Oscillations and Waves',
    chapter: 'oscillations-waves',
    year: 2004,
    question: "A particle executing simple harmonic motion of amplitude 5 cm has maximum speed of 31.4 cm/s. The frequency of its oscillation is (2004)",
    options: ["4 Hz", "3 Hz", "2 Hz", "1 Hz"],
    correctAnswer: 3,
    explanation: "Maximum speed v_max = Aω = A(2πf). 31.4 = 5 × (2 × 3.14 × f). 31.4 = 31.4 × f => f = 1 Hz.",
    tags: ["Frequency", "Maximum Values"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 7: Oscillations and Waves',
    chapter: 'oscillations-waves',
    year: 2003,
    question: "Which one of the following statements is true for the speed v and the acceleration a of a particle executing simple harmonic motion? (2003)",
    options: [
      "When v is maximum, a is maximum.",
      "Value of a is zero, whatever may be the value of v.",
      "When v is zero, a is zero.",
      "When v is maximum, a is zero."
    ],
    correctAnswer: 3,
    explanation: "At the mean position, speed v is maximum (ωA) and displacement x is zero, so acceleration a = -ω²x is zero. At extreme positions, v is zero, and acceleration is maximum. Thus, when v is maximum, a is zero.",
    tags: ["Velocity", "Acceleration", "Theory"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 7: Oscillations and Waves',
    chapter: 'oscillations-waves',
    year: 1996,
    question: "A particle starts with SHM from the mean position. Its amplitude is A and its time period is T. At one time, its speed is half that of the maximum speed. What is its displacement? (1996)",
    options: ["(2/√3) A", "(√3/2) A", "2/3 A", "3/2 A"],
    correctAnswer: 1,
    explanation: "Velocity v = ω√(A² - x²). Maximum speed v_max = Aω. We need v = v_max / 2, so Aω/2 = ω√(A² - x²). Squaring both sides: A²/4 = A² - x² => x² = A² - A²/4 = 3A²/4 => x = A√3 / 2 (or (√3/2)A ).",
    tags: ["Velocity", "Kinematics of SHM"],
    difficulty: "medium",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 7: Oscillations and Waves',
    chapter: 'oscillations-waves',
    year: 1992,
    question: "If a simple harmonic oscillator has got a displacement of 0.02 m and acceleration equal to 2.0 m/s² at any time, the angular frequency of the oscillator is equal to (1992)",
    options: ["10 rad/s", "0.1 rad/s", "100 rad/s", "1 rad/s"],
    correctAnswer: 0,
    explanation: "Magnitude of acceleration a = ω²x. Given a = 2.0 and x = 0.02. 2.0 = ω²(0.02) => ω² = 2.0/0.02 = 100. Thus, ω = 10 rad/s.",
    tags: ["Acceleration", "Angular Frequency"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 7: Oscillations and Waves',
    chapter: 'oscillations-waves',
    year: 1991,
    question: "A body is executing simple harmonic motion. When the displacements from the mean position is 4 cm and 5 cm, the corresponding velocities of the body is 10 cm/sec and 8 cm/sec. Then the time period of the body is (1991)",
    options: ["2π sec", "π/2 sec", "π sec", "3π/2 sec"],
    correctAnswer: 2,
    explanation: "v₁² = ω²(A² - x₁²) => 100 = ω²(A² - 16). v₂² = ω²(A² - x₂²) => 64 = ω²(A² - 25). Subtracting the second from the first: 36 = ω²(25 - 16) = 9ω² => ω² = 4 => ω = 2 rad/s. Time period T = 2π/ω = 2π/2 = π seconds.",
    tags: ["Velocity", "Kinematics of SHM"],
    difficulty: "medium",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 7: Oscillations and Waves',
    chapter: 'oscillations-waves',
    year: 2009,
    question: "Which one of the following equations of motion represents simple harmonic motion? (where k, k₀, k₁ and a are all positive) (2009)",
    options: [
      "Acceleration = -k (x + a)",
      "Acceleration = k(x + a)",
      "Acceleration = kx",
      "Acceleration = -k₀x + k₁x²"
    ],
    correctAnswer: 0,
    explanation: "SHM is characterized by a restoring force (and thus acceleration) that is proportional and opposite to the displacement from an equilibrium position. Thus, a = -k(displacement). Acceleration = -k(x+a) fits this, representing SHM about the mean position x = -a.",
    tags: ["Force Law", "Theory"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 7: Oscillations and Waves',
    chapter: 'oscillations-waves',
    year: 1994,
    question: "A particle executes S.H.M. along x-axis. The force acting on it is given by (1994, 1988)",
    options: ["A cos (kx)", "Ae^(-kx)", "Akx", "-Akx"],
    correctAnswer: 3,
    explanation: "For SHM, the restoring force is directly proportional to the displacement and directed opposite to it: F = -cx. Thus, F = -Akx describes such a force.",
    tags: ["Force Law", "SHM Basics"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 7: Oscillations and Waves',
    chapter: 'oscillations-waves',
    year: 2011,
    question: "A particle of mass m is released from rest and follows a parabolic path as shown. Assuming that the displacement of the mass from the origin is small, which graph correctly depicts the position of the particle as a function of time? (2011)",
    options: [
      "Cosine wave starting from +A (max right)",
      "Sine wave starting from 0",
      "Straight line",
      "Exponential curve"
    ],
    correctAnswer: 0,
    explanation: "Released from rest implies at t=0, the velocity is zero and its displacement is maximum positive. The mathematical representation for such motion is x(t) = A cos(ωt), which starts from a positive crest.",
    tags: ["Graphs in SHM"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 7: Oscillations and Waves',
    chapter: 'oscillations-waves',
    year: 2007,
    question: "The particle executing simple harmonic motion has a kinetic energy K₀cos²(ωt). The maximum values of the potential energy and the total energy are respectively (2007)",
    options: ["K₀/2 and K₀", "K₀ and 2K₀", "K₀ and K₀", "0 and 2K₀"],
    correctAnswer: 2,
    explanation: "Total energy in SHM is strictly conserved. Since maximum KE is K₀ (when cos²(ωt) = 1), the total energy is K₀. At extreme points, KE becomes 0, so Potential energy peaks at an identical K₀.",
    tags: ["Energy of SHM"],
    difficulty: "medium",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 7: Oscillations and Waves',
    chapter: 'oscillations-waves',
    year: 2003,
    question: "The potential energy of a simple harmonic oscillator when the particle is half way to its end point is (2003)",
    options: ["(2/3) E", "(1/8) E", "(1/4) E", "(1/2) E"],
    correctAnswer: 2,
    explanation: "Total Energy E = ½kA². Potential Energy U = ½kx². At half way to end point, x = A/2. Thus U = ½k(A/2)² = ¼ (½kA²) = E/4.",
    tags: ["Energy of SHM", "Potential Energy"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 7: Oscillations and Waves',
    chapter: 'oscillations-waves',
    year: 2003,
    question: "A particle of mass m oscillates with simple harmonic motion between points x₁ and x₂, the equilibrium position being O. Its potential energy is plotted. It will be as given below in the graph (2003)",
    options: [
      "A parabola opening upwards, minimum at O",
      "A straight line",
      "A parabola opening down",
      "A sine wave"
    ],
    correctAnswer: 0,
    explanation: "PE in SHM is given by U = ½kx². This maps to a perfect parabola that opens upwards with a defined minimum (typically zero) located squarely at the equilibrium position (origin).",
    tags: ["Graphs in SHM", "Energy of SHM"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 7: Oscillations and Waves',
    chapter: 'oscillations-waves',
    year: 2002,
    question: "Displacement between maximum potential energy position and maximum kinetic energy position for a particle executing simple harmonic motion is (2002)",
    options: ["± a/2", "+a", "± a", "–1"],
    correctAnswer: 2,
    explanation: "Maximum kinetic energy effectively occurs exactly at the mean position (x = 0). Maximum potential energy occurs precisely at the extreme positions (x = ±a). Thus, the explicit displacement gap between these points is ±a.",
    tags: ["Energy of SHM", "Positions in SHM"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 7: Oscillations and Waves',
    chapter: 'oscillations-waves',
    year: 2001,
    question: "The total energy of particle performing SHM depends on (2001)",
    options: ["k, a, m", "k, a", "k, a, x", "k, x"],
    correctAnswer: 1,
    explanation: "Total energy E = ½kA². Thus, it strictly depends on the defining force constant k and the overall amplitude a of the motion, and not on time or instantaneous position.",
    tags: ["Energy of SHM", "Theory"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 7: Oscillations and Waves',
    chapter: 'oscillations-waves',
    year: 1996,
    question: "A linear harmonic oscillator of force constant 2 × 10⁶ N/m and displacement 0.01 m has a total mechanical energy of 160 J. Its (1996)",
    options: [
      "P.E. is 160 J",
      "P.E. is zero",
      "P.E. is 100 J",
      "P.E. is 120 J"
    ],
    correctAnswer: 2,
    explanation: "Potential energy U = ½kx² = ½ × (2×10⁶) × (0.01)² = 10⁶ × 10⁻⁴ = 100 J. Note that the total mechanical energy is consistently larger (160 J).",
    tags: ["Energy of SHM", "Calculation"],
    difficulty: "medium",
    verified: true,
    source: "manual"
  }
];

async function run() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Connected to DB');

    // ONLY clear questions for THIS chapter on the first run
    const delRes = await Question.deleteMany({ chapter: 'oscillations-waves' });
    console.log(`Deleted ${delRes.deletedCount} old questions.`);

    const insRes = await Question.insertMany(questionsToSeed);
    console.log(`Successfully seeded ${insRes.length} PYQs for part 1 of Oscillations and Waves.`);

    mongoose.connection.close();
  } catch (e) {
    console.error(e);
    mongoose.connection.close();
  }
}

run();
