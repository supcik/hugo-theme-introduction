$(document).ready(function() {
    var update_localtime = function(){
        var time = moment()
            .tz("{{ or .Site.Params.timeZone .Site.Params.home.timeZone }}")
            .format("{{ or .Site.Params.timeFormat .Site.Params.home.timeFormat }}");
        $("#time").html(time);
    }
    update_localtime();
    {{if .Site.Params.timeUpdate }} setInterval(update_localtime, 1000); {{end}}
    
})