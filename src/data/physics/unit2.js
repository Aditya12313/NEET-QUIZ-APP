// Physics — Unit 2: Force and Motion

export const forceAndMotion = {
  id: 'force-and-motion',
  title: 'Chapter 2: Force and Motion',
  
  // Directly mapping to the 6 UI Tabs without losing any depth:
  concept_explanations: [
    {
      title: '🔹 Scalar vs Vector Quantities',
      description: '• Scalar → Only magnitude (mass, time, energy)\n• Vector → Magnitude + direction (velocity, force, acceleration)'
    },
    {
      title: '🔹 Vector Basics',
      description: '• Unit vector → magnitude = 1\n• Equal vectors → same magnitude & direction\n• Zero vector → magnitude = 0'
    },
    {
      title: '🔹 Vector Addition',
      description: '1. Triangle Law: Resultant = third side of triangle.\n2. Parallelogram Law: Resultant = diagonal.\nFormulas:\nMagnitude: R = √(A² + B² + 2AB cos θ)\nDirection: tan α = (B sin θ) / (A + B cos θ)'
    },
    {
      title: '🔹 Scalar & Vector Product',
      description: '• Dot Product → scalar. Formula: 👉 A · B = AB cos θ\n• Cross Product → vector. Formula: 👉 A × B = AB sin θ'
    },
    {
      title: '🔹 Kinematics Basics',
      description: 'Distance → scalar\nDisplacement → vector\nVelocity → rate of displacement\nAcceleration → rate of change of velocity'
    },
    {
      title: '🔹 Force & Resolution of Force',
      description: 'Force is a push or pull causing acceleration. It is a vector quantity with SI unit Newton.\n👉 F = ma\nBreaking force into components:\n• Fx = F cos θ\n• Fy = F sin θ'
    },
    {
      title: '🔹 Newton’s Laws',
      description: '1. First Law (Inertia): Body remains at rest/uniform motion unless force applied.\n2. Second Law: F = ma (Rate of change of momentum).\n3. Third Law: Action = Reaction (Equal and opposite).'
    },
    {
      title: '🔹 Momentum & Impulse',
      description: '• Momentum: 👉 p = mv (Vector quantity). Total momentum remains constant if no external force.\n• Impulse: F × t = Δp'
    },
    {
      title: '🔹 Circular Motion & Forces',
      description: 'Motion in a circular path. Angular quantities: ω = θ/t, v = rω.\n• Centripetal Force: Towards centre. 👉 F = mv²/r\n• Centrifugal Force: Outward (pseudo force).\n• Banking of Roads: Helps provide centripetal force. 👉 tan θ = v² / rg'
    }
  ],
  
  key_patterns: [
    '🧠 Vector Concepts: Differentiating Scalar vs vector, defining unit vectors.',
    '📐 Vector Addition Problems: Applying Triangle / parallelogram laws to find Resultant magnitude.',
    '⚙️ Newton’s Laws: Application-based questions evaluating Force & acceleration on blocks/pulleys.',
    '⚖️ Momentum & Impulse: Conservation problems, notably the recoil velocity of a gun.',
    '🔄 Circular Motion: Calculating Centripetal force, and applying the relation v = rω.',
    '🧮 Numerical Problems: Extensive calculation using F = ma, mv²/r, and Banking of roads.',
    '⚡ Conceptual MCQs: Identifying the true direction of forces and realizing Real-life applications.'
  ],
  
  formulas_relations: [
    { formula: 'R = √(A² + B² + 2AB cos θ)', meaning: 'Magnitude of vector addition resultant.' },
    { formula: 'A · B = AB cos θ', meaning: 'Dot product (Scalar). Used to find work done (W = F·s) or angle between vectors.' },
    { formula: 'A × B = AB sin θ', meaning: 'Cross product (Vector). Used to find torque or angular momentum.' },
    { formula: 'p = mv  |  Impulse = F × t = Δp', meaning: 'Core momentum equations.' },
    { formula: 'F = mv²/r', meaning: 'Centripetal force directly required for any circular motion.' },
    { formula: 'tan θ = v² / rg', meaning: 'Maximum safe velocity angle for banking of roads.' }
  ],
  
  application_insights: [
    'When adding vectors, if vectors are in the identical direction (0°), R = A + B. If opposite (180°), R = A - B. If perpendicular (90°), R = √(A² + B²).',
    'For gun recoil problems, apply Conservation of Momentum: M_gun × V_gun + m_bullet × v_bullet = 0.',
    'In banking of roads, the vehicle does not depend on its own mass (m is absent in tan θ = v² / rg).'
  ],
  
  common_mistakes: [
    { mistake: 'Confusing distance vs displacement', why: 'Distance is the total scalar path. Displacement is the shortest straight-line vector. They are only equal if motion is strictly 1D in one direction.' },
    { mistake: 'Mixing speed vs velocity', why: 'Speed cannot be negative. Velocity can be negative if direction reverses.' },
    { mistake: 'Wrong direction in vectors', why: 'A very common trap in relative velocity or cross products where sign conventions are flipped.' },
    { mistake: 'Forgetting: Centripetal force is ALWAYS towards centre', why: '👉 VERY IMPORTANT trap. Without a center-pointing force, circular motion cannot exist.' },
    { mistake: 'Thinking centrifugal force is real', why: 'It is strictly a pseudo force experienced only from a rotating (non-inertial) frame of reference.' },
    { mistake: 'Sign errors in momentum', why: 'If a ball hits a wall at v and bounces back at v, the change is NOT zero. It is mv - (-mv) = 2mv.' }
  ],
  
  quick_revision: [
    '👉 High weightage chapter: Focus areas include Newton’s laws, Circular motion, and Momentum.',
    '👉 Frequently asked: Banking of roads (tan θ = v²/rg).',
    '👉 Frequently asked: Centripetal force constraints (F = mv²/r).',
    '👉 Question pattern is a Numerical + conceptual mix; do not ignore the theory of Inertia.'
  ],

  quiz: [] // Excluded so the app relies totally on backend seeding
};

export default {
  id: 'phy-u2',
  name: 'Unit 2: Force and Motion',
  chapters: [forceAndMotion],
};
