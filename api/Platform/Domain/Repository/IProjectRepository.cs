using Domain.Repository;
using Domain.Shared;
using Platform.Domain.Entity;

namespace Platform.Domain.Repository;

public interface
    IProjectRepository : IRepository,
        ICanInsert<Project, int?>,
        ICanSelect<IList<Project>>{ }
