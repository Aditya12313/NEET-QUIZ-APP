// Physics - Unit 18: Dual Nature of Matter and Radiation

const dualNature = {
  id: 'dual-nature',
  title: 'Chapter 18: Dual Nature of Matter and Radiation',
  concept_explanations: [
    {
      title: 'Dual Nature of Radiation',
      description: 'Light shows wave nature (interference, diffraction) and particle nature (photoelectric effect).'
    },
    {
      title: 'Photon',
      description: 'Photon is a packet of energy. Core relations: E = h*nu and E = hc/lambda.'
    },
    {
      title: 'Photoelectric Effect',
      description: 'Electrons are emitted from a metal surface when light of suitable frequency falls on it. Key observations: instant emission, dependence on frequency, and threshold frequency.'
    },
    {
      title: 'Einstein Photoelectric Equation',
      description: 'h*nu = phi + KEmax, where phi is work function. Maximum kinetic energy may also be written as KEmax = eV0.'
    },
    {
      title: 'Threshold Frequency and Stopping Potential',
      description: 'Threshold frequency relation is nu0 = phi/h. Stopping potential is minimum potential needed to stop photoelectrons.'
    },
    {
      title: 'Photoelectric Graphs',
      description: 'KE vs frequency gives a straight line. Current vs voltage graph shows saturation current and cutoff (stopping potential).'
    },
    {
      title: 'de Broglie Hypothesis',
      description: 'Matter particles also exhibit wave nature. de Broglie wavelength is lambda = h/p = h/(mv). For electron accelerated through potential V: lambda = h/sqrt(2meV).'
    },
    {
      title: 'Applications',
      description: 'Wave nature of matter enables electron diffraction and technologies like electron microscope.'
    }
  ],
  key_patterns: [
    'Einstein photoelectric-equation based direct numerical and conceptual asks.',
    'Kinetic energy and stopping potential relation questions (KEmax = eV0).',
    'Threshold frequency and work-function relation checks.',
    'de Broglie wavelength numericals using velocity or accelerating voltage.',
    'Mixed unit-conversion numericals involving eV, joule, frequency, and wavelength.',
    'Graph-based interpretation from KE-frequency and current-voltage plots.',
    'Conceptual distinctions between intensity and frequency effects.'
  ],
  formulas_relations: [
    {
      formula: 'E = h*nu = hc/lambda',
      meaning: 'Photon energy relations.'
    },
    {
      formula: 'h*nu = phi + KEmax',
      meaning: 'Einstein photoelectric equation.'
    },
    {
      formula: 'KEmax = (1/2)mv^2 = eV0',
      meaning: 'Maximum kinetic energy of photoelectrons and stopping-potential form.'
    },
    {
      formula: 'nu0 = phi/h',
      meaning: 'Threshold frequency relation.'
    },
    {
      formula: 'lambda = h/p = h/(mv)',
      meaning: 'General de Broglie wavelength relation.'
    },
    {
      formula: 'lambda = h/sqrt(2meV)',
      meaning: 'de Broglie wavelength for electron accelerated by potential V.'
    }
  ],
  application_insights: [
    'Very high-weightage NEET chapter with heavy formula usage.',
    'Most asked topics are Einstein equation and de Broglie wavelength.',
    'Typical NEET pattern is direct formula plus one conceptual distinction.',
    'Graph-based interpretation can be solved quickly if slope/intercept meaning is known.',
    'Intensity-frequency distinction is one of the most repeated trap zones.'
  ],
  common_mistakes: [
    {
      mistake: 'Confusing intensity with frequency',
      why: 'Intensity controls number of emitted electrons, while maximum kinetic energy depends on frequency.'
    },
    {
      mistake: 'Ignoring threshold-frequency condition',
      why: 'No photoemission occurs if incident frequency is below threshold regardless of intensity.'
    },
    {
      mistake: 'Wrong unit conversion between eV and joule',
      why: 'Many numericals require consistent SI units for final calculation.'
    },
    {
      mistake: 'Mixing de Broglie formulas',
      why: 'Use lambda = h/(mv) generally and lambda = h/sqrt(2meV) for electron accelerated through V.'
    },
    {
      mistake: 'Misreading photoelectric graphs',
      why: 'Cutoff potential, saturation current, and threshold intercept each represent different physics.'
    }
  ],
  quick_revision: [
    'Light has dual nature: wave and particle.',
    'Photon energy: E = h*nu = hc/lambda.',
    'Photoelectric equation: h*nu = phi + KEmax.',
    'KEmax = (1/2)mv^2 = eV0.',
    'Threshold frequency: nu0 = phi/h.',
    'Stopping potential is minimum potential to stop fastest electrons.',
    'KE vs frequency graph is linear.',
    'de Broglie: lambda = h/p = h/(mv).',
    'Electron through V: lambda = h/sqrt(2meV).',
    'Photoelectric effect: frequency is decisive, not intensity alone.'
  ],
  quiz: [
    {
      question: 'Einstein photoelectric equation is:',
      options: ['h*nu = phi + KEmax', 'h*nu = phi - KEmax', 'KEmax = phi - h*nu', 'h*nu = eV0 only'],
      correctAnswer: 0,
      explanation: 'Photon energy is used to overcome work function and give maximum kinetic energy.'
    },
    {
      question: 'If stopping potential is V0, maximum kinetic energy of photoelectron is:',
      options: ['KEmax = hV0', 'KEmax = eV0', 'KEmax = V0/e', 'KEmax = e/V0'],
      correctAnswer: 1,
      explanation: 'Stopping potential directly gives KEmax = eV0.'
    },
    {
      question: 'Threshold frequency relation is:',
      options: ['nu0 = h/phi', 'nu0 = phi/h', 'nu0 = phi*lambda', 'nu0 = phi/e'],
      correctAnswer: 1,
      explanation: 'At threshold, h*nu0 equals work function phi.'
    },
    {
      question: 'de Broglie wavelength of a particle is:',
      options: ['lambda = p/h', 'lambda = h/p', 'lambda = h*p', 'lambda = p^2/h'],
      correctAnswer: 1,
      explanation: 'de Broglie proposed lambda = h/p.'
    },
    {
      question: 'In photoelectric effect, increasing intensity at fixed frequency above threshold mainly increases:',
      options: ['maximum kinetic energy', 'threshold frequency', 'number of emitted electrons', 'work function'],
      correctAnswer: 2,
      explanation: 'Intensity changes number of emitted electrons, not KEmax at fixed frequency.'
    }
  ]
};

export default {
  id: 'phy-u18',
  name: 'Unit 18: Dual Nature of Matter and Radiation',
  chapters: [dualNature],
};

