// Physics — Unit 10: Oscillations and Waves

const wavesOscillations = {
  id: 'oscillations-waves',
  title: 'Chapter 10: Oscillations and Waves',
  notes: [
    {
      concept: 'Simple Harmonic Motion (SHM): Restoring force is directly proportional to displacement from mean position and opposite in direction: F = -kx. Differential equation: d²x/dt² = -ω²x.',
      fact: 'Displacement equation: x(t) = A sin(ωt + φ). Velocity v = Aω cos(ωt + φ) = ω sqrt(A² - x²). Acceleration a = -ω²x. v is maximum at mean position (x=0), a is maximum at extreme positions (x=±A).',
      tip: 'Time period T = 2π/ω. For a spring-mass system: T = 2π sqrt(m/k). For a simple pendulum: T = 2π sqrt(L/g) (Valid only for small angles of oscillation < 5°).',
    },
    {
      concept: 'Energy in SHM: Potential Energy U = ½ kx² = ½ mω²x². Kinetic Energy K = ½ mv² = ½ mω²(A² - x²).',
      fact: 'Total Mechanical Energy E = U + K = ½ kA² = constant. In one cycle, kinetic and potential energies oscillate with a frequency TWICE that of the mechanical vibration.',
      tip: 'Mean values: PE_avg = ¼ kA², KE_avg = ¼ kA². They equal each other.',
    },
    {
      concept: 'Wave Motion: Transverse waves (particles oscillate perpendicular to wave direction — e.g., string, EM waves). Longitudinal waves (particles oscillate parallel — e.g., sound).',
      fact: 'Speed of transverse wave on a string: v = sqrt(T/μ) where T is tension and μ is linear mass density (m/L). Speed of sound: v = sqrt(E/ρ) (Newton Laplace: v = sqrt(γP/ρ)).',
      tip: 'Equation of progressive wave: y(x,t) = A sin(kx - ωt + φ), where k is angular wave number (2π/λ) and v = ω/k.',
    },
    {
      concept: 'Superposition Principle and Interference: When two waves overlap, the net displacement is the vector sum: y = y1 + y2. Constructive interference: Path difference Δx = nλ. Destructive: Δx = (n + ½)λ.',
      fact: 'Reflection of waves: From rigid boundary (fixed end), there is a phase reversal of π (crest reflects as trough). From free end, phase reversal is zero (crest reflects as crest).',
      tip: 'Standing Waves: Formed by superposition of two identical waves traveling in opposite directions. Nodes: Amplitude zero. Antinodes: Amplitude maximum. Distance between two successive nodes is λ/2.',
    },
    {
      concept: 'Harmonics in Strings and Organ Pipes: String fixed at both ends and Open Organ Pipe: Fund freq f1 = v/2L. All harmonics present (1:2:3...). Closed Organ Pipe: Fund freq f1 = v/4L. Only odd harmonics present (1:3:5...).',
      fact: 'Beats: Formed by the superposition of two waves of slightly different frequencies. Beat frequency = |f1 - f2|.',
      tip: 'The pitch (frequency) of sound appears to change when the source or observer moves (Doppler Effect) — Though removed from the recent reduced NEET syllabus, be familiar with the basic idea if asked implicitly!',
    },
  ],
  quiz: [
    {
      question: 'Which of the following is true for a particle executing simple harmonic motion?',
      options: ['Velocity is zero at mean position', 'Acceleration is zero at extreme positions', 'Restoring force is maximum at extreme positions', 'Kinetic energy is constant throughout'],
      correctAnswer: 2,
      explanation: 'At extreme positions (x = ±A), displacement is maximum, so the restoring force F = -kx is maximum, and acceleration is maximum. Velocity is zero.',
    },
    {
      question: 'If the length of a simple pendulum is increased by 44%, its time period will increase by:',
      options: ['10%', '20%', '44%', '22%'],
      correctAnswer: 1,
      explanation: 'T is proportional to sqrt(L). If L becomes 1.44L, sqrt(1.44) = 1.2. So new T = 1.2T, which is an increase of 20%.',
    },
    {
      question: 'The frequency at which the kinetic energy of a simple harmonic oscillator completes one oscillation is:',
      options: ['Half the frequency of the oscillator', 'Equal to the frequency of the oscillator', 'Twice the frequency of the oscillator', 'Four times the frequency of the oscillator'],
      correctAnswer: 2,
      explanation: 'During one complete oscillation of the particle (e.g. from x=+A to -A and back to +A), it crosses the mean position (x=0) twice. The kinetic energy is maximum (E) at x=0, so it reaches a maximum twice per full mechanical cycle. Hence, frequency of KE/PE is 2f.',
    },
    {
      question: 'In an open organ pipe, which harmonics are present in the standing wave pattern?',
      options: ['Only even harmonics', 'Only odd harmonics', 'All harmonics (even and odd)', 'No harmonics'],
      correctAnswer: 2,
      explanation: 'Open organ pipes produce both even and odd harmonics (f, 2f, 3f...), leading to a richer sound. Closed organ pipes produce only odd harmonics (f, 3f, 5f...).',
    },
    {
      question: 'Two tuning forks A and B sounded together produce 4 beats per second. When B is loaded with wax slightly, the beat frequency increases to 6 bps. If the frequency of A is 256 Hz, the frequency of B is:',
      options: ['252 Hz', '256 Hz', '260 Hz', '262 Hz'],
      correctAnswer: 2,
      explanation: 'Since |fA - fB| = 4, fB could be 252 or 260. Loading B with wax decreases its frequency. If fB was 252, decreasing it would make the difference |256 - (252-x)| > 4 (increases). Let\'s check 260. Decreasing 260 gives 260-x. The difference |256 - (260-x)| becomes smaller. Wait! The beat frequency INCREASES to 6. If fB was 252, lower fB (say 250) -> |256-250| = 6. Correct. So fB = 252 Hz. Let\'s re-verify. Ah! The correct option should be 252! Option 0.',
    },
  ],
};

// Fixing option in question 5
wavesOscillations.quiz[4].correctAnswer = 0;

export default {
  id: 'phy-u10',
  name: 'Unit 10: Oscillations and Waves',
  chapters: [wavesOscillations],
};
