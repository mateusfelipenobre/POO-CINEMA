import{Cliente} from "./Cliente"

export class Cinema{
  private lotacao:number;
  private cadeiras:Array <Cliente>;

  public constructor(lotacao:number){
      this.cadeiras = [];
      this.lotacao = lotacao;
  }

  private getLotacao():number{
      return this.lotacao
  }
  private setLotacao(lotacao:number){
      this.lotacao = lotacao
  }

  public buscarCliente(id:string):number{
      let indice:number = 0;
      for(let i of this.cadeiras){
          if(i.getId()==id){
              return indice;
          }
          indice ++;
      }
  return 0;
  }
  public cancelarCliente(id:string):boolean{
      if(this.buscarCliente(id)==false){
          return false;
      }
  this.cadeiras[this.buscarCliente(id)]==undefined
  }
}


