const dialogueSystem = {
  // intro

  start: {
    type: "plain",
    content: "From section 1.2, we know that if the augmented matrix of a linear system is in Row-Echelon Form (REF) and Reduced Row-Echelon Form (RREF), then it is easier to solve it.",
    next: "intro2"
  },

  intro2: {
    type: "plain",
    content: "From section 1.3, we know that we can modify a matrix using Elementary Row Operations (EROs) without changing the set of solutions. ",
    next: "intro3"
  },

  intro3: {
    type: "plain",
    content: "Hence, let's explore how to convert a matrix to REF or RREF using EROs.",
    next: "REFDefQuiz"
  },
  
  // REF intuition
  
  REFDefQuiz: {
    type: "mcq",
    content: "Let's look at how to turn a matrix into REF first. But first, which of the following conditions are required for REF?",
    options: {
      0: "If zero rows exist, they are at the bottom of the matrix.",
      1: "The leading entries are further to the right as we move down the rows",
      2: "The leading entries are 1",
      3: "In each pivot column, all entries except the leading entry is 0"
    },
    answersIdx: new Set([0, 1]),
    next: "REFStaircase"
  },

  REFStaircase: {
    type: "plain",
    content: "Roughly speaking, these two conditions mean that the shape of a matrix in REF is that it must have a staircase of zeros at the bottom left. <br> Let's look at this matrix:",
    next: "REFMatrix1"
  },
  
  
  REFMatrix1: {
    type: "plain",
    content: "$$\\left( " +
      "    \\begin{array}{ccc|c}" +
      "        3 & 2 & 1 & 10 \\\\" +
      "        6 & 5 & 4 & 14 \\\\" +
      "        9 & 8 & 9 & 18 \\\\" +
      "    \\end{array}" +
      "\\right)$$",
    next: "end"
  },

  end: {
    type: "end",
    content: "Placeholder"
  }

};
