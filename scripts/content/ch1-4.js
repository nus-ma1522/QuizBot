const dialogueSystem = {
  // intro

  start: {
    type: "plain",
    content: 
      "From section 1.2, we know that if the augmented matrix of a linear system is in Row-Echelon Form (REF)<br>" +
      "or Reduced Row-Echelon Form (RREF), then it is easier to solve it.",
    next: "intro2"
  },

  intro2: {
    type: "plain",
    content: 
      "From section 1.3, we know that we can modify a matrix using Elementary Row Operations (EROs)<br>" +
      "without changing the set of solutions.",
    next: "intro3"
  },

  intro3: {
    type: "plain",
    content: 
      "Hence, let's explore how to reduce a matrix to REF and RREF using EROs.",
    next: "REFIntuition1"
  },
  
  // REF intuition
  
  REFIntuition1: {
    type: "mcq",
    content: 
      "Let's look at how to turn a matrix into REF first.<br>" +
      "For the matrix to be in REF, which of the following conditions are required?<br>" +
      "Choose all that apply.",
    options: {
      0: "If zero rows exist, they are at the bottom of the matrix",
      1: "The leading entries are further to the right as we move down the rows",
      2: "The leading entries are $1$",
      3: "In each pivot column, all entries except the leading entry is $0$"
    },
    answersIdx: new Set([0, 1]),
    next: "REFIntuition2"
  },

  REFIntuition2: {
    type: "plain",
    content: 
      "Roughly speaking, these two conditions mean that the shape of a matrix in REF is that it must have<br>" +
      "a staircase of zeros at the bottom left.<br><br>Let's look at this matrix:<br>" + 
      "$$\\left( " +
      "    \\begin{array}{ccc|c}" +
      "        3 & 2 & 1 & 10 \\\\" +
      "        6 & 5 & 4 & 14 \\\\" +
      "        9 & 8 & 9 & 18 \\\\" +
      "    \\end{array}" +
      "\\right)$$",
    next: "REFIntuition4"
  },
  


  REFIntuition4: {
    type: "single-mcq",
    content: 
      "We need the entry at column 1 of row 2 to be $0$ (which is currently $6$).<br>" +
      "Which type of row operation can we use for that?",
    options: {
      0: "$R_i \\leftrightarrow R_j$ (Row Swap)",
      1: "$R_i + cR_j$ (Row Addition)",
      2: "$aR_i$ (Row Multiplication)",
    },
    answersIdx: new Set([1]),
    next: "REFIntuition5"
  },

  REFIntuition5: {
    type: "plain",
    content: 
      "If we subtract $2$ times of row 1 to row 2, we get:<br>" +
      "$$\\left( " +
      "    \\begin{array}{ccc|c}" +
      "        3 & 2 & 1 & 10 \\\\" +
      "        \\mathbf{6} & 5 & 4 & 14 \\\\" +
      "        9 & 8 & 9 & 18 \\\\" +
      "    \\end{array}" +
      "\\right) \\xrightarrow{R_2 - 2R_1}" +
      "\\left( " +
      "    \\begin{array}{ccc|c}" +
      "        3 & 2 & 1 & 10 \\\\" +
      "        0 & 1 & 2 & -6 \\\\" +
      "        9 & 8 & 9 & 18 \\\\" +
      "    \\end{array}" +
      "\\right)$$",
    next: "REFIntuition7"
  },

  REFIntuition7: {
    type: "mcq",
    content: "Next, we need the first two columns of row 3 to be $0$. Which ERO(s) can we use for this?",
    options: {
      0: "$R_3 - 3R_1$",
      1: "$R_3 - 4R_1$",
      2: "$R_3 - 8R_2$",
      3: "$R_3 - 2R_2$",
    },
    answersIdx: new Set([0, 3]),
    next: "REFIntuition8"
  },

  REFIntuition8: {
    type: "plain",
    content: 
      "We first try to change the $9$ in row 3, column 1 to $0$.<br><br>" +
      "Notice that only row 1 can be used for subtraction, since column 1 of row 2 is $0$.<br>" +
      "Therefore, we subtract $3$ times of row 1 from row 3, giving us:<br>" + 
      "$$\\left( " +
      "    \\begin{array}{ccc|c}" +
      "        3 & 2 & 1 & 10 \\\\" +
      "        0 & 1 & 2 & -6 \\\\" +
      "        \\mathbf{9} & 8 & 9 & 18 \\\\" +
      "    \\end{array}" +
      "\\right) \\xrightarrow{R_3 - 3R_1}" +
      "\\left( " +
      "    \\begin{array}{ccc|c}" +
      "        3 & 2 & 1 & 10 \\\\" +
      "        0 & 1 & 2 & -6 \\\\" +
      "        0 & 2 & 7 & -12 \\\\" +
      "    \\end{array}" +
      "\\right)$$",
    next: "REFIntuition10"
  },


  REFIntuition10: {
    type: "plain",
    content: 
      "Next, change the $2$ in row 3, column 2 to $0$.<br><br>" +
      "If we use row 1, we will make row 3 column 1 nonzero again, which we don't want.<br>" + 
      "Therefore, we should use row 2 for this.<br>" +
      "$$\\left( " +
      "    \\begin{array}{ccc|c}" +
      "        3 & 2 & 1 & 10 \\\\" +
      "        0 & 1 & 2 & -6 \\\\" +
      "        0 & \\mathbf{2} & 7 & -12 \\\\" +
      "    \\end{array}" +
      "\\right) \\xrightarrow{R_3 - 2R_2} " +
      "\\left( " +
      "    \\begin{array}{ccc|c}" +
      "        3 & 2 & 1 & 10 \\\\" +
      "        0 & 1 & 2 & -6 \\\\" +
      "        0 & 0 & 3 & 0 \\\\" +
      "    \\end{array}" +
      "\\right)$$",
    next: "REFIntuition11"
  },


  REFIntuition11: {
    type: "plain",
    content: 
      "Finally, this matrix is in REF. Let's try another example!",
    next: "REFIntuition12"
  },

    REFIntuition12: {
    type: "single-mcq",
    content: 
      "To bring the matrix below to REF, which type of ERO should we use here?" +
      "$$\\left( " +
      "    \\begin{array}{ccc|c}" +
      "        0 & 2 & 1 & 10 \\\\" +
      "        6 & 5 & 4 & 14 \\\\" +
      "        0 & 8 & 9 & 18 \\\\" +
      "    \\end{array}" +
      "\\right)$$",
    options: {
      0: "$R_i \\leftrightarrow R_j$",
      1: "$R_i + cR_j$",
      2: "$aR_i$",
    },
    answersIdx: new Set([0]),
    next: "REFIntuition15"
  },

  REFIntuition15: {
    type: "plain",
    content: 
      "Since there needs to be more leading zeros as we go down the rows,<br>" + 
      "we can swap the row with the least leading zeros to the first row!<br>" +
      "Hence, we swap row 2 and row 1.<br>" + 
      "$$\\left( " +
      "    \\begin{array}{ccc|c}" +
      "        0 & 2 & 1 & 10 \\\\" +
      "        6 & 5 & 4 & 14 \\\\" +
      "        0 & 8 & 9 & 18 \\\\" +
      "    \\end{array}" +
      "\\right) \\xrightarrow{R_1 \\leftrightarrow R_2} " +
      "\\left( " +
      "    \\begin{array}{ccc|c}" +
      "        6 & 5 & 4 & 14 \\\\" +
      "        0 & 2 & 1 & 10 \\\\" +
      "        0 & 8 & 9 & 18 \\\\" +
      "    \\end{array}" +
      "\\right)$$",
    next: "REFIntuition17"
  },

  REFIntuition17: {
    type: "plain",
    content: 
      "From here, we can do $R_3 - 4R_2$ which will convert it to REF:" +
      "$$\\left( " +
      "    \\begin{array}{ccc|c}" +
      "        6 & 5 & 4 & 14 \\\\" +
      "        0 & 2 & 1 & 10 \\\\" +
      "        0 & 8 & 9 & 18 \\\\" +
      "    \\end{array}" +
      "\\right) \\xrightarrow{R_3 - 4R_2} " +
      "\\left( " +
      "    \\begin{array}{ccc|c}" +
      "        6 & 5 & 4 & 14 \\\\" +
      "        0 & 2 & 1 & 10 \\\\" +
      "        0 & 0 & 5 & -22 \\\\" +
      "    \\end{array}" +
      "\\right)$$",
    next: "REFSteps1"
  },

  REFSteps1: {
    type: "tex",
    content: 
      "<b>A step-by-step process on how to reduce a matrix to REF (Gaussian Elimination)</b><br>" +
      "The steps are as follows:<br><br>" +
      "1. Set the first row as the current row.<br>" +
      "2. If this row does not have the least leading zeros, find a row below with the least leading zeros and swap it with the current row.<br>" +
      "3. Identify the column of the current leading entry. Then, repeatedly make all entries directly below $0$, by using $R_i + aR_j$.<br>" +
      "4. Move down a row and repeat steps 1 to 3. Continue until the last row has been reached.",
    important: true,
    next: "RREFIntuition1"
  },


  RREFIntuition1: {
    type: "plain",
    content: "Now that we've reduced the matrix to REF, let's talk about how to reduce it further to RREF.",
    next: "RREFIntuition2"
  },

  RREFIntuition2: {
    type: "mcq",
    content: "Which of the following conditions are needed for RREF? Choose all that apply.",
    options: {
      0: "If zero rows exist, they are at the bottom of the matrix",
      1: "The leading entries are further to the right as we move down the rows",
      2: "The leading entries are $1$",
      3: "In each pivot column, all entries except the leading entry is $0$"
    },
    answersIdx: new Set([0,1,2,3]),
    next: "RREFIntuition4"
  },


  RREFIntuition4: {
    type: "mcq",
    content: 
      "The first two conditions are for REF, while the other two are for RREF. Consider the matrix below, which is in REF.<br>" + 
      "Now, we want to make all leading entries $1$. Which type of row operation should we use to handle that?" + 
      "$$\\left( " +
      "    \\begin{array}{cccc|c}" +
      "        3 & 3 & 6 & 0 & 12 \\\\" +
      "        0 & 0 & 2 & 4 & 10 \\\\" +
      "    \\end{array}" +
      "\\right)$$",
    options: {
      0: "$R_i \\leftrightarrow R_j$",
      1: "$R_i + cR_j$",
      2: "$aR_i$",
    },
    answersIdx: new Set([2]),
    next: "RREFIntuition5"
  },

   RREFIntuition5: {
    type: "mcq",
    content: "For the above matrix, which of the row multiplications(s) achive this goal?",
    options: {
      0: "$\\frac{1}{3}R_1$",
      1: "$\\frac{1}{2}R_1$",
      2: "$\\frac{1}{3}R_2$",
      3: "$\\frac{1}{2}R_2$",
    },
    answersIdx: new Set([0,3]),
    next: "RREFIntuition6"
  },

  RREFIntuition6: {
    type: "plain",
    content: 
      "After applying all the operations, we get this matrix. Now, all the leading entries are $1$." +
      "$$\\left( " +
      "    \\begin{array}{cccc|c}" +
      "        \\mathbf{3} & 3 & 6 & 0 & 12 \\\\" +
      "        0 & 0 & \\mathbf{2} & 4 & 10 \\\\" +
      "    \\end{array}" +
      "\\right) \\xrightarrow{\\frac{1}{3}R_1} \\xrightarrow{\\frac{1}{2}R_2}" +
      "\\left( " +
      "    \\begin{array}{cccc|c}" +
      "        \\mathbf{1} & 1 & 2 & 0 & 4 \\\\" +
      "        0 & 0 & \\mathbf{1} & 2 & 5 \\\\" +
      "    \\end{array}" +
      "\\right)$$",
    next: "RREFIntuition8"
  },

  RREFIntuition8: {
    type: "mcq",
    content: "Next, let's make the pivot columns all $0$. Which type of row operation should we use to handle that?",
    options: {
      0: "$R_i \\leftrightarrow R_j$",
      1: "$R_i + cR_j$",
      2: "$aR_i$",
    },
    answersIdx: new Set([1]),
    next: "RREFIntuition9"
  },

  RREFIntuition9: {
    type: "mcq",
    content: "Which row addition(s) achieve this goal?",
    options: {
      0: "$R_1 - \\frac{1}{2}R_2$",
      1: "$R_2 - \\frac{1}{2}R_1$",
      2: "$R_1 - 2R_2$",
      3: "$R_2 - 2R_1$",
    },
    answersIdx: new Set([2]),
    next: "RREFIntuition10"
  },

  RREFIntuition10: {
    type: "plain",
    content: 
      "For row 2, the leading entry is at column 3. This means column 3 is a pivot column, and all entries directly above need to be $0$.<br>" +
      "We can subtract $2$ times of row 2 from row 1 to achieve that. Hence, we get:" +
      "$$\\left( " +
      "    \\begin{array}{cccc|c}" +
      "        1 & 1 & \\mathbf{2} & 0 & 4 \\\\" +
      "        0 & 0 & 1 & 2 & 5 \\\\" +
      "    \\end{array}" +
      "\\right) \\xrightarrow{R_1 - 2R_2}" +
      "\\left( " +
      "    \\begin{array}{cccc|c}" +
      "        1 & 1 & 0 & -4 & -6 \\\\" +
      "        0 & 0 & 1 & 2 & 5 \\\\" +
      "    \\end{array}" +
      "\\right)$$",
    next: "RREFSteps1"
  },

  RREFSteps1: {
    type: "tex",
    content: 
      "<b>A step-by-step process on reducing a matrix from RREF from REF (Gauss-Jordan Elimination)</b><br>" +
      "Following the first four steps of Gaussian Elimination:<br><br>" +
      "5. Multiply each nonzero row by a constant to make the leading entry $1$, using $aR_i$.<br>" +
      "6. Set the the last nonzero row as the current row.<br>" +
      "7. Identify the current leading entry and pivot column. Then, repeatedly make all entries directly above $0$, by using $R_i + aR_j$.<br>" +
      "8. Move up a row and repeat step 7. Continue until the first row has been reached.",
    important: true,
    next: "FFT1"
  },

  FFT1: {
    type: "mcq",
    content: 
      "Now that you understand the process for reducing a matrix to REF and RREF respectively, here's some food for thought.<br>" +
      "Which of these statements are true?",
    options: {
      0: "Every matrix reduces to a unique REF",
      1: "Every matrix reduces to a unique RREF",
    },
    answersIdx: new Set([1]),
    next: "FFT2"
  },

  FFT2: {
    type: "plain",
    content: 
      "Let's look again at this matrix: " + 
      "$$\\left( " +
      "    \\begin{array}{ccc|c}" +
      "        6 & 5 & 4 & 2 \\\\" +
      "        0 & 2 & 1 & -1 \\\\" +
      "        0 & 8 & 8 & -8 \\\\" +
      "    \\end{array}" +
      "\\right)$$",
    next: "FFT3"
  },

  FFT3: {
    type: "plain",
    content: 
      "We can reduce it straight to REF by using $R_3 - 4R_2$:<br>" +
      "$$\\left( " +
      "    \\begin{array}{ccc|c}" +
      "        6 & 5 & 4 & 14 \\\\" +
      "        0 & 2 & 1 & -1 \\\\" +
      "        0 & 8 & 8 & -8 \\\\" +
      "    \\end{array}" +
      "\\right) \\xrightarrow{R_3 - 4R_2}" +
      "\\left( " +
      "    \\begin{array}{ccc|c}" +
      "        6 & 5 & 4 & 14 \\\\" +
      "        0 & 2 & 1 & -1 \\\\" +
      "        0 & 0 & 4 & -4 \\\\" +
      "    \\end{array}" +
      "\\right)$$",
    next: "FFT3half"
  },

  FFT3half: {
    type: "dialogue",
    content: 
      "But what if we did $R_2 \\leftrightarrow R_3$, then $R_3 - \\frac{1}{4}R_2$. What matrix would we get?",
    options: {
      0: "$$\\left( " +
         "    \\begin{array}{ccc|c}" +
         "        6 & 5 & 4 & 2 \\\\" +
         "        0 & 8 & 8 & -8 \\\\" +
         "        0 & 0 & -1 & 1 \\\\" +
         "    \\end{array}" +
         "\\right)$$",
    },
    respondToIdx: {
      0: "FFT4",
    }
  },

  FFT4: {
    type: "plain",
    content: 
      "With two different series of steps, we end up with different matrices in REF.",
    next: "FFT5"
  },

  FFT5: {
    type: "dialogue",
    content: 
      "Now we have two matrices:" + 
      "$$\\left( " +
      "    \\begin{array}{ccc|c}" +
      "        6 & 5 & 4 & 2 \\\\" +
      "        0 & 8 & 8 & -8 \\\\" +
      "        0 & 0 & -1 & 1 \\\\" +
      "    \\end{array}" +
      "\\right) \\text{and} \\left( " +
      "    \\begin{array}{ccc|c}" +
      "        6 & 5 & 4 & 2 \\\\" +
      "        0 & 2 & 1 & -1 \\\\" +
      "        0 & 0 & 4 & -4 \\\\" +
      "    \\end{array}" +
      "\\right)$$<br>" +
      "Try doing steps 5-7 of the Gauss-Jordan Algorithm to reduce both matrices to RREF. Did you get the same matrix?",
    options: {
      0: "Yeah",
      1: "No...?",
      2: "I lazy sia just take me to the answer"
    },
    respondToIdx: {
      0: "FFT6",
      1: "FFT6",
      2: "FFT6",
    }
  },

  FFT6: {
    type: "dialogue",
    content: 
      "Well, both matrices reduce to:<br>" +
      "$$\\left( " +
      "    \\begin{array}{ccc|c}" +
      "        1 & 0 & 0 & 1 \\\\" +
      "        0 & 1 & 0 & 0 \\\\" +
      "        0 & 0 & 1 & -1 \\\\" +
      "    \\end{array}" +
      "\\right)$$<br>" +
      "Remember that regardless of the EROs used, the solution is preserved?<br>" +
      "It seems like some parallels can be drawn between the RREF and the solution!",
    options: {
      0: "Also, doesn't the RREF also classify as a REF? We can also prove it this way!"
    },
    respondToIdx: {
      0: "end"
    }
  },

  end: {
    type: "end",
    content: 
      "Hmm, that's also correct! The REF of a matrix <em>may not be unique</em>, but the RREF is always unique.<br>" +
      "Though, the proof is quite involved so we won't go through it here.<br><br>" +
      "Anyways, we've reached the end of 1.4! We'll look at more complex matrix solving in 1.5!",
    systemMessage: "🎉Congratulations! You have reached the end of Interactive 1.4!🎉",
  }

};

const compulsoryMessages = [
  "REFSteps1",
  "RREFSteps1"
];

const checkpoints = [
  {
    id: "start",
    label: "Start from beginning",
    showCompulsoryMessages: 0
  },

  {
    id: "RREFIntuition1",
    label: "RREF Steps",
    showCompulsoryMessages: 1
  },

  {
    id: "FFT1",
    label: "Is the REF and RREF unique?",
    showCompulsoryMessages: 2
  }
];

