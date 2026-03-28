// Physics — Unit 16: Optics

const optics = {
  id: 'optics',
  title: 'Chapter 16: Ray and Wave Optics',
  notes: [
    {
      concept: 'Reflection & Spherical Mirrors: Mirror formula: 1/f = 1/v + 1/u. Magnification m = -v/u = h\'/h. Focal length f = R/2. Real images (v negative, inverted), Virtual images (v positive, erect).',
      fact: 'Convex mirrors always form virtual, erect, and diminished images regardless of object distance (used as rear-view mirrors).',
      tip: 'By Cartesian sign convention: Incident light direction is positive. Thus, for a concave mirror, focus is in front (f is -ve). For convex, focus is behind (f is +ve).',
    },
    {
      concept: 'Refraction & Total Internal Reflection (TIR): Snell\'s Law: n1 sin(i) = n2 sin(r). If light travels from denser to rarer medium and i > i_c (critical angle), it completely reflects back. sin(i_c) = 1/μ.',
      fact: 'Mirage, brilliance of diamond, exact 90° or 180° bending by prisms, and optical fibers completely rely on Total Internal Reflection (TIR).',
      tip: 'Apparent depth: A coin at depth \'d\' appears raised by Δd = d(1 - 1/μ).',
    },
    {
      concept: 'Lenses: Thin lens formula: 1/f = 1/v - 1/u. Lens Maker\'s Formula: 1/f = (μ - 1)[1/R1 - 1/R2]. Power of lens P = 1/f (diopters, f in meters).',
      fact: 'When two thin lenses are in contact, 1/f_eq = 1/f1 + 1/f2. Power P_eq = P1 + P2. Magnification m_eq = m1 * m2.',
      tip: 'If a lens of refractive index μ_L is plunged into a liquid of μ_liq > μ_L, the nature of the lens reverses (convex acts like concave and vice-versa).',
    },
    {
      concept: 'Optical Instruments: Simple Microscope (magnifying glass) m = 1 + D/f (image at D) or D/f (image at ∞). Compound Microscope: m = (v0/u0) * (D/fe). Telescope: m = f0/fe (normal adjustment), Tube length L = f0 + fe.',
      fact: 'In a compound microscope, the objective has short focal length & small aperture. In an astronomical telescope, the objective has large focal length & large aperture (for better light gathering & resolution).',
      tip: 'Prism: At minimum deviation δ_m, the angle of refraction inside the prism is A/2. μ = sin((A+δ_m)/2) / sin(A/2).',
    },
    {
      concept: 'Wave Optics & Interference: Huygens\' principle states each point on a wavefront is a source of secondary wavelets. Young\'s Double Slit Experiment (YDSE) shows interference of light. Fringe width β = λD / d.',
      fact: 'Constructive interference (Bright fringe): path difference = nλ. Destructive (Dark fringe): path difference = (n+½)λ.',
      tip: 'If the entire YDSE apparatus is immersed in liquid (refractive index μ), wavelength drops to λ/μ, so fringe width β shrinks to β/μ.',
    },
    {
      concept: 'Diffraction and Polarization: Diffraction due to single slit setup: Width of central maximum = 2λD / a (where a is slit width). Unlike YDSE, secondary maxima decrease in intensity.',
      fact: 'Polarization proves the transverse nature of light waves. Longitudinal waves (like sound) cannot be polarized.',
      tip: 'Brewster\'s Law: When unpolarized light falls at polarizing angle (i_p), reflected light is totally plane-polarized. μ = tan(i_p). Reflected and refracted rays are exactly perpendicular (90°).',
    },
  ],
  quiz: [
    {
      question: 'Which of the following optical phenomena is responsible for the glittering of diamonds?',
      options: ['Dispersion', 'Interference', 'Total Internal Reflection', 'Diffraction'],
      correctAnswer: 2,
      explanation: 'The critical angle for diamond is very low (~24.4°). Light entering the numerous precisely cut faces suffers multiple Total Internal Reflections, causing it to sparkle or glitter brilliantly.',
    },
    {
      question: 'Two convex lenses of focal lengths 10 cm and 20 cm are placed in contact. The equivalent power of the combination is:',
      options: ['+5 D', '+15 D', '-15 D', '+30 D'],
      correctAnswer: 1,
      explanation: 'Power P1 = 1 / 0.1m = 10 D. Power P2 = 1 / 0.2m = 5 D. Both are convex so focal length is positive. P_eq = P1 + P2 = 10 + 5 = 15 D.',
    },
    {
      question: 'If Young\'s Double Slit Experiment apparatus is moved from air to water, what will happen to the fringe width?',
      options: ['It will increase', 'It will decrease', 'It will remain unchanged', 'Fringes will disappear entirely'],
      correctAnswer: 1,
      explanation: 'Fringe width β = λD/d. In water (or any denser medium), the speed of light drops, reducing its wavelength (λ\' = λ/μ). Since λ decreases, the fringe width β decreases.',
    },
    {
      question: 'In a single slit diffraction experiment, if the width of the slit is doubled, the width of the central maximum will be:',
      options: ['Doubled', 'Halved', 'Four times', 'Remains unchanged'],
      correctAnswer: 1,
      explanation: 'The width of the central maximum in single-slit diffraction is W = 2λD / a. If slit width \'a\' is doubled, the width of the central max is halved.',
    },
    {
      question: 'Which observation directly confirms that light waves are mutually transverse in nature?',
      options: ['Interference', 'Diffraction', 'Polarization', 'Refraction'],
      correctAnswer: 2,
      explanation: 'Only transverse waves can be polarized (oscillations restricted to one plane perpendicular to direction of propagation). If light were longitudinal, varying the axis of a polarizer wouldn\'t block it.',
    },
  ],
};

export default {
  id: 'phy-u16',
  name: 'Unit 16: Optics',
  chapters: [optics],
};
