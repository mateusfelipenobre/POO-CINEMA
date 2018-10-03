export class Cliente{
    private id:string;
    private telefone:string;
  
    public constructor(id:string,fone:string){
        this.id = id;
        this.telefone = fone;
    }
    public getId():string{
        return this.id;
    }
    public setId(novoId:string):void{
        this.id = novoId;
    }
  
    public getFone():string{
        return this.telefone;
    }
    public setFone(novoFone:string):void{
        this.telefone = novoFone;
    }
  }
