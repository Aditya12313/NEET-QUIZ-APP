// Physics — Unit 7: Oscillations and Waves

const oscillationsWaves = {
  id: 'oscillations-waves',
  title: 'Chapter 10: Oscillations and Waves',
  notes: [
    {
      concept: 'Simple Harmonic Motion (SHM)',
      fact: 'Restoring force ∝ displacement: F = -kx. Acceleration: a = -ω²x. Displacement Equation: x = Asin(ωt + φ) where A is amplitude, ω is angular frequency, and φ is phase.',
      tip: 'A common trap is forgetting the negative sign in SHM! Also do not confuse frequency (f) with angular frequency (ω = 2πf).'
    },
    {
      concept: 'Time Period & Frequency',
      fact: 'Time period T = 2π/ω. Frequency f = 1/T. For a simple pendulum: T = 2π√(l/g).',
      tip: 'For a spring mass system, T = 2π√(m/k). Make sure you know when to use which formula!'
    },
    {
      concept: 'Velocity, Acceleration, and Energy in SHM',
      fact: 'Velocity v = ω√(A² - x²). Total energy is constant: E = 1/2 kA². KE is max at mean position, PE is max at extreme position.',
      tip: 'Do not mix up amplitude (A) with displacement (x) when using the velocity formula.'
    },
    {
      concept: 'Wave Motion & Types of Waves',
      fact: 'Transfer of energy without transfer of matter. Transverse waves have perpendicular motion, Longitudinal waves have parallel motion (like Sound waves, which require a medium).',
      tip: 'Wave equation: v = fλ. Pay attention to the units; using wrong units for wave speed is a frequent mistake.'
    },
    {
      concept: 'Standing Waves, Beats & Doppler Effect',
      fact: 'Standing Waves: formed by superposition. Nodes (zero displacement) and Antinodes (max displacement). Beats: f_beat = |f1 - f2|.',
      tip: 'Be careful when miscounting nodes and antinodes. For the Doppler effect, ignoring the direction of source/observer relative motion is a major trap!'
    }
  ],
  quiz: [
    {
      question: 'A particle executes simple harmonic motion (SHM) with an amplitude A. At what displacement from the mean position is its kinetic energy equal to its potential energy?',
      options: ['A/2', 'A/√2', 'A/4', 'A'],
      correctAnswer: 1,
      explanation: 'Total Energy E = 1/2 kA². When KE = PE, then PE = E/2. So 1/2 kx² = 1/2 (1/2 kA²). This gives x² = A²/2, so x = A/√2.'
    },
    {
      question: 'What is the frequency of beats when two sound waves with frequencies of 256 Hz and 260 Hz are sounded together?',
      options: ['4 Hz', '258 Hz', '516 Hz', '2 Hz'],
      correctAnswer: 0,
      explanation: 'The beat frequency is the absolute difference between the two frequencies. f_beat = |f1 - f2| = |260 - 256| = 4 Hz.'
    },
    {
      question: 'Which of the following remains constant throughout the simple harmonic motion of an ideal particle?',
      options: ['Velocity', 'Acceleration', 'Total mechanical energy', 'Restoring force'],
      correctAnswer: 2,
      explanation: 'In SHM, kinetic and potential energies continuously convert into each other, but the total mechanical energy (E = 1/2 kA²) remains constant in the absence of damping.'
    },
    {
      question: 'A simple pendulum has a time period T. If its effective length is increased by 44%, its new time period will be:',
      options: ['1.44 T', '1.2 T', '1.4 T', '1.22 T'],
      correctAnswer: 1,
      explanation: 'Time period T = 2π√(l/g). T is proportional to √l. If length becomes 1.44 l, then √1.44 = 1.2. The new time period is 1.2 T.'
    },
    {
      question: 'In a transverse wave, the distance between a consecutive crest and trough is equal to:',
      options: ['λ', 'λ/2', 'λ/4', '2λ'],
      correctAnswer: 1,
      explanation: 'A full wave consisting of one crest and one trough has length λ. The distance from the highest peak of a crest to the lowest point of the adjacent trough is half the wavelength, λ/2.'
    }
  ]
};

export default {
  id: 'phy-u7',
  name: 'Unit 7: Oscillations and Waves',
  chapters: [oscillationsWaves],
};
