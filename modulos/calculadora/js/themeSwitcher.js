export default function () {
    const main = document.querySelector('main')
    const root = document.querySelector(':root')

    if (main.dataset.theme === 'dark') {
        root.style.setProperty('--bg-color', '#f1f5f9') // background-color
        root.style.setProperty('--border-color', '#aaa') // border-color
        root.style.setProperty('--font-color', '#212529') // font-color
        root.style.setProperty('--primary-color', '#26834a') // primary-color
        main.dataset.theme = 'light'
    } else {
        root.style.setProperty('--bg-color', '#212529') // background-color
        root.style.setProperty('--border-color', '#666') // border-color
        root.style.setProperty('--font-color', '#f1f5f9') // font-color
        root.style.setProperty('--primary-color', '#4dff91') // primary-color
        main.dataset.theme = 'dark'
    }
}