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
      "On the left, we <b>let each column represent a variable</b>. Here, $x, y, z$ form the first 3 columns respectively.<br>" +
      "This way, we only have to write down their coefficients as entries in the matrix. Saves some effort!<br>" +
      "Next, we draw a vertical line, and on the right, we write down the constants as another column.",
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
      "\\end{array} \\right) \\\\ $$" +
      "$ \\text{• } a_{ij} \\text{ are known as entries of a matrix.} $",
    previewText: "Augmented Matrices",
    important: true,
    next: "p3"
  },

  p3: {
    type: "dialogue",
    content: 
      "Now, let's practice writing it down!",
    options: {
      0: "How do I write matrices in here lol"
    },
    respondToIdx: {
      0: "p3a"
    }
  },

  p3a: {
    type: "plain",
    content: 
      "Wait...😳 You might be onto something. Let's do it differently then.<br>" +
      "Since you'll be using MATLAB for this course, we can try typing it down!",
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
      "\\end{array}\\right)$"
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
      "Which one seems faster to solve?<br>" +
      "(same solution btw)",
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
        "\\end{array}\\right)$$",
      2:
        "Aren't they the same?"
    },
    respondToIdx: {
      0: "p5a",
      1: "p5b",
      2: "p5c"
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
      "Good eyesight!",
    next: "p6"
  },

  p5c: {
    type: "plain",
    content:
      "Not quite!",
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
    respondToIdx: {0: "p6e"}
  },

  p6e: {
    type: "plain",
    content:
      "<b>YOU. COOKED.🔥🔥🔥</b><br>You have just applied a technique called <b>back-substitution</b>!<br>" +
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
      "$ \\text{• the } \\textbf{leading entry} \\text{ of a row is the first nonzero entry from the left.} \\\\ \\text{ } \\\\$" +

      "$ \\text{An augmented matrix is in row-echelon form (REF) if:} \\\\$" +
      "$ \\text{• All zero rows are at the bottom of the matrix.} \\\\$" +
      "$ \\text{• The } \\textbf{leading entries} \\text{ are further to the right as we move down the rows.} \\\\ \\text{ } \\\\$" +

      "$ \\text{An augmented matrix in REF has the form:} \\\\$" +
      "$$ \\left( \\begin{array}{ccccccc|c}" +
      "* & \\cdots & * & * & \\cdots & * & * & * \\\\" +
      "0 & \\cdots & 0 & * & \\cdots & * & * & * \\\\" +
      "0 & \\cdots & 0 & 0 & \\cdots & 0 & * & * \\\\" +
      "\\vdots & & \\vdots & \\vdots & & \\vdots & \\vdots & \\vdots \\\\" +
      "0 & \\cdots & 0 & 0 & \\cdots & 0 & 0 & 0" +
      "\\end{array} \\right), $$" +

      "$ \\text{where } * \\text{ denotes any arbitrary value.} \\\\ \\text{ } \\\\$" +

      "$ \\text{In the row-echelon form, a } \\textbf{pivot column} \\text{ contains a leading entry.} \\\\$" +
      "$ \\text{Otherwise, it is called a } \\textbf{non-pivot column} \\textbf{.} $",
    previewText: "Definition: Row-Echelon Form",
    important: true,
    next: "p7"
  },

  p7: {
    type: "mcq",
    content:
      "Read through the definition? Now find the pivot columns!<br>" +
      "$$\\left(\\begin{array}{ccc|c}" +
      "0 & 0 & 0 & 2\\\\" +
      "0 & 0 & 2 & 0\\\\" +
      "0 & 5 & 0 & 0\\\\" +
      "1 & 0 & 0 & 0\\\\" +
      "\\end{array}\\right)$$",
    options: {
      0: "Column 1",
      1: "Column 2",
      2: "Column 3",
      3: "Column 4"
    },
    answersIdx: new Set([]),
    next: "p8"
  },

  p8: {
    type: "plain",
    content: 
      "WHAT?! All of them were wrong? Let's relook at the definition...<br>" +
      "Ah, seems like the terms <b>pivot and non-pivot columns</b> only apply to the REF.",
    next: "p9"
  },

  p9: {
    type: "single-mcq",
    content:
      "Now, what about this matrix:<br>" +
      "$$\\left(\\begin{array}{cc|c}" +
      "1 & 0 & 1 \\\\" +
      "0 & 1 & 2 \\\\" +
      "\\end{array}\\right)$$" +
      "Can you see the solution right away?",
    options: {
      0: "$x = 1, y = 2$",
      1: "$x = 2, y = 1$",
      2: "$x = 1, y = \\frac{1}{2}$"
    },
    answersIdx: new Set([0]),
    respondToIdx: {
      1: "p9w",
      2: "p9w"
    },
    next: "p10"
  },

  p9w: {
    type: "plain",
    content:
      "Erm. That HAD to be accidental. 😶",
    systemMessage: "If that was not accidental, please review the content from the top 🙏"
  },

  p10: {
    type: "plain",
    content:
      "This matrix is in <b>reduced row‑echelon form (RREF)</b>, so you can read off the solution directly!<br>" +
      "(each leading entry is 1 and the only nonzero entry in its column)",
    next: "def_rref"
  },

  def_rref: {
    type: "tex",
  content:
    "$$ \\textbf{\\Large Reduced Row-Echelon Form} \\\\ $$" +
    "$ \\text{In the augmented matrix:} \\\\$" +
    "$ \\text{• The } \\textbf{leading entries} \\text{ are 1.} \\\\$" +
    "$ \\text{• In each } \\textbf{pivot column} \\text{, all entries except the } \\textbf{leading entry} \\text{ are 0.} \\\\ \\text{ } \\\\$" +

    "$ \\text{A matrix in RREF has the form:} \\\\$" +
    "$$ \\left( \\begin{array}{ccccccc|c}" +
    "0 & \\cdots & 1 & * & 0 & \\cdots & 0 & * \\\\" +
    "0 & \\cdots & 0 & 0 & 1 & \\cdots & 0 & * \\\\" +
    "0 & \\cdots & 0 & 0 & 0 & \\cdots & 1 & * \\\\" +
    "0 & \\cdots & 0 & 0 & 0 & \\cdots & 0 & 0 \\\\" +
    "\\vdots & & \\vdots & \\vdots & \\vdots & & \\vdots & \\vdots \\\\" +
    "0 & \\cdots & 0 & 0 & 0 & \\cdots & 0 & 0" +
    "\\end{array} \\right), $$" +

    "$ \\text{where } * \\text{ denotes any arbitrary value.} $",
  previewText: "Definition: Reduced Row-Echelon Form",
    previewText: "Definition: Row-Echelon Form",
    important: true,
    next: "p11"
  },

  p11: {
    type: "plain",
    content:
      "But, as we know by now, not all systems have unique solutions.<br>" +
      "Sometimes you get infinitely many solutions, and the general solution becomes confusing...<br><br>" +
      "Let's use an example:" +
      "$$\\left(\\begin{array}{ccc|c}" +
      "1 & 0 & 2 & 3 \\\\" +
      "0 & 1 & 0 & 2 \\\\" +
      "\\end{array}\\right)$$" +
      "Taking the variables as $x, y, z$, let's try finding the general solution together!",
    next: "p12"
  },

  p12: {
    type: "dialogue",
    content:
      "Expressing it in equation form, we get:<br>" +
      "$x+2z=3 \\\\ y=2$<br><br>" +
      "Which variable shall we parameterize?",
    options: {
      0: "Parameterize $x$",
      1: "Parameterize $y$",
      2: "Parameterize $z$"
    },
    respondToIdx: {
      0: "p12x1",
      1: "p12y1",
      2: "p12z1"
    }
  },

  p12y1: {
    type: "plain",
    content: 
      "First, we let:<br>$y=s, s \\in \\mathbb{R}$<br>Wait, but that can't be...<br>" +
      "From the second row, it's apparent that $y=2$!",
    next: "p12y2"
  },

  p12y2: {
    type: "image",
    content: 
      "images/cipher_pitiful.png",
    sticker: true,
    next: "p12y3"
  },

  p12y3: {
    type: "plain",
    content: 
      "Well, it seems like we screwed up this time.<br>" +
      "Try choosing a different variable to parameterize!",
    next: "p12"
  },

  p12x1: {
    type: "plain",
    content: 
      "First, we let:<br>$x=s, s \\in \\mathbb{R}$<br><br>Now, we have:<br>" +
      "$x+2z=3 \\implies s+2z=3 \\\\ y=2$",
    next: "p12x2"
  },

  p12x2: {
    type: "plain",
    content: 
      "We solved it! The general solution is:<br>" +
      "$x=s,y=2,z=\\frac{3-s}{2},s \\in \\mathbb{R}$",
    next: "p12rep"
  },

  p12z1: {
    type: "plain",
    content: 
      "First, we let:<br>$z=s, s \\in \\mathbb{R}$<br><br>Now, we have:<br>" +
      "$x+2z=3 \\implies x+2s=3 \\\\ y=2$",
    next: "p12z2"
  },

  p12z2: {
    type: "plain",
    content: 
      "We solved it! The general solution is:<br>" +
      "$x=3-2s,y=2,z=s,s \\in \\mathbb{R}$",
    next: "p12rep"
  },

  p12rep: {
    type: "dialogue",
    content: "Wanna proceed? Or shall we try again?",
    options: {
      0: "Let's try again",
      1: "Let's proceed"
    },
    respondToIdx: {
      0: "p12",
      1: "p13"
    }
  },

  p13: {
    type: "plain",
    content:
      "Well, a simple life hack from me: just parameterize the non-pivot columns!<br>" +
      "You're guaranteed to arrive at the general solution if you do so.<br>" + 
      "In fact, there's a pattern to it. With enough practice, you can even find it with pure eye-power!",
    next: "end"
  },

  end: {
    type: "plain",
    content:
      "Anyways, that's all you need to know for this section!<br>" +
      "If you have any queries, you may ask on Telegram as usual.<br>" +
      "(I hope my creators don't disappoint you 🥺)",
    systemMessage: "🎉Congratulations! You have reached the end of Interactive 1.2!🎉"
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
    id: "p9",
    label: "Reduced Row-Echelon Form",
    showCompulsoryMessages: 2
  }
];