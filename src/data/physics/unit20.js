// Physics - Unit 20: Electronic Devices

const electronicDevices = {
  id: 'electronic-devices',
  title: 'Chapter 20: Electronic Devices',
  concept_explanations: [
    {
      title: 'Semiconductor Basics',
      description: 'Semiconductors have conductivity between conductors and insulators. Common examples are silicon (Si) and germanium (Ge).'
    },
    {
      title: 'Intrinsic and Extrinsic Semiconductors',
      description: 'Intrinsic semiconductor is pure. Extrinsic semiconductor is doped to increase conductivity.'
    },
    {
      title: 'Doping and Carrier Types',
      description: 'Doping introduces impurities. n-type has excess electrons (majority carriers: electrons). p-type has excess holes (majority carriers: holes).'
    },
    {
      title: 'p-n Junction and Depletion Region',
      description: 'p-n junction is boundary of p and n materials. Depletion region has no free carriers and behaves like a potential barrier.'
    },
    {
      title: 'Forward and Reverse Biasing',
      description: 'Forward bias (p to positive, n to negative) reduces depletion width and allows current. Reverse bias increases depletion width and only tiny current flows.'
    },
    {
      title: 'Diode and Rectifier',
      description: 'Diode has low resistance in forward bias and high resistance in reverse bias. Rectifiers convert AC to DC (half-wave and full-wave).'
    },
    {
      title: 'Zener Diode and Transistor',
      description: 'Zener diode works in reverse breakdown and is used for voltage regulation. Transistor (npn/pnp) allows small base current to control larger collector current and can amplify signals.'
    },
    {
      title: 'Logic Gates and Universal Gates',
      description: 'AND, OR, NOT are basic logic gates. NAND and NOR are universal gates used to realize all logic operations.'
    }
  ],
  key_patterns: [
    'Intrinsic vs extrinsic semiconductor conceptual comparisons.',
    'p-n junction and depletion-region behavior in biasing setups.',
    'Forward-vs-reverse diode characteristic interpretation.',
    'Zener diode as voltage regulator conceptual questions.',
    'Transistor current-control and amplification concept asks.',
    'Truth-table based logic-gate output questions.',
    'Carrier-type and doping based direct theory items.'
  ],
  formulas_relations: [
    {
      formula: 'n-type: majority carriers = electrons',
      meaning: 'Result of donor doping in semiconductor.'
    },
    {
      formula: 'p-type: majority carriers = holes',
      meaning: 'Result of acceptor doping in semiconductor.'
    },
    {
      formula: 'Forward bias: p to +, n to -',
      meaning: 'Depletion region reduces and diode conducts strongly.'
    },
    {
      formula: 'Reverse bias: p to -, n to +',
      meaning: 'Depletion region widens and current is very small.'
    },
    {
      formula: 'AND: output = 1 only if both inputs are 1',
      meaning: 'Basic digital gate behavior.'
    },
    {
      formula: 'OR: output = 1 if any input is 1',
      meaning: 'Basic digital gate behavior.'
    },
    {
      formula: 'NOT: output is logical complement of input',
      meaning: 'Inverter operation.'
    },
    {
      formula: 'NAND and NOR are universal gates',
      meaning: 'Any digital logic function can be built from either one alone.'
    }
  ],
  application_insights: [
    'Short chapter but highly scoring in NEET with direct-theory style asks.',
    'Most frequent asks: logic gates, p-n junction behavior, and Zener diode operation.',
    'Truth-table questions are usually quick marks if gate fundamentals are clear.',
    'Carrier-type understanding (electrons vs holes) is repeatedly tested.',
    'Biasing direction is a common setup-based conceptual check.'
  ],
  common_mistakes: [
    {
      mistake: 'Confusing p-type and n-type semiconductors',
      why: 'Majority carrier identification (holes vs electrons) is often reversed under exam pressure.'
    },
    {
      mistake: 'Mixing forward and reverse bias connections',
      why: 'Incorrect terminal polarity leads to wrong conclusion about current flow.'
    },
    {
      mistake: 'Forgetting majority carriers',
      why: 'Many direct MCQs are based only on carrier-type recall.'
    },
    {
      mistake: 'Wrong logic-gate output',
      why: 'AND/OR/NOT truth-table confusion causes avoidable mistakes.'
    },
    {
      mistake: 'Ignoring Zener working region',
      why: 'Zener diode functions as regulator in reverse breakdown, not normal forward operation.'
    }
  ],
  quick_revision: [
    'Semiconductor conductivity lies between conductor and insulator.',
    'Intrinsic = pure, extrinsic = doped semiconductor.',
    'n-type majority carrier: electron; p-type majority carrier: hole.',
    'p-n junction forms a depletion region barrier.',
    'Forward bias reduces depletion region and allows current.',
    'Reverse bias widens depletion region and blocks current.',
    'Rectifier converts AC to DC (half-wave/full-wave).',
    'Zener diode is used as voltage regulator in reverse breakdown.',
    'Transistor: small base current controls larger collector current.',
    'NAND and NOR are universal gates.'
  ],
  quiz: [
    {
      question: 'Majority carriers in n-type semiconductor are:',
      options: ['holes', 'electrons', 'ions only', 'equal electrons and holes'],
      correctAnswer: 1,
      explanation: 'Donor doping provides extra electrons, so electrons are majority carriers.'
    },
    {
      question: 'In forward bias for p-n junction, connections are:',
      options: ['p to negative, n to positive', 'p to positive, n to negative', 'both to positive', 'both to negative'],
      correctAnswer: 1,
      explanation: 'Forward bias means p side to positive terminal and n side to negative terminal.'
    },
    {
      question: 'A Zener diode is mainly used as:',
      options: ['rectifier only', 'voltage regulator', 'switch in forward bias only', 'light sensor'],
      correctAnswer: 1,
      explanation: 'Zener diode provides nearly constant voltage in reverse breakdown region.'
    },
    {
      question: 'AND gate output is 1 when:',
      options: ['any one input is 1', 'both inputs are 1', 'both inputs are 0', 'inputs are different'],
      correctAnswer: 1,
      explanation: 'AND operation gives HIGH output only if all inputs are HIGH.'
    },
    {
      question: 'Universal logic gates are:',
      options: ['AND and OR', 'NOT and OR', 'NAND and NOR', 'XOR and XNOR'],
      correctAnswer: 2,
      explanation: 'NAND and NOR alone can be used to construct any logic circuit.'
    }
  ]
};

export default {
  id: 'phy-u20',
  name: 'Unit 20: Electronic Devices',
  chapters: [electronicDevices],
};

