using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace Feedback.Domain.Entity;

public class Email{

    public ObjectId Id { get; set; }

    public int ProjectId { get; set; }

    [BsonRequired]
    public string Content { get; set; }

    public Email(string content)
        => Content = content;

}
