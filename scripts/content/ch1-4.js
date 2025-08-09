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
    next: "REFIntuition1"
  },
  
  // REF intuition
  
  REFIntuition1: {
    type: "mcq",
    content: "Let's look at how to turn a matrix into REF first. But first, which of the following conditions are required for REF? Choose all that apply.",
    options: {
      0: "If zero rows exist, they are at the bottom of the matrix.",
      1: "The leading entries are further to the right as we move down the rows",
      2: "The leading entries are 1",
      3: "In each pivot column, all entries except the leading entry is 0"
    },
    answersIdx: new Set([0, 1]),
    next: "REFIntuition2"
  },

  REFIntuition2: {
    type: "plain",
    content: "Roughly speaking, these two conditions mean that the shape of a matrix in REF is that it must have a staircase of zeros at the bottom left. <br> Let's look at this matrix: <br>" + 
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
    type: "mcq",
    content: "We need a zero at column 1 of row 2 (where the 6 is). Which type of row operation can we use for that?",
    options: {
      0: "\\(R_i \\leftrightarrow R_j\\) (Row Swap)",
      1: "\\(R_i + cR_j\\) (Row Addition)",
      2: "\\(aR_i\\) (Row Multiplciation)",
    },
    answersIdx: new Set([1]),
    next: "REFIntuition5"
  },

  REFIntuition5: {
    type: "plain",
    content: "If we add \\(-2\\) times of row 1 to row 2, we get the following matrix:<br>" +
             "$$\\left( " +
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
    content: "Next, we need zeros at the first two columns of row 3. Which ERO(s) can we use for this?",
    options: {
      0: "\\(R_3 - 3R_1\\)",
      1: "\\(R_3 - 4R_1\\)",
      2: "\\(R_3 - 8R_2\\)",
      3: "\\(R_3 - 2R_2\\)",
    },
    answersIdx: new Set([0, 3]),
    next: "REFIntuition8"
  },

  REFIntuition8: {
    type: "plain",
    content: "We first try to change the \\(9\\) in row 3, column 1 to zero. We can only use row 1 for this since row 2 has a zero at column 1. We can subtract \\(3\\) times of row 1 from row 3. Giving us:<br>" + 
             "$$\\left( " +
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
    content: "Next, row 3 column 2. We should use row 2 for this. If we use row 1, we will make row 3 column 1 non-zero again, which we don't want." + 
             "$$\\left( " +
             "    \\begin{array}{ccc|c}" +
             "        3 & 2 & 1 & 10 \\\\" +
             "        0 & 1 & 2 & -6 \\\\" +
             "        0 & 0 & 3 & 0 \\\\" +
             "    \\end{array}" +
             "\\right)$$",
    next: "REFIntuition12"
  },


  REFIntuition12: {
    type: "plain",
    content: "Finally, this matrix is in REF. Let's try another example<br>" +
             "$$\\left( " +
             "    \\begin{array}{ccc|c}" +
             "        0 & 2 & 1 & 10 \\\\" +
             "        6 & 5 & 4 & 14 \\\\" +
             "        0 & 8 & 9 & 18 \\\\" +
             "    \\end{array}" +
             "\\right)$$",
    next: "REFIntuition14"
  },


  REFIntuition14: {
    type: "mcq",
    content: "We want to bring the above matrix to REF. Which row operation should we use here?",
    options: {
      0: "\\(R_i \\leftrightarrow R_j\\)",
      1: "\\(R_i + cR_j\\)",
      2: "\\(aR_i\\)",
    },
    answersIdx: new Set([0]),
    next: "REFIntuition15"
  },

  REFIntuition15: {
    type: "plain",
    content: "Since there needs to be more zeros as we go down the rows, we should swap the row with the least leading zeros to the first row! Hence, we can swap row 2 and row 1.<br>" + 
             "$$\\left( " +
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
    content: "From here, we can do \\(R_3 - 4R_2\\) which will convert it to REF.",
    next: "REFSteps1"
  },

  REFSteps1: {
    type: "tex",
    content: "<strong> This summarizes the gist of how to reduce to REF. The step by step process is called Gaussian Elimination. Assuming the matrix has $N$ rows, the steps are as follows:<strong> <br>" +
             "<br>" +
             "1. The aim is to settle the row $1$ first.<br>" +
             "2. If the row $1$ isn't the row with the least leading zeros, find a row below with the least leading zeros and swap it with the row $1$.<br>" +
             "3. Let $c$ be the column of the leading entry of the row $1$. The goal is to make all rows below have zero at column $c$. Use the row operation $R_i + aR_j$ for that. <br>" +
             "4. Now, that the row $1$ settled, we repeat steps 1 to 3 for row $2$. Continue this until we reach row $N$.",
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
      0: "If zero rows exist, they are at the bottom of the matrix.",
      1: "The leading entries are further to the right as we move down the rows",
      2: "The leading entries are 1",
      3: "In each pivot column, all entries except the leading entry is 0"
    },
    answersIdx: new Set([0,1,2,3]),
    next: "RREFIntuition4"
  },


  RREFIntuition4: {
    type: "mcq",
    content: "The first two conditions are for both REF, while RREF needs the second two as well. Consider the matrix below. <br>Let's settle the leading entries are 1 condition first. Which type of row operation should we use to handle that?" + 
             "$$\\left( " +
             "    \\begin{array}{cccc|c}" +
             "        3 & 3 & 6 & 0 & 12 \\\\" +
             "        0 & 0 & 2 & 4 & 10 \\\\" +
             "    \\end{array}" +
             "\\right)$$",
    options: {
      0: "\\(R_i \\leftrightarrow R_j\\)",
      1: "\\(R_i + cR_j\\)",
      2: "\\(aR_i\\)",
    },
    answersIdx: new Set([2]),
    next: "RREFIntuition5"
  },

   RREFIntuition5: {
    type: "mcq",
    content: "For the above matrix, which of the row multiplications(s) achive this goal?",
    options: {
      0: "\\(\\frac{1}{3}R_1\\)",
      1: "\\(\\frac{1}{2}R_1\\)",
      2: "\\(\\frac{1}{3}R_2\\)",
      3: "\\(\\frac{1}{2}R_2\\)",
    },
    answersIdx: new Set([0,3]),
    next: "RREFIntuition6"
  },

  RREFIntuition6: {
    type: "plain",
    content: "After applying all the operations, we get this matrix. Now, all the leading entries are 1",
    next: "RREFIntuition7"
  },

  RREFIntuition7: {
    type: "plain",
    content: "$$\\left( " +
             "    \\begin{array}{cccc|c}" +
             "        \\textbf{1} & 1 & 2 & 0 & 4 \\\\" +
             "        0 & 0 & \\textbf{1} & 2 & 5 \\\\" +
             "    \\end{array}" +
             "\\right)$$",
    next: "RREFIntuition8"
  },

  RREFIntuition8: {
    type: "mcq",
    content: "Next, let's make the pivot columns all 0. Which type of row operation should we use to handle that?",
    options: {
      0: "\\(R_i \\leftrightarrow R_j\\)",
      1: "\\(R_i + cR_j\\)",
      2: "\\(aR_i\\)",
    },
    answersIdx: new Set([1]),
    next: "RREFIntuition9"
  },

  RREFIntuition9: {
    type: "mcq",
    content: "Which row addition(s) achieve this goal?",
    options: {
      0: "\\(R_1 - \\frac{1}{2}R_2\\)",
      1: "\\(R_2 - \\frac{1}{2}R_1\\)",
      2: "\\(R_1 - 2R_2\\)",
      3: "\\(R_2 - 2R_1\\)",
    },
    answersIdx: new Set([2]),
    next: "RREFIntuition10"
  },

  RREFIntuition10: {
    type: "plain",
    content: "For row 2, the leading entry is at column 3. This means column 3 is a pivot column, and everything else needs to be zero. We can subtract \\(2\\) times of row 2 from row 1 to achieve that. Hence, we get this matrix:",
    next: "RREFIntuition11"
  },

  RREFIntuition11: {
    type: "plain",
    content: "$$\\left( " +
             "    \\begin{array}{cccc|c}" +
             "        1 & 1 & 0 & -4 & -6 \\\\" +
             "        0 & 0 & 1 & 2 & 5 \\\\" +
             "    \\end{array}" +
             "\\right)$$",
    next: "RREFSteps1"
  },

  RREFSteps1: {
    type: "tex",
    content: "<strong> This summarizes the gist of how to further reduce to RREF from REF. This full process is known as Gauss-Jordan Elimination. Following from the first four steps of Gaussian Elimination: <br>" +
             "<br>" +
             "5. For every row, multiply it by a constant to make the leading entry \\(1\\)<br>" +
             "6. Start from the last row. Let the pivot column of the last row be $c$. The goal is to make the values above the pivot column all \\(0\\). Use the row operation $R_i + aR_j$ for that. <br>" +
             "7. Repeat step 6 for the second last row, going up until the first row<strong>",
    next: "FFT1"
  },

  FFT1: {
    type: "mcq",
    content: "Now that you understand the process for reducing a matrix to REF and RREF respectively, here's some food for thought. Which of these statments are true?",
    options: {
      0: "Every matrix reduces to a unique REF",
      1: "Every matrix reduces to a unique RREF",
    },
    answersIdx: new Set([1]),
    next: "FFT2"
  },

  FFT2: {
    type: "plain",
    content: "Let's look again at this matrix: " + 
             "$$\\left( " +
             "    \\begin{array}{ccc|c}" +
             "        6 & 5 & 4 & 14 \\\\" +
             "        0 & 2 & 1 & 10 \\\\" +
             "        0 & 8 & 9 & 18 \\\\" +
             "    \\end{array}" +
             "\\right)$$",
    next: "FFT3"
  },

  FFT3: {
    type: "plain",
    content: "We can reduce it straight to REF by using \\(R_3 - 4R_2\\):<br>" +
             "$$\\left( " +
             "    \\begin{array}{ccc|c}" +
             "        6 & 5 & 4 & 14 \\\\" +
             "        0 & 2 & 1 & 10 \\\\" +
             "        0 & 0 & 5 & -22 \\\\" +
             "    \\end{array}" +
             "\\right)$$",
    next: "FFT4"
  },

  FFT3: {
    type: "dialogue",
    content: "But what if we did \\(R_2 \\leftrightarrow R_3\\), then \\(R_3 - \\frac{1}{4}R_2\\). What matrix did you get?",
    options: {
      0: "$$\\left( " +
         "    \\begin{array}{ccc|c}" +
         "        6 & 5 & 4 & 14 \\\\" +
         "        0 & 8 & 9 & 18 \\\\" +
         "        0 & 0 & -1.25 & 5.5 \\\\" +
         "    \\end{array}" +
         "\\right)$$",
    },
    respondToIdx: {
      0: "FFT4",
    }
  },

  FFT4: {
    type: "plain",
    content: "With two different series of steps, we end up with different matrices in RREF.",
    next: "FFT5"
  },

  FFT5: {
    type: "dialogue",
    content: "Now try doing steps 5-7 of the Gauss-Jordan Algorithm to reduce to RREF. Did you get the same matrix?",
    options: {
      0: "Yeah",
      1: "No...?",
      2: "I lazy sia just take me to the answer"
    },
    respondToIdx: {
      0: "end",
      1: "end",
      2: "end",
    }
  },

  end: {
    type: "end",
    content: "Anyways, it should be the same matrix. The RREF of a matrix is always unique, though the proof is quite involved so we won't go through it here. Anyways, we've reached the end of 1.4! We'll look at more complex matrix solving in 1.5 :)"
  }

};

const compulsoryMessages = [];

const checkpoints = [
  {
    id: "start",
    label: "Start from beginning",
    showCompulsoryMessages: 0
  },

  {
    id: "RREFIntuition1",
    label: "RREF Steps",
    showCompulsoryMessages: 0
  },

  {
    id: "FFT1",
    label: "Is REF and RREF unique?",
    showCompulsoryMessages: 0
  }
];

