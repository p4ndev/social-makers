using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace Media.Domain.Entity;

public class Image{
    
    public ObjectId     Id          { get; set; }

    public int          Order       { get; set; }

    [BsonRequired]
    public int?         ProjectId   { get; set; }

    [BsonRequired]
    public string?      EagerSource   { get; set; }

    [BsonRequired]
    public string?      Source      { get; set; }

}