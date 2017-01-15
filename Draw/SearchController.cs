using System;
using Microsoft.AspNetCore.Mvc;

namespace SISLottery.Draw
{
    [Route("api/draws/[controller]")]
    public class SearchController : Controller
    {
        private IDrawService _service;

        public SearchController(IDrawService service)
        {
            _service = service;
        }
      

        [HttpGet()]
        public ActionResult Get([FromQueryAttribute] DateTime drawDate)
        {
            return new OkObjectResult(_service.SearchByDate(drawDate));
        }

       
    }
}