namespace Media.Domain.Response;

public class SignatureResponse{
    
    public string?  Eager       { get; set; }
    public string?  Signature   { get; set; }
    public string?  Path        { get; set; }
    public long?    Timestamp   { get; set; }

};
