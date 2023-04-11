const person = {
    name: "Luke", 
    job: "Farmer", 
    parents: ["Anakin", "Padme"]
}

// Desestruturando as propriedades de um Objeto
const name = person.name
// const { job } = person
// const { parents } = person
const { job, parents } = person

console.log(`Name: ${name}\nOccupation: ${job}\nParents: ${parents}`)

// Desestruturando as propriedades de um array
// Nos caso dos arrays, a ordem dos elementos é o que define o valor da variável
//     Anakin, Padme
const [father, mother] = parents

console.log(father, mother)

const createUser = ({ name, job, parents}) => {
    const id = Math.floor(Math.random() * 9999)
    return {
        id,
        name,
        job,
        parents
    }
}

const luke = createUser(person)

console.log(luke)