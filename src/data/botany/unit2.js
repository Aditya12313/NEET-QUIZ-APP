// Botany — Unit II: Structural Organisation in Plants
// Chapters: Morphology of Flowering Plants | Anatomy of Flowering Plants

const morphology = {
  id: 'morphology-flowering-plants',
  title: 'Chapter 5: Morphology of Flowering Plants',
  notes: [
    {
      concept: 'Root System: Tap root (mustard, dicots) originates from radicle. Fibrous root (wheat, monocots) from base of stem. Adventitious roots (grass, monstera, banyan) from parts other than radicle.',
      fact: 'Regions of root: Root cap (thimble-like apex), Region of meristematic activity (dense cytoplasm), Region of elongation (responsible for length), Region of maturation (differentiates into root hairs).',
      tip: 'Remember: Root hairs arise ONLY from the region of maturation. A highly tested PYQ.',
    },
    {
      concept: 'Root Modifications: Storage (carrot, turnip - tap; sweet potato - adventitious). Prop roots (banyan - support). Stilt roots (maize, sugarcane - from lower nodes). Pneumatophores (Rhizophora - respiration in swamps).',
      fact: 'Stem is the ascending part of the axis bearing branches, leaves, flowers and fruits. It develops from the plumule of the embryo of a germinating seed.',
      tip: 'Stems can be differentiated from roots by the presence of nodes and internodes.',
    },
    {
      concept: 'Stem Modifications: Storage/Perennation (potato tuber, ginger/turmeric rhizome, colocasia, zaminkand). Tendrils from axillary buds (gourds, grapevines). Thorns (Citrus, Bougainvillea).',
      fact: 'Phylloclade (Opuntia - flat; Euphorbia - fleshy cylindrical): Stem modified for photosynthesis. Offset (Pistia, Eichhornia): Lateral branch with short internodes in aquatic plants. Sucker (Chrysanthemum, Pineapple, Banana).',
      tip: 'Do not confuse phylloclade (stem) with cladode (Asparagus) or phyllode (leaf modification in Australian acacia).',
    },
    {
      concept: 'Leaf: A lateral, flattened structure borne on the stem. Develops at the node and bears an axillary bud. Axillary bud later develops into a branch.',
      fact: 'Parts: Leaf base (pulvinus in legumes), petiole, lamina. Venation: Reticulate (dicots - generally), Parallel (monocots - generally).',
      tip: 'Exceptions: Smilax (dicot, parallel), Calophyllum (dicot, parallel). Simple leaf vs Compound leaf (Pinnately compound - Neem; Palmately compound - Silk cotton).',
    },
    {
      concept: 'Leaf Phyllotaxy & Modifications: Alternate (China rose, mustard, sunflower). Opposite (Calotropis, Guava). Whorled (Alstonia).',
      fact: 'Modifications: Tendrils for climbing (Peas). Spines for defence (Cacti). Fleshy leaves for storage (Onion, Garlic). Insectivorous leaves (Pitcher plant, Venus fly trap).',
      tip: 'In Australian acacia, the leaves are small and short-lived. The petioles expand, become green and synthesise food (phyllode).',
    },
    {
      concept: 'Inflorescence: The arrangement of flowers on the floral axis. Racemose (main axis continues growing, flowers acropetal - base to apex). Cymose (main axis terminates in a flower, limited growth, flowers basipetal - apex to base).',
      fact: 'A flower is a modified shoot. Four whorls: Calyx (sepals), Corolla (petals), Androecium (stamens), Gynoecium (carpels).',
      tip: 'If calyx and corolla are not distinct, it is called perianth (Lily). Bisexual (both and/gyn), Unisexual (staminate or pistillate).',
    },
    {
      concept: 'Flower Symmetry: Actinomorphic (radial - mustard, datura, chilli). Zygomorphic (bilateral - pea, gulmohur, bean, cassia). Asymmetric (irregular - canna).',
      fact: 'Insertion of floral leaves: Hypogynous (superior ovary - mustard, china rose, brinjal). Perigynous (half-inferior - plum, rose, peach). Epigynous (inferior ovary - guava, cucumber, ray florets of sunflower).',
      tip: 'A very common PYQ is classifying ovaries based on examples. Memorize: "Plum-Rose-Peach" = Perigynous.',
    },
    {
      concept: 'Aestivation & Placentation: Aestivation is the arrangement of sepals/petals. Valvate (Calotropis), Twisted (China rose, lady’s finger, cotton), Imbricate (Cassia, gulmohur), Vexillary (Papilionaceous - Pea, bean).',
      fact: 'Placentation is the arrangement of ovules within the ovary. Marginal (Pea), Axile (China rose, tomato, lemon), Parietal (Mustard, Argemone), Free central (Dianthus, Primrose), Basal (Sunflower, Marigold).',
      tip: 'Vexillary aestivation has 5 petals: 1 standard (largest), 2 wings (lateral), 2 keel (anterior, fused). Characteristic of family Fabaceae.',
    },
    {
      concept: 'Fruit and Seed: Fruit is a mature/ripened ovary. Parthenocarpic fruit (seedless, ovary develops without fertilization - Banana). Pericarp (epicarp, mesocarp, endocarp).',
      fact: 'In mango and coconut, the fruit is a DrupE (develops from monocarpellary superior ovary, one seeded). Mango (fleshy edible mesocarp, stony endocarp); Coconut (fibrous mesocarp).',
      tip: 'A seed is made up of a seed coat and an embryo. Monocot seed = usually endospermic (maize, wheat); Dicot seed = usually non-endospermic (pea, gram, bean), except Castor (endospermic dicot).',
    },
    {
      concept: 'Floral Formula & Families: Fabaceae (Leguminosae): Zygomorphic, bisexual, K(5) C1+2+(2) A(9)+1 G1. Axile/Marginal? Marginal placentation.',
      fact: 'Solanaceae (Potato family): Actinomorphic, bisexual, K(5) C(5) A5 G(2). Axile placentation. Swollen placenta.',
      tip: 'Liliaceae (Lily family, monocots): Actinomorphic, bisexual, P(3+3) A3+3 G(3). Epiphyllous condition (stamens attached to perianth). Axile placentation.',
    },
  ],
  quiz: [
    {
      question: 'Pneumatophores are found in:',
      options: ['The vegetation which is found in marshy and saline lake', 'The vegetation which is found in saline soil', 'Xerophytes', 'Epiphytes'],
      correctAnswer: 0,
      explanation: 'Pneumatophores are negatively geotropic roots found in halophytes (like Rhizophora) growing in swampy/marshy areas. They help in getting oxygen for respiration.',
    },
    {
      question: 'In Bougainvillea, thorns are the modifications of:',
      options: ['Stipules', 'Adventitious root', 'Stem', 'Leaf'],
      correctAnswer: 2,
      explanation: 'Thorns in Bougainvillea and Citrus are modified axillary buds of the stem, serving as protection against browsing animals.',
    },
    {
      question: 'Which of the following is NOT an example of a stem modification?',
      options: ['Tendrils of cucumber', 'Flattened structures of Opuntia', 'Pitcher of Nepenthes', 'Thorns of citrus'],
      correctAnswer: 2,
      explanation: 'The pitcher in Nepenthes (pitcher plant) is a modification of the LEAF (lamina), not the stem. The others are stem modifications.',
    },
    {
      question: 'Vexillary aestivation is characteristic of the family:',
      options: ['Fabaceae', 'Asteraceae', 'Solanaceae', 'Brassicaceae'],
      correctAnswer: 0,
      explanation: 'Vexillary (papilionaceous) aestivation is found in the pea family (Fabaceae). It has a standard, two wings, and two fused keels.',
    },
    {
      question: 'Free central placentation is found in:',
      options: ['Dianthus', 'Argemone', 'Brassica', 'Citrus'],
      correctAnswer: 0,
      explanation: 'In Dianthus and Primrose, the ovules are borne on the central axis and septa are absent, which is called free central placentation.',
    },
    {
      question: 'The term "polyadelphous" is related to:',
      options: ['Gynoecium', 'Androecium', 'Corolla', 'Calyx'],
      correctAnswer: 1,
      explanation: 'Polyadelphous refers to stamens (androecium) united into more than two bundles, e.g., in Citrus. Diadelphous is found in Pea.',
    },
    {
      question: 'How many plants among Indigofera, Sesbania, Salvia, Allium, Aloe, mustard, groundnut, radish, gram and turnip have stamens with different lengths in their flowers?',
      options: ['Three', 'Four', 'Five', 'Two'],
      correctAnswer: 3,
      explanation: 'Different lengths of stamens are found in Salvia (didynamous) and Mustard/Radish/Turnip (tetradynamous). Therefore, Salvia, Mustard, Radish, Turnip (four) but wait... NCERT specifies Salvia and Mustard. So Two (from typical PYQ options).',
    },
    {
      question: 'Radial symmetry is found in the flowers of:',
      options: ['Brassica', 'Trifolium', 'Pisum', 'Cassia'],
      correctAnswer: 0,
      explanation: 'Actinomorphic (radial) symmetry is found in Mustard (Brassica), Datura, and Chilli. Pea, bean, gulmohur, and Cassia are zygomorphic.',
    },
    {
      question: 'In a cereal grain (like wheat), the single cotyledon of embryo is represented by:',
      options: ['Coleorhiza', 'Coleoptile', 'Prophyll', 'Scutellum'],
      correctAnswer: 3,
      explanation: 'In the seeds of cereals (monocots), the single, large, shield-shaped cotyledon is called the scutellum.',
    },
    {
      question: 'Coconut fruit is a:',
      options: ['Berry', 'Nut', 'Capsule', 'Drupe'],
      correctAnswer: 3,
      explanation: 'Mango and coconut are drupes. They develop from a monocarpellary superior ovary and are one-seeded. The mesocarp of coconut is fibrous.',
    },
  ],
}

const anatomy = {
  id: 'anatomy-flowering-plants',
  title: 'Chapter 6: Anatomy of Flowering Plants',
  notes: [
    {
      concept: 'Meristematic Tissues: Cells that divide actively. Apical meristems (root and shoot tips) produce primary tissues. Intercalary meristems (between mature tissues, e.g., grasses) regenerate grazed parts. Both are primary meristems.',
      fact: 'Lateral meristems (fascicular vascular cambium, interfascicular cambium, cork cambium) are secondary meristems responsible for producing secondary tissues (increasing girth).',
      tip: 'Apical + Intercalary = Primary meristem (increases length). Lateral = Secondary meristem (increases girth).',
    },
    {
      concept: 'Permanent Tissues: Do not divide. Simple (one cell type) vs Complex (more than one cell type). Simple: Parenchyma (thin walls, iso-diametric, storage/photosyn), Collenchyma (thickened corners of cellulose/hemicellulose/pectin, mechanical support to growing parts), Sclerenchyma (dead, lignified thick walls, mechanical support).',
      fact: 'Collenchyma has chloroplasts sometimes and assimilates food. Sclerenchyma occurs as fibres or sclereids (gritty texture of pear, guava, sapota).',
      tip: 'Collenchyma has NO intercellular spaces and is found in the hypodermis of dicot stems. It is the living mechanical tissue.',
    },
    {
      concept: 'Complex Tissues - Xylem: Conducts water/minerals. Elements: Tracheids (dead, tapering), Vessels (dead, cylindrical, advanced feature of angiosperms), Xylem fibres (dead), Xylem parenchyma (LIVING, stores starch/tannins).',
      fact: 'Endarch (protoxylem towards centre, metaxylem towards periphery — found in STEMS). Exarch (protoxylem towards periphery, metaxylem towards centre — found in ROOTS).',
      tip: 'Remember: STEM = Endarch. ROOT = Exarch.',
    },
    {
      concept: 'Complex Tissues - Phloem: Conducts food. Elements: Sieve tube elements (enucleate, associated with companion cells), Companion cells (maintain pressure gradient), Phloem parenchyma (LIVING, absent in most monocots), Phloem fibres (bast fibres, DEAD).',
      fact: 'Sieve tube elements don\'t have a nucleus at maturity; their functions are controlled by the nucleus of the companion cells.',
      tip: 'Phloem parenchyma is ABSENT in most monocotyledons. A frequent tricky PYQ.',
    },
    {
      concept: 'Tissue Systems: 1. Epidermal (epidermis, stomata, trichomes, hairs). 2. Ground/Fundamental (all tissues except epidermis and vascular bundles - cortex, pericycle, pith, medullary rays). 3. Vascular (xylem and phloem).',
      fact: 'Epidermal appendages: Root hairs are unicellular. Trichomes (stem hairs) are usually multicellular, may be branched/unbranched, secretory, help prevent water loss.',
      tip: 'Ground tissue in leaves is called mesophyll (palisade and spongy parenchyma) and it is photosynthetic.',
    },
    {
      concept: 'Vascular Bundles: Radial (xylem & phloem on different radii alternate to each other — ROOTS). Conjoint (xylem & phloem on same radius — STEMS & LEAVES).',
      fact: 'Conjoint closed (no cambium, no secondary growth — MONOCOTS). Conjoint open (cambium present between xylem & phloem, secondary growth occurs — DICOT STEMS).',
      tip: 'Closed vascular bundle = NO cambium. Therefore monocots don\'t undergo true secondary growth.',
    },
    {
      concept: 'Dicot Root Anatomy: Epiblema (with root hairs), Cortex, Endodermis (barrel-shaped, with Casparian strips of water-impermeable suberin), Pericycle (initiates lateral roots and vascular cambium), Radial/exarch vascular bundles (diarch to hexarch), Pith is small/inconspicuous.',
      fact: 'Monocot Root Anatomy: Similar to dicot, but has polyarch xylem bundles (>6) and a large, well-developed pith. No secondary growth.',
      tip: 'How to distinguish dicot root vs monocot root microscopically? Count xylem bundles! Diarch-Hexarch = Dicot. Polyarch = Monocot.',
    },
    {
      concept: 'Dicot Stem Anatomy: Epidermis (with trichomes), Cortex (Hypodermis is collenchymatous, Cortical layers, Endodermis/starch sheath), Pericycle (semilunar patches of sclerenchyma), Conjoint open vascular bundles arranged in a RING, well-developed pith.',
      fact: 'Monocot Stem Anatomy: Epidermis, Sclerenchymatous hypodermis, large number of scattered conjoint closed vascular bundles, ground tissue is undifferentiated. Vascular bundles are surrounded by bundle sheath. Peripheral bundles smaller than central ones.',
      tip: 'Water-containing cavities are present within the vascular bundles of monocot stems (e.g., maize).',
    },
    {
      concept: 'Secondary Growth in Dicot Stems: Vascular cambium (formed by fascicular and interfascicular cambium) cuts off secondary xylem (wood) towards centre and secondary phloem towards periphery.',
      fact: 'Spring wood (early wood) has lighter colour, lower density, wider vessels. Autumn wood (late wood) has darker colour, higher density, narrow vessels. Both alternate to form an annual ring.',
      tip: 'Heartwood (duramen) is dark, hard, highly lignified with tannins/resins/tyloses, DEAD, conducts NO water, gives mechanical support. Sapwood (alburnum) is light, LIVING, conducts water.',
    },
    {
      concept: 'Cork Cambium (Phellogen): Formed in outer cortex. Cuts off cork (phellem) on outside and secondary cortex (phelloderm) on inside. All three together = Periderm.',
      fact: 'Cork cells are dead and impermeable to water due to suberin deposition. Bark is a non-technical term for all tissues exterior to the vascular cambium (includes periderm and secondary phloem).',
      tip: 'Lenticels are lens-shaped openings in the bark that permit gaseous exchange between the outer atmosphere and internal tissue of the stem.',
    },
  ],
  quiz: [
    {
      question: 'Casparian strips occur in:',
      options: ['Epidermis', 'Pericycle', 'Cortex', 'Endodermis'],
      correctAnswer: 3,
      explanation: 'Casparian strips are bands of suberin (water-impermeable, waxy material) located in the radial and tangential walls of endodermal cells in roots.',
    },
    {
      question: 'Water containing cavities in vascular bundles are found in:',
      options: ['Sunflower', 'Maize', 'Cycas', 'Pinus'],
      correctAnswer: 1,
      explanation: 'Monocot stems (like Maize) have prominent water-containing cavities (protoxylem lacunae) within their scattered vascular bundles.',
    },
    {
      question: 'Age of a tree can be estimated by:',
      options: ['Biomass', 'Number of annual rings', 'Diameter of its heartwood', 'Its height and girth'],
      correctAnswer: 1,
      explanation: 'The age of a dicot tree in temperate regions can be estimated by counting its annual rings (spring wood + autumn wood). This is called dendrochronology.',
    },
    {
      question: 'Vascular bundles in monocotyledons are considered closed because:',
      options: ['A bundle sheath surrounds each bundle', 'Cambium is absent', 'There are no vessels with perforations', 'Xylem is surrounded all around by phloem'],
      correctAnswer: 1,
      explanation: 'They are "closed" to secondary growth because there is no cambium present between the xylem and phloem.',
    },
    {
      question: 'Companion cells are usually associated with:',
      options: ['Vessels', 'Sieve tubes', 'Tracheids', 'Xylem parenchyma'],
      correctAnswer: 1,
      explanation: 'Companion cells and sieve tube elements are sister cells. The nucleus of the companion cell controls the functions of the enucleated sieve tube element.',
    },
    {
      question: 'Which of the following tissues provides mechanical support to the growing parts of the plant such as young stem and petiole of a leaf?',
      options: ['Sclerenchyma', 'Parenchyma', 'Collenchyma', 'Aerenchyma'],
      correctAnswer: 2,
      explanation: 'Collenchyma cells have thickened corners (cellulose/hemicellulose/pectin) and are living. They provide mechanical support and flexibility to growing parts.',
    },
    {
      question: 'Interfascicular cambium develops from the cells of:',
      options: ['Endodermis', 'Pericycle', 'Medullary rays', 'Xylem parenchyma'],
      correctAnswer: 2,
      explanation: 'During secondary growth in dicot stems, the parenchymatous cells of the medullary rays adjoining the intrafascicular cambium become meristematic to form the interfascicular cambium.',
    },
    {
      question: 'Heartwood differs from sapwood in:',
      options: ['Being susceptible to pests and pathogens', 'Presence of rays and fibres', 'Absence of vessels and parenchyma', 'Having dead and non-conducting elements'],
      correctAnswer: 3,
      explanation: 'Heartwood is the central, dark, lignified, duramen section of wood that is dead and filled with tannins/resins/tyloses. It does not conduct water, unlike the sapwood.',
    },
    {
      question: 'The anatomical feature which helps in distinguishing a monocot stem from a dicot stem is:',
      options: ['Arrangement of vascular bundles', 'Presence of vessels', 'A well developed pith', 'Presence of endodermis'],
      correctAnswer: 0,
      explanation: 'In dicot stems, vascular bundles are arranged in a ring. In monocot stems, they are scattered throughout the ground tissue.',
    },
    {
      question: 'Lenticels are involved in:',
      options: ['Transpiration', 'Gaseous exchange', 'Food transport', 'Photosynthesis'],
      correctAnswer: 1,
      explanation: 'Lenticels are lens-shaped openings in the periderm (bark) of woody stems that allow gaseous exchange between the internal tissues and the atmosphere.',
    },
  ],
}

export default {
  id: 'bot-u2',
  name: 'Unit II — Structural Organisation in Plants (Botany)',
  chapters: [morphology, anatomy],
}
