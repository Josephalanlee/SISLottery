namespace SISLottery.Draw
{
    using System;

    ///<summary> Represents an abstraction of a lottery draw
   public class DrawResultsModel
   {
        public int[] PrimaryResults
        {get; set;}

        public int[] SecondaryResults
        {get; set;}

        public override string ToString()
        {

            string primary = this.PrimaryResults == null ? "null" : string.Join(",",this.PrimaryResults);
            string secondary = this.SecondaryResults == null ? "null" : string.Join(",", this.SecondaryResults);

            return  "primary: "+primary +" | "+"secondary: "+ secondary;
        }


    }


}
