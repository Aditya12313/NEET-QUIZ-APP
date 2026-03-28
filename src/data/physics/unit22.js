// Physics - Unit 22: Magnetism and Matter

const magnetismAndMatter = {
  id: 'magnetism-matter',
  title: 'Chapter 22: Magnetism and Matter',
  concept_explanations: [
    {
      title: 'Bar Magnet as Equivalent Solenoid',
      description: 'A bar magnet behaves like an equivalent current-carrying solenoid. The magnetic field pattern of both is similar, which helps in conceptual and diagram-based NEET questions.'
    },
    {
      title: 'Magnetic Field Lines',
      description: 'Magnetic field lines form closed loops. Outside the magnet they go from N to S, and inside the magnet they go from S to N.'
    },
    {
      title: 'Magnetic Dipole and Dipole Moment',
      description: 'A magnetic dipole consists of two equal and opposite poles separated by distance 2l. Dipole moment is M = m * 2l and its direction is from S to N.'
    },
    {
      title: 'Field of a Bar Magnet',
      description: 'On axial line: B = (mu0/4pi) * (2M/r^3). On equatorial line: B = (mu0/4pi) * (M/r^3). Keep the 2 factor and line type correct.'
    },
    {
      title: 'Torque and Potential Energy of Dipole',
      description: 'Torque in uniform field: tau = MB sin(theta). Potential energy: U = -MB cos(theta). These are direct formula and sign-check questions in NEET.'
    },
    {
      title: 'Earth Magnetism and Magnetic Elements',
      description: 'Earth behaves like a giant magnet. Declination is angle between geographic and magnetic meridian. Inclination (dip) is angle between B and horizontal. Horizontal component: BH = B cos(theta).'
    },
    {
      title: 'Magnetic Materials and Relations',
      description: 'Diamagnetic materials are weakly repelled (bismuth, copper), paramagnetic are weakly attracted (aluminum), and ferromagnetic are strongly attracted (iron, cobalt). Magnetization M = magnetic moment/volume, magnetic intensity H = B/mu0, susceptibility chi = M/H, and permeability mu = mu0(1 + chi).'
    }
  ],
  key_patterns: [
    'Magnetic dipole numericals: axial and equatorial field expressions.',
    'Torque and energy pair: tau = MB sin(theta), U = -MB cos(theta).',
    'Earth magnetism concepts: declination, inclination, and horizontal component.',
    'Material classification questions: diamagnetic vs paramagnetic vs ferromagnetic.',
    'Direct relation questions connecting B, H, M, chi, and mu.',
    'Conceptual checks on field lines and bar magnet-solenoid equivalence.',
    'Theory-based one-liners are very common in this chapter.'
  ],
  formulas_relations: [
    {
      formula: 'M = m * 2l',
      meaning: 'Magnetic dipole moment of a bar magnet.'
    },
    {
      formula: 'Baxial = (mu0/4pi) * (2M/r^3)',
      meaning: 'Magnetic field on axial line of a short bar magnet.'
    },
    {
      formula: 'Bequatorial = (mu0/4pi) * (M/r^3)',
      meaning: 'Magnetic field on equatorial line of a short bar magnet.'
    },
    {
      formula: 'tau = MB sin(theta)',
      meaning: 'Torque on magnetic dipole in uniform magnetic field.'
    },
    {
      formula: 'U = -MB cos(theta)',
      meaning: 'Potential energy of magnetic dipole in uniform field.'
    },
    {
      formula: 'BH = B cos(theta)',
      meaning: 'Horizontal component of Earth magnetic field.'
    },
    {
      formula: 'Magnetization M = magnetic moment/volume',
      meaning: 'Magnetic moment per unit volume of material.'
    },
    {
      formula: 'H = B/mu0',
      meaning: 'Magnetic intensity in free space.'
    },
    {
      formula: 'chi = M/H',
      meaning: 'Magnetic susceptibility.'
    },
    {
      formula: 'mu = mu0(1 + chi)',
      meaning: 'Permeability-susceptibility relation.'
    }
  ],
  application_insights: [
    'Moderate NEET weightage chapter with high conceptual density.',
    'Most asked from this chapter: material classification, dipole formulas, and Earth magnetism.',
    'Common NEET pattern is conceptual plus direct-theory formula checks rather than long numericals.',
    'In axial-equatorial questions, students lose marks mainly due to formula swap and missing factor 2.',
    'Field-line direction and dipole direction are frequent assertion-reason style asks.'
  ],
  common_mistakes: [
    {
      mistake: 'Confusing dipole moment with pole strength',
      why: 'Dipole moment includes separation distance (M = m * 2l), while pole strength alone does not.'
    },
    {
      mistake: 'Wrong direction of magnetic field lines',
      why: 'Outside magnet N to S, inside S to N; lines always form closed loops.'
    },
    {
      mistake: 'Mixing axial and equatorial formulas',
      why: 'Axial has the extra factor 2 in numerator; equatorial does not.'
    },
    {
      mistake: 'Forgetting diamagnetic materials are repelled',
      why: 'Material-type confusion leads to easy conceptual errors.'
    },
    {
      mistake: 'Sign mistakes in susceptibility and Earth magnetism interpretation',
      why: 'Incorrect sign or angle interpretation changes both concept and option choice.'
    }
  ],
  quick_revision: [
    'Bar magnet is equivalent to a current-carrying solenoid.',
    'Field lines are closed loops: outside N to S, inside S to N.',
    'Magnetic dipole moment: M = m * 2l (direction S to N).',
    'Axial field: Baxial = (mu0/4pi) * (2M/r^3).',
    'Equatorial field: Bequatorial = (mu0/4pi) * (M/r^3).',
    'Torque: tau = MB sin(theta).',
    'Potential energy: U = -MB cos(theta).',
    'Earth elements: declination, inclination, and BH = B cos(theta).',
    'Material types: diamagnetic (repelled), paramagnetic (weak attraction), ferromagnetic (strong attraction).',
    'Relations: H = B/mu0, chi = M/H, mu = mu0(1 + chi).'
  ],
  quiz: [
    {
      question: 'The magnetic field on axial line of a short bar magnet at distance r is proportional to:',
      options: ['1/r', '1/r^2', '1/r^3', '1/r^4'],
      correctAnswer: 2,
      explanation: 'For short bar magnet on axial line, B = (mu0/4pi) * (2M/r^3), so B varies as 1/r^3.'
    },
    {
      question: 'Torque on a magnetic dipole M placed at angle theta in uniform field B is:',
      options: ['MB cos(theta)', 'MB sin(theta)', 'MB tan(theta)', 'MB'],
      correctAnswer: 1,
      explanation: 'The standard expression is tau = MB sin(theta).'
    },
    {
      question: 'Potential energy of a magnetic dipole in a uniform magnetic field is:',
      options: ['U = MB cos(theta)', 'U = MB sin(theta)', 'U = -MB cos(theta)', 'U = -MB sin(theta)'],
      correctAnswer: 2,
      explanation: 'Potential energy is U = -MB cos(theta), with minimum at theta = 0.'
    },
    {
      question: 'Which magnetic material is weakly repelled by magnetic field?',
      options: ['Ferromagnetic', 'Paramagnetic', 'Diamagnetic', 'Superconducting'],
      correctAnswer: 2,
      explanation: 'Diamagnetic materials are weakly repelled by magnetic fields.'
    },
    {
      question: 'Horizontal component of Earth magnetic field BH is related to total field B and dip angle theta by:',
      options: ['BH = B sin(theta)', 'BH = B cos(theta)', 'BH = B tan(theta)', 'BH = B/theta'],
      correctAnswer: 1,
      explanation: 'By definition, horizontal component is BH = B cos(theta), where theta is inclination.'
    }
  ]
};

export default {
  id: 'phy-u22',
  name: 'Unit 22: Magnetism and Matter',
  chapters: [magnetismAndMatter],
};

