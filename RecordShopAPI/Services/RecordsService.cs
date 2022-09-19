using RecordShopAPI.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace RecordShopAPI.Services;

public class RecordsService
{
    private readonly IMongoCollection<Record> _recordsCollection;

    public RecordsService(
        IOptions<RecordShopAPIDatabaseSettings> recordShopAPIDatabseSettings)
    {
        var mongoClient = new MongoClient(
            recordShopAPIDatabseSettings.Value.ConnectionString);

        var mongoDatabase = mongoClient.GetDatabase(
            recordShopAPIDatabseSettings.Value.DatabaseName);

        _recordsCollection = mongoDatabase.GetCollection<Record>(
            recordShopAPIDatabseSettings.Value.RecordsCollectionName);
    }

    public async Task<List<Record>> GetAsync() =>
        await _recordsCollection.Find(_ => true).ToListAsync();

    public async Task<Record?> GetAsync(string id) =>
        await _recordsCollection.Find(x => x.Id == id).FirstOrDefaultAsync();

    public async Task CreateAsync(Record newRecord) =>
        await _recordsCollection.InsertOneAsync(newRecord);

    public async Task UpdateAsync(string id, Record updateRecord) =>
        await _recordsCollection.ReplaceOneAsync(x => x.Id == id, updateRecord);

    public async Task RemoveAsync(string id) =>
        await _recordsCollection.DeleteOneAsync(x => x.Id == id);
}