const dialogueSystem = {
  start: {
    type: "plain",
    content: "Let's recall what we’ve learned before:<br>" +
    "\\(x + y = 2\\) and \\(x - y = 0\\).",
    next: "q1"
  },

  q1: {
    type: "dialogue",
    content: "Do you still remember what these are called?",
    options: {
      0: "Simultaneous equations",
      1: "Linear equations",
      2: "I’m not sure"
    },
    respondToIdx: {
      0: "q1a",
      1: "q1a",
      2: "q1a"
    }
  },

  q1a: {
    type: "plain",
    content: "These are called simultaneous equations — two or more equations with the same variables, with a shared solution.<br>" +
    "They’re also linear equations since each equation forms a straight line.",
    next: "def_linear_eqn"
  },


  def_linear_eqn: {
    type: "tex",
    content: "$$ \\textbf{\\Large Linear Equations} \\\\ $$" +
      "$ \\text{A linear equation with } n \\text{ variables in standard form has the form:} \\\\$" +
      "$$ a_1 x_1 + a_2 x_2 + \\cdots + a_n x_n = b $$" +
      "$ \\text{• } a_1, a_2, \\ldots, a_n \\text{ are known constants, called the coefficients.} \\\\$" +
      "$ \\text{• } b \\text{ is called the constant} \\\\$" +
      "$ \\text{• } x_1, x_2, \\ldots, x_n \\text{ are variables} \\\\ \\text{ } \\\\$" +
      "$ \\text{The linear equation is homogeneous if } b = 0 \\text{, i.e.} \\\\$" +
      "$$ a_1 x_1 + a_2 x_2 + \\cdots + a_n x_n = 0 \\\\ \\text{ } $$" +
      "$$ \\textbf{\\Large Linear Systems} \\\\ $$" +
      "$ \\text{A system of linear equations, or a linear system consists of a finite number} \\\\$" +
      "$ \\text{of linear equations. In general, a linear system with } n \\text{ variables and } m \\\\$" +
      "$ \\text{equations in standard form is written as:} \\\\$" +
      "$$ \\begin{cases}" +
      "a_{11} x_1 + a_{12} x_2 + \\cdots + a_{1n} x_n = b_1 \\\\" +
      "a_{21} x_1 + a_{22} x_2 + \\cdots + a_{2n} x_n = b_2 \\\\" +
      "\\hphantom{mmmmmmnnn} \\vdots \\\\" +
      "a_{m1} x_1 + a_{m2} x_2 + \\cdots + a_{mn} x_n = b_m" +
      "\\end{cases} $$" +
      "$ \\text{The linear system is homogeneous if } b_1 = b_2 = \\ldots = b_m = 0 \\text{,} \\\\$" +
      "$ \\text{that is, all the linear equations are homogeneous.} \\\\ \\text{ } \\\\$" +
      "$$ \\textbf{Solutions to a linear system} $$" +
      "$ \\text{Given a linear system, we say that:} \\\\$" +
      "$$ x_1 = c_1, x_2 = c_2, \\ldots, x_n = c_n $$" +
      "$ \\text{is a solution to the linear system if the equations are simultaneously} \\\\$" +
      "$ \\text{satisfied after making the substitution.} $",
    previewText: "Definition: Linear Equations and Systems",
    previewImage: "images/cooking.png",
    important: true,
    systemMessage: "You may view starred messages anytime by clicking on the star icon on the top right corner.",
    next: "q2"
  },

  q2: {
    type: "mcq",
    content: "Vibe check! Which of the following equations are linear? (Select all that apply)",
    options: {
      0: "<b>a</b>. \\(x + y = 1\\)",
      1: "<b>b</b>. \\(x + x^2 = y\\)",
      2: "<b>c</b>. \\(\\sin(x) + \\cos(y) = 1\\)",
      3: "<b>d</b>. \\(x + \\sin^2(x) + \\cos^2(x) = y\\)"
    },
    answersIdx: new Set([0, 3]),
    next: "q2a"
  },

  q2a: {
    type: "plain",
    content: "<b>b</b> & <b>c</b> contain nonlinear terms like \\(x^2\\), \\(\\sin(x)\\), etc.<br>" + 
    "<b>d</b> is a trick option: by using the identity \\( \\sin^2(x) + \\cos^2(x) = 1\\), it can be simplified to \\( x - y = -1 \\).",
    next: "q3"
  },

  q3: {
    type: "dialogue",
    content: "Time for a quick recap. How would you solve the following:<br>" +
    "\\(x + y = 2 \\\\ x - y = 0\\)",
    options: {
      0: "Substitution method (eg. Use the substitution \\(y = 2 - x\\) in \\( \\text{Eq.2} \\), and so on)",
      1: "Elimination method (eg. Eliminate \\( y \\) using \\( \\text{Eq.1 + Eq.2} \\), and so on)",
      2: "Graphical method (Find the point(s) of intersection between the lines)"
    },
    respondToIdx: {
      0: "q3a",
      1: "q3a",
      2: "q3a"
    }
  },

  q3a: {
    type: "plain",
    content: "☝️🤓 Umm actually, all 3 methods work!<br>But for now, let’s approach it graphically:",
    next: "graph2d"
  },

  graph2d: {
    type: "embed",
    content: "https://www.desmos.com/calculator/jmmn4dlzhf",
    previewText: "Visualize the intersection on Desmos",
    previewImage: "images/desmos_thumbnail.jpg",
    preload: true,
    important: true,
    next: "q4"
  },

  q4: {
    type: "single-mcq",
    content: "For the previous question, how many points of intersection do you see?",
    options: {
      0: "One point",
      1: "No points",
      2: "Infinitely many points"
    },
    answersIdx: new Set([0]),
    systemMessage: "Note: enable equations 1, 2 on the Desmos page",
    next: "q4a"
  },

  q4a: {
    type: "plain",
    content: "There’s one point of intersection — that’s the solution to the system.<br>" +
    "We say this system is <b>consistent</b> because a solution exists!",
    next: "q5"
  },

  q5: {
    type: "single-mcq",
    content: "Now try these:<br>" +
    "\\(x + 2y = 5 \\\\ 2x + 4y = 10\\)<br>" +
    "How many points of intersection are there?",
    options: {
      0: "One point",
      1: "No points",
      2: "Infinitely many points"
    },
    answersIdx: new Set([2]),
    systemMessage: "Note: enable equations 3, 4 on the Desmos page",
    next: "q5a"
  },

  q5a: {
    type: "plain",
    content: "The equations represent the <b>same line</b>! Due to the overlap, every point in this line is a possible solution.<br>" +
    "This means infinitely many solutions exist, which is still consistent ✅",
    next: "q6"
  },

  q6: {
    type: "single-mcq",
    content: "What about:<br>" +
    "\\(x + 2y = 5 \\\\ 2x + 4y = 8\\)<br>" +
    "How many points of intersection are there?",
    options: {
      0: "One point",
      1: "No points",
      2: "Infinitely many points"
    },
    answersIdx: new Set([1]),
    systemMessage: "Note: enable equations 3, 5 on the Desmos page",
    next: "q6a"
  },

  q6a: {
    type: "plain",
    content: "These lines are parallel — no point of intersection.<br>"+
    "This system is <b>inconsistent</b>, which means there is no solution.",
    next: "q7"
  },

  q7: {
    type: "single-mcq",
    content: "Now, it's time to spice things up~ What if we had 3 variables and equations:<br>" + 
    "\\(x + y + z = 6 \\\\ 2x - y + z = 1 \\\\ x + 2y - z = 4\\)<br>"+
    "What do the individual equations represent?",
    options: {
      0: "Lines",
      1: "Planes",
      2: "Cubes"
    },
    answersIdx: new Set([1]),
    next: "q7a"
  },

  q7a: {
    type: "plain",
    content: "In 3D, each equation represents a <b>plane</b>!<br>" + 
    "The solution will be the point(s) of intersection across all 3 planes.",
    next: "graph3d"
  },

  graph3d: {
    type: "embed",
    content: "https://www.desmos.com/3d/mkajwxzm7n",
    previewText: "Visualize the intersection on Desmos (now in 3D)",
    previewImage: "images/desmos_thumbnail.jpg",
    preload: true,
    important: true,
    next: "q8"
  },

  q8: {
    type: "single-mcq",
    content: "For the system above, how many points of intersection do you see?",
    options: {
      0: "One point",
      1: "No points",
      2: "Infinitely many points"
    },
    answersIdx: new Set([0]),
    systemMessage: "Note: enable equations 1-3 on the Desmos page",
    next: "q8a"
  },

  q8a: {
    type: "single-mcq",
    content: "Is this system consistent?",
    options: {
      0: "Consistent",
      1: "Inconsistent"
    },
    answersIdx: new Set([0]),
    next: "q9"
  },

  q9: {
    type: "plain",
    content: "It’s <b>consistent</b> because <b>all three planes intersect!</b><br>" +
    "(to be precise, they intersect at a single point)",
    next: "q10"
  },

  q10: {
    type: "single-mcq",
    content: "How about:<br>" + 
    "\\(x + y + z = 1 \\\\ x - y + z = -1 \\\\ 2x + 2z = -3\\)<br>" +
    "How many points of intersection do you see?",
    options: {
      0: "One point",
      1: "No points",
      2: "Infinitely many points"
    },
    answersIdx: new Set([1]),
    systemMessage: "Note: enable equations 4-6 on the Desmos page",
    next: "q10a"
  },

  q10a: {
    type: "single-mcq",
    content: "Is this system consistent?",
    options: {
      0: "Consistent",
      1: "Inconsistent"
    },
    answersIdx: new Set([1]),
    next: "q10b"
  },

  q10b: {
    type: "plain",
    content: "In this case, there isn't a single point that touches all three planes.<br>" + 
    "Which means, this system is <b>inconsistent</b>!",
    next: "q11"
  },

  q11: {
    type: "plain",
    content: "Sometimes in 3D, the planes may intersect along a line. (or even an entire plane!)<br>" + 
    "The following system is an example:<br>" + 
    "\\(x + y + z = 1 \\\\ x - y + z = -1 \\\\ 2x + 2z = 0\\)<br>",
    systemMessage: "Note: enable equations 4, 5, 7 on the Desmos page",
    next: "q12"
  },

  q12: {
    type: "single-mcq",
    content: "To find a solution, we can pick any point in the line of intersection.<br>" +
    "But, what if we want to find the solution that captures all possible solutions — the <b>general solution</b>?<br>" + 
    "First, we will have to use something called <b>parameters</b>!<br>" + 
    "Parameters are arbitrary values, and the number of parameters we use correspond to the degrees of freedom of all possible solutions.<br>" +
    "Take a quick guess, how many parameters should we use?",
    options: {
      0: "0",
      1: "1",
      2: "2",
      3: "3"
    },
    answersIdx: new Set([1]),
    next: "q12a"
  },

  q12a: {
    type: "plain",
    content: "As the solution lies across a line, it has a single degree of freedom.<br>" +
    "So, we only need 1 parameter!",
    next: "q12b"
  },

  q12b: {
    type: "dialogue",
    content: "Solving for the above, we get \\(x = -s, y = 1, z = s\\).<br>" +
    "Try adjusting \\(s\\) — the dot always lies on the intersection line.",
    systemMessage: "Note: additionally enable equation 8 on the Desmos page",
    options: {
      0: "Wait, how did we get here?"
    },
    respondToIdx: {0: "q12c"} 
  },

  q12c: {
    type: "plain",
    content: "Umm, forgive me for not going through the process earlier!",
    next: "q12d"
  },

  q12d: {
    type: "dialogue",
    content: "First, let's choose a variable to 'free up', or parameterize:<br>" +
    "\\(x + y + z = 1 \\\\ x - y + z = -1 \\\\ 2x + 2z = 0\\)",
    options: {
      0: "Choose \\(x\\)",
      1: "Choose \\(y\\)",
      2: "Choose \\(z\\)"
    },
    respondToIdx: {
      0: "q12dx",
      1: "q12dy",
      2: "q12dz"
    }
  },

  q12dx: {
    type: "plain",
    content: "First, we use the substitution \\(x = s\\).<br>" +
    "Next, we get \\(2x + 2z = 2s + 2z = 0 \\implies z = -s\\).<br>" + 
    "Finally, we get \\(x + y + z = s + y - s = 1 \\implies y = 1\\).<br>" +
    "The solution is \\(x = s, y = 1, z = -s\\).",
    next: "q12e"
  },

  q12dz: {
    type: "plain",
    content: "First, we use the substitution \\(z = s\\).<br>" +
    "Next, we get \\(2x + 2z = 2x + 2s = 0 \\implies x = -s\\).<br>" + 
    "Finally, we get \\(x + y + z = -s + y + s = 1 \\implies y = 1\\).<br>" +
    "The solution is \\(x = -s, y = 1, z = s\\).",
    next: "q12e"
  },

  q12dy: {
    type: "plain",
    content: "First, we use the substitution \\(y = s\\).<br>" +
    "Next, we get \\(x + y + z = x + s + z = 1\\).<br>" + 
    "Then, we get \\(x - y + z = x - s + z = -1\\).<br>" +
    "Wait, something's not right! It seems \\( s = 1 \\), but we know that it can't be a fixed value!",
    next: "q12dy1"
  },

  q12dy1: {
    type: "image",
    content: "images/cipher_pitiful.png",
    sticker: true,
    next: "q12dy2"
  },

  q12dy2: {
    type: "plain",
    content: "Sorry about that! Let's try again with a different variable!",
    systemMessage: "You will learn more about this condition in Chapter 3",
    next: "q12d"
  },

  q12e: {
    type: "dialogue",
    content: "Are you satisfied with my explanation?",
    options: {
      0: "I wanna try again!",
      1: "Yes, let's proceed"
    },
    respondToIdx: {
      0: "q12d",
      1: "q13"
    }
  },

  q13: {
    type: "plain",
    content: "Whether it's 2D, 3D, or 99D — linear systems are just collections of linear equations.<br>" +
    "The goal is always the same: to find all the values that satisfy <b>every equation at once</b>.",
    next: "end"
  },

  end: {
    type: "end",
    content: "That’s a wrap! 🎓<br>Feel free to revisit any starred definitions anytime."
  }
};
