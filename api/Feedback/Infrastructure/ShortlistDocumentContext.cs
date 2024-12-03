using Feedback.Domain.Context;
using Feedback.Domain.Entity;
using Infrastructure.Data;
using MongoDB.Driver;

namespace Feedback.Infrastructure;

public class ShortlistDocumentContext : DocumentContext, IShortlistDocumentContext {

    public IMongoCollection<Email> Emails { get; set; }

    public ShortlistDocumentContext(IConfiguration configuration) : base(configuration)
        => Emails = _db.GetCollection<Email>(configuration.GetConnectionString("DocumentShortlistCollection"));

}
