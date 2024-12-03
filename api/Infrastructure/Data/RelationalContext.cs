using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Data;

public class RelationalContext : DbContext{

    public RelationalContext(DbContextOptions options) : base(options){}

}
