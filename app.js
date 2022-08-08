const arrowLeftButton = document.querySelector('.arrow-left');
const arrowRightButton = document.querySelector('.arrow-right');
const circles = document.querySelectorAll('.circle');
const stepperLine = document.querySelector('.stepper-background-line.active')

let slideIndex = 0;

function updateStepperLineSize() {
    stepperLine.style.transform = `translateY(-50%) scaleX(${slideIndex * 0.25})`
}

function updateActivatedCircles() {
    circles.forEach((circle, index) => {
        if (index > slideIndex) {
            circle.classList.remove('active')
        }
        else {
            circle.classList.add('active')
        }
    })
}

function nextSlide() {
    if (slideIndex < 2) {
        slideIndex += 1;
        arrowRightButton.style.fill = '#FFF38A'
        updateStepperLineSize()
        updateActivatedCircles()
        if (slideIndex === 2) {
            arrowRightButton.style.fill = '#827B68'
            arrowLeftButton.style.fill = '#FFF38A'
        }
    }
}

function prevSlide() {
    if (slideIndex > 0) {
        slideIndex -= 1;
        arrowLeftButton.style.fill = '#FFF38A'
        updateStepperLineSize()
        updateActivatedCircles()
        if (slideIndex === 0) {
            arrowLeftButton.style.fill = '#827B68'
            arrowRightButton.style.fill = '#FFF38A'
        }
    }
}

arrowLeftButton.addEventListener('click', prevSlide)
arrowRightButton.addEventListener('click', nextSlide)