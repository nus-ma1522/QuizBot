const dialogueSystem = {
  p0: {
    type: "plain",
    content: "To start everything off, let's first recall what you have learnt in school!<br><br>" +
    "Have ya seen this before?<br>" +
    "$y = mx + c$",
    next: "p1"
  },

  p1: {
    type: "dialogue",
    content: "Do you still remember what that thing is called?",
    options: {
      0: "Equation of a line",
      1: "Linear equation",
      2: "Well, I was sleeping in class..."
    },
    respondToIdx: {
      0: "p2",
      1: "p2",
      2: "p1r1"
    }
  },

  p1r1: {
    type: "image",
    content: "images/cipher_pitiful.png",
    sticker: true,
    next: "p1r2"
  },

  p1r2: {
    type: "plain",
    content: "Oh. Um. No worries, it's okay!",
    next: "p2"
  },

  p2: {
    type: "plain",
    content: "It's the equation of a line, where $x, y$ are the variables and $m, c$ are fixed values.<br><br>" +
    "We also call it a <b>linear equation</b> in $x, y$.<br>" +
    "If you plot it with $x,y$ as the axes, you get a straight line, with no curves, bends, breaks or whatsoever.<br>" +
    "Makes sense, right?",
    next: "def_linear_eqn"
  },


  def_linear_eqn: {
    type: "tex",
    content: "$$ \\textbf{\\Large Linear Equations} \\\\ $$" +
      "$ \\text{A linear equation with } n \\text{ variables in standard form is written as:} \\\\$" +
      "$$ a_1 x_1 + a_2 x_2 + \\ldots + a_n x_n = b $$" +
      "$ \\text{• } a_1, a_2, \\ldots, a_n \\text{ are known constants, called the coefficients.} \\\\$" +
      "$ \\text{• } b \\text{ is called the constant} \\\\$" +
      "$ \\text{• } x_1, x_2, \\ldots, x_n \\text{ are variables} \\\\ \\text{ } \\\\$" +
      "$ \\text{The linear equation is homogeneous if } b = 0 \\text{, i.e.} \\\\$" +
      "$$ a_1 x_1 + a_2 x_2 + \\ldots + a_n x_n = 0 \\\\ \\text{ } $$",
    previewText: "Definition: Linear Equations",
    important: true,
    systemMessage: "You may view starred messages anytime by clicking on the star icon on the top right corner.",
    next: "p3"
  },

  p3: {
    type: "mcq",
    content: "Vibe check! Which of the following equations are linear in $x$ and $y$? (Select all that apply)",
    options: {
      0: "<b>a</b>. $x + y = 1$",
      1: "<b>b</b>. $x + x^2 = y$",
      2: "<b>c</b>. $\\sin(x) + \\cos(y) = 1$",
      3: "<b>d</b>. $x + \\sin^2(x) + \\cos^2(x) = y$"
    },
    answersIdx: new Set([0, 3]),
    next: "p4",
    systemMessage: "Disclaimer: All questions in the interactives are NOT graded."
  },

  p4: {
    type: "plain",
    content: "<b>b</b> & <b>c</b> contain nonlinear terms like $x^2$, $\\sin(x)$, etc. (They don't form straight lines when plotted, so they're not linear)<br>" + 
    "<b>d</b> is a trick option: by using the identity $ \\sin^2(x) + \\cos^2(x) = 1$, it can be simplified to $ x - y = -1 $. 🤓",
    next: "p7"
  },

  p7: {
    type: "plain",
    content: "Now, it's time to step things up. Remember simultaneous linear equations?<br>" +
    "Here in MA1522, we call them <b>linear systems</b>:",
    next: "def_linear_system"
  },

  def_linear_system: {
    type: "tex",
    content: "$$ \\textbf{\\Large Linear Systems} \\\\ $$" +
      "$ \\text{A system of linear equations, or a linear system consists of a finite number} \\\\$" +
      "$ \\text{of linear equations. In general, a linear system with } n \\text{ variables and } m \\\\$" +
      "$ \\text{equations in standard form is written as:} \\\\$" +
      "$$ \\begin{cases}" +
      "a_{11} x_1 + a_{12} x_2 + \\ldots + a_{1n} x_n = b_1 \\\\" +
      "a_{21} x_1 + a_{22} x_2 + \\ldots + a_{2n} x_n = b_2 \\\\" +
      "\\hphantom{mmmmmmnnn} \\vdots \\\\" +
      "a_{m1} x_1 + a_{m2} x_2 + \\ldots + a_{mn} x_n = b_m" +
      "\\end{cases} $$" +
      "$ \\text{The linear system is homogeneous if } b_1 = b_2 = \\ldots = b_m = 0 \\text{,} \\\\$" +
      "$ \\text{that is, all the linear equations are homogeneous.} \\\\ \\text{ } \\\\$",
    previewText: "Definition: Linear Systems",
    important: true,
    next: "p8"
  },

  p8: {
    type: "dialogue",
    content: "How would you solve the following:<br>" +
    "$-(x-(3-(5y)))=5-4y-2(x+y) \\\\" +
    "-((-3+y)+x)+y=-(((-3+x)-y))-x$",
    options: {
      0: "😭😭 are you making fun of me?",
      1: "Ermm what the sigma.",
      2: "Simplify them"
    },
    respondToIdx: {
      0: "p8r1",
      1: "p8r1",
      2: "p8r2"
    }
  },

  p8r1: {
    type: "plain",
    content: "Sorry! I didn't mean to intimidate you...🥹<br>" +
    "I'll simplify them first by expressing them in <b>standard form</b>!",
    next: "p9"
  },

  p8r2: {
    type: "plain",
    content: "Correct! The first step is to simplify them.<br>" +
    "We do this by expressing them in <b>standard form</b>!",
    next: "p9"
  },

  p9: {
    type: "dialogue",
    content: "Now, how would you proceed:<br>" +
    "$x + y = 2 \\\\ x - y = 0$",
    options: {
      0: "Substitution method (eg. Use the substitution $y = 2 - x$ in $ \\text{Eq.2} $, and so on)",
      1: "Elimination method (eg. Eliminate $ y $ using $ \\text{Eq.1 + Eq.2} $, and so on)",
      2: "Graphical method (Find the point(s) of intersection between the lines)"
    },
    respondToIdx: {
      0: "p9r1",
      1: "p9r1",
      2: "p9r2"
    },
    systemMessage: "It's okay if you don't know how to solve linear systems yet. The detailed process will be covered in later sections."
  },

  p9r1: {
    type: "plain",
    content: "Well, that works! But for now, let’s approach the problem graphically:",
    next: "graph2d",
  },

  p9r2: {
    type: "plain",
    content: "Well, let's proceed with your approach! Here's a tool that we can use:",
    next: "graph2d"
  },

  graph2d: {
    type: "embed",
    content: "https://www.desmos.com/calculator/eksvln96so",
    previewText: "Visualize the intersection on Desmos",
    previewImage: "images/desmos_thumbnail.jpg",
    preload: true,
    important: true,
    next: "p10"
  },

  graph2da: {
    type: "embed",
    content: "https://www.desmos.com/calculator/eksvln96so",
    previewText: "Visualize the intersection on Desmos",
    previewImage: "images/desmos_thumbnail.jpg",
    preload: true,
    important: true,
    next: "p10a"
  },

  p10: {
    type: "single-mcq",
    content: "How many points of intersection do you see?",
    options: {
      0: "One point",
      1: "No points",
      2: "Infinitely many points"
    },
    answersIdx: new Set([0]),
    next: "p11"
  },

  p10a: {
    type: "single-mcq",
    content: "For the following:<br>" +
    "$x + y = 2 \\\\ x - y = 0$<br>" +
    "How many points of intersection do you see?",
    options: {
      0: "One point",
      1: "No points",
      2: "Infinitely many points"
    },
    answersIdx: new Set([0]),
    next: "p11"
  },

  p11: {
    type: "plain",
    content: "There’s <b>one point of intersection</b>, which is the <b>solution</b> to the system.<br>" +
    "We say this system is <b>consistent</b> because a solution exists!",
    next: "p12"
  },

  p12: {
    type: "single-mcq",
    content: "Now try these:<br>" +
    "$x + 2y = 5 \\\\ 2x + 4y = 10$<br>" +
    "How many points of intersection are there?",
    options: {
      0: "One point",
      1: "No points",
      2: "Infinitely many points"
    },
    answersIdx: new Set([2]),
    systemMessage: "Note: Reuse the Desmos page to change the equations",
    next: "p13"
  },

  p13: {
    type: "plain",
    content: "Firstly, notice that the equations represent the <b>same line</b>!<br>" +
    "Due to the overlap, every point across this line is a possible solution.<br>" +
    "This means <b>infinitely many solutions</b> exist, which is still consistent!",
    next: "p14"
  },

  p14: {
    type: "single-mcq",
    content: "What about:<br>" +
    "$x + 2y = 5 \\\\ 2x + 4y = 8$<br>" +
    "How many points of intersection are there?",
    options: {
      0: "One point",
      1: "No points",
      2: "Infinitely many points"
    },
    answersIdx: new Set([1]),
    next: "p15"
  },

  p15: {
    type: "plain",
    content: "These lines are parallel, with no point of intersection.<br>"+
    "This system is <b>inconsistent</b>, which means there is no solution...",
    next: "p16"
  },

  p16: {
    type: "single-mcq",
    content: "Now, it's time to spice things up! What if we had 3 variables and equations, for example:<br>" + 
    "$x + y + z = 6 \\\\ 2x - y + z = 1 \\\\ x + 2y - z = 4$<br>"+
    "What do the individual equations represent? (remember that we had lines previously)",
    options: {
      0: "Lines",
      1: "Planes",
      2: "Cubes"
    },
    answersIdx: new Set([1]),
    next: "p17"
  },

  p17: {
    type: "plain",
    content: "Since we now have 3 variables, we should visualize the system in 3 dimensions.<br>" +
    "Therefore, each equation represents a plane!<br>" + 
    "The solution will be the <b>point(s) of intersection of all planes (equations)</b>.",
    next: "graph3d"
  },

  graph3d: {
    type: "embed",
    content: "https://www.desmos.com/3d/xnmntoifby",
    previewText: "Visualize the intersection on Desmos (now in 3D)",
    previewImage: "images/desmos_thumbnail.jpg",
    preload: true,
    important: true,
    next: "p18"
  },

  p18: {
    type: "single-mcq",
    content: "For this system, how many points of intersection do you see?<br>" +
    "$x + y + z = 6 \\\\ 2x - y + z = 1 \\\\ x + 2y - z = 4$",
    options: {
      0: "One point",
      1: "No points",
      2: "Infinitely many points"
    },
    answersIdx: new Set([0]),
    next: "p19"
  },

  p19: {
    type: "single-mcq",
    content: "Is this system consistent?",
    options: {
      0: "Consistent",
      1: "Inconsistent"
    },
    answersIdx: new Set([0]),
    next: "p20"
  },

  p20: {
    type: "plain",
    content: "It’s <b>consistent</b> because all three planes <b>intersect</b> at one point!<br>",
    next: "p21"
  },

  p21: {
    type: "single-mcq",
    content: "How about:<br>" + 
    "$x + y + z = 1 \\\\ x - y + z = -1 \\\\ 2x + 2z = -3$<br>" +
    "How many points of intersection do you see?",
    options: {
      0: "One point",
      1: "No points",
      2: "Infinitely many points"
    },
    answersIdx: new Set([1]),
    next: "p22"
  },

  p22: {
    type: "single-mcq",
    content: "Is this system consistent?",
    options: {
      0: "Consistent",
      1: "Inconsistent"
    },
    answersIdx: new Set([1]),
    next: "p23"
  },

  p23: {
    type: "plain",
    content: "In this case, there isn't a single point that touches all three planes.<br>" + 
    "Which means, this system is <b>inconsistent</b>!",
    next: "p24"
  },

  p24: {
    type: "plain",
    content: "Sometimes in 3D, the planes may intersect along a line.<br>" + 
    "The following system is an example:<br>" + 
    "$x + y + z = 1 \\\\ x - y + z = -1 \\\\ 2x + 2z = 0$<br>",
    next: "p25"
  },

  p25: {
    type: "dialogue",
    content: "To find a solution, we can just pick any point across the line of intersection.<br>" +
    "But, what if we want to find the solution that captures all possible solutions — the <b>general solution</b>?",
    options: {
      0: "Find 2 different solutions, then the line that includes both of them",
      1: "Express it as a combination of a valid point and a directional vector scaled by some unknown",
      2: "Write them all down ✍️✍️✍️"
    },
    respondToIdx: {
      0: "p25r1",
      1: "p25r2",
      2: "p25r3"
    }
  },

  p25r1: {
    type: "plain",
    content: "Well, that's one way to do it!",
    next: "p26"
  },

  p25r2: {
    type: "plain",
    content: "Right on point!🎯",
    next: "p26"
  },

  p25r3: {
    type: "plain",
    content: "Unfortunately, there isn't enough time in the universe...",
    next: "p26"
  },

  p26: {
    type: "plain",
    content: "First, we will have to use something called <b>parameters</b>!<br>" + 
    "Parameters are arbitrary values, and the number of parameters we use correspond to the 'degrees of freedom' of the general solution.<br>",
    next: "p27"
  },

  p27: {
    type: "plain",
    content: "For the above, the general solution can be expressed as:<br>" + 
    "$x = -s, y = 1, z = s, s \\in \\mathbb{R}$.<br>" + 
    "Here's a visual guide to aid with understanding:",
    next: "p28"
  },

  p28: {
    type: "embed",
    content: "https://www.desmos.com/3d/sqycjbxmgr",
    previewText: "Visualize a general solution with 1 parameter",
    previewImage: "images/desmos_thumbnail.jpg",
    next: "p29",
    systemMessage: "Note: Press play on line 5 to animate the ball"
  },

  p29: {
    type: "dialogue",
    content: "Now, given the general solution, how do we verify that:<br>" + 
    "$ x = 1, y = 1, z = -1 $ is a valid solution?",
    options: {
      0: "Maybe we can find a value of $s$ that matches the point"
    },
    respondToIdx: {
      0: "p30"
    }
  },

  p30: {
    type: "plain",
    content: "Mhm! If $s$ exists for that point, then we can verify that it is solution!<br>" +
    "Let's see... We let $s = -1 $, then we get:<br>" +
    "$x = -s = 1, y = 1, z = s = -1$.<br>" +
    "Therefore, it is a valid solution!",
    next: "solutions"
  },

  solutions: {
    type: "tex",
    content: "$$ \\textbf{Solutions to a linear system} $$" +
      "$ \\text{Given a linear system, we say that:} \\\\$" +
      "$$ x_1 = c_1, x_2 = c_2, \\ldots, x_n = c_n $$" +
      "$ \\text{is a solution to the linear system if the equations are simultaneously} \\\\$" +
      "$ \\text{satisfied after making the substitution.} \\\\ \\text{ } \\\\$" + 
      "$ \\text{The general solution to a linear system captures all possible solutions} \\\\$" + 
      "$ \\text{to the linear system.} \\\\ \\text{ } \\\\$" + 
      "$ \\text{A linear system is said to be inconsistent if it does not have any solutions.} \\\\$" + 
      "$ \\text{Otherwise, a linear system is consistent if it has at least one solution.} $",
    previewText: "Solutions to a Linear System",
    important: true,
    next: "p31"
  },

  p31: {
    type: "plain",
    content: "Wow, we're almost at the end of section 1.1! But there's still one last thing:<br>" + 
    "<b>Homogeneous</b> linear systems. Ahem, this sounds intimidating, but trust me, it's not!",
    next: "p32"
  },

  p32: {
    type: "mcq",
    content: "A system is <b>homogeneous</b> when all the constant terms $b_1 = b_2 = \\ldots = b_n = 0$.<br>" +
    "Try plotting one, what do you notice? (Select all that apply)",
    options: {
      0: "All the lines/planes contain the origin",
      1: "No matter how many equations, they always intercept at the same point",
      2: "Setting all variables to 0 always satisfies each equation"
    },
    answersIdx: new Set([0,1,2]),
    systemMessage: "Note: You can revisit previous Desmos pages and set all constant terms to 0. Try playing around with the coefficients, or adding new equations as well.",
    next: "p33"
  },

  p33: {
    type: "plain",
    content: "That's right! A homogeneous linear system is guaranteed to be consistent.<br>" +
    "A valid solution can be trivially obtained by setting all variables to 0, no calculation needed!",
    next: "end"
  },

  end: {
    type: "plain",
    content: "Well, that sums up our discussion on linear equations and systems.<br>" +
    "🥹 I know I'm not invited, but if you have any doubts, clarify them on the Telegram group! See ya!",
    systemMessage: "🎉Congratulations! You have reached the end of Interactive 1.1!🎉"
  }
};

const compulsoryMessages = [
  "def_linear_eqn",
  "def_linear_system"
];

const checkpoints = [
  {
    id: "p0",
    label: "Start from beginning",
    showCompulsoryMessages: 0
  },
  {
    id: "graph2da",
    label: "Visualize systems in 2D",
    showCompulsoryMessages: 2
  },
  {
    id: "graph3d",
    label: "Visualize systems in 3D",
    showCompulsoryMessages: 2
  }
];