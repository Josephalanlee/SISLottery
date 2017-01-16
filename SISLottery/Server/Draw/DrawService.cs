using Microsoft.Extensions.Logging;
using System;

namespace SISLottery.Draw
{
    public class DrawService : IDrawService
    {
        private IDrawRepository _repository;
        private ILogger _logger;
        public DrawService(IDrawRepository repository, ILogger<DrawService> logger)
        {
            _logger = logger;

            if (repository == null)
            {
                throw new InvalidOperationException("Can not create draw service with a null repository");
            }

            this._repository = repository;
        }

        public void CreateDraw(DrawDetailsModel details)
        {

         _logger.LogInformation("{0} running {1} for DrawName: {2}", this.GetType().Name, nameof(this.CreateDraw), details.Name);
            _repository.CreateDraw(details);

        }

        public DrawDetailsModel GetDraw(string drawName)
        {

            _logger.LogInformation("{0} running {1} for DrawName: {2}", this.GetType().Name, nameof(this.GetDraw), drawName);
            return _repository.GetDrawDetails(drawName);



        }

        public DrawDetailsModel[] SearchByDate(DateTime date)
        {
            _logger.LogInformation("{0} running {1} for Date: {2}", this.GetType().Name, nameof(this.SearchByDate), date.ToString());
            return _repository.SearchDraws(date);
        }

        ///<summary> Update the draw results manually.!--
        ///<returns>Any validation errors </returns>
        public DrawRulesModel.DrawRulesValidationResultsModel UpdateResults(string drawName, DrawResultsModel results)
        {
            _logger.LogInformation("{0} running {1} for Draw: {2} ", this.GetType().Name, nameof(this.UpdateResults), drawName.ToString());
            var drawDetails = _repository.GetDrawDetails(drawName);
            var validationErrors = new DrawRulesModel.DrawRulesValidationResultsModel();

            validationErrors.PrimaryErrors = drawDetails.PrimaryRules.ValidateResults(results.PrimaryResults);

            validationErrors.SecondaryErrors = drawDetails.SecondaryRules.ValidateResults(results.SecondaryResults);

            if (validationErrors.isValid)
            {
                _repository.UpdateDrawResults(drawName, results);
            }

            return validationErrors;

        }


    }
}