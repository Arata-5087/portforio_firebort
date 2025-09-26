 // クエリパラメータを取得する関数
document.addEventListener("DOMContentLoaded", function () {
    function getQueryParam(param) {
        var urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(param);
    }

    var source = getQueryParam("source");
    console.log("取得したパラメータ:", source); // デバッグ用
	
	if (source) {
    localStorage.setItem("source", source);
}
	var savedSource = localStorage.getItem("source");
	
    var header = document.getElementById("scroll");
	var text = document.getElementById("text");

	

	
        // 表示を変更
        switch (savedSource) {
            case "bank":
				header.style.backgroundImage = "url('../img/header_bank.svg')";
				text.textContent="銀行振込に進む";
                break;
            case "visa":
				header.style.backgroundImage = "url('../img/header_visa.svg')";
				text.textContent="カード決済に進む";
                break;
            case "amex":
				header.style.backgroundImage = "url('../img/header_amex.svg')";
				text.textContent="カード決済に進む";
                break;
           

		}
});