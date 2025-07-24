// remove preloaded embeds, fix star, store node key in message history

const chatContainer = document.querySelector('.chat-container');
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
const zoomedImage = document.getElementById('zoomedImage');
const modalContent = document.getElementById('modalContent');
const viewImportantBtn = document.getElementById('viewImportant');
const backToChatBtn = document.getElementById('backToChat');
const closeModalBtn = document.getElementById('closeModal');


const botAvatar = "images/bellabot.png";

let currentNode = "start";
let score = 0;
let scoreTotal = 0;
let lastSender = null;

const messageQueue = [];
let processingQueue = false;
let isBusy = false;

const messageHistory = [];
const importantMessages = new Set();
const preloadedEmbeds = new Map();

function queueMessage(func) {
  messageQueue.push(func);
  if (!processingQueue) processNextMessage();
}

function processNextMessage() {
  if (processingQueue || messageQueue.length === 0) return;
  if (isBusy) return;
  processingQueue = true;
  const nextFunc = messageQueue.shift();
  nextFunc();
  processingQueue = false;
  setTimeout(processNextMessage, 100);
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
  } else {
    msgContent = document.createElement('div');
    msgContent.className = 'bubble';
    msgContent.innerHTML = node.content.trim();
    renderMathInElement(msgContent);

    const star = document.createElement('span');
    star.textContent = '★';
    star.className = 'star-icon';
    if (importantMessages.has(nodeId)) {
      star.classList.add('active');
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
  chatBox.scrollTop = chatBox.scrollHeight;
  lastSender = 'bot';
  return msgContent;
}

function createImageMessage(nodeId, dialogueSystem, inChatView = true) {
  const wrapper = document.createElement('div');
  wrapper.className = 'image-wrapper';

  const node = dialogueSystem[nodeId];
  const src = `images/${node.content.trim()}`;

  const img = document.createElement('img');
  img.src = src;
  img.className = 'sticker-image';

  // Enable zoom
  img.addEventListener('click', () => {
    // Hide any visible image
    zoomedImage.style.display = 'none';

    // Clear previous embeds
    modalContent.querySelectorAll('iframe').forEach(el => el.remove());

    zoomedImage.src = src;
    zoomedImage.style.display = 'flex';
    modal.style.display = 'flex';
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
  wrapper.className = 'embed-wrapper';

  const node = dialogueSystem[nodeId];
  const url = node.content.trim();

  const preview = document.createElement('div');
  preview.className = 'embed-thumbnail';
  preview.textContent = node.embedPreview ?? "Click to open embed";
  preview.title = url;

  preview.addEventListener('click', () => {
    // Hide any visible image
    zoomedImage.style.display = 'none';

    // Clear previous embeds
    modalContent.querySelectorAll('iframe').forEach(el => el.remove());

    // Load preloaded iframe
    let iframe;
    if (node.preload) {
      iframe = preloadedEmbeds.get(url);
    } else {
      iframe = document.createElement('iframe');
      iframe.src = url;
      iframe.className = 'embed-frame';
      iframe.allowFullscreen = true;
    }

    iframe.style.display = 'flex';
    modalContent.appendChild(iframe);
    modal.style.display = 'flex';
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
  const div = document.createElement('div');
  div.className = 'system-message';
  div.textContent = msg;
  chatBox.appendChild(div);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function showInput(type) {
  chatInput.style.display = 'flex';
  textInputArea.style.display = type === 'text' ? 'flex' : 'none';
  mcqInputArea.style.display = type !== 'text' ? 'flex' : 'none';
  setTimeout(() => {
    chatInput.classList.add('show');
    chatBox.scrollTop = chatBox.scrollHeight;
    if (type === 'text') userText.focus();
  }, 250);
}

function renderContent(nodeId, dialogueSystem) {
  isBusy = true;
  currentNode = nodeId;
  chatInput.classList.remove('show');
  const node = dialogueSystem[nodeId];
  if (!node) return;

  setTimeout(() => {
    addBotMessage(nodeId, dialogueSystem);

    if (node.systemMessage) {
      setTimeout(() => addSystemMessage(node.systemMessage), 250);
    }

    chatInput.style.display = 'none';
    const delay = (node.delay ?? -500) + 500;

    if ((node.type === 'plain' || node.type === 'image' || node.type === 'embed') && node.next) {
      setTimeout(() => {
        renderContent(node.next, dialogueSystem);
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
      }
      isBusy = false;
      processNextMessage();
    }, delay);
  }, 500);
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

  const userBubble = addUserMessage(answer);
  userText.value = "";
  const node = dialogueSystem[currentNode];

  setTimeout(() => {
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

    renderContent(node.next, dialogueSystem);
  }, 400);
}

function submitMCQAnswer(dialogueSystem) {
  lastSender = 'user';

  const selectedEls = Array.from(document.querySelectorAll('.option-item.selected'));
  if (!selectedEls.length) return;
  const selectedKeys = selectedEls.map(el => el.dataset.key);

  const node = dialogueSystem[currentNode];
  if (node.type === 'dialogue') {
    const selectedKey = selectedKeys[0];
    const selectedLabel = node.options[selectedKey];
    addUserMessage(selectedLabel);
    renderContent(node.respondToIdx[selectedKey], dialogueSystem);
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

  setTimeout(() => {
    row.childNodes.forEach(bubble => {
      const key = bubble.dataset.key;
      if (selectedKeys.includes(key)) bubble.classList.add('selected');
    });
    setTimeout(() => {
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
            queueMessage(() => renderContent(responseId, dialogueSystem));
          }
        }
      });
      if (isMarked) {
        thisScore = Math.max(0, thisScore);
        score += thisScore;
        addSystemMessage(`📊 Score: ${round2(thisScore)}/${round2(node.marks)}`);
      }
      queueMessage(() => renderContent(node.next, dialogueSystem));
    }, 300);
  }, 100);
}

function round2(val) {
  return Math.round(val * 100) / 100;
}

function initializeQuiz(dialogueSystem) {
  const container = document.getElementById('embedPreloadContainer');
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
        iframe.allowFullscreen = true;
        iframe.style.display = 'none';

        container.appendChild(iframe);
        preloadedEmbeds.set(url, iframe);
      }
    }
  }

  addSystemMessage("🧠 Simulation started");
  renderContent("start", dialogueSystem);
  const chatName = chatTitle.textContent;

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
        } else {
          element = document.createElement('div');
          element.className = 'bubble important-message';
          element.innerHTML = node.content.trim();
          renderMathInElement(element);
        }
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
    const modalContent = modal.querySelector('.modal-content');
    const embedContainer = document.getElementById('embedPreloadContainer');

    zoomedImage.style.display = 'none';

    modalContent.querySelectorAll('iframe').forEach(iframe => {
      const isPreloaded = Array.from(preloadedEmbeds.values()).includes(iframe);

      if (isPreloaded) {
        iframe.style.display = 'none';
        embedContainer.appendChild(iframe); // move it back to hidden container
      } else {
        iframe.remove(); // remove non-preloaded iframe
      }
    });

    modal.style.display = 'none';
  });

  let scale = 1;
  let isPanning = false;
  let startX = 0;
  let startY = 0;
  let translateX = 0;
  let translateY = 0;

  function resetZoom() {
    scale = 1;
    translateX = 0;
    translateY = 0;
    zoomedImage.style.transform = `scale(1) translate(0px, 0px)`;
  }

  zoomedImage.addEventListener('wheel', e => {
    e.preventDefault();
    const zoomIntensity = 0.1;
    scale += (e.deltaY < 0 ? zoomIntensity : -zoomIntensity);
    scale = Math.max(1, Math.min(scale, 5)); // Limit scale between 1x and 5x
    zoomedImage.style.transform = `scale(${scale})`;
  });

  // Optional: reset zoom when modal is closed
  document.getElementById('closeModal').addEventListener('click', resetZoom);

  // 👇 Touch-based pinch zoom support
  let initialDistance = null;

  zoomedImage.addEventListener('touchstart', e => {
    if (e.touches.length === 2) {
      initialDistance = getTouchDistance(e.touches);
    }
  }, { passive: false });

  zoomedImage.addEventListener('touchmove', e => {
    if (e.touches.length === 2 && initialDistance !== null) {
      e.preventDefault();
      const newDistance = getTouchDistance(e.touches);
      const zoomFactor = newDistance / initialDistance;
      scale = Math.min(5, Math.max(1, zoomFactor));
      zoomedImage.style.transform = `scale(${scale})`;
    }
  }, { passive: false });

  zoomedImage.addEventListener('touchend', () => {
    initialDistance = null;
  });

  function getTouchDistance(touches) {
    const dx = touches[0].clientX - touches[1].clientX;
    const dy = touches[0].clientY - touches[1].clientY;
    return Math.hypot(dx, dy);
  }

  zoomedImage.addEventListener('mousedown', e => {
    if (scale <= 1) return;
    isPanning = true;
    zoomedImage.style.cursor = 'grabbing';
    startX = e.clientX - translateX * scale;
    startY = e.clientY - translateY * scale;
    e.preventDefault();
  });
  
  zoomedImage.addEventListener('mousemove', e => {
    if (!isPanning) {
      zoomedImage.style.cursor = scale > 1 ? 'grab' : 'zoom-in';
      return;
    }
    const dx = (e.clientX - startX) / scale;
    const dy = (e.clientY - startY) / scale;
    translateX = dx;
    translateY = dy;
    zoomedImage.style.transform = `scale(${scale}) translate(${translateX}px, ${translateY}px)`;
  });

  zoomedImage.addEventListener('mouseup', () => {
    isPanning = false;
    zoomedImage.style.cursor = scale > 1 ? 'grab' : 'zoom-in';
  });

  zoomedImage.addEventListener('mouseleave', () => {
    isPanning = false;
    zoomedImage.style.cursor = scale > 1 ? 'grab' : 'zoom-in';
  });

  zoomedImage.addEventListener('touchstart', e => {
    if (e.touches.length === 1 && scale > 1) {
      isPanning = true;
      startX = e.touches[0].clientX - translateX * scale;
      startY = e.touches[0].clientY - translateY * scale;
      zoomedImage.style.cursor = 'grabbing';
    }
  }, { passive: false });

  zoomedImage.addEventListener('touchmove', e => {
    if (isPanning && e.touches.length === 1) {
      const dx = (e.touches[0].clientX - startX) / scale;
      const dy = (e.touches[0].clientY - startY) / scale;
      translateX = dx;
      translateY = dy;
      zoomedImage.style.transform = `scale(${scale}) translate(${translateX}px, ${translateY}px)`;
    }
  }, { passive: false });

  zoomedImage.addEventListener('touchend', () => {
    isPanning = false;
    zoomedImage.style.cursor = scale > 1 ? 'grab' : 'zoom-in';
  });

  window.addEventListener('click', e => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
}