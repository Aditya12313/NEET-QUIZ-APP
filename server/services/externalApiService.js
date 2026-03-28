export function fetchMocks(chapter, needed) {
  const chapterContent = {
    'living-world': [
      {
        question: 'Which of the following is the universally applicable defining criterion of life?',
        options: ['Growth', 'Reproduction', 'Metabolism', 'Response to stimuli'],
        correctAnswer: 2,
        explanation: 'Metabolism is unique to living cells without exception. Growth and reproduction have exceptions.',
        tags: ['Metabolism', 'Defining characteristics', 'Living organisms']
      },
      {
        question: 'Binomial nomenclature was formally proposed by:',
        options: ['Aristotle', 'Ernst Mayr', 'Carolus Linnaeus', 'R.H. Whittaker'],
        correctAnswer: 2,
        explanation: 'Linnaeus proposed binomial nomenclature in his book Species Plantarum in 1753.',
        tags: ['Binomial nomenclature', 'Classification', 'Linnaeus']
      },
      {
        question: 'The largest herbarium in the world is located at:',
        options: ['NBRI Lucknow', 'Kew Gardens, London', 'Indian Botanical Garden', 'Smithsonian Institute'],
        correctAnswer: 1,
        explanation: 'The Royal Botanic Gardens at Kew, London contains millions of preserved plant specimens.',
        tags: ['Taxonomic aids', 'Herbarium', 'Kew']
      },
      {
        question: 'In the binomial name Mangifera indica, the word indica represents the:',
        options: ['Genus', 'Species epithet', 'Family', 'Order'],
        correctAnswer: 1,
        explanation: 'The second word in a binomial name is the specific epithet in lowercase.',
        tags: ['Nomenclature', 'Species']
      },
      {
        question: 'Flora is an account of:',
        options: ['One specific taxon', 'Alphabetical list of animals', 'Plants in a geographic area', 'A guide key for identification'],
        correctAnswer: 2,
        explanation: 'Flora is a taxonomic aid that accounts for plant species found in a particular geographic area.',
        tags: ['Taxonomic aids', 'Flora', 'Geographical distribution']
      }
    ],
    'biological-classification': [
      {
        question: 'Five kingdom classification was proposed by:',
        options: ['Carolus Linnaeus', 'Ernst Haeckel', 'R.H. Whittaker', 'Carl Woese'],
        correctAnswer: 2,
        explanation: 'R.H. Whittaker introduced the five-kingdom classification in 1969 based on cell structure and nutrition.',
        tags: ['Whittaker', 'Five kingdom classification', 'Taxonomy']
      },
      {
        question: 'The cell wall of diatoms is largely made of:',
        options: ['Cellulose', 'Chitin', 'Silica', 'Peptidoglycan'],
        correctAnswer: 2,
        explanation: 'Diatoms have indestructible silica frustules that accumulate as diatomaceous earth.',
        tags: ['Diatoms', 'Silica', 'Protista']
      },
      {
        question: 'Viroids differ from viruses in that they:',
        options: ['Have RNA instead of DNA', 'Are smaller and lack a protein coat', 'Are much larger', 'Attack only animals'],
        correctAnswer: 1,
        explanation: 'Viroids are naked, infectious RNA molecules without a surrounding protein coat (capsid).',
        tags: ['Viroids', 'Viruses', 'Infectious agents']
      },
      {
        question: 'Which of the following fungi belong to Deuteromycetes?',
        options: ['Agaricus', 'Aspergillus', 'Alternaria', 'Albugo'],
        correctAnswer: 2,
        explanation: 'Alternaria is considered an imperfect fungus (Deuteromycetes) because it lacks a known sexual phase.',
        tags: ['Fungi', 'Deuteromycetes', 'Alternaria']
      },
      {
        question: 'Prions are defined as:',
        options: ['Naked infectious RNA', 'Small DNA viruses', 'Infectious misfolded proteins', 'Bacterial spores'],
        correctAnswer: 2,
        explanation: 'Prions are infectious proteins that cause neurodegenerative diseases like BSE.',
        tags: ['Prions', 'Proteins', 'Diseases']
      }
    ]
  };

  const pool = chapterContent[chapter] || [];
  const results = [];
  
  // If we have highly realistic mock questions, return them.
  // Otherwise, fallback to a sensible generic template.
  for (let i = 0; i < needed; i++) {
    if (i < pool.length) {
      results.push({ ...pool[i], year: 2024, difficulty: 'medium', source: 'external', verified: false, chapter });
    } else {
      results.push({
        chapter,
        year: 2020 + (i % 5),
        question: `Realistic simulated question ${i + 1} sourced externally for module ${chapter}. Which logic applies?`,
        options: ['Law of Segregation', 'Thermodynamics', 'Metabolic processes', 'Genetic Drift'],
        correctAnswer: 2,
        explanation: `External dataset explanation: This concept tests the fundamental principles relevant to ${chapter}. Ensure you do not confuse thermodynamics with metabolic processes.`,
        tags: ['Core Concept', 'External API', chapter],
        difficulty: 'medium',
        verified: false,
        source: 'external'
      });
    }
  }

  return results;
}
