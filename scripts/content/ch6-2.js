const dialogueSystem = {
    "Diagonalization_default_1": {
        "type": "mcq",
        "options": {
            "0": "$\\mu_1=2, \\mu_2=4; \\mathbf{u}_1=\\left(\\begin{array}{c}1\\\\0\\\\1\\\\\\end{array}\\right), \\mathbf{u}_2=\\left(\\begin{array}{c}0\\\\1\\\\1\\\\\\end{array}\\right), \\mathbf{u}_3=\\left(\\begin{array}{c}1\\\\1\\\\0\\\\\\end{array}\\right)$",
            "1": "Wait...what are eigenvalues and eigenvectors??"
        },
        "answersIdx": [
            0
        ],
        "content": "Before we dive into 6.2, let's have a quick revision of 6.1. Can you find eigenvalues and eigenvectors of $\\mathbf{A}$, where $\\mathbf{A}=\\left(\\begin{array}{c c c} 3&1&-1\\\\1&3&-1\\\\0&0&2\\\\\\end{array}\\right)$",
        "next": "Diagonalization_default_17"
    },
    "Diagonalization_default_2": {
        "type": "plain",
        "content": "Revise 6.1 if you forgot!",
        "next": "Diagonalization_default_3"
    },
    "Diagonalization_default_3": {
        "type": "plain",
        "content": "So, we have$$\\begin{aligned}\\mathbf{A}\\mathbf{u_1}=\\mu_1\\mathbf{u_1}, \\left(\\begin{array}{c c c} 3&1&-1\\\\1&3&-1\\\\0&0&2\\\\\\end{array}\\right)\\left(\\begin{array}{c}1\\\\0\\\\1\\\\\\end{array}\\right)=2\\left(\\begin{array}{c}1\\\\0\\\\1\\\\\\end{array}\\right) \\\\\\mathbf{A}\\mathbf{u_2}=\\mu_1\\mathbf{u_2},\\left(\\begin{array}{c c c} 3&1&-1\\\\1&3&-1\\\\0&0&2\\\\\\end{array}\\right)\\left(\\begin{array}{c}0\\\\1\\\\1\\\\\\end{array}\\right)=2\\left(\\begin{array}{c}0\\\\1\\\\1\\\\\\end{array}\\right) \\\\\\mathbf{A}\\mathbf{u_3}=\\mu_1\\mathbf{u_3},\\left(\\begin{array}{c c c} 3&1&-1\\\\1&3&-1\\\\0&0&2\\\\\\end{array}\\right)\\left(\\begin{array}{c}1\\\\1\\\\0\\\\\\end{array}\\right)=4\\left(\\begin{array}{c}1\\\\1\\\\0\\\\\\end{array}\\right)\\end{aligned}$$",
        "next": "Diagonalization_default_4"
    },
    "Diagonalization_default_4": {
        "type": "mcq",
        "options": {
            "0": "$\\left(\\begin{array}{c c c} 2&0&4\\\\0&2&4\\\\2&2&0\\\\\\end{array}\\right)$",
            "1": "ermmm..."
        },
        "answersIdx": [
            0
        ],
        "content": "What's $\\left(\\begin{array}{c c c} 3&1&-1\\\\1&3&-1\\\\0&0&2\\\\\\end{array}\\right)\\left(\\begin{array}{c c c} 1&0&1\\\\0&1&1\\\\1&1&0\\\\\\end{array}\\right)$? (Hint: We stack eigenvectors of $\\mathbf{A}$ together, use blockmultiplication!)",
        "next": "Diagonalization_default_5"
    },
    "Diagonalization_default_5": {
        "type": "mcq",
        "options": {
            "0": "$\\left(\\begin{array}{c c c} 2&0&4\\\\0&2&4\\\\2&2&0\\\\\\end{array}\\right)$",
            "1": "hmmm..."
        },
        "answersIdx": [
            0
        ],
        "content": "What's $\\left(\\begin{array}{c c c} 1&0&1\\\\0&1&1\\\\1&1&0\\\\\\end{array}\\right)\\left(\\begin{array}{c c c} 2&0&0\\\\0&2&0\\\\0&0&4\\\\\\end{array}\\right)$, where diagonal entries of the second matrix are eigenvalues of $\\mathbf{A}$?",
        "next": "Diagonalization_default_6"
    },
    "Diagonalization_default_6": {
        "type": "mcq",
        "options": {
            "0": "There is something into it",
            "1": "Definitely coincidence man"
        },
        "answersIdx": [
            0
        ],
        "content": "Wait...We are getting the same result, is this just a coincidence?",
        "next": "Diagonalization_default_7"
    },
    "Diagonalization_default_7": {
        "type": "plain",
        "content": "Actually this is related to what we are learning today!😸",
        "next": "Diagonalization_default_8"
    },
    "Diagonalization_default_8": {
        "type": "plain",
        "content": "Let's say we use $\\mathbf{P}$ to denote $(\\mathbf{u_1}\\,\\mathbf{u_2}\\,\\dots\\,\\mathbf{u_n})$ of which the columns are the eigenvectors, and $\\mathbf{D}$ to denote $\\begin{pmatrix}\\mu_1 & 0 & \\cdots & 0 \\\\0 & \\mu_2 & \\cdots & 0 \\\\\\vdots & \\ddots & \\ddots & \\vdots \\\\0 & 0 & \\cdots & \\mu_n\\end{pmatrix}$ of which the diagonal entries are the eigenvalues.",
        "next": "Diagonalization_default_9"
    },
    "Diagonalization_default_9": {
        "type": "dialogue",
        "options": {
            "0": "Give it a try!"
        },
        "respondToIdx": {0 : "Diagonalization_default_10"},
        "content": "Can you prove that $\\mathbf{A}\\mathbf{P}=\\mathbf{P}\\mathbf{D}$?"
    },
    "Diagonalization_default_10": {
        "type": "mcq",
        "options": {
            "0": "$\\mathbf{A}\\mathbf{P}=(\\mathbf{A}\\mathbf{u_1}\\,\\mathbf{A}\\mathbf{u_2}\\,\\dots\\,\\mathbf{A}\\mathbf{u_n})$"
        },
        "answersIdx": [
            0
        ],
        "content": "What is $\\mathbf{A}\\mathbf{P}$?",
        "next": "Diagonalization_default_11"
    },
    "Diagonalization_default_11": {
        "type": "mcq",
        "options": {
            "0": "$\\mu_1\\mathbf{u_1}$",
            "1": "I don't know 🫠"
        },
        "answersIdx": [
            0
        ],
        "content": "What is $\\mathbf{A}\\mathbf{u_1}$?<br>Hint: Recall $\\mathbf{u_1}$ is an eigenvector!",
        "next": "Diagonalization_default_12"
    },
    "Diagonalization_default_12": {
        "type": "mcq",
        "options": {
            "0": "$(\\mu_1\\mathbf{u_1}\\,\\mu_2\\mathbf{u_2}\\,\\dots\\,\\mu_n\\mathbf{u_n})$",
            "1": "Whelp 🥹"
        },
        "answersIdx": [
            0
        ],
        "content": "So $(\\mathbf{A}\\mathbf{u_1}\\,\\mathbf{A}\\mathbf{u_2}\\,\\dots\\,\\mathbf{A}\\mathbf{u_n})=$?",
        "next": "Diagonalization_default_13"
    },
    "Diagonalization_default_13": {
        "type": "mcq",
        "options": {
    "0": "$(\\mathbf{u_1}\\,\\mathbf{u_2}\\,\\dots\\,\\mathbf{u_n})\\begin{pmatrix}\\\mu_1 & 0 & \\cdots & 0 \\\\0 & \\mu_2 & \\cdots & 0 \\\\\\vdots & \\ddots & \\ddots & \\vdots \\\\0 & 0 & \\cdots & \\mu_n\\\end{pmatrix}$"},
        "answersIdx": [
            0
        ],
        "content": "What is $\\mathbf{P}\\mathbf{D}$？",
        "next": "Diagonalization_default_14"
    },
    "Diagonalization_default_14": {
        "type": "mcq",
        "options": {
            "0": "$(\\mu_1\\mathbf{u_1}\\,\\mu_2\\mathbf{u_2}\\,\\dots\\,\\mu_n\\mathbf{u_n})$"
        },
        "answersIdx": [
            0
        ],
        "content": "And what will it give you?",
        "next": "Diagonalization_default_15"
    },
    "Diagonalization_default_15": {
        "type": "plain",
        "content": "Well done! Just by observation you can see that $\\mathbf{A}\\mathbf{P}=\\mathbf{P}\\mathbf{D}$! Now let's continue with diagonalization 😊",
        "next": "Diagonalization_default_16"
    },
    "Diagonalization_default_16": {
        "type": "mcq",
        "options": {
            "0": "$\\mathbf{A}=\\mathbf{P}\\mathbf{D}\\mathbf{P}^{-1}$",
            "1": "$\\mathbf{P}^{-1}\\mathbf{A}\\mathbf{P}=\\mathbf{D}$"
        },
        "answersIdx": [
            0,
            1
        ],
        "content": "What can you get from $\\mathbf{A}\\mathbf{P}=\\mathbf{P}\\mathbf{D}$, assuming that $\\mathbf{P}$ is invertible?",
        "next": "Diagonalization_default_17"
    },
    "Diagonalization_default_17": {
        "type": "plain",
        "content": "If $\\mathbf{A}$ can be expressed as $\\mathbf{P}\\mathbf{D}\\mathbf{P}^{-1}$ or that $\\mathbf{P}^{-1}\\mathbf{A}\\mathbf{P}$ can be expressed as a diagonal matrix $\\mathbf{D}$, we say that $\\mathbf{A}$ is diagonalizable!<br><br>Aha, time for the formal definition!",
        "next": "Diagonalization_default_18"
    },
    "Diagonalization_default_18": {
        "type": "tex",
        "important": true,
        "content": "A square matrix $\\mathbf{A}$ of order $n$ is diagonalizable if there exists an invertible matrix $\\mathbf{P}$ such that $\\mathbf{P}^{-1}\\mathbf{A}\\mathbf{P}=\\mathbf{D}$ is a diagonal matrix, OR $\\mathbf{A}=\\mathbf{P}\\mathbf{D}\\mathbf{P}^{-1}$",
        "next": "Diagonalization_default_19"
    },
    "Diagonalization_default_19": {
        "type": "plain",
        "content": "The $\\mathbf{A}$ you saw just now is diagonalizable,$$\\left(\\begin{array}{c c c} 3&1&-1\\\\1&3&-1\\\\0&0&2\\\\\\end{array}\\right)=\\left(\\begin{array}{c c c} 1&0&1\\\\0&1&1\\\\1&1&0\\\\\\end{array}\\right) \\left(\\begin{array}{c c c} 2&0&0\\\\0&2&0\\\\0&0&4\\\\\\end{array}\\right) \\left(\\begin{array}{c c c} 1&0&1\\\\0&1&1\\\\1&1&0\\\\\\end{array}\\right)^{-1}$$",
        "next": "Diagonalization_default_25"
    },
    "Diagonalization_default_25": {
        "type": "mcq",
        "options": {
            "0": "We assumed that $\\mathbf{P}$ is invertible",
            "1": "Hmm everything looks correct to me"
        },
        "answersIdx": [
            0
        ],
        "content": "Wait... did you notice that we made a very convenient assumption?",
        "next": "Diagonalization_default_26"
    },
    "Diagonalization_default_26": {
        "type": "mcq",
        "options": {
            "0": "$\\mathbf{P}$ must be square",
            "1": "$\\mathbf{P}$ must be symmetric",
            "2": "Columns of $\\mathbf{P}$ are linearly independent",
            "3": "$\\mathbf{P}$ must be orthogonal"
        },
        "answersIdx": [
            0,
            2
        ],
        "content": "Yes! Under what condition will $\\mathbf{P}$ be invertible?",
        "next": "Diagonalization_default_27"
    },
    "Diagonalization_default_27": {
        "type": "plain",
        "content": "Exactly! For $\\mathbf{P}$ to be invertible, $\\mathbf{A}$ has to contain $n$ linearly independent eigenvectors!<br><br>And if $\\mathbf{P}$ is invertible, I can then say that $\\mathbf{A}=\\mathbf{P}\\mathbf{D}\\mathbf{P}^{-1}$, and $\\mathbf{A}$ is diagonalizable!",
        "next": "Diagonalization_default_28"
    },
    "Diagonalization_default_28": {
        "type": "tex",
        "important": true,
        "content": "$$\\textbf{Diagonalizability} \\\\ $$<br><br>A $n \\times n$ square matrix $\\mathbf{A}$ is diagonalizable if and only if $\\mathbf{A}$ has $n$ linearly independent eigenvectors.",
        "next": "Diagonalization_default_29"
    },
    "Diagonalization_default_29": {
        "type": "mcq",
        "options": {
            "0": "It forms a basis for $\\mathbb{R}^n$",
            "1": "No conclusion"
        },
        "answersIdx": [
            0
        ],
        "content": "Quick quiz! What can we say about the set consisting of all eigenvectors  $\\{\\mathbf{u_1},\\mathbf{u_2},\\dots,\\mathbf{u_n}\\}$?",
        "next": "Diagonalization_default_30"
    },
    "Diagonalization_default_30": {
        "type": "mcq",
        "options": {
            "0": "$\\left(\\begin{array}{c c} 0&1\\\\0&0\\\\\\end{array}\\right)$",
            "1": "$\\left(\\begin{array}{c c} 3&0\\\\0&5\\\\\\end{array}\\right)$",
            "2": "$\\left(\\begin{array}{c c} 2&-1\\\\1&0\\\\\\end{array}\\right)$"
        },
        "answersIdx": [
            1
        ],
        "content": "Test yourself! Which of the following matrices is/are diagonalizable?",
        "next": "Diagonalization_default_31"
    },
    "Diagonalization_default_31": {
        "type": "mcq",
        "options": {
            "0": "algebraic multiplicity $>$ geometric multiplicity",
            "1": "is algebraic and geometric multiplicity calculas"
        },
        "answersIdx": [
            0
        ],
        "content": "Why are the two matrices not diagonalizable? (Hint: look at their algebraic multiplicity and geometric multiplicity)",
        "next": "Diagonalization_default_32"
    },
    "Diagonalization_default_32": {
        "type": "plain",
        "content": "If geometric multiplicity $<$ algebraic multiplicity, we won't have enough linearly independent vectors for that eigenvalue, which means columns of $\\mathbf{P}$ are not linearly independent and it is not invertible, so $\\mathbf{A}$ in this case is not diagonalizable.",
        "next": "Diagonalization_default_33"
    },
    "Diagonalization_default_33": {
        "type": "mcq",
        "options": {
            "0": "Yes",
            "1": "Maybe not"
        },
        "answersIdx": [
            0
        ],
        "content": "For a $n \\times n$ matrix $\\mathbf{A}$, if it has $n$ distinct eigenvalues, is it diagonalizable?",
        "next": "Diagonalization_default_34"
    },
    "Diagonalization_default_34": {
        "type": "plain",
        "content": "Suppose $\\lambda_1$ and $\\lambda_2$ are distinct eigenvalues. Let $\\mathbf{v_1}$ be an eigenvecotor associated to eigenvalue $\\lambda_1$. Since $\\lambda_1 \\neq \\lambda_2$, $\\mathbf{A}\\mathbf{v_1}=\\lambda_1\\mathbf{v_1}\\neq\\lambda_2\\mathbf{v_1}$, so $\\mathbf{v_1}$ cannot be in the eigenspace associated to $\\lambda_2$, we can say that vectors from different eigenspaces (associated with different eigenvalues) are linearly independent.",
        "next": "Diagonalization_default_35"
    },
    "Diagonalization_default_35": {
        "type": "plain",
        "content": "Therefore, with $n$ distinct eigenvalues, we have $n$ linearly independent eigenvectors, so we can conclude that $\\mathbf{A}$ is diagonalizable.",
        "next": "Diagonalization_default_36"
    },
    "Diagonalization_default_36": {
        "type": "plain",
        "content": "That's the end of 6.2! If you are interested in the proof for any theorem, please refer to notes and appendix (at the end of each chapter notes) See you in 6.3! :D"
    }
};

const compulsoryMessages = [
    "Diagonalization_default_18",
    "Diagonalization_default_28"
];

const checkpoints = [
    {
        "label": "Diagonalization",
        "showCompulsoryMessages": 0,
        "id": "Diagonalization_default_1"
    }
];
