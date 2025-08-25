const dialogueSystem = {
    "Intro:_default_1": {
        "type": "plain",
        "content": "Let's review your matrix algebra skills!",
        "next": "Intro:_default_2"
    },
    "Intro:_default_2": {
        "type": "mcq",
        "options": {
            "0": "$c\\mathbf{A}$",
            "1": "$\\frac{1}{c}\\mathbf{A}$",
            "2": "$c\\frac{\\mathbf{I}}{\\mathbf{B}}$",
            "3": "$\\mathbf{AB}$",
            "4": "$\\mathbf{BA}$",
            "5": "$\\frac{1}{\\mathbf{BA}}$"
        },
        "answersIdx": [
            0,
            1,
            4
        ],
        "content": "Let: $$\\mathbf{A} = \\left(\\begin{array}{ccc}1 & 0 & 1 \\\\ 0 & 1 & 0\\end{array}\\right),$$ $$\\mathbf{B} = \\left(\\begin{array}{cc}0 & 1 \\\\ 1 & 0\\end{array}\\right),$$ $$c \\in \\mathbb{R} \\setminus \\{0\\}.$$Which of the following expressions are valid?",
        "next": "Intro:_default_3"
    },
    "Intro:_default_3": {
        "type": "dialogue",
        "options": {
            "0": "same"
        },
        "respondToIdx": {
            "0": "questioning"
        },
        "content": "Hmm. Have we heard of the term matrix division before?<br>What does it mean to divide something by a matrix?<br>I can't seem to visualize it..."
    },
    "questioning": {
        "type": "dialogue",
        "content": "Hmmmmm. What should the size of the result be? Based on row or column size?<br>This doesn't seem to make sense.",
        "next": "questioningHard",
        "options": {
            "0": "What if we assume it's square?"
        },
        "respondToIdx": {
            "0": "questioningHard"
        },
    },
    "questioningHard": {
        "type": "dialogue",
        "options": {
            "0": "$\\mathbf{B},$ duh.",
            "1": "Urm. That makes no sense.",
            "2": "Each entry in $\\mathbf{C}$ divided by the corresponding entry in $\\mathbf{A}$"
        },
        "respondToIdx": {
            "0": "reveal",
            "1": "reveal",
            "2": "clarify"
        },
        "content": "Fair. Let's say we have square matrices $\\mathbf{A}, \\mathbf{B} \\in \\mathbb{R}^{n \\times n}$, and $\\mathbf{AB=C}$.<br>What does $\\mathbf{\\frac{C}{A}}$ give us?"
    },
    "clarify": {
        "type": "plain",
        "content": "Remember what we learnt last chapter?<br>Matrix multiplication $\\mathbf{AB}$ does not simply multiply each entry in $\\mathbf{A}$ with $\\mathbf{B}$.<br>So why should division be any different?",
        "next": "reveal"
    },
    "reveal": {
        "type": "plain",
        "content": "We let:$$\\mathbf{A} =\\left(\\begin{array}{cc}1 & -1 \\\\ -1 & 0\\end{array}\\right), \\;\\;\\;\\;\\mathbf{C} =\\left(\\begin{array}{cc}1 & -2 \\\\ 0 & 1\\end{array}\\right)$$<br>Now, ima try solving for $\\mathbf{\\frac{C}{A}}$.",
        "next": "Intro:_default_4"
    },
    "Intro:_default_4": {
        "type": "plain",
        "content": "I found both:$$\\mathbf{A}\\left(\\begin{array}{cc}0 & -1 \\\\ -1 & 1\\end{array}\\right)= \\mathbf{C},$$$$\\left(\\begin{array}{cc}-1 & 1 \\\\ -1 & 2\\end{array}\\right)\\mathbf{A=C}$$<br>Since the 'expression' $\\mathbf{\\frac{C}{A}}$ can be interpreted either way, it really shouldn't be used!",
        "next": "Matrix_default_1"
    },
    "Matrix_default_1": {
        "type": "dialogue",
        "options": {
            "0": "$\\mathbf{B}=\\mathbf{A}^{-1}\\mathbf{C}$? I remember matrix power was mentioned earlier..."
        },
        "respondToIdx": {
            "0": "recallPower"
        },
        "content": "If $\\mathbf{AB=C}$ and we want to express $\\mathbf{B}$ in terms of $\\mathbf{A}$ and $\\mathbf{C}$, we'll have to find another way."
    },
    "recallPower": {
        "type": "plain",
        "content": "Yup! In chapter 2.2, the power of a square matrix was defined as:<br>i) $\\mathbf{A}^0=\\mathbf{I}$<br>ii) $\\mathbf{A}^k=\\mathbf{AA}^{k-1}$, for $k \\geq 1$<br><br>The condition $k \\geq 1$ seems problematic, as it does not extend the definition for negative powers.<br>Let's just pretend it does not exist for now 🙄<br>Perhaps we will find out why later!",
        "next": "Matrix_default_2"
    },
    "Matrix_default_2": {
        "type": "dialogue",
        "options": {
            "0": "$\\mathbf{AA}^{-1}=\\mathbf{A}^0=\\mathbf{I_n}$"
        },
        "respondToIdx": {
            "0": "firstId"
        },
        "content": "Suppose now we have square matrices $\\mathbf{A}$ of order $n$.<br>We assume it has a unique inverse and denote it as $\\mathbf{A}^{-1}$.<br>Instinctively, what should the product $\\mathbf{AA}^{-1}$ be equal to?"
    },
    "firstId": {
        "type": "plain",
        "content": "Yes! It only makes sense that a square matrix and its inverse should form the identity matrix when multiplied together!<br>Also, if we swap the order of $\\mathbf{A}$ and $\\mathbf{A}^{-1}$, we should still get:<br>$$\\mathbf{A}^{-1}\\mathbf{A}=\\mathbf{A}^0=\\mathbf{I_n}$$",
        "next": "Matrix_default_3"
    },
    "Matrix_default_3": {
        "type": "single-mcq",
        "options": {
            "0": "$\\frac{1}{2}$",
            "1": "$\\left(\\begin{array}{cc}\\frac{1}{2} & 0 \\\\ 0 & \\frac{1}{2}\\end{array}\\right)$"
        },
        "answersIdx": [
            1
        ],
        "content": "Now let's try to find the inverse of a simple square matrix:$$\\mathbf{A} =\\left(\\begin{array}{cc}2 & 0 \\\\ 0 & 2\\end{array}\\right), \\;\\;\\;\\; \\mathbf{A}^{-1} = \\mathbf{?}$$",
        "next": "Matrix_default_4"
    },
    "Matrix_default_4": {
        "type": "single-mcq",
        "options": {
            "0": "That's impossible! You cannot divide by zero.",
            "1": "$\\left(\\begin{array}{cc}\\infty & 0 \\\\ 0 & \\infty\\end{array}\\right)$"
        },
        "answersIdx": [
            0
        ],
        "content": "Wow, that was pretty obvious, wasn't it?<br>How about this:$$\\mathbf{A} =\\left(\\begin{array}{cc}0 & 0 \\\\ 0 & 0\\end{array}\\right), \\;\\;\\;\\; \\mathbf{A}^{-1} = \\mathbf{?}$$",
        "next": "Matrix_default_5"
    },
    "Matrix_default_5": {
        "type": "single-mcq",
        "options": {
            "0": "It does...",
            "1": "NOT!"
        },
        "answersIdx": [
            1
        ],
        "content": "Hmm... it seems like not all matrices have an inverse 🤔<br>But to be fair, that was kinda obvious.<br>This is the last one, I promise:$$\\mathbf{A} =\\left(\\begin{array}{cc}1 & 1 \\\\ 0 & 0\\end{array}\\right), \\;\\;\\;\\; \\mathbf{A}^{-1} = \\mathbf{?}$$<br>This time, just find out if it has an inverse.",
        "next": "Matrix_default_6"
    },
    "Matrix_default_6": {
        "type": "plain",
        "content": "Suppose that we don't know how to find $\\mathbf{A}^{-1}$ yet.<br>So we take:$$\\mathbf{A}^{-1} =\\left(\\begin{array}{cc}a & b \\\\ c & d\\end{array}\\right), \\;\\;\\;\\; a,b,c,d \\in \\mathbb{R}$$",
        "next": "Matrix_default_7"
    },
    "Matrix_default_7": {
        "type": "plain",
        "content": "Then,$$\\begin{align*}\\mathbf{AA}^{-1}&=\\left(\\begin{array}{cc}1 & 1 \\\\ 0 & 0\\end{array}\\right)\\left(\\begin{array}{cc}a & b \\\\ c & d\\end{array}\\right)\\\\ &=\\left(\\begin{array}{cc}a+c & b+d \\\\ 0 & 0\\end{array}\\right)\\\\ &\\neq\\left(\\begin{array}{cc}1 & 0 \\\\ 0 & 1\\end{array}\\right)= \\mathbf{I}\\end{align*}$$",
        "next": "Matrix_default_8"
    },
    "Matrix_default_8": {
        "type": "single-mcq",
        "options": {
            "0": "Yes",
            "1": "No"
        },
        "answersIdx": [
            0
        ],
        "content": "Notice that the criteria for a square matrix to have an inverse is not as simple as just being all zeroes.<br>Now, if such inverse exists, is it unique?",
        "next": "Matrix_default_9"
    },
    "Matrix_default_9": {
        "type": "plain",
        "content": "Let's try to prove it! Suppose the square matrix $\\mathbf{A}$ has two inverses $\\mathbf{B}$ and $\\mathbf{C}$.<br>Then:$$\\begin{align*}\\mathbf{B} &= \\mathbf{BI}\\\\ &=\\mathbf{B\\left(AC\\right)}\\\\ &=\\mathbf{\\left(BA\\right)C}\\\\ &=\\mathbf{IC}\\\\ &=\\mathbf{C}\\end{align*}$$<br>As a result of its definition, it must be unique.",
        "next": "Matrix_default_10"
    },
    "Matrix_default_10": {
        "type": "tex",
        "important": true,
        "content": 
            "$$ \\textbf{\\Large Inverse of a Matrix} $$" +  
            "We can denote the inverse of an invertible matrix $\\mathbf{A}$ by $\\mathbf{A}^{-1}$<br>and call it the inverse of $\\mathbf{A}$.<br>" +  
            "That is, $\\mathbf{A}$ is invertible and $\\mathbf{A}^{-1}$ is its (unique) inverse if:<br>" +  
            "$$ \\mathbf{A}\\mathbf{A}^{-1} = \\mathbf{I_n} = \\mathbf{A}^{-1}\\mathbf{A}. $$<br>" +
            "$$ \\textbf{Uniqueness of Inverse} $$" +  
            "If $\\mathbf{B}$ and $\\mathbf{C}$ are both inverses of a square matrix $\\mathbf{A}$, then $\\mathbf{B} = \\mathbf{C}$.<br><br>" +  

            "$$ \\textbf{Inverse of 2} \\times \\textbf{2 Square Matrices} $$" +  
            "A $2 \\times 2$ square matrix $\\mathbf{A} = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$ is invertible iff $ad - bc \\neq 0$.<br>" +  
            "In this case, the inverse is given by:<br>" +  
            "$$ \\mathbf{A}^{-1} = \\frac{1}{ad - bc} \\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}. $$",
        "next": "Properties_default_1",
        previewText: "Inverse of a Matrix"
    },
    "Properties_default_1": {
        "type": "plain",
        "content": "Time for some exercises, whether you like it or not 🙃",
        "next": "Properties_default_2"
    },
    "Properties_default_2": {
        "type": "single-mcq",
        "options": {
            "0": "$\\mathbf{A}^{-2}$",
            "1": "$\\mathbf{I}$",
            "2": "$\\mathbf{A}$"
        },
        "answersIdx": [
            2
        ],
        "content": "(1/4)<br>What is $\\left(\\mathbf{A}^{-1}\\right)^{-1}$?",
        "next": "Properties_default_3"
    },
    "Properties_default_3": {
        "type": "plain",
        "content": "Recall basic exponentiation: $$\\left(\\mathbf{A}^{-1}\\right)^{-1}=\\mathbf{A}^{-1(-1)}=\\mathbf{A}$$",
        "next": "Properties_default_4"
    },
    "Properties_default_4": {
        "type": "single-mcq",
        "options": {
            "0": "$a\\mathbf{A}^{-1}$",
            "1": "$\\frac1a\\mathbf{A}^{-1}$"
        },
        "answersIdx": [
            1
        ],
        "content": "(2/4)<br>What is $\\left(a\\mathbf{A}\\right)^{-1}$, for $a \\neq 0$ and some invertible $\\mathbf{A}$?",
        "next": "Properties_default_5"
    },
    "Properties_default_5": {
        "type": "plain",
        "content": "To verify, we multiply it and its inverse:$$\\begin{align*}(a\\mathbf{A})\\left(\\frac1a\\mathbf{A}^{-1}\\right)&=a\\left(\\frac1a\\right)\\left(\\mathbf{AA}^{-1}\\right)\\\\ &=\\mathbf{I}\\end{align*}$$",
        "next": "Properties_default_6"
    },
    "Properties_default_6": {
        "type": "single-mcq",
        "options": {
            "0": "True",
            "1": "False"
        },
        "answersIdx": [
            0
        ],
        "content": "(3/4)<br>For some invertible $\\mathbf{A}$:<br>$$\\left(\\mathbf{A}^\\top\\right)^{-1}=\\left(\\mathbf{A}^{-1}\\right)^\\top$$",
        "next": "Properties_default_7"
    },
    "Properties_default_7": {
        "type": "plain",
        "content": "This one's tricky!$$\\begin{align*}\\mathbf{I}&=\\mathbf{I^\\top}\\\\\\mathbf{A}^\\top \\left(\\mathbf{A}^\\top\\right)^{-1}&=\\left(\\mathbf{A}^{-1}\\mathbf{A}\\right)^\\top\\\\\\mathbf{A}^\\top \\left(\\mathbf{A}^\\top\\right)^{-1}&=\\mathbf{A}^\\top\\left(\\mathbf{A}^{-1}\\right)^\\top\\\\\\left(\\mathbf{A}^\\top\\right)^{-1}&=\\left(\\mathbf{A}^{-1}\\right)^\\top\\end{align*}$$",
        "next": "Properties_default_8",
        systemMessage: "Note: Left cancellation rule has been applied. It will be covered soon."
    },
    "Properties_default_8": {
        "type": "single-mcq",
        "options": {
            "0": "$\\mathbf{CBA}$",
            "1": "$\\mathbf{C}^{-1}\\mathbf{B}^{-1}\\mathbf{A}^{-1}$",
            "2": "$\\mathbf{A}^{-1}\\mathbf{B}^{-1}\\mathbf{C}^{-1}$"
        },
        "answersIdx": [
            1
        ],
        "content": "(4/4)<br>For invertible matrices $\\mathbf{A}, \\mathbf{B}, \\mathbf{C}$, what is $\\left(\\mathbf{ABC}\\right)^{-1}$?",
        "next": "Properties_default_9"
    },
    "Properties_default_9": {
        "type": "plain",
        "content": "Let's verify:$$\\begin{align*}(\\mathbf{ABC})\\left(\\mathbf{C}^{-1}\\mathbf{B}^{-1}\\mathbf{A}^{-1}\\right)&=\\mathbf{AB}\\left(\\mathbf{CC}^{-1}\\right)\\mathbf{B}^{-1}\\mathbf{A}^{-1}\\\\ &=\\mathbf{AB}\\left(\\mathbf{I}\\right)\\mathbf{B}^{-1}\\mathbf{A}^{-1}\\\\ &=\\mathbf{A}\\left(\\mathbf{\\mathbf{BB}^{-1}}\\right)\\mathbf{A}^{-1}\\\\ &=\\mathbf{A}\\left(\\mathbf{\\mathbf{I}}\\right)\\mathbf{A}^{-1}\\\\ &=\\mathbf{A}\\mathbf{A}^{-1}\\\\ &=\\mathbf{I}\\end{align*}$$",
        "next": "Properties_default_10"
    },
    "Properties_default_10": {
        "type": "plain",
        "content": "That summarizes the algebraic properties of the inverse!<br>I've compiled all you need to know below.",
        "next": "Properties_default_11"
    },
    "Properties_default_11": {
        "type": "tex",
        "important": true,
        "content": 
            "$$ \\textbf{\\Large Properties of the Inverse (1/2)} $$" +  
            "Let $\\mathbf{A}$ be an invertible matrix of order $n$.<br>" +  
            "(i) $(\\mathbf{A}^{-1})^{-1} = \\mathbf{A}$.<br>" +  
            "(ii) For any nonzero real number $a \\in \\mathbb{R}$, $a\\mathbf{A}$ is invertible with inverse:<br>" +  
            "$$ (a\\mathbf{A})^{-1} = \\tfrac{1}{a}\\mathbf{A}^{-1}. $$<br>" +  
            "(iii) $\\mathbf{A}\\top$ is invertible with inverse:<br>" +  
            "$$ (\\mathbf{A}^\\top)^{-1} = (\\mathbf{A}^{-1})^\\top, $$" +  
            "that is, the inverse of the transpose is the transpose of the inverse.<br><br>" +  
            "(iv) If $\\mathbf{B}$ is an invertible matrix of the same size, then the product $\\mathbf{AB}$<br>is invertible with inverse:<br>" +  
            "$$ (\\mathbf{AB})^{-1} = \\mathbf{B}^{-1}\\mathbf{A}^{-1}. $$",
        "next": "Properties_default_12",
        previewText: "Properties of the Inverse (Part 1)"
    },
    "Properties_default_12": {
        "type": "tex",
        "important": true,
        "content": 
            "$$ \\textbf{\\Large Properties of the Inverse (2/2)} $$" +  
            "Following (iv): If $\\mathbf{A}_1, \\mathbf{A}_2, \\ldots, \\mathbf{A}_k$ are invertible matrices of the same size,<br>then the product:<br>" +  
            "$$ \\mathbf{A}_1\\mathbf{A}_2\\ldots\\mathbf{A}_k $$" +  
            "is invertible with:<br>" +  
            "$$ (\\mathbf{A}_1\\mathbf{A}_2\\ldots\\mathbf{A}_k)^{-1} = \\mathbf{A}_k^{-1}\\ldots\\mathbf{A}_2^{-1}\\mathbf{A}_1^{-1}. $$<br>" +  

            "$$ \\textbf{Negative Power} $$" +  
            "The negative power of an invertible matrix is defined as:<br>" +  
            "$$ \\mathbf{A}^{-n} = (\\mathbf{A}^{-1})^n, $$<br>" +  
            "for any $n > 0$.",
        "next": "Invertible_default_1",
        previewText: "Properties of the Inverse (Part 2)"
    },
    "Invertible_default_1": {
        "type": "plain",
        "content": "From now on, we'll use the terms:<br>• <b>invertible matrix</b> if the square matrix has an inverse<br>• <b>singular matrix</b> if the square matrix does not have in inverse",
        "next": "Invertible_default_2"
    },
    "Invertible_default_2": {
        "type": "plain",
        "content": "Invertible matrices have some basic properties that might be taken for granted. Let's see!",
        "next": "Invertible_default_3"
    },
    "Invertible_default_3": {
        "type": "mcq",
        "options": {
            "0": "$b=c$",
            "1": "$dab=dac$ for some $d \\in \\mathbb{R}$"
        },
        "answersIdx": [
            1
        ],
        "content": "First, let's start off with something simple:<br>$$ab = ac,$$where $a,b,c\\in\\mathbb{R}$.<br><br>What can be concluded from the above equation?",
        "next": "Invertible_default_4"
    },
    "Invertible_default_4": {
        "type": "dialogue",
        "options": {
            "0": "If $a=0$, then $b$ and $c$ may not be equal."
        },
        "respondToIdx": {
            "0": "dassRight"
        },
        "content": "We can always multiply extra variables into both sides and it will still hold.<br>However, we can't just cancel $a$. Why is this so?"
    },
    "dassRight": {
        "type": "mcq",
        "content": "Yup!! If $a \\neq 0$, we can also see it as multiplying $\\frac1a$ to both sides of the equation!<br>Now how about matrices?<br>$$\\mathbf{AB} = \\mathbf{AC},$$where $\\mathbf{A} \\in \\mathbb{R}^{n \\times n}$ and $\\mathbf{B}, \\mathbf{C} \\in \\mathbb{R}^{n \\times k}$.<br><br>What can be concluded from the above equation?",
        "options": {
            "0": "$\\mathbf{B}=\\mathbf{C}$",
            "1": "$\\mathbf{DAB}=\\mathbf{DAC}$ for some $\\mathbf{D} \\in \\mathbb{R}^{m \\times n}$"
        },
        "answersIdx": [
            1
        ],
        "next": "Invertible_default_5"
    },
    "Invertible_default_5": {
        "type": "plain",
        "content": "Well, for a fact, $\\mathbf{A}$ may be $\\mathbf{0_{n \\times n}}$, but it doesn't just stop there.",
        "next": "Invertible_default_6"
    },
    "Invertible_default_6": {
        "type": "plain",
        "content": "To cancel out $\\mathbf{A}$, we can try premultiplying a matrix to both sides.<br>However, this matrix only exists if $\\mathbf{A}$ is invertible, because it is none other than $\\mathbf{A}^{-1}$!<br>Therefore, the condition for $\\mathbf{B}=\\mathbf{C}$ is that $\\mathbf{A}$ is invertible.",
        "next": "Invertible_default_7"
    },
    "Invertible_default_7": {
        "type": "mcq",
        "options": {
            "0": "There are as many variables as equations",
            "1": "At least one solution exists for all $\\mathbf{b}$",
            "2": "For any given $\\mathbf{b}$, the solution will always be different"
        },
        "answersIdx": [
            0,
            1,
            2
        ],
        "content": "Revisiting the linear system $\\mathbf{Ax=b}$, what can we conclude if $\\mathbf{x} = \\mathbf{A}^{-1}{\\mathbf{b}}$?",
        "next": "Invertible_default_8"
    },
    "Invertible_default_8": {
        "type": "plain",
        "content": "Mhm!<br>As long as $\\mathbf{A}$ is invertible, the system will always produce a unique solution for all $\\mathbf{b}$.<br>The converse is true as well.",
        "next": "def_invertible",
        systemMessage: "If you are unsure about this part, please discuss on Telegram!"
    },

    "def_invertible": {
        "type": "tex",
        "important": true,
        "content": 
            "$$ \\textbf{\\Large Invertible Matrices} $$" +  
            "A $n \\times n$ square matrix $\\mathbf{A}$ is invertible if there exists a square matrix $\\mathbf{B}$<br>of the same size such that " +  
            "$ \\mathbf{AB} = \\mathbf{I_n} = \\mathbf{BA}$.<br>" +  
            "A matrix is said to be non-invertible, or singular, otherwise.<br><br>" +

            "$$ \\textbf{Cancellation Law for Matrices} $$" +  
            "Let $\\mathbf{A}$ be an invertible matrix of order $n$.<br>" +  
            "• (Left) If $\\mathbf{B}$ and $\\mathbf{C}$ are $n \\times m$ matrices with $\\mathbf{AB} = \\mathbf{AC}$, then $\\mathbf{B} = \\mathbf{C}$.<br>" +  
            "• (Right) If $\\mathbf{B}$ and $\\mathbf{C}$ are $m \\times n$ matrices with $\\mathbf{BA} = \\mathbf{CA}$, then $\\mathbf{B} = \\mathbf{C}$.<br><br>" +  

            "$$ \\textbf{Invertibility and Linear System} $$" + 
            "If $\\mathbf{A}$ is an $n \\times n$ invertible square matrix:<br>" +
            "• For any $n \\times 1$ vector $\\mathbf{b}$, the system $ \\mathbf{A}\\mathbf{x} = \\mathbf{b} $ has a unique solution.<br>" +  
            "• The trivial solution is the only solution to the homogeneous system $ \\mathbf{A}\\mathbf{x=0}$.",

        "next": "The_default_1",
        previewText: "Invertible Matrices"
    },

    "The_default_1": {
        "type": "dialogue",
        "options": {
            "0": "Well, if $\\mathbf{Ax=b}$ produces a unique solution for all $\\mathbf{b}$."
        },
        "respondToIdx": {
            "0": "hint1"
        },
        "content": "We have talked so much about invertible matrices and their inverse, but how do we determine if a matrix is invertible?"
    },
    "hint1": {
        "type": "dialogue",
        "content": "Aaaand to check that it produces a unique solution?",
        "options": {
            "0": "Reduce it to R/REF"
        },
        "respondToIdx": {
            "0": "The_default_2"
        },
    },
    "The_default_2": {
        "type": "plain",
        "content": "You GOT IT.<br>As you may know, some $\\mathbf{b}$ may produce a unique solution, while others may produce none or infinite solutions.<br>To cover all $\\mathbf{b}$, we just take each entry on the right side of the reduced augmented matrix as nonzero:$$(\\mathbf{A}\\; | \\;\\mathbf{b})\\rightarrow\\left(\\begin{array}{cccccc|c}\\ast&\\cdots&\\ast&\\ast&\\cdots&\\ast&\\ast \\\\0&\\cdots&0&\\ast&\\cdots&\\ast&\\ast \\\\0&\\cdots&0&0&\\cdots&0&\\ast \\\\\\end{array}\\right)$$",
        "next": "The_default_3"
    },
    "The_default_3": {
        "type": "plain",
        "content": "Notice that if the reduced $\\mathbf{A}$ has at least one zero row, there will always exist some $\\mathbf{b}$ that makes the system <b>inconsistent</b>!<br>Also, we have to check for nonpivot columns in the reduced $\\mathbf{A}$, as these can give rise to <b>infinite solutions</b>.",
        "next": "The_default_4"
    },
    "The_default_4": {
        "type": "dialogue",
        "options": {
            "0": "The RREF of $\\mathbf{A}$ is $\\mathbf{I}$!"
        },
        "respondToIdx": {
            "0": "corright"
        },
        "content": "So much being said, the condition for invertibility just boils down to one thing:$$(\\mathbf{A}\\; | \\;\\mathbf{b})\\xrightarrow{rref}\\left(\\begin{array}{cccc|c}1&0&\\cdots&0&\\ast \\\\0&\\ddots&\\ddots&\\vdots&\\ast \\\\\\vdots&\\ddots&\\ddots&0&\\ast \\\\0&\\cdots&0&1&\\ast \\\\\\end{array}\\right)$$"
    },
    "corright": {
        "type": "plain",
        "content": "Das right! As there must not be any zero rows or nonpivot columns in the RREF of $\\mathbf{A}$, it is actually already implied that $\\mathbf{A}$ is square! 🤓",
        "next": "The_default_5",
        systemMessage: "The proof is left to the reader. Unsure? Tele chat."
    },
    "The_default_5": {
        "type": "plain",
        "content": "Now, is it time to learn some vocabulary!",
        "next": "theMantra"
    },
    "theMantra": {
        "type": "dialogue",
        "options": {
            "0": "The RREF of $\\mathbf{A}$ is $\\mathbf{I}$",
            "1": "$\\mathbf{A}^\\top$ is invertible",
            "2": "There exists $\\mathbf{B}$ such that $\\mathbf{BA=I}$",
            "3": "There exists $\\mathbf{B}$ such that $\\mathbf{AB=I}$",
            "4": "The homogeneous system $\\mathbf{Ax=0}$ only has the trivial solution",
            "5": "For any $\\mathbf{b}$, the system $\\mathbf{Ax=b}$ is consistent",
            "6": "That's all I have for now"
        },
        "respondToIdx": {
            "0": "yesCaptainObvious",
            "1": "tp",
            "2": "semi",
            "3": "semi",
            "4": "homog",
            "5": "anyB",
            "6": "moveOn"
        },
        "content": "How else can we say a square matrix $\\mathbf{A}$ is invertible, WITHOUT actually saying $\\mathbf{A}$ is invertible? 🤔🤔🤔"
    },
    "tp": {
        "type": "plain",
        "content": "Remember, earlier:$$\\begin{align*}\\mathbf{I} &= \\mathbf{I}^\\top\\\\ &= \\left(\\mathbf{AA}^{-1}\\right)^\\top\\\\ &= \\left(\\mathbf{A}^{-1}\\right)^\\top \\mathbf{A}^\\top\\\\ &= \\left(\\mathbf{A}^\\top\\right)^{-1} \\mathbf{A}^\\top\\end{align*}$$<br>Indeed, if $\\mathbf{A}$ is invertible, it follows that $\\mathbf{A}^\\top$ is also invertible.",
        "next": "theMantra"
    },
    "semi": {
        "type": "plain",
        "content": "For invertible matrices, just remember: $\\mathbf{A}^{-1}\\mathbf{A}=\\mathbf{I}=\\mathbf{AA}^{-1}$.<br>So we can say that $\\mathbf{A}^{-1}$ is both a left and right inverse.",
        "next": "theMantra"
    },
    "yesCaptainObvious": {
        "type": "plain",
        "content": "Welllll, we just went through that, so I won't need to elaborate.",
        "next": "theMantra"
    },
    "homog": {
        "type": "plain",
        "content": "1. A homogeneous system $\\mathbf{Ax=0}$ always contains the trivial solution.<br>2. But if the trivial solution is its <b>only</b> solution, we can conclude that it is unique!<br>3. Having a unique solution means that the reduced form of $\\mathbf{A}$ does not contain nonpivot columns.<br>4. As it is given that $\\mathbf{A}$ is square, we conclude the RREF form of $\\mathbf{A}$ is $\\mathbf{I}$, therefore $\\mathbf{A}$ is invertible.<br>5. This follows the fact that the unique solution can be expressed as $\\mathbf{x}=\\mathbf{A}^{-1}\\mathbf{0}=\\mathbf{0}$.",
        "next": "theMantra"
    },
    "anyB": {
        "type": "plain",
        "content": "1. If the system $\\mathbf{Ax=b}$ is always consistent regardless of  $\\mathbf{b}$, the reduced form of  $\\mathbf{A}$ does not contain zero rows.<br>2. As it is given that $\\mathbf{A}$ is square, we conclude the RREF form of $\\mathbf{A}$ is $\\mathbf{I}$, therefore $\\mathbf{A}$ is invertible.<br>3. This follows the fact that the unique solution can be expressed as $\\mathbf{x}=\\mathbf{A}^{-1}\\mathbf{b}$.",
        "next": "theMantra"
    },
    "moveOn": {
        "type": "plain",
        "content": "The <em>vocabulary</em> that we just talked about, is known in MA1522 as the Equivalent Statements for Invertibility!<br>I'll call it the <em>Invertible Mantra</em>.",
        "next": "The_default_6"
    },
    "The_default_6": {
        "type": "tex",
        "important": true,
        "content": 
            "$$ \\textbf{\\Large Equivalent Statements of Invertibility} $$" +  
            "Let $\\mathbf{A}$ be a square matrix. The following statements are equivalent:<br><br>" +  

            "1. $\\mathbf{A}$ is invertible.<br>" +  
            "2. $\\mathbf{A}^\\top$ is invertible.<br>" +  
            "3. $\\mathbf{A}$ has a left inverse, that is, there exists a matrix $\\mathbf{B}$ such that $\\mathbf{BA} = \\mathbf{I}$.<br>" +  
            "4. $\\mathbf{A}$ has a right inverse, that is, there exists a matrix $\\mathbf{B}$ such that $\\mathbf{AB} = \\mathbf{I}$.<br>" +  
            "5. The reduced row-echelon form of $\\mathbf{A}$ is the identity matrix.<br>" +  
            "6. $\\mathbf{A}$ can be expressed as a product of elementary matrices. (Interactive 2.4-2.7 β)<br>" +  
            "7. The homogeneous system $\\mathbf{Ax=0}$ has only the trivial solution.<br>" +  
            "8. For any $\\mathbf{b}$, the system $\\mathbf{Ax} = \\mathbf{b}$ is consistent.",
        "next": "The_default_7",
        previewText: "Equivalent Statements of Invertibility"
    },
    "The_default_7": {
        "type": "plain",
        "content": "In its current state, it's only partially complete, which means there's still a long way ahead... 😱<br>We will also be discovering and exploring more <em>Mantras</em> in the future, such as:<br>• the <em>Singular Mantra</em><br>• the <em>Rank-Equals-Number-Of-Rows Mantra</em><br>• the <em>Rank-Equals-Number-Of-Columns Mantra</em><br>• the <em>Rank-Deficient Mantra</em><br><br>...so stay tuned!",
        "next": "The_default_8"
    },
    "The_default_8": {
        "type": "plain",
        "content": "That's a bunch of things to remember, I know...<br>But by the end of the course, all of them will become common sense.<br>Anyways, that's all for now! Byee! 👋",
        systemMessage: "🎉Congratulations! You have reached the end of Interactive 2.4-2.7 α!🎉"
    }
};

const compulsoryMessages = [
    "Matrix_default_10",
    "Properties_default_11",
    "Properties_default_12",
    "def_invertible",
    "The_default_6"
];

const checkpoints = [
    {
        "label": "Dividing by a Matrix?!",
        "showCompulsoryMessages": 0,
        "id": "Intro:_default_1"
    },
    {
        "label": "Matrix Inverse",
        "showCompulsoryMessages": 0,
        "id": "Matrix_default_1"
    },
    {
        "label": "Properties of the Inverse",
        "showCompulsoryMessages": 2,
        "id": "Properties_default_1"
    },
    {
        "label": "Invertible Matrices",
        "showCompulsoryMessages": 3,
        "id": "Invertible_default_1"
    },
    {
        "label": "The Mantra (Equivalent Statements for Invertibility)",
        "showCompulsoryMessages": 4,
        "id": "The_default_1"
    }
];