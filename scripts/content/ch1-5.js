const dialogueSystem = {
  // intro

  start: {
    type: "plain",
    content: "From section 1.2, we know that if the augmented matrix of a linear system is in Row-Echelon Form (REF) and Reduced Row-Echelon Form (RREF), then it is easier to solve it.",
    next: "intro2"
  },

//   intro2: {
//     type: "plain",
//     content: "From section 1.3, we know that we can modify a matrix using Elementary Row Operations (EROs) without changing the set of solutions. ",
//     next: "intro3"
//   },

//   intro3: {
//     type: "plain",
//     content: "Hence, let's explore how to convert a matrix to REF or RREF using EROs.",
//     next: "REFIntuition1"
//   },
  
//   // REF intuition
  
//   REFIntuition1: {
//     type: "mcq",
//     content: "Let's look at how to turn a matrix into REF first. But first, which of the following conditions are required for REF?",
//     options: {
//       0: "If zero rows exist, they are at the bottom of the matrix.",
//       1: "The leading entries are further to the right as we move down the rows",
//       2: "The leading entries are 1",
//       3: "In each pivot column, all entries except the leading entry is 0"
//     },
//     answersIdx: new Set([0, 1]),
//     next: "REFIntuition2"
//   },

//   REFIntuition2: {
//     type: "plain",
//     content: "Roughly speaking, these two conditions mean that the shape of a matrix in REF is that it must have a staircase of zeros at the bottom left. <br> Let's look at this matrix:",
//     next: "REFIntuition3"
//   },
  
//   REFIntuition3: {
//     type: "plain",
//     content: "$$\\left( " +
//              "    \\begin{array}{ccc|c}" +
//              "        3 & 2 & 1 & 10 \\\\" +
//              "        6 & 5 & 4 & 14 \\\\" +
//              "        9 & 8 & 9 & 18 \\\\" +
//              "    \\end{array}" +
//              "\\right)$$",
//     next: "REFIntuition4"
//   },

//   REFIntuition4: {
//     type: "mcq",
//     content: "We need a zero at column 1 of row 2 (where the 6 is). Which type of row operation can we use for that?",
//     options: {
//       0: "Row Swap",
//       1: "Row Addition",
//       2: "Row Multiplciation",
//     },
//     answersIdx: new Set([1]),
//     next: "REFIntuition5"
//   },

//   REFIntuition5: {
//     type: "plain",
//     content: "If we add \\(-2\\) times of row 1 to row 2, we get the following matrix:",
//     next: "REFIntuition6"
//   },

//   REFIntuition6: {
//     type: "plain",
//     content: "$$\\left( " +
//              "    \\begin{array}{ccc|c}" +
//              "        3 & 2 & 1 & 10 \\\\" +
//              "        0 & 1 & 2 & -6 \\\\" +
//              "        9 & 8 & 9 & 18 \\\\" +
//              "    \\end{array}" +
//              "\\right)$$",
//     next: "REFIntuition7"
//   },

//   REFIntuition7: {
//     type: "mcq",
//     content: "Next, we need zeros at the first two columns of row 3. Which ERO(s) can we use for this?",
//     options: {
//       0: "\\(R_3 - 3R_1\\)",
//       1: "\\(R_3 - 4R_1\\)",
//       2: "\\(R_3 - 8R_2\\)",
//       3: "\\(R_3 - 2R_2\\)",
//     },
//     answersIdx: new Set([0, 3]),
//     next: "REFIntuition8"
//   },

//   REFIntuition8: {
//     type: "plain",
//     content: "We first try to change the \\(9\\) in row 3, column 1 to zero. We can only use row 1 for this since row 2 has a zero at column 1. We can subtract \\(3\\) times of row 1 from row 3. Giving us:",
//     next: "REFIntuition9"
//   },

//   REFIntuition9: {
//     type: "plain",
//     content: "$$\\left( " +
//                      "    \\begin{array}{ccc|c}" +
//                      "        3 & 2 & 1 & 10 \\\\" +
//                      "        0 & 1 & 2 & -6 \\\\" +
//                      "        0 & 2 & 7 & -12 \\\\" +
//                      "    \\end{array}" +
//                      "\\right)$$",
//     next: "REFIntuition10"
//   },

//   REFIntuition10: {
//     type: "plain",
//     content: "Next, row 3 column 2. We should use row 2 for this. If we use row 1, we will make row 3 column 1 non-zero again, which we don't want.",
//     next: "REFIntuition11"
//   },

//   REFIntuition11: {
//     type: "plain",
//     content: "$$\\left( " +
//              "    \\begin{array}{ccc|c}" +
//              "        3 & 2 & 1 & 10 \\\\" +
//              "        0 & 1 & 2 & -6 \\\\" +
//              "        0 & 0 & 3 & 0 \\\\" +
//              "    \\end{array}" +
//              "\\right)$$",
//     next: "REFIntuition12"
//   },

//   REFIntuition12: {
//     type: "plain",
//     content: "Finally, this matrix is in REF. Let's try another example",
//     next: "REFIntuition13"
//   },

//   REFIntuition13: {
//     type: "plain",
//     content: "$$\\left( " +
//              "    \\begin{array}{ccc|c}" +
//              "        0 & 2 & 1 & 10 \\\\" +
//              "        6 & 5 & 4 & 14 \\\\" +
//              "        0 & 8 & 9 & 18 \\\\" +
//              "    \\end{array}" +
//              "\\right)$$",
//     next: "REFIntuition14"
//   },

//   REFIntuition14: {
//     type: "mcq",
//     content: "We want to bring the above matrix to REF. Which row operation should we use here?",
//     options: {
//       0: "Row Swap",
//       1: "Row Addition",
//       2: "Row Multiplciation",
//     },
//     answersIdx: new Set([0]),
//     next: "REFIntuition15"
//   },

//   REFIntuition15: {
//     type: "plain",
//     content: "Since there needs to be more zeros as we go down the rows, we should swap the row with the least leading zeros to the first row! Hence, we can swap row 2 and row 1.",
//     next: "REFIntuition16"
//   },

//   REFIntuition16: {
//     type: "plain",
//     content: "$$\\left( " +
//              "    \\begin{array}{ccc|c}" +
//              "        6 & 5 & 4 & 14 \\\\" +
//              "        0 & 2 & 1 & 10 \\\\" +
//              "        0 & 8 & 9 & 18 \\\\" +
//              "    \\end{array}" +
//              "\\right)$$",
//     next: "REFIntuition17"
//   },

//   REFIntuition17: {
//     type: "plain",
//     content: "From here, we can do \\(R_3 - 4R_2\\) which will convert it to REF.",
//     next: "REFSteps1"
//   },

//   REFSteps1: {
//     type: "plain",
//     content: "This summarizes the gist of how to reduce to REF. The step by step process is called \"Gaussian Elimination\", and is as follows: <br><br>1. Assuming the matrix has \\(N\\) rows. Initially, let \\(r = 1\\). \\(r\\) refers to the row we're trying to settle right now<br><br>2. Look at all rows from \\(r\\) to \\(N\\). If row \\(r\\) isn't the one with the least leading zeros, swap the row with the least leading zeros with row \\(r\\).<br><br>3. Let \\(c\\) be the column of the leading entry of row \\(r\\). The goal is to make all rows below have zero at column \\(c\\). Use row additions to achieve this<br><br>4. Increase \\(r\\) by \\(1\\) and repeat from step 2. If \\(r\\) is already \\(N\\), we're done",
//     next: "RREFIntuition1"
//   },


//   RREFIntuition1: {
//     type: "plain",
//     content: "Now that we've reduced the matrix to REF, let's talk about how to reduce it further to RREF.",
//     next: "RREFIntuition2"
//   },

//   RREFIntuition2: {
//     type: "mcq",
//     content: "Which of the following conditions are needed for RREF?",
//     options: {
//       0: "If zero rows exist, they are at the bottom of the matrix.",
//       1: "The leading entries are further to the right as we move down the rows",
//       2: "The leading entries are 1",
//       3: "In each pivot column, all entries except the leading entry is 0"
//     },
//     answersIdx: new Set([0,1,2,3]),
//     next: "RREFIntuition3"
//   },

//   RREFIntuition3: {
//     type: "mcq",
//     content: "The first two conditions are for both REF, while RREF needs the second two as well.<br><br>Let's settle the leading entries are 1 condition first, which type of row operation should we use to handle that?",
//     options: {
//       0: "Row Swap",
//       1: "Row Addition",
//       2: "Row Multiplciation",
//     },
//     answersIdx: new Set([2]),
//     next: "RREFIntuition4"
//   },

//   RREFIntuition4: {
//     type: "plain",
//     content: "$$\\left( " +
//              "    \\begin{array}{cccc|c}" +
//              "        3 & 3 & 6 & 0 & 12 \\\\" +
//              "        0 & 0 & 2 & 4 & 10 \\\\" +
//              "    \\end{array}" +
//              "\\right)$$",
//     next: "RREFIntuition5"
//   },

//    RREFIntuition5: {
//     type: "mcq",
//     content: "For the above matrix, which of the row multiplications(s) achive this goal?",
//     options: {
//       0: "\\(\\frac{1}{3}R_1\\)",
//       1: "\\(\\frac{1}{2}R_1\\)",
//       2: "\\(\\frac{1}{3}R_2\\)",
//       3: "\\(\\frac{1}{2}R_2\\)",
//     },
//     answersIdx: new Set([0,3]),
//     next: "RREFIntuition6"
//   },

//   RREFIntuition6: {
//     type: "plain",
//     content: "After applying all the operations, we get this matrix. Now, all the leading entries are 1",
//     next: "RREFIntuition7"
//   },

//   RREFIntuition7: {
//     type: "plain",
//     content: "$$\\left( " +
//              "    \\begin{array}{cccc|c}" +
//              "        \\textbf{1} & 1 & 2 & 0 & 4 \\\\" +
//              "        0 & 0 & \\textbf{1} & 2 & 5 \\\\" +
//              "    \\end{array}" +
//              "\\right)$$",
//     next: "RREFIntuition8"
//   },

//   RREFIntuition8: {
//     type: "mcq",
//     content: "Next, let's make the pivot columns all 0. Which type of row operation should we use to handle that?",
//     options: {
//       0: "Row Swap",
//       1: "Row Addition",
//       2: "Row Multiplciation",
//     },
//     answersIdx: new Set([1]),
//     next: "RREFIntuition9"
//   },

//   RREFIntuition9: {
//     type: "mcq",
//     content: "Which row addition(s) achieve this goal?",
//     options: {
//       0: "\\(R_1 - \\frac{1}{2}R_2\\)",
//       1: "\\(R_2 - \\frac{1}{2}R_1\\)",
//       2: "\\(R_1 - 2R_2\\)",
//       3: "\\(R_2 - 2R_1\\)",
//     },
//     answersIdx: new Set([2]),
//     next: "RREFIntuition10"
//   },

//   RREFIntuition10: {
//     type: "plain",
//     content: "For row 2, the leading entry is at column 3. This means column 3 is a pivot column, and everything else needs to be zero. We can subtract \\(2\\) times of row 2 from row 1 to achieve that. Hence, we get this matrix:",
//     next: "RREFIntuition11"
//   },

//   RREFIntuition11: {
//     type: "plain",
//     content: "$$\\left( " +
//              "    \\begin{array}{cccc|c}" +
//              "        1 & 1 & 0 & -4 & -6 \\\\" +
//              "        0 & 0 & 1 & 2 & 5 \\\\" +
//              "    \\end{array}" +
//              "\\right)$$",
//     next: "RREFSteps1"
//   },

//   RREFSteps1: {
//     type: "plain",
//     content: "This summarizes the gist of how to further reduce to RREF from REF. This full process is known as Gauss-Jordan Elimination. Following from the first four steps of Gaussian Elimination:<br><br>5. For every row, multiply it by a constant to make the leading entry \\(1\\)<br><br>6. Starting from the bottommost row \\(N\\), let \\(c\\) be the column of the leading entry. The goal is to make all above rows be \\(0\\) at column \\(c\\). To do this, add some multiple of row \\(N\\) to all above rows. Repeat this step with row \\(N-1\\), \\(N-2\\)… until row \\(1\\)",
//     next: "RREFSteps2"
//   },

//   RREFSteps2: {
//     type: "mcq",
//     content: "Now that you understand the process for reducing a matrix to REF and RREF respectively, here's some food for thought. Which of these statments are true?",
//     options: {
//       0: "Given some starting matrix, the REF of the matrix is unique",
//       1: "Given some starting matrix, the RREF of the matrix is unique",
//     },
//     answersIdx: new Set([1]),
//     next: "end"
//   },

//   end: {
//     type: "end",
//     content: "If you're curious on why, do discuss on the telegram chat! That's the end of 1.4!"
//   }

};

const compulsoryMessages = [];

const checkpoints = [
  {
    id: "start",
    label: "Start from beginning",
    showCompulsoryMessages: 0
  }
];

