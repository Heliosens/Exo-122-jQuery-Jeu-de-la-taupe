const holes = $('.hole') // utilier la méthode jquery appropriée pour selectionner les éléments ayant pour classe "hole";
const scoreBoard = $('.score') //utiliser la méthode jquery appropriée pour selectionner l'élément ayant pour classe "score";
const moles = $('.mole') // utilier la méthode jquery appropriée pour selectionner les éléments ayant pour classe "mole";

// start
$('#startGame').click(function (){
    scoreBoard.text(0);
    let i = 0;
    let gameTime = setInterval(function (){
        if(i < 10){
            let t = Math.floor(Math.random() * 800 + 200);
            let item = Math.floor(Math.random() * 7);
            setTimeout(function (){
                holes.eq(item).addClass('up');

            }, t)
            holes.removeClass('up');
            i++;
        }
        else {
            holes.removeClass('up');
            clearInterval(gameTime);
        }
    }, 1000)
})

moles.click(function (){
    scoreBoard.text(parseInt(scoreBoard.text()) + 1);
    $(this).parent().removeClass('up');
})
