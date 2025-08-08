const dialogueSystem = {
  p0: {
    type: "plain",
    content:
      "In the previous chapter, we learnt about augmented matrices and the REF and RREF forms. <br>" +
      "Now, we will learn what Elementary Row Operations (EROs) are how they can transform one matrix to another!",
    next: "p1"
  },

  p1: {
    type: "mcq",
    content:
      "Let’s take a look at this system of equations: <br>" +
      "\\(x + y = 2\\) — Equation 1<br>" +
      "\\(x - y = 0\\) — Equation 2<br>" +
      "We have learnt that this is a linear system! How do we express this in an augmented matrix?",
    options: {
        0: "\\[\\left[\\begin{array}{cc|c}" +
      "1 & 1 & 2 \\\\" +
      "1 & 1 & 2" +
      "\\end{array}\\right]\\]",
        1: "\\[\\left[\\begin{array}{cc|c}" +
      "1 & 1 & 2 \\\\" +
      "1 & -1 & 0" +
      "\\end{array}\\right]\\]",
        2: "\\[\\left[\\begin{array}{cc|c}" +
      "1 & 0 & 1 \\\\" +
      "0 & 1 & 1" +
      "\\end{array}\\right]\\]"
    },
    answersIdx: new Set([1]),

    next: "p2"
  },

  p2: {
    type: "plain",
    content:
      "We have learnt that by taking the coefficients and constants, this linear system can be written as such!<br>" +
      "\\[\\left[\\begin{array}{cc|c}" +
      "1 & 1 & 2 \\\\" +
      "1 & -1 & 0" +
      "\\end{array}\\right]\\]",
    next: "p3"
  },

  p3: {
    type: "plain",
    content:
        "Now, what happens if we swap the order of the equations? <br><br>" + 
        "Original System:<br>" +
        "\\(x + y = 2\\) — Equation 1<br>" +
        "\\(x - y = 0\\) — Equation 2<br><br>" +
        "Transformed System:<br>" +
        "\\(x - y = 0\\) — Equation 1<br>" +
        "\\(x + y = 2\\) — Equation 2<br>",

    next: "p4"
  },

  p4: {
        type: "dialogue",
        content: "Do you think this changes the solution to the system?",
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
        content: "Actually, it turns out that swapping the equations does not change the solution to the system<br>" + 
        "At the end of the day, it’s still the same equations and the same solving process.",
        next: "p5"
    },

  p5: {
    type: "mcq",
    content:
      "What do you think the transformed system will look like in matrix form?",
    options: {
        0: "\\[\\left[\\begin{array}{cc|c}" +
      "1 & -1 & 0 \\\\" +
      "1 & 1 & 2 " +
      "\\end{array}\\right]\\]",
        1: "\\[\\left[\\begin{array}{cc|c}" +
      "1 & 1 & 2 \\\\" +
      "1 & -1 & 0" +
      "\\end{array}\\right]\\]",
      2: "You can't express this in matrix form!"
    },
    answersIdx: new Set([0]),
    next: "p5e1"
    },
  
  p5e1: {
    type: "plain",
    content:
      "\\[\\left[\\begin{array}{cc|c}" +
      "1 & -1 & 0 \\\\" +
      "1 & 1 & 2 " +
      "\\end{array}\\right]\\]<br>" +
      "is the correct answer! We are essentially just swapping Row 1 and Row 2!",
    next: "p6"
  },

  p6: {
    type: "plain",
    content:
      "We label this row swap as R1 ⟷ R2<br>",
    next: "p7"
  },

  p7: {
    type: "plain",
    content:
      "This is called a <strong>row swap</strong>. In matrices, there are 3 different elementary row operations and a row swap is the very first of three!<br>",
    next: "p8"
  },

  p8: {
    type: "plain",
    content:
      "Now what happens if we multiply Equation 1 by 2?<br><br>" +
      "Original System:<br>" +
      "\\(x + y = 2\\) — Equation 1<br>" +
      "\\(x - y = 0\\) — Equation 2<br><br>" +
      "Transformed System:<br>" +
      "\\(2x + 2y = 4\\) — Equation 1<br>" +
      "\\(x - y = 0\\) — Equation 2",
    next: "p9"
  },

  p9: {
    type: "mcq",
    content: "Does this change the solution to the system?",
    options: {
      0: "Yes, it creates a new solution",
      1: "No, it's the same line scaled",
      2: "We can't tell from a graph"
    },
    answersIdx: new Set([1]),
    next: "p10"
  },

  p10: {
    type: "plain",
    content:
      "Correct! The line (Equation 1) remains exactly the same! Multiplying by 2 scales the equation, but the solution remains the same.<br>" +
      "What does this look like in a matrix?<br>",
    next: "p10e1"
  },

  p10e1: {
    type: "mcq",
    content: "What does the transformed system look like in a matrix?",
    options: {
      0: "\\[\\left[\\begin{array}{cc|c}" +
      "1 & 1 & 2 \\\\" +
      "1 & -1 & 0 " +
      "\\end{array}\\right]\\]",
      1: "\\[\\left[\\begin{array}{cc|c}" +
      "2 & 2 & 4 \\\\" +
      "1 & -1 & 0 " +
      "\\end{array}\\right]\\]"
    },
    answersIdx: new Set([1]),
    next: "p11"
  },

  p11: {
    type: "mcq",
    content:
      "What if we were to multiply Equation 1 by 0? What happens?<br>" +
      "\\(0x + 0y = 0\\) — Equation 1<br>" +
      "\\(x - y = 0\\) — Equation 2",
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
      "Correct! Multiplying by 0 turns your equation into 0 = 0, which gives us no useful information. It's like erasing the equation, so we say that multiplying a row by 0 is an illegal ERO!<br><br>" +
      "From this, we have introduced to you the second of 3 EROs! We call this <strong>multiplying a row by a non-zero scalar</strong>.",
    next: "p13"
  },

  p13: {
    type: "plain",
    content:
      "Now, let's recall what we have previously learnt in secondary school. To solve this linear system:<br>" +
      "\\(x + y = 2\\) — Equation 1<br>" +
      "\\(x - y = 0\\) — Equation 2<br>" +
      "We can simply add Equation 1 to Equation 2 via the elimination method!<br>" +
      "\\((x + y) + (x - y) = 2 + 0\\)<br>" +
      "\\(\\rightarrow 2x = 2\\)",
    next: "p14"
  },

  p14: {
    type: "plain",
    content:
      "Let's verify that geometrically!<br>" +
      "<strong>Original system:</strong><br>" +
      "\\(x + y = 2\\) — Equation 1<br>" +
      "\\(x - y = 0\\) — Equation 2<br>" +
      "<strong>Transformed system:</strong><br>" +
      "\\(x + y = 2\\) — Equation 1<br>" +
      "\\(2x = 2\\) — Equation 3 (After adding Equation 1 to Equation 2)",
    next: "p15"
  },

  p15: {
    type: "mcq",
    content:
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
      "Correct! Visually, we can see that the line representing Equation 3 is basically a rotation of Equation 2 about the intersection point.<br>" +
      "The intersection point remains unchanged at (1, 1), so we can conclude that the solution is preserved!<br><br>" +
      "What will this row addition look like in matrix form?<br>" +
      "\\[\\left[\\begin{array}{cc|c}" +
      "1 & 1 & 2 \\\\" +
      "1 & -1 & 0" +
      "\\end{array}\\right] \\xrightarrow{R_2 + R_1} " +
      "\\left[\\begin{array}{cc|c}" +
      "1 & 1 & 2 \\\\" +
      "2 & 0 & 2" +
      "\\end{array}\\right]\\]",
    next: "p17"
  },

  p17: {
    type: "plain",
    content:
      "Now, what happens if we add Equation 2 + 3 × Equation 1? Is the solution set preserved?<br>" +
      "<strong>Original system:</strong><br>" +
      "\\(x + y = 2\\) — Equation 1<br>" +
      "\\(x - y = 0\\) — Equation 2<br>" +
      "<strong>Transformed system:</strong><br>" +
      "\\(x + y = 2\\) — Equation 1<br>" +
      "\\(4x + 2y = 6\\) — Equation 3 (After adding 3 × Equation 1 to Equation 2)",
    next: "p18"
  },

  p18: {
    type: "mcq",
    content: "Is the solution set preserved?",
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
      "Correct! Yes, the solution is preserved! Even though the equation looks different, the point of intersection in the original and transformed systems remains the same!<br><br>" +
      "How do we present this transformation in a matrix?<br>" +
      "\\[\\left[\\begin{array}{cc|c}" +
      "1 & 1 & 2 \\\\" +
      "1 & -1 & 0" +
      "\\end{array}\\right] \\xrightarrow{R_2 + 3R_1} " +
      "\\left[\\begin{array}{cc|c}" +
      "1 & 1 & 2 \\\\" +
      "4 & 2 & 6" +
      "\\end{array}\\right]\\]",
    next: "p20"
  },

  p20: {
    type: "plain",
    content:
      "The act of adding a multiple of one row to another is the last of 3 EROs!<br><br>" +
      "<strong>In summary, we have established the following 3 EROs:</strong><br>" +
      "1. <strong>Row swap:</strong> \\(R_i \\leftrightarrow R_j\\)<br>" +
      "2. <strong>Row scaling:</strong> \\(aR_i\\) where \\(a \\neq 0\\)<br>" +
      "3. <strong>Row addition:</strong> \\(R_i + cR_j\\) where \\(c \\in \\mathbb{R}\\)",
    next: "p21"
  },

  p21: {
    type: "plain",
    content:
      "At this point in time, you may be wondering... what is the purpose of all these EROs?<br>" +
      "The purpose of these 3 EROs is to ideally transform a matrix into a simpler, more useful form, specifically:<br>" +
      "• <strong>Row Echelon Form (REF)</strong><br>" +
      "• <strong>Reduced Row Echelon Form (RREF)</strong><br>" +
      "(We'll go deeper into these in Chapter 1.4)",
    next: "p22"
  },

  p22: {
    type: "plain",
    content:
      "Remember that when you perform EROs on a matrix and end up with a new matrix, you haven't changed the solution, just the appearance of the matrix!<br><br>" +
      "So, if you can go from Matrix A to Matrix B using only legal EROs…<br>" +
      "We say that matrices A and B are <strong>row equivalent</strong>!",
    next: "p23"
  },

  p23: {
    type: "plain",
    content:
      "Now, what happens if we do an ERO by mistake and want to reverse it? Let's start with a row swap.<br>" +
      "Let's say we have this augmented matrix:<br>" +
      "\\[\\left[\\begin{array}{cc|c}" +
      "1 & 2 & 3 \\\\" +
      "4 & 5 & 6" +
      "\\end{array}\\right]\\]<br>" +
      "You swap Row 1 and Row 2 (R1 ⟷ R2), so it becomes:<br>" +
      "\\[\\left[\\begin{array}{cc|c}" +
      "4 & 5 & 6 \\\\" +
      "1 & 2 & 3" +
      "\\end{array}\\right]\\]",
    next: "p24"
  },

  p24: {
    type: "mcq",
    content: "Oops! You realize that swap was unnecessary. How do you reverse it?",
    options: {
      0: "You can't, once rows are swapped, the original order is lost",
      1: "Just swap them again with R1 ⟷ R2",
      2: "You can only reverse it only with the help of a computer"
    },
    answersIdx: new Set([1]),
    next: "p25"
  },

  p25: {
    type: "plain",
    content:
      "Correct! Yes! A row swap is reversible, you just swap them again with R1 ⟷ R2 to undo the operation.<br><br>" +
      "Now let's say you scaled a row. For example, you multiplied Row 2 by 3.<br>" +
      "Starting from:<br>" +
      "\\[\\left[\\begin{array}{cc|c}" +
      "1 & 2 & 3 \\\\" +
      "4 & 5 & 6" +
      "\\end{array}\\right]\\]<br>" +
      "You do: R2 → 3 × R2<br>" +
      "\\[\\left[\\begin{array}{cc|c}" +
      "1 & 2 & 3 \\\\" +
      "12 & 15 & 18" +
      "\\end{array}\\right]\\]",
    next: "p26"
  },

  p26: {
    type: "mcq",
    content: "How can you undo this scaling operation?",
    options: {
      0: "Multiply Row 2 by 0. In other words, 0 × R2",
      1: "Multiply Row 2 by ⅓. In other words, ⅓ × R2",
      2: "You can't undo row scaling"
    },
    answersIdx: new Set([1]),
    next: "p27"
  },

  p27: {
    type: "plain",
    content:
      "Correct! Just multiply Row 2 by 1/3 to reverse the effect of multiplying by 3. Remember that option A is not a legal ERO as we cannot multiply a row by 0!<br><br>" +
      "Lastly, let's say you added one row to another.<br>" +
      "Starting from:<br>" +
      "\\[\\left[\\begin{array}{cc|c}" +
      "1 & 2 & 3 \\\\" +
      "4 & 5 & 6" +
      "\\end{array}\\right]\\]<br>" +
      "You do: R2 + 2 × R1<br>" +
      "\\[\\left[\\begin{array}{cc|c}" +
      "1 & 2 & 3 \\\\" +
      "6 & 9 & 12" +
      "\\end{array}\\right]\\]",
    next: "p28"
  },

  p28: {
    type: "mcq",
    content: "How do we reverse this row addition?",
    options: {
      0: "R2 → R2 - 2 × R1",
      1: "R1 → R1 - 2 × R2",
      2: "Swap R1 and R2",
      3: "Multiply R2 by -2"
    },
    answersIdx: new Set([0]),
    next: "p29"
  },

  p29: {
    type: "plain",
    content:
      "Correct! To undo R2 → R2 + 2 × R1, just do the opposite: R2 → R2 - 2 × R1!<br><br>" +
      "<strong>In summary, all legal EROs are reversible.</strong>",
    next: "p30"
  }
}

const compulsoryMessages = [];

const checkpoints = [
  {
    id: "p0",
    label: "Start from beginning",
    showCompulsoryMessages: 0
  }
];
