namespace Media.Domain.Repository;

public interface ICanSign<TOutput>{

    TOutput Sign();

}
