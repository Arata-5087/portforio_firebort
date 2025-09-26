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




    document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.animatedLink');
    const container = document.querySelector('.container');

    links.forEach(link => {
        link.addEventListener('click', function(event) {
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
    }
});