

// カテゴリ切り替え（出店者）
document.querySelectorAll(".category-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const category = btn.dataset.category;
    document.querySelectorAll(".category-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    document.querySelectorAll(".stall-card").forEach(card => {
      if (category === "all" || card.dataset.category === category) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});

// ステージモーダル表示
document.querySelectorAll(".timeline li").forEach(item => {
  item.addEventListener("click", () => {
    const id = item.dataset.performer;
    const modal = document.getElementById(`modal-${id}`);
    if (modal) modal.style.display = "flex";
  });
});
document.querySelectorAll(".modal .close").forEach(closeBtn => {
  closeBtn.addEventListener("click", () => {
    closeBtn.closest(".modal").style.display = "none";
  });
});
document.querySelectorAll(".modal").forEach(modal => {
  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
  });
});

// スポンサーシャッフル
window.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector(".sponsor-grid");
  if (grid) {
    const items = Array.from(grid.children);
    const shuffled = items.sort(() => Math.random() - 0.5);
    shuffled.forEach(item => grid.appendChild(item));
  }
});

// ギャラリータブ切替
document.querySelectorAll(".tab-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const tab = btn.dataset.tab;
    document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    document.querySelectorAll(".gallery-content").forEach(content => {
      content.style.display = content.id === `tab-${tab}` ? "block" : "none";
    });
  });
});


// FAQ アコーディオン開閉
document.querySelectorAll(".faq-question").forEach(q => {
  q.addEventListener("click", () => {
    const answer = q.nextElementSibling;
    const isOpen = answer.style.display === "block";
    document.querySelectorAll(".faq-answer").forEach(a => a.style.display = "none");
    answer.style.display = isOpen ? "none" : "block";
  });
});

// FAQ ジャンル切替
document.querySelectorAll(".faq-tab").forEach(tab => {
  tab.addEventListener("click", () => {
    const category = tab.dataset.category;
    document.querySelectorAll(".faq-tab").forEach(t => t.classList.remove("active"));
    tab.classList.add("active");

    document.querySelectorAll(".faq-item").forEach(item => {
      const itemCat = item.dataset.category;
      item.style.display = (category === "all" || itemCat === category) ? "block" : "none";
    });
  });
});

// FAQ 検索フィルター
document.getElementById("faq-search").addEventListener("input", e => {
  const keyword = e.target.value.toLowerCase();
  document.querySelectorAll(".faq-item").forEach(item => {
    const text = item.innerText.toLowerCase();
    item.style.display = text.includes(keyword) ? "block" : "none";
  });
});
