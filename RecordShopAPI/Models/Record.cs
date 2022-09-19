using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace RecordShopAPI.Models;

public class Record
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string? Id { get; set; }

    [BsonElement("Name")]
    public string Album { get; set; } = null!;
    public string Artist { get; set; } = null!;
    public string Genre { get; set; } = null!;
}