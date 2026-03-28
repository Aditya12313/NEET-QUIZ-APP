// Physics — Unit 3: Work, Power and Energy

export const workPowerEnergy = {
  id: 'work-power-energy',
  title: 'Chapter 3: Work, Power and Energy',
  
  // Directly mapping to the 6 UI Tabs without losing any depth:
  concept_explanations: [
    {
      title: '🔹 Work',
      description: 'Work is done when force causes displacement.\nFormula: 👉 W = F · s = Fs cos θ\nTypes:\n• Positive work → force is in the direction of motion.\n• Negative work → force is in the opposite direction.\n• Zero work → perpendicular force (e.g., circular motion, holding a heavy load without moving).'
    },
    {
      title: '🔹 Energy',
      description: 'Energy is the capacity to do work. It is a scalar quantity. SI unit → Joule (J).'
    },
    {
      title: '🔹 Kinetic Energy (KE)',
      description: 'Energy due to the actual motion of a body. Formula:\n👉 KE = ½ mv²'
    },
    {
      title: '🔹 Work-Energy Theorem',
      description: 'The net work done by all forces on a body equals its change in kinetic energy.\n👉 W = ΔKE'
    },
    {
      title: '🔹 Potential Energy (PE)',
      description: '1. Gravitational PE: 👉 U = mgh\n2. Elastic PE (spring): 👉 U = ½ kx²'
    },
    {
      title: '🔹 Conservative vs Non-Conservative Forces',
      description: '• Conservative Forces: Work done is independent of the path taken (e.g., Gravity, Spring force).\n• Non-Conservative Forces: Work done directly depends on the path (e.g., Friction).'
    },
    {
      title: '🔹 Mechanical Energy & Conservation',
      description: 'Mechanical energy is the total energy (E = KE + PE).\nConservation Law: If ONLY conservative forces act, Mechanical Energy is conserved.\n👉 KE + PE = constant'
    },
    {
      title: '🔹 Power',
      description: 'Power is the strict rate of doing work.\nFormulas:\n👉 P = W / t\n👉 P = F · v (dot product of force and velocity)'
    },
    {
      title: '🔹 Collision',
      description: '• Elastic Collision: Both momentum and Kinetic Energy (KE) are conserved.\n• Inelastic Collision: Momentum is conserved, but KE is not conserved.'
    },
    {
      title: '🔹 Work Done by Variable Force',
      description: 'Calculated strictly by finding the area under the Force–Displacement (F–x) graph.'
    }
  ],
  
  key_patterns: [
    '🧠 Work Calculation: Intensive use of W = Fs cos θ, specifically asking angle-based questions and vector dot products.',
    '⚙️ Kinetic Energy Problems: Calculating velocity changes by directly applying the Work-Energy Theorem.',
    '⚖️ Potential Energy: Setting up Height-based (mgh) and Spring-based (½ kx²) conservations.',
    '🔄 Conservation of Energy: Dominates NEET. Highly tests Falling bodies and "Roller coaster type" loop-the-loop energy bounds.',
    '🧮 Power Questions: Differentiating between instantaneous power (P = F·v) and average power (P = W/t).',
    '📉 Graph-Based Questions: Reading area under a curve (F–x graph) to calculate total work done.',
    '⚡ Collision Problems: Differentiating Elastic vs Inelastic loss of kinetic energy.'
  ],
  
  formulas_relations: [
    { formula: 'W = Fs cos θ', meaning: 'Definition of Work. Crucial to remember cos θ dictates if work is + (θ<90), - (θ>90), or 0 (θ=90).' },
    { formula: 'W = ΔKE', meaning: 'Work-Energy Theorem. The fastest way to solve stopping distance or speed gain problems.' },
    { formula: 'U = mgh  |  U = ½ kx²', meaning: 'Standard PE bounds required for mechanical conservation.' },
    { formula: 'KE + PE = constant', meaning: 'Conservation of Mechanical energy, exclusively valid for conservative forces.' },
    { formula: 'P = F · v', meaning: 'Instantaneous power calculation for objects moving in 2D vector space.' }
  ],
  
  application_insights: [
    'In conservative force fields, work done in a completely closed loop is always ZERO.',
    'Whenever a problem asks for velocity after falling a certain height or distance, apply ONLY Conservation of Energy (ΔKE + ΔPE = 0) first. It bypasses complex 2D kinematics!',
    'Work done by kinetic friction is always negative, heavily draining total mechanical energy to non-conservative heat.'
  ],
  
  common_mistakes: [
    { mistake: 'Forgetting cos θ in work formula', why: '👉 VERY COMMON. Always determine the exact angle between the force vector and displacement vector before calculating.' },
    { mistake: 'Confusing KE and PE', why: 'Specifically at maximum heights (V becomes 0, PE is max) vs ground impacts (PE becomes 0, KE is max).' },
    { mistake: 'Assuming energy conserved when friction present ❌', why: 'The law of conservation of MECHANICAL energy fails instantly if friction/air resistance does work. Apply the general Work-Energy theorem instead.' },
    { mistake: 'Mixing power formulas', why: 'Applying P = W/t for sudden instantaneous checks instead of P = F·v.' },
    { mistake: 'Wrong sign in work', why: 'Displacement in +x while Force in -x means θ = 180°, so Work = -Fs.' }
  ],
  
  quick_revision: [
    '👉 "Find velocity using energy conservation" is the highest probability question format.',
    '👉 Graph-based questions (Area under F-x graph = Work) appear regularly.',
    '👉 Tension strings and normal forces typically do Zero work as they act perpendicular to velocity.',
    '👉 Elastic collision conserves KE, Inelastic collision loses KE to heat/sound.'
  ],

  quiz: [] // Controlled dynamically from backend via MongoDB seeding
};

export default {
  id: 'phy-u3',
  name: 'Unit 3: Work, Power and Energy',
  chapters: [workPowerEnergy],
};
