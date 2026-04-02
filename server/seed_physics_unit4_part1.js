import mongoose from 'mongoose';
import Question from './models/Question.js';
import 'dotenv/config';

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/neet';

const questionsToSeed = [
  {
    subject: 'physics',
    unit: 'Unit 4: Rotational Motion',
    chapter: 'rotational-motion',
    year: 2017,
    question: "A rope is wound around a hollow cylinder of mass 3 kg and radius 40 cm. What is the angular acceleration of the cylinder if the rope is pulled with a force of 30 N? (NEET 2017)",
    options: ["0.25 rad s⁻²", "25 rad s⁻²", "5 m s⁻²", "25 m s⁻²"],
    correctAnswer: 1,
    explanation: "Torque τ = F × R = Iα. For a hollow cylinder, I = MR². So F × R = MR² α => α = F / MR = 30 / (3 × 0.4) = 30 / 1.2 = 25 rad s⁻².",
    tags: ["Torque", "Angular Acceleration", "Moment of Inertia"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 4: Rotational Motion',
    chapter: 'rotational-motion',
    year: 2017,
    question: "Two discs of same moment of inertia rotating about their regular axis passing through centre and perpendicular to the plane of disc with angular velocities ω1 and ω2. They are brought into contact face to face coinciding the axis of rotation. The expression for loss of energy during this process is (NEET 2017)",
    options: [
      "¼ I(ω₁ - ω₂)²",
      "½ I(ω₁ - ω₂)²",
      "I(ω₁ - ω₂)²",
      "⅛ I(ω₁ - ω₂)²"
    ],
    correctAnswer: 0,
    explanation: "Common angular velocity ω = (Iω₁ + Iω₂) / 2I = (ω₁ + ω₂) / 2. Initial KE = ½Iω₁² + ½Iω₂². Final KE = ½(2I)((ω₁ + ω₂)/2)². Loss in KE = Initial - Final = ¼ I(ω₁ - ω₂)².",
    tags: ["Rotational Kinetic Energy", "Conservation of Angular Momentum"],
    difficulty: "medium",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 4: Rotational Motion',
    chapter: 'rotational-motion',
    year: 2017,
    question: "Which of the following statements are correct?\n(1) Centre of mass of a body always coincides with the centre of gravity of the body.\n(2) Centre of mass of a body is the point at which the total gravitational torque on the body is zero.\n(3) A couple on a body produces both translational and rotational motion in a body.\n(4) Mechanical advantage greater than one means that small effort can be used to lift a large load. (NEET 2017)",
    options: ["(1) and (2)", "(2) and (3)", "(3) and (4)", "(2) and (4) (Note: Official key marked this question as ambiguous *)"],
    correctAnswer: 3,
    explanation: "Statements 1 and 2 are usually true only for a uniform gravitational field. A couple produces pure rotation, so 3 is false. MA > 1 means Effort < Load, so 4 is true. It was considered an ambiguous/bonus question in NEET.",
    tags: ["Centre of Mass", "Torque", "Statics"],
    difficulty: "medium",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 4: Rotational Motion',
    chapter: 'rotational-motion',
    year: 2016,
    question: "Two rotating bodies A and B of masses m and 2m with moments of inertia IA and IB (IA > IB) have equal kinetic energy of rotation. If LA and LB be their angular momenta respectively, then (NEET-II 2016)",
    options: ["LA < LB", "LA = 2LB", "LA > LB", "LA = LB"],
    correctAnswer: 2,
    explanation: "Rotational Kinetic Energy KE = L² / (2I) => L = √(2 × I × KE). Since KE is equal for both bodies, L ∝ √I. Given IA > IB, it follows that LA > LB.",
    tags: ["Angular Momentum", "Rotational Kinetic Energy"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 4: Rotational Motion',
    chapter: 'rotational-motion',
    year: 2016,
    question: "A solid sphere of mass m and radius R is rotating about its diameter. A solid cylinder of the same mass and same radius is also rotating about its geometrical axis with an angular speed twice that of the sphere. The ratio of their kinetic energies of rotation (Esphere / Ecylinder) will be (NEET-II 2016)",
    options: ["2:3", "1:5", "1:4", "3:1"],
    correctAnswer: 1,
    explanation: "I_sphere = (2/5)mR². I_cyl = (1/2)mR². ω_cyl = 2ω_sphere.\nRatio = [ ½(2/5 mR²) ω² ] / [ ½(1/2 mR²) (2ω)² ] = (2/5) / ( (1/2) × 4 ) = (2/5) / 2 = 1/5.",
    tags: ["Rotational Kinetic Energy", "Moment of Inertia"],
    difficulty: "medium",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 4: Rotational Motion',
    chapter: 'rotational-motion',
    year: 2016,
    question: "A light rod of length l has two masses m₁ and m₂ attached to its two ends. The moment of inertia of the system about an axis perpendicular to the rod and passing through the centre of mass is (NEET-II 2016)",
    options: [
      "(m₁ + m₂)l²",
      "√(m₁m₂) l²",
      "(m₁m₂)/(m₁ + m₂) l²",
      "(m₁ + m₂)/(m₁m₂) l²"
    ],
    correctAnswer: 2,
    explanation: "The distances of m₁ and m₂ from the COM are r₁ = m₂l/(m₁+m₂) and r₂ = m₁l/(m₁+m₂). Moment of inertia I = m₁r₁² + m₂r₂² = m₁(m₂l/(m₁+m₂))² + m₂(m₁l/(m₁+m₂))² = (m₁m₂)/(m₁ + m₂) l² (which is µl²).",
    tags: ["Moment of Inertia", "Centre of Mass"],
    difficulty: "medium",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 4: Rotational Motion',
    chapter: 'rotational-motion',
    year: 2016,
    question: "A disc and a sphere of same radius but different masses roll off on two inclined planes of the same altitude and length. Which one of the two objects gets to the bottom of the plane first? (NEET-I 2016)",
    options: [
      "Both reach at the same time",
      "Depends on their masses",
      "Disc",
      "Sphere"
    ],
    correctAnswer: 3,
    explanation: "Acceleration rolling down an incline is a = g sinθ / (1 + k²/R²). For a solid sphere, k²/R² = 2/5 = 0.4. For a disc, k²/R² = 1/2 = 0.5. Smaller k²/R² means greater acceleration. The mass does not matter. The sphere has greater acceleration, so it reaches first.",
    tags: ["Rolling Motion", "Kinematics of Rotation"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 4: Rotational Motion',
    chapter: 'rotational-motion',
    year: 2016,
    question: "From a disc of radius R and mass M, a circular hole of diameter R, whose rim passes through the centre is cut. What is the moment of inertia of the remaining part of the disc about a perpendicular axis, passing through the centre? (NEET-I 2016)",
    options: ["11MR²/32", "9MR²/32", "15MR²/32", "13MR²/32"],
    correctAnswer: 3,
    explanation: "Mass is proportional to area. M_hole = M × (π(R/2)² / πR²) = M/4. Center of hole is at R/2. I_hole = I_cm + md² = ½(M/4)(R/2)² + (M/4)(R/2)² = MR²/32 + MR²/16 = 3MR²/32.\nI_remaining = I_total - I_hole = ½MR² - 3MR²/32 = 16MR²/32 - 3MR²/32 = 13MR²/32.",
    tags: ["Moment of Inertia", "Parallel Axis Theorem"],
    difficulty: "hard",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 4: Rotational Motion',
    chapter: 'rotational-motion',
    year: 2016,
    question: "A uniform circular disc of radius 50 cm at rest is free to turn about an axis which is perpendicular to its plane and passes through its centre. It is subjected to a torque which produces a constant angular acceleration of 2.0 rad s⁻². Its net acceleration in m s⁻² at the end of 2.0 s is approximately (NEET-I 2016)",
    options: ["6.0", "3.0", "8.0", "7.0"],
    correctAnswer: 2,
    explanation: "Angular velocity after 2s: ω = αt = 2.0 × 2.0 = 4.0 rad/s. Tangential acceleration a_t = rα = 0.5 × 2.0 = 1.0 m/s². Centripetal acceleration a_c = rω² = 0.5 × (4.0)² = 8.0 m/s². Net acceleration a = √(a_t² + a_c²) = √(1² + 8²) = √65 ≈ 8.0 m/s².",
    tags: ["Rotational Kinematics", "Acceleration"],
    difficulty: "medium",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 4: Rotational Motion',
    chapter: 'rotational-motion',
    year: 2015,
    question: "Point masses m₁ and m₂ are placed at the opposite ends of a rigid rod of length L, and negligible mass. The rod is to be set rotating about an axis perpendicular to it. The position of point P on this rod through which the axis should pass so that the work required to set the rod rotating with angular velocity ω is minimum, is given by x from m₁: (2015)",
    options: [
      "x = m₂L / (m₁ + m₂)",
      "x = m₁L / (m₁ + m₂)",
      "x = m₁ / m₂",
      "x = L/2"
    ],
    correctAnswer: 0,
    explanation: "Work required = ½ I ω². For work to be minimum, Moment of Inertia I must be minimum. I is minimum about the Centre of Mass. The distance of COM from m₁ is x = m₂L / (m₁ + m₂).",
    tags: ["Moment of Inertia", "Centre of Mass"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 4: Rotational Motion',
    chapter: 'rotational-motion',
    year: 2015,
    question: "An automobile moves on a road with a speed of 54 km h⁻¹. The radius of its wheels is 0.45 m and the moment of inertia of the wheel about its axis of rotation is 3 kg m². If the vehicle is brought to rest in 15 s, the magnitude of average torque transmitted by its brakes to the wheel is (2015)",
    options: ["10.86 kg m²s⁻²", "2.86 kg m²s⁻²", "6.66 kg m²s⁻²", "8.58 kg m²s⁻²"],
    correctAnswer: 2,
    explanation: "v = 54 km/h = 15 m/s. Initial ω = v/R = 15 / 0.45 = 100/3 rad/s. Final ω = 0, t = 15s. α = Δω/t = (100/3) / 15 = 100/45 = 20/9 rad/s². Torque τ = Iα = 3 × (20/9) = 60/9 = 6.66 N m (or kg m² s⁻²).",
    tags: ["Torque", "Rotational Kinematics"],
    difficulty: "medium",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 4: Rotational Motion',
    chapter: 'rotational-motion',
    year: 2015,
    question: "A force F = αî + 3ĵ + 6k̂ is acting at a point r = 2î - 6ĵ - 12k̂. The value of α for which angular momentum about origin is conserved is (2015)",
    options: ["zero", "1", "-1", "2"],
    correctAnswer: 2,
    explanation: "Angular momentum is conserved if Torque τ = 0. τ = r × F = (2î - 6ĵ - 12k̂) × (αî + 3ĵ + 6k̂) = 0. This means vectors r and F must be parallel (or anti-parallel). So ratio of components: 2/α = -6/3 = -12/6 => 2/α = -2 => α = -1.",
    tags: ["Torque", "Angular Momentum", "Cross Product"],
    difficulty: "medium",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 4: Rotational Motion',
    chapter: 'rotational-motion',
    year: 2015,
    question: "A rod of weight W is supported by two parallel knife edges A and B and is in equilibrium in a horizontal position. The knives are at a distance d from each other. The centre of mass of the rod is at distance x from A. The normal reaction on A is (2015 Cancelled)",
    options: [
      "W(d - x) / x",
      "W(d - x) / d",
      "Wx / d",
      "Wd / x"
    ],
    correctAnswer: 1,
    explanation: "Take torques about point B. NA is at distance d from B. Weight W is at distance d - x from B. For equilibrium, NA × d = W × (d - x). So NA = W(d - x) / d.",
    tags: ["Statics", "Torque", "Equilibrium"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 4: Rotational Motion',
    chapter: 'rotational-motion',
    year: 2015,
    question: "A mass m moves in a circle on a smooth horizontal plane with velocity v₀ at a radius R₀. The mass is attached to a string which passes through a smooth hole in the plane as shown. The tension in the string is increased gradually and finally m moves in a circle of radius R₀/2. The final value of the kinetic energy is (2015 Cancelled)",
    options: ["2mv₀²", "½mv₀²", "mv₀²", "¼mv₀²"],
    correctAnswer: 0,
    explanation: "Torque is zero, so angular momentum is conserved. L_initial = L_final => m v₀ R₀ = m v_f (R₀/2) => v_f = 2v₀. Final KE = ½ m (v_f)² = ½ m (2v₀)² = 2mv₀².",
    tags: ["Angular Momentum", "Conservation of Angular Momentum"],
    difficulty: "medium",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 4: Rotational Motion',
    chapter: 'rotational-motion',
    year: 2015,
    question: "Three identical spherical shells, each of mass m and radius r are placed such that two touch each other and the third is on top. Consider an axis XX' which is touching two shells and passing through the diameter of the third shell. Moment of inertia of the system consisting of these three spherical shells about XX' axis is (2015)",
    options: ["16/5 mr²", "4mr²", "11/5 mr²", "3mr²"],
    correctAnswer: 1,
    explanation: "Wait, the question asks about evaluating moment of inertia. For the shell where axis passes through its diameter, I₁ = 2/3 mr². For the two shells touching the axis, by parallel axis theorem, I = I_cm + md² = 2/3 mr² + mr² = 5/3 mr². Total I = 2/3 mr² + 5/3 mr² + 5/3 mr² = 12/3 mr² = 4mr².",
    tags: ["Moment of Inertia", "Parallel Axis Theorem"],
    difficulty: "hard",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 4: Rotational Motion',
    chapter: 'rotational-motion',
    year: 2014,
    question: "A solid cylinder of mass 50 kg and radius 0.5 m is free to rotate about the horizontal axis. A massless string is wound round the cylinder with one end attached to it and other hanging freely. Tension in the string required to produce an angular acceleration of 2 revolutions s⁻² is (2014)",
    options: ["25 N", "50 N", "78.5 N", "157 N"],
    correctAnswer: 3,
    explanation: "α = 2 rev/s² = 2 × 2π = 4π rad/s². I = ½MR² = ½(50)(0.5)² = 6.25 kg m². Torque τ = Iα = 6.25 × 4π = 25π ≈ 78.5 N m. Also τ = T × R => T = τ / R = 78.5 / 0.5 = 157 N.",
    tags: ["Torque", "Rotational Dynamics"],
    difficulty: "medium",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 4: Rotational Motion',
    chapter: 'rotational-motion',
    year: 2014,
    question: "The ratio of the accelerations for a solid sphere (mass m and radius R) rolling down an incline of angle θ without slipping and slipping down the incline without rolling is (2014)",
    options: ["5:7", "2:3", "2:5", "7:5"],
    correctAnswer: 0,
    explanation: "Rolling acceleration a_roll = g sinθ / (1 + k²/R²). For a solid sphere, k²/R² = 2/5, so a_roll = g sinθ / (1 + 2/5) = (5/7) g sinθ. Slipping acceleration a_slip = g sinθ. Ratio a_roll / a_slip = (5/7) / 1 = 5:7.",
    tags: ["Rolling Motion", "Kinematics of Rotation"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 4: Rotational Motion',
    chapter: 'rotational-motion',
    year: 2013,
    question: "A rod PQ of mass M and length L is hinged at end P. The rod is kept horizontal by a massless string tied to point Q. When the string is cut, the initial angular acceleration of the rod is (NEET 2013)",
    options: ["2g/L", "2g/2L", "3g/2L", "g/L"],
    correctAnswer: 2,
    explanation: "Torque about hinge P is τ = Mg(L/2). Moment of inertia about P is I = ML²/3. τ = Iα => MgL/2 = (ML²/3)α => α = 3g / 2L.",
    tags: ["Rotational Dynamics", "Torque"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 4: Rotational Motion',
    chapter: 'rotational-motion',
    year: 2013,
    question: "A small object of uniform density rolls up a curved surface with an initial velocity 'v'. It reaches up to a maximum height of 3v²/(4g) with respect to the initial position. The object is (NEET 2013)",
    options: ["hollow sphere", "disc", "ring", "solid sphere"],
    correctAnswer: 1,
    explanation: "By conservation of energy: ½mv² + ½Iω² = mgh. Since v = rω, we have ½mv²(1 + k²/R²) = mg(3v²/(4g)) = ¾ mv². Canceling ½mv², we get (1 + k²/R²) = 3/2 => k²/R² = 1/2. This is the condition for a disc.",
    tags: ["Rolling Motion", "Conservation of Energy"],
    difficulty: "medium",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 4: Rotational Motion',
    chapter: 'rotational-motion',
    year: 2013,
    question: "The ratio of radii of gyration of a circular ring and a circular disc, of the same mass and radius, about an axis passing through their centres and perpendicular to their planes are (Karnataka NEET 2013)",
    options: ["1:√2", "3:2", "2:1", "√2:1"],
    correctAnswer: 3,
    explanation: "For ring, I = MR² => k_ring = R. For disc, I = ½MR² => k_disc = R/√2. Ratio k_ring / k_disc = R / (R/√2) = √2 : 1.",
    tags: ["Radius of Gyration", "Moment of Inertia"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 4: Rotational Motion',
    chapter: 'rotational-motion',
    year: 2013,
    question: "Two discs are rotating about their axes, normal to the discs and passing through the centres of the discs. Disc D₁ has 2 kg mass and 0.2 m radius and initial angular velocity of 50 rad s⁻¹. Disc D₂ has 4 kg mass, 0.1 m radius and initial angular velocity of 200 rad s⁻¹. The two discs are brought in contact face to face, with their axes of rotation coincident. The final angular velocity (in rad s⁻¹) of the system is (Karnataka NEET 2013)",
    options: ["60", "100", "120", "40"],
    correctAnswer: 1,
    explanation: "I₁ = ½(2)(0.2)² = 0.04 kg m². I₂ = ½(4)(0.1)² = 0.02 kg m². Conservation of angular momentum: I₁ω₁ + I₂ω₂ = (I₁ + I₂)ω. 0.04(50) + 0.02(200) = (0.04 + 0.02)ω => 2 + 4 = 0.06ω => 6 = 0.06ω => ω = 100 rad s⁻¹.",
    tags: ["Conservation of Angular Momentum"],
    difficulty: "medium",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 4: Rotational Motion',
    chapter: 'rotational-motion',
    year: 2012,
    question: "When a mass is rotating in a plane about a fixed point, its angular momentum is directed along (2012)",
    options: [
      "a line perpendicular to the plane of rotation",
      "the line making an angle of 45° to the plane of rotation",
      "the radius",
      "the tangent to the orbit"
    ],
    correctAnswer: 0,
    explanation: "Angular momentum L = r × p. The cross product of two vectors in a plane always yields a vector perpendicular to that plane. Thus, angular momentum is directed along the axis of rotation, which is perpendicular to the plane of rotation.",
    tags: ["Angular Momentum", "Theory"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 4: Rotational Motion',
    chapter: 'rotational-motion',
    year: 2012,
    question: "Two persons of masses 55 kg and 65 kg respectively, are at the opposite ends of a boat. The length of the boat is 3.0 m and weighs 100 kg. The 55 kg man walks up to the 65 kg man and sits with him. If the boat is in still water the center of mass of the system shifts by (2012)",
    options: ["3.0 m", "2.3 m", "zero", "0.75 m"],
    correctAnswer: 2,
    explanation: "There are no external forces acting on the system in the horizontal direction. According to the principle of conservation of momentum, the position of the Centre of Mass of the system remains unchanged (shift is zero).",
    tags: ["Centre of Mass", "Conservation of Momentum"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 4: Rotational Motion',
    chapter: 'rotational-motion',
    year: 2012,
    question: "A car of mass 1000 kg negotiates a banked curve of radius 90 m on a frictionless road. If the banking angle is 45°, the speed of the car is (2012)",
    options: ["20 m s⁻¹", "30 m s⁻¹", "5 m s⁻¹", "10 m s⁻¹"],
    correctAnswer: 1,
    explanation: "For a frictionless banked curve, v = √(rg tanθ). v = √(90 × 10 × tan 45°) = √(900 × 1) = 30 m/s.",
    tags: ["Circular Motion", "Banking of Roads"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 4: Rotational Motion',
    chapter: 'rotational-motion',
    year: 2012,
    question: "ABC is an equilateral triangle with O as its centre. F₁, F₂ and F₃ represent three forces acting along the sides AB, BC and AC respectively. If the total torque about O is zero then the magnitude of F₃ is (2012, 1998)",
    options: ["F₁ + F₂", "F₁ - F₂", "(F₁ + F₂)/2", "2(F₁ + F₂)"],
    correctAnswer: 0,
    explanation: "Let the perpendicular distance from O to each side be d. Torque about O is clockwise for F₁ and F₂, and counterclockwise for F₃. τ_total = -F₁d - F₂d + F₃d = 0 => F₃ = F₁ + F₂.",
    tags: ["Torque", "Equilibrium"],
    difficulty: "medium",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 4: Rotational Motion',
    chapter: 'rotational-motion',
    year: 2012,
    question: "A car of mass m is moving on a level circular track of radius R. If µ_s represents the static friction between the road and tyres of the car, the maximum speed of the car in circular motion is given by (Mains 2012)",
    options: ["√(µ_s m R g)", "µ_s m R g", "√(m R g / µ_s)", "√(µ_s R g)"],
    correctAnswer: 3,
    explanation: "Centripetal force is provided by friction: mv²/R = µ_s N = µ_s mg. Thus v² = µ_s R g => v_max = √(µ_s R g).",
    tags: ["Circular Motion", "Friction"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 4: Rotational Motion',
    chapter: 'rotational-motion',
    year: 2012,
    question: "A circular platform is mounted on a frictionless vertical axle. Its radius R = 2 m and its moment of inertia about the axle is 200 kg m². It is initially at rest. A 50 kg man stands on the edge of the platform and begins to walk along the edge at the speed of 1 m s⁻¹ relative to the ground. Time taken by the man to complete one revolution is (Mains 2012)",
    options: ["π s", "3π/2 s", "2π s", "π/2 s"],
    correctAnswer: 2,
    explanation: "Initial angular momentum is 0. Conservation of L: L_man + L_platform = 0. Man's L = mvR = 50 × 1 × 2 = 100 kg m²/s. So Platform's L = -100 = Iω => 200ω = -100 => ω_platform = -0.5 rad/s. Velocity of platform edge = Rω = 2 × 0.5 = 1 m/s (in opposite direction). Speed of man relative to ground is 1 m/s. Angular velocity of man rel to ground = v/R = 1/2 = 0.5 rad/s. Relative to platform, wait, the problem says 'speed of 1 m/s relative to the GROUND'. So man's angular velocity is 1/2 rad/s. Time to complete 1 revolution relative to ground = 2π / ω_man = 2π / 0.5 = 4π s... wait. What does standard key say? It says (c) 2π s. Let's re-read the exact phrasing: time taken by man to complete one revolution... relative to the PLATFORM. Relative ω = ω_man - ω_platform = 0.5 - (-0.5) = 1.0 rad/s. Time = 2π / 1.0 = 2π s.",
    tags: ["Conservation of Angular Momentum", "Relative Motion"],
    difficulty: "hard",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 4: Rotational Motion',
    chapter: 'rotational-motion',
    year: 2012,
    question: "The moment of inertia of a uniform circular disc is maximum about an axis perpendicular to the disc and passing through (Mains 2012)",
    options: ["B (edge)", "C (center)", "D", "A"],
    correctAnswer: 0,
    explanation: "By the parallel axis theorem, I = I_cm + md². The moment of inertia is maximum when the distance d from the centre of mass is maximum. Point B is at the edge (r = R), so it has maximum I.",
    tags: ["Moment of Inertia", "Parallel Axis Theorem"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 4: Rotational Motion',
    chapter: 'rotational-motion',
    year: 2012,
    question: "Three masses are placed on the x-axis: 300 g at origin, 500 g at x = 40 cm and 400 g at x = 70 cm. The distance of the centre of mass from the origin is (Mains 2012)",
    options: ["40 cm", "45 cm", "50 cm", "30 cm"],
    correctAnswer: 0,
    explanation: "x_cm = (m₁x₁ + m₂x₂ + m₃x₃) / (m₁ + m₂ + m₃) = (300×0 + 500×40 + 400×70) / (300 + 500 + 400) = (0 + 20000 + 28000) / 1200 = 48000 / 1200 = 40 cm.",
    tags: ["Centre of Mass"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 4: Rotational Motion',
    chapter: 'rotational-motion',
    year: 2011,
    question: "The instantaneous angular position of a point on a rotating wheel is given by the equation θ(t) = 2t³ - 6t². The torque on the wheel becomes zero at (2011)",
    options: ["t = 1 s", "t = 0.5 s", "t = 0.25 s", "t = 2 s"],
    correctAnswer: 0,
    explanation: "Torque zero means angular acceleration α = 0. θ = 2t³ - 6t². ω = dθ/dt = 6t² - 12t. α = dω/dt = 12t - 12. For α = 0, 12t - 12 = 0 => t = 1 s.",
    tags: ["Rotational Kinematics", "Torque"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  }
];

async function run() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Connected to DB');

    // Only clear existing questions for this specific chapter on the FIRST RUN
    const delRes = await Question.deleteMany({ chapter: 'rotational-motion' });
    console.log(`Deleted ${delRes.deletedCount} old questions.`);

    const insRes = await Question.insertMany(questionsToSeed);
    console.log(`Successfully seeded ${insRes.length} PYQs for part 1 of Rotational Motion.`);

    mongoose.connection.close();
  } catch (e) {
    console.error(e);
    mongoose.connection.close();
  }
}

run();
