export class Unit {
  public id: number;
  public  name : string;
  public  description  : string;
  public  category  : string;
  public  type  : string;

    constructor (id : number, 
              name : string,
              description  : string,
              category  : string,
              type  : string,) {

                this.id = id;
                this.name = name;
                this.description = description;
                this.category = category;
                this.type = type;
    }


}
