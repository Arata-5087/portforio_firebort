// JavaScript Document


document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("loginModal");
    const loginButton = document.querySelector(".login_button");
    const closeButton = document.querySelector(".close");

    // ログインボタンをクリックしたらモーダルを表示
    loginButton.addEventListener("click", (event) => {
        event.preventDefault(); // デフォルトのリンク動作を無効化
        modal.style.display = "flex";
    });

    // 閉じるボタンをクリックしたらモーダルを非表示
    closeButton.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // モーダルの外側をクリックしたらモーダルを非表示
    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});


function toggleModal(modalId) {
	// モーダルの要素を取得
	const modal = document.getElementById(modalId);
	if (modal.style.display === "block") {
		// モーダルが表示されている場合は非表示にする
		modal.style.display = "none";
	} else {
		// モーダルを表示する
		modal.style.display = "block";
	}
}

// 画面外クリックでモーダルを閉じる
document.addEventListener('click', closeModal);
document.addEventListener('touchstart', closeModal);

function closeModal(event) {
	const modals = document.querySelectorAll('.modal');
	modals.forEach(modal => {
		if (event.target === modal) {
			modal.style.display = "none";
		}
	});
}

//スクロール
document.addEventListener('scroll', () => {
  const scrollLink = document.getElementById('scrollLink');
  const scrollThreshold = 0.02; // 表示するスクロール割合 (50%)

  // 現在のスクロール量と画面の高さを取得
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const windowHeight = document.documentElement.clientHeight;
  const documentHeight = document.documentElement.scrollHeight;

  // 現在のスクロール位置を全体の高さに対する割合で計算
  const scrollPercentage = scrollTop / (documentHeight - windowHeight);

  // スクロール割合が閾値を超えた場合にリンクを表示
  if (scrollPercentage > scrollThreshold) {
    scrollLink.style.display = 'block';
  } else {
    scrollLink.style.display = 'none';
  }
});





