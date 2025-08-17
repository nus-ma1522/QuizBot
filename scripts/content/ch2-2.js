const dialogueSystem = {
    "Scalar_default_1": {
        "type": "plain",
        "content": "Let's start with some simple operations we can apply on matrices.",
        "next": "Scalar_default_2"
    },
    "Scalar_default_2": {
        "type": "plain",
        "content": "Firstly, given two matrices of the same size, we can add them together. This is taking each entry and adding them together.",
        "next": "Scalar_default_3"
    },
    "Scalar_default_3": {
        "type": "tex",
        "important": true,
        "content": "$$\\textbf{\\Large Matrix Addition} \\\\ $$<br> $$\\begin{pmatrix}a_{11}&a_{12}&\\cdots&a_{1n}\\\\a_{21}&a_{22}&\\cdots&a_{2n}\\\\\\vdots&\\vdots&\\ddots&\\vdots\\\\a_{m1}&a_{m2}&\\cdots&a_{mn}\\end{pmatrix}+\\begin{pmatrix}b_{11}&b_{12}&\\cdots&b_{1n}\\\\b_{21}&b_{22}&\\cdots&b_{2n}\\\\\\vdots&\\vdots&\\ddots&\\vdots\\\\b_{m1}&b_{m2}&\\cdots&b_{mn}\\end{pmatrix}=\\begin{pmatrix}a_{11}+b_{11}&a_{12}+b_{12}&\\cdots&a_{1n}+b_{1n}\\\\a_{21}+b_{21}&a_{22}+b_{22}&\\cdots&a_{2n}+b_{2n}\\\\\\vdots&\\vdots&\\ddots&\\vdots\\\\a_{m1}+b_{m1}&a_{m2}+b_{m2}&\\cdots&a_{mn}+b_{mn}\\end{pmatrix}$$",
        "next": "Scalar_default_4"
    },
    "Scalar_default_4": {
        "type": "plain",
        "content": "Next, to add something $c$ times of something is the same as multiplying it by $c$. This is how we define scalar multiplication of a matrix as well:",
        "next": "Scalar_default_5"
    },
    "Scalar_default_5": {
        "type": "tex",
        "important": true,
        "content": "$$\\textbf{\\Large Scalar Multiplication} \\\\ $$<br> $$c\\begin{pmatrix}a_{11}&a_{12}&\\cdots&a_{1n}\\\\a_{21}&a_{22}&\\cdots&a_{2n}\\\\\\vdots&\\vdots&\\ddots&\\vdots\\\\a_{m1}&a_{m2}&\\cdots&a_{mn}\\end{pmatrix}=\\begin{pmatrix}ca_{11}&ca_{12}&\\cdots&ca_{1n}\\\\ca_{21}&ca_{22}&\\cdots&ca_{2n}\\\\\\vdots&\\vdots&\\ddots&\\vdots\\\\ca_{m1}&ca_{m2}&\\cdots&ca_{mn}\\end{pmatrix}$$",
        "next": "MatVec_default_1"
    },
    "MatVec_default_1": {
        "type": "mcq",
        "options": {
            "0": "$x = 10$, $y = 1$"
        },
        "answersIdx": [
            0
        ],
        "content": "Now let's do some real math with matrices! But first, let's quickly solve this system of linear equation first$$\\begin{array}{}2x &+&     y &=& 21 \\\\3x &+&    4y &=& 34 \\\\\\end{array}$$",
        "next": "MatVec_default_2"
    },
    "MatVec_default_2": {
        "type": "mcq",
        "options": {
            "0": "$\\left(\\begin{array}{c} 2x+y \\\\ 3x+4y \\\\\\end{array}\\right)$",
            "1": "Can we even do this?"
        },
        "answersIdx": [
            0
        ],
        "content": "Using the above rules of matrix algebra, what do you think the following expression evaluates to?<br> $$x\\left(\\begin{array}{c} 2 \\\\ 3 \\\\\\end{array}\\right) + y\\left(\\begin{array}{c} 1 \\\\ 4 \\\\\\end{array}\\right) = \\textbf{??}$$",
        "next": "MatVec_default_3"
    },
    "MatVec_default_3": {
        "type": "plain",
        "content": "Using scalar multiplication,<br> $$x\\left(\\begin{array}{c} 2 \\\\ 3 \\\\\\end{array}\\right) + y\\left(\\begin{array}{c} 1 \\\\ 4 \\\\\\end{array}\\right) = \\left(\\begin{array}{c} 2x \\\\ 3x \\\\\\end{array}\\right) + \\left(\\begin{array}{c} y \\\\ 4y \\\\\\end{array}\\right)$$<br> And using matrix addition,<br> $$\\left(\\begin{array}{c} 2x \\\\ 3x \\\\\\end{array}\\right) + \\left(\\begin{array}{c} y \\\\ 4y \\\\\\end{array}\\right) = \\left(\\begin{array}{c} 2x+y \\\\ 3x+4y \\\\\\end{array}\\right)$$",
        "next": "MatVec_default_4"
    },
    "MatVec_default_4": {
        "type": "plain",
        "content": "Going back to the start, we can also express the system of linear equations as a vector equation:<br> $$x\\left(\\begin{array}{c} 2 \\\\ 3 \\\\\\end{array}\\right) + y\\left(\\begin{array}{c} 1 \\\\ 4 \\\\\\end{array}\\right) = \\left(\\begin{array}{c} 21 \\\\ 34 \\\\\\end{array}\\right)$$",
        "next": "MatVec_default_5"
    },
    "MatVec_default_5": {
        "type": "plain",
        "content": "Now, we'll introduce the final form of system of linear equations 😈",
        "next": "MatVec_default_6"
    },
    "MatVec_default_6": {
        "type": "plain",
        "content": "The same equation can be expressed as a <b> Matrix Equation </b><br> $$\\left(\\begin{array}{c c} 2 & 1 \\\\ 3 & 4\\\\\\end{array}\\right)\\left(\\begin{array}{c} x \\\\ y\\\\ \\end{array}\\right) = x\\left(\\begin{array}{c} 2 \\\\ 3 \\\\\\end{array}\\right) + y\\left(\\begin{array}{c} 1 \\\\ 4 \\\\\\end{array}\\right) = \\left(\\begin{array}{c} 21 \\\\ 34 \\\\\\end{array}\\right)$$",
        "next": "MatVec_default_7"
    },
    "MatVec_default_7": {
        "type": "plain",
        "content": "When we multiply a matrix of $n$ columns with a vector of $n$ rows, we get a new vector of $n$ rows. The following is the full formula:",
        "next": "MatVec_default_8"
    },
    "MatVec_default_8": {
        "type": "tex",
        "important": true,
        "content": "$$\\textbf{\\Large Matrix-Vector Multiplication} \\\\ $$<br> $$\\begin{pmatrix}a_{11}&a_{12}&\\cdots&a_{1p}\\\\a_{21}&a_{22}&\\cdots&a_{2p}\\\\\\vdots&\\vdots&\\ddots&\\vdots\\\\a_{m1}&a_{m2}&\\cdots&a_{mp}\\end{pmatrix}\\begin{pmatrix}x_{1}\\\\x_{2}\\\\ \\vdots\\\\x_{p}\\end{pmatrix}=\\begin{pmatrix}x_1a_{11} + x_1a_{12} + \\dots + x_1a_{1p}\\\\x_2a_{21} + x_2a_{22} + \\dots + x_2a_{2p}\\\\ \\vdots \\\\x_ma_{m1} + x_ma_{m2} + \\dots + x_ma_{mp} \\end{pmatrix}$$",
        "next": "MatVec_default_9"
    },
    "MatVec_default_9": {
        "type": "mcq",
        "options": {
            "0": "$\\left(\\begin{array}{c} 15 \\\\ 70\\\\ \\end{array}\\right)$",
            "1": "$\\left(\\begin{array}{c} 20 \\\\ 55\\\\ \\end{array}\\right)$"
        },
        "answersIdx": [
            1
        ],
        "content": "If it's abit confusing, let's try an example! What is the result of the following multipliation?<br> $$\\left(\\begin{array}{c c} 2 & 1 \\\\ 3 & 4\\\\\\end{array}\\right)\\left(\\begin{array}{c} 5 \\\\ 10\\\\ \\end{array}\\right) = \\textbf{??}$$",
        "next": "MatVec_default_10"
    },
    "MatVec_default_10": {
        "type": "plain",
        "content": "We can visualize $\\left(\\begin{array}{c c} 2 & 1 \\\\ 3 & 4\\\\ \\end{array}\\right)$ as two column vectors glued together.<br> When we multiply it by $\\left(\\begin{array}{c} 5 \\\\ 10\\\\\\end{array}\\right)$, we are saying that we want $5$ times $\\left(\\begin{array}{c} 2 \\\\ 3\\\\\\end{array}\\right)$ plus $10$ times $\\left(\\begin{array}{c} 1 \\\\ 4\\\\\\end{array}\\right)$<br> $$\\left(\\begin{array}{c c} 2 & 1 \\\\ 3 & 4\\\\\\end{array}\\right)\\left(\\begin{array}{c} 5 \\\\ 10\\\\\\end{array}\\right) = 5\\left(\\begin{array}{c} 2 \\\\ 3\\\\\\end{array}\\right) + 10\\left(\\begin{array}{c} 1 \\\\ 4\\\\\\end{array}\\right) = \\left(\\begin{array}{c} 20 \\\\ 55\\\\\\end{array}\\right)$$",
        "next": "MatMal_default_1"
    },
    "MatMal_default_1": {
        "type": "dialogue",
        "options": {
            "0": "A $2 \\times 2$ matrix",
            "1": "Two vectors glued together",
            "2": "A vector",
            "3": "I don't know..."
        },
        "respondToIdx": {
            "0": "afterMatrixMulGuess",
            "1": "afterMatrixMulGuess",
            "2": "afterMatrixMulGuess",
            "3": "afterMatrixMulGuess"
        },
        "content": "If can multiply a matrix and a vector, and a matrix is several vectors glued together, what happens if we multiply two matrices together? What kind of object do you expect from this mutliplication?<br> $$\\left(\\begin{array}{c c} 2 & 1 \\\\ 3 & 4\\\\\\end{array}\\right)\\left(\\begin{array}{c c} 5 & 10 \\\\ 10 & 1\\\\\\end{array}\\right) = \\textbf{??}$$"
    },
    "afterMatrixMulGuess": {
        "type": "plain",
        "content": "We can treat the matrix $\\left(\\begin{array}{c c} 5 & 10 \\\\ 10 & 1\\\\\\end{array}\\right)$ as two vectors glued together, and perform the multiplication seperately!<br> $$\\left(\\begin{array}{c c} 2 & 1 \\\\ 3 & 4\\\\\\end{array}\\right)\\left(\\begin{array}{c} 5 \\\\ 10\\\\\\end{array}\\right) = \\left(\\begin{array}{c}  20 \\\\ 55\\\\\\end{array}\\right) $$$$\\left(\\begin{array}{c c} 2 & 1 \\\\ 3 & 4\\\\\\end{array}\\right)\\left(\\begin{array}{c} 10 \\\\ 1\\\\\\end{array}\\right) = \\left(\\begin{array}{c}  21 \\\\ 34\\\\\\end{array}\\right)$$",
        "next": "MatMal_default_2"
    },
    "MatMal_default_2": {
        "type": "mcq",
        "options": {
            "0": "Glue them together!"
        },
        "answersIdx": [
            0
        ],
        "content": "Now, what should do with these two vectors?",
        "next": "MatMal_default_3"
    },
    "MatMal_default_3": {
        "type": "plain",
        "content": "That's right! The result of this is:<br> $$\\left(\\begin{array}{c c} 2 & 1 \\\\ 3 & 4\\\\\\end{array}\\right)\\left(\\begin{array}{c c} 5 & 10 \\\\ 10 & 1\\\\\\end{array}\\right) = \\left(\\begin{array}{c c} 20 & 21 \\\\ 55 & 34\\\\\\end{array}\\right)$$",
        "next": "MatMal_default_4"
    },
    "MatMal_default_4": {
        "type": "plain",
        "content": "Here is a shorthand of matrix multiplication. Given two matrices $A$ and $B$, we can think of multiplying $A$ and $B$ like this<br> <br> 1. Split $B$ into its column vectors $b_1, b_2, \\dots, b_m$<br> 2. Perform Matrix-Vector multiplication for each of the vectors $Ab_i$. Let the result of be $c_i$, i.e. $Ab_i = c_i$<br> 3. \"Glue\" The vectors $c_1, c_2, \\dots, c_m$ together to form the matrix $C$. $C$ is the result of multiplying $A$ and $B$. i.e. $AB = C$.",
        "next": "MatMal_default_5"
    },
    "MatMal_default_5": {
        "type": "mcq",
        "options": {
            "0": "2 rows",
            "1": "3 rows",
            "2": "2 columns",
            "3": "3 columns",
            "4": "It's not possible"
        },
        "answersIdx": [
            1,
            2
        ],
        "content": "Let's try more examples!<br> $$\\left(\\begin{array}{c c} 2 & 1 \\\\ 3 & 4 \\\\ 7 & 8\\end{array}\\right)\\left(\\begin{array}{c c} 5 & 10 \\\\ 10 & 1\\end{array}\\right) = \\textbf{??}$$<br> How many rows and columns should the resulting matrix have?",
        "next": "MatMal_default_6"
    },
    "MatMal_default_6": {
        "type": "plain",
        "content": "To do this, we take",
        "next": "MatMal_default_7"
    },
    "MatMal_default_7": {
        "type": "mcq",
        "options": {
            "0": "2 rows",
            "1": "3 rows",
            "2": "2 columns",
            "3": "3 columns",
            "4": "It's not possible"
        },
        "answersIdx": [
            4
        ],
        "content": "What about this?<br> $$\\left(\\begin{array}{c c} 2 & 1 \\\\ 3 & 4\\\\\\end{array}\\right)\\left(\\begin{array}{c c} 5 & 10 \\\\ 10 & 1\\\\ 7 & 8\\end{array}\\right) = \\textbf{??}$$<br> How many rows and columns should the resulting matrix have?",
        "next": "MatMal_default_8"
    },
    "MatMal_default_8": {
        "type": "plain",
        "content": "Let's try doing<br> $$\\left(\\begin{array}{c c} 2 & 1 \\\\ 3 & 4\\\\\\end{array}\\right)\\left(\\begin{array}{c} 5  \\\\ 10\\\\ 7\\end{array}\\right) = \\textbf{??}$$<br> We want $5$ times of $\\left(\\begin{array}{c} 2 \\\\ 3\\\\\\end{array}\\right)$, $10$ times of $\\left(\\begin{array}{c} 1 \\\\ 4\\\\\\end{array}\\right)$, and $7$ times of... what?<br> <br> This multiplication doesn't make sense because the dimensions of the matrices don't match",
        "next": "MatMal_default_9"
    },
    "MatMal_default_9": {
        "type": "mcq",
        "options": {
            "0": "The no. of columns in $A$ equals the no. of columns in $B$",
            "1": "The no. of rows in $A$ equals the no. of rows in $B$",
            "2": "The no. of columns in $A$ equals the no. of rows in $B$",
            "3": "The no. of rows in $A$ equals the no. of columns in $B$"
        },
        "answersIdx": [
            2
        ],
        "content": "Think back to the process, if we want to multiply matrices $A$ and $B$ together, what condition(s) must be satisfied?",
        "next": "MatMal_default_10"
    },
    "MatMal_default_10": {
        "type": "plain",
        "content": "Given matrix $A$ is $m$ by $p$ and matrix $B$ is $p$ by $mn$, $AB$ will give us a $m$ by $n$ matrix.",
        "next": "MatMal_default_11"
    },
    "MatMal_default_11": {
        "type": "tex",
        "important": true,
        "content": "$\\textbf{Matrix Multiplication}$<br> $$\\mathbf{AB}=(a_{ij})_{m\\times p}(b_{ij})_{p\\times n}=(\\sum_{k=1}^pa_{ik}b_{kj})_{m\\times n}$$<br> $$\\begin{pmatrix}a_{11}&a_{12}&\\cdots&a_{1p}\\\\a_{21}&a_{22}&\\cdots&a_{2p}\\\\\\vdots&\\vdots&\\ddots&\\vdots\\\\a_{m1}&a_{m2}&\\cdots&a_{mp}\\end{pmatrix}\\begin{pmatrix}b_{11}&b_{12}&\\cdots&b_{1n}\\\\b_{21}&b_{22}&\\cdots&b_{2n}\\\\\\vdots&\\vdots&\\ddots&\\vdots\\\\b_{p1}&b_{p2}&\\cdots&b_{pm}\\end{pmatrix}=\\begin{pmatrix}a_{11}b_{11}+a_{12}b_{21}+\\cdots+a_{1p}b_{p1}&a_{11}b_{12}+a_{12}b_{22}+\\cdots+a_{1p}b_{p2}&\\cdots&a_{11}b_{1n}+a_{12}b_{2n}+\\cdots+a_{1p}b_{pn}\\\\a_{21}b_{11}+a_{22}b_{21}+\\cdots+a_{2p}b_{p1}&a_{21}b_{12}+a_{22}b_{22}+\\cdots+a_{2p}b_{p2}&\\cdots&a_{21}b_{1n}+a_{22}b_{2n}+\\cdots+a_{2p}b_{pn}\\\\\\vdots&\\vdots&\\ddots&\\vdots\\\\a_{m1}b_{11}+a_{m2}b_{21}+\\cdots+a_{mp}b_{p1}&a_{m1}b_{12}+a_{m2}b_{22}+\\cdots+a_{mp}b_{p2}&\\cdots&a_{m1}b_{1n}+a_{m2}b_{2n}+\\cdots+a_{mp}b_{pn}\\end{pmatrix}$$",
        "next": "MatMal_default_12"
    },
    "MatMal_default_12": {
        "type": "plain",
        "content": "Above is the formal definition of matrix multiplication.<br> <br> The $(i, j)$-entry of the product $AB$ is the sum of the product of the entries in the $i$-th row of $A$ with the $j$-th column of $B$.<br> <br> We can verify that this gives us the same result as the \"split B into vectors, multiply them by A, and glue them together\" process that we've discussed above.",
        "next": "MatMal_default_13"
    },
    "MatMal_default_13": {
        "type": "dialogue",
        "options": {
            "0": "I'm ready!"
        },
        "respondToIdx": {
            "0": "StartOfMatrix"
        },
        "content": "That's quite abit of stuff, so let's pause here for a while. Let me know when you're ready to move on :)"
    },
    "StartOfMatrix": {
        "type": "plain",
        "content": "Anyways on the point that a matrix is just a bunch of vectors glued together.<br> <br> erm 🤓 ackchually ☝️ I lied 🤓 kinda<br> <br> It's one way to view it, and it helps simplify the abomination of a formula that is Matrix Multiplication.",
        "next": "ManyFormsOfMatrix_default_1"
    },
    "ManyFormsOfMatrix_default_1": {
        "type": "plain",
        "content": "However, it is certainly not the full picture of what a matrix is. A matrix represents so many different inter-related concepts, and you'll get to explore more such concepts as you go down the course",
        "next": "ManyFormsOfMatrix_default_2"
    },
    "ManyFormsOfMatrix_default_2": {
        "type": "plain",
        "content": "Anyways, here's more food for thought as to why matrices multiply in this manner. Suppose we have a a system of linear equations:<br> $$\\begin{array}{}2x_1 &+&     x_2 &=& y_1 \\\\3x_1 &+&    4x_2 &=& y_2 \\\\\\end{array}$$<br> Which we can write this as:<br> $$\\left(\\begin{array}{c c} 2 & 1 \\\\ 3 & 4\\\\\\end{array}\\right)\\left(\\begin{array}{c} x_1 \\\\ x_2\\\\\\end{array}\\right) = \\left(\\begin{array}{c}  y_1 \\\\ y_2\\\\\\end{array}\\right)$$",
        "next": "ManyFormsOfMatrix_default_3"
    },
    "ManyFormsOfMatrix_default_3": {
        "type": "plain",
        "content": "Now we have a second system of linear equations:<br> $$\\begin{array}{}5y_1 &+&     6y_2 &=& z_1 \\\\0y_1 &+&    7y_2 &=& z_2 \\\\\\end{array}$$<br> Which we can write this as:<br> $$\\left(\\begin{array}{c c} 5 & 6 \\\\ 0 & 7\\\\\\end{array}\\right)\\left(\\begin{array}{c} y_1 \\\\ y_2\\\\\\end{array}\\right) = \\left(\\begin{array}{c}  z_1 \\\\ z_2\\\\\\end{array}\\right) $$",
        "next": "ManyFormsOfMatrix_default_4"
    },
    "ManyFormsOfMatrix_default_4": {
        "type": "plain",
        "content": "Here's our goal, express $z$ in terms of $x$. I.e. find the values of $a$, $b$, $c$, $d$ of the following system of linear equation.<br> $$\\begin{array}{}ax_1 &+&     bx_2 &=& z_1 \\\\cx_1 &+&    dx_2 &=& z_2 \\\\\\end{array}$$<br> We could do a ton of substitution to handle this, but let's see how matrices help us here.",
        "next": "ManyFormsOfMatrix_default_5"
    },
    "ManyFormsOfMatrix_default_5": {
        "type": "mcq",
        "options": {
            "0": "Multiply the two matrices together!"
        },
        "answersIdx": [
            0
        ],
        "content": "If we substitute the first matrix equation into the second matrix equation, we get:<br> $$\\left(\\begin{array}{c c} 5 & 6 \\\\ 0 & 7\\\\\\end{array}\\right)\\left(\\begin{array}{c c} 2 & 1 \\\\ 3 & 4\\\\\\end{array}\\right)\\left(\\begin{array}{c} x_1 \\\\ x_2\\\\\\end{array}\\right) = \\left(\\begin{array}{c}  z_1 \\\\ z_2\\\\\\end{array}\\right) $$<br> What should we do next?",
        "next": "ManyFormsOfMatrix_default_6"
    },
    "ManyFormsOfMatrix_default_6": {
        "type": "plain",
        "content": "That's right! If we multiply the first two matrices, we can get a matrix of the form<br> <br> $$\\left(\\begin{array}{c c} a & c \\\\ b & d\\\\\\end{array}\\right)\\left(\\begin{array}{c} x_1 \\\\ x_2\\\\\\end{array}\\right) = \\left(\\begin{array}{c}  z_1 \\\\ z_2\\\\\\end{array}\\right) $$<br> Which is exactly what we are trying to get!",
        "next": "ManyFormsOfMatrix_default_7"
    },
    "ManyFormsOfMatrix_default_7": {
        "type": "dialogue",
        "options": {
            "0": "$\\left(\\begin{array}{c c} 28 & 29 \\\\ 21 & 28\\\\ \\end{array}\\right)$",
            "1": "lazy..."
        },
        "respondToIdx": {
            "0": "afterLazy",
            "1": "afterLazy"
        },
        "content": "I'll leave you to do the actual matrix multiplcation as an excercise. Don't open the options if you wanna try it yourself first"
    },
    "afterLazy": {
        "type": "plain",
        "content": "Indeed,$$\\left(\\begin{array}{c c} 5 & 6 \\\\ 0 & 7\\\\\\end{array}\\right)\\left(\\begin{array}{c c} 2 & 1 \\\\ 3 & 4\\\\\\end{array}\\right) = \\left(\\begin{array}{c c} 28 & 29 \\\\ 21 & 28\\\\ \\end{array}\\right)$$",
        "next": "ManyFormsOfMatrix_default_8"
    },
    "ManyFormsOfMatrix_default_8": {
        "type": "plain",
        "content": "If you'd like to see this idea fleshed out more, do check out this <a href=\"https://youtu.be/cc1ivDlZ71U?si=KW3jrTv0VIVQ8hbI\"><br> Why do we multiply matrices the way we do??</a>, a great video by Michael Penn.<br> <br> And that's a wrap!"
    }
};

const compulsoryMessages = [
    "Scalar_default_3",
    "Scalar_default_5",
    "MatVec_default_8",
    "MatMal_default_11"
];

const checkpoints = [
    {
        "label": "Start From Beginning",
        "showCompulsoryMessages": 0,
        "id": "Scalar_default_1"
    },
    {
        "label": "Matrix-Vector Multiplication",
        "showCompulsoryMessages": 2,
        "id": "MatVec_default_1"
    },
    {
        "label": "Matrix Multiplication",
        "showCompulsoryMessages": 3,
        "id": "MatMal_default_1"
    },
    {
        "label": "72 Matrix Transformations",
        "showCompulsoryMessages": 4,
        "id": "StartOfMatrix"
    }
];