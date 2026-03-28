// Physics — Unit 17: Dual Nature of Matter and Radiation

const dualNature = {
  id: 'dual-nature',
  title: 'Chapter 17: Dual Nature of Matter and Radiation',
  notes: [
    {
      concept: 'Photoelectric Effect: Emission of electrons from a metal surface when light of suitable frequency hits it. Requires minimum energy defined as Work Function (Φ = hν₀).',
      fact: 'Hertz and Lenard\'s observations showed that photoelectric current is directly proportional to INTENSITY of incident light (provided ν > ν₀).',
      tip: 'The maximum kinetic energy (K_max) of emitted photoelectrons depends ONLY on the FREQUENCY of incident light, not intensity. Stop jumping to conclusions!',
    },
    {
      concept: 'Einstein\'s Photoelectric Equation: Energy of incident photon goes into two parts: work function and maximum kinetic energy of the electron. hν = Φ + K_max = hν₀ + eV₀.',
      fact: 'Stopping Potential (V₀) is the minimum negative potential applied to the anode with respect to the cathode to stop even the fastest electron. K_max = eV₀.',
      tip: 'Graph of Stopping Potential (V₀) vs Frequency (ν) is a straight line with slope (h/e) and x-intercept (ν₀). Its slope is CONSTANT for all metals.',
    },
    {
      concept: 'Particle Nature of Light: Light behaves as a stream of discrete energy packets called photons. Each photon has energy E = hν = hc/λ and momentum p = E/c = h/λ.',
      fact: 'All photons of light of a particular frequency ν have the exact same energy and momentum, regardless of the intensity of radiation.',
      tip: 'In a photon-electron collision, total energy and total momentum are strictly conserved, though the number of photons may not be conserved.',
    },
    {
      concept: 'Matter Waves: de Broglie proposed that moving material particles exhibit wave-like properties. Wavelength λ = h/p = h/(mv).',
      fact: 'If a particle of mass m and charge q is accelerated from rest through a potential V, its kinetic energy K = qV. Therefore, λ = h / sqrt(2mK) = h / sqrt(2mqV).',
      tip: 'Wave nature is significant only for subatomic particles (e.g. electrons). For macroscopic objects (like a baseball), λ is unobservably small due to large mass.',
    },
    {
      concept: 'Davisson-Germer Experiment (Not strictly in latest NEET but context is vital): First experimental proof of the wave nature of electrons by demonstrating electron diffraction, similar to X-rays.',
      fact: 'The formula predicting the wavelength matched substituting 54V in the de Broglie equation for an electron (λ ≈ 12.27 / sqrt(V) Angstrom).',
      tip: 'The particle nature of light is proven by the photoelectric effect and Compton effect. The wave nature of particles is proven by electron diffraction.',
    },
  ],
  quiz: [
    {
      question: 'According to Einstein\'s photoelectric equation, the graph between the kinetic energy of photoelectrons ejected and the frequency of incident radiation is:',
      options: ['A parabola', 'A straight line passing through the origin', 'A straight line with a positive intercept on the frequency axis', 'A straight line with a negative slope'],
      correctAnswer: 2,
      explanation: 'K_max = hν - Φ. The graph of K_max (y-axis) vs frequency ν (x-axis) is a straight line, y = mx - c, where m = h and c = Φ. It intersects the frequency axis at ν = ν₀ (threshold frequency, which is positive).',
    },
    {
      question: 'The work function of a metal is 4.0 eV. What is the longest wavelength of light that can cause photoelectron emission? (hc = 1240 eV·nm)',
      options: ['310 nm', '400 nm', '540 nm', '220 nm'],
      correctAnswer: 0,
      explanation: 'Threshold wavelength λ₀ = hc / Φ. So λ₀ = 1240 eV·nm / 4.0 eV = 310 nm. Any wavelength longer than this will have energy less than 4.0 eV and will not cause emission.',
    },
    {
      question: 'If the kinetic energy of a free electron doubles, its de Broglie wavelength changes by the factor:',
      options: ['sqrt(2)', '1 / sqrt(2)', '1 / 2', '2'],
      correctAnswer: 1,
      explanation: 'de Broglie wavelength λ = h / sqrt(2mK). Since λ is inversely proportional to sqrt(K), doubling K makes the new wavelength λ\' = λ / sqrt(2).',
    },
    {
      question: 'What happens to the stopping potential in a photoelectric experiment when the INTENSITY of incident light (of constant frequency > threshold) is increased?',
      options: ['It increases', 'It decreases', 'It remains the same', 'It becomes zero'],
      correctAnswer: 2,
      explanation: 'Stopping potential depends only on the frequency of the incident light and the nature of the material (work function). Increasing intensity only increases the number of photoelectrons emitted per second, not their maximum kinetic energy.',
    },
    {
      question: 'A proton and an alpha particle are accelerated through the same potential difference V. If λ_p and λ_a are their de Broglie wavelengths respectively, the ratio λ_p / λ_a is:',
      options: ['1 : 1', '2 : 1', '2√2 : 1', '4 : 1'],
      correctAnswer: 2,
      explanation: 'λ = h / sqrt(2mqV). For alpha, m_a = 4m_p and q_a = 2q_p, so λ_a = h / sqrt(2 * 4m_p * 2q_p * V) = h / sqrt(16 * m_p * q_p * V) = (1 / sqrt(8)) * (h / sqrt(2m_p q_p V)). Thus, λ_p / λ_a = sqrt(8) = 2√2.',
    },
  ],
};

export default {
  id: 'phy-u17',
  name: 'Unit 17: Dual Nature of Matter & Radiation',
  chapters: [dualNature],
};
