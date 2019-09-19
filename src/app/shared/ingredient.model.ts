export class Ingredient {
    public name: string;
    public amount: number;
    public measurement: string;
    
    constructor(name: string, amount: number, measurement: string){
        this.name = name
        this.amount = amount
        this.measurement = measurement
    }
}