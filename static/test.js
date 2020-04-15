function getPeople(cat, page_num) {
	var tmp = '';
	var rowItemNum = 5;
    var last_page;
    var next_page;

    // CATEGORY
    cat_element = document.getElementById('category_name');
    cat_text_last = cat_element.innerText;
    console.log(cat_text_last);
    if (cat != '' && cat != cat_text_last) {
        cat_element.innerHTML = cat;
    }

    // PAGE_ID
    last_element = document.getElementById("page_id");
    last_page = parseInt(last_element.innerText, 10);
    next_page = last_page;

    if (page_num == -1) {
        if (last_page > 1) {
            next_page = last_page - 1;
            cat = cat_text_last;
        }
    } else if (page_num == -2) {
        next_page = last_page + 1;
        cat = cat_text_last;
    } else {
        next_page = page_num;
    }

    if (next_page != last_page) {
        last_element.innerHTML = next_page.toString();
    }

    if (cat_text_last == "全部") {
        cat = '';
    }

	$.ajax({
		type: "get",
		url: "http://192.168.101.193:8001/gallery",
		dataType: "json",
        data:{"g_type":"人物", "g_cat": cat, "page_id":next_page},
		success: function(res) {
			var list = res.data
			console.log(list)
			$("#comList").empty();
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
                '<div class="comItemAbstract">'+'<strong>国家:</strong> ' + list[$i].country_s+'</div>' +
                '<div class="comItemAbstract">'+'<strong>组织:</strong> ' + list[$i].member_s+'</div>' +
                '<div class="comItemAbstract">'+'<strong>职位:</strong> ' + list[$i].position_s+'</div>' +
                '<div class="comItemAbstract">'+'<strong>简介:</strong> ' + list[$i].description_zh_seg+'</div>' +
                '<div class="comItemAbstract">'+'<strong>标签:</strong> ' + list[$i].occupation_s + '</div>' +
                '</a>';
			}
			tmp += '</div>';
			$("#comList").append(tmp);
		}
	});
}
