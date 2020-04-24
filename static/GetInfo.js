getInfo()
function getInfo(){
    $.ajax({
        type: "get",
        url: "../json/person.json",
        dataType: "json",
        success: function(res) {
            console.log("success");
            let person = res._source;
            console.log(person);
            $("#title").append(person.name_zh_s);
            let image = '<img width="150" height="190" src=' + '' + 'class="alignright wp-post-image"></img>';
            $("#description").append(person.description_zh_seg)
            var website = '<a href="'+ person.website_s + '"> ' + person.website_s + ' </a>'
            $("#website").append(website)
            var jobs = '';
            for(var i = 0; i < person.occupation_s.length; ++i) {
                jobs += '<tr><td>' + person.occupation_s[i] + '</td></tr>';
                console.log(person.occupation_s[i])
            }
            $("#job").append(jobs)
            $("#influence").append(person.influence_i)
            $("#member").append(person.member_s)
        }
    });
}