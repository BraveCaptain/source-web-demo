getPeople();

function query(queryPage) {
	var queryPage = queryPage||1;
	console.log("query page = " + queryPage);
	displayPage('#pageDiv', 'goPage', 'query', 10, 100);
}

function displayPage(divObj,inputPage,js,totalPages,currentPage,totalRecords) {
	divObj = divObj||"body";
    inputPage = inputPage||"goPage";
    js=js||"query";
    totalPages=totalPages||1;
    totalRecords=totalRecords||0;
    currentPage=currentPage||1;
    var str = "当前第&ensp;<span name='currentPage'>"+currentPage+"</span>&ensp;页";
    str += "&ensp;共&ensp;<span name='totalPages'>"+totalPages+"</span>&ensp;页";
    str += "&ensp;<a href='javascript:void(0)' onclick='"+js+"(1)'>首页</a>";
    if(currentPage>1) {
        str += "&ensp;<a href='javascript:void(0)' onclick='"+js+"("+(currentPage-1)+")'>上一页</a>";
    }
	else {
        str += "&ensp;<a>上一页</a>";
    }
    if(currentPage<totalPages) {
        str += "&ensp;<a href='javascript:void(0)' onclick='"+js+"("+(currentPage+1)+")'>下一页</a>";
    }
	else {
        str += "&ensp;<a>下一页</a>";
    }
    str += "&ensp;<a href='javascript:void(0)' onclick='"+js+"("+totalPages+")'>尾页</a>";
    str += "&ensp;跳转到&ensp;<input type='number' min=1 max="+totalPages+" id='"+inputPage+"' value="+currentPage+" style='width:40px'/>";
    str += "&ensp;<input type='button' value='go' onclick='var num=$(\"#"+inputPage+"\").val();"+js+"(num)'/>";
    $(divObj).empty();
    $(divObj).append(str);
}

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
			$("#conList").empty();
			$("#comList").append(tmp);
		}
	});
}
