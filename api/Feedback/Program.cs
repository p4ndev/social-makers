using Feedback.Infrastructure;
using Feedback.Repository;
using Infrastructure.Ops;
using Feedback.Domain.Context;
using Feedback.Domain.Repository;

var builder = WebApplication.CreateBuilder(args);

LogContext.Initialize(builder.Logging, builder.Configuration);

builder.Services.AddCors(o =>
    o.AddDefaultPolicy(
        p => p.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod()
    )
);

builder.Services.AddSingleton<IReactionMemoryContext>(new ReactionMemoryContext(builder.Configuration));
builder.Services.AddSingleton<IShortlistDocumentContext>(new ShortlistDocumentContext(builder.Configuration));

builder.Services.AddScoped<IReactionRepository, ReactionRepository>();
builder.Services.AddScoped<IShortlistRepository, ShortlistRepository>();

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
