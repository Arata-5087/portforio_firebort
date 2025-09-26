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
	
    var message = document.getElementById("message");
    var image_bn = document.getElementById("image_bn");
    var image_coppy = document.getElementById("image_coppy");
    var title = document.getElementById("title");
    var participation = document.getElementById("participation");
    var target = document.getElementById("target");
    var closing = document.getElementById("closing");
    var public = document.getElementById("public");
	var next_src = document.getElementById("next_src");
	/*var coppy = document.getElementById("coppy");*/
	

	
        // 表示を変更
        switch (savedSource) {
            case "special":
                message.innerHTML = "あああああああああああああああああああああ<br>あああああああああああああ<br>ああああああああああ<br>";
                image_bn.src = "../../img/bn_special.webp";
                image_coppy.src = "../../img/coppy_special.webp";
				/*coppy.innerHTML = "ああああああああああああああああああ<br>あああああああああああああ<br>ああああああああああ<br>";*/
                title.innerHTML = "3連単:コロガシ8点提供<br>舟券代10,000円(%振り分け)</td>";
				participation.textContent = "5000PT";
				target.textContent = "5,000,000円";
				closing.textContent = "12:00";
				public.textContent = "12:15";
				next_src.href = "../kaime/korogasi.html?source=" + encodeURIComponent(source);
                break;
			case "vip":
                message.innerHTML = "V･I･Pは選ばれた会員様のみ参加可能なVIP専用情報!<br>参加歴や獲得金額が一定の基準を超えた会員様のみをご招待。<br>たどり着くものだけが知り得る世界。<br>門外不出の超秘蔵情報";
                image_bn.src = "../../img/bn_vip.webp";
                image_coppy.src = "../../img/coppy_vip.webp";
                title.innerHTML = "3連単:コロガシ8点提供<br>舟券代10,000円(%振り分け)</td>";
				participation.textContent = "5000PT";
				target.textContent = "5,000,000円";
				closing.textContent = "12:00";
				public.textContent = "12:15";
				next_src.href = "../kaime/korogasi.html?source=" + encodeURIComponent(source);
                break;
            case "perfect_d":
                message.innerHTML = "これぞ「PERFECT」！！<br>1回のコロガシで「300万円」獲得目標！<br>ファイヤーボートだからこそ狙える「高配当コロガシ的中」！<br>勝ち組と呼ばれる人生を希望であれば「強く」参加をおすすめさせて頂きます！<br>ファイヤーボートのハイクラス情報「PERFECT」は必見！<br>我々の利益追求の炎は本日も燃え続けます！";
                image_bn.src = "../../img/bn_perfect.webp";
				image_coppy.src = "../../img/coppy_perfect.webp";
                title.innerHTML = "3連単:コロガシ8点提供<br>舟券代10,000円(%振り分け)</td>";
				participation.textContent = "3000PT";
				target.textContent = "3,000,000円";
				closing.textContent = "12:00";
				public.textContent = "12:15";
				next_src.href = "../kaime/korogasi.html?source=" + encodeURIComponent(source);
                break;
			case "best_d":
                message.innerHTML = "吹き荒れる札束！<br>「200万円」という圧倒的利益！<br>全ての悩みを吹き飛ばすほどの圧倒的火力！<br>「ファイヤーボートは他と違う…」ご体感していただけるはずです！<br>このプランに言葉は必要ありません！<br>全てを「BEST」に委ね、お楽しみください！";
                image_bn.src = "../../img/bn_best.webp";
				image_coppy.src = "../../img/coppy_best.webp";
                title.innerHTML = "3連単:コロガシ8点提供<br>舟券代10,000円(%振り分け)</td>";
				participation.textContent = "2000PT";
				target.textContent = "2,000,000円";
				closing.textContent = "12:00";
				public.textContent = "12:15";
				next_src.href = "../kaime/korogasi.html?source=" + encodeURIComponent(source);
                break;
			case "fifth_d":
                message.innerHTML = "100万円獲得のみを追求！<br>やみくもに高配当を狙うのではなく、精査し尽くされたレースを徹底的に狙う事により、安定した「100万円獲得」が実現されるのです！<br>「100万円獲得」のスペシャリスト！<br>「100万円獲得」の決定版！<br>１日で「100万円獲得」を目指したい方は「FIFTH」をご活用ください！";
                image_bn.src = "../../img/bn_fifth.webp";
				image_coppy.src = "../../img/coppy_fifth.webp";
                title.innerHTML = "3連単:コロガシ8点提供<br>舟券代10,000円(%振り分け)</td>";
				participation.textContent = "1000PT";
				target.textContent = "1,000,000円";
				closing.textContent = "12:00";
				public.textContent = "12:15";
				next_src.href = "../kaime/korogasi.html?source=" + encodeURIComponent(source);
                break;
			case "fourth_d":
                message.innerHTML = "灼熱資金稼ぎ<br>まとまった軍資金を得るためにこの「FOURTH」ほど適したプランは存在しません！<br>資金稼ぎプランとして圧倒的支持を得る「FOURTH」にかかれば「70万円獲得」は難しい事ではありません！<br>ここで利益を手にする事が出来れば「成功の道」は見えたも同然！<br>更なるステップアップを目指すためにもご活用ください！";
                image_bn.src = "../../img/bn_fourth.webp";
				image_coppy.src = "../../img/coppy_fourth.webp";
                title.innerHTML = "3連単:コロガシ8点提供<br>舟券代10,000円(%振り分け)</td>";
				participation.textContent = "700PT";
				target.textContent = "700,000円";
				closing.textContent = "12:00";
				public.textContent = "12:15";
				next_src.href = "../kaime/korogasi.html?source=" + encodeURIComponent(source);
                break;
			case "third_d":
                message.innerHTML = "安定重視！<br>何よりも的中を体験したいという皆様にはTHIRDへの参加が効果的です！<br>全ての始まりとなる的中！<br>的中無くしてコロガシ成功はございません！<br>次へ繋げるためのプランとしてTHIRDをご活用ください！";
                image_bn.src = "../../img/bn_third.webp";
				image_coppy.src = "../../img/coppy_third.webp";
                title.innerHTML = "3連単:コロガシ8点提供<br>舟券代10,000円(%振り分け)</td>";
				participation.textContent = "400PT";
				target.textContent = "400,000円";
				closing.textContent = "12:00";
				public.textContent = "12:15";
				next_src.href = "../kaime/korogasi.html?source=" + encodeURIComponent(source);
                break;
			case "second_d":
                message.innerHTML = "初回会員様はまずSECONDへ！<br>お手軽コロガシ勝負！<br>初回会員様の7割がセカンドで勝負をされています！<br>初回会員様の7割がセカンドで勝負をされています<br>利益を得るための基本となるコロガシ！！<br>SECONDで最初の２０万円獲得を目指して頂ければと思います！";
                image_bn.src = "../../img/bn_second.webp";
				image_coppy.src = "../../img/coppy_second.webp";
                title.innerHTML = "3連単:コロガシ8点提供<br>舟券代10,000円(%振り分け)</td>";
				participation.textContent = "200PT";
				target.textContent = "200,000円";
				closing.textContent = "12:00";
				public.textContent = "12:15";
				next_src.href = "../kaime/korogasi.html?source=" + encodeURIComponent(source);
                break;
			case "perfect_n":
                message.innerHTML = "これぞ「PERFECT」！！<br>１回のコロガシで「300万円」獲得目標！<br>ファイヤーボートだからこそ狙える「高配当コロガシ的中」！<br>勝ち組と呼ばれる人生を希望であれば「強く」参加をおすすめさせて頂きます！<br>ファイヤーボートのハイクラス情報「PERFECT」は必見！<br>我々の利益追求の炎は本日も燃え続けます！";
                image_bn.src = "../../img/bn_perfect_n.webp";
				image_coppy.src = "../../img/coppy_perfect.webp";
                title.innerHTML = "3連単:コロガシ8点提供<br>舟券代10,000円(%振り分け)</td>";
				participation.textContent = "3000PT";
				target.textContent = "3,000,000円";
				closing.textContent = "12:00";
				public.textContent = "12:15";
				next_src.href = "../kaime/korogasi.html?source=" + encodeURIComponent(source);
                break;
			case "best_n":
                message.innerHTML = "吹き荒れる札束！<br>「200万円」という圧倒的利益！<br>全ての悩みを吹き飛ばすほどの圧倒的火力！<br>「ファイヤーボートは他と違う…」ご体感していただけるはずです！<br>このプランに言葉は必要ありません！<br>全てを「BEST」に委ね、お楽しみください！";
                image_bn.src = "../../img/bn_best_n.webp";
				image_coppy.src = "../../img/coppy_best.webp";
                title.innerHTML = "3連単:コロガシ8点提供<br>舟券代10,000円(%振り分け)</td>";
				participation.textContent = "2000PT";
				target.textContent = "2,000,000円";
				closing.textContent = "12:00";
				public.textContent = "12:15";
				next_src.href = "../kaime/korogasi.html?source=" + encodeURIComponent(source);
                break;
			case "fifth_n":
                message.innerHTML = "100万円獲得のみを追求！<br>やみくもに高配当を狙うのではなく、精査し尽くされたレースを徹底的に狙う事により、安定した「100万円獲得」が実現されるのです！<br>「100万円獲得」のスペシャリスト！<br>「100万円獲得」の決定版！<br>１日で「100万円獲得」を目指したい方は「FIFTH」をご活用ください！";
                image_bn.src = "../../img/bn_fifth_n.webp";
				image_coppy.src = "../../img/coppy_fifth.webp";
                title.innerHTML = "3連単:コロガシ8点提供<br>舟券代10,000円(%振り分け)</td>";
				participation.textContent = "1000PT";
				target.textContent = "1,000,000円";
				closing.textContent = "12:00";
				public.textContent = "12:15";
				next_src.href = "../kaime/korogasi.html?source=" + encodeURIComponent(source);
                break;
			case "fourth_n":
                message.innerHTML = "灼熱資金稼ぎ<br>まとまった軍資金を得るためにこの「FOURTH」ほど適したプランは存在しません！<br>資金稼ぎプランとして圧倒的支持を得る「FOURTH」にかかれば「70万円獲得」は難しい事ではありません！<br>ここで利益を手にする事が出来れば「成功の道」は見えたも同然！<br>更なるステップアップを目指すためにもご活用ください！";
                image_bn.src = "../../img/bn_fourth_n.webp";
				image_coppy.src = "../../img/coppy_fourth.webp";
                title.innerHTML = "3連単:コロガシ8点提供<br>舟券代10,000円(%振り分け)</td>";
				participation.textContent = "700PT";
				target.textContent = "700,000円";
				closing.textContent = "12:00";
				public.textContent = "12:15";
				next_src.href = "../kaime/korogasi.html?source=" + encodeURIComponent(source);
                break;
			case "third_n":
                message.innerHTML = "安定重視！<br>何よりも的中を体験したいという皆様にはTHIRDへの参加が効果的です！<br>全ての始まりとなる的中！<br>的中無くしてコロガシ成功はございません！<br>次へ繋げるためのプランとしてTHIRDをご活用ください！";
                image_bn.src = "../../img/bn_third_n.webp";
				image_coppy.src = "../../img/coppy_third.webp";
                title.innerHTML = "3連単:コロガシ8点提供<br>舟券代10,000円(%振り分け)</td>";
				participation.textContent = "400PT";
				target.textContent = "400,000円";
				closing.textContent = "12:00";
				public.textContent = "12:15";
				next_src.href = "../kaime/korogasi.html?source=" + encodeURIComponent(source);
                break;
			case "second_n":
                message.innerHTML = "初回会員様はまずSECONDへ！<br>お手軽コロガシ勝負！<br>初回会員様の7割がセカンドで勝負をされています！<br>初回会員様の7割がセカンドで勝負をされています<br>利益を得るための基本となるコロガシ！！<br>SECONDで最初の２０万円獲得を目指して頂ければと思います！";
                image_bn.src = "../../img/bn_second_n.webp";
				image_coppy.src = "../../img/coppy_second.webp";
                title.innerHTML = "3連単:コロガシ8点提供<br>舟券代10,000円(%振り分け)</td>";
				participation.textContent = "200PT";
				target.textContent = "200,000円";
				closing.textContent = "12:00";
				public.textContent = "12:15";
				next_src.href = "../kaime/korogasi.html?source=" + encodeURIComponent(source);
                break;
			case "first":
                message.innerHTML = "競艇の情報ってどんなもの？<br>そんな疑問を吹き飛ばすための第一歩です！<br>競艇の基本となる３連単での勝負をご堪能下さい！";
                image_bn.src = "../../img/bn_first.webp";
				image_coppy.src = "../../img/coppy_first.webp";
                title.innerHTML = "3連単：単発１レース8点提供<br>舟券代1点2,000円購入推奨</td>";
				participation.textContent = "60PT";
				target.textContent = "50,000円";
				closing.textContent = "12:00";
				public.textContent = "12:15";
				next_src.href = "../kaime/tanpatu.html?source=" + encodeURIComponent(source);
                break;
			case "free":
                message.innerHTML = "日曜日以外毎日公開！<br>完全無料にて情報提供！<br>無料情報をお楽しみください！";
                image_bn.src = "../../img/bn_free.webp";
                image_coppy.src = "../../img/coppy_free.webp";
                title.innerHTML = "3連単：単発１レース8点提供<br>舟券代1点1,000円購入推奨</td>";
				participation.textContent = "0PT";
				target.textContent = "20,000円";
				closing.textContent = "12:00";
				public.textContent = "12:15";
				next_src.href = "../kaime/tanpatu.html?source=" + encodeURIComponent(source);
                break;
            case "hit":
                message.innerHTML = "朝一番の参加を希望される皆様におすすめ！<br>出勤前の勝負に最適なプランです！<br>モーニング会場限定単発プラン「HIT」！<br>午後に繋げる資金作りを！";
                image_bn.src = "../../img/bn_hit.webp";
                image_coppy.src = "../../img/coppy_hit.webp";
                title.innerHTML = "3連単:単発2レース<br>舟券代10,000円(%振り分け)</td>";
				participation.textContent = "150PT"
				target.textContent = "100,000円";
				closing.textContent = "9:00";
				public.textContent = "9:15";
				next_src.href = "../kaime/korogasi.html?source=" + encodeURIComponent(source);
                break;
            case "shot":
                message.innerHTML = "当日最速のコロガシプラン！<br>日中の忙しい時間を避けての午前中勝負！<br>本日最初のコロガシ的中を狙うには最適なプランです！<br>モーニング会場専門だからこそ狙えるレースをご堪能ください！";
                image_bn.src = "../../img/bn_shot.webp";
                image_coppy.src = "../../img/coppy_shot.webp";
                title.innerHTML = "3連単:コロガシ8点提供<br>舟券代10,000円(%振り分け)</td>";
				participation.textContent = "300PT";
				target.textContent = "300,000円";
				closing.textContent = "9:00";
				public.textContent = "9:15";
				next_src.href = "../kaime/korogasi.html?source=" + encodeURIComponent(source);
                break;
            default:
                message.innerHTML = "URLが間違っています。<br>一度ホームにもどってください";
                image_bn.src = "../../img/bn_error.webp";
                image_bn.alt = "エラー";
                image_coppy.src = "../../img/coppy_error.webp";
                image_coppy.alt = "URLが間違っているので一度ホームに戻ってください"
                title.innerHTML = "";
				participation.textContent = "";
				target.textContent = "";
				closing.textContent = "";
				public.textContent = ""
				next_src.href = "../";
                break;

		}
});