using Microsoft.AspNetCore.Mvc;

namespace Reaction.Controllers;

[ApiController]
[Route("[controller]")]
[ProducesResponseType(StatusCodes.Status406NotAcceptable)]
[ProducesResponseType(StatusCodes.Status500InternalServerError)]
public class ReactionController : ControllerBase{
    
    private readonly ILogger<ReactionController> _logger;

    public ReactionController(ILogger<ReactionController> logger) => _logger = logger;

    public void ValidateModel(int? pid) {

        if (!pid.HasValue || pid.Value <= 0)
            throw new ArgumentNullException("No project id or negative entry");

        if (pid.Value.Equals(300))
            throw new ArgumentException("Invalid fake product id");

    }

    [HttpGet]
    [ProducesResponseType(StatusCodes.Status200OK)]
    public ActionResult<int> Counter([FromQuery] int? pid) {
        try {

            ValidateModel(pid);

            return Ok(DateTime.UtcNow.Millisecond);

        } catch (ArgumentNullException msg) {

            _logger.LogError(msg.Message);
            return BadRequest();

        } catch (ArgumentException msg) {

            _logger.LogWarning(msg.Message);
            return StatusCode(StatusCodes.Status406NotAcceptable);

        }
    }

    [HttpDelete]
    [ProducesResponseType(StatusCodes.Status200OK)]
    public IActionResult Dislike([FromBody] int? pid) {
        try {

            ValidateModel(pid);

            _logger.LogInformation("{0} disliked", (pid ?? pid!.Value));

            return Ok();

        } catch (ArgumentNullException msg) {

            _logger.LogError(msg.Message);
            return BadRequest();

        } catch (ArgumentException msg) {

            _logger.LogWarning(msg.Message);
            return StatusCode(406);

        }
    }

    [HttpPost]
    [ProducesResponseType(StatusCodes.Status201Created)]
    public IActionResult Like([FromBody] int? pid) {
        try {

            ValidateModel(pid);

            _logger.LogInformation("{0} liked", (pid ?? pid!.Value));

            return StatusCode(201);

        } catch (ArgumentNullException msg) {

            _logger.LogError(msg.Message);
            return BadRequest();

        } catch (ArgumentException msg) {

            _logger.LogWarning(msg.Message);
            return StatusCode(406);

        }
    }

}