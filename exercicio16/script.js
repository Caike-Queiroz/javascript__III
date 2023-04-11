const dayjs = require('dayjs')

function birthday(date) {
    const birthday = dayjs(date)
    const today = dayjs() 

    const ageInYears = today.diff(birthday, 'year')
    const nextBirthday = birthday.add(ageInYears + 1, 'year') // gets the oncoming birthday
    const daysToNextBirthday = nextBirthday.diff(today, 'day') + 1 // gets the quantity of days until your next birthday

    console.log(`Age: ${ageInYears}`) // Output expected: Age: 44
    console.log(`Próximo aniversário: ${nextBirthday.format('dddd - DD/MM/YYYY')}`) // Output expected: Próximo aniversário: Saturday - 23/09/2023
    console.log(`Dias até completar ${ageInYears + 1} anos: ${daysToNextBirthday}`) // Output expected: Dias até completar 45 anos: 141
}

birthday('1975-08-12') // YYYY-MM-DD