 const dialogueSystem = {
  p0: {
    type: "dialogue",
    content:
      "Previously we explored the graphical interpretation of linear systems, up to 3 equations and variables.<br>" +
      "But what if we solved it <b>on paper</b>? And what if we had <b>more equations</b>?? <b>MORE VARIABLES???</b> 😈",
    options: {
      0: "What did I just sign up for...",
      1: "idk time to SU i guess",
      2: "💀💀💀"
    },
    respondToIdx: {
      0: "p1",
      1: "p1",
      2: "p1"
    }
  },

  p1: {
    type: "plain",
    content:
      "Hehe, you'll get used to it anyway. First, let's find a simpler way to write things down.<br>" +
      "Mathematicians actually use a cleaner, more compact way: the <b>augmented matrix</b>.<br><br>" +
      "For example,<br>" +
      "$x + 2y - z = 3 \\\\ 2x + z = 4 \\\\ -3x + 2y + 2z = -10$<br><br>" +
      "can be written as:<br>" +
      "$\\left(\\begin{array}{ccc|c}" +
      "1 & 2 & -1 & 3 \\\\" +
      "2 & 0 & 1 & 4 \\\\" +
      "-3 & 2 & 2 & -10 \\\\" +
      "\\end{array}\\right)$",
    next: "p2"
  },

  p2: {
    type: "plain",
    content:
      "On the left, we <b>let each column represent a variable</b>. Typically, $x, y, z$ form the first 3 columns.<br>" +
      "This way, we only have to write down their coefficients as entries in the matrix.<br>" +
      "Next, we draw a vertical line, and on the right, we write down the constants as a column.",
    next: "def_aug_matrix"
  },

  def_aug_matrix: {
    type: "tex",
    content:
      "$$ \\textbf{\\Large Augmented Matrices} \\\\ $$" +
      "$ \\text{A linear system:} \\\\$" +
      "$$ \\begin{cases}" +
      "a_{11} x_1 + a_{12} x_2 + \\ldots + a_{1n} x_n = b_1 \\\\" +
      "a_{21} x_1 + a_{22} x_2 + \\ldots + a_{2n} x_n = b_2 \\\\" +
      "\\hphantom{mmmmmmnnn} \\vdots \\\\" +
      "a_{m1} x_1 + a_{m2} x_2 + \\ldots + a_{mn} x_n = b_m" +
      "\\end{cases} $$" +
      "$ \\text{can be uniquely expressed as an } \\textbf{augmented matrix:} \\\\$" +
      "$$ \\left( \\begin{array}{cccc|c}" +
      "a_{11} & a_{12} & \\cdots & a_{1n} & b_1 \\\\" +
      "a_{21} & a_{22} & \\cdots & a_{2n} & b_2 \\\\" +
      "\\vdots & \\vdots & \\ddots & \\vdots & \\vdots \\\\" +
      "a_{m1} & a_{m2} & \\cdots & a_{mn} & b_m" +
      "\\end{array} \\right) $$",
    previewText: "Augmented Matrices",
    important: true,
    next: "p3"
  },

  p3: {
    type: "plain",
    content: 
      "Since we'll be using MATLAB, let's practice typing it down!<br>" +
      "(ignore the fact that I can't read human handwriting 😌)",
    next: "guide_matrix_matlab"
  },

  guide_matrix_matlab: {
  type: "tex",
  content:
    "$$ \\textbf{\\Large Writing Matrices in MATLAB} \\\\ $$" +
    "$ \\text{To enter a matrix in MATLAB, we use square brackets: } \\texttt{[]} \\\\$" +
    "$ \\text{• Separate columns using spaces or commas} \\\\$" +
    "$ \\text{• Separate rows using semicolons} \\\\$" +
    "$ \\text{ } \\\\$" +
    "$ \\text{For example, the matrix:} \\\\$" +
    "$$ \\begin{pmatrix} 1 & 2 & 3 \\\\ 4 & 5 & 6 \\\\ 7 & 8 & 9 \\end{pmatrix} $$" +
    "$ \\text{is written in MATLAB as:} \\\\$" +
    "$$ \\texttt{[1 2 3;4 5 6;7 8 9]} $$" +
    "$ \\text{ } \\\\$" +
    "$ \\text{Note: The vertical line in augmented matrices is ignored in MATLAB.} \\\\$" +
    "$ \\text{Just enter the full row. DO NOT leave spaces within each entry.} $",
  previewText: "Guide: Writing a Matrix in MATLAB",
  important: true,
  systemMessage: 
    "Note: For the interactive, use a single space to separate columns, and a single semicolon to separate rows. " +
    "Ensure columns follow alphabetical/numbered order of variables.",
  next: "p4a"
  },

  p4a: {
    type: "text",
    content:
      "Try writing the augmented matrix for the following system with 3 variables $x, y, z$:<br>" +
      "$3x + 2y - z = 1 \\\\ 5y + z = 3 \\\\ x + z = 2$",
    answers: new Set(["[3 2 -1 1;0 5 1 3;1 0 1 2]"]),
    respondToWrong: "p4aw",
    next: "p4b"
  },

  p4aw: {
    type: "plain",
    content:
      "The correct answer is:<br>" +
      "$\\texttt{[3 2 -1 1;0 5 1 3;1 0 1 2]}$<br><br>" +
      "Corresponding to:<br>" +
      "$\\left(\\begin{array}{ccc|c}" +
      "3 & 2 & -1 & 1 \\\\" +
      "0 & 5 & 1 & 3 \\\\" +
      "1 & 0 & 1 & 2 \\\\" +
      "\\end{array}\\right)$",
  },

  p4b: {
    type: "text",
    content:
      "Again, with 3 variables $x, y, z$:<br>" +
      "$x = 1 \\\\ y = 0 \\\\ z = 0$",
    answers: new Set(["[1 0 0 1;0 1 0 0;0 0 1 0]"]),
    respondToWrong: "p4bw",
    next: "p5"
  },

  p4bw: {
    type: "plain",
    content:
      "The correct answer is:<br>" +
      "$\\texttt{[1 0 0 1;0 1 0 0;0 0 1 0]}$<br><br>" +
      "Corresponding to:<br>" +
      "$\\left(\\begin{array}{ccc|c}" +
      "1 & 0 & 0 & 1 \\\\" +
      "0 & 1 & 0 & 0 \\\\" +
      "0 & 0 & 1 & 0 \\\\" +
      "\\end{array}\\right)$",
  },

  p5: {
    type: "dialogue",
    content:
      "Now, compare these two augmented matrices:<br>" +
      "1.<br>" +
      "$$\\left(\\begin{array}{ccc|c}" +
      "1 & 2 & 5 & 1 \\\\" +
      "1 & 3 & 7 & 4 \\\\" +
      "1 & 3 & 10 & 7 \\\\" +
      "\\end{array}\\right)$$" +
      "2.<br>" +
      "$$\\left(\\begin{array}{ccc|c}" +
      "1 & 2 & 5 & 1 \\\\" +
      "0 & 1 & 2 & 3 \\\\" +
      "0 & 0 & 3 & 3 \\\\" +
      "\\end{array}\\right)$$" +
      "Which one do you think is quicker to solve?",
    options: {
      0: 
        "$$\\left(\\begin{array}{ccc|c}" +
        "1 & 2 & 5 & 1 \\\\" +
        "1 & 3 & 7 & 4 \\\\" +
        "1 & 3 & 10 & 7 \\\\" +
        "\\end{array}\\right)$$",
      1: 
        "$$\\left(\\begin{array}{ccc|c}" +
        "1 & 2 & 5 & 1 \\\\" +
        "0 & 1 & 2 & 3 \\\\" +
        "0 & 0 & 3 & 3 \\\\" +
        "\\end{array}\\right)$$"
    },
    respondToIdx: {
      0: "p5a",
      1: "p5b"
    }
  },

  p5a: {
    type: "plain",
    content:
      "Not really...😿<br>Unlike the second, we can't find the value of any variable right away.",
    next: "p6"
  },

  p5b: {
    type: "plain",
    content:
      "You have good intuition!",
    next: "p6"
  },

  p6: {
    type: "plain",
    content:
      "Notice how the entries/zeroes form a staircase pattern in the second matrix?<br>" +
      "In fact, we can even solve for the last variable right away!<br>" + 
      "From right to left, we can solve for a variable, sub in their value to the other equations, and repeat.<br>" +
      "Enough talk. Now, let's do this thing! 🤓",
    next: "p6a"
  },

  p6a: {
    type: "dialogue",
    content: 
      "Currently we have:<br>" +
      "$x+2y+5z=1 \\\\ y+2z=3 \\\\ 3z=3$<br>" +
      "Any idea what the next step should be?",
    options: {0: "$z=1$"},
    respondToIdx: {0: "p6b"}
  },

  p6b: {
    type: "dialogue",
    content: 
      "Now we have:<br>" +
      "$x+2y+5=1 \\\\ y+2=3 \\\\ z=1$<br>" +
      "And then?",
    options: {0: "$y=1$"},
    respondToIdx: {0: "p6c"}
  },

  p6c: {
    type: "dialogue",
    content: 
      "Now we have:<br>" +
      "$x+2+5=1 \\\\ y=1 \\\\ z=1$<br>" +
      "We're very close!!",
    options: {0: "Solved it! $x=-6,y=1,z=1$"},
    respondToIdx: {0: "p6d"}
  },

  p6d: {
    type: "image",
    content: "images/cooked.png",
    next: "p6e"
  },

  p6e: {
    type: "plain",
    content:
      "<b>YOU. COOKED.</b><br>You have just applied a technique called <b>back-substitution</b>!<br>" +
      "We use this method to solve matrices in <b>row-echelon form (REF)</b>.<br>" + 
      "The 'staircase structure' you saw is a feature of matrices in REF!",
    next: "def_ref"
  },

  def_ref: {
    type: "tex",
    content:
      "$$ \\textbf{\\Large Row-Echelon Form} \\\\ $$" +
      "$ \\text{In the augmented matrix:} \\\\$" +
      "$ \\text{• a zero row is a row with all entries equal to 0.} \\\\$" +
      "$ \\text{• the leading entry of a row is the first nonzero entry from the left.} \\\\ \\text{ } \\\\$" +

      "$ \\text{An augmented matrix is in row-echelon form (REF) if:} \\\\$" +
      "$\\quad 1.\\ \\text{All zero rows are at the bottom of the matrix.} \\\\$" +
      "$\\quad 2.\\ \\text{The leading entries are further to the right as we move down the rows.} \\\\ \\text{ } \\\\$" +

      "$ \\text{An augmented matrix in REF has the form:} \\\\$" +
      "$$ \\left( \\begin{array}{ccccccc|c}" +
      "* & \\cdots & * & * & \\cdots & * & * & * \\\\" +
      "0 & \\cdots & 0 & * & \\cdots & * & * & * \\\\" +
      "0 & \\cdots & 0 & 0 & \\cdots & 0 & * & * \\\\" +
      "\\vdots & & \\vdots & \\vdots & & \\vdots & \\vdots & \\vdots \\\\" +
      "0 & \\cdots & 0 & 0 & \\cdots & 0 & 0 & 0" +
      "\\end{array} \\right), $$" +

      "$ \\text{where } * \\text{ denotes any arbitrary value.} \\\\ \\text{ } \\\\$" +

      "$ \\text{In the row-echelon form, a pivot column contains a leading entry.} \\\\$" +
      "$ \\text{Otherwise, it is called a non-pivot column.} $",
    previewText: "Definition: Row-Echelon Form",
    important: true,
    next: "p7"
  },

  p7: {
    type: "single-mcq",
    content:
      "What about this matrix:<br>" +
      "$$\\left(\\begin{array}{cc|c}" +
      "1 & 0 & 1 \\\\" +
      "0 & 1 & 2 \\\\" +
      "\\end{array}\\right)$$" +
      "Can you see the solution immediately?",
    options: {
      0: "$x = 1, y = 2$",
      1: "$x = 2, y = 1$",
      2: "$x = 1, y = 1/2$"
    },
    answersIds: new Set([0]),
    respondToIdx: {
      1: "p7w",
      2: "p7w"
    },
    next: "p8"
  },

  p7w: {
    type: "plain",
    content:
      "Erm. That HAD to be accidental.",
    systemMessage: "If that was not accidental, please review the content from the top 🙏"
  },

  p8: {
    type: "plain",
    content:
      "This matrix is in <b>reduced row‑echelon form (RREF)</b>, so you can read off the solution directly!<br>" +
      "Each pivot is 1 and is the only nonzero entry in its column.",
    next: "p11"
  },

  p11: {
    type: "plain",
    content:
      "Not all systems have unique solutions. Sometimes you get infinitely many solutions (like in Interactive 1.1).<br>" +
      "Consider this RREF matrix:<br>[1 0 2 3; 0 1 1 2]<br>" +
      "Assuming variables are $x, y, z$, what can you say about the system?<br>Is it REF, RREF or neither? And how would you express the general solution?",
    next: "p12"
  },

  p12: {
    type: "dialogue",
    content:
      "Try parameterizing in different ways:<br>" +
      "• Parameterize $x$: $x = s, y = ...$<br>" +
      "• Parameterize $y$<br>" +
      "• Parameterize $z$<br><br>" +
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
      "The easiest method is to parameterize the non‑pivot variable—which is $z$ here—because pivot columns depend on them.<br>" +
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


const compulsoryMessages = [
  "def_aug_matrix",
  "def_ref"
];

const checkpoints = [
  {
    id: "p0",
    label: "Start from beginning",
    showCompulsoryMessages: 0
  },
  {
    id: "p5",
    label: "Row-Echelon Form",
    showCompulsoryMessages: 1
  },
  {
    id: "p7",
    label: "Reduced Roe-Echelon Form",
    showCompulsoryMessages: 2
  }
];