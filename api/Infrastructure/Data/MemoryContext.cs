using Microsoft.Extensions.Configuration;
using StackExchange.Redis;

namespace Infrastructure.Data;

public class MemoryContext {

    protected IConnectionMultiplexer _con;

    public MemoryContext(string connection)
        => _con = ConnectionMultiplexer.Connect(connection);

    public MemoryContext(IConfiguration configuration)
        : this(configuration.GetConnectionString("Memory")) { }

}