const dialogueSystem = {
    "RecapProjection_default_1": {
        "type": "mcq",
        "options": {
            "0": "$\\frac{u\\cdot w}{|u|^2}w$",
            "1": "$\\frac{u\\cdot w}{|u|^2}u$",
            "2": "$\\frac{u\\cdot w}{|w|^2}w$",
            "3": "$\\frac{u\\cdot w}{|w|^2}u$"
        },
        "answersIdx": [
            1
        ],
        "content": "Okay I promised projection onto subspaces last interactive, so here we go!<br><br>But before projecting onto subspaces, let's recap projection vectors onto vectors first. What is the expression for the projection of a vector $w$ onto $u$?",
        "next": "RecapProjection_default_2"
    },
    "RecapProjection_default_2": {
        "type": "plain",
        "content": "Let's go on to projecting onto subspaces shall we?<br><br>We have a subspace $V$ such that $\\{u_1, u_2\\}$ forms a basis for $V$. We also have a vector $w$, which we want to project onto the subspace $w$. Let the projection be $w_p$",
        "next": "RecapProjection_default_3"
    },
    "RecapProjection_default_3": {
        "type": "plain",
        "content": "A reasonable guess for $w_p$ would be the following:<br><br>$$\\frac{u_1\\cdot w}{|u_1|^2}u_1 + \\frac{u_2\\cdot w}{|u_2|^2}u_2$$<br><br>That is, $w_p$ is equal to ($w$'s projection onto $u_1$) $+$ ($w$'s projection onto $u_2$)",
        "next": "RecapProjection_default_4"
    },
    "RecapProjection_default_4": {
        "type": "plain",
        "content": "In the previous interactive, we showed that this formula didn't work for the first desmos below, but it worked for the second!<br><br>The only thing we changed was the basis vectors we used for representing the subspace $V$.",
        "next": "RecapProjection_default_5"
    },
    "RecapProjection_default_5": {
        "type": "embed",
        "previewImage": "images/desmos_thumbnail.jpg",
        "content": "https://www.desmos.com/3d/9vcs8awrit",
        "previewText": "Projection onto subspace 1",
        "next": "RecapProjection_default_6"
    },
    "RecapProjection_default_6": {
        "type": "embed",
        "previewImage": "images/desmos_thumbnail.jpg",
        "content": "https://www.desmos.com/3d/tfj5mhx387",
        "previewText": "Projection onto subspace 2",
        "next": "RecapProjection_default_7"
    },
    "RecapProjection_default_7": {
        "type": "mcq",
        "options": {
            "0": "Because $u_1$ and $u_2$ are orthogonal!"
        },
        "answersIdx": [
            0
        ],
        "content": "I've included the two desmos above if you need to take another look at it. Anyways, why does it work for the second desmos but not the first?",
        "next": "RecapProjection_default_8"
    },
    "RecapProjection_default_8": {
        "type": "plain",
        "content": "Exactly! To find the projection of a vector $w$ onto a subspace $V$, it is helpful that we have an orthogonal basis for $V$!",
        "next": "GramSchmidtProcess_default_1"
    },
    "GramSchmidtProcess_default_1": {
        "type": "plain",
        "content": "So let's actually do the example with numbers now. We have:<br><br>$$u_1 = \\left(\\begin{array}{c} 2 \\\\ 1 \\\\ 2 \\\\\\end{array}\\right) \\space \\space \\space u_2 = \\left(\\begin{array}{c} 1 \\\\ 2 \\\\ 2 \\\\\\end{array}\\right)$$",
        "next": "GramSchmidtProcess_default_2"
    },
    "GramSchmidtProcess_default_2": {
        "type": "mcq",
        "options": {
            "0": "cry about it",
            "1": "die lor",
            "2": "make the basis orthogonal!"
        },
        "answersIdx": [
            2
        ],
        "content": "$u_1$ and $u_2$ are not orthogonal at the moment... so how?",
        "next": "GramSchmidtProcess_default_3"
    },
    "GramSchmidtProcess_default_3": {
        "type": "plain",
        "content": "But how do we build a orthogonal basis for a subspace from a non-orthogonal basis?<br><br>To find a method, it might be helpful to understand how adding vectors to a basis changes the subspace that it spans.",
        "next": "GramSchmidtProcess_default_4"
    },
    "GramSchmidtProcess_default_4": {
        "type": "mcq",
        "options": {
            "0": "A point",
            "1": "A vector",
            "2": "A line",
            "3": "A plane"
        },
        "answersIdx": [
            2
        ],
        "content": "Firstly, what does $\\text{span}\\{u_1\\}$ look like in 3d space?",
        "next": "GramSchmidtProcess_default_5"
    },
    "GramSchmidtProcess_default_5": {
        "type": "mcq",
        "options": {
            "0": "A point",
            "1": "A vector",
            "2": "A line",
            "3": "A plane"
        },
        "answersIdx": [
            3
        ],
        "content": "$\\text{span}\\{u_1\\}$ is a one dimensional subspace, so it's a line. Now, what does $\\text{span}\\{u_1,u_2\\}$ look like in 3d space?",
        "next": "GramSchmidtProcess_default_6"
    },
    "GramSchmidtProcess_default_6": {
        "type": "plain",
        "content": "When we add $u_2$ to the basis, the line exapnds into a plane as it is able to explore a second dimension now.",
        "next": "GramSchmidtProcess_default_7"
    },
    "GramSchmidtProcess_default_7": {
        "type": "mcq",
        "options": {
            "0": "Never",
            "1": "When $v$ is not in $\\text{span}\\{u_1\\}$",
            "2": "When $v$ is in $\\text{span}\\{u_1,u_2\\}$",
            "3": "Always"
        },
        "answersIdx": [
            1,
            2
        ],
        "content": "Question! Instead of $u_2$, let's consider some $v$. If we add $v$ to the basis, i.e. we consider $\\text{span}\\{u_1,v\\}$, when will $\\text{span}\\{u_1,v\\} = V$?<br><br>(remember that $V = \\text{span}\\{u_1,u_2\\}$ because $u_1$,$u_2$ is the basis for $V$)",
        "next": "GramSchmidtProcess_default_8"
    },
    "GramSchmidtProcess_default_8": {
        "type": "plain",
        "content": "If $v$ is in $\\text{span}\\{u_1\\}$, then the subspace won't expand. However, if we choose any vector in $V$ that isn't linearly dependent on $u_1$, then we are able to form any vector that is in $V$!",
        "next": "GramSchmidtProcess_default_9"
    },
    "GramSchmidtProcess_default_9": {
        "type": "plain",
        "content": "Let's go back to the original problem. We are given a subspace $V$ such that $\\text{span}\\{u_1,u_2\\} = V$ (i.e. $u_1$, $u_2$ forms a basis for $V$)<br><br>We want to find two vectors $v_1, v_2$ such that they form an orthogonal basis for the same subspace $V$.",
        "next": "GramSchmidtProcess_default_10"
    },
    "GramSchmidtProcess_default_10": {
        "type": "mcq",
        "options": {
            "0": "in $V$",
            "1": "orthogonal to $v_1$"
        },
        "answersIdx": [
            0,
            1
        ],
        "content": "$v_1$ is quite stragithforward. We can let $v_1 = u_1$.<br><br>How about $v_2$, what properties of $v_2$ must hold?",
        "next": "GramSchmidtProcess_default_11"
    },
    "GramSchmidtProcess_default_11": {
        "type": "dialogue",
        "options": {
            "0": "I think I know!",
            "1": "I want a hint"
        },
        "respondToIdx": {
            "0": "Answer",
            "1": "Hint"
        },
        "content": "How do we get such a $v_2$?"
    },
    "Hint": {
        "type": "plain",
        "content": "Hint: look at this desmos from the previous interactive again",
        "next": "GramSchmidtProcess_default_12"
    },
    "GramSchmidtProcess_default_12": {
        "type": "embed",
        "previewImage": "images/desmos_thumbnail.jpg",
        "content": "https://www.desmos.com/geometry/y2ubn4hqts",
        "previewText": "Decomposition of w into 100% related and 0% related components",
        "next": "Answer"
    },
    "Answer": {
        "type": "mcq",
        "options": {
            "0": "Project $v_2$ onto $v_1$, and then use the orthogonal component!"
        },
        "answersIdx": [
            0
        ],
        "content": "How do we do it?",
        "next": "GramSchmidtProcess_default_13"
    },
    "GramSchmidtProcess_default_13": {
        "type": "plain",
        "content": "Exactly! Now, we have vectors $v_1$ and $v_2$ be orthogonal to one another.",
        "next": "GramSchmidtProcess_default_14"
    },
    "GramSchmidtProcess_default_14": {
        "type": "plain",
        "content": "Let's work through an example. Our original vectors were<br><br>$$u_1 = \\left(\\begin{array}{c} 2 \\\\ 1 \\\\ 2 \\\\\\end{array}\\right) \\space \\space \\space u_2 = \\left(\\begin{array}{c} 1 \\\\ 2 \\\\ 2 \\\\\\end{array}\\right)$$<br><br>We also can get $v_1$ directly by setting it to be the same as $u_1$:<br>$$v_1 = \\left(\\begin{array}{c} 2 \\\\ 1 \\\\ 2 \\\\\\end{array}\\right)$$",
        "next": "GramSchmidtProcess_default_15"
    },
    "GramSchmidtProcess_default_15": {
        "type": "mcq",
        "options": {
            "0": "$\\frac{1}{9}\\left(\\begin{array}{c} 1 \\\\ 2 \\\\ 2 \\\\\\end{array}\\right)$",
            "1": "$\\frac{8}{9}\\left(\\begin{array}{c} 1 \\\\ 2\\\\ 2 \\\\\\end{array}\\right)$",
            "2": "$\\frac{1}{9}\\left(\\begin{array}{c} 2 \\\\ 1 \\\\ 2 \\\\\\end{array}\\right)$",
            "3": "$\\frac{8}{9}\\left(\\begin{array}{c} 2 \\\\ 1 \\\\ 2 \\\\\\end{array}\\right)$"
        },
        "answersIdx": [
            3
        ],
        "content": "Now, $v_2$. Firstly, what is the projection of $u_2$ onto $v_1$?",
        "next": "GramSchmidtProcess_default_16"
    },
    "GramSchmidtProcess_default_16": {
        "type": "plain",
        "content": "The vector projection must be a multiple of $v_1$ since we're projecting $u_2$ onto $v_1$.",
        "next": "GramSchmidtProcess_default_17"
    },
    "GramSchmidtProcess_default_17": {
        "type": "mcq",
        "options": {
            "0": "$\\left(\\begin{array}{c} 1 \\\\ 2 \\\\ 2 \\\\\\end{array}\\right) - \\frac{8}{9}\\left(\\begin{array}{c} 2 \\\\ 1 \\\\ 2 \\\\\\end{array}\\right)$"
        },
        "answersIdx": [
            0
        ],
        "content": "Now, what is $v_2$?",
        "next": "GramSchmidtProcess_default_18"
    },
    "GramSchmidtProcess_default_18": {
        "type": "plain",
        "content": "Indeed, this is the orthogonal complement when $u_2$ is projected onto $v_1$. Working out the math, we have:<br><br>$$v_2 = \\frac{1}{9}\\left(\\begin{array}{c} -7 \\\\ 10 \\\\ 2 \\\\\\end{array}\\right)$$",
        "next": "GramSchmidtProcess_default_19"
    },
    "GramSchmidtProcess_default_19": {
        "type": "mcq",
        "options": {
            "0": "$\\left(\\begin{array}{c} 0 \\\\ 0 \\\\ 0 \\\\\\end{array}\\right)$"
        },
        "answersIdx": [
            0
        ],
        "content": "Here's a short little task for you before we move on to the next part. Find $v_1 \\cdot v_2$",
        "next": "GramSchmidtProcess_default_20"
    },
    "GramSchmidtProcess_default_20": {
        "type": "plain",
        "content": "Well, it has to be! They are orthogonal after all.<br><br>Anyways, that's the end of the example. Let's step things up a dimension.",
        "next": "GramSchmidtProcess_default_21"
    },
    "GramSchmidtProcess_default_21": {
        "type": "plain",
        "content": "Let's suppose we have a subspace $V$ whose basis are $\\{u_1,u_2,u_3\\}$ (this time the entire space is more than 3 dimensional)",
        "next": "GramSchmidtProcess_default_22"
    },
    "GramSchmidtProcess_default_22": {
        "type": "plain",
        "content": "Let's try to create an orthogonal basis $\\{v_1,v_2,v_3\\}$.<br><br>We can let $v_1 = u_1$.<br><br>Then, we find $v_2$ by projecting it onto $v_1$ and taking it's orthogonal component.",
        "next": "GramSchmidtProcess_default_23"
    },
    "GramSchmidtProcess_default_23": {
        "type": "mcq",
        "options": {
            "0": "We project $v_3$ onto $v_2$",
            "1": "We project $v_3$ onto $v_1$",
            "2": "We project $v_3$ onto $\\text{span}\\{v_1,v_2\\}$"
        },
        "answersIdx": [
            2
        ],
        "content": "Now, we have $\\text{span}\\{u_1,u_2\\}$ = $\\text{span}\\{v_1,v_2\\}$, and we want to add the third vector.<br><br>How do we go get $v_3$ from $u_3$?",
        "next": "GramSchmidtProcess_default_24"
    },
    "GramSchmidtProcess_default_24": {
        "type": "embed",
        "previewImage": "images/desmos_thumbnail.jpg",
        "content": "https://www.desmos.com/3d/tfj5mhx387",
        "previewText": "Projection onto subspace 2",
        "next": "GramSchmidtProcess_default_25"
    },
    "GramSchmidtProcess_default_25": {
        "type": "mcq",
        "options": {
            "0": "purple",
            "1": "red",
            "2": "red - purple",
            "3": "red + purple"
        },
        "answersIdx": [
            2
        ],
        "content": "Let's look at the desmos again. If we let the red vector be $u_3$, then the purple vector is its projection onto the subspace. What should $v_3$ be then?",
        "next": "GramSchmidtProcess_default_26"
    },
    "GramSchmidtProcess_default_26": {
        "type": "plain",
        "content": "Notice that (red-purple) is orthgoonal the subspace! Hence, it is a good candidate for $v_3$",
        "next": "GramSchmidtProcess_default_27"
    },
    "GramSchmidtProcess_default_27": {
        "type": "mcq",
        "options": {
            "0": "$\\frac{u_1\\cdot u_3}{|u_1|^2}u_1 + \\frac{u_2\\cdot u_3}{|u_2|^2}u_2$",
            "1": "$\\frac{v_1\\cdot u_3}{|v_1|^2}v_1 + \\frac{v_2\\cdot u_3}{|v_2|^2}v_2$",
            "2": "$u_3 - \\frac{u_1\\cdot u_3}{|u_1|^2}u_1 + \\frac{u_2\\cdot u_3}{|u_2|^2}u_2$",
            "3": "$u_3 - \\frac{v_1\\cdot u_3}{|v_1|^2}v_1 + \\frac{v_2\\cdot u_3}{|v_2|^2}v_2$"
        },
        "answersIdx": [
            3
        ],
        "content": "So what should the expression for $v_3$?",
        "next": "GramSchmidtProcess_default_28"
    },
    "GramSchmidtProcess_default_28": {
        "type": "plain",
        "content": "Firstly, the projection of $u_3$ onto the subspace $\\text{span}\\{v_1,v_2\\}$ is $\\frac{v_1\\cdot u_3}{|v_1|^2}v_1 + \\frac{v_2\\cdot u_3}{|v_2|^2}v_2$. We must use $v_1, v_2$ as the basis because they are orthogonal. This formula doesn't work if the basis is not orthogonal.<br><br>However, we're not looking for the projection!",
        "next": "GramSchmidtProcess_default_29"
    },
    "GramSchmidtProcess_default_29": {
        "type": "plain",
        "content": "Recap that previously, we discussed that when vector $w$ is projected onto $u$, it can be expressed as $w_p + w_n$, where $w_p$ is in the same direction as $u$, and $w_n$ is orthogonal to $u$.<br><br>In fact, we can generalize this to subspaces too. If $V$ is a subspace, then every vector $w$ can be expressed as $w_p + w_n$ where $w_p$ is in the subspace $V$, and $w_n$ is orthogonal to the subspace $V$.",
        "next": "GramSchmidtProcess_default_30"
    },
    "GramSchmidtProcess_default_30": {
        "type": "plain",
        "content": "Hence, $v_3$ is actually the orthogonal component when $v_3$ is projected onto the subspace $\\text{span}\\{v_1,v_2\\}$.",
        "next": "GramSchmidtProcess_default_31"
    },
    "GramSchmidtProcess_default_31": {
        "type": "plain",
        "content": "In summary, the gist of converting any basis $\\{u_1 \\dots u_k\\}$ for a subspace $V$ to an orthogonal basis $\\{v_1 \\dots v_k\\}$ is as follows:<br><br>1. Let $S$ be a set. Let $v_1 = u_1$, and initialize $S = \\{v_1\\}$<br>2. Project $u_2$ onto the subspace $\\text{span(S)}$. Let the projection be $u_{2p}$<br>3. Let $v_2 = u_2 - u_{2p}$, i.e. the orthogonal component<br>4. Insert $v_2$ into $S$<br>5. Repeat steps 2-4, with $u_3$ all the way to $u_k$.<br><br>Finally, we often want an orthonormal basis instead of orthogonal basis. Hence, we have a sixth and final step:<br><br>6. Normalize all vectors to be length $1$",
        "next": "GramSchmidtProcess_default_32"
    },
    "GramSchmidtProcess_default_32": {
        "type": "plain",
        "content": "The entire process described above is the gist of the Gram-Schmidt Process.",
        "next": "GramSchmidtProcess_default_33"
    },
    "GramSchmidtProcess_default_33": {
        "type": "tex",
        "important": true,
        "content": "$$\\textbf{Gram-Schmidt Process} \\\\ $$<br>Let $S=\\{\\mathbf{u}_1,\\mathbf{u}_2,...,\\mathbf{u}_k\\}$ be a linearly independent set. Let<br><br>$\\mathbf{v}_1 = \\mathbf{u}_1$<br>$\\mathbf{v}_2 = \\mathbf{u}_2-\\left(\\frac{\\mathbf{v}_1\\cdot\\mathbf{u}_2}{\\lVert\\mathbf{v}_1\\rVert^2}\\right)\\mathbf{v}_1$<br>$\\mathbf{v}_3 =\\mathbf{u}_3-\\left(\\frac{\\mathbf{v}_1\\cdot\\mathbf{u}_3}{\\lVert\\mathbf{v}_1\\rVert^2}\\right)\\mathbf{v}_1-\\left(\\frac{\\mathbf{v}_2\\cdot\\mathbf{u}_3}{\\lVert\\mathbf{v}_2\\rVert^2}\\right)\\mathbf{v}_2$<br>$\\vdots$<br>$\\mathbf{v}_k = \\mathbf{u}_k-\\left(\\frac{\\mathbf{v}_1\\cdot\\mathbf{u}_k}{\\lVert\\mathbf{v}_1\\rVert^2}\\right)\\mathbf{v}_1-\\left(\\frac{\\mathbf{v}_2\\cdot\\mathbf{u}_k}{\\lVert\\mathbf{v}_2\\rVert^2}\\right)\\mathbf{v}_2-\\cdots-\\left(\\frac{\\mathbf{v}_{k-1}\\cdot \\mathbf{u}_k}{\\lVert\\mathbf{v}_{k-1}\\rVert^2}\\right)\\mathbf{v}_{k-1}.$<br><br><br><br><br>Then $\\{\\mathbf{v}_1,\\mathbf{v}_2,...,\\mathbf{v}_k\\}$ is an orthogonal set (of nonzero vectors), and hence,<br>$$\\left\\{\\frac{\\mathbf{v}_1}{\\lVert\\mathbf{v}_1\\rVert},\\frac{\\mathbf{v}_2}{\\lVert\\mathbf{v}_2\\rVert},...,\\frac{\\mathbf{v}_k}{\\lVert\\mathbf{v}_k\\rVert}\\right\\}$$<br>is an orthonormal set such that $\\text{span}\\{\\mathbf{v}_1,...,\\mathbf{v}_{k}\\}=\\text{span}\\{\\mathbf{u}_k,...,\\mathbf{u}_{k}\\}$.",
        "next": "GramSchmidtProcess_default_34"
    },
    "GramSchmidtProcess_default_34": {
        "type": "dialogue",
        "options": {
            "0": "I'm ready!"
        },
        "respondToIdx": {
            "0": "QRFactStart"
        },
        "content": "There's just one more part for this, so once you've gotten the Gram-Schmidt Process down, let me know :)"
    },
    "QRFactStart": {
        "type": "plain",
        "content": "Let's consider a basis for a subspace $V$ in $R^m$, where the basis is $\\{a_1, a_2, \\dots, a_n\\}$.<br><br>Suppose we perform the Gram-Schmidt Process on $\\{a_1, a_2, \\dots, a_n\\}$, and we get $\\{q_1, q_2, \\dots, q_n\\}$ as an orthogonal basis for the same subspace.",
        "next": "QRFact_default_1"
    },
    "QRFact_default_1": {
        "type": "mcq",
        "options": {
            "0": "$a_3$ is a linear combination of $q_1$",
            "1": "$a_3$ is a linear combination of $q_1, q_2$",
            "2": "$a_3$ is a linear combination of $q_1, q_2, q_3$"
        },
        "answersIdx": [
            2
        ],
        "content": "Consider the vector $a_3$. Which of the following statements are true?",
        "next": "QRFact_default_2"
    },
    "QRFact_default_2": {
        "type": "plain",
        "content": "Let's recap the gram-schmidt process for getting $q_3$:<br><br>$$q_3 = a_3 - \\frac{q_1\\cdot a_3}{|q_1|^2}q_1 + \\frac{q_2\\cdot a_3}{|q_2|^2}q_2$$<br><br>Afterwards, we normalize $q_3$ to be a unit vector.",
        "next": "QRFact_default_3"
    },
    "QRFact_default_3": {
        "type": "plain",
        "content": "Anyways, from the above, we can see that $a_3$ is a linear combination of $q_1, q_2, q_3$.<br><br>In general, $a_k$ is a linear combination of $q_1, q_2, \\dots, q_k$.",
        "next": "QRFact_default_4"
    },
    "QRFact_default_4": {
        "type": "mcq",
        "options": {
            "0": "$0$",
            "1": "$1$",
            "2": "$n$"
        },
        "answersIdx": [
            1
        ],
        "content": "Now, let the matrix $Q = \\left(q_1 \\space \\space q_2 \\space \\space \\dots q_n\\right)$<br><br>Let's suppose that we have some vector $r_1$, such that $a_1 = Qr_1$.<br><br>How many non-zero rows must $r_1$ have?",
        "next": "QRFact_default_5"
    },
    "QRFact_default_5": {
        "type": "plain",
        "content": "Recap how matrix vector multiplication works. If we let $r_1 = \\left(\\begin{array}{c} r_{1,1} \\\\ r_{2,1} \\\\ \\vdots \\ \\\\ r_{n,1} \\\\ \\end{array}\\right)$<br><br>When we take $Qr_1$, we are saying we want $r_{1,1}$ times of $q_1$, plus $r_{2,1}$ times of $q_2$, and so on.",
        "next": "QRFact_default_6"
    },
    "QRFact_default_6": {
        "type": "plain",
        "content": "Since $a_1$ is a linear combination of $q_1$ only, hence we don't need $q_2$ onwards! $r_{2,1}$ onwards are all zero!",
        "next": "QRFact_default_7"
    },
    "QRFact_default_7": {
        "type": "mcq",
        "options": {
            "0": "$0$",
            "1": "$1$",
            "2": "$2$"
        },
        "answersIdx": [
            2
        ],
        "content": "Now, suppose that we have some vector $r_2$, such that $a_1 = Qr_2$.<br><br>How many non-zero rows must $r_2$ have?",
        "next": "QRFact_default_8"
    },
    "QRFact_default_8": {
        "type": "plain",
        "content": "Indeed, by similar logic as above, $a_2$ is dependent only on $q_1, q_2$. Hence, $r_2$ only has the first two rows be non-zero.<br><br>Repeating this logic, we have that $r_n$ in general has $n$ non-zero rows from the top.",
        "next": "QRFact_default_9"
    },
    "QRFact_default_9": {
        "type": "mcq",
        "options": {
            "0": "Upper Triangular",
            "1": "Strict Upper Triangular",
            "2": "Lower Triangular",
            "3": "Strict Lower Trianglular"
        },
        "answersIdx": [
            0
        ],
        "content": "Now, let $R = \\left(r_1 \\space \\space r_2 \\space \\space \\dots r_n\\right)$. What type of matrix is $R$?",
        "next": "QRFact_default_10"
    },
    "QRFact_default_10": {
        "type": "plain",
        "content": "Well, it is upper triangular because the number of non-zero rows from the top decreases as we go down.",
        "next": "QRFact_default_11"
    },
    "QRFact_default_11": {
        "type": "plain",
        "content": "Anyways, let $A = \\left(a_1 \\space \\space a_2 \\space \\space \\dots a_n\\right)$<br><br>We have that $a_k = Qr_k$ for all $k$<br><br>Hence by block multiplication (which can be thought of here as gluing of $a$ and $r$ together), we have $A = QR$.",
        "next": "QRFact_default_12"
    },
    "QRFact_default_12": {
        "type": "plain",
        "content": "This is known as the QR factorization of a matrix",
        "next": "QRFact_default_13"
    },
    "QRFact_default_13": {
        "type": "mcq",
        "options": {
            "0": "Yes",
            "1": "No"
        },
        "answersIdx": [
            1
        ],
        "content": "Question! Is $Q$ an orthogonal matrix?",
        "next": "QRFact_default_14"
    },
    "QRFact_default_14": {
        "type": "dialogue",
        "options": {
            "0": "oh...",
            "1": "$m \\times n$"
        },
        "respondToIdx": {
            "0": "afterTrick",
            "1": "afterTrick"
        },
        "content": "What are the dimensions of $Q$?"
    },
    "afterTrick": {
        "type": "plain",
        "content": "Remember that an orthogonal matrix must be a square matrix! In this case, the orignal matrix $A$ may not even be square.",
        "next": "QRFact_default_15"
    },
    "QRFact_default_15": {
        "type": "mcq",
        "options": {
            "0": "Yes",
            "1": "No"
        },
        "answersIdx": [
            0
        ],
        "content": "However... is it true that $Q^TQ = I$?",
        "next": "QRFact_default_16"
    },
    "QRFact_default_16": {
        "type": "plain",
        "content": "The reason is exactly the same as why orthogonal matrices also have this $Q^TQ = I$ property.<br><br>Anyways, here's the definition for QR Factorization:",
        "next": "QRFact_default_17"
    },
    "QRFact_default_17": {
        "type": "tex",
        "important": true,
        "content": "$$\\textbf{QR Factorization} \\\\ $$<br><br>Given a $m \\times n$ matrix A, we may write:<br><br>$$\\mathbf{A} \\space \\space= \\space \\space\\begin{pmatrix}\\mathbf{a}_1 \\space \\space\\mathbf{a}_2 \\space \\space\\cdots \\space \\space\\mathbf{a}_n\\end{pmatrix}$$<br>$$= \\begin{pmatrix}\\mathbf{q}_1 \\space \\space\\mathbf{q}_2 \\cdots \\space \\space\\mathbf{q}_n\\end{pmatrix}\\begin{pmatrix}r_{11} & r_{12} & \\cdots & r_{1n}\\\\0 & r_{22} & \\cdots & r_{2n}\\\\\\vdots & \\vdots & \\ddots& \\vdots\\\\0 & 0 &\\cdots & r_{nn}\\end{pmatrix}$$<br>$$= \\space \\space \\mathbf{QR}$$<br><br>for some $m\\times n$ matrix $\\mathbf{Q}$ with orthonormal columns, and a upper triangular $n\\times n$ matrix $\\mathbf{R}$.<br><br>Because the columns of $\\mathbf{Q}$ are orthonormal, $\\mathbf{Q}^T\\mathbf{Q} = I$",
        "next": "QRFact_default_18"
    },
    "QRFact_default_18": {
        "type": "dialogue",
        "options": {
            "0": "We can compute it during the gram-schmidt process",
            "1": "There must be a better way!"
        },
        "respondToIdx": {
            "0": "QRBadWay",
            "1": "QRGoodWay"
        },
        "content": "Now, let's address the algorithm for computing QR factorization.<br><br>We can get $Q$ from the gram-schmidt process. How do we get $R$?"
    },
    "QRBadWay": {
        "type": "plain",
        "content": "Well, it works, but it's pretty tedious to do.",
        "next": "QRGoodWay"
    },
    "QRGoodWay": {
        "type": "plain",
        "content": "There is indeed a better way.",
        "next": "QRFact_default_19"
    },
    "QRFact_default_19": {
        "type": "mcq",
        "options": {
            "0": "pre-multiply by $Q^{-1}$",
            "1": "pre-multiply by $Q^T$"
        },
        "answersIdx": [
            1
        ],
        "content": "Let's consider the equation $A = QR$.<br><br>How do we extract the $R$ out?",
        "next": "QRFact_default_20"
    },
    "QRFact_default_20": {
        "type": "plain",
        "content": "Well, the inverse idea is there. But $Q$ may not even have an inverse as it's not square.<br><br>Instead, we can make use of the fact that $\\mathbf{Q}^T\\mathbf{Q} = I$. Premultipling by $Q^{T}$ on both sides, we have $Q^{T}A = Q^{T}QR = R$.<br><br>Hence, to get $R$, we just need to mulitply $Q^{T}$ and $A$! Pretty simple right?",
        "next": "QRFact_default_21"
    },
    "QRFact_default_21": {
        "type": "plain",
        "content": "And that's a wrap!"
    }
};

const compulsoryMessages = [
    "GramSchmidtProcess_default_33",
    "QRFact_default_17"
];

const checkpoints = [
    {
        "label": "Projection onto Subspaces",
        "showCompulsoryMessages": 0,
        "id": "RecapProjection_default_1"
    },
    {
        "label": "Gram-Schmidt Process",
        "showCompulsoryMessages": 0,
        "id": "GramSchmidtProcess_default_1"
    },
    {
        "label": "QR Factorization",
        "showCompulsoryMessages": 1,
        "id": "QRFactStart"
    }
];