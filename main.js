$('.menuSandwich').click(function(){
    $('#menuqueaparece').slideToggle();
})

$(document).ready(function(){
    $('#carrossel').slick({autoplay: true});
})

$('#tel-numb').mask('(00) 00000-0000', {placeholder: '(xx) xxxxx-xxxx'})
//$('#emailcod').mask('SSSSSSSS@email.com',{placeholder: 'xxx@gmail.com})

$('form').validate({
    rules:{
        username: {required: true},
        usertel: {required: true, tel: true},
        useremail: {required: true, email: true},
    },

    messages:{
        username: 'Por favor, digite seu nome',
        usertel: 'Por favor, digite seu telefone corretamente',
        useremail: 'Por favor, digite seu email',
    },
})

$('ul button').click(function(){
    const destino = $('#contato');

    const nomeVeiculo = $(this).parent().find('h3').text();
    $('#veiculodeinteresse').val(nomeVeiculo);

    $('html').animate ({scrollTop: destino.offset().top},1000)
    })
