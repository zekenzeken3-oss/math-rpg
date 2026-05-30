const problems = [
  {
    source: "練習1 (2) ①",
    type: "計算",
    question: "\\(A=x^2+2ax+2\\)、\\(B=a^2-3ax+1\\) のとき、\\(3A+2B\\) を計算せよ。",
    answer: "\\(3x^2+2a^2+8\\)",
    explanation: "\\(3A+2B=3(x^2+2ax+2)+2(a^2-3ax+1)\\)。展開して同類項をまとめると、\\(6ax-6ax\\) が消えて \\(3x^2+2a^2+8\\) になります。",
    hint: "\\(A\\) と \\(B\\) を代入して、同類項をまとめます。"
  },
  {
    source: "練習1 (2) ②",
    type: "計算",
    question: "\\(A=x^2+2ax+2\\)、\\(B=a^2-3ax+1\\) のとき、\\(A-\\{2B+3(A-2B)\\}\\) を計算せよ。",
    answer: "\\(-2x^2-16ax+4a^2\\)",
    explanation: "\\(A-\\{2B+3(A-2B)\\}=A-(3A-4B)=-2A+4B\\)。ここへ \\(A\\)、\\(B\\) を代入して整理します。",
    hint: "まず \\(\\{ \\}\\) の中を \\(A\\) と \\(B\\) だけで整理します。"
  },
  {
    source: "練習2 (1) ①",
    type: "累乗",
    question: "次の式を計算せよ。\n\\[(-2a^2b)^3\\]",
    answer: "\\(-8a^6b^3\\)",
    explanation: "係数も文字もそれぞれ3乗します。\\((-2)^3=-8\\)、\\((a^2)^3=a^6\\)、\\(b^3\\) です。",
    hint: "係数、\\(a\\)、\\(b\\) をそれぞれ3乗します。"
  },
  {
    source: "練習2 (1) ②",
    type: "累乗",
    question: "次の式を計算せよ。\n\\[x^2y^3\\times(-xy^2z)^2\\]",
    answer: "\\(x^4y^7z^2\\)",
    explanation: "\\((-xy^2z)^2=x^2y^4z^2\\)。これに \\(x^2y^3\\) をかけて、指数を足します。",
    hint: "\\((-xy^2z)^2\\) を先に計算します。"
  },
  {
    source: "練習2 (2) ①",
    type: "展開",
    question: "次の式を展開せよ。\n\\[(x^2-x-1)(2x+1)\\]",
    answer: "\\(2x^3-x^2-3x-1\\)",
    explanation: "左の式に \\(2x\\) と \\(1\\) をそれぞれかけます。\\(2x^3-2x^2-2x+x^2-x-1\\) をまとめます。",
    hint: "\\(2x\\) と \\(1\\) を、それぞれ左の式にかけます。"
  },
  {
    source: "練習2 (2) ②",
    type: "展開",
    question: "次の式を展開せよ。\n\\[(a+b+1)(2a-3b-1)\\]",
    answer: "\\(2a^2-ab-3b^2+a-4b-1\\)",
    explanation: "\\(a\\)、\\(b\\)、\\(1\\) を右の式に順番にかけて、同類項をまとめます。",
    hint: "\\(a\\)、\\(b\\)、\\(1\\) を右の式に順番にかけます。"
  },
  {
    source: "練習3 (1)",
    type: "展開",
    question: "次の式を展開せよ。\n\\[(a-2b)^2\\]",
    answer: "\\(a^2-4ab+4b^2\\)",
    explanation: "\\((A-B)^2=A^2-2AB+B^2\\) を使います。\\(A=a\\)、\\(B=2b\\) です。",
    hint: "\\((A-B)^2=A^2-2AB+B^2\\) を使います。"
  },
  {
    source: "練習3 (2)",
    type: "展開",
    question: "次の式を展開せよ。\n\\[(3+2x)(3-2x)\\]",
    answer: "\\(9-4x^2\\)",
    explanation: "和と差の積です。\\((A+B)(A-B)=A^2-B^2\\) で、\\(A=3\\)、\\(B=2x\\) です。",
    hint: "和と差の積は \\(A^2-B^2\\) です。"
  },
  {
    source: "練習3 (3)",
    type: "展開",
    question: "次の式を展開せよ。\n\\[(a-5)(a+7)\\]",
    answer: "\\(a^2+2a-35\\)",
    explanation: "定数の和 \\(-5+7=2\\) が \\(a\\) の係数、積 \\(-5\\times7=-35\\) が定数項になります。",
    hint: "定数の和が \\(a\\) の係数、積が定数項になります。"
  },
  {
    source: "練習3 (4)",
    type: "展開",
    question: "次の式を展開せよ。\n\\[(5x-4y)(3x+2y)\\]",
    answer: "\\(15x^2-2xy-8y^2\\)",
    explanation: "\\(15x^2+10xy-12xy-8y^2\\) となるので、\\(xy\\) の項をまとめます。",
    hint: "4つの積を作って同類項をまとめます。"
  },
  {
    source: "練習4 (1)",
    type: "展開",
    question: "次の式を展開せよ。\n\\[(x^2+x+1)^2\\]",
    answer: "\\(x^4+2x^3+3x^2+2x+1\\)",
    explanation: "\\(x^2+x\\) を \\(A\\) とおくと \\((A+1)^2=A^2+2A+1\\)。最後に \\(A=x^2+x\\) を戻します。",
    hint: "\\(x^2+x\\) をひとまとまりにして考えます。"
  },
  {
    source: "練習4 (2)",
    type: "展開",
    question: "次の式を展開せよ。\n\\[(4a^2+1)(2a+1)(2a-1)\\]",
    answer: "\\(16a^4-1\\)",
    explanation: "先に \\((2a+1)(2a-1)=4a^2-1\\)。したがって \\((4a^2+1)(4a^2-1)=16a^4-1\\) です。",
    hint: "\\((2a+1)(2a-1)\\) を先に展開します。"
  },
  {
    source: "練習5 (1)",
    type: "因数分解",
    question: "次の式を因数分解せよ。\n\\[3ax^2-6a^2b\\]",
    answer: "\\(3a(x^2-2ab)\\)",
    explanation: "すべての項に共通する \\(3a\\) をくくります。",
    hint: "共通因数 \\(3a\\) をくくります。"
  },
  {
    source: "練習5 (2)",
    type: "因数分解",
    question: "次の式を因数分解せよ。\n\\[16a^2+8a+1\\]",
    answer: "\\((4a+1)^2\\)",
    explanation: "\\((4a)^2+2\\cdot4a\\cdot1+1^2\\) なので、平方の形です。",
    hint: "平方の形を探します。"
  },
  {
    source: "練習5 (3)",
    type: "因数分解",
    question: "次の式を因数分解せよ。\n\\[x^2-x+\\frac{1}{4}\\]",
    answer: "\\((x-\\frac{1}{2})^2\\)",
    explanation: "\\(\\frac{1}{4}=(\\frac{1}{2})^2\\)、中央の項は \\(-2\\cdot x\\cdot\\frac{1}{2}\\) です。",
    hint: "\\(\\frac{1}{4}\\) は \\((\\frac{1}{2})^2\\) です。"
  },
  {
    source: "練習5 (4)",
    type: "因数分解",
    question: "次の式を因数分解せよ。\n\\[64x^2-25y^2\\]",
    answer: "\\((8x+5y)(8x-5y)\\)",
    explanation: "\\((8x)^2-(5y)^2\\) なので、\\(A^2-B^2=(A+B)(A-B)\\) を使います。",
    hint: "\\(A^2-B^2=(A+B)(A-B)\\) です。"
  },
  {
    source: "練習5 (5)",
    type: "因数分解",
    question: "次の式を因数分解せよ。\n\\[a^2+3ab-10b^2\\]",
    answer: "\\((a+5b)(a-2b)\\)",
    explanation: "和が \\(3b\\)、積が \\(-10b^2\\) になる \\(5b\\) と \\(-2b\\) を使います。",
    hint: "和が \\(3b\\)、積が \\(-10b^2\\) になる2つを探します。"
  },
  {
    source: "練習5 (6)",
    type: "因数分解",
    question: "次の式を因数分解せよ。\n\\[3x^2-12\\]",
    answer: "\\(3(x+2)(x-2)\\)",
    explanation: "まず \\(3\\) をくくると \\(3(x^2-4)\\)。さらに \\(x^2-4=(x+2)(x-2)\\) です。",
    hint: "まず \\(3\\) をくくり、\\(x^2-4\\) を因数分解します。"
  },
  {
    source: "練習6 (1)",
    type: "因数分解",
    question: "次の式を因数分解せよ。\n\\[3x^2+5x-2\\]",
    answer: "\\((x+2)(3x-1)\\)",
    explanation: "たすき掛けで \\(6x-x=5x\\) になる組み合わせを選びます。",
    hint: "たすき掛けで \\(5x\\) を作ります。"
  },
  {
    source: "練習6 (2)",
    type: "因数分解",
    question: "次の式を因数分解せよ。\n\\[4a^2+8a+3\\]",
    answer: "\\((2a+1)(2a+3)\\)",
    explanation: "\\(4a^2\\) を \\(2a\\) と \\(2a\\) に分け、定数は \\(1\\) と \\(3\\) に分けます。",
    hint: "\\(4a^2\\) は \\(2a\\) と \\(2a\\) に分けます。"
  },
  {
    source: "練習6 (3)",
    type: "因数分解",
    question: "次の式を因数分解せよ。\n\\[6x^2+xy-2y^2\\]",
    answer: "\\((2x-y)(3x+2y)\\)",
    explanation: "展開すると \\(6x^2+4xy-3xy-2y^2\\) となり、中央が \\(xy\\) になります。",
    hint: "\\(6x^2\\) と \\(-2y^2\\) の組み合わせを試します。"
  },
  {
    source: "練習6 (4)",
    type: "因数分解",
    question: "次の式を因数分解せよ。\n\\[8a^2-14ab-15b^2\\]",
    answer: "\\((2a-5b)(4a+3b)\\)",
    explanation: "展開したとき、\\(6ab-20ab=-14ab\\) になる組み合わせです。",
    hint: "たすき掛けで \\(-14ab\\) を作ります。"
  },
  {
    source: "練習7 (1)",
    type: "因数分解",
    question: "次の式を因数分解せよ。\n\\[(x+y+1)(x+y+2)-6\\]",
    answer: "\\((x+y+4)(x+y-1)\\)",
    explanation: "\\(x+y\\) を \\(A\\) とおくと、\\((A+1)(A+2)-6=A^2+3A-4=(A+4)(A-1)\\) です。",
    hint: "\\(x+y\\) をひとつの文字に置きかえます。"
  },
  {
    source: "練習7 (2)",
    type: "因数分解",
    question: "次の式を因数分解せよ。\n\\[4a^2-9b^2+6bc-c^2\\]",
    answer: "\\((2a+3b-c)(2a-3b+c)\\)",
    explanation: "後ろ3項は \\(-(3b-c)^2\\)。つまり \\((2a)^2-(3b-c)^2\\) と見ます。",
    hint: "後ろ3項を \\((3b-c)^2\\) と見ます。"
  },
  {
    source: "練習8 (1)",
    type: "因数分解",
    question: "次の式を因数分解せよ。\n\\[x^2-2xy+3x-4y+2\\]",
    answer: "\\((x+2)(x-2y+1)\\)",
    explanation: "\\(y\\) について整理すると \\(-2(x+2)y+(x+1)(x+2)\\)。共通因数 \\(x+2\\) をくくります。",
    hint: "\\(y\\) について整理して共通因数を探します。"
  },
  {
    source: "練習8 (2)",
    type: "因数分解",
    question: "次の式を因数分解せよ。\n\\[6ab+4a-3b-2\\]",
    answer: "\\((3b+2)(2a-1)\\)",
    explanation: "\\(2a(3b+2)-(3b+2)\\) とグループ分けできます。",
    hint: "\\(2a\\) または \\(3b\\) を基準にグループ分けします。"
  },
  {
    source: "練習8 (3)",
    type: "因数分解",
    question: "次の式を因数分解せよ。\n\\[2x^2+3xy-2y^2+x+2y\\]",
    answer: "\\((x+2y)(2x-y+1)\\)",
    explanation: "2次の部分を \\((x+2y)(2x-y)\\) と見て、残りの \\(x+2y\\) を合わせます。",
    hint: "2次の部分を先に因数分解します。"
  },
  {
    source: "練習8 (4)",
    type: "因数分解",
    question: "次の式を因数分解せよ。\n\\[2x^2+7xy+3y^2-5x-10y+3\\]",
    answer: "\\((x+3y-1)(2x+y-3)\\)",
    explanation: "2次の部分を \\((x+3y)(2x+y)\\) と見て、定数まで含めてたすき掛けします。",
    hint: "2次の部分を \\((x+3y)(2x+y)\\) と見ます。"
  },
  {
    source: "研究1 (1) ①",
    type: "展開",
    question: "次の式を展開せよ。\n\\[(3x-1)^3\\]",
    answer: "\\(27x^3-27x^2+9x-1\\)",
    explanation: "\\((A-B)^3=A^3-3A^2B+3AB^2-B^3\\) を使います。\\(A=3x\\)、\\(B=1\\) です。",
    hint: "\\((A-B)^3\\) の公式を使います。"
  },
  {
    source: "研究1 (1) ②",
    type: "展開",
    question: "次の式を展開せよ。\n\\[(4a+3b)(16a^2-12ab+9b^2)\\]",
    answer: "\\(64a^3+27b^3\\)",
    explanation: "\\((4a+3b)\\{(4a)^2-(4a)(3b)+(3b)^2\\}\\) なので、和の立方の公式につながります。",
    hint: "\\(A^3+B^3\\) の形になります。"
  },
  {
    source: "研究1 (2) ①",
    type: "因数分解",
    question: "次の式を因数分解せよ。\n\\[1-a^3\\]",
    answer: "\\((1-a)(1+a+a^2)\\)",
    explanation: "\\(1-a^3=1^3-a^3\\)。\\(A^3-B^3=(A-B)(A^2+AB+B^2)\\) を使います。",
    hint: "\\(A^3-B^3\\) の公式を使います。"
  },
  {
    source: "研究1 (2) ②",
    type: "因数分解",
    question: "次の式を因数分解せよ。\n\\[1000x^3+y^3\\]",
    answer: "\\((10x+y)(100x^2-10xy+y^2)\\)",
    explanation: "\\(1000x^3=(10x)^3\\)。和の立方和 \\(A^3+B^3\\) の公式を使います。",
    hint: "\\(1000x^3\\) は \\((10x)^3\\) です。"
  },
  {
    source: "研究2 (1)",
    type: "因数分解",
    question: "次の式を因数分解せよ。\n\\[x^4-1\\]",
    answer: "\\((x^2+1)(x+1)(x-1)\\)",
    explanation: "\\(x^2\\) をひとまとまりにすると \\((x^2)^2-1\\)。さらに \\(x^2-1\\) を因数分解します。",
    hint: "\\(x^2\\) をひとまとまりにして、さらに \\(x^2-1\\) を分けます。"
  },
  {
    source: "研究2 (2)",
    type: "因数分解",
    question: "次の式を因数分解せよ。\n\\[x^4-2x^2-8\\]",
    answer: "\\((x^2+2)(x+2)(x-2)\\)",
    explanation: "\\(x^2=X\\) とおくと、\\(X^2-2X-8=(X+2)(X-4)\\)。最後に \\(X=x^2\\) を戻します。",
    hint: "\\(x^2\\) を \\(X\\) とおきます。"
  },
  {
    source: "研究2 (3)",
    type: "因数分解",
    question: "次の式を因数分解せよ。\n\\[x^4+4\\]",
    answer: "\\((x^2+2x+2)(x^2-2x+2)\\)",
    explanation: "\\(x^4+4=(x^2+2)^2-4x^2\\) と変形して、差の平方として因数分解します。",
    hint: "\\((x^2+2)^2-4x^2\\) の形に変形します。"
  },
  {
    source: "研究2 (4)",
    type: "因数分解",
    question: "次の式を因数分解せよ。\n\\[x^4-3x^2+1\\]",
    answer: "\\((x^2+x-1)(x^2-x-1)\\)",
    explanation: "\\(x^4-3x^2+1=(x^2-1)^2-x^2\\) と変形して、差の平方として因数分解します。",
    hint: "\\((x^2-1)^2-x^2\\) の形に変形します。"
  }
];

const elements = {
  app: document.querySelector("#app"),
  resultOverlay: document.querySelector("#resultOverlay"),
  homeScreen: document.querySelector("#homeScreen"),
  gameScreen: document.querySelector("#gameScreen"),
  authStatus: document.querySelector("#authStatus"),
  loginButton: document.querySelector("#loginButton"),
  logoutButton: document.querySelector("#logoutButton"),
  startButton: document.querySelector("#startButton"),
  resetButton: document.querySelector("#resetButton"),
  homeButton: document.querySelector("#homeButton"),
  heroName: document.querySelector("#heroName"),
  levelValue: document.querySelector("#levelValue"),
  expValue: document.querySelector("#expValue"),
  clearValue: document.querySelector("#clearValue"),
  sourceLabel: document.querySelector("#sourceLabel"),
  typeLabel: document.querySelector("#typeLabel"),
  problemPanel: document.querySelector("#problemPanel"),
  problemText: document.querySelector("#problemText"),
  hintCard: document.querySelector("#hintCard"),
  hintBody: document.querySelector("#hintBody"),
  solutionCard: document.querySelector("#solutionCard"),
  solutionAnswer: document.querySelector("#solutionAnswer"),
  solutionExplanation: document.querySelector("#solutionExplanation"),
  messageBox: document.querySelector("#messageBox"),
  attackButton: document.querySelector("#attackButton"),
  answerButton: document.querySelector("#answerButton"),
  hintButton: document.querySelector("#hintButton"),
  correctButton: document.querySelector("#correctButton"),
  wrongButton: document.querySelector("#wrongButton"),
  retryButton: document.querySelector("#retryButton"),
  nextButton: document.querySelector("#nextButton"),
  worldStage: document.querySelector("#worldStage"),
  heroSprite: document.querySelector("#heroSprite"),
  slimeSprite: document.querySelector("#slimeSprite"),
  slimeShadow: document.querySelector("#slimeShadow"),
  slashEffect: document.querySelector("#slashEffect"),
  damagePop: document.querySelector("#damagePop"),
  victoryToast: document.querySelector("#victoryToast")
};

const storageKey = "mathQuestProgress";
const learningDocId = "main";
let deck = [];
let auth = null;
let db = null;
let currentUser = null;
let cloudSaveTimer = null;
let isLoadingCloud = false;
let state = {
  exp: 0,
  clears: 0,
  current: null,
  problemOpen: false,
  solutionOpen: false,
  defeated: false,
  misses: 0,
  wrongWords: [],
  history: [],
  settings: {
    heroName: "アルス"
  }
};

function loadProgress() {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey) || "{}");
    state.exp = Number(saved.exp) || 0;
    state.clears = Number(saved.clears ?? saved.correctCount) || 0;
    state.wrongWords = Array.isArray(saved.wrongWords) ? saved.wrongWords : [];
    state.history = Array.isArray(saved.history) ? saved.history : [];
    state.settings = { ...state.settings, ...(saved.settings || {}) };
  } catch {
    state.exp = 0;
    state.clears = 0;
    state.wrongWords = [];
    state.history = [];
  }
  renderProgress();
}

function saveProgress() {
  localStorage.setItem(storageKey, JSON.stringify(buildLearningData(false)));
  scheduleCloudSave();
}

function buildLearningData(includeServerTime = true) {
  const data = {
    exp: state.exp,
    correctCount: state.clears,
    wrongWords: state.wrongWords.slice(-100),
    history: state.history.slice(-100),
    settings: state.settings,
    updatedAtLocal: new Date().toISOString()
  };

  if (includeServerTime && window.firebase?.firestore?.FieldValue) {
    data.updatedAt = window.firebase.firestore.FieldValue.serverTimestamp();
  }

  return data;
}

function renderProgress() {
  const level = Math.floor(state.exp / 40) + 1;
  elements.levelValue.textContent = String(level);
  elements.expValue.textContent = String(state.exp);
  elements.clearValue.textContent = String(state.clears);
  elements.heroName.textContent = state.settings.heroName || "アルス";
}

function firebaseConfigLooksReady() {
  const config = window.firebaseConfig;
  if (!config) return false;
  const requiredValues = [config.apiKey, config.authDomain, config.projectId, config.appId];
  return requiredValues.every((value) => value && !String(value).includes("YOUR_"));
}

function updateAuthUi(statusText) {
  if (!elements.authStatus || !elements.loginButton || !elements.logoutButton) return;
  elements.authStatus.textContent = statusText;
  const loggedIn = Boolean(currentUser);
  elements.loginButton.classList.toggle("is-hidden", loggedIn);
  elements.logoutButton.classList.toggle("is-hidden", !loggedIn);
}

function learningDocRef() {
  return db.collection("users").doc(currentUser.uid).collection("learningData").doc(learningDocId);
}

function applyLearningData(data = {}) {
  state.exp = Number(data.exp) || 0;
  state.clears = Number(data.correctCount ?? data.clears) || 0;
  state.wrongWords = Array.isArray(data.wrongWords) ? data.wrongWords : [];
  state.history = Array.isArray(data.history) ? data.history : [];
  state.settings = { ...state.settings, ...(data.settings || {}) };
  renderProgress();
}

async function saveCloudNow(force = false) {
  if (!db || !currentUser || (!force && isLoadingCloud)) return;

  await db.collection("users").doc(currentUser.uid).set(
    {
      displayName: currentUser.displayName || "",
      email: currentUser.email || "",
      updatedAt: window.firebase.firestore.FieldValue.serverTimestamp()
    },
    { merge: true }
  );

  await learningDocRef().set(buildLearningData(true), { merge: true });
}

function scheduleCloudSave() {
  if (!db || !currentUser || isLoadingCloud) return;
  window.clearTimeout(cloudSaveTimer);
  cloudSaveTimer = window.setTimeout(() => {
    saveCloudNow().catch((error) => {
      console.warn("Cloud save failed", error);
      updateAuthUi("ログイン中・保存待ち");
    });
  }, 500);
}

async function loadCloudProgress() {
  if (!db || !currentUser) return;
  isLoadingCloud = true;
  updateAuthUi("クラウド記録を確認中");

  try {
    const snapshot = await learningDocRef().get();
    if (snapshot.exists) {
      applyLearningData(snapshot.data());
      localStorage.setItem(storageKey, JSON.stringify(buildLearningData(false)));
    } else {
      await saveCloudNow(true);
    }
    updateAuthUi(`${currentUser.displayName || currentUser.email || "ログイン中"}`);
  } catch (error) {
    console.warn("Cloud load failed", error);
    updateAuthUi("ゲスト保存・接続待ち");
  } finally {
    isLoadingCloud = false;
  }
}

function initFirebase() {
  if (!elements.loginButton || !elements.logoutButton) return;

  if (!firebaseConfigLooksReady()) {
    elements.loginButton.disabled = true;
    updateAuthUi("ゲスト保存・Firebase未設定");
    return;
  }

  if (!window.firebase) {
    elements.loginButton.disabled = true;
    updateAuthUi("ゲスト保存・SDK未読込");
    return;
  }

  try {
    if (!window.firebase.apps.length) {
      window.firebase.initializeApp(window.firebaseConfig);
    }

    auth = window.firebase.auth();
    db = window.firebase.firestore();

    const provider = new window.firebase.auth.GoogleAuthProvider();
    elements.loginButton.addEventListener("click", async () => {
      try {
        await auth.signInWithPopup(provider);
      } catch (error) {
        if (error.code === "auth/popup-blocked") {
          await auth.signInWithRedirect(provider);
          return;
        }
        console.warn("Google sign-in failed", error);
        updateAuthUi("ログインに失敗しました");
      }
    });

    elements.logoutButton.addEventListener("click", async () => {
      await auth.signOut();
    });

    auth.onAuthStateChanged((user) => {
      currentUser = user;
      if (user) {
        updateAuthUi(`${user.displayName || user.email || "ログイン中"}`);
        loadCloudProgress();
      } else {
        updateAuthUi("ゲスト保存");
      }
    });
  } catch (error) {
    console.warn("Firebase init failed", error);
    elements.loginButton.disabled = true;
    updateAuthUi("ゲスト保存・設定確認");
  }
}

function shuffle(items) {
  const copied = [...items];
  for (let i = copied.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copied[i], copied[j]] = [copied[j], copied[i]];
  }
  return copied;
}

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function latexToHtml(value) {
  const fractions = [];
  let source = value
    .replace(/\\displaystyle/g, "")
    .replace(/\\left/g, "")
    .replace(/\\right/g, "")
    .replace(/\\,/g, " ")
    .replace(/\\times/g, "×")
    .replace(/\\cdot/g, "·")
    .replace(/\\\{/g, "{")
    .replace(/\\\}/g, "}")
    .replace(/-/g, "−");

  source = source.replace(/\\frac\{([^{}]+)\}\{([^{}]+)\}/g, (_match, top, bottom) => {
    const token = `@@FRAC_${fractions.length}@@`;
    fractions.push({ top, bottom });
    return token;
  });

  let html = escapeHtml(source)
    .replace(/\^\{([^{}]+)\}/g, "<sup>$1</sup>")
    .replace(/\^([0-9A-Za-z]+)/g, "<sup>$1</sup>")
    .replace(/([=+−×])/g, '<span class="math-op">$1</span>');

  fractions.forEach((fraction, index) => {
    const replacement = `<span class="latex-frac"><span>${latexToHtml(fraction.top)}</span><span>${latexToHtml(fraction.bottom)}</span></span>`;
    html = html.replace(`@@FRAC_${index}@@`, replacement);
  });

  return html;
}

function appendPlainText(target, text) {
  const lines = text.split("\n");
  lines.forEach((line, index) => {
    if (index > 0) target.append(document.createElement("br"));
    target.append(document.createTextNode(line));
  });
}

function renderLatexText(target, text) {
  target.replaceChildren();
  const pattern = /\\\[(.*?)\\\]|\\\((.*?)\\\)/gs;
  let cursor = 0;
  let match = pattern.exec(text);

  while (match) {
    appendPlainText(target, text.slice(cursor, match.index));
    const isBlock = Boolean(match[1]);
    const latex = match[1] || match[2] || "";
    const math = document.createElement(isBlock ? "div" : "span");
    math.className = isBlock ? "latex-block" : "latex-inline";
    math.innerHTML = latexToHtml(latex);
    target.append(math);
    cursor = match.index + match[0].length;
    match = pattern.exec(text);
  }

  appendPlainText(target, text.slice(cursor));
}

function configureButton(button, { visible = true, tone = "" }) {
  button.disabled = !visible;
  button.className = `command-button${visible ? "" : " is-hidden"}${tone ? ` ${tone}` : ""}`;
}

function setCommandMode(mode) {
  const modes = {
    encounter: {
      attack: { label: "たたかう", visible: true, tone: "is-primary" },
      check: { label: "まるつけ", visible: false },
      hint: { label: "ヒント", visible: false },
      next: { label: "すすむ", visible: false }
    },
    solving: {
      attack: { label: "たたかう", visible: false },
      check: { label: "まるつけ", visible: true, tone: "is-primary" },
      hint: { label: "ヒント", visible: true },
      next: { label: "すすむ", visible: false }
    },
    grading: {
      attack: { label: "たたかう", visible: false },
      check: { label: "○ できた", visible: true, tone: "is-good" },
      hint: { label: "× まだ", visible: true, tone: "is-bad" },
      next: { label: "すすむ", visible: false }
    },
    retry: {
      attack: { label: "もう一度", visible: true, tone: "is-primary" },
      check: { label: "○ できた", visible: false },
      hint: { label: "× まだ", visible: false },
      next: { label: "すすむ", visible: true }
    },
    victory: {
      attack: { label: "たたかう", visible: false },
      check: { label: "○ できた", visible: false },
      hint: { label: "× まだ", visible: false },
      next: { label: "すすむ", visible: true, tone: "is-primary" }
    }
  };
  const selected = modes[mode] || modes.encounter;
  configureButton(elements.attackButton, mode === "encounter" ? selected.attack : { visible: false });
  configureButton(elements.answerButton, mode === "solving" ? selected.check : { visible: false });
  configureButton(elements.hintButton, mode === "solving" ? selected.hint : { visible: false });
  configureButton(elements.correctButton, mode === "grading" ? selected.check : { visible: false });
  configureButton(elements.wrongButton, mode === "grading" ? selected.hint : { visible: false });
  configureButton(elements.retryButton, mode === "retry" ? selected.attack : { visible: false });
  configureButton(elements.nextButton, selected.next);
}

function setMessage(text) {
  elements.messageBox.textContent = text;
}

function showResultOverlay(text, tone = "good") {
  elements.resultOverlay.textContent = text;
  elements.resultOverlay.className = `result-overlay ${tone} is-active`;
  window.clearTimeout(showResultOverlay.timer);
  showResultOverlay.timer = window.setTimeout(() => {
    elements.resultOverlay.classList.remove("is-active");
  }, 1500);
}

function currentProblemId() {
  if (!state.current) return "";
  return `${state.current.source}::${state.current.type}::${state.current.question}`;
}

function recordLearningResult(result) {
  if (!state.current) return;

  const answeredAt = new Date().toISOString();
  const problemId = currentProblemId();
  state.history.push({
    problemId,
    result,
    source: state.current.source,
    type: state.current.type,
    answeredAt,
    expAfter: state.exp,
    correctCountAfter: state.clears
  });
  state.history = state.history.slice(-100);

  if (result !== "wrong") return;

  const previous = state.wrongWords.find((item) => item.problemId === problemId);
  const wrongEntry = {
    problemId,
    word: state.current.source,
    source: state.current.source,
    type: state.current.type,
    question: state.current.question,
    count: (previous?.count || 0) + 1,
    lastWrongAt: answeredAt
  };

  state.wrongWords = [
    ...state.wrongWords.filter((item) => item.problemId !== problemId),
    wrongEntry
  ].slice(-100);
}

function showScreen(screenName) {
  elements.homeScreen.classList.toggle("is-active", screenName === "home");
  elements.gameScreen.classList.toggle("is-active", screenName === "game");
}

function hideHint() {
  elements.hintCard.classList.add("is-hidden");
  elements.hintBody.replaceChildren();
}

function hideSolution() {
  state.solutionOpen = false;
  elements.problemPanel.classList.remove("is-reviewing");
  elements.solutionCard.classList.add("is-hidden");
  elements.solutionAnswer.replaceChildren();
  elements.solutionExplanation.replaceChildren();
}

function drawProblem() {
  if (deck.length === 0) {
    deck = shuffle(problems);
  }
  state.current = deck.pop();
  state.problemOpen = false;
  state.solutionOpen = false;
  state.defeated = false;
  state.misses = 0;
  elements.sourceLabel.textContent = state.current.source;
  elements.typeLabel.textContent = state.current.type;
  renderLatexText(elements.problemText, "スライムに近づくと問題があらわれる。");
  hideHint();
  hideSolution();
  elements.slimeSprite.classList.remove("is-defeated", "is-hit", "is-wrong");
  elements.slimeSprite.style.visibility = "visible";
  elements.slimeShadow.classList.remove("is-hidden");
  elements.worldStage.classList.remove("is-victory");
  elements.damagePop.classList.remove("is-active");
  elements.victoryToast.classList.remove("is-active");
  elements.resultOverlay.classList.remove("is-active");
  setCommandMode("encounter");
  setMessage("スライムがあらわれた！");
}

function startGame() {
  showScreen("game");
  if (!state.current || state.defeated) {
    drawProblem();
  } else {
    renderProgress();
  }
}

function openProblem() {
  if (!state.current || state.defeated) return;
  state.problemOpen = true;
  state.solutionOpen = false;
  hideSolution();
  hideHint();
  renderLatexText(elements.problemText, state.current.question);
  setCommandMode("solving");
  setMessage(`${state.current.type}の問題だ！ ノートで解いたら、まるつけを選ぼう。`);
}

function revealSolution() {
  if (!state.current || !state.problemOpen || state.defeated) return;
  state.solutionOpen = true;
  hideHint();
  elements.problemPanel.classList.add("is-reviewing");
  elements.solutionCard.classList.remove("is-hidden");
  renderLatexText(elements.solutionAnswer, `答え：${state.current.answer}`);
  renderLatexText(elements.solutionExplanation, state.current.explanation);
  setCommandMode("grading");
  setMessage("下のコマンドで、合っていたら「○ できた」、違っていたら「× まだ」を選ぼう。");
}

function handleCheckCommand() {
  if (!state.solutionOpen) {
    revealSolution();
    return;
  }
  markCorrect();
}

function handleHintCommand() {
  if (state.solutionOpen) {
    markWrong();
    return;
  }
  showHint();
}

function markCorrect() {
  if (!state.current || state.defeated || !state.solutionOpen) return;
  state.defeated = true;
  state.problemOpen = false;
  state.solutionOpen = true;
  state.exp += 10;
  state.clears += 1;
  recordLearningResult("correct");
  saveProgress();
  renderProgress();
  setCommandMode("victory");
  elements.worldStage.classList.remove("is-victory");
  elements.heroSprite.classList.remove("is-attacking");
  elements.slimeSprite.classList.remove("is-defeated", "is-hit", "is-wrong");
  elements.slashEffect.classList.remove("is-active");
  elements.damagePop.classList.remove("is-active");
  elements.victoryToast.classList.remove("is-active");
  void elements.heroSprite.offsetWidth;
  void elements.slimeSprite.offsetWidth;
  showResultOverlay("正解！ スライム撃破  EXP +10", "good");
  elements.worldStage.classList.add("is-victory");
  elements.heroSprite.classList.add("is-attacking");
  elements.slimeSprite.classList.add("is-hit");
  elements.slashEffect.classList.add("is-active");
  elements.damagePop.classList.add("is-active");
  elements.victoryToast.classList.add("is-active");
  setMessage("正解！ スライムをたおした。経験値を10手に入れた。");
  window.setTimeout(() => {
    elements.slimeSprite.classList.add("is-defeated");
    elements.slimeShadow.classList.add("is-hidden");
  }, 300);
}

function markWrong() {
  if (!state.current || state.defeated || !state.solutionOpen) return;
  state.misses += 1;
  recordLearningResult("wrong");
  saveProgress();
  showResultOverlay("もう一度挑戦！", "bad");
  bumpSprite(elements.slimeSprite, "is-wrong");
  setCommandMode("retry");
  setMessage("惜しい！ 経験値は入らない。もう一度挑戦するか、すすむで次のスライムへ。");
}

function retryProblem() {
  if (!state.current || state.defeated) return;
  openProblem();
  setMessage("もう一度挑戦！ 解けたら、まるつけで解答を確認しよう。");
}

function handleAttackCommand() {
  if (state.solutionOpen && !state.defeated) {
    retryProblem();
    return;
  }
  openProblem();
}

function bumpSprite(sprite, className) {
  sprite.classList.remove(className);
  void sprite.offsetWidth;
  sprite.classList.add(className);
}

function showHint() {
  if (!state.current || state.defeated) return;
  elements.hintCard.classList.remove("is-hidden");
  renderLatexText(elements.hintBody, state.current.hint);
  setMessage("ヒントを表示した。問題カードの下を見よう。");
}

function resetProgress() {
  localStorage.removeItem(storageKey);
  state.exp = 0;
  state.clears = 0;
  state.wrongWords = [];
  state.history = [];
  state.settings = { heroName: "アルス" };
  renderProgress();
  saveProgress();
  deck = [];
  state.current = null;
  setMessage("記録をリセットした。");
}

elements.startButton.addEventListener("click", startGame);
elements.resetButton.addEventListener("click", resetProgress);
elements.homeButton.addEventListener("click", () => showScreen("home"));
elements.attackButton.addEventListener("click", openProblem);
elements.answerButton.addEventListener("click", revealSolution);
elements.hintButton.addEventListener("click", showHint);
elements.correctButton.addEventListener("click", markCorrect);
elements.wrongButton.addEventListener("click", markWrong);
elements.retryButton.addEventListener("click", retryProblem);
elements.nextButton.addEventListener("click", drawProblem);

loadProgress();
initFirebase();
deck = shuffle(problems);
