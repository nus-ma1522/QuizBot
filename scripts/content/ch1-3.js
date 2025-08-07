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
        "Now, what happens if we swap the order of the equations? <br>" + 
        "This means that we put Equation 2 to the top and Equation 1 to the bottom!<br>" +
        "\\(x - y = 0\\) — Equation 1<br>" +
        "\\(x + y = 2\\) — Equation 2",

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
      "What do you think this will look like in matrix form?",
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
    next: "p6"
    },

  p6: {
    type: "plain",
    content:
      "We label this row swap as R1 ⟷ R2, which means we swap Row 1 with Row 2.<br>",
    next: "p7"
  },
    p7: {
    type: "plain",
    content:
      "We label this row swap as R1 <-> R2, which means we swap Row 1 with Row 2.<br>",
    next: "p8"
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
