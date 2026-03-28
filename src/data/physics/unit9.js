// Physics — Unit 9: Kinetic Theory of Gases

const ktg = {
  id: 'kinetic-theory',
  title: 'Chapter 9: Kinetic Theory of Gases',
  notes: [
    {
      concept: 'Assumptions: Ideal gas molecules are perfectly elastic, point-mass spheres. Intermolecular force is zero. Volume of gas molecules is negligible compared to container. Collisions are perfectly elastic and instantaneous.',
      fact: 'Vrms = sqrt(3RT/M) = sqrt(3kT/m). Vavg = sqrt(8RT/πM). Vmp = sqrt(2RT/M). Ratio: Vrms > Vavg > Vmp.',
      tip: 'Remember that absolute temperature is a measure of the average translational kinetic energy per molecule (E = 3/2 kT, where k is Boltzmann constant = 1.38 x 10⁻²³ J/K).',
    },
    {
      concept: 'Equation of State: PV = nRT or PV = NkT; R = Gas constant = 8.314 J/(mol K). n = Number of moles, N = number of molecules.',
      fact: 'Boyle\'s Law: P ∝ 1/V (at const T). Charles\' Law: V ∝ T (at const P). Gay-Lussac\'s Law: P ∝ T (at const V).',
      tip: 'Dalton\'s law of partial pressures: P_total = P1 + P2 + ... (for non-reacting gases in a mixture).',
    },
    {
      concept: 'Pressure of a Gas: P = 1/3 ρ Vrms². According to kinetic interpretation, pressure arises due to the continuous bombardment of gas molecules on the walls.',
      fact: 'The pressure exerted is directly proportional to both the kinetic energy per unit volume (P = 2/3 E_density).',
      tip: 'Do not confuse pressure with force. Force is rate of change of momentum of molecules striking the wall.',
    },
    {
      concept: 'Degrees of Freedom (f): Independent ways a molecule can possess energy. Monoatomic (He, Ne) = 3 (translational). Diatomic (O2, N2) = 5 (3 trans + 2 rot) at room temp. Polyatomic (non-linear) = 6.',
      fact: 'At very high temperatures, vibrational degrees of freedom activate (adds 2 for diatomic molecules).',
      tip: 'Law of equipartition of energy: Energy associated with each degree of freedom per molecule is ½ kT. Total energy = f × ½ kT.',
    },
    {
      concept: 'Specific Heats: Molar specific heat at constant volume (Cv) = f/2 R. Molar specific heat at constant pressure (Cp) = (1 + f/2) R.',
      fact: 'Mayer\'s formula: Cp - Cv = R. Ratio of specific heats γ = Cp/Cv = 1 + 2/f.',
      tip: 'Mean Free Path (λ): Average distance a molecule travels between two successive collisions. λ = 1 / (sqrt(2) π d² n), where d is diameter and n is number density (N/V). Higher pressure/density means smaller mean free path.',
    },
  ],
  quiz: [
    {
      question: 'Which of the following describes the relationship between Vrms, Vavg, and Vmp of gas molecules?',
      options: ['Vrms > Vavg > Vmp', 'Vrms < Vavg < Vmp', 'Vrms = Vavg = Vmp', 'Vavg > Vrms > Vmp'],
      correctAnswer: 0,
      explanation: 'Vrms = sqrt(3k_T/m) ≈ 1.732 sqrt(kT/m). Vavg = sqrt(8k_T/πm) ≈ 1.59 sqrt(kT/m). Vmp = sqrt(2k_T/m) ≈ 1.414 sqrt(kT/m). Since 1.732 > 1.59 > 1.414, Vrms > Vavg > Vmp.',
    },
    {
      question: 'For a given ideal gas of total mass m enclosed in a vessel of volume V, the pressure formula P = 1/3 ρ Vrms² indicates that pressure depends on:',
      options: ['Only the number of molecules', 'Only the temperature of the gas', 'The density and root mean square velocity squared of the gas', 'The total volume only'],
      correctAnswer: 2,
      explanation: 'According to the formula P = 1/3 ρ Vrms², the pressure exerted by the gas depends on its density ρ (m/V) and the square of its root-mean-square velocity.',
    },
    {
      question: 'What is the sum of translational kinetic energy of 1 mole of an oxygen gas (O2) at temperature T?',
      options: ['3/2 RT', '5/2 RT', '3/2 kT', '5/2 kT'],
      correctAnswer: 0,
      explanation: 'Regardless of the type of gas, the translational kinetic energy for 1 mole is ALWAYS 3/2 RT. (The total energy for diatomic would be 5/2 RT, which includes 2 rotational degrees).',
    },
    {
      question: 'If the pressure of a given mass of gas is doubled and its absolute temperature is halved, its volume will:',
      options: ['Double', 'Halve', 'Become one-fourth', 'Become four times'],
      correctAnswer: 2,
      explanation: 'From PV/T = PV\'/T\', V\' = V(P/P\')(T\'/T) = V(1/2)(1/2) = V/4.',
    },
    {
      question: 'If the diameter (d) of gas molecules is doubled, what happens to the mean free path?',
      options: ['Remains the same', 'Becomes slightly smaller', 'Becomes half', 'Becomes one-fourth'],
      correctAnswer: 3,
      explanation: 'Mean free path λ is inversely proportional to d² (cross-sectional area). If d is doubled, d² becomes 4 times. So λ becomes 1/4 of its initial value.',
    },
  ],
};

export default {
  id: 'phy-u9',
  name: 'Unit 9: Kinetic Theory of Gases',
  chapters: [ktg],
};
