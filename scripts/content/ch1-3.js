const dialogueSystem = {
  p0: {
    type: "plain",
    content:
      "In the previous chapter, we learnt about augmented matrices and the REF and RREF forms. <br>" +
      "Now, we will learn what Elementary Row Operations (EROs) are how they can transform one matrix to another!",
    next: "p1"
  },

  p1: {
    type: "single-mcq",
    content:
      "Let’s take a look at this system of equations: <br>" +
      "$x + y = 2$ — Equation 1<br>" +
      "$x - y = 0$ — Equation 2<br>" +
      "We have learnt that this is a linear system! How do we express this in an augmented matrix?",
    options: {
        0: "$$\\left(\\begin{array}{cc|c}" +
      "1 & 1 & 2 \\\\" +
      "1 & 1 & 2" +
      "\\end{array}\\right)$$",
        1: "$$\\left(\\begin{array}{cc|c}" +
      "1 & 1 & 2 \\\\" +
      "1 & -1 & 0" +
      "\\end{array}\\right)$$",
        2: "$$\\left(\\begin{array}{cc|c}" +
      "1 & 0 & 1 \\\\" +
      "0 & 1 & 1" +
      "\\end{array}\\right)$$"
    },
    answersIdx: new Set([1]),

    next: "p2"
  },

  p2: {
    type: "plain",
    content:
      "We have learnt that by taking the coefficients and constants, this linear system can be written as such!<br>" +
      "$$\\left(\\begin{array}{cc|c}" +
      "1 & 1 & 2 \\\\" +
      "1 & -1 & 0" +
      "\\end{array}\\right)$$",
    next: "p3"
  },

  p3: {
    type: "plain",
    content:
        "Now, what happens if we swap the order of the equations? <br><br>" + 
        "Original System:<br>" +
        "$x + y = 2$ — Equation 1<br>" +
        "$x - y = 0$ — Equation 2<br><br>" +
        "Transformed System:<br>" +
        "$x - y = 0$ — Equation 1<br>" +
        "$x + y = 2$ — Equation 2<br>",

    next: "p4"
  },

  p4: {
        type: "dialogue",
        content: "Do you think this change the solution to the system?",
        options: {
          0: "No, the solution remains the same",
          1: "Yes, it changes the solution"
        },
        respondToIdx: {
            0: "p4r1",
            1: "p4r2"
        }
    },

  p4r1: {
        type: "plain",
        content: "Absolutely! No-brainer right? Swapping the equations does not change the solution to the system.",
        next: "p5"
    },

  p4r2: {
        type: "plain",
        content: "Actually, the order does not matter if we express it in equation form!<br>" + 
        "At the end of the day, it’s still the same equations and the same solving process.",
        next: "p5"
    },

  p5: {
    type: "single-mcq",
    content:
      "What do you think the transformed system will look like in matrix form?",
    options: {
        0: "$$\\left(\\begin{array}{cc|c}" +
      "1 & -1 & 0 \\\\" +
      "1 & 1 & 2 " +
      "\\end{array}\\right)$$",
        1: "$$\\left(\\begin{array}{cc|c}" +
      "1 & 1 & 2 \\\\" +
      "1 & -1 & 0" +
      "\\end{array}\\right)$$",
      2: "You can't express this in matrix form!"
    },
    answersIdx: new Set([0]),
    next: "p5e1"
    },
  
  p5e1: {
    type: "plain",
    content:
      "The correct answer is:<br>" +
      "$$\\left(\\begin{array}{cc|c}" +
      "1 & -1 & 0 \\\\" +
      "1 & 1 & 2 " +
      "\\end{array}\\right)$$" +
      "We essentially just swapped Row 1 and Row 2!",
    next: "p6"
  },

  p6: {
    type: "plain",
    content:
      "We label this operation as $R_1 \\leftrightarrow R_2$ and we can express the transformation like this:<br>" +
      "$$\\left(\\begin{array}{cc|c}" +
      "1 & 1 & 2 \\\\" +
      "1 & -1 & 0 " +
      "\\end{array}\\right) \\xrightarrow{R_1 \\leftrightarrow R_2}" +
      "\\left(\\begin{array}{cc|c}" +
      "1 & -1 & 0 \\\\" +
      "1 & 1 & 2 " +
      "\\end{array}\\right)$$",
    next: "p7"
  },

  p7: {
    type: "plain",
    content:
      "This is called a <b>row swap</b>. $\\left(R_i \\leftrightarrow R_j\\right)$<br>" +
      "In matrices, there are 3 different <b>Elementary Row Operations (EROs)</b> and a row swap is the very first of three!",
    next: "p8"
  },

  p8: {
    type: "plain",
    content:
      "Moving on to the second ERO!<br>" +
      "Now what happens if we multiply Equation 1 by $2$?<br><br>" +
      "Original System:<br>" +
      "$x + y = 2$ — Equation 1<br>" +
      "$x - y = 0$ — Equation 2<br><br>" +
      "Transformed System:<br>" +
      "$2x + 2y = 4$ — Equation 1<br>" +
      "$x - y = 0$ — Equation 2",
    next: "p8e1"
  },

  p8e1: {
    type: "embed",
    content: "https://www.desmos.com/calculator/0hsfb9qmfi",
    previewText: "Visualize the intersection on Desmos",
    previewImage: "images/desmos_thumbnail.jpg",
    important: true,
    preload: true,
    systemMessage: "The original system is preloaded into Desmos. Select/Deselect the relevant equations by clicking the circles on the left.",
    next: "p9"
  },

  p9: {
    type: "single-mcq",
    content: "Let's visualize this on a graph! Does this preserve the solution to the system?<br>" +
    "<em>Hint: What does it mean for a solution to be preserved? It means that the point(s) of intersection remain the same!</em>",
    options: {
      0: "No, it creates a new solution",
      1: "Yes, it's the same line scaled",
      2: "We can't tell from a graph"
    },
    answersIdx: new Set([1]),
    next: "p10"
  },

  p10: {
    type: "plain",
    content:
      "Recall that the solution to a system of equations is the <b>point of intersection</b> between the lines represented by the equations.<br>" +
      "Multiplying by $2$ scales the equation, but we know that the line (Equation 1) <b>'looks' the same!</b><br>" +
      "Therefore, the point of intersection between the lines and hence, the solution remains the same.<br>",
    next: "p10e1"
  },

  p10e1: {
    type: "single-mcq",
    content: "What does the transformed system look like in a matrix?",
    options: {
      0: "$$\\left(\\begin{array}{cc|c}" +
      "1 & 1 & 2 \\\\" +
      "1 & -1 & 0 " +
      "\\end{array}\\right)$$",
      1: "$$\\left(\\begin{array}{cc|c}" +
      "2 & 2 & 4 \\\\" +
      "1 & -1 & 0 " +
      "\\end{array}\\right)$$",
      2: "You can't express this in matrix form!"
    },
    answersIdx: new Set([1]),
    next: "p10e2"
  },

  p10e2: {
    type: "plain",
    content:
      "We are taking the first row and multiplying it by $2$, so the transformed system in matrix form is:<br>" +
      "$$\\left(\\begin{array}{cc|c}" +
      "2 & 2 & 4 \\\\" +
      "1 & -1 & 0 " +
      "\\end{array}\\right)$$" +
      "<br>We label this operation as $R_1 \\rightarrow 2R_1$!<br>" +
      "$$\\left(\\begin{array}{cc|c}" +
      "1 & 1 & 2 \\\\" +
      "1 & -1 & 0 " +
      "\\end{array}\\right) \\xrightarrow{2R_1}" +
      "\\left(\\begin{array}{cc|c}" +
      "2 & 2 & 4 \\\\" +
      "1 & -1 & 0 " +
      "\\end{array}\\right)$$<br>" +
      "<em>Note: $2R_2$ and $R_2 \\rightarrow 2R_2$ mean the same thing! Just two different ways of writing!</em>",
    next: "p11"
  },

  p11: {
    type: "single-mcq",
    content:
      "What if we were to multiply Equation 1 by $0$? What happens?<br><br>" +
      "Transformed System:<br>" +
      "$0x + 0y = 0$ — Equation 1<br>" +
      "$x - y = 0$ — Equation 2",
    options: {
      0: "It still has the same solution",
      1: "It erases all the information in that equation",
      2: "It becomes a parallel line",
      3: "It's a trick to solve the system faster"
    },
    answersIdx: new Set([1]),
    next: "p12"
  },

  p12: {
    type: "plain",
    content:
      "Multiplying by $0$ turns your equation into $0 = 0$, which gives us no useful information. <br>" +
      "It's like erasing the equation, so we say that multiplying a row by $0$ specifically, is an <b>illegal</b> ERO!",
    next: "p12e1"
  },
  
  p12e1: {
    type: "plain",
    content:
      "From this, we have introduced to you the second of 3 EROs!<br>" +
      "We call this <b>multiplying a row by a nonzero scalar</b>. $\\left(aR_i\\right)$",
    next: "p13"
  },

  p13: {
    type: "plain",
    content:
      "Moving on to the third ERO!<br>" +
      "Now, let's recall what we have previously learnt in secondary school. To solve this linear system:<br><br>" +
      "$x + y = 2$ — Equation 1<br>" +
      "$x - y = 0$ — Equation 2<br><br>" +
      "We can simply add Equation 1 to Equation 2 via the elimination method!<br><br>" +
      "$(x + y) + (x - y) = 2 + 0$<br>" +
      "$\\rightarrow 2x = 2$",
    next: "p13e1"
  },

  p13e1: {
    type: "plain",
    content:
      "We have always assumed that we can just add the two equations together and somehow, we get the solution.<br>" +
      "But now, let's verify together that no matter how we add/minus these two equations together, the solution remains the same!",
    next: "p14"
  },

  p14: {
    type: "plain",
    content:
      "Let's verify that geometrically on Desmos!<br><br>" +
      "<b>Original system:</b><br>" +
      "$x + y = 2$ — Equation 1<br>" +
      "$x - y = 0$ — Equation 2<br><br>" +
      "<b>Transformed system:</b><br>" +
      "$x + y = 2$ — Equation 1<br>" +
      "$2x = 2$ — Equation 3 (After adding Equation 1 to Equation 2)",
    systemMessage:
      "The transformed equation has already been included in the Desmos page. " +
      "You can enable and disable equations by clicking on the circle to the left of the equation.",
    next: "p15"
  },

  p15: {
    type: "single-mcq",
    content:
      "Let's take a look at the desmos page!<br>" +
      "Does this transformation (adding Equation 1 and Equation 2) preserve the solution?<br>" +
      "<em>Hint: What does it mean for a solution to be preserved? It means that the point(s) of intersection remain the same!</em>",
    options: {
      0: "Yes, the intersection point is the same",
      1: "No, the intersection point in the transformed system moved from the one in the original system",
      2: "We can't tell"
    },
    answersIdx: new Set([0]),
    next: "p16"
  },

  p16: {
    type: "plain",
    content:
      "Visually, we can see that the line representing Equation 3 is basically a 'rotation' of Equation 2 about the intersection point.<br>" +
      "The intersection point remains unchanged at $x=1$, $y=1$, so we can conclude that the solution is preserved!",
    next: "p16e1"
  },

  p16e1: {
    type: "single-mcq",
    content: "What do you think the transformed system will look like after row addition?",
    options: {
      0: "$$\\left(\\begin{array}{cc|c}" +
      "1 & 1 & 2 \\\\" +
      "1 & -1 & 0 " +
      "\\end{array}\\right)$$",
      1: "$$\\left(\\begin{array}{cc|c}" +
      "2 & 2 & 4 \\\\" +
      "1 & -1 & 0 " +
      "\\end{array}\\right)$$",
      2: "$$\\left(\\begin{array}{cc|c}" +
      "1 & 1 & 2 \\\\" +
      "2 & 0 & 2 " +
      "\\end{array}\\right)$$",
      3: "You can't express this in matrix form!"
    },
    answersIdx: new Set([2]),
    next: "p16e2"
  },

  p16e2: {
    type: "plain",
    content: "We are taking the second row and adding the first row to it, so the transformed system in matrix form is:<br>" +
      "$$\\left(\\begin{array}{cc|c}" +
      "1 & 1 & 2 \\\\" +
      "1 & -1 & 0" +
      "\\end{array}\\right) \\xrightarrow{R_2 + R_1} " +
      "\\left(\\begin{array}{cc|c}" +
      "1 & 1 & 2 \\\\" +
      "2 & 0 & 2" +
      "\\end{array}\\right)$$" +
      "We label this transformation as $R_2 + R_1$ where $R_2$ (written in front) is the row that is being modified!<br>" +
      "<em>Note: $R_2 + R_1$ and $R_2 \\rightarrow R_2 + R_1$ mean the same thing! Just two different ways of writing!</em>",
    next: "p17"
  },

  p17: {
    type: "plain",
    content:
      "Now, what happens if we add $R_2 +3R_1$?<br><br>" +
      "<b>Original system:</b><br>" +
      "$x + y = 2$ — $R_1$<br>" +
      "$x - y = 0$ — $R_2$<br><br>" +
      "<b>Transformed system:</b><br>" +
      "$x + y = 2$ — $R_1$<br>" +
      "$4x + 2y = 6$ — $R_2$ (After $R_2 + 3R_1)$",
    systemMessage: 
      "The transformed equation has already been included in the Desmos page. " +
      "You can enable and disable equations by clicking on the circle to the left of the equation.",
    next: "p18"
  },

  p18: {
    type: "single-mcq",
    content: "Let's revisit the desmos page again! Is the solution set preserved?",
    options: {
      0: "No, the solution set is not preserved",
      1: "Yes, the solution set is preserved",
      2: "Not sure"
    },
    answersIdx: new Set([1]),
    next: "p19"
  },

  p19: {
    type: "plain",
    content:
      "Even though the equation looks different, the solution is preserved!<br>" +
      "See? The point of intersection in the original and transformed systems remains the same!",
    next: "p19e1"
  },

  p19e1: {
    type: "single-mcq",
    content: "How do you think we can express this transformation in matrix form?",
    options: {
      0: "$$\\left(\\begin{array}{cc|c}" +
      "1 & 1 & 2 \\\\" +
      "1 & -1 & 0" +
      "\\end{array}\\right) \\xrightarrow{R_1 \\leftrightarrow R_2} " +
      "\\left(\\begin{array}{cc|c}" +
      "1 & -1 & 0 \\\\" +
      "1 & 1 & 2" +
      "\\end{array}\\right)$$",
      1: "$$\\left(\\begin{array}{cc|c}" +
      "1 & 1 & 2 \\\\" +
      "1 & -1 & 0" +
      "\\end{array}\\right) \\xrightarrow{4R_2} " +
      "\\left(\\begin{array}{cc|c}" +
      "1 & 1 & 2 \\\\" +
      "4 & -4 & 0" +
      "\\end{array}\\right)$$",
      2: "$$\\left(\\begin{array}{cc|c}" +
      "1 & 1 & 2 \\\\" +
      "1 & -1 & 0" +
      "\\end{array}\\right) \\xrightarrow{R_2 + 3R_1} " +
      "\\left(\\begin{array}{cc|c}" +
      "1 & 1 & 2 \\\\" +
      "4 & 2 & 6" +
      "\\end{array}\\right)$$",
    },
    answersIdx: new Set([2]),
    next: "p19e2"
  },

  p19e2: {
    type: "plain",
    content:
      "We are just taking the second row and adding 3 times the first row to it, so the transformed system in matrix form is:<br>" +
      "$$\\left(\\begin{array}{cc|c}" +
      "1 & 1 & 2 \\\\" +
      "1 & -1 & 0" +
      "\\end{array}\\right) \\xrightarrow{R_2 + 3R_1} " +
      "\\left(\\begin{array}{cc|c}" +
      "1 & 1 & 2 \\\\" +
      "4 & 2 & 6" +
      "\\end{array}\\right)$$",
      next: "p20"
  },

  p20: {
    type: "plain",
    content:
      "The action of <b>adding a multiple of one row to another</b> is the last of 3 EROs! $\\left(R_i+cR_j\\right)$",
    next: "p20e1"
  },

  p20e1: {
    type: "tex",
    content:
      "<b>In summary, we have established the following 3 elememtary row operations:</b><br>" +
      "1. <b>Swapping 2 rows:</b> $R_i \\leftrightarrow R_j$<br>" +
      "2. <b>Multiplying a row by a nonzero constant:</b> $aR_i$ where $a \\neq 0$<br>" +
      "3. <b>Adding a multiple of a row to another:</b> $R_i + cR_j$ where $c \\in \\mathbb{R}$ and $i \\neq j$",
    important: true,
    next: "p21"
  },

  p21: {
    type: "plain",
    content:
      "At this point in time, you may be wondering... what is the purpose of all these EROs?<br>" +
      "The purpose of these 3 EROs is to ideally transform a matrix into a simpler, more useful form, specifically:<br>" +
      "• <b>Row Echelon Form (REF)</b><br>" +
      "• <b>Reduced Row Echelon Form (RREF)</b><br>" +
      "(We'll go deeper into these in Chapter 1.4)",
    next: "p22"
  },

  p22: {
    type: "plain",
    content:
      "Remember that when you perform EROs on a matrix and end up with something different,<br>" +
      "you haven't changed the solution, just the appearance of the matrix!<br>" +
      "So, if you can go from Matrix A to Matrix B using only legal EROs…<br>" +
      "We say that matrices A and B are <em>row equivalent</em>!",
    systemMessage: "Row equivalence will be revisited in depth in chapter 4. Stay tuned!",
    next: "p23"
  },

  p23: {
    type: "plain",
    content:
      "Now, what happens if we did an ERO by mistake and want to reverse it?<br>",
    next: "p24"
  },

  p24: {
    type: "mcq",
    content: 
      "Let's say you did this:<br>" +
      "$$\\left(\\begin{array}{cc|c}" +
      "1 & 2 & 3 \\\\" +
      "4 & 5 & 6" +
      "\\end{array}\\right) \\xrightarrow{R_1 \\leftrightarrow R_2}" +
      "\\left(\\begin{array}{cc|c}" +
      "4 & 5 & 6 \\\\" +
      "1 & 2 & 3" +
      "\\end{array}\\right)$$<br>" +
      "But oops! You realize that the swap was unnecessary. How can you reverse it?",
    options: {
      0: "You can't, once rows are swapped, the original order is lost",
      1: "Just swap them again with $R_1 \\leftrightarrow R_2$",
      2: "You can only reverse it only with the help of a computer"
    },
    answersIdx: new Set([1]),
    next: "p24e1"
  },

  p24e1: {
    type: "plain",
    content: "A row swap is reversible, you simply swap them again with $R_1 \\leftrightarrow R_2$ to undo the operation!<br>" +
    "$$\\left(\\begin{array}{cc|c}" +
      "4 & 5 & 6 \\\\" +
      "1 & 2 & 3" +
      "\\end{array}\\right) \\xrightarrow{R_1 \\leftrightarrow R_2}" +
      "\\left(\\begin{array}{cc|c}" +
      "1 & 2 & 3 \\\\" +
      "4 & 5 & 6" +
      "\\end{array}\\right)$$",
    next: "p25"
  },

  p25: {
    type: "plain",
    content:
      "Now let's say you scaled a row. For example, you multiplied Row 2 by $3$.<br>" +
      "Starting from:<br>" +
      "$$\\left(\\begin{array}{cc|c}" +
      "1 & 2 & 3 \\\\" +
      "4 & 5 & 6" +
      "\\end{array}\\right) \\xrightarrow{3R_2}" +
      "\\left(\\begin{array}{cc|c}" +
      "1 & 2 & 3 \\\\" +
      "12 & 15 & 18" +
      "\\end{array}\\right)$$",
    next: "p26"
  },

  p26: {
    type: "mcq",
    content: "How can you undo this scaling operation?",
    options: {
      0: "Multiply Row 2 by $0$. In other words, $0R_2$",
      1: "Multiply Row 2 by $\\frac{1}{3}$. In other words, $\\frac{1}{3}R_2$",
      2: "You can't undo row scaling"
    },
    answersIdx: new Set([1]),
    next: "p26e1"
  },
  
  p26e1: {
    type: "plain",
    content:"Just multiply Row 2 by $\\frac{1}{3}$ to reverse the effect of multiplying by $3$. " +
      "Remember that the first option is <b>not a legal ERO</b> as we cannot multiply a row by $0$!<br>" +
      "$$\\left(\\begin{array}{cc|c}" +
      "1 & 2 & 3 \\\\" +
      "12 & 15 & 18" +
      "\\end{array}\\right) \\xrightarrow{\\frac{1}{3}R_2}" +
      "\\left(\\begin{array}{cc|c}" +
      "1 & 2 & 3 \\\\" +
      "4 & 5 & 6" +
      "\\end{array}\\right)$$",
    next: "p27"
  },

  p27: {
    type: "plain",
    content:
      "Lastly, let's say you added one row to another:<br>" +
      "$$\\left(\\begin{array}{cc|c}" +
      "1 & 2 & 3 \\\\" +
      "4 & 5 & 6" +
      "\\end{array}\\right) \\xrightarrow{R_2 + 2R_1}" +
      "\\left(\\begin{array}{cc|c}" +
      "1 & 2 & 3 \\\\" +
      "6 & 9 & 12" +
      "\\end{array}\\right)$$",
    next: "p28"
  },

  p28: {
    type: "mcq",
    content: "How do we reverse this row addition?",
    options: {
      0: "$R_2 \\rightarrow R_2 - \\frac{1}{2}R_1$",
      1: "$R_2 \\rightarrow R_2 - 2R_1$",
      2: "$R_1 \\rightarrow R_1 - 2R_2$",
      3: "$R_1 \\rightarrow R_1 + 2R_2$",
      4: "$R_1 \\rightarrow R_2 + \\frac{1}{2}R_1$",
    },
    answersIdx: new Set([1]),
    next: "p29"
  },

  p29: {
    type: "plain",
    content:
      "To undo $R_2 \\rightarrow R_2 + 2R_1$, just do the opposite: $R_2 \\rightarrow R_2 - 2R_1$!<br><br>" +
      "<b>Warning:</b> Many students mistakenly think they should use the reciprocal (e.g. $\\frac{1}{2}$ instead of $2$) when reversing a row addition.<br>" +
      "To reverse a row addition, you must subtract the exact same multiple from the same row you originally changed. " +
      "Changing the wrong row, using the wrong multiple, or trying to replace the multiple with its reciprocal will not restore the original matrix!<br>",
    next: "end"
  },

  end: {
    type: "tex",
    content: "<b>In summary, there are 3 different types of EROs and all legal EROs are reversible!</b><br>" +
    "1. The reverse of exchanging 2 rows, $R_i \\leftrightarrow R_j$, is itself.<br>" +
    "2. The reverse of multiplying a row by a nonzero constant, $aR_j$ is multiplying by the reciprocal of the constant, $\\frac{1}{a}R_j$.<br>" +
    "3. The reverse of adding a multiple of a row to another, $R_i + cR_j$ is subtracting the multiple of that row, $R_i - cR_j$.",
    systemMessage: "🎉Congratulations! You have reached the end of Interactive 1.3!🎉",
    important: true,
  }
}

const compulsoryMessages = [
  "p20e1"
];

const checkpoints = [
  {
    id: "p0",
    label: "Beginning: Row Swap and Row Multiplication",
    showCompulsoryMessages: 0
  },

  {id: "p13", label: "The ERO known (informally) as Row Addition", showCompulsoryMessages: 0},
  {id: "p23", label: "Reverse EROs", showCompulsoryMessages: 1}
];
