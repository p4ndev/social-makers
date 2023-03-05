using Microsoft.AspNetCore.Mvc;

namespace Media.Controllers;

[ApiController]
[Route("[controller]")]
public class WelcomeController : ControllerBase{

    [HttpGet]
    public IActionResult GetAsync() => Ok("Welcome");

}