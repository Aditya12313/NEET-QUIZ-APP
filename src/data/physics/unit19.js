// Physics — Unit 19: Electronic Devices

const electronicDevices = {
  id: 'electronic-devices',
  title: 'Chapter 19: Electronic Devices',
  notes: [
    {
      concept: 'Semiconductors: Band gap (Eg) < 3 eV. Intrinsic carriers (pure Si, Ge), holes and electrons are equal, ni = p = n. Extrinsic depends on doping. N-type (Group 15: P, As, Sb - pentavalent), majority carriers are electrons. P-type (Group 13: B, Al, In - trivalent), majority carriers are holes.',
      fact: 'Mass Action Law: Even in extrinsic semiconductor, n_e * n_h = n_i² (at thermal equilibrium).',
      tip: 'The mobility of electrons is always slightly GREATER than mobility of holes in semiconductors, making N-type conductivity generally better than P-type.',
    },
    {
      concept: 'P-N Junction: Diffusion of majorities creates a Depletion Region devoid of free carriers. This uncovers immobile ions (+ve on N side, -ve on P side) creating a Barrier Potential (0.7V for Si, 0.3V for Ge).',
      fact: 'Forward Bias: P connected to positive, N to negative. Reduces barrier height, depletion width decreases, allows continuous current due to majorities.',
      tip: 'Reverse Bias: P connected to negative. Increases barrier height, depletion region widens, minimal current flows only due to minority carriers (Reverse saturation current).',
    },
    {
      concept: 'Rectifier (Diode Application): Converts AC to DC. Half-wave rectifier uses 1 diode. Full-wave rectifier uses 2 (center-tap) or 4 (bridge). Output DC frequency for HW is f, for FW is 2f.',
      fact: 'To get steady DC output, we use filter circuits (like capacitors in parallel to load) which suppress the ripple (AC component).',
      tip: 'Zener Diode: Heavily doped p-n junction operating in Reverse Breakdown region. Voltage across it remains remarkably constant even if current varies widely. Used as Voltage Regulator.',
    },
    {
      concept: 'Optoelectronic Devices: LED (Forward Biased): Electron-hole recombination at junction releases photon. Emitted energy hν ≈ Eg. Photodiode (Reverse Biased): Incident light (hν > Eg) breaks bonds, creating pairs, increasing reverse current. Highly sensitive to light.',
      fact: 'Solar Cell (Works unbiased): An active p-n junction generating EMF when light falls on it. Photons create electron-hole pairs separated by built-in field.',
      tip: 'Why photodiode in reverse bias? Fractional change in minority carriers is easily measurable, while fraction change in majorities in forward bias is too small to detect steadily.',
    },
    {
      concept: 'Logic Gates: Digital circuits with defined boolean algebra. NOT (Inverter), OR (A+B, any 1 gives 1), AND (A.B, both 1 give 1).',
      fact: 'NAND (NOT AND) and NOR (NOT OR) are Universal Gates, because you can build ANY other logic gate using only combinations of NANDs or only NORs.',
      tip: 'De Morgan\'s Theorems: (A + B)\' = A\' . B\' and (A . B)\' = A\' + B\'. Super useful for evaluating complex logic gate circuits in exams.',
    },
  ],
  quiz: [
    {
      question: 'Which of the following describes a p-type semiconductor?',
      options: ['It is positively charged overall', 'It is negatively charged overall', 'It is electrically neutral', 'It becomes a superconductor at absolute zero'],
      correctAnswer: 2,
      explanation: 'A p-type semiconductor is formed by doping pure Si/Ge with a neutral trivalent atom (like Boron). Since the dopant atom is electrically neutral and the Si crystal is neutral, the resulting semiconductor is electrically neutral overall (holes just mean "absence of an electron in a bond", not a net positive charge of the material).',
    },
    {
      question: 'In a half-wave rectifier circuit operating from 50 Hz mains frequency, the fundamental frequency in the ripple would be:',
      options: ['25 Hz', '50 Hz', '100 Hz', '0 Hz'],
      correctAnswer: 1,
      explanation: 'For a half-wave rectifier, the fundamental frequency of the output ripple matches the input AC frequency which is 50 Hz. For a full-wave rectifier, it is double (100 Hz).',
    },
    {
      question: 'A Zener diode, having breakdown voltage equal to 15V, is used in a voltage regulator circuit. To function effectively, it must be:',
      options: ['Forward biased', 'Reverse biased', 'Unbiased', 'Connected in series with the load'],
      correctAnswer: 1,
      explanation: 'A Zener diode is specifically designed to operate safely in the reverse breakdown region. When reverse biased past its Zener voltage, it acts as a very stable voltage reference/regulator in parallel with the load.',
    },
    {
      question: 'The logic gate that produces a HIGH output ONLY when both of its inputs are HIGH is the:',
      options: ['OR gate', 'NAND gate', 'AND gate', 'NOR gate'],
      correctAnswer: 2,
      explanation: 'The AND gate performs logical multiplication. Y = A.B. Thus, Y=1 (HIGH) if and only if A=1 AND B=1.',
    },
    {
      question: 'Which device is specifically operated under reverse bias to detect optical signals?',
      options: ['Light Emitting Diode (LED)', 'Photodiode', 'Solar Cell', 'Zener Diode'],
      correctAnswer: 1,
      explanation: 'A photodiode is operated under reverse bias because the fractional change in reverse current (which results strictly from minority carriers generated by incident photons) is highly sensitive and directly proportional to light intensity.',
    },
  ],
};

export default {
  id: 'phy-u19',
  name: 'Unit 19: Electronic Devices',
  chapters: [electronicDevices],
};
