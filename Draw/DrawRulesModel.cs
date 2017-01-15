
using System;
using System.Linq;

namespace SISLottery.Draw
{
    
    public class DrawRulesModel
    {
        

        public int AmountOfNumbers
        {get; set;}

        public int LowerRange
        {get;set;}

        public int UpperRange
        {
            get; set;
        }

        ///<summary> Generates numbers against the relevant rule parameters.!--
        /// Note: These numbers are not validated in code as unit testing will prove their correctness.
        public int[] RunDraw()
        {
            int[] numbers = new int[this.AmountOfNumbers];

            for(int i = 0; i<numbers.Length;i++)
            {
                Random r = new Random(Guid.NewGuid().GetHashCode());

                numbers[i] =  r.Next(LowerRange,UpperRange); 
            }

            return numbers;
        }

        public bool ValidateResults(int[] results)
        {
            //Make sure we don't have any duplicate numbers
            if(results.Distinct().Count() < results.Length)
            {
                return false;
            }
            else if(results.Length<this.AmountOfNumbers)
            {
                return false;
            }
            else
            {
                for(int i=0; i<results.Length;i++)
                {
                     if(results[i] <LowerRange || results[i] > UpperRange)
                     {
                         return false;
                     }
                }
            }

            return true;

        }


    }
}