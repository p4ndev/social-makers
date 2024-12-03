namespace Domain.Repository;

public interface ICanUpdate<TInput, TOutput>{
    Task<TOutput> ReplaceAsync(TInput model, CancellationToken token = default);
}