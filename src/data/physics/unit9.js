// Physics — Unit 9: Kinetic Theory of Gases

const kineticTheory = {
  id: 'ktg',
  title: 'Chapter 13: Kinetic Theory of Gases',
  notes: [
    {
      concept: 'Ideal Gas Assumptions & Pressure',
      fact: 'Molecules are point masses in random motion. Collisions are perfectly elastic. No intermolecular force except during collision. Pressure P = (1/3)(N/V)mc² = (1/3)ρc².',
      tip: 'Remember that Ideal gas ≠ Real gas. In ideal gases, we assume NO intermolecular forces, meaning internal energy is 100% kinetic!'
    },
    {
      concept: 'Speeds of Gas Molecules',
      fact: 'v_rms = √(3kT/m) = √(3RT/M). v_avg = √(8RT/πM). v_mp = √(2RT/M). Relation: v_rms > v_avg > v_mp.',
      tip: 'A very common trap is confusing V_rms with V_avg, and mixing up molecular mass (m) with molar mass (M) in formulas. T MUST be in Kelvin.'
    },
    {
      concept: 'Degrees of Freedom (f)',
      fact: 'Number of independent motions. Monoatomic gas f=3. Diatomic gas f=5 (at room temp). Polyatomic gas f=6.',
      tip: 'If high temperature is mentioned for diatomic gas, vibrational modes become active resulting in f=7. Watch out for the specific gas type!'
    },
    {
      concept: 'Equipartition of Energy & Total Energy',
      fact: 'Energy is equally distributed among all degrees of freedom. Energy per molecule per degree of freedom = 1/2 kT. Total Energy E = (f/2)kT (per molecule) or (f/2)RT (per mole).',
      tip: 'Be careful! Is it asking for energy per mole, per molecule, or per gram?'
    },
    {
      concept: 'Specific Heat Ratio (γ) & Mean Free Path',
      fact: 'γ = Cp/Cv = 1 + (2/f). Mean free path λ = 1 / (√2 π d² n), where d is diameter and n is number density.',
      tip: 'For monoatomic γ = 1.67, diatomic γ = 1.4. Mean free path is inversely proportional to pressure (λ ∝ T/P).'
    }
  ],
  quiz: [
    {
      question: 'The root mean square (rms) speed of oxygen molecules (O2) at a certain temperature T is v. If the temperature is doubled and oxygen gas dissociates into atomic oxygen, the rms speed becomes:',
      options: ['v', '2v', '√2 v', 'v/2'],
      correctAnswer: 1,
      explanation: 'v_rms = √(3RT/M). Initially M is 32. Finally, T becomes 2T and M becomes 16 (atomic oxygen). New v_rms = √(3R(2T)/(M/2)) = √(4 * 3RT/M) = 2v.'
    },
    {
      question: 'Which of the following relations between rms speed (v_rms), average speed (v_avg), and most probable speed (v_mp) is correct for a given gas at a constant temperature?',
      options: ['v_rms < v_avg < v_mp', 'v_rms > v_avg > v_mp', 'v_mp > v_rms > v_avg', 'v_avg > v_rms > v_mp'],
      correctAnswer: 1,
      explanation: 'v_rms = √(3RT/M) ≈ 1.73√(RT/M), v_avg = √(8RT/πM) ≈ 1.60√(RT/M), v_mp = √(2RT/M) ≈ 1.41√(RT/M). So, v_rms > v_avg > v_mp.'
    },
    {
      question: 'For a diatomic gas at room temperature, the ratio of specific heats γ (Cp/Cv) is:',
      options: ['1.67', '1.40', '1.33', '1.28'],
      correctAnswer: 1,
      explanation: 'At room temperature, a diatomic gas has 5 degrees of freedom (f=5). γ = 1 + (2/f) = 1 + 2/5 = 7/5 = 1.40.'
    },
    {
      question: 'According to the equipartition theorem, the average kinetic energy associated with each degree of freedom per molecule of an ideal gas is:',
      options: ['kT', '1/2 kT', '3/2 kT', '3/2 RT'],
      correctAnswer: 1,
      explanation: 'The law of equipartition of energy states that for a dynamic system in thermal equilibrium, the total energy is distributed equally among all degrees of freedom, and the energy associated with each is 1/2 kT.'
    },
    {
      question: 'The mean free path of gas molecules depends on the number density (n) and the diameter of the molecule (d) as:',
      options: ['λ ∝ n/d²', 'λ ∝ 1/(n * d²)', 'λ ∝ 1/(n * d)', 'λ ∝ n * d²'],
      correctAnswer: 1,
      explanation: 'The mean free path is given by λ = 1 / (√2 π d² n). Hence it is inversely proportional to both number density (n) and the square of molecular diameter (d²).'
    }
  ]
};

export default {
  id: 'phy-u9',
  name: 'Unit 9: Kinetic Theory of Gases',
  chapters: [kineticTheory],
};
