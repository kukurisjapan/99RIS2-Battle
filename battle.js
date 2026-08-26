let time = 9 * 60;
const timeEl = document.getElementById("time");
const result = document.getElementById("result");
let paused = false;
let matchStarted = false;
let countdownActive = false;
let countdownTimer = null;
const pendingStarts = new Set();
const countdownEl = document.getElementById("countdown");

function tick() {
  const m = Math.floor(time / 60);
  const s = time % 60;
  timeEl.textContent = String(m).padStart(2, "0") + ":" + String(s).padStart(2, "0");
}
tick();

let matchFinished = false;
let parentGameOver = false;
let childGameOver = false;
let parentScore = 0;
let childScore = 0;
let statusRequests = 0;

// 対戦終了後は、親・子の両方がRELOADしてから次のSTARTを受け付ける。
let requireBothReload = false;
let parentReloaded = false;
let childReloaded = false;

function finishMatch(message) {
  if (matchFinished) return;
  matchFinished = true;
  paused = false;
  clearCountdown(false);
  tick();
  requireBothReload = true;
  parentReloaded = false;
  childReloaded = false;
  result.textContent = message;
  result.classList.remove("result-parent-win", "result-child-win", "result-draw", "result-pause", "result-reload-warning", "result-victory");
  if (message === "親の勝ち！") result.classList.add("result-parent-win");
  else if (message === "子の勝ち！") result.classList.add("result-child-win");
  else if (message === "引き分け！") result.classList.add("result-draw");
  result.classList.add("result-victory");
  reactCharacters(message === "親の勝ち！" ? "parent" : message === "子の勝ち！" ? "child" : "draw");
  sendToFrame(parentFrame, { type: "battle-end" });
  sendToFrame(childFrame, { type: "battle-end" });
}

function judgeByScore() {
  if (parentScore > childScore) return "親の勝ち！";
  if (childScore > parentScore) return "子の勝ち！";
  return "引き分け！";
}

const timer = setInterval(() => {
  if (matchFinished || paused || !matchStarted) return;
  if (time <= 0) {
    time = 0;
    tick();
    statusRequests = 2;
    sendToFrame(parentFrame, { type: "battle-request-status" });
    sendToFrame(childFrame, { type: "battle-request-status" });
    setTimeout(() => {
      if (!matchFinished && !paused) finishMatch(judgeByScore());
    }, 250);
    return;
  }
  time--;
  tick();
}, 1000);

const parentFrame = document.getElementById("parentGame");
const childFrame = document.getElementById("childGame");

function showBattleFeedback(player, mainText, points, isBonus) {
  const id = player === "parent" ? "parent-feedback" : "child-feedback";
  const el = document.getElementById(id);
  if (!el) return;
  clearTimeout(el._hideTimer);
  el.innerHTML = '<div class="feedback-stars">★ ✦ ★</div>' +
                 '<div class="feedback-main"></div>' +
                 '<div class="feedback-points"></div>';
  el.querySelector('.feedback-main').textContent = mainText || '';
  el.querySelector('.feedback-points').textContent = '+' + (Number(points) || 0) + '点';
  el.classList.toggle('bonus', !!isBonus);
  el.classList.remove('show');
  void el.offsetWidth;
  el.classList.add('show');
  el._hideTimer = setTimeout(() => el.classList.remove('show'), isBonus ? 2200 : 1800);
}

window.addEventListener("message", (event) => {
  const data = event.data || {};
  if (data.type === "battle-celebrate") {
    if (event.source === parentFrame.contentWindow) {
      showBattleFeedback("parent", data.mainText, data.points, data.isBonus);
    } else if (event.source === childFrame.contentWindow) {
      showBattleFeedback("child", data.mainText, data.points, data.isBonus);
      // 子がボーナスを取ったときだけ、親側の天井を1段下げる。
      if (data.isBonus) {
        sendToFrame(parentFrame, { type: "battle-push-ceiling-down" });
      }
    }
    return;
  }

  if (data.type === "battle-gameover") {
    const score = Number(data.score) || 0;
    if (event.source === parentFrame.contentWindow) {
      parentScore = score;
      parentGameOver = true;
      if (!matchFinished) finishMatch("子の勝ち！");
    } else if (event.source === childFrame.contentWindow) {
      childScore = score;
      childGameOver = true;
      if (!matchFinished) finishMatch("親の勝ち！");
    }
    return;
  }

  if (data.type === "battle-status-response") {
    const score = Number(data.score) || 0;
    if (event.source === parentFrame.contentWindow) {
      parentScore = score;
    } else if (event.source === childFrame.contentWindow) {
      childScore = score;
    }
    statusRequests--;
    if (time === 0 && statusRequests <= 0 && !matchFinished && !paused) {
      finishMatch(judgeByScore());
    }
  }
});

function sendToFrame(frame, message) {
  if (frame && frame.contentWindow) {
    frame.contentWindow.postMessage(message, "*");
  }
}

function sendParent(key) {
  sendToFrame(parentFrame, { type: "battle-parent-key", key: key });
}

function sendChildArrow(key) {
  sendToFrame(childFrame, { type: "battle-child-key", key: key });
}

function togglePause() {
  if (matchFinished) return;
  paused = !paused;
  sendToFrame(parentFrame, { type: paused ? "battle-pause" : "battle-resume" });
  sendToFrame(childFrame, { type: paused ? "battle-pause" : "battle-resume" });
  result.classList.remove("result-parent-win", "result-child-win", "result-draw", "result-pause", "result-reload-warning", "result-victory");
  result.textContent = paused ? "一時停止" : "";
  if (paused) result.classList.add("result-pause");
  window.focus();
}

window.addEventListener("keydown", (e) => {
  const k = (e.key || "").toLowerCase();

  if (k === "n") {
    e.preventDefault();
    e.stopPropagation();
    togglePause();
    return;
  }

  if (k === "t") {
    e.preventDefault();
    e.stopPropagation();
    startPlayer("parent");
    return;
  }
  if (k === "y") {
    e.preventDefault();
    e.stopPropagation();
    reloadPlayer("parent");
    return;
  }
  if (k === "o") {
    e.preventDefault();
    e.stopPropagation();
    startPlayer("child");
    return;
  }
  if (k === "p") {
    e.preventDefault();
    e.stopPropagation();
    reloadPlayer("child");
    return;
  }

  if (["a", "d", "s", "w"].includes(k)) {
    e.preventDefault();
    e.stopPropagation();
    if (!paused) sendParent(k);
    return;
  }

  if (["arrowleft", "arrowright", "arrowdown", "arrowup"].includes(k)) {
    e.preventDefault();
    e.stopPropagation();
    if (!paused) sendChildArrow(k);
    return;
  }

  if (/^[0-9]$/.test(k)) {
    e.preventDefault();
    e.stopPropagation();
    if (!paused) sendToFrame(childFrame, { type: "battle-child-key", key: k });
  }
}, true);

document.addEventListener("click", () => {
  window.focus();
}, true);


function clearCountdown(resetDisplay = true) {
  countdownActive = false;
  if (countdownTimer) {
    clearTimeout(countdownTimer);
    countdownTimer = null;
  }
  pendingStarts.clear();
  if (countdownEl) {
    countdownEl.textContent = "";
    countdownEl.className = "";
  }
  if (resetDisplay && timeEl) {
    timeEl.textContent = "09:00";
    timeEl.className = "";
  }
}

function runCountdown() {
  if (countdownActive || matchFinished) return;
  countdownActive = true;
  const steps = ["3", "2", "1", "GO!"];
  let i = 0;
  const show = () => {
    if (!countdownActive || matchFinished) return;
    // カウントダウンは独立した枠を作らず、時間表示そのものを使う。
    timeEl.textContent = steps[i];
    timeEl.className = i === steps.length - 1 ? "countdown-go" : "countdown-number";
    if (i === steps.length - 1) {
      countdownTimer = setTimeout(() => {
        countdownActive = false;
        matchStarted = true;
        const players = Array.from(pendingStarts);
        pendingStarts.clear();
        time = 9 * 60;
        tick();
        players.forEach(p => {
          const frame = p === "parent" ? parentFrame : childFrame;
          sendToFrame(frame, { type: "battle-start" });
        });
        window.focus();
      }, 650);
      return;
    }
    i++;
    countdownTimer = setTimeout(show, 700);
  };
  show();
}

function reactCharacters(winner) {
  document.querySelectorAll('.player-area').forEach(el => el.classList.remove('winner-react','loser-react','draw-react'));
  const parentArea = document.querySelector('.parent-title')?.closest('.player-area');
  const childArea = document.querySelector('.child-title')?.closest('.player-area');
  if (winner === 'parent') { parentArea?.classList.add('winner-react'); childArea?.classList.add('loser-react'); }
  else if (winner === 'child') { childArea?.classList.add('winner-react'); parentArea?.classList.add('loser-react'); }
  else { parentArea?.classList.add('draw-react'); childArea?.classList.add('draw-react'); }
}

function startPlayer(player) {
  // 対戦終了後の再戦では、親・子の両方がRELOADするまでSTARTを受け付けない。
  if (matchFinished) return;
  if (requireBothReload && !(parentReloaded && childReloaded)) {
    result.innerHTML = "親・子の両方がRELOAD<br>してから開始してください";
    result.classList.remove("result-parent-win", "result-child-win", "result-draw", "result-pause", "result-victory");
    result.classList.add("result-reload-warning");
    return;
  }
  // 両方RELOAD済みなら、新しい対戦を開始可能にする。
  if (requireBothReload && parentReloaded && childReloaded) {
    requireBothReload = false;
  }
  // 最初のSTARTでは3・2・1・GO!を表示してから対戦を開始する。
  if (!matchStarted) {
    pendingStarts.add(player);
    if (!countdownActive) runCountdown();
    result.classList.remove("result-parent-win", "result-child-win", "result-draw", "result-pause", "result-reload-warning", "result-victory");
    result.textContent = "";
    window.focus();
    return;
  }
  result.classList.remove("result-parent-win", "result-child-win", "result-draw", "result-pause", "result-reload-warning", "result-victory");
  if (!paused) result.textContent = "";
  const frame = player === "parent" ? parentFrame : childFrame;
  // iframeの再読み込み直後でもSTARTを取りこぼさないよう、load後にも一度送る。
  const startMessage = () => sendToFrame(frame, { type: "battle-start" });
  startMessage();
  frame._battleStartPending = true;
  if (paused) {
    // 一時停止中にSTARTされた場合も、ゲームは初期化だけして停止状態にする。
    setTimeout(() => sendToFrame(frame, { type: "battle-pause" }), 50);
  }
  window.focus();
}

function reloadPlayer(player) {
  clearCountdown();
  document.querySelectorAll('.player-area').forEach(el => el.classList.remove('winner-react','loser-react','draw-react'));
  const isFinishedRound = matchFinished || time === 0 || requireBothReload;

  // 対戦終了後は、各プレイヤーがRELOADしたことを記録する。
  // 9分へのリセットは最初のRELOADで一度だけ行い、2人目のRELOADでは保持する。
  if (isFinishedRound) {
    if (!parentReloaded && !childReloaded) {
      time = 9 * 60;
      tick();
      matchStarted = false;
      paused = false;
    }
    if (player === "parent") parentReloaded = true;
    if (player === "child") childReloaded = true;
    requireBothReload = true;
    matchFinished = false;
    parentGameOver = false;
    childGameOver = false;
    parentScore = 0;
    childScore = 0;
  } else {
    // 対戦中の個別RELOADは従来どおり、そのプレイヤーだけを再読み込みする。
    matchFinished = false;
  }
  result.classList.remove("result-parent-win", "result-child-win", "result-draw", "result-pause", "result-reload-warning", "result-victory");
  result.textContent = paused ? "一時停止" : "";
  if (paused) result.classList.add("result-pause");
  document.querySelectorAll('.battle-feedback').forEach(el => { el.classList.remove('show'); el._hideTimer && clearTimeout(el._hideTimer); });
  statusRequests = 0;
  const frame = player === "parent" ? parentFrame : childFrame;
  const src = player === "parent" ? "parent.html" : "../index.html";
  frame.onload = () => {
    if (frame._battleStartPending) {
      sendToFrame(frame, { type: "battle-start" });
      frame._battleStartPending = false;
    }
    if (paused) sendToFrame(frame, { type: "battle-pause" });
  };
  frame._battleStartPending = false;
  frame.src = src;
  window.focus();
}
