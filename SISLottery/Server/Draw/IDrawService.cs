using System;


namespace SISLottery.Draw
{

    public interface IDrawService
    {
        void CreateDraw(DrawDetailsModel details);

        DrawRulesModel.DrawRulesValidationResultsModel UpdateResults(string drawName, DrawResultsModel results);

        DrawDetailsModel[] SearchByDate(DateTime date);

        DrawDetailsModel GetDraw(string drawName);


    }
}