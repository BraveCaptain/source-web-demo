getPeople();
        function getPeople() {
            var tmp = '';
            var rowItemNum = 5;
            $.ajax({
                type: "get",
                url: "./json/test.json",
                dataType: "json",
                success: function(res) {
					var list = res
                    console.log(list)
					for(var $i = 0; $i < list.length; $i++) {
                        if($i > 0 && $i % rowItemNum == 0) {
                            tmp += '</div>';
                            $("#comList").append(tmp);
                            tmp = '<div class="comList" id = "comList"></div>';
                        }
						tmp +=
						    '<a class="comItem" href=##>' +
                            '<div data-attid="' + list[$i].image + '"style="background-image: url(' + list[$i].image + ');"></div>' +
                            '<div class="comItemDivider"></div>' +
                            '<div class="comItemName">'+list[$i].name_zh+'</div>' +
                            '<div class="comItemAbstract">'+list[$i].description+'</div>' +
							'</a>';
                    }
                    tmp += '</div>';
                    $("#comList").append(tmp);
                }
            });
        }