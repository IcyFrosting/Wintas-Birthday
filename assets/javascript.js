var cards = document.getElementById('allCards')
var start = document.getElementById('start')
var but = document.getElementById('button')

but.addEventListener('click', function () {
    start.setAttribute('style', 'display:none')
    cards.setAttribute('style', 'display:block')
})