// Physics — Unit 11: Electrostatics

const electrostatics = {
  id: 'electrostatics',
  title: 'Chapter 11: Electrostatics',
  notes: [
    {
      concept: 'Electric Charge and Coulomb\'s Law: Charge is conserved, invariant, and quantized (q = ne). Coulomb\'s law: magnitude of electrostatic force between two point charges is inversely proportional to square of distance: F = k|q1*q2|/r², where k = 1/(4πε0) = 9*10^9 N·m²/C².',
      fact: 'Electrostatic force between two charges is unaffected by the presence of other charges (principle of superposition). Permittivity ε changes in medium: Fm = F0 / K (where K is dielectric constant).',
      tip: 'Unlike gravitational force, electrostatic force can be both attractive and repulsive.',
    },
    {
      concept: 'Electric Field & Field Lines: E = F/q0. For a point charge: E = kq/r². Electric field lines are imaginary lines indicating direction of E. They originate from +ve, terminate at -ve, never intersect, and don\'t form closed loops.',
      fact: 'Density of field lines indicates magnitude of E. Inside a solid conductor, E = 0 dynamically under static conditions.',
      tip: 'The tangent to the field line gives the direction of the force experienced by a positive test charge at that point.',
    },
    {
      concept: 'Electric Dipole: Two equal and opposite charges separated by 2a. Dipole moment p = q*2a, direction from -q to +q. Electric field on axial line: E_axial = 2kp/r³ (for r>>a). On equatorial line: E_eq = -kp/r³.',
      fact: 'E_axial is twice the magnitude of E_eq at identical distances. Direction of E_axial is parallel to p, E_eq is anti-parallel to p.',
      tip: 'Torque on a dipole in uniform E field: τ = p × E = pE sinθ. Maximum at 90°. Potential energy U = -p·E = -pE cosθ.',
    },
    {
      concept: 'Electric Flux and Gauss\'s Law: Flux Φ = ∮ E·dA. Gauss\'s law states the total flux through a closed surface is 1/ε0 times the net charge enclosed: Φ = q_enclosed / ε0.',
      fact: 'Field due to uniformly charged infinite straight wire: E = λ / (2πε0*r). Uniform infinite plane sheet: E = σ / (2ε0). Thin spherical shell: E_out = kq/r², E_in = 0.',
      tip: 'Gauss\'s law is true for any closed shape, but useful only in cases with high symmetry (spherical, cylindrical, planar).',
    },
    {
      concept: 'Electric Potential (V): Work done per unit +ve charge in bringing it from infinity. V = kq/r. V is a scalar. Equipotential surfaces have uniform potential, W = 0 to move charge on it. Electric field is always perpendicular to equipotential surfaces.',
      fact: 'Relationship between E and V: E = -dV/dr (Potential gradient). Potential Energy of two charges U = kq1*q2/r.',
      tip: 'The interior of a hollow conductor is an equipotential volume (V is constant everywhere inside, equal to surface potential).',
    },
    {
      concept: 'Capacitance: C = Q/V. SI unit Farad (F). For parallel plate capacitor: C = ε0*A/d. With dielectric slab of constant K filling it: C = K*ε0*A/d.',
      fact: 'Series combination: 1/C_eq = 1/C1 + 1/C2. Charge (Q) is same. Parallel combination: C_eq = C1 + C2. Potential (V) is same.',
      tip: 'Energy stored U = ½CV² = Q²/2C = ½QV. When dielectric is inserted, if isolated (Q const), V drops, U drops. If connected to battery (V const), Q increases, U increases.',
    },
  ],
  quiz: [
    {
      question: 'Two point charges +q and -q are held fixed at (-d,0) and (d,0) respectively. What is the electric potential at the origin (0,0)?',
      options: ['kq/d', '-kq/d', 'Zero', '2kq/d'],
      correctAnswer: 2,
      explanation: 'Potential is a scalar. The potential at the origin is the algebraic sum of the potentials from both charges: V = V(+) + V(-) = kq/d + k(-q)/d = 0.',
    },
    {
      question: 'What is the ratio of electric field at an axial point to that at an equatorial point for a short electric dipole at the same distance (r>>a)?',
      options: ['1:2', '2:1', '1:1', '4:1'],
      correctAnswer: 1,
      explanation: 'E_axial = 2kp/r³ and E_eq = kp/r³ (in magnitude). Therefore, E_axial / E_eq = 2 / 1.',
    },
    {
      question: 'When a soap bubble is given a charge, its size:',
      options: ['Increases', 'Decreases', 'Remains the same', 'Becomes elliptical'],
      correctAnswer: 0,
      explanation: 'Whether given positive or negative charge, mutual electrostatic repulsion causes the charges scattered on its surface to push away from each other, thus the bubble expands in size.',
    },
    {
      question: 'A parallel plate air capacitor has a capacitance of C. If the distance between the plates is halved and a dielectric medium of constant K=2 is completely filled in between, the new capacitance will be:',
      options: ['C', '2C', '4C', 'C/2'],
      correctAnswer: 2,
      explanation: 'Initial capacitance C = ε0A/d. New configuration: distance d\' = d/2 and dielectric K=2. C\' = Kε0A / d\' = 2ε0A / (d/2) = 4 (ε0A/d) = 4C.',
    },
    {
      question: 'The electric field inside a uniformly charged thin spherical shell is:',
      options: ['Directly proportional to r', 'Inversely proportional to r', 'Inversely proportional to r²', 'Zero everywhere inside the shell'],
      correctAnswer: 3,
      explanation: 'According to Gauss\'s Law, the charge enclosed by a Gaussian surface inside the hollow spherical shell is zero, so the net electric field everywhere inside is zero.',
    },
  ],
};

export default {
  id: 'phy-u11',
  name: 'Unit 11: Electrostatics',
  chapters: [electrostatics],
};
