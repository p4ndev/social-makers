using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.IdentityModel.Tokens;
using System.Security.Claims;
using Middlewares;
using Services;
using Serilog;

var builder = WebApplication.CreateBuilder(args);
var domain = builder.Configuration["Auth0:Protocol"] + builder.Configuration["Auth0:Domain"];
var full = domain + builder.Configuration["Auth0:Audience"];

builder.Logging
    .AddSerilog(
        new LoggerConfiguration()
            .WriteTo.Seq("http://localhost:5341")
            .Enrich.WithProperty("Application", "Shortlist-API")
                .CreateLogger()
    );

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services
    .AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(o => {        
        o.Authority = domain;
        o.Audience = full;        
        o.TokenValidationParameters = new TokenValidationParameters {
            NameClaimType = ClaimTypes.NameIdentifier
        };
    });

builder.Services.AddAuthorization(o => {
    o.AddPolicy("read:messages",
        p =>
            p.Requirements.Add(
                new HasScopeRequirement("read:messages", domain)
        )
    );
});

builder.Services.AddSingleton<IAuthorizationHandler, HasScopeHandler>();

var app = builder.Build();

if (app.Environment.IsDevelopment()){
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseAuthentication();
app.UseAuthorization();

// [GET] /welcome
app.MapGet("/welcome", (ILogger<Program> logger) => {
    logger.LogInformation("Information came from minimal action controller");
    return "Welcome";
}).WithName("GetWelcomeMessage");

// [GET] /welcome-private
app.MapGet("/welcome-private", () => "Private welcome message")
    .WithName("GetPrivateWelcomeMessage").RequireAuthorization();

// TODO: [GET] /welcome-private-scoped | Should implement policy on Auth0
app.MapGet("/welcome-private-scoped", () => "Private scoped welcome message")
    .WithName("GetPrivateScopedWelcomeMessage").RequireAuthorization("read:messages");

app.Run();
