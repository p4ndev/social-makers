using Microsoft.AspNetCore.Mvc;
using CrossCutting;
using Feedback.Domain.Repository;

namespace Feedback.Controller;

[ApiController]
[Route("feedback")]
[ProducesResponseType(StatusCodes.Status406NotAcceptable)]
[ProducesResponseType(StatusCodes.Status500InternalServerError)]
public class ReactionController : ControllerBase{
    
    private readonly ILogger<ReactionController>    _logger;
    private readonly IReactionRepository            _repository;

    public ReactionController(ILogger<ReactionController> logger, IReactionRepository repository) {
        _repository = repository;
        _logger = logger;
    }

    [HttpGet("/like/{projectId}")]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public async Task<ActionResult<long?>> Get([FromRoute] int? projectId) {
        try {

            Validator.Id(projectId);

            string key = projectId!.Value.ToString();
            var result = await _repository.FindAsync(key);

            return StatusCode((result is null ? 404 : 200), result);

        } catch (ArgumentNullException msg) {

            _logger.LogError(msg.Message);
            return BadRequest();

        } catch (ArgumentException msg) {

            _logger.LogWarning(msg.Message);
            return StatusCode(StatusCodes.Status406NotAcceptable);

        }
    }

    [HttpPost("/like")]
    [ProducesResponseType(StatusCodes.Status201Created)]
    public async Task<IActionResult> Post([FromBody] int? projectId) {
        try {

            Validator.Id(projectId);

            string key = projectId!.Value.ToString();
            var result = await _repository.ReplaceAsync(key);

            return StatusCode((result is null ? 500 : 201), result);

        } catch (ArgumentNullException msg) {

            _logger.LogError(msg.Message);
            return BadRequest();

        } catch (ArgumentException msg) {

            _logger.LogWarning(msg.Message);
            return StatusCode(406);

        }
    }

}