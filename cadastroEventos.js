let idade = 19


if (idade > 18){
    console.log("Você esta apto para realizar o cadastro.");
} else {
    console.log("Cadastro Não é Permitido Pela Idade.");
}


let quantParticipantes = 6

if (quantParticipantes < 100){
    console.log("Você esta Apto a Participar do Evento.");
} else {
    console.log("Cadastro Não Permitido, Limite de Participantes Excedido");
}
let dataEvento = "23/10/2021";
let listaParticipantes = ["Maicon ", " Diego ", " Ruan ", " Emanuel ", " Flávio ", " Renan ."];
let listaPalestrantes = ["Thiago Nascimento " , " Odirlei Assis ."];

  
if (dataEvento == "22/08/2021"){
    console.log("Cadastro não permitido por data inválida.");
} else {
    console.log("Cadastro e evento realizados com sucesso!");
    console.log("Participantes do Evento : " + listaParticipantes);
    console.log("Palestrantes do Evento : " + listaPalestrantes);
}

