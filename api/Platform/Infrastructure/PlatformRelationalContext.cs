using Microsoft.EntityFrameworkCore;
using Platform.Domain.Context;
using Platform.Domain.Entity;
using Infrastructure.Data;

namespace Platform.Infrastructure;

public class PlatformRelationalContext : RelationalContext, IPlatformRelationalContext {

    public DbSet<Status>?   Status   { get; set; }
    public DbSet<Project>?  Projects { get; set; }

    public PlatformRelationalContext(DbContextOptions options) : base(options) { }

    protected override void OnModelCreating(ModelBuilder builder){

        builder.Entity<Status>().HasData(new Status() { Id = 1, Name = "Em Andamento" });
        builder.Entity<Status>().HasData(new Status() { Id = 2, Name = "Pausado" });
        builder.Entity<Status>().HasData(new Status() { Id = 3, Name = "Concluído" });

    }

    public async Task<int?> CommitAsync() => await base.SaveChangesAsync();

}