using Platform.Domain.Repository;
using Microsoft.AspNetCore.Mvc;
using Platform.Domain.Entity;

namespace Platform.Controllers;

[ApiController]
[Route("project")]
[ProducesResponseType(StatusCodes.Status406NotAcceptable)]
[ProducesResponseType(StatusCodes.Status500InternalServerError)]
public class ProjectController : ControllerBase{

    private readonly ILogger<ProjectController> _logger;
    private readonly IProjectRepository _repository;

    public ProjectController(ILogger<ProjectController> logger, IProjectRepository repository){
        _logger     = logger;
        _repository = repository;
    }

    [HttpGet]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public async Task<ActionResult<IList<Project>>> Get(CancellationToken token) {
        try{

            var result = await _repository.FindAsync(token);
            return (result.Count > 0 ? Ok(result) : NotFound());

        } catch (Exception ex) {

            _logger.LogError(ex.Message);
            return BadRequest();

        }
    }

    [HttpPost]
    [ProducesResponseType(StatusCodes.Status201Created)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    public async Task<ActionResult<int?>> Post([FromBody] Project? model, CancellationToken token) {
        try { 

            if (model is null) {
                _logger.LogInformation("No input data provided");
                return BadRequest();
            }

            var result = await _repository.AddAsync(model!, token);
            return StatusCode(result.HasValue ? 201 : 406, result);

        } catch (Exception ex) {

            _logger.LogError(ex.Message);
            return BadRequest();

        }
    }

}