const dialogueSystem = {
  start: {
    type: "plain",
    content: "Let's begin by recalling what you've learned in school. Consider the equations: \\( x + y = 2 \\) and \\( x - y = 0 \\).",
    next: "p1",
  },

  p1: {
    type: "dialogue",
    content: "Do you still remember what such equations are called?",
    options: {
      0: "Simultaneous equations",
      1: "Linear equations",
      2: "I'm not sure"
    },
    respondToIdx: {
      0: "p1a",
      1: "p1b",
      2: "p2"
    }
  },

  p1a: {
    type: "plain",
    content: "Correct! ☝️🤓 But to be precise, they're simultaneous linear equations.",
    next: "p2"
  },

  p1b: {
    type: "plain",
    content: "That's correct!",
    next: "p2"
  },

  p2: {
    type: "plain",
    content: "They are called systems of linear equations (or linear systems), which involve multiple variables and equations.",
    next: "p3"
  },

  p3: {
    type: "plain",
    content: "I'll send their definitions over, so you can refer to them anytime!",
    next: "p4"
  },

  p4: {
    type: "image",
    content: "images/def_linear_eqn.png",
    important: true,
    next: "p5"
  },

  p5: {
    type: "image",
    content: "images/def_linear_system.png",
    important: true,
    next: "p6",
    systemMessage: "You may view starred messages by clicking on the star icon on the top right corner."
  },

  p6: {
    type: "plain",
    content: "Now, take a look at the following equations and try to identify their properties.",
    next: "p7"
  },

  p7: {
    type: "mcq",
    content: "Which of these are linear equations? (Select all that apply)",
    options: {
      0: "\\( x + (y + x) = 3 \\)",
      1: "\\( x^2 + y + z = 5 \\)",
      2: "\\( x + 3y + 2z = 0 \\)",
      3: "\\( y = \\sin(x) \\)",
      4: "\\( x + 1 = 1 - y \\)"
    },
    answersIdx: new Set([0, 2, 4]),
    next: "p8"
  },

  p8: {
    type: "mcq",
    content: "Which of these are linear and in standard form?",
    options: {
      0: "\\( x + (y + x) = 3 \\)",
      1: "\\( x + 3y + 2z = 0 \\)",
      2: "\\( x + 1 = 1 - y \\)"
    },
    answersIdx: new Set([1]),
    next: "p9"
  },

  p9: {
    type: "mcq",
    content: "Which of these are homogeneous linear equations?",
    options: {
      0: "\\( x + (y + x) = 3 \\)",
      1: "\\( x + 3y + 2z = 0 \\)",
      2: "\\( x + 1 = 1 - y \\)"
    },
    answersIdx: new Set([1, 2]),
    next: "p10"
  },

  p10: {
    type: "image",
    content: "images/cipher_pitiful.png",
    sticker: true,
    next: "p11"
  },

  p11: {
    type: "plain",
    content: "Oops! I forgot to send you some definitions earlier... Don't worry if you got them wrong!",
    next: "p12"
  },

  p12: {
    type: "image",
    content: "images/def_standard_form.png",
    important: true,
    next: "p13"
  },

  p13: {
    type: "image",
    content: "images/def_homogeneous_system.png",
    important: true,
    next: "p14"
  },

  p14: {
    type: "plain",
    content: "Now, get ready~ It's time to do some actual work!",
    next: "p14a"
  },

  p14a: {
    type: "embed",
    content: "https://www.desmos.com/calculator/jmmn4dlzhf",
    previewText: "Here's a tool to visualize (Desmos)",
    previewImage: "images/desmos_thumbnail.jpg",
    preload: true,
    important: true,
    next: "p15"
  },

  p15: {
    type: "single-mcq",
    content: "What is the solution of: \\( x - y = 0 \\) and \\( x + y = 2 \\)?",
    options: {
      0: "\\( x = 1 \\), \\( y = 1 \\)",
      1: "Infinitely many solutions",
      2: "No solution"
    },
    answersIdx: new Set([0]),
    next: "p15a"
  },

  p15a: {
    type: "plain",
    content: "If you've noticed, the solution is basically the point of intersection!",
    next: "p16"
  },

  p16: {
    type: "single-mcq",
    content: "What is the solution of: \\( x + 2y = 5 \\) and \\( 2x + 4y = 8 \\)?",
    options: {
      0: "\\( x = 1 \\), \\( y = 2 \\)",
      1: "Infinitely many solutions",
      2: "No solution"
    },
    answersIdx: new Set([2]),
    next: "p16a"
  },

  p16a: {
    type: "dialogue",
    content: "What did you see this time? Spill it!",
    options: {
      0: "The lines are parallel, and they don't intercept"
    },
    respondToIdx: {
      0: "p16b"
    }
  },

  p16b: {
    type: "plain",
    content: "RIGHT ON POINT. In fact, modifying the constant \\( b \\) in any of the above equations still keeps its 'direction'.",
    next: "p16c"
  },

  p16c: {
    type: "plain",
    content: "Which means the issue of having no solution was caused by a bad set of constants \\( b_1, b_2, \\ldots, b_n \\)!",
    next: "p16d"
  },

  p16d: {
    type: "plain",
    content: "Next time you get an unsolvable (inconsistent) system, you know who's to blame (hehe)",
    next: "p17"
  },

  p17: {
    type: "single-mcq",
    content: "What is the solution of: \\( x + 2y = 5 \\) and \\( 2x + 4y = 10 \\)?",
    options: {
      0: "\\( x = 1 \\), \\( y = 2 \\)",
      1: "Infinitely many solutions",
      2: "No solution"
    },
    answersIdx: new Set([1]),
    respondToIdx: {
      0: "p17q"
    },
    next: "p17a"
  },

  p17q: {
    type: "plain",
    content: "☝️🤓 Um, technically that's not 100% wrong, since it captures only one of many solutions."
  },

  p17a: {
    type: "dialogue",
    content: "This time, did you notice anything different in the graph?",
    options: {
      0: "What? I only saw 1 line this time!",
      1: "Both equations produce the same line"
    },
    respondToIdx: {
      0: "p17b",
      1: "p17b"
    }
  },

  p17b: {
    type: "plain",
    content: "Mhm! Also notice that one equation is a multiple of the other!",
    next: "p18"
  },

  p18: {
    type: "dialogue",
    content: "If a linear system has infinite solutions, how will you express the solution?",
    options: {
      0: "I will write them all down... One by one...",
      1: "Use arbitrary values",
      2: "I have no idea."
    },
    respondToIdx: {
      0: "p18a",
      1: "p18b",
      2: "p18b"
    }
  },

  p18a: {
    type: "plain",
    content: "WHAT?!! That's not feasible!",
    next: "p18b"
  },

  p18b: {
    type: "plain",
    content: "We can use parameters, symbols representing arbitrary values. For example, \\( s \\in \\mathbb{R} \\) represents an arbitrary real number.",
    next: "p18c"
  },

  p18c: {
    type: "plain",
    content: "Oh, also, don't reuse an existing letter for it! 😱 Else your answer would make no sense!",
    next: "p18d"
  },

  p18d: {
    type: "plain",
    content: "We'll use the previous example: \\( x + 2y = 5 \\) and \\( 2x + 4y = 10 \\). If we parameterize \\( y \\), that is, using the substitution \\( y = s \\), we get \\( x + 2s = 5 \\).",
    next: "p18e"
  },

  p18e: {
    type: "plain",
    content: "Finally, we get \\( x = 5 - 2s, y = s, s \\in \\mathbb{R} \\), which represents all solutions.",
    next: "p19"
  },

  p19: {
    type: "image",
    content: "images/solution_types.png",
    important: true,
    next: "p20"
  }

};
