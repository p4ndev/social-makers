using Feedback.Domain.Entity;
using MongoDB.Driver;

namespace Feedback.Domain.Context;

public interface IShortlistDocumentContext
{

    IMongoCollection<Email> Emails { get; }

}