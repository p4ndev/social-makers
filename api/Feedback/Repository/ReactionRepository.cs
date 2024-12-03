using Feedback.Domain.Repository;
using Feedback.Domain.Context;

namespace Feedback.Repository;

public class ReactionRepository : IReactionRepository {

    private readonly IReactionMemoryContext _context;

    public ReactionRepository(IReactionMemoryContext context) => _context = context;

    public async Task<long?> FindAsync(string model, CancellationToken token = default) {
        if (_context.Likes is null) return null;
        var result = await _context.Likes.StringGetAsync(model);
        if (!result.HasValue) return null;
        return Convert.ToInt64(result);
    }

    public async Task<long?> ReplaceAsync(string model, CancellationToken token = default) {
        if (_context.Likes is null) return null;
        return await _context.Likes.StringIncrementAsync(model);
    }

}
