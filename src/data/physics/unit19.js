// Physics - Unit 19: Atoms and Nuclei

const atomsNuclei = {
  id: 'atoms-nuclei',
  title: 'Chapter 19: Atoms and Nuclei',
  concept_explanations: [
    {
      title: 'Atomic Structure (Bohr Model)',
      description: 'Bohr postulates: electrons revolve in fixed orbits, do not radiate energy in stationary orbits, and emit/absorb energy only during transitions.'
    },
    {
      title: 'Bohr Orbit Radius',
      description: 'Bohr radius relation gives rn proportional to n^2. Simplified exam relation: rn ∝ n^2.'
    },
    {
      title: 'Energy of Electron in Bohr Orbit',
      description: 'For hydrogen, En = -13.6/n^2 eV. Energy is negative for bound states.'
    },
    {
      title: 'Energy Transition and Spectral Series',
      description: 'Transition energy relation: DeltaE = E2 - E1 = h*nu. Important series: Lyman (UV), Balmer (visible), Paschen (IR).'
    },
    {
      title: 'Nuclear Composition and Radius',
      description: 'Nucleus consists of nucleons (protons + neutrons). Nuclear radius relation: R = R0*A^(1/3).'
    },
    {
      title: 'Mass Defect and Binding Energy',
      description: 'Mass defect is difference between sum of nucleon masses and actual nuclear mass. Binding energy: E = Deltam*c^2. Higher binding energy implies higher stability.'
    },
    {
      title: 'Binding Energy Curve and Stability',
      description: 'Binding energy per nucleon peaks near iron, indicating maximum stability around this region.'
    },
    {
      title: 'Radioactive Decay and Half Life',
      description: 'Decay law: N = N0*e^(-lambda t). Half-life relation: T1/2 = 0.693/lambda. Activity: A = lambda*N.'
    },
    {
      title: 'Types of Decay and Nuclear Reactions',
      description: 'Decay modes: alpha, beta, gamma. Nuclear fission splits heavy nuclei; fusion combines light nuclei.'
    }
  ],
  key_patterns: [
    'Bohr model numericals: orbit radius and energy level relations.',
    'Transition-energy based frequency/wavelength questions.',
    'Spectral-series identification (Lyman, Balmer, Paschen).',
    'Mass-defect and binding-energy calculation problems.',
    'Radioactive-decay and half-life numericals.',
    'Binding-energy curve interpretation and stability comparisons.',
    'Fission-vs-fusion conceptual and direct-theory questions.'
  ],
  formulas_relations: [
    {
      formula: 'rn ∝ n^2',
      meaning: 'Bohr orbit radius dependence on principal quantum number.'
    },
    {
      formula: 'En = -13.6/n^2 eV',
      meaning: 'Bohr energy of electron in nth orbit (hydrogen atom).'
    },
    {
      formula: 'DeltaE = E2 - E1 = h*nu',
      meaning: 'Energy emitted or absorbed in electronic transition.'
    },
    {
      formula: 'R = R0*A^(1/3)',
      meaning: 'Nuclear radius relation.'
    },
    {
      formula: 'Deltam = mass of nucleons - actual mass',
      meaning: 'Mass defect of a nucleus.'
    },
    {
      formula: 'E = Deltam*c^2',
      meaning: 'Binding energy relation.'
    },
    {
      formula: 'N = N0*e^(-lambda t)',
      meaning: 'Radioactive decay law.'
    },
    {
      formula: 'T1/2 = 0.693/lambda',
      meaning: 'Half-life formula.'
    },
    {
      formula: 'A = lambda*N',
      meaning: 'Radioactive activity relation.'
    }
  ],
  application_insights: [
    'Very frequently asked chapter in NEET with formula and concept mix.',
    'Most asked domains: Bohr energy levels, radioactive decay, and binding energy.',
    'Many questions are direct-formula based but include one concept-check twist.',
    'Binding-energy curve interpretation frequently appears in assertion-type asks.',
    'Half-life numericals are fast scoring if exponential decay relation is remembered.'
  ],
  common_mistakes: [
    {
      mistake: 'Forgetting Bohr energy is negative',
      why: 'Bound-state electron energies are negative and sign affects transition calculations.'
    },
    {
      mistake: 'Mixing spectral series',
      why: 'Lyman, Balmer, and Paschen belong to different final levels and regions.'
    },
    {
      mistake: 'Wrong unit conversion between eV and joule',
      why: 'Energy conversion errors can invalidate otherwise correct numerical methods.'
    },
    {
      mistake: 'Confusing half-life and decay-constant relations',
      why: 'T1/2 = 0.693/lambda must be used with correct lambda units.'
    },
    {
      mistake: 'Misinterpreting binding-energy curve',
      why: 'Higher binding energy per nucleon implies greater stability; peak near iron is key.'
    }
  ],
  quick_revision: [
    'Bohr postulates: fixed orbits, no radiation in stationary state, transitions emit/absorb energy.',
    'Bohr radius: rn ∝ n^2.',
    'Bohr energy: En = -13.6/n^2 eV.',
    'Transition: DeltaE = h*nu.',
    'Series: Lyman (UV), Balmer (visible), Paschen (IR).',
    'Nuclear radius: R = R0*A^(1/3).',
    'Mass defect and binding energy: E = Deltam*c^2.',
    'Decay law: N = N0*e^(-lambda t).',
    'Half life: T1/2 = 0.693/lambda.',
    'Activity: A = lambda*N, fission splits heavy nuclei, fusion combines light nuclei.'
  ],
  quiz: [
    {
      question: 'In Bohr model for hydrogen atom, energy of nth orbit is:',
      options: ['En = +13.6/n^2 eV', 'En = -13.6/n^2 eV', 'En = -13.6n^2 eV', 'En = 13.6n^2 eV'],
      correctAnswer: 1,
      explanation: 'For hydrogen, En = -13.6/n^2 eV and remains negative for bound states.'
    },
    {
      question: 'Which spectral series lies in visible region?',
      options: ['Lyman', 'Balmer', 'Paschen', 'Brackett'],
      correctAnswer: 1,
      explanation: 'Balmer series transitions terminate at n=2 and are in visible region.'
    },
    {
      question: 'Half-life T1/2 is related to decay constant lambda by:',
      options: ['T1/2 = lambda/0.693', 'T1/2 = 0.693*lambda', 'T1/2 = 0.693/lambda', 'T1/2 = 1/lambda^2'],
      correctAnswer: 2,
      explanation: 'Standard half-life relation is T1/2 = 0.693/lambda.'
    },
    {
      question: 'Binding energy of a nucleus is given by:',
      options: ['E = mc', 'E = Deltam*c^2', 'E = Deltam/c^2', 'E = lambda*N'],
      correctAnswer: 1,
      explanation: 'Binding energy equals mass defect times c squared.'
    },
    {
      question: 'Peak of binding-energy-per-nucleon curve is around:',
      options: ['Hydrogen', 'Helium', 'Iron region', 'Uranium region'],
      correctAnswer: 2,
      explanation: 'Maximum binding energy per nucleon occurs near iron, indicating highest stability.'
    }
  ]
};

export default {
  id: 'phy-u19',
  name: 'Unit 19: Atoms and Nuclei',
  chapters: [atomsNuclei],
};

