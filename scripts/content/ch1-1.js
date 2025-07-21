const dialogueSystem = {
  start: {
    type: "plain",
    content: "Let's begin by recalling what you've learned earlier. Consider the equations: \\( x + y = 2 \\) and \\( x - y = 0 \\).",
    next: "q1",
    delay: 1900  // Total delay: ~2400ms
  },

  q1: {
    type: "dialogue",
    content: "Do you still remember what such equations are called?",
    options: {
      0: "Simultaneous equations",
      1: "Linear equations",
      2: "I'm not sure"
    },
    respondToIdx: {
      0: "q1a",
      1: "q1b",
      2: "q2"
    },
    delay: 300  // Total: 800ms
  },

  q1a: {
    type: "plain",
    content: "Correct! But to be precise, they're simultaneous linear equations.",
    next: "q2",
    delay: 900  // Total: ~1400ms
  },

  q1b: {
    type: "plain",
    content: "That's correct!",
    next: "q2",
    delay: 0  // Total: 500ms
  },

  q2: {
    type: "plain",
    content: "They are called systems of linear equations (or linear systems), which involve multiple variables and equations.",
    next: "q3",
    delay: 2200  // Total: ~2700ms
  },

  q3: {
    type: "plain",
    content: "Here are their definitions:",
    next: "q4",
    delay: 1100
  },

  q4: {
    type: "image",
    content: "def_linear_eqn.png",
    important: true,
    next: "q5",
    delay: 500
  },

  q5: {
    type: "image",
    content: "def_linear_system.png",
    important: true,
    next: "q6",
    delay: 500
  },

  q6: {
    type: "plain",
    content: "Now, take a look at the following equations. Try to identify their properties.",
    next: "q7",
    delay: 1800
  },

  q7: {
    type: "mcq",
    content: "Which of these are linear equations? (Select all that apply)",
    options: {
      0: "\\( 2x + y = 3 \\)",
      1: "\\( x^2 + y + z = 5 \\)",
      2: "\\( x + 3y + 2z = 0 \\)",
      3: "\\( y = \\sin(x) \\)",
      4: "\\( x + 1 = 1 - y \\)"
    },
    answersIdx: new Set([0, 2, 4]),
    next: "q8",
    delay: 500
  },

  q8: {
    type: "mcq",
    content: "Which of these are linear and in standard form?",
    options: {
      0: "\\( 2x + y = 3 \\)",
      1: "\\( x + 3y + 2z = 0 \\)",
      2: "\\( x + 1 = 1 - y \\)"
    },
    answersIdx: new Set([0, 1]),
    next: "q9",
    delay: 300
  },

  q9: {
    type: "mcq",
    content: "Which of these are homogeneous linear equations?",
    options: {
      0: "\\( 2x + y = 3 \\)",
      1: "\\( x + 3y + 2z = 0 \\)",
      2: "\\( x + 1 = 1 - y \\)"
    },
    answersIdx: new Set([1, 2]),
    next: "q10",
    delay: 400
  },

  q10: {
    type: "image",
    content: "cipher_pitiful.png",
    next: "q11",
    delay: 500
  },

  q11: {
    type: "plain",
    content: "Oops! I forgot to send you some definitions earlier...",
    next: "q12",
    delay: 2100
  },

  q12: {
    type: "image",
    content: "def_standard_form.png",
    important: true,
    next: "q13",
    delay: 500
  },

  q13: {
    type: "image",
    content: "def_homogeneous_systems.png",
    important: true,
    next: "q14",
    delay: 500
  },

  q14: {
    type: "plain",
    content: "Now, it's time to do some actual work!",
    next: "q15",
    delay: 1200
  },

  q15: {
    type: "single-mcq",
    content: "What is the solution of: \\( x - y = 0 \\); \\( x + y = 2 \\)?",
    options: {
      0: "\\( x = 1 \\), \\( y = 1 \\)",
      1: "Infinitely many solutions",
      2: "No solution"
    },
    answersIdx: new Set([0]),
    next: "q16",
    delay: 600
  },

  q16: {
    type: "single-mcq",
    content: "What is the solution of: \\( x + 2y = 5 \\); \\( 2x + 4y = 10 \\)?",
    options: {
      0: "\\( x = 1 \\), \\( y = 2 \\)",
      1: "Infinitely many solutions",
      2: "No solution"
    },
    answersIdx: new Set([1]),
    next: "q17",
    delay: 600
  },

  q17: {
    type: "single-mcq",
    content: "What is the solution of: \\( x + 2y = 5 \\); \\( 2x + 4y = 8 \\)?",
    options: {
      0: "\\( x = 1 \\), \\( y = 2 \\)",
      1: "Infinitely many solutions",
      2: "No solution"
    },
    answersIdx: new Set([2]),
    next: "end",
    delay: 600
  },

  end: {
    type: "plain",
    content: "🎯 That wraps up our review of linear systems! Great job!",
    delay: 1000
  }
};
