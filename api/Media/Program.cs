using Media.Domain.Repository;
using Feedback.Infrastructure;
using Media.Domain.Context;
using Media.Infrastructure;
using Infrastructure.Ops;
using Media.Repository;

var builder = WebApplication.CreateBuilder(args);

LogContext.Initialize(builder.Logging, builder.Configuration);

builder.Services.AddCors(o =>
    o.AddDefaultPolicy(
        p => p.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod()
    )
);

builder.Services.AddSingleton<IImageDocumentContext>(new ImageDocumentContext(builder.Configuration));
builder.Services.AddSingleton<IImageContext>(new ImageContext(builder.Configuration));
builder.Services.AddScoped<IImageRepository, ImageRepository>();

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