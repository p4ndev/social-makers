using Microsoft.AspNetCore.Mvc;
using Media.Domain.Repository;
using Media.Domain.Response;
using Media.Domain.Entity;

namespace Media.Controllers;

[ApiController]
[Route("image")]
[ProducesResponseType(StatusCodes.Status406NotAcceptable)]
[ProducesResponseType(StatusCodes.Status500InternalServerError)]
public class ImageController : ControllerBase {

    private readonly IImageRepository _repository;

    public ImageController(IImageRepository repository)
        => _repository = repository;

    [HttpGet("signature")]
    [ProducesResponseType(StatusCodes.Status200OK)]
    public ActionResult<SignatureResponse> Signature()
        => Ok(_repository.Sign());

    [HttpPost]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    [ProducesResponseType(StatusCodes.Status406NotAcceptable)]
    public async Task<IActionResult> Post([FromBody] IList<Image> images) {
        try {
            if (images.Count <= 0) return StatusCode(406);
            await _repository.AddAsync(images);
            return Ok();
        } catch (Exception ex) {
            return BadRequest(ex.Message);
        }
    }

    [HttpGet("{pid}/thumbnail")]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    public async Task<ActionResult<string>> Thumbnail([FromRoute] int? pid) {

        if (!pid.HasValue) return BadRequest();

        var images = await _repository.FindAsync(pid.Value);

        if (images.Count <= 0) return NotFound();

        var thumbnail = images.OrderBy(o => o.Order).FirstOrDefault();

        return StatusCode(
            thumbnail is null ? 404 : 200,
            thumbnail!.EagerSource!.ToString()
        );

    }

    [HttpGet("{pid}")]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    public async Task<ActionResult<IList<Image>>> Image([FromRoute] int? pid){

        if (!pid.HasValue) return BadRequest();

        var results = await _repository.FindAsync(pid.Value);

        return StatusCode(results.Count <= 0 ? 404 : 200, results.OrderBy(o => o.Order));

    }

}