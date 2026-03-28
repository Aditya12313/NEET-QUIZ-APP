// Botany — Unit III: Cell Structure and Function
// Chapters: Cell: The Unit of Life | Cell Cycle and Cell Division

const cellUnitOfLife = {
  id: 'cell-unit-of-life',
  title: 'Chapter 8: Cell: The Unit of Life',
  notes: [
    {
      concept: 'Cell Theory: Schleiden (Botanist, 1838) and Schwann (Zoologist, 1839) proposed that all plants/animals are composed of cells. Drawback: did not explain how new cells formed.',
      fact: 'Rudolf Virchow (1855) modified the cell theory: "Omnis cellula-e cellula" (All cells arise from pre-existing cells). Exceptions to cell theory: Viruses, Viroids, Prions.',
      tip: 'Remember the authors and dates: Schleiden (plant) and Schwann (animal, plasma membrane discoverer).',
    },
    {
      concept: 'Prokaryotic Cells: Lacks membrane-bound nucleus and organelles. Contains 70S ribosomes. Genomic DNA is circular (nucleoid). Extrachromosomal small circular DNA = Plasmids (confer resistance to antibiotics).',
      fact: 'Cell envelope: Outermost Glycocalyx (slime layer/capsule) -> Cell wall (peptidoglycan) -> Plasma membrane. Mesosome is in-folding of plasma membrane (equivalent to mitochondria, helps in respiration, cell wall formation, DNA replication).',
      tip: 'The plasma membrane in prokaryotes is structurally similar to that of eukaryotes. Flagella in bacteria: composed of flagellin protein (not 9+2 arrangement), consists of basal body, hook, filament.',
    },
    {
      concept: 'Eukaryotic Plasma Membrane: Fluid Mosaic Model proposed by Singer & Nicolson (1972). Quasi-fluid nature of lipid bilayer enables lateral movement of proteins within the overall bilayer.',
      fact: 'Composed mainly of phosphoglycerides with polar heads (hydrophilic, outwards) and non-polar tails (hydrophobic, inwards). Also contains cholesterol (provides stability).',
      tip: 'In human RBC, membrane has ~52% protein and ~40% lipids. Proteins can be integral (partially/totally buried) or peripheral.',
    },
    {
      concept: 'Endomembrane System: Components whose functions are coordinated. Includes: Endoplasmic Reticulum (ER), Golgi complex, Lysosomes, and Vacuoles.',
      fact: 'RER (has ribosomes) -> Protein synthesis. SER (no ribosomes) -> Lipid synthesis, steroid hormone synthesis. Golgi -> Gliding/packaging, formation of glycoproteins/glycolipids. Lysosomes -> Rich in hydrolytic enzymes (active at acidic pH ~5). Vacuoles -> Tonoplast membrane, helps in osmoregulation (contractile vacuole in Amoeba).',
      tip: 'Mitochondria, chloroplasts, and peroxisomes are NOT part of the endomembrane system because their functions are not coordinated with the others.',
    },
    {
      concept: 'Mitochondria & Plastids: Double-membrane bound. Both are semi-autonomous organelles: they possess their own circular DNA, 70S ribosomes, and can synthesize some of their own proteins. Divide by fission.',
      fact: 'Mitochondria: Inner membrane folded into cristae (increases surface area). Site of aerobic respiration (ATP production). Plastids: Found in plants/euglenoids. Chloroplasts (contain thylakoids stacked into grana), Chromoplasts (fat-soluble carotenoids like carotene, xanthophyll), Leucoplasts (colourless, store nutrients: Amyloplast - starch, Elaioplast - oils, Aleuroplast - proteins).',
      tip: 'Stroma of chloroplast contains enzymes required for dark reaction (synthesis of carbs/proteins).',
    },
    {
      concept: 'Ribosomes: Non-membrane bound. Synthesise proteins. Eukaryotic = 80S (60S + 40S subunits); Prokaryotic/Organellar = 70S (50S + 30S). \'S\' = Svedberg\'s Unit (sedimentation coefficient, measuring density/size).',
      fact: 'Also called Palade particles (discovered by George Palade). Composed of RNA and proteins.',
      tip: 'Ribosomes do NOT have any membrane. Nucleolus is the site of active ribosomal RNA (rRNA) synthesis.',
    },
    {
      concept: 'Cytoskeleton: Network of proteinaceous filaments (microtubules, microfilaments, intermediate filaments) in cytoplasm. Functions: mechanical support, motility, maintenance of cell shape.',
      fact: 'Cilia and Flagella (eukaryotic): Core is called axoneme. Possess 9 doublets of peripheral microtubules and 2 central singlets (9+2 arrangement). Arise from centriole-like structure called basal body.',
      tip: 'Centrosome / Centrioles: Cylindrical structures, perpendicular to each other. Cartwheel organization: 9 evenly spaced peripheral triplets of tubulin protein (9+0 arrangement). Form spindle fibres during cell division in animal cells.',
    },
    {
      concept: 'Nucleus: Double membranous nuclear envelope with nuclear pores (for RNA/protein transport). Outer membrane continuous with RER.',
      fact: 'Nucleolus is non-membranous, actively synthesizing rRNA. Chromatin contains DNA, basic histones, non-histone proteins, RNA.',
      tip: 'Chromosomes based on centromere position: Metacentric (middle - V shape), Sub-metacentric (slightly away - L shape), Acrocentric (close to end - J shape), Telocentric (terminal - I shape). Secondary constrictions (satellites) act as Nucleolar Organizer Regions (NOR).',
    },
  ],
  quiz: [
    {
      question: 'Which of the following cell organelles is NOT a part of the endomembrane system?',
      options: ['Lysosome', 'Golgi complex', 'Mitochondria', 'Vacuole'],
      correctAnswer: 2,
      explanation: 'Mitochondria, chloroplasts, and peroxisomes are NOT considered part of the endomembrane system since their functions are not coordinated with the ER, Golgi, lysosomes, and vacuoles.',
    },
    {
      question: 'The structure that helps some bacteria attach to rocks and host tissues is:',
      options: ['Mesosomes', 'Holdfast', 'Rhizoids', 'Fimbriae/Pili'],
      correctAnswer: 3,
      explanation: 'Fimbriae and pili are surface appendages of bacteria. Fimbriae (bristle-like) help in attachment to rocks or host tissues. Pili are involved in mating (conjugation).',
    },
    {
      question: 'Select the correct matching in the following pairs:',
      options: ['Rough ER - Synthesis of glycogen', 'Rough ER - Oxidation of fatty acids', 'Smooth ER - Oxidation of phospholipids', 'Smooth ER - Synthesis of lipids/steroids'],
      correctAnswer: 3,
      explanation: 'Smooth Endoplasmic Reticulum (SER) is the major site for synthesis of lipids, including lipid-like steroidal hormones in animal cells. RER synthesizes proteins.',
    },
    {
      question: 'Which of the following structures is NOT found in a prokaryotic cell?',
      options: ['Mesosome', 'Plasma membrane', 'Nuclear envelope', 'Ribosome'],
      correctAnswer: 2,
      explanation: 'Prokaryotes lack a nuclear envelope and membrane-bound organelles. Their genetic material is highly coiled and naked (nucleoid).',
    },
    {
      question: 'A chromosome in which the centromere is situated close to its end so that one arm is very short and the other very long is:',
      options: ['Acrocentric', 'Metacentric', 'Sub-metacentric', 'Telocentric'],
      correctAnswer: 0,
      explanation: 'In an acrocentric chromosome, the centromere is situated close to its end forming one extremely short and one very long arm. Telocentric has a terminal centromere.',
    },
    {
      question: 'Plasmids are:',
      options: ['Extrachromosomal main DNA of bacteria', 'Small circular DNA outside the genomic DNA in bacteria', 'Viral DNA incorporated into host', 'Mitochondrial DNA'],
      correctAnswer: 1,
      explanation: 'Plasmids are small, circular, extrachromosomal DNA molecules found in many bacteria, which often carry genes conferring resistance to antibiotics.',
    },
    {
      question: 'The arrangement of microtubules in a eukaryotic cilium or flagellum is:',
      options: ['9 + 0', '9 + 2', '9 + 1', '8 + 2'],
      correctAnswer: 1,
      explanation: 'The axoneme of eukaryotic cilia/flagella usually has nine pairs of doublets of radially arranged peripheral microtubules, and a pair of centrally located microtubules (9+2). Centrioles have 9+0.',
    },
    {
      question: 'Important site for formation of glycoproteins and glycolipids is:',
      options: ['Vacuole', 'Golgi apparatus', 'Plastid', 'Lysosome'],
      correctAnswer: 1,
      explanation: 'Golgi apparatus is the major site of modification (glycosylation/glycosidation) of proteins and lipids synthesized by the ER, forming glycoproteins and glycolipids.',
    },
    {
      question: 'Leucoplasts that store proteins are called:',
      options: ['Amyloplasts', 'Elaioplasts', 'Aleuroplasts', 'Chromoplasts'],
      correctAnswer: 2,
      explanation: 'Aleuroplasts store proteins, amyloplasts store carbohydrates (starch), and elaioplasts store oils/fats.',
    },
    {
      question: 'Fluid mosaic model of plasma membrane was proposed by:',
      options: ['Schleiden and Schwann', 'Singer and Nicolson', 'Camillo Golgi', 'Robert Brown'],
      correctAnswer: 1,
      explanation: 'Singer and Nicolson (1972) proposed the widely accepted fluid mosaic model of the plasma membrane, describing it as a quasi-fluid structure.',
    },
  ],
}

const cellCycle = {
  id: 'cell-cycle-division',
  title: 'Chapter 9: Cell Cycle and Cell Division',
  notes: [
    {
      concept: 'Cell Cycle: The sequence of events by which a cell duplicates its genome, synthesizes other constituents, and eventually divides into two daughter cells. Duration in humans ~24 hours, yeast ~90 mins.',
      fact: 'Interphase (resting phase) takes >95% of the duration. M-phase (Mitosis) takes <5%. Interphase consists of G1, S, and G2 phases.',
      tip: 'Do not call interphase an "inactive" phase. It is the most metabolically active phase where the cell prepares for division.',
    },
    {
      concept: 'Interphase specific: G1 (Gap 1): Cell grows, active transcription/translation, but NO DNA replication. S (Synthesis): DNA replication occurs in nucleus. Amount of DNA doubles (2C to 4C), but chromosome number remains same (2n). Centriole duplicates in cytoplasm. G2 (Gap 2): Protein synthesis (tubulin) continues, cell grows.',
      fact: 'G0 phase (Quiescent stage): Cells that do not divide further (e.g. heart cells) exit G1 and enter G0. They are metabolically active but no longer proliferate unless called on to do so.',
      tip: 'Classic PYQ trap: In S phase, DNA amount doubles, but chromosome number does NOT change. A diploid cell 2n stays 2n, but its DNA content goes from 2C to 4C.',
    },
    {
      concept: 'M Phase (Mitosis): Equational division (chromosome number maintained). Karyokinesis (nuclear division) -> Cytokinesis (cytoplasmic division).',
      fact: 'Prophase: Chromatin condenses into chromosomes. Centrosomes move to opposite poles. Nuclear envelope, ER, Golgi, nucleolus disappear. Metaphase: Chromosomes align at equator (metaphase plate). Spindle fibres attach to kinetochores (disc-shaped structures on centromeres).',
      tip: 'Metaphase is the BEST stage to study chromosome morphology (size, number, structure).',
    },
    {
      concept: 'M Phase (Anaphase & Telophase): Anaphase: Centromeres split simultaneously. Chromatids separate and move to opposite poles. Best stage to study chromosome shape (V, L, J, I). Telophase: Chromosomes decondense at poles. Nuclear envelope/organelles reappear.',
      fact: 'Cytokinesis: Animal cells divide by furrowing (cleavage furrow, outside-in). Plant cells divide by cell plate formation (inside-out), which represents the middle lamella.',
      tip: 'In some organisms, karyokinesis is not followed by cytokinesis, leading to a multinucleate condition (syncytium), e.g., liquid endosperm in coconut.',
    },
    {
      concept: 'Meiosis: Reductional division. Reduces chromosome number by half. Produces haploid gametes. Maintains chromosome number across generations. Involves two sequential cycles of nuclear/cell division (Meiosis I & II), but only ONE cycle of DNA replication.',
      fact: 'Meiosis I reduces chromosome number (homologous chromosomes separate). Meiosis II is like mitosis (sister chromatids separate).',
      tip: 'DNA replicates only once (before Meiosis I). There is NO DNA replication between Meiosis I and Meiosis II (interkinesis).',
    },
    {
      concept: 'Prophase I (Longest and most complex): Subdivided into 5 stages: Leptotene, Zygotene, Pachytene, Diplotene, Diakinesis. (Mnemonic: LeZy PaDiDi).',
      fact: 'Leptotene: Chromosomes become visible (compaction starts). Zygotene: Pairing of homologous chromosomes (Synapsis), formation of synaptonemal complex / bivalent (tetrad).',
      tip: 'Synapsis = Zygotene. Crossing over = Pachytene.',
    },
    {
      concept: 'Prophase I (Continued): Pachytene: Crossing over occurs (exchange of genetic material between NON-sister chromatids of homologous chromosomes). Recombination nodules appear. Enzyme involved: Recombinase.',
      fact: 'Diplotene: Dissolution of synaptonemal complex. Homologs separate except at sites of crossovers, forming X-shaped chiasmata. Can last for months/years in oocytes of some vertebrates (Dictyotene).',
      tip: 'Diakinesis: Terminalisation of chiasmata (chiasmata slip to the ends). Chromosomes fully condense. Nucleolus/nuclear envelope disappear.',
    },
    {
      concept: 'Meiosis I (Rest of stages): Metaphase I: Bivalents align at equator. Anaphase I: Homologous chromosomes separate, while sister chromatids remain associated at their centromeres. Telophase I: Nuclear membrane reappears, cell divides into two haploid cells (dyad of cells).',
      fact: 'Centromere splitting ONLY happens in Anaphase II (just like mitotic Anaphase), NOT in Anaphase I.',
      tip: 'If a cell has 46 chromosomes, in Anaphase I, 23 chromosomes go to one pole and 23 to the other (each chromosome still has 2 chromatids). In Anaphase II, the centromeres split so 23 chromatids go to each pole.',
    },
  ],
  quiz: [
    {
      question: 'During cell growth, DNA synthesis takes place in:',
      options: ['S phase', 'G1 phase', 'G2 phase', 'M phase'],
      correctAnswer: 0,
      explanation: 'DNA replication (synthesis) occurs strictly during the S (Synthesis) phase of Interphase. The amount of DNA per cell doubles during this phase.',
    },
    {
      question: 'If the DNA content of a diploid cell in G1 phase is 2C, what will be the DNA content and chromosome number in G2 phase?',
      options: ['2C, 2n', '4C, 2n', '4C, 4n', '2C, 4n'],
      correctAnswer: 1,
      explanation: 'In S phase, DNA content doubles from 2C to 4C, but the chromosome number remains unchanged (2n). Hence in G2 phase, it is 4C and 2n.',
    },
    {
      question: 'In which stage of meiosis does crossing over take place?',
      options: ['Zygotene', 'Pachytene', 'Diplotene', 'Diakinesis'],
      correctAnswer: 1,
      explanation: 'Crossing over between non-sister chromatids of homologous chromosomes occurs during Pachytene, facilitated by the enzyme recombinase.',
    },
    {
      question: 'Centromeres split and chromatids separate during:',
      options: ['Anaphase I', 'Anaphase II', 'Metaphase I', 'Metaphase II'],
      correctAnswer: 1,
      explanation: 'Centromeres DO NOT split in Anaphase I (homologous chromosomes separate). Centromeres split to separate sister chromatids during Anaphase II (and anaphase of mitosis).',
    },
    {
      question: 'The enzyme recombinase is required at which stage of meiosis?',
      options: ['Pachytene', 'Zygotene', 'Diplotene', 'Diakinesis'],
      correctAnswer: 0,
      explanation: 'Recombinase aids in crossing over, which occurs exclusively during the Pachytene stage of Prophase I.',
    },
    {
      question: 'Cells in G0 phase:',
      options: ['Terminate the cell cycle entirely', 'Exit the cell cycle', 'Suspend the cell cycle', 'Enter into S phase immediately'],
      correctAnswer: 1,
      explanation: 'Cells that do not divide further exit the G1 phase and enter an inactive stage called the quiescent stage (G0). They remain metabolically active but do not proliferate.',
    },
    {
      question: 'The X-shaped structures called chiasmata are clearly visible during:',
      options: ['Leptotene', 'Pachytene', 'Diplotene', 'Diakinesis'],
      correctAnswer: 2,
      explanation: 'During Diplotene, the synaptonemal complex dissolves and the homologous chromosomes begin to separate, leaving them attached only at the sites of crossing over, appearing as X-shaped chiasmata.',
    },
    {
      question: 'Which is the best stage to study the shape (V, L, J, I) of chromosomes?',
      options: ['Prophase', 'Metaphase', 'Anaphase', 'Telophase'],
      correctAnswer: 2,
      explanation: 'Anaphase is the best stage to study chromosome shape (caused by the position of the centromere as chromosomes are pulled toward the poles). Metaphase is best for morphology (size/num).',
    },
    {
      question: 'Spindle fibres attach to what part of chromosomes?',
      options: ['Centromere directly', 'Kinetochore', 'Telomere', 'Chromocentre'],
      correctAnswer: 1,
      explanation: 'Spindle fibres attach to kinetochores, which are distinct, disc-shaped protein structures situated on the centromeres.',
    },
    {
      question: 'In animal cells during S phase, what duplicate(s)?',
      options: ['Only DNA in the nucleus', 'Only centrioles in the cytoplasm', 'DNA in nucleus and centrioles in cytoplasm', 'DNA in nucleus and mitochondria in cytoplasm'],
      correctAnswer: 2,
      explanation: 'During the S phase in animal cells, DNA replication begins in the nucleus, and the centriole duplicates in the cytoplasm.',
    },
  ],
}

export default {
  id: 'bot-u3',
  name: 'Unit III — Cell Structure and Function (Botany)',
  chapters: [cellUnitOfLife, cellCycle],
}
