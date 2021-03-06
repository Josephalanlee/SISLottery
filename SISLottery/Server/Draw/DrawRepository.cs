using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;

namespace SISLottery.Draw
{
    ///<summary> Normally, we would either inject DbContext in here or make this a mock implementation of the relevant DbContexts depending on preference.!--
    ///However, for speed I'm just implementing all the draw models in a list that we'll use LINQ to query.
    public class DrawRepository:IDrawRepository
    {
        public List<DrawModel> _draws;
        private ILogger _logger;

        public DrawRepository(ILogger<DrawRepository> logger)
        {
            this._logger = logger;
            _draws = new List<DrawModel>();

            var draw1 = new DrawModel();
            var details1 = new DrawDetailsModel();
            draw1.Details = details1;
            details1.Name = "Draw1";
            details1.Description = "1st Draw";
            details1.DrawDate = DateTime.Parse("09/10/2015");
            details1.PrimaryRules = new DrawRulesModel()
            {
                UpperRange = 34,
                LowerRange = 12,
                AmountOfNumbers = 5
            };

            details1.SecondaryRules = new DrawRulesModel()
            {
                UpperRange = 17,
                LowerRange = 9,
                AmountOfNumbers = 2
            };

            _draws.Add(draw1);

            var draw2 = new DrawModel();
            var details2 = new DrawDetailsModel();
            draw2.Details = details2;
            details2.Name = "Draw2";
            details2.Description = "2nd Draw";
            details2.DrawDate = DateTime.Parse("09/10/2015");
            details2.PrimaryRules = new DrawRulesModel()
            {
                UpperRange = 34,
                LowerRange = 12,
                AmountOfNumbers = 5
            };

            details2.SecondaryRules = new DrawRulesModel()
            {
                UpperRange = 17,
                LowerRange = 9,
                AmountOfNumbers = 2
            };

            _draws.Add(draw2);
        }

        public void CreateDraw(DrawDetailsModel details)
        {
            _logger.LogInformation("{0} running {1} for Draw: {2} ", this.GetType().Name, nameof(this.CreateDraw), details.Name);
            _draws.Add(new DrawModel(){Details = details});
        }

        public DrawDetailsModel GetDrawDetails(string drawName)
        {
            var draw = _draws.FirstOrDefault(x=> x.Details.Name == drawName);
            _logger.LogInformation("{0} running {1} for Draw: {2} ", this.GetType().Name, nameof(this.GetDrawDetails), drawName);
            if (draw == null)
            {
                 return null;
            }
            else
            {
                return draw.Details;
            }
        }

        public DrawDetailsModel[] SearchDraws(DateTime searchDate)
        {
            _logger.LogInformation("{0} running {1} for : {2} ", this.GetType().Name, nameof(this.SearchDraws), searchDate.ToString());
            var drawsQuery = from drawModel in _draws
                 where drawModel.Details.DrawDate.Date == searchDate.Date
                 select drawModel.Details;

            return drawsQuery.ToArray();

        }

        public void UpdateDrawResults(string drawName, DrawResultsModel results)
        {
            _logger.LogInformation("{0} running {1} for Draw: {2} ", this.GetType().Name, nameof(this.UpdateDrawResults),drawName);
            var drawModel = CheckDrawNotNull(GetDrawModel(drawName));

            drawModel.Results = results;
        }

        private DrawModel GetDrawModel(string drawName)
        {
            _logger.LogInformation("{0} running {1} for Draw: {2} ", this.GetType().Name, nameof(this.GetDrawModel), drawName);
            return _draws.FirstOrDefault(x=> x.Details.Name == drawName);
        }

        private DrawModel CheckDrawNotNull(DrawModel drawModel)
        {
            if(drawModel == null)
            {
                throw new InvalidOperationException("Draw "+drawModel.Details.Name+" does not exist");
            }
            else
            {
                return drawModel;
            }
        }
    }
}