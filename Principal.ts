declare function require(msg:string):any;
var readline=require("readline-sync");

import {Cliente} from "./cliente";
import {Cinema} from "./cinema"

let cinema: Cinema = new Cinema(0);

while (true){
    
    let opcoes : string = "\n" + 
    "show - quant. de cadeiras do cinema \n" +
    "reservar - reservar cadeira\n" + 
    "cancelar - cancelar reserva\n" + 
    "init - quant de cadeiras no cinema \n" +
    "end - sair. \n";
    console.log(opcoes);
    let comando : string = readline.question("Digite um comando: ");
    if(comando == "end"){
    console.log("Até a mais ver!");
    break;    
    }else{
    switch(comando){
 
        case "init":
            let ace:number=readline.question("Digite a quant de assentos: ");
            cinema=new Cinema(ace);
            break;

        case "show":
            console.log(cinema.mostrar());
            break;

        case "reservar":
            let id:string=(readline.question("nome do cliente?: "));
            let fone:string=(readline.question("telefone do cliente?: "));
            let indice:number=(readline.question("indice do cliente?: "));
            cinema.reservar(id,fone,indice);
            break;
        
        case "cancelar":
            let ide:string=(readline.question("nome do cliente: "));
            
            if(cinema.cancelar(ide) == true){
                console.log("Reserva cancelada");
            }else{
                console.log("não encontrado");
            }
            break;

        case "buscar":
            let idd:string=readline.question("nome do cliente?: ");
            console.log(cinema.buscarCliente(idd));
        default:
            console.log("invalido");
        
    }
}

}

