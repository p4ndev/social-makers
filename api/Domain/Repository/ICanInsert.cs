namespace Domain.Repository;

public interface ICanInsert<TInput, TOutput>{
    Task<TOutput> AddAsync(TInput model, CancellationToken token = default);
}

public interface ICanInsert<TInput>{
    Task AddAsync(TInput model, CancellationToken token = default);
}