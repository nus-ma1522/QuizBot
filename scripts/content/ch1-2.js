 const dialogueSystem = {
  p0: {
    type: "plain",
    content:
      "Previously we explored the graphical interpretation of solutions to linear systems, up to 3 equations and variables.<br>" +
      "But what if we did it <b>on paper</b>? And what if we had <b>more equations</b>? <b>More variables</b>?<br>" +
      "Writing so many equations and variables, things get messy quickly!",
    next: "p1"
  },

  p1: {
    type: "plain",
    content:
      "Well, mathematicians use a cleaner, more compact way: the <b>augmented matrix</b><br>" +
      "For example, consider:<br>" +
      "\\(x + 2y - z = 3 \\\\ 2x + y + z = 4 \\\\ -3x + 2y + 2z = -10\\)",
    next: "p2"
  },

  p2: {
    type: "plain",
    content:
      "We remove all variables and set up a matrix of coefficients and constants.<br>" +
      "The vertical line separates the coefficients from the constants.<br>",
    next: "p2a"
  },

  p2a: {
    type: "plain",
    content:
      "We get:<br>" +
      "\\[\\left[\\begin{array}{cc|c}" +
      "1 & 2 & 5 \\\\" +
      "3 & 4 & 6" +
      "\\end{array}\\right]\\]",
      next: "p3"
  },

  p3: {
    type: "dialogue",
    content:
      "Can you write the augmented matrices (key in values) for these systems?<br><br>" +
      "1. \\(3x + 2y - z = 1;\\quad 5y + z = 3;\\quad x + z = 2\\)<br>" +
      "2. \\(2x - 1 = 3y;\\quad 3 - 9y = 6x\\)<br>" +
      "3. \\(x_1 - 4x_2 + a x_3 - 6x_4 = 2;\\quad 3x_1 + 2x_2 = a;\\quad 6x_1 + 2x_2 - x_3 + (a-1)x_4 = -1\\)",
    options: {
      0: "I've written them",
      1: "Need help"
    },
    respondToIdx: {
      0: "p4",
      1: "p4r1"
    }
  },

  p4r1: {
    type: "plain",
    content:
      "If you're stuck: Align each equation’s coefficients in rows, then separate the constant term with a vertical bar. Keep variables in order.",
    next: "p4"
  },

  p4: {
    type: "plain",
    content:
      "Now, compare these two augmented matrices:<br>" +
      "[2 3 8;<wbr> 5 1 13] & [1 2 5;<wbr> 0 1 2]<br>" +
      "Which one do you think is quicker to solve?",
    next: "p5"
  },

  p5: {
    type: "dialogue",
    content: "Choose which matrix:",
    options: {
      0: "First one [2 3 8; 5 1 13]",
      1: "Second one [1 2 5; 0 1 2]"
    },
    respondToIdx: {
      0: "p6",
      1: "p7"
    }
  },

  p6: {
    type: "plain",
    content:
      "You picked the first one. It's not in row‑echelon form, so solving it will take more effort.<br>" +
      "Try reducing it to REF first!",
    next: "p8"
  },

  p7: {
    type: "plain",
    content:
      "Yes! The second matrix is already in row‑echelon form (REF). You only need back‑substitution to solve it quickly.",
    next: "p8"
  },

  p8: {
    type: "plain",
    content:
      "REF means:<br>" +
      "• zero rows at bottom (if any)<br>" +
      "• each leading entry is 1, appearing to the right of the one above<br>" +
      "Definitions: zero row, nonzero row, leading entry, pivot & non‑pivot columns.",
    next: "p9"
  },

  p9: {
    type: "dialogue",
    content:
      "What about this matrix: [1 0 1; 0 1 2]? Can you read the solution immediately?",
    options: {
      0: "Yes—I can read off \\(x = 1, y = 2\\)",
      1: "No idea"
    },
    respondToIdx: {
      0: "p10",
      1: "p10"
    }
  },

  p10: {
    type: "plain",
    content:
      "Correct! This is in <b>reduced row‑echelon form (RREF)</b>, so you can read off the solution directly.<br>" +
      "Each pivot is 1 and is the only nonzero entry in its column.",
    next: "p11"
  },

  p11: {
    type: "plain",
    content:
      "Not all systems have unique solutions. Sometimes you get infinitely many solutions (like in Interactive 1.1).<br>" +
      "Consider this RREF matrix:<br>[1 0 2 3; 0 1 1 2]<br>" +
      "Assuming variables are \\(x, y, z\\), what can you say about the system?<br>Is it REF, RREF or neither? And how would you express the general solution?",
    next: "p12"
  },

  p12: {
    type: "dialogue",
    content:
      "Try parameterizing in different ways:<br>" +
      "• Parameterize \\(x\\): \\(x = s, y = ...\\)<br>" +
      "• Parameterize \\(y\\)<br>" +
      "• Parameterize \\(z\\)<br><br>" +
      "Which one’s easier?",
    options: {
      0: "I did ✍️",
      1: "Need guidance"
    },
    respondToIdx: {
      0: "p13",
      1: "p13r1"
    }
  },

  p13r1: {
    type: "plain",
    content:
      "The easiest method is to parameterize the non‑pivot variable—which is \\(z\\) here—because pivot columns depend on them.<br>" +
      "That gives the simplest general solution.",
    next: "p13"
  },

  p13: {
    type: "plain",
    content:
      "Well done! Typically, we pick parameters for <b>non‑pivot columns</b> to simplify things.<br>" +
      "It’s like muting noisy variables while solving!",
    next: "end"
  },

  end: {
    type: "plain",
    content:
      "👍 That wraps up our intro to augmented matrices, REF, RREF, and general solutions.<br>" +
      "Ready to go deeper? Ping me anytime!",
    systemMessage: "Checkpoint reached: Augmented Matrices & Solution Forms ✅"
  }
};


const compulsoryMessages = [];

const checkpoints = [
  {
    id: "p0",
    label: "Start from beginning",
    showCompulsoryMessages: 0
  }
];