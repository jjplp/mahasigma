function openLetter(){
    var letter = document.querySelector('#letter')
    letter.src = "./2.png"

    var play = document.querySelector('#play-btn')
    play.src = "./play-icon.png"
}

function playVideo(){
    var embed = document.querySelector('#video')
    embed.src = "https://www.youtube.com/embed/cjZHQiOaK1w?si=V02q-plmPxhbyDlo&amp&autoplay=1;controls=0&amp;start=02"
}