const dialogueSystem = {
    "Checkpoint_default_1": {
        "type": "plain",
        "content": "Welcome back! Before we talk about eigenvalues and eigenvectors, let’s quickly revisit some important concepts that will help us understand them better. Namely, matrix multiplication and null spaces.",
        "next": "Checkpoint_default_2"
    },
    "Checkpoint_default_2": {
        "type": "mcq",
        "options": {
            "0": "A linear combination of the rows of $\\mathbf{A}$ that gives $\\mathbf{b}$",
            "1": "A linear combination of the columns of $\\mathbf{A}$ that gives $\\mathbf{b}$",
            "2": "Finding the determinant of A"
        },
        "answersIdx": [
            1
        ],
        "content": "What does the equation $\\mathbf{A}\\mathbf{x} = \\mathbf{b}$ represent?",
        "next": "Checkpoint_default_3"
    },
    "Checkpoint_default_3": {
        "type": "plain",
        "content": "When we multiply a matrix $\\mathbf{A}$ by a vector $\\mathbf{x}$, what we’re really doing is taking a <b>linear combination of the columns</b> of $\\mathbf{A}$ using the entries of $\\mathbf{x}$ as weights.<br>$$\\mathbf{A}\\mathbf{x} = x_1\\mathbf{a}_1 + x_2\\mathbf{a}_2 + \\dots + x_n\\mathbf{a}_n$$So, $\\mathbf{A}\\mathbf{x} = \\mathbf{b}$ means that we are expressing the vector $\\mathbf{b}$ as a linear combination of the columns of $\\mathbf{A}$!",
        "next": "Checkpoint_default_4"
    },
    "Checkpoint_default_4": {
        "type": "mcq",
        "options": {
            "0": "The column space of $\\mathbf{A}$",
            "1": "The row space of $\\mathbf{A}$",
            "2": "The null space of $\\mathbf{A^T}$",
            "3": "The null space of $\\mathbf{A}$"
        },
        "answersIdx": [
            3
        ],
        "content": "Now what about this?<br>$\\mathbf{A}\\mathbf{x} = \\mathbf{0}$ represents which subspace?",
        "next": "Checkpoint_default_5"
    },
    "Checkpoint_default_5": {
        "type": "plain",
        "content": "The null space of $\\mathbf{A}$! The null space of $\\mathbf{A}$ consists of all vectors $\\mathbf{x}$ that, when we take a linear combination of the columns of $\\mathbf{A}$ using $\\mathbf{x}$ as weights, give the $0$ vector.",
        "next": "Checkpoint_default_6"
    },
    "Checkpoint_default_6": {
        "type": "mcq",
        "options": {
            "0": "The columns of $\\mathbf{A}$ are linearly dependent",
            "1": "The columns of $\\mathbf{A}$ are linearly independent",
            "2": "$\\mathbf{A}$ is singular",
            "3": "$\\mathbf{A}$ is invertible"
        },
        "answersIdx": [
            0,
            2
        ],
        "content": "And if $\\mathbf{A}\\mathbf{x} = \\mathbf{0}$ has a non-trivial solution, and that $\\mathbf{A}$ is a square matrix, what does it mean about $\\mathbf{A}$?",
        "next": "Checkpoint_default_7"
    },
    "Checkpoint_default_7": {
        "type": "plain",
        "content": "Since $\\mathbf{Ax}$ simply represents a linear combination of the columns of A, if there is a non-trivial solution, we know that the columns of $\\mathbf{A}$ are linearly dependent!<br><br>This also means $\\mathbf{A}$ is singular!",
        "next": "Checkpoint_default_8"
    },
    "Checkpoint_default_8": {
        "type": "plain",
        "content": "Awesome! With that recap out of the way, let’s dive into <b>eigenvectors and eigenvalues</b>.",
        "next": "Checkpoint_default_9"
    },
    "Checkpoint_default_9": {
        "type": "embed",
        "previewImage": "images/desmos_thumbnail.jpg",
        "content": "https://www.geogebra.org/calculator/xvjfzk55?embed",
        "next": "Checkpoint_default_10"
    },
    "Checkpoint_default_10": {
        "type": "plain",
        "content": "Open the geogebra applet and slide the $\\mathbf{a}$ and $\\mathbf{b}$ values of vector $\\mathbf{u}$ around.<br><br>Notice that for each vector $\\mathbf{u}$, we premultiply it by $\\mathbf{A}$ and we get a corresponding output $\\mathbf{A}\\mathbf{u}$. We call this a <b>linear transformation</b> of vector $\\mathbf{u}$ to the resulting vector $\\mathbf{Au}$.",
        "next": "Checkpoint_default_11"
    },
    "Checkpoint_default_11": {
        "type": "mcq",
        "options": {
            "0": "Length of $\\mathbf{Au} =$ $3 \\space \\times\\space$Length of $\\mathbf{u}$",
            "1": "$\\mathbf{u}$ and $\\mathbf{Au}$ are parallel",
        },
        "answersIdx": [0, 1],
        "content": "Now, set $\\mathbf{a} = 1$ and $\\mathbf{b} = 0$. What do you realise about the vectors $\\mathbf{u}$ and $\\mathbf{Au}$?",
        "next": "Checkpoint_default_12"
    },
    "Checkpoint_default_12": {
        "type": "plain",
        "content": "Both are correct! Premultiplying by $\\mathbf{A}$ doesn’t change the <b>direction</b> of $\\mathbf{u}$!<br>We call this vector $\\mathbf{u}$, an <b>eigenvector</b>!<br>Not only that, since the length of the resulting vector is 3 times that of the original vector, we call this special number 3, an <b>eigenvalue</b>!",
        "next": "Checkpoint_default_13"
    },
    "Checkpoint_default_13": {
        "type": "plain",
        "content": "Since the two vectors are parallel and that one vector is a scalar multiple of the other, I can simply write it as $$\\mathbf{A}\\mathbf{u} = \\lambda \\mathbf{u}$$where $\\lambda$ is my scalar multiple.",
        "next": "Checkpoint_default_14"
    },
    "Checkpoint_default_14": {
        "type": "mcq",
        "options": {
            "0": "$\\mathbf{u} = \\mathbf{0}$",
            "1": "Not enough information to conclude."
        },
        "answersIdx": [
            0
        ],
        "content": "Let’s try to find a simple example of $\\mathbf{u}$ that always satisfies $\\mathbf{A}\\mathbf{u} = \\lambda \\mathbf{u}$.<br><br>Which vector always satisfy this equation?",
        "next": "Checkpoint_default_15"
    },
    "Checkpoint_default_15": {
        "type": "plain",
        "content": "$\\mathbf{u} = \\mathbf{0}$ always satisfy the equation! But that's not interesting...<br>That’s because it works for <b>any</b> $\\lambda$, giving us infinitely many eigenvalues with no meaningful information.<br><br>So we <b>exclude</b> the zero vector and only consider <b>non-zero</b> eigenvectors.",
        "next": "Checkpoint_default_16"
    },
    "Checkpoint_default_16": {
        "type": "plain",
        "content": "Now, we are ready to introduce the formal definition of <b>eigenvalues</b> and <b>eigenvectors</b>.",
        "next": "Checkpoint_default_17"
    },
    "Checkpoint_default_17": {
        "type": "tex",
        "important": true,
        "content": "Let A be a <b>square</b> matrix of order $n$.<br>A real number $\\lambda$ is an <b>eigenvalue</b> of $\\mathbf{A}$ if there is a <b>nonzero</b> vector $\\mathbf{v}$ in $\\mathbb{R}^n$, such that<br>$$\\mathbf{A}\\mathbf{v} = \\lambda \\mathbf{v}.$$ In this case, $\\mathbf{v}$ is called an <b>eigenvector</b> associated with $\\lambda$.",
        "next": "Checkpoint_default_18"
    },
    "Checkpoint_default_18": {
        "type": "plain",
        "content": "Now, how do we actually <b>find</b> $\\lambda$ and $\\mathbf{v}$?<br>Let’s start with $\\mathbf{A}\\mathbf{v} = \\lambda \\mathbf{v}$ and manipulate it.",
        "next": "Checkpoint_default_19"
    },
    "Checkpoint_default_19": {
        "type": "mcq",
        "options": {
            "0": "Multiply both sides by $\\lambda$",
            "1": "Take the transpose",
            "2": "Subtract $\\mathbf{A}\\mathbf{v}$ from both sides",
            "3": "Subtract $\\lambda\\mathbf{v}$ from both sides"
        },
        "answersIdx": [
            2,
            3
        ],
        "content": "If $\\mathbf{A}\\mathbf{v} = \\lambda \\mathbf{v}$, what should we do to bring everything to one side?",
        "next": "Checkpoint_default_20"
    },
    "Checkpoint_default_20": {
        "type": "plain",
        "content": "Both options of subtracting $\\mathbf{A}\\mathbf{v}$ and $\\lambda\\mathbf{v}$ are correct and lead you to the same outcome! In this interactive, let's choose to subtract $\\mathbf{A}\\mathbf{v}$ from both sides.",
        "next": "Checkpoint_default_21"
    },
    "Checkpoint_default_21": {
        "type": "mcq",
        "options": {
            "0": "$(\\lambda - \\mathbf{A})\\mathbf{v} = \\mathbf{0}$",
            "1": "$(\\lambda \\mathbf{I} - \\mathbf{A})\\mathbf{v} = \\mathbf{0}$",
            "2": "$(\\lambda + \\mathbf{A})\\mathbf{v} = \\mathbf{0}$",
            "3": "$(\\mathbf{A} - \\lambda \\mathbf{I})\\mathbf{v} = \\mathbf{0}$"
        },
        "answersIdx": [
            1
        ],
        "content": "Subtracting gives:$$\\lambda \\mathbf{v} - \\mathbf{A}\\mathbf{v} = \\mathbf{0}.$$Now we can factor out $\\mathbf{v}$. What will be my result?",
        "next": "Checkpoint_default_22"
    },
    "Checkpoint_default_22": {
        "type": "plain",
        "content": "Remember that $\\lambda$ is a scalar and hence $(\\lambda - \\mathbf{A})$ does not make any sense. We can however rewrite $\\lambda \\mathbf{v}$ as $\\lambda \\mathbf{I}\\mathbf{v}$ and factorising $\\mathbf{v}$ yields us:$$(\\lambda \\mathbf{I} - \\mathbf{A})\\mathbf{v} = \\mathbf{0}.$$Immediately, this equation should start ringing some bells!! 🔔🔔",
        "next": "Checkpoint_default_23"
    },
    "Checkpoint_default_23": {
        "type": "mcq",
        "options": {
            "0": "The null space of $(\\lambda \\mathbf{I} - \\mathbf{A})$",
            "1": "The column space of $(\\lambda \\mathbf{I} - \\mathbf{A})$",
            "2": "The row space of $(\\lambda \\mathbf{I} - \\mathbf{A})$",
            "3": "The column space of $\\mathbf{A}^T$"
        },
        "answersIdx": [
            0
        ],
        "content": "What are we really solving when we write $(\\lambda \\mathbf{I} - \\mathbf{A})\\mathbf{v} = \\mathbf{0}$?",
        "next": "Checkpoint_default_24"
    },
    "Checkpoint_default_24": {
        "type": "plain",
        "content": "We are solving for the <b>null space</b> of $(\\lambda \\mathbf{I} - \\mathbf{A})$!<br>I am sure that at this point, we are all experts at finding the null space and can't wait to RREF that thing and start solving for my unknowns! But hold up, let's find a better way.",
        "next": "Checkpoint_default_25"
    },
    "Checkpoint_default_25": {
        "type": "mcq",
        "options": {
            "0": "It is a singular matrix",
            "1": "It is an invertible matrix",
            "2": "It is a diagonal matrix",
            "3": "It is an orthogonal matrix"
        },
        "answersIdx": [
            0
        ],
        "content": "If $(\\lambda \\mathbf{I} - \\mathbf{A})\\mathbf{v} = \\mathbf{0}$ has a nonzero solution $\\mathbf{v}$, what does that imply about $(\\lambda \\mathbf{I} - \\mathbf{A})$?",
        "next": "Checkpoint_default_26"
    },
    "Checkpoint_default_26": {
        "type": "plain",
        "content": "It must be a singular matrix!<br><i>(If unsure, please revisit the topic on null space and invertibility)</i>",
        "next": "Checkpoint_default_27"
    },
    "Checkpoint_default_27": {
        "type": "mcq",
        "options": {
            "0": "$\\det(\\lambda \\mathbf{I} - \\mathbf{A}) \\neq 0$",
            "1": "$\\det(\\mathbf{A}) = 0$",
            "2": "$\\det(\\lambda \\mathbf{I} - \\mathbf{A}) = 0$",
            "3": "$\\det(\\lambda \\mathbf{I}) = 1$"
        },
        "answersIdx": [
            2
        ],
        "content": "Therefore, which of the following must hold true?",
        "next": "Checkpoint_default_28"
    },
    "Checkpoint_default_28": {
        "type": "plain",
        "content": "Perfect! That’s our key condition for finding eigenvalues.<br>So to find the eigenvalues of $\\mathbf{A}$, we solve:$$\\det(\\lambda \\mathbf{I} - \\mathbf{A}) = 0.$$",
        "next": "Checkpoint_default_29"
    },
    "Checkpoint_default_29": {
        "type": "plain",
        "content": "Let’s try a simple example!<br>Suppose:$$\\mathbf{A} =\\begin{pmatrix}2 & 1 \\\\1 & 2\\end{pmatrix}$$",
        "next": "Checkpoint_default_30"
    },
    "Checkpoint_default_30": {
        "type": "mcq",
        "options": {
            "0": "$\\begin{pmatrix} \\lambda + 2 & 1 \\\\ 1 & \\lambda + 2 \\end{pmatrix}$",
            "1": "$\\begin{pmatrix} \\lambda - 2 & 1 \\\\ 1 & \\lambda - 2 \\end{pmatrix}$",
            "2": "$\\begin{pmatrix} -2 & -1 \\\\ -1 & -2 \\end{pmatrix}$",
            "3": "$\\begin{pmatrix} \\lambda - 2 & -1 \\\\ -1 & \\lambda - 2 \\end{pmatrix}$"
        },
        "answersIdx": [
            3
        ],
        "content": "What is $\\lambda \\mathbf{I} - \\mathbf{A}$?",
        "next": "Checkpoint_default_31"
    },
    "Checkpoint_default_31": {
        "type": "mcq",
        "options": {
            "0": "$(\\lambda - 2)^2 + 1$",
            "1": "$(\\lambda - 2)^2$",
            "2": "$(\\lambda - 2)^2 - 1$",
            "3": "$(\\lambda + 2)^2 - 1$"
        },
        "answersIdx": [
            2
        ],
        "content": "Now, find the determinant of $\\lambda \\mathbf{I} - \\mathbf{A}$.",
        "next": "Checkpoint_default_32"
    },
    "Checkpoint_default_32": {
        "type": "plain",
        "content": "Remember that determinant of a 2 by 2 matrix is $ad - bc$. <br>Subbing in the values, we get $det(\\lambda \\mathbf{I} - \\mathbf{A}) = (\\lambda - 2)^2 - 1$.",
        "next": "Checkpoint_default_33"
    },
    "Checkpoint_default_33": {
        "type": "plain",
        "content": "Recall that to have a non-zero eigenvector $\\mathbf{v}$, matrix $\\lambda \\mathbf{I} - \\mathbf{A}$ is singular and therefore, determinant is 0.",
        "next": "Checkpoint_default_34"
    },
    "Checkpoint_default_34": {
        "type": "mcq",
        "options": {
            "0": "$\\lambda$ = 2",
            "1": "$\\lambda$ = 1",
            "2": "$\\lambda$ = 3",
            "3": "What the helly?"
        },
        "answersIdx": [
            1,
            2
        ],
        "content": "Setting the determinant to zero:$$(\\lambda - 2)^2 - 1 = 0$$What are my possible eigenvalues, $\\lambda$?",
        "next": "Checkpoint_default_35"
    },
    "Checkpoint_default_35": {
        "type": "plain",
        "content": "$\\lambda = 1$ or $\\lambda = 3$. These are our <b>eigenvalues</b>!<br>If you can't solve this quadratic equation, GGs for you bro.<br><br>Just kidding: Expanding then factorising gives you $(\\lambda - 1)(\\lambda - 3) = 0$.",
        "next": "Checkpoint_default_36"
    },
    "Checkpoint_default_36": {
        "type": "plain",
        "content": "Let me interject really quickly to throw in some definitions.",
        "next": "Checkpoint_default_37"
    },
    "Checkpoint_default_37": {
        "type": "tex",
        "important": true,
        "content": "Let $\\mathbf{A}$ be a square matrix of order $n$, the <b>characteristic polynomial</b> of $\\mathbf{A}$, denoted as $\\operatorname{char}(\\mathbf{A})$, is the degree $n$ polynomial<br>$$\\operatorname{det}(x\\mathbf{I} - \\mathbf{A}).$$",
        "next": "Checkpoint_default_38"
    },
    "Checkpoint_default_38": {
        "type": "mcq",
        "options": {
            "0": "$(x - 1)(x - 3)$",
            "1": "$x^2 - 4x + 3$",
            "2": "$(x - 2)^2 - 1$"
        },
        "answersIdx": [0, 1, 2],
        "content": "What is the characteristic polynomial of $\\mathbf{A}$?<br>For reference:<br>$$\\mathbf{A} =\\begin{pmatrix}2 & 1 \\\\1 & 2\\end{pmatrix}$$",
        "next": "Checkpoint_default_39"
    },
    "Checkpoint_default_39": {
        "type": "plain",
        "content": "All are correct! That's what we found earlier.",
        "next": "Checkpoint_default_40"
    },
    "Checkpoint_default_40": {
        "type": "mcq",
        "options": {
            "0": "$\\operatorname{char}(\\mathbf{A}) = 0$",
            "1": "$\\operatorname{char}(\\mathbf{A}) \\neq 0$"
        },
        "answersIdx": [
            0
        ],
        "content": "What does it mean when we plug in a specific eigenvalue $\\lambda$ for $x$ in the characteristic polynomial $\\operatorname{char}(\\mathbf{A}) = \\det(x\\mathbf{I} - \\mathbf{A})$?",
        "next": "Checkpoint_default_41"
    },
    "Checkpoint_default_41": {
        "type": "plain",
        "content": "It must be that $\\operatorname{char}(\\mathbf{A}) = \\operatorname{det}(\\lambda\\mathbf{I} - \\mathbf{A}) = 0$. This result builds on the results we found earlier, where we concluded that $(\\lambda\\mathbf{I} - \\mathbf{A})$ must be singular for a <b>non-zero</b> $\\mathbf{v}$ to exist.",
        "next": "Checkpoint_default_42"
    },
    "Checkpoint_default_42": {
        "type": "plain",
        "content": "One more definition!",
        "next": "Checkpoint_default_43"
    },
    "Checkpoint_default_43": {
        "type": "tex",
        "important": true,
        "content": "Let $\\lambda$ be an eigenvalue of $\\mathbf{A}$. The <b>algebraic multiplicity</b> of $\\lambda$ is the largest integer $r_\\lambda$ such that<br>$$\\operatorname{det}(x\\mathbf{I} - \\mathbf{A}) = (x - \\lambda)^{r_\\lambda}p(x),$$for some polynomial $p(x)$.",
        "next": "Checkpoint_default_43a"
    },
    "Checkpoint_default_43a": {
    "type": "plain",
    "content": "Note: In the characteristic polynomial, we use $x$ as a placeholder. To evaluate for a specific eigenvalue $\\lambda$, we substitute $x = \\lambda$.",
    "next": "Checkpoint_default_44"
    },
    "Checkpoint_default_44": {
        "type": "mcq",
        "options": {
            "0": "0",
            "1": "1",
            "2": "Idk..."
        },
        "answersIdx": [
            1
        ],
        "content": "If you don't understand the definition, just look at the power of what the linear factor is raised to.<br>What is the algebraic multiplicity of $\\lambda = 1$?<br>For reference:<br>$$\\operatorname{char}(\\mathbf{A}) = (x - 1)(x - 3)$$",
        "next": "Checkpoint_default_45"
    },
    "Checkpoint_default_45": {
        "type": "plain",
        "content": "$\\operatorname{det}(x\\mathbf{I} - \\mathbf{A}) = (x - 1)(x - 3)$.<br>$(x-1)$ is raised to the power of 1 so algebraic multiplicity = 1.",
        "next": "Checkpoint_default_46"
    },
    "Checkpoint_default_46": {
        "type": "mcq",
        "options": {
            "0": "0",
            "1": "1",
            "2": "2"
        },
        "answersIdx": [
            1
        ],
        "content": "How about algebraic multiplicity of $\\lambda = 3$?",
        "next": "Checkpoint_default_47"
    },
    "Checkpoint_default_47": {
        "type": "dialogue",
        "options": {
            "0": "Time to find our eigenvectors!"
        },
        "respondToIdx": {0 : "Checkpoint_default_48"},
        "content": "Time to move on finally...<br>Now we have the eigenvalues! What's next?"
    },
    "Checkpoint_default_48": {
        "type": "plain",
        "content": "Hooray! For each eigenvalue, we find its corresponding eigenvector by solving:$$(\\lambda \\mathbf{I} - \\mathbf{A})\\mathbf{v} = \\mathbf{0}.$$",
        "next": "Checkpoint_default_49"
    },
    "Checkpoint_default_49": {
        "type": "mcq",
        "options": {
            "0": "$\\begin{pmatrix} -1 & 1 \\\\ 1 & -1 \\end{pmatrix}$",
            "1": "$\\begin{pmatrix} -1 & -1 \\\\ -1 & -1 \\end{pmatrix}$",
            "2": "$\\begin{pmatrix} 1 & 1 \\\\ 1 & 1 \\end{pmatrix}$"
        },
        "answersIdx": [
            1
        ],
        "content": "Ok let's first find the possible eigenvectors when $\\lambda = 1$. Sub into the equation and we essentially get $(\\mathbf{I} - \\mathbf{A})\\mathbf{v} = \\mathbf{0}$.<br>For reference:$$\\mathbf{A} =\\begin{pmatrix}2 & 1 \\\\1 & 2\\end{pmatrix}$$ What's $(\\mathbf{I} - \\mathbf{A})$?",
        "next": "Checkpoint_default_50"
    },
    "Checkpoint_default_50": {
        "type": "mcq",
        "options": {
            "0": "$\\left(\\begin{array}{cc|c} 1 & 0 & 0  \\\\ 0 & 1 & 0\\end{array}\\right)$",
            "1": "$\\left(\\begin{array}{cc|c} 1 & 1 & 0  \\\\ 0 & 0 & 0 \\end{array}\\right)$"
        },
        "answersIdx": [
            1
        ],
        "content": "I know you can't wait to use your <b>beloved</b> RREF method to solve for v. Let's do that!<br><br>What will be my final RREF form?",
        "next": "Checkpoint_default_51"
    },
    "Checkpoint_default_51": {
        "type": "mcq",
        "options": {
            "0": "$\\text{span}\\left\\{\\begin{pmatrix}-1 \\\\ 1 \\end{pmatrix}\\right\\}$",
            "1": "$\\text{span}\\left\\{\\begin{pmatrix}1 \\\\ 1 \\end{pmatrix}\\right\\}$",
            "2": "$\\text{span}\\left\\{\\begin{pmatrix}0 \\\\ 1 \\end{pmatrix}\\right\\}$",
            "3": "$\\text{span}\\left\\{\\begin{pmatrix}1 \\\\ 0 \\end{pmatrix}\\right\\}$"
        },
        "answersIdx": [
            0
        ],
        "content": "And what will be the possible values of eigenvector $\\mathbf{v}$, associated with $\\lambda = 1$?",
        "next": "Checkpoint_default_52"
    },
    "Checkpoint_default_52": {
        "type": "plain",
        "content": "Simply parameterise the free variable(non-pivot column) to get the answer!",
        "next": "Checkpoint_default_53"
    },
    "Checkpoint_default_53": {
        "type": "plain",
        "content": "So essentially, we found all the possible values of eigenvector $\\mathbf{v}$, we call this the <b>eigenspace</b>!<br><br>And the dimension of this eigenspace associated with $\\lambda = 1$ is called the <b>geometric multiplicity</b>! In this example, it is 1.",
        "next": "Checkpoint_default_54"
    },
    "Checkpoint_default_54": {
        "type": "mcq",
        "options": {
            "0": "True",
            "1": "False"
        },
        "answersIdx": [
            0
        ],
        "content": "From our example, the <b>eigenspace</b> is basically the null space of $(\\lambda \\mathbf{I} - \\mathbf{A})$.",
        "next": "Checkpoint_default_55"
    },
    "Checkpoint_default_55": {
        "type": "plain",
        "content": "It is true! That is basically what we are doing the whole time: Finding the possible eigenvectors $\\mathbf{v}$ in $(\\lambda \\mathbf{I} - \\mathbf{A})\\mathbf{v} = \\mathbf{0}$.",
        "next": "Checkpoint_default_56"
    },
    "Checkpoint_default_56": {
        "type": "mcq",
        "options": {
            "0": "It is the rank of $(\\lambda \\mathbf{I} - \\mathbf{A})$",
            "1": "It is the nullity of $(\\lambda \\mathbf{I} - \\mathbf{A})$",
            "2": "It is the algebraic multiplicity of $\\lambda$"
        },
        "answersIdx": [
            1
        ],
        "content": "Then, what can we say about the geometric multiplicity of an eigenvalue $\\lambda$?",
        "next": "Checkpoint_default_57"
    },
    "Checkpoint_default_57": {
        "type": "plain",
        "content": "It is the nullity of $(\\lambda \\mathbf{I} - \\mathbf{A})$. Nullity is the dimension of my null space!<br><br>Let's look at the formal definition.",
        "next": "Checkpoint_default_58"
    },
    "Checkpoint_default_58": {
        "type": "tex",
        "important": true,
        "content": "The eigenspace associated to an eigenvalue $\\lambda$ of $\\mathbf{A}$ is<br>$$E_\\lambda = \\left\\{ \\mathbf{v} \\in \\mathbb{R}^n \\mid \\mathbf{A}\\mathbf{v} = \\lambda \\mathbf{v} \\right\\}= \\operatorname{Null}(\\lambda \\mathbf{I} - \\mathbf{A}).$$The <b>geometric multiplicity</b> of an eigenvalue $\\lambda$ is the <b>dimension</b> of its associated eigenspace,$$\\dim(E_{\\lambda}) = \\operatorname{nullity}(\\lambda \\mathbf{I} - \\mathbf{A}).$$",
        "next": "Checkpoint_default_59"
    },
    "Checkpoint_default_59": {
        "type": "mcq",
        "options": {
            "0": "$\\mathbf{E_3} = \\text{span}\\left\\{\\begin{pmatrix}-1 \\\\ 1 \\end{pmatrix}\\right\\}$",
            "1": "$\\mathbf{E_3} = \\text{span}\\left\\{\\begin{pmatrix}1 \\\\ 0 \\end{pmatrix}\\right\\}$",
            "2": "$\\mathbf{E_3} = \\text{span}\\left\\{\\begin{pmatrix}1 \\\\ 1 \\end{pmatrix}\\right\\}$"
        },
        "answersIdx": [
            2
        ],
        "content": "Now that we have found the associated eigenspace for $\\lambda = 1$, time to do the same for the other eigenvalue $\\lambda = 3$<br>What is my eigenspace, $\\mathbf{E_3}$? For reference:$$\\mathbf{A} =\\begin{pmatrix}2 & 1 \\\\1 & 2\\end{pmatrix}$$take the same steps as before.",
        "next": "Checkpoint_default_60"
    },
    "Checkpoint_default_60": {
        "type": "plain",
        "content": "Take the exact same steps as earlier, basically finding $\\operatorname{Null}(3\\mathbf{I} - \\mathbf{A})$.",
        "next": "Checkpoint_default_61"
    },
    "Checkpoint_default_61": {
        "type": "mcq",
        "options": {
            "0": "0",
            "1": "1",
            "2": "2"
        },
        "answersIdx": [
            1
        ],
        "content": "What is the geometric multiplicity of $\\lambda = 3$?",
        "next": "Checkpoint_default_62"
    },
    "Checkpoint_default_62": {
        "type": "plain",
        "content": "So to recap:<br>When we find eigenvalues and eigenvectors, we are essentially solving $(\\lambda \\mathbf{I} - \\mathbf{A})\\mathbf{v} = 0$.<br>Since we exclude the trivial solution $\\mathbf{v} = 0$, this means the matrix $(\\lambda \\mathbf{I} - \\mathbf{A})$ must be <b>singular</b>.<br>Therefore, we use $\\operatorname{det}(\\lambda \\mathbf{I} - \\mathbf{A}) = 0$ to find our eigenvalues, and using those eigenvalues, we RREF and find our eigenspace!",
        "next": "Checkpoint_default_63"
    },
    "Checkpoint_default_63": {
        "type": "dialogue",
        "options": {
            "0": "Then $\\mathbf{A}\\mathbf{v} = \\mathbf{0}$."
        },
        "respondToIdx": {0 : "Checkpoint_default_64"},
        "content": "Before we end, let’s think about one special case:<br>What if $\\lambda = 0$?"
    },
    "Checkpoint_default_64": {
        "type": "mcq",
        "options": {
            "0": "$\\mathbf{A}$ is singular",
            "1": "$\\mathbf{A}$ is invertible",
            "2": "$\\mathbf{A}$ has full rank",
            "3": "Columns of $\\mathbf{A}$ are linearly dependent",
            "4": "$\\mathbf{A}$ is diagonal"
        },
        "answersIdx": [
            0, 3
        ],
        "content": "Then, which of the following must be true?",
        "next": "Checkpoint_default_65"
    },
    "Checkpoint_default_65": {
        "type": "plain",
        "content": "That’s right! Given that $\\mathbf{v}$ is non-zero, $\\lambda = 0$ is an eigenvalue <b>if and only if</b> $\\mathbf{A}$ is <b>singular</b>.",
        "next": "Checkpoint_default_66"
    },
    "Checkpoint_default_66": {
        "type": "plain",
        "content": "By the contrapositive, we can say:<br>$\\mathbf{A}$ is <b>invertible</b> if and only if <b>0 is not an eigenvalue</b>.<br><br>Let’s add that to our list of equivalent statements for invertibility!",
        "next": "Checkpoint_default_67"
    },
    "Checkpoint_default_67": {
        "type": "plain",
        "content": "And that wraps up <b>Eigenvalues and Eigenvectors</b> 🎉<br><br>We learned that:<br><br>- Eigenvectors stay on the same line after transformation<br>- Eigenvalues tell us how much they are stretched or compressed<br>- We find them by solving $\\det(\\lambda \\mathbf{I} - \\mathbf{A}) = 0$<br>- Each eigenvalue’s eigenspace comes from the null space of $(\\lambda \\mathbf{I} - \\mathbf{A})$",
        "next": "Checkpoint_default_68"
    },
    "Checkpoint_default_68": {
        "type": "plain",
        "content": "Well we are done with this chapter, but it would be unfair to not pay some attention to the very first example matrix $\\mathbf{A} = \\begin{pmatrix}3 & 1 \\\\0 & 3\\end{pmatrix}$.",
        "next": "Checkpoint_default_69"
    },
    "Checkpoint_default_69": {
        "type": "mcq",
        "options": {
            "0": "$\\lambda = 1$",
            "1": "$\\lambda = 2$",
            "2": "$\\lambda = 3$",
            "3": "Bruh, no clue."
        },
        "answersIdx": [
            2
        ],
        "content": "Now that we have all the required information needed, what if I tell you that I can just eyeball the eigenvalue from here? What do you think $\\lambda$ is?",
        "next": "Checkpoint_default_70"
    },
    "Checkpoint_default_70": {
        "type": "plain",
        "content": "We can immediately see that $\\lambda = 3$ must be an eigenvalue! Remember how we tried to solve for $\\operatorname{det}(\\lambda \\mathbf{I} - \\mathbf{A}) = 0$?<br><br>Another way of interpreting it is: For what values of $\\lambda$ will make my matrix $(\\lambda \\mathbf{I} - \\mathbf{A})$ singular?<br><br>That $\\lambda$ must be 3 so that I can delete one of the pivot columns! Interesting right?<br>Dive into the next chapter to see how eigenvalues and eigenvectors can be used to help us solve problems!",
        "systemMessage": "🎉Congratulations! You have reached the end of Interactive 6.1!🎉"
    }
};

const compulsoryMessages = [
    "Checkpoint_default_17",
    "Checkpoint_default_37",
    "Checkpoint_default_43",
    "Checkpoint_default_58"
];

const checkpoints = [
    {
        "label": "Eigenvalues and Eigenvectors",
        "showCompulsoryMessages": 0,
        "id": "Checkpoint_default_1"
    }

];