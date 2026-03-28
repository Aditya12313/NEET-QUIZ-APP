// Zoology — Unit III: Cell Structure and Function
// Chapters: Biomolecules

const biomolecules = {
  id: 'biomolecules-zoo',
  title: 'Chapter 8: Biomolecules',
  notes: [
    {
      concept: 'Chemical Analysis: Grind living tissue with Trichloroacetic acid (TCA). Filter it. Acid-soluble pool (filtrate) contains micromolecules (<1000 Da) like amino acids, sugars, nucleotides. Acid-insoluble pool (retentate) contains macromolecules (>1000 Da) like proteins, nucleic acids, polysaccharides, AND LIPIDS.',
      fact: 'Lipids are found in the acid-insoluble pool NOT because they are polymers (>1000 Da), but because their plasma membranes break into water-insoluble vesicles which don\'t pass the filter. Their actual molecular weight is <800 Da.',
      tip: 'Lipids are strictly NOT true macromolecules. They are exceptions in the acid-insoluble fraction.',
    },
    {
      concept: 'Metabolites: Primary metabolites (amino acids, sugars, etc.) have identifiable functions in normal physiological processes. Secondary metabolites (alkaloids, flavonoids, rubber, essential oils, antibiotics) have no known direct role in the primary growth/survival of the organism but have ecological/economic importance.',
      fact: 'Examples of secondary metabolites: Pigments (Carotenoids, Anthocyanins); Alkaloids (Morphine, Codeine); Toxins (Abrin, Ricin); Lectins (Concanavalin A); Drugs (Vinblastin, Curcumin).',
      tip: 'Concanavalin A is a lectin. Vinblastin and Curcumin are drugs. Abrin and Ricin are deadly toxins. (Highly tested match-the-column PYQ).',
    },
    {
      concept: 'Carbohydrates (Polysaccharides): Homopolymers (only one type of monomer) or Heteropolymers (different monomers). Cellulose is a homopolymer of \u03B2-glucose (no branching, no blue colour with Iodine as it lacks complex helices).',
      fact: 'Starch (plants) and Glycogen (animals) are homopolymers of \u03B1-glucose. Starch forms helical secondary structures and holds Iodine (blue-black).',
      tip: 'Inulin is a homopolymer of Fructose. Chitin (fungal cell wall, arthropod exoskeleton) is a complex structural N-containing homopolymer whose monomer is N-acetyl glucosamine (NAG).',
    },
    {
      concept: 'Amino Acids: Substituted methanes. The \u03B1-carbon has four groups: Amino (-NH2), Carboxyl (-COOH), Hydrogen (-H), and a variable R group. Zwitterionic form: at a certain pH, it has both +ve and -ve charges.',
      fact: 'Classification by R group: Acidic (Glutamic acid, Aspartic acid), Basic (Lysine, Arginine), Neutral (Valine), Aromatic (Tyrosine, Phenylalanine, Tryptophan), Sulphur-containing (Cysteine, Methionine).',
      tip: 'Essential amino acids must be taken via diet (e.g., Leucine, Lysine). Non-essential are synthesised in the body (e.g., Alanine, Glycine).',
    },
    {
      concept: 'Proteins: Heteropolymers of amino acids linked by peptide bonds. They form 10-15% of total cellular mass (most abundant organic compounds).',
      fact: 'Collagen is the most abundant protein in the animal world. RuBisCO is the most abundant protein in the whole of the biosphere.',
      tip: 'Protein functions: Trypsin (enzyme), Insulin (hormone), Antibody (fights infection), Receptor (sensory reception), GLUT-4 (enables glucose transport into cells).',
    },
    {
      concept: 'Protein Structure: Primary (linear sequence of amino acids, gives positional information). Secondary (\u03B1-helix (right-handed), \u03B2-pleated sheet — stabilized by H-bonds).',
      fact: 'Tertiary: 3D folding upon itself like a hollow woollen ball, creating active sites for enzymes. It is absolutely necessary for many biological activities.',
      tip: 'Quaternary: Assembly of multiple polypeptides. Adult human haemoglobin has 4 subunits (2 \u03B1 and 2 \u03B2).',
    },
    {
      concept: 'Lipids: Water insoluble. Simple lipids include fatty acids and glycerol (trihydroxy propane). Fatty acids can be Saturated (single bonds, solid at RT, e.g. palmitic acid - 16C with carboxyl) or Unsaturated (double bonds, liquid/oils at RT, e.g. arachidonic acid - 20C).',
      fact: 'Compound lipids: Glycerol + fatty acids + another group. E.g., Phospholipids (Lecithin) found in cell membranes.',
      tip: 'Steroids/Cholesterol are derived lipids containing a multi-ring carbon structure. Neural tissues are extremely rich in complex lipids.',
    },
    {
      concept: 'Nucleic Acids (DNA/RNA): Polymers of nucleotides. Each nucleotide has three parts: Heterocyclic ring (Nitrogenous base), Monosaccharide (Ribose/Deoxyribose), and Phosphoric acid/Phosphate.',
      fact: 'Purines (Double ring): Adenine, Guanine. Pyrimidines (Single ring): Cytosine, Thymine (DNA only), Uracil (RNA only).',
      tip: 'Nitrogenous base + Sugar = Nucleoside (e.g., Adenosine). Nucleoside + Phosphate = Nucleotide (e.g., Adenylic acid, ATP). Phosphodiester bonds link 3\' C of one sugar to 5\' C of the next.',
    },
    {
      concept: 'Enzymes (Biocatalysts): Most are proteins. Some nucleic acids behave like enzymes (Ribozymes). They lower the activation energy required for the reaction.',
      fact: 'Activity is affected by Temperature (optimum high, but destroyed by extreme heat), pH, and Substrate concentration. Substrate binds to the highly specific active site.',
      tip: 'Inhibition: Competitive inhibitor structurally resembles the substrate and competes for the active site (e.g., Malonate inhibits Succinate dehydrogenase). Used to control bacterial pathogens (sulpha drugs).',
    },
    {
      concept: 'Enzyme Cofactors: Non-protein constituents necessary for catalytic activity. Apoenzyme = protein part. Holoenzyme = Apoenzyme + Cofactor.',
      fact: 'Three types of cofactors: 1. Prosthetic groups (organic, TIGHTLY bound, e.g., Haem in peroxidase/catalase). 2. Co-enzymes (organic, TRANSIENTLY bound, often vitamins, e.g., NAD/NADP contain niacin). 3. Metal ions (form coordination bonds, e.g., Zinc for carboxypeptidase).',
      tip: 'If cofactor is removed, catalytic activity is lost. Enzymes classification (OTHLIL): Oxidoreductases, Transferases, Hydrolases, Lyases, Isomerases, Ligases.',
    },
  ],
  quiz: [
    {
      question: 'Which of the following describes the nature of lipids in the chemical analysis of tissues?',
      options: ['They are true macromolecules found in the acid-insoluble fraction.', 'They are micromolecules but are found in the acid-insoluble fraction because they form vesicles.', 'They are macromolecules found in the acid-soluble fraction.', 'They are micromolecules found in the acid-soluble fraction.'],
      correctAnswer: 1,
      explanation: 'Lipids have molecular weights <800 Da (so they are strictly not macromolecules), but they come in the acid-insoluble fraction because cell membranes break into pieces and form water-insoluble vesicles.',
    },
    {
      question: 'Which is the most abundant protein in the whole of the biosphere?',
      options: ['Collagen', 'Haemoglobin', 'RuBisCO', 'Insulin'],
      correctAnswer: 2,
      explanation: 'RuBisCO (Ribulose bisphosphate carboxylase-oxygenase) is the most abundant protein in the biosphere. Collagen is the most abundant in the animal world.',
    },
    {
      question: 'Which of the following is a secondary metabolite classified as a toxin?',
      options: ['Morphine', 'Curcumin', 'Concanavalin A', 'Abrin'],
      correctAnswer: 3,
      explanation: 'Abrin and Ricin are toxins. Morphine is an alkaloid. Curcumin is a drug. Concanavalin A is a lectin.',
    },
    {
      question: 'Inulin is a polymer of:',
      options: ['Glucose', 'Fructose', 'Amino acids', 'Nucleotides'],
      correctAnswer: 1,
      explanation: 'Inulin (not insulin) is a polysaccharide and a homopolymer of fructose.',
    },
    {
      question: 'Which of the following is an essential amino acid?',
      options: ['Glycine', 'Alanine', 'Valine', 'Tyrosine'],
      correctAnswer: 2,
      explanation: 'Valine, Leucine, Isoleucine, Lysine, etc., are essential. Glycine, Alanine, and Tyrosine are non-essential (can be synthesized by the body).',
    },
    {
      question: 'The structure of a protein which is absolutely necessary for its many biological activities (like enzyme active sites) is:',
      options: ['Primary structure', 'Secondary structure', 'Tertiary structure', 'Quaternary structure'],
      correctAnswer: 2,
      explanation: 'The tertiary structure brings distant amino acids closer to form active sites in enzymes, making it absolutely necessary for biological/enzymatic activity.',
    },
    {
      question: 'A competitive inhibitor of the enzyme succinate dehydrogenase is:',
      options: ['Alpha-ketoglutarate', 'Malate', 'Malonate', 'Oxaloacetate'],
      correctAnswer: 2,
      explanation: 'Malonate closely resembles succinate in structure and competes for the active site of succinate dehydrogenase, acting as a competitive inhibitor.',
    },
    {
      question: 'Phospholipids present in cell membranes (e.g., Lecithin) contain:',
      options: ['Only saturated fatty acids', 'Only unsaturated fatty acids', 'A phosphate group attached to glycerol', 'Four fused carbon rings'],
      correctAnswer: 2,
      explanation: 'Phospholipids consist of glycerol, two fatty acids, and a phosphate group (which may have a nitrogenous compound attached to it). Lecithin is an example.',
    },
    {
      question: 'Which component is the tightly bound organic non-protein part of an enzyme?',
      options: ['Co-enzyme', 'Prosthetic group', 'Metal ion', 'Apoenzyme'],
      correctAnswer: 1,
      explanation: 'Prosthetic groups are organic compounds that are TIGHTLY bound to the apoenzyme (e.g., Haem in peroxidase). Co-enzymes are bound transiently.',
    },
    {
      question: 'Chitin, found in the exoskeletons of arthropods, is:',
      options: ['A complex heteropolysaccharide', 'A simple protein', 'A nitrogen-containing complex homopolysaccharide', 'A lipid polymer'],
      correctAnswer: 2,
      explanation: 'Chitin is a complex structural polysaccharide found in fungal cell walls and arthropod exoskeletons. It is a homopolymer of N-acetyl glucosamine (NAG), which contains nitrogen.',
    },
  ],
}

export default {
  id: 'zoo-u3',
  name: 'Unit III — Cell Structure and Function (Zoology)',
  chapters: [biomolecules],
}
