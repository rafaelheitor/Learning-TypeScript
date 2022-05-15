const cachorros :string[] = [
    'Luna',
    'Mel',
    'Neguinha'
]

function exibeCachorros(cachorros: string[]){
    return `Os cachorros são: ${cachorros.join(', ')}`
}

console.log(exibeCachorros(cachorros))