using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Serilog;

namespace Infrastructure.Ops;

public static class LogContext {

    public static void Initialize(ILoggingBuilder loggingBuilder, IConfiguration configuration)
        => loggingBuilder.AddSerilog(
            new LoggerConfiguration()
                .WriteTo.Seq(configuration.GetConnectionString("Log"))
                .Enrich.WithProperty("Application",
                    configuration.GetSection("Name").Value
                ).CreateLogger()
        );

}
