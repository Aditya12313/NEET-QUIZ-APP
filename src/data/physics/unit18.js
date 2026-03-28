// Physics — Unit 18: Atoms and Nuclei

const atomsNuclei = {
  id: 'atoms-nuclei',
  title: 'Chapter 18: Atoms and Nuclei',
  notes: [
    {
      concept: 'Rutherford\'s Model: Based on Alpha-particle scattering. Discoveries: Most of atom is empty space. Positive charge is concentrated at a tiny, dense core (nucleus) where mass is (~10^-15 m wide). Electron rapidly orbits the nucleus.',
      fact: 'Flaw: According to classical electromagnetism, an accelerating charge (electron orbiting) MUST radiate energy, meaning it would spiral into the nucleus within 10^-8 s.',
      tip: 'Distance of closest approach (r0) = 2kZe² / (½mv²). It estimates the size of the atomic nucleus.',
    },
    {
      concept: 'Bohr\'s Model (Hydrogen-like species): Postulates: 1. Electrons orbit in stationary, non-radiating states. 2. Angular momentum is quantized: L = mvr = nh/2π. 3. Energy radiated only when dropping orbit: hν = E_i - E_f.',
      fact: 'Radius of nth orbit: r_n = 0.529 * (n²/Z) Angstroms. Energy of electron: E_n = -13.6 * (Z²/n²) eV. Velocity v_n ∝ Z/n.',
      tip: 'As n increases, absolute energy increases (becomes less negative), but the energy DIFFERENCES between subsequent levels DECREASE.',
    },
    {
      concept: 'Hydrogen Spectrum: Originates from electron transitions. Lyman (n→1, UV), Balmer (n→2, Visible), Paschen (n→3, IR), Brackett (n→4, IR), Pfund (n→5, IR).',
      fact: 'Rydberg Formula: 1/λ = R * Z² * (1/n1² - 1/n2²). Rydberg constant R ≈ 1.097 × 10^7 m⁻¹.',
      tip: 'Max wavelength means smallest energy transition (e.g. Balmer: n=3 to n=2). Min wavelength means largest transition (e.g. Balmer: n=∞ to n=2).',
    },
    {
      concept: 'The Nucleus: Composition: Protons (Z) and Neutrons (N). Mass number A = Z + N. Size of nucleus r = R0 * A^(1/3), where R0 = 1.2 fm (1.2 x 10^-15m). Therefore, nuclear density is CONSTANT for all stable atoms (~2.3 x 10^17 kg/m³).',
      fact: 'Mass defect (Δm) = (Z*mp + N*mn) - M_nucleus. This missing mass is converted to Binding Energy holding the nucleus together.',
      tip: 'Binding Energy (B.E.) = Δm * c². Expressed in MeV, 1 amu of mass defect = 931.5 MeV.',
    },
    {
      concept: 'Binding Energy Curve & Nuclear Reactions: B.E. per nucleon determines stability. Maximum stability around Iron (Fe-56, 8.8 MeV per nucleon).',
      fact: 'Nuclear Fission: Heavy nuclei (A > 170) break apart into lighter ones. Used in nuclear reactors (U-235).',
      tip: 'Nuclear Fusion: Light nuclei (A < 30) combine into a heavier one, releasing huge energy. Energy source of stars (H + H → He). Requires extreme high temperature to overcome Coulomb repulsion (thermonuclear).',
    },
  ],
  quiz: [
    {
      question: 'Which of the spectral series of the hydrogen atom lies entirely in the visible region of the electromagnetic spectrum?',
      options: ['Lyman series', 'Balmer series', 'Paschen series', 'Brackett series'],
      correctAnswer: 1,
      explanation: 'The Balmer series involves transitions from higher energy levels down to n=2, emitting photons with wavelengths mostly clustered in the visible light range (approx. 400 nm - 700 nm).',
    },
    {
      question: 'According to Bohr\'s theory, the energy of an electron in the nth orbit of an H-atom is proportional to:',
      options: ['n', 'n²', '1 / n', '1 / n²'],
      correctAnswer: 3,
      explanation: 'The total energy of an electron in a hydrogen-like atom is given by E_n = -13.6 Z² / n² eV. Therefore, Energy (E) is proportional to 1/n².',
    },
    {
      question: 'As the mass number (A) of a nucleus increases, its nuclear density:',
      options: ['Increases', 'Decreases', 'Remains roughly constant', 'Increases and then decreases'],
      correctAnswer: 2,
      explanation: 'Nuclear radius R = R0 A^(1/3). Volume = 4/3 π R³ = 4/3 π (R0³ A). Since mass of nucleus M ≈ A × (mass of nucleon), Density = Mass/Volume ≈ (A * m) / (4/3 π R0³ A) = m / (4/3 π R0³). Note that A cancels out! Hence, nuclear density is constant.',
    },
    {
      question: 'The binding energy per nucleon is maximum for which of the following elements?',
      options: ['Helium ($^4_2$He)', 'Iron ($^{56}_{26}$Fe)', 'Uranium ($^{235}_{92}$U)', 'Oxygen ($^{16}_8$O)'],
      correctAnswer: 1,
      explanation: 'On the binding energy per nucleon curve, the peak occurs roughly around mass number A=56. Therefore, Iron ($^{56}_{26}$Fe) is the most tightly bound and stable nucleus (approx 8.8 MeV/nucleon).',
    },
    {
      question: 'In the Rutherford scattering experiment, the ratio of the thickness of gold foil to the distance of closest approach for an alpha particle is typically of the order of:',
      options: ['10^0', '10^2', '10^4', '10^8'],
      correctAnswer: 2,
      explanation: 'Thickness of gold foil is typically ~10^-7 m. Distance of closest approach is ~10^-14 m to 10^-11 m depending on the alpha particle KE. Ratio ~ 10^-7 / 10^-11 = 10^4. Most important to know is the extreme scales involved!',
    },
  ],
};

export default {
  id: 'phy-u18',
  name: 'Unit 18: Atoms and Nuclei',
  chapters: [atomsNuclei],
};
