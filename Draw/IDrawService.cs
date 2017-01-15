using System;


namespace SISLottery.Draw
{

    public interface IDrawService
    {
        void CreateDraw(DrawDetailsModel details);

        void UpdateResults(string drawName, DrawResultsModel results);

        DrawDetailsModel[] SearchByDate(DateTime date);

        DrawDetailsModel GetDraw(string drawName);

        
    }
}