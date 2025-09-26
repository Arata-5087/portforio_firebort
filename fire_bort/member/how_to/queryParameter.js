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

	

	
        // 表示を変更
        switch (savedSource) {
            case "hunaken":
				header.style.backgroundImage = "url('../../img/header_hunaken.svg')";
                break;
            case "korogasi":
				header.style.backgroundImage = "url('../../img/header_korogasi.svg')";
                break;
            case "register":
				header.style.backgroundImage = "url('../../img/header_touroku.svg')";
                break;
           

		}
});