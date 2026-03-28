// Physics - Unit 15: Alternating Current (AC)

const alternatingCurrent = {
  id: 'alternating-current',
  title: 'Chapter 15: Alternating Current (AC)',
  concept_explanations: [
    {
      title: 'Alternating Current',
      description: 'Alternating current changes magnitude and direction periodically. Instantaneous current is I = I0 sin(omega t).'
    },
    {
      title: 'RMS and Average Values',
      description: 'Effective values are Irms = I0/sqrt(2) and Vrms = V0/sqrt(2). Average value over half cycle is Iavg = 2I0/pi.'
    },
    {
      title: 'AC in R, L, and C',
      description: 'In resistor, current and voltage are in phase (V = IR). In inductor, voltage leads current by 90 deg with XL = omegaL. In capacitor, current leads voltage by 90 deg with XC = 1/(omegaC).'
    },
    {
      title: 'Impedance and Circuit Current',
      description: 'For series LCR circuit, impedance is Z = sqrt(R^2 + (XL - XC)^2), and current is I = V/Z.'
    },
    {
      title: 'Power and Power Factor',
      description: 'Average AC power is P = Vrms Irms cos(phi). Power factor is cos(phi) = R/Z and indicates circuit efficiency.'
    },
    {
      title: 'Resonance in LCR Circuit',
      description: 'At resonance, XL = XC so impedance is minimum (Z = R) and current becomes maximum. Resonant frequency is f = 1/(2pi*sqrt(LC)).'
    },
    {
      title: 'Transformers',
      description: 'Transformers step up or step down AC voltage. Ideal ratio: Vs/Vp = Ns/Np. Efficiency is eta = Output/Input.'
    }
  ],
  key_patterns: [
    'RMS and peak conversion between I0, Irms, V0, and Vrms.',
    'Reactance numericals using XL = omegaL and XC = 1/(omegaC).',
    'Impedance calculations in LCR using Z = sqrt(R^2 + (XL - XC)^2).',
    'Power and power-factor questions using P = VIcos(phi).',
    'Resonance frequency and current-max condition questions.',
    'Phase relation checks for resistor, inductor, and capacitor.',
    'Transformer turns ratio and voltage ratio based problems.'
  ],
  formulas_relations: [
    {
      formula: 'I = I0 sin(omega t)',
      meaning: 'Instantaneous AC current expression.'
    },
    {
      formula: 'Irms = I0/sqrt(2), Vrms = V0/sqrt(2)',
      meaning: 'RMS values of sinusoidal AC current and voltage.'
    },
    {
      formula: 'Iavg = 2I0/pi',
      meaning: 'Average current over half cycle.'
    },
    {
      formula: 'XL = omegaL, XC = 1/(omegaC)',
      meaning: 'Inductive and capacitive reactance.'
    },
    {
      formula: 'Z = sqrt(R^2 + (XL - XC)^2)',
      meaning: 'Impedance of series LCR circuit.'
    },
    {
      formula: 'I = V/Z',
      meaning: 'Current in AC circuit.'
    },
    {
      formula: 'P = Vrms Irms cos(phi)',
      meaning: 'Average power in AC circuit.'
    },
    {
      formula: 'cos(phi) = R/Z',
      meaning: 'Power factor relation.'
    },
    {
      formula: 'f = 1/(2pi*sqrt(LC))',
      meaning: 'Resonant frequency of LCR circuit.'
    },
    {
      formula: 'Vs/Vp = Ns/Np',
      meaning: 'Transformer voltage-turn ratio.'
    }
  ],
  application_insights: [
    'High weightage NEET chapter dominated by direct formula-based asks.',
    'Most frequent asks are RMS values, impedance, and resonance.',
    'Phase relation between current and voltage often decides the final option.',
    'Power-factor concepts are commonly mixed with impedance questions.',
    'Always convert frequency to angular frequency using omega = 2pi f when needed.'
  ],
  common_mistakes: [
    {
      mistake: 'Confusing RMS with peak value',
      why: 'Irms and Vrms are lower by a factor sqrt(2) than peak values.'
    },
    {
      mistake: 'Forgetting phase differences in R, L, and C',
      why: 'Sign and phase mistakes change both power and circuit behavior.'
    },
    {
      mistake: 'Mixing XL and XC formulas',
      why: 'XL is proportional to omega, while XC is inversely proportional to omega.'
    },
    {
      mistake: 'Using wrong impedance expression',
      why: 'In LCR series, reactances are subtracted before squaring: (XL - XC).' 
    },
    {
      mistake: 'Using f directly where omega is required',
      why: 'Many equations use omega = 2pi f, not frequency alone.'
    }
  ],
  quick_revision: [
    'I = I0 sin(omega t).',
    'Irms = I0/sqrt(2), Vrms = V0/sqrt(2).',
    'Iavg (half cycle) = 2I0/pi.',
    'In R: V and I are in phase.',
    'In L: V leads I by 90 deg, XL = omegaL.',
    'In C: I leads V by 90 deg, XC = 1/(omegaC).',
    'Z = sqrt(R^2 + (XL - XC)^2), I = V/Z.',
    'P = Vrms Irms cos(phi), cos(phi) = R/Z.',
    'Resonance: XL = XC, Z = R, current maximum.',
    'f0 = 1/(2pi*sqrt(LC)), transformer: Vs/Vp = Ns/Np.'
  ],
  quiz: [
    {
      question: 'For sinusoidal AC current, RMS value Irms is related to peak current I0 as:',
      options: ['Irms = I0', 'Irms = I0/sqrt(2)', 'Irms = sqrt(2)I0', 'Irms = I0/2'],
      correctAnswer: 1,
      explanation: 'For sinusoidal AC, Irms = I0/sqrt(2).'
    },
    {
      question: 'Inductive reactance is given by:',
      options: ['XL = 1/(omegaL)', 'XL = omegaL', 'XL = 1/(omegaC)', 'XL = R/omega'],
      correctAnswer: 1,
      explanation: 'Inductive reactance is directly proportional to angular frequency: XL = omegaL.'
    },
    {
      question: 'At resonance in a series LCR circuit, which is correct?',
      options: ['XL > XC', 'XC > XL', 'XL = XC and Z = R', 'Z is maximum'],
      correctAnswer: 2,
      explanation: 'At resonance, XL equals XC, net reactance is zero, and impedance becomes minimum equal to R.'
    },
    {
      question: 'Average power in AC circuit is:',
      options: ['P = VI', 'P = Vrms Irms cos(phi)', 'P = I^2Z', 'P = V^2/Z^2'],
      correctAnswer: 1,
      explanation: 'Average AC power is P = Vrms Irms cos(phi).'
    },
    {
      question: 'For an ideal transformer, voltage ratio is related to turns ratio as:',
      options: ['Vs/Vp = Np/Ns', 'Vs/Vp = Ns/Np', 'VsVp = Ns/Np', 'Vs/Vp = R'],
      correctAnswer: 1,
      explanation: 'In ideal transformer, Vs/Vp equals Ns/Np.'
    }
  ]
};

export default {
  id: 'phy-u15',
  name: 'Unit 15: Alternating Current (AC)',
  chapters: [alternatingCurrent],
};
