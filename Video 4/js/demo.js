$("#li1").click(function(){
    $(".bg-primary").slideToggle(500);
});
$("#li2").click(function(){
    $("#contenido").addClass("d-none");
    $("#contenido2").removeClass("d-none");
    $("#contenido3").addClass("d-none");
});
$("#li3").click(function(){
    $("#contenido").addClass("d-none");
    $("#contenido2").addClass("d-none");
    $("#contenido3").removeClass("d-none");
});
