export class Menu_items{
    public name:string;
    public description:string;
    public imagePath:string;
    public stars:number;
    public cookTime:string;

    constructor(name:string, desc:string, imagePath:string,stars:number,cookTime:string){
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
        this.stars = stars;
        this.cookTime=cookTime;
    }
}