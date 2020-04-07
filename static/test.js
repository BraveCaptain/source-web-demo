getPeople();
function getPeople() {
	var tmp = '';
	var rowItemNum = 5;
	$.ajax({
		type: "get",
		url: "http://192.168.101.193:8001/gallery",
        data:{"g_type":"人物"},
		dataType: "json",
		success: function(res) {
			var list = res.data
			console.log(list)
			for(var $i = 0; $i < list.length; $i++) {
				if($i > 0 && $i % rowItemNum == 0) {
					tmp += '</div>';
					$("#comList").append(tmp);
					tmp = '<div class="comList" id = "comList"></div>';
				}
				tmp +=
				'<a class="comItem" href=##>' +
				'<div data-attid="' + list[$i].image_s + '"style="background-image: url(' + 'http://192.168.101.193:8001/image/' + list[$i].image_s + ');"></div>' +
				'<div class="comItemDivider"></div>' +
				'<div class="comItemName">'+list[$i].name_zh_s+'</div>' +
				'<div class="comItemAbstract">'+list[$i].description_zh_seg+'</div>' +
				'</a>';
			}
			tmp += '</div>';
			$("#comList").append(tmp);
		}
	});
}
