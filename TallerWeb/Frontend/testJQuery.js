$(document).ready(loadEventos);

function loadEventos() {
    $("#btn_agregarEmpleado").on('click', function () {

        //var color = 'red';
        //if ($("#top_bar").css("background-color") == 'rgb(255, 0, 0)') {
        //    color = 'blue'
        //}

        //$("#top_bar").css({
        //    "background-color": "" + color + "",
        //    "color": "blue"
        //});

        //$("#top_bar").addClass("menu_rojo");

        //alert('algo');

    });

    $("#btn_menu").on('click', function () {

        if ($("#menu").hasClass('mostrarMenu')) {
            $("#menu").removeClass("mostrarMenu");
            $("#top_bar").removeClass("moverTopBar");
            return;
        }
        $("#menu").addClass("mostrarMenu");
        $("#top_bar").addClass("moverTopBar");

    });

    //$(".btn.btn-toolbar").on('click', function () {
    //    var li = '<li id="btn_agregarEmpleado" class="hvr-bounce-in">'
    //            + '<span class="icono-menu icon-users"></span>'
    //            + '<span class="titulo-menu">Otra opcion</span>'
    //       + '</li>';

    //    $("#menu ul").append(li);

    //    mensaje.notificacion("hola", {_titulo:'PROBLEMAS!!'} ,  function () {
    //        //alert("hola callback");
    //    });

    //});

    $("#menu ul li").on('click', function () {
        
    });
}