namespace Media.Domain.Context;

public interface IImageContext{

    string GetSignature(IDictionary<string, object> options);

}
