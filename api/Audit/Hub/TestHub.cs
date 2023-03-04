using Microsoft.AspNetCore.SignalR;

// TODO: Implement Authorize attribute with basic auth
public class TestHub : Hub{        
    public async IAsyncEnumerable<string> StreamingAsync() {
        while (true) {
            yield return "Audit @ " + DateTime.UtcNow.ToLongTimeString();
            await Task.Delay(8000);
        }
    }
}
