using Media.Domain.Entity;
using MongoDB.Driver;

namespace Media.Domain.Context;

public interface IImageDocumentContext{
    
    IMongoCollection<Image> Images { get; set; }

}
