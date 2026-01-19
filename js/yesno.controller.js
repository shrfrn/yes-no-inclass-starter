'use strict'

function onAsk() {
    const elAnswer = document.querySelector('.answer')
    elAnswer.classList.add('hidden')
    
    const elLoader = document.querySelector('.loader')
    elLoader.classList.remove('hidden')

    ask(renderAns)
}

function renderAns(res) {
    const elAns = document.querySelector('.answer h2')
    const elImg = document.querySelector('.answer img')

    elAns.innerText = res.answer
    elImg.src = res.image
}

function showAns() {
    const elLoader = document.querySelector('.loader')
    elLoader.classList.add('hidden')
    
    const elAnswer = document.querySelector('.answer')
    elAnswer.classList.remove('hidden')
}