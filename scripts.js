const sectionNumbers = document.querySelector(".section-numbers")
const sectionResult = document.querySelector('.section-result')
const result = document.querySelector('.result-numbers')
const btnSort = document.querySelector(".sort")
const btnAgain = document.querySelector(".sort-again")
const minNum = document.querySelector('#min-number')
const maxNum = document.querySelector('#max-number')
const quantityNum = document.querySelector('#quantity-numbers')

const allInputs = [quantityNum, minNum, maxNum]
btnSort.disabled = true



function widthAjust(element) {
    element.style.width = Math.max(86, (element.value.length + 1) * 21) + 'px';
    inputs.forEach(input => {
        input.addEventListener('input', () => {
            widthAjust(input);
        });
    });
}

function checkInputs() {
    fieldsFilled = true

    allInputs.forEach(input => {
        if (input.value === '') {
            fieldsFilled = false
        }
    })

    if (fieldsFilled) {
        btnSort.removeAttribute('disabled')
    } else {
        btnSort.disabled = true
    }
}

allInputs.forEach(input => {
    input.addEventListener('input', checkInputs)
})

function createNumbers() {
    let quantity = Number(quantityNum.value)
    let min = Number(minNum.value)
    let max = Number(maxNum.value)

    let resultNumbers = sortNumbers(quantity, min, max)

    resultNumbers.forEach(number => {7
    
        let p = document.createElement('p')
        let span = document.createElement('span')
        span.textContent = number
        p.appendChild(span)
        result.appendChild(p)

    })

    sectionNumbers.setAttribute('id', 'hide')
    sectionResult.removeAttribute('id')
}



btnSort.addEventListener('click', () => {
    createNumbers()
})

function SortAgain() {
    sectionResult.setAttribute('id', 'hide')
    sectionNumbers.removeAttribute('id', 'hide')

    allInputs.forEach(input => {
        input.value = ''
    })

    btnSort.disabled = true

}


btnAgain.addEventListener('click', () => {
    location.reload()
})






function sortNumbers(count, min, max) {

    let checkbox = document.querySelector('input[type="checkbox"]')

    if (checkbox.checked) {

        let uniquenumbers = new Set()
        while (uniquenumbers.size < count) {
            let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
            uniquenumbers.add(randomNum)
        }
        return Array.from(uniquenumbers)
    } else {

        let uniquenumbers = []

        for (let i = 0; i < count; i++) {
            let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
            uniquenumbers.push(randomNum)
        }
        return Array.from(uniquenumbers)
    }
}
