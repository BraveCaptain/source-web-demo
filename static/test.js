getPeople();
function getPeople() {
	var tmp = '';
	var rowItemNum = 5;
	$.ajax({
		type: "get",
		url: "../json/test.json",
		dataType: "json",
		success: function(res) {
			var list = res.datas
			console.log(list)
			for(var $i = 0; $i < list.length; $i++) {
				if($i > 0 && $i % rowItemNum == 0) {
					tmp += '</div>';
					$("#comList").append(tmp);
					tmp = '<div class="comList" id = "comList"></div>';
				}
				tmp +=
				'<a  class = "comItem" href=##>' +
				'<div data-attid="' + list[$i].image + '"style="background-image: url(' + list[$i].image + ');"></div>' +
				'<div class="comItemDivider"></div>' +
				'<div class="comItemName">'+list[$i].name_zh+'</div>' +
				'<div class="comItemAbstract">'+'所在地: ' + list[$i].location+'</div>' +
				'<div class="comItemAbstract">'+'简介: ' + list[$i].description+'</div>' +
				'<div class="comItemAbstract">'+'标签: ' + list[$i].tags + '</div>' +
				'</a>'
			}
			tmp += '</div>';
			$("#comList").append(tmp);
		}
	});
}
