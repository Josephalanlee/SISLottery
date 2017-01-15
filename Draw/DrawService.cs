using System;

namespace SISLottery.Draw
{
    public class DrawService : IDrawService
    {
        private IDrawRepository _repository;
        public DrawService(IDrawRepository repository)
        {
            if(repository == null)
            {
                throw new InvalidOperationException("Can not create draw service with a null repository");
            }
            
            this._repository = repository;
        }

        public void CreateDraw(DrawDetailsModel details)
        {
            _repository.CreateDraw(details);
            
        }

        public DrawDetailsModel GetDraw(string drawName)
        {
          

         return _repository.GetDrawDetails(drawName);
         

          
        }

        public DrawDetailsModel[] SearchByDate(DateTime date)
        {
            return _repository.SearchDraws(date);
        }

        ///<summary> Update the draw results manually.!--
        ///throws exception if rules are not met as we expect the client to implement the right rules validation.
        public void UpdateResults(string drawName, DrawResultsModel results)
        {
            var drawDetails = _repository.GetDrawDetails(drawName);

            if(drawDetails.PrimaryRules.ValidateResults(results.PrimaryResults)==false)
            {
                throw new ArgumentException("Primary results do not meet the rules");
            }
            else if(drawDetails.SecondaryRules.ValidateResults(results.SecondaryResults)==false)
            {
                throw new ArgumentException("Secondary results do not meet the rules");
            }
            else
            {
                _repository.UpdateDrawResults(drawName,results);
            }
            
        }

       
    }
}