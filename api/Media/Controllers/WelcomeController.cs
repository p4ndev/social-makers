using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR.Client;

namespace Media.Controllers;

[ApiController]
[Route("[controller]")]
public class WelcomeController : ControllerBase{

    [HttpGet]
    public async Task<ActionResult<IList<string>>> GetAsync() {

        // TODO: Inject connection as a Singleton

        string uri = "http://localhost:5266/test";

        await using var con = new HubConnectionBuilder()
            .WithUrl(uri, o => {
                o.AccessTokenProvider = async () 
                    => await Task.FromResult("sdfdsfsdfsfsdf");
            }).Build();

        await con.StartAsync();

        var o = new List<string>();

        await foreach (string m in con.StreamAsync<string>("StreamingAsync")) {
            o.Add(m);
            if (o.Count >= 5) break;
        }
        
        return Ok(o);

    }

}