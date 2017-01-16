using System;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace SISLottery.Draw
{
    [Route("api/draws/[controller]")]
    public class SearchController : Controller
    {
        private IDrawService _service;
        private ILogger _logger;

        public SearchController(IDrawService service, ILogger<SearchController> logger)
        {
            _service = service;
            _logger = logger;
        }

        [HttpGet()]
        public ActionResult Get([FromQueryAttribute] DateTime drawDate)
        {

            return new OkObjectResult(_service.SearchByDate(drawDate));
        }


    }
}