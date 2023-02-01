using Microsoft.AspNetCore.Mvc;

namespace SignalRDemo.Controllers
{
    public class ClientController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
