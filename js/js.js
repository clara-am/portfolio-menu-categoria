$(document).ready(function(){
    var titulo=$('.titulo');
    var parrafo=$('.parrafo');
    var botonNoche=$('.btn-noche');
    var enlace=$('.nav-link');
    var pico=$('.pico');
    /*coge la altura de parrafo de sameheight*/
    titulo.matchHeight({
        byRow: false
        }
    );
    parrafo.matchHeight({
        byRow: false
        }
    );
    //para el pico
    var all=$('article');
    var posicionAll=$('.todo').offset();
    var posicionAllLeft=posicionAll.left;
    var posicionFoto=$('.foto').offset();
    var posicionFotoLeft=posicionFoto.left;
    var posicionIlu=$('.ilu').offset();
    var posicionIluLeft=posicionIlu.left;
    var posicionDesi=$('.desi').offset();
    var posicionDesiLeft=posicionDesi.left;
    var posicionMoti=$('.moti').offset();
    var posicionMotiLeft=posicionMoti.left;
    //para que salta activo al arrancar
    var seleccion = document.querySelector('.titPrin');
    seleccion.innerHTML='<h1>All</h1>';
    $('.todo').addClass('active');
    //navegacion
    enlace.click(function(){
        var esteEnlace=$(this).text();
        $('.todo').removeClass('active');
        //alert(esteEnlace);
        if(esteEnlace =='illustration'){
            pico.animate({
                left:posicionIluLeft
            },'fast',function(){
                all.hide();
                $('.ilustracion').show(); 
            });
            seleccion.innerHTML='<h1>Illustration</h1>';
        }
        else if(esteEnlace =='photography'){
            pico.animate({
                left:posicionFotoLeft
            },'fast',function(){
                all.hide();
                $('.foto').show();
            });
            seleccion.innerHTML='<h1>Photography</h1>';
        }
        else if(esteEnlace =='design'){
            pico.animate({
                left:posicionDesiLeft
            },'fast',function(){
                all.hide();
                $('.diseño').show();
            });
            seleccion.innerHTML='<h1>Design</h1>';
        }
        else if(esteEnlace =='motion'){
            pico.animate({
                left:posicionMotiLeft
            },'fast',function(){
                all.hide();
                $('.motion').show();
            });
            seleccion.innerHTML='<h1>Motion</h1>';
        }
        else{
            pico.animate({
                left:posicionAllLeft
            },'fast',function(){
                all.show();
                $('.todo').addClass('active');
            });
            seleccion.innerHTML='<h1>All</h1>';
        }   
        
    }); 
    //noche
    botonNoche.click(function(){
        var cuerpo=$('body');
        //para que se ponga y se quite con el click se pone toggle
        cuerpo.toggleClass('noche');
    });
});