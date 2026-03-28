// Zoology — Unit I: Diversity in the Living World
// Chapter: Animal Kingdom

const animalKingdom = {
  id: 'animal-kingdom',
  title: 'Chapter 4: Animal Kingdom',
  notes: [
    {
      concept: 'Basis of Classification: Levels of organisation (Cellular, Tissue, Organ, Organ system), Symmetry (Asymmetrical, Radial, Bilateral), Germ layers (Diploblastic/Triploblastic), Coelom (Acoelomate, Pseudocoelomate, Coelomate).',
      fact: 'Asymmetrical: Porifera. Radial: Coelenterata, Ctenophora, Adult Echinoderms. Bilateral: Platyhelminthes to Chordata (except Adult Echinoderms).',
      tip: 'Larva of Echinodermata has bilateral symmetry, but adult has radial symmetry. A frequent PYQ!',
    },
    {
      concept: 'Coelom: Body cavity lined by mesoderm. Acoelomate (no cavity): Platyhelminthes. Pseudocoelomate (mesoderm in scattered pouches): Aschelminthes. Coelomate: Annelida to Chordata.',
      fact: 'Notochord is a mesodermally derived rod-like structure formed on the dorsal side during embryonic development in some animals (Chordates).',
      tip: 'Do not confuse pseudocoelom with acoelomate. Aschelminthes (roundworms) are the ONLY pseudocoelomates in the syllabus.',
    },
    {
      concept: 'Phylum Porifera (Sponges): Cellular level, marine, mostly asymmetrical. Water transport/canal system: water enters through ostia → spongocoel → osculum.',
      fact: 'Choanocytes (collar cells) line the spongocoel and canals. Skeleton made of spicules or spongin fibres. Hermaphrodite.',
      tip: 'Examples: Sycon (Scypha), Spongilla (Freshwater sponge), Euspongia (Bath sponge). Pathway of water transport is critical for food gathering, respiration, and excretion.',
    },
    {
      concept: 'Phylum Coelenterata (Cnidaria): Tissue level, radial symmetry, diploblastic. Have cnidoblasts (stinging cells) on tentacles/body for anchorage, defense, and capture of prey.',
      fact: 'Two basic body forms: Polyp (sessile, cylindrical — Hydra, Adamsia) and Medusa (umbrella-shaped, free-swimming — Aurelia).',
      tip: 'Metagenesis (Alternation of generation) shown by Obelia: Polyps produce medusae asexually, and medusae form polyps sexually.',
    },
    {
      concept: 'Phylum Ctenophora (Comb jellies/Sea walnuts): Exclusively marine, radial, diploblastic. Possess 8 external rows of ciliated comb plates (help in locomotion).',
      fact: 'Show bioluminescence (property of living organisms to emit light). Digestion both extracellular and intracellular. Hermaphrodite; external fertilisation.',
      tip: 'Examples: Pleurobrachia and Ctenoplana. Cnidoblasts are ABSENT (unlike Coelenterata).',
    },
    {
      concept: 'Phylum Platyhelminthes (Flatworms): Dorso-ventrally flattened body. Organ level, bilateral, triploblastic, acoelomate. Mostly endoparasites (hooks and suckers present).',
      fact: 'Flame cells (protonephridia) help in osmoregulation and excretion. High regeneration capacity (Planaria).',
      tip: 'Examples: Taenia (Tapeworm), Fasciola (Liver fluke). Platyhelminthes are the FIRST triploblastic animals and FIRST bilaterally symmetrical animals.',
    },
    {
      concept: 'Phylum Aschelminthes (Roundworms): Circular cross-section. Organ-system level, bilateral, triploblastic, pseudocoelomate. Free-living, aquatic, terrestrial or parasitic.',
      fact: 'Alimentary canal is complete with a well-developed muscular pharynx. Sexes are separate (dioecious) — females are longer than males.',
      tip: 'Examples: Ascaris (Roundworm), Wuchereria (Filaria worm), Ancylostoma (Hookworm). Muscular pharynx is a unique feature.',
    },
    {
      concept: 'Phylum Annelida: Metamerically segmented (true segmentation, metameres). Coelomate. Longitudinal and circular muscles help in locomotion.',
      fact: 'Aquatic annelids like Nereis possess lateral appendages (parapodia) for swimming. Closed circulatory system. Nephridia help in osmoregulation and excretion.',
      tip: 'Nereis is dioecious, but earthworm (Pheretima) and leech (Hirudinaria) are monoecious. Neural system consists of paired ganglia connected by nerves to a double ventral nerve cord.',
    },
    {
      concept: 'Phylum Arthropoda: Largest phylum (2/3 of all named species on Earth). Jointed appendages, chitinous exoskeleton. Body = Head, thorax, abdomen.',
      fact: 'Respiration by gills, book gills, book lungs, or tracheal system. Open circulatory system. Excretion by Malpighian tubules. Sensory organs: antennae, eyes (compound/simple), statocysts.',
      tip: 'Economically important: Apis (Honeybee), Bombyx (Silkworm), Laccifer (Lac insect). Vectors: Anopheles, Culex, Aedes. Gregarious pest: Locusta. Living fossil: Limulus (King crab).',
    },
    {
      concept: 'Phylum Mollusca & Echinodermata: Mollusca (2nd largest): Calcareous shell, unsegmented with distinct head, muscular foot, visceral hump. Mantle, radula (rasping organ). Echinodermata: Spiny bodied, water vascular system (locomotion, capture/transport of food, respiration).',
      fact: 'Molluscs have gills (ctenidia) in the mantle cavity for respiration/excretion. Echinoderms lack an excretory system.',
      tip: 'Mollusca examples: Pila (Apple snail), Pinctada (Pearl oyster), Sepia (Cuttlefish). Echinoderm examples: Asterias (Starfish), Echinus (Sea urchin), Antedon (Sea lily).',
    },
    {
      concept: 'Phylum Chordata Characteristics: 1. Notochord, 2. Dorsal hollow nerve cord, 3. Pharyngeal gill slits, 4. Post-anal tail, 5. Closed circulatory system, 6. Ventral heart. Divided into: Urochordata, Cephalochordata, Vertebrata.',
      fact: 'In Urochordata, notochord is present only in larval tail (Ascidia, Salpa, Doliolum). In Cephalochordata, it extends from head to tail and is persistent throughout life (Branchiostoma).',
      tip: 'Vertebrates possess notochord during embryonic period; it is replaced by a cartilaginous or bony vertebral column in adults. Thus, all vertebrates are chordates, but all chordates are not vertebrates.',
    },
    {
      concept: 'Classes of Vertebrates: Cyclostomata (jawless, parasitic on fishes, sucking circular mouth), Chondrichthyes (cartilaginous, placoid scales, no air bladder, internal fertilisation), Osteichthyes (bony, cycloid scales, operculum, air bladder, external fertilisation).',
      fact: 'Amphibians: 3-chambered heart, moist skin, cold-blooded. Reptiles: Dry cornified skin, mostly 3-chambered heart (Crocodile has 4), cold-blooded. Aves: Feathers, pneumatic bones, 4-chambered heart, warm-blooded. Mammals: Mammary glands, hair, 4-chambered heart.',
      tip: 'Air bladder in Osteichthyes regulates buoyancy so they don\'t have to swim constantly. Chondrichthyes (like sharks) must swim constantly to avoid sinking.',
    },
  ],
  quiz: [
    {
      question: 'Which of the following is an exclusive feature of Ctenophora?',
      options: ['Cnidoblasts', 'Water vascular system', 'Comb plates for locomotion', 'Flame cells'],
      correctAnswer: 2,
      explanation: 'Ctenophores (comb jellies) have 8 external rows of ciliated comb plates which help in locomotion. Cnidoblasts are found in Coelenterata.',
    },
    {
      question: 'The presence of a muscular pharynx is a characteristic feature of:',
      options: ['Platyhelminthes', 'Aschelminthes', 'Annelida', 'Arthropoda'],
      correctAnswer: 1,
      explanation: 'Aschelminthes (roundworms) possess a complete alimentary canal with a well-developed muscular pharynx.',
    },
    {
      question: 'Which of the following statements about Echinodermata is INCORRECT?',
      options: ['Adults show radial symmetry, larvae show bilateral symmetry.', 'They possess a water vascular system.', 'They have a well-developed excretory system.', 'They are exclusively marine.'],
      correctAnswer: 2,
      explanation: 'Echinoderms lack a dedicated excretory system. Waste diffuses out through the water vascular system.',
    },
    {
      question: 'The distinguishing feature of all chordates is NOT:',
      options: ['Dorsal hollow nerve cord', 'Pharyngeal gill slits', 'Ventral heart', 'Vertebral column'],
      correctAnswer: 3,
      explanation: 'All chordates possess a notochord, dorsal hollow nerve cord, pharyngeal gill slits, and post-anal tail at some life stage. Only vertebrates possess a vertebral column.',
    },
    {
      question: 'Match the excretory organ with the correct phylum: Flame cells are found in ________.',
      options: ['Arthropoda', 'Platyhelminthes', 'Annelida', 'Aschelminthes'],
      correctAnswer: 1,
      explanation: 'Flame cells (protonephridia) are found in Platyhelminthes and help in osmoregulation and excretion. Arthropods have Malpighian tubules; Annelids have nephridia.',
    },
    {
      question: 'Metagenesis (alternation of generation) between polyp and medusa forms is shown by:',
      options: ['Hydra', 'Aurelia', 'Obelia', 'Adamsia'],
      correctAnswer: 2,
      explanation: 'Obelia exhibits metagenesis. Polyps produce medusae asexually, and medusae produce polyps sexually. Hydra and Adamsia are only polyps; Aurelia is only medusa.',
    },
    {
      question: 'Chondrichthyes (cartilaginous fishes) have to swim constantly to avoid sinking because:',
      options: ['They lack pelvic fins', 'They have a heavy exoskeleton', 'They lack an air bladder', 'They have placoid scales'],
      correctAnswer: 2,
      explanation: 'Unlike bony fishes (Osteichthyes), cartilaginous fishes lack an air bladder (which regulates buoyancy), so they must swim continuously.',
    },
    {
      question: 'Which of the following animals is a "living fossil"?',
      options: ['Limulus (King crab)', 'Laccifer (Lac insect)', 'Locusta (Locust)', 'Bombyx (Silkworm)'],
      correctAnswer: 0,
      explanation: 'Limulus, commonly known as the king crab, is an arthropod considered a living fossil because it has remained virtually unchanged for millions of years.',
    },
    {
      question: 'In Porifera, the pathway of water transport is:',
      options: ['Osculum → Spongocoel → Ostia', 'Ostia → Spongocoel → Osculum', 'Spongocoel → Ostia → Osculum', 'Ostia → Osculum → Spongocoel'],
      correctAnswer: 1,
      explanation: 'Water enters through minute pores (ostia) in the body wall into a central cavity (spongocoel), from where it goes out through the osculum.',
    },
    {
      question: 'Which class of tetrapods is characterized by pneumatic bones?',
      options: ['Amphibia', 'Reptilia', 'Aves', 'Mammalia'],
      correctAnswer: 2,
      explanation: 'Aves (birds) possess pneumatic (hollow) long bones filled with air cavities to reduce body weight for flight flight.',
    },
  ],
}

export default {
  id: 'zoo-u1',
  name: 'Unit I — Diversity in the Living World (Zoology)',
  chapters: [animalKingdom],
}
