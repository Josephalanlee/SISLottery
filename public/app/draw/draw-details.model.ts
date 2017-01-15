
export class DrawRulesModel
{
    amountOfNumbers:number;
    lowerRange:number;
    upperRange:number;
}

export class DrawDetailsModel
{
    constructor()
    {
        this.primaryRules = new DrawRulesModel();
        this.secondaryRules = new DrawRulesModel();
    }

    name:string;
    description:string;
    drawDate:Date;
    primaryRules:DrawRulesModel;
    secondaryRules:DrawRulesModel;

}