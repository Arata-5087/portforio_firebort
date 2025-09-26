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

document.addEventListener("DOMContentLoaded", function () {
    const contentContainer = document.getElementById("content-container");
    if (!contentContainer) {
        console.error("Error: #content-container が見つかりません。HTML を確認してください。");
        return;
    }

    const pageNumbers = document.querySelectorAll(".page-number");
    const prevBtn = document.getElementById("prev");
    const nextBtn = document.getElementById("next");
    let currentPage = 1; // 現在のページ番号

    // 各ページの child-div データ
    const childData = {
        1: [
            { href: "mail.html", text1: "2025-01-06 22:14:53", text2: "ああああああああああああああああああああああああああああああああああああああああああああああああああ" },
            { href: "mail.html", text1: "2025-01-06 22:14:53", text2: "ああああああああああああああああああああああああああああああああああああああああああああああああああ" },
            { href: "mail.html", text1: "2025-01-06 22:14:53", text2: "ああああああああああああああああああああああああああああああああああああああああああああああああああ" },
            { href: "mail.html", text1: "2025-01-06 22:14:53", text2: "ああああああああああああああああああああああああああああああああああああああああああああああああああ" },
            { href: "mail.html", text1: "2025-01-06 22:14:53", text2: "ああああああああああああああああああああああああああああああああああああああああああああああああああ" },
            { href: "mail.html", text1: "2025-01-06 22:14:53", text2: "ああああああああああああああああああああああああああああああああああああああああああああああああああ" },
            { href: "mail.html", text1: "2025-01-06 22:14:53", text2: "ああああああああああああああああああああああああああああああああああああああああああああああああああ" },
            { href: "mail.html", text1: "2025-01-06 21:14:53", text2: "ああああああああああああああああああああああああああああああああああああああああああああああああああ" },
            { href: "mail.html", text1: "2025-01-06 21:14:53", text2: "ああああああああああああああああああああああああああああああああああああああああああああああああああ" },
            { href: "mail.html", text1: "2025-01-06 21:14:53", text2: "ああああああああああああああああああああああああああああああああああああああああああああああああああ" }
        ],
        2: [
            { href: "mail.html", text1: "2025-01-05 22:14:53", text2: "ああああああああああああああああああああああああああああああああああああああああああああああああああ" },
            { href: "mail.html", text1: "2025-01-05 22:14:53", text2: "ああああああああああああああああああああああああああああああああああああああああああああああああああ" },
            { href: "mail.html", text1: "2025-01-05 22:14:53", text2: "ああああああああああああああああああああああああああああああああああああああああああああああああああ" },
            { href: "mail.html", text1: "2025-01-05 22:14:53", text2: "ああああああああああああああああああああああああああああああああああああああああああああああああああ" },
            { href: "mail.html", text1: "2025-01-05 22:14:53", text2: "ああああああああああああああああああああああああああああああああああああああああああああああああああ" },
            { href: "mail.html", text1: "2025-01-05 22:14:53", text2: "ああああああああああああああああああああああああああああああああああああああああああああああああああ" },
            { href: "mail.html", text1: "2025-01-05 22:14:53", text2: "ああああああああああああああああああああああああああああああああああああああああああああああああああ" },
            { href: "mail.html", text1: "2025-01-05 21:14:53", text2: "ああああああああああああああああああああああああああああああああああああああああああああああああああ" },
            { href: "mail.html", text1: "2025-01-05 21:14:53", text2: "ああああああああああああああああああああああああああああああああああああああああああああああああああ" },
            { href: "mail.html", text1: "2025-01-05 21:14:53", text2: "ああああああああああああああああああああああああああああああああああああああああああああああああああ" }
        ],
        3: [
            { href: "mail.html", text1: "2025-01-04 22:14:53", text2: "ああああああああああああああああああああああああああああああああああああああああああああああああああ" },
            { href: "mail.html", text1: "2025-01-04 22:14:53", text2: "ああああああああああああああああああああああああああああああああああああああああああああああああああ" },
            { href: "mail.html", text1: "2025-01-04 22:14:53", text2: "ああああああああああああああああああああああああああああああああああああああああああああああああああ" },
            { href: "mail.html", text1: "2025-01-04 22:14:53", text2: "ああああああああああああああああああああああああああああああああああああああああああああああああああ" },
            { href: "mail.html", text1: "2025-01-04 22:14:53", text2: "ああああああああああああああああああああああああああああああああああああああああああああああああああ" },
            { href: "mail.html", text1: "2025-01-04 22:14:53", text2: "ああああああああああああああああああああああああああああああああああああああああああああああああああ" },
            { href: "mail.html", text1: "2025-01-04 22:14:53", text2: "ああああああああああああああああああああああああああああああああああああああああああああああああああ" },
            { href: "mail.html", text1: "2025-01-04 21:14:53", text2: "ああああああああああああああああああああああああああああああああああああああああああああああああああ" },
            { href: "mail.html", text1: "2025-01-04 21:14:53", text2: "ああああああああああああああああああああああああああああああああああああああああああああああああああ" },
            { href: "mail.html", text1: "2025-01-04 21:14:53", text2: "ああああああああああああああああああああああああああああああああああああああああああああああああああ" }
        ],
        4: [
            { href: "mail.html", text1: "2025-01-03 22:14:53", text2: "ああああああああああああああああああああああああああああああああああああああああああああああああああ" },
            { href: "mail.html", text1: "2025-01-03 22:14:53", text2: "ああああああああああああああああああああああああああああああああああああああああああああああああああ" },
            { href: "mail.html", text1: "2025-01-03 22:14:53", text2: "ああああああああああああああああああああああああああああああああああああああああああああああああああ" },
            { href: "mail.html", text1: "2025-01-03 22:14:53", text2: "ああああああああああああああああああああああああああああああああああああああああああああああああああ" },
            { href: "mail.html", text1: "2025-01-03 22:14:53", text2: "ああああああああああああああああああああああああああああああああああああああああああああああああああ" },
            { href: "mail.html", text1: "2025-01-03 22:14:53", text2: "ああああああああああああああああああああああああああああああああああああああああああああああああああ" },
            { href: "mail.html", text1: "2025-01-03 22:14:53", text2: "ああああああああああああああああああああああああああああああああああああああああああああああああああ" },
            { href: "mail.html", text1: "2025-01-03 21:14:53", text2: "ああああああああああああああああああああああああああああああああああああああああああああああああああ" },
            { href: "mail.html", text1: "2025-01-03 21:14:53", text2: "ああああああああああああああああああああああああああああああああああああああああああああああああああ" },
            { href: "mail.html", text1: "2025-01-03 21:14:53", text2: "ああああああああああああああああああああああああああああああああああああああああああああああああああ" }
        ],
        5: [
            { href: "mail.html", text1: "2025-01-02 22:14:53", text2: "ああああああああああああああああああああああああああああああああああああああああああああああああああ" },
            { href: "mail.html", text1: "2025-01-02 22:14:53", text2: "ああああああああああああああああああああああああああああああああああああああああああああああああああ" },
            { href: "mail.html", text1: "2025-01-02 22:14:53", text2: "ああああああああああああああああああああああああああああああああああああああああああああああああああ" },
            { href: "mail.html", text1: "2025-01-02 22:14:53", text2: "ああああああああああああああああああああああああああああああああああああああああああああああああああ" },
            { href: "mail.html", text1: "2025-01-02 22:14:53", text2: "ああああああああああああああああああああああああああああああああああああああああああああああああああ" },
            { href: "mail.html", text1: "2025-01-02 22:14:53", text2: "ああああああああああああああああああああああああああああああああああああああああああああああああああ" },
            { href: "mail.html", text1: "2025-01-02 22:14:53", text2: "ああああああああああああああああああああああああああああああああああああああああああああああああああ" },
            { href: "mail.html", text1: "2025-01-02 21:14:53", text2: "ああああああああああああああああああああああああああああああああああああああああああああああああああ" },
            { href: "mail.html", text1: "2025-01-02 21:14:53", text2: "ああああああああああああああああああああああああああああああああああああああああああああああああああ" },
            { href: "mail.html", text1: "2025-01-02 21:14:53", text2: "ああああああああああああああああああああああああああああああああああああああああああああああああああ" }
        ],
        6: [
            { href: "mail.html", text1: "2025-01-01 22:14:53", text2: "ああああああああああああああああああああああああああああああああああああああああああああああああああ" },
            { href: "mail.html", text1: "2025-01-01 22:14:53", text2: "ああああああああああああああああああああああああああああああああああああああああああああああああああ" },
            { href: "mail.html", text1: "2025-01-01 22:14:53", text2: "ああああああああああああああああああああああああああああああああああああああああああああああああああ" },
            { href: "mail.html", text1: "2025-01-01 22:14:53", text2: "ああああああああああああああああああああああああああああああああああああああああああああああああああ" },
            { href: "mail.html", text1: "2025-01-01 22:14:53", text2: "ああああああああああああああああああああああああああああああああああああああああああああああああああ" },
            { href: "mail.html", text1: "2025-01-01 22:14:53", text2: "ああああああああああああああああああああああああああああああああああああああああああああああああああ" },
            { href: "mail.html", text1: "2025-01-01 22:14:53", text2: "ああああああああああああああああああああああああああああああああああああああああああああああああああ" },
            { href: "mail.html", text1: "2025-01-01 21:14:53", text2: "ああああああああああああああああああああああああああああああああああああああああああああああああああ" },
            { href: "mail.html", text1: "2025-01-01 21:14:53", text2: "ああああああああああああああああああああああああああああああああああああああああああああああああああ" },
            { href: "mail.html", text1: "2025-01-01 21:14:53", text2: "ああああああああああああああああああああああああああああああああああああああああああああああああああ" }
        ],
    };

    // localStorageから既読データを取得、ない場合は空オブジェクト
    let readStatus = JSON.parse(localStorage.getItem("readStatus")) || {};

    // 各ページのデータを更新
    function updatePageContent() {
        if (!contentContainer) return;
        contentContainer.innerHTML = "";

        // 現在のページのデータを取得
        childData[currentPage].forEach((data, index) => {
            const childDiv = document.createElement("div");
            childDiv.classList.add("child-div");

            // 現在のページとアイテムのインデックスを組み合わせて既読状態を確認
            const key = `${currentPage}-${index}`;
            const isRead = readStatus[key] || false;

            childDiv.innerHTML = `
                <li class="mail-list ${isRead ? "read" : ""}">
                    <a href="${data.href}">
                        <dl>
                            <dvi class="mail-text">
							<dt>
                                ${data.text1}
                            </dt>
                            <dd>${data.text2}</dd>
							</dvi>
                        </dl>
                    </a>
                </li>
            `;
            contentContainer.appendChild(childDiv);

            const mailListItem = childDiv.querySelector(".mail-list");

            // クリック時に既読状態を更新
            mailListItem.addEventListener("click", () => {
                // ページとインデックスをキーにして既読に設定
                readStatus[key] = true;

                // localStorageに保存
                localStorage.setItem("readStatus", JSON.stringify(readStatus));

                // クリック後に表示を更新
                updatePageContent();
            });
        });

        // ページ番号のハイライト更新
        pageNumbers.forEach(pageNum => {
            pageNum.classList.toggle("active", parseInt(pageNum.dataset.page) === currentPage);
        });

        // 「前へ」「次へ」ボタンの有効/無効
        prevBtn.classList.toggle("disabled", currentPage === 1);
        nextBtn.classList.toggle("disabled", currentPage === Object.keys(childData).length);
    }

    // ページ番号クリック時の処理
    pageNumbers.forEach(pageNum => {
        pageNum.addEventListener("click", function (e) {
            e.preventDefault();
            currentPage = parseInt(this.dataset.page);
            updatePageContent();
        });
    });

    // 「前へ」ボタンのクリック時
    prevBtn.addEventListener("click", function (e) {
        e.preventDefault();
        if (currentPage > 1) {
            currentPage--;
            updatePageContent();
        }
    });

    // 「次へ」ボタンのクリック時
    nextBtn.addEventListener("click", function (e) {
        e.preventDefault();
        if (currentPage < 5) {
            currentPage++;
            updatePageContent();
        }
    });

    // 初回ページ読み込み時に実行
    updatePageContent();
});


