// Zoology — Unit II: Structural Organisation in Animals
// Chapters: Animal Tissues | Morphology and Anatomy of Frog

const animalTissues = {
  id: 'animal-tissues',
  title: 'Chapter 7: Animal Tissues',
  notes: [
    {
      concept: 'Epithelial Tissue: Simple (single layer) and Compound (multi-layered). Simple epithelium is for diffusion/filtration/secretion. Compound protects against mechanical/chemical stresses (skin).',
      fact: 'Squamous epithelium (flat cells, irregular boundaries) forms diffusion boundaries (alveoli, blood vessels). Cuboidal (cube-like) forms ducts and tubular parts of nephrons (PCT has microvilli for absorption).',
      tip: 'The ciliated columnar epithelium moves particles/mucus in a specific direction. Found in inner surfaces of hollow organs like bronchioles and fallopian tubes.',
    },
    {
      concept: 'Glandular Epithelium: Unicellular (goblet cells of alimentary canal) or Multicellular (salivary glands). Exocrine (have ducts - saliva, mucus, enzymes) vs Endocrine (ductless - secrete hormones directly into blood).',
      fact: 'Cell junctions: Tight junctions (stop leaking), Adhering junctions (cementing/anchoring), Gap junctions (facilitate communication by connecting cytoplasm for ion/molecule transfer).',
      tip: 'Gap junctions are extremely important for cardiac muscle rapid contraction, but they occur in epithelial tissue as well.',
    },
    {
      concept: 'Connective Tissue: Most abundant and widely distributed. Functions in linking and supporting. Components: Cells (fibroblasts, macrophages, mast cells) + Fibres (collagen/elastin) + Ground substance (matrix).',
      fact: 'Blood is the ONLY connective tissue that does NOT secrete fibres.',
      tip: 'Loose CT: Areolar (beneath skin, support framework for epithelium) and Adipose (stores fat). Dense CT: Regular (Tendons, Ligaments) and Irregular (Skin).',
    },
    {
      concept: 'Tendons & Ligaments (Dense Regular CT): Tendons attach muscle to bone. Ligaments attach bone to bone.',
      fact: 'Tendons are tough and non-elastic (heavy collagen). Ligaments have some elasticity (contain both collagen and elastin fibres).',
      tip: 'Mnemonic: MTB (Muscle-Tendon-Bone) and BLB (Bone-Ligament-Bone).',
    },
    {
      concept: 'Specialised Connective Tissue: Cartilage (solid, pliable; cells are chondrocytes enclosed in small cavities within matrix). Bone (hard, non-pliable, rich in calcium salts and collagen; cells are osteocytes in lacunae).',
      fact: 'Mammalian long bones have a Haversian system (concentric circles of lamellae around a central canal containing blood vessels/nerves).',
      tip: 'Bone marrow in some bones is the site of production of blood cells (haemopoiesis).',
    },
    {
      concept: 'Muscle Tissue: Skeletal (striated, voluntary, multinucleated/syncytial, attached to bones). Smooth (non-striated, involuntary, fusiform/spindle-shaped, unnucleated, found in internal organs/blood vessels).',
      fact: 'Cardiac muscle is striated and involuntary. It has intercalated discs (communication junctions) at cell fusion points allowing cells to contract as a unit.',
      tip: 'Syncytium (multinucleate condition) is uniquely found in skeletal muscle fibres.',
    },
    {
      concept: 'Neural Tissue: Neurons (excitable cells, carry action potentials). Neuroglia (supporting cells).',
      fact: 'Neuroglia make up more than one-half the volume of neural tissue in our body. They protect and support neurons.',
      tip: 'When a neuron is appropriately stimulated, an electrical disturbance travels along its plasma membrane.',
    },
  ],
  quiz: [
    {
      question: 'Which of the following tissues forms the inner lining of the fallopian tubes and bronchioles?',
      options: ['Squamous epithelium', 'Ciliated epithelium', 'Cuboidal epithelium', 'Columnar epithelium'],
      correctAnswer: 1,
      explanation: 'Ciliated epithelium is found in the inner lining of hollow organs like bronchioles and fallopian tubes to move particles or mucus/ova in a specific direction.',
    },
    {
      question: 'Tendons and ligaments are examples of:',
      options: ['Dense regular connective tissue', 'Dense irregular connective tissue', 'Loose connective tissue', 'Specialised connective tissue'],
      correctAnswer: 0,
      explanation: 'Tendons (muscle to bone) and ligaments (bone to bone) have collagen fibres oriented in parallel rows between bundles, classifying them as dense regular connective tissue.',
    },
    {
      question: 'Match the junction: "Mainly facilitate the cells to communicate with each other by connecting the cytoplasms of adjoining cells".',
      options: ['Tight junctions', 'Adhering junctions', 'Gap junctions', 'Synaptic clefts'],
      correctAnswer: 2,
      explanation: 'Gap junctions connect the cytoplasm of adjoining cells, facilitating rapid transfer of ions, small molecules, and sometimes big molecules.',
    },
    {
      question: 'The tissue that is NOT found in the heart is:',
      options: ['Epithelial tissue', 'Connective tissue', 'Skeletal muscle tissue', 'Neural tissue'],
      correctAnswer: 2,
      explanation: 'The heart wall consists of all four primary tissues (epithelium, connective, cardiac muscle, neural tissue) EXCEPT skeletal muscle, which is attached only to bones.',
    },
    {
      question: 'Which type of muscle tissue is multinucleated, unbranched and voluntary?',
      options: ['Smooth muscle', 'Cardiac muscle', 'Skeletal muscle', 'All of the above'],
      correctAnswer: 2,
      explanation: 'Skeletal muscles are syncytial (multinucleated), unbranched, striated, and under voluntary control.',
    },
  ],
}

const frog = {
  id: 'frog-anatomy',
  title: 'Chapter 7: Morphology and Anatomy of Frog',
  notes: [
    {
      concept: 'Frog (Rana tigrina): Poikilotherm (cold-blooded), shows camouflage (ability to change colour). Undergoes summer sleep (aestivation) and winter sleep (hibernation) to protect from extreme heat/cold.',
      fact: 'Skin is smooth and slippery due to mucus. It never drinks water but absorbs it through the skin.',
      tip: 'Frogs do not have external ears; the tympanum receives sound signals. They have a nictitating membrane to protect eyes underwater.',
    },
    {
      concept: 'Frog Digestion: Carnivores; hence alimentary canal is short. Stomach secretes HCl and gastric juices. Partially digested food (chyme) moves to duodenum.',
      fact: 'Liver secretes bile (stored in gall bladder). Pancreas secretes pancreatic juice. Cloaca is a common exterior chamber for faeces, urine, and sperms/ova.',
      tip: 'In frogs, both the excretory and reproductive tracts open into the cloaca.',
    },
    {
      concept: 'Frog Respiration: Skin acts as an aquatic respiratory organ (cutaneous respiration, dissolved O2 diffuses). On land, buccal cavity, skin, and lungs act as respiratory organs.',
      fact: 'During aestivation and hibernation, gaseous exchange ONLY takes place through the skin.',
      tip: 'Lungs are a pair of elongated, pinkish, sac-like structures in the upper part of the thorax. However, skin breathes even underwater.',
    },
    {
      concept: 'Frog Circulation: Closed type. 3-chambered heart (2 atria, 1 ventricle). Sinus venosus (receives blood through vena cava) and Conus arteriosus (ventricle opens into it) are present.',
      fact: 'Special venous connections: Hepatic portal system (vein between liver and intestine) and Renal portal system (vein between lower parts of body and kidney) are present.',
      tip: 'The blood has nucleated RBCs (unlike mammalian non-nucleated RBCs), WBCs and platelets.',
    },
    {
      concept: 'Frog Excretion: Ureotelic (excretes urea). Consists of kidneys, ureters, cloaca and urinary bladder (ventral to rectum).',
      fact: 'Each kidney is composed of structural/functional units called uriniferous tubules (nephrons).',
      tip: 'In males, ureter acts as a urinogenital duct which opens into the cloaca. In females, ureters and oviducts open separately into the cloaca.',
    },
    {
      concept: 'Frog Reproduction: Male has vocal sacs and a copulatory pad on the first digit of forelimbs (absent in females).',
      fact: 'Male reproductive organs: Testes → Vasa efferentia (10-12) → enter the kidneys → open into Bidder\'s canal → communicates with urinogenital duct → opens into cloaca.',
      tip: 'Female reproductive organs: Ovaries situated near kidneys but have NO functional connection. Fertilisation is external (in water). Development is indirect via a tadpole larva.',
    },
  ],
  quiz: [
    {
      question: 'In male frogs, the vasa efferentia enter the kidneys and open into:',
      options: ['Bidder\'s canal', 'Urinogenital duct', 'Cloaca', 'Seminal vesicle'],
      correctAnswer: 0,
      explanation: 'Vasa efferentia (10-12 in number) arise from the testes, enter the kidneys on their side and open into Bidder\'s canal.',
    },
    {
      question: 'Which is a unique feature of the frog\'s circulatory system compared to humans?',
      options: ['Presence of a closed circulatory system', 'Presence of a 4-chambered heart', 'Presence of nucleated red blood cells', 'Absence of a hepatic portal system'],
      correctAnswer: 2,
      explanation: 'Frogs have nucleated red blood cells, whereas mature mammalian (human) RBCs are enucleated.',
    },
    {
      question: 'What is the function of the cloaca in frogs?',
      options: ['It is exclusively for the passage of urine.', 'It acts as a common passage for faeces, urine, and sperms/ova.', 'It is the site of internal fertilisation.', 'It stores bile temporarily.'],
      correctAnswer: 1,
      explanation: 'The cloaca is a small, median chamber that serves as a single exit for the digestive, excretory, and reproductive tracts.',
    },
    {
      question: 'During aestivation and hibernation, the frog respires through:',
      options: ['Lungs only', 'Buccal cavity only', 'Skin only', 'Gills'],
      correctAnswer: 2,
      explanation: 'During extreme conditions (summer/winter sleep), the frog is inactive and buried in mud/soil. Respiration occurs purely through the moist skin (cutaneous respiration).',
    },
    {
      question: 'Which structure is present in male frogs but absent in female frogs?',
      options: ['Tympanum', 'Copulatory pad on the first digit of forelimbs', 'Cloaca', 'Webbed hind digits'],
      correctAnswer: 1,
      explanation: 'Male frogs can be distinguished by the presence of sound-producing vocal sacs and a copulatory pad on the first digit of the forelimbs, which are absent in females.',
    },
  ],
}

export default {
  id: 'zoo-u2',
  name: 'Unit II — Structural Organisation in Animals (Zoology)',
  chapters: [animalTissues, frog],
}
