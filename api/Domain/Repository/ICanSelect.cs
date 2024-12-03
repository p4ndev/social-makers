namespace Domain.Repository;

public interface ICanSelect<TInput, TOutput>{
    Task<TOutput> FindAsync(TInput model, CancellationToken token = default);
}

public interface ICanSelect<TOutput>{
    Task<TOutput> FindAsync(CancellationToken token = default);
}