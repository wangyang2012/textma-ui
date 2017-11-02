
function getUrlVariable( name, url ) {
    if (!url) url = location.href;
    name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
    var regexS = "[\\?&]"+name+"=([^&#]*)";
    var regex = new RegExp( regexS );
    var results = regex.exec( url );
    return results == null ? null : results[1];
}

function formatDatetime(value) {
    //2015-07-12T22:00:00.000+0000
    values = value.split("T");
    return values[0];
}
