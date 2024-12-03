using StackExchange.Redis;

namespace Feedback.Domain.Context;

public interface IReactionMemoryContext
{

    IDatabase? Likes { get; }

}