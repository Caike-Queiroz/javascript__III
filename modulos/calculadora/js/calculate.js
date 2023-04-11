export default function calculate() {
    const resultInput = document.querySelector('#result')
    resultInput.value = 'ERROR'
    resultInput.classList.add('error')
    const result = eval(input.value)
    // eval = avaliar, logo vai pegar a string, transformar em código, e executar esse código
    resultInput.classList.remove('error')
    resultInput.value = result
}