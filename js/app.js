document.addEventListener("DOMContentLoaded", function(){


window.addEventListener("keydown", function(e){
    var sound = document.querySelector('audio[data-key="'+ e.keyCode +'"]');  //konkatenacja co to jest??
    //inaczej pobrac zmienne sprobowac

    var button = document.querySelector('.button[data-key="'+e.keyCode+'"]');

    if(!sound) return; // konczy funkcje jesli nacisniemy klawisz, ktory nie jest przypisany do zadnego elementu audio.
    sound.currentTime = 0; // przewinie plik dzwiekowy na poczatek
    sound.play();
    button.classList.add("pushed");

});

window.addEventListener("keyup", function(e){

    var button = document.querySelector('.button[data-key="'+e.keyCode+'"]');

    button.classList.remove("pushed");



});










});
