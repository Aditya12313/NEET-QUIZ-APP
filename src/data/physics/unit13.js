// Physics — Unit 13: Moving Charges and Magnetism

const magnetism = {
  id: 'magnetism',
  title: 'Chapter 13: Moving Charges and Magnetism',
  concept_explanations: [
    {
      title: 'Magnetic Force on Moving Charge',
      description: 'Vector form: F = q(v × B). Magnitude: F = qvB sin(theta). Direction is given by right-hand rule for positive charge and opposite for negative charge.'
    },
    {
      title: 'Motion in Uniform Magnetic Field',
      description: 'If v is perpendicular to B, particle follows circular path with radius r = mv/(qB) and time period T = 2pi m/(qB). If velocity has a parallel component, motion becomes helical.'
    },
    {
      title: 'Force on Current-Carrying Conductor',
      description: 'Magnitude of magnetic force is F = BIL sin(theta). Use vector form F = I(L × B) and apply direction rules carefully for sign-sensitive questions.'
    },
    {
      title: 'Magnetic Field due to Current',
      description: 'Biot-Savart law: dB = (mu0/4pi) * (I dl sin(theta)/r^2). Key results: long wire B = mu0 I/(2pi r), circular loop center B = mu0 I/(2R), long solenoid B = mu0 nI.'
    },
    {
      title: 'Ampere Circuital Law',
      description: 'Integral form: closed integral B dot dl = mu0 I_enclosed. It is most useful for symmetrical current distributions like long wire, solenoid, and toroid.'
    },
    {
      title: 'Parallel Currents, Torque, and Galvanometer',
      description: 'Force per unit length between wires: F/L = mu0 I1 I2/(2pi d). Same direction currents attract, opposite repel. Torque on loop: tau = NIAB sin(theta). Magnetic dipole moment: m = IA. Galvanometer works on torque proportional to current.'
    }
  ],
  key_patterns: [
    'Magnetic force numericals: find magnitude and direction using q(v × B).',
    'Circular motion questions: calculate radius and time period; compare particles using m/q ratio.',
    'Field calculation set: choose correct expression for straight wire, loop center, or solenoid.',
    'Ampere law applications: identify symmetric path and enclosed current before integrating.',
    'Current-conductor force: use BIL sin(theta) and vector direction rules.',
    'Parallel wires: attraction vs repulsion and force-per-length comparisons.',
    'Torque and magnetic dipole moment: NIAB sin(theta), m = IA, galvanometer principle.'
  ],
  formulas_relations: [
    {
      formula: 'F = q(v × B), |F| = qvB sin(theta)',
      meaning: 'Magnetic force on a moving charge in a magnetic field.'
    },
    {
      formula: 'r = mv/(qB), T = 2pi m/(qB)',
      meaning: 'Radius and time period for v perpendicular to B.'
    },
    {
      formula: 'F = BIL sin(theta)',
      meaning: 'Force on current-carrying conductor in uniform magnetic field.'
    },
    {
      formula: 'B = mu0 I/(2pi r)',
      meaning: 'Field due to a long straight current-carrying wire.'
    },
    {
      formula: 'B = mu0 I/(2R)',
      meaning: 'Field at center of a circular loop.'
    },
    {
      formula: 'B = mu0 nI',
      meaning: 'Field inside a long ideal solenoid.'
    },
    {
      formula: 'closed integral B dot dl = mu0 I_enclosed',
      meaning: 'Ampere circuital law for symmetric systems.'
    },
    {
      formula: 'F/L = mu0 I1 I2/(2pi d)',
      meaning: 'Force per unit length between two long parallel currents.'
    },
    {
      formula: 'tau = NIAB sin(theta), m = IA',
      meaning: 'Torque on current loop and magnetic dipole moment.'
    }
  ],
  application_insights: [
    'High-weightage chapter in NEET with frequent formula-plus-direction combinations.',
    'Most asked clusters: force on charge, circular motion, and field due to current.',
    'In vector questions, direction logic often decides the final option even when magnitude is easy.',
    'When expressions look similar, identify geometry first: wire vs loop vs solenoid.',
    'For particle comparison questions, use proportionality r ∝ m/q and T ∝ m/q to save time.'
  ],
  common_mistakes: [
    {
      mistake: 'Wrong direction using right-hand rule',
      why: 'Direction changes for negative charge/current orientation. Always check vector order in cross product.'
    },
    {
      mistake: 'Confusing electric field behavior with magnetic field behavior',
      why: 'Magnetic force depends on velocity and angle; electric force does not require motion.'
    },
    {
      mistake: 'Forgetting v perpendicular B condition for circular path',
      why: 'If there is a component parallel to B, trajectory is helical, not purely circular.'
    },
    {
      mistake: 'Mixing formulas for wire, loop, and solenoid',
      why: 'These formulas apply to different geometries and cannot be interchanged.'
    },
    {
      mistake: 'Sign errors in force direction and ignoring sin(theta)',
      why: 'Magnitude and direction both matter; many options differ only by sign or angle treatment.'
    }
  ],
  quick_revision: [
    'Magnetic force: F = qvB sin(theta), direction by right-hand rule.',
    'v perpendicular B gives circular motion: r = mv/(qB), T = 2pi m/(qB).',
    'Force on conductor: F = BIL sin(theta).',
    'Long wire: B = mu0 I/(2pi r).',
    'Loop center: B = mu0 I/(2R).',
    'Solenoid: B = mu0 nI.',
    'Parallel currents: same direction attract, opposite repel.',
    'Torque on loop: tau = NIAB sin(theta), magnetic dipole moment m = IA.',
    'Galvanometer principle: deflection torque proportional to current.'
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
  name: 'Unit 13: Moving Charges and Magnetism',
  chapters: [magnetism],
};
