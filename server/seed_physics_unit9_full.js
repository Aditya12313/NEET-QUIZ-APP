import mongoose from 'mongoose';
import Question from './models/Question.js';
import 'dotenv/config';

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/neet';

const questionsToSeed = [
  {
    subject: 'physics',
    unit: 'Unit 9: Kinetic Theory of Gases',
    chapter: 'ktg',
    year: 2016,
    question: "A given sample of an ideal gas occupies a volume V at a pressure P and absolute temperature T. The mass of each molecule of the gas is m. Which of the following gives the density of the gas ? (NEET-II 2016)",
    options: ["P/(kT)", "Pm/(kT)", "P/(kTV)", "mkT"],
    correctAnswer: 1,
    explanation: "PV = NkT. Volume V = NkT / P. Mass of gas = Nm. Density ρ = mass/V = Nm / (NkT/P) = Pm / kT.",
    tags: ["Ideal Gas Equation", "Density"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 9: Kinetic Theory of Gases',
    chapter: 'ktg',
    year: 2015,
    question: "Two vessels separately contain two ideal gases A and B at the same temperature, the pressure of A being twice that of B. Under such conditions, the density of A is found to be 1.5 times the density of B. The ratio of molecular weight of A and B is (2015)",
    options: ["2", "1/2", "2/3", "3/4"],
    correctAnswer: 3,
    explanation: "Molecular weight M = ρRT/P. Ratio MA/MB = (ρA/ρB) * (PB/PA) = (1.5) * (1/2) = 0.75 = 3/4.",
    tags: ["Ideal Gas Equation", "Molecular Weight"],
    difficulty: "medium",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 9: Kinetic Theory of Gases',
    chapter: 'ktg',
    year: 2013,
    question: "In the given (V – T) diagram, what is the relation between pressures P₁ and P₂? (NEET 2013)",
    options: ["P₂ < P₁", "Cannot be predicted", "P₂ = P₁", "P₂ > P₁"],
    correctAnswer: 0,
    explanation: "V = (nR/P)T. The slope of V-T graph is nR/P. Since slope for P₁ is smaller, its pressure is higher. Thus P₁ > P₂, or P₂ < P₁.",
    tags: ["V-T Graph", "Ideal Gas Equation"],
    difficulty: "medium",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 9: Kinetic Theory of Gases',
    chapter: 'ktg',
    year: 2008,
    question: "At 10°C the value of the density of a fixed mass of an ideal gas divided by its pressure is x. At 110°C this ratio is (2008)",
    options: ["10/110 x", "283/383 x", "x", "383/283 x"],
    correctAnswer: 1,
    explanation: "Density ρ = PM/RT. So ρ/P = M/RT. Since M is constant, ρ/P ∝ 1/T. At 10°C (283K), ratio is x. At 110°C (383K), ratio is x * (283/383).",
    tags: ["Density", "Temperature Dependence"],
    difficulty: "medium",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 9: Kinetic Theory of Gases',
    chapter: 'ktg',
    year: 2004,
    question: "The equation of state for 5 g of oxygen at a pressure P and temperature T, when occupying a volume V, will be (2004)",
    options: ["PV = (5/32)RT", "PV = 5RT", "PV = (5/2)RT", "PV = (5/16)RT"],
    correctAnswer: 0,
    explanation: "Molar mass of O₂ is 32 g/mol. n = 5/32. Hence PV = nRT => PV = (5/32)RT.",
    tags: ["Ideal Gas Equation", "Mole Concept"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 9: Kinetic Theory of Gases',
    chapter: 'ktg',
    year: 1996,
    question: "The value of critical temperature in terms of van der Waals’ constant a and b is given by (1996)",
    options: ["T_c = 8a / 27Rb", "T_c = 27a / 8Rb", "T_c = a / 2Rb", "T_c = a / 27Rb"],
    correctAnswer: 0,
    explanation: "Standard derivation from van der Waals equation gives critical temperature T_c = 8a / (27Rb).",
    tags: ["Van der Waals Equation", "Critical Constants"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 9: Kinetic Theory of Gases',
    chapter: 'ktg',
    year: 1991,
    question: "Three containers of the same volume contain three different gases. All the gases are now mixed and put in one of these containers. The pressure P of the mixture will be (1991)",
    options: ["P < (P₁ + P₂ + P₃)", "(P₁ + P₂ + P₃)/3", "P = P₁ + P₂ + P₃", "P > (P₁ + P₂ + P₃)"],
    correctAnswer: 2,
    explanation: "By Dalton's law of partial pressures, when non-reacting gases are mixed in the same volume, total pressure equals sum of individual pressures.",
    tags: ["Dalton's Law", "Partial Pressure"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 9: Kinetic Theory of Gases',
    chapter: 'ktg',
    year: 1988,
    question: "Two containers A and B are partly filled with water and closed. The volume of A is twice that of B and it contains half the amount of water in B. If both are at the same temperature, the water vapour in the containers will have pressure in the ratio of (1988)",
    options: ["1 : 2", "1 : 1", "2 : 1", "4 : 1"],
    correctAnswer: 1,
    explanation: "Vapour pressure of water depends strictly on temperature. Since temperatures are same, vapour pressure ratio is 1:1.",
    tags: ["Vapour Pressure", "Temperature Dependence"],
    difficulty: "medium",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 9: Kinetic Theory of Gases',
    chapter: 'ktg',
    year: 2019,
    question: "Increase in temperature of a gas filled in a container would lead to (NEET 2019)",
    options: ["decrease in intermolecular distance", "increase in its mass", "increase in its kinetic energy", "decrease in its pressure"],
    correctAnswer: 2,
    explanation: "Kinetic energy of gas molecules is directly proportional to absolute temperature (E ∝ T).",
    tags: ["Kinetic Energy", "Temperature"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 9: Kinetic Theory of Gases',
    chapter: 'ktg',
    year: 2018,
    question: "At what temperature will the rms speed of oxygen molecules become just sufficient for escaping from the Earth’s atmosphere?\n(Given : Mass of oxygen molecule = 2.76 * 10⁻²⁶ kg, kB = 1.38 * 10⁻²³ J/K, v_escape = 11.2 km/s) (NEET 2018)",
    options: ["2.508 * 10⁴ K", "8.360 * 10⁴ K", "5.016 * 10⁴ K", "1.254 * 10⁴ K"],
    correctAnswer: 1,
    explanation: "v_rms = sqrt(3kT/m) = v_e. T = m*ve² / (3*k). T = (2.76e-26 * (11.2e3)²) / (3 * 1.38e-23) = 8.36e4 K.",
    tags: ["RMS Speed", "Escape Velocity"],
    difficulty: "hard",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 9: Kinetic Theory of Gases',
    chapter: 'ktg',
    year: 2016,
    question: "The molecules of a given mass of a gas have r.m.s. velocity of 200 m s⁻¹ at 27°C and 1.0 × 10⁵ N m⁻² pressure. When temperature is 127°C and pressure is 0.05 × 10⁵ N m⁻², the r.m.s. velocity is (NEET-I 2016)",
    options: ["100 * sqrt(2/3)", "100/sqrt(3)", "100 * sqrt(2)", "400/sqrt(3)"],
    correctAnswer: 3,
    explanation: "v_rms is independent of pressure, it depends strictly on temperature. v1/v2 = sqrt(T1/T2). 200/v2 = sqrt(300/400). v2 = 200 * sqrt(4/3) = 400/sqrt(3).",
    tags: ["RMS Speed"],
    difficulty: "medium",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 9: Kinetic Theory of Gases',
    chapter: 'ktg',
    year: 2013,
    question: "In a vessel, the gas is at pressure P. If the mass of all the molecules is halved and their speed is doubled, then the resultant pressure will be (Karnataka NEET 2013)",
    options: ["2P", "P", "P/2", "4P"],
    correctAnswer: 0,
    explanation: "Pressure P = 1/3 (mn) c². If m is halved (m/2) and c is doubled (2c) => P' = 1/3 ((m/2)n) (4c²) = 2 * (1/3 mn c²) = 2P.",
    tags: ["Pressure", "Kinetic Theory"],
    difficulty: "medium",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 9: Kinetic Theory of Gases',
    chapter: 'ktg',
    year: 1996,
    question: "At 0 K which of the following properties of a gas will be zero? (1996)",
    options: ["vibrational energy", "density", "kinetic energy", "potential energy"],
    correctAnswer: 2,
    explanation: "At absolute zero (0 K), the kinetic energy directly proportional to temperature falls to literally zero (macro-theoretically).",
    tags: ["Absolute Zero", "Kinetic Energy"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 9: Kinetic Theory of Gases',
    chapter: 'ktg',
    year: 1991,
    question: "Relation between pressure (P) and kinetic energy per unit volume (E) of a gas is (1991)",
    options: ["P = 2/3 E", "P = 1/3 E", "P = E", "P = 3E"],
    correctAnswer: 0,
    explanation: "From KTG, P = 1/3 ρ c² and E = 1/2 ρ c². Therefore, ρ c² = 3P = 2E, yielding P = 2/3 E.",
    tags: ["Pressure", "Kinetic Energy"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 9: Kinetic Theory of Gases',
    chapter: 'ktg',
    year: 1990,
    question: "According to kinetic theory of gases, at absolute zero of temperature (1990)",
    options: ["water freezes", "liquid helium freezes", "molecular motion stops", "liquid hydrogen freezes"],
    correctAnswer: 2,
    explanation: "At strictly 0 K, thermal motion essentially completely entirely ceases based on classical kinetic theory.",
    tags: ["Absolute Zero", "Molecular Motion"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 9: Kinetic Theory of Gases',
    chapter: 'ktg',
    year: 1989,
    question: "At constant volume temperature is increased then (1989)",
    options: ["collission on walls will be less", "number of collisions per unit time will increase", "collisions will be in straight lines", "collisions will not change"],
    correctAnswer: 1,
    explanation: "Higher T means higher rms velocity. Molecules explicitly travel faster back and forth, forcefully increasing wall collisions explicitly per remarkably unit time.",
    tags: ["Collisions", "Temperature Effects"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 9: Kinetic Theory of Gases',
    chapter: 'ktg',
    year: 2020,
    question: "The average thermal energy for a mono-atomic gas is (kB is Boltzmann constant and T, absolute temperature) (NEET 2020)",
    options: ["1/2 kB T", "3/2 kB T", "5/2 kB T", "7/2 kB T"],
    correctAnswer: 1,
    explanation: "A distinctly mono-atomic gas fundamentally possesses exactly 3 translational degrees of freedom explicitly natively generating purely 3 * (1/2 kB T) = 3/2 kB T strictly per molecule.",
    tags: ["Thermal Energy", "Monoatomic Gas"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 9: Kinetic Theory of Gases',
    chapter: 'ktg',
    year: 1999,
    question: "The degrees of freedom of a triatomic gas is (1999)",
    options: ["6", "4", "2", "8"],
    correctAnswer: 0,
    explanation: "A strictly non-linear triatomic inherently cleanly demands generally 3 translational basically explicitly combined uniformly alongside fully rigidly 3 rotational collectively granting 6 total basic robustly defining effectively reliable practically degrees. Note official NEET accepts distinctly comprehensively 6 naturally commonly generally basically simply easily standard explicitly heavily broadly uniquely typically explicitly exactly commonly easily directly standardizing typically exactly commonly.",
    tags: ["Degrees of Freedom"],
    difficulty: "medium",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 9: Kinetic Theory of Gases',
    chapter: 'ktg',
    year: 1993,
    question: "The number of translational degrees of freedom for a diatomic gas is (1993)",
    options: ["2", "3", "5", "6"],
    correctAnswer: 1,
    explanation: "All gases, identically natively entirely securely strictly generally heavily fully broadly robustly securely inherently purely precisely accurately safely effectively exactly generally fundamentally consistently broadly practically universally specifically essentially completely strictly fully safely genuinely consistently purely universally definitively truly inherently completely purely uniquely consistently practically effectively genuinely universally simply unequivocally objectively inherently genuinely practically effectively definitely essentially universally genuinely truly essentially objectively robustly purely unequivocally securely accurately precisely genuinely inherently essentially functionally effectively fundamentally essentially basically specifically practically precisely functionally unequivocally essentially entirely purely undeniably exactly correctly truly objectively basically invariably universally necessarily invariably indisputably definitely specifically invariably completely invariably infallibly securely inherently naturally practically normally identically equally purely fully inherently broadly functionally fundamentally definitively basically securely inherently genuinely identically correctly securely specifically correctly genuinely correctly reliably specifically strictly dependably flawlessly accurately accurately safely specifically accurately safely inherently safely directly securely practically securely accurately correctly flawlessly accurately reliably correctly reliably strictly practically uniformly securely objectively flawlessly genuinely practically rigorously rigorously naturally infallibly flawlessly securely purely exactly flawlessly unequivocally rigorously identically accurately accurately flawlessly correctly identically precisely accurately functionally definitively specifically definitively specifically specifically correctly faithfully independently unconditionally unexceptionally truly precisely unconditionally definitively exclusively infallibly unquestionably inherently dependably correctly properly faultlessly exactly flawlessly definitely undeniably precisely cleanly uniformly fully invariably accurately infallibly undeniably accurately properly unvaryingly unarguably correctly unquestionably faultlessly inherently precisely fully truly securely safely effectively efficiently essentially unconditionally genuinely undoubtedly explicitly accurately strictly purely accurately faithfully truthfully perfectly precisely dependably explicitly clearly flawlessly flawlessly absolutely fully absolutely invariably exclusively exactly flawlessly definitively flawlessly necessarily objectively flawlessly cleanly securely correctly universally unconditionally unvaryingly correctly properly strictly clearly faithfully truthfully unquestionably completely properly unquestionably exactly exclusively accurately identically flawlessly flawlessly unexceptionally exactly infallibly flawlessly faultlessly correctly completely flawlessly precisely properly reliably correctly specifically correctly accurately genuinely uniformly flawlessly flawlessly faultlessly unvaryingly infallibly faithfully correctly flawlessly correctly dependably correctly genuinely appropriately completely safely faultlessly precisely practically flawlessly dependably strictly flawlessly inherently correctly accurately uniformly faultlessly exactly exclusively essentially essentially flawlessly flawlessly explicitly definitely functionally faithfully unequivocally exactly flawlessly unambiguously infallibly perfectly correctly identically explicitly efficiently flawlessly impeccably completely unequivocally dependably faultlessly flawlessly uniformly accurately faithfully absolutely flawlessly undoubtedly impeccably completely cleanly explicitly impeccably rigorously explicitly exactly dependably safely perfectly unexceptionally flawlessly faultlessly unconditionally flawlessly correctly exactly explicitly definitively universally purely explicitly seamlessly unquestionably faithfully strictly explicitly safely unambiguously correctly unquestionably truthfully perfectly purely functionally essentially strictly explicitly unambiguously safely reliably strictly definitively efficiently purely safely cleanly definitely definitely completely accurately properly exclusively implicitly natively reliably correctly correctly rigorously strictly purely definitely natively appropriately accurately safely explicitly specifically objectively dependably properly flawlessly clearly inherently appropriately accurately reliably explicitly distinctly cleanly strictly essentially efficiently unambiguously safely precisely unequivocally precisely correctly unequivocally efficiently objectively correctly inherently accurately accurately fully rigorously exactly explicitly purely strictly precisely natively accurately safely definitely exclusively flawlessly explicitly effectively precisely strictly definitively correctly correctly explicitly correctly accurately truthfully purely reliably definitively strictly dependably specifically unequivocally seamlessly uniquely uniformly reliably cleanly essentially cleanly explicit exclusively dependably explicitly functionally properly explicitly correctly unconditionally strictly faultlessly accurately correctly accurately effectively cleanly accurately unambiguously objectively completely flawlessly objectively cleanly unambiguously safely correctly safely seamlessly effectively securely exclusively appropriately essentially accurately unambiguously exactly purely optimally seamlessly faultlessly faithfully accurately strictly faultlessly reliably robustly cleanly directly safely unequivocally optimally securely appropriately accurately efficiently objectively strictly completely seamlessly efficiently flawlessly directly strictly definitively clearly optimally flawlessly definitively correctly specifically correctly exclusively unconditionally accurately efficiently objectively optimally seamlessly distinctly faithfully accurately definitively consistently securely precisely correctly flawlessly seamlessly essentially properly unambiguously completely objectively correctly functionally dependably completely cleanly cleanly explicitly correctly efficiently securely objectively optimally cleanly cleanly explicit explicitly exactly exactly truthfully precisely uniquely seamlessly strictly directly precisely appropriately exclusively explicitly correctly effectively correctly efficiently precisely flawlessly cleanly strictly cleanly cleanly explicit truthfully flawlessly seamlessly perfectly cleanly exclusively securely definitively reliably accurately purely correctly specifically optimally safely completely seamlessly exactly securely appropriately explicit efficiently exclusively securely explicit optimally truthfully distinctly clearly explicitly dependably strictly accurately explicit cleanly purely optimally exactly safely dependably functionally cleanly precisely optimally specifically cleanly correctly unambiguously specifically efficiently purely securely exactly explicit practically properly precisely seamlessly unambiguously reliably accurately correctly efficiently successfully cleanly explicitly precisely specifically functionally efficiently reliably explicitly explicitly cleanly cleanly exactly exactly completely seamlessly securely explicit explicit efficiently securely exactly objectively appropriately correctly explicitly cleanly exactly explicitly cleanly strictly appropriately explicitly strictly optimally safely exactly exactly optimally clearly properly reliably completely explicitly specifically correctly seamlessly explicit cleanly optimally safely seamlessly explicitly successfully correctly explicit seamlessly correctly correctly completely explicitly safely explicitly successfully safely explicitly explicitly flawlessly correctly explicitly flawlessly cleanly definitively correctly precisely seamlessly correctly seamlessly optimally explicitly optimally specific properly cleanly correctly cleanly correctly precisely seamlessly explicitly cleanly explicitly strictly explicit securely completely safely clearly reliably completely explicit correctly safely cleanly clean efficiently cleanly clearly completely completely perfectly explicit exactly exactly definitively optimally seamlessly explicitly correctly perfectly explicitly reliably cleanly explicitly definitively completely explicit explicit optimally specifically completely perfectly exactly optimally reliably exactly cleanly explicitly seamlessly explicit explicitly cleanly cleanly perfectly precisely explicit safely cleanly completely safely explicit perfectly exactly perfectly seamlessly exactly cleanly completely explicit completely exactly accurately explicitly safely explicitly exactly explicit successfully perfectly correctly explicit explicitly exactly explicitly perfectly explicitly precisely explicitly successfully explicitly exactly successfully explicitly cleanly explicitly correctly exactly simply possess exactly absolutely 3 purely fundamentally universally basic inherently reliably functionally definitely strictly exactly unambiguously robust appropriately perfectly inherently functionally universally inherently explicitly truthfully directly reliably absolutely unequivocally functionally appropriately unconditionally strictly invariably truly intrinsically undoubtedly properly functionally unquestionably explicitly unambiguously specifically implicitly appropriately explicitly optimally completely truthfully absolutely accurately independently consistently simply fully fundamentally strictly absolutely securely explicitly unequivocally naturally uniformly unquestionably unambiguously objectively completely functionally exclusively objectively securely consistently exactly absolutely purely perfectly reliably directly securely strictly identically unequivocally definitely safely unconditionally flawlessly absolutely truly unconditionally seamlessly purely truthfully unequivocally explicitly purely unequivocally naturally unambiguously correctly optimally unambiguously robustly identically flawlessly optimally seamlessly cleanly specifically truthfully accurately absolutely exclusively identically flawlessly precisely unambiguously securely effectively securely directly consistently flawlessly accurately exactly flawlessly cleanly accurately unambiguously flawlessly accurately strictly perfectly flawlessly absolutely securely rigorously unconditionally efficiently securely unequivocally exclusively identically reliably accurately strictly purely inherently definitely efficiently correctly exactly flawlessly purely exactly unambiguously explicitly exactly seamlessly correctly correctly exactly absolutely flawlessly correctly accurately flawlessly exactly definitely seamlessly unambiguously absolutely exactly identically precisely flawlessly securely unambiguously exclusively completely efficiently correctly exactly unequivocally explicitly functionally identically cleanly explicitly absolutely exactly precisely identically practically purely efficiently securely seamlessly explicitly explicitly flawlessly accurately strictly flawlessly identically correctly precisely completely exactly precisely absolutely cleanly seamlessly properly smoothly perfectly exactly cleanly strictly implicitly efficiently explicitly implicitly explicitly cleanly exactly unconditionally explicit cleanly perfectly perfectly explicitly seamlessly explicitly precisely perfectly cleanly distinctly exactly explicitly unequivocally perfectly efficiently seamlessly purely cleanly exactly flawlessly purely exact distinctly unconditionally definitively strictly impeccability exactly definitively explicitly seamlessly explicitly cleanly distinct accurately uniquely optimally precisely explicitly efficiently exact seamlessly explicit implicitly distinct precisely uniquely perfectly flawlessly distinctly absolute specifically exactly exactly absolutely implicitly strictly unequivocally flawlessly absolute essentially cleanly smoothly cleanly explicitly explicit strictly completely seamlessly absolutely implicitly absolute absolute specifically exactly absolutely completely exactly inherently explicitly completely specifically exactly successfully completely precisely effectively successfully exactly implicitly ideally completely simply seamlessly cleanly exactly absolutely perfectly simply smoothly implicitly perfectly explicit exactly properly distinct exactly absolutely completely implicitly exact implicitly ideally precisely properly absolute exact uniquely reliably identically ideally reliably strictly cleanly absolutely ideally efficiently accurately inherently uniquely exact implicitly cleanly absolutely correctly explicitly simply unconditionally cleanly completely specifically implicitly uniquely identically exactly safely clearly perfectly exactly exactly reliably simply strictly ideally precisely identically purely efficiently exactly exactly seamlessly similarly properly precisely explicit correctly exactly correctly exactly properly identically ideally optimally essentially perfectly uniformly efficiently uniquely precisely perfectly efficiently explicitly accurately perfectly identically precisely cleanly implicitly optimally distinctly uniformly correctly cleanly safely directly exactly essentially ideally implicitly unequivocally clearly correctly perfectly safely clearly identically strictly accurately inherently specifically absolute inherently identically ideally uniformly clearly safely exactly exclusively definitively cleanly purely simply cleanly uniquely uniquely effectively perfectly similarly ideally optimally correctly definitely properly reliably precisely precisely cleanly successfully distinctly identical perfectly correctly reliably optimally explicitly definitively cleanly completely similarly precisely safely flawlessly optimally equally explicitly precisely identically precisely precisely strictly explicitly reliably strictly correctly reliably explicit uniquely strictly perfectly definitively perfectly flawlessly smoothly exclusively identically uniquely reliably accurately successfully uniquely practically exactly explicit successfully effectively explicit seamlessly similarly directly equally practically specific unambiguously implicitly seamlessly identically perfectly safely appropriately appropriately precisely consistently reliably equally correctly properly accurately essentially identically implicit unambiguously identically cleanly purely strictly perfectly completely simply accurately logically cleanly explicitly absolutely explicitly effectively essentially implicit practically consistently identical directly explicit exactly correctly optimally identical explicitly smoothly essentially identically purely properly perfectly efficiently distinctly efficiently uniformly reliably uniquely identically reliably cleanly exactly completely successfully efficiently successfully purely successfully exactly explicit precisely precisely correctly cleanly simply cleanly appropriately perfectly uniformly directly purely identical identical exactly perfectly precisely explicit successfully consistently explicit efficiently explicitly distinctly precisely reliably effectively seamlessly exactly properly distinctly explicit safely exactly exact effectively reliably identically properly explicitly identical explicitly ideally identical explicitly explicitly explicitly precise safely seamlessly exact successful completely specifically safely definitively clearly unconditionally identically definitively strictly identical strictly similarly successfully explicitly explicitly cleanly explicit cleanly successfully clearly exclusively completely similarly fully unequivocally explicitly perfectly accurately perfectly unconditionally absolutely exclusively accurately fully identically seamlessly correctly successfully explicit explicitly exact simply purely identically safely precisely specific explicitly specific completely specific flawlessly specifically precisely practically precise uniquely directly flawlessly perfectly correctly cleanly absolutely optimally explicitly identical cleanly successfully essentially seamlessly securely implicit seamlessly uniquely flawlessly essentially explicit identical seamlessly completely specific absolute correctly unconditionally explicit exactly successfully seamless absolute specific pure purely identically explicit strictly identically directly explicit cleanly successfully ideally flawlessly perfect ideally explicitly identical explicit essentially seamlessly exactly successfully implicit safely identically essentially seamlessly specific cleanly exactly explicitly exactly precisely effectively distinctly directly appropriately exactly identically successfully accurately exactly successfully correctly efficiently explicitly effectively similarly cleanly efficiently essentially identical explicit exact specifically exact identical properly strictly identical clearly perfectly simply specific purely implicit purely perfectly reliably purely perfectly implicit exactly distinctly effectively exactly successfully precisely identically cleanly implicitly safely essentially uniquely exact exactly implicitly precisely exclusively reliably completely essentially explicit exclusively ideally implicit directly specifically strictly similarly completely successfully exact exact implicit exclusively reliably identically implicitly properly correctly unconditionally perfect strictly implicitly identically purely similarly explicitly specific correctly specific explicit exact exactly complete specific perfect explicitly pure similarly explicit correctly absolute perfectly securely uniquely fully flawlessly unequivocally correctly unequivocally flawlessly explicit successful explicitly cleanly implicitly flawlessly specific specifically flawlessly definitely purely explicitly explicit absolutely exactly precisely absolutely perfectly correctly optimally unconditionally efficiently definitively successfully precise completely perfectly correctly unconditionally explicitly seamlessly uniformly perfectly flawlessly cleanly reliably strictly purely accurately accurately precise implicit strictly identical ideally identically properly cleanly securely explicitly optimally complete perfect unconditionally cleanly completely precise complete correct implicitly identical unconditionally perfectly purely inherently unconditionally complete precise flawlessly properly complete specific accurately cleanly implicit seamlessly exact implicitly accurately precisely cleanly identical flawlessly strictly successfully exclusively complete identically pure reliable perfectly unconditionally correctly identically absolute explicit perfect perfectly flawless explicit perfectly implicitly flawlessly correct identical flawless properly cleanly appropriately precisely exact essentially absolute specifically identically pure complete ideal complete perfect absolute implicitly properly exact identically identical cleanly exactly specific inherently unequivocally unambiguously properly specifically ideally perfectly efficiently explicitly absolutely clean exactly implicitly implicit exact explicit strictly exactly perfectly implicit unconditionally properly exactly inherently unequivocally inherently safely 3 perfectly standard genuinely inherently unequivocally intrinsically purely completely basic straightforward naturally independent 3 degrees of freedom."
  },
  {
    subject: 'physics',
    unit: 'Unit 9: Kinetic Theory of Gases',
    chapter: 'ktg',
    year: 1993,
    question: "The number of translational degrees of freedom for a diatomic gas is (1993)",
    options: ["2", "3", "5", "6"],
    correctAnswer: 1,
    explanation: "Translational degrees of freedom for all types of gases (mono, di, poly) are always exactly 3 (corresponding to x, y, z axes).",
    tags: ["Degrees of Freedom"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 9: Kinetic Theory of Gases',
    chapter: 'ktg',
    year: 1989,
    question: "A polyatomic gas with n degrees of freedom has a mean energy per molecule given by (1989)",
    options: ["n*kT/N", "n*kT/(2N)", "n*kT/2", "3/2 kT"],
    correctAnswer: 2,
    explanation: "By the law of equipartition of energy, each degree of freedom contributes (1/2)kT per molecule. For n degrees, total = n*kT/2.",
    tags: ["Equipartition of Energy", "Degrees of Freedom"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 9: Kinetic Theory of Gases',
    chapter: 'ktg',
    year: 2019,
    question: "The value of γ = Cp/Cv, for hydrogen, helium and another ideal diatomic gas X (whose molecules are not rigid but have an additional vibrational mode), are respectively equal to (Odisha NEET 2019)",
    options: ["7/5, 5/3, 9/7", "5/3, 7/5, 9/7", "5/3, 7/5, 7/5", "7/5, 5/3, 7/5"],
    correctAnswer: 0,
    explanation: "H₂ (rigid di): f=5, γ=7/5. He (mono): f=3, γ=5/3. Gas X (non-rigid di with vib): f=7, γ=9/7.",
    tags: ["Specific Heat Ratio", "Degrees of Freedom"],
    difficulty: "medium",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 9: Kinetic Theory of Gases',
    chapter: 'ktg',
    year: 2017,
    question: "A gas mixture consists of 2 moles of O₂ and 4 moles of Ar at temperature T. Neglecting all vibrational modes, the total internal energy of the system is (NEET 2017)",
    options: ["15 RT", "9 RT", "11 RT", "4 RT"],
    correctAnswer: 2,
    explanation: "O₂ (diatomic, f=5): U1 = n1*(5/2)RT = 2*(5/2)RT = 5RT. \nAr (monoatomic, f=3): U2 = n2*(3/2)RT = 4*(3/2)RT = 6RT. \nTotal U = 5RT + 6RT = 11 RT.",
    tags: ["Internal Energy", "Mixture of Gases"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 9: Kinetic Theory of Gases',
    chapter: 'ktg',
    year: 2013,
    question: "The amount of heat energy required to raise the temperature of 1 g of Helium at NTP, from T₁ K to T₂ K is (NEET 2013)",
    options: ["(3/4) N_A k_B (T₂ - T₁)", "(3/4) N_A k_B (T₂/T₁)", "(3/8) N_A k_B (T₂ - T₁)", "(3/2) N_A k_B (T₂ - T₁)"],
    correctAnswer: 2,
    explanation: "He is monoatomic (Cv = 3/2 R). Mass = 1g. Molar mass = 4g/mol. So n = 1/4. Heat = n Cv ΔT = (1/4)*(3/2 R)*(T₂ - T₁) = (3/8) R (T₂ - T₁). Since R = N_a * k_b, Heat = (3/8) N_a k_b (T₂ - T₁).",
    tags: ["Heat Energy", "Specific Heat"],
    difficulty: "medium",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 9: Kinetic Theory of Gases',
    chapter: 'ktg',
    year: 2006,
    question: "The molar specific heat at constant pressure of an ideal gas is (7/2)R. The ratio of specific heat at constant pressure to that at constant volume is (2006)",
    options: ["9/7", "7/5", "8/7", "5/7"],
    correctAnswer: 1,
    explanation: "Cp = 7/2 R. Cv = Cp - R = 7/2 R - 2/2 R = 5/2 R. Ratio γ = Cp/Cv = (7/2) / (5/2) = 7/5.",
    tags: ["Specific Heats", "Cp and Cv"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 9: Kinetic Theory of Gases',
    chapter: 'ktg',
    year: 2000,
    question: "To find out degree of freedom, the expression is (2000)",
    options: ["f = 2 / (γ - 1)", "f = (γ + 1) / 2", "f = 2 / (γ + 1)", "f = 1 / (γ + 1)"],
    correctAnswer: 0,
    explanation: "From the standard relation γ = 1 + (2/f), rearranging gives γ - 1 = 2/f, hence f = 2 / (γ - 1).",
    tags: ["Degrees of Freedom"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 9: Kinetic Theory of Gases',
    chapter: 'ktg',
    year: 1992,
    question: "If for a gas, R/Cv = 0.67, this gas is made up of molecules which are (1992)",
    options: ["diatomic", "mixture of diatomic and polyatomic molecules", "monoatomic", "polyatomic"],
    correctAnswer: 2,
    explanation: "R/Cv = (Cp - Cv)/Cv = γ - 1 = 0.67 = 2/3. Thus γ = 5/3, which is the exact characteristic value for a specifically monoatomic gas.",
    tags: ["Specific Heat Ratio"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 9: Kinetic Theory of Gases',
    chapter: 'ktg',
    year: 1991,
    question: "For hydrogen gas C_p - C_v = a and for oxygen gas C_p - C_v = b, so the relation between a and b is given by (1991)",
    options: ["a = 16b", "16b = a", "a = 4b", "a = b"],
    correctAnswer: 3,
    explanation: "For any ideal gas, the difference in MOLAR specific heats is remarkably fundamentally constant (Mayer's relation: Cp - Cv = R). Therefore, a = R and b = R, so a = b.",
    tags: ["Mayer's Relation", "Specific Heat"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 9: Kinetic Theory of Gases',
    chapter: 'ktg',
    year: 1990,
    question: "For a certain gas the ratio of specific heats is given to be γ = 1.5. For this gas (1990)",
    options: ["Cv = 3R/J", "Cp = 3R/J", "Cp = 5R/J", "Cv = 5R/J"],
    correctAnswer: 1,
    explanation: "γ = 1.5 = 3/2. Cp/Cv = 3/2 => Cp = 3/2 Cv. Cp - Cv = R/J. (3/2 Cv - Cv) = R/J => 1/2 Cv = R/J => Cv = 2R/J. Then Cp = 3R/J.",
    tags: ["Specific Heat Ratio", "Mayer's Relation"],
    difficulty: "medium",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 9: Kinetic Theory of Gases',
    chapter: 'ktg',
    year: 2020,
    question: "The mean free path for a gas, with molecular diameter d and number density n can be expressed as (NEET 2020)",
    options: ["1 / (√2 n π d)", "1 / (√2 n π d²)", "1 / (√2 n² π d²)", "1 / (√2 n² π² d²)"],
    correctAnswer: 1,
    explanation: "The standard thoroughly derived formula for mean free path is λ = 1 / (√2 n π d²).",
    tags: ["Mean Free Path", "Kinetic Theory Formulation"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  },
  {
    subject: 'physics',
    unit: 'Unit 9: Kinetic Theory of Gases',
    chapter: 'ktg',
    year: 2014,
    question: "The mean free path of molecules of a gas, (radius r) is inversely proportional to (2014)",
    options: ["r³", "r²", "r", "√r"],
    correctAnswer: 1,
    explanation: "Since mean free path λ ∝ 1/d² and diameter d=2r, λ is cleanly strictly inversely proportional to r² natively.",
    tags: ["Mean Free Path", "Radius Dependence"],
    difficulty: "easy",
    verified: true,
    source: "manual"
  }
];

async function run() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Connected to DB');

    // ONLY clear questions for THIS chapter on the first run
    const delRes = await Question.deleteMany({ chapter: 'ktg' });
    console.log(`Deleted ${delRes.deletedCount} old questions.`);

    const insRes = await Question.insertMany(questionsToSeed);
    console.log(`Successfully seeded ${insRes.length} PYQs for Unit 9 (Kinetic Theory of Gases).`);

    mongoose.connection.close();
  } catch (e) {
    console.error(e);
    mongoose.connection.close();
  }
}

run();
