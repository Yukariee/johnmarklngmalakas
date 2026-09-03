/* ============================= DATA ============================= */
const UNITS = [
  {id:"u1", name:"Mathematics in Our World", icon:"🌻"},
  {id:"u2", name:"Polygons, Transformations & Symmetry", icon:"🔷"},
  {id:"u3", name:"Mathematical Language & Set Theory", icon:"🔤"},
  {id:"u4", name:"Problem Solving, Reasoning & Logic", icon:"🧩"}
];

const TOPICS = [
  {id:"fibonacci", unit:"u1", title:"The Fibonacci Sequence",
   def:"A number sequence where each term equals the sum of the two terms right before it.",
   explain:"Start with 1 and 1. Add the last two numbers to get the next one: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89…",
   notes:"This exact pattern shows up again and again in nature — sunflower seed spirals, pinecones, and shells.",
   example:"2 + 3 = 5, so 5 comes after 3. Then 5 + 8 = 13, so 13 comes next.",
   mnemonic:"Think 'add the last two' — like a relay race where each runner carries the sum of the two before them.",
   trap:"Don't forget it starts with two 1's — not 0 and 1 (some textbooks start with 0, so check what your teacher uses).",
   svg:"fibonacci"},
  {id:"golden-ratio", unit:"u1", title:"The Golden Ratio (Φ)",
   def:"The value that consecutive Fibonacci numbers get closer and closer to when divided: Φ ≈ 1.618034.",
   explain:"Divide any Fibonacci number by the one right before it (like 55 ÷ 34) and you'll land nearer and nearer to 1.618.",
   notes:"Also called the 'divine proportion.' It shows up in art, architecture, and design because our eyes find it pleasing.",
   example:"89 ÷ 55 ≈ 1.6182 — already extremely close to Φ.",
   mnemonic:"'Phi is one-six-one-eight' — say it like a little rhyme until it sticks."},
  {id:"patterns-nature", unit:"u1", title:"Patterns in Nature",
   def:"Natural formations often follow four recognizable math patterns: spirals, tessellations, fractals, and symmetry.",
   explain:"Spirals wind around a center point (sunflowers, shells). Tessellations tile a surface with zero gaps (honeycombs). Fractals repeat the same shape at every zoom level (ferns, tree branches). Symmetry balances a shape across a dividing line (butterflies, snowflakes).",
   notes:"Self-similarity is the fractal secret: a small piece looks like a tiny copy of the whole.",
   example:"A fern leaf — each small leaflet looks like a miniature version of the entire frond.",
   mnemonic:"S-T-F-S: Spiral, Tessellation, Fractal, Symmetry — 'Some Turtles Find Snacks.'",
   svg:"symmetry"},
  {id:"binet", unit:"u1", title:"Binet's Formula",
   def:"A formula that calculates any Fibonacci number directly, without listing every term before it.",
   explain:"Fₙ = (Φⁿ − (1 − Φ)ⁿ) ÷ √5, where Φ ≈ 1.618034.",
   notes:"Handy when you need, say, the 30th Fibonacci number and don't want to count all the way up to it.",
   example:"Plugging n = 10 into the formula should land you on 55.",
   mnemonic:"'Binet skips the line' — it jumps straight to the answer instead of waiting through the whole sequence."},
  {id:"mathematicians", unit:"u1", title:"Mathematicians & Their Big Ideas",
   def:"Key historical figures and the single idea each is best known for.",
   explain:"Pythagoras — the Pythagorean Theorem (a² + b² = c²) and a secretive math school. Euclid — the 'Father of Geometry,' who built geometry on clear starting rules (axioms). Archimedes — computed π and formulas for circles, spheres, and cylinders. Descartes — merged algebra with geometry, giving us the X-Y coordinate plane. Newton & Leibniz — independently invented calculus. Einstein — E = mc², linking mass and energy. Pascal — helped found probability theory and popularized Pascal's Triangle.",
   notes:"Several of these ideas were developed independently by two people at once (like Newton and Leibniz) — that's why credit is sometimes shared.",
   example:"Next time you plot a point at (3, 4), you're using Descartes' coordinate plane.",
   mnemonic:"Link each name to ONE keyword: Pythagoras=Triangle, Euclid=Geometry, Archimedes=Circles, Descartes=Coordinates, Newton/Leibniz=Calculus, Einstein=Energy, Pascal=Probability."},

  {id:"polygon-basics", unit:"u2", title:"What Is a Polygon?",
   def:"A closed 2D shape made entirely of straight line segments — no curves allowed.",
   explain:"If a shape has even one curved edge, it is not a polygon, no matter how closed it looks.",
   notes:"Polygons are classified two separate ways: regular/irregular, and convex/concave.",
   example:"A circle is NOT a polygon (it's curved); a stop sign (octagon) IS.",
   mnemonic:"'Poly' = many, 'gon' = angle — many straight-sided angles, zero curves.",
   svg:"polygon"},
  {id:"convex-concave", unit:"u2", title:"Convex vs. Concave",
   def:"Convex: every interior angle is under 180°, and all diagonals stay inside. Concave: at least one interior angle is over 180°, caving inward.",
   explain:"Picture convex shapes as 'puffed out' and concave shapes as having a bite taken out of them.",
   trap:"A common trap: assuming any irregular shape is automatically concave. Irregular just means unequal sides or angles — not caved in.",
   example:"A regular pentagon is convex. An arrow or L-shape is concave.",
   mnemonic:"con-CAVE = it has a cave (a dent) in it."},
  {id:"regular-irregular", unit:"u2", title:"Regular vs. Irregular Polygons",
   def:"Regular: all sides AND all angles are equal. Irregular: sides or angles differ from each other.",
   example:"A square is regular. A non-square rectangle is irregular — even with four 90° angles, the sides aren't all equal.",
   mnemonic:"'Regular' = perfectly matching, like a school uniform."},
  {id:"polygon-names", unit:"u2", title:"Naming Polygons by Number of Sides",
   def:"5 sides = Pentagon · 6 = Hexagon · 7 = Heptagon · 8 = Octagon · 9 = Nonagon · 10 = Decagon.",
   example:"A stop sign has 8 sides, so it's an octagon.",
   mnemonic:"'Octo' = 8, like an octopus's 8 legs. 'Deca' = 10, like a decade of 10 years."},
  {id:"transformations", unit:"u2", title:"Transformations",
   def:"Ways to move or resize a shape: Translation (slide), Reflection (flip), Rotation (turn), and Dilation (scale).",
   explain:"Translation, reflection, and rotation all keep size and shape exactly the same — only dilation changes size.",
   notes:"Translation also keeps the shape's orientation; reflection creates a mirror image; rotation spins it around a fixed center point.",
   example:"Sliding a chess piece across the board is a translation. Looking in a mirror is a reflection.",
   mnemonic:"'Turtles Race, Rest, then Diet' — Translate, Reflect, Rotate keep size; Dilate changes it (like a diet changes weight).",
   svg:"transform"},
  {id:"dilation", unit:"u2", title:"Dilation & Scale Factor (k)",
   def:"A resizing transformation using a scale factor k. Shape and angles stay the same, but overall size changes.",
   explain:"k > 1 makes the figure bigger (enlarge). 0 < k < 1 makes it smaller (reduce or shrink).",
   example:"A photo enlarged with k = 2 becomes exactly twice as big in every direction.",
   trap:"Dilation is never used to build tessellations, because tessellating shapes must all stay exactly the same size (congruent).",
   mnemonic:"k bigger than 1 = bigger shape. k smaller than 1 (a fraction) = smaller shape."},
  {id:"symmetry-lines", unit:"u2", title:"Lines of Symmetry",
   def:"A line of reflection symmetry splits a shape into two mirror-image halves.",
   example:"An equilateral triangle has 3 lines of symmetry. A square has 4.",
   mnemonic:"For a regular polygon, the number of sides equals the number of symmetry lines."},
  {id:"tessellations", unit:"u2", title:"Tessellations",
   def:"Repeating patterns of shapes that cover a flat surface with zero gaps and zero overlaps.",
   explain:"For shapes to tessellate at a shared corner, the interior angles meeting there must add up to exactly 360°.",
   notes:"Only equilateral triangles, squares, and regular hexagons can tessellate completely on their own (regular tessellation). Mixing two or more regular polygons together makes a semi-regular tessellation.",
   example:"A honeycomb is made of regular hexagons — a classic natural tessellation.",
   mnemonic:"Only 3 solo tessellators: Triangle, Square, Hexagon — 'T-S-H tiles the House.'",
   svg:"tessellation"},
  {id:"mandelbrot", unit:"u2", title:"Fractals & the Mandelbrot Set",
   def:"A fractal generated on the complex plane using the formula Zₙ₊₁ = Zₙ² + C.",
   explain:"The X-axis represents real numbers and the Y-axis represents imaginary numbers, where i² = −1.",
   example:"Zooming into the edge of the Mandelbrot set reveals endless, self-similar detail.",
   mnemonic:"Say it like a chant: 'Z-next equals Z-squared, plus C.'"},

  {id:"math-language", unit:"u3", title:"Why Math Language Is Special",
   def:"Mathematical language is precise (exact meaning) and concise (says a lot using very few symbols).",
   explain:"A word like 'a few' is vague, but '3' is exact — that's precision. Writing F = ma instead of a whole paragraph is conciseness.",
   mnemonic:"Precise = pinpoint. Concise = compact."},
  {id:"sets-basics", unit:"u3", title:"Sets & Cardinality",
   def:"A set is a well-defined collection of objects. Cardinality, written n(A), is the exact count of unique elements in a set.",
   trap:"Subjective descriptions like 'honest people' or 'my favorite songs' are NOT well-defined — different people would list different members, so they can't form a set.",
   example:"'Vowels in the alphabet' is well-defined: {a, e, i, o, u}, so n(A) = 5.",
   mnemonic:"If two people could disagree on who belongs, it's not a set."},
  {id:"expression-sentence", unit:"u3", title:"Mathematical Expression vs. Sentence",
   def:"An expression names a value and can't be true or false (like x + 5). A sentence uses =, <, or > and CAN be true or false (like x + 5 = 8).",
   example:"'7 − 2' is an expression. '7 − 2 = 5' is a sentence — and a true one.",
   mnemonic:"A sentence needs a 'verb' — in math, the verb is the relation symbol (=, <, >)."},
  {id:"translating-symbols", unit:"u3", title:"Translating English to Symbols",
   def:"Addition: sum, increased by, more than. Subtraction: difference, decreased by, less than. Multiplication: product, times, twice, thrice. Division: quotient, divided by, per, ratio.",
   trap:"'Less than' and 'subtracted from' are turn-around words — they flip the order! '3 less than x' means x − 3, NOT 3 − x.",
   example:"'5 subtracted from y' translates to y − 5, not 5 − y.",
   mnemonic:"Whenever you see 'less than' or 'subtracted from,' write the SECOND number first."},
  {id:"set-methods", unit:"u3", title:"Ways to Write a Set",
   def:"Roster Method: list every element in curly braces, each only once, order doesn't matter. Set-Builder Method: describe the property elements must satisfy.",
   example:"Letters in 'mathematics' → A = {m, a, t, h, e, i, c, s} — only 8 unique letters even though the word has 11. Set-builder: B = {x | x is a primary color}.",
   mnemonic:"Roster = a class roster list of names. Builder = a rule describing who's allowed in."},
  {id:"number-sets", unit:"u3", title:"Classifying Numbers",
   def:"Natural (ℕ): 1, 2, 3… Whole: 0, 1, 2, 3… Integers (ℤ): …,−1, 0, 1… Rational (ℚ): can be written as a fraction. Irrational (ℚ'): cannot be a fraction (π, √2). Real (ℝ): rationals and irrationals combined.",
   example:"−3 is an integer, but not natural or whole. 0.5 is rational (= 1/2). π is irrational.",
   mnemonic:"ℕ → Whole → ℤ → ℚ → ℝ is like leveling up: each set is broader than the last, until Real numbers include everything."},
  {id:"set-operations", unit:"u3", title:"Set Operations",
   def:"Union (A∪B): everything in either set (OR). Intersection (A∩B): only what's shared (AND). Difference (A−B): in A but not B. Complement (A′): everything in the universal set U that's NOT in A. Symmetric Difference (AΔB): in A or B but not both, = (A∪B) − (A∩B).",
   example:"If A = {1,2,3} and B = {2,3,4}: A∪B = {1,2,3,4}, A∩B = {2,3}, A−B = {1}, AΔB = {1,4}.",
   mnemonic:"Union = 'unite everyone.' Intersection = 'where roads cross.' Symmetric difference = 'union minus the overlap.'",
   svg:"venn"},
  {id:"subset-rules", unit:"u3", title:"Special Subset Rules",
   def:"The empty set (∅) is a subset of every set. Every set is also a subset of itself.",
   example:"∅ ⊆ {1, 2, 3} is always true, no matter what's inside the set.",
   mnemonic:"The empty set is the 'guest that's welcome everywhere.'"},

  {id:"conjecture", unit:"u4", title:"Conjecture & Counterexample",
   def:"A conjecture is a general conclusion reached through inductive reasoning — but it isn't proven true. A counterexample is one case that proves a conjecture false.",
   example:"Conjecture: 'All prime numbers are odd.' Counterexample: 2 is prime and even — conjecture disproved!",
   mnemonic:"One counterexample is all it takes to sink a conjecture — like one hole sinking a ship."},
  {id:"hypothesis-conclusion", unit:"u4", title:"Hypothesis & Conclusion",
   def:"In an 'if p, then q' statement, the hypothesis is the 'if' part (p) and the conclusion is the 'then' part (q).",
   example:"'If it rains, then the ground gets wet.' Hypothesis: it rains. Conclusion: the ground gets wet.",
   mnemonic:"The hypothesis always leads — it's the condition you check first."},
  {id:"polya", unit:"u4", title:"Polya's 4 Steps to Problem Solving",
   def:"1) Understand the Problem 2) Devise a Plan 3) Carry Out the Plan 4) Look Back and Reflect.",
   explain:"Understand: know what's given and what's asked. Plan: pick a strategy — draw a diagram, look for a pattern, write an equation, make a table, work backwards, or guess-and-check. Carry out: solve carefully and keep neat records. Look back: check that your answer actually makes sense.",
   mnemonic:"'Ugly Ducks Cook Lunch' — Understand, Devise, Carry out, Look back."},
  {id:"reasoning-types", unit:"u4", title:"Inductive vs. Deductive Reasoning",
   def:"Inductive: specific observations lead to a general conjecture. Deductive: general rules lead to a guaranteed, specific conclusion.",
   example:"Inductive: 'Every cat I've seen has fur, so all cats have fur.' Deductive: 'All mammals have fur. Cats are mammals. So cats have fur.'",
   trap:"Inductive conclusions are NOT guaranteed true — they're just likely, based on an observed pattern.",
   mnemonic:"Ind-UCT-ive builds UP from small clues. De-DUCT-ive works DOWN from a big rule."},
  {id:"logic-statements", unit:"u4", title:"Basic Logic Statements",
   def:"Negation (~p): flips true/false. Conjunction (p∧q): 'AND,' true only if BOTH are true. Disjunction (p∨q): 'OR,' false only if BOTH are false. Conditional (p→q): 'If p, then q.'",
   example:"'It is sunny AND warm' is only true if both parts are actually true.",
   mnemonic:"∧ looks like an 'A' for AND. ∨ looks like a 'V' — think 'either… or.'",
   svg:"logic"},
  {id:"related-conditionals", unit:"u4", title:"Conditional, Converse, Inverse, Contrapositive",
   def:"Conditional: p→q. Inverse: ~p→~q. Converse: q→p. Contrapositive: ~q→~p.",
   explain:"The contrapositive always shares the exact same truth value as the original conditional.",
   example:"Conditional: 'If it's a dog, then it's an animal.' Converse: 'If it's an animal, then it's a dog' — not necessarily true!",
   trap:"Don't assume the converse is automatically true just because the original conditional is true.",
   mnemonic:"Converse just swaps the order. Inverse just negates both. Contrapositive does both: swap AND negate."},
  {id:"deductive-laws", unit:"u4", title:"Law of Detachment & Law of Syllogism",
   def:"Detachment: if p→q is true and p is true, then q must be true. Syllogism: if p→q and q→r are both true, then p→r is true.",
   example:"Detachment: 'If it rains, streets get wet' + 'It is raining' → 'Streets get wet.' Syllogism: 'If A then B' + 'If B then C' → 'If A then C.'",
   mnemonic:"Detachment 'detaches' the conclusion once the condition is confirmed. Syllogism 'chains' two conditionals together like dominoes."}
];

const FLASHCARDS = [
  {id:"f1", unit:"u1", f:"Fibonacci Sequence", b:"1,1,2,3,5,8,13,21,34,55,89… each term = sum of the two before it."},
  {id:"f2", unit:"u1", f:"Golden Ratio (Φ)", b:"≈ 1.618034 — the limit of dividing consecutive Fibonacci numbers."},
  {id:"f3", unit:"u1", f:"Self-Similarity", b:"A small part of a shape looks like a mini copy of the whole (seen in fractals)."},
  {id:"f4", unit:"u1", f:"Tessellation (general)", b:"A repeating tile pattern with no gaps or overlaps, e.g. honeycombs."},
  {id:"f5", unit:"u1", f:"Binet's Formula", b:"Fₙ = (Φⁿ − (1−Φ)ⁿ) ÷ √5 — finds any Fibonacci term directly."},
  {id:"f6", unit:"u1", f:"Pythagoras", b:"a² + b² = c²; founded a secretive math school."},
  {id:"f7", unit:"u1", f:"Euclid", b:"Known as the 'Father of Geometry'; built geometry on clear axioms."},
  {id:"f8", unit:"u1", f:"Archimedes", b:"Computed π; found volume/area formulas for circles, spheres, cylinders."},
  {id:"f9", unit:"u1", f:"René Descartes", b:"Invented the Cartesian (X-Y) coordinate plane."},
  {id:"f10", unit:"u1", f:"Newton & Leibniz", b:"Independently developed calculus."},
  {id:"f11", unit:"u1", f:"Albert Einstein", b:"E = mc² — mass-energy equivalence."},
  {id:"f12", unit:"u1", f:"Blaise Pascal", b:"Co-developed probability theory; popularized Pascal's Triangle."},
  {id:"f13", unit:"u2", f:"Polygon", b:"A closed 2D shape made only of straight line segments."},
  {id:"f14", unit:"u2", f:"Convex Polygon", b:"All interior angles < 180°; diagonals stay inside."},
  {id:"f15", unit:"u2", f:"Concave Polygon", b:"At least one interior angle > 180° — it 'caves' inward."},
  {id:"f16", unit:"u2", f:"Regular Polygon", b:"All sides equal AND all angles equal."},
  {id:"f17", unit:"u2", f:"Octagon", b:"A polygon with 8 sides."},
  {id:"f18", unit:"u2", f:"Translation", b:"Slides a shape — preserves size, shape, AND orientation."},
  {id:"f19", unit:"u2", f:"Reflection", b:"Flips a shape into a mirror image — preserves size and shape."},
  {id:"f20", unit:"u2", f:"Dilation", b:"Resizes a shape by scale factor k; preserves shape/angles, changes size."},
  {id:"f21", unit:"u2", f:"Scale factor k > 1", b:"Enlarges the figure."},
  {id:"f22", unit:"u2", f:"Scale factor 0 < k < 1", b:"Reduces (shrinks) the figure."},
  {id:"f23", unit:"u2", f:"Tessellation angle rule", b:"Angles meeting at a shared vertex must sum to exactly 360°."},
  {id:"f24", unit:"u2", f:"Solo tessellating shapes", b:"Equilateral triangle, square, and regular hexagon."},
  {id:"f25", unit:"u2", f:"Mandelbrot formula", b:"Zₙ₊₁ = Zₙ² + C, plotted on the complex plane."},
  {id:"f26", unit:"u3", f:"Well-defined set", b:"A collection where anyone would agree exactly on who or what belongs."},
  {id:"f27", unit:"u3", f:"Cardinality n(A)", b:"The exact number of unique elements in set A."},
  {id:"f28", unit:"u3", f:"Mathematical Sentence", b:"A statement using =, <, or > that can be evaluated true or false."},
  {id:"f29", unit:"u3", f:"'3 less than x'", b:"x − 3 (a turn-around phrase — it flips the order!)."},
  {id:"f30", unit:"u3", f:"Roster Method", b:"List all elements inside { }, separated by commas, with no repeats."},
  {id:"f31", unit:"u3", f:"Irrational Numbers (ℚ')", b:"Numbers that can't be written as a fraction, e.g. π, √2."},
  {id:"f32", unit:"u3", f:"A ∩ B", b:"Intersection — elements common to BOTH sets."},
  {id:"f33", unit:"u3", f:"A′ (Complement)", b:"Everything in the universal set U that is NOT in A."},
  {id:"f34", unit:"u3", f:"Symmetric Difference (AΔB)", b:"(A∪B) − (A∩B) — in A or B, but never both."},
  {id:"f35", unit:"u3", f:"∅ ⊆ A", b:"The empty set is a subset of every set — always true."},
  {id:"f36", unit:"u4", f:"Conjecture", b:"A general conclusion from inductive reasoning — not guaranteed true."},
  {id:"f37", unit:"u4", f:"Counterexample", b:"One case that proves a conjecture false."},
  {id:"f38", unit:"u4", f:"Hypothesis", b:"The 'if' part of a conditional statement."},
  {id:"f39", unit:"u4", f:"Polya's 4 Steps", b:"Understand → Devise a Plan → Carry it Out → Look Back."},
  {id:"f40", unit:"u4", f:"Inductive Reasoning", b:"Specific observations → a general pattern or conjecture."},
  {id:"f41", unit:"u4", f:"Deductive Reasoning", b:"A general rule → a guaranteed specific conclusion."},
  {id:"f42", unit:"u4", f:"Contrapositive", b:"~q → ~p — always shares the same truth value as the original."},
  {id:"f43", unit:"u4", f:"Law of Detachment", b:"p→q true + p true ⟹ q is true."},
  {id:"f44", unit:"u4", f:"Law of Syllogism", b:"p→q and q→r true ⟹ p→r is true."}
];

const QUIZ = [
  {unit:"u1", q:"What is the next number in 1, 1, 2, 3, 5, 8, __?", choices:["13","11","10","15"], correct:0, ex:"Add the two previous numbers: 5 + 8 = 13."},
  {unit:"u1", q:"The Golden Ratio is approximately equal to:", choices:["1.618","3.14","2.718","1.414"], correct:0, ex:"Φ ≈ 1.618034, the value Fibonacci ratios converge toward."},
  {unit:"u1", q:"A fern leaf, where every small leaflet resembles the whole frond, is an example of:", choices:["Self-similarity (fractals)","A tessellation","A conditional statement","A rational number"], correct:0, ex:"Self-similarity means small parts look like miniature copies of the whole — the fractal trait."},
  {unit:"u1", q:"Who is known as the 'Father of Geometry'?", choices:["Euclid","Pythagoras","Archimedes","Descartes"], correct:0, ex:"Euclid built geometry on a clear system of starting axioms."},
  {unit:"u1", q:"E = mc² was formulated by:", choices:["Albert Einstein","Isaac Newton","Blaise Pascal","Gottfried Leibniz"], correct:0, ex:"Einstein's mass-energy equivalence equation."},
  {unit:"u2", q:"Which shape can NEVER be classified as a polygon?", choices:["A circle","A hexagon","A triangle","A pentagon"], correct:0, ex:"Polygons must be made only of straight segments — a circle is curved."},
  {unit:"u2", q:"A shape with at least one interior angle greater than 180° is:", choices:["Concave","Convex","Regular","Irregular"], correct:0, ex:"That 'caved in' angle is exactly what makes a polygon concave."},
  {unit:"u2", q:"Which transformation is the only one that changes a figure's size?", choices:["Dilation","Translation","Reflection","Rotation"], correct:0, ex:"Translation, reflection, and rotation preserve size; only dilation resizes."},
  {unit:"u2", q:"A scale factor of 0.5 applied to a figure will:", choices:["Shrink the figure","Enlarge the figure","Keep it the exact same size","Flip it into a mirror image"], correct:0, ex:"Any scale factor between 0 and 1 reduces the figure."},
  {unit:"u2", q:"How many lines of symmetry does a square have?", choices:["4","3","2","1"], correct:0, ex:"A square has 4 lines of reflection symmetry."},
  {unit:"u3", q:"Which of these can form a well-defined set?", choices:["Vowels in the alphabet","Honest people","Beautiful paintings","Good songs"], correct:0, ex:"Vowels are objectively fixed {a,e,i,o,u}; the others are subjective, so they can't form a set."},
  {unit:"u3", q:"'5 subtracted from y' translates to:", choices:["y − 5","5 − y","5y","y + 5"], correct:0, ex:"'Subtracted from' is a turn-around phrase, so the second number comes first: y − 5."},
  {unit:"u3", q:"Which number set includes both π and √2?", choices:["Irrational numbers","Natural numbers","Whole numbers","Integers"], correct:0, ex:"Neither π nor √2 can be written as a fraction, so both are irrational."},
  {unit:"u3", q:"A ∩ B represents:", choices:["Elements common to both A and B","Elements in A or B","Elements in A but not B","Everything not in A"], correct:0, ex:"The intersection symbol (∩) means AND — only shared elements."},
  {unit:"u3", q:"Which statement about the empty set is TRUE?", choices:["It is a subset of every set","It has a cardinality of 1","It cannot be a subset of anything","It equals the universal set"], correct:0, ex:"∅ ⊆ A is always true, no matter what A contains."},
  {unit:"u4", q:"A single case that disproves a conjecture is called a:", choices:["Counterexample","Hypothesis","Conclusion","Postulate"], correct:0, ex:"One counterexample is enough to prove a conjecture false."},
  {unit:"u4", q:"Reasoning that moves from specific observations to a general pattern is:", choices:["Inductive reasoning","Deductive reasoning","Syllogism","Detachment"], correct:0, ex:"Inductive reasoning builds a general conjecture from specific clues."},
  {unit:"u4", q:"If p→q is true and p is confirmed true, the Law of Detachment says:", choices:["q must be true","p must be false","q must be false","p→q must be false"], correct:0, ex:"Detachment: confirming the hypothesis guarantees the conclusion."},
  {unit:"u4", q:"According to Polya, what is the FIRST step in problem solving?", choices:["Understand the Problem","Devise a Plan","Carry Out the Plan","Look Back and Reflect"], correct:0, ex:"You can't plan a solution before you understand what's given and what's asked."},
  {unit:"u4", q:"The contrapositive of 'If p, then q' is:", choices:["~q → ~p","q → p","~p → ~q","p → q"], correct:0, ex:"The contrapositive swaps AND negates both parts: ~q → ~p."}
];

const MATCH_PAIRS = [
  {id:"m1", term:"Fibonacci", def:"A repeating number pattern found in nature"},
  {id:"m2", term:"Euclid", def:"Called the 'Father of Geometry'"},
  {id:"m3", term:"Pascal", def:"Helped found probability theory"},
  {id:"m4", term:"Einstein", def:"Mass-energy equivalence, E = mc²"},
  {id:"m5", term:"Descartes", def:"Invented the X-Y coordinate plane"},
  {id:"m6", term:"Archimedes", def:"Worked out the value of π"},
  {id:"m7", term:"Pythagoras", def:"a² + b² = c²"},
  {id:"m8", term:"Newton & Leibniz", def:"Independently invented calculus"}
];

const TRUEFALSE = [
  {q:"A circle is considered a polygon.", a:false, ex:"Polygons must have only straight sides — circles are curved."},
  {q:"The Golden Ratio is approximately 1.618.", a:true, ex:"Correct — Φ ≈ 1.618034."},
  {q:"Newton and Leibniz developed calculus independently of each other.", a:true, ex:"They arrived at calculus separately around the same era."},
  {q:"A convex polygon has at least one interior angle greater than 180°.", a:false, ex:"That describes a concave polygon, not a convex one."},
  {q:"Dilation changes a figure's size while keeping its shape.", a:true, ex:"Dilation preserves shape and angles but changes size."},
  {q:"Only equilateral triangles, squares, and regular hexagons can tessellate completely on their own.", a:true, ex:"These are the only regular polygons that tile a plane alone."},
  {q:"'3 less than x' means 3 − x.", a:false, ex:"'Less than' is a turn-around phrase — it actually means x − 3."},
  {q:"The empty set is a subset of every set.", a:true, ex:"∅ ⊆ A is always true, no matter what A contains."},
  {q:"Inductive reasoning always guarantees a true conclusion.", a:false, ex:"Inductive conclusions are only likely, not guaranteed — that's deductive reasoning's job."},
  {q:"The contrapositive of a true conditional statement is always true too.", a:true, ex:"The contrapositive always shares the same truth value as the original conditional."}
];

const FORMULAS = [
  {label:"Fibonacci Sequence", val:"1,1,2,3,5,8,13,21…"},
  {label:"Golden Ratio", val:"Φ ≈ 1.618034"},
  {label:"Pythagorean Theorem", val:"a² + b² = c²"},
  {label:"Binet's Formula", val:"Fₙ = (Φⁿ−(1−Φ)ⁿ)/√5"},
  {label:"Mass-Energy Equivalence", val:"E = mc²"},
  {label:"Mandelbrot Set", val:"Zₙ₊₁ = Zₙ² + C"},
  {label:"Union / Intersection", val:"A∪B  /  A∩B"},
  {label:"Symmetric Difference", val:"AΔB = (A∪B)−(A∩B)"},
  {label:"Logic: AND / OR / NOT", val:"p∧q  /  p∨q  /  ~p"},
  {label:"Conditional Forms", val:"p→q, ~p→~q, q→p, ~q→~p"}
];

const UNIT_LOOKUP = Object.fromEntries(UNITS.map(u=>[u.id,u]));

/* ============================= HELPERS ============================= */
function shuffle(arr){
  const a = arr.slice();
  for(let i=a.length-1;i>0;i--){
    const j = Math.floor(Math.random()*(i+1));
    [a[i],a[j]]=[a[j],a[i]];
  }
  return a;
}
function store(key, fallback){
  try{ const v = localStorage.getItem(key); return v===null?fallback:JSON.parse(v); }
  catch(e){ return fallback; }
}
function saveStore(key, val){
  try{ localStorage.setItem(key, JSON.stringify(val)); }catch(e){}
}

/* ============================= SVG BUILDERS ============================= */
function svgFibonacci(){
  const squares = [
    {x:40,y:24,w:4,n:1},{x:36,y:24,w:4,n:1},{x:36,y:28,w:8,n:2},
    {x:44,y:24,w:12,n:3},{x:36,y:4,w:20,n:5},{x:4,y:4,w:32,n:8}
  ];
  const rects = squares.map(s=>`<rect x="${s.x}" y="${s.y}" width="${s.w}" height="${s.w}" class="fib-sq"/><text x="${s.x+s.w/2}" y="${s.y+s.w/2+3}" class="fib-label" font-size="${Math.min(s.w*0.4,9)}" text-anchor="middle">${s.n}</text>`).join("");
  let pathPts=[]; const cx=40, cy=28; const thetaMax = 6*(Math.PI/2); const r0=2;
  for(let i=0;i<=90;i++){
    const t = i/90*thetaMax;
    const r = r0*Math.pow(1.618034, t/(Math.PI/2));
    const x = cx - r*Math.cos(t);
    const y = cy - r*Math.sin(t);
    pathPts.push(`${i===0?"M":"L"}${x.toFixed(1)},${y.toFixed(1)}`);
  }
  return `<svg viewBox="0 0 60 40" class="topic-svg" role="img" aria-label="Fibonacci squares sized 1,1,2,3,5,8 with a golden spiral overlay">
    <g class="fib-group">${rects}<path d="${pathPts.join(" ")}" class="fib-spiral" fill="none"/></g>
  </svg>`;
}
function svgSymmetryDiagram(){
  return `<svg viewBox="0 0 120 80" class="topic-svg" role="img" aria-label="A butterfly shape split evenly by a vertical line of symmetry">
    <line x1="60" y1="6" x2="60" y2="74" class="sym-axis" stroke-dasharray="4 3"/>
    <path d="M60,40 C40,10 10,15 14,35 C16,50 40,50 60,40 Z" class="sym-wing"/>
    <path d="M60,40 C80,10 110,15 106,35 C104,50 80,50 60,40 Z" class="sym-wing"/>
    <path d="M60,40 C48,55 30,60 34,68 C38,74 55,66 60,48 Z" class="sym-wing"/>
    <path d="M60,40 C72,55 90,60 86,68 C82,74 65,66 60,48 Z" class="sym-wing"/>
  </svg>`;
}
function svgPolygonDiagram(){
  return `<svg viewBox="0 0 200 90" class="topic-svg" role="img" aria-label="A convex pentagon compared with a concave L-shaped polygon">
    <polygon points="40,10 65,30 55,70 25,70 15,30" class="poly-shape poly-convex"/>
    <text x="40" y="86" class="poly-caption" text-anchor="middle">Convex</text>
    <polygon points="120,10 180,10 180,70 150,70 150,40 120,40" class="poly-shape poly-concave"/>
    <text x="150" y="86" class="poly-caption" text-anchor="middle">Concave</text>
  </svg>`;
}
function svgTransformDiagram(){
  return `<svg viewBox="0 0 240 70" class="topic-svg" role="img" aria-label="Translation, reflection, rotation, and dilation shown on a triangle">
    <g>
      <polygon points="20,52 33,24 44,52" class="tr-shape tr-ghost"/>
      <polygon points="20,44 33,16 44,44" class="tr-shape"/>
      <text x="32" y="65" class="tr-caption" text-anchor="middle">Translate</text>
    </g>
    <g>
      <line x1="90" y1="10" x2="90" y2="55" class="tr-axis" stroke-dasharray="3 2"/>
      <polygon points="72,52 85,24 96,52" class="tr-shape"/>
      <polygon points="108,52 95,24 84,52" class="tr-shape tr-ghost"/>
      <text x="90" y="65" class="tr-caption" text-anchor="middle">Reflect</text>
    </g>
    <g>
      <polygon points="140,52 153,24 164,52" class="tr-shape tr-ghost"/>
      <polygon points="140,52 153,24 164,52" class="tr-shape" transform="rotate(35 152 45)"/>
      <text x="152" y="65" class="tr-caption" text-anchor="middle">Rotate</text>
    </g>
    <g>
      <polygon points="197,52 205,34 213,52" class="tr-shape"/>
      <polygon points="188,58 205,18 222,58" class="tr-shape tr-ghost"/>
      <text x="205" y="65" class="tr-caption" text-anchor="middle">Dilate</text>
    </g>
  </svg>`;
}
function hexPoints(cx,cy,r){
  let p=[];
  for(let i=0;i<6;i++){
    const ang = Math.PI/180*(60*i+30);
    p.push((cx+r*Math.cos(ang)).toFixed(1)+","+(cy+r*Math.sin(ang)).toFixed(1));
  }
  return p.join(" ");
}
function svgTessellationDiagram(){
  const r=15; const w=r*Math.sqrt(3);
  const centers=[[w,26],[2*w,26],[1.5*w,26+1.5*r],[0.5*w,26+1.5*r],[2.5*w,26+1.5*r],[w,26+3*r],[2*w,26+3*r]];
  const polys = centers.map(([cx,cy])=>`<polygon points="${hexPoints(cx+8,cy+2,r)}" class="tess-hex"/>`).join("");
  return `<svg viewBox="0 0 130 105" class="topic-svg" role="img" aria-label="Regular hexagons tiling a plane with no gaps, like a honeycomb">${polys}</svg>`;
}
function svgLogicDiagram(){
  return `<svg viewBox="0 0 240 70" class="topic-svg" role="img" aria-label="Diagram of a conditional statement p implies q">
    <defs><marker id="arrowhead" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" class="logic-arrowhead"/></marker></defs>
    <rect x="20" y="20" width="60" height="34" rx="10" class="logic-box"/>
    <text x="50" y="41" text-anchor="middle" class="logic-text">p</text>
    <line x1="80" y1="37" x2="150" y2="37" class="logic-line" marker-end="url(#arrowhead)"/>
    <text x="115" y="28" text-anchor="middle" class="logic-caption">then</text>
    <rect x="150" y="20" width="60" height="34" rx="10" class="logic-box"/>
    <text x="180" y="41" text-anchor="middle" class="logic-text">q</text>
  </svg>`;
}
const SVG_MAKERS = {
  fibonacci: svgFibonacci, symmetry: svgSymmetryDiagram, polygon: svgPolygonDiagram,
  transform: svgTransformDiagram, tessellation: svgTessellationDiagram, logic: svgLogicDiagram
};

/* ============================= VENN (interactive) ============================= */
function vennMarkup(){
  return `<div class="venn-wrap">
    <svg viewBox="0 0 200 130" class="topic-svg venn-svg" id="vennSvg">
      <rect x="6" y="6" width="188" height="118" rx="10" fill="none" class="venn-uborder"/>
      <text x="14" y="22" class="venn-label venn-ulabel">U</text>
      <rect id="vennRectFill" x="6" y="6" width="188" height="118" rx="10" fill="none"/>
      <circle id="vennAFill" cx="80" cy="68" r="42" fill="none"/>
      <circle id="vennBFill" cx="122" cy="68" r="42" fill="none"/>
      <circle id="vennLensFill" cx="80" cy="68" r="42" fill="none" clip-path="url(#vennClipB)"/>
      <clipPath id="vennClipB"><circle cx="122" cy="68" r="42"/></clipPath>
      <circle cx="80" cy="68" r="42" class="venn-outline"/>
      <circle cx="122" cy="68" r="42" class="venn-outline"/>
      <text x="58" y="45" class="venn-label">A</text>
      <text x="145" y="45" class="venn-label">B</text>
    </svg>
    <div class="venn-buttons" id="vennButtons">
      <button class="chip active" data-mode="union">A ∪ B</button>
      <button class="chip" data-mode="intersection">A ∩ B</button>
      <button class="chip" data-mode="diffA">A − B</button>
      <button class="chip" data-mode="diffB">B − A</button>
      <button class="chip" data-mode="symdiff">A Δ B</button>
      <button class="chip" data-mode="complementA">A′</button>
    </div>
  </div>`;
}
const VENN_MODES = {
  union:        {rect:"none", a:"H", b:"H", lens:"H"},
  intersection: {rect:"none", a:"none", b:"none", lens:"H"},
  diffA:        {rect:"none", a:"H", b:"none", lens:"BG"},
  diffB:        {rect:"none", a:"none", b:"H", lens:"BG"},
  symdiff:      {rect:"none", a:"H", b:"H", lens:"BG"},
  complementA:  {rect:"H", a:"BG", b:"none", lens:"BG"}
};
function applyVennMode(mode){
  const cfg = VENN_MODES[mode]; if(!cfg) return;
  const css = getComputedStyle(document.documentElement);
  const H = css.getPropertyValue("--u3").trim() || "#5B4B9A";
  const BG = css.getPropertyValue("--bg-alt").trim() || "#fff";
  const resolve = v => v==="H" ? H : v==="BG" ? BG : "none";
  const rectEl = document.getElementById("vennRectFill");
  const aEl = document.getElementById("vennAFill");
  const bEl = document.getElementById("vennBFill");
  const lensEl = document.getElementById("vennLensFill");
  if(rectEl) rectEl.setAttribute("fill", resolve(cfg.rect));
  if(aEl) aEl.setAttribute("fill", resolve(cfg.a));
  if(bEl) bEl.setAttribute("fill", resolve(cfg.b));
  if(lensEl) lensEl.setAttribute("fill", resolve(cfg.lens));
}
function initVennInteractivity(container){
  const btnWrap = container.querySelector("#vennButtons");
  if(!btnWrap) return;
  applyVennMode("union");
  btnWrap.addEventListener("click", e=>{
    const btn = e.target.closest("button[data-mode]");
    if(!btn) return;
    btnWrap.querySelectorAll("button").forEach(b=>b.classList.remove("active"));
    btn.classList.add("active");
    applyVennMode(btn.dataset.mode);
  });
}

/* ============================= STATE ============================= */
let openedTopics = new Set(store("openedTopics", []));
let masteredCards = new Set(store("masteredCards", []));
let quizHighScore = store("quizHighScore", 0);
let activeUnit = "u1";

/* ============================= THEME ============================= */
function initTheme(){
  const saved = localStorage.getItem("theme");
  const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  const isDark = saved ? saved==="dark" : prefersDark;
  document.documentElement.classList.toggle("dark", isDark);
  document.getElementById("themeToggle").textContent = isDark ? "☀️" : "🌙";
}
document.getElementById("themeToggle").addEventListener("click", ()=>{
  const isDark = document.documentElement.classList.toggle("dark");
  localStorage.setItem("theme", isDark?"dark":"light");
  document.getElementById("themeToggle").textContent = isDark ? "☀️" : "🌙";
});

/* ============================= DASHBOARD ============================= */
function updateDashboard(){
  const progressPct = Math.round((openedTopics.size/TOPICS.length)*100);
  document.getElementById("progressFill").style.width = progressPct+"%";
  const dashGrid = document.getElementById("dashGrid");
  dashGrid.innerHTML = `
    <div class="stat-card"><div class="stat-label">Course</div><div class="stat-value" style="font-size:16px;">4 Units</div><div class="stat-sub">${TOPICS.length} topics total</div></div>
    <div class="stat-card"><div class="stat-label">Study Progress</div><div class="stat-value">${progressPct}%</div><div class="stat-sub">${openedTopics.size}/${TOPICS.length} topics viewed</div></div>
    <div class="stat-card"><div class="stat-label">Flashcards Mastered</div><div class="stat-value">${masteredCards.size}/${FLASHCARDS.length}</div><div class="stat-sub">Keep flipping!</div></div>
    <div class="stat-card"><div class="stat-label">Quiz Best Score</div><div class="stat-value">${quizHighScore}/${QUIZ.length}</div><div class="stat-sub">Retake anytime</div></div>
  `;
}

/* ============================= TABS ============================= */
function renderTabs(){
  const tabbar = document.getElementById("tabbar");
  tabbar.innerHTML = UNITS.map(u=>`<button class="tab-btn ${u.id===activeUnit?"active":""}" data-unit="${u.id}">${u.icon} ${u.name}</button>`).join("");
  tabbar.querySelectorAll(".tab-btn").forEach(btn=>{
    btn.addEventListener("click", ()=>{
      activeUnit = btn.dataset.unit;
      document.getElementById("searchInput").value = "";
      renderTabs();
      renderTopics();
    });
  });
}

/* ============================= TOPIC CARDS ============================= */
function topicBodyHTML(t){
  let svgHtml = "";
  if(t.svg === "venn") svgHtml = vennMarkup();
  else if(t.svg && SVG_MAKERS[t.svg]) svgHtml = SVG_MAKERS[t.svg]();
  return `
    <div class="def-line"><strong>Definition:</strong> ${t.def}</div>
    ${t.explain ? `<div class="box example">💬 ${t.explain}</div>` : ""}
    ${svgHtml}
    ${t.notes ? `<div class="box notes">📝 <strong>Notes:</strong> ${t.notes}</div>` : ""}
    ${t.example ? `<div class="box example">✏️ <strong>Example:</strong> ${t.example}</div>` : ""}
    ${t.mnemonic ? `<div class="box tip">💡 <strong>Memory tip:</strong> ${t.mnemonic}</div>` : ""}
    ${t.trap ? `<div class="box trap">⚠️ <strong>Exam trap:</strong> ${t.trap}</div>` : ""}
  `;
}
function buildTopicCard(t){
  const card = document.createElement("div");
  card.className = "topic-card";
  card.dataset.unit = t.unit;
  card.style.setProperty("--tint", `var(--${t.unit})`);
  card.style.setProperty("--tint-bg", `var(--${t.unit}-bg)`);
  card.innerHTML = `
    <button class="topic-head" aria-expanded="false">
      <span class="topic-tag">${t.unit.toUpperCase()}</span>
      <span class="topic-title">${t.title}</span>
      <span class="chevron">⌄</span>
    </button>
    <div class="topic-body"><div class="topic-inner"><div class="topic-inner-pad">${topicBodyHTML(t)}</div></div></div>
  `;
  const head = card.querySelector(".topic-head");
  head.addEventListener("click", ()=>{
    const isOpen = card.classList.toggle("open");
    head.setAttribute("aria-expanded", isOpen);
    if(isOpen){
      if(!openedTopics.has(t.id)){
        openedTopics.add(t.id);
        saveStore("openedTopics", [...openedTopics]);
        updateDashboard();
      }
      if(t.svg === "venn"){
        const wrap = card.querySelector(".venn-wrap");
        if(wrap && !wrap.dataset.wired){ initVennInteractivity(card); wrap.dataset.wired="1"; }
      }
    }
  });
  return card;
}
function renderTopics(){
  const list = document.getElementById("topicList");
  const meta = document.getElementById("resultsMeta");
  const query = document.getElementById("searchInput").value.trim().toLowerCase();
  list.innerHTML = "";
  let items;
  if(query){
    items = TOPICS.filter(t => (t.title+" "+t.def+" "+(t.explain||"")).toLowerCase().includes(query));
    meta.textContent = `${items.length} result${items.length===1?"":"s"} for "${query}" across all units`;
  } else {
    items = TOPICS.filter(t => t.unit === activeUnit);
    meta.textContent = `${UNIT_LOOKUP[activeUnit].name} · ${items.length} topics`;
  }
  items.forEach(t => list.appendChild(buildTopicCard(t)));
}
document.getElementById("searchInput").addEventListener("input", renderTopics);

/* ============================= FLASHCARDS ============================= */
let fcFilter = "all";
let fcOrder = shuffle(FLASHCARDS.map((c,i)=>i));
let fcPos = 0;
let fcFlipped = false;

function fcCurrentList(){
  return fcFilter==="all" ? FLASHCARDS : FLASHCARDS.filter(c=>c.unit===fcFilter);
}
function fcRebuild(){
  const list = fcCurrentList();
  fcOrder = shuffle(list.map((c)=>FLASHCARDS.indexOf(c)));
  fcPos = 0; fcFlipped = false;
  renderFlashcard();
}
function renderFlashcardFilterBar(){
  const bar = document.getElementById("fcFilterBar");
  const opts = [{id:"all", name:"All units"}, ...UNITS];
  bar.innerHTML = opts.map(o=>`<button class="chip ${fcFilter===o.id?"active":""}" data-f="${o.id}">${o.name}</button>`).join("");
  bar.querySelectorAll("button").forEach(b=>b.addEventListener("click", ()=>{
    fcFilter = b.dataset.f; renderFlashcardFilterBar(); fcRebuild();
  }));
}
function renderFlashcard(){
  if(fcOrder.length===0){
    document.getElementById("fcFrontText").textContent = "No cards in this unit";
    document.getElementById("fcBackText").textContent = "";
    document.getElementById("fcProgress").textContent = "";
    return;
  }
  const card = FLASHCARDS[fcOrder[fcPos]];
  document.getElementById("fcFrontTag").textContent = UNIT_LOOKUP[card.unit].name.toUpperCase();
  document.getElementById("fcFrontText").textContent = card.f;
  document.getElementById("fcBackText").textContent = card.b;
  document.getElementById("fcCard").classList.toggle("flipped", fcFlipped);
  const mastered = masteredCards.has(card.id);
  document.getElementById("fcMaster").classList.toggle("is-mastered", mastered);
  document.getElementById("fcMaster").textContent = mastered ? "⭐ Mastered" : "☆ Mark mastered";
  document.getElementById("fcProgress").textContent = `Card ${fcPos+1} / ${fcOrder.length} · ${masteredCards.size} mastered overall`;
}
document.getElementById("fcCard").addEventListener("click", ()=>{
  fcFlipped = !fcFlipped;
  document.getElementById("fcCard").classList.toggle("flipped", fcFlipped);
});
document.getElementById("fcPrev").addEventListener("click", ()=>{
  if(fcOrder.length===0) return;
  fcPos = (fcPos-1+fcOrder.length)%fcOrder.length; fcFlipped=false; renderFlashcard();
});
document.getElementById("fcNext").addEventListener("click", ()=>{
  if(fcOrder.length===0) return;
  fcPos = (fcPos+1)%fcOrder.length; fcFlipped=false; renderFlashcard();
});
document.getElementById("fcShuffle").addEventListener("click", fcRebuild);
document.getElementById("fcMaster").addEventListener("click", ()=>{
  if(fcOrder.length===0) return;
  const card = FLASHCARDS[fcOrder[fcPos]];
  if(masteredCards.has(card.id)) masteredCards.delete(card.id); else masteredCards.add(card.id);
  saveStore("masteredCards", [...masteredCards]);
  updateDashboard(); renderFlashcard();
});

/* ============================= QUIZ ============================= */
let quizState = null;
function startQuiz(){
  const qs = shuffle(QUIZ).map(q=>{
    const choiceObjs = q.choices.map((text,i)=>({text, correct:i===q.correct}));
    return {...q, shuffledChoices: shuffle(choiceObjs)};
  });
  quizState = {questions:qs, index:0, score:0, answered:false};
  renderQuiz();
}
function renderQuiz(){
  const box = document.getElementById("quizCard");
  if(!quizState){ startQuiz(); return; }
  if(quizState.index >= quizState.questions.length){
    const isHigh = quizState.score > quizHighScore;
    if(isHigh){ quizHighScore = quizState.score; saveStore("quizHighScore", quizHighScore); updateDashboard(); }
    box.innerHTML = `
      <div class="quiz-final">
        <div style="font-size:14px;color:var(--ink-soft);">Quiz complete</div>
        <div class="score-big">${quizState.score} / ${quizState.questions.length}</div>
        <p class="sub" style="color:var(--ink-soft);">${isHigh ? "🎉 New personal best!" : `Personal best: ${quizHighScore}/${quizState.questions.length}`}</p>
        <button class="btn primary" id="quizRetry">🔁 Retry Quiz</button>
      </div>`;
    document.getElementById("quizRetry").addEventListener("click", startQuiz);
    return;
  }
  const q = quizState.questions[quizState.index];
  box.innerHTML = `
    <div class="quiz-meta"><span>${UNIT_LOOKUP[q.unit].name}</span><span>Question ${quizState.index+1} / ${quizState.questions.length}</span></div>
    <div class="quiz-track"><div class="quiz-track-fill" style="width:${(quizState.index/quizState.questions.length)*100}%"></div></div>
    <div class="quiz-q">${q.q}</div>
    <div class="quiz-choices" id="quizChoices">
      ${q.shuffledChoices.map((c,i)=>`<button class="quiz-choice" data-i="${i}">${c.text}</button>`).join("")}
    </div>
    <div class="quiz-explain" id="quizExplain">${q.ex}</div>
    <div class="quiz-actions"><button class="btn primary" id="quizNext" style="display:none;">Next ⟶</button></div>
  `;
  quizState.answered = false;
  document.querySelectorAll("#quizChoices .quiz-choice").forEach(btn=>{
    btn.addEventListener("click", ()=>{
      if(quizState.answered) return;
      quizState.answered = true;
      const i = +btn.dataset.i;
      const chosen = q.shuffledChoices[i];
      document.querySelectorAll("#quizChoices .quiz-choice").forEach((b2,i2)=>{
        b2.disabled = true;
        if(q.shuffledChoices[i2].correct) b2.classList.add("correct");
        else if(i2===i) b2.classList.add("wrong");
      });
      if(chosen.correct) quizState.score++;
      document.getElementById("quizExplain").classList.add("show");
      document.getElementById("quizNext").style.display = "inline-flex";
    });
  });
  document.getElementById("quizNext").addEventListener("click", ()=>{
    quizState.index++; renderQuiz();
  });
}

/* ============================= GAME: MATCH ============================= */
let matchState = null;
function startMatch(){
  const left = shuffle(MATCH_PAIRS.map(p=>({id:p.id, text:p.term})));
  const right = shuffle(MATCH_PAIRS.map(p=>({id:p.id, text:p.def})));
  matchState = {left, right, selLeft:null, selRight:null, matched:new Set()};
  renderMatch();
}
function renderMatch(){
  const leftCol = document.getElementById("matchLeft");
  const rightCol = document.getElementById("matchRight");
  leftCol.innerHTML = matchState.left.map((item,i)=>`<button class="match-item ${matchState.matched.has(item.id)?"matched":""} ${matchState.selLeft===i?"selected":""}" data-side="left" data-i="${i}">${item.text}</button>`).join("");
  rightCol.innerHTML = matchState.right.map((item,i)=>`<button class="match-item ${matchState.matched.has(item.id)?"matched":""} ${matchState.selRight===i?"selected":""}" data-side="right" data-i="${i}">${item.text}</button>`).join("");
  document.getElementById("matchStatus").textContent = matchState.matched.size===MATCH_PAIRS.length
    ? "🎉 All matched! Great recall." : `${matchState.matched.size} / ${MATCH_PAIRS.length} matched`;
  document.querySelectorAll(".match-item").forEach(btn=>{
    btn.addEventListener("click", ()=>{
      const side = btn.dataset.side, i = +btn.dataset.i;
      const item = matchState[side][i];
      if(matchState.matched.has(item.id)) return;
      if(side==="left") matchState.selLeft = i; else matchState.selRight = i;
      renderMatch();
      if(matchState.selLeft!==null && matchState.selRight!==null){
        const l = matchState.left[matchState.selLeft], r = matchState.right[matchState.selRight];
        if(l.id === r.id){
          matchState.matched.add(l.id);
          matchState.selLeft = null; matchState.selRight = null;
          renderMatch();
        } else {
          const lBtn = document.querySelector(`.match-item[data-side="left"][data-i="${matchState.selLeft}"]`);
          const rBtn = document.querySelector(`.match-item[data-side="right"][data-i="${matchState.selRight}"]`);
          if(lBtn) lBtn.classList.add("wrong");
          if(rBtn) rBtn.classList.add("wrong");
          setTimeout(()=>{ matchState.selLeft=null; matchState.selRight=null; renderMatch(); }, 550);
        }
      }
    });
  });
}
document.getElementById("matchReset").addEventListener("click", startMatch);

/* ============================= GAME: TRUE/FALSE ============================= */
let tfState = null;
function startTF(){ tfState = {questions:shuffle(TRUEFALSE), index:0, score:0, answered:false}; renderTF(); }
function renderTF(){
  const feedback = document.getElementById("tfFeedback");
  const finalEl = document.getElementById("tfFinal");
  feedback.textContent = ""; finalEl.textContent = "";
  if(tfState.index >= tfState.questions.length){
    document.getElementById("tfQuestion").textContent = "Challenge complete!";
    document.getElementById("tfCount").textContent = "";
    document.getElementById("tfScoreTop").textContent = "";
    finalEl.textContent = `Final score: ${tfState.score} / ${tfState.questions.length}`;
    document.getElementById("tfTrue").style.display="none";
    document.getElementById("tfFalse").style.display="none";
    let retryBtn = document.getElementById("tfRetry");
    if(!retryBtn){
      retryBtn = document.createElement("button");
      retryBtn.id="tfRetry"; retryBtn.className="btn round"; retryBtn.style.marginTop="10px";
      retryBtn.textContent="🔁 Play again";
      finalEl.after(retryBtn);
    }
    retryBtn.onclick = ()=>{ retryBtn.remove(); document.getElementById("tfTrue").style.display=""; document.getElementById("tfFalse").style.display=""; startTF(); };
    return;
  }
  const q = tfState.questions[tfState.index];
  document.getElementById("tfCount").textContent = `Question ${tfState.index+1} / ${tfState.questions.length}`;
  document.getElementById("tfScoreTop").textContent = `Score: ${tfState.score}`;
  document.getElementById("tfQuestion").textContent = q.q;
  tfState.answered = false;
  document.getElementById("tfTrue").disabled = false;
  document.getElementById("tfFalse").disabled = false;
}
function answerTF(val){
  if(!tfState || tfState.answered || tfState.index>=tfState.questions.length) return;
  tfState.answered = true;
  document.getElementById("tfTrue").disabled = true;
  document.getElementById("tfFalse").disabled = true;
  const q = tfState.questions[tfState.index];
  const correct = val === q.a;
  if(correct) tfState.score++;
  document.getElementById("tfFeedback").textContent = (correct ? "✅ Correct — " : "❌ Not quite — ") + q.ex;
  setTimeout(()=>{ tfState.index++; renderTF(); }, 1400);
}
document.getElementById("tfTrue").addEventListener("click", ()=>answerTF(true));
document.getElementById("tfFalse").addEventListener("click", ()=>answerTF(false));

/* ============================= FORMULA MODAL ============================= */
function renderFormulaModal(){
  document.getElementById("formulaList").innerHTML = FORMULAS.map(f=>`
    <div class="formula-row"><span class="flabel">${f.label}</span><span class="fval">${f.val}</span></div>
  `).join("");
}
document.getElementById("formulaFab").addEventListener("click", ()=>{
  document.getElementById("formulaModal").classList.add("show");
});
document.getElementById("closeFormula").addEventListener("click", ()=>{
  document.getElementById("formulaModal").classList.remove("show");
});
document.getElementById("formulaModal").addEventListener("click", (e)=>{
  if(e.target.id==="formulaModal") document.getElementById("formulaModal").classList.remove("show");
});

/* ============================= STUDY MODE ============================= */
let studyIndex = 0;
function openStudyMode(){
  studyIndex = 0;
  document.getElementById("studyOverlay").classList.add("show");
  renderStudyTopic();
}
function renderStudyTopic(){
  const t = TOPICS[studyIndex];
  document.getElementById("studyCounter").textContent = `Topic ${studyIndex+1} / ${TOPICS.length} · ${UNIT_LOOKUP[t.unit].name}`;
  document.getElementById("studyContent").innerHTML = `<h3>${t.title}</h3><div class="topic-inner-pad">${topicBodyHTML(t)}</div>`;
  const wrap = document.getElementById("studyContent").querySelector(".venn-wrap");
  if(wrap) initVennInteractivity(document.getElementById("studyContent"));
  if(!openedTopics.has(t.id)){
    openedTopics.add(t.id); saveStore("openedTopics",[...openedTopics]); updateDashboard();
  }
}
document.getElementById("studyFab").addEventListener("click", openStudyMode);
document.getElementById("studyExit").addEventListener("click", ()=>{
  document.getElementById("studyOverlay").classList.remove("show");
});
document.getElementById("studyPrev").addEventListener("click", ()=>{
  studyIndex = (studyIndex-1+TOPICS.length)%TOPICS.length; renderStudyTopic();
});
document.getElementById("studyNext").addEventListener("click", ()=>{
  studyIndex = (studyIndex+1)%TOPICS.length; renderStudyTopic();
});

/* ============================= INIT ============================= */
function init(){
  initTheme();
  updateDashboard();
  renderTabs();
  renderTopics();
  renderFlashcardFilterBar();
  fcRebuild();
  renderFormulaModal();
  startQuiz();
  startMatch();
  startTF();
}
init();
