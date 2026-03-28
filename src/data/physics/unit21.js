// Physics — Unit 21: Experimental Skills

const expSkills = {
  id: 'experimental-skills',
  title: 'Chapter 21: Experimental Skills',
  notes: [
    {
      concept: 'Vernier Calipers & Screw Gauge: LC of vernier = 1 MSD - 1 VSD. LC of screw gauge = Pitch / No. of circular divs. Zero Error: Positive when instrument reads + without object (subtract to correct). Negative when reads - without object (add to correct).',
      fact: 'Pitch is the linear distance moved by the spindle of the screw gauge for ONE complete rotation of its circular scale.',
      tip: 'Real measurement = Main Scale Reading + (Coinciding Division * Least Count) - Zero Error (with sign).',
    },
    {
      concept: 'Simple Pendulum & Elasticity: Measuring dissipation of energy by plotting (Amplitude)² vs time. The graph is exponential decay, indicating energy loss to air drag. Young\'s modulus of wire: use Searle\'s apparatus. Y = (MgL) / (πr²l). Extension l measured by micrometers.',
      fact: 'In Searle\'s, using an identical reference wire cancels out thermal expansion effects!',
      tip: 'Time period of pendulum T = 2π√(L/g). Plotting L vs T² yields a straight line passing through the origin. Slope = g / 4π².',
    },
    {
      concept: 'Surface Tension, Viscosity & Specific Heat: Capillary rise h = 2T/(rρg)*cosθ. For water in glass, θ≈0. Viscosity via Stokes\' law: drop a small ball in viscous liquid, constant terminal velocity v_t gives coefficient η. Specific heat: Method of mixtures (Coffee-cup calorimetry).',
      fact: 'Heat lost by hot body = Heat gained by cold body + Heat gained by calorimeter. m1c1(T1-T) = m2c2(T-T2) + W(T-T2), where W is water equivalent.',
      tip: 'Adding detergent to water lowers its surface tension, which is why capillary rise is less for soapy water compared to pure water.',
    },
    {
      concept: 'Electrical Experiments: Meter Bridge is an application of Wheatstone bridge. Balance length l. Unknown res X = R (100-l)/l. Ohm\'s law verification: Plot V vs I, slope gives resistance. Finding internal resistance r of cell via meter bridge/potentiometer.',
      fact: 'For precise Meter Bridge measurements, null point should be near middle (50 cm) to minimize end-resistance errors and percentage errors.',
      tip: 'Half Deflection method for galvanometer: Figure of merit (k = I/θ). Resistance of galvanometer (G) is found without needing another ammeter or full Wheatstone setup.',
    },
    {
      concept: 'Optics & Semi-Conductor Experiments: Optics bench used to find f of convex/concave mirror/lens. Parallax method is used to locate images without screen. Traveling microscope used for glass slab refractive index (Real depth / Apparent depth).',
      fact: 'For p-n junction diode forward characteristic curve: mA ammeter is used, voltage is small (cut-in ~0.7V). For reverse: µA ammeter is used, breakdown occurs at higher voltage (Zener).',
      tip: 'Resistor colour code identification directly aids in experimental matching (BB ROY of Great Britain...). To identify an LED mixed with a diode: LED body is transparent/colored plastic encapsulant, normal diode is opaque cylindrical component.',
    },
  ],
  quiz: [
    {
      question: 'A student uses a screw gauge with 100 divisions on its circular scale and a pitch of 1 mm. The zero of the circular scale lies 3 divisions ABOVE the line of graduation (when closed). The Corrected Least Count and Zero Error respectively are:',
      options: ['0.01 mm, -0.03 mm', '0.01 mm, +0.03 mm', '0.1 mm, -0.03 mm', '0.01 mm, -0.003 mm'],
      correctAnswer: 0,
      explanation: 'LC = Pitch / No. of divs = 1 mm / 100 = 0.01 mm. Since the zero of circular scale is ABOVE the reference line, the screw has already advanced effectively. It reads less. Wait... if the zero is ABOVE the line, it means you have pushed the scale past 0. It is a NEGATIVE zero error. Error = -3 * 0.01 mm = -0.03 mm.',
    },
    {
      question: 'In the method of mixtures for specific heat capacity, what is meant by the "water equivalent" (W) of the calorimeter?',
      options: ['The mass of water in the calorimeter', 'Volume of water inside', 'Mass of water which would absorb the same amount of heat as the calorimeter for the same temperature rise', 'Specific heat of water'],
      correctAnswer: 2,
      explanation: 'Water equivalent W is the thermal capacity (mass × specific heat) of the calorimeter cup, expressed in terms of an equivalent mass of water that would behave thermally identically.',
    },
    {
      question: 'Why is the null point in a Meter Bridge experiment ideally sought near the center (around 50 cm) of the wire?',
      options: ['Because heating of wire makes null point jump if kept at ends', 'To minimize the effect of end resistance and contact resistances, achieving highest sensitivity', 'Because the resistance of wire is zero at the middle', 'To limit current flow into galvanometer'],
      correctAnswer: 1,
      explanation: 'Sensitivity of Wheatstone Bridge (Meter Bridge) is highest when all four arms have comparable resistances. This condition is met near the middle (50 cm) mark, minimizing percentage errors due to scale reading and end resistances.',
    },
    {
      question: 'While plotting the forward characteristic curve of a generic p-n junction diode, which of the following combinations of meters is standard?',
      options: ['Voltmeter in kV range, Ammeter in µA range', 'Voltmeter in V range, Ammeter in mA range', 'Voltmeter in mV range, Ammeter in A range', 'Voltmeter in V range, Ammeter in µA range'],
      correctAnswer: 1,
      explanation: 'In forward bias, current is quite large (in milliamperes), and barrier voltages are small (e.g., ~0.7 V for Si). So a standard Voltmeter (say 0-3V) and a Milli-ammeter (mA) are used.',
    },
    {
      question: 'In an optics experiment using a convex lens, "parallax" between the image needle and the object needle is said to be removed when:',
      options: ['They blur together', 'Moving your eye sideways causes them to move together without relative motion between them', 'They are completely out of focus', 'They appear to be of different colors'],
      correctAnswer: 1,
      explanation: 'No parallax between two needles means their tips are coincident in 3D space. When you move your eye horizontally, they shift exactly together against the background without moving relative to each other.',
    },
  ],
};

export default {
  id: 'phy-u21',
  name: 'Unit 21: Experimental Skills',
  chapters: [expSkills],
};

