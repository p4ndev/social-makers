using Microsoft.EntityFrameworkCore;
using Platform.Infrastructure;
using Platform.Repository;
using Infrastructure.Ops;
using Platform.Domain.Context;
using Platform.Domain.Repository;

var builder = WebApplication.CreateBuilder(args);

LogContext.Initialize(builder.Logging, builder.Configuration);

builder.Services.AddCors(o =>
    o.AddDefaultPolicy(
        p => p.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod()
    )
);

builder.Services.AddDbContext<IPlatformRelationalContext, PlatformRelationalContext>(
    o => o.UseSqlServer(builder.Configuration.GetConnectionString("Relational"))
);

builder.Services.AddScoped<IProjectRepository, ProjectRepository>();

builder.Services.AddControllers().AddJsonOptions(o => o.JsonSerializerOptions.PropertyNamingPolicy = null);
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

if (app.Environment.IsDevelopment()){
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();
app.UseCors();
app.Run();
