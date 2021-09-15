/*  
Project Name: Ripple Effect
Description: Click anywhere you want to see the ripple effect. Give me a thumbs-up, If you like it. Enjoy!
Author: Abdul Samad
Author URI: https://getabdulsamad.com/
Tags: Mobile-friendly, All-Devices-Supported. 
*/

const background = document.body;
const buttons = document.querySelectorAll('.ripple')

buttons.forEach(button => {
    button.addEventListener('click', function (e) {
        const x = e.clientX
        const y = e.clientY

        const buttonTop = e.target.offsetTop
        const buttonLeft = e.target.offsetLeft

        const xInside = x - buttonLeft
        const yInside = y - buttonTop

        const circle = document.createElement('span')
        circle.classList.add('circle')
        circle.style.top = yInside + 'px'
        circle.style.left = xInside + 'px'

        this.appendChild(circle)

        setTimeout(() => circle.remove(), 500)
    })
}) 

background.addEventListener('click', function (body) {
    if (body.target.closest('button')) return
        body.preventDefault()
    const xbody = body.clientX
    const ybody = body.clientY

    const bodyCircle = document.createElement('span')
    bodyCircle.classList.add('body-circle')
    bodyCircle.style.top = ybody + 'px'
    bodyCircle.style.left = xbody + 'px'

    this.appendChild(bodyCircle)

    setTimeout(() => bodyCircle.remove(), 500)
})