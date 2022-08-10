const arrowLeftButton = document.querySelector('.arrow-left');
const arrowRightButton = document.querySelector('.arrow-right');
const circles = document.querySelectorAll('.circle');
const stepperLine = document.querySelector('.stepper-background-line.active')
const descriptionContainers = document.querySelectorAll('.description-container')
const dateFirstNumbers = document.querySelectorAll('.third-number .seven, .third-number .eight')
const dateSecondNumbers = document.querySelectorAll('.fourth-number .seven, .fourth-number .zero, .fourth-number .three')

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

function updateDescriptionContainer() {
    descriptionContainers.forEach((descriptionContainer, index) => {
        if (index === slideIndex) {
            descriptionContainer.classList.remove('next-description-section', 'prev-description-section')
        }
        else if (index < slideIndex) {
            descriptionContainer.classList.remove('next-description-section')
            descriptionContainer.classList.add('prev-description-section')
        }
        else if (index > slideIndex) {
            descriptionContainer.classList.remove('prev-description-section')
            descriptionContainer.classList.add('next-description-section')
        }
    })
}

function updateDate() {
    switch (slideIndex) {
        case 0:
            dateFirstNumbers.forEach((firstNumber) => {
                if (firstNumber.classList.contains('seven')){
                    firstNumber.classList.remove('prev-number')
                }
                else {
                    firstNumber.classList.add('prev-number')
                }
            })
            break
        case (1):
            dateFirstNumbers.forEach((firstNumber) => {
                if (firstNumber.classList.contains('eight')){
                    firstNumber.classList.remove('next-number')
                }
                else {
                    firstNumber.classList.add('next-number')
                }
            })
            break
        case (2):
            dateFirstNumbers.forEach((firstNumber) => {
                if (firstNumber.classList.contains('eight')){
                    firstNumber.classList.remove('next-number')
                }
                else {
                    firstNumber.classList.add('next-number')
                }
            })
    }
}

function nextSlide() {
    if (slideIndex < 2) {
        slideIndex += 1;
        arrowRightButton.style.fill = '#FFF38A'
        updateStepperLineSize()
        updateActivatedCircles()
        updateDescriptionContainer()
        updateDate()
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
        updateDescriptionContainer()
        updateDate()
        if (slideIndex === 0) {
            arrowLeftButton.style.fill = '#827B68'
            arrowRightButton.style.fill = '#FFF38A'
        }
    }
}

arrowLeftButton.addEventListener('click', prevSlide)
arrowRightButton.addEventListener('click', nextSlide)