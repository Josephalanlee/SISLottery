
using System;
using System.Collections.Generic;
using System.Linq;

namespace SISLottery.Draw
{

    public class DrawRulesModel
    {
        public class DrawRulesValidationResultsModel
        {
            public DrawRulesValidationResultsModel()
            {
                this.PrimaryErrors = new string[0];
                this.SecondaryErrors = new string[0];
            }


            public bool isValid
            {
                get
                {
                    return this.PrimaryErrors.Length == 0 && this.SecondaryErrors.Length == 0;
                }
            }
            public string[] PrimaryErrors
            { get; set; }

            public string[] SecondaryErrors
            { get; set; }
        }

        public int AmountOfNumbers
        {get; set;}

        public int LowerRange
        {get;set;}

        public int UpperRange
        {
            get; set;
        }


        /// <summary>
        /// Checks that the given numbers fall within the validation rules.
        /// </summary>
        /// <param name="results"></param>
        /// <returns>An empty array if the given numbers are valid</returns>
        public string[] ValidateResults(int[] results)
        {
            List<string> errors = new List<string>();
            //Make sure we don't have any duplicate numbers
            if(results.Distinct().Count() < results.Length)
            {
               errors.Add("There are duplicate numbers in the results");
            }
            else if(results.Length!=this.AmountOfNumbers)
            {
                errors.Add("Expecting " + this.AmountOfNumbers + " results, but there are " + results.Length);
            }
            else
            {
                for(int i=0; i<results.Length;i++)
                {
                     if(results[i] <LowerRange || results[i] > UpperRange)
                     {
                        errors.Add(results[i]+" is outside of the allowed number range");
                     }
                }
            }

            return errors.ToArray();

        }


    }
}