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

//ページナンバー
   document.addEventListener("DOMContentLoaded", function () {
    const contentContainer = document.getElementById("content-container");
    const pageNumbers = document.querySelectorAll(".page-number");
    const prevBtn = document.getElementById("prev");
    const nextBtn = document.getElementById("next");
    let currentPage = 1;

            // 各ページの child-div データ
            const childData = {
                1: [
                    { img: "../img/bn_vip.webp", text1: "12月12日:びわこ12R⇒びわこ12R",text2: "舟券代10.000円⇩", text3: "1,111,111円獲得", url: "vip" },
                    { img: "../img/bn_perfect.webp", text1: "12月11日:桐生8R⇒桐生8R",text2: "舟券代10.000円⇩", text3: "2,222,222円獲得", url: "perfect_d" },
                    { img: "../img/bn_best.webp", text1: "12月10日:浜名湖10R⇒浜名湖10R",text2: "舟券代10.000円⇩", text3: "3,333,333円獲得", url: "best_d" },
                    { img: "../img/bn_fifth.webp", text1: "12月09日:児島9R⇒児島9R",text2: "舟券代10.000円⇩", text3: "4,444,444円獲得", url: "fifth_d" },
                    { img: "../img/bn_fourth.webp", text1: "12月08日:住之江11R⇒住之江11R",text2: "舟券代10.000円⇩", text3: "5,555,555円獲得", url: "fourth_d" },
                    { img: "../img/bn_third.webp", text1: "12月07日:福岡12R⇒福岡12R",text2: "舟券代10.000円⇩", text3: "6,666,666円獲得", url: "third_d" }
                ],
                2: [
                    { img: "../img/bn_second.webp", text1: "11月15日:戸田10R⇒戸田10R",text2: "舟券代10.000円⇩", text3: "7,777,777円獲得", url: "second_d" },
                    { img: "../img/bn_first.webp", text1: "11月14日:丸亀8R⇒丸亀8R",text2: "舟券代10.000円⇩", text3: "8,888,888円獲得", url: "first" },
					{ img: "../img/bn_free.webp", text1: "11月13日:江戸川7R⇒江戸川7R",text2: "舟券代10.000円⇩", text3: "9,999,999円獲得", url: "free" },
                    { img: "../img/bn_perfect_n.webp", text1: "11月13日:江戸川7R⇒江戸川7R",text2: "舟券代10.000円⇩", text3: "9,999,999円獲得", url: "perfect_n" },
                    { img: "../img/bn_best_n.webp", text1: "11月21日:下関6R⇒下関6R",text2: "舟券代10.000円⇩", text3: "10,000,000円獲得", url: "best_n" },
					{ img: "../img/bn_fifth_n.webp", text1: "11月11日:住之江11R⇒住之江11R",text2: "舟券代10.000円⇩", text3: "5,555,555円獲得", url: "fift_n" },
                ],
				3: [
					{ img: "../img/bn_fourth_n.webp", text1: "10月10日:福岡12R⇒福岡12R",text2: "舟券代10.000円⇩", text3: "6,666,666円獲得", url: "fourth_n" },
                    { img: "../img/bn_third_n.webp", text1: "10月15日:戸田10R⇒戸田10R",text2: "舟券代10.000円⇩", text3: "7,777,777円獲得", url: "third_n" },
                    { img: "../img/bn_second_n.webp", text1: "10月14日:丸亀8R⇒丸亀8R",text2: "舟券代10.000円⇩", text3: "8,888,888円獲得", url: "second_n" },
                    { img: "../img/bn_first.webp", text1: "10月13日:江戸川7R⇒江戸川7R",text2: "舟券代10.000円⇩", text3: "9,999,999円獲得", url: "first" },
                    { img: "../img/bn_free.webp", text1: "10月12日:下関6R⇒下関6R",text2: "舟券代10.000円⇩", text3: "10,000,000円獲得", url: "free" },
					{ img: "../img/bn_vip.webp", text1: "10月11日:住之江11R⇒住之江11R",text2: "舟券代10.000円⇩", text3: "5,555,555円獲得", url: "vip" },
                    
                ],
				4: [
                    { img: "../img/bn_perfect_n.webp", text1: "09月15日:戸田10R⇒戸田10R",text2: "舟券代10.000円⇩", text3: "7,777,777円獲得", url: "perfect_n" },
                    { img: "../img/bn_best_n.webp", text1: "09月14日:丸亀8R⇒丸亀8R",text2: "舟券代10.000円⇩", text3: "8,888,888円獲得", url: "best_n" },
                    { img: "../img/bn_fourth_n.webp", text1: "09月13日:江戸川7R⇒江戸川7R",text2: "舟券代10.000円⇩", text3: "9,999,999円獲得", url: "fourth_n" },
                    { img: "../img/bn_third_n.webp", text1: "09月12日:下関6R⇒下関6R",text2: "舟券代10.000円⇩", text3: "10,000,000円獲得", url: "third_n" },
					{ img: "../img/bn_second_n.webp", text1: "09月11日:住之江11R⇒住之江11R",text2: "舟券代10.000円⇩", text3: "5,555,555円獲得", url: "second_n" },
                    { img: "../img/bn_first.webp", text1: "09月10日:福岡12R⇒福岡12R",text2: "舟券代10.000円⇩", text3: "6,666,666円獲得", url: "first" }
                ],
				5: [
                    { img: "../img/bn_free.webp", text1: "08月15日:戸田10R⇒戸田10R",text2: "舟券代10.000円⇩", text3: "7,777,777円獲得", url: "free" },
                    { img: "../img/bn_perfect.webp", text1: "08月14日:丸亀8R⇒丸亀8R",text2: "舟券代10.000円⇩", text3: "8,888,888円獲得", url: "perfect_d" },
                    { img: "../img/bn_fifth.webp", text1: "08月13日:江戸川7R⇒江戸川7R",text2: "舟券代10.000円⇩", text3: "9,999,999円獲得", url: "fifth_d" },
                    { img: "../img/bn_fourth.webp", text1: "08月12日:下関6R⇒下関6R",text2: "舟券代10.000円⇩", text3: "10,000,000円獲得", url: "fourth_d" },
					{ img: "../img/bn_third.webp", text1: "08月11日:住之江11R⇒住之江11R",text2: "舟券代10.000円⇩", text3: "5,555,555円獲得", url: "third_d" },
                    { img: "../img/bn_second.webp", text1: "08月10日:福岡12R⇒福岡12R",text2: "舟券代10.000円⇩", text3: "6,666,666円獲得", url:"second_d" }
                ],
				6: [
                    { img: "../img/bn_first.webp", text1: "07月16日:戸田10R⇒戸田10R",text2: "舟券代10.000円⇩", text3: "7,777,777円獲得", url: "first" },
                    { img: "../img/bn_free.webp", text1: "07月15日:丸亀8R⇒丸亀8R",text2: "舟券代10.000円⇩", text3: "8,888,888円獲得", url: "free" },
                    { img: "../img/bn_perfect.webp", text1: "07月14日:江戸川7R⇒江戸川7R",text2: "舟券代10.000円⇩", text3: "9,999,999円獲得", url: "perfect_d" },
                    { img: "../img/bn_vip.webp", text1: "07月15日:下関6R⇒下関6R",text2: "舟券代10.000円⇩", text3: "10,000,000円獲得", url: "vip" },
					{ img: "../img/bn_fifth.webp", text1: "07月14日:住之江11R⇒住之江11R",text2: "舟券代10.000円⇩", text3: "5,555,555円獲得", url: "fifth_d" },
                    { img: "../img/bn_vip.webp", text1: "07月13日:福岡12R⇒福岡12R",text2: "舟券代10.000円⇩", text3: "6,666,666円獲得", url: "vip" }
                ],
				7: [
                    { img: "../img/bn_free.webp", text1: "06月17日:戸田10R⇒戸田10R",text2: "舟券代10.000円⇩", text3: "7,777,777円獲得", url: "free" },
                    { img: "../img/bn_fifth_n.webp", text1: "06月16日:丸亀8R⇒丸亀8R",text2: "舟券代10.000円⇩", text3: "8,888,888円獲得", url: "fifth_n" },
                    { img: "../img/bn_perfect.webp", text1: "06月15日:江戸川7R⇒江戸川7R",text2: "舟券代10.000円⇩", text3: "9,999,999円獲得", url: "perfect_d" },
                    { img: "../img/bn_vip.webp", text1: "06月14日:下関6R⇒下関6R",text2: "舟券代10.000円⇩", text3: "10,000,000円獲得", url: "vip" },
					{ img: "../img/bn_fifth.webp", text1: "06月13日:住之江11R⇒住之江11R",text2: "舟券代10.000円⇩", text3: "5,555,555円獲得", url: "fifth_d" },
                    { img: "../img/bn_vip.webp", text1: "06月12日:福岡12R⇒福岡12R",text2: "舟券代10.000円⇩", text3: "6,666,666円獲得", url: "vip" }
                ]
                // 他のページのデータを追加
            };

            function updatePageContent() {
                //contentContainer.innerHTML = "";
                
                // 既存の child-di 要素を再利用または更新
        const childDivs = contentContainer.querySelectorAll(".child-di");
        const currentData = childData[currentPage];

        // 既存の要素が不足している場合は、新しい要素を作成
        for (let i = childDivs.length; i < currentData.length; i++) {
            const childDiv = document.createElement("div");
            childDiv.classList.add("child-di");
            contentContainer.appendChild(childDiv);
        }

        // 既存の要素が多すぎる場合は、余分な要素を削除
        for (let i = childDivs.length - 1; i >= currentData.length; i--) {
            contentContainer.removeChild(childDivs[i]);
        }

                
                // 各要素の内容を更新
        const updatedChildDivs = contentContainer.querySelectorAll(".child-di");
        currentData.forEach((data, index) => {
            updatedChildDivs[index].innerHTML = `
                <a href="plan/index.html?source=${data.url}" class="animatedLink">
                    <section class="image-section">
                        <img class="foregroud-image animatedImage" src="${data.img}" alt="Image">
                    </section>
                    <div class="black-background">
                        <section class="text-section">
                            <p class="stroke-text">
                                <span class="stroke">${data.text1}</span>
                                <span class="fill">${data.text1}</span>
                            </p>
                            <p class="stroke-text">
                                <span class="stroke">${data.text2}</span>
                                <span class="fill">${data.text2}</span>
                            </p>
                            <p class="gradient">${data.text3}</p>
                        </section>
                    </div>
                </a>
            `;
        });
               
        // ページ番号のハイライト更新
        pageNumbers.forEach(pageNum => {
            pageNum.classList.toggle("active", parseInt(pageNum.dataset.page) === currentPage);
        });

        // 「前へ」「次へ」ボタンの有効/無効
        prevBtn.classList.toggle("disabled", currentPage === 1);
        nextBtn.classList.toggle("disabled", currentPage === Object.keys(childData).length);

        // アニメーションのイベントリスナーを再アタッチ
        attachAnimationEventListeners();
    }

    function attachAnimationEventListeners() {
        const links = document.querySelectorAll('.animatedLink');
        const container = document.querySelector('.container');

        links.forEach(link => {
            link.addEventListener('click', function (event) {
                event.preventDefault();
                const href = this.getAttribute('href');
                const image = this.querySelector('.animatedImage');

                if (image.complete) {
                    animateAndRedirect(this, image, href, container);
                } else {
                    image.onload = () => animateAndRedirect(this, image, href, container);
                    image.onerror = () => {
                        console.error('画像の読み込みに失敗しました。');
                        window.location.href = href;
                    };
                }
            });
        });
    }

    pageNumbers.forEach(pageNum => {
        pageNum.addEventListener("click", function (e) {
            e.preventDefault();
            currentPage = parseInt(this.dataset.page);
            updatePageContent();
        });
    });

    prevBtn.addEventListener("click", function (e) {
        e.preventDefault();
        if (currentPage > 1) {
            currentPage--;
            updatePageContent();
        }
    });

    nextBtn.addEventListener("click", function (e) {
        e.preventDefault();
        if (currentPage < Object.keys(childData).length) { // 最終ページ番号を正しく取得
            currentPage++;
            updatePageContent();
        }
    });

    updatePageContent();
});

    

    function animateAndRedirect(link, image, href, container) {
        const ghost = image.cloneNode(true);
        ghost.classList.add('ghost-image');
        container.appendChild(ghost); // ghostの親要素をcontainerに変更
        
        const ghost2 = image.cloneNode(true);
        ghost2.classList.add('ghost-image2');
        container.appendChild(ghost2);
        
        const linkRect = link.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();
        const rect = image.getBoundingClientRect();
        
        const leftDiff = linkRect.left - containerRect.left;

        ghost.style.left = leftDiff + 'px';
        ghost.style.top = rect.top + window.scrollY + 'px';;
        ghost.style.width = image.width + 'px';
        ghost.style.height = image.height + 'px';
        
        
        ghost2.style.left = leftDiff + 'px';
        ghost2.style.top = rect.top + window.scrollY + 'px';;
        ghost2.style.width = image.width + 'px';
        ghost2.style.height = image.height + 'px';
        
        console.log('animatedImage left:', rect.left);
        console.log('ghost-image left:', ghost.style.left);
        
        console.log('animatedLink left:', linkRect.left);
        console.log('container left:', containerRect.left);
        console.log('ghost-image left:', ghost.style.left);

        image.animate([
            { transform: 'scale(1)' },
            { transform: 'scale(1.15)' },
            { transform: 'scale(1)' }
        ], { duration: 300, easing: 'ease-in-out' });

        const ghostAnimation = ghost.animate([
            { transform: 'scale(1)',
              opacity: (0.8)
            },
            { transform: 'scale(1.7)',
              opacity: (0)
            }
        ], { duration: 700, easing: 'ease-out' });
        
        const ghost2Animation = ghost2.animate([
            { transform: 'scale(1)',
              opacity: (1)
            },
            { transform: 'scale(1.3)',
              opacity: (0)
            }
        ], { duration: 700, easing: 'ease-out' });

         ghostAnimation.onfinish = () => {
            ghost.remove();
             
        };
        
        ghost2Animation.onfinish = () => {
            ghost2.remove();
            window.location.href = href;
        };

        setTimeout(() => {
            if (ghostAnimation.playState !== 'finished') {
                ghostAnimation.finish();
                ghost2Animation.finish();
            }
        }, 1000);
    };
