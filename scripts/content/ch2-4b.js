const dialogueSystem = {
    "Elementary_default_1": {
        "type": "dialogue",
        "options": {
            "0": "Elementary Row Operations!",
            "1": "Elementary School Algebruh"
        },
        "respondToIdx": {
            "0": "intro1",
            "1": "intro2"
        },
        "content": "If you were paying attention, you would have seen the word 'elementary' appear before.<br>When was it?"
    },
    "intro1": {
        "type": "plain",
        "content": "That's right! Seems like you paid attention in class!",
        "next": "Elementary_default_2"
    },
    "intro2": {
        "type": "plain",
        "content": "What!? This isn't elementary school!<br>Anyways, I meant elementary row operations.",
        "next": "Elementary_default_2"
    },
    "Elementary_default_2": {
        "type": "plain",
        "content": "Recall that there are 3 different elementary row operations (EROs):<br><br>1. $R_i \\leftrightarrow R_j, i \\neq j$<br>2. $aR_i, \\text{where } a \\neq 0$<br>3. $R_i + cR_j, \\text{where } c \\in \\mathbb{R} \\text{ and } i \\neq j$",
        "next": "Elementary_default_3"
    },
    "Elementary_default_3": {
        "type": "plain",
        "content": "What if I told you that for some matrix $\\mathbf{A}$, there exist square matrices $\\mathbf{E}$,<br>such that premultiplying $\\mathbf{A}$ with $\\mathbf{E}$ performs an ERO on $\\mathbf{A}$?<br>In other words:<br><br>$$\\mathbf{A} \\xrightarrow{\\text{some ERO}} \\mathbf{EA}$$",
        "next": "Elementary_default_4"
    },
    "Elementary_default_4": {
        "type": "dialogue",
        "options": {
            "0": "Simplify the problem?",
            "1": "err i still noob ;-;"
        },
        "respondToIdx": {
            "0": "genius",
            "1": "genius"
        },
        "content": "For the above example, how would you find $\\mathbf{E}$?"
    },
    "genius": {
        "type": "plain",
        "content": "Well, wellll... $\\mathbf{I}$ can pull off a sneaky here 😎<br>(multiplying with $\\mathbf{I}$ does not change the expression)<br><br>$$\\mathbf{IA} \\xrightarrow{\\text{some ERO}} \\mathbf{EIA}$$<br>The size of $\\mathbf{I}$ must fit into the equation, which means its size corresponds to the row size of $\\mathbf{A}$.",
        "next": "Elementary_default_5"
    },
    "Elementary_default_5": {
        "type": "plain",
        "content": "Now, removing $\\mathbf{A}$ from both sides, we have:<br><br>$$\\mathbf{I} \\xrightarrow{\\text{some ERO}} \\mathbf{EI} = \\mathbf{E}$$<br>We just have to find $\\mathbf{I}$ of the right size, then perform the respective ERO on it!<br>Isn't that simple?",
        "next": "Elementary_default_6",
        systemMessage: "Note: That was a rhetorical question."
    },
    "Elementary_default_6": {
        "type": "tex",
        "important": true,
        "content": 
            "$$ \\textbf{\\Large Elementary Matrices} $$" +
            "A square matrix of order $n$, $\\mathbf{E}$, is called an elementary matrix if it can<br>" +
            "be obtained from the identity matrix $\\mathbf{I_n}$ by performing a single elementary<br>" +
            "row operation.<br>" +
            "$$ \\mathbf{I_n} \\xrightarrow{r} \\mathbf{E}, $$" +
            "where $r$ is an elementary row operation.<br><br>" +
            "The elementary row operation performed to obtain $\\mathbf{E}$ is said to be the row<br>" +
            "operation corresponding to the elementary matrix.<br><br>" +
            "$$ \\textbf{Elementary Matrix and Elementary Row Operation} $$" +
            "Let $\\mathbf{A}$ be an $n \\times m$ matrix and $\\mathbf{E}$ the elementary matrix<br>" +
            "corresponding to the ERO $r$. Then the product $\\mathbf{E}\\mathbf{A}$ is the result of<br>" +
            "performing the ERO $r$ on $\\mathbf{A}$.<br>" +
            "$$ \\mathbf{A} \\xrightarrow{r} \\mathbf{E}\\mathbf{A}. $$" +
            "Suppose now $\\mathbf{B}$ is row equivalent to $\\mathbf{A}$,<br>" +
            "$$ \\mathbf{A} \\xrightarrow{r_1} \\xrightarrow{r_2} \\cdots \\xrightarrow{r_k} \\mathbf{B}. $$" +
            "Let $\\mathbf{E}_l$ be the elementary matrix corresponding to $r_l$, $l=1,2,\\ldots,k$.<br>" +
            "Then,<br>" +
            "$$ \\mathbf{B} = \\mathbf{E}_k \\cdots \\mathbf{E}_2 \\mathbf{E}_1 \\mathbf{A}. $$" +
            "Two $n \\times m$ matrices $\\mathbf{A}$ and $\\mathbf{B}$ are row equivalent iff there exist<br>" +
            "elementary matrices $\\mathbf{E}_1, \\mathbf{E}_2, \\ldots, \\mathbf{E}_k$ such that<br>" +
            "$$ \\mathbf{B} = \\mathbf{E}_k \\cdots \\mathbf{E}_2 \\mathbf{E}_1 \\mathbf{A}. $$" +
            "<br>" +
            "$$ \\textbf{Inverse of Elementary Matrices} $$" +
            "Every elementary matrix $\\mathbf{E}$ is invertible (row equivalent to $\\mathbf{I_n}$).<br>" +
            "The inverse $\\mathbf{E}^{-1}$ is the ERO corresponding to the reverse of the original.<br><br>" +
            "(i) $$ \\mathbf{I_n} \\xrightarrow{R_i + cR_j} \\mathbf{E} \\xrightarrow{R_i - cR_j} \\mathbf{I_n} \\;\\;\\;\\; \\Rightarrow \\;\\;\\;\\; \\mathbf{E}: R_i + cR_j, \\quad \\mathbf{E}^{-1}: R_i - cR_j. $$" +
            "(ii) $$ \\mathbf{I_n} \\xrightarrow{R_i \\leftrightarrow R_j} \\mathbf{E} \\xrightarrow{R_i \\leftrightarrow R_j} \\mathbf{I_n} \\;\\;\\;\\; \\Rightarrow \\;\\;\\;\\; \\mathbf{E}: R_i \\leftrightarrow R_j, \\quad \\mathbf{E}^{-1}: R_i \\leftrightarrow R_j. $$" +
            "(iii) $$ \\mathbf{I_n} \\xrightarrow{cR_i} \\mathbf{E} \\xrightarrow{\\tfrac{1}{c}R_i} \\mathbf{I_n} \\;\\;\\;\\; \\Rightarrow \\;\\;\\;\\; \\mathbf{E}: cR_i, \\quad \\mathbf{E}^{-1}: \\tfrac{1}{c}R_i. $$",
        "next": "Elementary_default_7",
        previewText: "Definition: Elementary Matrix"
    },
    "Elementary_default_7": {
        "type": "single-mcq",
        "content": "Sorry, that's a BUNCH of letters and definitions 🗿<br>Here's a riddle to clear your mind:<br>If $\\mathbf{I}$ is a blank canvas, and EROs $r_1, r_2, \\ldots, r_k$ are the strokes of a paintbrush, what is the final artwork $\\mathbf{E}_k \\ldots \\mathbf{E}_2 \\mathbf{E}_1$?<br>(pick the most detailed option)",
        options: {
            0: "A Picasso matrix 🤩🤩🤩",
            1: "A matrix row equivalent to $\\mathbf{I}$",
            2: "A matrix not row equivalent to $\\mathbf{I}$",
            3: "A square matrix",
            4: "A triangular matrix"
        },
        answersIdx: [1],
        "next": "Elementary_default_8"
    },
    "Elementary_default_8": {
        "type": "dialogue",
        "options": {
            "0": "Hey, you skipped steps!! 😡",
            "1": "you speak as if i knew it already."
        },
        "respondToIdx": {
            "0": "explainYourself",
            "1": "explainYourself"
        },
        "content": "No matter what, it is always row equivalent to $\\mathbf{I}$, since it originated from $\\mathbf{I}$.<br>Therefore, it is an invertible matrix."
    },
    "explainYourself": {
        "type": "image",
        "content": "images/cipher_pitiful.png",
        "next": "explainYourself1",
        sticker: true
    },
    "explainYourself1": {
        "type": "plain",
        "content": "Oh ya um... Gimme a chance to explain, okay?",
        "next": "Finding_default_1"
    },
    "Finding_default_1": {
        "type": "dialogue",
        "options": {
            "0": "Solve $\\mathbf{AX}=\\mathbf{B}$. Here $\\mathbf{B} = \\mathbf{I}$ and $\\mathbf{X} = \\mathbf{A}^{-1}$."
        },
        "respondToIdx": {
            "0": "findingInverse"
        },
        "content": "First, a square matrix $\\mathbf{A}$ is invertible if there exists a square matrix $\\mathbf{A}^{-1}$ such that $\\mathbf{AA}^{-1} = \\mathbf{I}$.<br>Given $\\mathbf{A}$, how can we find $\\mathbf{A}^{-1}$?"
    },
    "findingInverse": {
        "type": "plain",
        "content": 
            "Yup! To do this, we set up the augmented matrix $\\left( \\; \\mathbf{A} \\; | \\; \\mathbf{I} \\; \\right)$.<br>" +
            "Then, we reduce it to RREF.",
        "next": "findingInverse1"
    },
    "findingInverse1": {
        "type": "plain",
        "content": "Let's say we have:$$\\mathbf{A} = \\left(\\begin{array}{cc}1 & -1 \\\\ -1 & 1\\end{array}\\right)$$",
        "next": "Finding_default_2"
    },
    "Finding_default_2": {
        "type": "single-mcq",
        "content": "Then,<br>$$ \\left(\\begin{array}{cc|cc}1 & -1 & 1 & 0 \\\\ -1 & 1 & 0 & 1\\end{array}\\right) \\xrightarrow{rref} \\left(\\begin{array}{cc|cc}1 & -1 & 1 & 0 \\\\0 & 0 & 1 & 1\\end{array}\\right)$$<br>What is $\\mathbf{A}^{-1}$?",
        options: {
            0: "$\\left(\\begin{array}{cc}1 & 0 \\\\ 1 & 1\\end{array}\\right)$",
            1: "There is no $\\mathbf{A}^{-1}$"
        },
        answersIdx: [1],
        "next": "Finding_default_3"
    },
    "Finding_default_3": {
        "type": "plain",
        "content": "Remember, pivot columns on the right only means one thing: the system is <b>inconsistent</b>! There is no solution.<br>Therefore, $\\mathbf{A}^{-1}$ does not exist in this case. Don't believe me? Try finding $\\mathbf{AA^{-1}}$ then.",
        "next": "Finding_default_4"
    },
    "Finding_default_4": {
        "type": "plain",
        "content": "This time it's legit! I promise!$$\\mathbf{A} = \\left(\\begin{array}{cc}1 & 1 \\\\ -1 & 0\\end{array}\\right)$$",
        "next": "Finding_default_5"
    },
    "Finding_default_5": {
        "type": "single-mcq",
        "content": "Then,<br>$$ \\left(\\begin{array}{cc|cc}1 & 1 & 1 & 0 \\\\ -1 & 0 & 0 & 1\\end{array}\\right) \\xrightarrow{rref} \\left(\\begin{array}{cc|cc}1 & 0 & 0 & -1 \\\\0 & 1 & 1 & 1\\end{array}\\right)$$<br>What is $\\mathbf{A}^{-1}$?",
        options: {
            0: "$\\left(\\begin{array}{cc}0 & -1 \\\\ 1 & 1\\end{array}\\right)$",
            1: "There is no $\\mathbf{A}^{-1}$"
        },
        answersIdx: [0],
        "next": "Finding_default_6"
    },
    "Finding_default_6": {
        "type": "dialogue",
        "options": {
            "0": "Excuse me, you skipped some steps again."
        },
        "respondToIdx": {
            "0": "leftProof"
        },
        "content": "Let's verify:$$\\begin{align*}\\mathbf{AA}^{-1} &= \\left(\\begin{array}{cc}1 & 1 \\\\ -1 & 0\\end{array}\\right) \\left(\\begin{array}{cc}0 & -1 \\\\ 1 & 1\\end{array}\\right) \\\\ &= \\left(\\begin{array}{cc}0(1)+1(1) & -1(1)+1(1) \\\\ 0(-1)+1(0) & -1(-1)+1(0)\\end{array}\\right) \\\\ &= \\left(\\begin{array}{cc}1 & 0 \\\\ 0 & 1\\end{array}\\right) \\\\ &= \\mathbf{I} \\end{align*}$$<br>We have shown that $\\mathbf{AA}^{-1} = \\mathbf{I}$. Therefore, $\\mathbf{A}^{-1}\\mathbf{A} = \\mathbf{I}$."
    },
    "leftProof": {
        "type": "plain",
        "content": "Waht?!? Again?? Anyways...<br>There are many ways to prove the above. But since we've just discussed <b>elementary matrices</b>, let's use that approach!",
        "next": "Finding_default_7"
    },
    "Finding_default_7": {
        "type": "plain",
        "content": "Remember, whenever we find the RREF, we perform a sequence of EROs.<br>Then, $\\mathbf{I}$ actually acts as a blank canvas to <b>track the EROs used</b>:$$\\begin{align*}\\left(\\begin{array}{c|c}\\mathbf{A} & \\mathbf{I}\\end{array}\\right)\\xrightarrow{rref} \\;& \\left(\\begin{array}{c|c}\\mathbf{I} & \\mathbf{E}_k \\ldots \\mathbf{E}_2 \\mathbf{E}_1\\end{array}\\right)\\\\ = \\;& \\left(\\begin{array}{c|c}\\mathbf{I} & \\mathbf{A}^{-1}\\end{array}\\right)\\end{align*}$$",
        "next": "Finding_default_8"
    },
    "Finding_default_8": {
        "type": "plain",
        "content": "Therefore:$$\\begin{align*}\\mathbf{A} \\xrightarrow{rref} \\; &\\mathbf{E}_k \\ldots \\mathbf{E}_2 \\mathbf{E}_1\\mathbf{A}\\\\ = \\; & \\mathbf{A}^{-1}\\mathbf{A}\\\\ = \\; & \\mathbf{I}\\end{align*}$$<br>Voila! Now, we have proved that $\\mathbf{A}^{-1}\\mathbf{A} = \\mathbf{I}$!<br>Also, we have shown that if $\\mathbf{A}^{-1}$ exists, then $\\mathbf{A}$ is row equivalent to $\\mathbf{I}$. Same is true for the other direction.",
        "next": "Finding_default_9"
    },
    "Finding_default_9": {
        "type": "tex",
        "important": true,
        "content": 
            "$$ \\textbf{\\Large Algorithm for Finding Inverse} $$" +
            "Let $\\mathbf{A}$ be a square matrix of order $n$.<br>" +
            "Step 1: Form an $n \\times 2n$ augmented matrix $\\left( \\mathbf{A} \\; | \\; \\mathbf{I_n} \\right)$.<br>" +
            "Step 2: Reduce the augmented matrix to RREF, $\\left( \\mathbf{A} \\; | \\; \\mathbf{I_n} \\right) \\xrightarrow{rref} \\left( \\mathbf{R} \\; | \\; \\mathbf{B} \\right)$.<br>" +
            "Step 3: If $\\mathbf{R} \\neq \\mathbf{I_n}$, then $\\mathbf{A}$ is not invertible. Otherwise, $\\mathbf{A}$ is invertible with inverse $\\mathbf{A}^{-1} = \\mathbf{B}$.",
        "next": "First_default_1",
        previewText: "Algorithm for Finding Inverse"
    },
    "First_default_1": {
        "type": "mcq",
        "options": {
            "0": "If $\\mathbf{A}$ is square, $\\mathbf{U}$ is upper triangular",
            "1": "$\\mathbf{U}$ is upper triangular",
            "2": "$\\mathbf{U}$ is square",
            "3": "$\\mathbf{A} = \\mathbf{P}^{-1}\\mathbf{U}$"
        },
        "answersIdx": [0, 3],
        "content": "Let's try another puzzle!<br>Suppose we only did EROs till some row-echelon form (REF) is reached:$$\\begin{align*}\\left(\\begin{array}{c|c}\\mathbf{A} & \\mathbf{I}\\end{array}\\right)\\xrightarrow{ref} \\;& \\left(\\begin{array}{c|c}\\mathbf{U} & \\mathbf{E}_k \\ldots \\mathbf{E}_2 \\mathbf{E}_1\\end{array}\\right)\\\\ = \\;& \\left(\\begin{array}{c|c}\\mathbf{U} & \\mathbf{P}\\end{array}\\right)\\end{align*}$$<br>What can we infer about $\\mathbf{U}$ and $\\mathbf{P}$?",
        "next": "First_default_2"
    },
    "First_default_2": {
        "type": "mcq",
        "options": {
            "0": "$\\mathbf{E}_1 \\mathbf{E}_2 \\ldots \\mathbf{E}_k$",
            "1": "$\\mathbf{E}_1^{-1} \\mathbf{E}_2^{-1} \\ldots \\mathbf{E}_k^{-1}$",
            "2": "$\\mathbf{E}_k^{-1} \\ldots \\mathbf{E}_2^{-1} \\mathbf{E}_1^{-1}$"
        },
        "answersIdx": [
            1
        ],
        "content": "By now, we should be familiar with the <b>staircase pattern</b> in the REF $\\mathbf{U}$.<br>For it to qualify as upper triangular, $\\mathbf{U}$ and consequently $\\mathbf{A}$ must be square.<br><br>Furthermore, $\\mathbf{A} = \\mathbf{P}^{-1}\\mathbf{U}$, since $\\mathbf{P}$ represents the sequence of EROs from $\\mathbf{A}$ to $\\mathbf{U}$ and $\\mathbf{P}^{-1}$ undoes all of them.<br><br>Given $\\mathbf{P} = \\mathbf{E}_k \\ldots \\mathbf{E}_2 \\mathbf{E}_1$, how can we represent $\\mathbf{P}^{-1}$?",
        "next": "First_default_3"
    },
    "First_default_3": {
        "type": "plain",
        "content": "To check our answer, we expand $\\mathbf{PP}^{-1} = \\mathbf{I}$: (the other way works, too)$$\\begin{align*}\\mathbf{PP}^{-1}&=\\mathbf{E}_k \\ldots \\mathbf{E}_2 \\left(\\mathbf{E}_1 \\mathbf{E}_1^{-1}\\right) \\mathbf{E}_2^{-1} \\ldots \\mathbf{E}_k^{-1}\\\\ &=\\mathbf{E}_k \\ldots \\mathbf{E}_2 (\\mathbf{I}) \\mathbf{E}_2^{-1} \\ldots \\mathbf{E}_k^{-1}\\\\ &=\\mathbf{E}_k \\ldots \\left(\\mathbf{E}_2 \\mathbf{E}_2^{-1}\\right) \\ldots \\mathbf{E}_k^{-1}\\\\ & \\hphantom{n}\\vdots\\\\ &= \\mathbf{I}\\end{align*}$$",
        "next": "First_default_4"
    },
    "First_default_4": {
        "type": "plain",
        "content": "Remember the REF algorithm (Gaussian Elimination) from section 1.4?<br>If we follow it strictly, and somehow reduce a matrix $\\mathbf{A}$ to REF <b>without</b> using the ERO $R_i \\leftrightarrow R_j$,<br>the resulting matrix $\\mathbf{P}^{-1}$ would have the following special properties:<br>• It is lower triangular.<br>• Its diagonal entries are all $1$.<br><br>We call this matrix <b>unit lower triangular</b>. And since it is lower triangular, why not call it $\\mathbf{L}$ instead?",
        "next": "First_default_5"
    },
    "First_default_5": {
        "type": "plain",
        "content": "Together, $\\mathbf{L}$ and $\\mathbf{U}$ form the <b>LU factorization</b> of $\\mathbf{A}$, for some $\\mathbf{A}$ that fulfils the above criteria. We say  $\\mathbf{A}$ is <b>LU factorizable</b>.",
        "next": "First_default_6"
    },
    "First_default_6": {
        "type": "dialogue",
        "options": {
            "0": "MATLAB exists",
            "1": "Reduce $\\mathbf{A}$ to REF to find $\\mathbf{U}$, then calculate $\\mathbf{E}_1^{-1} \\mathbf{E}_2^{-1} \\ldots \\mathbf{E}_k^{-1}$ to find $\\mathbf{L}$"
        },
        "respondToIdx": {
            "0": "noCalcAllow",
            "1": "simplifiedMethod"
        },
        "content": "Now, how do we find the LU factorization for some given matrix $\\mathbf{A}$?"
    },
    "noCalcAllow": {
        "type": "plain",
        "content": "Aaaand what if you didn't have MATLAB? (or a calculator) 😱<br>To find $\\mathbf{L}$, we have to calculate the product $\\mathbf{E}_1^{-1} \\mathbf{E}_2^{-1} \\ldots \\mathbf{E}_k^{-1}$, which seems tedious.",
        "next": "First_default_7"
    },
    "simplifiedMethod": {
        "type": "plain",
        "content": "That's one way, but performing so many matrix multiplications is waaay too tedious!<br>There is actually a shortcut to finding $\\mathbf{L}$, but let's approach it the usual way for now.",
        "next": "First_default_7"
    },
    "First_default_7": {
        "type": "plain",
        "content": "Let's bring an LU factorizable matrix $\\mathbf{A}$ to REF first:$$\\mathbf{A} =\\left(\\begin{array}{ccc}3 & 2 & 1 \\\\3 & 5 & 3 \\\\3 & 5 & 6\\end{array}\\right)\\xrightarrow{R_2-R_1}\\xrightarrow{R_3-R_1}\\xrightarrow{R_3-R_2}\\left(\\begin{array}{ccc}3 & 2 & 1 \\\\0 & 3 & 2 \\\\0 & 0 & 3\\end{array}\\right)= \\mathbf{U}$$",
        "next": "First_default_8"
    },
    "First_default_8": {
        "type": "plain",
        "content": "The elementary matrices are as follows:<br>$$\\mathbf{E}_1: R_2-R_1, \\; \\mathbf{E}_2: R_3-R_1, \\; \\mathbf{E}_3: R_3-R_2$$<br>The inverse elementary matrices are as follows:<br>$$\\mathbf{E}_1^{-1}: R_2+R_1, \\; \\mathbf{E}_2^{-1}: R_3+R_1, \\; \\mathbf{E}_3^{-1}: R_3+R_2$$",
        "next": "First_default_9"
    },
    "First_default_9": {
        "type": "dialogue",
        "options": {
            "0": "We can sum up entries below the diagonal!",
            "1": "Each entry below the diagonal does not interfere with the rest."
        },
        "respondToIdx": {
            "0": "luYes",
            "1": "luYes"
        },
        "content": "$$\\begin{align*}\\mathbf{L}&=\\left(\\mathbf{E}_3\\mathbf{E}_2\\mathbf{E}_1\\right)^{-1}\\\\ &=\\mathbf{E}_1^{-1}\\mathbf{E}_2^{-1}\\mathbf{E}_3^{-1}\\\\ &=\\left(\\begin{array}{ccc}1 & 0 & 0 \\\\1 & 1 & 0 \\\\0 & 0 & 1\\end{array}\\right)\\left(\\begin{array}{ccc}1 & 0 & 0 \\\\0 & 1 & 0 \\\\1 & 0 & 1\\end{array}\\right)\\left(\\begin{array}{ccc}1 & 0 & 0 \\\\0 & 1 & 0 \\\\0 & 1 & 1\\end{array}\\right)\\\\ &=\\left(\\begin{array}{ccc}1 & 0 & 0 \\\\1 & 1 & 0 \\\\1 & 1 & 1\\end{array}\\right)\\end{align*}$$<br>Notice something?"
    },
    "luYes": {
        "type": "plain",
        "content": "Mhm, and it only works if we carried out the EROs in the order specified in section 1.4!<br>Don't believe me? Try shuffling the above matrices!",
        "next": "First_default_10"
    },
    "First_default_10": {
        "type": "plain",
        "content": "By observing the pattern, we can come up with a shortcut:<br>1. First, we initialize a matrix $\\mathbf{L} = \\mathbf{I_m}$, where $m$ is the row size of $\\mathbf{A}$.<br>2. Carry out the EROs to reduce $\\mathbf{A}$ to REF, which is strictly of type $R_i+cR_j$.<br>For each ERO, set the respective entry $(i,j)$ in $\\mathbf{L}$, $l_{ij} \\leftarrow -c$.<br>3. Once we have found $\\mathbf{U}$, we would also have computed $\\mathbf{L}$.",
        "next": "First_default_11"
    },
    "First_default_11": {
        "type": "tex",
        "important": true,
        "content": 
            "$$ \\textbf{\\Large LU Factorization} $$" +
            "A square matrix $\\mathbf{L}$ is a unit lower triangular matrix if $\\mathbf{L}$ is a lower triangular<br>" +
            "matrix with 1 in the diagonal entries.<br><br>" +
            "An LU factorization of a $m \\times n$ matrix $\\mathbf{A}$ is the decomposition:<br><br>" +
            "$$ \\mathbf{A} = \\mathbf{LU}, $$<br>" +
            "where:<br>" +
            "• $\\mathbf{L}$ is a unit lower triangular matrix, and<br>" +
            "• $\\mathbf{U}$ is a row-echelon form of $\\mathbf{A}$.<br><br>" +
            "If such LU factorization exists for $\\mathbf{A}$, we say that $\\mathbf{A}$ is LU factorizable.<br><br>" +
            "$$ \\textbf{Algorithm for LU Factorization} $$<br>" +
            "Suppose $\\mathbf{A} \\xrightarrow{r_1, r_2, \\ldots, r_k} \\mathbf{U}$, where each row operation $r_l$ is of the form $R_i + cR_j$<br>" +
            "for some $i, j$ and real number $c$, and $\\mathbf{U}$ is a row-echelon form of $\\mathbf{A}$.<br>" +
            "Let $\\mathbf{E}_l$ be the elementary matrix corresponding to $r_l$ for $l = 1, 2, \\ldots, k$.<br>" +
            "Then,<br>" +
            "$$ \\mathbf{E}_k \\ldots \\mathbf{E}_2 \\mathbf{E}_1 \\mathbf{A} = \\mathbf{U} \\implies \\mathbf{A} = \\mathbf{E}_1^{-1} \\mathbf{E}_2^{-1} \\ldots \\mathbf{E}_k^{-1} \\mathbf{U} = \\mathbf{LU} $$<br>" +
            "where $\\mathbf{L} = \\mathbf{E}_1^{-1} \\mathbf{E}_2^{-1} \\ldots \\mathbf{E}_k^{-1}$.<br><br>" +
            "We say that:<br>" +
            "$$ \\mathbf{A} = \\mathbf{LU} = " +
            "\\begin{pmatrix}" +
            "1 & 0 & \\cdots & 0 \\\\" +
            "\\ast & 1 & \\cdots & 0 \\\\" +
            "\\vdots & \\vdots & \\ddots & \\vdots \\\\" +
            "\\ast & \\ast & \\cdots & 1" +
            "\\end{pmatrix}" +
            "\\left(" +
            "\\begin{array}{ccccccc}" +
            "\\ast & \\cdots & \\ast & \\ast & \\cdots & \\ast \\\\" +
            "0 & \\cdots & 0 & \\ast & \\cdots & \\ast \\\\" +
            "\\vdots & & \\vdots & \\vdots & & \\vdots \\\\" +
            "0 & \\cdots & 0 & 0 & \\cdots & 0" +
            "\\end{array}" +
            "\\right) $$<br>" +
            "is an LU factorization of $\\mathbf{A}$.",
        "next": "LU_default_1",
        previewText: "Definition: LU Factorization",
        previewImage: "images/lu_fac.png"
    },
    "LU_default_1": {
        "type": "dialogue",
        "options": {
            "0": "It computes (cooks) faster that way"
        },
        "respondToIdx": {
            "0": "LU_default_2"
        },
        "content": "Now that we've learnt to find the LU factorization, why do we apply it?<br>(hint: why do we cut ingredients before cooking them?)"
    },
    "LU_default_2": {
        "type": "single-mcq",
        "content": "You just <em>cooked</em> with that response!<br>From a computational standpoint, Gaussian Elimination takes $O(n^3)$ time,<br>and the remaining steps in Gauss-Jordan Elimination takes $O(n^2)$ time.<br>With the methods we've learnt, how much time does it take to solve the system $\\mathbf{Ax=b}$?",
        options: {
            0: "$O(n)$",
            1: "$O(n^2)$",
            2: "$O(n^3)$"
        },
        answersIdx: [2],
        "next": "LU_default_3"
    },
    "LU_default_3": {
        "type": "mcq",
        "options": {
            "0": "Factorization Technique: LU Factorization!",
            "1": "Reverse Technique: Find $\\mathbf{A}^{-1}$!"
        },
        "answersIdx": [
            0,
            1
        ],
        "content": "When solving a system for the first time, we cannot avoid $O(n^3)$ time. However, we can do precomputation to solve similar systems in the future.<br>Who knows, what if we suddenly have a different $\\mathbf{b}_i$ and want to solve for the corresponding $\\mathbf{x}_i$ in $O(n^2)$ time?",
        "next": "gordon_sukuna"
    },
    "gordon_sukuna": {
        "type": "image",
        "content": "images/cooked.png",
        "next": "LU_default_4"
    },
    "LU_default_4": {
        "type": "plain",
        "content": "YASS!! Keep on cooking 🔥🔥🔥<br>But... why does it work though.",
        "next": "LU_default_5"
    },
    "LU_default_5": {
        "type": "dialogue",
        "options": {
            "0": "Recover $\\mathbf{A}$ from $\\mathbf{LU}$",
            "1": "Solve $\\mathbf{L}(\\mathbf{Ux})=\\mathbf{b}$"
        },
        "respondToIdx": {
            "0": "nope",
            "1": "yas"
        },
        "content": "Let's see how we can use LU factorization to speed things up.<br>Instead of $\\mathbf{A}$, we have $\\mathbf{LUx=b}$.<br>What should we do now?"
    },
    "nope": {
        "type": "plain",
        "content": "That goes against our intentions!",
        "next": "yas"
    },
    "yas": {
        "type": "plain",
        "content": "We first use substitution $\\mathbf{Ux=y}$, then solve for $\\mathbf{y}$ in $\\mathbf{Ly=b}$.<br>This is very similar to the $O(n^2)$ step in Gauss-Jordan Elimination, only with the rows in reverse order.<br>As a result, this takes $O(n^2)$ time.",
        "next": "LU_default_6"
    },
    "LU_default_6": {
        "type": "plain",
        "content": "Then, we solve for $\\mathbf{x}$ in $\\mathbf{Ux=y}$. This is exactly the same as the $O(n^2)$ step in Gauss-Jordan Elimination.<br>The entire process takes only $O(n^2+n^2)=O(n^2)$ time!",
        "next": "LU_default_7"
    },
    "LU_default_7": {
        "type": "plain",
        "content": "Wow, that has been a looooong discussion. I don't want to elaborate any further, so you can leave the rest to the Tele chat. See ya... 😴😴😴",
        systemMessage: "🎉Congratulations! You have reached the end of Interactive 2.4 (Side B)!🎉"
    }
};

const compulsoryMessages = [
    "Elementary_default_6",
    "Finding_default_9",
    "First_default_11"
];

const checkpoints = [
    {
        "label": "Elementary (School?) Matrices",
        "showCompulsoryMessages": 0,
        "id": "Elementary_default_1"
    },
    {
        "label": "Reverse Technique: Matrix Inverse",
        "showCompulsoryMessages": 1,
        "id": "Finding_default_1"
    },
    {
        "label": "Factorization Technique: LU Factorization",
        "showCompulsoryMessages": 2,
        "id": "First_default_1"
    },
    {
        "label": "Factorization: Cleave and Dismantle!",
        "showCompulsoryMessages": 3,
        "id": "LU_default_1"
    }
];