
document.addEventListener('DOMContentLoaded', () => {
  console.log("JS Loaded.");

  // FAQ アコーディオン
  document.querySelectorAll('.faq-question')?.forEach(q => {
    q.addEventListener('click', () => {
      const a = q.nextElementSibling;
      a.style.display = a.style.display === 'block' ? 'none' : 'block';
    });
  });

  // FAQ カテゴリ切替
  document.querySelectorAll('.faq-tab')?.forEach(tab => {
    tab.addEventListener('click', () => {
      const cat = tab.dataset.category;
      document.querySelectorAll('.faq-item').forEach(item => {
        item.style.display = cat === 'all' || item.dataset.category === cat ? 'block' : 'none';
      });
    });
  });

  // ギャラリー切替（仮構成）
  document.querySelectorAll('.tab-btn')?.forEach(btn => {
    btn.addEventListener('click', () => {
      const tab = btn.dataset.tab;
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      document.querySelectorAll('.gallery-content').forEach(content => {
        content.style.display = content.id === 'tab-' + tab ? 'block' : 'none';
      });
    });
  });

  // スポンサーシャッフル（仮構成）
  const grid = document.querySelector('.sponsor-grid');
  if (grid) {
    const items = Array.from(grid.children);
    const shuffled = items.sort(() => Math.random() - 0.5);
    shuffled.forEach(item => grid.appendChild(item));
  }
});
