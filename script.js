// ============================================
// Everyday English Canada — phrase data & UI
// ============================================

// Category keys map to the data-category values on the filter buttons.
const CATEGORY_LABELS = {
  grocery: "Grocery Store",
  restaurant: "Restaurant",
  health: "Doctor & Pharmacy",
  renting: "Renting a Home",
};

// Each phrase: English text, Chinese translation, category,
// and an optional "note" with a helpful tip about Canadian customs.
const phrases = [
  // ----- Grocery Store -----
  {
    english: "Excuse me, where can I find the milk?",
    chinese: "请问，牛奶在哪里？",
    category: "grocery",
  },
  {
    english: "Is this on sale this week?",
    chinese: "这个这周在打折吗？",
    category: "grocery",
  },
  {
    english: "Could I get a bag, please?",
    chinese: "请给我一个袋子，好吗？",
    category: "grocery",
    note: "Most stores charge a small fee for bags, so many people bring their own.",
  },
  {
    english: "Can I pay with debit?",
    chinese: "我可以用借记卡付款吗？",
    category: "grocery",
    note: "Debit and tap payments are accepted almost everywhere in Canada.",
  },
  {
    english: "Sorry, I think this rang up at the wrong price.",
    chinese: "不好意思，这个价格好像扫错了。",
    category: "grocery",
  },
  {
    english: "No points card, thanks.",
    chinese: "没有积分卡，谢谢。",
    category: "grocery",
    note: "Cashiers often ask “Do you have a points card?” — this is a polite way to say no.",
  },
  {
    english: "Do you take returns if I keep the receipt?",
    chinese: "如果我保留收据，可以退货吗？",
    category: "grocery",
  },
  {
    english: "That's everything, thanks.",
    chinese: "就这些了，谢谢。",
    category: "grocery",
    note: "A friendly way to finish at the checkout.",
  },
  {
    english: "Could you help me find gluten-free bread?",
    chinese: "你能帮我找无麸质面包吗？",
    category: "grocery",
  },

  // ----- Restaurant -----
  {
    english: "Hi, table for two, please.",
    chinese: "你好，两位，谢谢。",
    category: "restaurant",
  },
  {
    english: "What do you recommend?",
    chinese: "你有什么推荐的吗？",
    category: "restaurant",
  },
  {
    english: "I'll have the salmon, please.",
    chinese: "我要三文鱼，谢谢。",
    category: "restaurant",
    note: "“I'll have…” is the most natural way to order food.",
  },
  {
    english: "Could I get some water, please?",
    chinese: "请给我一杯水，好吗？",
    category: "restaurant",
    note: "Tap water is free at restaurants in Canada.",
  },
  {
    english: "Could you make it less spicy?",
    chinese: "可以做得不那么辣吗？",
    category: "restaurant",
  },
  {
    english: "Could we get the bill, please?",
    chinese: "请给我们账单，好吗？",
    category: "restaurant",
    note: "Canadians say “bill” rather than “check”.",
  },
  {
    english: "Can we split the bill?",
    chinese: "我们可以分开付账吗？",
    category: "restaurant",
    note: "Splitting the bill is very common and servers are happy to do it.",
  },
  {
    english: "Could I get a box for this, please?",
    chinese: "请给我一个打包盒，好吗？",
    category: "restaurant",
    note: "Taking leftovers home is completely normal.",
  },
  {
    english: "Everything was great, thank you!",
    chinese: "一切都很好，谢谢！",
    category: "restaurant",
    note: "Tipping 15–20% is customary at sit-down restaurants.",
  },

  // ----- Doctor & Pharmacy -----
  {
    english: "I'd like to book an appointment, please.",
    chinese: "我想预约看医生。",
    category: "health",
  },
  {
    english: "Do you accept walk-ins?",
    chinese: "你们接受无预约就诊吗？",
    category: "health",
    note: "Walk-in clinics see patients without appointments and are common in Canada.",
  },
  {
    english: "Here's my health card.",
    chinese: "这是我的健康卡。",
    category: "health",
    note: "Clinics usually ask for your provincial health card before your visit.",
  },
  {
    english: "I've had a headache for three days.",
    chinese: "我头疼已经三天了。",
    category: "health",
  },
  {
    english: "I have a fever and a sore throat.",
    chinese: "我发烧，喉咙痛。",
    category: "health",
  },
  {
    english: "I'm allergic to penicillin.",
    chinese: "我对青霉素过敏。",
    category: "health",
    note: "Always mention allergies to both doctors and pharmacists.",
  },
  {
    english: "Do I need a prescription for this?",
    chinese: "这个需要处方吗？",
    category: "health",
  },
  {
    english: "I'm here to pick up a prescription.",
    chinese: "我来取处方药。",
    category: "health",
  },
  {
    english: "How often should I take this medication?",
    chinese: "这个药应该多久吃一次？",
    category: "health",
  },
  {
    english: "Does this medication have any side effects?",
    chinese: "这个药有副作用吗？",
    category: "health",
  },

  // ----- Renting a Home -----
  {
    english: "Hi, is the apartment still available?",
    chinese: "你好，这套公寓还在出租吗？",
    category: "renting",
  },
  {
    english: "When could I come see the place?",
    chinese: "我什么时候可以来看房？",
    category: "renting",
    note: "Viewing a place in person before signing anything is strongly recommended.",
  },
  {
    english: "Are utilities included in the rent?",
    chinese: "房租包含水电费吗？",
    category: "renting",
    note: "“Utilities” means heat, water, and electricity.",
  },
  {
    english: "Is laundry in the building or in the unit?",
    chinese: "洗衣机是在楼里还是在房间里？",
    category: "renting",
  },
  {
    english: "Is the unit pet-friendly?",
    chinese: "这个房子可以养宠物吗？",
    category: "renting",
  },
  {
    english: "Is parking included?",
    chinese: "包含停车位吗？",
    category: "renting",
  },
  {
    english: "Do you require first and last month's rent?",
    chinese: "需要支付第一个月和最后一个月的房租吗？",
    category: "renting",
    note: "In many provinces, landlords ask for first and last month's rent up front.",
  },
  {
    english: "I'd like to sign a one-year lease.",
    chinese: "我想签一年的租约。",
    category: "renting",
  },
  {
    english: "The heating isn't working — could you send someone to take a look?",
    chinese: "暖气坏了——可以派人来看看吗？",
    category: "renting",
  },
  {
    english: "How much notice do I need to give before moving out?",
    chinese: "搬走之前需要提前多久通知？",
    category: "renting",
    note: "60 days' written notice is standard in several provinces, including Ontario.",
  },
];

// ---------- Elements ----------

const cardGrid = document.getElementById("card-grid");
const emptyState = document.getElementById("empty-state");
const resultCount = document.getElementById("result-count");
const searchInput = document.getElementById("search-input");
const filterButtons = document.querySelectorAll(".filter-btn");

// ---------- State ----------

let activeCategory = "all";
let searchText = "";

// ---------- Rendering ----------

// Build one card. Uses textContent (not innerHTML) so all text stays safe.
function createCard(phrase) {
  const card = document.createElement("li");
  card.className = "phrase-card";

  const category = document.createElement("span");
  category.className = "phrase-category";
  category.textContent = CATEGORY_LABELS[phrase.category];

  const english = document.createElement("p");
  english.className = "phrase-english";
  english.textContent = phrase.english;
  english.lang = "en";

  const chinese = document.createElement("p");
  chinese.className = "phrase-chinese";
  chinese.textContent = phrase.chinese;
  chinese.lang = "zh";

  card.append(category, english, chinese);

  if (phrase.note) {
    const note = document.createElement("p");
    note.className = "phrase-note";
    note.textContent = phrase.note;
    card.append(note);
  }

  const copyBtn = document.createElement("button");
  copyBtn.type = "button";
  copyBtn.className = "copy-btn";
  copyBtn.textContent = "Copy English";
  copyBtn.setAttribute("aria-label", "Copy English phrase: " + phrase.english);
  copyBtn.addEventListener("click", function () {
    copyPhrase(copyBtn, phrase.english);
  });
  card.append(copyBtn);

  return card;
}

// Apply the current search + category filter and re-render the grid.
function render() {
  const query = searchText.trim().toLowerCase();

  const visible = phrases.filter(function (phrase) {
    const matchesCategory =
      activeCategory === "all" || phrase.category === activeCategory;
    const matchesSearch =
      query === "" ||
      phrase.english.toLowerCase().includes(query) ||
      phrase.chinese.includes(query);
    return matchesCategory && matchesSearch;
  });

  cardGrid.replaceChildren();
  visible.forEach(function (phrase) {
    cardGrid.append(createCard(phrase));
  });

  emptyState.hidden = visible.length > 0;
  resultCount.textContent =
    visible.length === 1
      ? "Showing 1 phrase"
      : "Showing " + visible.length + " phrases";
}

// ---------- Copy to clipboard ----------

function copyPhrase(button, text) {
  // Older browsers may not have the clipboard API at all.
  if (!navigator.clipboard) {
    showCopyFeedback(button, "Copy failed");
    return;
  }

  navigator.clipboard
    .writeText(text)
    .then(function () {
      showCopyFeedback(button, "Copied!");
    })
    .catch(function () {
      // Clipboard access can fail (e.g. permissions), so tell the user.
      showCopyFeedback(button, "Copy failed");
    });
}

// Temporarily swap the button label, then restore it.
function showCopyFeedback(button, message) {
  button.textContent = message;
  button.classList.add("is-copied");
  setTimeout(function () {
    button.textContent = "Copy English";
    button.classList.remove("is-copied");
  }, 1500);
}

// ---------- Events ----------

searchInput.addEventListener("input", function () {
  searchText = searchInput.value;
  render();
});

filterButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    activeCategory = button.dataset.category;
    filterButtons.forEach(function (b) {
      b.classList.toggle("is-active", b === button);
      b.setAttribute("aria-pressed", b === button ? "true" : "false");
    });
    render();
  });
});

// Initial render
render();
