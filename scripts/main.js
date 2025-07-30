const chatTitle = document.getElementById('chatTitle');
const chatView = document.getElementById('chatView');
const chatBox = document.getElementById('chatBox');
const chatInput = document.getElementById('chatInput');
const userText = document.getElementById('userText');
const textInputArea = document.getElementById('textInputArea');
const mcqInputArea = document.getElementById('mcqInputArea');
const mcqOptionsContainer = document.getElementById('mcqOptions');
const importantPage = document.getElementById('importantPage');
const importantList = document.getElementById('importantList');
const modal = document.getElementById('modal');
const modalContent = document.getElementById('modalContent');
const viewImportantBtn = document.getElementById('viewImportant');
const backToChatBtn = document.getElementById('backToChat');
const closeModalBtn = document.getElementById('closeModal');
const chatInputContainer = document.getElementById('chatInputContainer');
const toggleInputBtn = document.getElementById('toggleInputBtn');

const chatName = chatTitle.textContent;
const botAvatar = "images/bellabot.png";

let currentNode = "start";
let score = 0;
let scoreTotal = 0;
let lastSender = null;
let isInputVisible = false;

const messageQueue = [];
let isBusy = false;

const messageHistory = [];
const importantMessages = new Set();
const preloadedEmbeds = new Map();

function queueMessage(func) {
  messageQueue.push(func);
  if (!isBusy) processQueue();
}

function processQueue() {
  if (messageQueue.length === 0 || isBusy) return;
  const nextFunc = messageQueue.shift();
  nextFunc();
  setTimeout(processQueue, 250);
}

function addUserMessage(content) {
  const msgWrapper = document.createElement('div');
  msgWrapper.className = 'message user';

  const msgContent = document.createElement('div');
  msgContent.className = 'bubble';
  msgContent.innerHTML = content.trim();
  renderMathInElement(msgContent);

  msgWrapper.appendChild(msgContent);
  chatBox.appendChild(msgWrapper);
  chatBox.scrollTop = chatBox.scrollHeight;
  lastSender = 'user';
  return msgContent;
}

function addBotMessage(nodeId, dialogueSystem) {
  const msgWrapper = document.createElement('div');
  msgWrapper.className = 'message bot';

  const node = dialogueSystem[nodeId];

  if (!messageHistory.includes(nodeId)) {
    messageHistory.push(nodeId);
  }

  const avatar = document.createElement('img');
  avatar.className = 'avatar';
  avatar.src = botAvatar;
  if (lastSender === 'bot') avatar.classList.add('hidden');
  msgWrapper.appendChild(avatar);
 
  let msgContent;
  if (node.type === 'image') {
    msgContent = createImageMessage(nodeId, dialogueSystem, true);
  } else if (node.type === 'embed') {
    msgContent = createEmbedMessage(nodeId, dialogueSystem, true);
  } else if (node.type === 'tex') {
    msgContent = createTexMessage(nodeId, dialogueSystem, true);
  } else {
    msgContent = document.createElement('div');
    msgContent.className = 'bubble';
    msgContent.innerHTML = node.content.trim();
    renderMathInElement(msgContent);

    const star = document.createElement('span');
    star.textContent = '★';
    star.className = 'star-icon';
    
    if (importantMessages.has(nodeId) || node.important) {
      star.classList.add('active');
      importantMessages.add(nodeId);
    }

    star.addEventListener('click', () => {
      if (importantMessages.has(nodeId)) {
        importantMessages.delete(nodeId);
        star.classList.remove('active');
      } else {
        importantMessages.add(nodeId);
        star.classList.add('active');
      }
    });
    msgContent.appendChild(star);
  }

  msgWrapper.appendChild(msgContent);
  chatBox.appendChild(msgWrapper);
  lastSender = 'bot';
  return msgContent;
}

function createImageMessage(nodeId, dialogueSystem, inChatView = true) {
  const wrapper = document.createElement('div');
  wrapper.className = 'message-wrapper';

  const node = dialogueSystem[nodeId];
  const src = `${node.content.trim()}`;

  const img = document.createElement('img');
  img.src = src;
  img.className = 'sticker-image';
  if (node.sticker) img.style.border = 'unset';

  // Enable zoom
  img.addEventListener('click', () => {
    const zoomed = document.createElement('img');
    zoomed.src = src;
    zoomed.className = 'zoomed-image';
    attachZoomPanEvents(zoomed);
    showInModal(zoomed);
  });

  wrapper.appendChild(img);

  if (inChatView) { // Message in chat-view
    const star = document.createElement('span');
    star.textContent = '★';
    star.className = 'star-icon';

    if (importantMessages.has(nodeId) || node.important) {
      star.classList.add('active');
      importantMessages.add(nodeId);
    }

    star.addEventListener('click', e => {
      e.stopPropagation(); // prevent zoom trigger
      if (importantMessages.has(nodeId)) {
        importantMessages.delete(nodeId);
        star.classList.remove('active');
      } else {
        importantMessages.add(nodeId);
        star.classList.add('active');
      }
    });

    wrapper.appendChild(star);
  }

  return wrapper;
}

function createEmbedMessage(nodeId, dialogueSystem, inChatView = true) {
  const wrapper = document.createElement('div');
  wrapper.className = 'message-wrapper';

  const node = dialogueSystem[nodeId];
  const url = node.content.trim();

  const preview = document.createElement('div');
  preview.className = 'preview-thumbnail';
  preview.title = url;
  if (node.previewImage) preview.style.backgroundImage = `url(${node.previewImage.trim()})`;

  const previewText = document.createElement('span');
  previewText.textContent = (node.previewText ?? "Click to open embed").trim();
  preview.appendChild(previewText);

  preview.addEventListener('click', () => {
    if (node.preload) {
      const preloaded = preloadedEmbeds.get(url);
      preloaded.style.display = 'flex';
      modal.style.display = 'flex';
    } else {
      // fallback: create it dynamically
      const iframe = document.createElement('iframe');
      iframe.src = url;
      iframe.className = 'embed-frame';
      modalContent.appendChild(iframe);
      modal.style.display = 'flex';
    }
  });

  wrapper.appendChild(preview);

  if (inChatView) {
    const star = document.createElement('span');
    star.textContent = '★';
    star.className = 'star-icon';

    if (importantMessages.has(nodeId) || node.important) {
      star.classList.add('active');
      importantMessages.add(nodeId);
    }

    star.addEventListener('click', e => {
      e.stopPropagation();
      if (importantMessages.has(nodeId)) {
        importantMessages.delete(nodeId);
        star.classList.remove('active');
      } else {
        importantMessages.add(nodeId);
        star.classList.add('active');
      }
    });

    wrapper.appendChild(star);
  }

  return wrapper;
}

function createTexMessage(nodeId, dialogueSystem, inChatView = true) {
  const wrapper = document.createElement('div');
  wrapper.className = 'message-wrapper'; // Reusing layout style

  const node = dialogueSystem[nodeId];

  const preview = document.createElement('div');
  preview.className = 'preview-thumbnail'; // Makes it look like a PDF block
  if (node.previewImage) preview.style.backgroundImage = `url(${node.previewImage.trim()})`;

  const previewText = document.createElement('span');
  previewText.textContent = (node.previewText ?? "Click to open page").trim();
  preview.appendChild(previewText);

  preview.addEventListener('click', () => {
    const div = document.createElement('div');
    div.className = 'latex-script';
    div.innerHTML = node.content.trim();
  
    renderMathInElement(div, {
      delimiters: [
        { left: "$$", right: "$$", display: true },
        { left: "\\[", right: "\\]", display: true },
        { left: "$", right: "$", display: false },
        { left: "\\(", right: "\\)", display: false }
      ],
      throwOnError: false
    });
  
    showInModal(div);
  });

  wrapper.appendChild(preview);

  if (inChatView) {
    const star = document.createElement('span');
    star.textContent = '★';
    star.className = 'star-icon';

    if (importantMessages.has(nodeId) || node.important) {
      star.classList.add('active');
      importantMessages.add(nodeId);
    }

    star.addEventListener('click', e => {
      e.stopPropagation();
      if (importantMessages.has(nodeId)) {
        importantMessages.delete(nodeId);
        star.classList.remove('active');
      } else {
        importantMessages.add(nodeId);
        star.classList.add('active');
      }
    });

    wrapper.appendChild(star);
  }

  return wrapper;
}

function addSystemMessage(msg) {
  lastSender = '';
  const div = document.createElement('div');
  div.className = 'system-message';
  div.textContent = msg;
  chatBox.appendChild(div);
}

function showInput(type) {
  textInputArea.style.display = type === 'text' ? 'flex' : 'none';
  mcqInputArea.style.display = type !== 'text' ? 'flex' : 'none';
  chatInputContainer.style.display = 'flex';
  chatInputContainer.classList.add('show');
  isInputVisible = false; 
}

function hideInput() {
  chatInputContainer.classList.remove('expanded');
  chatInputContainer.classList.remove('show');
  setTimeout(() => {
    chatInputContainer.style.display = 'none';
  }, 300);
  isInputVisible = false;
  adjustChatBoxPadding();
}

function showInModal(element) {
  modalContent.appendChild(element);
  modal.style.display = 'flex';
}

function adjustChatBoxPadding() {
  const isExpanded = chatInputContainer.classList.contains('expanded');
  const expandedHeight = chatInput.offsetHeight + 44; // input + toggle bar
  if (isExpanded) {
    chatBox.style.paddingBottom = `${expandedHeight}px`;
    chatBox.scrollTop = chatBox.scrollHeight;
  } else {
    chatBox.style.paddingBottom = '44px';
  }
  chatBox.style.paddingBottom = isExpanded ? `${expandedHeight}px` : '44px';
}

toggleInputBtn.addEventListener('click', () => {
  if (isInputVisible) {
      chatInputContainer.classList.remove('expanded');
  } else {
      chatInputContainer.classList.add('expanded');
  }
  isInputVisible = !isInputVisible;
  adjustChatBoxPadding();
});

function renderMessage(nodeId, dialogueSystem) {
  isBusy = true;
  currentNode = nodeId;
  const node = dialogueSystem[nodeId];
  if (!node) return;

  addBotMessage(nodeId, dialogueSystem);

  if (node.systemMessage) {
    addSystemMessage(node.systemMessage);
  }

  const delay = node.delay ?? 250;

  if ((node.type === 'plain' || node.type === 'image' || node.type === 'embed' || node.type === 'tex') && node.next) {
    setTimeout(() => {
      renderMessage(node.next, dialogueSystem);
    }, delay);
    return;
  }

  setTimeout(() => {
    if (node.type === 'dialogue') {
      renderMCQOptions(node.options, 'dialogue');
      showInput('mcq');
    } else if (node.type === 'mcq' || node.type === 'single-mcq') {
      scoreTotal += node.marks;
      renderMCQOptions(node.options, node.type);
      showInput('mcq');
    } else if (node.type === 'text') {
      scoreTotal += node.marks;
      showInput('text');
    } else {
      isBusy = false;
      processQueue();
    }
  }, delay);
}

function renderMCQOptions(optionsObj, type) {
  mcqOptionsContainer.innerHTML = "";
  Object.entries(optionsObj).forEach(([key, label]) => {
    const div = document.createElement('div');
    div.className = 'option-item';
    div.dataset.key = key;
    div.innerHTML = label;
    renderMathInElement(div);
    div.addEventListener('click', () => {
      if (type === 'single-mcq' || type === 'dialogue') {
        document.querySelectorAll('.option-item').forEach(el => el.classList.remove('selected'));
        div.classList.add('selected');
      } else {
        div.classList.toggle('selected');
      }
    });
    mcqOptionsContainer.appendChild(div);
  });
}

function submitTextAnswer(dialogueSystem) {
  const answer = userText.value.trim();
  if (!answer) return;
  hideInput();

  setTimeout(() => {
    const userBubble = addUserMessage(answer);
    userText.value = "";
    const node = dialogueSystem[currentNode];

    let thisScore = 0;
    const isMarked = typeof node.marks === 'number';

    const normalizedAnswer = answer.toLowerCase();
    const isCorrect = node.answers && node.answers instanceof Set &&
                      [...node.answers].some(ans => ans.toLowerCase().trim() === normalizedAnswer);

    if (isCorrect) {
      userBubble.classList.add('correct');
      if (isMarked) {
        thisScore = node.marks;
        score += thisScore;
        addSystemMessage(`📊 Score: ${round2(thisScore)}/${round2(node.marks)}`);
      }
    } else {
      userBubble.classList.add('incorrect');
      if (isMarked) {
        addSystemMessage(`📊 Score: 0/${round2(node.marks)}`);
      }
    }

    isBusy = false;
    processQueue();
    renderMessage(node.next, dialogueSystem);
  }, 300);
}

function submitMCQAnswer(dialogueSystem) {
  const selectedEls = Array.from(document.querySelectorAll('.option-item.selected'));
  if (!selectedEls.length) return;

  hideInput();

  setTimeout(() => {
    const selectedKeys = selectedEls.map(el => el.dataset.key);

    const node = dialogueSystem[currentNode];
    if (node.type === 'dialogue') {
      const selectedKey = selectedKeys[0];
      addUserMessage(node.options[selectedKey]);

      isBusy = false;
      processQueue();
      renderMessage(node.respondToIdx[selectedKey], dialogueSystem);
      return;
    }

    const userMessage = document.createElement('div');
    userMessage.className = 'message user';
    const row = document.createElement('div');
    row.className = 'mcq-response';

    Object.entries(node.options).forEach(([key, label]) => {
      const bubble = document.createElement('div');
      bubble.className = 'bubble';
      bubble.innerHTML = label;
      renderMathInElement(bubble);
      bubble.dataset.key = key;
      row.appendChild(bubble);
    });

    userMessage.appendChild(row);
    chatBox.appendChild(userMessage);
    chatBox.scrollTop = chatBox.scrollHeight;
    lastSender = 'user';

    row.childNodes.forEach(bubble => {
      if (selectedKeys.includes(bubble.dataset.key)) bubble.classList.add('selected');
    });

    let thisScore = 0;
    const isMarked = typeof node.marks === 'number';
    let marksPerOption;
    if (node.type === 'single-mcq') {
      marksPerOption = node.marks;
    } else {
      marksPerOption = node.marks / node.answersIdx.size;
    }

    const shownExplanations = new Set();
    row.childNodes.forEach(bubble => {
      const key = bubble.dataset.key;
      const isSelected = selectedKeys.includes(key);
      const isCorrect = node.answersIdx.has(Number(key));
      if (isSelected && isCorrect) {
        bubble.classList.remove('selected');
        bubble.classList.add('correct');
        thisScore += marksPerOption;
      } else if (isSelected && !isCorrect) {
        bubble.classList.remove('selected');
        bubble.classList.add('incorrect');
        thisScore -= marksPerOption;
      } else if (!isSelected && isCorrect) {
        bubble.classList.add('missed');
      }
      if (node.respondToIdx && isSelected && node.respondToIdx[key]) {
        const responseId = node.respondToIdx[key];
        if (!shownExplanations.has(responseId)) {
          shownExplanations.add(responseId);
          queueMessage(() => renderMessage(responseId, dialogueSystem));
        }
      }
    });

    if (isMarked) {
      thisScore = Math.max(0, thisScore);
      score += thisScore;
      addSystemMessage(`📊 Score: ${round2(thisScore)}/${round2(node.marks)}`);
    }

    isBusy = false;
    queueMessage(() => renderMessage(node.next, dialogueSystem));
  }, 300);
}

function round2(val) {
  return Math.round(val * 100) / 100;
}

function initializeQuiz(dialogueSystem) {
  const seen = new Set();

  for (const key in dialogueSystem) {
    const node = dialogueSystem[key];
    if (node.type === 'embed' && node.preload && typeof node.content === 'string') {
      const url = node.content.trim();
      if (!seen.has(url)) {
        seen.add(url);

        const iframe = document.createElement('iframe');
        iframe.src = url;
        iframe.className = 'embed-frame';
        iframe.style.display = 'none'; // keep it hidden
        iframe.setAttribute('data-preloaded-url', url);

        modalContent.appendChild(iframe);
        preloadedEmbeds.set(url, iframe); // store reference
      }
    }
  }

  addSystemMessage("🧠 Simulation started");
  renderMessage("start", dialogueSystem);
}

userText.addEventListener('keypress', e => {
  if (e.key === 'Enter') submitTextAnswer(dialogueSystem);
});


viewImportantBtn.addEventListener('click', () => {
  chatTitle.textContent = 'Starred';
  importantList.innerHTML = "";
  messageHistory.forEach(nodeId => {
    if (importantMessages.has(nodeId)) {

      const node = dialogueSystem[nodeId];
      let element;
      if (node.type === 'image') {
        element = createImageMessage(nodeId, dialogueSystem, false); 
      } else if (node.type === 'embed') {
        element = createEmbedMessage(nodeId, dialogueSystem, false);
      } else if (node.type === 'tex') {
        element = createTexMessage(nodeId, dialogueSystem, false);
      } else {
        element = document.createElement('div');
        element.className = 'bubble important-message';
        element.innerHTML = node.content.trim();
        renderMathInElement(element);
      }

      element.style.margin = '6px 0';
      importantList.appendChild(element);
    }
  });

  chatView.classList.remove('active');
  chatView.classList.add('hidden-left');
  importantPage.classList.remove('hidden-right');
  importantPage.classList.add('active');
  backToChatBtn.style.display = 'inline-block';
  viewImportantBtn.style.display = 'none';
});
  
backToChatBtn.addEventListener('click', () => {
  chatTitle.textContent = chatName;

  importantPage.classList.remove('active');
  importantPage.classList.add('hidden-right');
  chatView.classList.remove('hidden-left');
  chatView.classList.add('active');
  backToChatBtn.style.display = 'none';
  viewImportantBtn.style.display = 'inline-block';
});

closeModalBtn.addEventListener('click', () => {
  modalContent.querySelectorAll('iframe').forEach(iframe => {
    const isPreloaded = iframe.hasAttribute('data-preloaded-url');
    if (isPreloaded) {
      iframe.style.display = 'none';
    } else {
      iframe.remove();
    }
  });

  // Also remove other non-persistent content
  modalContent.querySelectorAll('img, .latex-script').forEach(el => el.remove());

  modal.style.display = 'none';
});

function attachZoomPanEvents(img) {
  let scale = 1;
  let isPanning = false;
  let startX = 0, startY = 0;
  let translateX = 0, translateY = 0;
  let initialDistance = null;

  function reset() {
    scale = 1;
    translateX = 0;
    translateY = 0;
    img.style.transform = 'scale(1) translate(0px, 0px)';
  }

  // Wheel zoom
  img.addEventListener('wheel', e => {
    e.preventDefault();
    const zoomIntensity = 0.1;
    scale += (e.deltaY < 0 ? zoomIntensity : -zoomIntensity);
    scale = Math.max(1, Math.min(scale, 5));
    img.style.transform = `scale(${scale}) translate(${translateX}px, ${translateY}px)`;
  });

  // Pinch zoom (touch)
  img.addEventListener('touchstart', e => {
    if (e.touches.length === 2) {
      initialDistance = getTouchDistance(e.touches);
    }
    if (e.touches.length === 1 && scale > 1) {
      isPanning = true;
      startX = e.touches[0].clientX - translateX * scale;
      startY = e.touches[0].clientY - translateY * scale;
      img.style.cursor = 'grabbing';
    }
  }, { passive: false });

  img.addEventListener('touchmove', e => {
    if (e.touches.length === 2 && initialDistance !== null) {
      e.preventDefault();
      const newDistance = getTouchDistance(e.touches);
      const zoomFactor = newDistance / initialDistance;
      scale = Math.min(5, Math.max(1, zoomFactor));
      img.style.transform = `scale(${scale}) translate(${translateX}px, ${translateY}px)`;
    } else if (isPanning && e.touches.length === 1) {
      const dx = (e.touches[0].clientX - startX) / scale;
      const dy = (e.touches[0].clientY - startY) / scale;
      translateX = dx;
      translateY = dy;
      img.style.transform = `scale(${scale}) translate(${translateX}px, ${translateY}px)`;
    }
  }, { passive: false });

  img.addEventListener('touchend', () => {
    isPanning = false;
    initialDistance = null;
    img.style.cursor = scale > 1 ? 'grab' : 'zoom-in';
  });

  // Mouse zoom/pan
  img.addEventListener('mousedown', e => {
    if (scale <= 1) return;
    isPanning = true;
    img.style.cursor = 'grabbing';
    startX = e.clientX - translateX * scale;
    startY = e.clientY - translateY * scale;
    e.preventDefault();
  });

  img.addEventListener('mousemove', e => {
    if (!isPanning) {
      img.style.cursor = scale > 1 ? 'grab' : 'zoom-in';
      return;
    }
    const dx = (e.clientX - startX) / scale;
    const dy = (e.clientY - startY) / scale;
    translateX = dx;
    translateY = dy;
    img.style.transform = `scale(${scale}) translate(${translateX}px, ${translateY}px)`;
  });

  img.addEventListener('mouseup', () => {
    isPanning = false;
    img.style.cursor = scale > 1 ? 'grab' : 'zoom-in';
  });

  img.addEventListener('mouseleave', () => {
    isPanning = false;
    img.style.cursor = scale > 1 ? 'grab' : 'zoom-in';
  });

  // Close resets zoom
  closeModalBtn.addEventListener('click', reset);
}
