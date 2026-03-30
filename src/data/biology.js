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
              title: 'Reproduction in Flowering Plants',
              description: 'Covers flower structure, gametophytes, pollination, fertilization, seed and fruit development, and special modes like apomixis and polyembryony.'
            },
            {
              title: 'Human Reproduction',
              description: 'Includes male/female reproductive systems, gametogenesis, menstrual cycle, fertilization, implantation, pregnancy, parturition, and lactation.'
            },
            {
              title: 'Reproductive Health',
              description: 'Covers contraception, MTP, STDs prevention, amniocentesis, infertility, and assisted reproductive technologies such as IVF, ZIFT, and GIFT.'
            }
          ],
          key_patterns: [
            'Pollination, double fertilization, and embryo development questions.',
            'Menstrual cycle and gametogenesis sequence questions.',
            'ART methods and reproductive health awareness asks.'
          ],
          formulas_relations: [
            {
              formula: 'Double fertilization = syngamy + triple fusion',
              meaning: 'Unique event in angiosperms.'
            }
          ],
          application_insights: [
            'Reproduction unit has conceptual flow-based NEET questions.',
            'Plant and human reproduction both are heavily tested.'
          ],
          common_mistakes: [
            {
              mistake: 'Mixing pollination and fertilization events',
              why: 'Sequence in flowering plants is frequently examined.'
            },
            {
              mistake: 'Confusing ART techniques',
              why: 'IVF, ZIFT, and GIFT names are similar.'
            }
          ],
          quick_revision: [
            'Double fertilization is key angiosperm feature.',
            'Menstrual cycle and hormonal control are high-yield.',
            'Contraception and STD prevention are direct-theory topics.',
            'IVF, ZIFT, GIFT are commonly asked definitions.'
          ],
          quiz: [
            {
              question: 'Double fertilization occurs in:',
              options: ['Gymnosperms only', 'Angiosperms', 'Pteridophytes only', 'Algae only'],
              correctAnswer: 1,
              explanation: 'Double fertilization is characteristic of angiosperms.'
            },
            {
              question: 'IVF is related to:',
              options: ['Plant tissue culture', 'Assisted reproduction', 'Bacterial cloning only', 'Vaccination'],
              correctAnswer: 1,
              explanation: 'IVF is an assisted reproductive technology.'
            }
          ]
        },
        {
          id: 'genetics-evolution',
          title: 'Unit 7: Genetics and Evolution',
          concept_explanations: [
            {
              title: 'Mendelian Inheritance and Variations',
              description: 'Includes Mendel laws, incomplete dominance, codominance, multiple alleles, pleiotropy, and basic polygenic inheritance.'
            },
            {
              title: 'Chromosomal Basis and Sex Determination',
              description: 'Chromosome theory, linkage, crossing over, sex-linked inheritance, and sex-determination mechanisms in humans, birds, and honey bee.'
            },
            {
              title: 'Molecular Basis of Inheritance',
              description: 'DNA as genetic material, DNA/RNA structure, replication, transcription, translation, genetic code, lac operon, and human genome project.'
            },
            {
              title: 'Evolution Concepts',
              description: 'Covers origin of life, evidences of evolution, Darwinism, modern synthetic theory, Hardy-Weinberg principle, drift, gene flow, and natural selection.'
            }
          ],
          key_patterns: [
            'Pedigree and inheritance pattern recognition.',
            'Dominance and blood group allele-based questions.',
            'Central dogma and molecular process flow questions.',
            'Hardy-Weinberg concept and evolution mechanism asks.'
          ],
          formulas_relations: [
            {
              formula: 'Hardy-Weinberg: p^2 + 2pq + q^2 = 1',
              meaning: 'Genotype frequency relation in stable population.'
            }
          ],
          application_insights: [
            'Unit 7 is one of the highest weightage biology blocks.',
            'Genetics and molecular biology are repeatedly tested.'
          ],
          common_mistakes: [
            {
              mistake: 'Confusing codominance and incomplete dominance',
              why: 'Both involve non-Mendelian patterns but outcomes differ.'
            },
            {
              mistake: 'Mixing transcription and translation steps',
              why: 'Central dogma sequence is often asked directly.'
            }
          ],
          quick_revision: [
            'Know all Mendelian deviations with examples.',
            'Sex-linked disorders are frequent direct asks.',
            'DNA replication-transcription-translation sequence is core.',
            'Hardy-Weinberg equation is high-yield.'
          ],
          quiz: [
            {
              question: 'Hardy-Weinberg relation is:',
              options: ['a^2 + b^2 = c^2', 'p^2 + 2pq + q^2 = 1', 'F = ma', 'n = m/M'],
              correctAnswer: 1,
              explanation: 'It describes genotype frequencies in a stable population.'
            },
            {
              question: 'Color blindness is typically:',
              options: ['Autosomal dominant', 'X-linked recessive', 'Y-linked', 'Mitochondrial only'],
              correctAnswer: 1,
              explanation: 'Color blindness follows X-linked recessive inheritance.'
            }
          ]
        },
        {
          id: 'biology-human-welfare',
          title: 'Unit 8: Biology and Human Welfare',
          concept_explanations: [
            {
              title: 'Health and Disease Basics',
              description: 'Covers common pathogens and diseases such as malaria, filariasis, typhoid, pneumonia, common cold, amoebiasis, ringworm, dengue, and chikungunya.'
            },
            {
              title: 'Immunity, Vaccines, and Major Disorders',
              description: 'Includes basic immunology, vaccination, cancer, HIV/AIDS, adolescence health, and substance abuse awareness.'
            },
            {
              title: 'Microbes in Human Welfare',
              description: 'Application of microbes in food processing, industry, sewage treatment, biogas, biocontrol, and biofertilizers.'
            }
          ],
          key_patterns: [
            'Disease-causative agent matching questions.',
            'Vaccine/immunity direct-theory questions.',
            'Microbe application in industry and agriculture.'
          ],
          formulas_relations: [
            {
              formula: 'Pathogen -> Disease -> Transmission route',
              meaning: 'Common memory pattern in NEET biology welfare questions.'
            }
          ],
          application_insights: [
            'Mostly direct-memory unit with consistent PYQ trend.',
            'Microbes and disease chapters are easy scoring with revision.'
          ],
          common_mistakes: [
            {
              mistake: 'Confusing disease names and pathogens',
              why: 'Similar symptom-based conditions create confusion.'
            }
          ],
          quick_revision: [
            'Focus on disease-agent-transmission triads.',
            'Vaccination and immunity basics are important.',
            'Microbes are useful in food, industry, and agriculture.'
          ],
          quiz: [
            {
              question: 'Biogas production in sewage treatment mainly involves:',
              options: ['Algae only', 'Methanogenic microbes', 'Viruses', 'Lichens'],
              correctAnswer: 1,
              explanation: 'Methanogens play major role in anaerobic digestion.'
            },
            {
              question: 'Vaccines are primarily linked to:',
              options: ['Immediate cure only', 'Preventive immunity', 'Nutrient storage', 'Gene mutation'],
              correctAnswer: 1,
              explanation: 'Vaccination induces protective immune memory.'
            }
          ]
        },
        {
          id: 'biotechnology-applications',
          title: 'Unit 9: Biotechnology and Its Applications',
          concept_explanations: [
            {
              title: 'Biotechnology Principles',
              description: 'Biotechnology uses living systems and recombinant DNA technology for useful products and processes.'
            },
            {
              title: 'Health Applications',
              description: 'Includes insulin production, vaccines, gene therapy, and therapeutic molecules.'
            },
            {
              title: 'Agriculture Applications and Biosafety',
              description: 'Covers GM crops, transgenic animals, biopiracy, and patent-related biosafety issues.'
            }
          ],
          key_patterns: [
            'rDNA process sequence-based direct questions.',
            'Bt crop and transgenic application asks.',
            'Biopiracy and patent conceptual questions.'
          ],
          formulas_relations: [
            {
              formula: 'Biotechnology = Genetic manipulation + Controlled biological process',
              meaning: 'High-level conceptual relation often tested.'
            }
          ],
          application_insights: [
            'Unit 9 is concise and high-scoring when definitions are clear.',
            'Bt crops and gene therapy are top recurring topics.'
          ],
          common_mistakes: [
            {
              mistake: 'Confusing GMO applications and ethical concerns',
              why: 'Use-case and biosafety points are often mixed.'
            }
          ],
          quick_revision: [
            'rDNA technology is core biotechnology principle.',
            'Human insulin production is classic application.',
            'Bt crops and transgenic animals are frequent MCQ topics.',
            'Biopiracy and patents are direct NCERT questions.'
          ],
          quiz: [
            {
              question: 'Bt crops are examples of:',
              options: ['Hybrid breeding only', 'Genetically modified organisms', 'Natural mutants only', 'Biofertilizers'],
              correctAnswer: 1,
              explanation: 'Bt crops are transgenic plants carrying specific genes.'
            },
            {
              question: 'Gene therapy is mainly used for:',
              options: ['Coloring flowers', 'Correcting defective genes', 'Making compost', 'Improving photosynthesis only'],
              correctAnswer: 1,
              explanation: 'Gene therapy targets genetic defects at molecular level.'
            }
          ]
        },
        {
          id: 'ecology-environment',
          title: 'Unit 10: Ecology and Environment',
          concept_explanations: [
            {
              title: 'Organisms and Population Interactions',
              description: 'Key interactions include mutualism, competition, predation, and parasitism with population attributes like growth rate and age distribution.'
            },
            {
              title: 'Ecosystem Components and Energy Flow',
              description: 'Ecosystem structure includes producers, consumers, and decomposers with productivity, decomposition, and unidirectional energy flow.'
            },
            {
              title: 'Ecological Pyramids',
              description: 'Pyramids of number, biomass, and energy represent trophic organization.'
            },
            {
              title: 'Biodiversity and Conservation',
              description: 'Includes biodiversity patterns, importance, threats, conservation measures, hotspots, endangered species, red data book, and protected areas.'
            }
          ],
          key_patterns: [
            'Population interaction type identification.',
            'Energy flow and trophic-level concept questions.',
            'Biodiversity hotspot and conservation tool asks.',
            'Pyramid type conceptual MCQs.'
          ],
          formulas_relations: [
            {
              formula: 'Population growth forms: exponential and logistic',
              meaning: 'Foundational concept in ecology numericals/concepts.'
            }
          ],
          application_insights: [
            'Ecology has many direct NCERT facts and predictable PYQs.',
            'Conservation terms are frequent one-liner questions.'
          ],
          common_mistakes: [
            {
              mistake: 'Confusing interaction types',
              why: 'Mutualism and commensal-like scenarios are mixed in options.'
            },
            {
              mistake: 'Mixing protected area definitions',
              why: 'National park, sanctuary, and biosphere reserve are distinct.'
            }
          ],
          quick_revision: [
            'Know interaction types with examples.',
            'Energy flow is unidirectional in ecosystem.',
            'Pyramids of number, biomass, and energy are high-yield.',
            'Hotspots and conservation terms are frequently asked.'
          ],
          quiz: [
            {
              question: 'Energy flow in ecosystem is:',
              options: ['Bidirectional', 'Unidirectional', 'Random', 'Cyclic only'],
              correctAnswer: 1,
              explanation: 'Energy flows one-way from sun to producers to consumers.'
            },
            {
              question: 'Red Data Book is associated with:',
              options: ['Fertilizer records', 'Endangered species listing', 'Weather reports', 'Soil pH tables'],
              correctAnswer: 1,
              explanation: 'It lists threatened and endangered species.'
            }
          ]
        }
      ]
    }
  ]
}
