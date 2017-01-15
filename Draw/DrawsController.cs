using System;
using Microsoft.AspNetCore.Mvc;

namespace SISLottery.Draw
{
    [Route("api/[controller]")]
    public class DrawsController : Controller
    {
        private IDrawService _service;

        public DrawsController(IDrawService service)
        {
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
        public ActionResult Get([FromRouteAttribute] string drawName, [FromBodyAttribute] DrawResultsModel results)
        {
            _service.UpdateResults(drawName,results);
            return Ok();
        }

        [HttpGet("/throwerror")]
        public ActionResult Get()
        {
            throw new Exception("This is a test error");
        } 

        



       
    }
}