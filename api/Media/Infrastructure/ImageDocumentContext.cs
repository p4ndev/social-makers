using Media.Domain.Context;
using Infrastructure.Data;
using Media.Domain.Entity;
using MongoDB.Driver;

namespace Feedback.Infrastructure;

public class ImageDocumentContext : DocumentContext, IImageDocumentContext {

    public IMongoCollection<Image> Images { get; set; }

    public ImageDocumentContext(IConfiguration configuration) : base(configuration)
        => Images = _db.GetCollection<Image>(configuration.GetConnectionString("DocumentImageCollection"));

}
