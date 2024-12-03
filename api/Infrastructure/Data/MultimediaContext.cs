using Microsoft.Extensions.Configuration;
using CloudinaryDotNet;

namespace Infrastructure.Data;

public abstract class MultimediaContext{

    private readonly Account        _acc;
    protected readonly Cloudinary    _con;

    public MultimediaContext(string accountName, string apiKey, string apiSecret) {
        _acc = new Account(accountName, apiKey, apiSecret);
        _con = new(_acc);
    }

    public MultimediaContext(IConfiguration configuration)
        : this(
              configuration.GetConnectionString("MultimediaCloudName"),
              configuration.GetConnectionString("MultimediaApiKey"),
              configuration.GetConnectionString("MultimediaApiSecret")
        ){ }

}
