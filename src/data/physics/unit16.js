// Physics - Unit 16: Electromagnetic Waves

const emWaves = {
  id: 'em-waves',
  title: 'Chapter 16: Electromagnetic Waves',
  concept_explanations: [
    {
      title: 'Electromagnetic Waves',
      description: 'Electromagnetic waves consist of oscillating electric and magnetic fields and do not require a material medium for propagation.'
    },
    {
      title: 'Nature of EM Waves',
      description: 'EM waves are transverse. Electric field E is perpendicular to magnetic field B, and both are perpendicular to direction of propagation.'
    },
    {
      title: 'Speed of EM Waves',
      description: 'In vacuum, c = 1/sqrt(mu0*epsilon0) and c = 3 x 10^8 m/s.'
    },
    {
      title: 'Relation Between E and B',
      description: 'For EM waves in vacuum, E/B = c.'
    },
    {
      title: 'Maxwell Prediction and Displacement Current',
      description: 'Changing electric field creates magnetic field and vice versa. Displacement current is Id = epsilon0 (dPhiE/dt), crucial for EM wave propagation.'
    },
    {
      title: 'Electromagnetic Spectrum',
      description: 'Order from low frequency to high frequency: Radio -> Microwave -> Infrared -> Visible -> Ultraviolet -> X-rays -> Gamma rays.'
    },
    {
      title: 'Properties and Uses',
      description: 'EM waves travel at speed of light, carry energy and momentum, and are not deflected by external electric or magnetic fields. Energy is directly proportional to frequency. Applications vary by region of spectrum.'
    }
  ],
  key_patterns: [
    'Spectrum-order questions are direct and frequent.',
    'Theory asks on transverse nature and no-medium propagation.',
    'Formula checks using c = 1/sqrt(mu0*epsilon0) and E/B = c.',
    'Application-based questions on uses of each spectral region.',
    'Energy-frequency direct proportionality conceptual asks.',
    'Displacement current concept in Maxwell framework.',
    'Assertion-reason type questions are very common in NEET.'
  ],
  formulas_relations: [
    {
      formula: 'c = 1/sqrt(mu0*epsilon0)',
      meaning: 'Speed of electromagnetic waves in vacuum.'
    },
    {
      formula: 'c = 3 x 10^8 m/s',
      meaning: 'Numerical value of speed of light in vacuum.'
    },
    {
      formula: 'E/B = c',
      meaning: 'Field-amplitude relation in vacuum EM wave.'
    },
    {
      formula: 'Id = epsilon0 (dPhiE/dt)',
      meaning: 'Displacement current relation.'
    },
    {
      formula: 'Energy proportional to frequency',
      meaning: 'Higher-frequency EM waves carry higher photon energy.'
    }
  ],
  application_insights: [
    'Short chapter but consistently high-scoring in NEET.',
    'Most asked: spectrum order, core properties, and practical uses.',
    'Questions are often direct theory plus one conceptual check.',
    'Spectrum-use matching can be solved quickly if order is memorized well.',
    'Displacement current is mostly conceptual rather than numerical in NEET level questions.'
  ],
  common_mistakes: [
    {
      mistake: 'Wrong order of electromagnetic spectrum',
      why: 'Confusing order leads to errors in frequency, wavelength, and energy-based options.'
    },
    {
      mistake: 'Confusing wavelength and frequency trends',
      why: 'As frequency increases, wavelength decreases; many options test this directly.'
    },
    {
      mistake: 'Forgetting that EM waves do not need medium',
      why: 'Unlike mechanical waves, EM waves propagate in vacuum.'
    },
    {
      mistake: 'Mixing uses of different spectral regions',
      why: 'Application-based options are often close and require exact mapping.'
    },
    {
      mistake: 'Confusing direction of E and B fields',
      why: 'E, B, and propagation direction are mutually perpendicular.'
    }
  ],
  quick_revision: [
    'EM waves are oscillating electric and magnetic fields.',
    'No material medium is required for propagation.',
    'EM waves are transverse: E perpendicular B perpendicular propagation.',
    'c = 1/sqrt(mu0*epsilon0), and c = 3 x 10^8 m/s in vacuum.',
    'E/B = c.',
    'Displacement current: Id = epsilon0 (dPhiE/dt).',
    'Spectrum order: Radio -> Microwave -> Infrared -> Visible -> UV -> X-rays -> Gamma.',
    'EM waves carry energy and momentum.',
    'They are not deflected by external E or B fields.',
    'Energy increases with frequency.'
  ],
  quiz: [
    {
      question: 'Correct order from low to high frequency is:',
      options: ['Radio -> IR -> Microwave -> Visible', 'Radio -> Microwave -> IR -> Visible', 'IR -> Radio -> Microwave -> UV', 'Visible -> IR -> UV -> X-rays'],
      correctAnswer: 1,
      explanation: 'The correct spectral order is Radio, Microwave, Infrared, Visible, Ultraviolet, X-rays, Gamma.'
    },
    {
      question: 'For electromagnetic waves in vacuum, the correct field relation is:',
      options: ['B/E = c', 'E*B = c', 'E/B = c', 'E/B = 1/c^2'],
      correctAnswer: 2,
      explanation: 'For EM waves in vacuum, E/B equals speed of light c.'
    },
    {
      question: 'Which statement is true about electromagnetic waves?',
      options: ['They require medium', 'They are longitudinal', 'They are deflected by electric fields', 'They can propagate in vacuum'],
      correctAnswer: 3,
      explanation: 'EM waves are transverse and can travel in vacuum without medium.'
    },
    {
      question: 'Displacement current is represented by:',
      options: ['Id = epsilon0 (dPhiE/dt)', 'Id = mu0 (dPhiB/dt)', 'Id = B l v', 'Id = V/R'],
      correctAnswer: 0,
      explanation: 'Maxwell introduced displacement current Id = epsilon0 (dPhiE/dt).'
    },
    {
      question: 'Which EM wave is commonly used for medical imaging of bones?',
      options: ['Infrared', 'Ultraviolet', 'X-rays', 'Microwaves'],
      correctAnswer: 2,
      explanation: 'X-rays are used in medical imaging due to high penetrating power.'
    }
  ]
};

export default {
  id: 'phy-u16',
  name: 'Unit 16: Electromagnetic Waves',
  chapters: [emWaves],
};

