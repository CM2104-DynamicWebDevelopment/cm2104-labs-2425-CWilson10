$(function(){
    //document ready
    alert("document ready");

    $('#searchform').submit(function(){
        var searchterms = $("#searchterms").val();
        getResultsFromOMDB(searchterms);
        return false;
    });
});

function getResultsFromOMDB(searchterms) {
    var url = "http://www.omdbapi.com/?apikey=19ac40df&s=" + searchterms;
    $.getJSON(url, function(jsondata){
        addResultsTitles(jsondata)
    });
}

function addResultsTitles (jsondata){
    var htmlstring = "";
    for (var i=0; i<10; i++){
        var title = jsondata.Search[i].Title;
        var year = jsondata.Search[i].Year;
        var poster = jsondata.Search[i].Poster;
        htmlstring += "<li>" + title + " " + year + " " + "<img src = " + poster + "></li>";
        

    }

    $('#results').html(htmlstring);
}