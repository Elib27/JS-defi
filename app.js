const arrowLeftButton = document.querySelector('.arrow-left');
const arrowRightButton = document.querySelector('.arrow-right');
const circles = document.querySelectorAll('.circle');
const stepperLine = document.querySelector('.stepper-background-line.active')
const descriptionContainers = document.querySelectorAll('.description-container')
const dateFirstSeven = document.querySelector('#Fseven')
const dateFirstEight = document.querySelector('#eight')
const dateSecondSeven = document.querySelector('#Sseven')
const dateSecondZero = document.querySelector('#zero')
const dateSecondThree = document.querySelector('#three')
const scrollableCaroussel = document.querySelector('.caroussel .scrollable-container')

let slideIndex = 0;
const MIN_SLIDE_INDEX = 0;
const MAX_SLIDE_INDEX = 2;

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

function updateArrows() {
    if (slideIndex === MIN_SLIDE_INDEX) {
        arrowLeftButton.style.fill = '#827B68'
        arrowRightButton.style.fill = '#FFF38A'
    }
    else if (slideIndex === MAX_SLIDE_INDEX) {
        arrowLeftButton.style.fill = '#FFF38A'
        arrowRightButton.style.fill = '#827B68'
    }   
    else {
        arrowLeftButton.style.fill = '#FFF38A'
        arrowRightButton.style.fill = '#FFF38A'
    }
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
            dateFirstSeven.classList = ''
            dateFirstEight.classList = 'next-number'
            dateSecondSeven.classList = ''
            dateSecondZero.classList = 'next-number'
            break
        case 1:
            dateFirstSeven.classList = 'prev-number'
            dateFirstEight.classList = ''
            dateSecondSeven.classList = 'prev-number'
            dateSecondZero.classList = ''
            dateSecondThree.classList = 'next-number'
            break
        case 2:
            dateFirstSeven.classList = 'prev-number'
            dateSecondZero.classList = 'prev-number'
            dateSecondThree.classList = ''
            break
    }
}

function updateCaroussel() {
    const translatePercentage = (-100 / 3 ) * slideIndex
    scrollableCaroussel.style.transform = `translateX(${translatePercentage}%)`
}

function nextSlide() {
    if (slideIndex < MAX_SLIDE_INDEX) {
        slideIndex += 1;
        updateStepperLineSize()
        updateActivatedCircles()
        updateArrows()
        updateDescriptionContainer()
        updateDate()
        updateCaroussel()
    }
}

function prevSlide() {
    if (slideIndex > MIN_SLIDE_INDEX) {
        slideIndex -= 1;
        updateStepperLineSize()
        updateActivatedCircles()
        updateArrows()
        updateDescriptionContainer()
        updateDate()
        updateCaroussel()
    }
}

arrowLeftButton.addEventListener('click', prevSlide)
arrowRightButton.addEventListener('click', nextSlide)