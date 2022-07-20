interface IHumano {
    nome: string,
    idade: number,
    profissao: 'Atriz' | 'Padeiro'
}


let pessoaUm: IHumano = {
    nome: 'Maria',
    idade: 29,
    profissao: "Atriz"
}

let pessoaDois: IHumano = {
    nome: 'Roberto',
    idade: 19,
    profissao: "Padeiro"
}

let pessoaTres: IHumano = {
    nome: "Laura",
    idade: 32,
    profissao: "Atriz"
}

let pessoaQuatro: IHumano = {
    nome: "Carlos",
    idade: 19,
    profissao: "Padeiro"
}