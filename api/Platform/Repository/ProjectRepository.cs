using Microsoft.EntityFrameworkCore;
using Platform.Domain.Repository;
using Platform.Domain.Context;
using Platform.Domain.Entity;

namespace Platform.Repository;

public class ProjectRepository : IProjectRepository{

    private readonly IPlatformRelationalContext _context;

    public ProjectRepository(IPlatformRelationalContext context)
        => _context = context;

    public async Task<int?> AddAsync(Project model, CancellationToken token = default){
        
        // TODO: Remove when auth0 done
        model.UserId = "0123456789";

        model.CreatedAt = DateTime.Now;
        await _context.Projects!.AddAsync(model);
        return (await _context.CommitAsync() > 0 ? model.Id : null);
    }

    public async Task<IList<Project>> FindAsync(CancellationToken token = default)
        => await _context.Projects!.AsNoTracking().OrderByDescending(x => x.Id).ToListAsync(token);

}