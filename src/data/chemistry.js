export const chemistrySubject = {
  id: 'chemistry',
  name: 'Chemistry',
  units: [
    {
      id: 'chem-physical',
      name: 'Physical Chemistry',
      chapters: [
        {
          id: 'basic-concepts',
          title: 'Unit 1: Some Basic Concepts in Chemistry',
          concept_explanations: [
            {
              title: 'Matter',
              description: 'Anything that has mass and occupies space. Common states are solid, liquid, and gas.'
            },
            {
              title: 'Laws of Chemical Combination',
              description: 'Conservation of mass: mass is neither created nor destroyed. Definite proportions: elements combine in fixed ratio. Multiple proportions: mass ratios are simple whole numbers.'
            },
            {
              title: 'Dalton Atomic Theory',
              description: 'Matter is made of atoms, atoms combine in fixed ratios to form compounds, and atoms of different elements differ in mass and properties.'
            },
            {
              title: 'Atom, Molecule, Element, Compound',
              description: 'Atom is smallest unit of element, molecule is group of atoms, element has same type of atoms, compound has different atoms chemically combined.'
            },
            {
              title: 'Mole Concept and Molar Mass',
              description: '1 mole contains 6.022 x 10^23 particles. Mole relation: n = given mass/molar mass. Molar mass is mass of one mole of substance.'
            },
            {
              title: 'Percentage Composition, Empirical and Molecular Formula',
              description: 'Percentage composition uses mass fraction x 100. Empirical formula is simplest whole-number ratio. Molecular formula = (Empirical formula)^n.'
            },
            {
              title: 'Stoichiometry and Chemical Equations',
              description: 'Stoichiometry gives quantitative relationships in reactions. Balanced equations are required for correct mole and mass calculations.'
            }
          ],
          key_patterns: [
            'Mole concept numericals using n = m/M and Avogadro relation.',
            'Percentage composition and element-mass extraction from compounds.',
            'Empirical formula problems from mass or percentage data.',
            'Molecular formula determination using molar mass and empirical formula mass.',
            'Stoichiometric calculations from balanced equations.',
            'Limiting-reagent identification in multi-reactant problems.',
            'Direct theory asks on laws of chemical combination.'
          ],
          formulas_relations: [
            {
              formula: '1 mole = 6.022 x 10^23 particles',
              meaning: 'Avogadro number relation.'
            },
            {
              formula: 'n = m/M',
              meaning: 'Moles from given mass and molar mass.'
            },
            {
              formula: 'Percentage composition = (mass of element/total mass) x 100',
              meaning: 'Mass-percent composition formula.'
            },
            {
              formula: 'Molecular formula = (Empirical formula)^n',
              meaning: 'n = molecular mass/empirical formula mass.'
            }
          ],
          application_insights: [
            'Very high-weightage chemistry chapter in NEET with heavy numerical focus.',
            'Most frequent asks: mole concept, stoichiometry, empirical/molecular formula.',
            'Many questions are solved quickly by converting everything to moles first.',
            'Limiting reagent often decides final product amount in reaction numericals.',
            'Balanced equation coefficients directly map mole ratios.'
          ],
          common_mistakes: [
            {
              mistake: 'Forgetting Avogadro number in particle-mole conversion',
              why: 'Particle count, moles, and mass are frequently interlinked in one question.'
            },
            {
              mistake: 'Wrong unit conversion between gram and mole',
              why: 'Mass must be converted using molar mass before using stoichiometric ratios.'
            },
            {
              mistake: 'Error in empirical formula ratio simplification',
              why: 'Ratios must be converted to nearest whole numbers carefully.'
            },
            {
              mistake: 'Ignoring limiting reagent',
              why: 'Using non-limiting reactant gives overestimated product amount.'
            },
            {
              mistake: 'Using unbalanced equation for calculations',
              why: 'Mole relationships are valid only for balanced chemical equations.'
            }
          ],
          quick_revision: [
            'Matter has mass and occupies space.',
            'Conservation of mass, definite proportions, and multiple proportions are core laws.',
            'Atom, molecule, element, and compound definitions are fundamental.',
            '1 mole = 6.022 x 10^23 particles.',
            'n = m/M is the most-used relation.',
            'Percentage composition formula uses mass fraction x 100.',
            'Empirical formula gives simplest ratio; molecular formula uses integer multiple.',
            'Always balance equation before stoichiometric calculation.',
            'Check limiting reagent in reactions with multiple reactants.',
            'Molar mass and molecular mass are related but not interchangeable blindly.'
          ],
          quiz: [
            {
              question: 'Number of particles in 1 mole is:',
              options: ['6.022 x 10^20', '6.022 x 10^23', '3.011 x 10^23', '1.204 x 10^24'],
              correctAnswer: 1,
              explanation: 'One mole contains Avogadro number of particles: 6.022 x 10^23.'
            },
            {
              question: 'Mole relation connecting mass and molar mass is:',
              options: ['n = M/m', 'n = m+M', 'n = m/M', 'n = m x M'],
              correctAnswer: 2,
              explanation: 'Moles are calculated using n = mass/molar mass.'
            },
            {
              question: 'Law of definite proportions states that:',
              options: ['Mass is always destroyed', 'Elements combine in variable ratio', 'Elements combine in fixed mass ratio', 'Atoms are infinitely divisible'],
              correctAnswer: 2,
              explanation: 'A compound always contains elements in fixed mass ratio.'
            },
            {
              question: 'Empirical formula represents:',
              options: ['Actual number of atoms', 'Simplest whole-number ratio of atoms', 'Molecular mass only', 'Molar volume'],
              correctAnswer: 1,
              explanation: 'Empirical formula gives the simplest integer ratio of constituent atoms.'
            },
            {
              question: 'For stoichiometric calculation, first mandatory step is:',
              options: ['Guess product', 'Balance chemical equation', 'Find density', 'Convert to Celsius'],
              correctAnswer: 1,
              explanation: 'Stoichiometric mole ratios come from balanced equations.'
            }
          ]
        },
        {
          id: 'atomic-structure-chem',
          title: 'Unit 2: Atomic Structure',
          concept_explanations: [
            {
              title: 'Nature of Electromagnetic Radiation',
              description: 'Light has wave nature characterized by wavelength (lambda) and frequency (nu) with relation c = lambda x nu.'
            },
            {
              title: 'Planck Quantum Theory and Photoelectric Effect',
              description: 'Energy is emitted or absorbed in quanta: E = h x nu. Photoelectric emission depends on frequency of light above threshold, not only on intensity.'
            },
            {
              title: 'Hydrogen Spectrum',
              description: 'Hydrogen shows discrete line spectrum with major series: Lyman (UV), Balmer (visible), and Paschen (IR).'
            },
            {
              title: 'Bohr Atomic Model',
              description: 'Electrons move in stationary orbits without radiation. Orbit radius increases with n^2 and energy of nth orbit is En = -13.6/n^2 eV for hydrogen-like species.'
            },
            {
              title: 'Dual Nature and Uncertainty Principle',
              description: 'Matter particles show wave behavior with de Broglie relation lambda = h/mv. Exact position and momentum cannot be measured simultaneously: Delta x x Delta p >= h/4pi.'
            },
            {
              title: 'Quantum Mechanical Model',
              description: 'Electron is described by wave function psi, and probability density is proportional to psi^2.'
            },
            {
              title: 'Quantum Numbers and Orbitals',
              description: 'n gives shell, l gives subshell shape, m gives orientation, and spin quantum number gives electron spin. Orbital shapes include s (spherical), p (dumbbell), and d (complex).'
            },
            {
              title: 'Electronic Configuration and Stability',
              description: 'Aufbau principle, Pauli exclusion, and Hund rule govern filling. Half-filled and fully-filled subshells have extra stability.'
            }
          ],
          key_patterns: [
            'Direct use of c = lambda x nu and E = h x nu in radiation-based numericals.',
            'Bohr model energy and transition problems for hydrogen-like atoms.',
            'Hydrogen spectral series identification (Lyman/Balmer/Paschen).',
            'de Broglie wavelength calculations for particles.',
            'Allowed quantum-number combinations and invalid set elimination.',
            'Electronic configuration using Aufbau, Pauli, and Hund principles.',
            'Conceptual difference between orbit and orbital.'
          ],
          formulas_relations: [
            {
              formula: 'c = lambda x nu',
              meaning: 'Wave relation connecting speed of light, wavelength, and frequency.'
            },
            {
              formula: 'E = h x nu',
              meaning: 'Planck equation for quantized radiation energy.'
            },
            {
              formula: 'En = -13.6/n^2 eV',
              meaning: 'Energy of nth Bohr orbit for hydrogen-like atoms.'
            },
            {
              formula: 'Delta E = h x nu',
              meaning: 'Energy difference in transitions equals photon energy.'
            },
            {
              formula: 'lambda = h/mv',
              meaning: 'de Broglie wavelength for moving particle.'
            },
            {
              formula: 'Delta x x Delta p >= h/4pi',
              meaning: 'Heisenberg uncertainty principle.'
            }
          ],
          application_insights: [
            'Atomic Structure is a very high-weightage NEET chapter mixing formulas and concepts.',
            'Most repeated areas: Bohr energy levels, quantum numbers, and electronic configuration.',
            'Spectral-series and transition-energy questions often require unit consistency.',
            'Photoelectric-effect questions focus on threshold frequency logic.',
            'Many MCQs test conceptual clarity between orbit, orbital, and probability density.'
          ],
          common_mistakes: [
            {
              mistake: 'Mixing wavelength and frequency trends',
              why: 'Since c is constant, wavelength and frequency are inversely related.'
            },
            {
              mistake: 'Forgetting negative sign in Bohr energy',
              why: 'Bound-state energies are negative; wrong sign gives incorrect transition results.'
            },
            {
              mistake: 'Using invalid quantum-number values',
              why: 'For given n, l ranges 0 to n-1 and m ranges -l to +l.'
            },
            {
              mistake: 'Incorrect electron filling order',
              why: 'Aufbau energy order and Hund rule must both be satisfied.'
            },
            {
              mistake: 'Confusing orbit with orbital',
              why: 'Orbit is Bohr path concept; orbital is a quantum probability region.'
            }
          ],
          quick_revision: [
            'c = lambda x nu and E = h x nu are core radiation formulas.',
            'Photoelectric effect depends strongly on frequency (threshold concept).',
            'Hydrogen series: Lyman-UV, Balmer-visible, Paschen-IR.',
            'Bohr orbit radius increases with n^2.',
            'Bohr energy: En = -13.6/n^2 eV for hydrogen-like species.',
            'de Broglie equation: lambda = h/mv.',
            'Heisenberg principle limits simultaneous precision of position and momentum.',
            'Quantum numbers: n, l, m, spin define electron state.',
            's orbital spherical, p dumbbell, d more complex.',
            'Apply Aufbau, Pauli, and Hund for electronic configuration.'
          ],
          quiz: [
            {
              question: 'Correct relation between wavelength and frequency of light is:',
              options: ['c = lambda + nu', 'c = lambda/nu', 'c = lambda x nu', 'nu = c x lambda^2'],
              correctAnswer: 2,
              explanation: 'Wave relation for light is c = lambda x nu.'
            },
            {
              question: 'Planck quantum equation is:',
              options: ['E = mc^2', 'E = h x nu', 'E = h/nu', 'E = nu/h'],
              correctAnswer: 1,
              explanation: 'Radiation quantum energy is given by E = h x nu.'
            },
            {
              question: 'In hydrogen atom, Balmer series lies in:',
              options: ['UV region', 'Visible region', 'IR region', 'X-ray region'],
              correctAnswer: 1,
              explanation: 'Balmer lines are observed in visible region.'
            },
            {
              question: 'Bohr energy of n = 2 orbit (hydrogen atom) is:',
              options: ['-13.6 eV', '-3.4 eV', '-6.8 eV', '+3.4 eV'],
              correctAnswer: 1,
              explanation: 'En = -13.6/n^2 = -13.6/4 = -3.4 eV.'
            },
            {
              question: 'de Broglie wavelength is given by:',
              options: ['lambda = mv/h', 'lambda = h/mv', 'lambda = hv/m', 'lambda = h x mv'],
              correctAnswer: 1,
              explanation: 'For a moving particle, lambda = h/mv.'
            }
          ]
        },
        {
          id: 'chemical-bonding-chem',
          title: 'Unit 3: Chemical Bonding and Molecular Structure',
          concept_explanations: [
            {
              title: 'Kossel-Lewis Approach',
              description: 'Atoms combine to achieve stable octet configuration; this idea forms the basis of ionic and covalent bonding.'
            },
            {
              title: 'Ionic Bond and Lattice Energy',
              description: 'Ionic bond forms by electron transfer from metal to non-metal. Lattice energy is released when ionic solid forms; higher lattice energy indicates greater stability.'
            },
            {
              title: 'Factors Affecting Ionic Bond',
              description: 'Magnitude of ionic charge and ionic size strongly control ionic interaction strength.'
            },
            {
              title: 'Covalent Bond, Electronegativity and Fajan Rule',
              description: 'Covalent bond forms by sharing electrons. Electronegativity difference influences polarity. Fajan rule predicts covalent character in ionic compounds.'
            },
            {
              title: 'Dipole Moment',
              description: 'Dipole moment (mu = q x d) measures polarity. Molecular symmetry can cancel bond dipoles.'
            },
            {
              title: 'VSEPR Theory and Molecular Shapes',
              description: 'Geometry depends on repulsion among electron pairs around central atom. Common ideal shapes: linear (180 deg), trigonal planar (120 deg), tetrahedral (109.5 deg).'
            },
            {
              title: 'Hybridization and Valence Bond Theory',
              description: 'Hybridization is mixing of orbitals: sp (linear), sp2 (trigonal planar), sp3 (tetrahedral). In VBT, bond forms due to orbital overlap.'
            },
            {
              title: 'Molecular Orbital Theory and Bond Order',
              description: 'Atomic orbitals combine to form bonding and antibonding molecular orbitals. Bond order = (Nb - Na)/2; higher bond order means greater bond stability.'
            },
            {
              title: 'Magnetic Nature, Hydrogen Bonding, Metallic Bonding',
              description: 'Unpaired electrons cause paramagnetism. Hydrogen bonding may be inter- or intramolecular. Metallic bonding is described by sea of delocalized electrons.'
            }
          ],
          key_patterns: [
            'Ionic vs covalent character identification from periodic trends and electronegativity.',
            'VSEPR-based geometry and lone-pair distortion questions.',
            'Hybridization prediction from steric number and molecular shape.',
            'Dipole-moment logic with vector addition and molecular symmetry.',
            'Bond-order calculation using molecular orbital electron filling.',
            'Paramagnetic/diamagnetic classification from unpaired electrons in MOT.',
            'Hydrogen-bonding effects on boiling point, solubility, and structure.'
          ],
          formulas_relations: [
            {
              formula: 'mu = q x d',
              meaning: 'Dipole moment equals charge separation times bond distance.'
            },
            {
              formula: 'Bond order = (Nb - Na)/2',
              meaning: 'Nb is number of electrons in bonding MO and Na in antibonding MO.'
            },
            {
              formula: 'Higher bond order -> higher stability and shorter bond length',
              meaning: 'General MOT stability trend used in NEET objective questions.'
            }
          ],
          application_insights: [
            'Chemical Bonding is one of the highest-weightage conceptual chapters in NEET chemistry.',
            'Most frequent asks: VSEPR shape, hybridization, and bond order in simple diatomic species.',
            'Questions often combine geometry with polarity and lone-pair effects.',
            'Fajan rule and lattice-energy trends are used for comparison-based MCQs.',
            'MOT-based magnetic nature is a standard repeated PYQ pattern.'
          ],
          common_mistakes: [
            {
              mistake: 'Confusing molecular shape with hybridization',
              why: 'Same hybridization can give different shapes when lone pairs are present.'
            },
            {
              mistake: 'Ignoring lone-pair repulsion in VSEPR',
              why: 'Lone pairs compress bond angles and change expected geometry.'
            },
            {
              mistake: 'Wrong bond-order counting in MOT',
              why: 'Electrons in antibonding orbitals must be subtracted.'
            },
            {
              mistake: 'Declaring molecule polar without symmetry check',
              why: 'Net dipole may cancel even if individual bonds are polar.'
            },
            {
              mistake: 'Missing paramagnetic species',
              why: 'Any unpaired electron implies paramagnetism.'
            }
          ],
          quick_revision: [
            'Kossel-Lewis explains octet tendency and bond formation.',
            'Ionic bond: electron transfer; covalent bond: electron sharing.',
            'Higher ionic charge and smaller ionic size strengthen ionic interaction.',
            'Fajan rule predicts covalent character in ionic compounds.',
            'Dipole moment formula: mu = q x d.',
            'VSEPR ideal angles: linear 180, trigonal planar 120, tetrahedral 109.5.',
            'Hybridization: sp linear, sp2 trigonal planar, sp3 tetrahedral.',
            'MOT bond order: (Nb - Na)/2.',
            'Higher bond order means greater stability and generally shorter bond length.',
            'Unpaired electrons indicate paramagnetic behavior.'
          ],
          quiz: [
            {
              question: 'Bond order according to MOT is:',
              options: ['(Nb + Na)/2', '(Nb - Na)/2', '(Na - Nb)/2', 'Nb/Na'],
              correctAnswer: 1,
              explanation: 'Bond order is half the difference between bonding and antibonding electrons.'
            },
            {
              question: 'Shape of molecule with sp2 hybridization (ideal) is:',
              options: ['Linear', 'Trigonal planar', 'Tetrahedral', 'Octahedral'],
              correctAnswer: 1,
              explanation: 'sp2 hybridization gives trigonal planar geometry with ideal 120 deg angles.'
            },
            {
              question: 'Dipole moment is a measure of:',
              options: ['Mass', 'Polarity', 'Lattice energy', 'Atomic size'],
              correctAnswer: 1,
              explanation: 'Dipole moment indicates separation of positive and negative charge.'
            },
            {
              question: 'A species with unpaired electrons is generally:',
              options: ['Diamagnetic', 'Paramagnetic', 'Inert', 'Always ionic'],
              correctAnswer: 1,
              explanation: 'Unpaired electrons cause paramagnetism.'
            },
            {
              question: 'In VSEPR, bond angle decreases mainly due to:',
              options: ['Higher bond order', 'Lone pair-lone pair repulsion', 'Lower electronegativity', 'Increased temperature'],
              correctAnswer: 1,
              explanation: 'Lone pairs occupy more space and compress bond angles.'
            }
          ]
        },
        {
          id: 'chemical-thermodynamics',
          title: 'Unit 4: Chemical Thermodynamics',
          concept_explanations: [
            {
              title: 'Thermodynamic System',
              description: 'The part of universe chosen for study is the system. It can be open (mass and energy exchange), closed (only energy exchange), or isolated (no exchange).'
            },
            {
              title: 'State Functions',
              description: 'State functions depend only on initial and final states, not on path. Important examples are internal energy (U), enthalpy (H), and entropy (S).'
            },
            {
              title: 'Types of Thermodynamic Processes',
              description: 'Isothermal: temperature constant, Adiabatic: no heat transfer, Isobaric: pressure constant, Isochoric: volume constant.'
            },
            {
              title: 'First Law of Thermodynamics',
              description: 'Energy conservation in thermodynamics is given by Delta U = Q - W, where Q is heat supplied to system and W is work done by system.'
            },
            {
              title: 'Enthalpy and Heat Capacity',
              description: 'Enthalpy is defined as H = U + PV. Heat capacity indicates heat required for temperature change: C = Q/Delta T; also used in molar form.'
            },
            {
              title: 'Hess Law and Enthalpy Types',
              description: 'Enthalpy change is path independent. Standard enthalpies of formation, combustion, atomization, hydration, and solution are frequently used in reaction calculations.'
            },
            {
              title: 'Second Law and Entropy',
              description: 'Second law introduces direction of spontaneity. Entropy measures disorder; for reversible heat flow, Delta S = Qrev/T.'
            },
            {
              title: 'Gibbs Free Energy and Spontaneity',
              description: 'At constant temperature and pressure, Delta G = Delta H - TDelta S predicts spontaneity: Delta G < 0 spontaneous, Delta G > 0 non-spontaneous, Delta G = 0 equilibrium.'
            },
            {
              title: 'Relation with Equilibrium Constant',
              description: 'Standard free-energy change relates to equilibrium constant by Delta G degree = -RT ln K.'
            }
          ],
          key_patterns: [
            'Sign-convention based numericals from first law (Delta U, Q, W).',
            'Hess-law enthalpy cycle and reaction-addition/subtraction questions.',
            'Heat-capacity and calorimetry relation Q = mcDeltaT.',
            'Entropy change interpretation from disorder and phase transitions.',
            'Gibbs equation usage for spontaneity at given temperature.',
            'Delta G degree = -RT ln K based equilibrium-constant comparison.',
            'Conceptual classification of open, closed, and isolated systems.'
          ],
          formulas_relations: [
            {
              formula: 'Delta U = Q - W',
              meaning: 'First law of thermodynamics with standard chemistry sign convention.'
            },
            {
              formula: 'H = U + PV',
              meaning: 'Definition of enthalpy.'
            },
            {
              formula: 'C = Q/Delta T',
              meaning: 'Heat capacity relation.'
            },
            {
              formula: 'Q = mcDeltaT',
              meaning: 'Heat quantity in calorimetry calculations.'
            },
            {
              formula: 'Delta S = Qrev/T',
              meaning: 'Entropy change for reversible process.'
            },
            {
              formula: 'Delta G = Delta H - TDelta S',
              meaning: 'Gibbs free-energy equation for spontaneity.'
            },
            {
              formula: 'Delta G degree = -RT ln K',
              meaning: 'Standard free energy linked with equilibrium constant.'
            }
          ],
          application_insights: [
            'Chemical Thermodynamics is a high-weightage chapter with concept plus numerical mix in NEET.',
            'Most repeated areas are Gibbs free energy, Hess law, and first-law sign convention.',
            'Questions often test whether process is spontaneous at specific temperature.',
            'Unit consistency (J, kJ, K, mol) is essential to avoid option traps.',
            'Many PYQs combine equilibrium logic with Delta G degree relation.'
          ],
          common_mistakes: [
            {
              mistake: 'Using wrong sign convention for heat/work',
              why: 'In chemistry convention, work done by system is subtracted in Delta U = Q - W.'
            },
            {
              mistake: 'Confusing heat and work terms',
              why: 'Both transfer energy but through different modes and signs.'
            },
            {
              mistake: 'Forgetting Delta G spontaneity condition',
              why: 'Delta G < 0 is spontaneous, not Delta H alone.'
            },
            {
              mistake: 'Mixing different enthalpy types',
              why: 'Formation, combustion, atomization, hydration, and solution are distinct definitions.'
            },
            {
              mistake: 'Ignoring temperature factor in Gibbs equation',
              why: 'TDeltaS term can reverse spontaneity at different temperatures.'
            },
            {
              mistake: 'Unit mismatch across equations',
              why: 'Using J and kJ together without conversion gives incorrect answers.'
            }
          ],
          quick_revision: [
            'System types: open, closed, isolated.',
            'State functions depend only on initial and final states.',
            'First law: Delta U = Q - W.',
            'Enthalpy: H = U + PV.',
            'Heat capacity: C = Q/DeltaT and calorimetry Q = mcDeltaT.',
            'Hess law: enthalpy change is path independent.',
            'Entropy indicates disorder; DeltaS = Qrev/T.',
            'Gibbs equation: DeltaG = DeltaH - TDeltaS.',
            'DeltaG < 0 spontaneous, DeltaG > 0 non-spontaneous, DeltaG = 0 equilibrium.',
            'DeltaG degree = -RT ln K links thermodynamics to equilibrium.'
          ],
          quiz: [
            {
              question: 'According to first law of thermodynamics (chemistry convention):',
              options: ['Delta U = Q + W', 'Delta U = Q - W', 'Delta U = W - Q', 'Delta U = Q/W'],
              correctAnswer: 1,
              explanation: 'Internal-energy change equals heat supplied minus work done by system.'
            },
            {
              question: 'Gibbs free energy relation is:',
              options: ['Delta G = Delta H + TDelta S', 'Delta G = Delta H - TDelta S', 'Delta G = TDelta S - Delta H', 'Delta G = Delta H/TDelta S'],
              correctAnswer: 1,
              explanation: 'This relation determines spontaneity at constant temperature and pressure.'
            },
            {
              question: 'If Delta G < 0, the process is:',
              options: ['non-spontaneous', 'spontaneous', 'at equilibrium', 'impossible'],
              correctAnswer: 1,
              explanation: 'At constant temperature and pressure, negative Gibbs free-energy change indicates a spontaneous process.'
            },
            {
              question: 'Hess law states that enthalpy change is:',
              options: ['path dependent', 'path independent', 'always positive', 'always zero'],
              correctAnswer: 1,
              explanation: 'Total enthalpy change depends only on initial and final states.'
            },
            {
              question: 'Standard relation between free energy and equilibrium constant is:',
              options: ['Delta G degree = RT ln K', 'Delta G degree = -RT ln K', 'Delta G degree = -R ln KT', 'Delta G degree = RT/K'],
              correctAnswer: 1,
              explanation: 'For standard state, Delta G degree and K are linked by -RT ln K.'
            }
          ]
        },
        {
          id: 'solutions',
          title: 'Unit 5: Solutions',
          concept_explanations: [
            {
              title: 'Types of Solutions',
              description: 'Solutions can be solid, liquid, or gaseous depending on physical state of solute and solvent.'
            },
            {
              title: 'Concentration Terms',
              description: 'Key concentration measures are molarity (moles per liter of solution), molality (moles per kilogram solvent), mole fraction, and percentage terms.'
            },
            {
              title: 'Raoult Law',
              description: 'For ideal solutions, partial vapour pressure of solvent is proportional to its mole fraction: P = Xsolvent x P0.'
            },
            {
              title: 'Ideal and Non-Ideal Solutions',
              description: 'Ideal solutions obey Raoult law over full range and show negligible heat/volume change on mixing. Non-ideal solutions show positive or negative deviation.'
            },
            {
              title: 'Colligative Properties',
              description: 'These depend only on number of solute particles: relative lowering of vapour pressure, boiling point elevation, freezing point depression, and osmotic pressure.'
            },
            {
              title: 'Boiling and Freezing Relations',
              description: 'Elevation in boiling point: Delta Tb = Kb m. Depression in freezing point: Delta Tf = Kf m.'
            },
            {
              title: 'Osmotic Pressure',
              description: 'For dilute solutions, osmotic pressure follows pi = CRT (or pi = nRT/V).'
            },
            {
              title: 'Van Hoff Factor and Abnormal Molar Mass',
              description: 'Van Hoff factor i accounts for dissociation/association. Abnormal molar mass occurs when actual particles differ from expected.'
            }
          ],
          key_patterns: [
            'Molarity, molality, and mole-fraction conversion numericals.',
            'Raoult-law vapour-pressure and relative-lowering questions.',
            'Boiling-point elevation and freezing-point depression calculations.',
            'Osmotic-pressure based molar-mass determination.',
            'Van Hoff factor extraction from colligative-data mismatch.',
            'Abnormal molar mass due to ionization or association.',
            'Conceptual ideal vs non-ideal solution identification.'
          ],
          formulas_relations: [
            {
              formula: 'Molarity (M) = moles of solute/volume of solution (L)',
              meaning: 'Concentration per liter of total solution.'
            },
            {
              formula: 'Molality (m) = moles of solute/mass of solvent (kg)',
              meaning: 'Concentration per kilogram of solvent.'
            },
            {
              formula: 'Mole fraction (X) = moles of component/total moles',
              meaning: 'Fractional composition in mole terms.'
            },
            {
              formula: 'P = Xsolvent x P0',
              meaning: 'Raoult law for ideal solution with non-volatile solute.'
            },
            {
              formula: 'Delta Tb = Kb m',
              meaning: 'Elevation in boiling point.'
            },
            {
              formula: 'Delta Tf = Kf m',
              meaning: 'Depression in freezing point.'
            },
            {
              formula: 'pi = CRT',
              meaning: 'Osmotic pressure relation for dilute solutions.'
            },
            {
              formula: 'i = actual number of particles/expected number of particles',
              meaning: 'Van Hoff factor for dissociation/association correction.'
            }
          ],
          application_insights: [
            'Solutions is a very high-weightage and numerical-heavy NEET chapter.',
            'Most asked areas: colligative properties, osmotic pressure, and Van Hoff factor.',
            'Molarity and molality are frequently mixed in options to create traps.',
            'Many questions demand careful unit handling (L, mL, kg, g, K).',
            'Abnormal molar mass is commonly asked through i-factor interpretation.'
          ],
          common_mistakes: [
            {
              mistake: 'Confusing molarity with molality',
              why: 'Molarity uses solution volume; molality uses solvent mass.'
            },
            {
              mistake: 'Using Celsius instead of Kelvin where required',
              why: 'Thermodynamic and gas-law relations require absolute temperature.'
            },
            {
              mistake: 'Wrong unit conversion in concentration',
              why: 'mL to L and g to kg mistakes drastically change final answer.'
            },
            {
              mistake: 'Ignoring Van Hoff factor in colligative equations',
              why: 'Dissociation/association changes effective particle count.'
            },
            {
              mistake: 'Mixing formulas of different colligative properties',
              why: 'Delta Tb, Delta Tf, and pi have distinct constants and dependencies.'
            },
            {
              mistake: 'Using mass of solution instead of solvent in molality',
              why: 'Molality is defined strictly per kg of solvent.'
            }
          ],
          quick_revision: [
            'Solutions may be solid, liquid, or gaseous mixtures.',
            'Molarity: moles of solute per liter of solution.',
            'Molality: moles of solute per kg of solvent.',
            'Mole fraction is moles of component divided by total moles.',
            'Raoult law: P = Xsolvent x P0 for ideal behavior.',
            'Ideal solutions obey Raoult law; non-ideal show deviation.',
            'Colligative properties depend on number of solute particles only.',
            'DeltaTb = Kb m, DeltaTf = Kf m, and pi = CRT.',
            'Van Hoff factor corrects for dissociation or association.',
            'Abnormal molar mass indicates particle count mismatch.'
          ],
          quiz: [
            {
              question: 'Molality is defined as:',
              options: ['moles of solute per liter of solution', 'moles of solute per kg of solvent', 'moles of solvent per liter of solution', 'mass of solute per liter of solvent'],
              correctAnswer: 1,
              explanation: 'Molality uses kg of solvent in denominator.'
            },
            {
              question: 'Raoult law for solvent in ideal solution is:',
              options: ['P = Xsolute x P0', 'P = Xsolvent x P0', 'P = P0/Xsolvent', 'P = Xsolvent + P0'],
              correctAnswer: 1,
              explanation: 'Partial vapour pressure is proportional to mole fraction of solvent.'
            },
            {
              question: 'Relation for elevation in boiling point is:',
              options: ['Delta Tb = Kf m', 'Delta Tb = Kb m', 'Delta Tb = CRT', 'Delta Tb = m/Kb'],
              correctAnswer: 1,
              explanation: 'Boiling-point elevation follows Delta Tb = Kb m.'
            },
            {
              question: 'Osmotic pressure equation is:',
              options: ['pi = PRT', 'pi = CRT', 'pi = C/RT', 'pi = C+RT'],
              correctAnswer: 1,
              explanation: 'For dilute solutions, pi = CRT.'
            },
            {
              question: 'Van Hoff factor accounts for:',
              options: ['only temperature change', 'dissociation/association of solute', 'solvent density only', 'pressure of pure solvent only'],
              correctAnswer: 1,
              explanation: 'i corrects observed colligative behavior when particle count changes.'
            }
          ]
        },
        {
          id: 'equilibrium-chem',
          title: 'Unit 6: Equilibrium',
          concept_explanations: [
            {
              title: 'Chemical Equilibrium',
              description: 'A dynamic state where forward and backward reaction rates become equal and macroscopic concentrations remain constant.'
            },
            {
              title: 'Law of Mass Action and Equilibrium Constant',
              description: 'For a reaction, equilibrium constant is ratio of product activities to reactant activities raised to stoichiometric powers. In NEET level, concentration/pressure forms are mainly used.'
            },
            {
              title: 'Kc and Kp',
              description: 'Kc is expressed in concentration terms and Kp in partial pressure terms. For gaseous equilibrium, Kp = Kc(RT)^Delta n.'
            },
            {
              title: 'Reaction Quotient (Q)',
              description: 'Q has same expression as K but for non-equilibrium state: Q < K means forward direction favored, Q > K means backward direction favored.'
            },
            {
              title: 'Le Chatelier Principle',
              description: 'When equilibrium system is disturbed, it shifts in a direction that opposes the imposed change.'
            },
            {
              title: 'Effect of Concentration, Pressure, Temperature, Catalyst',
              description: 'Concentration and pressure can shift equilibrium position. Temperature changes equilibrium constant value. Catalyst does not change K or equilibrium composition; it only speeds attainment.'
            },
            {
              title: 'Ionic Equilibrium and Acid-Base Concepts',
              description: 'Arrhenius, Bronsted-Lowry, and Lewis concepts define acids and bases through H+, proton transfer, and electron-pair behavior respectively.'
            },
            {
              title: 'pH, pOH, Ka, Kb, Kw',
              description: 'pH = -log[H+], pOH = -log[OH-], and at 25 C pH + pOH = 14. Ionization constants Ka and Kb are linked through Kw = Ka x Kb for conjugate pairs.'
            },
            {
              title: 'Buffer and Henderson Equation',
              description: 'Buffers resist pH change. For acidic buffer, Henderson equation: pH = pKa + log([salt]/[acid]).'
            },
            {
              title: 'Solubility Product and Common Ion Effect',
              description: 'Ksp governs sparingly soluble salts. Presence of a common ion decreases solubility by shifting ionic equilibrium.'
            }
          ],
          key_patterns: [
            'Kc and Kp expression setup from balanced equations.',
            'Direction prediction using Q comparison with K.',
            'Le Chatelier shift prediction for concentration, pressure, and temperature changes.',
            'pH and pOH calculations for strong and weak electrolytes.',
            'Buffer pH numericals using Henderson equation.',
            'Ksp-solubility and common-ion effect problems.',
            'Conceptual MCQs on Arrhenius, Bronsted-Lowry, and Lewis definitions.'
          ],
          formulas_relations: [
            {
              formula: 'Kp = Kc(RT)^Delta n',
              meaning: 'Relation between pressure and concentration equilibrium constants for gases.'
            },
            {
              formula: 'Q < K -> forward, Q > K -> backward',
              meaning: 'Reaction-direction criterion before equilibrium.'
            },
            {
              formula: 'pH = -log[H+]',
              meaning: 'Hydrogen ion concentration scale.'
            },
            {
              formula: 'pOH = -log[OH-]',
              meaning: 'Hydroxide ion concentration scale.'
            },
            {
              formula: 'pH + pOH = 14 (at 25 C)',
              meaning: 'Ionic product relation in water at 25 C.'
            },
            {
              formula: 'Kw = Ka x Kb',
              meaning: 'Relation for conjugate acid-base pair.'
            },
            {
              formula: 'pH = pKa + log([salt]/[acid])',
              meaning: 'Henderson equation for acidic buffer.'
            },
            {
              formula: 'Ksp expression from ionic concentrations',
              meaning: 'Solubility-product relation for sparingly soluble salts.'
            }
          ],
          application_insights: [
            'Equilibrium is a very high-weightage NEET chapter with numerical plus conceptual balance.',
            'Most asked areas: pH calculations, Ksp, and Le Chatelier-based shifts.',
            'Kc versus Kp distinctions are frequent trap points in objective questions.',
            'Temperature effect is special because it changes equilibrium constant itself.',
            'Buffer and common-ion effect questions often appear with log-based calculations.'
          ],
          common_mistakes: [
            {
              mistake: 'Confusing Kc with Kp',
              why: 'Kc uses concentration terms while Kp uses gaseous partial-pressure terms.'
            },
            {
              mistake: 'Forgetting temperature effect on K',
              why: 'Only temperature changes equilibrium constant value significantly.'
            },
            {
              mistake: 'Logarithm errors in pH calculation',
              why: 'Small log mistakes lead to incorrect pH by large margin.'
            },
            {
              mistake: 'Mixing strong and weak acid/base treatment',
              why: 'Weak electrolytes need equilibrium approach unlike strong complete dissociation.'
            },
            {
              mistake: 'Ignoring common ion effect in solubility',
              why: 'Common ion suppresses ionization and decreases solubility.'
            },
            {
              mistake: 'Incorrect pH-scale intuition',
              why: 'Lower pH means higher acidity on logarithmic scale, not linear.'
            }
          ],
          quick_revision: [
            'Equilibrium is dynamic: forward rate = backward rate.',
            'Kc uses concentration, Kp uses pressure terms.',
            'Kp = Kc(RT)^Delta n for gaseous systems.',
            'Q < K forward direction, Q > K backward direction.',
            'Le Chatelier predicts shift opposing applied change.',
            'Catalyst does not change equilibrium position or K value.',
            'pH = -log[H+], pOH = -log[OH-], and pH + pOH = 14 at 25 C.',
            'Kw = Ka x Kb for conjugate pair.',
            'Buffer equation: pH = pKa + log([salt]/[acid]).',
            'Ksp and common ion effect control salt solubility.'
          ],
          quiz: [
            {
              question: 'In chemical equilibrium, the system is:',
              options: ['static with no reaction', 'dynamic with equal forward and backward rates', 'always complete', 'always irreversible'],
              correctAnswer: 1,
              explanation: 'Equilibrium is dynamic; both reactions continue at equal rates.'
            },
            {
              question: 'For gaseous reaction, relation between Kp and Kc is:',
              options: ['Kp = Kc/RT', 'Kp = Kc(RT)^Delta n', 'Kp = Kc + RT', 'Kp = RT/Kc'],
              correctAnswer: 1,
              explanation: 'Standard relation is Kp = Kc(RT)^Delta n.'
            },
            {
              question: 'If Q < K, reaction will proceed:',
              options: ['in backward direction', 'in forward direction', 'not at all', 'to decomposition only'],
              correctAnswer: 1,
              explanation: 'System moves forward to increase product/reactant ratio until Q reaches K.'
            },
            {
              question: 'Catalyst effect on equilibrium constant is:',
              options: ['increases K', 'decreases K', 'no change in K', 'changes K only at high pressure'],
              correctAnswer: 2,
              explanation: 'Catalyst changes rate of attainment, not equilibrium constant/value.'
            },
            {
              question: 'At 25 C, if pH = 5 then pOH is:',
              options: ['5', '7', '9', '14'],
              correctAnswer: 2,
              explanation: 'pH + pOH = 14, so pOH = 14 - 5 = 9.'
            }
          ]
        },
        {
          id: 'redox-electrochemistry',
          title: 'Unit 7: Redox Reactions and Electrochemistry',
          concept_explanations: [
            {
              title: 'Redox Fundamentals',
              description: 'Oxidation is loss of electrons and reduction is gain of electrons. Both processes occur simultaneously in a redox reaction.'
            },
            {
              title: 'Oxidation Number',
              description: 'Oxidation number is the formal charge assigned to an atom. Common rules: free element 0, oxygen usually -2, hydrogen usually +1.'
            },
            {
              title: 'Balancing Redox Reactions',
              description: 'Balanced by oxidation-number method or half-reaction (ion-electron) method depending on medium and complexity.'
            },
            {
              title: 'Conductance and Conductivity',
              description: 'Conductance G is reciprocal of resistance (G = 1/R). Conductivity kappa depends on cell geometry: kappa = G x l/A.'
            },
            {
              title: 'Molar Conductivity and Kohlrausch Law',
              description: 'Molar conductivity: Lambda_m = (kappa x 1000)/C. At infinite dilution, Lambda_m degree equals sum of ionic conductivities.'
            },
            {
              title: 'Galvanic and Electrolytic Cells',
              description: 'Galvanic cells convert chemical to electrical energy; electrolytic cells use electrical energy to drive non-spontaneous chemical change.'
            },
            {
              title: 'EMF and Electrode Potentials',
              description: 'Cell emf is Ecell = Ecathode - Eanode. Standard electrode potential is measured under standard state conditions.'
            },
            {
              title: 'Nernst Equation',
              description: 'At 298 K, electrode/cell potential varies with concentration: E = E degree - (0.0591/n)logQ.'
            },
            {
              title: 'Gibbs Energy Relation and Batteries',
              description: 'Thermodynamic link is Delta G = -nFE. Important applied systems include dry cell, lead accumulator, and fuel cell.'
            }
          ],
          key_patterns: [
            'Oxidation-number assignment and oxidizing/reducing agent identification.',
            'Balancing redox equations in acidic/basic medium.',
            'Numericals on conductance, conductivity, and molar conductivity.',
            'Cell potential calculations using electrode potentials.',
            'Nernst-equation concentration dependence questions.',
            'Delta G = -nFE based spontaneity and emf linkage.',
            'Conceptual distinction between galvanic and electrolytic cells.'
          ],
          formulas_relations: [
            {
              formula: 'G = 1/R',
              meaning: 'Conductance is reciprocal of resistance.'
            },
            {
              formula: 'kappa = G x l/A',
              meaning: 'Conductivity from conductance and cell dimensions.'
            },
            {
              formula: 'Lambda_m = (kappa x 1000)/C',
              meaning: 'Molar conductivity in terms of conductivity and concentration.'
            },
            {
              formula: 'Lambda_m degree = lambda+ degree + lambda- degree',
              meaning: 'Kohlrausch law at infinite dilution.'
            },
            {
              formula: 'Ecell = Ecathode - Eanode',
              meaning: 'Cell emf from electrode potentials.'
            },
            {
              formula: 'E = E degree - (0.0591/n)logQ',
              meaning: 'Nernst equation at 298 K.'
            },
            {
              formula: 'Delta G = -nFE',
              meaning: 'Relation between Gibbs free energy and emf.'
            }
          ],
          application_insights: [
            'Redox plus electrochemistry is a very high-weightage and numerical-heavy NEET chapter.',
            'Most asked areas are oxidation number, emf calculation, and Nernst equation.',
            'Anode-cathode sign conventions are frequent MCQ trap points.',
            'Conductivity and molar-conductivity unit handling is often tested.',
            'Cell-thermodynamics linkage through Delta G = -nFE appears repeatedly in PYQs.'
          ],
          common_mistakes: [
            {
              mistake: 'Applying oxidation number rules incorrectly',
              why: 'Special cases and compound context must be checked carefully.'
            },
            {
              mistake: 'Mixing anode and cathode roles',
              why: 'Oxidation occurs at anode and reduction occurs at cathode in all cells.'
            },
            {
              mistake: 'Ignoring sign convention in emf',
              why: 'Correct expression is Ecell = Ecathode - Eanode.'
            },
            {
              mistake: 'Errors in logarithm handling in Nernst equation',
              why: 'Wrong log value or n-factor gives large numerical deviation.'
            },
            {
              mistake: 'Confusing galvanic and electrolytic cells',
              why: 'Energy conversion direction is opposite in the two cells.'
            },
            {
              mistake: 'Unit mistakes in conductance/conductivity calculations',
              why: 'Cell constant and concentration units must be used consistently.'
            }
          ],
          quick_revision: [
            'Oxidation: electron loss; reduction: electron gain.',
            'Oxidation number basics: free element 0, O usually -2, H usually +1.',
            'Redox balancing by oxidation-number or half-reaction method.',
            'G = 1/R and kappa = G x l/A.',
            'Lambda_m = (kappa x 1000)/C.',
            'Kohlrausch law gives limiting molar conductivity as ionic sum.',
            'Galvanic: chemical to electrical, electrolytic: electrical to chemical.',
            'Ecell = Ecathode - Eanode.',
            'Nernst equation: E = E degree - (0.0591/n)logQ at 298 K.',
            'Delta G = -nFE links electrochemistry and thermodynamics.'
          ],
          quiz: [
            {
              question: 'Oxidation is defined as:',
              options: ['gain of electrons', 'loss of electrons', 'gain of protons', 'loss of neutrons'],
              correctAnswer: 1,
              explanation: 'Oxidation corresponds to electron loss.'
            },
            {
              question: 'Conductance is related to resistance by:',
              options: ['G = R', 'G = 1/R', 'G = R^2', 'G = 1/R^2'],
              correctAnswer: 1,
              explanation: 'Conductance is reciprocal of resistance.'
            },
            {
              question: 'Correct expression for cell emf is:',
              options: ['Ecell = Eanode - Ecathode', 'Ecell = Ecathode - Eanode', 'Ecell = Eanode + Ecathode', 'Ecell = 0 always'],
              correctAnswer: 1,
              explanation: 'Cell potential is cathode potential minus anode potential.'
            },
            {
              question: 'At 298 K, Nernst equation is:',
              options: ['E = E degree + (0.0591/n)logQ', 'E = E degree - (0.0591/n)logQ', 'E = E degree - n/0.0591 logQ', 'E = E degree + nF'],
              correctAnswer: 1,
              explanation: 'Potential decreases with increasing Q as per Nernst form.'
            },
            {
              question: 'Relation connecting Gibbs energy and emf is:',
              options: ['Delta G = nFE', 'Delta G = -nFE', 'Delta G = -F/E', 'Delta G = nRT'],
              correctAnswer: 1,
              explanation: 'For electrochemical reaction, Delta G equals -nFE.'
            }
          ]
        },
        {
          id: 'chemical-kinetics-chem',
          title: 'Unit 8: Chemical Kinetics',
          concept_explanations: [
            {
              title: 'Rate of Reaction',
              description: 'Rate is change in concentration of reactant or product per unit time. For reactant A, rate is often written as -Delta[A]/Delta t.'
            },
            {
              title: 'Factors Affecting Rate',
              description: 'Reaction rate depends on concentration, temperature, pressure (for gases), nature of reactants, and catalyst.'
            },
            {
              title: 'Rate Law and Rate Constant',
              description: 'Rate law is Rate = k[A]^m[B]^n where k is rate constant and m, n are experimentally determined orders.'
            },
            {
              title: 'Order of Reaction',
              description: 'Overall order is sum of powers in rate law (m + n). Typical NEET focus is zero, first, and second order.'
            },
            {
              title: 'Molecularity',
              description: 'Molecularity is number of molecules colliding in an elementary step and is always a whole number.'
            },
            {
              title: 'Zero-Order Integrated Law',
              description: '[A] = [A]0 - kt and half-life t1/2 = [A]0/(2k). Zero-order half-life depends on initial concentration.'
            },
            {
              title: 'First-Order Integrated Law',
              description: 'ln[A] = ln[A]0 - kt and k = (2.303/t)log([A]0/[A]). First-order half-life is t1/2 = 0.693/k and is concentration independent.'
            },
            {
              title: 'Arrhenius Equation and Activation Energy',
              description: 'Temperature dependence of k: k = A e^(-Ea/RT). Higher temperature generally increases k by increasing effective collisions over activation barrier.'
            },
            {
              title: 'Catalyst and Collision Theory',
              description: 'Catalyst increases rate by lowering activation energy. Collision theory states only collisions with sufficient energy and proper orientation are effective.'
            }
          ],
          key_patterns: [
            'Rate-law based order determination from concentration-rate data.',
            'First-order numericals involving k, t, and half-life.',
            'Zero-order concentration-time and half-life dependence problems.',
            'Arrhenius equation and activation-energy extraction.',
            'Temperature-based rate constant comparison questions.',
            'Graph interpretation: [A] vs t, ln[A] vs t, rate vs concentration.',
            'Conceptual distinction between order and molecularity.'
          ],
          formulas_relations: [
            {
              formula: 'Rate = -Delta[A]/Delta t',
              meaning: 'Rate expression in terms of reactant concentration decrease.'
            },
            {
              formula: 'Rate = k[A]^m[B]^n',
              meaning: 'General differential rate law.'
            },
            {
              formula: 'Order = m + n',
              meaning: 'Overall order as sum of exponents in rate law.'
            },
            {
              formula: '[A] = [A]0 - kt',
              meaning: 'Integrated equation for zero-order reaction.'
            },
            {
              formula: 't1/2 (zero order) = [A]0/(2k)',
              meaning: 'Zero-order half-life depends on initial concentration.'
            },
            {
              formula: 'ln[A] = ln[A]0 - kt',
              meaning: 'Integrated equation for first-order reaction.'
            },
            {
              formula: 'k = (2.303/t)log([A]0/[A])',
              meaning: 'First-order rate constant equation.'
            },
            {
              formula: 't1/2 (first order) = 0.693/k',
              meaning: 'First-order half-life independent of concentration.'
            },
            {
              formula: 'k = A e^(-Ea/RT)',
              meaning: 'Arrhenius relation between k and temperature.'
            }
          ],
          application_insights: [
            'Chemical Kinetics is a very high-weightage, numerical-heavy NEET chapter.',
            'Most frequent asks: first-order kinetics, half-life, and Arrhenius equation.',
            'Graph-based interpretation is common for identifying reaction order.',
            'Rate constant units provide direct clue to overall order.',
            'Temperature and catalyst effects are frequent conceptual checks.'
          ],
          common_mistakes: [
            {
              mistake: 'Confusing order with molecularity',
              why: 'Order is experimental and can be fractional/zero; molecularity is mechanistic and always whole number.'
            },
            {
              mistake: 'Forgetting first-order half-life independence from concentration',
              why: 'Only first-order gives constant half-life regardless of initial concentration.'
            },
            {
              mistake: 'Logarithm calculation errors in first-order formula',
              why: 'Mistakes in log ratio directly spoil k and time answers.'
            },
            {
              mistake: 'Mixing zero-order and first-order integrated equations',
              why: 'Different linear plots and half-life expressions must be used.'
            },
            {
              mistake: 'Using wrong units for k',
              why: 'Units of k depend on reaction order and are often tested directly.'
            },
            {
              mistake: 'Ignoring temperature effect on rate constant',
              why: 'Arrhenius relation shows k changes strongly with temperature.'
            }
          ],
          quick_revision: [
            'Rate is concentration change per unit time.',
            'Rate law: Rate = k[A]^m[B]^n.',
            'Order = m + n; molecularity applies only to elementary step.',
            'Zero order: [A] = [A]0 - kt and t1/2 = [A]0/(2k).',
            'First order: ln[A] = ln[A]0 - kt.',
            'First-order k: (2.303/t)log([A]0/[A]).',
            'First-order half-life: t1/2 = 0.693/k.',
            'Arrhenius equation: k = A e^(-Ea/RT).',
            'Higher temperature generally increases reaction rate.',
            'Catalyst lowers activation energy and speeds reaction.'
          ],
          quiz: [
            {
              question: 'Overall order of rate law Rate = k[A]^2[B] is:',
              options: ['1', '2', '3', '0'],
              correctAnswer: 2,
              explanation: 'Overall order is sum of exponents: 2 + 1 = 3.'
            },
            {
              question: 'For first-order reaction, half-life is:',
              options: ['[A]0/(2k)', '0.693/k', '2.303/k', 'k/0.693'],
              correctAnswer: 1,
              explanation: 'First-order half-life is independent of initial concentration and equals 0.693/k.'
            },
            {
              question: 'Integrated equation for zero-order reaction is:',
              options: ['ln[A] = ln[A]0 - kt', '[A] = [A]0 - kt', '1/[A] = 1/[A]0 + kt', '[A] = [A]0 e^-kt'],
              correctAnswer: 1,
              explanation: 'Zero-order concentration decreases linearly with time.'
            },
            {
              question: 'Arrhenius equation is:',
              options: ['k = A e^(-Ea/RT)', 'k = A e^(Ea/RT)', 'k = RT/Ea', 'k = A + Ea/RT'],
              correctAnswer: 0,
              explanation: 'Rate constant follows exponential dependence on activation energy and temperature.'
            },
            {
              question: 'Molecularity of an elementary reaction is always:',
              options: ['fractional', 'negative', 'whole number', 'zero only'],
              correctAnswer: 2,
              explanation: 'Molecularity counts number of molecules involved in one elementary step, so it is an integer.'
            }
          ]
        }
      ],
    },
    {
      id: 'chem-inorganic',
      name: 'Inorganic Chemistry',
      chapters: [
        {
          id: 'periodicity',
          title: 'Unit 9: Classification of Elements and Periodicity in Properties',
          concept_explanations: [
            {
              title: 'Modern Periodic Law',
              description: 'Physical and chemical properties of elements are periodic functions of atomic number.'
            },
            {
              title: 'Periodic Table Structure',
              description: 'Horizontal rows are periods and vertical columns are groups. Position reflects valence-shell configuration trends.'
            },
            {
              title: 'Blocks of Elements',
              description: 's-block: Groups 1-2, p-block: Groups 13-18, d-block: transition elements, f-block: inner transition elements.'
            },
            {
              title: 'Atomic and Ionic Radius Trends',
              description: 'Atomic radius usually decreases across a period and increases down a group. Cations are smaller than parent atoms; anions are larger.'
            },
            {
              title: 'Ionization Enthalpy',
              description: 'Minimum energy needed to remove an electron from isolated gaseous atom. Generally increases across period and decreases down group, with notable anomalies (Be, N, etc.).'
            },
            {
              title: 'Electron Gain Enthalpy and Electronegativity',
              description: 'Electron gain enthalpy indicates tendency to accept electron; more negative value means stronger tendency. Electronegativity usually increases across period and decreases down group.'
            },
            {
              title: 'Valency and Oxidation States',
              description: 'Valency often follows group-based patterns; oxidation states vary depending on element and chemical environment, especially in p- and d-block.'
            },
            {
              title: 'Metallic and Non-Metallic Character',
              description: 'Metallic character (electron-loss tendency) decreases across period and increases down group; non-metallic behavior follows opposite trend.'
            },
            {
              title: 'Effective Nuclear Charge',
              description: 'Increase in effective nuclear charge across a period is key reason for many periodic trends and ordering questions.'
            }
          ],
          key_patterns: [
            'Order-based comparison of atomic radius, ionic radius, and ionization enthalpy.',
            'Trend questions across period and down group for electronegativity and metallic character.',
            'Block identification from electronic configuration clues.',
            'Anomaly questions in ionization enthalpy (especially Be/B, N/O type comparisons).',
            'Oxidation-state trend questions across groups and transition series.',
            'Conceptual differentiation of metallic and non-metallic nature.',
            'Direct periodic-law and periodic-table structure questions.'
          ],
          formulas_relations: [
            {
              formula: 'Modern periodic law: properties are periodic functions of atomic number',
              meaning: 'Atomic number is the fundamental basis of classification.'
            },
            {
              formula: 'Across period: radius decreases, IE usually increases',
              meaning: 'Driven largely by increasing effective nuclear charge.'
            },
            {
              formula: 'Down group: radius increases, IE usually decreases',
              meaning: 'Shell addition dominates over nuclear attraction on valence electrons.'
            },
            {
              formula: 'Cation radius < atomic radius < anion radius',
              meaning: 'Electron removal contracts size; electron addition expands size.'
            },
            {
              formula: 'Metallic character across period decreases and down group increases',
              meaning: 'Reflects ease of electron loss.'
            }
          ],
          application_insights: [
            'This chapter is very frequently asked in NEET and strongly comparison-based.',
            'Most repeated asks: periodic trends and order arrangement questions.',
            'Effective nuclear charge logic solves many tricky trend-based MCQs quickly.',
            'Exceptions are often used to differentiate close options.',
            'Block classification and oxidation-state familiarity improve elimination speed.'
          ],
          common_mistakes: [
            {
              mistake: 'Confusing atomic radius with ionic radius',
              why: 'Ionic size changes with electron loss/gain and is not same as neutral atom size.'
            },
            {
              mistake: 'Forgetting anomaly cases in ionization enthalpy',
              why: 'Be/B and N/O style exceptions break naive monotonic assumptions.'
            },
            {
              mistake: 'Mixing across-period and down-group trends',
              why: 'Trend direction reverses for several properties depending on movement.'
            },
            {
              mistake: 'Ignoring effective nuclear charge argument',
              why: 'This is the core explanation for periodic behavior.'
            },
            {
              mistake: 'Assigning incorrect oxidation states',
              why: 'Many elements show variable oxidation states depending on compound context.'
            },
            {
              mistake: 'Misplacing element blocks',
              why: 'Block depends on valence subshell filling (s, p, d, f).'
            }
          ],
          quick_revision: [
            'Properties are periodic functions of atomic number.',
            'Periods are rows; groups are columns.',
            's-block: 1-2, p-block: 13-18, d-block: transition, f-block: inner transition.',
            'Atomic radius decreases across and increases down.',
            'Cation smaller than atom, anion larger than atom.',
            'Ionization enthalpy usually increases across and decreases down.',
            'Electronegativity increases across and decreases down.',
            'Metallic character decreases across and increases down.',
            'Non-metallic trend is opposite of metallic trend.',
            'Remember anomaly and exception-based questions (Be/B, N/O style).' 
          ],
          quiz: [
            {
              question: 'Modern periodic law states that properties are periodic function of:',
              options: ['atomic mass', 'atomic number', 'neutron number', 'valency only'],
              correctAnswer: 1,
              explanation: 'Modern periodic table is based on atomic number.'
            },
            {
              question: 'Across a period, atomic radius generally:',
              options: ['increases', 'decreases', 'remains constant', 'first increases then decreases always'],
              correctAnswer: 1,
              explanation: 'Effective nuclear charge increases and pulls electrons closer.'
            },
            {
              question: 'Relative size order is generally:',
              options: ['cation > atom > anion', 'anion > atom > cation', 'atom > anion > cation', 'all equal'],
              correctAnswer: 1,
              explanation: 'Cation contracts and anion expands relative to neutral atom.'
            },
            {
              question: 'Electronegativity trend down a group is:',
              options: ['increases', 'decreases', 'remains constant', 'becomes zero'],
              correctAnswer: 1,
              explanation: 'Greater size and shielding reduce electron-attracting tendency.'
            },
            {
              question: 'd-block elements are also known as:',
              options: ['noble gases', 'transition elements', 'inner transition elements', 'alkali metals'],
              correctAnswer: 1,
              explanation: 'd-block corresponds to transition elements.'
            }
          ]
        },
        {
          id: 'p-block-elements',
          title: 'Unit 10: p-Block Elements',
          concept_explanations: [
            {
              title: 'General Features of p-Block',
              description: 'p-Block elements belong to Groups 13-18 with valence-shell configuration ns2 np1-6.'
            },
            {
              title: 'Overall p-Block Trends',
              description: 'Across a period, non-metallic character generally increases; down a group, metallic character generally increases.'
            },
            {
              title: 'Inert Pair Effect',
              description: 'In heavier p-block elements, ns2 electron pair tends to remain non-bonding, stabilizing lower oxidation states.'
            },
            {
              title: 'Variable Oxidation States',
              description: 'p-Block elements show variable oxidation states; lower oxidation states become more stable down a group due to inert pair effect.'
            },
            {
              title: 'Anomalous Behavior of First Element',
              description: 'First element in each group often differs from the rest because of small size, high electronegativity, and absence of d-orbitals (examples: B vs Al, N vs P).'
            },
            {
              title: 'Group 13 Highlights',
              description: 'Boron is non-metallic and electron-deficient; aluminium shows amphoteric behavior. Diborane (B2H6) and Lewis-acid nature are important.'
            },
            {
              title: 'Group 14 Highlights',
              description: 'Carbon family (C, Si, Ge, Sn, Pb) shows +4 and +2 oxidation states; catenation is maximum in carbon.'
            },
            {
              title: 'Group 15 and 16 Highlights',
              description: 'Group 15 includes NH3 behavior and variable oxide/hydride chemistry. Group 16 includes H2O, H2S and oxidation states like -2 and +6.'
            },
            {
              title: 'Group 17 and 18 Highlights',
              description: 'Halogens are highly reactive and form hydrogen halides; noble gases are mostly inert though xenon forms compounds.'
            },
            {
              title: 'Important p-Block Compounds',
              description: 'Frequently tested compounds include NH3 (basic), HNO3 (strong acid), H2SO4 (strong acid), and HCl (strong acid).' 
            }
          ],
          key_patterns: [
            'Group-wise trend comparison in oxidation states and reactivity.',
            'Inert pair effect based stability questions for heavier p-block elements.',
            'Anomalous behavior of first element in each group.',
            'Memory-based properties and preparation/use patterns of key compounds.',
            'Order-based comparisons for acidity/basicity/reactivity.',
            'Acid-base nature of oxides and hydrides across groups.',
            'Direct NCERT-line questions (very common in NEET).' 
          ],
          formulas_relations: [
            {
              formula: 'General valence shell = ns2 np1-6',
              meaning: 'Defines p-block electronic configuration.'
            },
            {
              formula: 'Inert pair effect: stability of lower oxidation state increases down group',
              meaning: 'ns2 pair reluctance in bonding for heavier elements.'
            },
            {
              formula: 'Across period: non-metallic character increases',
              meaning: 'Electron-accepting tendency generally rises across p-block rows.'
            },
            {
              formula: 'Down group: metallic character increases',
              meaning: 'Electron-loss tendency generally rises down a group.'
            }
          ],
          application_insights: [
            'Unit 10 is high-weightage and often direct NCERT/memory-based in NEET.',
            'Most asked: important compounds, group trends, oxidation-state exceptions.',
            'Inert pair effect is a frequent hidden concept in oxidation-state MCQs.',
            'Anomalous behavior helps solve many comparison and assertion questions.',
            'Acidic/basic nature and reactivity orders are recurring PYQ themes.'
          ],
          common_mistakes: [
            {
              mistake: 'Forgetting inert pair effect',
              why: 'It controls stability of lower oxidation states in heavier p-block elements.'
            },
            {
              mistake: 'Confusing oxidation states across groups',
              why: 'Different groups have different common/maximum oxidation values.'
            },
            {
              mistake: 'Mixing periodic trends across versus down',
              why: 'Trend direction can reverse depending on movement in periodic table.'
            },
            {
              mistake: 'Ignoring anomalous first-element behavior',
              why: 'B, C, N, O, F family heads often differ significantly from lower congeners.'
            },
            {
              mistake: 'Wrong acidity/basicity order of compounds',
              why: 'Hydrides/oxides show systematic but group-dependent acid-base behavior.'
            },
            {
              mistake: 'Skipping NCERT factual lines',
              why: 'Direct statement-based NEET questions are common in this chapter.'
            }
          ],
          quick_revision: [
            'p-Block covers Groups 13-18 with ns2 np1-6 valence shell.',
            'Across period non-metallic character increases.',
            'Down group metallic character increases.',
            'Inert pair effect stabilizes lower oxidation states in heavier elements.',
            'First element in each group shows anomalous behavior.',
            'Group 13: Boron non-metallic, Al amphoteric, diborane important.',
            'Group 14: +4 and +2 states, carbon shows maximum catenation.',
            'Group 15: NH3 key compound and basic behavior.',
            'Group 16 and 17: important hydrides/acids and oxidation-state trends.',
            'Group 18 mostly inert; Xe forms compounds.'
          ],
          quiz: [
            {
              question: 'General valence-shell configuration of p-block is:',
              options: ['ns1', 'ns2 np1-6', 'ns2', 'ns2 (n-1)d1-10'],
              correctAnswer: 1,
              explanation: 'p-Block elements have valence-shell pattern ns2 np1-6.'
            },
            {
              question: 'Inert pair effect generally leads to:',
              options: ['higher oxidation states only', 'stability of lower oxidation states down group', 'no effect on oxidation state', 'increased catenation in all groups'],
              correctAnswer: 1,
              explanation: 'ns2 pair reluctance favors lower oxidation states in heavier elements.'
            },
            {
              question: 'Which element pair shows anomalous first-element behavior comparison?',
              options: ['B and Al', 'Si and Ge', 'Cl and Br', 'Ar and Kr'],
              correctAnswer: 0,
              explanation: 'Boron differs markedly from aluminium due to first-element anomaly.'
            },
            {
              question: 'Aluminium oxide is generally:',
              options: ['strongly acidic', 'strongly basic', 'amphoteric', 'neutral'],
              correctAnswer: 2,
              explanation: 'Al2O3 exhibits amphoteric behavior.'
            },
            {
              question: 'Which noble-gas element is known to form compounds?',
              options: ['He', 'Ne', 'Ar', 'Xe'],
              correctAnswer: 3,
              explanation: 'Xenon forms several stable compounds.'
            }
          ]
        },
        {
          id: 'd-f-block-elements',
          title: 'Unit 11: d- and f-Block Elements',
          concept_explanations: [
            {
              title: 'd-Block General Configuration',
              description: 'Transition elements commonly show (n-1)d1-10 ns1-2 valence electronic configuration.'
            },
            {
              title: 'Key Characteristics of Transition Elements',
              description: 'Important properties include variable oxidation states, colored compounds, magnetic behavior, complex formation, alloy formation, and catalytic activity.'
            },
            {
              title: 'Variable Oxidation States',
              description: 'Due to comparable energies of ns and (n-1)d orbitals, multiple oxidation states are possible (for example Fe2+/Fe3+, Mn2+ to Mn7+).'
            },
            {
              title: 'Color and d-d Transitions',
              description: 'Many transition-metal ions are colored due to d-d transitions. Compounds are generally colorless when d orbitals are completely empty or fully filled.'
            },
            {
              title: 'Magnetic Properties',
              description: 'Paramagnetism arises from unpaired electrons; diamagnetism appears when all electrons are paired.'
            },
            {
              title: 'Catalysis, Complexes, and Alloys',
              description: 'Transition metals act as catalysts via variable oxidation states and surface adsorption. They form coordination complexes and alloys readily.'
            },
            {
              title: 'Important Oxidizing Agents',
              description: 'Potassium dichromate (K2Cr2O7) and potassium permanganate (KMnO4) are strong oxidizing agents frequently tested in NEET.'
            },
            {
              title: 'f-Block and Lanthanoids',
              description: 'Lanthanoids have general pattern 4f1-14 5d0-1 6s2 and mostly show +3 oxidation state.'
            },
            {
              title: 'Lanthanoid Contraction',
              description: 'Atomic and ionic radii decrease gradually across lanthanoids due to poor shielding by 4f electrons, leading to important similarity trends.'
            },
            {
              title: 'Actinoids',
              description: 'Actinoids are mostly radioactive and show wider range of oxidation states than lanthanoids.'
            }
          ],
          key_patterns: [
            'Electronic configuration questions for d and f block series.',
            'Oxidation-state based direct and comparison questions (Fe, Mn, Cr etc.).',
            'Paramagnetic versus diamagnetic classification from unpaired electrons.',
            'Color prediction based on d-electron configuration and d-d transition possibility.',
            'Strong oxidizer applications of KMnO4 and K2Cr2O7.',
            'Lanthanoid contraction and its consequences.',
            'Direct NCERT-style statements on transition and inner-transition behavior.'
          ],
          formulas_relations: [
            {
              formula: 'd-block general valence pattern: (n-1)d1-10 ns1-2',
              meaning: 'Characteristic electronic configuration trend for transition elements.'
            },
            {
              formula: 'Lanthanoid general pattern: 4f1-14 5d0-1 6s2',
              meaning: 'Electronic filling trend across lanthanoid series.'
            },
            {
              formula: 'Paramagnetism <-> presence of unpaired electrons',
              meaning: 'Magnetic behavior criterion used in NEET conceptual questions.'
            },
            {
              formula: 'Color in many transition-metal ions <-> d-d transition',
              meaning: 'No d electrons or fully filled d shell often gives colorless species.'
            }
          ],
          application_insights: [
            'Unit 11 has high NEET weightage with direct plus concept-based asks.',
            'Most repeated areas: KMnO4/K2Cr2O7, oxidation states, and magnetism.',
            'Color and magnetic-property logic often appears in one-step elimination MCQs.',
            'Lanthanoid contraction is a recurring theory question with practical implications.',
            'd-block facts are commonly asked as NCERT-line based statements.'
          ],
          common_mistakes: [
            {
              mistake: 'Confusing paramagnetic and diamagnetic species',
              why: 'Unpaired-electron counting must be done carefully from configuration.'
            },
            {
              mistake: 'Forgetting d-d transition reason for color',
              why: 'Color generally requires partially filled d subshell.'
            },
            {
              mistake: 'Using incorrect oxidation states',
              why: 'Transition elements can have multiple common states; memory errors are frequent.'
            },
            {
              mistake: 'Ignoring lanthanoid contraction',
              why: 'Many trend and similarity questions depend on this effect.'
            },
            {
              mistake: 'Mixing d-block and f-block facts',
              why: 'Both are transition-related but have different electronic and chemical behavior.'
            },
            {
              mistake: 'Skipping important oxidizing compounds',
              why: 'KMnO4 and K2Cr2O7 are repeatedly asked in NEET.'
            }
          ],
          quick_revision: [
            'd-Block configuration: (n-1)d1-10 ns1-2.',
            'Transition elements show variable oxidation states.',
            'Colored ions often arise from d-d transitions.',
            'Paramagnetic species have unpaired electrons.',
            'Transition metals form complexes and alloys readily.',
            'Catalytic behavior is linked to variable oxidation states and adsorption.',
            'KMnO4 and K2Cr2O7 are strong oxidizing agents.',
            'Lanthanoids mostly show +3 oxidation state.',
            'Lanthanoid contraction: gradual size decrease across series.',
            'Actinoids are radioactive and show multiple oxidation states.'
          ],
          quiz: [
            {
              question: 'General electronic pattern of d-block elements is:',
              options: ['ns2 np1-6', '(n-1)d1-10 ns1-2', 'nf1-14 (n+1)s2', 'ns1 only'],
              correctAnswer: 1,
              explanation: 'Transition elements generally follow (n-1)d and ns filling pattern.'
            },
            {
              question: 'Color in many transition-metal ions is mainly due to:',
              options: ['nuclear fission', 'd-d transition', 'sp3 hybridization', 'ionic radius change'],
              correctAnswer: 1,
              explanation: 'Electronic transitions within split d orbitals absorb visible light.'
            },
            {
              question: 'A species with unpaired electrons is:',
              options: ['diamagnetic', 'paramagnetic', 'always colorless', 'always inert'],
              correctAnswer: 1,
              explanation: 'Unpaired electrons produce paramagnetism.'
            },
            {
              question: 'Which is a strong oxidizing agent?',
              options: ['NaCl', 'KMnO4', 'KNO3 only', 'CaCO3'],
              correctAnswer: 1,
              explanation: 'Potassium permanganate is a strong oxidizer.'
            },
            {
              question: 'Lanthanoid contraction refers to:',
              options: ['increase in size across series', 'decrease in size across lanthanoids', 'constant radius in lanthanoids', 'size change only in actinoids'],
              correctAnswer: 1,
              explanation: 'Poor shielding by 4f electrons causes gradual contraction.'
            }
          ]
        },
        {
          id: 'coordination-compounds',
          title: 'Unit 12: Coordination Compounds',
          concept_explanations: [
            {
              title: 'Basic Terms',
              description: 'Central metal atom/ion is the coordinating center; ligands are ions or molecules attached to it; coordination number is number of coordinate bonds around metal.'
            },
            {
              title: 'Types of Ligands and Chelation',
              description: 'Ligands may be monodentate, bidentate, or polydentate. Chelating ligands form ring structures and usually give high complex stability.'
            },
            {
              title: 'Werner Theory',
              description: 'Werner theory explains primary and secondary valencies and laid foundation for structure of coordination compounds.'
            },
            {
              title: 'IUPAC Nomenclature',
              description: 'Name ligands first, then metal center. Anionic ligands end with -o. Oxidation state of central metal is shown in Roman numerals.'
            },
            {
              title: 'Isomerism in Coordination Compounds',
              description: 'Structural isomerism includes ionization and linkage types; stereoisomerism includes geometrical and optical isomerism.'
            },
            {
              title: 'Valence Bond Theory and Hybridization',
              description: 'VBT explains shape through orbital overlap and hybridization: sp3 (tetrahedral), dsp2 (square planar), d2sp3 (octahedral).'
            },
            {
              title: 'Crystal Field Theory',
              description: 'CFT explains splitting of d orbitals in ligand fields and helps interpret color and magnetic behavior of complexes.'
            },
            {
              title: 'Crystal Field Splitting and Field Strength',
              description: 'In octahedral field, d orbitals split into lower t2g and higher eg sets. Strong-field ligands favor pairing; weak-field ligands generally do not.'
            },
            {
              title: 'Magnetism and Color',
              description: 'Unpaired electrons make complexes paramagnetic; fully paired complexes are diamagnetic. Many complexes are colored due to d-d transitions.'
            },
            {
              title: 'Importance of Coordination Compounds',
              description: 'They are crucial in bioinorganic systems, metallurgy, and analytical chemistry.'
            }
          ],
          key_patterns: [
            'IUPAC naming questions for complex cations and anions.',
            'Coordination-number and ligand-type identification.',
            'Structural versus stereoisomerism differentiation.',
            'Geometry prediction from hybridization and coordination number.',
            'Magnetic-nature determination from unpaired electrons.',
            'Strong-field versus weak-field ligand consequences in CFT.',
            'Color-based conceptual questions linked to d-d transitions.'
          ],
          formulas_relations: [
            {
              formula: 'Coordination number = number of donor atoms directly bonded to central metal',
              meaning: 'Core counting rule for complex composition and geometry.'
            },
            {
              formula: 'sp3 -> tetrahedral, dsp2 -> square planar, d2sp3 -> octahedral',
              meaning: 'Common VBT-hybridization and shape mapping in NEET.'
            },
            {
              formula: 'Octahedral splitting: t2g (lower) and eg (higher)',
              meaning: 'CFT basis for magnetic and color properties.'
            },
            {
              formula: 'Strong field ligand -> pairing favored; weak field ligand -> pairing less favored',
              meaning: 'Determines high-spin/low-spin tendency and magnetic behavior.'
            }
          ],
          application_insights: [
            'Coordination Compounds is very high weightage in NEET with direct plus conceptual mix.',
            'Most asked areas are nomenclature, hybridization/geometry, and magnetic nature.',
            'CFT-based strong/weak ligand logic appears regularly in PYQs.',
            'Isomerism questions are common and often elimination-based.',
            'Direct NCERT definitions and examples are frequently tested.'
          ],
          common_mistakes: [
            {
              mistake: 'Incorrect IUPAC naming order',
              why: 'Ligands must be named before central metal with proper suffix and oxidation state.'
            },
            {
              mistake: 'Confusing ligand denticity',
              why: 'Monodentate, bidentate, and polydentate differ by number of donor atoms.'
            },
            {
              mistake: 'Forgetting coordination-number counting',
              why: 'Geometry and nomenclature both depend on correct coordination number.'
            },
            {
              mistake: 'Mixing VBT and CFT interpretations',
              why: 'VBT addresses hybridization/shape while CFT explains splitting, color, and magnetic behavior.'
            },
            {
              mistake: 'Assigning wrong hybridization',
              why: 'Square planar/octahedral assignments are frequent trap points.'
            },
            {
              mistake: 'Ignoring strong versus weak ligand effects',
              why: 'Pairing behavior directly affects spin state and magnetism.'
            }
          ],
          quick_revision: [
            'Central metal + ligands form coordination entity.',
            'Coordination number equals directly attached donor atoms.',
            'Monodentate, bidentate, and polydentate ligand classification is essential.',
            'Chelation usually increases stability of complex.',
            'IUPAC: ligands first, then metal with oxidation state.',
            'Isomerism includes structural and stereoisomeric forms.',
            'sp3 tetrahedral, dsp2 square planar, d2sp3 octahedral.',
            'CFT splitting in octahedral field gives t2g and eg levels.',
            'Strong ligands favor pairing; weak ligands may keep electrons unpaired.',
            'Color and magnetism are major NEET focus points.'
          ],
          quiz: [
            {
              question: 'In [Cu(NH3)4]2+, number of ligands directly attached is:',
              options: ['2', '3', '4', '6'],
              correctAnswer: 2,
              explanation: 'Four NH3 ligands are directly bonded to Cu.'
            },
            {
              question: 'A bidentate ligand donates:',
              options: ['one donor atom', 'two donor atoms', 'three donor atoms', 'no donor atom'],
              correctAnswer: 1,
              explanation: 'Bidentate ligands coordinate through two donor sites.'
            },
            {
              question: 'Anionic ligands in IUPAC nomenclature usually end with:',
              options: ['-ide', '-ate', '-o', '-ium'],
              correctAnswer: 2,
              explanation: 'Anionic ligand names generally take suffix -o.'
            },
            {
              question: 'Hybridization corresponding to square planar geometry is:',
              options: ['sp3', 'dsp2', 'd2sp3', 'sp2'],
              correctAnswer: 1,
              explanation: 'Square planar complexes are commonly represented by dsp2 hybridization.'
            },
            {
              question: 'In octahedral CFT splitting, lower-energy set is:',
              options: ['eg', 't2g', 'both equal', 'depends only on charge sign'],
              correctAnswer: 1,
              explanation: 'In octahedral field, t2g lies lower than eg.'
            }
          ]
        }
      ],
    },
    {
      id: 'chem-organic',
      name: 'Organic Chemistry',
      chapters: [
        { id: 'purification-organic', title: 'Unit 13: Purification and Characterisation of Organic Compounds' },
        {
          id: 'basic-principles-organic',
          title: 'Unit 14: Some Basic Principles of Organic Chemistry',
          concept_explanations: [
            {
              title: 'Tetravalency of Carbon',
              description: 'Carbon forms four covalent bonds, enabling vast structural diversity and huge number of organic compounds.'
            },
            {
              title: 'Hybridization of Carbon',
              description: 'sp gives linear geometry, sp2 gives trigonal planar geometry, and sp3 gives tetrahedral geometry.'
            },
            {
              title: 'Classification by Functional Group',
              description: 'Organic compounds are classified by principal functional groups such as halides, alcohols, aldehydes, ketones, and carboxylic acids.'
            },
            {
              title: 'Homologous Series',
              description: 'Members have same functional group and similar chemical properties; successive members differ by -CH2- unit.'
            },
            {
              title: 'Isomerism',
              description: 'Structural isomerism includes chain, position, and functional isomerism. Stereoisomerism includes geometrical and optical forms.'
            },
            {
              title: 'IUPAC Nomenclature',
              description: 'Naming uses longest carbon chain, functional-group priority, and correct numbering to assign locants.'
            },
            {
              title: 'Bond Fission',
              description: 'Homolytic cleavage forms free radicals, while heterolytic cleavage forms ions.'
            },
            {
              title: 'Reactive Intermediates',
              description: 'Important intermediates are carbocation, carbanion, and free radical. Typical carbocation stability trend is 3 degree > 2 degree > 1 degree.'
            },
            {
              title: 'Electronic Effects',
              description: 'Inductive effect, resonance, hyperconjugation, and electromeric effect control stability and reactivity in organic molecules.'
            },
            {
              title: 'Reaction Types and Reagents',
              description: 'Key reaction classes are substitution, addition, elimination, and rearrangement. Nucleophiles donate electron pairs and electrophiles accept electron pairs.'
            }
          ],
          key_patterns: [
            'Hybridization and geometry identification (sp/sp2/sp3).',
            'Structural and stereoisomerism type recognition.',
            'Stability order questions for carbocations/radicals/intermediates.',
            'Inductive versus resonance effect comparison in reactivity/stability.',
            'Reaction-class identification: substitution/addition/elimination/rearrangement.',
            'IUPAC naming of functionalized organic molecules.',
            'Nucleophile versus electrophile conceptual classification.'
          ],
          formulas_relations: [
            {
              formula: 'Homologous series difference = -CH2-',
              meaning: 'Consecutive members differ by one methylene unit.'
            },
            {
              formula: 'Carbocation stability: 3 degree > 2 degree > 1 degree',
              meaning: 'General stability order due to hyperconjugation and inductive effects.'
            },
            {
              formula: 'sp -> linear, sp2 -> trigonal planar, sp3 -> tetrahedral',
              meaning: 'Hybridization-shape mapping for carbon centers.'
            },
            {
              formula: 'Homolytic cleavage -> radicals; heterolytic cleavage -> ions',
              meaning: 'Primary bond-fission pathways in mechanisms.'
            }
          ],
          application_insights: [
            'Unit 14 is a very high-weightage concept-heavy chapter in NEET.',
            'Most repeated asks involve electronic effects, stability order, and isomerism.',
            'Nomenclature plus mechanism basics are frequently integrated in one question.',
            'Intermediates and electron effects are key for predicting reaction outcomes.',
            'Many direct NCERT-style conceptual statements appear in PYQs.'
          ],
          common_mistakes: [
            {
              mistake: 'Confusing inductive and resonance effects',
              why: 'Inductive effect operates through sigma bonds; resonance through pi-electron delocalization.'
            },
            {
              mistake: 'Forgetting stability order of intermediates',
              why: 'Carbocation/radical stability trends drive mechanism-based answers.'
            },
            {
              mistake: 'Wrong IUPAC naming due to chain/priority error',
              why: 'Longest-chain selection and functional-group priority must be applied in order.'
            },
            {
              mistake: 'Mixing reaction types',
              why: 'Substitution, addition, elimination, and rearrangement have distinct signatures.'
            },
            {
              mistake: 'Ignoring hybridization before geometry',
              why: 'Correct hybridization is foundation for shape and reactivity interpretation.'
            },
            {
              mistake: 'Misidentifying intermediates',
              why: 'Carbocation, carbanion, and radical have different charge/electron features.'
            }
          ],
          quick_revision: [
            'Carbon tetravalency enables huge variety of compounds.',
            'Hybridization: sp linear, sp2 trigonal planar, sp3 tetrahedral.',
            'Homologous series members differ by -CH2-.',
            'Isomerism: structural and stereoisomerism categories.',
            'IUPAC depends on longest chain, priority, and numbering.',
            'Homolytic cleavage gives radicals; heterolytic gives ions.',
            'Carbocation stability generally 3 degree > 2 degree > 1 degree.',
            'Inductive, resonance, hyperconjugation, electromeric effects are core concepts.',
            'Know reaction classes: substitution, addition, elimination, rearrangement.',
            'Nucleophiles donate pairs; electrophiles accept pairs.'
          ],
          quiz: [
            {
              question: 'Hybridization corresponding to tetrahedral carbon is:',
              options: ['sp', 'sp2', 'sp3', 'dsp2'],
              correctAnswer: 2,
              explanation: 'sp3 carbon has tetrahedral arrangement.'
            },
            {
              question: 'Successive members of a homologous series differ by:',
              options: ['-CH3', '-CH2-', '-OH', '-COOH'],
              correctAnswer: 1,
              explanation: 'Each next member adds one methylene unit.'
            },
            {
              question: 'Homolytic bond cleavage produces:',
              options: ['cations only', 'anions only', 'free radicals', 'carbocations and carbanions together always'],
              correctAnswer: 2,
              explanation: 'Each atom takes one electron, forming radicals.'
            },
            {
              question: 'General stability order of simple alkyl carbocations is:',
              options: ['1 degree > 2 degree > 3 degree', '2 degree > 1 degree > 3 degree', '3 degree > 2 degree > 1 degree', 'all equal'],
              correctAnswer: 2,
              explanation: 'Hyperconjugation and +I effect stabilize higher substituted carbocations.'
            },
            {
              question: 'An electrophile is best described as:',
              options: ['electron pair donor', 'electron pair acceptor', 'proton donor only', 'free radical only'],
              correctAnswer: 1,
              explanation: 'Electrophiles accept electron pair from nucleophile.'
            }
          ]
        },
        {
          id: 'hydrocarbons',
          title: 'Unit 15: Hydrocarbons',
          concept_explanations: [
            {
              title: 'Classification of Hydrocarbons',
              description: 'Hydrocarbons are classified as alkanes (single bonds), alkenes (double bonds), alkynes (triple bonds), and aromatic hydrocarbons (benzene-type systems).'
            },
            {
              title: 'Alkanes and Formula',
              description: 'Open-chain saturated hydrocarbons follow formula CnH2n+2. They are largely non-polar and comparatively less reactive.'
            },
            {
              title: 'Conformations in Alkanes',
              description: 'Staggered conformation is more stable than eclipsed because of lower torsional strain.'
            },
            {
              title: 'Alkane Reactions',
              description: 'A key reaction is halogenation via free-radical substitution mechanism.'
            },
            {
              title: 'Alkenes and Formula',
              description: 'Open-chain alkenes follow CnH2n and often show geometrical (cis-trans) isomerism.'
            },
            {
              title: 'Electrophilic Addition in Alkenes',
              description: 'Alkenes undergo electrophilic addition with H2, HX, H2O etc. Markovnikov rule and peroxide effect are major NEET topics.'
            },
            {
              title: 'Markovnikov and Peroxide Effect',
              description: 'In normal HX addition, H adds to carbon already having more H (Markovnikov). In peroxide conditions (notably HBr), anti-Markovnikov addition occurs.'
            },
            {
              title: 'Ozonolysis of Alkenes',
              description: 'Ozonolysis cleaves C=C bond and helps identify alkene structure through carbonyl products.'
            },
            {
              title: 'Alkynes and Formula',
              description: 'Open-chain alkynes follow CnH2n-2. Terminal alkynes show acidic character and participate in addition and polymerization reactions.'
            },
            {
              title: 'Aromatic Hydrocarbons and Benzene',
              description: 'Benzene is planar and resonance-stabilized. Aromaticity follows Huckel rule: (4n+2) pi electrons.'
            },
            {
              title: 'Electrophilic Substitution in Benzene',
              description: 'Important reactions include nitration, halogenation, and Friedel-Crafts reactions with directing effects of substituents.'
            }
          ],
          key_patterns: [
            'Reaction-mechanism questions for alkene addition and benzene substitution.',
            'Markovnikov versus anti-Markovnikov product prediction.',
            'Cis-trans isomerism identification in alkenes.',
            'Aromaticity evaluation by Huckel (4n+2) pi rule.',
            'Ozonolysis product-based structure determination.',
            'Carbocation stability and intermediate-based product prediction.',
            'Direct classification and reaction-type conceptual questions.'
          ],
          formulas_relations: [
            {
              formula: 'Alkanes: CnH2n+2',
              meaning: 'General formula for open-chain saturated hydrocarbons.'
            },
            {
              formula: 'Alkenes: CnH2n',
              meaning: 'General formula for open-chain mono-unsaturated hydrocarbons.'
            },
            {
              formula: 'Alkynes: CnH2n-2',
              meaning: 'General formula for open-chain mono-alkynes.'
            },
            {
              formula: 'Aromaticity condition: (4n+2) pi electrons',
              meaning: 'Huckel criterion for aromatic stabilization in cyclic conjugated systems.'
            },
            {
              formula: 'Markovnikov rule: H adds to carbon already richer in H',
              meaning: 'Guides major product in electrophilic addition to unsymmetrical alkenes.'
            }
          ],
          application_insights: [
            'Hydrocarbons is a very high-weightage reaction-based chapter in NEET.',
            'Most repeated asks are alkene additions, benzene substitutions, and Markovnikov logic.',
            'Peroxide-effect and ozonolysis products are frequent trap-style questions.',
            'Aromaticity and directing effects are often tested in conceptual MCQs.',
            'Mechanism awareness strongly improves product prediction speed.'
          ],
          common_mistakes: [
            {
              mistake: 'Confusing Markovnikov and anti-Markovnikov additions',
              why: 'Peroxide condition changes orientation in specific cases like HBr addition.'
            },
            {
              mistake: 'Forgetting peroxide effect condition',
              why: 'Anti-Markovnikov behavior is not universal for all HX additions.'
            },
            {
              mistake: 'Mixing addition and substitution reaction types',
              why: 'Alkenes mostly undergo addition while benzene prefers substitution to retain aromaticity.'
            },
            {
              mistake: 'Ignoring resonance stabilization of benzene',
              why: 'This explains aromatic substitution preference over addition.'
            },
            {
              mistake: 'Wrong product prediction in ozonolysis',
              why: 'Double-bond cleavage must be tracked carbon by carbon.'
            },
            {
              mistake: 'Misunderstanding aromaticity criterion',
              why: 'Planarity, cyclic conjugation, and (4n+2) pi count are all required.'
            }
          ],
          quick_revision: [
            'Hydrocarbons: alkanes, alkenes, alkynes, aromatic types.',
            'Alkane formula CnH2n+2; alkene CnH2n; alkyne CnH2n-2.',
            'Staggered alkane conformation is more stable than eclipsed.',
            'Alkanes: free-radical substitution (halogenation).',
            'Alkenes: electrophilic addition reactions are key.',
            'Markovnikov rule and peroxide effect must be memorized with conditions.',
            'Ozonolysis cleaves double bond to carbonyl compounds.',
            'Terminal alkynes show acidic character.',
            'Benzene is resonance stabilized and follows aromaticity rules.',
            'Benzene mainly undergoes electrophilic substitution (nitration, halogenation, Friedel-Crafts).'
          ],
          quiz: [
            {
              question: 'General formula of open-chain alkane is:',
              options: ['CnH2n', 'CnH2n+2', 'CnH2n-2', 'CnHn'],
              correctAnswer: 1,
              explanation: 'Saturated open-chain hydrocarbons follow CnH2n+2.'
            },
            {
              question: 'More stable conformation of ethane is:',
              options: ['eclipsed', 'staggered', 'boat', 'chair'],
              correctAnswer: 1,
              explanation: 'Staggered form has lower torsional strain and is more stable.'
            },
            {
              question: 'In Markovnikov addition of HX to an unsymmetrical alkene, hydrogen goes to:',
              options: ['carbon with fewer H', 'carbon with more H', 'most substituted carbon always without exception', 'random carbon'],
              correctAnswer: 1,
              explanation: 'Hydrogen adds to the carbon already bearing more hydrogens.'
            },
            {
              question: 'Huckel aromaticity rule is:',
              options: ['(4n) pi electrons', '(4n+2) pi electrons', '(2n) pi electrons', '(n+2) pi electrons'],
              correctAnswer: 1,
              explanation: 'Planar cyclic conjugated systems with (4n+2) pi electrons are aromatic.'
            },
            {
              question: 'Main reaction type of benzene is:',
              options: ['electrophilic addition', 'electrophilic substitution', 'free-radical polymerization only', 'nucleophilic elimination'],
              correctAnswer: 1,
              explanation: 'Benzene tends to undergo substitution to preserve aromatic stability.'
            }
          ]
        },
        {
          id: 'organic-halogen-compounds',
          title: 'Unit 16: Haloalkanes and Haloarenes',
          concept_explanations: [
            {
              title: 'Haloalkanes Basics',
              description: 'Haloalkanes have general form R-X where X is halogen (F, Cl, Br, I) attached to alkyl group.'
            },
            {
              title: 'Nature of C-X Bond',
              description: 'C-X bond is polarized due to electronegativity difference. Bond strength trend is typically C-F > C-Cl > C-Br > C-I.'
            },
            {
              title: 'Preparation Methods',
              description: 'Haloalkanes are prepared from alcohols and by free-radical halogenation of alkanes.'
            },
            {
              title: 'Nucleophilic Substitution: SN1',
              description: 'SN1 is two-step with carbocation intermediate. Carbocation stability controls rate (3 degree > 2 degree > 1 degree).' 
            },
            {
              title: 'Nucleophilic Substitution: SN2',
              description: 'SN2 is one-step backside attack mechanism. Steric hindrance controls rate with order usually 1 degree > 2 degree > 3 degree.'
            },
            {
              title: 'Elimination (E1/E2) and Zaitsev Rule',
              description: 'Elimination gives alkenes; in many cases, more substituted alkene is major product (Zaitsev orientation).'
            },
            {
              title: 'Haloarenes Basics',
              description: 'Haloarenes have halogen directly attached to aromatic ring (for example chlorobenzene).'
            },
            {
              title: 'Reactivity of Haloarenes',
              description: 'C-X bond in haloarenes has partial double-bond character due to resonance, making nucleophilic substitution difficult compared with haloalkanes.'
            },
            {
              title: 'Electrophilic Substitution in Haloarenes',
              description: 'Halogens are overall deactivating because of -I effect but direct incoming electrophiles to ortho and para positions due to resonance donation.'
            },
            {
              title: 'Reactivity and Leaving Group Trends',
              description: 'Typical haloalkane reactivity in substitution: RI > RBr > RCl > RF. Leaving-group ability generally: I- > Br- > Cl- > F-.'
            },
            {
              title: 'Solvent and Environmental Effects',
              description: 'Polar protic solvents favor SN1 while polar aprotic solvents favor SN2. Environmentally important examples include DDT toxicity and freons causing ozone depletion.'
            }
          ],
          key_patterns: [
            'SN1 versus SN2 mechanism identification from substrate and conditions.',
            'Reactivity-order questions among alkyl halides and leaving groups.',
            'Product prediction for substitution versus elimination.',
            'Zaitsev-rule based major alkene determination.',
            'Reasoning why haloarenes are less reactive in nucleophilic substitution.',
            'Ortho/para directing behavior of halogens in aromatic substitution.',
            'Solvent-effect based mechanism prediction (protic vs aprotic).'
          ],
          formulas_relations: [
            {
              formula: 'Haloalkane form: R-X',
              meaning: 'Alkyl group directly bonded to halogen atom.'
            },
            {
              formula: 'C-X bond strength: C-F > C-Cl > C-Br > C-I',
              meaning: 'Bond dissociation trend important for reactivity discussions.'
            },
            {
              formula: 'SN1 substrate preference: 3 degree > 2 degree > 1 degree',
              meaning: 'More stable carbocation forms faster in SN1 pathway.'
            },
            {
              formula: 'SN2 substrate preference: 1 degree > 2 degree > 3 degree',
              meaning: 'Lower steric hindrance favors backside attack.'
            },
            {
              formula: 'Reactivity of alkyl halides: RI > RBr > RCl > RF',
              meaning: 'Usually parallels leaving-group ability trend.'
            },
            {
              formula: 'Leaving-group ability: I- > Br- > Cl- > F-',
              meaning: 'Better leaving group gives faster substitution/elimination in many cases.'
            },
            {
              formula: 'Polar protic -> SN1 favored; polar aprotic -> SN2 favored',
              meaning: 'Solvent polarity and solvation influence mechanism pathway.'
            }
          ],
          application_insights: [
            'This chapter has high NEET weightage and is strongly mechanism based.',
            'Most repeated asks: SN1/SN2 distinction, reactivity order, and Zaitsev major product.',
            'Haloarene lower reactivity versus haloalkanes is a classic conceptual test.',
            'Solvent and leaving-group logic helps eliminate wrong options quickly.',
            'Environmental examples like DDT and freons often appear in direct factual questions.'
          ],
          common_mistakes: [
            {
              mistake: 'Confusing SN1 and SN2 pathways',
              why: 'SN1 has carbocation intermediate; SN2 is concerted backside attack.'
            },
            {
              mistake: 'Forgetting haloarenes are less reactive in nucleophilic substitution',
              why: 'Resonance imparts partial double-bond character to aryl C-X bond.'
            },
            {
              mistake: 'Mixing substitution and elimination products',
              why: 'Reaction conditions (base, temperature, substrate) determine dominant pathway.'
            },
            {
              mistake: 'Using wrong reactivity order among alkyl halides',
              why: 'Leaving-group ability strongly affects rate trends.'
            },
            {
              mistake: 'Ignoring solvent effect',
              why: 'Protic and aprotic solvents differently stabilize intermediates and nucleophiles.'
            },
            {
              mistake: 'Misapplying Zaitsev rule',
              why: 'Major alkene often depends on substitution and mechanism constraints.'
            }
          ],
          quick_revision: [
            'Haloalkanes have general form R-X.',
            'C-X bond is polarized; C-F strongest and C-I weakest among common C-X bonds.',
            'SN1 is two-step via carbocation; SN2 is one-step backside attack.',
            'SN1 prefers tertiary substrates; SN2 prefers primary substrates.',
            'Elimination can give alkenes; Zaitsev orientation often dominates.',
            'Haloarenes are less reactive in nucleophilic substitution due to resonance.',
            'In aromatic substitution, halogens are deactivating but ortho/para directing.',
            'Alkyl-halide reactivity trend: RI > RBr > RCl > RF.',
            'Leaving group trend: I- > Br- > Cl- > F-.',
            'Polar protic solvents favor SN1; polar aprotic solvents favor SN2.'
          ],
          quiz: [
            {
              question: 'General representation of haloalkane is:',
              options: ['Ar-X', 'R-X', 'R-OH', 'R-COOH'],
              correctAnswer: 1,
              explanation: 'In haloalkanes, halogen is bonded to alkyl group (R-X).'
            },
            {
              question: 'Typical SN2 reactivity order is:',
              options: ['3 degree > 2 degree > 1 degree', '1 degree > 2 degree > 3 degree', '2 degree > 1 degree > 3 degree', 'all equal'],
              correctAnswer: 1,
              explanation: 'Backside attack is easiest for least hindered primary substrates.'
            },
            {
              question: 'Most suitable leaving-group trend is:',
              options: ['F- > Cl- > Br- > I-', 'I- > Br- > Cl- > F-', 'Cl- > I- > F- > Br-', 'Br- > F- > I- > Cl-'],
              correctAnswer: 1,
              explanation: 'Better leaving groups are weaker bases and more stable anions.'
            },
            {
              question: 'Haloarenes are less reactive toward nucleophilic substitution mainly because:',
              options: ['they are nonpolar', 'C-X bond has partial double-bond character due to resonance', 'they lack halogen atoms', 'aromatic ring is always positively charged'],
              correctAnswer: 1,
              explanation: 'Resonance strengthens aryl C-X bond and reduces substitution tendency.'
            },
            {
              question: 'Polar aprotic solvent generally favors:',
              options: ['SN1', 'SN2', 'only E1', 'only electrophilic aromatic substitution'],
              correctAnswer: 1,
              explanation: 'Aprotic solvents keep nucleophiles relatively unsolvated and more reactive for SN2.'
            }
          ]
        },
        {
          id: 'organic-oxygen-compounds',
          title: 'Unit 17: Oxygen-Containing Organic Compounds',
          concept_explanations: [
            {
              title: 'Alcohols Basic Structure',
              description: 'Alcohols have general form R-OH and are classified as primary, secondary, or tertiary based on carbon bearing OH group.'
            },
            {
              title: 'Preparation of Alcohols',
              description: 'Common methods include hydration of alkenes and substitution routes from haloalkanes.'
            },
            {
              title: 'Alcohol Reactions: Dehydration',
              description: 'Acid-catalyzed dehydration converts alcohols to alkenes and often follows Zaitsev orientation for major product.'
            },
            {
              title: 'Alcohol Reactions: Oxidation',
              description: 'Primary alcohols oxidize to aldehydes then acids, secondary alcohols to ketones, while tertiary alcohols resist normal oxidation under mild conditions.'
            },
            {
              title: 'Lucas Test',
              description: 'Lucas reagent helps distinguish 1 degree, 2 degree, and 3 degree alcohols based on turbidity development rate.'
            },
            {
              title: 'Phenols Structure and Acidity',
              description: 'Phenols are Ar-OH compounds and are more acidic than alcohols due to resonance stabilization of phenoxide ion.'
            },
            {
              title: 'Phenol Reactions',
              description: 'Phenols undergo electrophilic substitution (ortho/para directing), nitration, halogenation, and Reimer-Tiemann reaction.'
            },
            {
              title: 'Ethers Basic Features',
              description: 'Ethers have general structure R-O-R, are comparatively less reactive, and are prepared by Williamson ether synthesis.'
            },
            {
              title: 'Ether Reactions',
              description: 'Ethers undergo cleavage with HX under suitable conditions to give alkyl halides/alcohol derivatives.'
            },
            {
              title: 'Hydrogen Bonding and Trends',
              description: 'Alcohols and phenols show hydrogen bonding, giving higher boiling points. Acidity trend: phenol > alcohol.'
            },
            {
              title: 'Reactivity Trends in Alcohols',
              description: 'For many substitution/dehydration contexts, reactivity often follows 3 degree > 2 degree > 1 degree due to carbocation stability factors.'
            },
            {
              title: 'Carbonyl Compounds and Nature of C=O',
              description: 'Aldehydes (R-CHO) and ketones (R-CO-R) contain a polar carbonyl group. Carbonyl carbon is electrophilic and undergoes nucleophilic addition.'
            },
            {
              title: 'Reactivity of Carbonyls',
              description: 'Aldehydes are generally more reactive than ketones toward nucleophilic addition due to lower steric hindrance and weaker electron donation by alkyl groups.'
            },
            {
              title: 'Core Carbonyl Reactions',
              description: 'Important transformations include cyanohydrin formation (HCN), imine formation with ammonia derivatives, reduction to alcohols, and oxidation of aldehydes to carboxylic acids.'
            },
            {
              title: 'Aldol, Cannizzaro, and Haloform Reactions',
              description: 'Aldol involves aldehydes/ketones with alpha-H; Cannizzaro occurs for aldehydes without alpha-H; haloform is characteristic of methyl ketones.'
            },
            {
              title: 'Identification Tests of Carbonyl Compounds',
              description: 'Tollens and Fehling tests identify aldehydes in standard school-level context; iodoform test identifies methyl ketone functionality.'
            },
            {
              title: 'Carboxylic Acids: Structure and Acidity',
              description: 'Carboxylic acids have form R-COOH and are acidic due to resonance stabilization of carboxylate ion. Acidity order: carboxylic acid > phenol > alcohol.'
            },
            {
              title: 'Substituent Effect and Alpha Hydrogen',
              description: 'Electron-withdrawing groups increase carboxylic acid acidity, while alpha-hydrogen presence governs key reactions like aldol chemistry.'
            }
          ],
          key_patterns: [
            'Classification of alcohols as 1 degree/2 degree/3 degree.',
            'Mechanism and product prediction in alcohol dehydration and oxidation.',
            'Phenol electrophilic substitution and Reimer-Tiemann-based questions.',
            'Acidity comparisons between alcohols and phenols.',
            'Ether preparation by Williamson synthesis and cleavage reactions.',
            'Lucas test based identification problems.',
            'Hydrogen-bonding effects on physical properties.',
            'Carbonyl reaction-product prediction in nucleophilic addition and oxidation-reduction.',
            'Named reactions: Aldol, Cannizzaro (no alpha-H condition), and haloform.',
            'Identification tests: Tollens, Fehling, and iodoform.',
            'Reactivity order and acidity order objective questions.'
          ],
          formulas_relations: [
            {
              formula: 'Alcohol: R-OH; Phenol: Ar-OH; Ether: R-O-R',
              meaning: 'Core structural representations in this unit.'
            },
            {
              formula: 'Acidity trend: Phenol > Alcohol',
              meaning: 'Phenoxide ion is resonance stabilized, making phenol comparatively more acidic.'
            },
            {
              formula: 'Typical oxidation: 1 degree alcohol -> aldehyde -> acid; 2 degree alcohol -> ketone',
              meaning: 'Standard oxidation progression under suitable oxidizing conditions.'
            },
            {
              formula: 'Typical alcohol reactivity trend (many contexts): 3 degree > 2 degree > 1 degree',
              meaning: 'Often linked to intermediate stability in acid-catalyzed pathways.'
            },
            {
              formula: 'Aldehyde: R-CHO; Ketone: R-CO-R; Carboxylic acid: R-COOH',
              meaning: 'Key oxygen-containing organic functional groups for Part 2.'
            },
            {
              formula: 'Carbonyl reactivity: Aldehyde > Ketone',
              meaning: 'Lower steric hindrance and lesser +I effect increase aldehyde reactivity.'
            },
            {
              formula: 'Acidity order: Carboxylic acid > Phenol > Alcohol',
              meaning: 'Conjugate-base stabilization determines acidic strength trend.'
            },
            {
              formula: 'Cannizzaro condition: aldehyde without alpha-H',
              meaning: 'Only non-enolizable aldehydes undergo disproportionation in strong base.'
            }
          ],
          application_insights: [
            'Unit 17 is very high-weightage and reaction-driven in NEET.',
            'Most asked topics are alcohol reactions, phenol acidity, and Reimer-Tiemann transformation.',
            'Oxidation product prediction and Lucas-test identification are frequent objective patterns.',
            'Acidity and resonance logic helps solve many conceptual comparisons quickly.',
            'Ethers are less reactive but cleavage and Williamson synthesis are repeatedly tested.',
            'Part 2 is strongly reaction-heavy: nucleophilic addition, named reactions, and aldehyde/ketone differentiation are repeatedly asked.',
            'Identification tests and product prediction from carbonyl compounds are among the most repeated PYQ patterns.'
          ],
          common_mistakes: [
            {
              mistake: 'Confusing alcohol and phenol behavior',
              why: 'Phenol has aromatic ring conjugation that changes acidity and substitution pattern.'
            },
            {
              mistake: 'Forgetting phenol is more acidic than alcohol',
              why: 'Resonance stabilization of phenoxide ion is often neglected.'
            },
            {
              mistake: 'Mixing oxidation products of 1 degree and 2 degree alcohols',
              why: 'Primary gives aldehyde/acid while secondary gives ketone.'
            },
            {
              mistake: 'Ignoring Zaitsev orientation in dehydration',
              why: 'Major alkene often corresponds to more substituted double bond.'
            },
            {
              mistake: 'Incorrect use of Lucas test logic',
              why: 'Rate of turbidity must be interpreted carefully for class of alcohol.'
            },
            {
              mistake: 'Assuming ethers are highly reactive like alcohols',
              why: 'Ethers are relatively inert except under strong cleavage conditions.'
            },
            {
              mistake: 'Confusing aldehydes and ketones in tests',
              why: 'Tollens/Fehling generally detect aldehydes while iodoform detects methyl ketones.'
            },
            {
              mistake: 'Applying Cannizzaro reaction to aldehydes with alpha-H',
              why: 'Cannizzaro requires non-enolizable aldehydes (no alpha-H).'
            },
            {
              mistake: 'Mixing oxidation behavior of aldehydes and ketones',
              why: 'Aldehydes oxidize easily to acids, while ketones resist mild oxidation.'
            },
            {
              mistake: 'Ignoring steric factors in carbonyl reactivity',
              why: 'Aldehydes are usually more reactive than ketones in nucleophilic addition.'
            }
          ],
          quick_revision: [
            'Alcohol structure: R-OH; phenol: Ar-OH; ether: R-O-R.',
            'Alcohol classes: primary, secondary, tertiary.',
            'Dehydration of alcohol gives alkene, often Zaitsev major product.',
            'Oxidation: 1 degree to aldehyde/acid, 2 degree to ketone, 3 degree resistant (mild).',
            'Lucas test distinguishes classes by turbidity timing.',
            'Phenol is more acidic than alcohol due to resonance.',
            'Phenol is ortho/para directing in electrophilic substitution.',
            'Reimer-Tiemann introduces aldehyde functionality to phenol ring system.',
            'Ethers are prepared by Williamson synthesis.',
            'Ethers cleave with HX under suitable conditions.',
            'Aldehyde: R-CHO; ketone: R-CO-R; carboxylic acid: R-COOH.',
            'Carbonyl carbon is electrophilic due to polarized C=O bond.',
            'Reactivity in nucleophilic addition: aldehyde > ketone.',
            'Aldehyde oxidation gives carboxylic acid; ketones are oxidation-resistant under mild conditions.',
            'Named reactions to remember: Aldol, Cannizzaro, Haloform.',
            'Cannizzaro requires aldehyde without alpha-H; haloform is characteristic of methyl ketone.',
            'Identification tests: Tollens and Fehling for aldehyde, iodoform for methyl ketone.',
            'Acidity order: carboxylic acid > phenol > alcohol.',
            'Electron-withdrawing groups increase carboxylic acid acidity.'
          ],
          quiz: [
            {
              question: 'General structure of alcohol is:',
              options: ['Ar-OH', 'R-O-R', 'R-OH', 'R-COOH'],
              correctAnswer: 2,
              explanation: 'Alcohols are represented as R-OH.'
            },
            {
              question: 'Phenol is more acidic than alcohol mainly because:',
              options: ['higher molecular mass', 'resonance stabilization of conjugate base', 'presence of oxygen only', 'greater boiling point'],
              correctAnswer: 1,
              explanation: 'Phenoxide ion is resonance stabilized unlike simple alkoxide ion.'
            },
            {
              question: 'Oxidation of a secondary alcohol usually gives:',
              options: ['aldehyde', 'carboxylic acid', 'ketone', 'alkene'],
              correctAnswer: 2,
              explanation: 'Secondary alcohols typically oxidize to ketones.'
            },
            {
              question: 'A common synthesis route for ethers is:',
              options: ['Friedel-Crafts', 'Williamson synthesis', 'Cannizzaro reaction', 'Wurtz reaction'],
              correctAnswer: 1,
              explanation: 'Williamson ether synthesis is standard method for ether preparation.'
            },
            {
              question: 'Lucas test is used to identify differences among:',
              options: ['alkenes', 'carboxylic acids', '1 degree/2 degree/3 degree alcohols', 'alkynes'],
              correctAnswer: 2,
              explanation: 'Lucas reagent distinguishes alcohol classes by reaction rate/turbidity.'
            },
            {
              question: 'Which is generally more reactive toward nucleophilic addition?',
              options: ['ketone', 'aldehyde', 'both equal always', 'carboxylate ion'],
              correctAnswer: 1,
              explanation: 'Aldehydes are usually more reactive due to lower steric hindrance.'
            },
            {
              question: 'Cannizzaro reaction is shown by:',
              options: ['all ketones', 'aldehydes with alpha-H', 'aldehydes without alpha-H', 'all carboxylic acids'],
              correctAnswer: 2,
              explanation: 'Non-enolizable aldehydes (without alpha-H) undergo Cannizzaro reaction.'
            },
            {
              question: 'Iodoform test is positive for:',
              options: ['all aldehydes', 'methyl ketones', 'all carboxylic acids', 'all ethers'],
              correctAnswer: 1,
              explanation: 'Methyl ketone functionality gives positive iodoform test.'
            },
            {
              question: 'Correct acidity order is:',
              options: ['Alcohol > Phenol > Carboxylic acid', 'Phenol > Carboxylic acid > Alcohol', 'Carboxylic acid > Phenol > Alcohol', 'Alcohol > Carboxylic acid > Phenol'],
              correctAnswer: 2,
              explanation: 'Carboxylate ion is most stabilized, then phenoxide, then alkoxide.'
            }
          ]
        },
        { id: 'organic-nitrogen-compounds', title: 'Unit 18: Organic Compounds Containing Nitrogen' },
        { id: 'biomolecules', title: 'Unit 19: Biomolecules' },
        { id: 'practical-chemistry-principles', title: 'Unit 20: Principles Related to Practical Chemistry' }
      ],
    },
  ],
}
