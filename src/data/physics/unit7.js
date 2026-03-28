// Physics — Unit 7: Properties of Solids and Liquids

const propertiesStToMech = {
  id: 'prop-solids-liquids',
  title: 'Chapter 7: Properties of Solids and Liquids',
  notes: [
    {
      concept: 'Elastic behaviour: Stress = Restoring Force / Area. Strain = Change in Dimension / Original Dimension. Hooke\'s Law states that within the elastic limit, Stress ∝ Strain.',
      fact: 'Steel is more elastic than rubber because for a given stress, steel yields a smaller strain compared to rubber (Higher Young\'s modulus).',
      tip: 'The area under the Stress-Strain curve up to the fracture point indicates the toughness of the material.',
    },
    {
      concept: 'Moduli of Elasticity: 1. Young\'s Modulus (Y) = Tensile Stress / Longitudinal Strain. 2. Shear Modulus or Modulus of Rigidity (G) = Shear Stress / Shear Strain. 3. Bulk Modulus (K) = Hydraulic Stress / Volume Strain.',
      fact: 'Compressibility is the reciprocal of Bulk Modulus (1/K). Gases possess highest compressibility.',
      tip: 'Elastic potential energy stored in a stretched wire per unit volume = ½ × Stress × Strain = ½ Y (Strain)². Total energy = ½ F × ΔL.',
    },
    {
      concept: 'Hydrostatics: Pascal\'s Law: Pressure in a confined fluid is transmitted equally in all directions (applications: hydraulic lift, hydraulic brakes). Pressure due to liquid column P = rρg + P0.',
      fact: 'Gauge pressure is the pressure in excess of the atmospheric pressure (= P - P0).',
      tip: 'Archimedes\' Principle: The upward buoyant force exerted on a body immersed in a fluid is equal to the weight of the fluid that the body displaces.',
    },
    {
      concept: 'Fluid Dynamics: Streamline flow (steady flow) and turbulent flow (chaotic, beyond critical velocity). Equation of continuity: A1v1 = A2v2 (conservation of mass).',
      fact: 'Bernoulli\'s principle: For an incompressible, non-viscous fluid, the total energy per unit volume (P + ½ρv² + ρgh) is constant (Conservation of Energy).',
      tip: 'Applications of Bernoulli: Dynamic lift (Magnus effect, aircraft wing), Venturi meter (flow rate), Atomizer, Heart attacks (due to pressure drops).',
    },
    {
      concept: 'Viscosity and Stoke\'s Law: Viscous drag F = -ηA(dv/dx). Stoke\'s law gives viscous force on a small sphere: F = 6πηrv.',
      fact: 'Terminal velocity is achieved when viscous drag + buoyant force = weight. v_t = 2r²(ρ-σ)g / (9η).',
      tip: 'Raindrops fall with a constant terminal velocity due to air viscosity, preventing extreme destructive impact.',
    },
    {
      concept: 'Surface Tension: Force per unit length on liquid surface. Arises due to cohesive forces. Surface Energy = Surface Tension(T) × Area.',
      fact: 'Excess pressure inside a liquid drop is 2T/R. Inside a soap bubble is 4T/R (due to two surfaces).',
      tip: 'Capillary Rise formula: h = 2T cosθ / (rρg). If angle of contact θ > 90° (like mercury, non-wetting), the liquid level falls (capillary depression). If θ < 90° (water, wetting), it rises.',
    },
    {
      concept: 'Thermal Properties: Heat, Temperature, Thermal Expansion. Linear expansion ΔL = LαΔT. Volume expansion ΔV = VγΔT, where γ = 3α. Specific heat capacity Q = mcΔT. Latent heat Q = mL.',
      fact: 'Water has an anomalous expansion: it contracts on heating from 0°C to 4°C, resulting in maximum density at 4°C. Allows aquatic life to survive under frozen lakes.',
      tip: 'Newton\'s Law of Cooling: Rate of heat loss is proportional to temperature difference: dT/dt = -k(T - Ts). Heat transfer mechanisms: Conduction (solids), Convection (fluids), Radiation (no medium).',
    },
  ],
  quiz: [
    {
      question: 'Which of the following describes why an aircraft wing (aerofoil) experiences a dynamic lift?',
      options: ['Higher velocity and lower pressure over the top surface', 'Lower velocity and higher pressure over the top surface', 'Higher velocity and higher pressure over the top surface', 'Lower velocity and lower pressure over the top surface'],
      correctAnswer: 0,
      explanation: 'According to Bernoulli’s Principle, an increase in airspeed implies a decrease in pressure. Flow is faster over the top (curved) surface, causing lower pressure above and higher pressure below, pushing the plane up.',
    },
    {
      question: 'What is the terminal velocity of a spherical body falling through a viscous medium directly proportional to?',
      options: ['Radius of the sphere', 'Square of the radius of the sphere', 'Square root of the radius of the sphere', 'Inversely proportional to the radius'],
      correctAnswer: 1,
      explanation: 'The formula for terminal velocity is v_t = 2r²(ρ - σ)g / 9η. Hence, v_t is directly proportional to r² (the square of the radius).',
    },
    {
      question: 'In a hydraulic lift, a force of 10 N is applied to a small piston of area 1 cm². The force generated at a larger piston of area 100 cm² is:',
      options: ['10 N', '100 N', '1000 N', '10000 N'],
      correctAnswer: 2,
      explanation: 'According to Pascal\'s Law, pressure is transmitted equally: F1/A1 = F2/A2. Thus, 10 / 1 = F2 / 100 => F2 = 1000 N.',
    },
    {
      question: 'If two soap bubbles of different radii r1 and r2 (r1 < r2) are placed in communication via a tube, what will happen?',
      options: ['Air flows from larger to smaller bubble until sizes are equal', 'Air flows from smaller to larger bubble until the smaller one collapses', 'No air flows', 'They explode immediately'],
      correctAnswer: 1,
      explanation: 'Pressure inside a soap bubble is P = P0 + 4T/r. The smaller bubble has a smaller radius, so it contains air at a HIGHER pressure. Thus, air flows from high pressure (smaller bubble) to low pressure (larger bubble), making the smaller one smaller and larger one larger.',
    },
    {
      question: 'The specific heat of an ideal gas during an isothermal process is:',
      options: ['Zero', 'Infinite', 'Constant but non-zero', 'Negative'],
      correctAnswer: 1,
      explanation: 'Specific heat C = ΔQ / (mΔT). Since process is isothermal, temperature remains constant, so ΔT = 0. Thus, C = ΔQ/0 = infinity.',
    },
  ],
};

export default {
  id: 'phy-u7',
  name: 'Unit 7: Properties of Solids and Liquids',
  chapters: [propertiesStToMech],
};
