using Domain.Repository;
using Domain.Shared;

namespace Feedback.Domain.Repository;

public interface
    IReactionRepository : IRepository,
        ICanSelect<string, long?>,
        ICanUpdate<string, long?>{ }
