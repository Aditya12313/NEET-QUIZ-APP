export const biologySubject = {
  id: 'biology',
  name: 'Biology',
  units: [
    {
      id: 'botany-section',
      name: 'Botany',
      chapters: [
        {
          id: 'living-world',
          title: 'Unit 1: Diversity in the Living World',
          concept_explanations: [
            {
              title: 'What Is Living? (Defining Features)',
              description: 'Living organisms show growth, reproduction, metabolism, cellular organization, and consciousness (response to stimuli). Most defining features are metabolism, cellular organization, and consciousness; reproduction is not universal.'
            },
            {
              title: 'Biodiversity',
              description: 'About 1.7 to 1.8 million species have been identified. Biodiversity includes plants, animals, and microorganisms.'
            },
            {
              title: 'Taxonomy and Systematics',
              description: 'Taxonomy includes identification, classification, and nomenclature. Systematics additionally includes evolutionary relationships among organisms.'
            },
            {
              title: 'Binomial Nomenclature (Linnaeus)',
              description: 'Scientific name has two parts: genus and species epithet. Genus starts with a capital letter, species starts with lowercase, and both are written in italics in print (for example, Homo sapiens, Mangifera indica).'
            },
            {
              title: 'Taxonomical Hierarchy (Very Important)',
              description: 'Kingdom > Phylum/Division > Class > Order > Family > Genus > Species. Species is the lowest taxon and kingdom is the highest.'
            },
            {
              title: 'Five Kingdom Classification (Whittaker)',
              description: 'Monera: prokaryotic; Protista: unicellular eukaryotic; Fungi: heterotrophic with chitin wall; Plantae: autotrophic; Animalia: heterotrophic without cell wall.'
            },
            {
              title: 'Kingdom Monera',
              description: 'Most abundant organisms are bacteria. Main types include archaebacteria, eubacteria, and cyanobacteria. Cyanobacteria are photosynthetic and can fix nitrogen.'
            },
            {
              title: 'Kingdom Protista',
              description: 'Protists are unicellular eukaryotes. Main groups include chrysophytes (diatoms), dinoflagellates (red tide), euglenoids, and protozoans.'
            },
            {
              title: 'Kingdom Fungi',
              description: 'Fungi are heterotrophic (saprophytic/parasitic). Body consists of hyphae forming mycelium. Major groups are phycomycetes, ascomycetes, basidiomycetes, and deuteromycetes.'
            },
            {
              title: 'Kingdom Plantae and Animalia',
              description: 'Plantae are autotrophic with cellulose cell wall (algae, bryophytes, pteridophytes, gymnosperms, angiosperms). Animalia are multicellular heterotrophs without cell wall.'
            },
            {
              title: 'Viruses, Viroids, and Prions',
              description: 'Virus has nucleic acid (DNA or RNA) with protein coat, viroid has only RNA, and prion is an infectious protein particle.'
            },
            {
              title: 'Taxonomical Aids',
              description: 'Herbarium: dried plant specimens; botanical garden: living plant collections; museum: preserved specimens; zoo: living animals; key: identification tool.'
            }
          ],
          key_patterns: [
            'Direct concept questions on defining properties of life (metabolism most important).',
            'Taxonomical hierarchy order arrangement questions.',
            'Match-the-following on taxonomical aids (herbarium, zoo, key).',
            'Statement-based true/false questions (reproduction not universal).',
            'Scientific name correction questions (capitalization and italics rules).',
            'Kingdom-based organism classification MCQs (cyanobacteria, Amoeba, yeast).',
            'Assertion-reason questions on growth, metabolism, and life definitions.'
          ],
          formulas_relations: [
            {
              formula: 'Hierarchy: Species < Genus < Family < Order < Class < Phylum/Division < Kingdom',
              meaning: 'Most asked sequence in classification MCQs.'
            },
            {
              formula: 'Binomial name = Genus + species epithet',
              meaning: 'Genus capitalized, species lowercase, both italicized in print.'
            },
            {
              formula: 'Defining life traits: Metabolism + Cellular organization + Consciousness',
              meaning: 'Most reliable NEET-level identifying features of living organisms.'
            }
          ],
          application_insights: [
            'This chapter is highly NCERT-aligned and memory dominant in NEET.',
            'Most asked areas are hierarchy order, nomenclature format, and kingdom examples.',
            'Low-effort revision of tables and definitions gives high score returns.',
            'Assertion-reason and statement-based questions are very common in this unit.'
          ],
          common_mistakes: [
            {
              mistake: 'Treating reproduction as universal defining property',
              why: 'Some living organisms do not reproduce under all conditions, so reproduction is not absolute criterion.'
            },
            {
              mistake: 'Wrong hierarchy order',
              why: 'Sequence-based direct questions are frequent and easy to lose marks on.'
            },
            {
              mistake: 'Incorrect scientific name formatting',
              why: 'Genus capitalization and species lowercase rule is strictly tested.'
            },
            {
              mistake: 'Confusing precipitate examples with kingdom examples',
              why: 'Students mix chapter memory points; here focus on organism-to-kingdom mapping.'
            },
            {
              mistake: 'Mixing virus, viroid, and prion definitions',
              why: 'All are acellular infectious entities but differ by composition.'
            }
          ],
          quick_revision: [
            'Metabolism, cellular organization, and consciousness are core defining traits of life.',
            'Reproduction is not a universal defining criterion of life.',
            'About 1.7 to 1.8 million species are identified.',
            'Taxonomy = identification + classification + nomenclature.',
            'Systematics includes evolutionary relationship analysis.',
            'Binomial nomenclature by Linnaeus: Genus capital, species small, italicized format.',
            'Hierarchy: Kingdom > Phylum > Class > Order > Family > Genus > Species.',
            'Five kingdoms: Monera, Protista, Fungi, Plantae, Animalia.',
            'Cyanobacteria belong to Monera and can fix nitrogen.',
            'Diatoms are protists; yeast belongs to fungi.',
            'Virus = nucleic acid + coat; viroid = RNA only; prion = protein only.',
            'Taxonomical aids: herbarium, botanical garden, museum, zoo, key.'
          ],
          quiz: [
            {
              question: 'Most reliable defining property of living organisms is:',
              options: ['Reproduction', 'Growth only', 'Metabolism', 'Locomotion'],
              correctAnswer: 2,
              explanation: 'Metabolism is considered a defining characteristic of living systems.'
            },
            {
              question: 'Which statement is correct?',
              options: ['All living organisms reproduce', 'Reproduction is not universal in living organisms', 'Non-living organisms show metabolism', 'Consciousness is absent in all organisms'],
              correctAnswer: 1,
              explanation: 'Reproduction is important but not universal for defining life.'
            },
            {
              question: 'Correct hierarchy sequence is:',
              options: ['Genus < Species < Family', 'Species < Genus < Family', 'Family < Genus < Species', 'Class < Order < Family'],
              correctAnswer: 1,
              explanation: 'Species is the lowest rank followed by genus and family.'
            },
            {
              question: 'Correct scientific name format is:',
              options: ['Panthera Tigris', 'panthera tigris', 'Panthera tigris', 'PANTHERA TIGRIS'],
              correctAnswer: 2,
              explanation: 'Genus begins with capital letter and species with lowercase.'
            },
            {
              question: 'Cyanobacteria belong to:',
              options: ['Protista', 'Fungi', 'Monera', 'Plantae'],
              correctAnswer: 2,
              explanation: 'Cyanobacteria are prokaryotic members of Monera.'
            },
            {
              question: 'Herbarium is a collection of:',
              options: ['Live animals', 'Dried plant specimens', 'Microbial cultures only', 'Rock fossils only'],
              correctAnswer: 1,
              explanation: 'Herbarium stores preserved dried plant samples.'
            },
            {
              question: 'Viroids are:',
              options: ['DNA with protein coat', 'RNA without protein coat', 'Bacterial spores', 'Fungal cells'],
              correctAnswer: 1,
              explanation: 'Viroids are naked infectious RNA molecules.'
            }
          ]
        },
        {
          id: 'structural-organisation-animals-plants',
          title: 'Unit 2: Structural Organisation in Animals and Plants (Updated)',
          concept_explanations: [
            {
              title: 'Root: Types and Modifications',
              description: 'Root types include tap root (dicots), fibrous root (monocots), and adventitious root. Modifications include storage roots (carrot), support roots (prop roots in banyan), and respiratory roots (pneumatophores).'
            },
            {
              title: 'Stem: Functions and Modifications',
              description: 'Stem provides support and transport. Stem modifications include storage (potato), protection (thorns), and vegetative propagation.'
            },
            {
              title: 'Leaf and Venation',
              description: 'Leaf has petiole and lamina. Venation is reticulate in dicots and parallel in monocots. Leaf modifications include spines (cactus) and tendrils (pea).'
            },
            {
              title: 'Inflorescence, Flower, and Placentation',
              description: 'Racemose inflorescence has indefinite growth while cymose has definite growth. Flower has calyx, corolla, androecium, and gynoecium. Flower may be bisexual/unisexual and actinomorphic/zygomorphic. Placentation types include marginal, axile, parietal, and basal.'
            },
            {
              title: 'Fruit, Seed, and Floral Formula',
              description: 'Fruit develops from ovary and seed develops from ovule. Floral formula is high-weightage and represents floral characters symbolically (for example, Br bisexual K5 C5 A5 G1).'
            },
            {
              title: 'Plant Families (Very High Weightage)',
              description: 'Fabaceae (Leguminosae): example pea and root nodules for nitrogen fixation. Solanaceae: example potato with actinomorphic flowers. Liliaceae: monocot family with parallel venation.'
            },
            {
              title: 'Plant Anatomy and Tissues',
              description: 'Tissues are meristematic (actively dividing) and permanent. Permanent tissues include simple tissues (parenchyma, collenchyma, sclerenchyma) and complex tissues (xylem and phloem).'
            },
            {
              title: 'Xylem, Phloem, and Secondary Growth',
              description: 'Xylem transports water and minerals while phloem transports food. Secondary growth increases girth of stem/root.'
            },
            {
              title: 'Animal Tissues',
              description: 'Epithelial tissue gives protection, connective tissue gives support (for example, bone and blood), muscular tissue enables movement, and nervous tissue transmits signals.'
            },
            {
              title: 'Frog Structural Organisation (Very Important)',
              description: 'Digestive pathway: mouth to stomach to intestine. Frog has three-chambered heart, respiration through skin and lungs, and nervous system with brain and spinal cord.'
            }
          ],
          key_patterns: [
            'Diagram-based questions on flower structure, leaf venation, and root types.',
            'Match-the-following on dicot/monocot traits (tap root, venation, family traits).',
            'Plant family questions (Fabaceae, Solanaceae, Liliaceae).',
            'Tissue-function questions (xylem vs phloem and tissue categories).',
            'Assertion-reason questions such as flexibility due to collenchyma.',
            'Direct NCERT lines on floral formula and placentation.',
            'Animal tissue and frog-system short conceptual questions.'
          ],
          formulas_relations: [
            {
              formula: 'Racemose: main axis continues; Cymose: main axis terminates in flower',
              meaning: 'Core distinction repeatedly asked in botany MCQs.'
            },
            {
              formula: 'Xylem -> water transport; Phloem -> food transport',
              meaning: 'Most common direct tissue-function mapping in NEET.'
            },
            {
              formula: 'Floral formula example: Br bisexual K5 C5 A5 G1',
              meaning: 'Symbolic representation of floral parts and arrangement.'
            }
          ],
          application_insights: [
            'Unit 2 has very high weightage with strong diagram and terminology focus.',
            'Most asked topics are floral formula, plant families, and tissue functions.',
            'Practicing morphology diagrams gives fast elimination advantage in MCQs.',
            'Direct NCERT table lines are frequently converted into one-liner questions.'
          ],
          common_mistakes: [
            {
              mistake: 'Confusing monocot and dicot characteristics',
              why: 'Root type and venation are repeatedly interchanged in objective questions.'
            },
            {
              mistake: 'Forgetting floral formula symbols',
              why: 'Floral formula is direct-theory and high-frequency in NEET.'
            },
            {
              mistake: 'Mixing xylem and phloem functions',
              why: 'Transport roles are opposite and commonly tested in one-liners.'
            },
            {
              mistake: 'Ignoring morphology diagrams',
              why: 'Diagram-based questions are very common in this unit.'
            },
            {
              mistake: 'Skipping plant-family hallmark features',
              why: 'Family-example and character mapping gives easy marks.'
            },
            {
              mistake: 'Confusing placentation types',
              why: 'Marginal, axile, parietal, and basal are often mixed without diagram recall.'
            }
          ],
          quick_revision: [
            'Tap root in dicots, fibrous root in monocots, adventitious roots in many special cases.',
            'Root modifications: storage (carrot), support (banyan prop roots), respiration (pneumatophores).',
            'Stem modifies for storage, protection, and vegetative propagation.',
            'Leaf venation: reticulate in dicots and parallel in monocots.',
            'Inflorescence: racemose (indefinite) and cymose (definite).',
            'Flower parts: calyx, corolla, androecium, gynoecium.',
            'Placentation types: marginal, axile, parietal, basal.',
            'Fruit develops from ovary; seed develops from ovule.',
            'Plant families to remember: Fabaceae, Solanaceae, Liliaceae.',
            'Meristematic tissue divides actively; permanent tissue is differentiated.',
            'Simple permanent tissue: parenchyma, collenchyma, sclerenchyma.',
            'Complex tissue: xylem (water) and phloem (food).',
            'Secondary growth increases girth.',
            'Animal tissues: epithelial, connective, muscular, nervous.',
            'Frog has three-chambered heart and respiration by skin plus lungs.'
          ],
          quiz: [
            {
              question: 'Tap root system is typically found in:',
              options: ['Monocots', 'Dicots', 'Bryophytes only', 'Fungi'],
              correctAnswer: 1,
              explanation: 'Tap root system is characteristic of dicot plants.'
            },
            {
              question: 'Parallel venation is a feature of:',
              options: ['Dicots', 'Monocots', 'Gymnosperms only', 'Fungi'],
              correctAnswer: 1,
              explanation: 'Parallel venation is generally seen in monocot leaves.'
            },
            {
              question: 'In racemose inflorescence, main axis is:',
              options: ['Terminated early', 'Continuously growing', 'Always underground', 'Always unbranched and short'],
              correctAnswer: 1,
              explanation: 'Racemose has indeterminate growth of main axis.'
            },
            {
              question: 'Xylem primarily transports:',
              options: ['Food', 'Water and minerals', 'Hormones only', 'Proteins only'],
              correctAnswer: 1,
              explanation: 'Xylem conducts water and minerals from roots to other parts.'
            },
            {
              question: 'Phloem primarily transports:',
              options: ['Water', 'Food', 'Oxygen only', 'Nitrogen only'],
              correctAnswer: 1,
              explanation: 'Phloem translocates food materials.'
            },
            {
              question: 'Fabaceae is associated with:',
              options: ['Nitrogen-fixing root nodules', 'Parallel venation only', 'Three-chambered heart', 'No floral formula'],
              correctAnswer: 0,
              explanation: 'Fabaceae members commonly show root nodules with nitrogen fixation.'
            },
            {
              question: 'Frog heart is:',
              options: ['Two-chambered', 'Three-chambered', 'Four-chambered', 'Single-chambered'],
              correctAnswer: 1,
              explanation: 'Frog has a three-chambered heart.'
            },
            {
              question: 'Plant anatomy primarily studies:',
              options: ['External shape only', 'Internal structure', 'Evolution only', 'Reproduction only'],
              correctAnswer: 1,
              explanation: 'Anatomy refers to internal structure and tissues.'
            }
          ]
        },
        {
          id: 'cell-structure-function',
          title: 'Unit 3: Cell Structure and Function (Updated)',
          concept_explanations: [
            {
              title: 'Cell Theory',
              description: 'Cell theory was proposed by Schleiden and Schwann and later modified by Virchow. Core points: cell is the basic unit of life and all cells arise from pre-existing cells.'
            },
            {
              title: 'Prokaryotic vs Eukaryotic Cells',
              description: 'Prokaryotic cells are smaller, lack true nucleus and membrane-bound organelles. Eukaryotic cells are larger, with nucleus and membrane-bound organelles.'
            },
            {
              title: 'Cell Membrane and Transport',
              description: 'Cell membrane follows fluid mosaic model by Singer and Nicolson and is selectively permeable. Transport occurs by diffusion, facilitated diffusion, active transport, endocytosis, and exocytosis.'
            },
            {
              title: 'Cell Wall and Cell Envelope',
              description: 'Plant cell wall is mainly cellulose while fungal wall is chitin. Cell wall provides rigidity and protection.'
            },
            {
              title: 'Endoplasmic Reticulum and Golgi Apparatus',
              description: 'RER is associated with protein synthesis and SER with lipid synthesis. Golgi apparatus performs packaging, modification, and secretion.'
            },
            {
              title: 'Lysosomes, Mitochondria, and Ribosomes',
              description: 'Lysosomes are intracellular digestive organelles and are often called suicidal bags. Mitochondria are powerhouse of cell with double membrane and own DNA. Ribosomes are sites of protein synthesis (70S in prokaryotes, 80S in eukaryotic cytoplasm).'
            },
            {
              title: 'Plastids, Vacuole, Cytoskeleton, and Centrioles',
              description: 'Plastids in plants include chloroplast (photosynthesis), chromoplast (pigments), and leucoplast (storage). Vacuole helps storage and turgor maintenance. Cytoskeleton gives shape and movement; centrioles assist in animal cell division.'
            },
            {
              title: 'Nucleus',
              description: 'Nucleus contains nuclear membrane, nucleolus, and chromatin; DNA is the key genetic material present in chromatin.'
            },
            {
              title: 'Biomolecules and Enzymes',
              description: 'Major biomolecules are carbohydrates, proteins, lipids, and nucleic acids. Enzymes are biological catalysts with high specificity.'
            },
            {
              title: 'Cell Cycle, Mitosis, and Meiosis',
              description: 'Cell cycle includes interphase (G1, S, G2) and M phase. Mitosis is equational division with unchanged chromosome number; meiosis is reduction division producing variation.'
            }
          ],
          key_patterns: [
            'Organelle-function mapping questions (mitochondria, Golgi, ER, lysosome).',
            'Prokaryotic vs eukaryotic comparison-based MCQs.',
            'Ribosome type questions (70S vs 80S).',
            'Cell cycle stage sequence questions (G1, S, G2, M).',
            'Mitosis vs meiosis chromosome-number and variation questions.',
            'Diagram-based questions on mitochondria, chloroplast, and cell membrane.',
            'Enzyme role and classification direct questions.'
          ],
          formulas_relations: [
            {
              formula: 'Mitosis: equational division (2n -> 2n); Meiosis: reduction division (2n -> n)',
              meaning: 'Most important chromosome-number relation for cell division questions.'
            },
            {
              formula: 'Ribosome types: 70S (prokaryotes), 80S (eukaryotes)',
              meaning: 'High-frequency direct fact in NEET objective questions.'
            },
            {
              formula: 'Interphase = G1 + S + G2',
              meaning: 'Core staging relation in cell cycle questions.'
            }
          ],
          application_insights: [
            'Unit 3 has very high NEET weightage and is repeatedly asked every year.',
            'Most asked zones are organelles, cell cycle, and meiosis.',
            'Diagram-based interpretation and one-line organelle functions give fast scoring advantage.',
            'This chapter blends memory with concept and is NCERT line intensive.'
          ],
          common_mistakes: [
            {
              mistake: 'Confusing RER and SER',
              why: 'RER is linked to protein synthesis while SER is linked to lipid synthesis.'
            },
            {
              mistake: 'Forgetting ribosome type differences',
              why: '70S and 80S are very common direct-fact questions.'
            },
            {
              mistake: 'Mixing mitosis and meiosis',
              why: 'One is equational and other is reduction division with variation.'
            },
            {
              mistake: 'Ignoring organelle core functions',
              why: 'Simple organelle-function mapping appears repeatedly in PYQs.'
            },
            {
              mistake: 'Skipping cell and organelle diagrams',
              why: 'Many questions are visual or structure-based.'
            }
          ],
          quick_revision: [
            'Cell theory by Schleiden and Schwann; Virchow stated all cells arise from pre-existing cells.',
            'Prokaryotes are smaller and lack true nucleus and membrane-bound organelles.',
            'Fluid mosaic model of membrane was given by Singer and Nicolson.',
            'Transport across membrane includes diffusion, facilitated diffusion, active transport, endocytosis, exocytosis.',
            'Plant wall is cellulose; fungal wall is chitin.',
            'RER: protein synthesis; SER: lipid synthesis.',
            'Golgi handles packaging and secretion.',
            'Lysosome does intracellular digestion.',
            'Mitochondria are double-membraned and have own DNA.',
            'Ribosome sizes: 70S in prokaryotes and 80S in eukaryotes.',
            'Plastids: chloroplast, chromoplast, leucoplast.',
            'Vacuole helps storage and turgor pressure.',
            'Nucleus contains chromatin and nucleolus.',
            'Interphase: G1, S, G2; M phase is division stage.',
            'Mitosis keeps chromosome number same; meiosis reduces it and creates variation.'
          ],
          quiz: [
            {
              question: 'Fluid mosaic model was proposed by:',
              options: ['Watson and Crick', 'Singer and Nicolson', 'Schleiden and Schwann', 'Mendel and Morgan'],
              correctAnswer: 1,
              explanation: 'Singer and Nicolson proposed the fluid mosaic model of cell membrane.'
            },
            {
              question: 'RER is mainly associated with:',
              options: ['Lipid synthesis', 'Protein synthesis', 'ATP storage', 'Chromosome segregation'],
              correctAnswer: 1,
              explanation: 'RER has ribosomes and is linked to protein synthesis.'
            },
            {
              question: 'Ribosomes in prokaryotes are:',
              options: ['60S', '70S', '80S', '90S'],
              correctAnswer: 1,
              explanation: 'Prokaryotic cytoplasmic ribosomes are 70S.'
            },
            {
              question: 'Organelle called power house of cell is:',
              options: ['Golgi body', 'Mitochondrion', 'Lysosome', 'Nucleus'],
              correctAnswer: 1,
              explanation: 'Mitochondria generate ATP through cellular respiration.'
            },
            {
              question: 'Cell cycle interphase includes:',
              options: ['G1, S, G2', 'P, Q, R', 'A1, A2, A3', 'Only M phase'],
              correctAnswer: 0,
              explanation: 'Interphase consists of G1, S, and G2 phases.'
            },
            {
              question: 'Meiosis results in:',
              options: ['No chromosome change', 'Diploid somatic cells only', 'Haploid gametes', 'Cell death only'],
              correctAnswer: 2,
              explanation: 'Meiosis reduces chromosome number to haploid.'
            },
            {
              question: 'Mitosis is called:',
              options: ['Reduction division', 'Equational division', 'Synaptic division', 'Independent assortment'],
              correctAnswer: 1,
              explanation: 'Mitosis is equational because chromosome number remains same in daughter cells.'
            }
          ]
        },
        {
          id: 'plant-physiology',
          title: 'Unit 4: Plant Physiology (Updated)',
          concept_explanations: [
            {
              title: 'Photosynthesis: Definition and Site',
              description: 'Photosynthesis converts light energy into chemical energy. It occurs in chloroplast; grana are the site of light reaction and stroma is the site of dark reaction (Calvin cycle).'
            },
            {
              title: 'Photosynthetic Pigments and Light Reaction',
              description: 'Main pigments are chlorophyll a (primary), chlorophyll b, and carotenoids. Light reaction in grana produces ATP, NADPH, and O2.'
            },
            {
              title: 'Dark Reaction and Calvin Cycle',
              description: 'Dark reaction occurs in stroma, uses ATP and NADPH, and fixes CO2 into carbohydrates (glucose pathway concept).'
            },
            {
              title: 'Photophosphorylation',
              description: 'Cyclic photophosphorylation yields ATP only. Non-cyclic photophosphorylation yields ATP, NADPH, and O2.'
            },
            {
              title: 'C3 vs C4 Plants (Very Important)',
              description: 'C3 plants form first stable 3-carbon product, have relatively lower efficiency and higher photorespiration. C4 plants form first stable 4-carbon product, have higher efficiency and lower photorespiration.'
            },
            {
              title: 'Photorespiration and Limiting Factors',
              description: 'Photorespiration is considered a wasteful process that lowers photosynthetic efficiency. Key factors affecting photosynthesis are light intensity, CO2 concentration, and temperature.'
            },
            {
              title: 'Respiration in Plants',
              description: 'Respiration can be aerobic or anaerobic. Major steps are glycolysis (cytoplasm), TCA cycle (mitochondria), and electron transport chain (ATP synthesis).'
            },
            {
              title: 'ATP Yield and Respiratory Quotient',
              description: 'At NEET concept level, aerobic respiration is often treated around 36-38 ATP yield. Respiratory quotient is RQ = CO2 evolved / O2 consumed; carbohydrate RQ is about 1 and fats generally show RQ less than 1.'
            },
            {
              title: 'Plant Growth and Development Stages',
              description: 'Growth phases include lag, log, and stationary. Growth rates may be arithmetic or geometric. Differentiation, dedifferentiation, and redifferentiation define developmental transitions.'
            },
            {
              title: 'Plant Growth Regulators (Very Important)',
              description: 'Auxin promotes cell elongation, gibberellin promotes stem growth, cytokinin promotes cell division, ethylene promotes fruit ripening, and ABA acts as growth inhibitor.'
            }
          ],
          key_patterns: [
            'Photosynthesis questions: C3 vs C4 and light reaction vs dark reaction.',
            'ATP and respiration-step questions (glycolysis, TCA, ETS).',
            'RQ-based conceptual questions with substrate inference.',
            'Hormone-function mapping (auxin, gibberellin, cytokinin, ethylene, ABA).',
            'Photorespiration and Calvin-cycle conceptual asks.',
            'Diagram-based chloroplast and cycle questions.',
            'Match-the-following questions for growth regulators and their functions.'
          ],
          formulas_relations: [
            {
              formula: 'RQ = CO2 evolved / O2 consumed',
              meaning: 'Respiratory quotient relation; carbohydrate typically gives RQ near 1.'
            },
            {
              formula: 'Cyclic photophosphorylation -> ATP only',
              meaning: 'No NADPH and no O2 evolution in cyclic route.'
            },
            {
              formula: 'Non-cyclic photophosphorylation -> ATP + NADPH + O2',
              meaning: 'Complete light-reaction output in non-cyclic pathway.'
            }
          ],
          application_insights: [
            'Plant physiology has very high NEET weightage and repeats core concepts frequently.',
            'Most asked topics are C3 vs C4, plant hormones, and photosynthesis pathway steps.',
            'RQ and respiration-stage understanding helps in quick concept elimination questions.',
            'This chapter is strongly NCERT-line plus concept based.'
          ],
          common_mistakes: [
            {
              mistake: 'Confusing light and dark reactions',
              why: 'Sites and products of both reactions are often interchanged.'
            },
            {
              mistake: 'Forgetting C3 vs C4 differences',
              why: 'First product, efficiency, and photorespiration comparison is high-yield.'
            },
            {
              mistake: 'Mixing plant hormone functions',
              why: 'Auxin, gibberellin, cytokinin, ethylene, and ABA are commonly confused.'
            },
            {
              mistake: 'Ignoring RQ value logic',
              why: 'Substrate-based RQ interpretation appears in conceptual NEET questions.'
            },
            {
              mistake: 'Skipping pathway diagrams',
              why: 'Chloroplast and cycle diagrams are repeatedly tested.'
            }
          ],
          quick_revision: [
            'Photosynthesis converts light energy to chemical energy in chloroplasts.',
            'Grana: light reaction; stroma: dark reaction (Calvin cycle).',
            'Chlorophyll a is primary pigment; chlorophyll b and carotenoids are accessory pigments.',
            'Light reaction gives ATP, NADPH, and O2.',
            'Dark reaction uses ATP and NADPH for CO2 fixation.',
            'Cyclic photophosphorylation gives ATP only; non-cyclic gives ATP, NADPH, O2.',
            'C3 plants have higher photorespiration; C4 plants are more efficient with lower photorespiration.',
            'Main photosynthesis factors: light, CO2, temperature.',
            'Respiration steps: glycolysis, TCA cycle, ETS.',
            'NEET concept ATP yield is around 36-38 in aerobic respiration.',
            'RQ = CO2/O2; carbohydrate about 1, fats less than 1.',
            'Growth phases: lag, log, stationary.',
            'Growth rates: arithmetic and geometric.',
            'Differentiation, dedifferentiation, and redifferentiation are key developmental terms.',
            'Hormones: auxin (elongation), gibberellin (stem growth), cytokinin (division), ethylene (ripening), ABA (inhibitor).'
          ],
          quiz: [
            {
              question: 'Light reaction of photosynthesis occurs in:',
              options: ['Stroma', 'Grana', 'Cytoplasm', 'Nucleus'],
              correctAnswer: 1,
              explanation: 'Light reaction occurs in thylakoid/grana region of chloroplast.'
            },
            {
              question: 'Dark reaction (Calvin cycle) occurs in:',
              options: ['Grana', 'Stroma', 'Cell wall', 'Tonoplast'],
              correctAnswer: 1,
              explanation: 'Calvin cycle enzymes function in chloroplast stroma.'
            },
            {
              question: 'Cyclic photophosphorylation produces:',
              options: ['ATP only', 'ATP and NADPH', 'NADPH and O2', 'O2 only'],
              correctAnswer: 0,
              explanation: 'Cyclic flow yields ATP without NADPH or oxygen evolution.'
            },
            {
              question: 'C4 plants are generally more efficient because they have:',
              options: ['Higher photorespiration', 'Lower photorespiration', 'No chlorophyll', 'No Calvin cycle'],
              correctAnswer: 1,
              explanation: 'C4 pathway minimizes photorespiration and improves efficiency.'
            },
            {
              question: 'RQ for carbohydrates is approximately:',
              options: ['0.5', '1.0', '1.5', '2.0'],
              correctAnswer: 1,
              explanation: 'For carbohydrate oxidation, CO2 produced and O2 consumed are approximately equal.'
            },
            {
              question: 'Ethylene is mainly associated with:',
              options: ['Cell division', 'Fruit ripening', 'Stem elongation only', 'Nitrogen fixation'],
              correctAnswer: 1,
              explanation: 'Ethylene is a key regulator of fruit ripening.'
            },
            {
              question: 'ABA is generally considered a:',
              options: ['Growth promoter', 'Growth inhibitor', 'Photosynthetic pigment', 'Respiratory enzyme'],
              correctAnswer: 1,
              explanation: 'ABA largely acts as inhibitory/stress hormone in plant growth.'
            }
          ]
        }
      ]
    },
    {
      id: 'zoology-section',
      name: 'Zoology',
      chapters: [
        {
          id: 'human-physiology',
          title: 'Unit 5: Human Physiology (Updated)',
          concept_explanations: [
            {
              title: 'Breathing and Respiration',
              description: 'Human respiratory pathway includes nose, trachea, and lungs. During inspiration diaphragm contracts, and during expiration diaphragm relaxes. O2 diffuses into blood while CO2 is expelled.'
            },
            {
              title: 'Transport of Gases and Respiratory Volumes',
              description: 'Oxygen is mainly transported by hemoglobin and carbon dioxide largely as bicarbonate ions. Important respiratory volumes include tidal volume and vital capacity. Common disorders include asthma and emphysema.'
            },
            {
              title: 'Body Fluids and Circulation',
              description: 'Blood components: RBC for oxygen transport, WBC for immunity, platelets for clotting. Blood groups include ABO and Rh systems. Heart has four chambers and supports double circulation.'
            },
            {
              title: 'Cardiac Cycle, ECG, and Circulatory Disorders',
              description: 'Cardiac cycle has systole and diastole phases. ECG waves include P, QRS, and T. Important disorders include hypertension and heart attack/coronary events.'
            },
            {
              title: 'Excretory System and Nephron',
              description: 'Excretory path is kidneys to ureters to urinary bladder. Nephron is functional unit of kidney. Urine formation includes filtration, reabsorption, and secretion with ADH-based regulation.'
            },
            {
              title: 'Renal Disorders and Dialysis',
              description: 'Kidney failure and severe renal dysfunction may require dialysis support.'
            },
            {
              title: 'Locomotion and Movement',
              description: 'Movement types include ciliary and muscular movement. Muscle types are skeletal, smooth, and cardiac. Skeletal muscles contract via actin-myosin interaction; skeletal system includes bones and joints.'
            },
            {
              title: 'Locomotor Disorders',
              description: 'Major disorders include arthritis and osteoporosis among musculoskeletal diseases.'
            },
            {
              title: 'Neural Control and Coordination',
              description: 'Neuron is basic unit of nervous system. CNS includes brain and spinal cord; PNS includes peripheral nerves. Nerve impulse is electrical signaling through neurons.'
            },
            {
              title: 'Brain Parts',
              description: 'Important brain regions include cerebrum, cerebellum, and medulla.'
            },
            {
              title: 'Chemical Coordination and Endocrine System',
              description: 'Key endocrine glands include pituitary, thyroid, adrenal, and pancreas. Hormones act as chemical messengers: insulin lowers blood glucose, thyroxine regulates metabolism, and adrenaline mediates emergency responses.'
            },
            {
              title: 'Endocrine Disorders',
              description: 'High-yield disorders include diabetes, goiter, and dwarfism.'
            }
          ],
          key_patterns: [
            'Diagram-based questions on heart, nephron, and brain.',
            'Concept questions on double circulation and urine formation.',
            'Hormone questions (insulin, thyroxine, adrenaline) are very common.',
            'Match-the-following on gland and hormone functions.',
            'Blood-related questions: RBC role, blood groups, clotting basics.',
            'Assertion-reason questions such as hemoglobin carries oxygen.',
            'Direct NCERT-line questions on disorders and functions.'
          ],
          formulas_relations: [
            {
              formula: 'Cardiac output = Stroke volume x Heart rate',
              meaning: 'Core relation in circulation numericals/concepts.'
            },
            {
              formula: 'Urine formation: Filtration -> Reabsorption -> Secretion',
              meaning: 'Sequence-based high-yield nephron concept.'
            }
          ],
          application_insights: [
            'Unit 5 has very very high weightage in NEET.',
            'Most frequently asked zones are heart, nephron, and endocrine hormones.',
            'Diagram and flow-sequence concepts are heavily tested.',
            'Disorder-based direct NCERT questions are common and scoring.'
          ],
          common_mistakes: [
            {
              mistake: 'Confusing hormone functions',
              why: 'Insulin, thyroxine, and adrenaline roles are frequently interchanged.'
            },
            {
              mistake: 'Forgetting nephron urine-formation steps',
              why: 'Filtration, reabsorption, and secretion order is repeatedly asked.'
            },
            {
              mistake: 'Mixing nervous and endocrine control',
              why: 'Both coordinate body functions but operate through different signaling modes.'
            },
            {
              mistake: 'Ignoring diagrams',
              why: 'Heart, nephron, and brain figures are common in PYQ patterns.'
            },
            {
              mistake: 'Skipping disorder table revision',
              why: 'Diabetes, goiter, and dwarfism are frequent direct asks.'
            }
          ],
          quick_revision: [
            'Respiratory route: nose to trachea to lungs.',
            'Inspiration: diaphragm contracts; expiration: diaphragm relaxes.',
            'O2 enters blood and CO2 exits during gas exchange.',
            'O2 is mainly transported by hemoglobin; CO2 mostly as bicarbonate ions.',
            'Important respiratory measures: tidal volume and vital capacity.',
            'Blood: RBC for oxygen, WBC for immunity, platelets for clotting.',
            'Blood groups: ABO and Rh systems.',
            'Heart has four chambers and supports double circulation.',
            'Cardiac cycle includes systole and diastole; ECG has P, QRS, T waves.',
            'Excretory path: kidneys to ureters to bladder; nephron is functional unit.',
            'Urine formation steps: filtration, reabsorption, secretion.',
            'ADH regulates water balance in kidney.',
            'Major excretory disorder topics include kidney failure and dialysis.',
            'Movement types include ciliary and muscular; muscle types are skeletal, smooth, cardiac.',
            'Muscle contraction uses actin and myosin filaments.',
            'Nervous system: CNS (brain, spinal cord) and PNS (nerves).',
            'Endocrine glands: pituitary, thyroid, adrenal, pancreas.',
            'Insulin lowers blood glucose, thyroxine controls metabolism, adrenaline mediates emergency response.',
            'High-yield disorders: diabetes, goiter, dwarfism.'
          ],
          quiz: [
            {
              question: 'Main respiratory pigment carrying oxygen in blood is:',
              options: ['Myoglobin', 'Hemoglobin', 'Bilirubin', 'Collagen'],
              correctAnswer: 1,
              explanation: 'Hemoglobin in RBCs is the main oxygen carrier.'
            },
            {
              question: 'Heart in humans has:',
              options: ['2 chambers', '3 chambers', '4 chambers', '5 chambers'],
              correctAnswer: 2,
              explanation: 'Human heart is four-chambered.'
            },
            {
              question: 'Functional unit of kidney is:',
              options: ['Neuron', 'Nephron', 'Alveolus', 'Sarcomere'],
              correctAnswer: 1,
              explanation: 'Nephron is the structural and functional unit of kidney.'
            },
            {
              question: 'Correct order in urine formation is:',
              options: ['Secretion -> filtration -> reabsorption', 'Filtration -> reabsorption -> secretion', 'Reabsorption -> filtration -> secretion', 'Filtration -> secretion -> reabsorption'],
              correctAnswer: 1,
              explanation: 'Urine formation proceeds through filtration, reabsorption, and secretion.'
            },
            {
              question: 'ADH mainly regulates:',
              options: ['Liver glycogen', 'Kidney water reabsorption', 'Bone matrix', 'RBC production'],
              correctAnswer: 1,
              explanation: 'ADH controls water reabsorption in kidneys.'
            },
            {
              question: 'Insulin primarily:',
              options: ['Raises blood glucose', 'Lowers blood glucose', 'Increases blood pressure', 'Promotes thyroid hormone release'],
              correctAnswer: 1,
              explanation: 'Insulin lowers blood glucose concentration.'
            },
            {
              question: 'ECG QRS complex is mainly associated with:',
              options: ['Atrial depolarization', 'Ventricular depolarization', 'Ventricular repolarization', 'Only valve closure'],
              correctAnswer: 1,
              explanation: 'QRS complex represents ventricular depolarization.'
            },
            {
              question: 'Cardiac output depends on:',
              options: ['Blood pH only', 'Stroke volume and heart rate', 'Hemoglobin only', 'Lung capacity only'],
              correctAnswer: 1,
              explanation: 'Cardiac output is product of stroke volume and heart rate.'
            },
            {
              question: 'Thyroxine is mainly related to regulation of:',
              options: ['Blood clotting', 'Body metabolism', 'Urine volume only', 'Neuron myelination only'],
              correctAnswer: 1,
              explanation: 'Thyroxine has major role in metabolic regulation.'
            }
          ]
        },
        {
          id: 'reproduction',
          title: 'Unit 6: Reproduction',
          concept_explanations: [
            {
              title: 'Reproduction in Organisms: Core Idea',
              description: 'Reproduction is the biological process by which organisms produce offspring similar to themselves, ensuring continuity of species. Lifespan is the period from birth to natural death. Organisms pass through juvenile, reproductive, and senescent phases.'
            },
            {
              title: 'Asexual Reproduction: Types and Examples',
              description: 'Asexual reproduction involves a single parent and generally produces clones. Key types: binary fission (Amoeba), multiple fission (Plasmodium), budding (Hydra, Yeast), fragmentation, and vegetative propagation (potato, Bryophyllum).' 
            },
            {
              title: 'Sexual Reproduction: Event Sequence',
              description: 'Sexual reproduction has three sequential events: pre-fertilization (gametogenesis and gamete transfer), fertilization/syngamy (fusion of gametes to form zygote), and post-fertilization (embryogenesis and organismal development).' 
            },
            {
              title: 'Gametes and Fertilization Types',
              description: 'Gametes may be isogametes (morphologically similar) or heterogametes (male and female gametes distinct, as in sperm and ovum). Fertilization may be external (outside body, as in fish and amphibians) or internal (inside body, as in reptiles, birds, mammals).' 
            },
            {
              title: 'Reproduction in Flowering Plants',
              description: 'Male reproductive whorl is androecium (stamen = anther + filament) and female reproductive whorl is gynoecium (pistil = stigma + style + ovary). Microsporogenesis produces pollen grains; megasporogenesis produces functional megaspore leading to embryo sac formation.'
            },
            {
              title: 'Embryo Sac and Pollination',
              description: 'Typical angiosperm embryo sac is 7-celled and 8-nucleate. Pollination is transfer of pollen from anther to stigma and can be autogamy, geitonogamy, or xenogamy. Outbreeding devices prevent self-pollination and encourage cross-pollination.'
            },
            {
              title: 'Double Fertilization (Most Important)',
              description: 'Unique to angiosperms: one male gamete fuses with egg (syngamy) to form diploid zygote, while the second male gamete fuses with two polar nuclei (triple fusion) to form primary endosperm nucleus, leading to endosperm development.'
            },
            {
              title: 'Post-Fertilization Changes',
              description: 'Zygote develops into embryo through pro-embryo, globular, and heart-shaped stages. Ovule transforms into seed and ovary into fruit. Seeds may be albuminous (endosperm retained) or non-albuminous. Special terms: parthenogenesis, parthenocarpy, and apomixis.'
            }
          ],
          key_patterns: [
            'Definition-based one-liners: reproduction, lifespan, syngamy, pollination.',
            'Direct match-the-following on asexual mode and organism examples.',
            'High-yield distinctions: autogamy vs geitonogamy vs xenogamy.',
            'Diagram-based flower/embryo sac labeling and identification.',
            'Assertion-reason from double fertilization, outbreeding devices, and endosperm formation.',
            'Sequence questions: pre-fertilization to post-fertilization event order.',
            'Conversion questions: ovule to seed and ovary to fruit.'
          ],
          formulas_relations: [
            {
              formula: 'Asexual reproduction -> single parent -> clones (genetically identical offspring)',
              meaning: 'Core relation used in conceptual and definition-based MCQs.'
            },
            {
              formula: 'Sexual reproduction events: pre-fertilization -> fertilization (syngamy) -> post-fertilization',
              meaning: 'Most important sequence in event-order questions.'
            },
            {
              formula: 'Pollination types: autogamy (same flower), geitonogamy (different flowers of same plant), xenogamy (different plants)',
              meaning: 'Most frequently confused classification in MCQs.'
            },
            {
              formula: 'Double fertilization = syngamy (sperm + egg) + triple fusion (sperm + polar nuclei)',
              meaning: 'Signature angiosperm event repeatedly asked in NEET.'
            },
            {
              formula: 'Post-fertilization conversion: ovule -> seed; ovary -> fruit',
              meaning: 'Classic direct question area and common mistake zone.'
            }
          ],
          application_insights: [
            'Unit 6 is one of the most NCERT-line dependent biology units for NEET.',
            'PYQ trend strongly favors double fertilization, pollination categories, and embryo sac facts.',
            'Most scoring strategy: memorize exact examples with each asexual method.',
            'Diagram literacy for flower and embryo sac increases speed in elimination-based MCQs.',
            'Revision should prioritize conceptual confusion pairs: autogamy/geitonogamy, parthenogenesis/parthenocarpy/apomixis.'
          ],
          common_mistakes: [
            {
              mistake: 'Confusing autogamy with geitonogamy',
              why: 'Both involve same plant context but differ in whether pollen transfer occurs within the same flower or between flowers of the same plant.'
            },
            {
              mistake: 'Forgetting both steps of double fertilization',
              why: 'Students remember zygote formation but miss triple fusion and endosperm formation.'
            },
            {
              mistake: 'Mixing examples of different asexual methods',
              why: 'Binary fission, budding, and vegetative propagation are often interchanged under exam pressure.'
            },
            {
              mistake: 'Ignoring embryo sac configuration',
              why: 'The 7-celled, 8-nucleate detail is a frequent direct ask.'
            },
            {
              mistake: 'Misreading post-fertilization conversions',
              why: 'Ovule to seed and ovary to fruit conversions are simple but commonly confused.'
            },
            {
              mistake: 'Using parthenocarpy and apomixis interchangeably',
              why: 'Parthenocarpy is seedless fruit development, while apomixis is seed formation without fertilization.'
            }
          ],
          quick_revision: [
            'Reproduction: process producing offspring similar to parent; continuity of species depends on it.',
            'Lifespan: interval between birth and natural death; no multicellular organism is immortal.',
            'Asexual reproduction: one parent, no gamete fusion, progeny mostly clones.',
            'Binary fission: Amoeba; multiple fission: Plasmodium; budding: Hydra and yeast.',
            'Vegetative propagation examples: potato, Bryophyllum.',
            'Sexual reproduction: fusion of male and female gametes, creates variation.',
            'Pre-fertilization includes gametogenesis and gamete transfer.',
            'Fertilization (syngamy) forms zygote.',
            'Post-fertilization includes embryo and seed/fruit development.',
            'Isogametes are similar; heterogametes are dissimilar (sperm and ovum).',
            'External fertilization: fish/frog; internal fertilization: humans/reptiles.',
            'Flower male part: androecium (stamen = anther + filament).',
            'Flower female part: gynoecium (pistil = stigma + style + ovary).',
            'Embryo sac is 7-celled and 8-nucleate.',
            'Pollination = transfer of pollen from anther to stigma.',
            'Autogamy: same flower; geitonogamy: different flowers same plant; xenogamy: different plants.',
            'Outbreeding devices reduce self-pollination.',
            'Double fertilization = syngamy + triple fusion (unique to angiosperms).',
            'One male gamete + egg -> zygote; second male gamete + polar nuclei -> endosperm.',
            'Embryo stages: pro-embryo -> globular -> heart-shaped.',
            'Ovule -> seed and ovary -> fruit.',
            'Albuminous seed retains endosperm; non-albuminous seed lacks residual endosperm.',
            'True fruit forms from ovary; false fruit includes thalamus.',
            'Parthenogenesis: development without fertilization.',
            'Parthenocarpy: seedless fruit formation without fertilization.',
            'Apomixis: seed formation without fertilization.'
          ],
          quiz: [
            {
              question: 'Asexual reproduction generally results in:',
              options: ['High genetic variation', 'Clones genetically similar to parent', 'Formation of gametes only', 'Fertilization-dependent offspring'],
              correctAnswer: 1,
              explanation: 'Asexual reproduction involves one parent and produces genetically identical or near-identical offspring.'
            },
            {
              question: 'Binary fission is correctly matched with:',
              options: ['Hydra', 'Yeast', 'Amoeba', 'Plasmodium'],
              correctAnswer: 2,
              explanation: 'Amoeba reproduces by binary fission.'
            },
            {
              question: 'Multiple fission is characteristically seen in:',
              options: ['Plasmodium', 'Hydra', 'Potato', 'Mango'],
              correctAnswer: 0,
              explanation: 'Plasmodium reproduces by multiple fission in suitable stages.'
            },
            {
              question: 'Correct order of events in sexual reproduction is:',
              options: ['Fertilization -> gamete transfer -> embryo formation', 'Pre-fertilization -> fertilization -> post-fertilization', 'Embryo formation -> fertilization -> gamete transfer', 'Post-fertilization -> pre-fertilization -> fertilization'],
              correctAnswer: 1,
              explanation: 'The sequence is pre-fertilization, fertilization, then post-fertilization development.'
            },
            {
              question: 'Embryo sac in angiosperms is typically:',
              options: ['8-celled and 7-nucleate', '7-celled and 8-nucleate', '4-celled and 8-nucleate', '7-celled and 7-nucleate'],
              correctAnswer: 1,
              explanation: 'The common Polygonum-type embryo sac is 7-celled and 8-nucleate.'
            },
            {
              question: 'Which statement is correct for autogamy?',
              options: ['Pollen transfer between different plants', 'Pollen transfer between different flowers of same plant', 'Pollen transfer within the same flower', 'Pollination by water only'],
              correctAnswer: 2,
              explanation: 'Autogamy occurs within the same flower.'
            },
            {
              question: 'Transfer of pollen from one flower to another flower on the same plant is:',
              options: ['Autogamy', 'Xenogamy', 'Geitonogamy', 'Apomixis'],
              correctAnswer: 2,
              explanation: 'Geitonogamy occurs between different flowers of the same plant.'
            },
            {
              question: 'Transfer of pollen to stigma of a different plant is:',
              options: ['Geitonogamy', 'Xenogamy', 'Autogamy', 'Parthenogenesis'],
              correctAnswer: 1,
              explanation: 'Xenogamy involves two genetically different plants of the same species.'
            },
            {
              question: 'Outbreeding devices in flowering plants mainly help in:',
              options: ['Promoting self-pollination', 'Preventing inbreeding and promoting cross-pollination', 'Stopping pollen formation', 'Converting ovule into fruit'],
              correctAnswer: 1,
              explanation: 'Outbreeding devices reduce self-pollination and increase genetic variability.'
            },
            {
              question: 'Double fertilization in flowering plants includes:',
              options: ['Only syngamy', 'Syngamy and triple fusion', 'Only triple fusion', 'Fertilization without endosperm formation'],
              correctAnswer: 1,
              explanation: 'One male gamete fuses with egg (syngamy) and the other with polar nuclei (triple fusion).' 
            },
            {
              question: 'Triple fusion leads to formation of:',
              options: ['Zygote', 'Embryo', 'Primary endosperm nucleus', 'Seed coat'],
              correctAnswer: 2,
              explanation: 'Fusion of male gamete with two polar nuclei forms primary endosperm nucleus.'
            },
            {
              question: 'In post-fertilization changes of angiosperms, ovule develops into:',
              options: ['Fruit', 'Endosperm', 'Seed', 'Pollen grain'],
              correctAnswer: 2,
              explanation: 'After fertilization, ovule becomes seed.'
            },
            {
              question: 'Ovary develops into:',
              options: ['Seed', 'Fruit', 'Endosperm', 'Embryo sac'],
              correctAnswer: 1,
              explanation: 'After fertilization, ovary develops into fruit.'
            },
            {
              question: 'Seedless fruit formation without fertilization is called:',
              options: ['Apomixis', 'Parthenocarpy', 'Geitonogamy', 'Polyembryony'],
              correctAnswer: 1,
              explanation: 'Parthenocarpy refers to development of seedless fruits without fertilization.'
            },
            {
              question: 'Apomixis refers to:',
              options: ['Seed formation without fertilization', 'Fusion of two male gametes', 'Pollen germination on stigma', 'Fruit formation from thalamus only'],
              correctAnswer: 1,
              explanation: 'Apomixis is asexual seed formation without meiosis/fertilization sequence.'
            },
            {
              question: 'Parthenogenesis means:',
              options: ['Fruit formation from ovary only', 'Embryo development without fertilization', 'Double fertilization in ovule', 'Formation of endosperm without zygote'],
              correctAnswer: 1,
              explanation: 'Parthenogenesis is development of an embryo from an unfertilized egg.'
            },
            {
              question: 'Which statement correctly differentiates parthenocarpy and apomixis?',
              options: ['Both produce seedless fruits only', 'Parthenocarpy forms seedless fruits; apomixis forms seeds without fertilization', 'Apomixis is pollination by insects; parthenocarpy is pollination by wind', 'Both require double fertilization'],
              correctAnswer: 1,
              explanation: 'Parthenocarpy is seedless fruit development, whereas apomixis is seed formation without fertilization.'
            },
            {
              question: 'Which pair is correctly matched?',
              options: ['Hydra - Binary fission', 'Amoeba - Budding', 'Yeast - Budding', 'Plasmodium - Fragmentation'],
              correctAnswer: 2,
              explanation: 'Yeast reproduces asexually by budding.'
            },
            {
              question: 'In angiosperms, endosperm develops from:',
              options: ['Zygote', 'Primary endosperm nucleus formed after triple fusion', 'Nucellus without fertilization', 'Integuments of ovule'],
              correctAnswer: 1,
              explanation: 'Triple fusion gives primary endosperm nucleus, which develops into endosperm.'
            },
            {
              question: 'Albuminous seeds are those in which:',
              options: ['Embryo is absent', 'Endosperm is retained in mature seed', 'Fruit wall is fleshy', 'Seed coat is absent'],
              correctAnswer: 1,
              explanation: 'Albuminous seeds retain endosperm at maturity.'
            },
            {
              question: 'A fruit in which thalamus also contributes significantly is called:',
              options: ['True fruit', 'False fruit', 'Parthenocarpic fruit', 'Dry dehiscent fruit'],
              correctAnswer: 1,
              explanation: 'False fruits include accessory floral parts such as thalamus.'
            },
            {
              question: 'Which is the correct sequence of embryo development in dicot embryo?',
              options: ['Heart-shaped -> globular -> pro-embryo', 'Pro-embryo -> globular -> heart-shaped', 'Globular -> pro-embryo -> heart-shaped', 'Pro-embryo -> heart-shaped -> globular'],
              correctAnswer: 1,
              explanation: 'The usual sequence is pro-embryo, globular stage, then heart-shaped stage.'
            },
            {
              question: 'Which statement about geitonogamy is correct?',
              options: ['It is genetically equivalent to cross-pollination only', 'It occurs between flowers of different plants', 'It occurs between different flowers of the same plant', 'It does not involve pollen transfer'],
              correctAnswer: 2,
              explanation: 'Geitonogamy is pollen transfer between different flowers of the same plant.'
            }
          ]
        },
        {
          id: 'genetics-evolution',
          title: 'Unit 7: Genetics and Evolution',
          concept_explanations: [
            {
              title: 'Heredity and Variation: Mendelian Genetics',
              description: 'Mendel is the father of genetics. Inheritance occurs through genes present as alleles. Core laws are dominance, segregation, and independent assortment, which explain transmission of traits from parents to offspring.'
            },
            {
              title: 'Laws of Inheritance and Deviations',
              description: 'Law of dominance states one allele can mask another in heterozygous condition. Law of segregation states allele pairs separate during gamete formation. Law of independent assortment applies to unlinked genes. Important deviations include incomplete dominance (pink flower), codominance (AB blood group), multiple alleles (ABO), and pleiotropy.'
            },
            {
              title: 'Chromosomal Basis and Human Genetics',
              description: 'Chromosomal theory states genes are located on chromosomes and their behavior supports Mendelian inheritance. Linked genes tend to be inherited together, while crossing over creates recombination. Human sex determination is XX/XY; honeybee shows haplodiploidy. Major sex-linked disorders include hemophilia and color blindness. Chromosomal disorders include Down, Turner, and Klinefelter syndromes.'
            },
            {
              title: 'Molecular Basis of Inheritance',
              description: 'DNA is the major genetic material, while RNA serves as genetic material in some viruses. DNA has double helix structure with complementary pairing (A=T, G=C). Replication is semi-conservative. Central dogma is DNA to RNA to protein, carried out via transcription and translation. Genetic code is triplet, universal, and degenerate.'
            },
            {
              title: 'Gene Regulation and Human Genome Tools',
              description: 'Lac operon is an inducible gene regulation system in bacteria and is highly important for NEET. Human Genome Project focused on mapping and analyzing human genes. DNA fingerprinting is used in forensic science and paternity analysis.'
            },
            {
              title: 'Evolution: Principles and Mechanisms',
              description: 'Origin of life is explained by chemical evolution. Evidence for evolution includes fossils, comparative anatomy, embryology, and molecular data. Darwin proposed natural selection and survival of the fittest. Modern evolutionary theory integrates mutation, recombination, natural selection, gene flow, and genetic drift.'
            },
            {
              title: 'Hardy-Weinberg and Adaptive Evolution',
              description: 'Hardy-Weinberg principle states allele frequencies remain constant in a non-evolving population. Disturbing factors include mutation, migration, genetic drift, and natural selection. Adaptive radiation explains divergence of multiple species from a common ancestor. Human evolution traces from primate ancestors to modern humans.'
            }
          ],
          key_patterns: [
            'Punnett square-based genotype and phenotype ratio questions.',
            'ABO blood group inheritance and codominance numericals.',
            'Distinction questions on dominance vs codominance vs incomplete dominance.',
            'Direct asks on sex-linked and chromosomal disorders.',
            'Sequence questions: replication, transcription, and translation.',
            'Lac operon logic and inducible regulation assertion-reason items.',
            'Hardy-Weinberg equation and equilibrium-shift conceptual MCQs.',
            'Evidence of evolution and Darwinian selection match-the-following.'
          ],
          formulas_relations: [
            {
              formula: 'Mendel laws: dominance + segregation + independent assortment',
              meaning: 'Core inheritance framework for monohybrid and dihybrid questions.'
            },
            {
              formula: 'ABO system: IA and IB codominant; i recessive',
              meaning: 'Used in blood group genotype-probability problems.'
            },
            {
              formula: 'Central dogma: DNA -> RNA -> Protein',
              meaning: 'Flow of genetic information in cells.'
            },
            {
              formula: 'Hardy-Weinberg: p^2 + 2pq + q^2 = 1',
              meaning: 'Genotype frequency relation in stable population.'
            },
            {
              formula: 'Allele frequency relation: p + q = 1',
              meaning: 'Basic allele proportion in a two-allele system.'
            }
          ],
          application_insights: [
            'Unit 7 is one of the highest-weightage and most question-dense units in NEET Biology.',
            'Repeated PYQ clusters are blood groups, sex-linked inheritance, DNA replication, lac operon, and Hardy-Weinberg.',
            'Solving inheritance questions requires clean genotype notation and stepwise Punnett approach.',
            'Molecular biology asks are highly NCERT-line anchored, especially genetic code properties and operon logic.'
          ],
          common_mistakes: [
            {
              mistake: 'Confusing codominance and incomplete dominance',
              why: 'Both involve non-Mendelian patterns but outcomes differ.'
            },
            {
              mistake: 'Mixing transcription and translation steps',
              why: 'Central dogma sequence is often asked directly.'
            },
            {
              mistake: 'Using wrong ABO notation',
              why: 'Students confuse IA, IB, and i combinations, causing errors in blood-group probability questions.'
            },
            {
              mistake: 'Ignoring lac operon control logic',
              why: 'Questions often test when structural genes are switched on/off in presence or absence of inducer.'
            },
            {
              mistake: 'Forgetting assumptions behind Hardy-Weinberg equilibrium',
              why: 'Equation is remembered, but no-selection/no-mutation/no-migration conditions are missed.'
            },
            {
              mistake: 'Mixing sex-linked and autosomal inheritance patterns',
              why: 'Pedigree interpretation errors occur when X-linked recessive traits are treated as autosomal.'
            }
          ],
          quick_revision: [
            'Mendel is the father of genetics.',
            'Genes exist as alleles and govern heredity and variation.',
            'Law of dominance: dominant allele expresses in heterozygote.',
            'Law of segregation: allele pairs separate during gamete formation.',
            'Law of independent assortment: unlinked genes assort independently.',
            'Incomplete dominance example: red x white flower gives pink in heterozygote.',
            'Codominance example: blood group AB expresses both IA and IB.',
            'ABO blood groups show multiple allelism and codominance.',
            'Pleiotropy: one gene affects multiple phenotypic traits.',
            'Genes are carried on chromosomes (chromosomal theory).',
            'Linkage keeps nearby genes inherited together; crossing over causes recombination.',
            'Human sex determination: XX female, XY male.',
            'Honeybee follows haplodiploid sex determination.',
            'Sex-linked disorders: hemophilia, color blindness.',
            'Chromosomal disorders: Down syndrome, Turner syndrome, Klinefelter syndrome.',
            'DNA is genetic material in most organisms; RNA in some viruses.',
            'DNA has double helix with A=T and G=C pairing.',
            'DNA replication is semi-conservative.',
            'Central dogma: DNA -> RNA -> Protein.',
            'Transcription: DNA template to RNA; Translation: mRNA to polypeptide.',
            'Genetic code is triplet, universal, and degenerate.',
            'Lac operon is an inducible operon in prokaryotes.',
            'Human Genome Project mapped human genes.',
            'DNA fingerprinting applications: forensics and paternity testing.',
            'Evidence of evolution: fossils, comparative anatomy, embryology, molecular data.',
            'Darwin: natural selection and survival of the fittest.',
            'Evolutionary forces: mutation, recombination, gene flow, drift, selection.',
            'Hardy-Weinberg equilibrium holds when evolutionary forces are absent.',
            'Hardy-Weinberg equations: p + q = 1 and p^2 + 2pq + q^2 = 1.',
            'Adaptive radiation: divergence from common ancestor into different species.'
          ],
          quiz: [
            {
              question: 'Law of segregation states that:',
              options: ['Dominant allele always mutates', 'Alleles separate during gamete formation', 'Genes are inherited in linked groups only', 'Only one parent contributes allele'],
              correctAnswer: 1,
              explanation: 'The two alleles of a gene pair separate during gamete formation.'
            },
            {
              question: 'AB blood group in humans is an example of:',
              options: ['Incomplete dominance', 'Codominance', 'Pleiotropy', 'Linkage'],
              correctAnswer: 1,
              explanation: 'Both IA and IB alleles express together in AB blood group.'
            },
            {
              question: 'Which one is a sex-linked recessive disorder?',
              options: ['Down syndrome', 'Sickle-cell anemia', 'Color blindness', 'Turner syndrome'],
              correctAnswer: 2,
              explanation: 'Color blindness is classically inherited as an X-linked recessive trait.'
            },
            {
              question: 'Klinefelter syndrome is associated with chromosomal constitution:',
              options: ['XO', 'XXY', 'XYY', 'XXX'],
              correctAnswer: 1,
              explanation: 'Klinefelter syndrome commonly has 47, XXY karyotype.'
            },
            {
              question: 'DNA replication in organisms is:',
              options: ['Conservative', 'Semi-conservative', 'Dispersive only', 'Random'],
              correctAnswer: 1,
              explanation: 'Each daughter DNA contains one parental and one newly synthesized strand.'
            },
            {
              question: 'Correct central dogma flow is:',
              options: ['RNA -> DNA -> Protein', 'DNA -> RNA -> Protein', 'Protein -> RNA -> DNA', 'DNA -> Protein -> RNA'],
              correctAnswer: 1,
              explanation: 'Genetic information generally flows from DNA to RNA to protein.'
            },
            {
              question: 'Transcription is:',
              options: ['RNA to DNA synthesis', 'DNA to RNA synthesis', 'RNA to protein synthesis', 'Protein to RNA synthesis'],
              correctAnswer: 1,
              explanation: 'Transcription uses DNA template to synthesize RNA.'
            },
            {
              question: 'Translation is:',
              options: ['DNA replication', 'mRNA to polypeptide synthesis', 'DNA to mRNA synthesis', 'rRNA to tRNA conversion'],
              correctAnswer: 1,
              explanation: 'Ribosomes decode mRNA codons to synthesize proteins.'
            },
            {
              question: 'Which statement about genetic code is correct?',
              options: ['It is always overlapping', 'It is triplet and nearly universal', 'It is species-specific only', 'Each codon codes for multiple amino acids'],
              correctAnswer: 1,
              explanation: 'Genetic code is triplet, degenerate, and largely universal.'
            },
            {
              question: 'Lac operon is best described as:',
              options: ['A repressible operon for amino acid synthesis', 'An inducible operon for lactose metabolism', 'A eukaryotic chromosome region', 'A DNA repair pathway'],
              correctAnswer: 1,
              explanation: 'Lac operon turns on in presence of inducer and helps metabolize lactose.'
            },
            {
              question: 'Hardy-Weinberg equilibrium is represented by:',
              options: ['p^2 + 2pq + q^2 = 1', 'a^2 + b^2 = c^2', 'F = ma', 'PV = nRT'],
              correctAnswer: 0,
              explanation: 'It gives expected genotype frequencies in a non-evolving population.'
            },
            {
              question: 'If frequency of recessive allele q is 0.2, then p equals:',
              options: ['0.2', '0.4', '0.8', '1.2'],
              correctAnswer: 2,
              explanation: 'Using p + q = 1, p = 1 - 0.2 = 0.8.'
            },
            {
              question: 'Which is NOT an evidence for evolution?',
              options: ['Fossils', 'Comparative anatomy', 'Embryological similarities', 'Independent assortment law only'],
              correctAnswer: 3,
              explanation: 'Fossils, anatomy, embryology, and molecular data support evolution; independent assortment is a genetic inheritance law.'
            },
            {
              question: 'Natural selection was primarily proposed by:',
              options: ['Mendel', 'Darwin', 'Watson', 'Hardy'],
              correctAnswer: 1,
              explanation: 'Darwin proposed natural selection as a major mechanism of evolution.'
            },
            {
              question: 'Adaptive radiation refers to:',
              options: ['Convergent evolution from unrelated ancestors', 'Divergence of many species from a common ancestor', 'Only mutation accumulation without selection', 'Sudden chromosome duplication'],
              correctAnswer: 1,
              explanation: 'Adaptive radiation is diversification from a common ancestral stock into different ecological niches.'
            }
          ]
        },
        {
          id: 'biology-human-welfare',
          title: 'Unit 8: Biology and Human Welfare',
          concept_explanations: [
            {
              title: 'Human Health and Disease: Core Concepts',
              description: 'Health means physical, mental, and social well-being. Diseases are broadly infectious (communicable) and non-infectious (non-communicable). Infectious diseases spread via pathogens such as bacteria, viruses, fungi, and parasites.'
            },
            {
              title: 'Major Infectious Diseases and Causative Agents',
              description: 'High-yield diseases include malaria (Plasmodium, vector female Anopheles), filariasis (Wuchereria), ascariasis (Ascaris), typhoid (Salmonella typhi), pneumonia, amoebiasis (Entamoeba histolytica), common cold (viral), and dengue/chikungunya (Aedes mosquito vector).'
            },
            {
              title: 'Immunity, Vaccination, and Immune Disorders',
              description: 'Innate immunity provides non-specific first-line defense, while acquired immunity is specific and memory-based. Antibodies are produced by B-lymphocytes. Vaccination works through immune memory. AIDS is caused by HIV and targets immune function.'
            },
            {
              title: 'Cancer, Substance Abuse, and Lifestyle Risks',
              description: 'Cancer involves uncontrolled cell division and may be triggered by carcinogens or radiation. Drug and alcohol abuse causes harmful physiological and neurological effects and is an important health-risk topic in NEET.'
            },
            {
              title: 'Microbes in Household and Industry',
              description: 'Lactobacillus converts milk into curd; yeast is used in bread making. Industrial microbes are used for production of alcohol and organic acids at large scale.'
            },
            {
              title: 'Microbes in Sewage, Energy, and Agriculture',
              description: 'Microbes degrade organic waste during sewage treatment. Methanogens are used in biogas production. Biofertilizers such as Rhizobium improve soil fertility, and biocontrol agents provide eco-friendly pest management.'
            }
          ],
          key_patterns: [
            'Match-the-following on disease, pathogen, and vector.',
            'Vector-based direct questions (Anopheles vs Aedes).',
            'Immunity classification and antibody-based concept asks.',
            'Vaccination and memory-cell assertion-reason questions.',
            'Application-based MCQs on microbes in household, industry, and sewage treatment.',
            'Biogas, biofertilizer, and biocontrol use-case questions.'
          ],
          formulas_relations: [
            {
              formula: 'Pathogen -> Disease -> Transmission route',
              meaning: 'Common memory pattern in NEET biology welfare questions.'
            },
            {
              formula: 'Innate immunity = non-specific defense; Acquired immunity = specific + memory',
              meaning: 'Most tested conceptual distinction in immunity section.'
            },
            {
              formula: 'Vaccination -> memory cell formation -> faster secondary response',
              meaning: 'Core logic behind preventive immunization asks.'
            },
            {
              formula: 'Biogas production <- methanogenic microbes',
              meaning: 'Frequently repeated direct concept in microbes chapter.'
            }
          ],
          application_insights: [
            'Unit 8 is memory-dense but highly scoring with proper disease-pathogen-vector mapping.',
            'Most repeated PYQ zones are malaria, AIDS, vaccination, and industrial/household microbes.',
            'Question styles are typically direct NCERT lines, match-the-following, and assertion-reason.',
            'Microbe applications are easy marks if examples are revised with exact organism names.'
          ],
          common_mistakes: [
            {
              mistake: 'Confusing disease names and pathogens',
              why: 'Similar symptom-based conditions create confusion.'
            },
            {
              mistake: 'Mixing up vector and pathogen',
              why: 'Students often treat mosquito species as causative organism instead of carrier.'
            },
            {
              mistake: 'Confusing innate and acquired immunity',
              why: 'Innate is non-specific while acquired is antigen-specific and memory-based.'
            },
            {
              mistake: 'Ignoring microbial application examples',
              why: 'Direct questions ask specific organism-use pairs like Lactobacillus-curd and methanogens-biogas.'
            },
            {
              mistake: 'Assuming all diseases are communicable',
              why: 'Non-infectious disorders such as cancer are not transmitted person-to-person.'
            }
          ],
          quick_revision: [
            'Health includes physical, mental, and social well-being.',
            'Infectious diseases are communicable; non-infectious diseases are not transmissible.',
            'Pathogens include bacteria, viruses, fungi, and parasites.',
            'Malaria: pathogen Plasmodium; vector female Anopheles mosquito.',
            'Filariasis: pathogen Wuchereria; mosquito-borne.',
            'Ascariasis: caused by Ascaris (roundworm).',
            'Typhoid: caused by Salmonella typhi.',
            'Amoebiasis: caused by Entamoeba histolytica.',
            'Dengue and chikungunya are transmitted by Aedes mosquito.',
            'Common cold is viral; pneumonia mainly affects lungs.',
            'Innate immunity is non-specific and immediate.',
            'Acquired immunity is specific and involves memory.',
            'B-lymphocytes produce antibodies.',
            'Vaccination develops memory response for future protection.',
            'Cancer is uncontrolled cell division; carcinogens and radiation are major causes.',
            'AIDS is caused by HIV and weakens immune system.',
            'Drug and alcohol abuse adversely affect body and nervous system.',
            'Lactobacillus is used in curd formation; yeast in bread making.',
            'Industrial microbes produce alcohol and organic acids.',
            'Microbes help in sewage treatment by degrading waste.',
            'Methanogens are used in biogas production.',
            'Rhizobium is a biofertilizer and enhances soil fertility.',
            'Biocontrol agents are eco-friendly alternatives for pest control.'
          ],
          quiz: [
            {
              question: 'Causative agent of malaria is:',
              options: ['Wuchereria', 'Entamoeba histolytica', 'Plasmodium', 'Salmonella typhi'],
              correctAnswer: 2,
              explanation: 'Malaria is caused by protozoan parasites of genus Plasmodium.'
            },
            {
              question: 'Vector responsible for transmission of malaria is:',
              options: ['Male Anopheles mosquito', 'Female Anopheles mosquito', 'Aedes mosquito', 'Housefly'],
              correctAnswer: 1,
              explanation: 'Female Anopheles mosquito transmits Plasmodium.'
            },
            {
              question: 'Typhoid is caused by:',
              options: ['Ascaris lumbricoides', 'Salmonella typhi', 'Plasmodium vivax', 'HIV'],
              correctAnswer: 1,
              explanation: 'Typhoid fever is caused by bacterium Salmonella typhi.'
            },
            {
              question: 'Disease caused by Entamoeba histolytica is:',
              options: ['Ascariasis', 'Filariasis', 'Amoebiasis', 'Typhoid'],
              correctAnswer: 2,
              explanation: 'Entamoeba histolytica causes amoebiasis.'
            },
            {
              question: 'Which mosquito transmits dengue and chikungunya?',
              options: ['Culex', 'Anopheles', 'Aedes', 'Mansonia'],
              correctAnswer: 2,
              explanation: 'Aedes mosquito is the known vector for both dengue and chikungunya.'
            },
            {
              question: 'Innate immunity is:',
              options: ['Acquired after infection only', 'Specific and memory-based', 'Non-specific first-line defense', 'Mediated only by B-cells'],
              correctAnswer: 2,
              explanation: 'Innate immunity provides immediate non-specific protection.'
            },
            {
              question: 'Antibodies are mainly produced by:',
              options: ['T-lymphocytes', 'B-lymphocytes', 'Neutrophils', 'Macrophages only'],
              correctAnswer: 1,
              explanation: 'B-cells differentiate into plasma cells that secrete antibodies.'
            },
            {
              question: 'Vaccination protects primarily by:',
              options: ['Destroying all pathogens instantly', 'Producing memory cells and secondary response', 'Increasing RBC count', 'Blocking all mutations'],
              correctAnswer: 1,
              explanation: 'Vaccines induce immunological memory for faster and stronger response.'
            },
            {
              question: 'AIDS is caused by:',
              options: ['HBV', 'HIV', 'H1N1', 'Mycobacterium tuberculosis'],
              correctAnswer: 1,
              explanation: 'HIV infection leads to acquired immunodeficiency syndrome (AIDS).'
            },
            {
              question: 'Uncontrolled cell division is characteristic of:',
              options: ['Asthma', 'Cancer', 'Typhoid', 'Filariasis'],
              correctAnswer: 1,
              explanation: 'Cancer is marked by uncontrolled proliferation of cells.'
            },
            {
              question: 'Curd formation is associated with:',
              options: ['Yeast', 'Lactobacillus', 'Rhizobium', 'Methanogens'],
              correctAnswer: 1,
              explanation: 'Lactobacillus converts milk into curd through lactic fermentation.'
            },
            {
              question: 'Bread making commonly uses:',
              options: ['Lactobacillus', 'Yeast', 'Aspergillus', 'Rhizobium'],
              correctAnswer: 1,
              explanation: 'Yeast ferments sugars and helps dough rise.'
            },
            {
              question: 'Biogas is mainly produced by:',
              options: ['Nitrifying bacteria', 'Methanogens', 'Lichens', 'Blue-green algae'],
              correctAnswer: 1,
              explanation: 'Methanogenic microbes produce methane-rich biogas.'
            },
            {
              question: 'Biofertilizer Rhizobium is important because it:',
              options: ['Causes root rot', 'Fixes atmospheric nitrogen in symbiosis', 'Produces lactic acid', 'Controls mosquitoes'],
              correctAnswer: 1,
              explanation: 'Rhizobium in legume root nodules improves soil nitrogen status.'
            },
            {
              question: 'Biocontrol agents are preferred because they are:',
              options: ['Highly toxic chemical pesticides', 'Eco-friendly pest management tools', 'Only laboratory contaminants', 'Used only in hospitals'],
              correctAnswer: 1,
              explanation: 'Biocontrol uses biological organisms/methods and reduces chemical load.'
            }
          ]
        },
        {
          id: 'biotechnology-applications',
          title: 'Unit 9: Biotechnology and Its Applications',
          concept_explanations: [
            {
              title: 'Principles of Biotechnology',
              description: 'Biotechnology uses living organisms, cells, or biomolecular systems to develop useful products. Two core techniques are genetic engineering and recombinant DNA (rDNA) technology.'
            },
            {
              title: 'Recombinant DNA Technology: Steps and Tools',
              description: 'Standard rDNA workflow includes isolation of DNA, cutting with restriction enzymes, insertion into vector (for example plasmid), transfer into host (commonly E. coli), and expression of the foreign gene. Major tools are restriction enzymes, vectors, and host organisms.'
            },
            {
              title: 'Applications in Human Health',
              description: 'Recombinant insulin (Humulin) is produced using engineered microbes. Gene therapy targets correction of defective genes. Recombinant vaccines are safer and effective. Molecular diagnosis includes PCR for DNA amplification and ELISA for antigen/antibody detection.'
            },
            {
              title: 'Applications in Agriculture and Animal Biotechnology',
              description: 'Genetically modified crops such as Bt cotton provide insect resistance and improved productivity. Transgenic animals carry foreign genes and are used for disease research and pharmaceutical production.'
            },
            {
              title: 'Biosafety, Biopiracy, and Ethics',
              description: 'Biopiracy is unauthorized use of biological resources and traditional knowledge. Patents provide legal protection for inventions. Ethical and environmental concerns are important in use of GM organisms.'
            }
          ],
          key_patterns: [
            'Step-order questions in recombinant DNA technology.',
            'Match-the-following on restriction enzyme, vector, and host roles.',
            'Application-based MCQs on recombinant insulin, PCR, and ELISA.',
            'Bt cotton and transgenic crop concept questions.',
            'Statement and assertion-reason items on PCR amplification.',
            'Biopiracy, patent, and biosafety ethics direct asks.'
          ],
          formulas_relations: [
            {
              formula: 'Biotechnology = Genetic manipulation + Controlled biological process',
              meaning: 'High-level conceptual relation often tested.'
            },
            {
              formula: 'rDNA flow: DNA isolation -> restriction digestion -> ligation into vector -> transfer into host -> gene expression',
              meaning: 'Most asked sequence-based biotechnology question.'
            },
            {
              formula: 'PCR = exponential amplification of target DNA',
              meaning: 'Core diagnostic principle repeatedly tested in NEET.'
            },
            {
              formula: 'ELISA = antigen-antibody interaction based detection',
              meaning: 'Used for diagnosis and immunological testing.'
            }
          ],
          application_insights: [
            'Unit 9 is compact but highly scoring due to repeated direct-concept PYQs.',
            'Most repeated asks are Bt cotton, PCR, recombinant insulin, and rDNA steps.',
            'Application-oriented questions are frequent in both health and agriculture contexts.',
            'One-line clarity on vector versus host and PCR versus ELISA prevents common errors.'
          ],
          common_mistakes: [
            {
              mistake: 'Confusing PCR and ELISA',
              why: 'PCR amplifies nucleic acid while ELISA detects antigen-antibody interaction.'
            },
            {
              mistake: 'Forgetting rDNA sequence of steps',
              why: 'Sequence-based MCQs require strict order of isolation, digestion, vector insertion, transfer, and expression.'
            },
            {
              mistake: 'Mixing up vector and host organism',
              why: 'Vector carries recombinant DNA while host cell expresses and replicates it.'
            },
            {
              mistake: 'Treating all GM applications as risk-only or benefit-only',
              why: 'NEET often balances utility (yield, resistance) with biosafety and ethics.'
            },
            {
              mistake: 'Confusing biopiracy with patent rights',
              why: 'Biopiracy is unauthorized exploitation; patents are legal protection mechanisms.'
            }
          ],
          quick_revision: [
            'Biotechnology uses living systems or cells to produce useful products.',
            'Core biotechnology tools: restriction enzymes, vectors, and host organisms.',
            'Common vector: plasmid; common host: E. coli.',
            'Restriction enzymes cut DNA at specific recognition sites.',
            'rDNA steps: DNA isolation, cutting, vector insertion, transfer to host, expression.',
            'Genetic engineering manipulates DNA directly.',
            'Recombinant insulin (Humulin) is produced using engineered microbes.',
            'Gene therapy aims to correct defective genes.',
            'Recombinant vaccines are safer and efficient.',
            'PCR amplifies specific DNA segments.',
            'ELISA detects antigen-antibody interaction.',
            'PCR and ELISA are both molecular diagnostics but based on different principles.',
            'Bt cotton carries Bt gene for insect resistance.',
            'GM crops can improve yield and reduce pesticide requirement.',
            'Transgenic animals are used for disease study and biopharmaceutical production.',
            'Biopiracy is unauthorized use of bioresources or indigenous knowledge.',
            'Patents legally protect inventions and innovations.',
            'Biosafety includes ecological and ethical evaluation of GM organisms.'
          ],
          quiz: [
            {
              question: 'Recombinant DNA technology primarily involves:',
              options: ['Only selective breeding', 'Manipulation and transfer of DNA using molecular tools', 'Only tissue staining', 'Only hybridization'],
              correctAnswer: 1,
              explanation: 'rDNA technology includes DNA manipulation, cloning, and expression in host systems.'
            },
            {
              question: 'Correct sequence in rDNA process is:',
              options: ['DNA insertion -> DNA cutting -> host transfer -> expression', 'DNA isolation -> restriction digestion -> ligation into vector -> transfer to host -> expression', 'Host transfer -> DNA isolation -> digestion -> expression', 'Vector preparation -> expression -> DNA isolation -> transfer'],
              correctAnswer: 1,
              explanation: 'The rDNA process follows isolation, cutting, ligation, host transfer, and expression.'
            },
            {
              question: 'Restriction enzymes are used to:',
              options: ['Synthesize proteins', 'Cut DNA at specific sequences', 'Join amino acids', 'Amplify RNA only'],
              correctAnswer: 1,
              explanation: 'Restriction endonucleases recognize specific sequences and cleave DNA.'
            },
            {
              question: 'A plasmid in biotechnology mainly acts as:',
              options: ['A host organism', 'A vector carrying foreign DNA', 'A restriction enzyme', 'An antibody'],
              correctAnswer: 1,
              explanation: 'Plasmids are vectors used to deliver recombinant DNA into host cells.'
            },
            {
              question: 'Commonly used host organism in recombinant studies is:',
              options: ['E. coli', 'Plasmodium', 'Rhizobium only', 'Anopheles'],
              correctAnswer: 0,
              explanation: 'E. coli is frequently used as host in recombinant DNA experiments.'
            },
            {
              question: 'Humulin is:',
              options: ['A biofertilizer', 'Recombinant human insulin', 'A Bt toxin', 'A viral vaccine adjuvant'],
              correctAnswer: 1,
              explanation: 'Humulin is recombinant insulin produced via genetic engineering.'
            },
            {
              question: 'Gene therapy is best described as:',
              options: ['Replacement/correction of defective genes', 'Only antibiotic treatment', 'DNA fingerprinting of criminals', 'Detection of antibodies by ELISA'],
              correctAnswer: 0,
              explanation: 'Gene therapy aims to treat disease by correcting abnormal genes.'
            },
            {
              question: 'PCR technique is used to:',
              options: ['Detect antibodies only', 'Amplify DNA', 'Cut DNA with enzymes', 'Transfer genes into plants directly'],
              correctAnswer: 1,
              explanation: 'PCR generates millions of copies of a target DNA sequence.'
            },
            {
              question: 'ELISA is primarily used for:',
              options: ['DNA amplification', 'Detection of antigen-antibody interaction', 'Gene insertion into vectors', 'Cell fusion'],
              correctAnswer: 1,
              explanation: 'ELISA relies on immunological binding for diagnostic detection.'
            },
            {
              question: 'Bt cotton is resistant to insects because it has:',
              options: ['Extra chlorophyll', 'Bt gene producing insecticidal protein', 'Higher sucrose content', 'Thicker cuticle only'],
              correctAnswer: 1,
              explanation: 'Bt cotton contains cry genes from Bacillus thuringiensis for pest resistance.'
            },
            {
              question: 'A transgenic animal is one that:',
              options: ['Is produced by cloning only', 'Contains and expresses foreign gene', 'Has no mutations', 'Is always sterile'],
              correctAnswer: 1,
              explanation: 'Transgenic animals carry introduced foreign DNA for research or product formation.'
            },
            {
              question: 'Biopiracy refers to:',
              options: ['Legal patent filing', 'Unauthorized exploitation of bioresources/indigenous knowledge', 'Standard drug testing', 'Organic farming'],
              correctAnswer: 1,
              explanation: 'Biopiracy is misuse of biological resources without consent or benefit sharing.'
            },
            {
              question: 'Patents in biotechnology are related to:',
              options: ['Disease diagnosis only', 'Legal rights over inventions', 'Pest resistance only', 'Bacterial culture growth'],
              correctAnswer: 1,
              explanation: 'Patents protect innovation and intellectual property rights.'
            },
            {
              question: 'Which pair is correctly matched?',
              options: ['PCR - antigen detection', 'ELISA - DNA amplification', 'Plasmid - vector', 'Restriction enzyme - protein synthesis'],
              correctAnswer: 2,
              explanation: 'Plasmids are vectors; PCR amplifies DNA while ELISA detects antigen-antibody interaction.'
            },
            {
              question: 'A major benefit of GM crops like Bt cotton is:',
              options: ['No need for any farming practice', 'Improved pest resistance and potential yield benefits', 'Complete immunity to all diseases', 'Elimination of seed production'],
              correctAnswer: 1,
              explanation: 'GM crops can improve pest resistance and agricultural productivity when used appropriately.'
            }
          ]
        },
        {
          id: 'ecology-environment',
          title: 'Unit 10: Ecology and Environment',
          concept_explanations: [
            {
              title: 'Organisms and Environment: Core Ecology',
              description: 'Ecology is the study of interactions between organisms and environment. Levels of ecological organization are organism, population, community, ecosystem, and biosphere. Important abiotic factors include temperature, water, light, and soil. Organisms show morphological, physiological, and behavioral adaptations.'
            },
            {
              title: 'Population Interactions and Growth',
              description: 'Major population interactions are mutualism (+,+), commensalism (+,0), parasitism (+,-), predation (+,-), and competition (-,-). Population attributes include birth rate, death rate, and age distribution. Growth can be exponential under unlimited resources and logistic under limited resources.'
            },
            {
              title: 'Ecosystem Structure and Function',
              description: 'Ecosystem has biotic components (producers, consumers, decomposers) and abiotic components. Energy flow is unidirectional from sun to producers to consumers. Food chains can be grazing or detritus based; interconnected chains form food webs. Decomposition and primary productivity are core ecosystem processes.'
            },
            {
              title: 'Ecological Pyramids and Productivity',
              description: 'Ecological pyramids include pyramid of number, pyramid of biomass, and pyramid of energy. Pyramid of energy is always upright because energy is lost at each trophic transfer. Primary productivity is rate of biomass synthesis by producers.'
            },
            {
              title: 'Biodiversity and Conservation',
              description: 'Biodiversity means variety of life forms and is essential for ecological and economic stability. Biodiversity loss occurs due to habitat destruction, pollution, and climate change. Conservation methods include in-situ (national parks, wildlife sanctuaries) and ex-situ (zoos, botanical gardens).'
            },
            {
              title: 'Hotspots, Endangered Species, and Protection',
              description: 'Biodiversity hotspots are regions with high species richness and endemism under threat. Endangered species face extinction risk and are listed in Red Data Book. Sacred groves are traditionally protected forest patches that conserve biodiversity.'
            }
          ],
          key_patterns: [
            'Interaction-type identification with sign conventions (+,+), (+,0), (+,-), (-,-).',
            'Graph-based population growth questions (J-curve and S-curve).',
            'Conceptual MCQs on logistic growth under resource limitation.',
            'Energy-flow and trophic-level pathway questions.',
            'Ecological pyramid interpretation, especially energy pyramid logic.',
            'Conservation-based direct asks: in-situ vs ex-situ, hotspot, Red Data Book.',
            'Assertion-reason on biodiversity loss and conservation strategies.'
          ],
          formulas_relations: [
            {
              formula: 'Ecological levels: Organism -> Population -> Community -> Ecosystem -> Biosphere',
              meaning: 'Fundamental hierarchy repeatedly tested in one-line questions.'
            },
            {
              formula: 'Interaction signs: mutualism (+,+), commensalism (+,0), parasitism (+,-), predation (+,-), competition (-,-)',
              meaning: 'Common match-the-following and conceptual elimination area.'
            },
            {
              formula: 'Population growth: exponential (J-curve) and logistic (S-curve)',
              meaning: 'Most important graph-based ecology ask in NEET.'
            },
            {
              formula: 'Energy flow: Sun -> Producers -> Consumers (unidirectional)',
              meaning: 'Energy transfer never cycles back in ecosystem food pathways.'
            },
            {
              formula: 'Pyramid of energy is always upright',
              meaning: 'High-frequency direct statement question.'
            }
          ],
          application_insights: [
            'Unit 10 is one of the most scoring NCERT-direct units when examples are revised.',
            'Most repeated PYQs target population interactions, energy flow, and conservation methods.',
            'Graph interpretation from logistic curve and pyramid diagrams is highly test-relevant.',
            'Conservation terms are often tested as direct one-liners with confusing options.'
          ],
          common_mistakes: [
            {
              mistake: 'Confusing mutualism and commensalism',
              why: 'Both involve benefit to one species, but in mutualism both benefit while in commensalism one is unaffected.'
            },
            {
              mistake: 'Forgetting that energy pyramid is always upright',
              why: 'Students overgeneralize inverted patterns from number/biomass pyramids to energy pyramid.'
            },
            {
              mistake: 'Mixing food chain and food web',
              why: 'Food chain is linear while food web is networked and interconnected.'
            },
            {
              mistake: 'Ignoring examples in interaction and conservation questions',
              why: 'NEET frequently asks concept with examples (for example lichen, sacred groves, hotspot).'
            },
            {
              mistake: 'Treating exponential and logistic growth as same',
              why: 'Logistic growth includes carrying capacity limitation, unlike exponential growth.'
            }
          ],
          quick_revision: [
            'Ecology studies interactions between organisms and their environment.',
            'Hierarchy: organism -> population -> community -> ecosystem -> biosphere.',
            'Abiotic factors: temperature, water, light, and soil.',
            'Adaptations can be morphological, physiological, or behavioral.',
            'Mutualism (+,+): both species benefit (for example lichen association).',
            'Commensalism (+,0): one benefits and other unaffected.',
            'Parasitism (+,-): parasite benefits and host is harmed.',
            'Predation (+,-): predator feeds on prey.',
            'Competition (-,-): both populations suffer due to shared limited resources.',
            'Population attributes: natality, mortality, and age structure.',
            'Exponential growth occurs under unlimited resources.',
            'Logistic growth occurs under limited resources and gives S-shaped curve.',
            'Ecosystem biotic components: producers, consumers, decomposers.',
            'Energy flow is unidirectional through trophic levels.',
            'Food chains are linear; food webs are interconnected networks.',
            'Detritus chain starts from dead organic matter.',
            'Ecological pyramids: number, biomass, and energy.',
            'Pyramid of energy is always upright.',
            'Decomposition breaks complex organic matter into simpler inorganic forms.',
            'Primary productivity is biomass produced by autotrophs.',
            'Biodiversity is the variety of species in a region.',
            'Major causes of biodiversity loss: habitat destruction, pollution, climate change.',
            'In-situ conservation: national parks and wildlife sanctuaries.',
            'Ex-situ conservation: zoos and botanical gardens.',
            'Hotspots are biodiversity-rich and threatened regions.',
            'Red Data Book lists endangered species.',
            'Sacred groves are community-protected natural forests.'
          ],
          quiz: [
            {
              question: 'Correct ecological hierarchy is:',
              options: ['Population -> organism -> community -> ecosystem -> biosphere', 'Organism -> population -> community -> ecosystem -> biosphere', 'Organism -> community -> population -> biosphere -> ecosystem', 'Biosphere -> ecosystem -> organism -> community -> population'],
              correctAnswer: 1,
              explanation: 'The standard ascending ecological organization is organism to biosphere.'
            },
            {
              question: 'In mutualism, interaction sign is:',
              options: ['(+,+)', '(+,0)', '(+,-)', '(-,-)'],
              correctAnswer: 0,
              explanation: 'In mutualism, both interacting species gain benefit.'
            },
            {
              question: 'Relationship where one species benefits and the other is unaffected is:',
              options: ['Parasitism', 'Predation', 'Commensalism', 'Competition'],
              correctAnswer: 2,
              explanation: 'Commensalism is represented as (+,0).'
            },
            {
              question: 'Which interaction is represented as (-,-)?',
              options: ['Mutualism', 'Commensalism', 'Competition', 'Predation'],
              correctAnswer: 2,
              explanation: 'In competition both species are negatively affected.'
            },
            {
              question: 'S-shaped population growth curve is characteristic of:',
              options: ['Exponential growth', 'Logistic growth', 'Zero growth only', 'Predator growth only'],
              correctAnswer: 1,
              explanation: 'Logistic growth occurs under resource limitation and forms an S-curve.'
            },
            {
              question: 'Energy flow in ecosystem is:',
              options: ['Bidirectional', 'Unidirectional', 'Random', 'Cyclic only'],
              correctAnswer: 1,
              explanation: 'Energy flows one-way from sun to producers to consumers.'
            },
            {
              question: 'Which ecological pyramid is always upright?',
              options: ['Pyramid of number', 'Pyramid of biomass', 'Pyramid of energy', 'All pyramids can be inverted equally'],
              correctAnswer: 2,
              explanation: 'Energy transfer loses heat at each level, so energy pyramid is always upright.'
            },
            {
              question: 'Food web differs from food chain because food web is:',
              options: ['Always shorter', 'Interconnected network of food chains', 'Limited to decomposers only', 'Present only in aquatic habitats'],
              correctAnswer: 1,
              explanation: 'Food web consists of multiple interconnected feeding pathways.'
            },
            {
              question: 'Detritus food chain begins with:',
              options: ['Green plants', 'Herbivores', 'Dead organic matter', 'Top carnivores'],
              correctAnswer: 2,
              explanation: 'Detritus chain starts from dead remains and detritus.',
            },
            {
              question: 'Primary productivity refers to:',
              options: ['Rate of biomass production by producers', 'Rate of decomposition only', 'Rate of energy loss by consumers', 'Birth rate of predators'],
              correctAnswer: 0,
              explanation: 'Primary productivity is production by autotrophs per unit area/time.'
            },
            {
              question: 'In-situ conservation includes:',
              options: ['Zoos and seed banks', 'National parks and wildlife sanctuaries', 'Cryopreservation only', 'Botanical gardens only'],
              correctAnswer: 1,
              explanation: 'In-situ conservation protects species in natural habitats.'
            },
            {
              question: 'Ex-situ conservation includes:',
              options: ['Sacred groves', 'National parks', 'Zoos and botanical gardens', 'Wildlife corridors'],
              correctAnswer: 2,
              explanation: 'Ex-situ methods conserve species outside natural habitat.'
            },
            {
              question: 'Biodiversity hotspots are regions with:',
              options: ['Only high rainfall', 'High biodiversity and high threat level', 'Only endemic mammals', 'No human interference'],
              correctAnswer: 1,
              explanation: 'Hotspots combine high richness/endemism with serious habitat threat.'
            },
            {
              question: 'Red Data Book is associated with:',
              options: ['Fertilizer records', 'Endangered species listing', 'Weather reports', 'Soil pH tables'],
              correctAnswer: 1,
              explanation: 'It lists threatened and endangered species.'
            },
            {
              question: 'Sacred groves are important because they:',
              options: ['Are industrial forests', 'Act as traditional biodiversity conservation sites', 'Are used only for logging', 'Contain only invasive species'],
              correctAnswer: 1,
              explanation: 'Sacred groves are community-protected patches preserving native biodiversity.'
            }
          ]
        }
      ]
    }
  ]
}
