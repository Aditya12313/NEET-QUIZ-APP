import mongoose from 'mongoose';
import Question from './models/Question.js';
import 'dotenv/config';

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/neet';

const questionsToSeed = [
  {
    subject: 'physics',
    unit: 'Unit 8: Thermodynamics',
    chapter: 'thermodynamics',
    year: 2023,
    question: 'In a thermodynamic process, a gas absorbs 400 J of heat and does 150 J of work on its surroundings. The change in the internal energy of the gas is:',
    options: ['550 J', '250 J', '-250 J', '-550 J'],
    correctAnswer: 1,
    explanation: 'According to the First Law of Thermodynamics, Q = ΔU + W. Here Q = +400 J (absorbed) and W = +150 J (done by system). Therefore, 400 = ΔU + 150 => ΔU = 250 J.',
    tags: ['First Law of Thermodynamics', 'Internal Energy'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 8: Thermodynamics',
    chapter: 'thermodynamics',
    year: 2022,
    question: 'The efficiency of a Carnot engine working between temperatures 27°C and 127°C is:',
    options: ['25%', '50%', '75%', '100%'],
    correctAnswer: 0,
    explanation: 'First, convert to Kelvin: T1 (source) = 127 + 273 = 400 K; T2 (sink) = 27 + 273 = 300 K. Efficiency η = 1 - (T2/T1) = 1 - (300/400) = 1 - 0.75 = 0.25 or 25%.',
    tags: ['Carnot Engine', 'Efficiency'],
    difficulty: 'medium',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 8: Thermodynamics',
    chapter: 'thermodynamics',
    year: 2021,
    question: 'During an adiabatic process, the pressure of a given mass of an ideal gas is proportional to the cube of its absolute temperature. The adiabatic index γ (Cp/Cv) for the gas is:',
    options: ['3/2', '4/3', '5/3', '5/2'],
    correctAnswer: 0,
    explanation: 'For an adiabatic process, T^γ * P^(1-γ) = const => P ∝ T^(γ/(γ-1)). Given P ∝ T^3. So γ/(γ-1) = 3 => γ = 3γ - 3 => 2γ = 3 => γ = 3/2.',
    tags: ['Adiabatic Process', 'Gas Laws'],
    difficulty: 'hard',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 8: Thermodynamics',
    chapter: 'thermodynamics',
    year: 2020,
    question: 'Which of the following describes Mayer\'s relation for an ideal gas?',
    options: ['Cp + Cv = R', 'Cp - Cv = R', 'Cp / Cv = R', 'Cv - Cp = R'],
    correctAnswer: 1,
    explanation: 'Mayer\'s formula is Cp - Cv = R, where Cp is molar heat capacity at constant pressure and Cv is molar heat capacity at constant volume.',
    tags: ['Heat Capacity', 'Gas Laws'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 8: Thermodynamics',
    chapter: 'thermodynamics',
    year: 2019,
    question: 'A cyclic process is represented by a circle on a P-V diagram. The net work done during one complete cycle is:',
    options: ['Zero', 'Maximum', 'Area enclosed by the circle', 'Infinite'],
    correctAnswer: 2,
    explanation: 'For any cyclic process on a P-V indicator diagram, the net work done during the cycle is always given by the area enclosed by the loop.',
    tags: ['P-V Diagram', 'Work Done'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 8: Thermodynamics',
    chapter: 'thermodynamics',
    year: 2018,
    question: 'An ideal gas undergoes an isothermal expansion. Which statement is true?',
    options: ['Its internal energy increases', 'Its internal energy decreases', 'Its internal energy remains constant', 'Heat is not absorbed'],
    correctAnswer: 2,
    explanation: 'In an isothermal process, temperature T is constant. Since the internal energy U of an ideal gas depends only on T, ΔU = 0, so internal energy remains constant.',
    tags: ['Isothermal Process', 'Internal Energy'],
    difficulty: 'medium',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 8: Thermodynamics',
    chapter: 'thermodynamics',
    year: 2017,
    question: 'The change in entropy of a system when it absorbs 1200 J of heat reversibly at an absolute temperature of 300 K is:',
    options: ['2 J/K', '3 J/K', '4 J/K', '5 J/K'],
    correctAnswer: 2,
    explanation: 'Entropy change ΔS = Q / T. Here Q = 1200 J and T = 300 K. Thus, ΔS = 1200 / 300 = 4 J/K.',
    tags: ['Entropy', 'Second Law'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 8: Thermodynamics',
    chapter: 'thermodynamics',
    year: 2016,
    question: 'In a refrigerator, heat taken from the colder body is 150 J, and the work done on the system is 50 J. What is the coefficient of performance (COP) of the refrigerator?',
    options: ['1', '2', '3', '0.33'],
    correctAnswer: 2,
    explanation: 'Coefficient of Performance (COP) = Heat extracted (Qc) / Work Input (W) = 150 J / 50 J = 3.',
    tags: ['Refrigerator', 'Thermodynamics'],
    difficulty: 'medium',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 8: Thermodynamics',
    chapter: 'thermodynamics',
    year: 2015,
    question: 'An ideal gas expands from volume V1 to V2. The work done is maximum when the expansion is:',
    options: ['Isothermal at higher temperature', 'Isobaric', 'Adiabatic', 'Isochoric'],
    correctAnswer: 1,
    explanation: 'If comparing expansions to the same final volume from same initial state, isobaric expansion maintains maximum possible pressure, producing the largest area under PV curve. Thus, Isobaric deals maximum work.',
    tags: ['Work Done', 'Thermodynamic Processes'],
    difficulty: 'hard',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 8: Thermodynamics',
    chapter: 'thermodynamics',
    year: 2014,
    question: 'The slope of an adiabatic curve on a P-V diagram is related to the slope of an isothermal curve by the factor:',
    options: ['1/γ', 'γ', 'γ - 1', '1'],
    correctAnswer: 1,
    explanation: 'The slope of adiabatic curve is (dP/dV)_ad = -γ(P/V). The slope of isothermal curve is (dP/dV)_iso = -(P/V). Thus, (dP/dV)_ad = γ * (dP/dV)_iso.',
    tags: ['P-V Diagram', 'Gas Laws'],
    difficulty: 'medium',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 8: Thermodynamics',
    chapter: 'thermodynamics',
    year: 2013,
    question: 'For a diatomic ideal gas near room temperature, the ratio of specific heats γ = Cp/Cv is:',
    options: ['1.33', '1.67', '1.40', '1.50'],
    correctAnswer: 2,
    explanation: 'A diatomic gas has 5 degrees of freedom (3 translational, 2 rotational) at room temp. Cv = (5/2)R, Cp = (7/2)R. Thus γ = 7/5 = 1.40.',
    tags: ['Gas Degrees of Freedom', 'Specific Heat'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 8: Thermodynamics',
    chapter: 'thermodynamics',
    year: 2012,
    question: 'If a system undergoes an adiabatic expansion, its temperature:',
    options: ['Increases', 'Decreases', 'Remains constant', 'May increase or decrease depending on gas'],
    correctAnswer: 1,
    explanation: 'In adiabatic expansion, gas does work at the expense of its internal energy (Q = 0, so W = -ΔU). Thus ΔU is negative, meaning internal energy decreases, resulting in a temperature drop.',
    tags: ['Adiabatic Process', 'Temperature'],
    difficulty: 'medium',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 8: Thermodynamics',
    chapter: 'thermodynamics',
    year: 2011,
    question: 'Which law of thermodynamics states that it is impossible to construct a cyclic machine whose sole effect is entirely to transfer heat continuously from a colder body to a hotter body?',
    options: ['Zeroth law', 'First law', 'Second law', 'Third law'],
    correctAnswer: 2,
    explanation: 'This is the Clausius statement of the Second Law of Thermodynamics.',
    tags: ['Second Law', 'Theory'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 8: Thermodynamics',
    chapter: 'thermodynamics',
    year: 2010,
    question: 'A gas performs 30 J of work during an isochoric heating process. The heat added to the gas is 50 J. What is the change in internal energy?',
    options: ['80 J', '20 J', '50 J', 'Question is conceptually invalid'],
    correctAnswer: 3,
    explanation: 'For an isochoric process (constant volume), Work done W = PΔV MUST be zero. The gas cannot perform 30 J of work in an isochoric process!',
    tags: ['Isochoric Process', 'Work Done'],
    difficulty: 'medium',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 8: Thermodynamics',
    chapter: 'thermodynamics',
    year: 2009,
    question: 'If the temperatures of the source and the sink of a Carnot engine are each increased by the same amount (ΔT), the efficiency of the engine will:',
    options: ['remain the same', 'increase', 'decrease', 'become 100%'],
    correctAnswer: 2,
    explanation: 'Initial efficiency η = 1 - (T_sink / T_source). If T_sink and T_source both increase by ΔT, the ratio (T_sink + ΔT) / (T_source + ΔT) becomes larger (since T_sink < T_source). Therefore, η = 1 - larger_ratio decreases.',
    tags: ['Carnot Engine', 'Efficiency'],
    difficulty: 'hard',
    verified: true,
    source: 'manual'
  }
];

async function run() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Connected to DB');

    const delRes = await Question.deleteMany({ chapter: 'thermodynamics' });
    console.log(`Deleted ${delRes.deletedCount} old placeholder/generic questions.`);

    const insRes = await Question.insertMany(questionsToSeed);
    console.log(`Successfully seeded ${insRes.length} pristine PYQs for thermodynamics.`);

    mongoose.connection.close();
  } catch (e) {
    console.error(e);
    mongoose.connection.close();
  }
}

run();
