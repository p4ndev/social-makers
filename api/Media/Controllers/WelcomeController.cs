using Microsoft.AspNetCore.Mvc;

namespace Media.Controllers;

[ApiController]
[Route("welcome")]
public class WelcomeController : ControllerBase{

    private readonly ILogger<WelcomeController> _logger;

    public WelcomeController(ILogger<WelcomeController> logger) => _logger = logger;

    [HttpGet]
    public IActionResult Welcome() {
        _logger.LogInformation("Info came from Controller");
        return Ok("Welcome");
    }

    [HttpGet("{uid}/{pid}")]
    public IActionResult Input([FromRoute] int uid, [FromRoute] int pid){
        _logger.LogInformation("Custom data from user calls: {uid} and {pid}", uid, pid);
        return Ok("Data extracted");
    }

}