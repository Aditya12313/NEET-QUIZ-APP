// Physics - Unit 17: Optics (Ray + Wave Optics)

const optics = {
  id: 'optics',
  title: 'Chapter 17: Optics (Ray + Wave Optics)',
  concept_explanations: [
    {
      title: 'Ray Optics - Reflection of Light',
      description: 'Law 1: angle of incidence equals angle of reflection. Law 2: incident ray, reflected ray, and normal lie in the same plane.'
    },
    {
      title: 'Mirror Formula and Magnification',
      description: 'Mirror relation: 1/f = 1/v + 1/u. Magnification: m = v/u (sign by convention in calculations).'
    },
    {
      title: 'Refraction and Refractive Index',
      description: 'Snell law: n1 sin(theta1) = n2 sin(theta2). Refractive index: n = c/v.'
    },
    {
      title: 'Total Internal Reflection and Critical Angle',
      description: 'TIR occurs when light travels from denser to rarer medium and angle of incidence is greater than critical angle. Relation: sin(C) = 1/n.'
    },
    {
      title: 'Lens Formula, Power, and Lens Combination',
      description: 'Lens relation: 1/f = 1/v - 1/u, magnification m = v/u. Lens power: P = 1/f (f in meter). Combination: Ptotal = P1 + P2.'
    },
    {
      title: 'Optical Instruments',
      description: 'Microscope and telescope are high-frequency NEET theory topics in ray optics.'
    },
    {
      title: 'Wave Optics - Huygens, Interference, and YDSE',
      description: 'By Huygens principle, each wavefront point acts as source of secondary wavelets. In YDSE, fringe width is beta = lambda D/d.'
    },
    {
      title: 'Interference Conditions, Diffraction, and Polarization',
      description: 'Constructive interference: path difference = n lambda. Destructive: path difference = (2n+1)lambda/2. Diffraction is bending around obstacles. Polarization proves transverse nature of light.'
    }
  ],
  key_patterns: [
    'Mirror and lens formula numericals with image position and magnification.',
    'Refraction problems using Snell law and refractive index relation.',
    'TIR and critical-angle condition checks and calculations.',
    'Combination of lenses via direct power addition.',
    'YDSE numericals based on fringe width and wavelength.',
    'Interference bright/dark fringe condition questions.',
    'Conceptual wave-optics asks on diffraction and polarization.'
  ],
  formulas_relations: [
    {
      formula: '1/f = 1/v + 1/u',
      meaning: 'Mirror formula.'
    },
    {
      formula: 'm = v/u',
      meaning: 'Magnification relation (use sign convention as applicable).'
    },
    {
      formula: 'n1 sin(theta1) = n2 sin(theta2)',
      meaning: 'Snell law of refraction.'
    },
    {
      formula: 'n = c/v',
      meaning: 'Refractive index definition.'
    },
    {
      formula: 'sin(C) = 1/n',
      meaning: 'Critical angle relation for denser-to-rarer transition.'
    },
    {
      formula: '1/f = 1/v - 1/u',
      meaning: 'Lens formula.'
    },
    {
      formula: 'P = 1/f',
      meaning: 'Power of lens in diopters (f in meter).'
    },
    {
      formula: 'Ptotal = P1 + P2',
      meaning: 'Power of combination of thin lenses.'
    },
    {
      formula: 'beta = lambda D/d',
      meaning: 'Fringe width in Young double slit experiment.'
    },
    {
      formula: 'Constructive: path difference = n lambda, Destructive: path difference = (2n+1)lambda/2',
      meaning: 'Interference conditions for bright and dark fringes.'
    }
  ],
  application_insights: [
    'Very high-weightage chapter with mixed numerical and conceptual asks.',
    'Most asked segments: lens formula, YDSE, and TIR.',
    'Sign convention handling in mirror/lens formulas is often marks-deciding.',
    'Wave-optics questions frequently combine formula with concept identification.',
    'Power-unit and sign handling are common error points in quick NEET calculations.'
  ],
  common_mistakes: [
    {
      mistake: 'Wrong sign convention in mirror/lens formula',
      why: 'Incorrect sign choice gives wrong image position even with correct formula.'
    },
    {
      mistake: 'Mixing 1/v + 1/u and 1/v - 1/u forms',
      why: 'Mirror and lens formulas differ; confusing them is a standard trap.'
    },
    {
      mistake: 'Forgetting TIR condition',
      why: 'Both direction (denser to rarer) and angle condition are mandatory.'
    },
    {
      mistake: 'Confusing interference and diffraction',
      why: 'Both are wave effects but arise from different physical setups.'
    },
    {
      mistake: 'Wrong units in lens power and misplacing image signs',
      why: 'Power uses focal length in meter; sign mistakes flip answer options.'
    }
  ],
  quick_revision: [
    'Reflection laws: i = r and all rays with normal lie in same plane.',
    'Mirror formula: 1/f = 1/v + 1/u.',
    'Lens formula: 1/f = 1/v - 1/u.',
    'Magnification: m = v/u.',
    'Snell law: n1 sin(theta1) = n2 sin(theta2).',
    'Refractive index: n = c/v.',
    'TIR: denser to rarer and i > C, with sin(C) = 1/n.',
    'Lens power: P = 1/f and Ptotal = P1 + P2.',
    'YDSE fringe width: beta = lambda D/d.',
    'Polarization is shown only by transverse waves.'
  ],
  quiz: [
    {
      question: 'Mirror formula is:',
      options: ['1/f = 1/v - 1/u', '1/f = 1/v + 1/u', 'f = u + v', '1/f = v/u'],
      correctAnswer: 1,
      explanation: 'For spherical mirrors, the relation is 1/f = 1/v + 1/u.'
    },
    {
      question: 'Lens formula is:',
      options: ['1/f = 1/v + 1/u', '1/f = 1/v - 1/u', '1/f = v/u', 'f = uv'],
      correctAnswer: 1,
      explanation: 'Thin lens relation is 1/f = 1/v - 1/u under Cartesian convention.'
    },
    {
      question: 'In YDSE, fringe width is given by:',
      options: ['beta = d/(lambda D)', 'beta = lambda D/d', 'beta = lambda d/D', 'beta = D/(lambda d)'],
      correctAnswer: 1,
      explanation: 'Fringe width in Young experiment is beta = lambda D/d.'
    },
    {
      question: 'Polarization is a property shown by:',
      options: ['all waves', 'only longitudinal waves', 'only transverse waves', 'sound waves only'],
      correctAnswer: 2,
      explanation: 'Only transverse waves can be polarized.'
    },
    {
      question: 'TIR occurs when light goes from denser to rarer medium and angle of incidence is:',
      options: ['less than critical angle', 'equal to zero', 'greater than critical angle', 'always 45 degree'],
      correctAnswer: 2,
      explanation: 'Both conditions are needed: denser-to-rarer transition and incidence angle greater than critical angle.'
    }
  ]
};

export default {
  id: 'phy-u17',
  name: 'Unit 17: Optics (Ray + Wave Optics)',
  chapters: [optics],
};

