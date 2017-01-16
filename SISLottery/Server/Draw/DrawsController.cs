using System;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace SISLottery.Draw
{
    [Route("api/[controller]")]
    public class DrawsController : Controller
    {
        private IDrawService _service;
        private ILogger _logger;

        public DrawsController(IDrawService service, ILogger<DrawRepository> logger)
        {
            _logger = logger;
            _service = service;
        }


        [HttpPost()]
        public ActionResult Post([FromBodyAttribute] DrawDetailsModel drawDetails)
        {

            _service.CreateDraw(drawDetails);
            return new OkResult();
        }

        [HttpGet("{drawName}")]
        public ActionResult Get([FromRouteAttribute] string drawName)
        {


            return new OkObjectResult(_service.GetDraw(drawName));
        }

        [HttpPut("{drawName}/results")]
        public ActionResult Put([FromRouteAttribute] string drawName, [FromBodyAttribute] DrawResultsModel results)
        {

            var validationErrors = _service.UpdateResults(drawName,results);
            if (validationErrors.isValid)
            {
                return Ok();
            }
            else
            {
                return StatusCode(520,validationErrors);
            }
        }

        [HttpGet("/throwerror")]
        public ActionResult Get()
        {
            throw new Exception("This is a test error");
        }






    }
}