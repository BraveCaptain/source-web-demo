function getInfo(personID){
    $.ajax({
        type: "get",
        url: "",
        dataType: "json",
        data: {},
        success: function(res) {
            var list = res.data
            console.log(list)
            
        }
    });
}