let idade = 19


if (idade > 18){
    console.log("Cadastro Autorizado.");
} else {
    console.log("Cadastro Não é Permitido Pela Idade.");
}


let quantParticipantes = 99

if (quantParticipantes < 100){
    console.log("Você esta Apto a Participar do Evento.");
} else {
    console.log("Cadastro Não Permitido, Limite de Participantes Excedido");
}
 function formDate(data = new Date()){
     var dia = data.getDate();
     var mes = data.getMonth() ;
     var ano = data.getFullYear();

     if(dia.toString().length == 1) dia = '0' + dia;
     if(mes.toString().length == 1) mes = '0' + mes;

     return dia+'/'+mes+'/'+ano;

    }
let dataEvento = 30/10/2021;
let listaParticipantes = ["Maicon ", " Diego ", " Ruan ", " Emanuel ", " Flávio ", " Renan ."];
let listaPalestrantes = ["Thiago Nascimento " , " Odirlei Assis ."];

  
if (dataEvento > formDate()){
    console.log("Cadastro e evento realizados com sucesso!");
    console.log("Participantes do Evento : " + listaParticipantes);
    console.log("Palestrantes do Evento : " + listaPalestrantes);
} else {
    console.log("Cadastro não permitido por data inválida.");
}

