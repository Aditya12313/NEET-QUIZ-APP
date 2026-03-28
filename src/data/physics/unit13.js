// Physics — Unit 13: Magnetic Effects of Current and Magnetism

const magnetism = {
  id: 'magnetism',
  title: 'Chapter 13: Magnetic Effects of Current and Magnetism',
  notes: [
    {
      concept: 'Biot-Savart Law: Magnetic field dB due to a current element Idl is dB = (μ0/4π) * I(dl × r) / r³. Direction is given by magnetic compass or Right-Hand Rule.',
      fact: 'For a circular coil carrying current I of radius R at distance x on its axis, B = (μ0 I R²) / 2(R² + x²)^(3/2). At center x=0, B = (μ0 I)/2R.',
      tip: 'Ampere\'s Circuital Law is alternative: ∮B·dl = μ0 I_enclosed. For long straight wire: B = μ0 I / 2πr. Inside ideal long solenoid: B = μ0 nI.',
    },
    {
      concept: 'Force on Moving Charge: Lorentz Force F = q(v × B) + qE. If only magnetic field is present, F_m = qvB sinθ. Direction is given by Fleming\'s Left Hand Rule.',
      fact: 'Magnetic force is always perpendicular to velocity, so work done by it is zero. Kinetic energy and speed remain constant.',
      tip: 'If v is perpendicular to B (θ = 90°), path is circular (r = mv/qB). If v is at angle θ to B, path is helical (Pitch = v_cosθ * 2πm/qB).',
    },
    {
      concept: 'Force on a Current-Carrying Conductor: F = I(L × B). Two parallel current-carrying wires exert force on each other. F/L = (μ0 I1 I2) / 2πd.',
      fact: 'Like currents (same direction) attract each other. Unlike currents (opposite direction) repel. This is used to define the SI unit Ampere.',
      tip: 'Torque on current loop in uniform B field: τ = M × B = NIAB sinθ. This principle is used in Moving Coil Galvanometer.',
    },
    {
      concept: 'Moving Coil Galvanometer: Moving coil experiences torque. Deflection α I. Current Sensitivity = θ/I = NAB/k. Voltage Sensitivity = θ/V = NAB/kR.',
      fact: 'Conversion to Ammeter: Connect low-value shunt resistance (S) in parallel. S = Ig * G / (I - Ig). Conversion to Voltmeter: Connect high resistance (R) in series. R = (V/Ig) - G.',
      tip: 'An ideal ammeter has zero resistance, ideal voltmeter has infinite resistance.',
    },
    {
      concept: 'Magnetism properties: Magnetic dipole moment (M) of a bar magnet = m * 2l. Magnetic field lines travel N to S outside, S to N inside. Torque on bar magnet in uniform field τ = M × B. Work done W = MB(cosθ1 - cosθ2).',
      fact: 'Gauss\'s Law for Magnetism: ∮B·dA = 0, indicating magnetic monopoles do not exist.',
      tip: 'Magnetic substances: Diamagnetic (-ve susceptibility, weakly repelled, e.g. Bi, Cu), Paramagnetic (+ve small susceptibility, weakly attracted, e.g. Al), Ferromagnetic (+ve large susceptibility, strongly attracted, e.g. Fe, Co, Ni). Curie temp: Ferromagnetic loses properties and becomes Paramagnetic.',
    },
  ],
  quiz: [
    {
      question: 'Two parallel long straight wires are kept distance d apart carrying parallel currents. The nature of force between them is:',
      options: ['Attractive', 'Repulsive', 'Zero', 'Perpendicular to both wires'],
      correctAnswer: 0,
      explanation: 'By the right-hand grip rule, the first wire creates a magnetic field at the location of the second wire. Using F = I(L × B), the force is directed towards the first wire. Hence, parallel currents attract, anti-parallel currents repel.',
    },
    {
      question: 'What is the work done by a uniform magnetic field on a charged particle moving through it?',
      options: ['Depends on its velocity', 'Positive if it moves faster', 'Zero', 'Negative if it moves opposite to field lines'],
      correctAnswer: 2,
      explanation: 'Magnetic force F = q(v × B) is always perpendicular to velocity v. Since Work W = F·ds = F*v*cos(90°)*dt = 0.',
    },
    {
      question: 'To convert a moving coil galvanometer into an ammeter of desired range, we connect:',
      options: ['A high resistance in series', 'A low resistance in parallel (shunt)', 'A high resistance in parallel', 'A low resistance in series'],
      correctAnswer: 1,
      explanation: 'An ammeter should have very low electrical resistance so it does not alter the current in the circuit. Hence, a low shunt resistance is connected in parallel with the galvanometer to bypass most of the current.',
    },
    {
      question: 'A proton and an alpha particle enter a uniform magnetic field with the same velocity perpendicularly. What is the ratio of their radii of circular paths?',
      options: ['1:1', '1:2', '2:1', '1:4'],
      correctAnswer: 1,
      explanation: 'Radius r = mv/qB. For proton: r_p = (m_p * v) / (e * B). For alpha particle (mass 4m_p, charge 2e): r_a = (4m_p * v) / (2e * B) = 2(m_p * v) / (e * B) = 2r_p. So ratio is 1:2.',
    },
    {
      question: 'Above the Curie temperature, a ferromagnetic substance becomes:',
      options: ['Diamagnetic', 'Paramagnetic', 'Superconductor', 'Remains ferromagnetic'],
      correctAnswer: 1,
      explanation: 'At the Curie temperature, thermal agitation overcomes the internal exchange forces aligning the magnetic moments, transitioning the substance into a paramagnetic state.',
    },
  ],
};

export default {
  id: 'phy-u13',
  name: 'Unit 13: Magnetic Effects of Current and Magnetism',
  chapters: [magnetism],
};
