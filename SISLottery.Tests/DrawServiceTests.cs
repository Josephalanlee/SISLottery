using Microsoft.Extensions.Logging;
using SISLottery.Draw;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Xunit;

namespace SISLottery.Tests
{
    /// <summary>
    /// Test the results validation of the DrawService.
    /// You can see the creation of 'Draw1' in the repository code.
    /// </summary>
    public class DrawServiceTests
    {
        DrawService _drawService;

        public const string TEST_DRAW_NAME = "Draw1";

        public DrawServiceTests()
        {
            LoggerFactory f = new LoggerFactory();
            f.AddDebug();
            this._drawService = new DrawService(new DrawRepository(f.CreateLogger<DrawRepository>()),f.CreateLogger<DrawService>());

        }

        [Fact]
        public void DRAW_VALIDATION_INVALID_ON_OUT_OF_RANGE()
        {
            var drawResults = new DrawResultsModel();
            drawResults.PrimaryResults =new int[] {12,13,14,15,1601};
            drawResults.SecondaryResults = new int[] { 12, 13 };

            var validationResults = _drawService.UpdateResults(TEST_DRAW_NAME, drawResults);

            Assert.False(validationResults.isValid);
        }

        [Fact]
        public void DRAW_VALIDATION_SECONDARY_INVALID_ON_OUT_OF_RANGE()
        {
            var drawResults = new DrawResultsModel();
            drawResults.PrimaryResults = new int[] { 12, 13, 14, 15, 16 };
            drawResults.SecondaryResults = new int[] { 466, 13 };

            var validationResults = _drawService.UpdateResults(TEST_DRAW_NAME, drawResults);

            Assert.False(validationResults.isValid);
        }

        [Fact]
        public void DRAW_VALIDATION_VALID()
        {
            var drawResults = new DrawResultsModel();
            drawResults.PrimaryResults = new int[] { 12, 13, 14, 15, 16 };
            drawResults.SecondaryResults = new int[] { 9, 10 };

            var validationResults = _drawService.UpdateResults(TEST_DRAW_NAME, drawResults);

            Assert.True(validationResults.isValid);
        }
    }
}
