using Media.Domain.Context;
using Infrastructure.Data;

namespace Media.Infrastructure;

public class ImageContext : MultimediaContext, IImageContext{

    public ImageContext(IConfiguration configuration)
        : base(configuration) { }

    public string GetSignature(IDictionary<string, object> options)
        => _con.Api.SignParameters(options);

}
