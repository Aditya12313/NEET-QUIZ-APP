// Physics — Unit 4: Rotational Motion

export const rotationalMotion = {
  id: 'rotational-motion',
  title: 'Chapter 4: Rotational Motion',
  
  // Directly mapping to the 6 UI Tabs without losing any depth:
  concept_explanations: [
    {
      title: '🔹 Rigid Body',
      description: 'A body in which the distance between any two particles remains strictly constant. It can undergo Translation combined with Rotation.'
    },
    {
      title: '🔹 Angular Quantities',
      description: '• Angular displacement → θ\n• Angular velocity → 👉 ω = dθ / dt\n• Angular acceleration → 👉 α = dω / dt'
    },
    {
      title: '🔹 Relation between Linear & Angular Motion',
      description: '• Tangential velocity: 👉 v = rω\n• Tangential acceleration: 👉 a_t = rα\n• Centripetal acceleration: 👉 a_c = v² / r = rω²'
    },
    {
      title: '🔹 Torque (Moment of Force)',
      description: 'The rotational equivalent of force. It causes angular acceleration.\nIdentity: 👉 τ = r × F = rF sin θ'
    },
    {
      title: '🔹 Angular Momentum',
      description: 'The rotational equivalent of linear momentum.\nFormulas:\n👉 L = r × p\n👉 L = Iω'
    },
    {
      title: '🔹 Conservation of Angular Momentum',
      description: 'If there is strictly NO external torque acting on the system:\n👉 L = constant (I₁ω₁ = I₂ω₂)'
    },
    {
      title: '🔹 Moment of Inertia (I) & Radius of Gyration',
      description: 'Rotational inertia depends heavily on mass distribution and the axis of rotation.\n👉 I = Σ mr²\nRadius of Gyration (k) simplifies complex bodies to a point mass:\n👉 I = Mk²'
    },
    {
      title: '🔹 Theorems of Moment of Inertia',
      description: '1. Parallel Axis Theorem: 👉 I = I_cm + Md²\n2. Perpendicular Axis Theorem: 👉 I_z = I_x + I_y'
    },
    {
      title: '🔹 Rotational Energy & Rolling Motion',
      description: '• Rotational Kinetic Energy: 👉 KE = ½ Iω²\n• Work done in rotation: 👉 W = τθ\n• Rolling Motion (Translation + Rotation): For pure rolling without slipping, 👉 v = rω.'
    },
    {
      title: '🔹 Angular Momentum in Circular Motion',
      description: 'For a point mass executing circular motion: 👉 L = mvr'
    }
  ],
  
  key_patterns: [
    '🧠 Moment of Inertia: Determining MOI for Standard bodies like the Ring, disc, rod, and sphere about shifting axes.',
    '⚙️ Torque Problems: Evaluating Direction + magnitude using cross products and solving Equilibrium conditions.',
    '⚖️ Angular Momentum: Frequent Conservation problems, especially the "Ice skater" or "collapsing star" type where I changes so ω compensates.',
    '🔄 Rolling Motion: Utilizing relation v = rω and calculating Energy distribution (Translational KE vs Rotational KE partition).',
    '🧮 Numerical Problems: Combining KE = ½ Iω² and Newton\'s second law for rotation τ = Iα.',
    '⚡ Theorems: High reliance on Parallel and Perpendicular axis theorems to find offset inertias.',
    '📊 Mixed Concept Questions: Combination of strict translation equations with rotation limits.'
  ],
  
  formulas_relations: [
    { formula: 'τ = r × F = rF sin θ', meaning: 'Definition of Torque. Direction found via Right-Hand Rule.' },
    { formula: 'L = Iω  |  L = r × p', meaning: 'Angular momentum identities. Extremely critical for conservation mechanics.' },
    { formula: 'I = I_cm + Md²', meaning: 'Parallel Axis theorem. Always ensures you start from the Center of Mass axis.' },
    { formula: 'I_z = I_x + I_y', meaning: 'Perpendicular Axis theorem. ONLY valid for 2D planar bodies (laminas).' },
    { formula: 'KE_total = ½ mv² + ½ Iω²', meaning: 'Total energy of a rolling body. Crucial for incline plane races.' }
  ],
  
  application_insights: [
    'If an ice skater pulls their arms in, their Moment of Inertia (I) decreases. To conserve L = Iω, their angular velocity (ω) MUST increase.',
    'When a solid sphere, cylinder, and ring roll down an incline, the solid sphere wins because it has the smallest distribution of mass away from the center (smallest I = 2/5 MR²), hence the greatest translational velocity.',
    'Direction of Torque and Angular momentum is always strictly PERPENDICULAR to both the radius vector and force/momentum vector.'
  ],
  
  common_mistakes: [
    { mistake: 'Confusing Torque vs Force', why: 'Force causes translation. Torque causes rotation. A net force can be zero while net torque is non-zero (a force couple).' },
    { mistake: 'Wrong axis → wrong moment of inertia', why: '👉 Extremely common. Applying ½ MR² for a disc rotating about its diameter instead of its center axis (it should be ¼ MR²).' },
    { mistake: 'Forgetting v = rω in rolling', why: 'Applying pure translation formulas to a rolling object ignores the rotational kinetic energy sink.' },
    { mistake: 'Sign errors in torque', why: 'Clockwise is typically negative, Counter-clockwise is positive. Failing to assign signs in equilibrium problems leads to completely wrong balances.' },
    { mistake: 'Mixing angular and linear quantities', why: 'Adding v to ω or interpreting α as linear acceleration a.' }
  ],
  
  quick_revision: [
    '👉 Important chapter trick: Moment of Inertia of a uniform rod of length L about center is ML²/12, about edge is ML²/3.',
    '👉 Typical NEET style: Direct formula calculation mixed with a conceptual balance check.',
    '👉 Frequently asked: Angular momentum conservation when a mass is dropped onto a rotating disc.',
    '👉 Equilibrium means TWO equations: ΣF = 0 (Translation) AND Στ = 0 (Rotation).'
  ],

  quiz: [] // Controlled dynamically from backend via MongoDB seeding
};

export default {
  id: 'phy-u4',
  name: 'Unit 4: Rotational Motion',
  chapters: [rotationalMotion],
};
