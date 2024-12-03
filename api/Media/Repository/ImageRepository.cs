using Media.Domain.Repository;
using Media.Domain.Response;
using Media.Domain.Context;
using Media.Domain.Entity;
using MongoDB.Driver;

namespace Media.Repository;

public class ImageRepository : IImageRepository{

    private readonly IImageContext          _multimediaContext;
    private readonly IImageDocumentContext  _documentContext;
    private readonly SignatureResponse      _model;

    public ImageRepository(IImageContext imageContext, IImageDocumentContext documentContext) {
        _documentContext    = documentContext;
        _multimediaContext  = imageContext;
        _model              = new();
    }

    public SignatureResponse Sign() {

        _model.Timestamp    = ((DateTimeOffset)DateTime.UtcNow).ToUnixTimeSeconds();
        _model.Path         = Guid.NewGuid().ToString();
        _model.Eager        = "w_250,h_250,c_pad";

        var settings = new Dictionary<string, object>();

        settings.Add("eager",           _model.Eager!);
        settings.Add("public_id",       _model.Path);
        settings.Add("resource_type",   "image");
        settings.Add("timestamp",       _model.Timestamp);

        _model.Signature = _multimediaContext.GetSignature(settings);

        return _model;

    }

    public async Task AddAsync(IList<Image> model, CancellationToken token = default)
        => await _documentContext.Images.InsertManyAsync(model, null, token);

    public async Task<IList<Image>> FindAsync(int model, CancellationToken token = default){
        var filter = Builders<Image>.Filter.Eq(f => f.ProjectId, model);
        var results = await _documentContext.Images.FindAsync(filter);
        return await results.ToListAsync();
    }

}
