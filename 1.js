
function funName(){
    let name = $('.input_1_1').val();
    let date = $('.input_1_2').val();
    $('.res1').html(name + " " + date)
    console.log(name);
    console.log(date);
}

$('.button_1').on('click', funName);