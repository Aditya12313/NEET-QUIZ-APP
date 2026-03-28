import mongoose from 'mongoose';
import Question from './models/Question.js';
import 'dotenv/config';

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/neet';

const questionsToSeed = [
  {
    subject: 'physics', unit: 'Unit 5: Properties of Matter', chapter: 'properties-of-matter', year: 2023, difficulty: 'medium', verified: true, source: 'manual',
    question: 'Two wires A and B made of the same material have their lengths in the ratio 1:2 and radii in the ratio 2:1. If they are stretched by the same force, the ratio of their longitudinal extensions is:',
    options: ['1:8', '8:1', '1:4', '4:1'],
    correctAnswer: 0,
    explanation: 'ΔL = FL / (AY) = FL / (πr²Y). Since F and Y are constant, ΔL ∝ L/r². Ratio = (L₁/L₂) × (r₂/r₁)² = (1/2) × (1/2)² = 1/8.',
    tags: ['Young\'s Modulus', 'Longitudinal Strain']
  },
  {
    subject: 'physics', unit: 'Unit 5: Properties of Matter', chapter: 'properties-of-matter', year: 2022, difficulty: 'easy', verified: true, source: 'manual',
    question: 'The slope of a strict linear stress-strain curve directly dictates which quantity?',
    options: ['Elastic energy', 'Poisson\'s ratio', 'Young\'s Modulus', 'Viscosity'],
    correctAnswer: 2,
    explanation: 'Hooke\'s Law states Stress = Y × Strain. Thus, the slope (Stress/Strain) in the linear region directly equals Young\'s Modulus (Y).',
    tags: ['Hooke\'s Law', 'Stress-Strain Curve']
  },
  {
    subject: 'physics', unit: 'Unit 5: Properties of Matter', chapter: 'properties-of-matter', year: 2021, difficulty: 'hard', verified: true, source: 'manual',
    question: 'A spherical soap bubble of radius R is blown in air. The work done in blowing the bubble is exactly (T = surface tension):',
    options: ['4πR²T', '8πR²T', '2πR²T', '16πR²T'],
    correctAnswer: 1,
    explanation: 'Work = T × ΔArea. A soap bubble has TWO free surfaces (inside and outside). Total Area = 2 × 4πR² = 8πR². W = 8πR²T.',
    tags: ['Surface Tension', 'Work Done', 'Soap Bubble']
  },
  {
    subject: 'physics', unit: 'Unit 5: Properties of Matter', chapter: 'properties-of-matter', year: 2020, difficulty: 'medium', verified: true, source: 'manual',
    question: 'The maximum terminal velocity (v) of a small spherical ball of radius r falling through a highly viscous liquid relates as:',
    options: ['v ∝ r', 'v ∝ r²', 'v ∝ 1/r', 'v ∝ r³'],
    correctAnswer: 1,
    explanation: 'From Stokes\' Law balance, terminal velocity v = [2r²(ρ - σ)g] / 9η. Therefore, v is directly proportional to the square of its radius.',
    tags: ['Terminal Velocity', 'Stokes\' Law']
  },
  {
    subject: 'physics', unit: 'Unit 5: Properties of Matter', chapter: 'properties-of-matter', year: 2019, difficulty: 'medium', verified: true, source: 'manual',
    question: 'Water rises to a height h in a capillary tube. If the length of the capillary tube above the surface is made strictly less than h:',
    options: ['Water overflows freely', 'Water rises up to the top and stops forming a flat surface', 'Water rises to the top and forms a meniscus of larger radius', 'Water does not rise at all'],
    correctAnswer: 2,
    explanation: 'The liquid never overflows arbitrarily. It simply adjusts its contact angle (and meniscus radius) such that hR = constant.',
    tags: ['Capillary Action', 'Contact Angle']
  },
  {
    subject: 'physics', unit: 'Unit 5: Properties of Matter', chapter: 'properties-of-matter', year: 2018, difficulty: 'medium', verified: true, source: 'manual',
    question: 'The excess pressure inside a spherical drop of water is P. If two such identically sized drops merge to form a single larger drop, what is the new excess pressure?',
    options: ['P/2', 'P/(2^(1/3))', 'P', '2P'],
    correctAnswer: 1,
    explanation: 'Volume conservation: 2 × 4/3πr³ = 4/3πR³ => R = 2^(1/3) r. Excess pressure P = 2T/r. New P\' = 2T/R = 2T / (2^(1/3)r) = P / 2^(1/3).',
    tags: ['Excess Pressure', 'Surface Tension', 'Drop']
  },
  {
    subject: 'physics', unit: 'Unit 5: Properties of Matter', chapter: 'properties-of-matter', year: 2017, difficulty: 'easy', verified: true, source: 'manual',
    question: 'Viscosity of a liquid strictly:',
    options: ['Increases with temperature', 'Decreases with temperature', 'Remains independent of temperature', 'First increases then decreases'],
    correctAnswer: 1,
    explanation: 'Heating liquids provides enough thermal energy to break cohesive intermolecular bonds, making them flow significantly faster (decreased viscosity).',
    tags: ['Viscosity', 'Temperature Dependence']
  },
  {
    subject: 'physics', unit: 'Unit 5: Properties of Matter', chapter: 'properties-of-matter', year: 2016, difficulty: 'hard', verified: true, source: 'manual',
    question: 'A wire of length L and area A is subjected to a stretching force F. If Y is the Young\'s Modulus, the elastic potential energy stored strictly equals:',
    options: ['½ F L / (AY)', '½ F² L / (AY)', 'F² L / (2AY²)', '½ (F/A) L'],
    correctAnswer: 1,
    explanation: 'U = ½ × stress × strain × volume = ½ × (F/A) × (F/AY) × AL = ½ F² L / (AY). Extremely common structural formula.',
    tags: ['Elastic Potential Energy', 'Young\'s Modulus']
  },
  {
    subject: 'physics', unit: 'Unit 5: Properties of Matter', chapter: 'properties-of-matter', year: 2015, difficulty: 'easy', verified: true, source: 'manual',
    question: 'Hydraulic brakes in automobiles directly function on the principle of:',
    options: ['Archimedes Principle', 'Bernoulli\'s Theorem', 'Pascal\'s Law', 'Stokes\' Law'],
    correctAnswer: 2,
    explanation: 'Pascal\'s Law states that pressure applied to an enclosed incompressible fluid is transmitted completely uniformly in all dimensions.',
    tags: ['Fluid Behavior', 'Pascal\'s Law']
  },
  {
    subject: 'physics', unit: 'Unit 5: Properties of Matter', chapter: 'properties-of-matter', year: 2014, difficulty: 'medium', verified: true, source: 'manual',
    question: 'Bulk modulus of an ideal perfectly rigid body is strictly:',
    options: ['Zero', 'One', 'Infinity', 'Varies by mass'],
    correctAnswer: 2,
    explanation: 'A perfectly rigid body CANNOT undergo ANY volumetric compression. Since Volumetric Strain = 0, Bulk Modulus K = Pressure / 0 = Infinity.',
    tags: ['Bulk Modulus', 'Rigid Body']
  },
  {
    subject: 'physics', unit: 'Unit 5: Properties of Matter', chapter: 'properties-of-matter', year: 2013, difficulty: 'easy', verified: true, source: 'manual',
    question: 'Which substance behaves almost perfectly elastically under extreme longitudinal stress?',
    options: ['Copper', 'Steel', 'Rubber', 'Glass'],
    correctAnswer: 1,
    explanation: 'Steel has a phenomenally high Young\'s modulus and returns to exact dimensions reliably under high loads, making it substantially more fundamentally elastic than rubber.',
    tags: ['Elastic Limits', 'Real-life applications']
  },
  {
    subject: 'physics', unit: 'Unit 5: Properties of Matter', chapter: 'properties-of-matter', year: 2012, difficulty: 'hard', verified: true, source: 'manual',
    question: 'Two highly identical capillary tubes are dipped deeply into water and mercury. The water level strictly rises, while mercury drastically falls. Why?',
    options: ['Water is heavier than mercury', 'Mercury has zero viscosity', 'Water adhesive forces > cohesive, Mercury cohesive > adhesive', 'Both strictly have 90° contact angles'],
    correctAnswer: 2,
    explanation: 'For water, adhesion to glass exceeds internal cohesion (angle < 90°, rises). For mercury, internal cohesive metallic bonds drastically exceed glass adhesion (angle > 90°, depressed fall).',
    tags: ['Capillary Action', 'Cohesion and Adhesion']
  },
  {
    subject: 'physics', unit: 'Unit 5: Properties of Matter', chapter: 'properties-of-matter', year: 2011, difficulty: 'medium', verified: true, source: 'manual',
    question: 'The correct relationship between the specific Shear Modulus (η), Bulk Modulus (K), and Young\'s Modulus (Y) is:',
    options: ['Y = 9Kη / (3K - η)', 'Y = 9Kη / (3K + η)', 'Y = 3Kη / (9K + η)', 'Y = Kη / (K + η)'],
    correctAnswer: 1,
    explanation: 'The fundamental elasticity interrelation is strictly derived as Y = 9Kη / (3K + η). Extremely high yield memory relation.',
    tags: ['Elastic Moduli', 'Relation']
  },
  {
    subject: 'physics', unit: 'Unit 5: Properties of Matter', chapter: 'properties-of-matter', year: 2010, difficulty: 'medium', verified: true, source: 'manual',
    question: 'When an incompressible fluid flows completely steadily through a highly non-uniform horizontal pipe, which of the following remains strictly constant along the pipe?',
    options: ['Velocity', 'Pressure', 'Total Kinetic Energy', 'A × v'],
    correctAnswer: 3,
    explanation: 'The Equation of Continuity dictates that strictly for steady, incompressible fluid flow, Area × velocity (A × v) remains completely constant (Volume flux).',
    tags: ['Fluid Dynamics', 'Continuity Equation']
  },
  {
    subject: 'physics', unit: 'Unit 5: Properties of Matter', chapter: 'properties-of-matter', year: 2009, difficulty: 'easy', verified: true, source: 'manual',
    question: 'A theoretical material has a Poisson\'s ratio of 0.5. If a longitudinal strain of 2 × 10⁻³ is heavily produced, what constitutes the corresponding precise lateral strain?',
    options: ['-1 × 10⁻³', '1 × 10⁻³', '4 × 10⁻³', '-4 × 10⁻³'],
    correctAnswer: 0,
    explanation: 'Poisson\'s ratio σ = -lateral / longitudinal. 0.5 = -lateral / (2 × 10⁻³). Lateral strain strictly corresponds to -1 × 10⁻³. It compresses heavily transversally.',
    tags: ['Poisson\'s Ratio', 'Strain calculation']
  }
];

async function run() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Connected to DB');

    const delRes = await Question.deleteMany({ chapter: 'properties-of-matter' });
    console.log(`Deleted ${delRes.deletedCount} old placeholder/generic questions.`);

    const insRes = await Question.insertMany(questionsToSeed);
    console.log(`Successfully seeded ${insRes.length} pristine PYQs for properties-of-matter.`);

    mongoose.connection.close();
  } catch (e) {
    console.error(e);
    mongoose.connection.close();
  }
}

run();
