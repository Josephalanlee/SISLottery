using System;


namespace SISLottery.Draw
{

    public interface IDrawRepository
    {
        void CreateDraw(DrawDetailsModel details);

        void UpdateDrawResults(string drawName, DrawResultsModel results);

        DrawDetailsModel[] SearchDraws(DateTime time);

        DrawDetailsModel GetDrawDetails(string drawName);

        DrawResultsModel GetDrawResults(string drawName);

    }
}