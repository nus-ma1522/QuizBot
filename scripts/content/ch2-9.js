const dialogueSystem = {
    "Checkpoint1_default_1": {
        "type": "plain",
        "content": "Last chapter, we learnt about cofactor expansion, but it is very slow for large matrices. Is there another way to compute determinants?<br><br>Yes! Introducing the method of finding <b>Determinant by Reduction</b>!",
        "next": "Theorem1"
    },
    "Theorem1": {
        "type": "tex",
        "important": true,
        "content": "$$\\textbf{\\Large Determinant by Reduction (1/2)}$$Suppose $\\mathbf{B}$ is obtained from $\\mathbf{A}$ by a single elementary row operation, $\\mathbf{A} \\xrightarrow{\\text{r}} \\mathbf{B}$.<br>Then the determinant of $\\mathbf{B}$ is obtained from the determinant of $\\mathbf{A}$ as such.<br><br>If $r \\text{ is } R_i + aR_j, \\text{then det}(\\mathbf{B}) = \\text{det}(\\mathbf{A})$<br>If $r \\text{ is } cR_i, \\text{then det}(\\mathbf{B}) = c\\space\\text{det}(\\mathbf{A})$<br>If $r \\text{ is } R_i \\leftrightarrow R_j, \\text{then det}(\\mathbf{B}) = -\\space\\text{det}(\\mathbf{A})$<br>$$\\begin{array}{c c}\\text{ERO} & \\text{Determinant} \\\\ \\mathbf{A} \\xrightarrow{R_i + aR_j} \\mathbf{B} & \\det(\\mathbf{B}) = \\det(\\mathbf{A}) \\\\ \\mathbf{A} \\xrightarrow{cR_i} \\mathbf{B} & \\det(\\mathbf{B}) = c\\det(\\mathbf{A}) \\\\ \\mathbf{A} \\xrightarrow{R_i \\leftrightarrow R_j} \\mathbf{B} & \\det(\\mathbf{B}) = -\\det(\\mathbf{A}) \\\\\\end{array}$$",
        "next": "Checkpoint1_default_2"
    },
    "Checkpoint1_default_2": {
        "type": "dialogue",
        "options": {
            "0": "HOLD UPPP!! You haven't even explained why it works the way it does!"
        },
        "respondToIdx": {
            "0": "reply"
        },
        "content": "Great!! Let's apply this knowledge!"
    },
    "reply": {
        "type": "plain",
        "content": "Great question! The full proof is tricky, so we won’t cover it 😭. (totally not because I don't know)<br>The best way to get a feel for it is to try examples: take a matrix $\\mathbf{A}$, apply an ERO to get $\\mathbf{B}$, and use cofactor expansion to see how the determinant changes.",
        "next": "Checkpoint1_default_3"
    },
    "Checkpoint1_default_3": {
        "type": "single-mcq",
        "options": {
            "0": "$2$",
            "1": "$-2$",
            "2": "$0$"
        },
        "answersIdx": [
            1
        ],
        "content": "Suppose<br>$$\\mathbf{A} = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$$What is $\\text{det}(\\mathbf{A})$?",
        "next": "Checkpoint1_default_4"
    },
    "Checkpoint1_default_4": {
        "type": "plain",
        "content": "$\\text{det}(\\mathbf{A}) = 1(4) - 2(3) = -2$<br><br><em>Revise the previous chapter on cofactor expansion if you are unsure about this!</em>",
        "next": "Checkpoint1_default_5"
    },
    "Checkpoint1_default_5": {
        "type": "single-mcq",
        "options": {
            "0": "$1520$",
            "1": "$-1524$",
            "2": "$-2$",
            "3": "$-3044$"
        },
        "answersIdx": [
            2
        ],
        "content": "Now that we know $\\text{det}(\\mathbf{A}) = -2$ and given,$$\\mathbf{A} \\xrightarrow{R_2 + 1522R_1} \\mathbf{B}.$$What is  $\\text{det}(\\mathbf{B})$ without finding $\\mathbf{B}$?<br><em>Hint: Take a look at the theorem we just showed you!</em>",
        "next": "Checkpoint1_default_6"
    },
    "Checkpoint1_default_6": {
        "type": "plain",
        "content": "By the theorem we just learnt, row additions <b>do not</b> change the determinant of the matrix and therefore,<br>$\\text{det}(\\mathbf{B}) = \\text{det}(\\mathbf{A}) = -2$",
        "next": "Checkpoint1_default_7"
    },
    "Checkpoint1_default_7": {
        "type": "single-mcq",
        "options": {
            "0": "$10$",
            "1": "$15220$",
            "2": "$-10$",
            "3": "$-15220$"
        },
        "answersIdx": [
            1
        ],
        "content": "Suppose now, I am given a $3 \\times 3$ matrix $\\mathbf{A}$, $\\text{det}(\\mathbf{A}) = 10$ and I can obtain $\\mathbf{B}$ from $\\mathbf{A}$ as such,<br>$$\\mathbf{A} \\xrightarrow{1522R_2} \\mathbf{B}$$ What is $\\text{det}(\\mathbf{B})$?",
        "next": "Checkpoint1_default_8"
    },
    "Checkpoint1_default_8": {
        "type": "plain",
        "content": "By the theorem we learnt, row scaling <b>does</b> change the determinant of the matrix. If I <b>scale a row by $c$, my determinant is also scaled by $c$</b>. Therefore,<br>$\\text{det}(\\mathbf{B}) = 1522\\space\\text{det}(\\mathbf{A}) = 1522(10) = 15220$",
        "next": "Checkpoint1_default_9"
    },
    "Checkpoint1_default_9": {
        "type": "single-mcq",
        "options": {
            "0": "$1522$",
            "1": "$2251$",
            "2": "$\\frac{1}{1522}$",
            "3": "$-1522$"
        },
        "answersIdx": [
            3
        ],
        "content": "Last scenario: Given a $10 \\times 10$ matrix $\\mathbf{A}$, $\\text{det}(\\mathbf{A}) = 1522$ and I can obtain $\\mathbf{B}$ from $\\mathbf{A}$ as such,$$\\mathbf{A} \\xrightarrow{R_3 \\leftrightarrow R_1} \\mathbf{B}$$ What is $\\text{det}(\\mathbf{B})$?",
        "next": "Checkpoint1_default_10"
    },
    "Checkpoint1_default_10": {
        "type": "plain",
        "content": "By the theorem we learnt, row swapping <b>does</b> change the determinant of the matrix by <b>flipping the sign</b>.<br>$\\text{det}(\\mathbf{B}) = -\\space\\text{det}(\\mathbf{A}) = -1522$",
        "next": "Checkpoint1_default_11"
    },
    "Checkpoint1_default_11": {
        "type": "plain",
        "content": "Now that we went through the 3 different EROs and how they affect the determinant, what happens if I stack multiple of them together?",
        "next": "Checkpoint1_default_12"
    },
    "Checkpoint1_default_12": {
        "type": "single-mcq",
        "options": {
            "0": "$-4$",
            "1": "$4$",
            "2": "$12$",
            "3": "$-12$",
            "4": "I have not learnt this!"
        },
        "answersIdx": [
            2
        ],
        "content": "Suppose<br>$$\\mathbf{A} = \\begin{pmatrix} 2 & 1 & 3 \\\\ 0 & -1 & 4 \\\\ 0 & 0 & 2 \\end{pmatrix}$$<br>$$\\mathbf{A} \\xrightarrow{R_1 \\leftrightarrow R_2}{}\\xrightarrow{3R_2}{}\\xrightarrow{R_3 - 2R_2} \\mathbf{D}$$<em>Hint: From previous chapter, determinant of a triangular matrix is just the product of the diagonal entries.</em><br><br>What is  $\\text{det}(\\mathbf{D})$ without finding $\\mathbf{D}$?",
        "next": "Checkpoint1_default_13"
    },
    "Checkpoint1_default_13": {
        "type": "plain",
        "content": "Simply insert 'intermediate' matrices and you will see the result!$$\\mathbf{A} \\xrightarrow{R_1 \\leftrightarrow R_2}\\mathbf{B}\\xrightarrow{3R_2}\\mathbf{C}\\xrightarrow{R_3-2R_2} \\mathbf{D}$$First, we need to find the starting point: $\\text{det}(\\mathbf{A}) = 2(-1)(2) = -4$<br>Row Swap: $\\text{det}(\\mathbf{B}) = -\\space\\text{det}(\\mathbf{A}) = -(-4) = 4$<br>Row Scaling: $\\text{det}(\\mathbf{C}) = 3\\space\\text{det}(\\mathbf{B}) = 3(4) = 12$<br>Row Addition: $\\text{det}(\\mathbf{D}) = \\space\\text{det}(\\mathbf{C}) = 12$",
        "next": "Checkpoint1_default_14"
    },
    "Checkpoint1_default_14": {
        "type": "plain",
        "content": "At this point you probably realise that the answer is essentially a <b>product</b> of $\\det(\\mathbf{A})$ and the effects of EROs!!<br><br>And since we know that EROs can be written as elementary matrices, this brings us to the next theorem that sums up this 'phenomenon'!",
        "next": "Checkpoint1_default_15"
    },
    "Checkpoint1_default_15": {
        "type": "single-mcq",
        "options": {
            "0": "$-2$",
            "1": "$2$",
            "2": "$1$",
            "3": "$-1$"
        },
        "answersIdx": [
            2
        ],
        "content": "But before that, let's realise some things about elementary matrices!<br>Suppose an elementary matrix that represents row addition:<br>$$\\mathbf{E} = \\begin{pmatrix} 1 & 0 & 0 \\\\ 0 & 1 & 2 \\\\ 0 & 0 & 1 \\end{pmatrix}$$What is $\\text{det}(\\mathbf{E})$?",
        "next": "Checkpoint1_default_16"
    },
    "Checkpoint1_default_16": {
        "type": "plain",
        "content": "E is a triangular matrix!<br>$\\text{det}(\\mathbf{E}) = 1(1)(1) = 1$",
        "next": "Checkpoint1_default_17"
    },
    "Checkpoint1_default_17": {
        "type": "single-mcq",
        "options": {
            "0": "$1$",
            "1": "$0$",
            "2": "$-1$"
        },
        "answersIdx": [
            2
        ],
        "content": "Similarly, for the other types of elementary matrices:$$\\mathbf{E} = \\begin{pmatrix} 1 & 0 & 0 \\\\ 0 & 0 & 1 \\\\ 0 & 1 & 0 \\end{pmatrix}, \\space \\text{(row swap)}$$<br>What is $\\det(\\mathbf{E})?$",
        "next": "Checkpoint1_default_18"
    },
    "Checkpoint1_default_18": {
        "type": "plain",
        "content": "Applying cofactor expansion,<br>$\\det(\\mathbf{E}) = -1$",
        "next": "Checkpoint1_default_19"
    },
    "Checkpoint1_default_19": {
        "type": "single-mcq",
        "options": {
            "0": "$0$",
            "1": "$1$",
            "2": "$-a$",
            "3": "$a$"
        },
        "answersIdx": [
            3
        ],
        "content": "$$\\mathbf{E} = \\begin{pmatrix} a & 0 & 0 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & 1 \\end{pmatrix}, \\space\\text{(row scaling)}$$<br>What is $\\det(\\mathbf{E})?$",
        "next": "Checkpoint1_default_20"
    },
    "Checkpoint1_default_20": {
        "type": "plain",
        "content": "$\\mathbf{E}$ is a triangular matrix!<br>$\\det(\\mathbf{E}) = c$",
        "next": "Checkpoint1_default_21"
    },
    "Checkpoint1_default_21": {
        "type": "plain",
        "content": "Now that we established the determinants of the elementary matrices representing each ERO, it is time to connect the dots!<br><br>Do you see what we have been doing so far? Performing EROs on $\\mathbf{A} \\rightarrow\\mathbf{R}$ can be wrriten as $\\mathbf{E} \\mathbf{A} = \\mathbf{R}$<br>And what we have esentially been doing is $\\det(\\mathbf{R}) = \\det(\\mathbf{E}) \\det(\\mathbf{A})$.",
        "next": "Theorem2"
    },
    "Theorem2": {
        "type": "tex",
        "important": true,
        "content": "$$\\textbf{\\Large Determinant by Reduction (2/2)}$$Further generalising it:<br>Let $\\mathbf{A}$ and $\\mathbf{R}$ be square matrices such that:$$\\mathbf{R} = \\mathbf{E}_k\\ldots\\mathbf{E}_2\\mathbf{E}_1\\mathbf{A}$$for some elementary matrices $\\mathbf{E}_1,\\mathbf{E}_2,\\ldots,\\mathbf{E}_k$. Then,$$\\text{det}(\\mathbf{R}) = \\text{det}(\\mathbf{E}_k)\\ldots\\text{det}(\\mathbf{E}_2)\\space\\text{det}(\\mathbf{E}_1)\\space\\text{det}(\\mathbf{A})$$",
        "next": "Checkpoint1_default_22"
    },
    "Checkpoint1_default_22": {
        "type": "mcq",
        "options": {
            "0": "$\\mathbf{E}_1\\space \\mathbf{E}_3\\space \\mathbf{E}_2 \\space \\mathbf{A} = \\mathbf{R}$",
            "1": "$\\mathbf{E}^{-1}_1\\space \\mathbf{E}^{-1}_3\\space \\mathbf{E}^{-1}_2 \\space \\mathbf{R} = \\mathbf{A}$",
            "2": "$\\mathbf{E}^{-1}_2\\space \\mathbf{E}^{-1}_3\\space \\mathbf{E}^{-1}_1 \\space \\mathbf{R} = \\mathbf{A}$",
            "3": "$\\mathbf{E}_2\\space \\mathbf{E}_3\\space \\mathbf{E}_1 \\space \\mathbf{A} = \\mathbf{R}$"
        },
        "answersIdx": [
            0,2
        ],
        "content": "Let's try this out!$$\\mathbf{A} \\xrightarrow{R_2\\space -\\space 4R_1}{}\\xrightarrow{R_2\\space\\leftrightarrow{\\space R_3}}{}\\xrightarrow{-\\frac{1}{2}R_1} \\mathbf{R}$$$$\\mathbf{E}_1= \\begin{pmatrix} -\\frac{1}{2} & 0 & 0 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & 1 \\end{pmatrix},\\; \\mathbf{E}_2 = \\begin{pmatrix} 1 & 0 & 0 \\\\ -4 & 1 & 0 \\\\ 0 & 0 & 1 \\end{pmatrix}, \\; \\mathbf{E}_3 = \\begin{pmatrix} 1 & 0 & 0 \\\\ 0 & 0 & 1 \\\\ 0 & 1 & 0 \\end{pmatrix}$$How do we form an equation connecting $\\mathbf{A, R, E}_1, \\mathbf{E}_2$ and $\\mathbf{E}_3$?",
        "next": "Checkpoint1_default_23"
    },
    "Checkpoint1_default_23": {
        "type": "plain",
        "content": "Recall that EROs can be written as elementary matrices and the order of premultiplying them is the same as the order in which the row operations are applied!<br><br>Elementary matrices in order of EROs: $\\mathbf{E}_2, \\mathbf{E}_3, \\mathbf{E}_1$<br>Therefore: $\\mathbf{E}_1\\space \\mathbf{E}_3\\space \\mathbf{E}_2 \\space \\mathbf{A = R}$<br>We can also apply the reverse EROs: $\\mathbf{E}^{-1}_2\\space \\mathbf{E}^{-1}_3\\space \\mathbf{E}^{-1}_1 \\space \\mathbf{R} = \\mathbf{A}$",
        "next": "Checkpoint1_default_24"
    },
    "Checkpoint1_default_24": {
        "type": "single-mcq",
        "options": {
            "0": "$1522$",
            "1": "$-1522$",
            "2": "No idea..."
        },
        "answersIdx": [
            1
        ],
        "content": "Now you are given:$$\\mathbf{R} = \\left(\\begin{array}{ccc}-1 & 5 & 2 \\\\ 0 & 1 & 2 \\\\ 0&0 &761\\end{array}\\right)$$What is $\\det(\\mathbf{A})$?",
        "next": "Checkpoint1_default_25"
    },
    "Checkpoint1_default_25": {
        "type": "plain",
        "content": "Recall that the determinant of a triangular matrix is the product of its diagonal entries, so $\\det(\\mathbf{R}) = -1(1)(761)=-761$.<br>Then, $\\det(\\mathbf{A})$ is just the product of the determinants of $\\mathbf{R}$ and the inverse elementary matrices.<br><br>Therefore:<br>$\\det(\\mathbf{A}) = \\det(\\mathbf{E}^{-1}_2)\\det(\\mathbf{E}^{-1}_3) \\det(\\mathbf{E}^{-1}_1) \\det(\\mathbf{R}) \\\\= (-2)(-1)(1)(-761) \\\\= 1522$",
        "next": "Checkpoint1_default_26"
    },
    "Checkpoint1_default_26": {
        "type": "plain",
        "content": "To summarise in simple terms:<br><br>If you perform multiple EROs on a matrix, the total effect on the determinant is just the <b>product of the effects</b> of each elementary matrix. This is exactly how we can compute determinants efficiently using row operations!",
        "systemMessage": "🎉Congratulations! You have reached the end of Interactive 2.9!🎉"
    }
};

const compulsoryMessages = [
    "Theorem1",
    "Theorem2"
];

const checkpoints = [
    {
        "label": "Determinant by Reduction",
        "showCompulsoryMessages": 0,
        "id": "Checkpoint1_default_1"
    }
];