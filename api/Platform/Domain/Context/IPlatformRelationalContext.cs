using Microsoft.EntityFrameworkCore;
using Platform.Domain.Entity;

namespace Platform.Domain.Context;

public interface IPlatformRelationalContext
{

    DbSet<Status>? Status { get; set; }
    DbSet<Project>? Projects { get; set; }

    Task<int?> CommitAsync();

}
