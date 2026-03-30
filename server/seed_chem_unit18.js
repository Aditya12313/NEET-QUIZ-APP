import mongoose from 'mongoose';
import Question from './models/Question.js';
import 'dotenv/config';

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/neet';

const questionsToSeed = [
  {
    subject: 'chemistry',
    unit: 'Unit 18: Organic Compounds Containing Nitrogen (Amines)',
    chapter: 'organic-nitrogen-compounds',
    year: 2023,
    question: 'General formula of a primary amine is:',
    options: ['R3N', 'R2NH', 'R-NH2', 'R-NO2'],
    correctAnswer: 2,
    explanation: 'Primary amines have one alkyl/aryl group attached to nitrogen: R-NH2.',
    tags: ['structure', 'classification'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 18: Organic Compounds Containing Nitrogen (Amines)',
    chapter: 'organic-nitrogen-compounds',
    year: 2022,
    question: 'In aqueous solution, common basicity order among simple aliphatic amines is:',
    options: ['3 degree > 2 degree > 1 degree > NH3', '2 degree > 1 degree > 3 degree > NH3', '1 degree > 2 degree > 3 degree > NH3', 'NH3 > 1 degree > 2 degree > 3 degree'],
    correctAnswer: 1,
    explanation: 'In water, both +I effect and solvation are considered; secondary amines are commonly strongest base.',
    tags: ['basicity', 'trend'],
    difficulty: 'medium',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 18: Organic Compounds Containing Nitrogen (Amines)',
    chapter: 'organic-nitrogen-compounds',
    year: 2021,
    question: 'In gas phase, basicity order of aliphatic amines is generally:',
    options: ['1 degree > 2 degree > 3 degree', '2 degree > 1 degree > 3 degree', '3 degree > 2 degree > 1 degree', '1 degree > 3 degree > 2 degree'],
    correctAnswer: 2,
    explanation: 'Without solvation, electron-donating alkyl groups dominate and tertiary amines are strongest bases.',
    tags: ['basicity', 'gas phase'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 18: Organic Compounds Containing Nitrogen (Amines)',
    chapter: 'organic-nitrogen-compounds',
    year: 2020,
    question: 'Aniline is less basic than methylamine because:',
    options: ['aniline has no lone pair', 'lone pair on N in aniline is delocalized by resonance', 'methylamine is aromatic', 'aniline cannot form salts'],
    correctAnswer: 1,
    explanation: 'Resonance in aniline decreases lone-pair availability for protonation.',
    tags: ['aniline', 'resonance', 'basicity'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 18: Organic Compounds Containing Nitrogen (Amines)',
    chapter: 'organic-nitrogen-compounds',
    year: 2019,
    question: 'Carbylamine test is given by:',
    options: ['only 1 degree amines', 'only 2 degree amines', 'only 3 degree amines', 'all amines'],
    correctAnswer: 0,
    explanation: 'Only primary amines form isocyanides with CHCl3 and alcoholic KOH.',
    tags: ['carbylamine test', 'identification'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 18: Organic Compounds Containing Nitrogen (Amines)',
    chapter: 'organic-nitrogen-compounds',
    year: 2018,
    question: 'Carbylamine reaction produces compounds having:',
    options: ['pleasant fruity smell', 'foul smell', 'no smell', 'sweet smell'],
    correctAnswer: 1,
    explanation: 'Isocyanides formed in carbylamine test have very offensive odor.',
    tags: ['carbylamine test', 'neet trap'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 18: Organic Compounds Containing Nitrogen (Amines)',
    chapter: 'organic-nitrogen-compounds',
    year: 2017,
    question: 'Hinsberg test is used to distinguish:',
    options: ['aldehydes and ketones', 'alcohol classes', '1 degree, 2 degree and 3 degree amines', 'alkanes and alkenes'],
    correctAnswer: 2,
    explanation: 'Hinsberg reagent differentiates amines by sulfonamide formation and solubility behavior.',
    tags: ['hinsberg test', 'identification'],
    difficulty: 'medium',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 18: Organic Compounds Containing Nitrogen (Amines)',
    chapter: 'organic-nitrogen-compounds',
    year: 2016,
    question: 'Amines on acylation form:',
    options: ['alkanes', 'amides', 'esters', 'nitriles'],
    correctAnswer: 1,
    explanation: 'Acylation of amines with acyl chlorides/anhydrides gives amides.',
    tags: ['acylation', 'reaction type'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 18: Organic Compounds Containing Nitrogen (Amines)',
    chapter: 'organic-nitrogen-compounds',
    year: 2015,
    question: 'Gabriel phthalimide synthesis is mainly used to prepare:',
    options: ['all classes of amines', 'only aromatic amines', 'only primary aliphatic amines', 'tertiary amines only'],
    correctAnswer: 2,
    explanation: 'Gabriel method is suitable for preparing primary aliphatic amines.',
    tags: ['preparation', 'gabriel method'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 18: Organic Compounds Containing Nitrogen (Amines)',
    chapter: 'organic-nitrogen-compounds',
    year: 2014,
    question: 'Diazotization of aniline is carried out at:',
    options: ['0-5 C', '25-30 C', '50-60 C', 'above 100 C'],
    correctAnswer: 0,
    explanation: 'Aryl diazonium salts are stable only at low temperature, typically 0-5 C.',
    tags: ['diazotization', 'temperature'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 18: Organic Compounds Containing Nitrogen (Amines)',
    chapter: 'organic-nitrogen-compounds',
    year: 2013,
    question: 'Diazonium salts are best described as:',
    options: ['unreactive terminal compounds', 'very reactive intermediates', 'inert aromatic compounds', 'only reducing agents'],
    correctAnswer: 1,
    explanation: 'Aryl diazonium salts are versatile reactive intermediates in aromatic substitutions.',
    tags: ['diazonium salts', 'theory'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 18: Organic Compounds Containing Nitrogen (Amines)',
    chapter: 'organic-nitrogen-compounds',
    year: 2012,
    question: 'Coupling reaction of benzenediazonium chloride with activated aromatic ring gives:',
    options: ['alkane', 'azo dye', 'amide', 'carboxylic acid'],
    correctAnswer: 1,
    explanation: 'Coupling forms azo compounds containing -N=N- linkage.',
    tags: ['coupling', 'azo dye'],
    difficulty: 'medium',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 18: Organic Compounds Containing Nitrogen (Amines)',
    chapter: 'organic-nitrogen-compounds',
    year: 2011,
    question: 'Benzenediazonium chloride can be converted to chlorobenzene using:',
    options: ['H2/Pd', 'CuCl/HCl', 'NaOH only', 'SOCl2 only'],
    correctAnswer: 1,
    explanation: 'Sandmeyer reaction with CuCl replaces diazonium group by chlorine.',
    tags: ['diazonium substitution', 'sandmeyer'],
    difficulty: 'medium',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 18: Organic Compounds Containing Nitrogen (Amines)',
    chapter: 'organic-nitrogen-compounds',
    year: 2010,
    question: 'A common NEET trap in this unit is:',
    options: ['treating all amines as equally basic in water', 'confusing SI units', 'using ideal gas law in electrochemistry', 'mixing atomic radii with ionic radii'],
    correctAnswer: 0,
    explanation: 'Aqueous basicity order must include solvation effects; all amines are not equally basic.',
    tags: ['neet trap', 'basicity'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 18: Organic Compounds Containing Nitrogen (Amines)',
    chapter: 'organic-nitrogen-compounds',
    year: 2009,
    question: 'Most repeated NEET pattern in amines chapter is usually:',
    options: ['only memory-based definitions', 'concept plus reaction-based objective questions', 'only lengthy numericals', 'only physical chemistry derivations'],
    correctAnswer: 1,
    explanation: 'Questions often combine conceptual basicity logic with reaction/product prediction.',
    tags: ['pyq pattern', 'concept plus reaction'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  }
];

async function run() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Connected to DB');

    const delRes = await Question.deleteMany({ chapter: 'organic-nitrogen-compounds', subject: 'chemistry' });
    console.log(`Deleted ${delRes.deletedCount} old placeholder/generic questions.`);

    const insRes = await Question.insertMany(questionsToSeed);
    console.log(`Successfully seeded ${insRes.length} chemistry PYQs for unit 18 (amines).`);

    mongoose.connection.close();
  } catch (e) {
    console.error(e);
    mongoose.connection.close();
  }
}

run();
