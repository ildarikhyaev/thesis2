$(document).ready(function(){
	
$('#mobile-header-menu').on('click', function() {
    $(this).siblings('#mobile-menu').toggle('slow');

      });

$('.owl-carousel').owlCarousel({
                loop:true, //Зацикливаем слайдер
               
                nav:true, //Отключение навигации
              
                dots:true,

                dotsEach: true,

                responsive:{ //Адаптивность. Кол-во выводимых элементов при определенной ширине.
                    0:{
                        items:1
                    },
                    700:{
                        items:2
                    },
                    1200:{
                        items:3
                    }
                }
            });
        });