using Feedback.Domain.Entity;
using Domain.Repository;
using Domain.Shared;

namespace Feedback.Domain.Repository;

public interface
    IShortlistRepository : IRepository,
        ICanInsert<Email, bool>,
        ICanSelect<string, Email?>,
        ICanDelete<Email, bool>{ }
