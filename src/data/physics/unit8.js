// Physics — Unit 8: Thermodynamics

const thermodynamics = {
  id: 'thermodynamics',
  title: 'Chapter 8: Thermodynamics',
  notes: [
    {
      concept: 'Thermal Equilibrium & Zeroth Law: Two systems in thermal equilibrium with a third system are in thermal equilibrium with each other. This law establishes the concept of Temperature.',
      fact: 'Temperature determines the direction of heat flow.',
      tip: 'Thermometers are basically a physical application of the Zeroth Law.',
    },
    {
      concept: 'First Law of Thermodynamics: Energy conservation for thermal systems. ΔQ = ΔU + ΔW (Heat specific to the system = Change in internal energy + Work done by the gas).',
      fact: 'Work done by gas ΔW = PΔV. If volume increases, work is positive. If volume decreases, work is negative.',
      tip: 'Internal energy (U) depends ONLY on the initial and final states (temperature), it is a state variable. Q and W depend on the path taken.',
    },
    {
      concept: 'Thermodynamic Processes: 1. Isothermal (T = const, ΔU = 0, Q = W). 2. Adiabatic (Q = 0, gas expands => cools, compresses => heats up). 3. Isochoric (V = const, W = 0, Q = ΔU). 4. Isobaric (P = const, W = PΔV).',
      fact: 'For an adiabatic process, PVᵞ = constant, TV^(γ-1) = constant. The slope of adiabatic curve on P-V diagram is γ times steeper than isothermal curve.',
      tip: 'In a cyclic process, the net change in internal energy (ΔU) is 0 over the entire loop. Net Work is area inside the loop.',
    },
    {
      concept: 'Specific Heats: Cp - Cv = R (Mayer\'s relation). γ = Cp / Cv. For monoatomic gas, γ = 5/3 (1.67). For diatomic, γ = 7/5 (1.4). For polyatomic, γ = 4/3 (1.33).',
      fact: 'Internal energy U depends only on temperature for ideal gases. U = n Cv T.',
      tip: 'Work done in isothermal process: W = nRT ln(Vf/Vi). Work done in adiabatic process: W = (PiVi - PfVf) / (γ - 1) = nR(Ti - Tf) / (γ - 1).',
    },
    {
      concept: 'Second Law of Thermodynamics: Kelvin-Planck statement: Impossible to construct an engine taking heat from hot reservoir and doing equal amount of work without rejecting heat to cold sink. Clausius: heat cannot spontaneously flow from cold to hot body.',
      fact: 'Reversible processes are idealizations (they must be infinitely slow, no friction). All real-world processes are irreversible.',
      tip: 'Carnot Engine Efficiency η = 1 - (T2/T1) = 1 - (Q2/Q1). Needs temperatures in Kelvins. A refrigerator has Coefficient of Performance α = T2 / (T1 - T2).',
    },
  ],
  quiz: [
    {
      question: 'In an adiabatic process on an ideal gas, which of the following relations is correct?',
      options: ['PV = constant', 'PT^γ = constant', 'TV^(γ-1) = constant', 'VT^γ = constant'],
      correctAnswer: 2,
      explanation: 'The equation for an adiabatic process is PV^γ = constant. Since P = nRT/V, substituting gives (T/V)*V^γ = constant => TV^(γ-1) = constant.',
    },
    {
      question: 'Efficiency of a Carnot engine working between ice point (0°C) and steam point (100°C) is:',
      options: ['100%', '26.8%', '50%', '36.6%'],
      correctAnswer: 1,
      explanation: 'T1 (hot) = 100°C = 373 K. T2 (cold) = 0°C = 273 K. Efficiency η = 1 - (T2/T1) = 1 - (273/373) = 100 / 373 ≈ 0.268 or 26.8%. Always convert to Kelvins!',
    },
    {
      question: 'During an isothermal expansion of an ideal gas:',
      options: ['Internal energy increases', 'Internal energy decreases', 'Enthalpy goes to zero', 'All heat added is converted into work done'],
      correctAnswer: 3,
      explanation: 'In an isothermal process, temperature T is constant. Therefore, internal energy (which depends only on T) does not change (ΔU = 0). By first law, ΔQ = ΔU + ΔW => ΔQ = ΔW.',
    },
    {
      question: 'Which law of thermodynamics defines the concept of temperature?',
      options: ['Zeroth law', 'First law', 'Second law', 'Third law'],
      correctAnswer: 0,
      explanation: 'The Zeroth Law of Thermodynamics establishes the concept of temperature by defining thermal equilibrium across systems.',
    },
    {
      question: 'For a gas, difference between the two specific heats (Cp - Cv) is equal to 5000 J/(kg K) and ratio of specific heats is 1.4. The values of Cp and Cv are respectively:',
      options: ['17500 and 12500', '14000 and 10000', '7000 and 2000', '2500 and 1500'],
      correctAnswer: 0,
      explanation: 'Cp - Cv = 5000 and Cp/Cv = 1.4 => Cp = 1.4Cv. Substituting: 1.4Cv - Cv = 5000 => 0.4Cv = 5000 => Cv = 5000/0.4 = 12500 J/(kg K). Then Cp = 12500 * 1.4 = 17500 J/(kg K).',
    },
  ],
};

export default {
  id: 'phy-u8',
  name: 'Unit 8: Thermodynamics',
  chapters: [thermodynamics],
};
