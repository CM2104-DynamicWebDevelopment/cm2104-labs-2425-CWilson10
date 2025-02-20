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
        prettyPrintJSON(jsondata)
    });
}

function prettyPrintJSON (jsondata){
    var pretty = JSON.stringify(jsondata, null, 4);
    $('#resultsbox').append("<pre>" + pretty + "</pre>")
}