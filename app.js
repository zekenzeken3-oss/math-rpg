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

function selectFirst(...selectors) {
  for (const selector of selectors) {
    const node = document.querySelector(selector);
    if (node) return node;
  }
  return null;
}

const elements = {
  app: document.querySelector("#app"),
  resultOverlay: document.querySelector("#resultOverlay"),
  homeScreen: document.querySelector("#homeScreen"),
  villageScreen: document.querySelector("#villageScreen"),
  mapScreen: document.querySelector("#mapScreen"),
  fieldScreen: document.querySelector("#fieldScreen"),
  statusScreen: document.querySelector("#statusScreen"),
  officeScreen: document.querySelector("#officeScreen"),
  gameScreen: document.querySelector("#gameScreen"),
  authStatus: document.querySelector("#authStatus"),
  loginButton: selectFirst("#loginButton", "#googleLoginButton", "[data-action='google-login']"),
  logoutButton: document.querySelector("#logoutButton"),
  heroNameModal: document.querySelector("#heroNameModal"),
  heroNameInput: document.querySelector("#heroNameInput"),
  heroNameSaveButton: document.querySelector("#heroNameSaveButton"),
  heroNameCancelButton: document.querySelector("#heroNameCancelButton"),
  heroNameError: document.querySelector("#heroNameError"),
  startButton: selectFirst("#startButton", "#guestStartButton", "[data-action='guest-start']"),
  resetButton: document.querySelector("#resetButton"),
  homeButton: document.querySelector("#homeButton"),
  toMapButton: document.querySelector("#toMapButton"),
  toOfficeButton: document.querySelector("#toOfficeButton"),
  toStatusButton: document.querySelector("#toStatusButton"),
  toPracticeButton: document.querySelector("#toPracticeButton"),
  renameHeroButton: document.querySelector("#renameHeroButton"),
  backHomeFromVillageButton: document.querySelector("#backHomeFromVillageButton"),
  areaExpansionButton: document.querySelector("#areaExpansionButton"),
  areaSetLogicButton: document.querySelector("#areaSetLogicButton"),
  backVillageFromMapButton: document.querySelector("#backVillageFromMapButton"),
  fieldTitle: document.querySelector("#fieldTitle"),
  fieldSub: document.querySelector("#fieldSub"),
  fieldCleared: document.querySelector("#fieldCleared"),
  fieldTotal: document.querySelector("#fieldTotal"),
  fieldPercent: document.querySelector("#fieldPercent"),
  fieldBackButton: document.querySelector("#fieldBackButton"),
  fieldBackVillageButton: document.querySelector("#fieldBackVillageButton"),
  fieldCanvas: document.querySelector("#fieldCanvas"),
  fieldFade: document.querySelector("#fieldFade"),
  fieldMessage: document.querySelector("#fieldMessage"),
  fieldMessageText: document.querySelector("#fieldMessageText"),
  dpad: document.querySelector("#dpad"),
  dpadUp: document.querySelector("#dpadUp"),
  dpadDown: document.querySelector("#dpadDown"),
  dpadLeft: document.querySelector("#dpadLeft"),
  dpadRight: document.querySelector("#dpadRight"),
  backVillageFromStatusButton: document.querySelector("#backVillageFromStatusButton"),
  statusRenameButton: document.querySelector("#statusRenameButton"),
  backVillageFromOfficeButton: document.querySelector("#backVillageFromOfficeButton"),
  statusHeroName: document.querySelector("#statusHeroName"),
  statusExp: document.querySelector("#statusExp"),
  statusCorrect: document.querySelector("#statusCorrect"),
  statusWrong: document.querySelector("#statusWrong"),
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
const profileDocId = "main";
const rpgStorageKey = "mathQuestRpgProblemsV2";
const rpgStorageKeyLegacy = "mathQuestRpgProblemsV1";
const rpgStateStorageKey = "mathQuestRpgStateV1";
const loginStartStorageKey = "mathQuestOpenVillageAfterLogin";
let deck = [];
let auth = null;
let db = null;
let currentUser = null;
let shouldOpenVillageAfterLogin = false;
let cloudSaveTimer = null;
let isLoadingCloud = false;
let rpgProblems = {};
let rpgState = { unlockedGates: {} };
let rpgLoaded = false;
let areaBusy = false;
let pendingEncounterTimer = null;
let heroPosition = { x: 12, y: 72 };
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
  currentAreaId: "",
  currentProblemId: "",
  returnScreen: "",
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
  try {
    const legacy = JSON.parse(localStorage.getItem(rpgStorageKeyLegacy) || "{}") || {};
    const current = JSON.parse(localStorage.getItem(rpgStorageKey) || "{}") || {};
    rpgProblems = { ...legacy, ...current };
    localStorage.setItem(rpgStorageKey, JSON.stringify(rpgProblems || {}));
  } catch {
    rpgProblems = {};
  }
  try {
    const savedRpgState = JSON.parse(localStorage.getItem(rpgStateStorageKey) || "{}") || {};
    rpgState = { unlockedGates: {}, ...savedRpgState };
  } catch {
    rpgState = { unlockedGates: {} };
  }
  renderProgress();
}

function saveProgress() {
  localStorage.setItem(storageKey, JSON.stringify(buildLearningData(false)));
  localStorage.setItem(rpgStorageKey, JSON.stringify(rpgProblems || {}));
  localStorage.setItem(rpgStateStorageKey, JSON.stringify(rpgState || { unlockedGates: {} }));
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
  renderStatus();
}

function renderStatus() {
  if (!elements.statusHeroName) return;
  const wrongTotal = Array.isArray(state.wrongWords)
    ? state.wrongWords.reduce((sum, item) => sum + (Number(item?.count) || 1), 0)
    : 0;
  elements.statusHeroName.textContent = state.settings.heroName || "アルス";
  elements.statusExp.textContent = String(state.exp);
  elements.statusCorrect.textContent = String(state.clears);
  elements.statusWrong.textContent = String(wrongTotal);
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

function rememberLoginStart() {
  shouldOpenVillageAfterLogin = true;
  try {
    sessionStorage.setItem(loginStartStorageKey, "1");
  } catch {
    // sessionStorage may be unavailable in some privacy modes.
  }
}

function consumeLoginStart() {
  let remembered = shouldOpenVillageAfterLogin;
  try {
    remembered = remembered || sessionStorage.getItem(loginStartStorageKey) === "1";
    sessionStorage.removeItem(loginStartStorageKey);
  } catch {
    // Ignore storage access failures and use the in-memory flag.
  }
  shouldOpenVillageAfterLogin = false;
  return remembered;
}

function clearLoginStart() {
  shouldOpenVillageAfterLogin = false;
  try {
    sessionStorage.removeItem(loginStartStorageKey);
  } catch {
    // Ignore storage access failures.
  }
}

function learningDocRef() {
  return db.collection("users").doc(currentUser.uid).collection("learningData").doc(learningDocId);
}

function profileDocRef() {
  return db.collection("users").doc(currentUser.uid).collection("profile").doc(profileDocId);
}

async function loadRpgProgress() {
  rpgLoaded = true;
  if (!db || !currentUser) return;
  try {
    const userRef = db.collection("users").doc(currentUser.uid);
    const snapshot = await userRef.collection("rpgProblems").get();

    const loaded = {};
    snapshot.forEach((docSnap) => {
      loaded[docSnap.id] = docSnap.data() || {};
    });
    rpgProblems = { ...(rpgProblems || {}), ...loaded };
    localStorage.setItem(rpgStorageKey, JSON.stringify(rpgProblems || {}));

    const stateSnap = await userRef.collection("rpgState").doc("field").get();
    if (stateSnap.exists) {
      rpgState = { unlockedGates: {}, ...(rpgState || {}), ...(stateSnap.data() || {}) };
      localStorage.setItem(rpgStateStorageKey, JSON.stringify(rpgState || { unlockedGates: {} }));
    }
  } catch (error) {
    console.warn("RPG load failed", error);
  }
}

async function saveRpgState() {
  rpgState = { unlockedGates: {}, ...(rpgState || {}) };
  localStorage.setItem(rpgStateStorageKey, JSON.stringify(rpgState));

  if (!db || !currentUser) return;
  try {
    await db.collection("users").doc(currentUser.uid).collection("rpgState").doc("field").set(
      {
        unlockedGates: rpgState.unlockedGates || {},
        updatedAt: window.firebase.firestore.FieldValue.serverTimestamp()
      },
      { merge: true }
    );
  } catch (error) {
    console.warn("RPG state save failed", error);
  }
}

async function markRpgCleared(problem, meta = {}) {
  if (!problem || !problem.problemId) return;
  const problemId = problem.problemId;
  const areaId = problem.areaId || meta.areaId || "";

  const nextLocal = {
    status: "cleared",
    areaId,
    lastClearedAtLocal: new Date().toISOString(),
    correctCount: (Number(rpgProblems?.[problemId]?.correctCount) || 0) + 1
  };

  rpgProblems = { ...(rpgProblems || {}), [problemId]: { ...(rpgProblems?.[problemId] || {}), ...nextLocal } };
  localStorage.setItem(rpgStorageKey, JSON.stringify(rpgProblems || {}));

  if (!db || !currentUser) return;
  try {
    await db.collection("users").doc(currentUser.uid).collection("rpgProblems").doc(problemId).set(
      {
        status: "cleared",
        areaId,
        lastClearedAt: window.firebase.firestore.FieldValue.serverTimestamp(),
        correctCount: window.firebase.firestore.FieldValue.increment(1)
      },
      { merge: true }
    );
  } catch (error) {
    console.warn("RPG clear save failed", error);
  }
}

function applyLearningData(data = {}) {
  state.exp = Number(data.exp) || 0;
  state.clears = Number(data.correctCount ?? data.clears) || 0;
  state.wrongWords = Array.isArray(data.wrongWords) ? data.wrongWords : [];
  state.history = Array.isArray(data.history) ? data.history : [];
  state.settings = { ...state.settings, ...(data.settings || {}) };
  renderProgress();
}

function normalizeHeroName(raw) {
  const name = String(raw || "").trim();
  if (!name) return "";
  return name.slice(0, 12);
}

function setHeroNameLocal(heroName) {
  const normalized = normalizeHeroName(heroName);
  if (!normalized) return false;
  state.settings.heroName = normalized;
  saveProgress();
  renderProgress();
  return true;
}

function openHeroNameModal(options = {}) {
  if (!elements.heroNameModal) return;
  elements.heroNameError.classList.add("is-hidden");
  elements.heroNameError.textContent = "";
  elements.heroNameModal.classList.remove("is-hidden");
  elements.heroNameModal.dataset.force = options.force ? "1" : "0";
  const initial = state.settings.heroName || "";
  elements.heroNameInput.value = normalizeHeroName(initial);
  elements.heroNameInput.focus();
  elements.heroNameInput.select();
}

function closeHeroNameModal() {
  if (!elements.heroNameModal) return;
  elements.heroNameModal.classList.add("is-hidden");
  elements.heroNameModal.dataset.force = "0";
}

async function loadProfile() {
  if (!db || !currentUser) return;
  try {
    const snapshot = await profileDocRef().get();
    if (!snapshot.exists) return { exists: false, heroName: "" };
    const data = snapshot.data() || {};
    const heroName = normalizeHeroName(data.heroName);
    if (heroName) {
      state.settings.heroName = heroName;
      saveProgress();
      renderProgress();
    }
    return { exists: true, heroName };
  } catch (error) {
    console.warn("Profile load failed", error);
    return { exists: false, heroName: "" };
  }
}

async function saveProfileHeroName(heroName) {
  if (!db || !currentUser) return;
  const normalized = normalizeHeroName(heroName);
  if (!normalized) throw new Error("heroName is empty");

  const ref = profileDocRef();
  const now = window.firebase.firestore.FieldValue.serverTimestamp();
  const base = {
    heroName: normalized,
    profileVersion: 1,
    updatedAt: now
  };

  const existing = await ref.get();
  if (!existing.exists) {
    await ref.set({ ...base, createdAt: now }, { merge: true });
  } else {
    await ref.set(base, { merge: true });
  }

  state.settings.heroName = normalized;
  saveProgress();
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

async function ensureHeroName() {
  const heroName = normalizeHeroName(state.settings.heroName);
  if (heroName) return;

  if (currentUser) {
    openHeroNameModal({ force: true });
    return;
  }
}

async function ensureHeroNameAfterLogin() {
  const profile = await loadProfile();
  if (!profile || !profile.heroName) {
    openHeroNameModal({ force: true });
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
      rememberLoginStart();
      try {
        const result = await auth.signInWithPopup(provider);
        currentUser = result?.user || currentUser;
        if (consumeLoginStart()) {
          openVillage();
        }
      } catch (error) {
        if (error.code === "auth/popup-blocked") {
          await auth.signInWithRedirect(provider);
          return;
        }
        clearLoginStart();
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
        void loadCloudProgress()
          .then(() => ensureHeroNameAfterLogin())
          .then(() => loadRpgProgress())
          .then(() => {
            if (consumeLoginStart()) {
              openVillage();
            }
          })
          .catch((error) => {
            console.warn("Login setup failed", error);
            if (consumeLoginStart()) {
              openVillage();
            }
          });
      } else {
        clearLoginStart();
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
  if (screenName !== "field") {
    stopFieldLoop();
  }

  const mapping = {
    home: elements.homeScreen,
    village: elements.villageScreen,
    map: elements.mapScreen,
    field: elements.fieldScreen,
    status: elements.statusScreen,
    office: elements.officeScreen,
    game: elements.gameScreen
  };

  const target = mapping[screenName] || elements.homeScreen;
  const allScreens = document.querySelectorAll ? document.querySelectorAll(".screen") : [];
  if (allScreens.length > 0) {
    allScreens.forEach((node) => {
      node.classList.toggle("is-active", node === target);
    });
    return Boolean(target);
  }

  Object.entries(mapping).forEach(([, node]) => {
    if (!node) return;
    node.classList.toggle("is-active", node === target);
  });
  return Boolean(target);
}

function pad3(numberValue) {
  return String(numberValue).padStart(3, "0");
}

function ensureProblemIds(areaId = "expansion-grass") {
  problems.forEach((problem, index) => {
    if (problem.problemId) return;
    problem.areaId = problem.areaId || areaId;
    problem.problemId = `${problem.areaId}-${pad3(index + 1)}`;
  });
}

function getAreaProblems(areaId) {
  ensureProblemIds(areaId);
  return problems.filter((problem) => (problem.areaId || areaId) === areaId);
}

function isProblemCleared(problemId) {
  return rpgProblems?.[problemId]?.status === "cleared";
}

function fieldGateKey(areaId, gateId) {
  return `${areaId}:${gateId}`;
}

function isFieldGateUnlocked(areaId, gateId) {
  return Boolean(rpgState?.unlockedGates?.[fieldGateKey(areaId, gateId)]);
}

function unlockFieldGate(areaId, gateId) {
  rpgState = { unlockedGates: {}, ...(rpgState || {}) };
  rpgState.unlockedGates = { ...(rpgState.unlockedGates || {}), [fieldGateKey(areaId, gateId)]: true };
  return saveRpgState();
}

function computeAreaProgress(areaId) {
  const list = getAreaProblems(areaId);
  const total = list.length;
  const cleared = list.reduce((sum, problem) => sum + (isProblemCleared(problem.problemId) ? 1 : 0), 0);
  const percent = total === 0 ? 0 : Math.floor((cleared / total) * 100);
  return { total, cleared, percent };
}

function renderArea(areaId) {
  state.currentAreaId = areaId;
  areaBusy = false;
  if (pendingEncounterTimer) {
    window.clearTimeout(pendingEncounterTimer);
    pendingEncounterTimer = null;
  }
  const areaName = areaId === "expansion-grass" ? "式と展開と因数分解の草原" : "エリア";
  if (elements.areaTitle) elements.areaTitle.textContent = areaName;
  if (elements.areaSubtitle) elements.areaSubtitle.textContent = "スライムをタップして戦闘開始";

  const list = getAreaProblems(areaId);
  const progress = computeAreaProgress(areaId);
  if (elements.areaTotal) elements.areaTotal.textContent = String(progress.total);
  if (elements.areaCleared) elements.areaCleared.textContent = String(progress.cleared);
  if (elements.areaPercent) elements.areaPercent.textContent = `${progress.percent}%`;

  if (elements.areaClearCard) elements.areaClearCard.classList.toggle("is-hidden", progress.cleared !== progress.total || progress.total === 0);

  if (!elements.areaField) return;
  elements.areaField.classList.remove("is-locked");

  // Remove previous slimes only (keep hero + encounter overlay)
  const keepIds = new Set(["fieldHero", "areaEncounter"]);
  Array.from(elements.areaField.children).forEach((child) => {
    if (child && child.id && keepIds.has(child.id)) return;
    if (child && child.classList && child.classList.contains("area-encounter")) return;
    if (child && child.id === "fieldHero") return;
    if (child && child.className && String(child.className).includes("field-slime")) child.remove?.();
  });

  const visibleProblems = list.filter((problem) => !isProblemCleared(problem.problemId)).slice(0, 12);
  const positions = getGrassPositions();

  // hero initial position
  setHeroPosition(heroPosition.x, heroPosition.y, false);

  visibleProblems.forEach((problem, index) => {
    const pos = positions[index % positions.length];
    const depth = computeDepthFromY(pos.y);
    const button = document.createElement("button");
    button.type = "button";
    button.className = "field-slime";
    button.style.left = `${pos.x}%`;
    button.style.top = `${pos.y}%`;
    button.style.setProperty("--scale", String(depth.scale));
    button.style.setProperty("--z", String(depth.z));
    button.dataset.problemId = problem.problemId;
    button.dataset.areaId = areaId;
    button.dataset.x = String(pos.x);
    button.dataset.y = String(pos.y);

    const img = document.createElement("img");
    img.src = "assets/slime.svg";
    img.alt = "スライム";

    const label = document.createElement("div");
    label.className = "field-slime-label";
    label.textContent = problem.problemId;

    button.append(img, label);
    button.addEventListener("click", () => beginEncounter(problem, pos));
    elements.areaField.append(button);
  });
}

function computeDepthFromY(yPercent) {
  const t = Math.max(0, Math.min(1, (yPercent - 12) / 76));
  const scale = 0.82 + t * 0.38;
  const z = 2 + Math.round(t * 8);
  return { scale: Number(scale.toFixed(3)), z };
}

function clampPercent(value) {
  return Math.max(6, Math.min(94, value));
}

function setHeroPosition(xPercent, yPercent, animate = true) {
  heroPosition = { x: clampPercent(xPercent), y: clampPercent(yPercent) };
  if (!elements.fieldHero) return;
  if (!animate) {
    const prev = elements.fieldHero.style.transition;
    elements.fieldHero.style.transition = "none";
    elements.fieldHero.style.left = `${heroPosition.x}%`;
    elements.fieldHero.style.top = `${heroPosition.y}%`;
    void elements.fieldHero.offsetWidth;
    elements.fieldHero.style.transition = prev;
    return;
  }
  elements.fieldHero.style.left = `${heroPosition.x}%`;
  elements.fieldHero.style.top = `${heroPosition.y}%`;
}

function getGrassPositions() {
  return [
    { x: 20, y: 18 },
    { x: 44, y: 16 },
    { x: 72, y: 20 },
    { x: 84, y: 34 },
    { x: 62, y: 32 },
    { x: 34, y: 30 },
    { x: 16, y: 40 },
    { x: 48, y: 44 },
    { x: 76, y: 48 },
    { x: 24, y: 60 },
    { x: 56, y: 64 },
    { x: 84, y: 70 }
  ];
}

function showEncounter(text) {
  if (!elements.areaEncounter) return;
  if (elements.areaEncounterText) elements.areaEncounterText.textContent = text;
  elements.areaEncounter.classList.remove("is-hidden");
}

function hideEncounter() {
  if (!elements.areaEncounter) return;
  elements.areaEncounter.classList.add("is-hidden");
}

function beginEncounter(problem, position) {
  if (areaBusy) return;
  areaBusy = true;
  if (elements.areaField) elements.areaField.classList.add("is-locked");
  if (elements.fieldHero) elements.fieldHero.classList.add("is-moving");

  // move hero near slime
  const targetX = clampPercent(position.x - 6);
  const targetY = clampPercent(position.y + 10);
  setHeroPosition(targetX, targetY, true);

  let finished = false;
  const finishMove = () => {
    if (finished) return;
    finished = true;
    if (elements.fieldHero) elements.fieldHero.classList.remove("is-moving");
    showEncounter("スライムがあらわれた！");
    pendingEncounterTimer = window.setTimeout(() => {
      hideEncounter();
      areaBusy = false;
      if (elements.areaField) elements.areaField.classList.remove("is-locked");
      enterBattleWithProblem(problem);
    }, 1000);
  };

  if (elements.fieldHero) {
    elements.fieldHero.addEventListener("transitionend", finishMove, { once: true });
    window.setTimeout(finishMove, 520);
  } else {
    finishMove();
  }
}

function openArea(areaId) {
  hideEncounter();
  renderArea(areaId);
  showScreen("area");
}

function setCurrentProblem(problem) {
  state.current = problem;
  state.currentProblemId = problem.problemId || "";
  state.problemOpen = false;
  state.solutionOpen = false;
  state.defeated = false;
  state.misses = 0;
  elements.sourceLabel.textContent = state.current.source;
  elements.typeLabel.textContent = state.current.type;
  renderLatexText(elements.problemText, "スライムに近づくと問題が現れる。");
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

function enterBattleWithProblem(problem) {
  showScreen("game");
  setCurrentProblem(problem);
  renderProgress();
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

function startGame(event) {
  event?.preventDefault?.();
  openVillage();
  void ensureHeroName();
}

function enterBattle() {
  state.currentAreaId = "";
  state.currentProblemId = "";
  showScreen("game");
  if (!state.current || state.defeated) {
    drawProblem();
  } else {
    renderProgress();
  }
}

function openVillage() {
  showScreen("village");
  renderProgress();
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

  const clearedProblem = state.current;
  void markRpgCleared(clearedProblem, { areaId: state.currentAreaId });
  if (clearedProblem?.unlockGate) {
    void unlockFieldGate(state.currentAreaId || clearedProblem.areaId || "expansion-grass", clearedProblem.unlockGate);
  }
  window.setTimeout(() => {
    if (state.returnScreen === "field" && state.currentAreaId) {
      showResultOverlay("討伐完了！", "good");
      openGrassField();
    } else if (state.currentAreaId) {
      showResultOverlay("討伐完了！", "good");
      showScreen("map");
    }
  }, 850);
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

let fieldState = null;
let fieldRaf = null;
let fieldLocked = false;
const fieldAreaId = "expansion-grass";
const fieldGateId = "old-road";
const fieldActiveEnemyLimit = 7;
const fieldHeroStart = { x: 8, y: 15 };
const fieldSpecialSlimeTile = { x: 20, y: 11 };
const fieldGateTiles = [
  { x: 21, y: 11 },
  { x: 22, y: 11 },
  { x: 21, y: 12 }
];

function openGrassField() {
  ensureProblemIds(fieldAreaId);
  state.currentAreaId = fieldAreaId;
  state.returnScreen = "field";
  setupFieldState();
  renderFieldHud();
  showScreen("field");
  startFieldLoop();
}

function renderFieldHud() {
  const progress = computeAreaProgress(fieldAreaId);
  if (elements.fieldTitle) elements.fieldTitle.textContent = "式と展開と因数分解の草原";
  if (elements.fieldSub)
    elements.fieldSub.textContent = isFieldGateUnlocked(fieldAreaId, fieldGateId)
      ? "古い道が開いた。奥まで探索できる"
      : "特殊スライムを倒すと道が開きそう";
  if (elements.fieldTotal) elements.fieldTotal.textContent = String(progress.total);
  if (elements.fieldCleared) elements.fieldCleared.textContent = String(progress.cleared);
  if (elements.fieldPercent) elements.fieldPercent.textContent = `${progress.percent}%`;
}

function showFieldEncounter(text) {
  if (elements.fieldMessageText) elements.fieldMessageText.textContent = text;
  elements.fieldCanvas?.parentElement?.classList.add("is-encountering");
  elements.fieldFade?.classList.remove("is-hidden");
  elements.fieldMessage?.classList.remove("is-hidden");
}

function hideFieldEncounter() {
  elements.fieldCanvas?.parentElement?.classList.remove("is-encountering");
  elements.fieldFade?.classList.add("is-hidden");
  elements.fieldMessage?.classList.add("is-hidden");
}

function setupFieldState() {
  const width = 32;
  const height = 22;
  const tileSize = 32;
  const groups = getFieldProblemGroups(fieldAreaId);
  const specialAlreadyCleared = groups.special && isProblemCleared(groups.special.problemId);
  let gateUnlocked = isFieldGateUnlocked(fieldAreaId, fieldGateId) || Boolean(specialAlreadyCleared);

  if (gateUnlocked && !isFieldGateUnlocked(fieldAreaId, fieldGateId)) {
    rpgState = { unlockedGates: {}, ...(rpgState || {}) };
    rpgState.unlockedGates = { ...(rpgState.unlockedGates || {}), [fieldGateKey(fieldAreaId, fieldGateId)]: true };
    void saveRpgState();
  }

  const tiles = buildGrassTiles(width, height, gateUnlocked);
  const collision = buildCollision(tiles, width, height);
  const enemies = buildFieldEnemies(groups, collision, tiles, width, height, gateUnlocked);

  fieldState = {
    width,
    height,
    tileSize,
    tiles,
    collision,
    hero: {
      x: fieldHeroStart.x,
      y: fieldHeroStart.y,
      fromX: fieldHeroStart.x,
      fromY: fieldHeroStart.y,
      toX: fieldHeroStart.x,
      toY: fieldHeroStart.y,
      moving: false,
      startedAt: 0,
      duration: 135,
      facing: "down"
    },
    enemies,
    encountering: false,
    gateUnlocked
  };
  fieldLocked = false;
  hideFieldEncounter();
}

function getFieldProblemGroups(areaId) {
  const list = getAreaProblems(areaId);
  const special = list.find((problem) => /研究2/.test(problem.source || "")) || list[list.length - 1] || null;
  const normal = list.filter((problem) => problem.problemId !== special?.problemId && !isProblemCleared(problem.problemId));
  return { normal, special };
}

function buildFieldEnemies(groups, collision, tiles, width, height, gateUnlocked) {
  const enemies = [];
  const occupied = new Set();

  if (groups.special && !gateUnlocked && !isProblemCleared(groups.special.problemId)) {
    enemies.push({
      ...fieldSpecialSlimeTile,
      kind: "special",
      problemId: groups.special.problemId,
      unlockGate: fieldGateId
    });
    occupied.add(`${fieldSpecialSlimeTile.x},${fieldSpecialSlimeTile.y}`);
  }

  const normalProblems = shuffleArray(groups.normal).slice(0, Math.max(0, fieldActiveEnemyLimit - enemies.length));
  const candidates = getFieldSpawnCandidates(collision, tiles, width, height, occupied);

  normalProblems.forEach((problem, index) => {
    const tile = candidates[index];
    if (!tile) return;
    occupied.add(`${tile.x},${tile.y}`);
    enemies.push({ ...tile, kind: "normal", problemId: problem.problemId });
  });

  return enemies;
}

function getFieldSpawnCandidates(collision, tiles, width, height, occupied) {
  const candidates = [];
  for (let y = 2; y < height - 2; y += 1) {
    for (let x = 2; x < width - 2; x += 1) {
      const key = `${x},${y}`;
      const tile = tiles[y * width + x];
      const distanceFromHero = Math.abs(x - fieldHeroStart.x) + Math.abs(y - fieldHeroStart.y);
      if (collision.has(key) || occupied.has(key) || tile === 2 || tile === 3 || tile === 4) continue;
      if (distanceFromHero < 5) continue;
      if (fieldGateTiles.some((gate) => Math.abs(gate.x - x) + Math.abs(gate.y - y) < 2)) continue;
      candidates.push({ x, y });
    }
  }
  return shuffleArray(candidates);
}

function shuffleArray(items) {
  const copy = items.slice();
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }
  return copy;
}

function buildGrassTiles(width, height, gateUnlocked) {
  const tiles = new Array(width * height).fill(0);
  for (let y = 0; y < height; y += 1) {
    const riverX = y < 10 ? 4 : 5;
    setFieldTile(tiles, width, riverX, y, 2);
    setFieldTile(tiles, width, riverX + 1, y, 2);
  }
  for (let y = 15; y < height; y += 1) {
    setFieldTile(tiles, width, 27, y, 2);
    setFieldTile(tiles, width, 28, y, 2);
  }
  for (let x = 6; x < width - 2; x += 1) {
    setFieldTile(tiles, width, x, 11, 1);
  }
  for (let y = 7; y < height - 2; y += 1) {
    setFieldTile(tiles, width, 8, y, 1);
  }
  for (let y = 11; y < 17; y += 1) {
    setFieldTile(tiles, width, 16, y, 1);
  }
  [
    { x: 2, y: 2 },
    { x: 3, y: 2 },
    { x: 2, y: 3 },
    { x: 24, y: 3 },
    { x: 25, y: 3 },
    { x: 24, y: 4 },
    { x: 12, y: 4 },
    { x: 13, y: 4 },
    { x: 29, y: 8 },
    { x: 30, y: 8 },
    { x: 12, y: 15 },
    { x: 13, y: 15 },
    { x: 13, y: 16 },
    { x: 22, y: 16 },
    { x: 23, y: 16 },
    { x: 22, y: 17 }
  ].forEach((position) => setFieldTile(tiles, width, position.x, position.y, 3));
  fieldGateTiles.forEach((position) => setFieldTile(tiles, width, position.x, position.y, gateUnlocked ? 1 : 4));
  return tiles;
}

function setFieldTile(tiles, width, x, y, value) {
  const height = tiles.length / width;
  if (x < 0 || y < 0 || x >= width || y >= height) return;
  tiles[y * width + x] = value;
}

function buildCollision(tiles, width, height) {
  const blocked = new Set();
  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      const tile = tiles[y * width + x];
      if (tile === 2 || tile === 3 || tile === 4) blocked.add(`${x},${y}`);
    }
  }
  return blocked;
}

function getFieldEnemyAt(x, y) {
  if (!fieldState) return null;
  return fieldState.enemies.find((enemy) => enemy.x === x && enemy.y === y) || null;
}

function attemptFieldMove(dx, dy) {
  if (!fieldState || fieldLocked) return;
  const hero = fieldState.hero;
  if (hero.moving || fieldState.encountering) return;
  const nextX = hero.x + dx;
  const nextY = hero.y + dy;
  hero.facing = dx > 0 ? "right" : dx < 0 ? "left" : dy > 0 ? "down" : "up";
  if (nextX < 0 || nextY < 0 || nextX >= fieldState.width || nextY >= fieldState.height) return;
  if (fieldState.collision.has(`${nextX},${nextY}`)) return;
  const enemy = getFieldEnemyAt(nextX, nextY);
  if (enemy) {
    startFieldEncounter(enemy);
    return;
  }
  hero.fromX = hero.x;
  hero.fromY = hero.y;
  hero.toX = nextX;
  hero.toY = nextY;
  hero.x = nextX;
  hero.y = nextY;
  hero.moving = true;
  hero.startedAt = performance.now();
}

function startFieldEncounter(enemy) {
  if (!fieldState) return;
  const baseProblem = getAreaProblems(fieldAreaId).find((item) => item.problemId === enemy.problemId);
  if (!baseProblem) return;
  const problem = {
    ...baseProblem,
    areaId: fieldAreaId,
    enemyKind: enemy.kind || "normal",
    unlockGate: enemy.unlockGate || ""
  };
  fieldState.encountering = true;
  fieldLocked = true;
  showFieldEncounter(enemy.kind === "special" ? "強そうなスライムが道をふさいだ！" : "スライムがあらわれた！");
  window.setTimeout(() => {
    hideFieldEncounter();
    fieldState.encountering = false;
    fieldLocked = false;
    state.returnScreen = "field";
    enterBattleWithProblem(problem);
  }, 1000);
}

function startFieldLoop() {
  if (!elements.fieldCanvas) return;
  if (fieldRaf) cancelAnimationFrame(fieldRaf);
  const tick = () => {
    drawField();
    fieldRaf = requestAnimationFrame(tick);
  };
  fieldRaf = requestAnimationFrame(tick);
}

function stopFieldLoop() {
  if (!fieldRaf) return;
  cancelAnimationFrame(fieldRaf);
  fieldRaf = null;
}

function drawField() {
  if (!fieldState || !elements.fieldCanvas) return;
  const canvas = elements.fieldCanvas;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  const rect = canvas.getBoundingClientRect();
  const dpr = window.devicePixelRatio || 1;
  const cssWidth = Math.max(320, Math.floor(rect.width));
  const cssHeight = Math.max(260, Math.floor(rect.height));
  const targetWidth = Math.floor(cssWidth * dpr);
  const targetHeight = Math.floor(cssHeight * dpr);
  if (canvas.width !== targetWidth || canvas.height !== targetHeight) {
    canvas.width = targetWidth;
    canvas.height = targetHeight;
  }
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

  fieldState.tileSize = getResponsiveFieldTileSize(cssWidth, cssHeight);
  const { width, height, tileSize, tiles } = fieldState;
  const heroPixel = getHeroPixel();
  const mapWidth = width * tileSize;
  const mapHeight = height * tileSize;
  const cameraX = getFieldCameraOffset(heroPixel.x, mapWidth, cssWidth);
  const cameraY = getFieldCameraOffset(heroPixel.y, mapHeight, cssHeight);

  ctx.clearRect(0, 0, cssWidth, cssHeight);
  drawFieldBackdrop(ctx, cssWidth, cssHeight);
  const startX = Math.max(0, Math.floor(-cameraX / tileSize) - 1);
  const endX = Math.min(width, Math.ceil((-cameraX + cssWidth) / tileSize) + 1);
  const startY = Math.max(0, Math.floor(-cameraY / tileSize) - 1);
  const endY = Math.min(height, Math.ceil((-cameraY + cssHeight) / tileSize) + 1);

  for (let y = startY; y < endY; y += 1) {
    for (let x = startX; x < endX; x += 1) {
      drawFieldTile(ctx, x, y, tileSize, cameraX, cameraY, tiles[y * width + x]);
    }
  }

  const sprites = fieldState.enemies
    .filter((enemy) => !isProblemCleared(enemy.problemId))
    .map((enemy) => ({
      depth: (enemy.y + 0.7) * tileSize,
      draw: () => drawFieldSlime(ctx, enemy.x, enemy.y, tileSize, cameraX, cameraY, enemy.kind)
    }));
  sprites.push({
    depth: heroPixel.y + tileSize * 0.4,
    draw: () => drawFieldHero(ctx, heroPixel.x + cameraX, heroPixel.y + cameraY, tileSize, fieldState.hero)
  });
  sprites.sort((a, b) => a.depth - b.depth).forEach((sprite) => sprite.draw());

  const hero = fieldState.hero;
  if (hero.moving && performance.now() - hero.startedAt >= hero.duration) {
    hero.moving = false;
  }
}

function getHeroPixel() {
  const hero = fieldState.hero;
  const tileSize = fieldState.tileSize;
  if (!hero.moving) return { x: (hero.x + 0.5) * tileSize, y: (hero.y + 0.5) * tileSize };
  const t = clampNumber((performance.now() - hero.startedAt) / hero.duration, 0, 1);
  const eased = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
  return {
    x: (hero.fromX + (hero.toX - hero.fromX) * eased + 0.5) * tileSize,
    y: (hero.fromY + (hero.toY - hero.fromY) * eased + 0.5) * tileSize
  };
}

function getResponsiveFieldTileSize(viewWidth, viewHeight) {
  const targetColumns = viewWidth >= 1100 ? 25 : viewWidth >= 760 ? 21 : 14;
  const targetRows = viewHeight >= 660 ? 17 : viewHeight >= 520 ? 14 : 12;
  return clampNumber(Math.floor(Math.min(viewWidth / targetColumns, viewHeight / targetRows)), 24, 42);
}

function getFieldCameraOffset(center, mapSize, viewSize) {
  if (mapSize <= viewSize) return (viewSize - mapSize) / 2;
  return clampNumber(viewSize / 2 - center, viewSize - mapSize, 0);
}

function clampNumber(value, minValue, maxValue) {
  return Math.max(minValue, Math.min(maxValue, value));
}

function drawFieldBackdrop(ctx, width, height) {
  const sky = ctx.createLinearGradient(0, 0, 0, height);
  sky.addColorStop(0, "#7fc7df");
  sky.addColorStop(0.24, "#9edc9f");
  sky.addColorStop(1, "#1f6e3e");
  ctx.fillStyle = sky;
  ctx.fillRect(0, 0, width, height);
  ctx.fillStyle = "rgba(44, 128, 70, 0.38)";
  ctx.beginPath();
  ctx.ellipse(width * 0.28, height * 0.15, width * 0.38, height * 0.13, 0, 0, Math.PI * 2);
  ctx.ellipse(width * 0.76, height * 0.14, width * 0.35, height * 0.12, 0, 0, Math.PI * 2);
  ctx.fill();
}

function drawFieldTile(ctx, x, y, tileSize, cameraX, cameraY, type) {
  const px = x * tileSize + cameraX;
  const py = y * tileSize + cameraY;
  const tileSeed = (x * 17 + y * 31) % 11;
  if (type === 2) {
    const water = ctx.createLinearGradient(px, py, px, py + tileSize);
    water.addColorStop(0, "#2e93bf");
    water.addColorStop(1, "#1d5f93");
    ctx.fillStyle = water;
    ctx.fillRect(px, py, tileSize, tileSize);
    ctx.strokeStyle = "rgba(255,255,255,0.22)";
    ctx.lineWidth = Math.max(1, tileSize * 0.04);
    ctx.beginPath();
    ctx.moveTo(px + tileSize * 0.12, py + tileSize * 0.38);
    ctx.quadraticCurveTo(px + tileSize * 0.36, py + tileSize * 0.28, px + tileSize * 0.58, py + tileSize * 0.38);
    ctx.quadraticCurveTo(px + tileSize * 0.78, py + tileSize * 0.48, px + tileSize * 0.94, py + tileSize * 0.36);
    ctx.stroke();
    return;
  }
  if (type === 1) {
    ctx.fillStyle = "#b78e57";
    ctx.fillRect(px, py, tileSize, tileSize);
    ctx.fillStyle = "rgba(73,49,29,0.16)";
    ctx.fillRect(px + tileSize * 0.18, py + tileSize * 0.22, tileSize * 0.12, tileSize * 0.08);
    ctx.fillRect(px + tileSize * 0.62, py + tileSize * 0.66, tileSize * 0.16, tileSize * 0.07);
    return;
  }
  const noise = tileSeed / 11;
  ctx.fillStyle = `rgb(${34 + Math.floor(noise * 8)}, ${112 + Math.floor(noise * 36)}, ${54 + Math.floor(noise * 10)})`;
  ctx.fillRect(px, py, tileSize, tileSize);
  ctx.fillStyle = "rgba(214,255,170,0.22)";
  ctx.fillRect(px + tileSize * 0.18, py + tileSize * 0.18, Math.max(1, tileSize * 0.06), tileSize * 0.22);
  ctx.fillRect(px + tileSize * 0.74, py + tileSize * 0.28, Math.max(1, tileSize * 0.05), tileSize * 0.18);
  if (tileSeed === 2 || tileSeed === 7) {
    ctx.fillStyle = tileSeed === 2 ? "#f4e278" : "#ff9db3";
    ctx.beginPath();
    ctx.arc(px + tileSize * 0.58, py + tileSize * 0.64, Math.max(1.5, tileSize * 0.045), 0, Math.PI * 2);
    ctx.fill();
  }
  if (type === 3) {
    ctx.fillStyle = "rgba(0,0,0,0.18)";
    ctx.beginPath();
    ctx.ellipse(px + tileSize * 0.55, py + tileSize * 0.76, tileSize * 0.22, tileSize * 0.09, 0, 0, Math.PI * 2);
    ctx.fill();
    if ((x + y) % 2 === 0) {
      ctx.fillStyle = "#6d523d";
      ctx.fillRect(px + tileSize * 0.45, py + tileSize * 0.52, tileSize * 0.12, tileSize * 0.27);
      ctx.fillStyle = "#244d2d";
      ctx.beginPath();
      ctx.arc(px + tileSize * 0.5, py + tileSize * 0.42, tileSize * 0.25, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "#2f6f3b";
      ctx.beginPath();
      ctx.arc(px + tileSize * 0.36, py + tileSize * 0.5, tileSize * 0.18, 0, Math.PI * 2);
      ctx.arc(px + tileSize * 0.64, py + tileSize * 0.5, tileSize * 0.18, 0, Math.PI * 2);
      ctx.fill();
    } else {
      ctx.fillStyle = "#6d756c";
      ctx.beginPath();
      ctx.ellipse(px + tileSize * 0.5, py + tileSize * 0.58, tileSize * 0.24, tileSize * 0.18, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "rgba(255,255,255,0.18)";
      ctx.beginPath();
      ctx.ellipse(px + tileSize * 0.42, py + tileSize * 0.5, tileSize * 0.08, tileSize * 0.04, -0.5, 0, Math.PI * 2);
      ctx.fill();
    }
  }
  if (type === 4) {
    ctx.fillStyle = "#726158";
    ctx.fillRect(px, py, tileSize, tileSize);
    ctx.fillStyle = "#493d39";
    ctx.beginPath();
    ctx.moveTo(px + tileSize * 0.12, py + tileSize * 0.72);
    ctx.lineTo(px + tileSize * 0.34, py + tileSize * 0.28);
    ctx.lineTo(px + tileSize * 0.58, py + tileSize * 0.72);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = "#8b7d73";
    ctx.beginPath();
    ctx.moveTo(px + tileSize * 0.43, py + tileSize * 0.74);
    ctx.lineTo(px + tileSize * 0.68, py + tileSize * 0.22);
    ctx.lineTo(px + tileSize * 0.9, py + tileSize * 0.74);
    ctx.closePath();
    ctx.fill();
  }
}

function drawFieldSlime(ctx, x, y, tileSize, cameraX, cameraY, kind = "normal") {
  const cx = (x + 0.5) * tileSize + cameraX;
  const bob = Math.sin(performance.now() / 280 + x * 0.8 + y * 0.4) * tileSize * 0.035;
  const cy = (y + 0.56) * tileSize + cameraY + bob;
  const isSpecial = kind === "special";
  const radius = tileSize * (isSpecial ? 0.32 : 0.25);
  const bodyColor = isSpecial ? "#a561ff" : "#55c8ff";
  const bodyDark = isSpecial ? "#6430a9" : "#2680bd";
  ctx.fillStyle = "rgba(0,0,0,0.28)";
  ctx.beginPath();
  ctx.ellipse(cx, cy + tileSize * 0.24, radius * 0.95, tileSize * 0.1, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = bodyColor;
  ctx.beginPath();
  ctx.moveTo(cx - radius, cy + tileSize * 0.02);
  ctx.quadraticCurveTo(cx - radius * 0.62, cy - radius * 0.76, cx, cy - radius * 0.92);
  ctx.quadraticCurveTo(cx + radius * 0.62, cy - radius * 0.76, cx + radius, cy + tileSize * 0.02);
  ctx.quadraticCurveTo(cx + radius * 0.82, cy + radius * 0.92, cx, cy + radius * 0.88);
  ctx.quadraticCurveTo(cx - radius * 0.82, cy + radius * 0.92, cx - radius, cy + tileSize * 0.02);
  ctx.closePath();
  ctx.fill();
  ctx.strokeStyle = bodyDark;
  ctx.lineWidth = Math.max(2, tileSize * 0.055);
  ctx.stroke();
  ctx.fillStyle = "rgba(255,255,255,0.25)";
  ctx.beginPath();
  ctx.arc(cx - radius * 0.3, cy - radius * 0.34, radius * 0.28, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "#17120a";
  ctx.beginPath();
  ctx.arc(cx - radius * 0.28, cy, Math.max(2, radius * 0.09), 0, Math.PI * 2);
  ctx.arc(cx + radius * 0.28, cy, Math.max(2, radius * 0.09), 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = "#17120a";
  ctx.lineWidth = Math.max(1.5, tileSize * 0.035);
  ctx.beginPath();
  ctx.arc(cx, cy + radius * 0.16, radius * 0.22, 0.1 * Math.PI, 0.9 * Math.PI);
  ctx.stroke();
  if (isSpecial) {
    ctx.fillStyle = "#ffdc5c";
    ctx.strokeStyle = "#6b4b00";
    ctx.lineWidth = Math.max(1.5, tileSize * 0.035);
    ctx.beginPath();
    ctx.moveTo(cx - radius * 0.48, cy - radius * 0.82);
    ctx.lineTo(cx - radius * 0.2, cy - radius * 1.2);
    ctx.lineTo(cx, cy - radius * 0.86);
    ctx.lineTo(cx + radius * 0.24, cy - radius * 1.22);
    ctx.lineTo(cx + radius * 0.5, cy - radius * 0.82);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
  }
}

function drawFieldHero(ctx, cx, cy, tileSize, hero) {
  const moveT = hero.moving ? clampNumber((performance.now() - hero.startedAt) / hero.duration, 0, 1) : 0;
  const bob = hero.moving ? Math.sin(moveT * Math.PI) * tileSize * 0.09 : 0;
  const baseY = cy - bob;
  const unit = tileSize / 32;
  ctx.fillStyle = "rgba(0,0,0,0.3)";
  ctx.beginPath();
  ctx.ellipse(cx, cy + tileSize * 0.34, tileSize * 0.28, tileSize * 0.09, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "#2762b0";
  ctx.strokeStyle = "#17120a";
  ctx.lineWidth = Math.max(2, 2.5 * unit);
  ctx.beginPath();
  drawFieldRoundedRect(ctx, cx - 7 * unit, baseY - 1 * unit, 14 * unit, 16 * unit, 3 * unit);
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = "#b9273c";
  ctx.beginPath();
  ctx.moveTo(cx - 8 * unit, baseY);
  ctx.lineTo(cx - 15 * unit, baseY + 18 * unit);
  ctx.lineTo(cx - 2 * unit, baseY + 13 * unit);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = "#ffe48d";
  ctx.strokeStyle = "#20170a";
  ctx.lineWidth = Math.max(2, 2.4 * unit);
  ctx.beginPath();
  ctx.arc(cx, baseY - 11 * unit, 10 * unit, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = "#7a4b28";
  ctx.beginPath();
  ctx.arc(cx - 3 * unit, baseY - 17 * unit, 8 * unit, Math.PI, Math.PI * 2);
  ctx.arc(cx + 4 * unit, baseY - 16 * unit, 7 * unit, Math.PI, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "#1b1a21";
  ctx.fillRect(cx - 4 * unit, baseY - 12 * unit, 2 * unit, 2 * unit);
  ctx.fillRect(cx + 3 * unit, baseY - 12 * unit, 2 * unit, 2 * unit);
  ctx.strokeStyle = "#1b1a21";
  ctx.lineWidth = Math.max(1.4, 1.5 * unit);
  ctx.beginPath();
  ctx.arc(cx, baseY - 8 * unit, 3 * unit, 0.1 * Math.PI, 0.9 * Math.PI);
  ctx.stroke();
  ctx.fillStyle = "#c9d7e8";
  ctx.strokeStyle = "#17120a";
  ctx.lineWidth = Math.max(1.5, 2 * unit);
  ctx.beginPath();
  drawFieldRoundedRect(ctx, cx - 15 * unit, baseY + 1 * unit, 8 * unit, 11 * unit, 3 * unit);
  ctx.fill();
  ctx.stroke();
  ctx.strokeStyle = "#d7dde8";
  ctx.lineWidth = Math.max(2, 2.5 * unit);
  const swordSide = hero.facing === "left" ? -1 : 1;
  ctx.beginPath();
  ctx.moveTo(cx + swordSide * 11 * unit, baseY + 12 * unit);
  ctx.lineTo(cx + swordSide * 19 * unit, baseY - 8 * unit);
  ctx.stroke();
  ctx.fillStyle = "#8b5d2c";
  ctx.fillRect(cx + Math.min(swordSide * 8 * unit, swordSide * 14 * unit), baseY + 9 * unit, 6 * unit, 3 * unit);
}

function drawFieldRoundedRect(ctx, x, y, width, height, radius) {
  if (typeof ctx.roundRect === "function") {
    ctx.roundRect(x, y, width, height, radius);
    return;
  }
  const r = Math.min(radius, Math.abs(width) / 2, Math.abs(height) / 2);
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + width - r, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + r);
  ctx.lineTo(x + width, y + height - r);
  ctx.quadraticCurveTo(x + width, y + height, x + width - r, y + height);
  ctx.lineTo(x + r, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
}

if (elements.startButton) elements.startButton.addEventListener("click", startGame);
if (elements.resetButton) elements.resetButton.addEventListener("click", resetProgress);
if (elements.homeButton) elements.homeButton.addEventListener("click", openVillage);
if (elements.attackButton) elements.attackButton.addEventListener("click", openProblem);
if (elements.answerButton) elements.answerButton.addEventListener("click", revealSolution);
if (elements.hintButton) elements.hintButton.addEventListener("click", showHint);
if (elements.correctButton) elements.correctButton.addEventListener("click", markCorrect);
if (elements.wrongButton) elements.wrongButton.addEventListener("click", markWrong);
if (elements.retryButton) elements.retryButton.addEventListener("click", retryProblem);
if (elements.nextButton) elements.nextButton.addEventListener("click", drawProblem);

if (elements.toMapButton) elements.toMapButton.addEventListener("click", () => showScreen("map"));
if (elements.toOfficeButton) elements.toOfficeButton.addEventListener("click", () => showScreen("office"));
if (elements.toStatusButton)
  elements.toStatusButton.addEventListener("click", () => {
    renderProgress();
    showScreen("status");
  });
if (elements.toPracticeButton) elements.toPracticeButton.addEventListener("click", enterBattle);
if (elements.backHomeFromVillageButton) elements.backHomeFromVillageButton.addEventListener("click", () => showScreen("home"));
if (elements.backVillageFromMapButton) elements.backVillageFromMapButton.addEventListener("click", openVillage);
if (elements.backVillageFromStatusButton) elements.backVillageFromStatusButton.addEventListener("click", openVillage);
if (elements.backVillageFromOfficeButton) elements.backVillageFromOfficeButton.addEventListener("click", openVillage);
if (elements.areaExpansionButton) elements.areaExpansionButton.addEventListener("click", openGrassField);
if (elements.areaBackMapButton) elements.areaBackMapButton.addEventListener("click", () => showScreen("map"));
if (elements.areaBackVillageButton) elements.areaBackVillageButton.addEventListener("click", openVillage);
if (elements.areaBackVillageButton2) elements.areaBackVillageButton2.addEventListener("click", openVillage);
if (elements.fieldBackButton) elements.fieldBackButton.addEventListener("click", () => showScreen("map"));
if (elements.fieldBackVillageButton) elements.fieldBackVillageButton.addEventListener("click", openVillage);
if (elements.dpadUp) elements.dpadUp.addEventListener("click", () => attemptFieldMove(0, -1));
if (elements.dpadDown) elements.dpadDown.addEventListener("click", () => attemptFieldMove(0, 1));
if (elements.dpadLeft) elements.dpadLeft.addEventListener("click", () => attemptFieldMove(-1, 0));
if (elements.dpadRight) elements.dpadRight.addEventListener("click", () => attemptFieldMove(1, 0));

window.addEventListener("keydown", (event) => {
  if (!elements.fieldScreen?.classList.contains("is-active")) return;
  const key = event.key.toLowerCase();
  if (key === "arrowup" || key === "w") {
    event.preventDefault();
    attemptFieldMove(0, -1);
  } else if (key === "arrowdown" || key === "s") {
    event.preventDefault();
    attemptFieldMove(0, 1);
  } else if (key === "arrowleft" || key === "a") {
    event.preventDefault();
    attemptFieldMove(-1, 0);
  } else if (key === "arrowright" || key === "d") {
    event.preventDefault();
    attemptFieldMove(1, 0);
  }
});

function showHeroNameError(message) {
  elements.heroNameError.textContent = message;
  elements.heroNameError.classList.remove("is-hidden");
}

async function submitHeroName() {
  const proposed = normalizeHeroName(elements.heroNameInput.value);
  if (!proposed) {
    showHeroNameError("勇者名を入力してください。");
    return;
  }

  elements.heroNameError.classList.add("is-hidden");
  elements.heroNameError.textContent = "";

  try {
    if (currentUser && db) {
      await saveProfileHeroName(proposed);
    } else {
      setHeroNameLocal(proposed);
    }
    closeHeroNameModal();
  } catch (error) {
    console.warn("Hero name save failed", error);
    showHeroNameError("保存に失敗しました。通信状態を確認してください。");
  }
}

if (elements.renameHeroButton) elements.renameHeroButton.addEventListener("click", () => openHeroNameModal({ force: false }));
if (elements.statusRenameButton) elements.statusRenameButton.addEventListener("click", () => openHeroNameModal({ force: false }));

if (elements.heroNameSaveButton) elements.heroNameSaveButton.addEventListener("click", () => void submitHeroName());
if (elements.heroNameCancelButton)
  elements.heroNameCancelButton.addEventListener("click", () => {
    const forced = elements.heroNameModal?.dataset?.force === "1";
    if (forced) return;
    closeHeroNameModal();
  });
if (elements.heroNameModal)
  elements.heroNameModal.addEventListener("click", (event) => {
    const target = event.target;
    if (!target || !target.dataset) return;
    if (target.dataset.close !== "heroNameModal") return;
    const forced = elements.heroNameModal?.dataset?.force === "1";
    if (forced) return;
    closeHeroNameModal();
  });
if (elements.heroNameInput)
  elements.heroNameInput.addEventListener("keydown", (event) => {
    if (event.key !== "Enter") return;
    event.preventDefault();
    void submitHeroName();
  });

loadProgress();
initFirebase();
ensureProblemIds("expansion-grass");
deck = shuffle(problems);
