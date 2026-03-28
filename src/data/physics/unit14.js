// Physics — Unit 14: Electromagnetic Induction and Alternating Currents

const emiAndAc = {
  id: 'emi-ac',
  title: 'Chapter 14: Electromagnetic Induction and Alternating Currents',
  notes: [
    {
      concept: 'Electromagnetic Induction: Faraday\'s Laws: 1. Whenever magnetic flux linked with a circuit changes, an induced emf is produced. 2. e = -dΦ/dt. Note that Φ = B·A = BA cosθ.',
      fact: 'Lenz\'s Law states that the current induced in a circuit due to a change in the magnetic flux is directed to oppose the change in flux causing it (Conservation of Energy).',
      tip: 'Motional emf for a straight conductor length l moving with velocity v perpendicular to uniform B field: e = Blv. For a rod rotating about one end in uniform B: e = ½Bωl².',
    },
    {
      concept: 'Inductance: Self-Inductance (L) is inertia of electricity. e = -L(dI/dt). For long solenoid, L = μ0 n² A l. Energy stored in inductor: U = ½LI².',
      fact: 'Mutual Inductance (M) opposes change of current in a neighboring coil. e2 = -M(dI1/dt). For two coaxial solenoids, M = μ0 n1 n2 A l.',
      tip: 'Eddy currents are induced in solid metal blocks exposed to changing magnetic fields, leading to heating (power loss). Used in magnetic braking and induction furnaces.',
    },
    {
      concept: 'Alternating Current (AC): Changes magnitude continuously and direction periodically. I = I0 sin(ωt + φ). I_rms = I0 / sqrt(2) ≈ 0.707 I0. V_rms = V0 / sqrt(2).',
      fact: 'An ideal inductor (L) and an ideal capacitor (C) consume ZERO average power in an AC circuit over a full cycle (cos φ = 0). Average power is dissipated only by resistance (R). P_avg = V_rms * I_rms * cos(φ).',
      tip: 'In a purely resistive circuit, V and I are IN phase. In pure inductive (L), V LEADS I by 90°. In pure capacitive (C), I LEADS V by 90°. (Remember CIVIL - in c I before v, in v before i L).',
    },
    {
      concept: 'LCR Series Circuit: Impedance Z = sqrt[R² + (XL - XC)²]. Inductive reactance XL = ωL. Capacitive reactance XC = 1/ωC. Phase angle tanφ = (XL - XC) / R.',
      fact: 'Resonance occurs when XL = XC, causing Z = R (minimum impedance) and thus maximum current in the circuit: I0 = V0 / R. Resonant frequency f0 = 1 / [2π sqrt(LC)].',
      tip: 'A wattless current (AC) has a phase difference of 90° between V and I, causing zero power dissipation. E.g., choke coil (large L, negligible R).',
    },
    {
      concept: 'Transformers and AC Generators: AC Generator operates on EMI principle, producing AC emf e = NBAω sin(ωt).',
      fact: 'Transformer works on Mutual Induction (step-up or step-down alternating voltages). V_s / V_p = N_s / N_p = I_p / I_s (for ideal 100% efficiency).',
      tip: 'Transformers CANNOT step up/down Direct Current (DC) because DC does not produce changing magnetic flux.',
    },
  ],
  quiz: [
    {
      question: 'Lenz\'s Law represents the law of conservation of:',
      options: ['Charge', 'Mass', 'Energy', 'Momentum'],
      correctAnswer: 2,
      explanation: 'Lenz\'s law implies that the mechanical work done in moving a magnet against the resisting induced magnetic field is transformed into electrical energy (induced current), upholding conservation of energy.',
    },
    {
      question: 'In an L-C-R series AC circuit at resonance, the phase difference between the applied voltage and current is:',
      options: ['90°', '45°', '0°', '180°'],
      correctAnswer: 2,
      explanation: 'At resonance, inductive reactance (XL) equals capacitive reactance (XC). Hence, the net reactance is zero. The circuit behaves purely resistive (Z = R) and phase difference φ is 0°.',
    },
    {
      question: 'For an ideal step-down transformer which of the following relations is correct?',
      options: ['Vs > Vp, Is < Ip', 'Vs < Vp, Is > Ip', 'Vs > Vp, Is > Ip', 'Vs < Vp, Is < Ip'],
      correctAnswer: 1,
      explanation: 'A step-down transformer decreases voltage (Vs < Vp). Since power is conserved in an ideal transformer (Vp Ip = Vs Is), if voltage decreases, the secondary current must increase (Is > Ip).',
    },
    {
      question: 'What is the root mean square (rms) value of an alternating current given by I = 10 sin(100πt) A?',
      options: ['10 A', '5 A', '10√2 A', '5√2 A'],
      correctAnswer: 3,
      explanation: 'The peak current I0 is 10 A. The rms current is I0 / sqrt(2) = 10 / sqrt(2) = 10*sqrt(2) / 2 = 5*sqrt(2) A ≈ 7.07 A.',
    },
    {
      question: 'When a metallic block is placed in a time-varying magnetic field, circulating currents are induced within the body. These are known as:',
      options: ['Displacement currents', 'Eddy currents', 'Wattless currents', 'Conduction currents'],
      correctAnswer: 1,
      explanation: 'Eddy currents (or Foucault currents) are induced in bulk pieces of conductors when subjected to changing magnetic flux. They often cause undesirable heating and opposing damping forces.',
    },
  ],
};

export default {
  id: 'phy-u14',
  name: 'Unit 14: Electromagnetic Induction and AC',
  chapters: [emiAndAc],
};
