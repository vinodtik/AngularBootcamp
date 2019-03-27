export class Product{
    prodId : number;
    prodName : string;
    prodImg : string;
    prodPrice : number;
    prodDesc : String;

    constructor(id:number, name:string, img:string, price:number, desc:string){
        this.prodId = id;
        this.prodName = name;
        this.prodImg = img;
        this.prodPrice = price;
        this.prodDesc = desc;
    }

}