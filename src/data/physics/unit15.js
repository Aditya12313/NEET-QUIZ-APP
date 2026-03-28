// Physics — Unit 15: Electromagnetic Waves

const emWaves = {
  id: 'em-waves',
  title: 'Chapter 15: Electromagnetic Waves',
  notes: [
    {
      concept: 'Displacement Current: Maxwell modified Ampere\'s law by introducing displacement current Id = ε0 (dΦE/dt). It arises due to a time-varying electric field (like between plates of a charging capacitor).',
      fact: 'Total current I = Ic + Id (Conduction current + Displacement current). Property guarantees continuity of current in circuits.',
      tip: 'In a region spanning the plates of a capacitor, the steady conduction current is zero but displacement current is exactly equal to the conduction current flowing in the connecting wires.',
    },
    {
      concept: 'Nature of EM Waves: Transverse in nature. Produced by oscillating/accelerating charged particles. Both electric (E) and magnetic (B) fields oscillate perpendicular to each other AND perpendicular to wave propagation.',
      fact: 'Direction of propagation of EM wave is given by the cross product E × B.',
      tip: 'The amplitudes are related by c = E0 / B0, where c is the speed of EM wave in vacuum (~3 × 10⁸ m/s). Speed in medium v = 1 / sqrt(με).',
    },
    {
      concept: 'Energy and Momentum: EM waves transport energy and momentum. Average energy density = ½ ε0 E0² = ½ (B0² / μ0). Both fields contribute equally to the total energy density.',
      fact: 'Since EM waves carry momentum (p = U/c), they exert radiation pressure on surfaces they strike. P = I/c (absorbing) or 2I/c (reflecting).',
      tip: 'If an EM wave is described by E_x = E0 sin(kz - ωt), then the wave travels in the +z direction. B field will be in the +y direction (since i × j = k, so x × y = z).',
    },
    {
      concept: 'Electromagnetic Spectrum (Order of Increasing Frequency / Decreasing Wavelength): Radio waves < Microwaves < Infrared < Visible light < Ultraviolet < X-rays < Gamma rays.',
      fact: 'Visible spectrum spans roughly 400 nm (Violet) to 700 nm (Red).',
      tip: 'Radio (communication). Microwaves (radar, microwave ovens matching water\'s resonant frequency). IR (heat waves, remote controls). UV (checking forged documents, water purification). X-rays (medical imaging). Gamma (cancer treatment).',
    },
    {
      concept: 'Greenhouse Effect: Relies heavily on Infrared (IR) radiation. Earth absorbs visible light from sun but radiates back in lower-energy IR, which is trapped by atmospheric gases (CO2, methane, water vapor).',
      fact: 'Without the greenhouse effect, Earth\'s average temperature would be roughly -18°C instead of the current 15°C.',
      tip: 'Ozone layer in the stratosphere absorbs harmful high-frequency Ultraviolet (UV) radiations from the sun, protecting life forms on Earth.',
    },
  ],
  quiz: [
    {
      question: 'Which of the following electromagnetic waves has the highest frequency?',
      options: ['Infrared', 'Microwaves', 'Gamma Rays', 'X-rays'],
      correctAnswer: 2,
      explanation: 'The order of increasing frequency is: Radio -> Microwave -> IR -> Visible -> UV -> X-ray -> Gamma. Thus Gamma Rays have the highest frequency (and highest energy).',
    },
    {
      question: 'The direction of propagation of an electromagnetic wave is parallel to:',
      options: ['E', 'B', 'B × E', 'E × B'],
      correctAnswer: 3,
      explanation: 'The direction of wave propagation depends on the mutually perpendicular E and B field vectors, and mathematically it is aligned with their cross product, E × B.',
    },
    {
      question: 'Displacement current arises continuously in precisely which of the following cases?',
      options: ['A steady current flowing in a straight wire', 'A static charge isolated in space', 'The space between the plates of a charging capacitor', 'An inductor connected to a DC battery'],
      correctAnswer: 2,
      explanation: 'Displacement current (Id = ε0*dΦe/dt) requires a changing electric flux over time. During the charging/discharging of a capacitor, the E field between its plates changes, producing displacement current.',
    },
    {
      question: 'If the electric field amplitude of an EM wave is E0 = 120 N/C and its frequency is 50 MHz, the amplitude of the magnetic field B0 is:',
      options: ['4 × 10⁻⁷ T', '3.6 × 10¹⁰ T', '2.4 × 10⁻⁶ T', '6 × 10⁻⁸ T'],
      correctAnswer: 0,
      explanation: 'We know c = E0 / B0, where c = 3 × 10⁸ m/s. So B0 = E0 / c = 120 / (3 × 10⁸) = 40 × 10⁻⁸ = 4 × 10⁻⁷ Tesla (Frequency is irrelevant for amplitude relation).',
    },
    {
      question: 'Which region of the electromagnetic spectrum is generally used in night vision goggles and thermal imaging?',
      options: ['Ultraviolet', 'Visible light', 'Microwave', 'Infrared'],
      correctAnswer: 3,
      explanation: 'All bodies at non-zero absolute temperature emit thermal radiation, primarily in the infrared spectrum. Hence, infrared (IR) detectors are used in night vision goggles to "see" body heat.',
    },
  ],
};

export default {
  id: 'phy-u15',
  name: 'Unit 15: Electromagnetic Waves',
  chapters: [emWaves],
};
