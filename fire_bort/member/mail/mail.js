$(document).ready(function() {
    function toggleMenu() {
        $("#mainMenu").toggleClass("open");
    }

    $(".menu-icon").on("click", function(event) {
        event.stopPropagation(); // メニューアイコン押しても閉じないようにする
        toggleMenu();
    });

    $(document).on("click", function(event) {
        if (!$(event.target).closest("#mainMenu").length && $("#mainMenu").hasClass("open")) {
            $("#mainMenu").removeClass("open");
        }
    });
});

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

document.addEventListener("DOMContentLoaded", () => {
    const closeButton = document.querySelector(".close");
    const mainMenu = document.getElementById("mainMenu");

    closeButton.addEventListener("click", () => {
        mainMenu.classList.remove("open"); // メニューを閉じる
    });
});

