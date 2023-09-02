export class Menu_items{
    public name:string;
    public description:string;
    public imagePath:string;
    public stars:number;
    public cookTime:string;
    public calorieAmount:number;

    constructor(name:string, desc:string, imagePath:string,stars:number,cookTime:string,calorieAmount:number){
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
        this.stars = stars;
        this.cookTime=cookTime;
        this.calorieAmount=calorieAmount;
    }
}