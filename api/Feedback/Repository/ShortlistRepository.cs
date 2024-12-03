using Feedback.Domain.Repository;
using Feedback.Domain.Context;
using Feedback.Domain.Entity;
using MongoDB.Driver;

namespace Feedback.Repository;

public class ShortlistRepository : IShortlistRepository{

    private readonly IShortlistDocumentContext _context;

    public ShortlistRepository(IShortlistDocumentContext context)
        => _context = context;

    public async Task<bool> AddAsync(Email model, CancellationToken token = default) {
        var entity = await FindAsync(model.Content, token);
        if (entity is not null) return false;
        await _context.Emails.InsertOneAsync(model, null, token);
        return true;
    }

    public async Task<Email?> FindAsync(string model, CancellationToken token = default) {
        var filter = Builders<Email>.Filter.Eq(e => e.Content, model);
        var document = await _context.Emails.FindAsync(filter, null, token);
        return await document.FirstOrDefaultAsync();
    }

    public async Task<bool> RemoveAsync(Email model, CancellationToken token = default) {
        var builder = Builders<Email>.Filter;
        var filters = builder.Eq(e => e.Content, model.Content) & builder.Eq(e => e.ProjectId, model.ProjectId);
        var result = await _context.Emails.FindOneAndDeleteAsync(filters, null, token);
        return !(result is null);
    }

}