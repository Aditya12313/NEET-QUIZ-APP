// Physics — Unit 5: Properties of Matter

export const propertiesOfMatter = {
  id: 'properties-of-matter',
  title: 'Chapter 5: Properties of Matter',
  
  // Directly mapping to the 6 UI Tabs without losing any depth:
  concept_explanations: [
    {
      title: '🔹 Elasticity',
      description: 'The fundamental property of a material to regain its original shape completely after deformation.'
    },
    {
      title: '🔹 Stress & Strain',
      description: '• Stress: Force per unit area. 👉 Stress = F / A. Types: Longitudinal, Shear, and Bulk stress.\n• Strain: Change in dimension over original dimension. 👉 Strain = ΔL / L. Types: Longitudinal, Shear, and Volumetric strain.'
    },
    {
      title: '🔹 Hooke’s Law & Stress-Strain Curve',
      description: 'Stress ∝ Strain (strictly within the elastic limit).\n• Linear region: Hooke’s law holds true.\n• Elastic limit (Yield point): Beyond this point, permanent deformation (plasticity) occurs.'
    },
    {
      title: '🔹 Elastic Moduli',
      description: '1. Young’s Modulus (Y): 👉 Y = Longitudinal Stress / Longitudinal Strain\n2. Bulk Modulus (K): 👉 K = Pressure / Volumetric Strain\n3. Shear Modulus (η): 👉 η = Shear Stress / Shear Strain'
    },
    {
      title: '🔹 Poisson’s Ratio (σ)',
      description: 'Ratio of transverse strain to longitudinal strain.\n👉 σ = − (lateral strain) / (longitudinal strain)'
    },
    {
      title: '🔹 Surface Tension & Excess Pressure',
      description: 'Surface Tension: Force per unit length interacting along the liquid surface. 👉 T = F / l\nExcess Pressure:\n• Liquid Drop: 👉 2T / r\n• Soap Bubble: 👉 4T / r'
    },
    {
      title: '🔹 Capillary Action',
      description: 'The rise or fall of liquid in a narrow tube against gravity.\nFormula: 👉 h = (2T cos θ) / (ρ g r)'
    },
    {
      title: '🔹 Viscosity & Newton’s Law',
      description: 'Resistance to fluid flow between internal layers.\nNewton’s Law of Viscosity: 👉 F = ηA (dv / dx)'
    },
    {
      title: '🔹 Stokes’ Law & Terminal Velocity',
      description: '• Stokes’ Law: Viscous drag on a spherical body. 👉 F = 6πηrv\n• Terminal Velocity: Constant velocity achieved when weight equals buoyant force plus viscous drag.\n👉 v = [2r²(ρ − σ)g] / [9η]'
    }
  ],
  
  key_patterns: [
    '🧠 Stress-Strain Concepts: Distinguishing between the different types of stress/strain and recognizing points on Graph-based question curves.',
    '⚙️ Elastic Moduli: Applying the mathematical Relations between Y, K, and η in heavy Numerical problems.',
    '⚖️ Surface Tension: Strictly comparing Drop vs bubble pressure profiles and calculating total Force per unit length.',
    '🔄 Capillary Rise: Deriving how the Tube radius effect and Contact angle directly influence ascent height h.',
    '🧮 Viscosity Problems: Combining Stokes’ law and varying Terminal velocities.',
    '📊 Graph-Based Questions: Directly reading the slope of the Stress vs strain curve as Young\'s Modulus.',
    '⚡ Conceptual MCQs: Identifying Fluid behavior nuances and tracing physical boundaries like Elastic limits.'
  ],
  
  formulas_relations: [
    { formula: 'Y = (F/A) / (ΔL/L)', meaning: 'Young’s modulus. Extensively used for stretching wires.' },
    { formula: 'h = (2T cos θ) / (ρ g r)', meaning: 'Jurin’s Law for capillary rise. Notice height is inversely proportional to radius r.' },
    { formula: 'ΔP = 4T / r', meaning: 'Excess pressure specifically for a soap bubble (because it has TWO free surfaces).' },
    { formula: 'F = 6πηrv', meaning: 'Stokes\' viscous drag law.' },
    { formula: 'v = [2r²(ρ − σ)g] / [9η]', meaning: 'Terminal velocity. Note how crucially it depends on the SQUARE of the radius (r²).' }
  ],
  
  application_insights: [
    'If you merge two small soap bubbles into a larger one, surface area decreases, conserving volume. Energy is definitively released.',
    'Terminal velocity graph (v vs t) starts as a steep curve and rigidly flattens out unconditionally to a horizontal line.',
    'Adding impurities or increasing temperature drastically changes Surface Tension and Viscosity (viscosity of liquids decreases with T).'
  ],
  
  common_mistakes: [
    { mistake: 'Confusing Stress vs Pressure', why: '👉 Extremely common. Stress is an internal restoring force per unit area. Pressure is an external compressive force applied.' },
    { mistake: 'Forgetting Bubble has double surface → 4T/r', why: '👉 High probability trap. An air bubble inside water has ONE surface (2T/r). A soap bubble in air has TWO surfaces (4T/r).' },
    { mistake: 'Sign mistake in Poisson’s ratio', why: 'Stretching a wire (positive longitudinal strain) inherently makes it thinner (negative lateral strain), making σ naturally positive.' },
    { mistake: 'Mixing viscosity vs density', why: '👉 Honey is highly viscous, but its density is not incredibly high. Do not assume high density inherently implies high viscosity.' },
    { mistake: 'Ignoring contact angle in capillary rise', why: 'If θ > 90° (like mercury), cos θ is negative, meaning the liquid violently falls (depression) instead of rising.' }
  ],
  
  quick_revision: [
    '👉 "Drop vs bubble pressure difference" is the most frequently asked numerical pattern.',
    '👉 High weightage question type: Terminal velocity dependency on radius square (v ∝ r²).',
    '👉 Important Concept Fact: Young\'s Modulus strictly defines the slope of the linear elastic region on a Stress-Strain curve.',
    '👉 A higher value of Young\'s modulus means the material is perfectly MORE elastic (e.g., Steel vs Rubber).'
  ],

  quiz: [] // Controlled dynamically from backend via MongoDB seeding
};

export default {
  id: 'phy-u5',
  name: 'Unit 5: Properties of Matter',
  chapters: [propertiesOfMatter],
};
