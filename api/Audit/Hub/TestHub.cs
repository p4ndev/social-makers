using InfluxDB.Client;
using InfluxDB.Client.Api.Domain;
using InfluxDB.Client.Writes;
using Microsoft.AspNetCore.SignalR;

// TODO: Implement Authorize attribute with basic auth

public class TestHub : Hub{

    private readonly IConfiguration _config;

    public TestHub(IConfiguration config){
        _config = config;
    }

    public async IAsyncEnumerable<string> StreamingAsync() {
        while (true) {
            yield return "Audit @ " + DateTime.UtcNow.ToLongTimeString();
            await Task.Delay(8000);
        }
    }

    public async Task<bool> History() {

        using var client = new InfluxDBClient("http://localhost:5266", _config.GetValue<string>("InfluxDB:Token"));

        using var writeApi = client.GetWriteApi();

        var point = PointData
                        .Measurement("startup")
                        .Tag("section", "test")
                        .Field("value", "code_csharp")
                        .Timestamp(DateTime.UtcNow.AddSeconds(-10), WritePrecision.Ns);

        writeApi.WritePoint(point, "load_services", "SocialMakers");

        return await Task.FromResult(true);

    }

}
