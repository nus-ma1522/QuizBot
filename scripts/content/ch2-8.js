const dialogueSystem = {
    "Checkpoint1_default_1": {
        "type": "plain",
        "content": "Now that we have learnt all the FUN things about inverse matrices and LU factorisation, let's move on to <b>determinants</b>!!<br><br>Before diving into formulas, let's try to understand what a determinant actually means.",
        "next": "Checkpoint1_default_2"
    },
    "Checkpoint1_default_2": {
        "type": "plain",
        "content": "Think of the determinant as a single number that you can calculate from a square matrix. This one number gives you a ton of secret information about the matrix itself! It's like a magic summary.<br><br>So, what secrets does it reveal? As we go on, we'll discover exactly what the determinant can tell us!",
        "next": "Checkpoint1_default_3"
    },
    "Checkpoint1_default_3": {
        "type": "plain",
        "content": "In this chapter, we will take a look at the first of 2 ways to calculate a discriminant:<br><br><b>1. Determinant by Cofactor Expansion</b> 2. Determinant by Reduction<br><br>Let's take a look at the first one, calculating the Determinant by Cofactor Expansion!!",
        "next": "Checkpoint1_default_4"
    },
    "Checkpoint1_default_4": {
        "type": "plain",
        "content": "Let's start off with the easiest case!<br><br>If $n = 1$, then the determinant of a $1 \\times 1$ matrix $\\mathbf{A} = (a)$ is simply defined as:<br>$$\\det(\\mathbf{A}) = a$$",
        "next": "Checkpoint1_default_5"
    },
    "Checkpoint1_default_5": {
        "type": "mcq",
        "options": {
            "0": "$\\det(\\mathbf{A}) = 1$",
            "1": "$\\det(\\mathbf{A}) = 0$",
            "2": "Can't be determined!"
        },
        "answersIdx": [
            0
        ],
        "content": "Using the above definition, what is the determinant of this $1 \\times 1$ matrix $$\\mathbf{A} = (1)$$",
        "next": "Checkpoint1_default_6"
    },
    "Checkpoint1_default_6": {
        "type": "plain",
        "content": "The determinant is just the number inside, which is $1$!",
        "next": "Checkpoint1_default_7"
    },
    "Checkpoint1_default_7": {
        "type": "plain",
        "content": "So what happens if $n > 1$? Now it's not so simple right?<br><br>Mathematicians came up with <b>cofactor expansion</b> and we will be using it to calculate our determinant!",
        "next": "Checkpoint1_default_8"
    },
    "Checkpoint1_default_8": {
        "type": "tex",
        "important": true,
        "content": "The determinant of $\\mathbf{A}$ for an order $n$ square matrix is defined to be<br>$$\\begin{align}\\det(\\mathbf{A})&=a_{i1}A_{i1}+a_{i2}A_{i2}+\\cdots+a_{in}A_{in}=\\sum_{k=1}^na_{ik}A_{ik}\\quad \\quad \\\\&=a_{1j}A_{1j}+a_{2j}A_{2j}+\\cdots+a_{nj}A_{nj}=\\sum_{k=1}^na_{kj}A_{kj}\\quad \\quad\\end{align}$$where<br>$$A_{ij}=(-1)^{i+j}\\det(\\mathbf{M}_{ij})$$<br>is the $(i,j)$ cofactor of $\\mathbf{A}$, and $\\mathbf{M}_{ij}$, the $(i,j)$ matrix minor of $\\mathbf{A}$, obtained from $\\mathbf{A}$ by deleting the $i$-th row and $j$-th column.<br><br>This is called the cofactor expansion along<br><br>$$\\begin{cases}\\text{row } i & (1) \\\\[6pt]\\text{column } j & (2)\\end{cases}$$",
        "next": "start-branch"
    },
    "start-branch": {
        "type": "dialogue",
        "options": {
            "0": "First row ($R_1$)",
            "1": "Second row ($R_2$)",
            "2": "First column ($C_1$)",
            "3": "Second column ($C_2$)"
        },
        "respondToIdx": {
            "0": "expand_r1_1",
            "1": "expand_r2_1",
            "2": "expand_c1_1",
            "3": "expand_c2_1"
        },
        "content": "OK, LET'S STOP HERE! All these math notations are making me DIZZY 😵‍💫😵‍💫!<br><br>Let's go through what the above is saying with an example:<br>$$\\mathbf{A} = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$$Pick any row or column to expand along. Feel free to pick whichever you like, no right or wrong answers!"
    },
    "expand_r1_1": {
        "type": "plain",
        "content": "Expanding along the <b>first row</b>:<br><br>Going from left to right of $R_1$, we first focus on the entry $a$ at position $(1,1)$.",
        "next": "expand_r1_2"
    },
    "expand_r1_2": {
        "type": "mcq",
        "options": {
            "0": "$(a)$",
            "1": "$(b)$",
            "2": "$(c)$",
            "3": "$(d)$"
        },
        "answersIdx": [
            3
        ],
        "content": "<b>Step 1:</b> Find the $(1, 1)$ matrix minor of $\\mathbf{A}$.$$\\begin{pmatrix}a & b \\\\c & d\\end{pmatrix}\\quad\\text{Remove row 1, Remove column 1}$$Since we are finding the matrix minor at $(1, 1)$, we remove row 1 and column 1. The remaining elements form a 'sub-matrix', which is the <b>matrix minor</b>! What is the resulting matrix?",
        "next": "expand_r1_3"
    },
    "expand_r1_3": {
        "type": "plain",
        "content": "After removing $R_1$ and $C_1$, all that's left is $d$! So the matrix minor will be $(d)$!",
        "next": "expand_r1_4"
    },
    "expand_r1_4": {
        "type": "mcq",
        "options": {
            "0": "$a$",
            "1": "$b$",
            "2": "$c$",
            "3": "$d$"
        },
        "answersIdx": [
            3
        ],
        "content": "<b>Step 2:</b> Find the determinant of the matrix minor above.",
        "next": "expand_r1_5"
    },
    "expand_r1_5": {
        "type": "plain",
        "content": "Determinant of matrix minor $(d)$ is just the entry inside. Hence, $\\det((d)) = d$.",
        "next": "expand_r1_6"
    },
    "expand_r1_6": {
        "type": "mcq",
        "options": {
            "0": "$d$",
            "1": "$-d$",
            "2": "$c$",
            "3": "$-c$"
        },
        "answersIdx": [
            0
        ],
        "content": "<b>Step 3:</b> Find cofactor $A_{11}$ by applying appropriate signs to the determinant you found above.<br><br>Here's a visualization of how the signs should be assigned in a $2 \\times 2$ matrix:<br>$$\\begin{pmatrix} {+} & {-} \\\\ {-} & {+} \\\\ \\end{pmatrix}$$<br>As you can tell, it follows a checkerboard pattern!<br>So what is the cofactor $A_{11}$?<br><br><em>Hint: Apply the sign at $(1, 1)$</em>",
        "next": "expand_r1_7"
    },
    "expand_r1_7": {
        "type": "plain",
        "content": "We simply apply the $+$ sign at $(1, 1)$ to $d$, which still gives me $d$.",
        "next": "expand_r1_8"
    },
    "expand_r1_8": {
        "type": "mcq",
        "options": {
            "0": "$-ad$",
            "1": "$ad$",
            "2": "$ac$",
            "3": "$-ac$"
        },
        "answersIdx": [
            1
        ],
        "content": "<b>Step 4:</b> Multiply the cofactor $A_{11}$ that you found above by $a_{11}$, the entry that we are 'operating on'.",
        "next": "expand_r1_9"
    },
    "expand_r1_9": {
        "type": "plain",
        "content": "We have found that:<br>$$\\begin{align*}a_{11} = a \\\\ A_{11} = d\\end{align*}$$Therefore, $a_{11} A_{11} = ad$.",
        "next": "expand_r1_10"
    },
    "expand_r1_10": {
        "type": "plain",
        "content": "Now that we are done with $a_{11}$, let’s move to the next entry in $R_1$: $a_{12}$.",
        "next": "expand_r1_11"
    },
    "expand_r1_11": {
        "type": "mcq",
        "options": {
            "0": "$-bc$",
            "1": "$bc$",
            "2": "$-bd$",
            "3": "$bd$"
        },
        "answersIdx": [
            0
        ],
        "content": "Now repeat steps 1-4, what is the value of $a_{12} A_{12}$?<br>$$\\mathbf{A} = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$$",
        "next": "expand_r1_12"
    },
    "expand_r1_12": {
        "type": "plain",
        "content": "Let's run through the steps quickly!<br><br><b>Step 1:</b> $(1, 2)$ matrix minor of $\\mathbf{A}$: $(c)$ (Remove Row 1 and Column 2)<br><b>Step 2:</b> $\\det((c)) = c$<br><b>Step 3:</b> $A_{12} = -c$ (Applying checkerboard of signs)<br><b>Step 4:</b> $a_{12} A_{12} = -bc$",
        "next": "expand_r1_13"
    },
    "expand_r1_13": {
        "type": "mcq",
        "options": {
            "0": "$ab - cd$",
            "1": "$ad + bc$",
            "2": "$ac - bd$",
            "3": "$ad - bc$"
        },
        "answersIdx": [
            3
        ],
        "content": "Now that we have found:<br>$$\\begin{align*}a_{11} A_{11} &= ad \\\\a_{12} A_{12} &= -bc\\end{align*}$$Finally, what cofactor expansion says is that $\\det(\\mathbf{A}) =$ <b>Sum of products between each entry and its cofactor along a row or column</b>.<br><br>In this case (Expanding along $R_1$): $\\det(\\mathbf{A}) =a_{11} A_{11} + a_{12} A_{12}$.<br>$$\\det(\\mathbf{A}) = \\space??$$",
        "next": "expand_r1_14"
    },
    "expand_r1_14": {
        "type": "plain",
        "content": "Scroll up and recap how to find $a_{11} A_{11}$ and $a_{12} A_{12}$ if you are unsure.",
        "next": "expand_r1_15"
    },
    "expand_r1_15": {
        "type": "dialogue",
        "options": {
            "0": "I don't believe!! Let me start again by choosing another row/column",
            "1": "I TOTALLY believe you! Let's continue..."
        },
        "respondToIdx": {
            "0": "start-branch",
            "1": "end-branch"
        },
        "content": "Remember how I asked you to choose <strong>ANY</strong> row or column to do cofactor expansion along? The beauty of cofactor expansion is that regardless of the row or column you pick, the determinant that you get will <b>ALWAYS</b> be the same! 😲"
    },
    "expand_r2_1": {
        "type": "plain",
        "content": "Expanding along the <b>second row</b>:<br><br>Going from left to right of $R_2$, we first focus on the entry $c$ at position $(2,1)$.",
        "next": "expand_r2_2"
    },
    "expand_r2_2": {
        "type": "mcq",
        "options": {
            "0": "$(a)$",
            "1": "$(c)$",
            "2": "$(d)$",
            "3": "$(b)$"
        },
        "answersIdx": [
            3
        ],
        "content": "<b>Step 1:</b> Find the $(2, 1)$ matrix minor of $\\mathbf{A}$.<br>$$\\begin{pmatrix}a & b \\\\c & d\\end{pmatrix}\\quad\\text{Remove row 2, Remove column 1}$$Since we are finding the matrix minor at $(2, 1)$, we remove row 2 and column 1. The remaining elements form a 'sub-matrix', which is the <b>matrix minor</b>! What is the resulting matrix?",
        "next": "expand_r2_3"
    },
    "expand_r2_3": {
        "type": "plain",
        "content": "After removing $R_2$ and $C_1$, all that's left is $b$! So the matrix minor will be $(b)$!",
        "next": "expand_r2_4"
    },
    "expand_r2_4": {
        "type": "mcq",
        "options": {
            "0": "$a$",
            "1": "$c$",
            "2": "$d$",
            "3": "$b$"
        },
        "answersIdx": [
            3
        ],
        "content": "<b>Step 2:</b> Find the determinant of the matrix minor above.",
        "next": "expand_r2_5"
    },
    "expand_r2_5": {
        "type": "plain",
        "content": "Determinant of matrix minor $(b)$ is just the entry inside. Hence, $\\det((b)) = b$.",
        "next": "expand_r2_6"
    },
    "expand_r2_6": {
        "type": "mcq",
        "options": {
            "0": "$b$",
            "1": "$-b$",
            "2": "$c$",
            "3": "$-c$"
        },
        "answersIdx": [
            1
        ],
        "content": "<b>Step 3:</b> Find cofactor $A_{21}$ by applying appropriate signs to the determinant you found above.<br><br>Here's a visualization of how the signs should be assigned in a $2 \\times 2$ matrix:<br>$$\\begin{pmatrix} {+} & {-} \\\\ {-} & {+} \\\\ \\end{pmatrix}$$<br>As you can tell, it follows a checkerboard pattern!<br>So what is the cofactor $A_{21}$?<br><br><em>Hint: Apply the sign at $(2, 1)$</em>",
        "next": "expand_r2_7"
    },
    "expand_r2_7": {
        "type": "plain",
        "content": "We simply apply the $-$ sign at $(2, 1)$ to $b$, which gives me $-b$.",
        "next": "expand_r2_8"
    },
    "expand_r2_8": {
        "type": "mcq",
        "options": {
            "0": "$bc$",
            "1": "$-bc$",
            "2": "$cd$",
            "3": "$-cd$"
        },
        "answersIdx": [
            1
        ],
        "content": "<b>Step 4:</b> Multiply the cofactor $A_{21}$ that you found above by $a_{21}$, the entry that we are 'operating on'.",
        "next": "expand_r2_9"
    },
    "expand_r2_9": {
        "type": "plain",
        "content": "We have found that:<br>$$\\begin{align*}a_{21} = c \\\\ A_{21} = -b\\end{align*}$$Therefore, $a_{21} A_{21} = -bc$.",
        "next": "expand_r2_10"
    },
    "expand_r2_10": {
        "type": "plain",
        "content": "Now that we are done with $a_{21}$, let’s move to the next entry in $R_2$:",
        "next": "expand_r2_11"
    },
    "expand_r2_11": {
        "type": "mcq",
        "options": {
            "0": "$ad$",
            "1": "$-ad$",
            "2": "$-bc$",
            "3": "$bc$"
        },
        "answersIdx": [
            0
        ],
        "content": "Now repeat steps 1-4, what is the value of $a_{22} A_{22}$?<br>$$\\mathbf{A} = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$$",
        "next": "expand_r2_12"
    },
    "expand_r2_12": {
        "type": "plain",
        "content": "Let's run through the steps quickly!<br><br><b>Step 1:</b> $(2, 2)$ matrix minor of $\\mathbf{A} = (a)$ (Remove Row 2 and Column 2)<br><b>Step 2:</b> $\\det((a)) = a$<br><b>Step 3:</b> $A_{22} = a$ (Applying checkerboard of signs)<br><b>Step 4:</b> $a_{22} A_{22} = ad$",
        "next": "expand_r2_13"
    },
    "expand_r2_13": {
        "type": "mcq",
        "options": {
            "0": "$ab - cd$",
            "1": "$ad + bc$",
            "2": "$ac - bd$",
            "3": "$ad - bc$"
        },
        "answersIdx": [
            3
        ],
        "content": "Now that we have found:<br>$$\\begin{align*}a_{21} A_{21} &= -bc \\\\a_{22} A_{22} &= ad\\end{align*}$$Finally, what cofactor expansion says is that $\\det(\\mathbf{A}) =$ <b>Sum of each entry in a chosen row or column multiplied by its cofactor</b>.<br><br>In this case (Expanding along $R_2$): $\\det(\\mathbf{A}) =a_{21} A_{21} + a_{22} A_{22}$.<br>$$\\det(\\mathbf{A}) = \\space??$$",
        "next": "expand_r2_14"
    },
    "expand_r2_14": {
        "type": "plain",
        "content": "Scroll up and recap how to find $a_{21} A_{21}$ and $a_{22} A_{22}$ if you are unsure.",
        "next": "expand_r2_15"
    },
    "expand_r2_15": {
        "type": "dialogue",
        "options": {
            "0": "I don't believe!! Let me start again by choosing another row/column",
            "1": "I TOTALLY believe you! Let's continue..."
        },
        "respondToIdx": {
            "0": "start-branch",
            "1": "end-branch"
        },
        "content": "Remember how I asked you to choose <strong>ANY</strong> row or column to do cofactor expansion along? The beauty of cofactor expansion is that regardless of the row or column you pick, the determinant that you get will <b>ALWAYS</b> be the same! 😲"
    },
    "expand_c1_1": {
        "type": "plain",
        "content": "Expanding along the <b>first column</b>:<br><br>Going from top to bottom of $C_1$, we first focus on the entry $a$ at position $(1,1)$.",
        "next": "expand_c1_2"
    },
    "expand_c1_2": {
        "type": "mcq",
        "options": {
            "0": "$(a)$",
            "1": "$(b)$",
            "2": "$(c)$",
            "3": "$(d)$"
        },
        "answersIdx": [
            3
        ],
        "content": "<b>Step 1:</b> Find the $(1, 1)$ matrix minor of $\\mathbf{A}$.$$\\begin{pmatrix}a & b \\\\c & d\\end{pmatrix}\\quad\\text{Remove row 1, Remove column 1}$$Since we are finding the matrix minor at $(1, 1)$, we remove row 1 and column 1. The remaining elements form a 'sub-matrix', which is the <b>matrix minor</b>! What is the resulting matrix?",
        "next": "expand_c1_3"
    },
    "expand_c1_3": {
        "type": "plain",
        "content": "After removing $R_1$ and $C_1$, all that's left is $d$! So the matrix minor will be $(d)$!",
        "next": "expand_c1_4"
    },
    "expand_c1_4": {
        "type": "mcq",
        "options": {
            "0": "$a$",
            "1": "$b$",
            "2": "$c$",
            "3": "$d$"
        },
        "answersIdx": [
            3
        ],
        "content": "<b>Step 2:</b> Find the determinant of the matrix minor above.",
        "next": "expand_c1_5"
    },
    "expand_c1_5": {
        "type": "plain",
        "content": "Determinant of matrix minor $(d)$ is just the entry inside. Hence, $\\det((d)) = d$.",
        "next": "expand_c1_6"
    },
    "expand_c1_6": {
        "type": "mcq",
        "options": {
            "0": "$d$",
            "1": "$-d$",
            "2": "$c$",
            "3": "$-c$"
        },
        "answersIdx": [
            0
        ],
        "content": "<b>Step 3:</b> Find cofactor $A_{11}$ by applying appropriate signs to the determinant you found above.<br><br>Here's a visualization of how the signs should be assigned in a $2 \\times 2$ matrix:<br>$$\\begin{pmatrix} {+} & {-} \\\\ {-} & {+} \\\\ \\end{pmatrix}$$<br>As you can tell, it follows a checkerboard pattern!<br>So what is the cofactor $A_{11}$?<br><br><em>Hint: Apply the sign at $(1, 1)$</em>",
        "next": "expand_c1_7"
    },
    "expand_c1_7": {
        "type": "plain",
        "content": "We simply apply the $+$ sign at $(1, 1)$ to $d$, which still gives me $d$.",
        "next": "expand_c1_8"
    },
    "expand_c1_8": {
        "type": "mcq",
        "options": {
            "0": "$-ad$",
            "1": "$ad$",
            "2": "$ac$",
            "3": "$-ac$"
        },
        "answersIdx": [
            1
        ],
        "content": "<b>Step 4:</b> Multiply the cofactor $A_{11}$ that you found above by $a_{11}$, the entry that we are 'operating on'.",
        "next": "expand_c1_9"
    },
    "expand_c1_9": {
        "type": "plain",
        "content": "We have found that:<br>$$\\begin{align*}a_{11} = a \\\\ A_{11} = d\\end{align*}$$Therefore, $a_{11} A_{11} = ad$.",
        "next": "expand_c1_10"
    },
    "expand_c1_10": {
        "type": "plain",
        "content": "Now that we are done with $a_{11}$, let’s move to the next entry in $C_1$: $a_{21}$.",
        "next": "expand_c1_11"
    },
    "expand_c1_11": {
        "type": "mcq",
        "options": {
            "0": "$-bc$",
            "1": "$bc$",
            "2": "$-bd$",
            "3": "$bd$"
        },
        "answersIdx": [
            0
        ],
        "content": "Now repeat steps 1-4, what is the value of $a_{21} A_{21}$?<br>$$\\mathbf{A} = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$$",
        "next": "expand_c1_12"
    },
    "expand_c1_12": {
        "type": "plain",
        "content": "Let's run through the steps quickly!<br><br><b>Step 1:</b> $(2, 1)$ matrix minor of $\\mathbf{A} = (b)$ (Remove Row 2 and Column 1)<br><b>Step 2:</b> $\\det((b)) = b$<br><b>Step 3:</b> $A_{21} = -b$ (Applying checkerboard of signs)<br><b>Step 4:</b> $a_{21} A_{21} = -bc$",
        "next": "expand_c1_13"
    },
    "expand_c1_13": {
        "type": "mcq",
        "options": {
            "0": "$ab - cd$",
            "1": "$ad + bc$",
            "2": "$ac - bd$",
            "3": "$ad - bc$"
        },
        "answersIdx": [
            3
        ],
        "content": "Now that we have found:<br>$$\\begin{align*}a_{11} A_{11} &= ad \\\\a_{21} A_{21} &= -bc\\end{align*}$$Finally, what cofactor expansion says is that $\\det(\\mathbf{A}) =$ <b>Sum of products between each entry and its cofactor along a row or column</b>.<br><br>In this case (Expanding along $C_1$): $\\det(\\mathbf{A}) =a_{11} A_{11} + a_{21} A_{21}$.<br>$$\\det(\\mathbf{A}) = \\space??$$",
        "next": "expand_c1_14"
    },
    "expand_c1_14": {
        "type": "plain",
        "content": "Scroll up and recap how to find $a_{11} A_{11}$ and $a_{21} A_{21}$ if you are unsure.",
        "next": "expand_c1_15"
    },
    "expand_c1_15": {
        "type": "dialogue",
        "options": {
            "0": "I don't believe!! Let me start again by choosing another row/column",
            "1": "I TOTALLY believe you! Let's continue..."
        },
        "respondToIdx": {
            "0": "start-branch",
            "1": "end-branch"
        },
        "content": "Remember how I asked you to choose <strong>ANY</strong> row or column to do cofactor expansion along? The beauty of cofactor expansion is that regardless of the row or column you pick, the determinant that you get will <b>ALWAYS</b> be the same! 😲"
    },
    "expand_c2_1": {
        "type": "plain",
        "content": "Expanding along the <b>second column</b>:<br><br>Going from top to bottom of $C_2$, we first focus on the entry $b$ at position $(1,2)$.",
        "next": "expand_c2_2"
    },
    "expand_c2_2": {
        "type": "mcq",
        "options": {
            "0": "$(a)$",
            "1": "$(b)$",
            "2": "$(d)$",
            "3": "$(c)$"
        },
        "answersIdx": [
            3
        ],
        "content": "<b>Step 1:</b> Find the $(1, 2)$ matrix minor of $\\mathbf{A}$.<br>$$\\begin{pmatrix}a & b \\\\c & d\\end{pmatrix}\\quad\\text{Remove row 1, Remove column 2}$$Since we are finding the matrix minor at $(1, 2)$, we remove row 1 and column 2. The remaining elements form a 'sub-matrix', which is the <b>matrix minor</b>! What is the resulting matrix?",
        "next": "expand_c2_3"
    },
    "expand_c2_3": {
        "type": "plain",
        "content": "After removing $R_1$ and $C_2$, all that's left is $c$! So the matrix minor will be $(c)$!",
        "next": "expand_c2_4"
    },
    "expand_c2_4": {
        "type": "mcq",
        "options": {
            "0": "$a$",
            "1": "$b$",
            "2": "$d$",
            "3": "$c$"
        },
        "answersIdx": [
            3
        ],
        "content": "<b>Step 2:</b> Find the determinant of the matrix minor above.",
        "next": "expand_c2_5"
    },
    "expand_c2_5": {
        "type": "plain",
        "content": "Determinant of matrix minor $(c)$ is just the entry inside. Hence, $\\det((c)) = c$.",
        "next": "expand_c2_6"
    },
    "expand_c2_6": {
        "type": "mcq",
        "options": {
            "0": "$c$",
            "1": "$-c$",
            "2": "$d$",
            "3": "$-d$"
        },
        "answersIdx": [
            1
        ],
        "content": "<b>Step 3:</b> Find cofactor $A_{12}$ by applying appropriate signs to the determinant you found above.<br><br>Here's a visualization of how the signs should be assigned in a $2 \\times 2$ matrix:<br>$$\\begin{pmatrix} {+} & {-} \\\\ {-} & {+} \\\\ \\end{pmatrix}$$<br>As you can tell, it follows a checkerboard pattern!<br>So what is the cofactor $A_{12}$?<br><br><em>Hint: Apply the sign at $(1, 2)$</em>",
        "next": "expand_c2_7"
    },
    "expand_c2_7": {
        "type": "plain",
        "content": "We simply apply the $-$ sign at $(1, 2)$ to $c$, which gives me $-c$.",
        "next": "expand_c2_8"
    },
    "expand_c2_8": {
        "type": "mcq",
        "options": {
            "0": "$bc$",
            "1": "$-bc$",
            "2": "$cd$",
            "3": "$-cd$"
        },
        "answersIdx": [
            1
        ],
        "content": "<b>Step 4:</b> Multiply the cofactor $A_{12}$ that you found above by $a_{12}$, the entry that we are 'operating on'.",
        "next": "expand_c2_9"
    },
    "expand_c2_9": {
        "type": "plain",
        "content": "We have found that:<br>$$\\begin{align*}a_{12} = b \\\\ A_{12} = -c\\end{align*}$$Therefore, $a_{12} A_{12} = -bc$.",
        "next": "expand_c2_10"
    },
    "expand_c2_10": {
        "type": "plain",
        "content": "Now that we are done with $a_{12}$, let’s move to the next entry in $C_2$: $a_{22}$.",
        "next": "expand_c2_11"
    },
    "expand_c2_11": {
        "type": "mcq",
        "options": {
            "0": "$ad$",
            "1": "$-ad$",
            "2": "$-bc$",
            "3": "$bc$"
        },
        "answersIdx": [
            0
        ],
        "content": "Now repeat steps 1-4, what is the value of $a_{22} A_{22}$?<br>$$\\mathbf{A} = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$$",
        "next": "expand_c2_12"
    },
    "expand_c2_12": {
        "type": "plain",
        "content": "Let's run through the steps quickly!<br><br><b>Step 1:</b> $(2, 2)$ matrix minor of $\\mathbf{A} = (a)$ (Remove Row 2 and Column 2)<br><b>Step 2:</b> $\\det((a)) = a$<br><b>Step 3:</b> $A_{22} = a$ (Applying checkerboard of signs)<br><b>Step 4:</b> $a_{22} A_{22} = ad$",
        "next": "expand_c2_13"
    },
    "expand_c2_13": {
        "type": "mcq",
        "options": {
            "0": "$ab - cd$",
            "1": "$ad + bc$",
            "2": "$ac - bd$",
            "3": "$ad - bc$"
        },
        "answersIdx": [
            3
        ],
        "content": "Now that we have found:<br>$$\\begin{align*}a_{12} A_{12} &= -bc \\\\a_{22} A_{22} &= ad\\end{align*}$$Finally, what cofactor expansion says is that $\\det(\\mathbf{A}) =$ <b>Sum of products between each entry and its cofactor along a row or column</b>.<br><br>In this case (Expanding along $C_2$): $\\det(\\mathbf{A}) =a_{12} A_{12} + a_{22} A_{22}$.<br>$$\\det(\\mathbf{A}) = \\space??$$",
        "next": "expand_c2_14"
    },
    "expand_c2_14": {
        "type": "plain",
        "content": "Scroll up and recap how to find $a_{12} A_{12}$ and $a_{22} A_{22}$ if you are unsure.",
        "next": "expand_c2_15"
    },
    "expand_c2_15": {
        "type": "dialogue",
        "options": {
            "0": "I don't believe!! Let me start again by choosing another row/column",
            "1": "I TOTALLY believe you! Let's continue..."
        },
        "respondToIdx": {
            "0": "start-branch",
            "1": "end-branch"
        },
        "content": "Remember how I asked you to choose <strong>ANY</strong> row or column to do cofactor expansion along? The beauty of cofactor expansion is that regardless of the row or column you pick, the determinant that you get will <b>ALWAYS</b> be the same! 😲"
    },
    "end-branch": {
        "type": "plain",
        "content": "Therefore, we can conclude that for a $2 \\times 2$ matrix $$\\mathbf{A} = \\begin{pmatrix}a&b \\\\ c&d\\end{pmatrix},\\space\\space \\det(\\mathbf{A}) = ad - bc$$You see how we can derive the determinant for a $2 \\times 2$ matrix with <b>Cofactor Expansion</b>! But I recommend that you just memorise this result for convenience!",
        "next": "Checkpoint1_default_9"
    },
    "Checkpoint1_default_9": {
        "type": "plain",
        "content": "We saw how cofactor expansion works on a $2 \\times 2$ matrix. What about a  matrix with size $n > 2$?",
        "next": "Checkpoint1_default_10"
    },
    "Checkpoint1_default_10": {
        "type": "plain",
        "content": "The procedure remains <b>exactly the same</b>, just more numbers to calculate now!!<br>Let's try it with an example!<br>$$\\mathbf{A} = \\begin{pmatrix} 1 & 2 & 0 \\\\ 0 & 3 & 4 \\\\ 5 & 0 & 6 \\end{pmatrix}$$ You can choose any row/column but for this exercise, but let's just expand along R1!",
        "next": "Checkpoint1_default_11"
    },
    "Checkpoint1_default_11": {
        "type": "mcq",
        "options": {
            "0": "$\\begin{pmatrix}0 & 4 \\\\ 5 & 6\\end{pmatrix}$",
            "1": "$\\begin{pmatrix}0 & 3 \\\\ 5 & 0\\end{pmatrix}$",
            "2": "$\\begin{pmatrix}3 & 4 \\\\ 0 & 6\\end{pmatrix}$",
            "3": "$\\begin{pmatrix}2 & 0 \\\\ 0 & 6\\end{pmatrix}$"
        },
        "answersIdx": [
            2
        ],
        "content": "<b>Step 1:</b> Starting from the first entry $A_{11}$, find the $(1,1)$ matrix minor of $\\mathbf{A}$.<br><em>Hint: Remove row 1, column 1</em>",
        "next": "Checkpoint1_default_12"
    },
    "Checkpoint1_default_12": {
        "type": "mcq",
        "options": {
            "0": "$18$",
            "1": "$-18$",
            "2": "$12$",
            "3": "$-12$"
        },
        "answersIdx": [
            0
        ],
        "content": "<b>Step 2:</b> Find the cofactor $A_{11}$.<br>Checkerboard:<br>$$\\begin{pmatrix} {+} & {-} & {+} \\\\ {-} & {+} & {-} \\\\ {+} & {-} & {+} \\end{pmatrix}$$",
        "next": "Checkpoint1_default_13"
    },
    "Checkpoint1_default_13": {
        "type": "plain",
        "content": "$\\left| \\begin{matrix} 3 & 4 \\\\ 0 & 6 \\end{matrix} \\right| = 18$<br>Applying the $+$ sign: $A_{11} = 18$",
        "next": "Checkpoint1_default_14"
    },
    "Checkpoint1_default_14": {
        "type": "mcq",
        "options": {
            "0": "$-18$",
            "1": "$10$",
            "2": "$5$",
            "3": "$18$"
        },
        "answersIdx": [
            3
        ],
        "content": "What is $a_{11}A_{11} =$ ?",
        "next": "Checkpoint1_default_15"
    },
    "Checkpoint1_default_15": {
        "type": "plain",
        "content": "Entry $a_{11} = 1$<br>Cofactor $A_{11} = 18$<br>$a_{11}A_{11} = 18$",
        "next": "Checkpoint1_default_16"
    },
    "Checkpoint1_default_16": {
        "type": "mcq",
        "options": {
            "0": "$18$",
            "1": "$40$",
            "2": "$58$",
            "3": "$-58$"
        },
        "answersIdx": [
            2
        ],
        "content": "Continue the procedure for the rest of the entries in $R_1$ by yourself.<br>What is $\\det(\\mathbf{A}) =$ ?<br>$$\\mathbf{A} = \\begin{pmatrix} 1 & 2 & 0 \\\\ 0 & 3 & 4 \\\\ 5 & 0 & 6 \\end{pmatrix}$$",
        "next": "Checkpoint1_default_17"
    },
    "Checkpoint1_default_17": {
        "type": "plain",
        "content": "$\\det(\\mathbf{A}) = 1\\left| \\begin{matrix} 3 & 4 \\\\ 0 & 6 \\end{matrix}\\right|$ $- \\space2\\left| \\begin{matrix} 0 & 4 \\\\ 5 & 6 \\end{matrix} \\right|$ $+ \\space0\\left| \\begin{matrix} 0 & 3 \\\\ 5 & 0 \\end{matrix} \\right| = 58$<br>In case you are wondering, the determinant of $2\\times2$ matrix can be quickly calculated with what we found earlier: $ad-bc$",
        "next": "Checkpoint1_default_18"
    },
    "Checkpoint1_default_18": {
        "type": "mcq",
        "options": {
            "0": "1026",
            "1": "-5",
            "2": "0",
            "3": "It's too big, I gotta matlab it..."
        },
        "answersIdx": [
            2
        ],
        "content": "Let's try another example:<br>$$\\mathbf{A} = \\begin{pmatrix} 54 & 3 & 0 \\\\ 9 & 5 & 0 \\\\ 4 & -19 & 0 \\end{pmatrix}$$Find $|A|$.",
        "next": "Checkpoint1_default_19"
    },
    "Checkpoint1_default_19": {
        "type": "plain",
        "content": "Remember how we are free to choose any row/column to expand along? Simply choose $C_3$ to do my cofactor expansion and I quickly find that $\\det(\\mathbf{A}) = 0$!<br>In cofactor expansion, <b>always choose the row/column that makes your life the easiest!</b>",
        "next": "Checkpoint1_default_20"
    },
    "Checkpoint1_default_20": {
        "type": "mcq",
        "options": {
            "0": "$0$",
            "1": "$adf$",
            "2": "$aei - afh - bdi + bfg + cdh - ceg$",
            "3": "I have no clue!!"
        },
        "answersIdx": [
            1
        ],
        "content": "Now you are given a triangular matrix, select an appropriate row/column and find $$\\left| \\begin{matrix} a & b & c \\\\ 0 & d & e \\\\ 0 & 0 & f \\end{matrix}\\right|$$",
        "next": "Checkpoint1_default_21"
    },
    "Checkpoint1_default_21": {
        "type": "plain",
        "content": "Cofactor Expansion along C1:<br>$\\left| \\begin{matrix} a & b & c \\\\ 0 & d & e \\\\ 0 & 0 & f \\end{matrix}\\right| = a\\left| \\begin{matrix} d & e \\\\ 0 & f \\end{matrix}\\right| = a(df - 0) = adf$<br>Realise that $a, d, f$ are the diagonal entries of the matrix!",
        "next": "Checkpoint1_default_22"
    },
    "Checkpoint1_default_22": {
        "type": "tex",
        "important": true,
        "content": "In fact, the determinant of any triangular matrix is the product of its diagonal entries. That is, if  $\\mathbf{A}$ is triangular, then<br><br>$$\\det(\\mathbf{A}) = a_{11} a_{22} \\ldots a_{nn} = \\prod_{k=1}^{n} a_{kk}.$$",
        "next": "Checkpoint1_default_23"
    },
    "Checkpoint1_default_23": {
        "type": "plain",
        "content": "Does this result work for a lower triangular matrix? Convince yourself by working it out manually!<br><br>That's it!! You have learnt <b>cofactor expansion</b>, the first of the two main ways to find a determinant!$$"
    }
};

const compulsoryMessages = [
    "Checkpoint1_default_8",
    "Checkpoint1_default_22"
];

const checkpoints = [
    {
        "label": "Determinant by Cofactor Expansion",
        "showCompulsoryMessages": 0,
        "id": "Checkpoint1_default_1"
    }
];