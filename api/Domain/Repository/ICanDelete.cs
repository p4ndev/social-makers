namespace Domain.Repository;

public interface ICanDelete<TInput, TOutput>{
    Task<TOutput> RemoveAsync(TInput model, CancellationToken token = default);
}