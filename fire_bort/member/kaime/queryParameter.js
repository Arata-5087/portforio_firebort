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

    var date1 = document.getElementById("date1");
    var date2 = document.getElementById("date2");
    var race1 = document.getElementById("race1");
    var race2 = document.getElementById("race2");
    var buy_it1 = document.getElementById("buy_it1");
    var buy_it2 = document.getElementById("buy_it2");
    var amount1 = document.getElementById("amount1");
    var amount2 = document.getElementById("amount2");
    var image = document.getElementById("image");
        // 表示を変更
        switch (savedSource) {
            case "special":
                date1.textContent = "11月11日";
                date2.textContent = "11月11日";
				race1.textContent = "蒲郡2R";
				race2.textContent = "蒲郡2R";
				buy_it1.innerHTML = "1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)";
				buy_it2.innerHTML = "1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)";
				amount1.innerHTML = "10,000円の推奨金額を、<br><span>各買い目の％に振り分けてご購入ください。</span>";
				amount2.innerHTML = "<span>1R目の配当を％振り分け</span><br><span>1R目が不的中となった場合には10,000円を上限とし、</span><br><span>各買い目に振り分けての購入をよろしくお願い致します。</span><br>";
                image.src = "../../img/bn_special.webp";
                break;
			case "vip":
                date1.textContent = "11月11日";
                date2.textContent = "11月11日";
				race1.textContent = "蒲郡2R";
				race2.textContent = "蒲郡2R";
				buy_it1.innerHTML = "1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)";
				buy_it2.innerHTML = "1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)";
				amount1.innerHTML = "10,000円の推奨金額を、<br><span>各買い目の％に振り分けてご購入ください。</span>";
				amount2.innerHTML = "<span>1R目の配当を％振り分け</span><br><span>1R目が不的中となった場合には10,000円を上限とし、</span><br><span>各買い目に振り分けての購入をよろしくお願い致します。</span><br>";
                image.src = "../../img/bn_vip.webp";
                break;
			case "perfect_d":
                date1.textContent = "11月11日";
                date2.textContent = "11月11日";
				race1.textContent = "蒲郡2R";
				race2.textContent = "蒲郡2R";
				buy_it1.innerHTML = "1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)";
				buy_it2.innerHTML = "1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)";
				amount1.innerHTML = "10,000円の推奨金額を、<br><span>各買い目の％に振り分けてご購入ください。</span>";
				amount2.innerHTML = "<span>1R目の配当を％振り分け</span><br><span>1R目が不的中となった場合には10,000円を上限とし、</span><br><span>各買い目に振り分けての購入をよろしくお願い致します。</span><br>";
                image.src = "../../img/bn_perfect.webp";
                break;
			case "best_d":
                date1.textContent = "11月11日";
                date2.textContent = "11月11日";
				race1.textContent = "蒲郡2R";
				race2.textContent = "蒲郡2R";
				buy_it1.innerHTML = "1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)";
				buy_it2.innerHTML = "1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)";
				amount1.innerHTML = "10,000円の推奨金額を、<br><span>各買い目の％に振り分けてご購入ください。</span>";
				amount2.innerHTML = "<span>1R目の配当を％振り分け</span><br><span>1R目が不的中となった場合には10,000円を上限とし、</span><br><span>各買い目に振り分けての購入をよろしくお願い致します。</span><br>";
                image.src = "../../img/bn_best.webp";
                break;
			case "fifth_d":
                date1.textContent = "11月11日";
                date2.textContent = "11月11日";
				race1.textContent = "蒲郡2R";
				race2.textContent = "蒲郡2R";
				buy_it1.innerHTML = "1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)";
				buy_it2.innerHTML = "1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)";
				amount1.innerHTML = "10,000円の推奨金額を、<br><span>各買い目の％に振り分けてご購入ください。</span>";
				amount2.innerHTML = "<span>1R目の配当を％振り分け</span><br><span>1R目が不的中となった場合には10,000円を上限とし、</span><br><span>各買い目に振り分けての購入をよろしくお願い致します。</span><br>";
                image.src = "../../img/bn_fifth.webp";
                break;
			case "fourth_d":
                date1.textContent = "11月11日";
                date2.textContent = "11月11日";
				race1.textContent = "蒲郡2R";
				race2.textContent = "蒲郡2R";
				buy_it1.innerHTML = "1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)";
				buy_it2.innerHTML = "1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)";
				amount1.innerHTML = "10,000円の推奨金額を、<br><span>各買い目の％に振り分けてご購入ください。</span>";
				amount2.innerHTML = "<span>1R目の配当を％振り分け</span><br><span>1R目が不的中となった場合には10,000円を上限とし、</span><br><span>各買い目に振り分けての購入をよろしくお願い致します。</span><br>";
                image.src = "../../img/bn_fourth.webp";
                break;
			case "third_d":
                date1.textContent = "11月11日";
                date2.textContent = "11月11日";
				race1.textContent = "蒲郡2R";
				race2.textContent = "蒲郡2R";
				buy_it1.innerHTML = "1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)";
				buy_it2.innerHTML = "1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)";
				amount1.innerHTML = "10,000円の推奨金額を、<br><span>各買い目の％に振り分けてご購入ください。</span>";
				amount2.innerHTML = "<span>1R目の配当を％振り分け</span><br><span>1R目が不的中となった場合には10,000円を上限とし、</span><br><span>各買い目に振り分けての購入をよろしくお願い致します。</span><br>";
                image.src = "../../img/bn_third.webp";
                break;
			case "second_d":
                date1.textContent = "11月11日";
                date2.textContent = "11月11日";
				race1.textContent = "蒲郡2R";
				race2.textContent = "蒲郡2R";
				buy_it1.innerHTML = "1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)";
				buy_it2.innerHTML = "1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)";
				amount1.innerHTML = "10,000円の推奨金額を、<br><span>各買い目の％に振り分けてご購入ください。</span>";
				amount2.innerHTML = "<span>1R目の配当を％振り分け</span><br><span>1R目が不的中となった場合には10,000円を上限とし、</span><br><span>各買い目に振り分けての購入をよろしくお願い致します。</span><br>";
                image.src = "../../img/bn_second.webp";
                break;
			case "perfect_n":
                date1.textContent = "11月11日";
                date2.textContent = "11月11日";
				race1.textContent = "蒲郡2R";
				race2.textContent = "蒲郡2R";
				buy_it1.innerHTML = "1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)";
				buy_it2.innerHTML = "1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)";
				amount1.innerHTML = "10,000円の推奨金額を、<br><span>各買い目の％に振り分けてご購入ください。</span>";
				amount2.innerHTML = "<span>1R目の配当を％振り分け</span><br><span>1R目が不的中となった場合には10,000円を上限とし、</span><br><span>各買い目に振り分けての購入をよろしくお願い致します。</span><br>";
                image.src = "../../img/bn_perfect_n.webp";
                break;
			case "best_n":
                date1.textContent = "11月11日";
                date2.textContent = "11月11日";
				race1.textContent = "蒲郡2R";
				race2.textContent = "蒲郡2R";
				buy_it1.innerHTML = "1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)";
				buy_it2.innerHTML = "1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)";
				amount1.innerHTML = "10,000円の推奨金額を、<br><span>各買い目の％に振り分けてご購入ください。</span>";
				amount2.innerHTML = "<span>1R目の配当を％振り分け</span><br><span>1R目が不的中となった場合には10,000円を上限とし、</span><br><span>各買い目に振り分けての購入をよろしくお願い致します。</span><br>";
                image.src = "../../img/bn_best_n.webp";
                break;
			case "fifth_n":
                date1.textContent = "11月11日";
                date2.textContent = "11月11日";
				race1.textContent = "蒲郡2R";
				race2.textContent = "蒲郡2R";
				buy_it1.innerHTML = "1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)";
				buy_it2.innerHTML = "1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)";
				amount1.innerHTML = "10,000円の推奨金額を、<br><span>各買い目の％に振り分けてご購入ください。</span>";
				amount2.innerHTML = "<span>1R目の配当を％振り分け</span><br><span>1R目が不的中となった場合には10,000円を上限とし、</span><br><span>各買い目に振り分けての購入をよろしくお願い致します。</span><br>";
                image.src = "../../img/bn_fifth_n.webp";
                break;
			case "fourth_n":
                date1.textContent = "11月11日";
                date2.textContent = "11月11日";
				race1.textContent = "蒲郡2R";
				race2.textContent = "蒲郡2R";
				buy_it1.innerHTML = "1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)";
				buy_it2.innerHTML = "1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)";
				amount1.innerHTML = "10,000円の推奨金額を、<br><span>各買い目の％に振り分けてご購入ください。</span>";
				amount2.innerHTML = "<span>1R目の配当を％振り分け</span><br><span>1R目が不的中となった場合には10,000円を上限とし、</span><br><span>各買い目に振り分けての購入をよろしくお願い致します。</span><br>";
                image.src = "../../img/bn_fourth_n.webp";
                break;
			case "third_n":
                date1.textContent = "11月11日";
                date2.textContent = "11月11日";
				race1.textContent = "蒲郡2R";
				race2.textContent = "蒲郡2R";
				buy_it1.innerHTML = "1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)";
				buy_it2.innerHTML = "1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)";
				amount1.innerHTML = "10,000円の推奨金額を、<br><span>各買い目の％に振り分けてご購入ください。</span>";
				amount2.innerHTML = "<span>1R目の配当を％振り分け</span><br><span>1R目が不的中となった場合には10,000円を上限とし、</span><br><span>各買い目に振り分けての購入をよろしくお願い致します。</span><br>";
                image.src = "../../img/bn_third_n.webp";
				
                break;
			case "second_n":
                date1.textContent = "11月11日";
                date2.textContent = "11月11日";
				race1.textContent = "蒲郡2R";
				race2.textContent = "蒲郡2R";
				buy_it1.innerHTML = "1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)";
				buy_it2.innerHTML = "1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)";
				amount1.innerHTML = "10,000円の推奨金額を、<br><span>各買い目の％に振り分けてご購入ください。</span>";
				amount2.innerHTML = "<span>1R目の配当を％振り分け</span><br><span>1R目が不的中となった場合には10,000円を上限とし、</span><br><span>各買い目に振り分けての購入をよろしくお願い致します。</span><br>";
                image.src = "../../img/bn_second_n.webp";
                break;
			case "first":
                date1.textContent = "11月11日";
				race1.textContent = "下関6R";
				buy_it1.innerHTML = "1-2-3<br>1-2-3<br>1-2-3<br>1-2-3<br>1-2-3<br>1-2-3<br>1-2-3<br>1-2-3<br>";
				amount1.innerHTML = "1点2,000円購入推奨";
                image.src = "../../img/bn_first.webp";
                break;
			case "free":
                date1.textContent = "11月11日";
				race1.textContent = "蒲郡2R";
				buy_it1.innerHTML = "1-2-3<br>1-2-3<br>1-2-3<br>1-2-3<br>1-2-3<br>1-2-3<br>1-2-3<br>1-2-3<br>";
				amount1.innerHTML = "1点2,000円購入推奨";
                image.src = "../../img/bn_free.webp";
                break;
            case "hit":
                date1.textContent = "11月11日";
                date2.textContent = "11月11日";
				race1.textContent = "蒲郡2R";
				race2.textContent = "蒲郡2R";
				buy_it1.innerHTML = "1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)";
				buy_it2.innerHTML = "1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)";
				amount1.innerHTML = "10,000円の推奨金額を、<br><span>各買い目の％に振り分けてご購入ください。</span>";
				amount2.innerHTML = "<span>1R目の配当を％振り分け</span><br><span>1R目が不的中となった場合には10,000円を上限とし、</span><br><span>各買い目に振り分けての購入をよろしくお願い致します。</span><br>";
                image.src = "../../img/bn_hit.webp";
                break;
            case "shot":
                date1.textContent = "11月11日";
                date2.textContent = "11月11日";
				race1.textContent = "蒲郡2R";
				race2.textContent = "蒲郡2R";
				buy_it1.innerHTML = "1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)";
				buy_it2.innerHTML = "1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)<br>1-2-3 (20%)";
				amount1.innerHTML = "10,000円の推奨金額を、<br><span>各買い目の％に振り分けてご購入ください。</span>";
				amount2.innerHTML = "<span>1R目の配当を％振り分け</span><br><span>1R目が不的中となった場合には10,000円を上限とし、</span><br><span>各買い目に振り分けての購入をよろしくお願い致します。</span><br>";
                image.src = "../../img/bn_shot.webp";
                break;
            default :
                date1.textContent = "URLが間違っています";
				race1.textContent = "一度ホームに戻ってください";
				buy_it1.innerHTML = "";
				amount1.innerHTML = "";
                image.src = "../../img/bn_error.webp";
                

		}
});