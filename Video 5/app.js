$(document).ready(function () {
    //funcion de javascript pura para imprimir en consola
    // console.log("Funcionando");

    //Acceder a un elemento mediante la etiqueta
    // $('h1').html('Etiqueta h1');

    //Acceder a un elemento mediante una clase
    // $('.display-4').html('Desde clase');

    //Acceder a un elemento mediante un Id(Identificador)
    // $('#idh1').html('Desde Id');

    //Acceder a un elemento a travez de otro en este caso un contenedor
    // $('.container h1').html('cambio de texto');

    //Acceder a un elemento a travez de otro seleccionando solo el primero
    // $('.container h1:first').html('cambio de texto');

    //Acceder a un elemento a travez de otro seleccionando solo el ultimo
    // $('.container h1:last').html('cambio de texto');

    //Añadir classes a un elemento seleccionado
    // $('#idh1').addClass('text-danger');

    //Remover classes a un elemento seleccionado
    // $('#idh1').removeClass('display-4');

    //Añadir elementos al final del contenedor seleccionado
    // $('#contenido').append('<h1>Este es un h1 al final</h1>');

    //Añadir elementos al principio del contenedor seleccionado
    // $('#contenido').prepend('<h1>Este es un h1 al principio </h1>');

    //Editar estilos css del elemento seleccionado
    // $('#color-azul').css('color', 'blue');

    //Editar mas de un estilo css del elemento seleccionado
    // $('#color-azul').css({color:'blue',background:'salmon',padding:'10px'});

    //Remover un elemento 
    // $('#color-azul').remove();
    
    //Ocultar un elemento
    // $('#color-azul').hide();

    //Editar atributos de un elemento
    // $('img').attr('src', 'https://images.pexels.com/photos/3556117/pexels-photo-3556117.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500');

    //Editar atributos del ultimo elemento
    // $('img:last').attr("width","100");

    //Eventos:
    //Detectar click

    //Guardar variable parrafo
    // var parrafo = $('#resultado p');

    //Funciones de click en los evento de click de los botones
    
    // $('.btn-primary').click(function(){
    //     parrafo.addClass('display-4');
    // });

    // $('.btn-danger').click(function(){
    //     parrafo.removeClass('display-4');
    // });

    // $('.btn-warning').click(function(){
    //     parrafo.toggleClass('text-danger');
    // });

    //Evento Submit OJO esto funcionara para las validaciones
    // $('#formulario').submit(function(e) { 
    //     e.preventDefault();
    //     var nombre = $('#nombre').val();
    //     console.log(nombre);
    // });

    //Animaciones predeterminadas

    // var resultado = $('#resultado');
    
    // $('.btn-primary').click(function(){
    //     // resultado.show(1000);
    //     resultado.fadeIn('fast');
    // });

    // $('.btn-danger').click(function(){
    //     // resultado.hide(1000);
    //     resultado.fadeOut('slow');

    // });

    // $('.btn-warning').click(function(){
    //     resultado.toggle(1000);
    // });

    //Animaciones creadas por el usuario
    // $('.btn-primary').click(function(){
    //     resultado.animate({left:"250px",
    //     opacity:'0.5',
    //     height:'+=150px',
    //     width:'+=150px'},3000,function(){
    //         resultado.animate({
    //             left:"30px",
    //             opacity:'1',
    //             height:'-=150px',
    //             width:'-=150px'
    //         },1000)
    //     });
    // });

    
});
// Ejemplo de la funcion keyup()
// $(document).ready(function() {
//     //Declarar variables reutilizables
//     var input = $("#nombre");
//     var contenido = $("#contenido2");
  
//     //Evento keyup
//     input.keyup(function() {
//       console.log(input.val()); //verificamos en consola
//       contenido.html(input.val()); //agregamos en contenido
  
//       //Podemos verificar si está vacio el input
//       if (input.val() === "") {
//         contenido.html("Estoy esperando...");
//       }
//     });
//   });