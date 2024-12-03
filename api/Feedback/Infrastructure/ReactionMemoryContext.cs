using Feedback.Domain.Context;
using Infrastructure.Data;
using StackExchange.Redis;

namespace Feedback.Infrastructure;

public class ReactionMemoryContext : MemoryContext, IReactionMemoryContext{

    public IDatabase? Likes { get; private set; }

    public ReactionMemoryContext(IConfiguration configuration) : base(configuration){
        Likes = _con.GetDatabase(int.Parse(configuration.GetConnectionString("MemoryLikeDatabase")));
    }

}
