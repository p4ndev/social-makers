using Microsoft.Extensions.Configuration;
using MongoDB.Driver;

namespace Infrastructure.Data;

public abstract class DocumentContext{

    protected MongoClient       _con;
    protected IMongoDatabase    _db;

    public DocumentContext(string connection, string database) {
        _con = new MongoClient(connection);
        _db = _con.GetDatabase(database);
    }

    public DocumentContext(IConfiguration configuration) 
        : this(
              configuration.GetConnectionString("Document"), 
              configuration.GetConnectionString("DocumentDatabase")
        ) { }

}
