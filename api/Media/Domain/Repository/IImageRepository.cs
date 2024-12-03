using Media.Domain.Response;
using Media.Domain.Entity;
using Domain.Repository;

namespace Media.Domain.Repository;

public interface 
    IImageRepository : 
        ICanSign<SignatureResponse>,
        ICanInsert<IList<Image>>,
        ICanSelect<int, IList<Image>>{ }
