const dialogueSystem = {
    "ProjectionRecap_default_1": {
        "type": "plain",
        "content": "Let's talk recap about dot products and vector projection first. Let's consider projecting a vector $w$ onto a vector $u$. Try playing with the visualization below and see how it changes!",
        "next": "ProjectionRecap_default_2"
    },
    "ProjectionRecap_default_2": {
        "type": "embed",
        "previewImage": "images/desmos_thumbnail.jpg",
        "content": "https://www.desmos.com/geometry/wt9btukes9",
        "previewText": "Projection of w onto u",
        "next": "ProjectionRecap_default_3"
    },
    "ProjectionRecap_default_3": {
        "type": "mcq",
        "options": {
            "0": "When they're perpendicular",
            "1": "When they're in the same direction"
        },
        "answersIdx": [
            0
        ],
        "content": "Based on the above example, when is the dot product zero?",
        "next": "ProjectionRecap_default_4"
    },
    "ProjectionRecap_default_4": {
        "type": "plain",
        "content": "The dot product of $w$ and $u$ can be defined as $w\\cdot u =w_1u_1 + w_2u_2 \\dots w_nu_n$.<br><br>It can also be defined as $w\\cdot u =|w||u|\\cos\\theta$, where $\\theta$ is the angle between the two vectors.",
        "next": "ProjectionRecap_default_5"
    },
    "ProjectionRecap_default_5": {
        "type": "mcq",
        "options": {
            "0": "When the vectors are perpendicular!"
        },
        "answersIdx": [
            0
        ],
        "content": "Let's examine the $\\cos\\theta$ term. When is $\\cos \\theta = 0$?",
        "next": "ProjectionRecap_default_6"
    },
    "ProjectionRecap_default_6": {
        "type": "plain",
        "content": "Indeed! When two vectors are perpendicular, their dot product is zero. From now on, the term we will use is <b>orthogonal</b>.",
        "next": "ProjectionRecap_default_7"
    },
    "ProjectionRecap_default_7": {
        "type": "tex",
        "important": true,
        "content": "$$\\textbf{Orthogonal Vectors} \\\\ $$<br><br>Vectors $w$ and $u$ are orthogonal if and only if $w \\cdot u = 0$",
        "next": "ProjectionRecap_default_8"
    },
    "ProjectionRecap_default_8": {
        "type": "plain",
        "content": "Let's go back to the discussion of the angle between $w$ and $u$ again.<br><br>If $\\theta = 0$ or $\\theta = 180^\\circ$, $w$ and $u$ point in a \"100% related\" direction, that is $w$ is a multiple of $u$.<br><br>If $\\theta = 90^\\circ$, then they point in a \"0% related\" direction, that is they are orthogonal to each other.",
        "next": "ProjectionRecap_default_9"
    },
    "ProjectionRecap_default_9": {
        "type": "plain",
        "content": "Let's head to this desmos page. Drag the red point $W$ around and notice how the vector $w$ can always be expressed as the sum of the green vector $w_p$ and purple vector $w_n$",
        "next": "ProjectionRecap_default_10"
    },
    "ProjectionRecap_default_10": {
        "type": "embed",
        "previewImage": "images/desmos_thumbnail.jpg",
        "content": "https://www.desmos.com/geometry/y2ubn4hqts",
        "previewText": "Decomposition of w into 100% related and 0% related components",
        "next": "ProjectionRecap_default_11"
    },
    "ProjectionRecap_default_11": {
        "type": "plain",
        "content": "Notice that even if we choose a vector $w$ that is neither \"0% related\" nor \"100% related\" to $u$, we can decompose $w$ as a sum of a \"100% related\" (parallel) component, $w_p$, and \"0% related\" (orthogonal) component, $w_n$!<br><br>The green vector $w_p$ is the projection of $w$ onto $u$, and hence it is a multiple of $u$. (the $p$ in $w_p$ stands for projection).<br><br>The purple vector $w_n$ is orthogonal to $u$ ($n$ stands for normal, which has a similarish meaning as orthgonal)",
        "next": "ProjectionRecap_default_12"
    },
    "ProjectionRecap_default_12": {
        "type": "plain",
        "content": "Let's quickly go through some definitions that are important for the next part:",
        "next": "ProjectionRecap_default_13"
    },
    "ProjectionRecap_default_13": {
        "type": "tex",
        "important": true,
        "content": "$$\\textbf{Orthogonal Set} \\\\ $$<br><br>A set $S = {u_1, u_2, ..., u_k}$ of vectors in $R_n$ of vectors is orthogonal if $u_i · u_j = 0$ for every $i \\neq j$<br><br>$$\\textbf{Orthonormal Set} \\\\ $$<br><br>A set $S = {u_1, u_2, ..., u_k}$ of vectors in $R_n$ of vectors is orthornomal if it is orthogonal and all vectors are unit vectors.",
        "next": "ProjectionRecap_default_14"
    },
    "ProjectionRecap_default_14": {
        "type": "mcq",
        "options": {
            "0": "An orthogonal set $S$ must be linearly independent",
            "1": "An orthonormal set $S$ must be linearly independent"
        },
        "answersIdx": [
            1
        ],
        "content": "Pop quiz! Which of the following statements must be true?",
        "next": "ProjectionRecap_default_15"
    },
    "ProjectionRecap_default_15": {
        "type": "plain",
        "content": "Okay okay this is kind of a trick question, so bear with me.<br><br>An orthgonal set is almost always linearly independent. After all, if two vectors are orthogonal, they are \"0% related\", and hence they must be linearly independent. If you picked both as correct, you've got the right intution!",
        "next": "ProjectionRecap_default_16"
    },
    "ProjectionRecap_default_16": {
        "type": "mcq",
        "options": {
            "0": "$\\mathbf{0}$!"
        },
        "answersIdx": [
            0
        ],
        "content": "The problem here is this. For any vector $w$, what is $\\mathbf{0} \\cdot w$?",
        "next": "ProjectionRecap_default_17"
    },
    "ProjectionRecap_default_17": {
        "type": "plain",
        "content": "Exactly! The problem here is that the zero vector is orthgonal to every other vector. And a set that contains the zero vector cannot be linearly independent.<br><br>An orthogonal set can contain the zero vector, and would make it not linearly independent. However, since vectors must be unit vectors in an orthonormal set, the zero vector cannot exist in an orthonormal set.",
        "next": "ProjectionRecap_default_18"
    },
    "ProjectionRecap_default_18": {
        "type": "dialogue",
        "options": {
            "0": "I'm ready!"
        },
        "respondToIdx": {
            "0": "ProjectionOntoSubspaceStart"
        },
        "content": "Anyways, at this point, we have established why we care about whether two vectors are orthogonal - they give us a way to understand if two vectors are \"0% related\".<br><br>When you're ready, let's move on to the next part!"
    },
    "ProjectionOntoSubspaceStart": {
        "type": "mcq",
        "options": {
            "0": "Yes",
            "1": "No"
        },
        "answersIdx": [
            0
        ],
        "content": "Question! Is $\\text{span}\\{u\\}$ a subspace?",
        "next": "ProjectionOntoSubspace_default_1"
    },
    "ProjectionOntoSubspace_default_1": {
        "type": "mcq",
        "options": {
            "0": "Yes!",
            "1": "Get me outta here :<"
        },
        "answersIdx": [
            0,
            1
        ],
        "content": "When we project $w$ onto the vector $u$, in reality we're actually projecting $w$ onto the one-dimensional subspace (a.k.a line).<br><br>So... can we project vectors onto a plane? or a higher dimension subspace???",
        "next": "ProjectionOntoSubspace_default_2"
    },
    "ProjectionOntoSubspace_default_2": {
        "type": "plain",
        "content": "Let's take things one step at a time",
        "next": "ProjectionOntoSubspace_default_3"
    },
    "ProjectionOntoSubspace_default_3": {
        "type": "plain",
        "content": "Given two vectors $u_1$,$u_2$, we have a subspace $V$ such that $\\{u_1, u_2\\}$ forms a basis for $V$. The idea is we want to project the vector $w$ onto the subspace $V$ itself.",
        "next": "ProjectionOntoSubspace_default_4"
    },
    "ProjectionOntoSubspace_default_4": {
        "type": "mcq",
        "options": {
            "0": "Yes",
            "1": "No"
        },
        "answersIdx": [
            1
        ],
        "content": "Let $w_p$ be the projection onto the subspace $V$. $w_{p1}$ be the projection of $w$ onto $u_1$, and $w_{p2}$ be the projection of $w$ onto $u_2$.<br><br>Use your visualization skills a little bit. Is it true that $w_p = w_{p1} +w_{p2}$? That is, the projection onto the subspace is the sum of the projection onto each of the basis vectors?",
        "next": "ProjectionOntoSubspace_default_5"
    },
    "ProjectionOntoSubspace_default_5": {
        "type": "plain",
        "content": "Okay that might have been quite hard to visualize, so let's bring out the desmos again.",
        "next": "ProjectionOntoSubspace_default_6"
    },
    "ProjectionOntoSubspace_default_6": {
        "type": "embed",
        "previewImage": "images/desmos_thumbnail.jpg",
        "content": "https://www.desmos.com/3d/9vcs8awrit",
        "previewText": "Projection onto subspace 1",
        "next": "ProjectionOntoSubspace_default_7"
    },
    "ProjectionOntoSubspace_default_7": {
        "type": "mcq",
        "options": {
            "0": "Because we're double counting the part of $w$ that is related to both $u_1$ and $u_2$"
        },
        "answersIdx": [
            0
        ],
        "content": "Anyways, why is $w_p \\neq w_{p1} +w_{p2}$?",
        "next": "ProjectionOntoSubspace_default_8"
    },
    "ProjectionOntoSubspace_default_8": {
        "type": "plain",
        "content": "Exactly! The issue is here is that $u_1$ and $u_2$ are still not \"0% related\", which means that we can potentially double count the component that are related to both $u_1$ and $u_2$.",
        "next": "ProjectionOntoSubspace_default_9"
    },
    "ProjectionOntoSubspace_default_9": {
        "type": "mcq",
        "options": {
            "0": "Make $u_2$ orthogonal to $u_1$!"
        },
        "answersIdx": [
            0
        ],
        "content": "How do you think we can fix this?",
        "next": "ProjectionOntoSubspace_default_10"
    },
    "ProjectionOntoSubspace_default_10": {
        "type": "plain",
        "content": "Exactly! I've skipped some steps, but I have replaced $u_2$ with another vector such that $u_1, u_2$ is still a basis for $V$, but now $u_2$ and $u_1$ are orthogonal.",
        "next": "ProjectionOntoSubspace_default_11"
    },
    "ProjectionOntoSubspace_default_11": {
        "type": "embed",
        "previewImage": "images/desmos_thumbnail.jpg",
        "content": "https://www.desmos.com/3d/tfj5mhx387",
        "previewText": "Projection onto subspace 2",
        "next": "ProjectionOntoSubspace_default_12"
    },
    "ProjectionOntoSubspace_default_12": {
        "type": "mcq",
        "options": {
            "0": "Yes!"
        },
        "answersIdx": [
            0
        ],
        "content": "Now, is it true that $w_p = w_{p1} +w_{p2}$?",
        "next": "ProjectionOntoSubspace_default_13"
    },
    "ProjectionOntoSubspace_default_13": {
        "type": "plain",
        "content": "Indeed, the fact that $u_1$ and $u_2$ are orthogonal to one another is an extremely helpful property! Because $\\{u_1, u_2\\}$ is an orthogonal set, and is a basis for $V$, we can call it an <b>Orthogonal Basis</b> of $V$.<br><br>Furthermore, if $u_1$, $u_2$ were unit vectors, then we can also call them and <b>Orthonormal Basis</b> of $V$.",
        "next": "ProjectionOntoSubspace_default_14"
    },
    "ProjectionOntoSubspace_default_14": {
        "type": "mcq",
        "options": {
            "0": "The standard basis is an orthogonal basis of $\\mathbb{R}^n$",
            "1": "The standard basis is an orthonormal basis of $\\mathbb{R}^n$"
        },
        "answersIdx": [
            0,
            1
        ],
        "content": "Here's a short understanding check. For $\\mathbb{R}^n$",
        "next": "ProjectionOntoSubspace_default_15"
    },
    "ProjectionOntoSubspace_default_15": {
        "type": "plain",
        "content": "Indeed, the standard basis consist of unit vectors all orthogonal to one another.<br><br>In fact, if you plot the vectors of any orthonormal basis, you will find that it looks like the standard basis, just that it's rotated and/or reflected.",
        "next": "ProjectionOntoSubspace_default_16"
    },
    "ProjectionOntoSubspace_default_16": {
        "type": "dialogue",
        "options": {
            "0": "I'm ready!"
        },
        "respondToIdx": {
            "0": "VectorProjectionStart"
        },
        "content": "I hope this section highlights even further why we care about orthogonality and orthogonal bases.<br><br>The projection onto a subspace is a quick teaser for sections 5.3 and 5.4 where we learn how to actually compute the projection onto a subspace.<br><br>But for now, let's return to the last part of this interactive to tie up some loose ends. Let me know when you're ready!"
    },
    "VectorProjectionStart": {
        "type": "plain",
        "content": "This whole time, we talked about projecting a vector $w$ onto $u$ without showing how to compute it. So let's quickly walk through it and highlight what the formula means",
        "next": "VectorProjection_default_1"
    },
    "VectorProjection_default_1": {
        "type": "mcq",
        "options": {
            "0": "$w$",
            "1": "$u$",
            "2": "Neither?"
        },
        "answersIdx": [
            1
        ],
        "content": "Firstly, let $w_p$ be the projection of $w$ onto $u$. $w_p$ is a scalar multiple of:",
        "next": "VectorProjection_default_2"
    },
    "VectorProjection_default_2": {
        "type": "plain",
        "content": "If at any point you're confused, refer back to <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://www.desmos.com/geometry/wt9btukes9\">this desmos page.</a><br><br>$w_p$ is a scalar multiple of $u$ as it is projected onto $u$.<br><br>To get $w_p$, we want the length of $w_p$, and the direction of $w_p$.",
        "next": "VectorProjection_default_3"
    },
    "VectorProjection_default_3": {
        "type": "plain",
        "content": "First, the direction. Ideally, we want a unit vector for that, and hence we use $\\frac{1}{|u|}u$.<br><br>Next, the length of $w_p$. Since $\\theta$ is the angle between $w$ and $u$, the length of $w_p$ is $w\\cos\\theta$<br><br>We know that $u \\cdot w = |u||w|\\cos\\theta \\implies |w|\\cos\\theta = \\frac{u\\cdot w}{|u|}$<br><br>Putting everything together, we have that $w_p = \\left( \\frac{u\\cdot w}{|u|} \\right) \\left(\\frac{1}{|u|}u \\right) = \\frac{u\\cdot w}{|u|^2}u$",
        "next": "VectorProjection_default_4"
    },
    "VectorProjection_default_4": {
        "type": "dialogue",
        "options": {
            "0": "Bring me to <b>Orthogonal Matrices</b>!"
        },
        "respondToIdx": {
            "0": "OrthogonalMatricesStart"
        },
        "content": "We have one more loose end after this. Whenever you're ready!"
    },
    "OrthogonalMatricesStart": {
        "type": "plain",
        "content": "Let's consider an orthonormal basis $S = \\{u_1, u_2, u_3\\}$ for $\\mathbb{R}^3$. Let's denote $u_1 = \\left(\\begin{array}{c} a \\\\ b \\\\ c \\\\\\end{array}\\right)$, $u_2 = \\left(\\begin{array}{c} d \\\\ e \\\\ f \\\\\\end{array}\\right)$, $u_3 = \\left(\\begin{array}{c} g \\\\ h \\\\ i \\\\\\end{array}\\right)$<br><br>Now, let's make a matrix $Q = (u_1 \\space \\space u_2 \\space \\space u_3) = \\left(\\begin{array}{c c c} a & d & g \\\\ b & e & h \\\\ c & f & i \\\\\\end{array}\\right)$<br><br>The transpose of $Q$ is as follows: $Q^T = (u_1 \\space \\space u_2 \\space \\space u_3)^T = \\left(\\begin{array}{c c c} a & b & c \\\\ d & e & f \\\\ g & h & i \\\\\\end{array}\\right)$<br><br>I know the transpose here is kind of out of nowhere, so bear with me for a bit we'll see where this takes us.",
        "next": "plain"
    },
    "plain": {
        "type": "mcq",
        "options": {
            "0": "$a \\cdot a + b \\cdot b + c \\cdot c$",
            "1": "$u_1 \\cdot u_1$",
            "2": "$1$"
        },
        "answersIdx": [
            0,
            1,
            2
        ],
        "content": "Let's try to evaluate $Q^Tu_1$<br><br>$$Q^Tu_1 = \\left(\\begin{array}{c c c} a & b & c \\\\ d & e & f \\\\ g & h & i \\\\\\end{array}\\right)\\left(\\begin{array}{c} a \\\\ b \\\\ c \\\\\\end{array}\\right)$$<br><br>$Q^Tu_1$ is a vector of 3 rows. How do we get the first entry of $Q^Tu_1$?",
        "next": "OrthogonalMatrices_default_1"
    },
    "OrthogonalMatrices_default_1": {
        "type": "plain",
        "content": "You'll realize that the first entry is the dot product of $u_1$ and itself, and since $u_1$ is a unit vector, it must give $1$!",
        "next": "OrthogonalMatrices_default_2"
    },
    "OrthogonalMatrices_default_2": {
        "type": "mcq",
        "options": {
            "0": "$a \\cdot d + b \\cdot e + c \\cdot f$",
            "1": "$u_1 \\cdot u_2$",
            "2": "$0$"
        },
        "answersIdx": [
            0,
            1,
            2
        ],
        "content": "Next, what about the second entry of $Q^Tu_1$?",
        "next": "OrthogonalMatrices_default_3"
    },
    "OrthogonalMatrices_default_3": {
        "type": "plain",
        "content": "This time, $u_1 \\cdot u_2$ is $0$ because $u_1$ and $u_2$ are orthogonal! Similarly, we can say that the third entry is also $0$.<br><br>Hence,<br><br>$$Q^Tu_1 = \\left(\\begin{array}{c c c} a & b & c \\\\ d & e & f \\\\ g & h & i \\\\\\end{array}\\right)\\left(\\begin{array}{c} a \\\\ b \\\\ c \\\\\\end{array}\\right) = \\left(\\begin{array}{c} 1 \\\\ 0 \\\\ 0 \\\\\\end{array}\\right)$$",
        "next": "OrthogonalMatrices_default_4"
    },
    "OrthogonalMatrices_default_4": {
        "type": "mcq",
        "options": {
            "0": "$\\left(\\begin{array}{c} 1 \\\\ 0 \\\\ 0 \\\\\\end{array}\\right)$",
            "1": "$\\left(\\begin{array}{c} 0 \\\\ 1 \\\\ 0 \\\\\\end{array}\\right)$",
            "2": "$\\left(\\begin{array}{c} 0 \\\\ 0 \\\\ 0 \\\\\\end{array}\\right)$"
        },
        "answersIdx": [
            1
        ],
        "content": "Now, try to work out what $Q^Tu_2$ should be:",
        "next": "OrthogonalMatrices_default_5"
    },
    "OrthogonalMatrices_default_5": {
        "type": "plain",
        "content": "And by a similar logic, $Q^Tu_3$ should give us $\\left(\\begin{array}{c} 0 \\\\ 0 \\\\ 1 \\\\\\end{array}\\right)$.",
        "next": "OrthogonalMatrices_default_6"
    },
    "OrthogonalMatrices_default_6": {
        "type": "plain",
        "content": "Putting all of this together, we have:<br><br>$$Q^T(u_1 \\space \\space u_2 \\space \\space u_3) = Q^TQ = \\left(\\begin{array}{c c c} 1 & 0 & 0 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & 1 \\\\\\end{array}\\right)$$<br><br>And voila! This also means that $Q^T = Q^{-1}$, i.e. $Q$'s inverse is also its transpose.<br><br>Matrices such as $Q$ are called <b>Orthogonal Matrices</b>",
        "next": "OrthogonalMatrices_default_7"
    },
    "OrthogonalMatrices_default_7": {
        "type": "tex",
        "important": true,
        "content": "$$\\textbf{Orthogonal Matrix} \\\\ $$<br><br>For a square matrix $Q$ of size $n$ to be orthogonal, there are three equivalent definitions:<br><br>1. $Q^TQ = I$<br>2. The columns of $Q$ form an orthonormal basis for $\\mathbb{R}^n$<br>3. The rows of $Q$ form an orthonormal basis for $\\mathbb{R}^n$",
        "next": "OrthogonalMatrices_default_8"
    },
    "OrthogonalMatrices_default_8": {
        "type": "plain",
        "content": "That's a wrap! We will continue exploring the projection onto a subspace in the next interactive :)"
    }
};

const compulsoryMessages = [
    "ProjectionRecap_default_7",
    "ProjectionRecap_default_13",
    "OrthogonalMatrices_default_7"
];

const checkpoints = [
    {
        "label": "Recap On Projections",
        "showCompulsoryMessages": 0,
        "id": "ProjectionRecap_default_1"
    },
    {
        "label": "Projection onto Subspace",
        "showCompulsoryMessages": 2,
        "id": "ProjectionOntoSubspaceStart"
    },
    {
        "label": "Projection Computation",
        "showCompulsoryMessages": 2,
        "id": "VectorProjectionStart"
    },
    {
        "label": "Orthogonal Matrices",
        "showCompulsoryMessages": 2,
        "id": "OrthogonalMatricesStart"
    }
];