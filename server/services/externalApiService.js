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
    ],
    'reproduction': [
      {
        question: 'Which one is NOT an asexual reproductive method?',
        options: ['Binary fission', 'Budding', 'Syngamy', 'Vegetative propagation'],
        correctAnswer: 2,
        explanation: 'Syngamy is fusion of gametes and belongs to sexual reproduction.',
        tags: ['Asexual reproduction', 'Syngamy']
      },
      {
        question: 'Multiple fission is characteristically observed in:',
        options: ['Amoeba', 'Hydra', 'Plasmodium', 'Yeast'],
        correctAnswer: 2,
        explanation: 'Plasmodium commonly reproduces by multiple fission in relevant life stages.',
        tags: ['Multiple fission', 'Plasmodium']
      },
      {
        question: 'The transfer of pollen grains from anther to stigma of the same flower is called:',
        options: ['Geitonogamy', 'Xenogamy', 'Autogamy', 'Apogamy'],
        correctAnswer: 2,
        explanation: 'Autogamy is pollination within the same flower.',
        tags: ['Pollination', 'Autogamy']
      },
      {
        question: 'Which pollination type occurs between two flowers of the same plant?',
        options: ['Autogamy', 'Geitonogamy', 'Xenogamy', 'Hydrophily'],
        correctAnswer: 1,
        explanation: 'Geitonogamy involves different flowers of the same plant.',
        tags: ['Pollination', 'Geitonogamy']
      },
      {
        question: 'Xenogamy refers to transfer of pollen between:',
        options: ['Same flower', 'Different flowers of same plant', 'Flowers of different plants of same species', 'Flowers of different species'],
        correctAnswer: 2,
        explanation: 'Xenogamy is transfer between different plants of the same species.',
        tags: ['Pollination', 'Xenogamy']
      },
      {
        question: 'Typical angiosperm embryo sac is:',
        options: ['7-celled, 8-nucleate', '8-celled, 7-nucleate', '7-celled, 7-nucleate', '8-celled, 8-nucleate'],
        correctAnswer: 0,
        explanation: 'Most angiosperms have a 7-celled, 8-nucleate embryo sac.',
        tags: ['Embryo sac', 'Female gametophyte']
      },
      {
        question: 'Double fertilization is a characteristic feature of:',
        options: ['Bryophytes', 'Gymnosperms', 'Angiosperms', 'Pteridophytes'],
        correctAnswer: 2,
        explanation: 'Double fertilization is unique to flowering plants (angiosperms).',
        tags: ['Double fertilization', 'Angiosperms']
      },
      {
        question: 'Triple fusion in angiosperms forms:',
        options: ['Zygote', 'Primary endosperm nucleus', 'Embryo', 'Seed coat'],
        correctAnswer: 1,
        explanation: 'Male gamete fuses with two polar nuclei to form primary endosperm nucleus.',
        tags: ['Triple fusion', 'Endosperm']
      },
      {
        question: 'In flowering plants, ovule transforms into:',
        options: ['Fruit', 'Seed', 'Embryo', 'Endosperm'],
        correctAnswer: 1,
        explanation: 'After fertilization, ovule develops into seed.',
        tags: ['Post fertilization', 'Seed formation']
      },
      {
        question: 'After fertilization, ovary typically develops into:',
        options: ['Seed', 'Fruit', 'Cotyledon', 'Perisperm'],
        correctAnswer: 1,
        explanation: 'Ovary matures into fruit after fertilization.',
        tags: ['Post fertilization', 'Fruit formation']
      },
      {
        question: 'Parthenocarpy leads to formation of:',
        options: ['Seeds without fertilization', 'Seedless fruits', 'Embryo sac', 'Pollen grains'],
        correctAnswer: 1,
        explanation: 'Parthenocarpy is development of fruit without fertilization and usually without seeds.',
        tags: ['Parthenocarpy', 'Seedless fruits']
      },
      {
        question: 'Apomixis in plants means:',
        options: ['Embryo formation from zygote only', 'Seed formation without fertilization', 'Pollination by insects only', 'Formation of pollen without meiosis'],
        correctAnswer: 1,
        explanation: 'Apomixis is asexual seed formation without fertilization.',
        tags: ['Apomixis', 'Asexual seed formation']
      },
      {
        question: 'Which one is an outbreeding device?',
        options: ['Cleistogamy', 'Dichogamy', 'Autogamy', 'Parthenogenesis'],
        correctAnswer: 1,
        explanation: 'Dichogamy reduces chances of self-pollination by asynchronous maturation of sex organs.',
        tags: ['Outbreeding devices', 'Dichogamy']
      },
      {
        question: 'Fragmentation as a mode of asexual reproduction is classically seen in:',
        options: ['Hydra', 'Mango', 'Human', 'Frog'],
        correctAnswer: 0,
        explanation: 'Hydra can show fragmentation and regeneration-based asexual propagation in simplified school-level examples.',
        tags: ['Fragmentation', 'Asexual reproduction']
      },
      {
        question: 'Which phase in life cycle is associated with active reproduction?',
        options: ['Juvenile phase', 'Reproductive phase', 'Senescence', 'Dormancy only'],
        correctAnswer: 1,
        explanation: 'Organisms reproduce during the reproductive phase, after juvenile period.',
        tags: ['Life cycle', 'Reproductive phase']
      },
      {
        question: 'Parthenogenesis is development of:',
        options: ['Fruit from ovary wall', 'Embryo from unfertilized egg', 'Endosperm from nucellus', 'Pollen tube from style'],
        correctAnswer: 1,
        explanation: 'Parthenogenesis is development without fertilization.',
        tags: ['Parthenogenesis', 'Fertilization']
      }
    ]
  };

  const pool = chapterContent[chapter] || [];
  const results = [];
  
  // If we have highly realistic mock questions, return them.
  // Otherwise, fallback to a sensible generic template.
  for (let i = 0; i < needed; i++) {
    if (pool.length > 0) {
      const base = pool[i % pool.length]
      results.push({
        ...base,
        chapter,
        year: 2020 + (i % 5),
        difficulty: 'medium',
        source: 'external',
        verified: false,
      })
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
