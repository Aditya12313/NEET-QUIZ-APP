// Physics - Unit 14: Electromagnetic Induction (EMI)

const electromagneticInduction = {
  id: 'electromagnetic-induction',
  title: 'Chapter 14: Electromagnetic Induction (EMI)',
  concept_explanations: [
    {
      title: 'Electromagnetic Induction',
      description: 'Electromagnetic induction is the production of induced emf whenever magnetic flux linked with a circuit changes.'
    },
    {
      title: 'Magnetic Flux',
      description: 'Magnetic flux is Phi = B*A*cos(theta). It depends on magnetic field strength B, area A, and angle theta between B and area vector.'
    },
    {
      title: 'Faraday Laws of Induction',
      description: 'First law: change in magnetic flux induces emf. Second law: E = -dPhi/dt. The minus sign indicates Lenz law.'
    },
    {
      title: 'Lenz Law and Energy Conservation',
      description: 'Direction of induced current always opposes the cause producing it, ensuring conservation of energy.'
    },
    {
      title: 'Induced and Motional EMF',
      description: 'Induced emf can arise due to changing magnetic field or due to conductor motion. For motional emf, E = Blv for suitable orientation.'
    },
    {
      title: 'Self and Mutual Induction',
      description: 'Self induction: coil opposes change in its own current, E = -L(dI/dt). Mutual induction: changing current in one coil induces emf in another coil.'
    },
    {
      title: 'Inductance and Energy in Inductor',
      description: 'Inductance L is a property of a coil (unit: henry). Energy stored in inductor is U = (1/2)LI^2.'
    },
    {
      title: 'AC Generator Principle',
      description: 'AC generator converts mechanical energy into electrical energy and works on electromagnetic induction.'
    }
  ],
  key_patterns: [
    'Flux calculation problems using Phi = BAcos(theta).',
    'Faraday law numericals based on rate of change of flux.',
    'Lenz law direction-based questions for induced current.',
    'Motional emf questions using E = Blv.',
    'Self and mutual induction definition-plus-formula asks.',
    'Energy stored in inductor: U = (1/2)LI^2.',
    'Generator concept and working principle direct theory questions.'
  ],
  formulas_relations: [
    {
      formula: 'Phi = BAcos(theta)',
      meaning: 'Magnetic flux through a surface.'
    },
    {
      formula: 'E = -dPhi/dt',
      meaning: 'Faraday second law of electromagnetic induction.'
    },
    {
      formula: 'E = Blv',
      meaning: 'Motional emf for a conductor moving in magnetic field.'
    },
    {
      formula: 'E = -L(dI/dt)',
      meaning: 'Self-induced emf in a coil.'
    },
    {
      formula: 'U = (1/2)LI^2',
      meaning: 'Energy stored in an inductor.'
    }
  ],
  application_insights: [
    'High weightage NEET chapter with frequent formula-plus-direction combinations.',
    'Most asked areas: Faraday law, Lenz law, and motional emf.',
    'Many questions test concept and sign together, not just formula substitution.',
    'Direction of induced current is often the deciding step in MCQs.',
    'Generator and induction principles appear as direct theory one-liners.'
  ],
  common_mistakes: [
    {
      mistake: 'Ignoring negative sign in E = -dPhi/dt',
      why: 'The sign encodes Lenz law direction and cannot be dropped in conceptual questions.'
    },
    {
      mistake: 'Confusing magnetic flux with magnetic field',
      why: 'Flux depends on B, area, and angle; field alone is not flux.'
    },
    {
      mistake: 'Using wrong angle in cos(theta)',
      why: 'Theta must be taken between B and area vector, not always with plane of loop.'
    },
    {
      mistake: 'Mixing motional emf and transformer-type induced emf cases',
      why: 'One comes from conductor motion and the other from changing flux linkage.'
    },
    {
      mistake: 'Direction/sign errors in induction',
      why: 'Not applying Lenz law and right-hand rules carefully causes option-level mistakes.'
    }
  ],
  quick_revision: [
    'Electromagnetic induction: induced emf due to change in magnetic flux.',
    'Magnetic flux: Phi = BAcos(theta).',
    'Faraday second law: E = -dPhi/dt.',
    'Lenz law: induced current opposes cause of change.',
    'Motional emf: E = Blv.',
    'Self induction: E = -L(dI/dt).',
    'Inductance unit: henry (H).',
    'Energy in inductor: U = (1/2)LI^2.',
    'AC generator works on electromagnetic induction.'
  ],
  quiz: [
    {
      question: 'Magnetic flux through a loop is maximum when angle between B and area vector is:',
      options: ['0 degree', '30 degree', '60 degree', '90 degree'],
      correctAnswer: 0,
      explanation: 'Phi = BAcos(theta), maximum when cos(theta)=1, i.e., theta=0 degree.'
    },
    {
      question: 'Faraday second law is represented by:',
      options: ['E = dPhi/dt', 'E = -dPhi/dt', 'E = Blv', 'E = -L(dI/dt^2)'],
      correctAnswer: 1,
      explanation: 'Induced emf equals negative rate of change of magnetic flux: E = -dPhi/dt.'
    },
    {
      question: 'The negative sign in Faraday law indicates:',
      options: ['power loss', 'heating effect', 'Lenz law direction', 'resonance'],
      correctAnswer: 2,
      explanation: 'Negative sign indicates induced current opposes the change in flux (Lenz law).'
    },
    {
      question: 'Motional emf in a conductor of length l moving with speed v perpendicular to B is:',
      options: ['Bl/v', 'Bv/l', 'Blv', 'B/lv'],
      correctAnswer: 2,
      explanation: 'For suitable orientation, motional emf is E = Blv.'
    },
    {
      question: 'Energy stored in an inductor L carrying current I is:',
      options: ['LI^2', '(1/2)LI^2', '(1/2)L/I^2', '2LI^2'],
      correctAnswer: 1,
      explanation: 'Energy stored in magnetic field of inductor: U = (1/2)LI^2.'
    }
  ]
};

export default {
  id: 'phy-u14',
  name: 'Unit 14: Electromagnetic Induction (EMI)',
  chapters: [electromagneticInduction],
};
