// Botany — Unit I: Diversity in the Living World
// Chapters: The Living World | Biological Classification | Plant Kingdom

const livingWorld = {
  id: 'living-world',
  title: 'Chapter 1: The Living World',
  notes: [
    {
      concept: 'Living organisms show growth, metabolism, responsiveness/consciousness, reproduction and cellular organisation. No single property is sufficient to define life — metabolic reactions taken together are the defining feature.',
      fact: 'Metabolism is the ONLY universally applicable defining criterion of life. Non-living objects (crystals, mountains) can grow by accretion — from outside — but metabolise never.',
      tip: 'PYQ trap: "Growth" is NOT unique to living — crystals grow. "Reproduction" fails in mules, worker bees, infertile individuals. Metabolism alone is universal.',
    },
    {
      concept: 'Growth in living organisms is from inside (intrinsic) — increase in mass and number of cells. In non-living, growth (accretion) is from outside (crystal growth by mineral addition).',
      fact: 'In unicellular organisms growth and reproduction are synonymous — single cell divides to produce two cells.',
      tip: 'Isolated metabolic reactions carried out in a test tube are chemical reactions — NOT life itself. Life needs cellular organisation.',
    },
    {
      concept: 'Consciousness — ability to sense environment and respond to stimuli — is a defining property of living organisms. Even plants show consciousness (phototropism, thigmotropism, nyctinasty).',
      fact: 'Human beings are the only organisms who are aware of their birth, death, and have a self-conscious mind (highest form of consciousness).',
      tip: 'All living organisms have consciousness — plants, bacteria, fungi included. Consciousness is NOT limited to animals.',
    },
    {
      concept: 'Biodiversity refers to the variety of life on Earth — encompassing genetic, species, and ecosystem diversity. About 1.7–1.8 million species have been described so far; estimated 5–50 million may exist.',
      fact: 'India has about 45,000 plant species and 91,000 animal species described (one of the 17 mega-diverse countries).',
      tip: 'Mega-diversity countries: Brazil, Colombia, Ecuador, Peru, Mexico, Madagascar, Australia, China, Philippines, India, Indonesia among others.',
    },
    {
      concept: 'Taxonomy is the science of identification, nomenclature and classification of organisms based on observable characteristics.',
      fact: 'Systematics (from Gr. systema = organised whole) includes taxonomy but additionally deals with evolutionary relationships (phylogeny) among organisms.',
      tip: 'Taxonomy ≠ Systematics. Taxonomy: just classification. Systematics: classification + evolutionary relationships. NCERT: Systematics is wider.',
    },
    {
      concept: 'Binomial nomenclature: each species given a two-part Latin name — Generic name (first word, capital) + Specific epithet (second word, lowercase). Both italicised in print; underlined when handwritten.',
      fact: 'Carolus Linnaeus proposed binomial nomenclature in Species Plantarum (1753) for plants and Systema Naturae (10th edition, 1758) for animals.',
      tip: 'Rules: genus always capital; species always lowercase. Mangifera indica — Mangifera is genus, indica is species. Both must be italicised separately.',
    },
    {
      concept: 'Taxonomic hierarchy (from broadest to narrowest): Kingdom → Phylum (Div in plants) → Class → Order → Family → Genus → Species.',
      fact: 'The higher the taxonomic category, the fewer the characters shared by members. Species is lowest; Kingdom is highest.',
      tip: 'Mnemonic: King Philip Came Over For Good Soup (K→P→C→O→F→G→S). Related species form a genus; related genera form a family; and so on upward.',
    },
    {
      concept: 'Species is the basic unit of classification — defined as a group of organisms that can interbreed naturally and produce fertile offspring.',
      fact: 'Biological species concept was proposed by Ernst Mayr. A type species (holotype) is the reference specimen.',
      tip: 'Mule = horse × donkey — fertile? NO. So horse and donkey are different species. Tiger and lion can be crossed (liger/tigon) but produce infertile offspring — they are different species.',
    },
    {
      concept: 'Nomenclature rules: ICBN (International Code of Botanical Nomenclature) for plants; ICZN (International Code of Zoological Nomenclature) for animals; ICNB for bacteria.',
      fact: 'Author name/abbreviation may be placed after the species name, e.g. Mangifera indica Linn. (Linn = Linnaeus).',
      tip: 'A new species name must be published in an internationally accepted journal with a Latin description for it to be officially valid.',
    },
    {
      concept: 'Taxonomic aids: Herbaria (dried, pressed, labelled plant specimens on sheets), Botanical gardens (live plant collections), Museums (preserved specimens of plants and animals), Zoological parks (live animals), Keys (used for identification based on contrasting characters).',
      fact: 'Largest herbarium: Kew Gardens, London (> 7 million specimens). In India: Central National Herbarium, Calcutta.',
      tip: 'Monograph: comprehensive treatment of ONE taxon. Flora: account of all plant species in a geographic area. Catalogue: alphabetical list. Manual: guide to identify species.',
    },
    {
      concept: 'Dichotomous key is a taxonomic tool for identification based on a series of paired contrasting statements (couplets) leading to the identity of an organism.',
      fact: 'A holotype is the single specimen on which a species is originally described. A syntype is any specimen when no holotype was designated.',
      tip: 'In NCERT-based MCQs: Botanical gardens house live plants (ex situ conservation); herbaria are dead specimens. Frequently confused in PYQs.',
    },
    {
      concept: 'A taxon (plural taxa) is any unit of biological classification — a species, genus, family, order, class, phylum, or kingdom. Each taxon represents a category.',
      fact: 'Mango: Kingdom Plantae; Phylum Angiospermae; Class Dicotyledonae; Order Sapindales; Family Anacardiaceae; Genus Mangifera; Species indica.',
      tip: 'Human classification: K-Animalia; Ph-Chordata; Cl-Mammalia; O-Primata; F-Hominidae; G-Homo; Sp-sapiens. Homo sapiens means "wise man" in Latin.',
    },
  ],
  quiz: [
    {
      question: 'Which of the following is the ONLY universally applicable defining criterion of life?',
      options: ['Growth', 'Reproduction', 'Metabolism', 'Response to stimuli'],
      correctAnswer: 2,
      explanation: 'Metabolism is the only universally true criterion. Growth occurs in non-living (crystals). Reproduction fails in mules and worker bees. Metabolism is unique to living cellular systems.',
    },
    {
      question: 'Binomial nomenclature was formally proposed by Carolus Linnaeus in:',
      options: ['Systema Naturae (1735)', 'Species Plantarum (1753)', 'Genera Plantarum (1737)', 'Philosophia Botanica (1751)'],
      correctAnswer: 1,
      explanation: 'Species Plantarum (1753) for plants and Systema Naturae 10th edition (1758) for animals are the starting points for binomial nomenclature.',
    },
    {
      question: "In the binomial name 'Homo sapiens', 'sapiens' represents the:",
      options: ['Kingdom', 'Genus', 'Species epithet', 'Family'],
      correctAnswer: 2,
      explanation: "'Homo' is the genus (capital); 'sapiens' is the specific epithet (lowercase). Together they form the binomial name.",
    },
    {
      question: 'The correct sequence from BROADEST to most SPECIFIC taxonomic category is:',
      options: ['Species → Genus → Family → Order → Class → Phylum → Kingdom', 'Kingdom → Phylum → Class → Order → Family → Genus → Species', 'Order → Family → Genus → Species → Class', 'Phylum → Kingdom → Class → Order → Family'],
      correctAnswer: 1,
      explanation: 'Standard hierarchy: Kingdom → Phylum/Division → Class → Order → Family → Genus → Species (broadest to most specific).',
    },
    {
      question: 'Which of the following characteristics is correct regarding binomial nomenclature?',
      options: ['Both words start with capital letters', 'Both words start with lowercase', 'Generic name starts with capital; specific epithet with lowercase', 'Specific epithet starts with capital; generic name with lowercase'],
      correctAnswer: 2,
      explanation: 'ICBN rules: Genus (generic name) begins with capital; species (specific epithet) begins with lowercase. Both italicised in print, underlined in handwriting.',
    },
    {
      question: 'Mule is NOT considered a separate species because:',
      options: ['It cannot eat grass', 'It is a plant-eater', 'It cannot produce fertile offspring', 'It has 4 legs'],
      correctAnswer: 2,
      explanation: 'Biological species concept (Ernst Mayr): species can interbreed and produce FERTILE offspring. The mule (horse × donkey) is infertile — hence not a species.',
    },
    {
      question: 'The largest herbarium in the world is located at:',
      options: ['National Botanical Research Institute, Lucknow', 'Indian Botanical Garden, Howrah', 'Kew Gardens, London', 'Smithsonian Institute, USA'],
      correctAnswer: 2,
      explanation: 'Royal Botanic Gardens, Kew in London houses the largest herbarium in the world with over 7 million specimens.',
    },
    {
      question: 'Which of the following is a CORRECT match?',
      options: ['Binomial nomenclature — Ernst Mayr', 'Five kingdom classification — Carolus Linnaeus', 'Biological species concept — Ernst Mayr', 'Taxonomy — R. H. Whittaker'],
      correctAnswer: 2,
      explanation: "Ernst Mayr proposed the biological species concept. Linnaeus — binomial nomenclature; Whittaker — Five kingdom classification.",
    },
    {
      question: 'Consciousness is:',
      options: ['Unique to animals only', 'Unique to human beings only', 'Present in all living organisms including plants', 'Not a valid criterion for life'],
      correctAnswer: 2,
      explanation: 'NCERT states all living organisms have consciousness — they sense and respond to their environment. Plants show phototropism, thigmotropism etc.',
    },
    {
      question: 'A "Flora" refers to:',
      options: ['A comprehensive account of one taxon', 'An alphabetical list of organisms', 'An account of plants found in a particular area', 'A guide key for plant identification'],
      correctAnswer: 2,
      explanation: 'Flora: account of all plant species in a geographic area. Monograph: one taxon. Catalogue: alphabetical list. Manual: identification guide.',
    },
  ],
}

const biologicalClassification = {
  id: 'biological-classification',
  title: 'Chapter 2: Biological Classification',
  notes: [
    {
      concept: 'Two kingdom classification (Linnaeus): Plantae (autotrophic, non-motile) and Animalia (heterotrophic, motile). Major problem: couldn\'t place fungi, algae, bacteria properly.',
      fact: 'R.H. Whittaker (1969) proposed Five Kingdom classification: Monera, Protista, Fungi, Plantae, Animalia. Criteria: cell structure, mode of nutrition, body organisation, reproduction.',
      tip: 'Earlier systems: Two kingdom (Linnaeus), Three kingdom (Haeckel — added Protista), Four kingdom, Five kingdom (Whittaker). Six kingdom adds Archaebacteria separately.',
    },
    {
      concept: 'Kingdom Monera: Prokaryotes — no membrane-bound nucleus or organelles. Cell wall usually of peptidoglycan/murein. Includes Archaebacteria and Eubacteria.',
      fact: 'Archaebacteria live in extreme environments: methanogens (biogas producers — cow dung), halophiles (salt lakes), thermoacidophiles (hot sulphur springs). Ancient prokaryotes — different lipids in membrane.',
      tip: 'Archaebacteria are ancient and live in EXTREME conditions. Methanogens in marshes/gut of animals. Mycoplasma has NO cell wall — smallest living organism, can cause PPLO (pleuropneumonia-like organisms).',
    },
    {
      concept: 'Eubacteria (True bacteria): Rod (bacilli), spherical (cocci), spiral (spirillum), comma-shaped (vibrio). May be motile (flagella) or non-motile. Heterotrophic or autotrophic.',
      fact: 'Cyanobacteria (blue-green algae) are photosynthetic Monera — have chlorophyll a, fix atmospheric nitrogen (Nostoc, Anabaena). They caused the Great Oxygenation Event.',
      tip: 'Cyanobacteria = blue-green algae = prokaryotic. They have NO membrane-bound organelles BUT have photosynthetic thylakoids in the cytoplasm. Often cause algal blooms in polluted lakes.',
    },
    {
      concept: 'Kingdom Protista: Unicellular eukaryotes — have membrane-bound nucleus. Includes Chrysophytes, Dinoflagellates, Euglenoids, Slime moulds, Protozoans.',
      fact: 'Chrysophytes include diatoms and golden algae. Diatom cell walls (frustules) made of silica — indestructible, form diatomaceous earth used as abrasive.',
      tip: 'Diatoms are chief producers in oceans (golden brown). Dinoflagellates have cellulose wall plates — red tides caused by Gonyaulax (produces toxins). Euglenoids: no cell wall, have pellicle; Euglena has both chloroplasts (autotrophic) and can be heterotrophic — mixotrophic.',
    },
    {
      concept: 'Slime moulds (Protista): Saprophytic; body = plasmodium (network of cytoplasm, naked). Under unfavourable conditions form sporangia and produce spores. Spores are resistant; dispersed by wind.',
      fact: 'Protozoans are primitive relatives of animals — heterotrophic motile protists. Major types: Amoeboid (Amoeba, Entamoeba), Flagellated (Trypanosoma), Ciliated (Paramoecium), Sporozoan (Plasmodium).',
      tip: 'Trypanosoma causes sleeping sickness (vector: tsetse fly). Plasmodium causes malaria (vector: Anopheles mosquito). Paramoecium = slipper animalcule — heterotrophic, ciliated.',
    },
    {
      concept: 'Kingdom Fungi: Heterotrophic eukaryotes lacking chlorophyll — mostly saprophytic (decomposers), some parasitic. Cell wall of chitin. Store glycogen (not starch).',
      fact: 'Phycomycetes: aquatic, coenocytic mycelium (no septa), e.g. Rhizopus (bread mould), Mucor, Albugo. Ascomycetes: septate mycelium, ascospores in ascus, e.g. Aspergillus, Penicillium, Saccharomyces (yeast), Neurospora, Morels.',
      tip: 'Basidiomycetes: club fungi — have basidiospores on basidia; e.g. Agaricus (mushroom), Ustilago (smut), Puccinia (rust). Deuteromycetes = Fungi Imperfecti — only asexual (conidia); e.g., Alternaria, Colletotrichum, Trichoderma.',
    },
    {
      concept: 'Lichens: Symbiotic association between algae (phycobiont) and fungi (mycobiont). Algae provide food (photosynthesis); fungi provide water/minerals and protection. Pioneer colonisers of bare rock.',
      fact: 'Lichens are very sensitive to air pollution — presence = clean air. They are slow-growing (1 mm/year). Reindeer moss (Cladonia rangiferina) is actually a lichen.',
      tip: 'In lichens: algae = autotrophic component (Cyanobacteria or green algae). Fungi = structural/protective component. Lichens serve as bioindicators of pollution.',
    },
    {
      concept: 'Viruses: Acellular — not considered living by NCERT (no metabolism outside host). Have either DNA or RNA (never both); protein coat = capsid; outer membrane (envelope) in some.',
      fact: 'TMV (Tobacco Mosaic Virus) — first virus discovered (D. Ivanowsky, 1892). Crystallised by W.M. Stanley (1935). TMV is RNA virus, rod-shaped. Bacteriophages infect bacteria.',
      tip: 'Viruses are OBLIGATE intracellular parasites. Bacteriophage T4 has DNA. HIV has RNA (retrovirus). Viroids: smaller than viruses, naked RNA, NO capsid — cause Potato Spindle Tuber Disease (PSTD).',
    },
    {
      concept: 'Viroids: Discovered by T.O. Diener (1971). Consist of short, single-stranded circular RNA — no protein coat. Smaller than any known virus. Cause potato spindle tuber disease.',
      fact: 'Prions: infectious proteins — misfolded proteins that cause normal proteins to misfold similarly. Cause BSE (mad cow disease), Creutzfeldt-Jakob disease. Discovered by Stanley Prusiner (Nobel Prize 1997).',
      tip: 'Comparison: Viruses (DNA or RNA + protein coat) > Viroids (just RNA, no protein) > Prions (just protein, no nucleic acid). All are sub-viral pathogens.',
    },
    {
      concept: 'Kingdom Plantae: Eukaryotic, multicellular, autotrophic (photosynthesis with chlorophyll). Cell wall of cellulose. Store food as starch. Includes algae, bryophytes, pteridophytes, gymnosperms, angiosperms.',
      fact: 'Some plants are partially heterotrophic: Insectivorous (Pitcher plant, Drosera); Bladderwort (Utricularia); Parasitic plants (Cuscuta).',
      tip: 'Fungi are placed in a SEPARATE kingdom (Fungi) because they have chitin walls and store glycogen — they are more close to animals than plants.',
    },
    {
      concept: 'Kingdom Animalia: Eukaryotic, multicellular, heterotrophic (holozoic — ingest food). No cell wall. Mostly motile. Reproduce sexually. Store food as glycogen/fat.',
      fact: 'Animalia ranges from sponges (Porifera) to Chordates (vertebrates). They show enormous diversity in body plan, symmetry, and complexity.',
      tip: 'The five kingdoms in Whittaker\'s system are based on: cell type (pro/eukaryote), body complexity (single/multicellular), and mode of nutrition (autotrophic/heterotrophic/saprotrophic).',
    },
  ],
  quiz: [
    {
      question: 'Five kingdom classification was proposed by:',
      options: ['Carolus Linnaeus', 'Ernst Haeckel', 'R.H. Whittaker', 'Carl Woese'],
      correctAnswer: 2,
      explanation: 'R.H. Whittaker (1969) proposed the Five Kingdom classification: Monera, Protista, Fungi, Plantae, Animalia.',
    },
    {
      question: 'Mycoplasma is placed in Monera because it:',
      options: ['Has a cell wall of chitin', 'Is eukaryotic', 'Lacks membrane-bound nucleus and has no cell wall', 'Can photosynthesise'],
      correctAnswer: 2,
      explanation: 'Mycoplasma is prokaryotic (no nuclear membrane) and also lacks a cell wall — the smallest known living/self-replicating organism.',
    },
    {
      question: 'Cyanobacteria are significant because they:',
      options: ['Cause disease in humans', 'Are eukaryotic algae', 'Are photosynthetic prokaryotes that fix atmospheric nitrogen', 'Have chitin cell walls'],
      correctAnswer: 2,
      explanation: 'Cyanobacteria (blue-green algae) are prokaryotes that perform photosynthesis and fix atmospheric N₂. Nostoc, Anabaena are common examples.',
    },
    {
      question: 'The cell wall of diatoms is made of:',
      options: ['Cellulose', 'Chitin', 'Silica', 'Peptidoglycan'],
      correctAnswer: 2,
      explanation: 'Diatom cell walls (frustules) are made of silica, making them highly resistant to decomposition. They form diatomaceous earth.',
    },
    {
      question: 'Lichens are sensitive to air pollution because:',
      options: ['They require CO₂ for growth', 'The fungal component needs dust', 'Their algal component cannot tolerate SO₂', 'They lack protective coverings'],
      correctAnswer: 2,
      explanation: 'Lichens are bioindicators of clean air. Air pollutants — especially SO₂ — disrupt the photosynthetic algal component. Presence of lichens indicates unpolluted air.',
    },
    {
      question: 'Tobacco Mosaic Virus (TMV) was first:',
      options: ['Discovered by Stanley in 1935', 'Crystallised by W.M. Stanley; first shown as infectious by D. Ivanowsky', 'Found to have DNA as genetic material', 'Identified as a bacteriophage'],
      correctAnswer: 1,
      explanation: 'D. Ivanowsky (1892) first showed TMV was filterable (infective filtrate). W.M. Stanley (1935) crystallised TMV, showing it was mainly protein.',
    },
    {
      question: 'Viroids differ from viruses in:',
      options: ['Having RNA instead of DNA', 'Being smaller and having NO protein coat', 'Being larger than viruses', 'Attacking only plants'],
      correctAnswer: 1,
      explanation: 'Viroids (T.O. Diener, 1971) are naked RNA strands with NO protein coat — smaller than viruses. They cause potato spindle tuber disease.',
    },
    {
      question: 'Which of the following is an example of Deuteromycetes (Fungi Imperfecti)?',
      options: ['Agaricus', 'Aspergillus', 'Alternaria', 'Albugo'],
      correctAnswer: 2,
      explanation: 'Deuteromycetes reproduce only asexually (conidia). Alternaria, Colletotrichum, Trichoderma are examples. Agaricus = Basidiomycetes; Aspergillus = Ascomycetes; Albugo = Phycomycetes.',
    },
    {
      question: 'Prions are:',
      options: ['Naked RNA molecules', 'Small DNA viruses', 'Infectious misfolded proteins with no nucleic acid', 'A type of Viroid'],
      correctAnswer: 2,
      explanation: 'Prions are infectious proteins — misfolded proteins that induce normal proteins to misfold. Cause BSE, Creutzfeldt-Jakob disease. Discovered by Stanley Prusiner (Nobel 1997).',
    },
    {
      question: 'Trypanosoma, which causes sleeping sickness, belongs to:',
      options: ['Monera', 'Fungi', 'Protista (Flagellated protozoa)', 'Animalia'],
      correctAnswer: 2,
      explanation: 'Trypanosoma is a flagellated protozoan in Kingdom Protista. It causes African sleeping sickness; vector is the tsetse fly.',
    },
  ],
}

const plantKingdom = {
  id: 'plant-kingdom',
  title: 'Chapter 3: Plant Kingdom',
  notes: [
    {
      concept: 'Algae: Chlorophyll-bearing, simple, thalloid autotrophs. Mostly aquatic. Forms vary: colonial (Volvox), filamentous (Ulotrix, Spirogyra), massive bodies (kelps).',
      fact: 'Vegetative reproduction by fragmentation; asexual by zoospores (flagellated); sexual by isogamous (Spirogyra), anisogamous (Eudorina) or oogamous (Volvox, Fucus) gametes.',
      tip: 'Agar used in ice-creams/jellies is obtained from Gelidium and Gracilaria (Red algae). Chlorella (unicellular) is rich in proteins, used in space travel.',
    },
    {
      concept: 'Chlorophyceae (Green algae): Pigments Chlorophyll a and b. Stored food is starch. Pyrenoids (store protein + starch) in chloroplasts. Rigid cell wall (inner cellulose, outer pectose).',
      fact: 'Examples of green algae: Chlamydomonas, Volvox, Ulothrix, Spirogyra, Chara.',
      tip: 'The flagella are 2-8, equal, and apical. Their chloroplast shapes vary greatly (cup, ribbon, spiral).',
    },
    {
      concept: 'Phaeophyceae (Brown algae): Pygments Chlorophyll a, c, carotenoids and fucoxanthin (gives brown colour). Food stored as complex carbs (laminarin or mannitol).',
      fact: 'Cellulosic wall covered by gelatinous coating of algin. Plant body attached by holdfast, has a stalk (stipe) and a leaf-like frond. E.g., Ectocarpus, Dictyota, Laminaria, Sargassum, Fucus.',
      tip: 'Flagella in brown algae are 2, unequal, and lateral. Algin is a crucial commercial hydrocolloid from brown algae.',
    },
    {
      concept: 'Rhodophyceae (Red algae): Pigment phycoerythrin gives red colour. Mostly marine, found at great depths + near surface. Food stored as floridean starch (similar to amylopectin + glycogen).',
      fact: 'No flagellated stages in their life cycle. Reproduce asexually by non-motile spores and sexually by non-motile gametes (oogamous). E.g., Polysiphonia, Porphyra, Gracilaria, Gelidium.',
      tip: 'Floridean starch is structurally similar to glycogen and amylopectin. This is a very common PYQ!',
    },
    {
      concept: 'Bryophytes (Amphibians of plant kingdom): Land plants but need water for sexual reproduction. Lack true roots, stem, leaves (thallus-like body). Main plant body is haploid (gametophyte).',
      fact: 'Gametophyte produces biflagellate antherozoids and a single egg in a flask-shaped archegonium. Zygote does not undergo immediate meiosis, forms a multicellular diploid sporophyte dependent on the gametophyte.',
      tip: 'Sphagnum (a moss) provides peat (fuel) and has high water-holding capacity (used for packing living material for trans-shipment).',
    },
    {
      concept: 'Liverworts vs Mosses: Liverworts have dorsiventral thallus (Marchantia). Asexual reproduction by gemmae cups. Mosses have two stages: creeping protonema and leafy stage (Funaria, Polytrichum, Sphagnum).',
      fact: 'In mosses, vegetative reproduction is by fragmentation and budding in the secondary protonema.',
      tip: 'Remember: Moss sporophyte (foot, seta, capsule) is more elaborate than that in liverworts.',
    },
    {
      concept: 'Pteridophytes: First terrestrial plants to possess vascular tissues (xylem & phloem). Main plant body is a diploid sporophyte differentiated into true roots, stem, leaves.',
      fact: 'Leaves can be small (microphylls, e.g. Selaginella) or large (macrophylls, e.g. ferns). Sporangia often form distinct compact structures called strobili or cones (Selaginella, Equisetum).',
      tip: 'Spores germinate to form a small, inconspicuous, multicellular, free-living, mostly photosynthetic thalloid gametophyte called prothallus.',
    },
    {
      concept: 'Homosporous vs Heterosporous: Most pteridophytes produce similar spores (homosporous). Selaginella and Salvinia produce two types of spores — macro (large) and micro (small) spores (heterosporous).',
      fact: 'The megaspores and microspores germinate into female and male gametophytes respectively. The female gametophyte is retained on the parent sporophyte for variable periods.',
      tip: 'This event — retention of female gametophyte within the megasporangium — is the precursor to the seed habit, an important step in evolution.',
    },
    {
      concept: 'Gymnosperms: Plants in which ovules are naked (not enclosed by any ovary wall) and remain exposed before and after fertilization. Seeds are not covered (no fruit).',
      fact: 'Roots are generally tap roots. Mycorrhiza in Pinus (fungal association) and coralloid roots in Cycas (associated with N2-fixing cyanobacteria).',
      tip: 'Pinus has branched stems and is monoecious (male & female cones on same tree). Cycas has unbranched stems and is dioecious (male/female on different trees).',
    },
    {
      concept: 'Gymnosperm reproduction: Heterosporous (microspores and megaspores). Microspores develop into highly reduced male gametophyte (pollen grain).',
      fact: 'Unlike bryophytes and pteridophytes, the male and female gametophytes in gymnosperms do NOT have an independent free-living existence. They remain within sporangia retained on the sporophyte.',
      tip: 'The pollen grain is released and carried by air currents (wind pollination) to the opening of the ovules on megasporophylls.',
    },
    {
      concept: 'Alternation of Generations (Life Cycles): Haplontic, Diplontic, Haplo-diplontic.',
      fact: 'Haplontic: Main body haploid; zygote is the only diploid stage (meiosis yields haploid spores). E.g., Volvox, Spirogyra, Chlamydomonas. \nDiplontic: Main body diploid; gametes are the only haploid stage. E.g., Gymnosperms, Angiosperms, and the alga Fucus.',
      tip: 'Haplo-diplontic: Both phases multicellular (Bryophytes & Pteridophytes). Exceptional algae showing haplo-diplontic cycle: Ectocarpus, Polysiphonia, Kelps.',
    },
  ],
  quiz: [
    {
      question: 'Which of the following algae stores food as floridean starch?',
      options: ['Volvox', 'Polysiphonia', 'Ectocarpus', 'Dictyota'],
      correctAnswer: 1,
      explanation: 'Polysiphonia belongs to Rhodophyceae (red algae) which store food as floridean starch (similar to glycogen and amylopectin).',
    },
    {
      question: 'In which plant group does the sporophyte remain attached to and dependent on the gametophyte?',
      options: ['Algae', 'Bryophytes', 'Pteridophytes', 'Gymnosperms'],
      correctAnswer: 1,
      explanation: 'In bryophytes (like mosses and liverworts), the multi-cellular diploid sporophyte derives nourishment from the haploid photosynthetic gametophyte.',
    },
    {
      question: 'Heterospory, considered an important step toward the seed habit, is shown by:',
      options: ['Dryopteris and Adiantum', 'Funaria and Sphagnum', 'Selaginella and Salvinia', 'Equisetum and Lycopodium'],
      correctAnswer: 2,
      explanation: 'Selaginella and Salvinia are heterosporous pteridophytes, producing two kinds of spores (micro and macro), which is a precursor to the seed habit.',
    },
    {
      question: 'Which of the following pairs is correctly matched regarding gymnosperms?',
      options: ['Pinus - Coralloid roots', 'Cycas - Mycorrhiza', 'Pinus - Branched stem', 'Cycas - Monoecious'],
      correctAnswer: 2,
      explanation: 'Pinus has a branched stem, needle-like leaves, and mycorrhizal roots. Cycas has an unbranched stem, pinnate leaves, and coralloid roots.',
    },
    {
      question: 'Algin and carrageen are obtained from:',
      options: ['Brown algae and red algae respectively', 'Red algae and brown algae respectively', 'Brown algae and green algae respectively', 'Green algae and red algae respectively'],
      correctAnswer: 0,
      explanation: 'Algin is a hydrocolloid produced by brown algae (Phaeophyceae), while carrageen is produced by red algae (Rhodophyceae).',
    },
    {
      question: 'In Gymnosperms, the male and female gametophytes:',
      options: ['Have an independent free-living existence', 'Are totally absent', 'Do not have an independent free-living existence', 'Form the dominant phase of life cycle'],
      correctAnswer: 2,
      explanation: 'Unlike bryophytes and pteridophytes, gymnosperm gametophytes lack independent existence and are retained within the sporangia on the sporophyte.',
    },
    {
      question: 'The presence of coralloid roots containing nitrogen-fixing cyanobacteria is a characteristic of:',
      options: ['Pinus', 'Funaria', 'Cycas', 'Sphagnum'],
      correctAnswer: 2,
      explanation: 'Cycas possesses specialised coralloid roots that have a symbiotic association with nitrogen-fixing cyanobacteria (like Nostoc/Anabaena).',
    },
    {
      question: 'Match the alga with its characteristic life cycle:\nFucus is ________.',
      options: ['Haplontic', 'Haplo-diplontic', 'Diplontic', 'Isomorphic'],
      correctAnswer: 2,
      explanation: 'Fucus is an exception among algae and shows a diplontic life cycle, much like seed-bearing plants (gymnosperms and angiosperms).',
    },
    {
      question: 'Gemma cups are asexual reproductive structures found in:',
      options: ['Mosses', 'Liverworts', 'Ferns', 'Gymnosperms'],
      correctAnswer: 1,
      explanation: 'Gemmae are green, multicellular, asexual buds that develop in small receptacles called gemma cups on the thalli of liverworts (like Marchantia).',
    },
    {
      question: 'The first terrestrial plants to possess vascular tissues are:',
      options: ['Bryophytes', 'Pteridophytes', 'Gymnosperms', 'Angiosperms'],
      correctAnswer: 1,
      explanation: 'Pteridophytes are the evolutionary first vascular land plants, possessing xylem for water and phloem for food conduction.',
    },
  ],
}

export default {
  id: 'bot-u1',
  name: 'Unit I — Diversity in the Living World',
  chapters: [livingWorld, biologicalClassification, plantKingdom],
}

