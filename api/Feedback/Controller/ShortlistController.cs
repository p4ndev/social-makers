using Microsoft.AspNetCore.Mvc;
using CrossCutting;
using Feedback.Domain.Entity;
using Feedback.Domain.Repository;

namespace Feedback.Controller;

[ApiController]
[Route("feedback")]
[ProducesResponseType(StatusCodes.Status406NotAcceptable)]
[ProducesResponseType(StatusCodes.Status500InternalServerError)]
public class ShortlistController : ControllerBase{
    
    private readonly ILogger<ShortlistController>    _logger;
    private readonly IShortlistRepository           _repository;

    public ShortlistController(ILogger<ShortlistController> logger, IShortlistRepository repository) {
        _logger = logger;
        _repository = repository;
    }

    [HttpPost("/subscribe")]
    [ProducesResponseType(StatusCodes.Status201Created)]
    [ProducesResponseType(StatusCodes.Status409Conflict)]
    public async Task<IActionResult> Post([FromBody] Email? model, CancellationToken token) {
        try {

            if (model is null) return StatusCode(406);

            Validator.Id(model.ProjectId);
            Validator.Email(model.Content);
            
            return StatusCode(await _repository.AddAsync(model!, token) ? 201 : 409);

        } catch (ArgumentNullException msg) {

            _logger.LogError(msg.Message);
            return BadRequest();

        } catch (ArgumentException msg) {

            _logger.LogWarning(msg.Message);
            return StatusCode(406);

        }
    }
    
    [HttpDelete("/subscribe")]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public async Task<IActionResult> Delete([FromBody] Email? model, CancellationToken token) {
        try {

            if (model is null) return StatusCode(406);

            Validator.Id(model.ProjectId);
            Validator.Email(model.Content);

            return StatusCode(await _repository.RemoveAsync(model!, token) ? 200 : 404);

        } catch (ArgumentNullException msg) {

            _logger.LogError(msg.Message);
            return BadRequest();

        } catch (ArgumentException msg) {

            _logger.LogWarning(msg.Message);
            return StatusCode(406);

        }
    }

}