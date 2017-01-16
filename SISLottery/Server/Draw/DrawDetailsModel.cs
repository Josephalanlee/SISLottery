using System;
namespace SISLottery.Draw
{
        public class DrawDetailsModel
        {
            public string Name
            {get; set;}
            
            public string Description
            {get; set;}

            public DateTime DrawDate
            {get; set;}

             public DrawRulesModel PrimaryRules
        {get;set;}

        public DrawRulesModel SecondaryRules
        {get; set;}
        }
  
}
