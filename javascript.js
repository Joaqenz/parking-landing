let burger = document.querySelector('.burger');
let cross = document.querySelector('.close');
let menu = document.querySelector('.side-nav');

burger.addEventListener('click', function(){
    menu.style.transform = 'translateX(0%)';
})
cross.addEventListener('click', function(){
    menu.style.transform = 'translateX(-200%)';
})

// Joaco: Fijate el style.css que al final agregué unas cosas
// La idea es encapsular todo en clases y que jQuery conociendo el objeto en cuestión con el $(this)
// a traves de el y de sus hijos (si corresponde, no es este el caso) solo se encargue de agregar / buscar / sacar lo que le corersponda. 
// y a través del css aplicar los estilos que correspondan en base a la acción
// Pensá que el día de mañana las faqs seguramente sean administrables; de esta forma si hay 1 o 100 preguntas frecuentes con estas
// cinco líneas ya queda todo resuelto y normalizado :)
$(".fQuestion").click(function(){
    question = $(this);

    // Obtengo el que esta actualmente abierto
    opened = $(".fQuestion.open");
    // Cierro el que actualmente estaba abierto (si hay)
    opened.removeClass("open");

    // Si el que quiero abrir no es el que anteriormente estaba abierto, lo abro, si no, queda cerrado
    if(!opened.is(question)){
        question.addClass("open");
    }

    // Si quisieras mantener las clases que estabas usando, tendrías que agregar las clases asi: (Lo mismo para cerrar el que estaba anteriormente abierto con removeClass)
    // question.find(".fQuestionBot").addClass("fQuestionActive")
    // question.addClass("fQOpen")
    // question.find(".questionInterrogation").addClass("questionInterrogationActive")
    // question.find(".questionArrow").addClass("qaActive")
})

// let q1 = document.querySelector('.q1')
// let q1bot = document.querySelector('.q1bot')
// let qi1 = document.querySelector('.qi1')
// let qa1 = document.querySelector('.qa1')

// let q2 = document.querySelector('.q2')
// let q2bot = document.querySelector('.q2bot')
// let qi2 = document.querySelector('.qi2')
// let qa2 = document.querySelector('.qa2')

// let q3 = document.querySelector('.q3')
// let q3bot = document.querySelector('.q3bot')
// let qi3 = document.querySelector('.qi3')
// let qa3 = document.querySelector('.qa3')

// let q4 = document.querySelector('.q4')
// let q4bot = document.querySelector('.q4bot')
// let qi4 = document.querySelector('.qi4')
// let qa4 = document.querySelector('.qa4')

// let q5 = document.querySelector('.q5')
// let q5bot = document.querySelector('.q5bot')
// let qi5 = document.querySelector('.qi5')
// let qa5 = document.querySelector('.qa5')

// let q6 = document.querySelector('.q6')
// let q6bot = document.querySelector('.q6bot')
// let qi6 = document.querySelector('.qi6')
// let qa6 = document.querySelector('.qa6')

// q1.addEventListener('click', function(){
//     q1bot.classList.toggle('fQuestionActive')
//     this.classList.toggle('fQOpen')
//     qi1.classList.toggle('questionInterrogationActive')
//     qa1.classList.toggle('qaActive')
//     if (q2bot.classList.contains('fQuestionActive') ||
//         q3bot.classList.contains('fQuestionActive') ||
//         q4bot.classList.contains('fQuestionActive') ||
//         q5bot.classList.contains('fQuestionActive') ||
//         q6bot.classList.contains('fQuestionActive')) {
//             q2.classList.remove('fQOpen')
//             q3.classList.remove('fQOpen')
//             q4.classList.remove('fQOpen')
//             q5.classList.remove('fQOpen')
//             q6.classList.remove('fQOpen')
//             q2bot.classList.remove('fQuestionActive')
//             q3bot.classList.remove('fQuestionActive')
//             q4bot.classList.remove('fQuestionActive')
//             q5bot.classList.remove('fQuestionActive')
//             q6bot.classList.remove('fQuestionActive')
//             qi2.classList.remove('questionInterrogationActive')
//             qi3.classList.remove('questionInterrogationActive')
//             qi4.classList.remove('questionInterrogationActive')
//             qi5.classList.remove('questionInterrogationActive')
//             qi6.classList.remove('questionInterrogationActive')
//             qa2.classList.remove('qaActive')
//             qa3.classList.remove('qaActive')
//             qa4.classList.remove('qaActive')
//             qa5.classList.remove('qaActive')
//             qa6.classList.remove('qaActive')
//     }
// })
// q2.addEventListener('click', function(){
//     q2bot.classList.toggle('fQuestionActive')
//     this.classList.toggle('fQOpen')
//     qi2.classList.toggle('questionInterrogationActive')
//     qa2.classList.toggle('qaActive')
//     if (q1bot.classList.contains('fQuestionActive') ||
//         q3bot.classList.contains('fQuestionActive') ||
//         q4bot.classList.contains('fQuestionActive') ||
//         q5bot.classList.contains('fQuestionActive') ||
//         q6bot.classList.contains('fQuestionActive')) {
//             q1.classList.remove('fQOpen')
//             q3.classList.remove('fQOpen')
//             q4.classList.remove('fQOpen')
//             q5.classList.remove('fQOpen')
//             q6.classList.remove('fQOpen')
//             q1bot.classList.remove('fQuestionActive')
//             q3bot.classList.remove('fQuestionActive')
//             q4bot.classList.remove('fQuestionActive')
//             q5bot.classList.remove('fQuestionActive')
//             q6bot.classList.remove('fQuestionActive')
//             qi1.classList.remove('questionInterrogationActive')
//             qi3.classList.remove('questionInterrogationActive')
//             qi4.classList.remove('questionInterrogationActive')
//             qi5.classList.remove('questionInterrogationActive')
//             qi6.classList.remove('questionInterrogationActive')
//             qa1.classList.remove('qaActive')
//             qa3.classList.remove('qaActive')
//             qa4.classList.remove('qaActive')
//             qa5.classList.remove('qaActive')
//             qa6.classList.remove('qaActive')
//     }
// })
// q3.addEventListener('click', function(){
//     q3bot.classList.toggle('fQuestionActive')
//     this.classList.toggle('fQOpen')
//     qi3.classList.toggle('questionInterrogationActive')
//     qa3.classList.toggle('qaActive')
//     if (q1bot.classList.contains('fQuestionActive') ||
//         q2bot.classList.contains('fQuestionActive') ||
//         q4bot.classList.contains('fQuestionActive') ||
//         q5bot.classList.contains('fQuestionActive') ||
//         q6bot.classList.contains('fQuestionActive')) {
//             q2.classList.remove('fQOpen')
//             q1.classList.remove('fQOpen')
//             q4.classList.remove('fQOpen')
//             q5.classList.remove('fQOpen')
//             q6.classList.remove('fQOpen')
//             q1bot.classList.remove('fQuestionActive')
//             q2bot.classList.remove('fQuestionActive')
//             q4bot.classList.remove('fQuestionActive')
//             q5bot.classList.remove('fQuestionActive')
//             q6bot.classList.remove('fQuestionActive')
//             qi2.classList.remove('questionInterrogationActive')
//             qi1.classList.remove('questionInterrogationActive')
//             qi4.classList.remove('questionInterrogationActive')
//             qi5.classList.remove('questionInterrogationActive')
//             qi6.classList.remove('questionInterrogationActive')
//             qa2.classList.remove('qaActive')
//             qa1.classList.remove('qaActive')
//             qa4.classList.remove('qaActive')
//             qa5.classList.remove('qaActive')
//             qa6.classList.remove('qaActive')
//     }
// })
// q4.addEventListener('click', function(){
//     q4bot.classList.toggle('fQuestionActive')
//     this.classList.toggle('fQOpen')
//     qi4.classList.toggle('questionInterrogationActive')
//     qa4.classList.toggle('qaActive')
//     if (q1bot.classList.contains('fQuestionActive') ||
//         q3bot.classList.contains('fQuestionActive') ||
//         q2bot.classList.contains('fQuestionActive') ||
//         q5bot.classList.contains('fQuestionActive') ||
//         q6bot.classList.contains('fQuestionActive')) {
//             q2.classList.remove('fQOpen')
//             q3.classList.remove('fQOpen')
//             q1.classList.remove('fQOpen')
//             q5.classList.remove('fQOpen')
//             q6.classList.remove('fQOpen')
//             q1bot.classList.remove('fQuestionActive')
//             q3bot.classList.remove('fQuestionActive')
//             q2bot.classList.remove('fQuestionActive')
//             q5bot.classList.remove('fQuestionActive')
//             q6bot.classList.remove('fQuestionActive')
//             qi2.classList.remove('questionInterrogationActive')
//             qi3.classList.remove('questionInterrogationActive')
//             qi1.classList.remove('questionInterrogationActive')
//             qi5.classList.remove('questionInterrogationActive')
//             qi6.classList.remove('questionInterrogationActive')
//             qa2.classList.remove('qaActive')
//             qa3.classList.remove('qaActive')
//             qa1.classList.remove('qaActive')
//             qa5.classList.remove('qaActive')
//             qa6.classList.remove('qaActive')
//     }
// })
// q5.addEventListener('click', function(){
//     q5bot.classList.toggle('fQuestionActive')
//     this.classList.toggle('fQOpen')
//     qi5.classList.toggle('questionInterrogationActive')
//     qa5.classList.toggle('qaActive')
//     if (q1bot.classList.contains('fQuestionActive') ||
//         q3bot.classList.contains('fQuestionActive') ||
//         q4bot.classList.contains('fQuestionActive') ||
//         q2bot.classList.contains('fQuestionActive') ||
//         q6bot.classList.contains('fQuestionActive')) {
//             q1.classList.remove('fQOpen')
//             q2.classList.remove('fQOpen')
//             q3.classList.remove('fQOpen')
//             q4.classList.remove('fQOpen')
//             q6.classList.remove('fQOpen')
//             q1bot.classList.remove('fQuestionActive')
//             q2bot.classList.remove('fQuestionActive')
//             q3bot.classList.remove('fQuestionActive')
//             q4bot.classList.remove('fQuestionActive')
//             q6bot.classList.remove('fQuestionActive')
//             qi1.classList.remove('questionInterrogationActive')
//             qi2.classList.remove('questionInterrogationActive')
//             qi3.classList.remove('questionInterrogationActive')
//             qi4.classList.remove('questionInterrogationActive')
//             qi6.classList.remove('questionInterrogationActive')
//             qa2.classList.remove('qaActive')
//             qa3.classList.remove('qaActive')
//             qa4.classList.remove('qaActive')
//             qa1.classList.remove('qaActive')
//             qa6.classList.remove('qaActive')
//     }
// })
// q6.addEventListener('click', function(){
//     q6bot.classList.toggle('fQuestionActive')
//     this.classList.toggle('fQOpen')
//     qi6.classList.toggle('questionInterrogationActive')
//     qa6.classList.toggle('qaActive')
//     if (q1bot.classList.contains('fQuestionActive') ||
//         q3bot.classList.contains('fQuestionActive') ||
//         q4bot.classList.contains('fQuestionActive') ||
//         q5bot.classList.contains('fQuestionActive') ||
//         q2bot.classList.contains('fQuestionActive')) {
//             q2.classList.remove('fQOpen')
//             q3.classList.remove('fQOpen')
//             q1.classList.remove('fQOpen')
//             q5.classList.remove('fQOpen')
//             q4.classList.remove('fQOpen')
//             q1bot.classList.remove('fQuestionActive')
//             q3bot.classList.remove('fQuestionActive')
//             q4bot.classList.remove('fQuestionActive')
//             q5bot.classList.remove('fQuestionActive')
//             q2bot.classList.remove('fQuestionActive')
//             qi1.classList.remove('questionInterrogationActive')
//             qi2.classList.remove('questionInterrogationActive')
//             qi3.classList.remove('questionInterrogationActive')
//             qi4.classList.remove('questionInterrogationActive')
//             qi5.classList.remove('questionInterrogationActive')
//             qa2.classList.remove('qaActive')
//             qa3.classList.remove('qaActive')
//             qa4.classList.remove('qaActive')
//             qa5.classList.remove('qaActive')
//             qa1.classList.remove('qaActive')
//     }
// })
